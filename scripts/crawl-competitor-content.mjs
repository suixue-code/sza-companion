#!/usr/bin/env node
/**
 * Crawl competitor + open-source pages into .crawl-cache/content/
 *
 * Usage:
 *   node scripts/crawl-competitor-content.mjs           # fetch all sources
 *   node scripts/crawl-competitor-content.mjs --only=com  # competitor .com only
 *   node scripts/crawl-competitor-content.mjs --only=wiki # competitor wiki only (~20)
 *   node scripts/crawl-competitor-content.mjs --report    # gap report only (needs cache)
 */

import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseContentPage } from './lib/html-content-parser.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CONFIG_PATH = join(__dirname, 'content-crawl-sources.json');
const CACHE_DIR = join(ROOT, '.crawl-cache', 'content');
const INDEX_PATH = join(CACHE_DIR, 'index.json');

const args = new Set(process.argv.slice(2));
const onlyCom = args.has('--only=com');
const onlyWiki = args.has('--only=wiki');
const partialCrawl = onlyCom || onlyWiki;
const reportOnly = args.has('--report');

const config = JSON.parse(readFileSync(CONFIG_PATH, 'utf8'));

function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}

async function fetchHtml(url) {
	const ctrl = new AbortController();
	const timer = setTimeout(() => ctrl.abort(), 60000);
	try {
		const res = await fetch(url, {
			headers: {
				'User-Agent': config.userAgent,
				Accept: 'text/html,application/xhtml+xml',
			},
			signal: ctrl.signal,
			redirect: 'follow',
		});
		const text = await res.text();
		return { url, status: res.status, ok: res.ok, text, error: null };
	} catch (error) {
		return { url, status: 0, ok: false, text: '', error: String(error.message ?? error) };
	} finally {
		clearTimeout(timer);
	}
}

function slugFromUrl(url) {
	const u = new URL(url);
	return u.pathname.replace(/^\/+|\/+$/g, '').replace(/[/.]/g, '-') || 'home';
}

function collectUrls() {
	const urls = [];
	const { competitorCom, competitorWiki, openSources } = config.sources;

	if (!onlyWiki) {
		for (const path of competitorCom.paths) {
			urls.push({ group: 'competitorCom', url: `${competitorCom.baseUrl}${path}` });
		}
	}
	if (!onlyCom) {
		for (const path of competitorWiki.paths) {
			urls.push({ group: 'competitorWiki', url: `${competitorWiki.baseUrl}${path}` });
		}
		if (!onlyWiki) {
			for (const url of openSources.urls) {
				urls.push({ group: 'openSources', url });
			}
		}
	}
	return urls;
}

function mergeIndexEntries(newEntries) {
	if (!partialCrawl || !existsSync(INDEX_PATH)) return newEntries;
	const { entries: prev } = JSON.parse(readFileSync(INDEX_PATH, 'utf8'));
	const dropGroup = onlyCom ? 'competitorCom' : 'competitorWiki';
	const kept = prev.filter((e) => e.group !== dropGroup);
	const bySlug = new Map(kept.map((e) => [e.slug, e]));
	for (const e of newEntries) bySlug.set(e.slug, e);
	return [...bySlug.values()];
}

async function crawlAll() {
	mkdirSync(CACHE_DIR, { recursive: true });
	const entries = [];
	const urls = collectUrls();

	for (const item of urls) {
		console.log(`Fetching ${item.url} ...`);
		const result = await fetchHtml(item.url);
		const slug = slugFromUrl(result.url);
		const entry = {
			group: item.group,
			url: result.url,
			slug,
			status: result.status,
			ok: result.ok,
			error: result.error,
			fetchedAt: new Date().toISOString(),
		};

		if (result.ok && result.text) {
			const parsed = parseContentPage(result.text, result.url);
			writeFileSync(join(CACHE_DIR, `${slug}.html`), result.text, 'utf8');
			writeFileSync(join(CACHE_DIR, `${slug}.json`), JSON.stringify(parsed, null, 2), 'utf8');
			entry.wordCount = parsed.wordCount;
			entry.h1 = parsed.h1;
			entry.title = parsed.meta.title;
			entry.headingCount = parsed.headings.length;
			entry.faqCount = parsed.faq.length;
		}

		entries.push(entry);
		await sleep(config.rateLimitMs ?? 1200);
	}

	const merged = mergeIndexEntries(entries);
	writeFileSync(INDEX_PATH, JSON.stringify({ crawledAt: new Date().toISOString(), entries: merged }, null, 2));
	console.log(`\nSaved ${entries.length} new · ${merged.length} total in ${CACHE_DIR}`);
	return merged;
}

function suggestGuideSlug(title, url) {
	const lower = `${title} ${url}`.toLowerCase();
	for (const [keyword, slug] of Object.entries(config.keywordToGuideSlug)) {
		if (lower.includes(keyword)) return slug;
	}
	return null;
}

function buildGapReport(entries) {
	const okEntries = entries.filter((e) => e.ok);
	const ourSlugs = new Set(config.ourRoutes.guideSlugs);
	const gaps = [];
	const covered = [];

	for (const entry of okEntries) {
		const slug = suggestGuideSlug(entry.title ?? entry.h1 ?? '', entry.url);
		if (slug && !ourSlugs.has(slug)) {
			gaps.push({ slug, ...entry, reason: 'keyword-match-missing-guide' });
		} else if (slug) {
			covered.push({ slug, ...entry });
		} else if (entry.group === 'competitorWiki') {
			gaps.push({ slug: entry.slug, ...entry, reason: 'wiki-page-no-local-guide' });
		}
	}

	const staticMap = {
		'https://survivezombiearena.com/': '/',
		'https://survivezombiearena.com/codes/': '/codes/',
		'https://survivezombiearena.com/classes/': '/classes/',
		'https://survivezombiearena.com/tier-list/': '/tier-list/',
		'https://survivezombiearena.com/weapons/': '/weapons/',
		'https://survivezombiearena.com/beginner-guide/': '/beginner-guide/',
		'https://survivezombiearena.com/best-loadouts/': '/best-loadouts/',
		'https://survivezombiearena.com/waves/': '/waves/',
		'https://survivezombiearena.com/enemies/': '/enemies/',
		'https://survivezombiearena.com/maps/': '/maps/',
		'https://survivezombiearena.com/leaderboard/': '/leaderboard/',
		'https://survivezombiearena.com/update-log/': '/updates/',
		'https://survivezombiearena.com/discord/': '/discord/',
	};

	const thinPages = [];
	for (const entry of okEntries.filter((e) => e.group === 'competitorCom')) {
		const ourRoute = staticMap[entry.url];
		if (!ourRoute) continue;
		const ourJsonPath = join(ROOT, 'src', 'data', `${ourRoute.replace(/\//g, '').replace(/^$/, 'site')}.json`);
		// compare word counts from crawl vs rough threshold
		if ((entry.wordCount ?? 0) > 800) {
			thinPages.push({
				ourRoute,
				competitorUrl: entry.url,
				competitorWords: entry.wordCount,
				note: 'Competitor page is substantial — review our page depth',
			});
		}
	}

	const uniqueGaps = [];
	const seen = new Set();
	for (const g of gaps) {
		const key = g.slug ?? g.url;
		if (seen.has(key)) continue;
		seen.add(key);
		uniqueGaps.push(g);
	}

	return {
		generatedAt: new Date().toISOString(),
		crawled: entries.length,
		success: okEntries.length,
		failed: entries.filter((e) => !e.ok),
		missingGuides: uniqueGaps.sort((a, b) => (b.wordCount ?? 0) - (a.wordCount ?? 0)),
		coveredKeywordGuides: covered,
		substantialCompetitorPages: thinPages,
	};
}

function writeGapReport(report) {
	const mdPath = join(ROOT, 'docs', 'CONTENT_CRAWL_REPORT.md');
	const jsonPath = join(CACHE_DIR, 'gap-report.json');
	writeFileSync(jsonPath, JSON.stringify(report, null, 2));

	const lines = [
		'# Content crawl report',
		'',
		`Generated: ${report.generatedAt}`,
		`Crawled: ${report.crawled} URLs · Success: ${report.success}`,
		'',
		'## Failed fetches',
		'',
	];
	if (report.failed.length === 0) lines.push('_None_');
	else {
		for (const f of report.failed) {
			lines.push(`- ${f.url} — ${f.error ?? `HTTP ${f.status}`}`);
		}
	}

	lines.push('', '## Missing guide opportunities (from crawl)', '');
	if (report.missingGuides.length === 0) lines.push('_None detected_');
	else {
		for (const g of report.missingGuides.slice(0, 30)) {
			lines.push(`- **${g.slug ?? g.h1 ?? g.url}** — ${g.wordCount ?? '?'} words — ${g.url}`);
		}
	}

	lines.push('', '## Substantial competitor .com pages (depth check)', '');
	for (const p of report.substantialCompetitorPages) {
		lines.push(`- ${p.ourRoute} ← ${p.competitorUrl} (${p.competitorWords} words)`);
	}

	writeFileSync(mdPath, lines.join('\n') + '\n');
	console.log(`Gap report: ${mdPath}`);
}

async function main() {
	if (!reportOnly) {
		const entries = await crawlAll();
		const report = buildGapReport(entries);
		writeGapReport(report);
	} else {
		if (!existsSync(INDEX_PATH)) {
			console.error('No crawl cache. Run without --report first.');
			process.exit(1);
		}
		const { entries } = JSON.parse(readFileSync(INDEX_PATH, 'utf8'));
		writeGapReport(buildGapReport(entries));
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
