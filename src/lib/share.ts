import type { ShareCardPayload } from './loadout-share-card';
import { formatShareText } from './loadout-share-card';

export interface SocialShareMeta {
	url: string;
	title: string;
	text: string;
	hashtags: string;
}

export function buildSocialShareMeta(payload: ShareCardPayload): SocialShareMeta {
	return {
		url: payload.siteUrl,
		title: `${payload.brandName} · ${payload.scenarioLabel}`,
		text: formatShareText(payload),
		hashtags: 'SurviveZombieArena,Roblox',
	};
}

export async function copyTextToClipboard(text: string): Promise<void> {
	if (navigator.clipboard?.writeText) {
		await navigator.clipboard.writeText(text);
		return;
	}
	const textarea = document.createElement('textarea');
	textarea.value = text;
	textarea.setAttribute('readonly', '');
	textarea.style.position = 'fixed';
	textarea.style.opacity = '0';
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
}

export function canCopyImageToClipboard(): boolean {
	return (
		typeof ClipboardItem !== 'undefined' &&
		typeof navigator.clipboard?.write === 'function'
	);
}

export async function copyPngBlobToClipboard(blob: Blob): Promise<boolean> {
	if (!canCopyImageToClipboard()) return false;
	await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
	return true;
}

export async function dataUrlToBlob(dataUrl: string): Promise<Blob> {
	const response = await fetch(dataUrl);
	return response.blob();
}

export function canUseNativeWebShare(): boolean {
	return typeof navigator.share === 'function';
}

export async function nativeWebShare(meta: SocialShareMeta): Promise<boolean> {
	if (!canUseNativeWebShare()) return false;
	const shareData: ShareData = {
		title: meta.title,
		text: meta.text,
		url: meta.url,
	};
	if (navigator.canShare && !navigator.canShare(shareData)) return false;
	await navigator.share(shareData);
	return true;
}

export function flashButton(button: HTMLButtonElement, doneLabel: string, defaultLabel: string, ms = 1600): void {
	button.textContent = doneLabel;
	window.setTimeout(() => {
		button.textContent = defaultLabel;
		button.disabled = false;
	}, ms);
}

export function announceStatus(node: HTMLElement | null, message: string): void {
	if (!node) return;
	node.textContent = message;
	node.hidden = false;
}
