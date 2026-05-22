import type { LocaleCode } from './config';
import type { FaqItem } from '../types';

type LuckCalcLocale = {
	pageTitle: string;
	pageDescription: string;
	eyebrow: string;
	h1: string;
	/** Short answer-first blurb under H1 (SEO / generative-friendly). */
	snap: string;
	lead: string;
	useForTitle: string;
	useForBody: string;
	inputs: string;
	results: string;
	targetPreset: string;
	baseOdds: string;
	luckMult: string;
	rebirthMult: string;
	luckBoost: string;
	ultraBoost: string;
	rollInterval: string;
	sessionHours: string;
	metrics: {
		effectiveOdds: string;
		rollsPerHour: string;
		expectedTime: string;
		sessionChance: string;
		chance1h: string;
		chance24h: string;
	};
	estimateOnly: string;
	shareLink: string;
	copySummary: string;
	formulaTitle: string;
	formulaCode: string;
	formulaRest: string;
	faq: FaqItem[];
	faqHeading: string;
	script: {
		shareBtnDefault: string;
		copyBtnDefault: string;
		shared: string;
		copiedLink: string;
		copied: string;
		linkShared: string;
		linkCopied: string;
		summaryCopied: string;
		customPreset: string;
		numberLocale: string;
		recommendationLow: string;
		recommendationOk: string;
		shareTitle: string;
		shareText: string;
		summaryTitle: string;
		summaryDisclaimer: string;
		summaryInputsPrefix: string;
		summaryResults: string;
		summaryTarget: string;
		summaryBaseOdds: string;
		summaryEffective: string;
		summaryRollsPerH: string;
		summaryExpected: string;
		summarySession: string;
		summary1h: string;
		summary24h: string;
		summaryLinkLine: string;
		days: string;
		hours: string;
	};
};

const en: LuckCalcLocale = {
	pageTitle: 'Slime RNG Odds Calculator — Session Hit Chance & Time',
	pageDescription:
		'Estimate Slime RNG session hit chance, expected time to a target, and 1h/6h/24h odds from your luck multipliers and roll speed. Shareable URL; not a buff-checklist calculator.',
	eyebrow: 'Tool · session odds · shareable URL',
	h1: 'Slime RNG Odds Calculator (Session Planner)',
	snap: 'For Slime RNG (Roblox) players planning a roll session: enter luck multipliers, roll interval, and hours played—this page estimates hit odds over 1h, 6h, and 24h in your browser. Not a checkbox luck-stack tool; unofficial presets below.',
	lead: 'Tune target odds, luck, Rebirth multiplier, boosts, roll speed, and session length. Results are planning estimates, not official hidden formulas.',
	useForTitle: 'Use this for',
	useForBody:
		'Comparing sessions and deciding whether more luck, faster rolls, or another Rebirth gives the bigger practical improvement.',
	inputs: 'Inputs',
	results: 'Results',
	targetPreset: 'Target preset',
	baseOdds: 'Base odds: 1 in',
	luckMult: 'Current luck multiplier',
	rebirthMult: 'Rebirth multiplier',
	luckBoost: 'Luck boost',
	ultraBoost: 'Ultra luck boost',
	rollInterval: 'Roll interval seconds',
	sessionHours: 'Session length hours',
	metrics: {
		effectiveOdds: 'Effective odds',
		rollsPerHour: 'Rolls per hour',
		expectedTime: 'Expected time',
		sessionChance: 'Session chance',
		chance1h: '1h chance',
		chance24h: '24h chance',
	},
	estimateOnly: 'Estimate only. Enter values to calculate.',
	shareLink: 'Share link',
	copySummary: 'Copy summary',
	formulaTitle: 'Formula disclosure',
	formulaCode: 'hitChance = 1 - (1 - effectiveProbability) ^ rolls',
	formulaRest:
		', where effective probability is base probability multiplied by your entered luck values. No probability cap is applied because no public source confirmed one.',
	faq: [
		{ question: 'Is this calculator official?', answer: 'No. It is an estimate tool based on user-entered odds and public planning presets.' },
		{
			question: 'How is this different from a luck-stack calculator?',
			answer:
				'Some sites use checkboxes for Like, group join, and potions to output an effective luck multiplier. This tool instead takes your combined multipliers and roll speed, then estimates hit chance over a session (1h, 6h, 24h) and expected time—better for planning how long to play after redeeming a code.',
		},
		{
			question: 'What is session hit chance?',
			answer:
				'Given your effective probability per roll and how many rolls you make in N hours, it estimates the chance of at least one success during that session. It is not a guarantee—just a planning number.',
		},
		{ question: 'What does 1 in odds mean?', answer: 'A base odds value of 1,000,000 means one success per one million rolls before your luck multiplier is applied.' },
		{ question: 'Why are some targets low confidence?', answer: 'Exact Slime RNG odds can change and many public values need game testing.' },
		{
			question: 'What happens when I share the link?',
			answer:
				'The URL saves your calculator inputs (base odds, luck multipliers, roll interval, session length). Anyone who opens it gets the same inputs filled in locally; numbers are recomputed in the browser. Shared links are unofficial planning aids, not official game formulas or Roblox endorsements.',
		},
	],
	faqHeading: 'FAQ',
	script: {
		shareBtnDefault: 'Share link',
		copyBtnDefault: 'Copy summary',
		shared: 'Shared',
		copiedLink: 'Copied link',
		copied: 'Copied',
		linkShared: 'Link shared.',
		linkCopied: 'Calculator link copied to clipboard.',
		summaryCopied: 'Summary copied to clipboard.',
		customPreset: 'Custom',
		numberLocale: 'en-US',
		recommendationLow:
			'Low short-session chance. Consider more luck, faster rolls, or another Rebirth before hunting this target.',
		recommendationOk:
			'This setup has a visible session chance. Use boosts during active play and compare before spending more Goop.',
		shareTitle: 'Slime RNG session odds calculator',
		shareText: 'Restore these calculator inputs (unofficial estimate):',
		summaryTitle: 'Slime RNG luck estimate (unofficial)',
		summaryDisclaimer:
			'Disclaimer: Planning estimate only, not official game or Roblox math. Assumes no unpublished probability cap.',
		summaryInputsPrefix: 'Inputs',
		summaryResults: 'Results:',
		summaryTarget: 'Target:',
		summaryBaseOdds: 'Base odds:',
		summaryEffective: 'Effective odds:',
		summaryRollsPerH: 'Rolls per hour:',
		summaryExpected: 'Expected time (mean to one hit):',
		summarySession: 'session chance:',
		summary1h: '1h hit chance:',
		summary24h: '24h hit chance:',
		summaryLinkLine: 'Link (restore inputs):',
		days: 'days',
		hours: 'h',
	},
};

const zhCn: LuckCalcLocale = {
	pageTitle: 'Slime RNG 概率计算器 — 单次游玩命中率',
	pageDescription:
		'根据幸运倍率、抽奖间隔与游玩时长，估算 Slime RNG 单次会话命中概率、期望时间与 1/6/24 小时参考值。可分享链接；非勾选叠 Buff 工具。',
	eyebrow: '工具 · 会话概率 · 链接可分享',
	h1: 'Slime RNG 概率计算器（游玩时长规划）',
	snap: '给要估算「刷多久可能出」的玩家：填入综合幸运倍率、抽奖间隔与连续游玩小时数，浏览器在本地计算会话命中率与 1/24 小时参考值。不是勾选 Like/药水叠层的计算器；非官方，预设见下方说明。',
	lead: '调整目标基础概率、幸运、重生倍率、各类加成、抽奖间隔与游玩时长。结果用于「心里有个数」，不是游戏内隐藏公式或官方背书。',
	useForTitle: '适合用来',
	useForBody: '对比不同配装下的单次游玩体验，判断是再堆幸运、加快抽奖节奏，还是先去重生更划算。',
	inputs: '输入',
	results: '输出',
	targetPreset: '目标预设',
	baseOdds: '基础概率：1 /',
	luckMult: '当前幸运倍率',
	rebirthMult: '重生倍率',
	luckBoost: '幸运加成',
	ultraBoost: '超级幸运加成',
	rollInterval: '抽奖间隔（秒）',
	sessionHours: '单次连续游玩时长（小时）',
	metrics: {
		effectiveOdds: '等效概率（约）',
		rollsPerHour: '每小时抽奖次数',
		expectedTime: '期望等到一次（均值）',
		sessionChance: '本次时长内至少命中一次',
		chance1h: '1 小时内至少一次',
		chance24h: '24 小时内至少一次',
	},
	estimateOnly: '仅为估算；填写数值后自动计算。',
	shareLink: '分享链接',
	copySummary: '复制摘要',
	formulaTitle: '公式说明（透明）',
	formulaCode: 'hitChance = 1 - (1 - p_eff) ^ rolls',
	formulaRest:
		'：其中 p_eff 为基础概率乘以你填入的各项幸运倍率。未加入「未公开的硬上限」——若游戏内有上限，应以游戏为准。',
	faq: [
		{ question: '这是官方计算器吗？', answer: '不是。本站无法访问游戏服务器，只能根据你输入的数值与公开预设做浏览器端估算。' },
		{
			question: '和「勾选 Buff 叠幸运」的计算器有何不同？',
			answer:
				'部分网站用勾选 Like、加群、药水等方式输出综合幸运倍率。本页让你自行填入倍率与抽奖间隔，重点算「这次玩 X 小时至少命中一次」的概率与期望时间，更适合兑完码后规划刷取时长。',
		},
		{
			question: '什么是「单次游玩命中率」？',
			answer: '在假设每次抽奖独立的前提下，根据有效概率与 X 小时内的抽奖次数，估算至少成功一次的百分比。仅供心里规划，不是官方掉率承诺。',
		},
		{ question: '「1 / 一百万」是什么意思？', answer: '表示在乘上你的幸运倍率之前，大约一百万次抽奖里有一次「命中该目标」的基准概率；乘上倍率后等效概率会变高。' },
		{ question: '为什么有些目标标注低置信？', answer: '公开社区里的具体掉率经常随版本变化，且未必经过系统实测；低置信只代表「更要多留个心眼」。' },
		{
			question: '分享链接会发生什么？',
			answer:
				'链接会把当前输入参数（基础概率、各项倍率、间隔、时长）编码在地址里。别人打开时会在本地还原同样的输入并在浏览器里重新计算；这仍是玩家自用规划工具，不代表 Roblox 或开发商认可。',
		},
	],
	faqHeading: '常见问题',
	script: {
		shareBtnDefault: '分享链接',
		copyBtnDefault: '复制摘要',
		shared: '已分享',
		copiedLink: '已复制链接',
		copied: '已复制',
		linkShared: '已尝试通过系统分享。',
		linkCopied: '计算器链接已复制到剪贴板。',
		summaryCopied: '摘要已复制到剪贴板。',
		customPreset: '自定义',
		numberLocale: 'zh-CN',
		recommendationLow:
			'在本次时长内命中概率仍然偏低。考虑再提高幸运、缩短抽奖间隔，或先完成一次重生再冲该目标。',
		recommendationOk: '本次时长内已有可见命中概率；建议在能专心抽奖的时段再开加成，并对比是否值得继续投入 Goop。',
		shareTitle: 'Slime RNG 幸运计算器',
		shareText: '用以下参数恢复计算器（非官方估算）：',
		summaryTitle: 'Slime RNG 幸运估算（非官方）',
		summaryDisclaimer: '声明：仅供离线规划，不是官方或 Roblox 的数学模型；假设不存在未公开的硬概率上限。',
		summaryInputsPrefix: '输入',
		summaryResults: '结果：',
		summaryTarget: '目标：',
		summaryBaseOdds: '基础概率：',
		summaryEffective: '等效概率：',
		summaryRollsPerH: '每小时抽奖次数：',
		summaryExpected: '期望等到一次（均值）：',
		summarySession: '小时会话内至少一次：',
		summary1h: '1 小时内至少一次：',
		summary24h: '24 小时内至少一次：',
		summaryLinkLine: '链接（恢复输入）：',
		days: '天',
		hours: '小时',
	},
};

const es: LuckCalcLocale = {
	pageTitle: 'Slime RNG — Calculadora de probabilidades por sesión',
	pageDescription:
		'Estima probabilidad de acierto en una sesión, tiempo esperado y chances en 1 h / 6 h / 24 h según multiplicadores de suerte e intervalo entre tiradas. URL compartible; no es calculadora de checkboxes de buffs.',
	eyebrow: 'Herramienta · odds por sesión · URL compartible',
	h1: 'Slime RNG — Calculadora de probabilidades (sesión)',
	snap: 'Para planificar una sesión de tiradas: introduce multiplicadores, intervalo y horas jugadas; el navegador estima chances en 1 h, 6 h y 24 h. No es una herramienta de marcar Like/pociones; no oficial; presets en el aviso verde.',
	lead: 'Ajusta odds base, suerte, multiplicador de renacimiento, potenciadores, intervalo entre tiradas y horas de sesión. Los resultados sirven para planificar, no sustituyen mecánicas ocultas oficiales.',
	useForTitle: 'Úsala para',
	useForBody:
		'Comparar sesiones y decidir si conviene más suerte, tiradas más rápidas u otro renacimiento antes de persiguir un objetivo concreto.',
	inputs: 'Entradas',
	results: 'Resultados',
	targetPreset: 'Objetivo predefinido',
	baseOdds: 'Odds base: 1 entre',
	luckMult: 'Multiplicador de suerte actual',
	rebirthMult: 'Multiplicador de renacimiento',
	luckBoost: 'Potenciador de suerte',
	ultraBoost: 'Potenciador ultra de suerte',
	rollInterval: 'Intervalo entre tiradas (s)',
	sessionHours: 'Duración de la sesión (h)',
	metrics: {
		effectiveOdds: 'Odds efectivas (aprox.)',
		rollsPerHour: 'Tiradas por hora',
		expectedTime: 'Tiempo esperado (media hasta 1 acierto)',
		sessionChance: 'Prob. ≥1 acierto en la sesión',
		chance1h: 'Prob. ≥1 acierto en 1 h',
		chance24h: 'Prob. ≥1 acierto en 24 h',
	},
	estimateOnly: 'Solo estimación; escribe valores para calcular.',
	shareLink: 'Compartir enlace',
	copySummary: 'Copiar resumen',
	formulaTitle: 'Fórmula (transparente)',
	formulaCode: 'hitChance = 1 - (1 - p_eff) ^ rolls',
	formulaRest:
		': aquí p_eff es la probabilidad base multiplicada por tus factores de suerte. No se aplica un tope duro no confirmado en fuentes públicas; si el juego lo tiene, prevalece el juego.',
	faq: [
		{
			question: '¿Es oficial esta calculadora?',
			answer: 'No. No tenemos acceso al servidor del juego; solo calculamos en el navegador con tus valores y presets públicos.',
		},
		{
			question: '¿En qué se diferencia de una calculadora de «stack de suerte»?',
			answer:
				'Algunas páginas usan casillas (Like, grupo, pociones) para un multiplicador efectivo. Aquí introduces multiplicadores e intervalo y estimamos probabilidad en una sesión (1 h, 6 h, 24 h) y tiempo esperado—útil tras canjear un código de suerte.',
		},
		{
			question: '¿Qué es la probabilidad de acierto en sesión?',
			answer:
				'Con tu probabilidad efectiva por tirada y cuántas tiradas haces en N horas, estima la chance de al menos un acierto en esa sesión. Es planificación, no garantía.',
		},
		{
			question: '¿Qué significa «1 entre 1.000.000»?',
			answer: 'Antes de multiplicar por suerte, es la odds base aproximada de un acierto cada un millón de tiradas; al aplicar multiplicadores, la probabilidad efectiva sube.',
		},
		{
			question: '¿Por qué algunos objetivos dicen baja confianza?',
			answer: 'Las odds exactas cambian con parches y muchos valores públicos no están verificados en juego; la etiqueta solo advierte incertidumbre.',
		},
		{
			question: '¿Qué pasa si comparto el enlace?',
			answer:
				'La URL guarda tus entradas (odds base, multiplicadores, intervalo, horas). Quien abra el enlace verá los mismos campos y el cálculo se repite en su navegador; sigue siendo una ayuda no oficial, sin respaldo de Roblox ni del estudio.',
		},
	],
	faqHeading: 'Preguntas frecuentes',
	script: {
		shareBtnDefault: 'Compartir enlace',
		copyBtnDefault: 'Copiar resumen',
		shared: 'Compartido',
		copiedLink: 'Enlace copiado',
		copied: 'Copiado',
		linkShared: 'Compartido correctamente.',
		linkCopied: 'Enlace de la calculadora copiado al portapapeles.',
		summaryCopied: 'Resumen copiado al portapapeles.',
		customPreset: 'Personalizado',
		numberLocale: 'es-419',
		recommendationLow:
			'Baja probabilidad en sesiones cortas. Considera más suerte, intervalos más cortos u otro renacimiento antes de farmear este objetivo.',
		recommendationOk:
			'Hay probabilidad visible en la sesión; usa potenciadores cuando puedas tirar activo y compara antes de gastar más Goop.',
		shareTitle: 'Calculadora de suerte Slime RNG',
		shareText: 'Restaura estas entradas (estimación no oficial):',
		summaryTitle: 'Estimación de suerte Slime RNG (no oficial)',
		summaryDisclaimer:
			'Aviso: solo ayuda de planificación; no es matemática oficial del juego ni de Roblox. Se asume que no hay un tope oculto no publicado.',
		summaryInputsPrefix: 'Entradas',
		summaryResults: 'Resultados:',
		summaryTarget: 'Objetivo:',
		summaryBaseOdds: 'Odds base:',
		summaryEffective: 'Odds efectivas:',
		summaryRollsPerH: 'Tiradas por hora:',
		summaryExpected: 'Tiempo esperado (media hasta 1 acierto):',
		summarySession: 'prob. ≥1 acierto en la sesión:',
		summary1h: 'Prob. ≥1 acierto en 1 h:',
		summary24h: 'Prob. ≥1 acierto en 24 h:',
		summaryLinkLine: 'Enlace (restaurar entradas):',
		days: 'días',
		hours: 'h',
	},
};

export const luckCalculatorByLocale: Record<LocaleCode, LuckCalcLocale> = {
	en,
	'zh-cn': zhCn,
	es,
};

export function getLuckCalculatorCopy(locale: LocaleCode): LuckCalcLocale {
	return luckCalculatorByLocale[locale];
}
