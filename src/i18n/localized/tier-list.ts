import type { LocaleCode } from '../config';
import type { FaqItem } from '../../types';

export type PlaystyleRow = {
	playstyle: string;
	best: string;
	why: string;
};

export type TierListCopy = {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	geoSnap: string;
	snapshotTitle: string;
	snapshotBody: string;
	tierNotes: { S: string; A: string; B: string; C: string };
	playstyleTitle: string;
	playstyleRows: PlaystyleRow[];
	faq: FaqItem[];
	fullClassGuideLink: string;
};

type LocalizedLocale = 'es' | 'pt-br' | 'zh-cn';

const esPlaystyleRows: PlaystyleRow[] = [
	{ playstyle: 'Presupuesto primer desbloqueo', best: 'Medic', why: 'Entrada A-tier más barata en coop a 10k' },
	{ playstyle: 'Primer desbloqueo DPS solo', best: 'Marksman', why: 'Mejor valor solo a 15k con Deadeye + Sonar' },
	{ playstyle: 'Partida en solo', best: 'Marksman o Necromancer', why: 'Marksman al inicio; Necro meta embudo endgame' },
	{ playstyle: 'Ancla de equipo', best: 'Tactician', why: 'Barricadas + torreta Vanguard con foco en elites' },
	{ playstyle: 'Supervivencia de escuadra', best: 'Bastion', why: 'Bunker invencible para lobby lleno' },
	{ playstyle: 'Apoyo en coop', best: 'Medic', why: 'Créditos de curación + sustain' },
	{ playstyle: 'Leaderboard', best: 'Necromancer', why: 'Death Nova en packs comprimidos' },
	{ playstyle: 'Punto estrecho Rooftop', best: 'Tactician', why: 'Barricadas de acero en escaleras' },
];

const ptBrPlaystyleRows: PlaystyleRow[] = [
	{ playstyle: 'Orçamento primeiro desbloqueio', best: 'Medic', why: 'Entrada A-tier mais barata em coop a 10k' },
	{ playstyle: 'Primeiro desbloqueio DPS solo', best: 'Marksman', why: 'Melhor valor solo a 15k com Deadeye + Sonar' },
	{ playstyle: 'Run solo', best: 'Marksman ou Necromancer', why: 'Marksman no começo; Necro meta funil endgame' },
	{ playstyle: 'Âncora de time', best: 'Tactician', why: 'Barricadas + torreta Vanguard com foco em elites' },
	{ playstyle: 'Sobrevivência de squad', best: 'Bastion', why: 'Bunker invencível para lobby cheio' },
	{ playstyle: 'Suporte em coop', best: 'Medic', why: 'Créditos de cura + sustain' },
	{ playstyle: 'Leaderboard', best: 'Necromancer', why: 'Death Nova em packs comprimidos' },
	{ playstyle: 'Gargalo Rooftop', best: 'Tactician', why: 'Barricadas de aço nas escadas' },
];

const zhCnPlaystyleRows: PlaystyleRow[] = [
	{ playstyle: '首购预算', best: 'Medic', why: '1 万信用点最便宜的 A 级组队入门' },
	{ playstyle: '首购单人 DPS', best: 'Marksman', why: '1.5 万单人性价比，Deadeye + Sonar' },
	{ playstyle: '单人局', best: 'Marksman 或 Necromancer', why: '前期 Marksman；后期窄道 Necromancer' },
	{ playstyle: '队伍锚点', best: 'Tactician', why: '路障 + Vanguard 炮塔盯精英' },
	{ playstyle: '满员生存', best: 'Bastion', why: '碉堡无敌适合满员大厅' },
	{ playstyle: '组队辅助', best: 'Medic', why: '治疗信用点 + 续航' },
	{ playstyle: '冲榜', best: 'Necromancer', why: '密集怪群 Death Nova' },
	{ playstyle: 'Rooftop 卡口', best: 'Tactician', why: '楼梯钢质路障' },
];

const es: TierListCopy = {
	title: 'Tier list de Survive Zombie Arena (mayo 2026) — Clases S/A/B/C',
	description:
		'Tier list de Survive Zombie Arena: Necromancer S-tier, Medic/Marksman/Tactician/Bastion A-tier y picks por estilo para meta Rooftop Map.',
	eyebrow: 'Baseline tier solo · Rooftop Map · revisado',
	h1: 'Tier list',
	geoSnap:
		'Rankings de clases para Survive Zombie Arena según guías públicas y parches recientes. Abajo va tier en solo — en equipo puede cambiar (Medic es más fuerte en coop).',
	snapshotTitle: 'Resumen',
	snapshotBody: 'S: Necromancer · A: Medic, Marksman, Tactician, Bastion · B: Engineer, Demolitionist · C: Survivor, Ninja',
	tierNotes: {
		S: 'Escala en oleadas tardías — exige manejar el kit y 250k créditos.',
		A: 'Picks centrales para solo, equipo o defensa de escuadra a varios precios.',
		B: 'Situacionales — fuertes en nichos pero superados como primer desbloqueo.',
		C: 'Starter o novedad — cámbialos pronto en meta Rooftop Map.',
	},
	playstyleTitle: 'Mejor clase por estilo de juego',
	playstyleRows: esPlaystyleRows,
	faq: [
		{
			question: '¿Qué es S tier en Survive Zombie Arena?',
			answer:
				'Solo Necromancer — S-tier en solo, equipo y farmeo según consenso público. Cuesta 250.000 créditos.',
		},
		{
			question: '¿Bastion es S tier?',
			answer:
				'El tier está discutido (PGG S-tier vs Destructoid A-tier). Lo listamos A-tier en solo y equipo — estado media_reported.',
		},
		{
			question: '¿El Rooftop Map cambió la tier list?',
			answer:
				'Sí. Tactician y Necromancer en embudos suben; el sigilo de Ninja cae con la densidad de escaleras.',
		},
	],
	fullClassGuideLink: 'Guía completa de clase →',
};

const ptBr: TierListCopy = {
	title: 'Tier list de Survive Zombie Arena (maio 2026) — Classes S/A/B/C',
	description:
		'Tier list de Survive Zombie Arena: Necromancer S-tier, Medic/Marksman/Tactician/Bastion A-tier e picks por estilo para meta Rooftop Map.',
	eyebrow: 'Baseline tier solo · Rooftop Map · revisado',
	h1: 'Tier list',
	geoSnap:
		'Rankings de classes para Survive Zombie Arena com base em guias públicos e patches recentes. Abaixo é tier solo — em time pode mudar (Medic é mais forte em coop).',
	snapshotTitle: 'Resumo',
	snapshotBody: 'S: Necromancer · A: Medic, Marksman, Tactician, Bastion · B: Engineer, Demolitionist · C: Survivor, Ninja',
	tierNotes: {
		S: 'Escala em waves tardias — exige gerenciar o kit e 250k créditos.',
		A: 'Picks centrais para solo, time ou defesa de squad em vários preços.',
		B: 'Situacionais — fortes em nichos, mas superados como primeiro desbloqueio.',
		C: 'Starter ou novidade — troque cedo na meta Rooftop Map.',
	},
	playstyleTitle: 'Melhor classe por estilo de jogo',
	playstyleRows: ptBrPlaystyleRows,
	faq: [
		{
			question: 'O que é S tier em Survive Zombie Arena?',
			answer: 'Só Necromancer — S-tier em solo, time e farm pelo consenso público. Custa 250.000 créditos.',
		},
		{
			question: 'Bastion é S tier?',
			answer:
				'O tier é contestado (PGG S-tier vs Destructoid A-tier). Listamos A-tier em solo e time — status media_reported.',
		},
		{
			question: 'O Rooftop Map mudou a tier list?',
			answer: 'Sim. Tactician e Necromancer em funis sobem; stealth de Ninja cai com densidade de escadas.',
		},
	],
	fullClassGuideLink: 'Guia completo da classe →',
};

const zhCn: TierListCopy = {
	title: 'Survive Zombie Arena 梯队榜（2026 年 5 月）— S/A/B/C 职业',
	description:
		'Survive Zombie Arena 梯队：Necromancer S 级，Medic/Marksman/Tactician/Bastion A 级，及 Rooftop Map 环境玩法推荐。',
	eyebrow: '单人梯队基准 · Rooftop Map · 复核于',
	h1: '梯队榜',
	geoSnap:
		'依据公开攻略与近期补丁的职业排名。下文为单人梯队——组队可能不同（Medic 在合作更强）。',
	snapshotTitle: '快照',
	snapshotBody: 'S：Necromancer · A：Medic、Marksman、Tactician、Bastion · B：Engineer、Demolitionist · C：Survivor、Ninja',
	tierNotes: {
		S: '后期波次越强越突出——需熟练操作职业技能，花费 25 万信用点。',
		A: '单人、组队或小队防守的核心选择，价位分散。',
		B: '特定场景有用，但不宜首购——整体被更高梯队压过。',
		C: '新手或娱乐向——Rooftop 环境应尽早更换。',
	},
	playstyleTitle: '按玩法选最佳职业',
	playstyleRows: zhCnPlaystyleRows,
	faq: [
		{
			question: 'Survive Zombie Arena 的 S 级是什么？',
			answer: '仅 Necromancer——公开共识在单人、组队与刷钱均为 S 级。花费 25 万信用点。',
		},
		{
			question: 'Bastion 算 S 级吗？',
			answer: '梯队有争议（PGG 标 S，Destructoid 标 A）。本站单人/组队均列 A 级——状态为 media_reported。',
		},
		{
			question: 'Rooftop Map 改变梯队了吗？',
			answer: '是。窄道上的 Tactician 与 Necromancer 上升；楼梯密度下 Ninja 潜行走弱。',
		},
	],
	fullClassGuideLink: '完整职业指南 →',
};

export const tierListCopy: Record<LocalizedLocale, TierListCopy> = {
	es,
	'pt-br': ptBr,
	'zh-cn': zhCn,
};

export function getTierListCopy(locale: LocaleCode): TierListCopy {
	return tierListCopy[locale as LocalizedLocale];
}
