/** Sync tool form state into the address bar without reloading. */
export function syncToolUrlState(
	params: Record<string, string | undefined>,
	pathname: string = typeof location !== 'undefined' ? location.pathname : '/',
): string {
	const search = new URLSearchParams();
	for (const [key, value] of Object.entries(params)) {
		if (value != null && value !== '') search.set(key, value);
	}
	const query = search.toString();
	const href = query ? `${pathname}?${query}` : pathname;
	if (typeof history !== 'undefined') {
		history.replaceState(null, '', href);
	}
	return typeof location !== 'undefined' ? `${location.origin}${href}` : href;
}

export function readToolUrlState(pathname?: string): URLSearchParams {
	if (typeof location === 'undefined') return new URLSearchParams();
	return new URLSearchParams(location.search);
}

export function parseOwnedClassParam(raw: string | null, allowed: readonly string[]): string[] {
	if (!raw) return [];
	const allowedSet = new Set(allowed);
	return [...new Set(raw.split(',').map((id) => id.trim()).filter(Boolean))].filter((id) => allowedSet.has(id));
}

export function serializeOwnedClassParam(ids: string[]): string | undefined {
	const unique = [...new Set(ids.filter(Boolean))].sort();
	return unique.length > 0 ? unique.join(',') : undefined;
}
