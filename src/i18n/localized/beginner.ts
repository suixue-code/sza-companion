import type { LocaleCode } from '../config';
import type { FaqItem } from '../../types';

export type BeginnerSection = {
	heading: string;
	body?: string;
	items?: string[];
	table?: {
		headers: string[];
		rows: (string | number)[][];
	};
};

export type BeginnerCopy = {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	geoSnap: string;
	lead: string;
	fastRouteTitle: string;
	fastRouteBody: string;
	sections: BeginnerSection[];
	faq: FaqItem[];
};

type LocalizedLocale = 'es' | 'pt-br' | 'zh-cn';

const esSections: BeginnerSection[] = [
	{
		heading: 'Ruta inicial en 5 pasos',
		items: [
			'Canjea Zombies por 2.500 créditos (Tienda → Canjear códigos).',
			'Primera partida con Survivor; en coop, Medic suele ser buen starter al desbloquearlo.',
			'Armas: pistola → escopeta (~150 créditos) → rifle (~750 créditos).',
			'Prioridad de equipo: barricada de acero → torreta detrás de cobertura → una mejora de vida → ahorrar para clase.',
			'No gastes en Ninja, cosméticos o torretas extra antes de dominar Marksman/Medic.',
		],
	},
	{
		heading: 'Hitos de créditos',
		body: 'Desbloqueos permanentes de clase y recompensa del código conocido. Los costes de armas en partida van aparte.',
		table: {
			headers: ['Créditos', 'Desbloqueo / acción'],
			rows: [
				['2.500', 'Recompensa código Zombies'],
				['5k–8k', 'Mejora escopeta (en partida)'],
				['10.000', 'Medic'],
				['15.000', 'Marksman'],
				['20.000', 'Engineer'],
				['25.000', 'Ninja (evitar como primer desbloqueo)'],
				['50.000', 'Demolitionist'],
				['75.000', 'Tactician'],
				['200.000', 'Bastion'],
				['250.000', 'Necromancer'],
			],
		},
	},
	{
		heading: 'Plan para las primeras 5 partidas',
		body: 'Ajusta al ritmo del lobby público: el objetivo son fundamentos, no récords de oleada.',
		table: {
			headers: ['Partida', 'Clase', 'Arma', 'Objetivo créditos', 'Enfoque'],
			rows: [
				['1', 'Survivor', 'Pistola → Escopeta', 'Canjear código', 'Barricada + torreta en escalera'],
				['2', 'Survivor / Medic', 'Escopeta → Rifle', '10k+', 'Ahorrar para Medic o Marksman'],
				['3', 'Medic / Marksman', 'Rifle', '15k+', 'Aprender habilidades del kit'],
				['4–5', 'Marksman', 'Rifle', 'Ahorrar 75k', 'Sonar Ping en elites; Auto Skip con disciplina'],
			],
		},
	},
	{
		heading: 'Errores comunes',
		items: [
			'Comprar Ninja o Demolitionist antes de dominar Marksman/Medic.',
			'Votar Auto Skip antes de colocar barricada y torreta.',
			'Gastar créditos en torretas duplicadas en vez de escopeta/rifle.',
			'Ignorar escaleras en Rooftop Map: rotar en campo abierto te castiga.',
			'Asumir que el código disputado GALACTIC funciona sin confirmar en el juego.',
		],
	},
	{
		heading: 'Roles en equipo (lobbies públicos)',
		table: {
			headers: ['Rol', 'Clase', 'Trabajo'],
			rows: [
				['Apoyo', 'Medic', 'Torre de curación + estimulantes detrás de la barricada'],
				['DPS carry', 'Marksman', 'Rifle + Deadeye perforante, Sonar Ping en elites'],
				['Ancla', 'Engineer → Tactician', 'Barricadas y torretas en puntos estrechos'],
				['Control masas', 'Demolitionist', 'Shockwave/Molotov en cargas apretadas en escaleras'],
			],
		},
	},
	{
		heading: 'Notas del Rooftop Map',
		body: 'Activo desde el 18 abr 2026 — sustituyó Square Arena. La altura y las escaleras favorecen aguantar carriles frente a rotar sin parar. Las barricadas de Tactician y Death Nova de Necromancer en embudos escalan mejor; el sigilo de Ninja cae en oleadas medias-altas.',
	},
];

const ptBrSections: BeginnerSection[] = [
	{
		heading: 'Rota inicial em 5 passos',
		items: [
			'Resgate Zombies por 2.500 créditos (Loja → Resgatar códigos).',
			'Primeira run com Survivor; em coop, Medic costuma ser bom starter ao desbloquear.',
			'Armas: pistola → shotgun (~150 créditos) → rifle (~750 créditos).',
			'Prioridade de equipamento: barricada de aço → torreta atrás de cobertura → um upgrade de vida → poupar para classe.',
			'Não gaste em Ninja, cosméticos ou torretas extras antes de dominar Marksman/Medic.',
		],
	},
	{
		heading: 'Marcos de créditos',
		body: 'Desbloqueios permanentes de classe e recompensa do código conhecido. Custos de armas na run são separados.',
		table: {
			headers: ['Créditos', 'Desbloqueio / ação'],
			rows: [
				['2.500', 'Recompensa código Zombies'],
				['5k–8k', 'Upgrade shotgun (na run)'],
				['10.000', 'Medic'],
				['15.000', 'Marksman'],
				['20.000', 'Engineer'],
				['25.000', 'Ninja (evitar como primeiro desbloqueio)'],
				['50.000', 'Demolitionist'],
				['75.000', 'Tactician'],
				['200.000', 'Bastion'],
				['250.000', 'Necromancer'],
			],
		},
	},
	{
		heading: 'Plano para as primeiras 5 runs',
		body: 'Ajuste ao ritmo do lobby público — o foco é fundamento, não recorde de wave.',
		table: {
			headers: ['Run', 'Classe', 'Arma', 'Meta de créditos', 'Foco'],
			rows: [
				['1', 'Survivor', 'Pistola → Shotgun', 'Resgatar código', 'Barricada + torreta na escada'],
				['2', 'Survivor / Medic', 'Shotgun → Rifle', '10k+', 'Poupar para Medic ou Marksman'],
				['3', 'Medic / Marksman', 'Rifle', '15k+', 'Aprender habilidades do kit'],
				['4–5', 'Marksman', 'Rifle', 'Poupar 75k', 'Sonar Ping em elites; Auto Skip com disciplina'],
			],
		},
	},
	{
		heading: 'Erros comuns',
		items: [
			'Comprar Ninja ou Demolitionist antes de dominar Marksman/Medic.',
			'Votar Auto Skip antes de colocar barricada e torreta.',
			'Gastar créditos em torretas duplicadas em vez de shotgun/rifle.',
			'Ignorar escadas no Rooftop Map — rotação em campo aberto é punida.',
			'Assumir que o código disputado GALACTIC funciona sem confirmar no jogo.',
		],
	},
	{
		heading: 'Papéis em time (lobbies públicos)',
		table: {
			headers: ['Papel', 'Classe', 'Função'],
			rows: [
				['Suporte', 'Medic', 'Torre de cura + estímulos atrás da barricada'],
				['DPS carry', 'Marksman', 'Rifle + Deadeye perfurante, Sonar Ping em elites'],
				['Âncora', 'Engineer → Tactician', 'Barricadas e torretas em gargalos'],
				['Controle de massa', 'Demolitionist', 'Shockwave/Molotov em cargas apertadas nas escadas'],
			],
		},
	},
	{
		heading: 'Notas do Rooftop Map',
		body: 'Ativo desde 18 abr 2026 — substituiu Square Arena. Altura e escadas favorecem segurar corredores em vez de girar o tempo todo. Barricadas de Tactician e Death Nova de Necromancer em funis escalam melhor; stealth de Ninja cai em waves médias-altas.',
	},
];

const zhCnSections: BeginnerSection[] = [
	{
		heading: '五步入门路线',
		items: [
			'兑换 Zombies 得 2500 信用点（商店 → 兑换码）。',
			'第一局用 Survivor；组队解锁后 Medic 常作默认起手。',
			'武器：手枪 → 霰弹枪（约 150 信用点）→ 步枪（约 750 信用点）。',
			'装备优先：钢质路障 → 掩体后炮塔 → 一次生命升级 → 存钱买职业。',
			'在 Marksman/Medic 基础稳固前，别买 Ninja、外观或多余炮塔。',
		],
	},
	{
		heading: '信用点里程碑',
		body: '永久职业解锁与已知兑换码奖励。局内武器花费另计。',
		table: {
			headers: ['信用点', '解锁 / 行动'],
			rows: [
				['2500', 'Zombies 兑换码'],
				['5k–8k', '霰弹枪升级（局内）'],
				['1 万', 'Medic'],
				['1.5 万', 'Marksman'],
				['2 万', 'Engineer'],
				['2.5 万', 'Ninja（勿作首购）'],
				['5 万', 'Demolitionist'],
				['7.5 万', 'Tactician'],
				['20 万', 'Bastion'],
				['25 万', 'Necromancer'],
			],
		},
	},
	{
		heading: '前 5 局计划',
		body: '按公开大厅节奏调整——目标是基本功，不是冲波次榜。',
		table: {
			headers: ['局', '职业', '武器', '信用点目标', '重点'],
			rows: [
				['1', 'Survivor', '手枪 → 霰弹', '兑换码', '楼梯口路障 + 炮塔'],
				['2', 'Survivor / Medic', '霰弹 → 步枪', '1 万+', '存钱买 Medic 或 Marksman'],
				['3', 'Medic / Marksman', '步枪', '1.5 万+', '熟悉职业技能'],
				['4–5', 'Marksman', '步枪', '存 7.5 万', 'Sonar Ping 盯精英；有纪律地用 Auto Skip'],
			],
		},
	},
	{
		heading: '常见失误',
		items: [
			'在 Marksman/Medic 基础前买 Ninja 或 Demolitionist。',
			'路障和炮塔没放好就投票 Auto Skip。',
			'重复买炮塔而不升级霰弹/步枪。',
			'忽视 Rooftop Map 楼梯卡口——开阔转点会被惩罚。',
			'未在游戏内确认就认为存疑码 GALACTIC 可用。',
		],
	},
	{
		heading: '组队角色（公开大厅）',
		table: {
			headers: ['角色', '职业', '职责'],
			rows: [
				['辅助', 'Medic', '路障后治疗塔 + 兴奋剂续航'],
				['主 C', 'Marksman', '步枪 + Deadeye 穿透，Sonar Ping 标精英'],
				['锚点', 'Engineer → Tactician', '卡口路障与炮塔'],
				['群控', 'Demolitionist', '楼梯密集怪群用 Shockwave/燃烧瓶'],
			],
		},
	},
	{
		heading: 'Rooftop Map 要点',
		body: '2026 年 4 月 18 日起上线，取代 Square Arena。高度与楼梯更适合卡线而非不停转点。Tactician 路障与 Necromancer 在窄道里的 Death Nova 更吃香；Ninja 潜行在中后期波次会疲软。',
	},
];

const es: BeginnerCopy = {
	title: 'Guía principiante de Survive Zombie Arena — Primeras partidas y créditos',
	description:
		'Guía para nuevos jugadores: canjear códigos, mejorar armas, Medic vs Marksman, hitos de créditos y consejos para Rooftop Map.',
	eyebrow: 'Meta Rooftop Map · revisado',
	h1: 'Guía principiante',
	geoSnap:
		'¿Nuevo en Survive Zombie Arena? Empieza con códigos, tus primeras mejoras de arma y Medic o Marksman como primera clase de pago — pensado para la meta de escaleras del Rooftop Map.',
	lead: 'Gana créditos pronto, compra escopeta antes de que salgan elites y evita clases caras como Ninja hasta tener lo básico.',
	fastRouteTitle: 'Ruta rápida',
	fastRouteBody: 'Código Zombies → mejora escopeta → Medic (10k) o Marksman (15k) → rifle → ahorrar hacia Tactician (75k).',
	sections: esSections,
	faq: [
		{
			question: '¿Qué compro primero en Survive Zombie Arena?',
			answer:
				'Canjea Zombies (2.500 créditos), mejora pistola → escopeta (~150) → rifle (~750), luego desbloquea Medic (10k) o Marksman (15k). No tomes Ninja como primera clase.',
		},
		{
			question: '¿Medic o Marksman para principiantes?',
			answer:
				'Medic en lobbies públicos en coop — A-tier más barato a 10.000 créditos con curación sostenida. Marksman para DPS en solo a 15.000 con Deadeye y Sonar Ping.',
		},
		{
			question: '¿Cuándo votar Auto Skip?',
			answer:
				'Solo cuando barricada + torreta estén colocadas, tengas escopeta mejorada y el equipo supere la oleada actual. No lo uses al inicio para acumular banco.',
		},
		{
			question: '¿El Rooftop Map cambia la estrategia de principiante?',
			answer:
				'Sí. Las escaleras sustituyen el campo abierto de Square Arena. Mantén carriles con barricadas; guías pre-abril que asumen rotación libre quedan parcialmente desactualizadas.',
		},
		{
			question: '¿Cómo planifico créditos después de la ruta inicial?',
			answer:
				'Usa el Credit Planner: elige meta (farmeo, primer desbloqueo o ahorro para Necromancer) y mira sesiones estimadas hasta el siguiente hito.',
		},
	],
};

const ptBr: BeginnerCopy = {
	title: 'Guia para iniciantes de Survive Zombie Arena — Primeiras runs e créditos',
	description:
		'Guia para novos jogadores: resgatar códigos, upgrades de armas, Medic vs Marksman, marcos de créditos e dicas do Rooftop Map.',
	eyebrow: 'Meta Rooftop Map · revisado',
	h1: 'Guia para iniciantes',
	geoSnap:
		'Novo em Survive Zombie Arena? Comece com códigos, primeiros upgrades de arma e Medic ou Marksman como primeira classe paga — feito para a meta de escadas do Rooftop Map.',
	lead: 'Ganhe créditos cedo, compre shotgun antes dos elites e evite classes caras como Ninja até ter o básico.',
	fastRouteTitle: 'Rota rápida',
	fastRouteBody: 'Código Zombies → upgrade shotgun → Medic (10k) ou Marksman (15k) → rifle → poupar para Tactician (75k).',
	sections: ptBrSections,
	faq: [
		{
			question: 'O que comprar primeiro em Survive Zombie Arena?',
			answer:
				'Resgate Zombies (2.500 créditos), upgrade pistola → shotgun (~150) → rifle (~750), depois desbloqueie Medic (10k) ou Marksman (15k). Não pegue Ninja como primeira classe.',
		},
		{
			question: 'Medic ou Marksman para iniciantes?',
			answer:
				'Medic em lobbies públicos em coop — A-tier mais barato a 10.000 créditos com cura sustentada. Marksman para DPS no solo a 15.000 com Deadeye e Sonar Ping.',
		},
		{
			question: 'Quando votar Auto Skip?',
			answer:
				'Só com barricada + torreta colocadas, shotgun feito e o time superando a wave atual. Não use no começo só para acumular banco.',
		},
		{
			question: 'O Rooftop Map muda a estratégia de iniciante?',
			answer:
				'Sim. Escadas substituem o campo aberto do Square Arena. Segure corredores com barricadas; guias pré-abril com rotação livre ficam parcialmente desatualizados.',
		},
		{
			question: 'Como planejar créditos depois da rota inicial?',
			answer:
				'Use o Credit Planner: escolha meta (farm, primeiro desbloqueio ou poupar para Necromancer) e veja sessões estimadas até o próximo marco.',
		},
	],
};

const zhCn: BeginnerCopy = {
	title: 'Survive Zombie Arena 新手指南 — 前几次对局与信用点路线',
	description:
		'新手向指南：兑换码、武器升级、Medic 与 Marksman 首购、信用点里程碑与 Rooftop Map 技巧。',
	eyebrow: 'Rooftop Map 环境 · 复核于',
	h1: '新手指南',
	geoSnap:
		'刚玩 Survive Zombie Arena？先兑换码、做首批武器升级，首购 Medic 或 Marksman——针对 Rooftop Map 楼梯环境编写。',
	lead: '早点攒信用点，精英出现前买霰弹，基础没稳之前别碰 Ninja 这类贵职业。',
	fastRouteTitle: '速通路线',
	fastRouteBody: 'Zombies 码 → 霰弹升级 → Medic（1 万）或 Marksman（1.5 万）→ 步枪 → 向 Tactician（7.5 万）存钱。',
	sections: zhCnSections,
	faq: [
		{
			question: 'Survive Zombie Arena 最先该买什么？',
			answer:
				'兑换 Zombies（2500 信用点），升级手枪 → 霰弹（约 150）→ 步枪（约 750），再解锁 Medic（1 万）或 Marksman（1.5 万）。首购别选 Ninja。',
		},
		{
			question: '新手选 Medic 还是 Marksman？',
			answer:
				'公开大厅组队选 Medic——1 万信用点最便宜的 A 级，治疗续航强。单人 DPS 选 Marksman（1.5 万），有 Deadeye 与 Sonar Ping。',
		},
		{
			question: '什么时候投 Auto Skip？',
			answer: '路障和炮塔放好、霰弹升级完成、队伍已碾压当前波次后再投。别开局就为存钱乱投。',
		},
		{
			question: 'Rooftop Map 会改变新手策略吗？',
			answer: '会。楼梯卡口取代 Square Arena 开阔场地。用路障卡线；假设自由转点的 4 月前攻略已部分过时。',
		},
		{
			question: '入门路线之后怎么规划信用点？',
			answer: '用信用点规划器选目标（刷钱、首购或存 Necromancer），查看距下一里程碑的预估局数。',
		},
	],
};

export const beginnerCopy: Record<LocalizedLocale, BeginnerCopy> = {
	es,
	'pt-br': ptBr,
	'zh-cn': zhCn,
};

export function getBeginnerCopy(locale: LocaleCode): BeginnerCopy {
	return beginnerCopy[locale as LocalizedLocale];
}
