import { describe, expect, it } from 'vitest';
import { planCredits } from './credit-planner';

describe('planCredits', () => {
	it('recommends Marksman when farming with enough credits', () => {
		const result = planCredits({
			credits: 16000,
			goal: 'farm_credits',
			ownedClassIds: ['survivor'],
		});
		expect(result.targetUnlock).toContain('Marksman');
		expect(result.creditsGap).toBe(0);
	});

	it('calculates gap toward Necromancer', () => {
		const result = planCredits({
			credits: 50000,
			goal: 'push_necromancer',
			ownedClassIds: ['survivor', 'marksman'],
		});
		expect(result.creditsGap).toBe(200000);
		expect(result.targetUnlock).toContain('Necromancer');
	});

	it('prefers Medic for team_support when unowned', () => {
		const result = planCredits({
			credits: 8000,
			goal: 'team_support',
			ownedClassIds: ['survivor'],
		});
		expect(result.targetUnlock).toContain('Medic');
		expect(result.creditsGap).toBe(2000);
	});

	it('returns zero sessions when already can unlock first class', () => {
		const result = planCredits({
			credits: 15000,
			goal: 'unlock_first_class',
			ownedClassIds: ['survivor'],
		});
		expect(result.estimatedSessions).toBe(0);
		expect(result.recommendedAction).toMatch(/Marksman/i);
	});
});
