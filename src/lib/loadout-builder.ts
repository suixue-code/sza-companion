import { buildShareCardPayload, formatShareText } from './loadout-share-card';

export type LoadoutScenario = 'solo' | 'public' | 'duo' | 'full_team' | 'leaderboard';

export interface LoadoutInput {
	scenario: LoadoutScenario;
	ownedClassIds: string[];
	targetWave?: number;
}

export interface LoadoutResult {
	recommendedClass: string;
	weaponPath: string;
	gearTips: string[];
	teamGaps: string[];
	shareText: string;
}

const CLASS_NAMES: Record<string, string> = {
	medic: 'Medic',
	marksman: 'Marksman',
	tactician: 'Tactician',
	necromancer: 'Necromancer',
	demolitionist: 'Demolitionist',
	bastion: 'Bastion',
	engineer: 'Engineer',
};

function has(owned: string[], id: string) {
	return owned.includes(id);
}

const DEFAULT_SHARE_URL = 'https://survivezombiearenaguide.com/tools/loadout-builder/';

export function buildLoadout(input: LoadoutInput, shareUrl = DEFAULT_SHARE_URL): LoadoutResult {
	const { scenario, ownedClassIds, targetWave } = input;
	const weaponPath = 'Handgun → Shotgun (~150 Credits) → Rifle (~750 Credits)';
	const gearTips = [
		'Place one Steel Barricade at the main stairwell entry on Rooftop Map.',
		'Put auto-turret behind the barricade, not in the open.',
		'Buy one Health upgrade by mid-waves before pushing Auto Skip.',
	];
	const teamGaps: string[] = [];

	if (!has(ownedClassIds, 'medic')) teamGaps.push('Missing sustain — Medic heals squad + structures.');
	if (!has(ownedClassIds, 'tactician')) teamGaps.push('Missing anchor — Tactician barricades + Vanguard Turret for elites.');
	if (!has(ownedClassIds, 'marksman') && !has(ownedClassIds, 'necromancer'))
		teamGaps.push('Missing carry DPS — Marksman pierce or Necromancer late scaling.');

	let recommendedClass = 'Marksman';

	if (scenario === 'solo' || scenario === 'public') {
		recommendedClass = has(ownedClassIds, 'marksman') ? 'Marksman' : 'Medic (unlock at 10k) or save for Marksman (15k)';
	} else if (scenario === 'duo') {
		recommendedClass = has(ownedClassIds, 'tactician')
			? 'Tactician + partner Medic or Marksman'
			: 'Medic + Marksman duo — cheapest strong pair';
	} else if (scenario === 'full_team' || scenario === 'leaderboard') {
		recommendedClass = 'Tactician (anchor) + Medic + Marksman + Necromancer/Bastion scaler';
		if (!has(ownedClassIds, 'necromancer') && scenario === 'leaderboard') {
			teamGaps.push('Leaderboard push: save 250,000 Credits for Necromancer Death Nova scaling.');
		}
	}

	const shareText = formatShareText(
		buildShareCardPayload(scenario, recommendedClass, weaponPath, targetWave, shareUrl),
	);

	return { recommendedClass, weaponPath, gearTips, teamGaps, shareText };
}
