import type { LocaleCode } from './config';
import type { SiteMeta } from '../types';
import siteMeta from '../data/site-meta.json';

export const footerNav: Record<LocaleCode, { text: string; href: string }[]> = {
	en: [
		{ text: 'Codes', href: '/codes/' },
		{ text: 'Credit Planner', href: '/tools/credit-planner/' },
		{ text: 'Wiki', href: '/wiki/' },
		{ text: 'Sources', href: '/sources/' },
		{ text: 'About', href: '/about/' },
		{ text: 'Privacy', href: '/privacy/' },
		{ text: 'Terms', href: '/terms/' },
		{ text: 'Contact', href: '/contact/' },
	],
	es: [
		{ text: 'Códigos', href: '/es/codes/' },
		{ text: 'Planificador', href: '/es/tools/credit-planner/' },
		{ text: 'Wiki ES', href: '/es/wiki/' },
		{ text: 'About', href: '/about/' },
		{ text: 'Privacidad', href: '/privacy/' },
		{ text: 'Contacto', href: '/contact/' },
	],
	'pt-br': [
		{ text: 'Códigos', href: '/pt-br/codes/' },
		{ text: 'Planejador', href: '/pt-br/tools/credit-planner/' },
		{ text: 'Wiki PT', href: '/pt-br/wiki/' },
		{ text: 'About', href: '/about/' },
		{ text: 'Privacidade', href: '/privacy/' },
		{ text: 'Contato', href: '/contact/' },
	],
	'zh-cn': [
		{ text: '兑换码', href: '/zh-cn/codes/' },
		{ text: '信用规划', href: '/zh-cn/tools/credit-planner/' },
		{ text: '中文索引', href: '/zh-cn/wiki/' },
		{ text: '关于', href: '/about/' },
		{ text: '隐私', href: '/privacy/' },
		{ text: '联系', href: '/contact/' },
	],
};

export const footerIntro: Record<LocaleCode, { title: string; subtitle: string }> = {
	en: {
		title: siteMeta.siteBrandName,
		subtitle: `Unofficial fan-made website. Not affiliated with Roblox Corporation or ${siteMeta.developerName}.`,
	},
	es: {
		title: siteMeta.siteBrandName,
		subtitle: `Sitio fan no oficial. Sin vínculo con Roblox Corporation ni ${siteMeta.developerName}.`,
	},
	'pt-br': {
		title: siteMeta.siteBrandName,
		subtitle: `Site fan não oficial. Sem vínculo com Roblox Corporation ou ${siteMeta.developerName}.`,
	},
	'zh-cn': {
		title: siteMeta.siteBrandName,
		subtitle: `非官方粉丝站。与 Roblox Corporation 及 ${siteMeta.developerName} 无隶属关系。`,
	},
};

export function footerFineprint(locale: LocaleCode, year: number, meta: SiteMeta): string {
	const date =
		locale === 'es'
			? meta.lastPublicReviewDisplayEs
			: locale === 'zh-cn'
				? meta.lastPublicReviewDisplayZhCn
				: locale === 'pt-br'
					? (meta.lastPublicReviewDisplayPtBr ?? meta.lastPublicReviewDisplay)
					: meta.lastPublicReviewDisplay;
	const version =
		locale === 'es'
			? meta.gameContentVersionLabelEs
			: locale === 'zh-cn'
				? meta.gameContentVersionLabelZhCn
				: locale === 'pt-br'
					? (meta.gameContentVersionLabelPtBr ?? meta.gameContentVersionLabel)
					: meta.gameContentVersionLabel;
	if (locale === 'zh-cn') return `© ${year}。公开资料最后复核 ${date}。${version}`;
	if (locale === 'es') return `© ${year}. Datos públicos revisados ${date}. ${version}`;
	if (locale === 'pt-br') return `© ${year}. Dados públicos revisados em ${date}. ${version}`;
	return `© ${year}. Public data last reviewed ${date}. ${version}`;
}
