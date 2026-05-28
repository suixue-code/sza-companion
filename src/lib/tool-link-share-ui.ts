import { init as initShareon } from 'shareon';
import 'shareon/css';
import {
	announceStatus,
	canUseNativeWebShare,
	copyTextToClipboard,
	flashButton,
	nativeWebShare,
	type SocialShareMeta,
} from './share';
import { messagesFromToolShareCopy, type ToolShareMessages } from './tool-share-labels';
import { getToolShareCopy } from '../i18n/tool-share';

export interface ToolLinkShareIds {
	previewText?: string;
	copyText: string;
	copyLink?: string;
	redditText?: string;
	discord?: string;
	native?: string;
	status: string;
	shareon: string;
}

export type ToolShareTrackEvent = 'loadout_share' | 'planner_share' | 'wave_share';

export interface ToolLinkShareConfig {
	ids: ToolLinkShareIds;
	trackEventName: ToolShareTrackEvent;
	messages?: ToolShareMessages;
	getShareText: () => string;
	getRedditText?: () => string;
	getShareUrl: () => string;
	getSocialMeta: () => SocialShareMeta;
}

function applyShareonMeta(rootSelector: string, meta: SocialShareMeta) {
	const root = document.querySelector(rootSelector) as HTMLElement | null;
	if (!root) return;

	root.dataset.url = meta.url;
	root.dataset.title = meta.title;

	const telegram = root.querySelector('.telegram') as HTMLElement | null;
	const whatsapp = root.querySelector('.whatsapp') as HTMLElement | null;
	const twitter = root.querySelector('.twitter') as HTMLElement | null;
	const reddit = root.querySelector('.reddit') as HTMLElement | null;

	telegram && (telegram.dataset.text = meta.text);
	whatsapp && (whatsapp.dataset.text = meta.text);
	twitter && (twitter.dataset.hashtags = meta.hashtags);
	reddit && (reddit.dataset.title = meta.title);

	initShareon();
}

function track(event: ToolShareTrackEvent, props: Record<string, string>) {
	import('./analytics.ts').then(({ trackEvent }) => {
		trackEvent(event, props);
	});
}

export function mountToolLinkShare(config: ToolLinkShareConfig) {
	const messages = config.messages ?? messagesFromToolShareCopy(getToolShareCopy('en'));
	const { ids } = config;
	const statusEl = document.getElementById(ids.status) as HTMLElement | null;
	const copyTextButton = document.getElementById(ids.copyText) as HTMLButtonElement | null;
	const copyLinkButton = ids.copyLink ? (document.getElementById(ids.copyLink) as HTMLButtonElement | null) : null;
	const redditTextButton = ids.redditText ? (document.getElementById(ids.redditText) as HTMLButtonElement | null) : null;
	const discordButton = ids.discord ? (document.getElementById(ids.discord) as HTMLButtonElement | null) : null;
	const nativeButton = ids.native ? (document.getElementById(ids.native) as HTMLButtonElement | null) : null;

	if (nativeButton) nativeButton.hidden = !canUseNativeWebShare();

	copyTextButton?.addEventListener('click', async () => {
		const text = config.getShareText();
		if (!text) return;
		const defaultLabel = copyTextButton.textContent || messages.flashCopied;
		copyTextButton.disabled = true;
		await copyTextToClipboard(text);
		flashButton(copyTextButton, messages.flashCopied, defaultLabel);
		announceStatus(statusEl, messages.copiedSummary);
		track(config.trackEventName, { format: 'text', channel: 'clipboard' });
	});

	copyLinkButton?.addEventListener('click', async () => {
		const url = config.getShareUrl();
		const defaultLabel = copyLinkButton!.textContent || messages.flashLinkCopied;
		copyLinkButton!.disabled = true;
		await copyTextToClipboard(url);
		flashButton(copyLinkButton!, messages.flashLinkCopied, defaultLabel);
		announceStatus(statusEl, messages.copiedLink);
		track(config.trackEventName, { format: 'url', channel: 'clipboard' });
	});

	redditTextButton?.addEventListener('click', async () => {
		const text = config.getRedditText ? config.getRedditText() : config.getShareText();
		if (!text) return;
		const defaultLabel = redditTextButton!.textContent || messages.flashCopied;
		redditTextButton!.disabled = true;
		await copyTextToClipboard(text);
		flashButton(redditTextButton!, messages.flashCopied, defaultLabel);
		announceStatus(statusEl, messages.reddit);
		track(config.trackEventName, { format: 'text', channel: 'reddit' });
	});

	discordButton?.addEventListener('click', async () => {
		const text = config.getShareText();
		const defaultLabel = discordButton!.textContent || messages.flashCopied;
		discordButton!.disabled = true;
		await copyTextToClipboard(text);
		flashButton(discordButton!, messages.flashCopied, defaultLabel);
		announceStatus(statusEl, messages.discord);
		track(config.trackEventName, { format: 'text', channel: 'discord' });
	});

	nativeButton?.addEventListener('click', async () => {
		const meta = config.getSocialMeta();
		const defaultLabel = nativeButton!.textContent || messages.moreApps;
		nativeButton!.disabled = true;
		try {
			const shared = await nativeWebShare(meta);
			if (shared) {
				flashButton(nativeButton!, messages.flashShared, defaultLabel);
				announceStatus(statusEl, messages.nativeShared);
				track(config.trackEventName, { format: 'native', channel: 'web_share' });
				return;
			}
		} catch (error) {
			if (error instanceof Error && error.name === 'AbortError') {
				nativeButton!.disabled = false;
				nativeButton!.textContent = defaultLabel;
				return;
			}
		}
		await copyTextToClipboard(config.getShareText());
		flashButton(nativeButton!, messages.flashCopiedText, defaultLabel);
		announceStatus(statusEl, messages.nativeFallback);
	});

	document.querySelector(`#${ids.shareon}`)?.addEventListener('click', (event) => {
		const target = (event.target as HTMLElement | null)?.closest('[data-share-network]') as HTMLElement | null;
		if (!target) return;
		track(config.trackEventName, { format: 'link', channel: target.dataset.shareNetwork || 'unknown' });
	});

	return {
		refresh() {
			if (ids.previewText) {
				const preview = document.getElementById(ids.previewText);
				if (preview) preview.textContent = config.getShareText();
			}
			applyShareonMeta(`#${ids.shareon}`, config.getSocialMeta());
		},
	};
}
