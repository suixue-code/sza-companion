import { describe, expect, it } from 'vitest';
import { buildShareCardPayload, formatShareText, SCENARIO_LABELS } from './loadout-share-card';

describe('loadout-share-card', () => {
	it('labels scenarios for human-readable cards', () => {
		expect(SCENARIO_LABELS.full_team).toBe('Team Loadout');
		expect(SCENARIO_LABELS.leaderboard).toBe('Leaderboard Push Loadout');
	});

	it('formats share text with wave and site url', () => {
		const payload = buildShareCardPayload(
			'duo',
			'Medic + Marksman',
			'Handgun → Shotgun → Rifle',
			80,
			'https://szacompanion.com/tools/loadout-builder/',
		);
		const text = formatShareText(payload);
		expect(text).toContain('[SZA Companion]');
		expect(text).toContain('Duo Loadout');
		expect(text).toContain('Target Wave 80');
		expect(text).toContain('https://szacompanion.com/tools/loadout-builder/');
	});

	it('omits wave segment when not set', () => {
		const payload = buildShareCardPayload('solo', 'Marksman', 'Handgun → Rifle', undefined, 'https://example.com/');
		expect(formatShareText(payload)).not.toContain('Target Wave');
	});
});
