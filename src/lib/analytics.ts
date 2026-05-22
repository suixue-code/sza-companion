/**
 * Client-side analytics hook. Events fire only when enabled in site config.
 * Wire to Plausible / GA4 / Cloudflare Web Analytics in production.
 */

export type AnalyticsEvent =
	| 'code_copy'
	| 'code_feedback'
	| 'planner_run'
	| 'loadout_share'
	| 'loadout_share_image'
	| 'planner_share'
	| 'wave_share'
	| 'code_alert_subscribe'
	| 'cta_planner_from_codes'
	| 'search_query';

declare global {
	interface Window {
		szaAnalytics?: { enabled: boolean; provider?: string };
		plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
		gtag?: (...args: unknown[]) => void;
	}
}

export function isAnalyticsEnabled(): boolean {
	if (typeof window === 'undefined') return false;
	return window.szaAnalytics?.enabled === true;
}

export function trackEvent(name: AnalyticsEvent, props: Record<string, string> = {}): void {
	if (!isAnalyticsEnabled()) return;

	if (typeof window.plausible === 'function') {
		window.plausible(name, { props });
		return;
	}

	if (typeof window.gtag === 'function') {
		window.gtag('event', name, props);
	}
}
