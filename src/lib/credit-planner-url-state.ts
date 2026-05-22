import type { PlannerGoal, PlannerInput } from './credit-planner';
import { parseOwnedClassParam, serializeOwnedClassParam, syncToolUrlState } from './shareable-url';

export const PLANNER_CLASS_IDS = [
	'medic',
	'marksman',
	'engineer',
	'ninja',
	'demolitionist',
	'tactician',
	'bastion',
	'necromancer',
] as const;

const GOALS: PlannerGoal[] = [
	'farm_credits',
	'unlock_first_class',
	'push_necromancer',
	'solo_high_wave',
	'team_support',
	'balanced_progression',
];

export function serializePlannerUrlState(input: PlannerInput): Record<string, string | undefined> {
	return {
		credits: String(Math.max(0, Math.floor(input.credits))),
		spd: String(Math.max(1, Math.min(12, Math.floor(input.sessionsPerDay ?? 3)))),
		goal: input.goal,
		owned: serializeOwnedClassParam(input.ownedClassIds.filter((id) => id !== 'survivor')),
	};
}

export function parsePlannerUrlState(params: URLSearchParams): Partial<PlannerInput> {
	const state: Partial<PlannerInput> = {};
	const creditsRaw = params.get('credits');
	if (creditsRaw != null) {
		const credits = Number(creditsRaw);
		if (Number.isFinite(credits) && credits >= 0) state.credits = Math.floor(credits);
	}
	const spdRaw = params.get('spd');
	if (spdRaw != null) {
		const spd = Number(spdRaw);
		if (Number.isFinite(spd) && spd >= 1) state.sessionsPerDay = Math.min(12, Math.floor(spd));
	}
	const goal = params.get('goal');
	if (goal && GOALS.includes(goal as PlannerGoal)) state.goal = goal as PlannerGoal;
	const owned = parseOwnedClassParam(params.get('owned'), PLANNER_CLASS_IDS);
	if (owned.length > 0) state.ownedClassIds = ['survivor', ...owned];
	return state;
}

export function syncPlannerUrlState(input: PlannerInput, pathname?: string): string {
	return syncToolUrlState(serializePlannerUrlState(input), pathname);
}

export function hasPlannerUrlState(params: URLSearchParams): boolean {
	return params.has('credits') || params.has('spd') || params.has('goal') || params.has('owned');
}
