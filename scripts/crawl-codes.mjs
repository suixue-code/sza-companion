#!/usr/bin/env node
/**
 * Fetches configured public pages and proposes NEW code strings as `unverified` rows
 * appended to src/data/codes.json. Does not demote or remove existing entries.
 *
 * Usage:
 *   node scripts/crawl-codes.mjs           # dry-run: report only, no file write
 *   node scripts/crawl-codes.mjs --write   # write src/data/codes.json when there are new rows
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CODES_PATH = join(ROOT, 'src', 'data', 'codes.json');
const SOURCES_PATH = join(ROOT, 'scripts', 'code-crawl-sources.json');
const CACHE_DIR = join(ROOT, '.crawl-cache');

const UA = 'SlimeRNGToolsCodeCrawl/1.0 (+https://slimerngtools.com) (draft PR bot)';

const BLOCKLIST = new Set(
	[
		'active', 'addEventListener', 'async', 'await', 'background', 'boolean', 'border', 'catch', 'class', 'click',
		'code', 'codes', 'color', 'console', 'const', 'content', 'create', 'data', 'default', 'display', 'document',
		'else', 'error', 'export', 'false', 'fetch', 'flex', 'font', 'for', 'from', 'function', 'get', 'github',
		'height', 'https', 'http', 'if', 'import', 'index', 'inline', 'item', 'json', 'length', 'let', 'link',
		'list', 'load', 'loading', 'location', 'margin', 'meta', 'module', 'name', 'navigator', 'new', 'null',
		'object', 'padding', 'parse', 'public', 'push', 'query', 'return', 'roblox', 'script', 'section', 'set',
		'show', 'slime', 'slimerng', 'src', 'static', 'string', 'style', 'table', 'text', 'this', 'title', 'true',
		'type', 'typeof', 'undefined', 'var', 'void', 'while', 'width', 'window', 'write', 'yield', 'zone',
		'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october',
		'november', 'december', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
		'cookie', 'cookies', 'privacy', 'terms', 'subscribe', 'share', 'twitter', 'facebook', 'youtube',
	].map((s) => s.toLowerCase()),
);

function stripHtml(html) {
	return String(html)
		.replace(/<script[\s\S]*?<\/script>/gi, ' ')
		.replace(/<style[\s\S]*?<\/style>/gi, ' ')
		.replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function extractFromCodeTags(html) {
	const out = new Set();
	const re = /<code[^>]*>([^<]{2,40})<\/code>/gi;
	let m;
	while ((m = re.exec(html)) !== null) {
		const t = m[1].trim();
		if (/^[a-zA-Z][a-zA-Z0-9]{2,28}$/.test(t) && !BLOCKLIST.has(t.toLowerCase())) out.add(t);
	}
	return out;
}

function extractFromText(text) {
	const out = new Set();
	const re = /\b([a-z][a-zA-Z0-9]{3,23})\b/g;
	let m;
	while ((m = re.exec(text)) !== null) {
		const t = m[1];
		const low = t.toLowerCase();
		if (BLOCKLIST.has(low)) continue;
		if (t.length < 4 || t.length > 28) continue;
		if (/^\d+$/.test(t)) continue;
		out.add(t);
	}
	return out;
}

function normalizeCodeKey(s) {
	return String(s).trim().toLowerCase();
}

async function fetchText(url) {
	const ctrl = new AbortController();
	const t = setTimeout(() => ctrl.abort(), 25_000);
	try {
		const res = await fetch(url, {
			headers: { 'User-Agent': UA, Accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8' },
			signal: ctrl.signal,
			redirect: 'follow',
		});
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		return await res.text();
	} finally {
		clearTimeout(t);
	}
}

function isoNow() {
	const d = new Date();
	const pad = (n) => String(n).padStart(2, '0');
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:00+00:00`;
}

async function run() {
	const write = process.argv.includes('--write');
	mkdirSync(CACHE_DIR, { recursive: true });

	let sourcesConfig;
	try {
		sourcesConfig = JSON.parse(readFileSync(SOURCES_PATH, 'utf8'));
	} catch (e) {
		console.error('Missing or invalid scripts/code-crawl-sources.json', e.message);
		process.exit(1);
	}
	const sources = Array.isArray(sourcesConfig.sources) ? sourcesConfig.sources : [];
	if (sources.length === 0) {
		console.log('No sources configured in scripts/code-crawl-sources.json — nothing to do.');
		process.exit(0);
	}

	const existing = JSON.parse(readFileSync(CODES_PATH, 'utf8'));
	if (!Array.isArray(existing)) {
		console.error('codes.json must be an array');
		process.exit(1);
	}
	const byKey = new Map();
	for (const row of existing) {
		byKey.set(normalizeCodeKey(row.code), row);
	}

	const merged = [...existing];
	let added = 0;

	for (const src of sources) {
		const id = String(src.id || 'source').replace(/[^a-z0-9_-]/gi, '_');
		const url = src.url;
		const label = src.label || id;
		if (!url || typeof url !== 'string' || !/^https?:\/\//i.test(url)) {
			console.warn('Skip invalid source entry:', src);
			continue;
		}
		console.log(`Fetching ${id}: ${url}`);
		let html;
		try {
			html = await fetchText(url);
		} catch (e) {
			console.error(`Fetch failed (${id}):`, e.message);
			continue;
		}
		const safe = id.slice(0, 80);
		writeFileSync(join(CACHE_DIR, `${safe}.html`), html, 'utf8');

		const extractMode = src.extract === 'code-tags-only' ? 'code-tags-only' : 'full';
		const fromTags = extractFromCodeTags(html);
		const fromText =
			extractMode === 'code-tags-only' ? new Set() : extractFromText(stripHtml(html));
		const found = new Set([...fromTags, ...fromText]);
		console.log(`  ${id}: ${found.size} token(s) (extract=${extractMode})`);
		for (const code of found) {
			const key = normalizeCodeKey(code);
			if (byKey.has(key)) continue;
			byKey.set(key, true);
			merged.push({
				code,
				reward: 'Unknown (automated crawl)',
				status: 'unverified',
				addedDate: new Date().toISOString().slice(0, 10),
				lastCheckedAt: isoNow(),
				source: `Crawl: ${label} (${url})`,
				confidence: 'low',
				notes: 'Auto-candidate from crawl script. Verify in Roblox before changing status or reward text.',
			});
			added += 1;
		}
	}

	const nextJson = `${JSON.stringify(merged, null, 2)}\n`;
	const prevJson = readFileSync(CODES_PATH, 'utf8');
	if (nextJson === prevJson) {
		console.log('No new codes appended; codes.json unchanged.');
		process.exit(0);
	}

	console.log(`Proposed ${added} new unverified row(s).`);
	if (!write) {
		console.log('Dry-run: pass --write to update src/data/codes.json');
		process.exit(0);
	}
	writeFileSync(CODES_PATH, nextJson, 'utf8');
	console.log('Wrote src/data/codes.json');
	process.exit(0);
}

run().catch((e) => {
	console.error(e);
	process.exit(1);
});
