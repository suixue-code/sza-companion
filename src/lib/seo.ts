import type { FaqItem } from '../types';
import siteMeta from '../data/site-meta.json';

export const SITE_NAME = siteMeta.siteBrandName;
export const SITE_ORIGIN = siteMeta.siteOrigin;

const siteLogoUrl = `${SITE_ORIGIN}/icons/icon-512.png`;

/** Sitewide Organization entity (homepage + all pages via BaseLayout). */
export function organizationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: SITE_NAME,
		url: SITE_ORIGIN,
		logo: siteLogoUrl,
	};
}

/** Sitewide WebSite entity. */
export function webSiteSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: SITE_NAME,
		url: SITE_ORIGIN,
	};
}

/** Merged into every page unless noindex. */
export function siteGraphSchema() {
	return [organizationSchema(), webSiteSchema()];
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url,
		})),
	};
}

export function faqSchema(faq: FaqItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faq.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
	};
}

export function articleSchema(page: {
	title: string;
	description: string;
	url: string;
	dateModified: string;
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: page.title,
		description: page.description,
		url: page.url,
		dateModified: page.dateModified,
		author: {
			'@type': 'Organization',
			name: SITE_NAME,
		},
		publisher: {
			'@type': 'Organization',
			name: SITE_NAME,
		},
	};
}

export function collectionSchema(title: string, description: string, url: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: title,
		description,
		url,
	};
}

export function webApplicationSchema(title: string, description: string, url: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: title,
		description,
		url,
		applicationCategory: 'GameApplication',
		operatingSystem: 'Any',
	};
}

export function itemListSchema(name: string, items: { name: string; url: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name,
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			url: item.url,
		})),
	};
}
