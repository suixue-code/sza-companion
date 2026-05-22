/** Split long guide prose into shorter paragraphs for readability. */
export function splitGuideParagraphs(text: string, sentencesPerParagraph = 2): string[] {
	const trimmed = text.trim();
	if (!trimmed) return [];

	const sentences = trimmed.match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g)?.map((s) => s.trim()) ?? [trimmed];
	if (sentences.length <= sentencesPerParagraph) return [trimmed];

	const paragraphs: string[] = [];
	for (let i = 0; i < sentences.length; i += sentencesPerParagraph) {
		paragraphs.push(sentences.slice(i, i + sentencesPerParagraph).join(' '));
	}
	return paragraphs;
}

const INLINE_PATH_LABELS: Record<string, string> = {
	'/tools/credit-planner/': 'Credit Planner',
	'/tools/loadout-builder/': 'Loadout Builder',
	'/tools/wave-planner/': 'Wave Planner',
	'/tier-list/': 'tier list',
	'/codes/': 'codes page',
	'/beginner-guide/': 'beginner guide',
	'/classes/': 'classes page',
	'/weapons/': 'weapons page',
	'/waves/': 'wave guide',
	'/enemies/': 'enemies page',
	'/maps/': 'maps page',
	'/best-loadouts/': 'loadouts page',
	'/leaderboard/': 'leaderboard page',
	'/updates/': 'update log',
	'/guides/': 'guides index',
	'/events/galactic/': 'Galactic event',
};

/** Turn bare paths in guide copy into readable link labels (HTML escaped by Astro set:html usage). */
export function linkifyGuidePaths(html: string): string {
	let out = html;
	for (const [path, label] of Object.entries(INLINE_PATH_LABELS)) {
		out = out.replaceAll(path, `<a href="${path}">${label}</a>`);
	}
	return out;
}
