import { describe, expect, it } from 'vitest';
import { parseLoadoutUrlState, serializeLoadoutUrlState } from './loadout-url-state';

describe('loadout-url-state', () => {
	it('round-trips scenario wave and owned classes', () => {
		const params = new URLSearchParams(
			serializeLoadoutUrlState({
				scenario: 'duo',
				targetWave: 80,
				ownedClassIds: ['medic', 'marksman'],
			}) as Record<string, string>,
		);
		expect(parseLoadoutUrlState(params)).toMatchObject({
			scenario: 'duo',
			targetWave: 80,
		});
		expect(parseLoadoutUrlState(params).ownedClassIds?.sort()).toEqual(['marksman', 'medic']);
	});

	it('ignores invalid scenario and unknown classes', () => {
		const params = new URLSearchParams('scenario=invalid&owned=medic,hacker&wave=0');
		expect(parseLoadoutUrlState(params)).toEqual({
			ownedClassIds: ['medic'],
		});
	});
});
