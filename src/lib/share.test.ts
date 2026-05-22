import { describe, expect, it } from 'vitest';
import { buildShareCardPayload, formatShareText } from './loadout-share-card';
import { buildSocialShareMeta } from './share';

describe('share', () => {
	it('builds compact social metadata from loadout payload', () => {
		const payload = buildShareCardPayload(
			'full_team',
			'Tactician + Medic',
			'Handgun → Rifle',
			50,
			'https://szacompanion.com/tools/loadout-builder/',
		);
		const meta = buildSocialShareMeta(payload);
		expect(meta.title).toBe('SZA Companion · Team Loadout');
		expect(meta.url).toBe('https://szacompanion.com/tools/loadout-builder/');
		expect(meta.text).toBe(formatShareText(payload));
		expect(meta.hashtags).toContain('SurviveZombieArena');
	});
});
