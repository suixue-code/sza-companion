import type { LocaleCode } from '../config';
import type { FaqItem } from '../../types';

export type CodesTableLabels = {
	code: string;
	reward: string;
	status: string;
	checked: string;
	action: string;
	copy: string;
	confidencePrefix: string;
	source: string;
};

export type CodesCopy = {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	geoSnap: string;
	lead: string;
	fastAnswerTitle: string;
	fastAnswerBody: string;
	activeTitle: string;
	activeDesc: string;
	disputedTitle: string;
	disputedDesc: string;
	feedbackNotice: string;
	redeemTitle: string;
	redeemSteps: [string, string, string, string, string];
	sourcesTitle: string;
	sourcesItems: [string, string, string];
	tableLabels: CodesTableLabels;
	statusDisputed: string;
	faq: FaqItem[];
};

type LocalizedLocale = 'es' | 'pt-br' | 'zh-cn';

const es: CodesCopy = {
	title: 'Códigos Survive Zombie Arena: Arena de Zombies',
	description:
		'Copia Zombies para 2.500 créditos, revisa GALACTIC y canjea códigos de Sobrevivir a la Arena de Zombies en Roblox.',
	eyebrow: 'Actualizado',
	h1: 'Códigos de Survive Zombie Arena',
	geoSnap:
		'Copia Zombies para 2.500 créditos primero. GALACTIC tiene reportes contradictorios, así que lo separamos con notas de fuentes. También cubrimos búsquedas como “sobrevivir a la arena de zombies códigos”.',
	lead: 'Abre Tienda → Canjear códigos en el lobby. La tabla de códigos activos va primero; después tienes el estado de GALACTIC y qué gastar con esos créditos.',
	fastAnswerTitle: 'Código que funciona',
	fastAnswerBody:
		'Zombies da 2.500 créditos. Revisa GALACTIC abajo antes de contar con esa recompensa.',
	activeTitle: 'Códigos activos',
	activeDesc: 'Acuerdo entre varias fuentes y post en Discord #codes oficial (1 feb 2026).',
	disputedTitle: 'Códigos disputados',
	disputedDesc: 'Las fuentes públicas no coinciden: no los promovemos como válidos hasta que el canje en el juego funcione.',
	feedbackNotice:
		'Haz clic en 👍 o 👎 si un código te funcionó. Los votos se quedan en tu dispositivo y nos ayudan a saber cuándo revisar Discord de nuevo; no cambian las etiquetas solos.',
	redeemTitle: 'Cómo canjear códigos en Survive Zombie Arena',
	redeemSteps: [
		'Abre Survive Zombie Arena en Roblox y entra al lobby.',
		'Abre Tienda (lado izquierdo de la interfaz del lobby).',
		'Baja hasta el cuadro Canjear códigos.',
		'Pega el código exactamente como aparece (sensible a mayúsculas).',
		'Pulsa Canjear y lee el mensaje de recompensa antes de cerrar.',
	],
	sourcesTitle: 'De dónde salen los códigos',
	sourcesItems: [
		'Discord oficial #patch-notes y #giveaways',
		'Enlaces sociales de la página de experiencia en Roblox',
		'Grupo de Roblox de Nectarforge Studios',
	],
	tableLabels: {
		code: 'Código',
		reward: 'Recompensa',
		status: 'Estado',
		checked: 'Revisado',
		action: 'Copiar',
		copy: 'Copiar código',
		confidencePrefix: 'Confianza: ',
		source: 'Fuente',
	},
	statusDisputed: 'disputado',
	faq: [
		{
			question: '¿Sigue funcionando el código Zombies en Survive Zombie Arena?',
			answer:
				'Zombies (2.500 créditos) está activo con alta confianza según Discord #codes oficial y nueve guías rastreadas a mayo de 2026. Confírmalo en el juego cada sesión: los códigos pueden caducar sin aviso.',
		},
		{
			question: '¿Los códigos de Survive Zombie Arena distinguen mayúsculas?',
			answer: 'La mayoría de títulos en Roblox tratan los códigos como sensibles a mayúsculas. Prueba la escritura exacta primero: Zombies, no zombies.',
		},
		{
			question: '¿Por qué solo hay un código activo?',
			answer:
				'En Discord #codes oficial solo se publicó Zombies desde febrero de 2026. Listamos GALACTIC aparte como disputado porque las guías de medios no coinciden con Discord y los rastreadores de la comunidad.',
		},
		{
			question: '¿Los códigos dan armas o clases?',
			answer: 'El código que funciona, Zombies, solo da 2.500 créditos. Los créditos se gastan en armas de partida y desbloqueos permanentes de clase en la tienda del lobby.',
		},
		{
			question: '¿Qué hago después de canjear códigos?',
			answer: 'Usa el Credit Planner para decidir Medic o Marksman, y sigue la ruta de armas de la guía principiante (pistola → escopeta → rifle).',
		},
		{
			question: '¿“Sobrevivir a la arena de zombies códigos” es este juego?',
			answer:
				'Sí. Muchos jugadores traducen el nombre así; la página correcta en Roblox es Survive Zombie Arena, y el código confirmado aquí es Zombies.',
		},
	],
};

const ptBr: CodesCopy = {
	title: 'Códigos de Survive Zombie Arena: Zombies e GALACTIC',
	description:
		'Copie Zombies para 2.500 créditos, confira o status de GALACTIC e resgate códigos de Survive Zombie Arena na loja do Roblox.',
	eyebrow: 'Atualizado',
	h1: 'Códigos de Survive Zombie Arena',
	geoSnap:
		'Copie Zombies para 2.500 créditos primeiro. GALACTIC tem relatos conflitantes, então fica separado com notas de fonte em vez de misturado aos códigos ativos.',
	lead: 'Abra Loja → Resgatar códigos no lobby. A tabela de códigos ativos vem primeiro; depois mostramos o status de GALACTIC e o que fazer com os créditos.',
	fastAnswerTitle: 'Código funcionando',
	fastAnswerBody:
		'Zombies dá 2.500 créditos. Confira GALACTIC abaixo antes de contar com essa recompensa.',
	activeTitle: 'Códigos ativos',
	activeDesc: 'Acordo entre várias fontes e post no Discord #codes oficial (1 fev 2026).',
	disputedTitle: 'Códigos disputados',
	disputedDesc: 'Fontes públicas conflitam — não promovemos como válidos até o resgate no jogo funcionar.',
	feedbackNotice:
		'Clique em 👍 ou 👎 se um código funcionou na sua conta. Os votos ficam no seu dispositivo e nos ajudam a saber quando rever o Discord — não mudam os rótulos sozinhos.',
	redeemTitle: 'Como resgatar códigos em Survive Zombie Arena',
	redeemSteps: [
		'Abra Survive Zombie Arena no Roblox e entre no lobby.',
		'Abra Loja (lado esquerdo da interface do lobby).',
		'Role até a caixa Resgatar códigos.',
		'Cole o código exatamente como mostrado (diferencia maiúsculas).',
		'Pressione Resgatar e leia a mensagem de recompensa antes de fechar.',
	],
	sourcesTitle: 'De onde vêm os códigos',
	sourcesItems: [
		'Discord oficial #patch-notes e #giveaways',
		'Links sociais da página de experiência no Roblox',
		'Grupo Roblox da Nectarforge Studios',
	],
	tableLabels: {
		code: 'Código',
		reward: 'Recompensa',
		status: 'Status',
		checked: 'Verificado',
		action: 'Copiar',
		copy: 'Copiar código',
		confidencePrefix: 'Confiança: ',
		source: 'Fonte',
	},
	statusDisputed: 'disputado',
	faq: [
		{
			question: 'O código Zombies ainda funciona em Survive Zombie Arena?',
			answer:
				'Zombies (2.500 créditos) está ativo com alta confiança pelo Discord #codes oficial e nove guias rastreados em maio de 2026. Confirme no jogo a cada sessão — códigos podem expirar sem aviso.',
		},
		{
			question: 'Os códigos de Survive Zombie Arena diferenciam maiúsculas?',
			answer: 'A maioria dos títulos no Roblox trata códigos como sensíveis a maiúsculas. Tente a grafia exata primeiro: Zombies, não zombies.',
		},
		{
			question: 'Por que só há um código ativo?',
			answer:
				'No Discord #codes oficial só foi publicado Zombies desde fevereiro de 2026. Listamos GALACTIC separado como disputado porque guias de mídia discordam do Discord e dos rastreadores da comunidade.',
		},
		{
			question: 'Códigos dão armas ou classes?',
			answer: 'O código que funciona, Zombies, só dá 2.500 créditos. Créditos gastam em armas da run e desbloqueios permanentes de classe na loja do lobby.',
		},
		{
			question: 'O que fazer depois de resgatar códigos?',
			answer: 'Use o Credit Planner para decidir Medic ou Marksman e siga a rota de armas do guia para iniciantes (pistola → shotgun → rifle).',
		},
	],
};

const zhCn: CodesCopy = {
	title: 'Survive Zombie Arena 兑换码：Zombies 与 GALACTIC',
	description:
		'复制 Survive Zombie Arena 有效兑换码 Zombies 领取 2500 信用点，查看 GALACTIC 最新状态，并按 Roblox 商店步骤兑换。',
	eyebrow: '更新于',
	h1: 'Survive Zombie Arena 兑换码',
	geoSnap:
		'先复制 Zombies 领取 2500 信用点。GALACTIC 的奖励说法互相冲突，所以我们把它单独列出，并保留来源说明。',
	lead: '在大厅打开商店 → 兑换码。有效码表放在最前面，后面再看 GALACTIC 状态和信用点下一步怎么花。',
	fastAnswerTitle: '当前可用码',
	fastAnswerBody:
		'Zombies 给 2500 信用点。GALACTIC 请先看下方状态，再决定是否尝试。',
	activeTitle: '有效兑换码',
	activeDesc: '多源一致，且有官方 Discord #codes 帖子（2026 年 2 月 1 日）。',
	disputedTitle: '存疑兑换码',
	disputedDesc: '公开来源互相矛盾——在游戏内兑换成功前，我们不当作有效码推广。',
	feedbackNotice:
		'若某码对你有效或无效，可点 👍 或 👎。投票只保存在本机，帮我们决定何时再查 Discord，不会自动改标签。',
	redeemTitle: '如何兑换 Survive Zombie Arena 兑换码',
	redeemSteps: [
		'在 Roblox 打开 Survive Zombie Arena 并进入大厅。',
		'打开商店（大厅界面左侧）。',
		'滚动到兑换码输入框。',
		'按显示原文粘贴（区分大小写）。',
		'点兑换，关闭前先看奖励提示。',
	],
	sourcesTitle: '兑换码来源',
	sourcesItems: ['官方 Discord #patch-notes 与 #giveaways', 'Roblox 体验页社交链接', 'Nectarforge Studios Roblox 群组'],
	tableLabels: {
		code: '兑换码',
		reward: '奖励',
		status: '状态',
		checked: '复核',
		action: '复制',
		copy: '复制兑换码',
		confidencePrefix: '置信度：',
		source: '来源',
	},
	statusDisputed: '存疑',
	faq: [
		{
			question: 'Zombies 兑换码现在还管用吗？',
			answer:
				'截至 2026 年 5 月，Zombies（2500 信用点）在官方 Discord #codes 与九份追踪攻略中均为高置信度有效。每局进游戏前请再确认——码可能无声失效。',
		},
		{
			question: '兑换码区分大小写吗？',
			answer: '多数 Roblox 游戏对兑换码区分大小写。先试完全一致的书写：Zombies，不是 zombies。',
		},
		{
			question: '为什么只有一个有效码？',
			answer:
				'官方 Discord #codes 自 2026 年 2 月起只发布过 Zombies。GALACTIC 因媒体攻略与 Discord、社区追踪器不一致，单独列为存疑。',
		},
		{
			question: '兑换码给武器或职业吗？',
			answer: '目前确认可用的 Zombies 只给 2500 信用点。信用点用于局内武器与大厅商店永久职业解锁。',
		},
		{
			question: '兑换之后该做什么？',
			answer: '用信用点规划器决定 Medic 还是 Marksman，并按新手指南走武器路线（手枪 → 霰弹枪 → 步枪）。',
		},
	],
};

export const codesCopy: Record<LocalizedLocale, CodesCopy> = {
	es,
	'pt-br': ptBr,
	'zh-cn': zhCn,
};

export function getCodesCopy(locale: LocaleCode): CodesCopy {
	return codesCopy[locale as LocalizedLocale];
}
