import type { LocaleCode } from './config';
import type { FaqItem } from '../types';

export type RebirthPlannerCopy = {
	pageTitle: string;
	pageDescription: string;
	eyebrow: string;
	h1: string;
	/** Short answer-first blurb under H1 (SEO / generative-friendly). */
	snap: string;
	lead: string;
	ruleTitle: string;
	ruleBody: string;
	inputs: string;
	recommendation: string;
	readinessScore: string;
	nextGoop: string;
	goopGap: string;
	action: string;
	estimateOnly: string;
	checklistTitle: string;
	ladderTitle: string;
	ladderLastChecked: string;
	ladderConfidence: string;
	ladderTargets: string;
	ladderFoot: string;
	faq: FaqItem[];
	faqHeading: string;
	labels: {
		goop: string;
		coins: string;
		level: string;
		zone: string;
		upgrades: string;
		session: string;
	};
	upgradeOptions: Record<'low' | 'medium' | 'high', string>;
};

const en: RebirthPlannerCopy = {
	pageTitle: 'Slime RNG Rebirth Planner',
	pageDescription: 'Rules-based Slime RNG Rebirth readiness planner for Goop, coins, upgrades, zones, and session time.',
	eyebrow: 'P1 tool · rules engine · estimate only',
	h1: 'Slime RNG Rebirth Planner',
	snap: 'Before you reset in Slime RNG: enter Goop, coins, highest zone, upgrade tier, and session time to get a conservative readiness score and checklist. Unofficial rules engine—nothing is read from Roblox; Goop ladder numbers are listed at the bottom from JSON data.',
	lead: 'Use this checklist before resetting. The planner is intentionally conservative because public sources agree that Rebirth can reset coins and zone progress.',
	ruleTitle: 'Rule of thumb',
	ruleBody:
		'Rebirth when your Goop is ready, spare coins are spent, your slimes can rebuild quickly, and you are not one upgrade away from a major persistent gain.',
	inputs: 'Inputs',
	recommendation: 'Recommendation',
	readinessScore: 'Readiness score',
	nextGoop: 'Next Goop target',
	goopGap: 'Goop gap',
	action: 'Action',
	estimateOnly: 'Estimate only. Enter values to calculate.',
	checklistTitle: 'Before Rebirth checklist',
	ladderTitle: 'Goop ladder source',
	ladderLastChecked: 'Last checked:',
	ladderConfidence: 'Confidence:',
	ladderTargets: 'Goop targets by Rebirth level index (0-based):',
	ladderFoot: 'Back to the Rebirth guide for behavior context; numbers here power the calculator above.',
	faq: [
		{ question: 'Is the Rebirth Planner official?', answer: 'No. It is a rules-based checklist based on public guide patterns and conservative assumptions.' },
		{ question: 'What should I do before Rebirth?', answer: 'Meet the Goop requirement, spend spare coins on useful upgrades, equip leveled slimes, and make sure you have time to rebuild zones.' },
		{ question: 'Why does the planner sometimes say wait?', answer: 'Rebirth can reset coins and zones, so the planner warns you if recovery looks weak.' },
	],
	faqHeading: 'FAQ',
	labels: {
		goop: 'Current Goop',
		coins: 'Current coins',
		level: 'Current Rebirth level',
		zone: 'Highest unlocked zone',
		upgrades: 'Key permanent upgrades',
		session: 'Session length hours',
	},
	upgradeOptions: {
		low: 'Missing core upgrades',
		medium: 'Most core upgrades',
		high: 'Strong permanent setup',
	},
};

const zhCn: RebirthPlannerCopy = {
	pageTitle: 'Slime RNG 重生规划器',
	pageDescription: '在重生前自检 Goop、金币、区域、常驻升级与可游玩时长；规则偏保守，仅作规划参考。',
	eyebrow: '工具 · 规则引擎 · 仅为估算',
	h1: 'Slime RNG 重生规划器',
	snap: '准备在游戏里点重生前：填入当前 Goop、金币、最高区域、常驻升级档位与可玩时长，本页给出偏保守的准备度分数与清单。非官方规则引擎，不读取游戏服务器；下方展示 Goop 阶梯的 JSON 来源与核对时间。',
	lead: '重生会按公开资料的说法重置金币与部分区域进度，因此本工具刻意保守：宁可多提醒你「再准备一下」，也不假装能代替游戏内判定。',
	ruleTitle: '经验法则',
	ruleBody: '当 Goop 已够、余钱已换成重生后仍有用的常驻升级、主力史莱姆能较快重建，且你不是「差一点就能买到关键常驻」时，再考虑重生。',
	inputs: '输入',
	recommendation: '建议',
	readinessScore: '准备度（0–100）',
	nextGoop: '下一档 Goop 目标',
	goopGap: '还差 Goop',
	action: '倾向操作',
	estimateOnly: '填写数值后生成；不能替代你在游戏内的确认。',
	checklistTitle: '重生前自检清单',
	ladderTitle: 'Goop 阶梯数据来源',
	ladderLastChecked: '最近核对：',
	ladderConfidence: '置信度：',
	ladderTargets: '按重生等级索引（从 0 计）对应的 Goop 需求：',
	ladderFoot: '机制背景见中文「Goop 与重生」页；上表数值用于驱动上方计算器。',
	faq: [
		{ question: '这是官方规划器吗？', answer: '不是。规则来自公开攻略里较一致的描述，并做了保守简化；版本更新后请以游戏内为准。' },
		{ question: '重生前最该确认什么？', answer: 'Goop 是否达标、余钱是否已换成常驻升级、主力史莱姆是否已养成、接下来是否有足够时间重建区域。' },
		{ question: '为什么有时会显示「再等等」？', answer: '若准备度偏低，说明在「会重置金币与区域」的前提下，重建风险偏大；先补经济或时长更划算。' },
	],
	faqHeading: '常见问题',
	labels: {
		goop: '当前 Goop',
		coins: '当前金币',
		level: '当前重生等级',
		zone: '已解锁的最高区域',
		upgrades: '关键常驻升级完成度',
		session: '预计单次可游玩时长（小时）',
	},
	upgradeOptions: {
		low: '核心升级缺口较大',
		medium: '核心升级基本到位',
		high: '常驻体系已较强',
	},
};

const es: RebirthPlannerCopy = {
	pageTitle: 'Slime RNG — Planificador de renacimiento',
	pageDescription:
		'Lista de comprobación antes de renacer: Goop, monedas, zonas, upgrades persistentes y tiempo de sesión; reglas conservadoras, solo orientación.',
	eyebrow: 'Herramienta · motor de reglas · solo estimación',
	h1: 'Slime RNG — Planificador de renacimiento',
	snap: 'Antes de renacer en Slime RNG: introduce Goop, monedas, zona más alta, nivel de upgrades persistentes y horas de sesión para ver una puntuación de preparación y checklist conservadora. No es oficial ni lee el servidor; la escalera de Goop al final viene de datos JSON revisados.',
	lead: 'Los renacimientos suelen resetear monedas y parte del progreso de zonas según guías públicas; por eso esta herramienta es deliberadamente conservadora: mejor avisar «espera» que fingir un veredicto oficial.',
	ruleTitle: 'Regla práctica',
	ruleBody:
		'Renace cuando tengas el Goop listo, hayas gastado monedas sobrantes en upgrades persistentes, tus slimes reconstruyan rápido y no estés a un upgrade persistente crítico de distancia.',
	inputs: 'Entradas',
	recommendation: 'Recomendación',
	readinessScore: 'Preparación (0–100)',
	nextGoop: 'Meta de Goop siguiente',
	goopGap: 'Falta de Goop',
	action: 'Acción sugerida',
	estimateOnly: 'Rellena valores para ver la recomendación; no sustituye confirmar en el juego.',
	checklistTitle: 'Lista antes de renacer',
	ladderTitle: 'Fuente de la escalera de Goop',
	ladderLastChecked: 'Última revisión:',
	ladderConfidence: 'Confianza:',
	ladderTargets: 'Goop requerido por índice de nivel de renacimiento (base 0):',
	ladderFoot: 'El contexto de las mecánicas está en la guía «Goop y renacimiento» en español; los números alimentan la calculadora de arriba.',
	faq: [
		{
			question: '¿Es oficial este planificador?',
			answer: 'No. Usa patrones de guías públicas y supuestos conservadores; tras parches, verifica siempre en el juego.',
		},
		{
			question: '¿Qué debo confirmar antes de renacer?',
			answer: 'Goop suficiente, monedas extra invertidas en persistentes, slimes principales nivelados y tiempo real para recuperar zonas.',
		},
		{
			question: '¿Por qué a veces dice que espere?',
			answer: 'Si la recuperación tras el reset se ve débil, conviene reforzar economía o upgrades antes de aceptar el reset.',
		},
	],
	faqHeading: 'Preguntas frecuentes',
	labels: {
		goop: 'Goop actual',
		coins: 'Monedas actuales',
		level: 'Nivel de renacimiento actual',
		zone: 'Zona más alta desbloqueada',
		upgrades: 'Estado de upgrades persistentes clave',
		session: 'Horas de sesión disponibles',
	},
	upgradeOptions: {
		low: 'Faltan mejoras esenciales',
		medium: 'Casi todas las mejoras esenciales',
		high: 'Mejoras persistentes muy sólidas',
	},
};

export const rebirthPlannerByLocale: Record<LocaleCode, RebirthPlannerCopy> = {
	en,
	'zh-cn': zhCn,
	es,
};

export function getRebirthPlannerCopy(locale: LocaleCode): RebirthPlannerCopy {
	return rebirthPlannerByLocale[locale];
}
