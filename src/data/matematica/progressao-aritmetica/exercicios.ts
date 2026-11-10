export type ArithmeticProgressionExercise = { id: number; level: number; title: string; question: string; answer: string; tolerance?: number; steps: string[] };
const exercises: ArithmeticProgressionExercise[] = [];
const add = (level: number, title: string, question: string, answer: number, steps: string[], tolerance = 0) => exercises.push({ id: exercises.length + 1, level, title, question, answer: String(answer), ...(tolerance ? { tolerance } : {}), steps });

// Nível 1 — identificar a razão e completar um passo.
[
  { a: 3, r: 4 }, { a: 12, r: -3 }, { a: -5, r: 6 }, { a: 20, r: 0 }, { a: 1, r: -7 },
].forEach(({ a, r }) => add(1, 'Próximo termo', `Uma PA começa em ${a} e tem razão ${r}. Qual é o segundo termo?`, a + r, [`Em uma PA, somamos a razão para avançar um termo.`, `a₂ = ${a} + (${r}) = ${a + r}.`]));
[
  [2, 7, 5], [15, 11, -4], [-8, 0, 8], [30, 30, 0], [4, -2, -6],
].forEach(([first, second, difference]) => add(1, 'Identificar a razão', `Os dois primeiros termos de uma PA são ${first} e ${second}. Determine r.`, difference, [`Subtraia o primeiro termo do segundo: r = a₂ − a₁.`, `r = ${second} − (${first}) = ${difference}.`]));

// Nível 2 — termo geral em sequências crescentes, decrescentes e constantes.
[
  [2, 3, 8], [5, 4, 12], [30, -2, 9], [-4, 5, 7], [8, 0, 15],
  [100, -10, 11], [1, 7, 20], [-12, -3, 6], [3, 2, 50], [25, -5, 4],
].forEach(([first, difference, position]) => {
  const answer = first + (position - 1) * difference;
  add(2, 'Termo geral', `Em uma PA com a₁ = ${first} e r = ${difference}, calcule a₍${position}₎.`, answer, [`Use aₙ = a₁ + (n − 1)r.`, `a₍${position}₎ = ${first} + (${position} − 1) · (${difference}).`, `a₍${position}₎ = ${answer}.`]);
});

// Nível 3 — determinar a razão ou a posição usando termos conhecidos.
[
  { first: 3, n: 6, term: 28, answer: 5 }, { first: 20, n: 5, term: 8, answer: -3 },
  { first: -4, n: 8, term: 17, answer: 3 }, { first: 50, n: 11, term: 0, answer: -5 },
  { first: 7, n: 4, term: 16, answer: 3 },
].forEach(({ first, n, term, answer }) => add(3, 'Encontrar a razão', `Em uma PA, a₁ = ${first} e a₍${n}₎ = ${term}. Determine r.`, answer, [`Substitua no termo geral: ${term} = ${first} + (${n} − 1)r.`, `Isole r: r = (${term} − ${first})/(${n} − 1).`, `r = ${answer}.`]));
[
  { first: 2, r: 3, term: 29, answer: 10 }, { first: 40, r: -4, term: 12, answer: 8 },
  { first: -5, r: 2, term: 13, answer: 10 }, { first: 7, r: 2, term: 19, answer: 7 },
  { first: 100, r: -10, term: 30, answer: 8 },
].forEach(({ first, r, term, answer }) => add(3, 'Encontrar a posição', `Em uma PA com a₁ = ${first} e r = ${r}, em que posição está o termo ${term}?`, answer, [`Use ${term} = ${first} + (n − 1) · (${r}).`, `Isole n na equação do termo geral.`, `O termo está na posição ${answer}.`]));

// Nível 4 — soma dos primeiros termos.
[
  [1, 2, 10], [3, 4, 8], [20, -2, 9], [5, 0, 12], [-4, 3, 7],
  [100, -10, 11], [2, 5, 20], [15, -3, 6], [-10, -2, 8], [7, 6, 15],
].forEach(([first, difference, count]) => {
  const last = first + (count - 1) * difference;
  const sum = count * (first + last) / 2;
  add(4, 'Soma finita', `Calcule a soma dos ${count} primeiros termos da PA com a₁ = ${first} e r = ${difference}.`, sum, [`Encontre o último termo: a₍${count}₎ = ${first} + (${count} − 1) · (${difference}) = ${last}.`, `Use Sₙ = n(a₁ + aₙ)/2.`, `S₍${count}₎ = ${count}(${first} + ${last})/2 = ${sum}.`]);
});

// Nível 5 — modelagem e interpretação de situações reais.
[
  { question: 'Uma pessoa guarda R$ 10 na primeira semana e aumenta o depósito em R$ 5 a cada semana. Quanto deposita na 8ª semana?', answer: 45, steps: ['Os depósitos formam uma PA: a₁=10, r=5 e n=8.', 'a₈=10+(8−1)·5=45.', 'Na 8ª semana, deposita R$ 45.'] },
  { question: 'Um teatro tem 12 assentos na primeira fileira e cada fileira seguinte tem 3 assentos a mais. Quantos assentos há na 10ª fileira?', answer: 39, steps: ['a₁=12, r=3 e n=10.', 'a₁₀=12+(10−1)·3=39.', 'A 10ª fileira tem 39 assentos.'] },
  { question: 'Uma escada tem degraus igualmente espaçados: o primeiro está a 18 cm do chão e cada degrau seguinte sobe 17 cm. Qual a altura do 12º degrau?', answer: 205, steps: ['As alturas formam uma PA com a₁=18 cm e r=17 cm.', 'a₁₂=18+(12−1)·17=205.', 'O 12º degrau está a 205 cm do chão.'] },
  { question: 'Um ciclista percorre 5 km na primeira volta de treino e aumenta 2 km por volta. Quantos quilômetros percorre ao todo em 6 voltas?', answer: 60, steps: ['As distâncias por volta formam uma PA: a₁=5, r=2, n=6.', 'a₆=5+5·2=15 km.', 'S₆=6(5+15)/2=60 km.'] },
  { question: 'Uma arquibancada tem 20 lugares na primeira fileira e 4 a mais em cada fileira. Quantos lugares há nas 10 primeiras fileiras?', answer: 380, steps: ['a₁=20, r=4 e n=10.', 'a₁₀=20+9·4=56.', 'S₁₀=10(20+56)/2=380 lugares.'] },
  { question: 'A temperatura era 26 °C e caiu 2 °C por hora. Qual era a temperatura 7 horas depois?', answer: 12, steps: ['a₁=26 °C, r=−2 °C por hora e n=8 leituras contando o instante inicial.', 'Depois de 7 intervalos: 26+7·(−2)=12.', 'A temperatura era 12 °C.'] },
  { question: 'Uma pessoa lê 8 páginas no primeiro dia e 4 páginas a mais a cada dia. Quantas páginas lê ao todo em 7 dias?', answer: 140, steps: ['As páginas por dia formam uma PA: a₁=8, r=4 e n=7.', 'a₇=8+6·4=32.', 'S₇=7(8+32)/2=140 páginas.'] },
  { question: 'Uma dívida de R$ 500 é paga com parcelas que começam em R$ 80 e aumentam R$ 10 a cada mês. Qual o valor da 5ª parcela?', answer: 120, steps: ['a₁=80, r=10 e n=5.', 'a₅=80+4·10=120.', 'A 5ª parcela é R$ 120.'] },
  { question: 'Um corredor percorre 400 m na primeira etapa e reduz a distância em 25 m em cada etapa. Qual a distância da 9ª etapa?', answer: 200, steps: ['a₁=400 m, r=−25 m e n=9.', 'a₉=400+8·(−25)=200.', 'Na 9ª etapa, percorre 200 m.'] },
  { question: 'Uma pessoa começa uma poupança com R$ 30 e aumenta o depósito em R$ 10 por mês. Quanto terá depositado ao todo após 12 meses?', answer: 1020, steps: ['Os depósitos mensais formam uma PA com a₁=30, r=10 e n=12.', 'a₁₂=30+11·10=140.', 'S₁₂=12(30+140)/2=1.020 reais.'] },
].forEach(item => add(5, 'Problema aplicado', item.question, item.answer, item.steps));

export const arithmeticProgressionExercises = exercises;
