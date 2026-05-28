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

export function formatPlannerRedditText(input: PlannerInput, result: PlannerResult, shareUrl: string): string {
	const fmt = new Intl.NumberFormat('en-US');
	const goalLabel = GOAL_LABELS[input.goal];
	const target = result.targetUnlock ? result.targetUnlock : 'No class spend yet';
	const gap =
		result.creditsGap > 0 ? `${fmt.format(result.creditsGap)} Credits short` : 'ready or no Credit gap';
	const checklist = result.checklist.slice(0, 3).map((item) => `- ${item}`).join('\n');
	const warnings =
		result.warnings.length > 0
			? `\n\nWatch out:\n${result.warnings.slice(0, 2).map((item) => `- ${item}`).join('\n')}`
			: '';

	return [
		`Credit plan for Survive Zombie Arena (${goalLabel})`,
		'',
		`Current Credits: ${fmt.format(input.credits)}`,
		`Next action: ${result.recommendedAction}`,
		`Target: ${target}`,
		`Gap: ${gap}`,
		'',
		'Checklist:',
		checklist,
		warnings,
		'',
		`Planner link: ${shareUrl}`,
		'Unofficial estimate; confirm class costs in the Roblox lobby shop before spending.',
	]
		.filter(Boolean)
		.join('\n');
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
