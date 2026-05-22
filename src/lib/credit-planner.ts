export type PlannerGoal =
	| 'farm_credits'
	| 'unlock_first_class'
	| 'push_necromancer'
	| 'solo_high_wave'
	| 'team_support'
	| 'balanced_progression';

export interface PlannerInput {
	credits: number;
	goal: PlannerGoal;
	ownedClassIds: string[];
	sessionsPerDay?: number;
}

export interface PlannerResult {
	recommendedAction: string;
	targetUnlock: string | null;
	creditsGap: number;
	estimatedSessions: number | null;
	checklist: string[];
	warnings: string[];
}

const CLASS_COSTS: Record<string, number> = {
	medic: 10000,
	marksman: 15000,
	engineer: 20000,
	ninja: 25000,
	demolitionist: 50000,
	tactician: 75000,
	bastion: 200000,
	necromancer: 250000,
};

function has(owned: string[], id: string) {
	return owned.includes(id);
}

function sessionsToTarget(gap: number, sessionsPerDay: number) {
	if (gap <= 0) return 0;
	const perSession = 8000;
	return Math.ceil(gap / perSession / Math.max(sessionsPerDay, 1));
}

export function planCredits(input: PlannerInput): PlannerResult {
	const { credits, goal, ownedClassIds } = input;
	const sessionsPerDay = input.sessionsPerDay ?? 3;
	const checklist: string[] = [];
	const warnings: string[] = [];

	checklist.push('Redeem active code Zombies (2,500 Credits) before spending if not done this session.');
	checklist.push('In-run priority: handgun → shotgun (~150) → rifle (~750) before heavy class spends.');

	if (goal === 'farm_credits') {
		if (!has(ownedClassIds, 'marksman') && credits >= 15000) {
			return {
				recommendedAction: 'Unlock Marksman for Deadeye pierce + rifle path — best Credits/min for farming.',
				targetUnlock: 'Marksman (15,000 Credits)',
				creditsGap: Math.max(0, 15000 - credits),
				estimatedSessions: sessionsToTarget(Math.max(0, 15000 - credits), sessionsPerDay),
				checklist: [...checklist, 'Avoid Demolitionist/Ninja until farm route is stable.', 'Vote Auto Skip only after barricade + turret placed.'],
				warnings: [],
			};
		}
		return {
			recommendedAction: 'Keep Survivor/Medic, rush shotgun then rifle. Do not buy cosmetic gear or extra turrets early.',
			targetUnlock: credits >= 15000 ? 'Marksman (15,000 Credits)' : 'Shotgun upgrade first',
			creditsGap: credits >= 15000 ? 0 : Math.max(0, 15000 - credits),
			estimatedSessions: credits >= 15000 ? null : sessionsToTarget(Math.max(0, 15000 - credits), sessionsPerDay),
			checklist: [...checklist, 'Track credits per minute, not total kills.'],
			warnings: [],
		};
	}

	if (goal === 'unlock_first_class') {
		if (credits >= 15000 && !has(ownedClassIds, 'marksman')) {
			return {
				recommendedAction: 'Unlock Marksman — best solo value first unlock (A-tier, 15,000 Credits).',
				targetUnlock: 'Marksman',
				creditsGap: 0,
				estimatedSessions: 0,
				checklist: [...checklist, 'Pair with rifle weapon path after unlock.'],
				warnings: ['Avoid Ninja (25,000) — C-tier for late waves.'],
			};
		}
		if (credits >= 10000 && !has(ownedClassIds, 'medic')) {
			return {
				recommendedAction: 'Unlock Medic — cheapest A-tier (10,000 Credits) for co-op support.',
				targetUnlock: 'Medic',
				creditsGap: 0,
				estimatedSessions: 0,
				checklist: [...checklist, 'Place healing behind barricade line in public lobbies.'],
				warnings: [],
			};
		}
		const target = credits >= 12000 ? 'Marksman (15,000)' : 'Medic (10,000)';
		const gap = credits >= 12000 ? 15000 - credits : 10000 - credits;
		return {
			recommendedAction: gap <= 0 ? 'Ready to unlock — pick Medic for co-op or Marksman for solo.' : `Keep banking — you are ${gap.toLocaleString()} Credits short of ${target}.`,
			targetUnlock: target,
			creditsGap: Math.max(0, gap),
			estimatedSessions: sessionsToTarget(Math.max(0, gap), sessionsPerDay),
			checklist,
			warnings: ['Do not spend on Ninja or Demolitionist as first unlock.'],
		};
	}

	if (goal === 'push_necromancer') {
		if (has(ownedClassIds, 'necromancer')) {
			return {
				recommendedAction: 'Necromancer owned — focus Death Nova on compressed packs; Soul Harvest after dense wave clears.',
				targetUnlock: null,
				creditsGap: 0,
				estimatedSessions: null,
				checklist: [...checklist, 'Pair with Tactician anchor in team leaderboard runs.'],
				warnings: [],
			};
		}
		const gap = 250000 - credits;
		if (gap > 0) {
			warnings.push('Do not buy Bastion (200k) or low-impact gear while saving for Necromancer.');
			warnings.push('Hardcore mode pays 7.5 Credits/zombie after May 8 patch — factor into farm route.');
		}
		return {
			recommendedAction: gap <= 0 ? 'Unlock Necromancer now — S-tier late-wave scaler.' : `Save aggressively — ${gap.toLocaleString()} Credits until Necromancer (250,000).`,
			targetUnlock: 'Necromancer (250,000 Credits)',
			creditsGap: Math.max(0, gap),
			estimatedSessions: sessionsToTarget(Math.max(0, gap), sessionsPerDay),
			checklist: [...checklist, 'Master Marksman or Tactician first — Necromancer kit needs active management.'],
			warnings,
		};
	}

	if (goal === 'solo_high_wave') {
		if (!has(ownedClassIds, 'marksman') && credits < 15000) {
			const gap = 15000 - credits;
			return {
				recommendedAction: 'Bank for Marksman first — solo carry before expensive Legendary picks.',
				targetUnlock: 'Marksman (15,000 Credits)',
				creditsGap: Math.max(0, gap),
				estimatedSessions: sessionsToTarget(Math.max(0, gap), sessionsPerDay),
				checklist,
				warnings: [],
			};
		}
		return {
			recommendedAction: 'Run Marksman + rifle; barricade stairwell choke on Rooftop Map. Save toward Tactician (75k) if lanes collapse.',
			targetUnlock: has(ownedClassIds, 'tactician') ? null : 'Tactician (75,000 Credits) optional anchor',
			creditsGap: has(ownedClassIds, 'tactician') ? 0 : Math.max(0, 75000 - credits),
			estimatedSessions: null,
			checklist: [...checklist, 'Sonar Ping elites before they reach barricade line.'],
			warnings: [],
		};
	}

	if (goal === 'team_support') {
		if (!has(ownedClassIds, 'medic')) {
			const gap = 10000 - credits;
			return {
				recommendedAction: gap <= 0 ? 'Unlock Medic for co-op sustain.' : `Bank ${gap.toLocaleString()} more for Medic (10,000).`,
				targetUnlock: 'Medic (10,000 Credits)',
				creditsGap: Math.max(0, gap),
				estimatedSessions: sessionsToTarget(Math.max(0, gap), sessionsPerDay),
				checklist: [...checklist, 'Medic earns Credits from healing — dev-confirmed Feb 2026 patch.'],
				warnings: [],
			};
		}
		if (!has(ownedClassIds, 'tactician')) {
			const gap = 75000 - credits;
			return {
				recommendedAction: 'Next: Tactician for Steel Barricades + Vanguard Turret elite targeting.',
				targetUnlock: 'Tactician (75,000 Credits)',
				creditsGap: Math.max(0, gap),
				estimatedSessions: sessionsToTarget(Math.max(0, gap), sessionsPerDay),
				checklist: [...checklist, 'Best duo with Medic: anchor + sustain.'],
				warnings: [],
			};
		}
		return {
			recommendedAction: 'Team core unlocked — add Marksman carry or save toward Bastion (200k) for Bunker invincibility.',
			targetUnlock: 'Bastion (200,000 Credits) or Marksman if missing',
			creditsGap: 0,
			estimatedSessions: null,
			checklist,
			warnings: [],
		};
	}

	// balanced_progression
	if (credits < 15000 && !has(ownedClassIds, 'marksman') && !has(ownedClassIds, 'medic')) {
		return {
			recommendedAction: credits >= 10000 ? 'Unlock Medic or save 5k more for Marksman.' : 'Farm 2–3 runs with shotgun upgrade; redeem Zombies code.',
			targetUnlock: credits >= 10000 ? 'Medic or Marksman' : 'Shotgun + 10k Medic',
			creditsGap: Math.max(0, (credits >= 10000 ? 15000 : 10000) - credits),
			estimatedSessions: sessionsToTarget(Math.max(0, 10000 - credits), sessionsPerDay),
			checklist,
			warnings: [],
		};
	}
	return {
		recommendedAction: 'Mid progression — bank toward Tactician (75k) or Necromancer (250k) depending on solo vs team focus.',
		targetUnlock: 'Tactician (75,000) or Necromancer (250,000)',
		creditsGap: Math.max(0, 75000 - credits),
		estimatedSessions: null,
		checklist: [...checklist, 'See tier list for playstyle-specific picks.'],
		warnings: [],
	};
}
