import type { WavePlannerInput } from './wave-planner';

const TIER_LABELS: Record<WavePlannerInput['classTier'], string> = {
	starter: 'Survivor / early',
	marksman: 'Marksman',
	tactician: 'Tactician',
	necromancer: 'Necromancer',
};

function gearLabel(input: WavePlannerInput): string {
	const parts: string[] = [];
	if (input.hasRifle) parts.push('Rifle');
	if (input.hasBarricade) parts.push('Barricade');
	if (input.hasTurret) parts.push('Turret');
	return parts.length > 0 ? parts.join('+') : 'No core gear ticked';
}

export function formatWavePlannerShareText(
	input: WavePlannerInput,
	summary: string,
	estimatedBuyPhases: number,
	feasible: boolean,
	shareUrl: string,
): string {
	const verdict = feasible ? 'Feasible' : 'Stretch goal';
	return `[SZA Companion] Wave Push · ${input.currentWave} → ${input.targetWave} · ${TIER_LABELS[input.classTier]} · ${gearLabel(input)} · ${verdict} · ~${estimatedBuyPhases} buy phases · ${summary} · ${shareUrl}`;
}

export function formatWavePlannerRedditText(
	input: WavePlannerInput,
	summary: string,
	estimatedBuyPhases: number,
	feasible: boolean,
	shareUrl: string,
): string {
	const verdict = feasible ? 'feasible' : 'a stretch';
	return [
		`Wave push check: ${input.currentWave} -> ${input.targetWave}`,
		'',
		`Class tier: ${TIER_LABELS[input.classTier]}`,
		`Core gear: ${gearLabel(input)}`,
		`Auto Skip pressure: ${input.autoSkipVotes ? 'yes' : 'no'}`,
		`Verdict: ${verdict}`,
		`Estimated buy phases: ~${estimatedBuyPhases}`,
		'',
		summary,
		'',
		`Planner link: ${shareUrl}`,
		'Unofficial estimate for Survive Zombie Arena; real lobby coordination still matters.',
	].join('\n');
}

export function buildWavePlannerSocialMeta(
	input: WavePlannerInput,
	summary: string,
	estimatedBuyPhases: number,
	feasible: boolean,
	shareUrl: string,
) {
	const text = formatWavePlannerShareText(input, summary, estimatedBuyPhases, feasible, shareUrl);
	return {
		url: shareUrl,
		title: `SZA Companion · Wave Push ${input.currentWave}→${input.targetWave}`,
		text,
		hashtags: 'SurviveZombieArena,Roblox',
	};
}
