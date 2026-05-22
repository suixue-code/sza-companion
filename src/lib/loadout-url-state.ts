import type { LoadoutInput, LoadoutScenario } from './loadout-builder';
import { parseOwnedClassParam, serializeOwnedClassParam, syncToolUrlState } from './shareable-url';

export const LOADOUT_CLASS_IDS = [
	'medic',
	'marksman',
	'tactician',
	'necromancer',
	'demolitionist',
	'bastion',
	'engineer',
	'ninja',
] as const;

const SCENARIOS: LoadoutScenario[] = ['solo', 'public', 'duo', 'full_team', 'leaderboard'];

export function serializeLoadoutUrlState(input: LoadoutInput): Record<string, string | undefined> {
	return {
		scenario: input.scenario,
		wave: input.targetWave ? String(input.targetWave) : undefined,
		owned: serializeOwnedClassParam(input.ownedClassIds),
	};
}

export function parseLoadoutUrlState(params: URLSearchParams): Partial<LoadoutInput> {
	const state: Partial<LoadoutInput> = {};
	const scenario = params.get('scenario');
	if (scenario && SCENARIOS.includes(scenario as LoadoutScenario)) {
		state.scenario = scenario as LoadoutScenario;
	}
	const waveRaw = params.get('wave');
	if (waveRaw) {
		const wave = Number(waveRaw);
		if (Number.isFinite(wave) && wave >= 1) state.targetWave = Math.floor(wave);
	}
	const owned = parseOwnedClassParam(params.get('owned'), LOADOUT_CLASS_IDS);
	if (owned.length > 0) state.ownedClassIds = owned;
	return state;
}

export function syncLoadoutUrlState(input: LoadoutInput, pathname?: string): string {
	return syncToolUrlState(serializeLoadoutUrlState(input), pathname);
}

export function hasLoadoutUrlState(params: URLSearchParams): boolean {
	return params.has('scenario') || params.has('wave') || params.has('owned');
}
