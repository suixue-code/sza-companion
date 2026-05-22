export type WavePlannerInput = {
	currentWave: number;
	targetWave: number;
	hasBarricade: boolean;
	hasTurret: boolean;
	hasRifle: boolean;
	classTier: 'starter' | 'marksman' | 'tactician' | 'necromancer';
	autoSkipVotes: boolean;
};

export type WavePlannerResult = {
	feasible: boolean;
	summary: string;
	checklist: string[];
	risks: string[];
	estimatedBuyPhases: number;
};

export function planWavePush(input: WavePlannerInput): WavePlannerResult {
	const { currentWave, targetWave, hasBarricade, hasTurret, hasRifle, classTier, autoSkipVotes } = input;
	const checklist: string[] = [];
	const risks: string[] = [];
	const gap = Math.max(0, targetWave - currentWave);

	if (gap <= 0) {
		return {
			feasible: true,
			summary: 'Target wave is at or below your current wave — focus on loadout quality and elite priority.',
			checklist: ['Hold chokepoint on Rooftop stairwell.', 'Save Credits for rifle ammo and one spare barricade.'],
			risks: [],
			estimatedBuyPhases: 0,
		};
	}

	if (!hasRifle) {
		checklist.push('Upgrade to rifle before pushing past mid waves — pierce and DPS matter more than extra turrets.');
		risks.push('Shotgun-only loadouts fall off when elites stack on stairwells.');
	}
	if (!hasBarricade) {
		checklist.push('Place at least one Steel Barricade or barricade-tier gear at the main choke.');
		risks.push('Open rotation without a lane lock increases wipe risk on Rooftop Map.');
	}
	if (!hasTurret) {
		checklist.push('Add one turret (Vanguard if Tactician) before voting Auto Skip.');
	}

	const tierScore =
		classTier === 'necromancer' ? 4 : classTier === 'tactician' ? 3 : classTier === 'marksman' ? 2 : 1;
	const gearScore = (hasRifle ? 1 : 0) + (hasBarricade ? 1 : 0) + (hasTurret ? 1 : 0);
	const pushScore = tierScore + gearScore;
	const requiredScore = gap <= 5 ? 3 : gap <= 15 ? 4 : 5;

	if (autoSkipVotes && pushScore < requiredScore) {
		risks.push('Auto Skip with under-geared loadout burns buy phases — you may hit target wave count but wipe before leaderboard credit.');
	}

	const feasible = pushScore >= requiredScore - 1;
	const estimatedBuyPhases = Math.ceil(gap / (autoSkipVotes ? 2.5 : 1.5));

	let summary: string;
	if (feasible) {
		summary = `Push from wave ${currentWave} → ${targetWave} looks realistic with your current kit. Expect ~${estimatedBuyPhases} buy phases if the lobby cooperates.`;
	} else {
		summary = `Wave ${targetWave} is a stretch from wave ${currentWave}. Bank Credits, finish rifle + barricade + turret, and consider Marksman or Tactician before committing.`;
	}

	if (classTier === 'starter') {
		checklist.push('Unlock Marksman (15,000 Credits) or Medic (10,000) before serious high-wave pushes.');
	}
	if (classTier === 'marksman' && gap > 10) {
		checklist.push('Sonar Ping elites before they reach barricades; save Frag Grenade for compressed packs.');
	}
	if (classTier === 'tactician') {
		checklist.push('Spike Trap + Steel Barricade on stairwell; Vanguard Turret targets elites automatically.');
	}
	if (classTier === 'necromancer') {
		checklist.push('Bank minions for Death Nova on dense wave clears — do not detonate early on scattered spawns.');
	}

	return { feasible, summary, checklist, risks, estimatedBuyPhases };
}
