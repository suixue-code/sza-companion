import type { LocaleCode } from './config';

export type ToolShareCopy = {
	heading: string;
	lead: string;
	previewLabel: string;
	quickActionsLabel: string;
	copyText: string;
	copyLink: string;
	copyPng: string;
	downloadPng: string;
	moreApps: string;
	discordTierLabel: string;
	discordButton: string;
	socialTierLabel: string;
	redditLabel: string;
	twitterLabel: string;
	telegramLabel: string;
	whatsappLabel: string;
	copyUrlLabel: string;
	flashCopied: string;
	flashLinkCopied: string;
	flashShared: string;
	flashCopiedText: string;
	statusCopiedSummary: string;
	statusCopiedLink: string;
	statusDiscord: string;
	statusNativeShared: string;
	statusNativeFallback: string;
	statusPngCopied: string;
	statusPngDownloadFallback: string;
	statusPngSaved: string;
	statusPngFailed: string;
	generatingPng: string;
};

const en: ToolShareCopy = {
	heading: 'Share',
	lead: 'Copy a summary or link · teammates open the link to see the same inputs',
	previewLabel: 'Preview',
	quickActionsLabel: 'Quick actions',
	copyText: 'Copy text',
	copyLink: 'Copy link',
	copyPng: 'Copy PNG',
	downloadPng: 'Download PNG',
	moreApps: 'More apps',
	discordTierLabel: 'Discord · most squads',
	discordButton: 'Copy for Discord',
	socialTierLabel: 'Share link + summary',
	redditLabel: 'Share on Reddit',
	twitterLabel: 'Share on X',
	telegramLabel: 'Share on Telegram',
	whatsappLabel: 'Share on WhatsApp',
	copyUrlLabel: 'Copy page URL',
	flashCopied: 'Copied',
	flashLinkCopied: 'Link copied',
	flashShared: 'Shared',
	flashCopiedText: 'Copied text',
	statusCopiedSummary: 'Summary copied — paste into Discord or any chat.',
	statusCopiedLink: 'Shareable link copied — opening it restores these inputs.',
	statusDiscord: 'Discord: summary copied. Share the link too so teammates see the same inputs.',
	statusNativeShared: 'Opened system share sheet.',
	statusNativeFallback: 'System share unavailable — summary copied instead.',
	statusPngCopied: 'PNG copied — paste directly into Discord (Ctrl/Cmd+V).',
	statusPngDownloadFallback: 'Clipboard unavailable — PNG downloaded instead.',
	statusPngSaved: 'PNG saved — upload to Discord or social posts.',
	statusPngFailed: 'Could not generate PNG. Try Download PNG.',
	generatingPng: 'Generating…',
};

const es: ToolShareCopy = {
	...en,
	heading: 'Compartir',
	lead: 'Copia un resumen o enlace · al abrirlo se restauran los mismos datos',
	previewLabel: 'Vista previa',
	quickActionsLabel: 'Acciones rápidas',
	copyText: 'Copiar texto',
	copyLink: 'Copiar enlace',
	copyPng: 'Copiar PNG',
	downloadPng: 'Descargar PNG',
	moreApps: 'Más apps',
	discordTierLabel: 'Discord · la mayoría de squads',
	discordButton: 'Copiar para Discord',
	socialTierLabel: 'Enlace + resumen',
	redditLabel: 'Compartir en Reddit',
	twitterLabel: 'Compartir en X',
	telegramLabel: 'Compartir en Telegram',
	whatsappLabel: 'Compartir en WhatsApp',
	copyUrlLabel: 'Copiar URL',
	flashCopied: 'Copiado',
	flashLinkCopied: 'Enlace copiado',
	flashShared: 'Compartido',
	flashCopiedText: 'Texto copiado',
	statusCopiedSummary: 'Resumen copiado — pégalo en Discord o cualquier chat.',
	statusCopiedLink: 'Enlace copiado — al abrirlo se restauran estos datos.',
	statusDiscord: 'Discord: resumen copiado. Comparte también el enlace para el mismo plan.',
	statusNativeShared: 'Panel de compartir del sistema abierto.',
	statusNativeFallback: 'Compartir del sistema no disponible — se copió el resumen.',
};

const ptBr: ToolShareCopy = {
	...en,
	heading: 'Compartilhar',
	lead: 'Copie um resumo ou link · abrir o link restaura os mesmos dados',
	previewLabel: 'Prévia',
	quickActionsLabel: 'Ações rápidas',
	copyText: 'Copiar texto',
	copyLink: 'Copiar link',
	copyPng: 'Copiar PNG',
	downloadPng: 'Baixar PNG',
	moreApps: 'Mais apps',
	discordTierLabel: 'Discord · maioria dos squads',
	discordButton: 'Copiar para Discord',
	socialTierLabel: 'Link + resumo',
	redditLabel: 'Compartilhar no Reddit',
	twitterLabel: 'Compartilhar no X',
	telegramLabel: 'Compartilhar no Telegram',
	whatsappLabel: 'Compartilhar no WhatsApp',
	copyUrlLabel: 'Copiar URL',
	flashCopied: 'Copiado',
	flashLinkCopied: 'Link copiado',
	flashShared: 'Compartilhado',
	flashCopiedText: 'Texto copiado',
	statusCopiedSummary: 'Resumo copiado — cole no Discord ou em qualquer chat.',
	statusCopiedLink: 'Link copiado — abrir restaura estes dados.',
	statusDiscord: 'Discord: resumo copiado. Compartilhe o link para o time ver o mesmo plano.',
	statusNativeShared: 'Painel de compartilhamento do sistema aberto.',
	statusNativeFallback: 'Compartilhamento do sistema indisponível — resumo copiado.',
};

const zhCn: ToolShareCopy = {
	...en,
	heading: '分享',
	lead: '复制摘要或链接 · 队友打开链接可看到相同输入',
	previewLabel: '预览',
	quickActionsLabel: '快捷操作',
	copyText: '复制文本',
	copyLink: '复制链接',
	copyPng: '复制 PNG',
	downloadPng: '下载 PNG',
	moreApps: '更多应用',
	discordTierLabel: 'Discord · 多数小队',
	discordButton: '复制到 Discord',
	socialTierLabel: '分享链接 + 摘要',
	redditLabel: '分享到 Reddit',
	twitterLabel: '分享到 X',
	telegramLabel: '分享到 Telegram',
	whatsappLabel: '分享到 WhatsApp',
	copyUrlLabel: '复制页面链接',
	flashCopied: '已复制',
	flashLinkCopied: '链接已复制',
	flashShared: '已分享',
	flashCopiedText: '文本已复制',
	statusCopiedSummary: '摘要已复制 — 可粘贴到 Discord 或任意聊天。',
	statusCopiedLink: '可分享链接已复制 — 打开后会还原这些输入。',
	statusDiscord: 'Discord：摘要已复制。请一并分享链接，队友可看到相同规划。',
	statusNativeShared: '已打开系统分享面板。',
	statusNativeFallback: '系统分享不可用 — 已改为复制摘要。',
};

const copyByLocale: Record<LocaleCode, ToolShareCopy> = {
	en,
	es,
	'pt-br': ptBr,
	'zh-cn': zhCn,
};

export function getToolShareCopy(locale: LocaleCode = 'en'): ToolShareCopy {
	return copyByLocale[locale] ?? en;
}

export type ToolSharePreset = {
	heading: string;
	lead: string;
	discordHint: string;
	hint?: string;
};

export const loadoutSharePresetEn: ToolSharePreset = {
	heading: 'Share loadout',
	lead: 'Shareable URL restores your inputs · PNG card for Discord · platform buttons for link posts',
	discordHint:
		'Paste text in chat. Use <strong>Copy PNG</strong> for the card. <strong>Copy link</strong> restores this loadout for teammates.',
	hint: 'Brand-only PNG — no official Roblox assets. Estimate only; does not read your account.',
};

export const plannerSharePresetEn: ToolSharePreset = {
	heading: 'Share plan',
	lead: 'Copy a summary or link — opening the link restores Credits, goal, and owned classes',
	discordHint: 'Paste the summary in chat. Add <strong>Copy link</strong> so others open the same planner inputs.',
	hint: 'Shared links are unofficial planning aids. Confirm costs in the lobby shop before spending.',
};

export const waveSharePresetEn: ToolSharePreset = {
	heading: 'Share wave plan',
	lead: 'Copy a summary or link — opening the link restores wave range, class tier, and gear checks',
	discordHint: 'Paste the summary in chat. Add <strong>Copy link</strong> so your squad opens the same push plan.',
	hint: 'Estimates only — lobby Auto Skip votes and player skill still change real outcomes.',
};

export function getLoadoutSharePreset(locale: LocaleCode): ToolSharePreset {
	if (locale === 'es') {
		return {
			heading: 'Compartir loadout',
			lead: 'La URL restaura tus datos · PNG para Discord · botones para redes',
			discordHint:
				'Pega el texto en chat. Usa <strong>Copiar PNG</strong> para la tarjeta. <strong>Copiar enlace</strong> restaura este loadout.',
			hint: 'PNG solo de marca — sin assets oficiales de Roblox. Solo estimación.',
		};
	}
	if (locale === 'pt-br') {
		return {
			heading: 'Compartilhar loadout',
			lead: 'URL restaura seus dados · PNG para Discord · botões para redes',
			discordHint:
				'Cole o texto no chat. Use <strong>Copiar PNG</strong> para o card. <strong>Copiar link</strong> restaura este loadout.',
			hint: 'PNG só da marca — sem assets oficiais Roblox. Só estimativa.',
		};
	}
	if (locale === 'zh-cn') {
		return {
			heading: '分享配装',
			lead: '可分享 URL 还原输入 · Discord 用 PNG · 社交平台发链接',
			discordHint: '粘贴文本到聊天。用 <strong>复制 PNG</strong> 发卡片。<strong>复制链接</strong> 让队友看到相同配装。',
			hint: 'PNG 仅品牌样式 — 无官方 Roblox 素材。仅为估算。',
		};
	}
	return loadoutSharePresetEn;
}

export function getPlannerSharePreset(locale: LocaleCode): ToolSharePreset {
	if (locale === 'es') {
		return {
			heading: 'Compartir plan',
			lead: 'Copia resumen o enlace — al abrirlo se restauran créditos, meta y clases',
			discordHint: 'Pega el resumen en chat. Añade <strong>Copiar enlace</strong> para los mismos datos del planner.',
			hint: 'Enlaces no oficiales. Confirma costes en la tienda del lobby antes de gastar.',
		};
	}
	if (locale === 'pt-br') {
		return {
			heading: 'Compartilhar plano',
			lead: 'Copie resumo ou link — abrir restaura créditos, meta e classes',
			discordHint: 'Cole o resumo no chat. Use <strong>Copiar link</strong> para os mesmos dados do planner.',
			hint: 'Links não oficiais. Confirme custos na loja do lobby antes de gastar.',
		};
	}
	if (locale === 'zh-cn') {
		return {
			heading: '分享规划',
			lead: '复制摘要或链接 — 打开后还原信用点、目标与已拥有职业',
			discordHint: '粘贴摘要到聊天。加上 <strong>复制链接</strong> 让他人打开相同规划器输入。',
			hint: '分享链接为非官方规划参考。花钱前请在大厅商店确认价格。',
		};
	}
	return plannerSharePresetEn;
}

export function getWaveSharePreset(locale: LocaleCode): ToolSharePreset {
	if (locale === 'es') {
		return {
			heading: 'Compartir plan de oleadas',
			lead: 'Copia resumen o enlace — restaura rango, tier de clase y equipo',
			discordHint: 'Pega el resumen en chat. <strong>Copiar enlace</strong> para el mismo plan de push.',
			hint: 'Solo estimación — votos Auto Skip y habilidad del lobby cambian el resultado real.',
		};
	}
	if (locale === 'pt-br') {
		return {
			heading: 'Compartilhar plano de waves',
			lead: 'Copie resumo ou link — restaura faixa de waves, tier e equipamento',
			discordHint: 'Cole o resumo no chat. <strong>Copiar link</strong> para o mesmo plano de push.',
			hint: 'Só estimativa — votos Auto Skip e skill do lobby mudam o resultado real.',
		};
	}
	if (locale === 'zh-cn') {
		return {
			heading: '分享波次规划',
			lead: '复制摘要或链接 — 打开后还原波次范围、职业 tier 与装备勾选',
			discordHint: '粘贴摘要到聊天。<strong>复制链接</strong> 让小队打开相同推进计划。',
			hint: '仅为估算 — 大厅 Auto Skip 投票与玩家水平仍会影响实际结果。',
		};
	}
	return waveSharePresetEn;
}
