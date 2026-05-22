import type { LoadoutScenario } from './loadout-builder';

export const SCENARIO_LABELS: Record<LoadoutScenario, string> = {
	solo: 'Solo Loadout',
	public: 'Public Lobby Loadout',
	duo: 'Duo Loadout',
	full_team: 'Team Loadout',
	leaderboard: 'Leaderboard Push Loadout',
};

export interface ShareCardPayload {
	scenario: LoadoutScenario;
	scenarioLabel: string;
	recommendedClass: string;
	weaponPath: string;
	targetWave?: number;
	generatedDate: string;
	siteUrl: string;
	brandName: string;
}

export function buildShareCardPayload(
	scenario: LoadoutScenario,
	recommendedClass: string,
	weaponPath: string,
	targetWave: number | undefined,
	siteUrl: string,
	brandName = 'SZA Companion',
): ShareCardPayload {
	return {
		scenario,
		scenarioLabel: SCENARIO_LABELS[scenario],
		recommendedClass,
		weaponPath,
		targetWave,
		generatedDate: new Intl.DateTimeFormat('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
		}).format(new Date()),
		siteUrl,
		brandName,
	};
}

export function formatShareText(payload: ShareCardPayload): string {
	const wavePart = payload.targetWave ? ` · Target Wave ${payload.targetWave}` : '';
	return `[${payload.brandName}] ${payload.scenarioLabel} · Play as: ${payload.recommendedClass} · Weapon: ${payload.weaponPath}${wavePart} · Generated ${payload.generatedDate} · ${payload.siteUrl}`;
}
