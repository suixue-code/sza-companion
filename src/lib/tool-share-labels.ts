import type { ToolShareCopy } from '../i18n/tool-share';

export type ToolSharePreset = {
	heading: string;
	lead: string;
	discordHint: string;
	hint?: string;
};

export interface ToolLinkShareLabels extends ToolShareCopy {
	heading: string;
	lead: string;
	discordHint: string;
	hint?: string;
}

export type ToolShareMessages = ToolShareCopy & {
	copiedSummary: string;
	copiedLink: string;
	discord: string;
	nativeShared: string;
	nativeFallback: string;
};

export function messagesFromToolShareCopy(copy: ToolShareCopy): ToolShareMessages {
	return {
		...copy,
		copiedSummary: copy.statusCopiedSummary,
		copiedLink: copy.statusCopiedLink,
		discord: copy.statusDiscord,
		nativeShared: copy.statusNativeShared,
		nativeFallback: copy.statusNativeFallback,
	};
}

export function mergeToolShareLabels(copy: ToolShareCopy, preset: ToolSharePreset): ToolLinkShareLabels {
	return {
		...copy,
		heading: preset.heading,
		lead: preset.lead,
		discordHint: preset.discordHint,
		hint: preset.hint,
	};
}
