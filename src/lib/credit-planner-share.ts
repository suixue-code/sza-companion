import type { PlannerGoal, PlannerInput, PlannerResult } from './credit-planner';

const GOAL_LABELS: Record<PlannerGoal, string> = {
	farm_credits: 'Credit farming',
	unlock_first_class: 'First class unlock',
	push_necromancer: 'Save for Necromancer',
	solo_high_wave: 'Solo high wave',
	team_support: 'Team support',
	balanced_progression: 'Balanced progression',
};

export function formatPlannerShareText(input: PlannerInput, result: PlannerResult, shareUrl: string): string {
	const fmt = new Intl.NumberFormat('en-US');
	const goalLabel = GOAL_LABELS[input.goal];
	const target = result.targetUnlock ? ` · Target: ${result.targetUnlock}` : '';
	const gap =
		result.creditsGap > 0 ? ` · Gap: ${fmt.format(result.creditsGap)} Credits` : ' · Ready to spend';
	return `[SZA Companion] Credit Planner · ${fmt.format(input.credits)} Credits · Goal: ${goalLabel} · Next: ${result.recommendedAction}${target}${gap} · ${shareUrl}`;
}

export function buildPlannerSocialMeta(input: PlannerInput, result: PlannerResult, shareUrl: string) {
	const text = formatPlannerShareText(input, result, shareUrl);
	return {
		url: shareUrl,
		title: `SZA Companion · Credit Planner (${GOAL_LABELS[input.goal]})`,
		text,
		hashtags: 'SurviveZombieArena,Roblox',
	};
}
