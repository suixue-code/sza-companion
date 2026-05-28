import { describe, expect, it } from 'vitest';
import { planWavePush } from './wave-planner';
import { formatWavePlannerRedditText, formatWavePlannerShareText } from './wave-planner-share';
import { parseWavePlannerUrlState, serializeWavePlannerUrlState } from './wave-planner-url-state';

describe('wave planner share + url', () => {
	it('serializes gear flags and wave range', () => {
		const params = new URLSearchParams(
			serializeWavePlannerUrlState({
				currentWave: 10,
				targetWave: 40,
				classTier: 'marksman',
				hasRifle: true,
				hasBarricade: true,
				hasTurret: false,
				autoSkipVotes: true,
			}) as Record<string, string>,
		);
		expect(parseWavePlannerUrlState(params)).toMatchObject({
			currentWave: 10,
			targetWave: 40,
			classTier: 'marksman',
			hasRifle: true,
			hasBarricade: true,
			hasTurret: false,
			autoSkipVotes: true,
		});
	});

	it('formats share text with verdict and url', () => {
		const input = {
			currentWave: 10,
			targetWave: 25,
			classTier: 'marksman' as const,
			hasRifle: true,
			hasBarricade: true,
			hasTurret: true,
			autoSkipVotes: false,
		};
		const result = planWavePush(input);
		const text = formatWavePlannerShareText(
			input,
			result.summary,
			result.estimatedBuyPhases,
			result.feasible,
			'https://survivezombiearenaguide.com/tools/wave-planner/?from=10&to=25',
		);
		expect(text).toContain('Wave Push');
		expect(text).toContain('10 → 25');
		expect(text).toContain('https://survivezombiearenaguide.com/tools/wave-planner/?from=10&to=25');
	});

	it('formats a Reddit-ready wave draft', () => {
		const input = {
			currentWave: 10,
			targetWave: 25,
			classTier: 'marksman' as const,
			hasRifle: true,
			hasBarricade: true,
			hasTurret: true,
			autoSkipVotes: false,
		};
		const result = planWavePush(input);
		const text = formatWavePlannerRedditText(
			input,
			result.summary,
			result.estimatedBuyPhases,
			result.feasible,
			'https://survivezombiearenaguide.com/tools/wave-planner/?from=10&to=25',
		);
		expect(text).toContain('Wave push check: 10 -> 25');
		expect(text).toContain('Class tier: Marksman');
		expect(text).toContain('Planner link: https://survivezombiearenaguide.com/tools/wave-planner/?from=10&to=25');
		expect(text).toContain('Unofficial estimate');
	});
});
