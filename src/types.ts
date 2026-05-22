/** Single source for sitewide “last reviewed” copy and Article dates (see `src/data/site-meta.json`). */
export interface SiteMeta {
	siteBrandName: string;
	siteOrigin: string;
	robloxExperienceUrl: string;
	robloxExperienceLabel: string;
	lastPublicReview: string;
	/** English display date (default / en pages). */
	lastPublicReviewDisplay: string;
	lastPublicReviewDisplayZhCn: string;
	lastPublicReviewDisplayEs: string;
	lastPublicReviewDisplayPtBr?: string;
	gameContentVersionLabel: string;
	gameContentVersionLabelZhCn: string;
	gameContentVersionLabelEs: string;
	gameContentVersionLabelPtBr?: string;
	lastPublicReviewNoteEn?: string;
	lastPublicReviewNoteEs?: string;
	lastPublicReviewNotePtBr?: string;
	lastPublicReviewNoteZhCn?: string;
	lastSourceLedgerCapture?: string;
	developerName?: string;
}

export type Confidence = 'high' | 'medium' | 'low';

export type CodeStatus = 'active' | 'expired' | 'unverified';

export interface SourceInfo {
	name: string;
	url: string;
	type: 'official' | 'guide' | 'wiki' | 'community' | 'game-test' | 'search';
}

export interface GameCode {
	code: string;
	reward: string;
	status: CodeStatus;
	addedDate?: string;
	lastCheckedAt: string;
	source: string;
	confidence: Confidence;
	notes?: string;
	/** Optional extra public sources (short labels). */
	sources?: string[];
	/** When trackers disagree, surface it explicitly in the UI. */
	conflictNote?: string;
	/** Optional ISO date hint if a source expects expiry; often unknown. */
	expiresAfter?: string;
}

export interface Recipe {
	name: string;
	zone: string;
	zoneNumber: number;
	location: string;
	requiredSlimes: string[];
	result: string;
	notes: string;
	confidence: Confidence;
	source: string;
	lastCheckedAt: string;
}

export interface CalculatorTarget {
	targetName: string;
	rarity: string;
	baseOdds: number;
	source: string;
	confidence: Confidence;
	notes?: string;
}

export interface SlimeSummary {
	name: string;
	rarity: string;
	role: string;
	knownOdds?: string;
	recommendedStage: string;
	confidence: Confidence;
	source: string;
}

export interface FaqItem {
	question: string;
	answer: string;
}

export interface GuidePageData {
	title: string;
	description: string;
	path: string;
	priority: 'P0' | 'P1';
	lastUpdated: string;
	confidence: Confidence;
	quickAnswer: string;
	sections: {
		heading: string;
		body: string;
		items?: string[];
	}[];
	commonMistakes: string[];
	faq: FaqItem[];
	related: { label: string; href: string }[];
	shortsHook: string;
}
