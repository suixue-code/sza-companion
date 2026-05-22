import type { LocaleCode } from '../config';
import type { FaqItem } from '../../types';

export type CreditPlannerPageCopy = {
	title: string;
	description: string;
	faq: FaqItem[];
};

export type CreditPlannerGoalOption = {
	value: string;
	label: string;
};

export type CreditPlannerUiCopy = {
	eyebrow: string;
	h1: string;
	geoSnap: string;
	lead: string;
	quickRuleTitle: string;
	quickRuleBody: string;
	sessionTitle: string;
	currentCredits: string;
	sessionsPerDay: string;
	goal: string;
	goalOptions: CreditPlannerGoalOption[];
	ownedClassesTitle: string;
	ownedClassesHint: string;
	recommendationTitle: string;
	nextAction: string;
	targetUnlock: string;
	creditsGap: string;
	estimatedDays: string;
	disclaimer: string;
	checklistTitle: string;
	warningsTitle: string;
	readyLabel: string;
	noneTargetLabel: string;
	howWeEstimateTitle: string;
	howWeEstimateBody: string;
	howWeEstimateItems: [string, string, string];
	classesPageLink: string;
	tierListLink: string;
};

export type CreditPlannerLocalized = {
	page: CreditPlannerPageCopy;
	ui: CreditPlannerUiCopy;
};

type LocalizedLocale = 'es' | 'pt-br' | 'zh-cn';

const goalOptionsEs: CreditPlannerGoalOption[] = [
	{ value: 'balanced_progression', label: 'Progresión equilibrada' },
	{ value: 'unlock_first_class', label: 'Primer desbloqueo de clase' },
	{ value: 'farm_credits', label: 'Farmeo de créditos' },
	{ value: 'solo_high_wave', label: 'Oleada alta en solo' },
	{ value: 'team_support', label: 'Apoyo en equipo' },
	{ value: 'push_necromancer', label: 'Ahorrar para Necromancer' },
];

const goalOptionsPtBr: CreditPlannerGoalOption[] = [
	{ value: 'balanced_progression', label: 'Progressão equilibrada' },
	{ value: 'unlock_first_class', label: 'Primeiro desbloqueio de classe' },
	{ value: 'farm_credits', label: 'Farm de créditos' },
	{ value: 'solo_high_wave', label: 'Wave alta no solo' },
	{ value: 'team_support', label: 'Suporte em time' },
	{ value: 'push_necromancer', label: 'Poupar para Necromancer' },
];

const goalOptionsZhCn: CreditPlannerGoalOption[] = [
	{ value: 'balanced_progression', label: '均衡成长' },
	{ value: 'unlock_first_class', label: '首次职业解锁' },
	{ value: 'farm_credits', label: '刷信用点' },
	{ value: 'solo_high_wave', label: '单人高波次' },
	{ value: 'team_support', label: '组队辅助' },
	{ value: 'push_necromancer', label: '存钱买 Necromancer' },
];

const es: CreditPlannerLocalized = {
	page: {
		title: 'Credit Planner de Survive Zombie Arena',
		description:
			'Planifica tu próximo desbloqueo de clase y gasto de créditos en Survive Zombie Arena. Planner solo en el navegador con metas Medic, Marksman, Tactician y Necromancer.',
		faq: [
			{
				question: '¿El Credit Planner se conecta a mi cuenta de Roblox?',
				answer: 'No. Todo el cálculo corre en tu navegador. Introduce créditos a mano y marca las clases que ya tienes.',
			},
			{
				question: '¿Cuál es el mejor primer desbloqueo de clase?',
				answer:
					'Medic (10.000 créditos) para apoyo en coop o Marksman (15.000) para DPS en solo. Evita Ninja como primer desbloqueo.',
			},
			{
				question: '¿Cuántos créditos debo ahorrar para Necromancer?',
				answer:
					'250.000 créditos según fuentes públicas de mayo de 2026. El planner muestra tu hueco y avisa de compras laterales como Bastion.',
			},
		],
	},
	ui: {
		eyebrow: 'Solo navegador · sin login Roblox · revisado',
		h1: 'Credit Planner',
		geoSnap:
			'Planifica tu próximo desbloqueo según créditos actuales, meta y clases que ya tienes. Solo en el navegador — nunca iniciamos sesión en Roblox.',
		lead: 'Pon tu saldo, elige meta, marca clases desbloqueadas y recibe una checklist corta antes de gastar en la tienda.',
		quickRuleTitle: 'Regla rápida',
		quickRuleBody:
			'Canjea Zombies (2.500 créditos) primero. La mayoría debería desbloquear Medic (10k coop) o Marksman (15k solo) antes que Ninja, Demolitionist o legendarias.',
		sessionTitle: 'Tu sesión',
		currentCredits: 'Créditos actuales',
		sessionsPerDay: 'Sesiones por día',
		goal: 'Meta',
		goalOptions: goalOptionsEs,
		ownedClassesTitle: 'Clases que tienes',
		ownedClassesHint: 'Survivor es gratis para todos — marca lo que ya desbloqueaste.',
		recommendationTitle: 'Recomendación',
		nextAction: 'Siguiente acción',
		targetUnlock: 'Desbloqueo objetivo',
		creditsGap: 'Hueco de créditos',
		estimatedDays: 'Días est. (sesiones/día)',
		disclaimer:
			'Solo estimación. La matemática de sesiones asume ~8.000 créditos por partida según guías públicas. Confirma costes en la tienda del lobby antes de gastar.',
		checklistTitle: 'Checklist',
		warningsTitle: 'Avisos',
		readyLabel: 'Listo',
		noneTargetLabel: 'Ninguno — enfócate en mejoras en partida',
		howWeEstimateTitle: 'Cómo estimamos',
		howWeEstimateBody:
			'El planner lee costes de clase de nuestro archivo público y aplica reglas por meta de guías de progresión (Medic/Marksman primero, ahorro Necromancer, ruta pistola → escopeta → rifle).',
		howWeEstimateItems: [
			'No se conecta a Roblox ni lee tu cuenta.',
			'El modo Hardcore paga 7,5 créditos/zombie tras el parche del 8 may 2026 — las rutas de farmeo pueden cambiar.',
			'Mira la página de clases y la tier list para consejos completos de desbloqueo.',
		],
		classesPageLink: 'página de clases',
		tierListLink: 'tier list',
	},
};

const ptBr: CreditPlannerLocalized = {
	page: {
		title: 'Credit Planner de Survive Zombie Arena',
		description:
			'Planeje o próximo desbloqueio de classe e gasto de créditos em Survive Zombie Arena. Planner só no navegador com metas Medic, Marksman, Tactician e Necromancer.',
		faq: [
			{
				question: 'O Credit Planner conecta na minha conta Roblox?',
				answer: 'Não. Toda a conta roda no seu navegador. Digite créditos manualmente e marque classes que já tem.',
			},
			{
				question: 'Qual o melhor primeiro desbloqueio de classe?',
				answer:
					'Medic (10.000 créditos) para suporte em coop ou Marksman (15.000) para DPS no solo. Evite Ninja como primeiro desbloqueio.',
			},
			{
				question: 'Quantos créditos poupar para Necromancer?',
				answer:
					'250.000 créditos pelas fontes públicas de maio de 2026. O planner mostra o gap e avisa sobre compras laterais como Bastion.',
			},
		],
	},
	ui: {
		eyebrow: 'Só navegador · sem login Roblox · revisado',
		h1: 'Credit Planner',
		geoSnap:
			'Planeje o próximo desbloqueio com créditos atuais, meta e classes que já tem. Só no navegador — nunca fazemos login no Roblox.',
		lead: 'Coloque o saldo, escolha a meta, marque classes desbloqueadas e receba um checklist curto antes de gastar na loja.',
		quickRuleTitle: 'Regra rápida',
		quickRuleBody:
			'Resgate Zombies (2.500 créditos) primeiro. A maioria deve desbloquear Medic (10k coop) ou Marksman (15k solo) antes de Ninja, Demolitionist ou lendárias.',
		sessionTitle: 'Sua sessão',
		currentCredits: 'Créditos atuais',
		sessionsPerDay: 'Sessões por dia',
		goal: 'Meta',
		goalOptions: goalOptionsPtBr,
		ownedClassesTitle: 'Classes que você tem',
		ownedClassesHint: 'Survivor é grátis para todos — marque o que já desbloqueou.',
		recommendationTitle: 'Recomendação',
		nextAction: 'Próxima ação',
		targetUnlock: 'Desbloqueio alvo',
		creditsGap: 'Gap de créditos',
		estimatedDays: 'Dias est. (sessões/dia)',
		disclaimer:
			'Só estimativa. A conta de sessões assume ~8.000 créditos por run em guias públicos. Confirme custos na loja do lobby antes de gastar.',
		checklistTitle: 'Checklist',
		warningsTitle: 'Avisos',
		readyLabel: 'Pronto',
		noneTargetLabel: 'Nenhum — foque em upgrades na run',
		howWeEstimateTitle: 'Como estimamos',
		howWeEstimateBody:
			'O planner lê custos de classe do nosso arquivo público e aplica regras por meta de guias de progressão (Medic/Marksman primeiro, poupar Necromancer, rota pistola → shotgun → rifle).',
		howWeEstimateItems: [
			'Não conecta ao Roblox nem lê sua conta.',
			'Hardcore paga 7,5 créditos/zumbi após o patch de 8 mai 2026 — rotas de farm podem mudar.',
			'Veja a página de classes e a tier list para dicas completas de desbloqueio.',
		],
		classesPageLink: 'página de classes',
		tierListLink: 'tier list',
	},
};

const zhCn: CreditPlannerLocalized = {
	page: {
		title: 'Survive Zombie Arena 信用点规划器',
		description:
			'规划 Survive Zombie Arena 下一职业解锁与信用点花费。纯浏览器工具，支持 Medic、Marksman、Tactician、Necromancer 等目标。',
		faq: [
			{
				question: '信用点规划器会连接我的 Roblox 账号吗？',
				answer: '不会。所有计算在浏览器完成。请手动输入信用点并勾选已拥有职业。',
			},
			{
				question: '第一个职业该解锁谁？',
				answer: '组队选 Medic（1 万信用点），单人 DPS 选 Marksman（1.5 万）。首购别选 Ninja。',
			},
			{
				question: '存 Necromancer 要多少信用点？',
				answer: '据 2026 年 5 月公开资料为 25 万。规划器会显示缺口并提醒勿乱买如 Bastion 等旁支。',
			},
		],
	},
	ui: {
		eyebrow: '纯浏览器 · 无需 Roblox 登录 · 复核于',
		h1: '信用点规划器',
		geoSnap: '按当前信用点、目标与已拥有职业规划下一解锁。仅在浏览器运行——不会登录 Roblox。',
		lead: '输入余额、选目标、勾选已解锁职业，在商店花钱前先看简短清单。',
		quickRuleTitle: '快速原则',
		quickRuleBody:
			'先兑换 Zombies（2500 信用点）。多数人应在 Ninja、Demolitionist 或传说职业前先买 Medic（1 万组队）或 Marksman（1.5 万单人）。',
		sessionTitle: '你的参数',
		currentCredits: '当前信用点',
		sessionsPerDay: '每日局数',
		goal: '目标',
		goalOptions: goalOptionsZhCn,
		ownedClassesTitle: '已拥有职业',
		ownedClassesHint: 'Survivor 人人免费——勾选你已解锁的职业。',
		recommendationTitle: '建议',
		nextAction: '下一步',
		targetUnlock: '目标解锁',
		creditsGap: '信用点缺口',
		estimatedDays: '预估天数（按每日局数）',
		disclaimer:
			'仅为估算。局数算法假设公开攻略约每局 8000 信用点。花钱前请在大厅商店确认实际价格。',
		checklistTitle: '清单',
		warningsTitle: '警告',
		readyLabel: '已达成',
		noneTargetLabel: '无——优先局内升级',
		howWeEstimateTitle: '估算方式',
		howWeEstimateBody:
			'规划器读取公开数据文件中的职业花费，并按社区成长攻略的目标规则（先 Medic/Marksman、存 Necromancer、武器路线手枪→霰弹→步枪）给出建议。',
		howWeEstimateItems: [
			'不连接 Roblox，不读取账号。',
			'2026 年 5 月 8 日补丁后 Hardcore 为每只僵尸 7.5 信用点——刷钱路线可能不同。',
			'完整解锁建议见职业页与梯队榜。',
		],
		classesPageLink: '职业页',
		tierListLink: '梯队榜',
	},
};

export const creditPlannerCopy: Record<LocalizedLocale, CreditPlannerLocalized> = {
	es,
	'pt-br': ptBr,
	'zh-cn': zhCn,
};

export function getCreditPlannerPageCopy(locale: LocaleCode): CreditPlannerPageCopy {
	return creditPlannerCopy[locale as LocalizedLocale].page;
}

export function getCreditPlannerUiCopy(locale: LocaleCode): CreditPlannerUiCopy {
	return creditPlannerCopy[locale as LocalizedLocale].ui;
}

export function getCreditPlannerCopy(locale: LocaleCode): CreditPlannerLocalized {
	return creditPlannerCopy[locale as LocalizedLocale];
}
