/**
 * Single source of truth for locales. Add a row here, then fill
 * `alternateRouteGroups` + `navLinks` for the new `LocaleCode`.
 */
const _locales = [
	{
		code: 'en',
		label: 'English',
		htmlLang: 'en',
		hreflang: 'en',
		ogLocale: 'en_US',
		pathPrefix: '',
		languageFieldLabel: 'Language',
		brandAriaLabel: 'SZA Companion home',
	},
	{
		code: 'es',
		label: 'Español',
		htmlLang: 'es',
		hreflang: 'es',
		ogLocale: 'es_ES',
		pathPrefix: '/es',
		languageFieldLabel: 'Idioma',
		brandAriaLabel: 'Inicio de SZA Companion',
	},
	{
		code: 'pt-br',
		label: 'Português (BR)',
		htmlLang: 'pt-BR',
		hreflang: 'pt-BR',
		ogLocale: 'pt_BR',
		pathPrefix: '/pt-br',
		languageFieldLabel: 'Idioma',
		brandAriaLabel: 'Início do SZA Companion',
	},
	{
		code: 'zh-cn',
		label: '简体中文',
		htmlLang: 'zh-CN',
		hreflang: 'zh-CN',
		ogLocale: 'zh_CN',
		pathPrefix: '/zh-cn',
		languageFieldLabel: '语言',
		brandAriaLabel: 'SZA Companion 中文首页',
	},
] as const;

export type LocaleCode = (typeof _locales)[number]['code'];

export type LocaleDefinition = (typeof _locales)[number];

export const localeConfig = _locales;

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = localeConfig.map((l) => l.code) as LocaleCode[];

const byCode = Object.fromEntries(localeConfig.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleDefinition
>;

export function getLocaleDefinition(code: string | undefined): LocaleDefinition | undefined {
	if (!code) return undefined;
	return byCode[code as LocaleCode];
}

export function resolveLocale(code: string | undefined): LocaleCode {
	const def = getLocaleDefinition(code);
	return def?.code ?? defaultLocale;
}

/** Trailing slash, leading slash */
export function normalizePathname(pathname: string): string {
	const withLeading = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
}

export function getHomePath(locale: LocaleCode): string {
	const def = byCode[locale];
	if (!def.pathPrefix) return '/';
	return `${def.pathPrefix}/`;
}

export function getHtmlLang(locale: LocaleCode): string {
	return byCode[locale].htmlLang;
}
