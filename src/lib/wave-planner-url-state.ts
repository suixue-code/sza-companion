import type { WavePlannerInput } from './wave-planner';
import { syncToolUrlState } from './shareable-url';

const TIERS = ['starter', 'marksman', 'tactician', 'necromancer'] as const;

function flag(value: boolean): string {
	return value ? '1' : '0';
}

function parseFlag(raw: string | null): boolean {
	return raw === '1' || raw === 'true';
}

export function serializeWavePlannerUrlState(input: WavePlannerInput): Record<string, string | undefined> {
	return {
		from: String(Math.max(1, Math.floor(input.currentWave))),
		to: String(Math.max(1, Math.floor(input.targetWave))),
		tier: input.classTier,
		rifle: flag(input.hasRifle),
		barricade: flag(input.hasBarricade),
		turret: flag(input.hasTurret),
		autoskip: flag(input.autoSkipVotes),
	};
}

export function parseWavePlannerUrlState(params: URLSearchParams): Partial<WavePlannerInput> {
	const state: Partial<WavePlannerInput> = {};
	const fromRaw = params.get('from');
	const toRaw = params.get('to');
	if (fromRaw != null) {
		const from = Number(fromRaw);
		if (Number.isFinite(from) && from >= 1) state.currentWave = Math.floor(from);
	}
	if (toRaw != null) {
		const to = Number(toRaw);
		if (Number.isFinite(to) && to >= 1) state.targetWave = Math.floor(to);
	}
	const tier = params.get('tier');
	if (tier && TIERS.includes(tier as (typeof TIERS)[number])) {
		state.classTier = tier as WavePlannerInput['classTier'];
	}
	if (params.has('rifle')) state.hasRifle = parseFlag(params.get('rifle'));
	if (params.has('barricade')) state.hasBarricade = parseFlag(params.get('barricade'));
	if (params.has('turret')) state.hasTurret = parseFlag(params.get('turret'));
	if (params.has('autoskip')) state.autoSkipVotes = parseFlag(params.get('autoskip'));
	return state;
}

export function syncWavePlannerUrlState(input: WavePlannerInput, pathname?: string): string {
	return syncToolUrlState(serializeWavePlannerUrlState(input), pathname);
}

export function hasWavePlannerUrlState(params: URLSearchParams): boolean {
	return (
		params.has('from') ||
		params.has('to') ||
		params.has('tier') ||
		params.has('rifle') ||
		params.has('barricade') ||
		params.has('turret') ||
		params.has('autoskip')
	);
}
