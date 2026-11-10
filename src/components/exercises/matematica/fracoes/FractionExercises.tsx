import { useMemo, useState } from 'react';
import { exercisesData } from '../../../../data/matematica/fracoes/exercicios';
import { fraction, fractionLatex, parseAnswer, type Fraction } from '../../../../utils/mathUtils';
import { MathRenderer } from '../../../Math/MathRenderer';

type Exercise = { id: number; level: number; title: string; expr: string; ans: string; rawAns: string };
const exercises = exercisesData as Exercise[];
const readSolved = (): number[] => {
  try { const value = JSON.parse(localStorage.getItem('fracSolved') || '[]'); return Array.isArray(value) ? value.filter(Number.isInteger) : []; }
  catch { return []; }
};
const equivalent = (a: Fraction, b: Fraction) => a.n * b.d === b.n * a.d;

export function FractionExercises() {
  const [solved, setSolved] = useState<number[]>(readSolved);
  const [level, setLevel] = useState('all');
  const [query, setQuery] = useState('');
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [feedback, setFeedback] = useState<Record<number, boolean>>({});
  const [openSolutions, setOpenSolutions] = useState<number[]>([]);
  const shown = useMemo(() => exercises.filter(item => (level === 'all' || item.level === Number(level)) && (`questão ${item.id} ${item.title}`).toLowerCase().includes(query.toLowerCase())), [level, query]);
  const checkAnswer = (item: Exercise) => {
    const entered = parseAnswer(answers[item.id] ?? '');
    const expectedParts = item.rawAns.match(/^(-?\d+)\/(\d+)$/);
    const expected = expectedParts ? fraction(Number(expectedParts[1]), Number(expectedParts[2])) : fraction(Number(item.rawAns), 1);
    const correct = typeof entered !== 'string' && entered !== null && equivalent(entered, expected);
    setFeedback(current => ({ ...current, [item.id]: correct }));
    if (correct && !solved.includes(item.id)) {
      const updated = [...solved, item.id]; setSolved(updated);
      try { localStorage.setItem('fracSolved', JSON.stringify(updated)); } catch { /* storage is optional */ }
    }
  };
  const toggleSolution = (id: number) => setOpenSolutions(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  return <section className="space-y-6">
    <div className="bg-white rounded-3xl border p-7 shadow-sm"><div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5"><div><span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Treino progressivo</span><h1 className="text-3xl font-black mt-2">100 exercícios com resolução</h1><p className="text-slate-600 mt-2">Tente primeiro. Quando quiser conferir, clique em <b>Visualizar resposta e resolução</b>.</p></div><div className="min-w-[210px]"><div className="flex justify-between text-sm font-bold"><span>Progresso</span><span>{solved.length} / 100</span></div><div className="h-3 bg-slate-100 rounded-full mt-2 overflow-hidden"><div className="h-full bg-indigo-600 rounded-full" style={{ width: `${solved.length}%` }} /></div></div></div></div>
    <div className="bg-white rounded-2xl border p-4 shadow-sm"><div className="flex flex-wrap gap-2">{['all','1','2','3','4','5','6'].map(item => <button key={item} onClick={() => setLevel(item)} className={`level-btn rounded-lg px-3 py-2 text-xs font-bold ${level === item ? 'active' : 'bg-slate-100'}`}>{item === 'all' ? 'Todos' : `Nível ${item}`}</button>)}<input aria-label="Buscar questões" value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar questão..." className="border rounded-lg px-3 py-2 text-xs flex-1 min-w-[180px]" /></div></div>
    <div className="grid md:grid-cols-2 gap-5">{shown.map(item => {
      const isSolved = solved.includes(item.id), answer = feedback[item.id];
      return <article key={item.id} className={`bg-white rounded-2xl border ${isSolved ? 'border-emerald-400' : 'border-slate-200'} p-5 shadow-sm`}><div className="flex justify-between gap-3"><span className="text-xs font-black px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700">Questão {item.id}</span><span className="text-xs text-slate-400">{item.title}</span></div><div className="bg-slate-50 rounded-xl border border-dashed mt-3 p-6 text-center text-xl"><MathRenderer expression={`${item.expr}=?`} display /></div><div className="flex gap-2 mt-4"><input value={answers[item.id] ?? ''} onChange={e => setAnswers(current => ({ ...current, [item.id]: e.target.value }))} onKeyDown={e => { if (e.key === 'Enter') checkAnswer(item); }} className="flex-1 border rounded-xl px-3 py-2 text-sm" placeholder="Sua resposta" /><button onClick={() => checkAnswer(item)} className="bg-indigo-600 text-white rounded-xl px-4 py-2 text-sm font-bold">Conferir</button></div><div aria-live="polite" className={`text-sm font-bold mt-2 min-h-5 ${answer === undefined ? '' : answer ? 'text-emerald-600' : 'text-red-600'}`}>{answer === undefined ? '' : answer ? '✓ Correto! Muito bem.' : '✗ Ainda não. Revise os passos e tente novamente.'}</div><button onClick={() => toggleSolution(item.id)} className="mt-2 text-sm font-bold text-indigo-700 hover:underline">👁 Visualizar resposta e resolução</button>{openSolutions.includes(item.id) && <div className="exercise-solution mt-4 border-t pt-4"><div className="text-xs uppercase tracking-widest font-black text-emerald-700 mb-3">Resolução completa</div><div className="step mb-3" data-step="1">Identifique a ordem das operações na expressão.</div><div className="step mb-3" data-step="2">Resolva primeiro parênteses, colchetes e chaves; depois multiplicações e divisões; por fim, adições e subtrações.</div><div className="step mb-3" data-step="3">Simplifique as frações a cada etapa quando possível.</div><div className="step mb-3" data-step="4">Resposta: <MathRenderer expression={fractionLatex(expectedFraction(item))} />.</div><div className="success rounded-xl p-4 text-center font-bold">Resposta: <MathRenderer expression={fractionLatex(expectedFraction(item))} display /></div></div>}</article>;
    })}</div>
  </section>;
}
function expectedFraction(item: Exercise): Fraction {
  const match = item.rawAns.match(/^(-?\d+)\/(\d+)$/);
  return match ? fraction(Number(match[1]), Number(match[2])) : fraction(Number(item.rawAns), 1);
}


