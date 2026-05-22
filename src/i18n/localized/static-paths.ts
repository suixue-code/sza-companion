import { localizedLocales } from './paths';

export function localizedStaticPaths() {
	return localizedLocales.map((locale) => ({ params: { locale } }));
}

export function resolveLocalizedParam(param: string | undefined): (typeof localizedLocales)[number] | null {
	if (!param || !localizedLocales.includes(param as (typeof localizedLocales)[number])) return null;
	return param as (typeof localizedLocales)[number];
}
