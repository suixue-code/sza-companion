import type { LocaleCode } from '../config';
import type { FaqItem } from '../../types';

export type GalacticRelatedLink = {
	label: string;
	href: string;
};

export type GalacticCopy = {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	lead: string;
	endDateLabel: string;
	voidShardsTitle: string;
	cratesTitle: string;
	relatedCodeTitle: string;
	atlantisTitle: string;
	devPreviewsTitle: string;
	dataGapsTitle: string;
	faq: FaqItem[];
	relatedLinks: GalacticRelatedLink[];
	countdownPassed: string;
	countdownTemplate: string;
};

type LocalizedLocale = 'es' | 'pt-br' | 'zh-cn';

const es: GalacticCopy = {
	title: 'Evento Galactic de Survive Zombie Arena — Void Shards y cajas',
	description:
		'Guía del evento Galactic: Void Shards, Galactic Crates, armas cósmicas, cuenta atrás y huecos de datos honestos para Survive Zombie Arena.',
	eyebrow: 'Próximo o parcial · revisado',
	h1: 'Evento Galactic',
	lead: 'Mucho contenido sigue en vista previa en Discord oficial a mayo de 2026 — marcamos hechos media_reported con claridad.',
	endDateLabel: 'Fecha de fin reportada',
	voidShardsTitle: 'Void Shards',
	cratesTitle: 'Galactic Crates',
	relatedCodeTitle: 'Código relacionado',
	atlantisTitle: 'Mapa Atlantis (vista previa)',
	devPreviewsTitle: 'Vistas previas de desarrollo',
	dataGapsTitle: 'Huecos de datos',
	faq: [
		{
			question: '¿Cuándo termina el evento Galactic?',
			answer:
				'Guías de eventos de terceros citan la fecha indicada en la página. Confirma en el juego antes de farmear con prisa — en la auditoría de mayo de 2026, #patch-notes oficial no tenía texto exacto de inicio/fin.',
		},
		{
			question: '¿Qué son los Void Shards?',
			answer:
				'Moneda principal del evento según guías: salen de Galactic Zombies (zombies morados con orbes). Recogida manual; ~50 shards por Galactic Crate en guías de la comunidad — media_reported, no confirmado en parche.',
		},
		{
			question: '¿Funciona el código GALACTIC?',
			answer:
				'Disputado. Algunas guías lo listan; Discord #codes oficial no lo publicó y RoCodes muestra 0 % de éxito. Mira la página de códigos.',
		},
		{
			question: '¿Las armas galactic son pay-to-win?',
			answer:
				'Vista previa dev (2026-05-17): las nuevas armas galactic serán F2P. Nombres finales, stats y probabilidades de caja sin publicar.',
		},
	],
	relatedLinks: [
		{ label: 'Armas', href: '/weapons/' },
		{ label: 'Actualizaciones', href: '/updates/' },
		{ label: 'Códigos', href: '/codes/' },
	],
	countdownPassed: 'La fecha de fin reportada ya pasó — confirma en el juego',
	countdownTemplate: '{days}d {hours}h {mins}m hasta el fin reportado ({date})',
};

const ptBr: GalacticCopy = {
	title: 'Evento Galactic de Survive Zombie Arena — Void Shards e caixas',
	description:
		'Guia do evento Galactic: Void Shards, Galactic Crates, armas cósmicas, contagem e lacunas de dados honestas para Survive Zombie Arena.',
	eyebrow: 'Em breve ou parcial · revisado',
	h1: 'Evento Galactic',
	lead: 'Muito conteúdo ainda é prévia no Discord oficial em maio de 2026 — rotulamos fatos media_reported com clareza.',
	endDateLabel: 'Data de fim reportada',
	voidShardsTitle: 'Void Shards',
	cratesTitle: 'Galactic Crates',
	relatedCodeTitle: 'Código relacionado',
	atlantisTitle: 'Mapa Atlantis (prévia)',
	devPreviewsTitle: 'Prévias de desenvolvimento',
	dataGapsTitle: 'Lacunas de dados',
	faq: [
		{
			question: 'Quando termina o evento Galactic?',
			answer:
				'Guias de eventos de terceiros citam a data mostrada na página. Confirme no jogo antes de farmar com pressa — na auditoria de maio de 2026, #patch-notes oficial não tinha texto exato de início/fim.',
		},
		{
			question: 'O que são Void Shards?',
			answer:
				'Moeda principal do evento em guias: vêm de Galactic Zombies (zumbis roxos com orbes). Coleta manual; ~50 shards por Galactic Crate em guias da comunidade — media_reported, não confirmado em patch.',
		},
		{
			question: 'O código GALACTIC funciona?',
			answer:
				'Disputado. Alguns guias listam; Discord #codes oficial não publicou e RoCodes mostra 0% de sucesso. Veja a página de códigos.',
		},
		{
			question: 'Armas galactic são pay-to-win?',
			answer:
				'Prévia dev (2026-05-17): novas armas galactic serão F2P. Nomes finais, stats e odds de caixa não publicados.',
		},
	],
	relatedLinks: [
		{ label: 'Armas', href: '/weapons/' },
		{ label: 'Atualizações', href: '/updates/' },
		{ label: 'Códigos', href: '/codes/' },
	],
	countdownPassed: 'A data de fim reportada já passou — confirme no jogo',
	countdownTemplate: '{days}d {hours}h {mins}m até o fim reportado ({date})',
};

const zhCn: GalacticCopy = {
	title: 'Survive Zombie Arena Galactic 活动 — Void Shards 与宝箱',
	description:
		'Galactic 活动指南：Void Shards、Galactic Crates、宇宙武器、倒计时与诚实数据缺口说明。',
	eyebrow: '即将或部分上线 · 复核于',
	h1: 'Galactic 活动',
	lead: '截至 2026 年 5 月，大量内容仍在官方 Discord 预览阶段——我们会明确标注 media_reported 事实。',
	endDateLabel: '据报结束日期',
	voidShardsTitle: 'Void Shards',
	cratesTitle: 'Galactic Crates',
	relatedCodeTitle: '相关兑换码',
	atlantisTitle: 'Atlantis 地图（预览）',
	devPreviewsTitle: '开发预览',
	dataGapsTitle: '数据缺口',
	faq: [
		{
			question: 'Galactic 活动什么时候结束？',
			answer:
				'第三方活动攻略引用页内日期。赶工期刷材料前请在游戏内确认——2026 年 5 月审计时，官方 #patch-notes 尚无确切起止文案。',
		},
		{
			question: 'Void Shards 是什么？',
			answer:
				'攻略称的活动主货币，来自 Galactic Zombies（头顶光球的紫色僵尸）。需手动拾取；社区攻略约 50 碎片开一个 Galactic Crate——属 media_reported，补丁未证实。',
		},
		{
			question: 'GALACTIC 兑换码能用吗？',
			answer: '存疑。部分攻略列出；官方 Discord #codes 无帖，RoCodes 成功率 0%。见兑换码页。',
		},
		{
			question: '银河武器是付费赢吗？',
			answer: '开发预览（2026-05-17）称新银河枪为 F2P 武器。最终名称、数值与宝箱概率未公布。',
		},
	],
	relatedLinks: [
		{ label: '武器', href: '/weapons/' },
		{ label: '更新', href: '/updates/' },
		{ label: '兑换码', href: '/codes/' },
	],
	countdownPassed: '据报结束日已过——请在游戏内确认',
	countdownTemplate: '距据报结束还有 {days} 天 {hours} 小时 {mins} 分（{date}）',
};

export const galacticCopy: Record<LocalizedLocale, GalacticCopy> = {
	es,
	'pt-br': ptBr,
	'zh-cn': zhCn,
};

export function getGalacticCopy(locale: LocaleCode): GalacticCopy {
	return galacticCopy[locale as LocalizedLocale];
}
