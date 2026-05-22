export type { LocaleCode, LocaleDefinition } from './config';
export {
	defaultLocale,
	getHomePath,
	getHtmlLang,
	getLocaleDefinition,
	localeCodes,
	localeConfig,
	normalizePathname,
	resolveLocale,
} from './config';
export { alternateRouteGroups } from './routes';
export { defaultLang, languages, navLinks, ogStrings } from './ui';
export type { NavLink } from './ui';
export { getAlternateHref, getAlternateHrefMap, isActivePath } from './utils';
