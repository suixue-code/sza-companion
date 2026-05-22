#!/usr/bin/env node
/**
 * Turn crawl cache into guide drafts + gap summary.
 *
 * Usage:
 *   node scripts/apply-crawl-to-guides.mjs
 *   node scripts/apply-crawl-to-guides.mjs --slug=tactician-guide
 *
 * Output: docs/CRAWL_GUIDE_DRAFTS.md (human review) — does NOT overwrite guides.ts automatically.
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { toGuideSections, rewriteForSza } from './lib/html-content-parser.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CACHE = join(ROOT, '.crawl-cache', 'content');
const CONFIG = JSON.parse(readFileSync(join(__dirname, 'content-crawl-sources.json'), 'utf8'));
const OUT_MD = join(ROOT, 'docs', 'CRAWL_GUIDE_DRAFTS.md');

const slugFilter = process.argv.find((a) => a.startsWith('--slug='))?.split('=')[1];

/** @type {Record<string, string[]>} */
const SOURCE_MAP = {
	'tactician-guide': ['classes', 'maps', 'leaderboard', 'enemies'],
	'demolitionist-guide': ['classes', 'enemies', 'maps'],
	'gumdrop-blaster-guide': ['weapons-Survive-Zombie-Arena-gumdrop-blaster', 'weapons'],
	'nightmare-mode-guide': ['update-log', 'waves'],
	'unlock-weapons-guide': ['beginner-guide', 'weapons', 'classes'],
	'world-ender-guide': ['weapons', 'update-log'],
};

function loadParsed(slug) {
	const path = join(CACHE, `${slug}.json`);
	if (!existsSync(path)) return null;
	return JSON.parse(readFileSync(path, 'utf8'));
}

function existingGuideSlugs() {
	const guidesPath = join(ROOT, 'src', 'data', 'guides.ts');
	const text = readFileSync(guidesPath, 'utf8');
	return [...text.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
}

function draftFromSources(guideSlug, sourceSlugs) {
	const parts = [];
	for (const s of sourceSlugs) {
		const parsed = loadParsed(s);
		if (!parsed) continue;
		parts.push({ slug: s, parsed });
	}
	if (!parts.length) return null;

	const mergedBlocks = parts.flatMap((p) =>
		p.parsed.blocks.map((b) => ({ ...b, _source: p.slug })),
	);
	const mergedHeadings = parts.flatMap((p) => p.parsed.headings);
	const mergedFaq = parts.flatMap((p) => p.parsed.faq ?? []);

	const synthetic = {
		headings: mergedHeadings,
		blocks: mergedBlocks,
		faq: mergedFaq,
		meta: { title: guideSlug, description: '' },
	};
	const sections = toGuideSections(synthetic, 8);
	const faq = mergedFaq.slice(0, 5).map((f) => ({
		question: rewriteForSza(f.question),
		answer: rewriteForSza(f.answer),
	}));

	return {
		slug: guideSlug,
		sources: sourceSlugs.filter((s) => existsSync(join(CACHE, `${s}.json`))),
		wordCount: parts.reduce((n, p) => n + (p.parsed.wordCount ?? 0), 0),
		sections,
		faq,
	};
}

function main() {
	if (!existsSync(CACHE)) {
		console.error('No crawl cache. Run: node scripts/crawl-competitor-content.mjs');
		process.exit(1);
	}

	const existing = new Set(existingGuideSlugs());
	const configured = Object.keys(CONFIG.keywordToGuideSlug).map((k) => CONFIG.keywordToGuideSlug[k]);
	const uniqueTargets = [...new Set([...Object.keys(SOURCE_MAP), ...configured])];
	const targets = slugFilter ? [slugFilter] : uniqueTargets.filter((s) => !existing.has(s));

	const lines = [
		'# Crawl guide drafts',
		'',
		`Generated: ${new Date().toISOString()}`,
		`Existing guides: ${existing.size} · Targets missing: ${targets.length}`,
		'',
		'> Auto-drafts for human rewrite. Merge into `src/data/guides.ts` after SEO editing.',
		'',
	];

	for (const guideSlug of targets) {
		const sourceSlugs = SOURCE_MAP[guideSlug];
		if (!sourceSlugs) {
			lines.push(`## ${guideSlug}`, '', '_No source map — add to SOURCE_MAP in apply-crawl-to-guides.mjs_', '');
			continue;
		}
		const draft = draftFromSources(guideSlug, sourceSlugs);
		if (!draft) {
			lines.push(`## ${guideSlug}`, '', '_Sources not in cache_', '');
			continue;
		}
		lines.push(`## ${guideSlug}`, '');
		lines.push(`Sources: ${draft.sources.join(', ')} · ~${draft.wordCount} words raw`, '');
		for (const sec of draft.sections) {
			lines.push(`### ${sec.heading}`, '', sec.body || '_no body_', '');
			if (sec.items?.length) {
				for (const item of sec.items) lines.push(`- ${item}`);
				lines.push('');
			}
		}
		if (draft.faq.length) {
			lines.push('### FAQ (from crawl)', '');
			for (const f of draft.faq) {
				lines.push(`- **${f.question}** — ${f.answer}`);
			}
			lines.push('');
		}
	}

	writeFileSync(OUT_MD, lines.join('\n') + '\n');
	console.log(`Wrote ${OUT_MD}`);
	console.log(`Missing guide slugs: ${targets.join(', ') || 'none'}`);
}

main();
