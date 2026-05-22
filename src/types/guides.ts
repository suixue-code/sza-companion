export interface GuideSection {
	heading: string;
	body?: string;
	items?: string[];
	level?: 2 | 3;
}

export interface GuideFaq {
	question: string;
	answer: string;
}

export interface GuidePage {
	slug: string;
	title: string;
	description: string;
	eyebrow?: string;
	sections: GuideSection[];
	faq: GuideFaq[];
	toolLinks?: { href: string; label: string }[];
}
