import rss from '@astrojs/rss';
import { guides } from '../data/guides';

export async function GET(context) {
	const staticItems = [
		{
			title: 'Survive Zombie Arena Codes',
			description: 'Active Zombies code, disputed GALACTIC status, and redeem steps.',
			link: '/codes/',
			pubDate: new Date('2026-05-20'),
		},
		{
			title: 'Survive Zombie Arena Beginner Guide',
			description: 'First runs, credit milestones, weapon path, and Rooftop Map tips.',
			link: '/beginner-guide/',
			pubDate: new Date('2026-05-20'),
		},
		{
			title: 'Credit Planner',
			description: 'Browser-only class unlock and farm planning for Survive Zombie Arena.',
			link: '/tools/credit-planner/',
			pubDate: new Date('2026-05-18'),
		},
		{
			title: 'Class Tier List',
			description: 'S/A/B/C rankings for solo, team, and farm on Rooftop Map.',
			link: '/tier-list/',
			pubDate: new Date('2026-05-20'),
		},
		{
			title: 'Update Log',
			description: 'Patch timeline from Classes Update through May 2026 Mini Content Update.',
			link: '/updates/',
			pubDate: new Date('2026-05-20'),
		},
	];

	const guideItems = guides.slice(0, 12).map((g) => ({
		title: g.title,
		description: g.description,
		link: `/guides/${g.slug}/`,
		pubDate: new Date('2026-05-20'),
	}));

	return rss({
		title: 'SZA Companion — Survive Zombie Arena Guides',
		description: 'Unofficial Survive Zombie Arena codes, class guides, wave tips, and browser tools.',
		site: context.site,
		items: [...staticItems, ...guideItems],
	});
}
