#!/usr/bin/env node
/**
 * Step 2 of content pipeline: SEO cleanup on crawl cache.
 * Reads .crawl-cache/content/*.json → writes optimized/*.json + *.md
 *
 * Usage: node scripts/optimize-crawl-content.mjs
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseContentPage, toOptimizedPage } from './lib/html-content-parser.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CACHE = join(ROOT, '.crawl-cache', 'content');
const OUT = join(CACHE, 'optimized');

function toMarkdown(opt) {
	const lines = [`# ${opt.title}`, '', opt.description ? `> ${opt.description}` : '', ''];
	for (const sec of opt.sections) {
		lines.push(`## ${sec.heading}`, '', sec.body || '', '');
		for (const item of sec.items ?? []) lines.push(`- ${item}`);
		if (sec.items?.length) lines.push('');
	}
	if (opt.faq.length) {
		lines.push('## FAQ', '');
		for (const f of opt.faq) lines.push(`**${f.question}**`, '', f.answer, '');
	}
	return lines.join('\n').trim() + '\n';
}

function main() {
	if (!existsSync(CACHE)) {
		console.error('No crawl cache. Run: npm run crawl:content');
		process.exit(1);
	}
	mkdirSync(OUT, { recursive: true });

	const skip = new Set(['index.json', 'gap-report.json']);
	const files = readdirSync(CACHE).filter((f) => f.endsWith('.json') && !skip.has(f));
	const summary = [];

	for (const file of files) {
		const slug = file.replace(/\.json$/, '');
		const htmlPath = join(CACHE, `${slug}.html`);
		if (!existsSync(htmlPath)) continue;

		const parsed = JSON.parse(readFileSync(join(CACHE, file), 'utf8'));
		const optimized = toOptimizedPage(parsed);
		writeFileSync(join(OUT, `${slug}.json`), JSON.stringify(optimized, null, 2));
		writeFileSync(join(OUT, `${slug}.md`), toMarkdown(optimized));
		summary.push({
			slug,
			sourceUrl: optimized.sourceUrl,
			title: optimized.title,
			sections: optimized.sections.length,
			faq: optimized.faq.length,
			wordCount: optimized.wordCount,
		});
	}

	writeFileSync(join(OUT, 'index.json'), JSON.stringify({ optimizedAt: new Date().toISOString(), pages: summary }, null, 2));
	console.log(`Optimized ${summary.length} pages → ${OUT}`);
}

main();
