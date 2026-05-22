import { describe, expect, it } from 'vitest';
import { planCredits } from './credit-planner';
import { formatPlannerShareText } from './credit-planner-share';
import { hasPlannerUrlState, parsePlannerUrlState, serializePlannerUrlState } from './credit-planner-url-state';

describe('credit-planner share url', () => {
	it('serializes and parses planner inputs', () => {
		const input = {
			credits: 2500,
			goal: 'unlock_first_class' as const,
			ownedClassIds: ['survivor', 'medic'],
			sessionsPerDay: 3,
		};
		const params = new URLSearchParams(serializePlannerUrlState(input) as Record<string, string>);
		expect(hasPlannerUrlState(params)).toBe(true);
		expect(parsePlannerUrlState(params)).toEqual({
			credits: 2500,
			goal: 'unlock_first_class',
			sessionsPerDay: 3,
			ownedClassIds: ['survivor', 'medic'],
		});
	});

	it('formats share text with recommendation and link', () => {
		const input = {
			credits: 2500,
			goal: 'unlock_first_class' as const,
			ownedClassIds: ['survivor'],
			sessionsPerDay: 3,
		};
		const result = planCredits(input);
		const text = formatPlannerShareText(input, result, 'https://szacompanion.com/tools/credit-planner/?credits=2500');
		expect(text).toContain('[SZA Companion] Credit Planner');
		expect(text).toContain('2,500 Credits');
		expect(text).toContain('https://szacompanion.com/tools/credit-planner/?credits=2500');
	});
});
