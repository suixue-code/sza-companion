import type { LocaleCode } from './config';

/** Static chrome strings inside GuideTemplate (not guide body copy). */
export const guideTemplateUi: Record<
	LocaleCode,
	{
		guidesHubLabel: string;
		guidesHubHref: string;
		lastReviewedLabel: string;
		faqHeading: string;
		relatedHeading: string;
	}
> = {
	en: {
		guidesHubLabel: 'All guides',
		guidesHubHref: '/guides/',
		lastReviewedLabel: 'Last reviewed',
		faqHeading: 'FAQ',
		relatedHeading: 'Related',
	},
	es: {
		guidesHubLabel: 'Todas las guías (EN)',
		guidesHubHref: '/guides/',
		lastReviewedLabel: 'Última revisión',
		faqHeading: 'Preguntas frecuentes',
		relatedHeading: 'Relacionado',
	},
	'pt-br': {
		guidesHubLabel: 'Todos os guias (EN)',
		guidesHubHref: '/guides/',
		lastReviewedLabel: 'Última revisão',
		faqHeading: 'FAQ',
		relatedHeading: 'Relacionado',
	},
	'zh-cn': {
		guidesHubLabel: '全部指南（英文）',
		guidesHubHref: '/guides/',
		lastReviewedLabel: '最后审查',
		faqHeading: '常见问题',
		relatedHeading: '相关链接',
	},
};
