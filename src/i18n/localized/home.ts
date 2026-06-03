import type { LocaleCode } from '../config';
import type { FaqItem } from '../../types';

export type HomeShortcut = {
	title: string;
	desc: string;
	href: string;
};

export type HomeCopy = {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	geoSnap: string;
	lead: string;
	ctaCodes: string;
	ctaPlanner: string;
	ctaBeginner: string;
	sectionStartTitle: string;
	sectionStartDesc: string;
	shortcuts: HomeShortcut[];
	codeReportTitle: string;
	zombiesTitle: string;
	zombiesDesc: string;
	galacticTitle: string;
	galacticDesc: string;
	upgradesTitle: string;
	upgradesItems: [string, string, string];
	tierTitle: string;
	tierDesc: string;
	faq: FaqItem[];
};

type LocalizedLocale = 'es' | 'pt-br' | 'zh-cn';

const es: HomeCopy = {
	title: 'Survive Zombie Arena: códigos y guía en español',
	description:
		'Guía en español de Survive Zombie Arena: códigos, Sobrevivir a la Arena de Zombies, clases, créditos y planner para Roblox.',
	eyebrow: 'Guía no oficial · revisado',
	h1: 'Códigos y planificador de Survive Zombie Arena',
	geoSnap:
		'Ayuda no oficial para Roblox Survive Zombie Arena, también buscado como Sobrevivir a la Arena de Zombies: códigos que funcionan, costes de clases, mejoras de armas y herramientas gratis en el navegador. Sin vínculo con Roblox ni Nectarforge Studios.',
	lead: 'Revisa códigos, planifica tu próximo desbloqueo de clase y lee guías pensadas para el Rooftop Map.',
	ctaCodes: 'Ver códigos',
	ctaPlanner: 'Credit Planner',
	ctaBeginner: 'Guía principiante',
	sectionStartTitle: 'Empieza aquí',
	sectionStartDesc: 'Elige la página que encaje con lo que necesitas ahora.',
	shortcuts: [
		{
			title: 'Últimos códigos',
			desc: 'Código Zombies activo con alta confianza; GALACTIC aparte como disputado.',
			href: '/codes/',
		},
		{
			title: 'Credit Planner',
			desc: 'Planifica Medic, Marksman, Tactician o Necromancer según tu saldo.',
			href: '/tools/credit-planner/',
		},
		{
			title: 'Guía principiante',
			desc: 'Primeras 5 partidas, hitos de créditos y errores típicos en Rooftop Map.',
			href: '/beginner-guide/',
		},
		{
			title: 'Tier list',
			desc: 'Rankings S/A/B/C con contexto solo, equipo y farmeo.',
			href: '/tier-list/',
		},
		{
			title: 'Evento Galactic',
			desc: 'Void Shards, cajas galácticas y cuenta atrás hasta la fecha de fin reportada.',
			href: '/events/galactic/',
		},
		{
			title: 'Todas las clases',
			desc: 'Habilidades, costes y consejos de desbloqueo para los 9 kits.',
			href: '/classes/',
		},
	],
	codeReportTitle: 'Informe de códigos verificado',
	zombiesTitle: 'Zombies → 2.500 créditos',
	zombiesDesc:
		'Único código con post oficial en Discord #codes y acuerdo entre varias fuentes. Vuelve a comprobarlo en el juego cada sesión.',
	galacticTitle: 'GALACTIC — disputado',
	galacticDesc:
		'Algunas guías lo marcan activo; Discord #codes no lo publicó y RoCodes muestra 0 % de éxito. No lo promovemos como válido.',
	upgradesTitle: 'Mejores primeras mejoras',
	upgradesItems: [
		'Canjea Zombies por 2.500 créditos (Tienda → Canjear códigos).',
		'Armas: pistola → escopeta (~150) → rifle (~750) antes de gastar mucho en clases.',
		'Primera clase: Medic (10k en coop) o Marksman (15k en solo).',
	],
	tierTitle: 'Lectura rápida de tiers',
	tierDesc: 'Resumen tier en solo — en la tier list tienes el desglose por estilo de juego.',
	faq: [
		{
			question: '¿Qué es SZA Companion?',
			answer:
				'SZA Companion es un sitio fan no oficial de Roblox Survive Zombie Arena de Nectarforge Studios. Seguimos códigos con etiquetas de confianza, costes de clases, progresión de armas y herramientas solo en el navegador — sin tasas ocultas ni respaldo oficial.',
		},
		{
			question: '¿Es oficial SZA Companion?',
			answer:
				'No. No estamos afiliados a Roblox Corporation ni a Nectarforge Studios. Los enlaces oficiales están en nuestra página de Discord.',
		},
		{
			question: '¿Cuál es el mejor primer desbloqueo de clase?',
			answer:
				'Medic (10.000 créditos) para apoyo en coop o Marksman (15.000) para DPS en solo. Mira la guía principiante y el Credit Planner antes de comprar Ninja o Demolitionist.',
		},
	],
};

const ptBr: HomeCopy = {
	title: 'Códigos e planejador de Survive Zombie Arena',
	description:
		'Copie códigos de Survive Zombie Arena, use Zombies por 2.500 créditos, compare classes e planeje seu próximo desbloqueio.',
	eyebrow: 'Guia não oficial · revisado',
	h1: 'Códigos e planejador de Survive Zombie Arena',
	geoSnap:
		'Ajuda não oficial para Roblox Survive Zombie Arena: códigos que funcionam, custos de classes, upgrades de armas e ferramentas grátis no navegador. Sem vínculo com Roblox ou Nectarforge Studios.',
	lead: 'Confira códigos, planeje o próximo desbloqueio de classe e leia guias feitos para o Rooftop Map.',
	ctaCodes: 'Ver códigos',
	ctaPlanner: 'Credit Planner',
	ctaBeginner: 'Guia para iniciantes',
	sectionStartTitle: 'Comece aqui',
	sectionStartDesc: 'Escolha a página que combina com o que você precisa agora.',
	shortcuts: [
		{
			title: 'Códigos recentes',
			desc: 'Código Zombies ativo com alta confiança; GALACTIC separado como disputado.',
			href: '/codes/',
		},
		{
			title: 'Credit Planner',
			desc: 'Planeje Medic, Marksman, Tactician ou Necromancer com seu saldo.',
			href: '/tools/credit-planner/',
		},
		{
			title: 'Guia para iniciantes',
			desc: 'Primeiras 5 runs, marcos de créditos e erros comuns no Rooftop Map.',
			href: '/beginner-guide/',
		},
		{
			title: 'Tier list',
			desc: 'Rankings S/A/B/C com contexto solo, time e farm.',
			href: '/tier-list/',
		},
		{
			title: 'Evento Galactic',
			desc: 'Void Shards, caixas galácticas e contagem até a data de fim reportada.',
			href: '/events/galactic/',
		},
		{
			title: 'Todas as classes',
			desc: 'Habilidades, custos e dicas de desbloqueio para os 9 kits.',
			href: '/classes/',
		},
	],
	codeReportTitle: 'Relatório de códigos verificado',
	zombiesTitle: 'Zombies → 2.500 créditos',
	zombiesDesc:
		'Único código com post oficial no Discord #codes e acordo entre várias fontes. Confira de novo no jogo a cada sessão.',
	galacticTitle: 'GALACTIC — disputado',
	galacticDesc:
		'Alguns guias listam como ativo; Discord #codes não publicou e RoCodes mostra 0% de sucesso. Não promovemos como válido.',
	upgradesTitle: 'Melhores primeiros upgrades',
	upgradesItems: [
		'Resgate Zombies por 2.500 créditos (Loja → Resgatar códigos).',
		'Armas: pistola → shotgun (~150) → rifle (~750) antes de gastar muito em classes.',
		'Primeira classe: Medic (10k em coop) ou Marksman (15k no solo).',
	],
	tierTitle: 'Leitura rápida de tiers',
	tierDesc: 'Resumo tier solo — na tier list você vê o detalhe por estilo de jogo.',
	faq: [
		{
			question: 'O que é o SZA Companion?',
			answer:
				'SZA Companion é um site fan não oficial de Roblox Survive Zombie Arena da Nectarforge Studios. Acompanhamos códigos com rótulos de confiança, custos de classes, progressão de armas e ferramentas só no navegador — sem taxas escondidas nem endosso oficial.',
		},
		{
			question: 'O SZA Companion é oficial?',
			answer:
				'Não. Não somos afiliados à Roblox Corporation nem à Nectarforge Studios. Links oficiais estão na nossa página do Discord.',
		},
		{
			question: 'Qual o melhor primeiro desbloqueio de classe?',
			answer:
				'Medic (10.000 créditos) para suporte em coop ou Marksman (15.000) para DPS no solo. Veja o guia para iniciantes e o Credit Planner antes de comprar Ninja ou Demolitionist.',
		},
	],
};

const zhCn: HomeCopy = {
	title: 'Survive Zombie Arena 兑换码与信用点规划器',
	description:
		'复制 Survive Zombie Arena 兑换码 Zombies 领取 2500 信用点，比较职业强度，并规划下一次解锁。',
	eyebrow: '非官方指南 · 复核于',
	h1: 'Survive Zombie Arena 兑换码与规划器',
	geoSnap:
		'Roblox《Survive Zombie Arena》非官方帮助：可用兑换码、职业花费、武器升级与免费浏览器工具。与 Roblox 及 Nectarforge Studios 无关联。',
	lead: '查兑换码、规划下一职业解锁，并阅读针对 Rooftop Map 编写的指南。',
	ctaCodes: '查看兑换码',
	ctaPlanner: '信用点规划器',
	ctaBeginner: '新手指南',
	sectionStartTitle: '从这里开始',
	sectionStartDesc: '选最符合你当前需求的页面。',
	shortcuts: [
		{
			title: '最新兑换码',
			desc: '高置信度有效码 Zombies；GALACTIC 单独标为存疑。',
			href: '/codes/',
		},
		{
			title: '信用点规划器',
			desc: '按余额规划 Medic、Marksman、Tactician 或 Necromancer 解锁。',
			href: '/tools/credit-planner/',
		},
		{
			title: '新手指南',
			desc: '前 5 局路线、信用点里程碑与 Rooftop Map 常见失误。',
			href: '/beginner-guide/',
		},
		{
			title: '梯队榜',
			desc: 'S/A/B/C 职业排名，含单人、组队与刷钱语境。',
			href: '/tier-list/',
		},
		{
			title: 'Galactic 活动',
			desc: 'Void Shards、银河宝箱与据报结束日倒计时。',
			href: '/events/galactic/',
		},
		{
			title: '全部职业',
			desc: '9 套职业的完整技能、花费与解锁建议。',
			href: '/classes/',
		},
	],
	codeReportTitle: '已核实兑换码简报',
	zombiesTitle: 'Zombies → 2500 信用点',
	zombiesDesc: '唯一在 Discord #codes 有官方帖且多源一致的码。每局进游戏前请再确认一次。',
	galacticTitle: 'GALACTIC — 存疑',
	galacticDesc: '部分攻略标为可用；Discord #codes 无帖，RoCodes 成功率 0%。本站不当作有效码推广。',
	upgradesTitle: '优先做的三项升级',
	upgradesItems: [
		'兑换 Zombies 得 2500 信用点（商店 → 兑换码）。',
		'武器路线：手枪 → 霰弹枪（约 150）→ 步枪（约 750），再大额买职业。',
		'首购职业：Medic（1 万，组队）或 Marksman（1.5 万，单人）。',
	],
	tierTitle: '梯队速览',
	tierDesc: '以下为单人梯队快照；详细玩法拆解见梯队榜页。',
	faq: [
		{
			question: 'SZA Companion 是什么？',
			answer:
				'SZA Companion 是 Roblox《Survive Zombie Arena》（Nectarforge Studios）的非官方粉丝站。我们追踪带置信标签的兑换码、职业花费、武器成长与纯浏览器规划工具——不藏掉率，也非官方背书。',
		},
		{
			question: 'SZA Companion 是官方的吗？',
			answer: '不是。我们与 Roblox Corporation 及 Nectarforge Studios 无关联。官方链接见 Discord 页面。',
		},
		{
			question: '第一个职业该解锁谁？',
			answer:
				'组队选 Medic（1 万信用点），单人 DPS 选 Marksman（1.5 万）。买 Ninja 或 Demolitionist 前先看新手指南与信用点规划器。',
		},
	],
};

export const homeCopy: Record<LocalizedLocale, HomeCopy> = {
	es,
	'pt-br': ptBr,
	'zh-cn': zhCn,
};

export function getHomeCopy(locale: LocaleCode): HomeCopy {
	return homeCopy[locale as LocalizedLocale];
}
