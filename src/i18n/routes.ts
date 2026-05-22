import type { LocaleCode } from './config';

/** Equivalent URLs per locale for localized core pages. */
export const alternateRouteGroups: Array<Record<LocaleCode, string>> = [
	{ en: '/', es: '/es/', 'pt-br': '/pt-br/', 'zh-cn': '/zh-cn/' },
	{ en: '/codes/', es: '/es/codes/', 'pt-br': '/pt-br/codes/', 'zh-cn': '/zh-cn/codes/' },
	{ en: '/tools/credit-planner/', es: '/es/tools/credit-planner/', 'pt-br': '/pt-br/tools/credit-planner/', 'zh-cn': '/zh-cn/tools/credit-planner/' },
	{ en: '/beginner-guide/', es: '/es/beginner-guide/', 'pt-br': '/pt-br/beginner-guide/', 'zh-cn': '/zh-cn/beginner-guide/' },
	{ en: '/tier-list/', es: '/es/tier-list/', 'pt-br': '/pt-br/tier-list/', 'zh-cn': '/zh-cn/tier-list/' },
	{ en: '/events/galactic/', es: '/es/events/galactic/', 'pt-br': '/pt-br/events/galactic/', 'zh-cn': '/zh-cn/events/galactic/' },
	{ en: '/wiki/', es: '/es/wiki/', 'pt-br': '/pt-br/wiki/', 'zh-cn': '/zh-cn/wiki/' },
];
