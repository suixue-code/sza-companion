// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://szacompanion.com',
	output: 'static',
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => !page.includes('/IMPLEMENTATION_STATUS/'),
			serialize(item) {
				const url = item.url;
				if (
					url.includes('/codes/') ||
					url.endsWith('/') ||
					url.includes('/beginner-guide/') ||
					url.includes('/tier-list/') ||
					url.includes('/events/galactic/')
				) {
					item.priority = 0.9;
					item.changefreq = 'weekly';
				} else if (url.includes('/tools/')) {
					item.priority = 0.85;
					item.changefreq = 'weekly';
				} else if (url.includes('/guides/')) {
					item.priority = 0.75;
					item.changefreq = 'monthly';
				}
				return item;
			},
		}),
	],
});
