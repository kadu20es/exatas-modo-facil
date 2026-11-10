import { reinforcementExercises } from './exercicios-reforco';

const mi = (value: string) => String.raw`\(${value}\)`;

const baseExercises = [
      // Nível 1 — Direta ou inversa? (1-6)
      { id: 1, level: 1, title: "Nível 1: Direta ou inversa?", question: "Quanto mais quilos de carne você compra, mais você paga. Essa relação é direta ou inversa?", answer: "direta", accept: ["direta"], steps: [["1", "Quando uma grandeza aumenta, a outra também aumenta."], ["2", "Isso caracteriza uma relação direta."]] },
      { id: 2, level: 1, title: "Nível 1: Direta ou inversa?", question: "Quanto maior a velocidade de um carro, menor o tempo da viagem. Essa relação é direta ou inversa?", answer: "inversa", accept: ["inversa"], steps: [["1", "Quando uma grandeza aumenta, a outra diminui."], ["2", "Isso caracteriza uma relação inversa."]] },
      { id: 3, level: 1, title: "Nível 1: Direta ou inversa?", question: "Quanto mais operários trabalhando, menos dias para terminar uma obra. Direta ou inversa?", answer: "inversa", accept: ["inversa"], steps: [["1", "Mais operários → menos dias necessários."], ["2", "Relação inversa."]] },
      { id: 4, level: 1, title: "Nível 1: Direta ou inversa?", question: "Quanto mais horas você trabalha, mais dinheiro você ganha (por hora fixa). Direta ou inversa?", answer: "direta", accept: ["direta"], steps: [["1", "Mais horas → mais dinheiro."], ["2", "Relação direta."]] },
      { id: 5, level: 1, title: "Nível 1: Direta ou inversa?", question: "Quanto maior o número de máquinas, menor o tempo de produção (mesma quantidade de peças). Direta ou inversa?", answer: "inversa", accept: ["inversa"], steps: [["1", "Mais máquinas → menos tempo."], ["2", "Relação inversa."]] },
      { id: 6, level: 1, title: "Nível 1: Direta ou inversa?", question: "Quanto maior a quantidade de litros de tinta, maior a área pintada. Direta ou inversa?", answer: "direta", accept: ["direta"], steps: [["1", "Mais tinta → mais área pintada."], ["2", "Relação direta."]] },
      // Nível 2 — Regra de três direta (7-12)
      { id: 7, level: 2, title: "Nível 2: Regra de três direta", question: "Se 5 kg de arroz custam R$ 20, quanto custam 8 kg?", answer: "32", accept: ["32"], tolerance: 0.01, steps: [["1", "Direta: 5/8 = 20/x."], ["2", "5x=8×20=160."], ["3", "x=32."]] },
      { id: 8, level: 2, title: "Nível 2: Regra de três direta", question: "Uma torneira enche 15 litros em 3 minutos. Quantos litros enche em 7 minutos?", answer: "35", accept: ["35"], tolerance: 0.01, steps: [["1", "Direta: 3/7 = 15/x."], ["2", "3x=7×15=105."], ["3", "x=35."]] },
      { id: 9, level: 2, title: "Nível 2: Regra de três direta", question: "Um carro percorre 240 km com 20 litros de gasolina. Quantos km percorre com 15 litros?", answer: "180", accept: ["180"], tolerance: 0.01, steps: [["1", "Direta: 20/15 = 240/x."], ["2", "20x=15×240=3600."], ["3", "x=180."]] },
      { id: 10, level: 2, title: "Nível 2: Regra de três direta", question: "3 camisetas custam R$ 90. Quanto custam 7 camisetas?", answer: "210", accept: ["210"], tolerance: 0.01, steps: [["1", "Direta: 3/7 = 90/x."], ["2", "3x=7×90=630."], ["3", "x=210."]] },
      { id: 11, level: 2, title: "Nível 2: Regra de três direta", question: "Em 4 horas, uma máquina produz 200 peças. Quantas peças produz em 10 horas?", answer: "500", accept: ["500"], tolerance: 0.01, steps: [["1", "Direta: 4/10 = 200/x."], ["2", "4x=10×200=2000."], ["3", "x=500."]] },
      { id: 12, level: 2, title: "Nível 2: Regra de três direta", question: "Uma receita para 4 pessoas usa 300 g de farinha. Quantos gramas para 10 pessoas?", answer: "750", accept: ["750"], tolerance: 0.01, steps: [["1", "Direta: 4/10 = 300/x."], ["2", "4x=10×300=3000."], ["3", "x=750."]] },
      // Nível 3 — Regra de três inversa (13-18)
      { id: 13, level: 3, title: "Nível 3: Regra de três inversa", question: "3 pedreiros constroem um muro em 12 dias. Quantos dias levam 4 pedreiros?", answer: "9", accept: ["9"], tolerance: 0.01, steps: [["1", "Inversa: 3/4 = x/12."], ["2", "4x=3×12=36."], ["3", "x=9."]] },
      { id: 14, level: 3, title: "Nível 3: Regra de três inversa", question: "Um carro a 60 km/h faz uma viagem em 4 horas. Em quanto tempo faria a 80 km/h?", answer: "3", accept: ["3"], tolerance: 0.01, steps: [["1", "Inversa: 60/80 = x/4."], ["2", "80x=60×4=240."], ["3", "x=3."]] },
      { id: 15, level: 3, title: "Nível 3: Regra de três inversa", question: "8 torneiras enchem uma piscina em 6 horas. Quantas horas levariam 12 torneiras?", answer: "4", accept: ["4"], tolerance: 0.01, steps: [["1", "Inversa: 8/12 = x/6."], ["2", "12x=8×6=48."], ["3", "x=4."]] },
      { id: 16, level: 3, title: "Nível 3: Regra de três inversa", question: "10 máquinas produzem uma encomenda em 9 dias. Quantos dias levariam 6 máquinas?", answer: "15", accept: ["15"], tolerance: 0.01, steps: [["1", "Inversa: 10/6 = x/9."], ["2", "6x=10×9=90."], ["3", "x=15."]] },
      { id: 17, level: 3, title: "Nível 3: Regra de três inversa", question: "5 costureiras fazem um lote de roupas em 8 dias. Quantos dias levam 4 costureiras?", answer: "10", accept: ["10"], tolerance: 0.01, steps: [["1", "Inversa: 5/4 = x/8."], ["2", "4x=5×8=40."], ["3", "x=10."]] },
      { id: 18, level: 3, title: "Nível 3: Regra de três inversa", question: "Um trabalho é feito por 6 pessoas em 20 dias. Em quantos dias 15 pessoas fariam o mesmo trabalho?", answer: "8", accept: ["8"], tolerance: 0.01, steps: [["1", "Inversa: 6/15 = x/20."], ["2", "15x=6×20=120."], ["3", "x=8."]] },
      // Nível 4 — Problemas mistos (19-24)
      { id: 19, level: 4, title: "Nível 4: Problemas mistos", question: "2 pintores pintam uma casa em 10 dias. Quantos dias levariam 5 pintores (mesmo ritmo)?", answer: "4", accept: ["4"], tolerance: 0.01, steps: [["1", "Mais pintores → menos dias: inversa."], ["2", "2/5 = x/10 → 5x=2×10=20 → x=4."]] },
      { id: 20, level: 4, title: "Nível 4: Problemas mistos", question: "Se 4 litros de tinta pintam 60 m², quantos m² pintam 6 litros?", answer: "90", accept: ["90"], tolerance: 0.01, steps: [["1", "Mais tinta → mais área: direta."], ["2", "4/6 = 60/x → 4x=6×60=360 → x=90."]] },
      { id: 21, level: 4, title: "Nível 4: Problemas mistos", question: "12 operários fazem uma obra em 15 dias. Quantos operários fariam em 9 dias (mesmo ritmo)?", answer: "20", accept: ["20"], tolerance: 0.01, steps: [["1", "Menos dias → mais operários: inversa."], ["2", "12/x = 9/15 → 12×15=9x → x=20."]] },
      { id: 22, level: 4, title: "Nível 4: Problemas mistos", question: "Um trem a 90 km/h faz um percurso em 2 horas. A que velocidade faria o mesmo percurso em 3 horas?", answer: "60", accept: ["60"], tolerance: 0.01, steps: [["1", "Mais tempo → menos velocidade: inversa."], ["2", "90/x = 3/2 → 90×2=3x → x=60."]] },
      { id: 23, level: 4, title: "Nível 4: Problemas mistos", question: "Uma impressora imprime 150 páginas em 5 minutos. Quantas páginas imprime em 12 minutos (mesmo ritmo)?", answer: "360", accept: ["360"], tolerance: 0.01, steps: [["1", "Mais tempo → mais páginas: direta."], ["2", "5/12 = 150/x → 5x=12×150=1800 → x=360."]] },
      { id: 24, level: 4, title: "Nível 4: Problemas mistos", question: "6 caminhões transportam uma carga em 8 viagens cada. Quantas viagens fariam 4 caminhões (mesma carga total)?", answer: "12", accept: ["12"], tolerance: 0.01, steps: [["1", "Menos caminhões → mais viagens: inversa."], ["2", "6/4 = x/8 → 4x=6×8=48 → x=12."]] },
      // Nível 5 — Regra de três composta (25-30)
      { id: 25, level: 5, title: "Nível 5: Regra de três composta", question: "8 máquinas produzem 400 peças em 5 dias. Quantas peças produzem 4 máquinas em 10 dias?", answer: "400", accept: ["400"], tolerance: 0.01, steps: [["1", "Máquinas: menos máquinas → menos peças (direta em relação a peças)."], ["2", "Dias: mais dias → mais peças (direta)."], ["3", "400/x = (8/4)×(5/10) = 2×0,5=1 → x=400."]] },
      { id: 26, level: 5, title: "Nível 5: Regra de três composta", question: "6 torneiras enchem uma caixa de 900 L em 5 horas. Quantos litros 3 torneiras enchem em 8 horas?", answer: "720", accept: ["720"], tolerance: 0.01, steps: [["1", "Torneiras: menos torneiras → menos litros (direta)."], ["2", "Horas: mais horas → mais litros (direta)."], ["3", "900/x = (6/3)×(5/8) = 2×0,625=1,25 → x=900÷1,25=720."]] },
      { id: 27, level: 5, title: "Nível 5: Regra de três composta", question: "5 operários trabalhando 8 horas por dia fazem uma obra em 12 dias. Trabalhando 6 horas por dia, quantos dias levariam os mesmos 5 operários?", answer: "16", accept: ["16"], tolerance: 0.01, steps: [["1", "Horas por dia e dias: menos horas por dia → mais dias necessários (inversa)."], ["2", "12/x = 6/8 → 12×8=6x → x=16."]] },
      { id: 28, level: 5, title: "Nível 5: Regra de três composta", question: "12 máquinas, trabalhando 10 horas por dia, produzem uma encomenda em 6 dias. Quantos dias levariam 8 máquinas trabalhando 10 horas por dia?", answer: "9", accept: ["9"], tolerance: 0.01, steps: [["1", "Menos máquinas → mais dias (inversa)."], ["2", "6/x = 8/12 → 6×12=8x → x=9."]] },
      { id: 29, level: 5, title: "Nível 5: Regra de três composta", question: "4 pedreiros constroem 2 muros em 10 dias. Quantos dias levam 8 pedreiros para construir 4 muros?", answer: "10", accept: ["10"], tolerance: 0.01, steps: [["1", "Pedreiros: mais pedreiros → menos dias (inversa em relação a dias)."], ["2", "Muros: mais muros → mais dias (direta)."], ["3", "10/x = (8/4)×(2/4) = 2×0,5=1 → x=10."]] },
      { id: 30, level: 5, title: "Nível 5: Regra de três composta", question: "10 costureiras fazem 200 camisas em 4 dias. Quantas camisas fazem 5 costureiras em 8 dias?", answer: "200", accept: ["200"], tolerance: 0.01, steps: [["1", "Costureiras: menos costureiras → menos camisas (direta)."], ["2", "Dias: mais dias → mais camisas (direta)."], ["3", "200/x = (10/5)×(4/8) = 2×0,5=1 → x=200."]] }
    ];

type CombinedExercise = {
  id: number;
  level: number;
  title: string;
  question?: string;
  text?: string;
  answer?: string;
  ans?: number;
  accept?: string[];
  tolerance?: number;
  steps: Array<string | string[]>;
  legacySource: 'regular' | 'reinforcement';
  legacyId: number;
};

const baseLevel = (level: number) => ({ 1: 1, 2: 3, 3: 5, 4: 6, 5: 7 })[level] ?? 7;
const reinforcementLevel = (level: number) => ({ 1: 2, 2: 4, 3: 3, 4: 5, 5: 7 })[level] ?? 7;
const baseTitles: Record<number, string> = {
  1: 'Identificar se a relação é direta ou inversa',
  2: 'Problema de proporcionalidade direta',
  3: 'Problema de proporcionalidade inversa',
  4: 'Problema simples misto',
  5: 'Problema de proporcionalidade composta',
};
const reinforcementTitles: Record<number, string> = {
  1: 'Cálculo direto com valores',
  2: 'Cálculo inverso com valores',
  3: 'Problema contextual direto',
  4: 'Problema contextual inverso',
  5: 'Problema de proporcionalidade composta',
};

const taggedExercises: CombinedExercise[] = [
  ...baseExercises.map(exercise => ({
    ...exercise,
    level: baseLevel(exercise.level),
    title: baseTitles[exercise.level],
    legacySource: 'regular' as const,
    legacyId: exercise.id,
  })),
  ...reinforcementExercises.map(exercise => ({
    id: exercise.id,
    level: reinforcementLevel(exercise.level),
    title: reinforcementTitles[exercise.level],
    text: exercise.text,
    ans: exercise.ans,
    steps: exercise.steps,
    legacySource: 'reinforcement' as const,
    legacyId: exercise.id,
  })),
].sort((a, b) => a.level - b.level || (a.legacySource === b.legacySource ? a.legacyId - b.legacyId : a.legacySource === 'regular' ? -1 : 1));

export const exercisesData: CombinedExercise[] = taggedExercises.map((exercise, index) => ({ ...exercise, id: index + 1 }));

const storedIds = (key: string): number[] => {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value.filter(Number.isInteger) : [];
  } catch {
    return [];
  }
};

export function migrateRuleOfThreeProgress() {
  if (typeof localStorage === 'undefined' || localStorage.getItem('r3CombinedSolved') !== null) return;
  const oldRegular = new Set(storedIds('r3Solved'));
  const oldReinforcement = new Set(storedIds('rtSolved'));
  const solved = exercisesData.filter(exercise => exercise.legacySource === 'regular'
    ? oldRegular.has(exercise.legacyId)
    : oldReinforcement.has(exercise.legacyId)).map(exercise => exercise.id);
  try { localStorage.setItem('r3CombinedSolved', JSON.stringify(solved)); } catch { /* progresso pode ser salvo depois */ }
}
