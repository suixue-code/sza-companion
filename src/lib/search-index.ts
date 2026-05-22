export interface SearchEntry {
	title: string;
	href: string;
	keywords: string;
	category: string;
}

/** Static index for client-side search (P3-008). Extend when new routes ship. */
export const searchIndex: SearchEntry[] = [
	// Core pages
	{ title: 'Home', href: '/', keywords: 'sza companion unofficial hub', category: 'Pages' },
	{ title: 'Codes', href: '/codes/', keywords: 'zombies galactic redeem active disputed', category: 'Codes' },
	{ title: 'Beginner Guide', href: '/beginner-guide/', keywords: 'beginner first runs starter rooftop', category: 'Guides' },
	{ title: 'All Guides', href: '/guides/', keywords: 'guides index class weapon wave', category: 'Guides' },
	{ title: 'Wiki Hub', href: '/wiki/', keywords: 'wiki directory hub links', category: 'Pages' },
	{ title: 'Tier List', href: '/tier-list/', keywords: 'tier rank class solo team farm', category: 'Reference' },
	{ title: 'Classes', href: '/classes/', keywords: 'class unlock medic marksman tactician necromancer', category: 'Reference' },
	{ title: 'Weapons', href: '/weapons/', keywords: 'weapon handgun shotgun rifle world ender', category: 'Reference' },
	{ title: 'Waves', href: '/waves/', keywords: 'early mid late elite auto skip nightmare', category: 'Reference' },
	{ title: 'Enemies', href: '/enemies/', keywords: 'zombie elite volatile pack', category: 'Reference' },
	{ title: 'Maps', href: '/maps/', keywords: 'rooftop atlantis arena layout', category: 'Reference' },
	{ title: 'Best Loadouts', href: '/best-loadouts/', keywords: 'loadout solo team farm leaderboard', category: 'Reference' },
	{ title: 'Leaderboard', href: '/leaderboard/', keywords: 'leaderboard wave rank high push', category: 'Reference' },
	{ title: 'Updates', href: '/updates/', keywords: 'patch notes update log may 2026', category: 'Reference' },
	{ title: 'Discord & Links', href: '/discord/', keywords: 'discord roblox nectarforge official', category: 'Reference' },
	{ title: 'Galactic Event', href: '/events/galactic/', keywords: 'galactic event void shards crate', category: 'Events' },
	// Tools
	{ title: 'Credit Planner', href: '/tools/credit-planner/', keywords: 'credits farm medic marksman necromancer plan', category: 'Tools' },
	{ title: 'Loadout Builder', href: '/tools/loadout-builder/', keywords: 'loadout team solo weapons class', category: 'Tools' },
	{ title: 'Wave Push Planner', href: '/tools/wave-planner/', keywords: 'wave push auto skip leaderboard', category: 'Tools' },
	// Deep guides
	{ title: 'Necromancer Guide', href: '/guides/necromancer/', keywords: 'necromancer death nova soul harvester undead', category: 'Guides' },
	{ title: 'Credits Farm Guide', href: '/guides/credits-farm/', keywords: 'farm credits per minute marksman', category: 'Guides' },
	{ title: 'Wave Guide (deep)', href: '/guides/waves/', keywords: 'early mid late elite auto skip', category: 'Guides' },
	{ title: 'Medic Tactician Combo', href: '/guides/tactician-medic-combo/', keywords: 'duo team medic tactician', category: 'Guides' },
	{ title: 'Best Class Solo', href: '/guides/best-class-solo/', keywords: 'solo marksman tactician', category: 'Guides' },
	{ title: 'AFK Farm', href: '/guides/afk-farm/', keywords: 'afk farm demolitionist turret', category: 'Guides' },
	{ title: 'Best Weapons Guide', href: '/guides/best-weapons/', keywords: 'handgun shotgun rifle weapon path', category: 'Guides' },
	{ title: 'How to Redeem Codes', href: '/guides/how-to-redeem-codes/', keywords: 'redeem code roblox lobby shop', category: 'Guides' },
	{ title: 'Leaderboard Tips', href: '/guides/leaderboard/', keywords: 'leaderboard wave rank necromancer', category: 'Guides' },
	{ title: 'Marksman Guide', href: '/guides/marksman-guide/', keywords: 'marksman deadeye sonar ping pierce', category: 'Guides' },
	{ title: 'Engineer Guide', href: '/guides/engineer-guide/', keywords: 'engineer turret barricade tactician', category: 'Guides' },
	{ title: 'Tactician Guide', href: '/guides/tactician-guide/', keywords: 'tactician vanguard turret barricade spikes', category: 'Guides' },
	{ title: 'Demolitionist Guide', href: '/guides/demolitionist-guide/', keywords: 'demolitionist shockwave molotov aoe', category: 'Guides' },
	{ title: 'Void Shards', href: '/guides/void-shards/', keywords: 'void shards galactic currency', category: 'Guides' },
	{ title: 'Galactic Crate', href: '/guides/galactic-crate/', keywords: 'galactic event crate cosmic', category: 'Guides' },
	{ title: 'X2 Credits Worth It', href: '/guides/x2-credits-worth-it/', keywords: 'gamepass x2 credits robux', category: 'Guides' },
	{ title: 'Ninja Worth It', href: '/guides/ninja-worth-it/', keywords: 'ninja cloak worth skip', category: 'Guides' },
	{ title: 'Bastion Guide', href: '/guides/bastion-guide/', keywords: 'bastion bunker drone legendary', category: 'Guides' },
	{ title: 'How Many Waves', href: '/guides/how-many-waves/', keywords: 'waves count cap infinite', category: 'Guides' },
	{ title: 'Infinite Waves', href: '/guides/infinite-waves/', keywords: 'infinite endless waves scaling', category: 'Guides' },
	{ title: 'Redeem Galactic Code', href: '/guides/redeem-galactic-code/', keywords: 'galactic code disputed', category: 'Guides' },
	{ title: 'Gamepass Value', href: '/guides/gamepass/', keywords: 'vip x2 credits gamepass robux', category: 'Guides' },
	{ title: 'Gumdrop Blaster Guide', href: '/guides/gumdrop-blaster-guide/', keywords: 'gumdrop blaster splash aoe weapon', category: 'Guides' },
	{ title: 'Nightmare Mode Guide', href: '/guides/nightmare-mode-guide/', keywords: 'nightmare mode gamemode hard', category: 'Guides' },
	{ title: 'Unlock Weapons Guide', href: '/guides/unlock-weapons-guide/', keywords: 'unlock guns shotgun rifle shop upgrade', category: 'Guides' },
	{ title: 'World Ender Guide', href: '/guides/world-ender-guide/', keywords: 'world ender mythic f2p gun', category: 'Guides' },
	// Class detail pages
	{ title: 'Survivor Class', href: '/classes/survivor/', keywords: 'survivor free starter class', category: 'Classes' },
	{ title: 'Medic Class', href: '/classes/medic/', keywords: 'medic heal stim mending', category: 'Classes' },
	{ title: 'Marksman Class', href: '/classes/marksman/', keywords: 'marksman deadeye sonar pierce', category: 'Classes' },
	{ title: 'Engineer Class', href: '/classes/engineer/', keywords: 'engineer turret flame barricade', category: 'Classes' },
	{ title: 'Ninja Class', href: '/classes/ninja/', keywords: 'ninja cloak stealth', category: 'Classes' },
	{ title: 'Demolitionist Class', href: '/classes/demolitionist/', keywords: 'demolitionist shockwave molotov', category: 'Classes' },
	{ title: 'Tactician Class', href: '/classes/tactician/', keywords: 'tactician vanguard barricade spikes', category: 'Classes' },
	{ title: 'Bastion Class', href: '/classes/bastion/', keywords: 'bastion bunker drone laser', category: 'Classes' },
	{ title: 'Necromancer Class', href: '/classes/necromancer/', keywords: 'necromancer minion death nova', category: 'Classes' },
];

export function searchPages(query: string, limit = 12): SearchEntry[] {
	const q = query.trim().toLowerCase();
	if (!q) return [];
	return searchIndex
		.map((entry) => {
			const hay = `${entry.title} ${entry.keywords} ${entry.category}`.toLowerCase();
			const score = q.split(/\s+/).filter(Boolean).reduce((acc, token) => (hay.includes(token) ? acc + 1 : acc), 0);
			return { entry, score };
		})
		.filter(({ score }) => score > 0)
		.sort((a, b) => b.score - a.score)
		.slice(0, limit)
		.map(({ entry }) => entry);
}
