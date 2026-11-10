import { useMemo, useState } from 'react';
import { MathRenderer } from '../../../Math/MathRenderer';

type Color = 'Vermelha' | 'Azul' | 'Verde';
const colors: Color[] = ['Vermelha', 'Azul', 'Verde'];
const tones = ['bg-red-500', 'bg-blue-500', 'bg-emerald-500'];

export function ProbabilityLab() {
  const [counts, setCounts] = useState([4, 3, 0]);
  const [withReplacement, setWithReplacement] = useState(true);
  const [draw, setDraw] = useState<Color[]>([]);
  const [probabilityAtLastDraw, setProbabilityAtLastDraw] = useState<number | null>(null);
  const total = counts.reduce((sum, count) => sum + count, 0);
  const sameColorProbability = useMemo(() => {
    if (total === 0) return 0;
    return counts.reduce((sum, count) => {
      const secondProbability = withReplacement
        ? count / total
        : total > 1 ? (count - 1) / (total - 1) : 0;
      return sum + (count / total) * secondProbability;
    }, 0);
  }, [counts, total, withReplacement]);

  function updateCount(index: number, value: number) {
    setCounts(current => current.map((count, item) => item === index ? value : count));
    setDraw([]);
    setProbabilityAtLastDraw(null);
  }

  function simulate() {
    if (total < (withReplacement ? 1 : 2)) {
      setDraw([]);
      return;
    }
    const urn = counts.flatMap((count, index) => Array<Color>(count).fill(colors[index]));
    const first = urn[Math.floor(Math.random() * urn.length)];
    if (!withReplacement) urn.splice(urn.indexOf(first), 1);
    const second = urn[Math.floor(Math.random() * urn.length)];
    setDraw([first, second]);
    setProbabilityAtLastDraw(sameColorProbability);
    if (!withReplacement) {
      const removed = [first, second];
      setCounts(current => current.map((count, index) => count - removed.filter(color => color === colors[index]).length));
    }
  }

  return <div className="space-y-6">
    <section className="bg-white rounded-3xl border p-7">
      <span className="text-xs uppercase tracking-widest font-bold text-sky-600">Simulador condicional</span>
      <h1 className="text-3xl font-black mt-2">A Urna da Sorte</h1>
      <p className="text-slate-600 mt-2">Altere as quantidades e compare sorteios com e sem reposição.</p>
    </section>
    <div className="grid lg:grid-cols-[320px_1fr] gap-6">
      <section className="bg-white rounded-2xl border p-6 space-y-5">
        <h2 className="font-bold text-lg text-center border-b pb-2">Conteúdo da urna</h2>
        {counts.map((count, index) => <label key={colors[index]} className="flex items-center gap-3">
          <span className={`rounded-full w-9 h-9 text-white grid place-items-center font-bold ${tones[index]}`}>{colors[index][0]}</span>
          <input aria-label={`${colors[index]}: ${count}`} type="range" min="0" max="10" value={count} onChange={event => updateCount(index, Number(event.target.value))} className="w-full" />
          <b>{count}</b>
        </label>)}
        <div className="paper rounded-xl p-3 text-center">Total na urna: <b className="text-xl">{total}</b></div>
        <label className="flex gap-2 items-center"><input type="checkbox" checked={withReplacement} onChange={event => { setWithReplacement(event.target.checked); setDraw([]); setProbabilityAtLastDraw(null); }} /> Repor a primeira bola</label>
        <button onClick={simulate} disabled={total < (withReplacement ? 1 : 2)} className="w-full bg-sky-600 disabled:bg-slate-300 text-white font-bold rounded-xl p-3">Sortear duas bolas</button>
      </section>
      <section className="bg-white rounded-2xl border p-6 min-h-80 flex flex-col justify-between">
        <div className="flex flex-wrap content-start gap-2 bg-slate-100 rounded-xl p-4 min-h-36">
          {counts.flatMap((count, index) => Array.from({ length: count }, (_, item) => <span title={colors[index]} aria-label={colors[index]} className={`w-10 h-10 rounded-full text-white grid place-items-center font-bold shadow ${tones[index]}`} key={`${index}-${item}`}>{colors[index][0]}</span>))}
          {total === 0 && <span className="text-slate-500">A urna está vazia.</span>}
        </div>
        <div className="space-y-3 mt-5">
          <p>Chance teórica de duas bolas da mesma cor{draw.length ? ' antes deste sorteio' : ''}: <b>{((probabilityAtLastDraw ?? sameColorProbability) * 100).toFixed(2)}%</b></p>
          {draw.length > 0 && <div aria-live="polite" className="bg-sky-50 text-sky-950 rounded-xl p-4">Sorteio: <b>{draw.join(' → ')}</b> — {draw[0] === draw[1] ? 'cores iguais' : 'cores diferentes'}.{!withReplacement && <span className="block mt-1">As duas bolas foram removidas da urna.</span>}</div>}
          <p className="text-sm text-slate-500">{withReplacement ? 'Com reposição, as quantidades não mudam entre retiradas.' : 'Sem reposição, as bolas sorteadas são removidas da urna e não voltam.'}</p>
        </div>
      </section>
    </div>
  </div>;
}

type Rational = { numerator: number; denominator: number };
function gcd(a: number, b: number): number { return b ? gcd(b, a % b) : Math.abs(a); }
function reduce(numerator: number, denominator: number): Rational | null {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) return null;
  if (denominator < 0) { numerator *= -1; denominator *= -1; }
  const divisor = gcd(Math.round(numerator * 1e8), Math.round(denominator * 1e8)) || 1;
  const scale = 1e8;
  const n = Math.round(numerator * scale), d = Math.round(denominator * scale);
  const common = gcd(Math.abs(n), Math.abs(d)) || divisor;
  return { numerator: n / common, denominator: d / common };
}
function parseProbability(value: string): Rational | null {
  const parts = value.trim().replace(',', '.').split('/');
  if (parts.length > 2 || parts.some(part => part.trim() === '')) return null;
  const numerator = Number(parts[0]);
  if (parts.length === 2) return reduce(numerator, Number(parts[1]));
  const decimalPlaces = (parts[0].split('.')[1] ?? '').length;
  return reduce(numerator, 10 ** decimalPlaces);
}
function add(a: Rational, b: Rational): Rational | null { return reduce(a.numerator * b.denominator + b.numerator * a.denominator, a.denominator * b.denominator); }
function subtract(a: Rational, b: Rational): Rational | null { return reduce(a.numerator * b.denominator - b.numerator * a.denominator, a.denominator * b.denominator); }
function divide(a: Rational, b: Rational): Rational | null { return b.numerator === 0 ? null : reduce(a.numerator * b.denominator, a.denominator * b.numerator); }
function asNumber(value: Rational) { return value.numerator / value.denominator; }
function display(value: Rational) { return `${value.numerator}/${value.denominator}`; }
function isProbability(value: Rational) { const n = asNumber(value); return n >= 0 && n <= 1; }

export function ProbabilityTools() {
  const [probabilityA, setProbabilityA] = useState('1/2');
  const [probabilityB, setProbabilityB] = useState('1/3');
  const [intersectionAB, setIntersectionAB] = useState('1/6');
  const [unionResult, setUnionResult] = useState('');
  const [conditionalIntersection, setConditionalIntersection] = useState('1/8');
  const [conditionalUniverse, setConditionalUniverse] = useState('1/2');
  const [conditionalResult, setConditionalResult] = useState('');

  function calculateUnion() {
    const a = parseProbability(probabilityA), b = parseProbability(probabilityB), intersection = parseProbability(intersectionAB);
    if (!a || !b || !intersection || !isProbability(a) || !isProbability(b) || !isProbability(intersection)) { setUnionResult('Informe probabilidades válidas entre 0 e 1.'); return; }
    if (asNumber(intersection) > Math.min(asNumber(a), asNumber(b))) { setUnionResult('A interseção não pode ser maior que P(A) ou P(B).'); return; }
    const sum = add(a, b), result = sum && subtract(sum, intersection);
    if (!result || !isProbability(result)) { setUnionResult('Os valores informados produzem uma união fora do intervalo de 0 a 1.'); return; }
    setUnionResult(`P(A ∪ B) = ${display(result)} ≈ ${(asNumber(result) * 100).toFixed(2)}%.`);
  }

  function calculateConditional() {
    const intersection = parseProbability(conditionalIntersection), universe = parseProbability(conditionalUniverse);
    if (!intersection || !universe || !isProbability(intersection) || !isProbability(universe) || asNumber(universe) === 0) { setConditionalResult('Informe probabilidades válidas e P(B) maior que zero.'); return; }
    if (asNumber(intersection) > asNumber(universe)) { setConditionalResult('P(A ∩ B) não pode ser maior que P(B).'); return; }
    const result = divide(intersection, universe);
    if (!result || !isProbability(result)) { setConditionalResult('Não foi possível calcular com os valores informados.'); return; }
    setConditionalResult(`P(A | B) = ${display(result)} ≈ ${(asNumber(result) * 100).toFixed(2)}%.`);
  }

  return <div className="space-y-6">
    <section className="bg-white rounded-3xl border p-7"><span className="text-xs uppercase tracking-widest font-bold text-sky-600">Calculadoras</span><h1 className="text-3xl font-black mt-2">União e probabilidade condicional</h1><p className="text-slate-600 mt-2">Informe probabilidades como frações simples ou números decimais.</p></section>
    <div className="grid lg:grid-cols-2 gap-6">
      <article className="bg-white rounded-2xl border p-6"><h2 className="font-black text-xl">União de eventos — regra do OU</h2><p className="text-sm text-slate-500 mt-2"><MathRenderer expression={String.raw`P(A\cup B)=P(A)+P(B)-P(A\cap B)`} /></p>
        <div className="grid grid-cols-3 gap-2 mt-5">{[[probabilityA, setProbabilityA, 'P(A)'], [probabilityB, setProbabilityB, 'P(B)'], [intersectionAB, setIntersectionAB, 'P(A ∩ B)']].map(([value, setter, label]) => <label className="text-sm" key={label as string}>{label as string}<input aria-label={label as string} className="block w-full border rounded-lg p-2 mt-1" inputMode="decimal" value={value as string} onChange={event => (setter as (value: string) => void)(event.target.value)} /></label>)}</div>
        <button onClick={calculateUnion} className="w-full mt-4 bg-sky-600 text-white rounded-xl p-3 font-bold">Calcular união</button>{unionResult && <p aria-live="polite" className="paper rounded-xl p-4 mt-4">{unionResult}</p>}
      </article>
      <article className="bg-white rounded-2xl border p-6"><h2 className="font-black text-xl">Condicional — Teorema de Bayes</h2><p className="text-sm text-slate-500 mt-2"><MathRenderer expression={String.raw`P(A\mid B)=\frac{P(A\cap B)}{P(B)}`} /></p>
        <div className="grid grid-cols-2 gap-3 mt-5"><label className="text-sm">P(A ∩ B)<input aria-label="P(A interseção B)" className="block w-full border rounded-lg p-2 mt-1" inputMode="decimal" value={conditionalIntersection} onChange={event => setConditionalIntersection(event.target.value)} /></label><label className="text-sm">P(B)<input aria-label="P(B)" className="block w-full border rounded-lg p-2 mt-1" inputMode="decimal" value={conditionalUniverse} onChange={event => setConditionalUniverse(event.target.value)} /></label></div>
        <button onClick={calculateConditional} className="w-full mt-4 bg-sky-600 text-white rounded-xl p-3 font-bold">Calcular condicional</button>{conditionalResult && <p aria-live="polite" className="paper rounded-xl p-4 mt-4">{conditionalResult}</p>}
      </article>
    </div>
  </div>;
}
