import type { LocaleCode } from './config';
import { defaultLocale, localeConfig } from './config';

export const languages = Object.fromEntries(localeConfig.map((l) => [l.code, l.label])) as Record<
	LocaleCode,
	string
>;

export const defaultLang = defaultLocale;

export const ogStrings = Object.fromEntries(localeConfig.map((l) => [l.code, l.ogLocale])) as Record<
	LocaleCode,
	string
>;

export type NavLink = { text: string; href: string };

export const navLinks: Record<LocaleCode, NavLink[]> = {
	en: [
		{ text: 'Codes', href: '/codes/' },
		{ text: 'Planner', href: '/tools/credit-planner/' },
		{ text: 'Loadouts', href: '/tools/loadout-builder/' },
		{ text: 'Classes', href: '/classes/' },
		{ text: 'Guides', href: '/guides/' },
	],
	es: [
		{ text: 'Códigos', href: '/es/codes/' },
		{ text: 'Planificador', href: '/es/tools/credit-planner/' },
		{ text: 'Clases', href: '/classes/' },
		{ text: 'Guías', href: '/es/beginner-guide/' },
		{ text: 'Tier list', href: '/es/tier-list/' },
	],
	'pt-br': [
		{ text: 'Códigos', href: '/pt-br/codes/' },
		{ text: 'Planejador', href: '/pt-br/tools/credit-planner/' },
		{ text: 'Classes', href: '/classes/' },
		{ text: 'Guias', href: '/pt-br/beginner-guide/' },
		{ text: 'Tier list', href: '/pt-br/tier-list/' },
	],
	'zh-cn': [
		{ text: '兑换码', href: '/zh-cn/codes/' },
		{ text: '信用规划', href: '/zh-cn/tools/credit-planner/' },
		{ text: '职业', href: '/classes/' },
		{ text: '新手指南', href: '/zh-cn/beginner-guide/' },
		{ text: '强度榜', href: '/zh-cn/tier-list/' },
	],
};
