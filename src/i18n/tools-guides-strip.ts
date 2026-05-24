import type { LocaleCode } from './config';

type ToolsGuidesStripCopy = {
	heading: string;
	links: { href: string; label: string; copy: string }[];
};

const en: ToolsGuidesStripCopy = {
	heading: 'More guides & tools',
	links: [
		{ href: '/guides/', label: 'All guides', copy: '26 deep-dive class, weapon, and wave articles.' },
		{ href: '/beginner-guide/', label: 'Beginner guide', copy: 'First 5 runs and Credit milestones.' },
		{ href: '/best-loadouts/', label: 'Best loadouts', copy: 'Solo, team, farm, and leaderboard frameworks.' },
		{ href: '/weapons/', label: 'Best weapons', copy: 'Handgun, shotgun, rifle, World Ender, and new guns.' },
		{ href: '/waves/', label: 'Waves guide', copy: 'Auto Skip rules and Credit spend phases.' },
		{ href: '/enemies/', label: 'Enemies guide', copy: 'Elite priority, pack control, and counters.' },
		{ href: '/maps/', label: 'Rooftop map guide', copy: 'Current map routes, hold spots, and Atlantis notes.' },
		{ href: '/tools/credit-planner/', label: 'Credit Planner', copy: 'Plan Medic, Marksman, or Necromancer unlocks.' },
	],
};

const es: ToolsGuidesStripCopy = {
	heading: 'Más guías y herramientas',
	links: [
		{ href: '/guides/', label: 'Todas las guías (EN)', copy: '26 artículos profundos en inglés.' },
		{ href: '/es/beginner-guide/', label: 'Guía principiante', copy: 'Primeras partidas y créditos.' },
		{ href: '/es/codes/', label: 'Códigos', copy: 'Zombies activo y GALACTIC disputado.' },
		{ href: '/es/tools/credit-planner/', label: 'Credit Planner', copy: 'Planifica Medic, Marksman o Necromancer.' },
		{ href: '/es/tier-list/', label: 'Tier list', copy: 'Ranking de clases.' },
		{ href: '/es/events/galactic/', label: 'Evento Galactic', copy: 'Void Shards y cajas.' },
	],
};

const ptBr: ToolsGuidesStripCopy = {
	heading: 'Mais guias e ferramentas',
	links: [
		{ href: '/guides/', label: 'Todos os guias (EN)', copy: '26 artigos aprofundados em inglês.' },
		{ href: '/pt-br/beginner-guide/', label: 'Guia para iniciantes', copy: 'Primeiras runs e créditos.' },
		{ href: '/pt-br/codes/', label: 'Códigos', copy: 'Zombies ativo e GALACTIC disputado.' },
		{ href: '/pt-br/tools/credit-planner/', label: 'Planejador', copy: 'Medic, Marksman ou Necromancer.' },
		{ href: '/pt-br/tier-list/', label: 'Tier list', copy: 'Ranking de classes.' },
		{ href: '/pt-br/events/galactic/', label: 'Evento Galactic', copy: 'Void Shards e caixas.' },
	],
};

const zhCn: ToolsGuidesStripCopy = {
	heading: '更多指南与工具',
	links: [
		{ href: '/guides/', label: '全部指南（英文）', copy: '26 篇深度指南。' },
		{ href: '/zh-cn/beginner-guide/', label: '新手指南', copy: '前几次对局与 Credits 里程碑。' },
		{ href: '/zh-cn/codes/', label: '兑换码', copy: 'Zombies 有效，GALACTIC 存疑。' },
		{ href: '/zh-cn/tools/credit-planner/', label: '信用规划器', copy: '规划 Medic、Marksman 或 Necromancer。' },
		{ href: '/zh-cn/tier-list/', label: '强度榜', copy: 'S/A/B/C 职业排名。' },
		{ href: '/zh-cn/events/galactic/', label: 'Galactic 活动', copy: 'Void Shards 与宝箱。' },
	],
};

export const toolsGuidesStripByLocale: Record<LocaleCode, ToolsGuidesStripCopy> = {
	en,
	es,
	'pt-br': ptBr,
	'zh-cn': zhCn,
};

export function getToolsGuidesStripCopy(locale: LocaleCode): ToolsGuidesStripCopy {
	return toolsGuidesStripByLocale[locale];
}
