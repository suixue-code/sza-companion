/** @typedef {{ level: number; text: string }} Heading */
/** @typedef {{ type: 'p'|'ul'|'ol'; items: string[] }} Block */
/** @typedef {{ question: string; answer: string }} FaqItem */

/**
 * @param {string} html
 */
export function stripHtml(html) {
	return String(html)
		.replace(/<script[\s\S]*?<\/script>/gi, ' ')
		.replace(/<style[\s\S]*?<\/style>/gi, ' ')
		.replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
		.replace(/<!--[\s\S]*?-->/g, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&#39;/g, "'")
		.replace(/&quot;/g, '"')
		.replace(/\s+/g, ' ')
		.trim();
}

/**
 * @param {string} html
 */
export function extractMeta(html) {
	const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? '';
	const description =
		html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)?.[1] ??
		html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i)?.[1] ??
		'';
	const canonical =
		html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] ??
		html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1] ??
		'';
	const ogTitle =
		html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i)?.[1] ?? '';
	return {
		title: decodeEntities(title),
		description: decodeEntities(description),
		canonical,
		ogTitle: decodeEntities(ogTitle),
	};
}

/**
 * @param {string} s
 */
function decodeEntities(s) {
	return s
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&#39;/g, "'")
		.replace(/&quot;/g, '"')
		.replace(/&#x27;/g, "'");
}

/**
 * @param {string} html
 * @returns {Heading[]}
 */
export function extractHeadings(html) {
	const out = [];
	const re = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
	let m;
	while ((m = re.exec(html)) !== null) {
		const text = stripHtml(m[2]);
		if (text) out.push({ level: Number(m[1].slice(1)), text });
	}
	return out;
}

/**
 * @param {string} html
 * @returns {Block[]}
 */
export function extractArticleBlocks(html) {
	const main =
		html.match(/<main[\s\S]*?<\/main>/i)?.[0] ??
		html.match(/<article[\s\S]*?<\/article>/i)?.[0] ??
		html;

	const blocks = [];
	const re = /<(p|ul|ol|h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
	let m;
	while ((m = re.exec(main)) !== null) {
		const tag = m[1].toLowerCase();
		const inner = m[2];
		if (tag.startsWith('h')) continue;
		if (tag === 'p') {
			const text = stripHtml(inner);
			if (text.length > 20) blocks.push({ type: 'p', items: [text] });
		} else {
			const items = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
				.map((li) => stripHtml(li[1]))
				.filter((t) => t.length > 3);
			if (items.length) blocks.push({ type: tag === 'ol' ? 'ol' : 'ul', items });
		}
	}
	return blocks;
}

/**
 * @param {string} html
 * @returns {FaqItem[]}
 */
export function extractFaqFromJsonLd(html) {
	const out = [];
	const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
	let m;
	while ((m = re.exec(html)) !== null) {
		try {
			const json = JSON.parse(m[1]);
			const nodes = Array.isArray(json) ? json : [json];
			for (const node of nodes) {
				if (node['@type'] === 'FAQPage' && Array.isArray(node.mainEntity)) {
					for (const q of node.mainEntity) {
						if (q['@type'] === 'Question') {
							out.push({
								question: stripHtml(String(q.name ?? '')),
								answer: stripHtml(String(q.acceptedAnswer?.text ?? '')),
							});
						}
					}
				}
			}
		} catch {
			/* ignore malformed json-ld */
		}
	}
	return out;
}

/**
 * @param {string} html
 */
export function extractChips(html) {
	return [...html.matchAll(/class=["'][^"']*chip[^"']*["'][^>]*>([\s\S]*?)<\/span>/gi)]
		.map((m) => stripHtml(m[1]))
		.filter(Boolean);
}

/**
 * @param {string} html
 */
export function extractTables(html) {
	const tables = [];
	const re = /<table[\s\S]*?<\/table>/gi;
	let m;
	while ((m = re.exec(html)) !== null) {
		const rows = [...m[0].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map((tr) =>
			[...tr[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map((cell) => stripHtml(cell[1])),
		);
		if (rows.length) tables.push(rows);
	}
	return tables;
}

/**
 * @param {string} html
 */
export function parseContentPage(html, url) {
	const meta = extractMeta(html);
	const headings = extractHeadings(html);
	const blocks = extractArticleBlocks(html);
	const faq = extractFaqFromJsonLd(html);
	const chips = extractChips(html);
	const tables = extractTables(html);
	const wordCount = blocks.reduce((n, b) => n + b.items.join(' ').split(/\s+/).length, 0);

	return {
		url,
		fetchedAt: new Date().toISOString(),
		meta,
		headings,
		blocks,
		faq,
		chips,
		tables,
		wordCount,
		h1: headings.find((h) => h.level === 1)?.text ?? meta.title,
	};
}

/**
 * Rewrite competitor phrasing markers for our brand (deterministic SEO cleanup).
 * @param {string} text
 */
export function rewriteForSza(text) {
	return text
		.replace(/survivezombiearena\.com/gi, 'szacompanion.com')
		.replace(/survivezombiearena\.wiki/gi, 'szacompanion.com')
		.replace(/Survive Zombie Arena Wiki/gi, 'SZA Companion')
		.replace(/\bthis wiki\b/gi, 'this guide')
		.replace(/\bour wiki\b/gi, 'SZA Companion')
		.replace(/\bSZ Wiki\b/g, 'SZA Companion')
		.replace(/\s+/g, ' ')
		.trim();
}

/** Strip third-party republish noise; keep dev Discord facts. @param {string} text */
export function stripCompetitorNoise(text) {
	return text
		.replace(/Survive Wiki Team/gi, 'SZA Companion')
		.replace(/Sources:\s*TechWiser[^.]*\./gi, '')
		.replace(/TechWiser \(May \d+[^)]*\)/gi, '')
		.replace(/Pro Game Guides \(May \d+[^)]*\)/gi, '')
		.replace(/Roonby \(Apr \d+[^)]*\)/gi, '')
		.replace(/Destructoid[^.]*\./gi, '')
		.replace(/Deltia'?s Gaming[^.]*\./gi, '')
		.replace(/Last checked:\s*\d{4}-\d{2}-\d{2}\.?/gi, '')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

/**
 * Full SEO cleanup pass for crawled paragraphs (deterministic, not LLM).
 * @param {string} text
 */
export function optimizeContentForSza(text) {
	let out = rewriteForSza(stripCompetitorNoise(text));
	// Reduce keyword stuffing: collapse 3+ consecutive brand mentions
	out = out.replace(/(Survive Zombie Arena\s+){3,}/gi, 'Survive Zombie Arena ');
	return out.replace(/\s+/g, ' ').trim();
}

/**
 * @param {ReturnType<parseContentPage>} parsed
 */
export function toOptimizedPage(parsed) {
	const h1 = optimizeContentForSza(parsed.h1 ?? parsed.meta.title ?? 'Guide');
	const description = optimizeContentForSza(parsed.meta.description ?? '');
	const sections = toGuideSections(
		{
			...parsed,
			headings: parsed.headings.map((h) => ({ ...h, text: optimizeContentForSza(h.text) })),
			blocks: parsed.blocks.map((b) => ({
				...b,
				items: b.items.map((item) => optimizeContentForSza(item)).filter((item) => item.length > 25),
			})),
		},
		8,
	);
	const faq = (parsed.faq ?? []).map((f) => ({
		question: optimizeContentForSza(f.question),
		answer: optimizeContentForSza(f.answer),
	})).filter((f) => f.question && f.answer);

	return {
		sourceUrl: parsed.url,
		fetchedAt: parsed.fetchedAt,
		title: h1,
		description,
		wordCount: sections.reduce((n, s) => n + (s.body?.split(/\s+/).length ?? 0), 0),
		sections,
		faq,
	};
}

/**
 * @param {ReturnType<parseContentPage>} parsed
 */
export function toGuideSections(parsed, maxSections = 6) {
	const sections = [];
	const h2s = parsed.headings.filter((h) => h.level === 2);
	const blocks = parsed.blocks.map((b) => ({
		...b,
		items: b.items.map((item) => rewriteForSza(item)),
	}));

	for (let i = 0; i < h2s.length && sections.length < maxSections; i++) {
		const heading = rewriteForSza(h2s[i].text);
		const nextH2 = h2s[i + 1]?.text;
		const startIdx = parsed.headings.findIndex((h) => h.text === h2s[i].text);
		const sliceBlocks = blocks.slice(startIdx, startIdx + 3);
		const bodyBlock = sliceBlocks.find((b) => b.type === 'p');
		const listBlock = sliceBlocks.find((b) => b.type === 'ul' || b.type === 'ol');
		if (!bodyBlock && !listBlock) continue;
		sections.push({
			heading,
			body: bodyBlock?.items[0] ?? '',
			items: listBlock?.items.slice(0, 6) ?? bodyBlock ? [] : sliceBlocks.flatMap((b) => b.items).slice(0, 4),
		});
		if (nextH2) continue;
	}

	if (sections.length === 0 && blocks.length > 0) {
		const paras = blocks.filter((b) => b.type === 'p').flatMap((b) => b.items);
		sections.push({
			heading: 'Overview',
			body: paras[0] ?? '',
			items: blocks.filter((b) => b.type === 'ul').flatMap((b) => b.items).slice(0, 5),
		});
	}

	return sections.filter((s) => s.body || s.items.length > 0);
}
