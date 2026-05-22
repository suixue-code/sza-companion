import type { LocaleCode } from '../config';
import { defaultLocale, localeConfig } from '../config';

/** Locales with translated core pages (excludes English root). */
export const localizedLocales = localeConfig
	.map((l) => l.code)
	.filter((code): code is LocaleCode => code !== defaultLocale);

export function localePath(locale: LocaleCode, path: string): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	const def = localeConfig.find((l) => l.code === locale);
	if (!def?.pathPrefix) return normalized;
	return `${def.pathPrefix}${normalized}`;
}

export function lastReviewedDisplay(locale: LocaleCode, meta: {
	lastPublicReviewDisplay: string;
	lastPublicReviewDisplayEs: string;
	lastPublicReviewDisplayZhCn: string;
	lastPublicReviewDisplayPtBr?: string;
}): string {
	if (locale === 'es') return meta.lastPublicReviewDisplayEs;
	if (locale === 'zh-cn') return meta.lastPublicReviewDisplayZhCn;
	if (locale === 'pt-br') return meta.lastPublicReviewDisplayPtBr ?? meta.lastPublicReviewDisplay;
	return meta.lastPublicReviewDisplay;
}
