import type { LocaleCode } from './config';

type CodesNextStepsCopy = {
	heading: string;
	beginner: string;
	loadouts: string;
	creditPlanner: string;
	waves: string;
};

export const codesNextStepsByLocale: Record<LocaleCode, CodesNextStepsCopy> = {
	en: {
		heading: 'Next steps',
		beginner: 'Beginner guide',
		loadouts: 'Best loadouts',
		creditPlanner: 'Credit Planner',
		waves: 'Wave guide',
	},
	es: {
		heading: 'Próximos pasos',
		beginner: 'Guía principiante',
		loadouts: 'Mejores loadouts (EN)',
		creditPlanner: 'Credit Planner',
		waves: 'Guía de oleadas (EN)',
	},
	'pt-br': {
		heading: 'Próximos passos',
		beginner: 'Guia para iniciantes',
		loadouts: 'Melhores loadouts (EN)',
		creditPlanner: 'Planejador de créditos',
		waves: 'Guia de ondas (EN)',
	},
	'zh-cn': {
		heading: '下一步',
		beginner: '新手指南',
		loadouts: '最佳配装（英文）',
		creditPlanner: '信用规划器',
		waves: '波次指南（英文）',
	},
};

export function getCodesNextStepsCopy(locale: LocaleCode): CodesNextStepsCopy {
	return codesNextStepsByLocale[locale];
}
