import 'shareon/css';
import { toPng } from 'html-to-image';
import type { ShareCardPayload } from './loadout-share-card';
import {
	announceStatus,
	buildSocialShareMeta,
	canCopyImageToClipboard,
	copyPngBlobToClipboard,
	dataUrlToBlob,
	flashButton,
} from './share';
import { getToolShareCopy } from '../i18n/tool-share';
import { messagesFromToolShareCopy } from './tool-share-labels';

async function renderShareCardBlob(): Promise<Blob> {
	const node = document.getElementById('loadout-share-card');
	if (!node) throw new Error('Share card node missing');
	const dataUrl = await toPng(node, {
		cacheBust: true,
		pixelRatio: 2,
		backgroundColor: '#141018',
	});
	return dataUrlToBlob(dataUrl);
}

function trackImage(props: Record<string, string>) {
	import('./analytics.ts').then(({ trackEvent }) => {
		trackEvent('loadout_share_image', props);
	});
}

function updateShareCardDom(payload: ShareCardPayload) {
	const setText = (id: string, value: string) => {
		const el = document.getElementById(id);
		if (el) el.textContent = value;
	};
	setText('share-card-scenario', payload.scenarioLabel);
	setText('share-card-class', payload.recommendedClass);
	setText('share-card-weapon', payload.weaponPath);
	setText('share-card-date', `Generated ${payload.generatedDate}`);
	const waveRow = document.getElementById('share-card-wave-row');
	if (payload.targetWave) {
		waveRow?.removeAttribute('hidden');
		setText('share-card-wave', String(payload.targetWave));
	} else {
		waveRow?.setAttribute('hidden', '');
	}
}

export function mountLoadoutShare(options?: { messages?: import('./tool-share-labels').ToolShareMessages }) {
	let latestPayload: ShareCardPayload | null = null;
	let latestShareText = '';
	let latestShareUrl = '';

	const linkShare = mountToolLinkShare({
		ids: {
			previewText: 'loadout-share-text',
			copyText: 'loadout-copy-text',
			copyLink: 'loadout-copy-link',
			discord: 'loadout-share-discord',
			native: 'loadout-share-native',
			status: 'loadout-share-status',
			shareon: 'loadout-shareon',
		},
		trackEventName: 'loadout_share',
		messages: options?.messages,
		getShareText: () => latestShareText,
		getShareUrl: () => latestShareUrl,
		getSocialMeta: () =>
			latestPayload
				? buildSocialShareMeta({ ...latestPayload, siteUrl: latestShareUrl })
				: { url: latestShareUrl, title: 'SZA Companion', text: latestShareText, hashtags: 'SurviveZombieArena,Roblox' },
	});

	const copyPngButton = document.getElementById('loadout-copy-png') as HTMLButtonElement | null;
	const downloadButton = document.getElementById('loadout-download-png') as HTMLButtonElement | null;
	const statusEl = document.getElementById('loadout-share-status') as HTMLElement | null;
	const pngMessages = options?.messages ?? messagesFromToolShareCopy(getToolShareCopy('en'));

	if (copyPngButton) copyPngButton.hidden = !canCopyImageToClipboard();

	copyPngButton?.addEventListener('click', async () => {
		const defaultLabel = copyPngButton.textContent || 'Copy PNG';
		copyPngButton.disabled = true;
		copyPngButton.textContent = pngMessages.generatingPng;
		try {
			const blob = await renderShareCardBlob();
			const copied = await copyPngBlobToClipboard(blob);
			if (copied) {
				flashButton(copyPngButton, pngMessages.flashCopied, defaultLabel);
				announceStatus(statusEl, pngMessages.statusPngCopied);
				trackImage({ format: 'png', channel: 'clipboard' });
				return;
			}
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.download = 'sza-loadout-card.png';
			link.href = url;
			link.click();
			URL.revokeObjectURL(url);
			flashButton(copyPngButton, pngMessages.downloadPng, defaultLabel);
			announceStatus(statusEl, pngMessages.statusPngDownloadFallback);
			trackImage({ format: 'png', channel: 'download_fallback' });
		} catch (_error) {
			flashButton(copyPngButton, pngMessages.flashCopied, defaultLabel);
			announceStatus(statusEl, pngMessages.statusPngFailed);
		}
	});

	downloadButton?.addEventListener('click', async () => {
		const defaultLabel = downloadButton.textContent || 'Download PNG';
		downloadButton.disabled = true;
		downloadButton.textContent = pngMessages.generatingPng;
		try {
			const blob = await renderShareCardBlob();
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.download = 'sza-loadout-card.png';
			link.href = url;
			link.click();
			URL.revokeObjectURL(url);
			flashButton(downloadButton, pngMessages.downloadPng, defaultLabel);
			announceStatus(statusEl, pngMessages.statusPngSaved);
			trackImage({ format: 'png', channel: 'download' });
		} catch (_error) {
			flashButton(downloadButton, pngMessages.flashCopied, defaultLabel);
			announceStatus(statusEl, pngMessages.statusPngFailed);
		}
	});

	return {
		update(payload: ShareCardPayload, shareText: string, shareUrl: string) {
			latestPayload = payload;
			latestShareText = shareText;
			latestShareUrl = shareUrl;
			updateShareCardDom(payload);
			linkShare.refresh();
		},
	};
}
