import { alternateRouteGroups } from './routes';
import type { LocaleCode } from './config';
import { getHomePath, localeCodes, normalizePathname } from './config';

function pathMatchesAlternate(href: string, normalizedPath: string): boolean {
	return normalizePathname(href) === normalizedPath;
}

export function getAlternateHref(pathname: string, targetLocale: LocaleCode): string {
	const normalized = normalizePathname(pathname);
	const group = alternateRouteGroups.find((g) =>
		localeCodes.some((code) => pathMatchesAlternate(g[code], normalized)),
	);
	if (group) return normalizePathname(group[targetLocale]);
	return getHomePath(targetLocale);
}

export function isActivePath(currentPath: string, href: string): boolean {
	const n = normalizePathname(currentPath);
	const h = normalizePathname(href);
	if (h === '/') return n === '/';
	return n.startsWith(h);
}

/** Alternate hrefs for every locale (e.g. SEO `hreflang`). */
export function getAlternateHrefMap(pathname: string): Record<LocaleCode, string> {
	return Object.fromEntries(
		localeCodes.map((code) => [code, getAlternateHref(pathname, code)]),
	) as Record<LocaleCode, string>;
}

export { normalizePathname };
