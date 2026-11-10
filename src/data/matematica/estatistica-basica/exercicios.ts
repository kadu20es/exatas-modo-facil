import { exercisesData as reinforcementData } from './exercicios-reforco';

export type StatisticsExercise = { id: number; level: number; title: string; question: string; answer: string; tolerance?: number; steps: Array<[string, string]> };
const number = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const fmt = (n: number) => Number.isInteger(n) ? String(n) : n.toFixed(2);
const inline = (s: string) => `\\(${s}\\)`;
const basic: StatisticsExercise[] = [];
const add = (level: number, title: string, question: string, answer: number, steps: string[]) => basic.push({ id: basic.length + 1, level, title, question, answer: fmt(answer), tolerance: 0.02, steps: steps.map((step, i) => [String(i + 1), step]) });

// Banco do arquivo Estatística Básica: 25 questões de cada nível, geradas na abertura do módulo.
for (let i = 0; i < 25; i++) {
  const length = number(3, 5), values = Array.from({ length }, () => number(1, 20));
  const sum = values.reduce((total, value) => total + value, 0), mean = sum / length;
  values.sort(() => Math.random() - 0.5);
  add(1, 'Média Simples', `Calcule a média aritmética do conjunto: { ${values.join(', ')} }`, mean, [`Some os ${length} valores: ${inline(values.join(' + ') + ' = ' + fmt(sum))}.`, `Divida a soma pela quantidade: ${inline(`${fmt(sum)} ÷ ${length} = ${fmt(mean)}`)}.`]);
}
for (let i = 0; i < 25; i++) {
  const length = number(3, 6), values = Array.from({ length }, () => number(2, 25)), sorted = [...values].sort((a, b) => a - b), median = length % 2 ? sorted[Math.floor(length / 2)] : (sorted[length / 2 - 1] + sorted[length / 2]) / 2;
  add(2, 'O Centro dos Dados (Mediana)', `Encontre a mediana do conjunto: { ${values.join(', ')} }`, median, [`Organize em ordem crescente. Rol: { ${sorted.join(', ')} }.`, length % 2 ? 'Como há uma quantidade ímpar, escolha o termo central.' : `Como há uma quantidade par, calcule a média dos termos centrais ${sorted[length / 2 - 1]} e ${sorted[length / 2]}.`, `Mediana: ${fmt(median)}.`]);
}
for (let i = 0; i < 25; i++) {
  const modeQuestion = i % 2 === 0, length = number(5, 7), values: number[] = [];
  if (modeQuestion) { const mode = number(2, 9); values.push(mode, mode, mode); while (values.length < length) values.push(number(10, 20)); values.sort(() => Math.random() - 0.5); add(3, 'O Mais Popular (Moda)', `Qual é a moda do conjunto: { ${values.join(', ')} }?`, mode, ['A moda é o valor que mais se repete.', `O número ${mode} aparece três vezes, mais do que qualquer outro.`, `Moda: ${mode}.`]); }
  else { for (let j = 0; j < length; j++) values.push(number(5, 50)); const maximum = Math.max(...values), minimum = Math.min(...values); add(3, 'Dispersão (Amplitude)', `Calcule a amplitude do conjunto: { ${values.join(', ')} }`, maximum - minimum, ['Amplitude é a diferença entre o maior e o menor valor.', `Maior valor: ${maximum}; menor valor: ${minimum}.`, `${maximum} − ${minimum} = ${maximum - minimum}.`]); }
}
for (let i = 0; i < 25; i++) {
  const length = number(3, 4), mean = number(6, 8), total = mean * length, values = Array.from({ length: length - 1 }, () => number(4, 9));
  let missing = total - values.reduce((a, b) => a + b, 0), adjustedMean = mean, adjustedTotal = total;
  if (missing < 0 || missing > 12) { missing = 6; adjustedTotal = values.reduce((a, b) => a + b, 0) + 6; adjustedMean = adjustedTotal / length; }
  const sum = values.reduce((a, b) => a + b, 0);
  add(4, 'O X Misterioso', `Notas: { ${values.join(', ')} }. Que nota X falta para obter média ${fmt(adjustedMean)} em ${length} provas?`, missing, [`Monte a média: ${inline(`(${values.join(' + ')} + X) ÷ ${length} = ${fmt(adjustedMean)}`)}.`, `Soma conhecida: ${sum}. A soma total necessária é ${fmt(adjustedTotal)}.`, `Isole X: ${fmt(adjustedTotal)} − ${sum} = ${fmt(missing)}.`]);
}

const reinforcementLevel = (id: number) => {
  if (id >= 116 && id <= 123) return 1; // média simples
  if ([105, 106, 107, 108, 109, 110, 112, 113, 115].includes(id)) return 2; // mediana
  if ([101, 102, 103, 104, 111, 151, 152].includes(id)) return 3; // moda e amplitude
  if ((id >= 124 && id <= 130) || [132, 133].includes(id)) return 4; // média inversa e propriedades
  if (id >= 134 && id <= 150) return 5; // frequência e média ponderada
  if (id >= 153 && id <= 170) return 6; // variância e desvio padrão
  if (id >= 171 && id <= 185) return 7; // tabelas e gráficos
  return 8; // aplicação integrada e desafios
};

export const exercisesData: StatisticsExercise[] = [...basic, ...reinforcementData.map(exercise => ({
  ...exercise,
  level: reinforcementLevel(exercise.id),
}))].sort((a, b) => a.level - b.level || a.id - b.id);
