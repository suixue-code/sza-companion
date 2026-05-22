import type { LocaleCode } from '../config';

export type WikiLocalizedLink = {
	label: string;
	href: string;
	copy: string;
};

export type WikiCopy = {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	geoSnap: string;
	startTitle: string;
	startBody: string;
	localizedLinks: WikiLocalizedLink[];
	englishOnlyNote: string;
};

type LocalizedLocale = 'es' | 'pt-br' | 'zh-cn';

const es: WikiCopy = {
	title: 'Wiki Hub de SZA Companion — Directorio de guías y herramientas',
	description:
		'Hub wiki de Survive Zombie Arena: códigos, clases, loadouts, oleadas, mapas, leaderboard y Credit Planner con etiquetas de confianza.',
	eyebrow: 'Directorio · revisado',
	h1: 'Wiki Hub',
	geoSnap:
		'Directorio ligero — no es una wiki completa con base de datos. Cada enlace va a una página que publicamos con fuentes y huecos de datos honestos.',
	startTitle: 'Empieza aquí',
	startBody: 'Códigos → guía principiante → Credit Planner → tier list.',
	localizedLinks: [
		{ label: 'Códigos', href: '/codes/', copy: 'Código Zombies activo más GALACTIC disputado.' },
		{ label: 'Guía principiante', href: '/beginner-guide/', copy: 'Primeras 5 partidas, hitos de créditos, Rooftop Map.' },
		{ label: 'Credit Planner', href: '/tools/credit-planner/', copy: 'Planificación de desbloqueos solo en el navegador.' },
		{ label: 'Tier list', href: '/tier-list/', copy: 'Rankings S/A/B/C para meta Rooftop.' },
		{ label: 'Evento Galactic', href: '/events/galactic/', copy: 'Void Shards, cajas y cuenta atrás.' },
		{
			label: 'Nota del hub',
			href: '/wiki/',
			copy: 'Páginas traducidas del núcleo; el resto del sitio sigue en inglés por ahora.',
		},
	],
	englishOnlyNote:
		'Estas rutas tienen versión en tu idioma: códigos, guía principiante, Credit Planner, tier list, evento Galactic y este hub. Siguen solo en inglés: loadouts, oleadas, enemigos, mapas, leaderboard, todas las clases individuales, armas, actualizaciones, Discord y páginas legales.',
};

const ptBr: WikiCopy = {
	title: 'Wiki Hub do SZA Companion — Diretório de guias e ferramentas',
	description:
		'Hub wiki de Survive Zombie Arena: códigos, classes, loadouts, waves, mapas, leaderboard e Credit Planner com rótulos de confiança.',
	eyebrow: 'Diretório · revisado',
	h1: 'Wiki Hub',
	geoSnap:
		'Diretório leve — não é uma wiki completa com banco de dados. Cada link vai para uma página que publicamos com fontes e lacunas honestas.',
	startTitle: 'Comece aqui',
	startBody: 'Códigos → guia para iniciantes → Credit Planner → tier list.',
	localizedLinks: [
		{ label: 'Códigos', href: '/codes/', copy: 'Código Zombies ativo mais GALACTIC disputado.' },
		{ label: 'Guia para iniciantes', href: '/beginner-guide/', copy: 'Primeiras 5 runs, marcos de créditos, Rooftop Map.' },
		{ label: 'Credit Planner', href: '/tools/credit-planner/', copy: 'Planejamento de desbloqueios só no navegador.' },
		{ label: 'Tier list', href: '/tier-list/', copy: 'Rankings S/A/B/C para meta Rooftop.' },
		{ label: 'Evento Galactic', href: '/events/galactic/', copy: 'Void Shards, caixas e contagem regressiva.' },
		{
			label: 'Nota do hub',
			href: '/wiki/',
			copy: 'Páginas núcleo traduzidas; o resto do site ainda está em inglês.',
		},
	],
	englishOnlyNote:
		'Estas rotas têm versão no seu idioma: códigos, guia para iniciantes, Credit Planner, tier list, evento Galactic e este hub. Continuam só em inglês: loadouts, waves, inimigos, mapas, leaderboard, páginas individuais de classes, armas, atualizações, Discord e páginas legais.',
};

const zhCn: WikiCopy = {
	title: 'SZA Companion Wiki 中心 — 指南与工具目录',
	description:
		'Survive Zombie Arena Wiki 中心：兑换码、职业、配装、波次、地图、排行榜与带置信标签的信用点规划器。',
	eyebrow: '目录 · 复核于',
	h1: 'Wiki 中心',
	geoSnap: '轻量目录，不是完整 Wiki 数据库。每个链接指向我们实际维护、带来源与数据缺口说明的页面。',
	startTitle: '从这里开始',
	startBody: '兑换码 → 新手指南 → 信用点规划器 → 梯队榜。',
	localizedLinks: [
		{ label: '兑换码', href: '/codes/', copy: '有效码 Zombies 与存疑 GALACTIC。' },
		{ label: '新手指南', href: '/beginner-guide/', copy: '前 5 局、信用点里程碑、Rooftop Map。' },
		{ label: '信用点规划器', href: '/tools/credit-planner/', copy: '纯浏览器解锁规划。' },
		{ label: '梯队榜', href: '/tier-list/', copy: 'Rooftop 环境 S/A/B/C 排名。' },
		{ label: 'Galactic 活动', href: '/events/galactic/', copy: 'Void Shards、宝箱与倒计时。' },
		{
			label: '中心说明',
			href: '/wiki/',
			copy: '核心页已本地化；站点其余部分暂为英文。',
		},
	],
	englishOnlyNote:
		'以下路径有中文版本：兑换码、新手指南、信用点规划器、梯队榜、Galactic 活动与本中心。仍为英文的页面包括：最佳配装、波次、敌人、地图、排行榜、各职业详情、武器、更新、Discord 与法律页。',
};

export const wikiCopy: Record<LocalizedLocale, WikiCopy> = {
	es,
	'pt-br': ptBr,
	'zh-cn': zhCn,
};

export function getWikiCopy(locale: LocaleCode): WikiCopy {
	return wikiCopy[locale as LocalizedLocale];
}
