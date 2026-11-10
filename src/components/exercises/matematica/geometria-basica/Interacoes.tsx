import { useState } from 'react';
import { MathText } from '../../../Math/MathRenderer';
import { quickChecks } from '../../../../data/matematica/geometria-basica/testes-rapidos';

export function GeometryQuickCheck({ index }: { index: number }) {
  const check = quickChecks.find(item => item.id === index);
  const [value, setValue] = useState('');
  const [feedback, setFeedback] = useState('');
  const [tone, setTone] = useState('text-slate-600');
  if (!check) return null;
  const submit = () => {
    const actual = value.trim().replace(/\s+/g, '').replace(/−/g, '-').replace(',', '.').toLocaleLowerCase('pt-BR');
    const expected = check.answer.trim().replace(/\s+/g, '').replace(/−/g, '-').replace(',', '.').toLocaleLowerCase('pt-BR');
    if (!actual) { setTone('text-amber-600'); setFeedback('Digite uma resposta.'); }
    else if (actual === expected) { setTone('text-emerald-600'); setFeedback('✓ Certo! Pode seguir.'); }
    else { setTone('text-red-600'); setFeedback('✗ Ainda não. Releia a lição e tente de novo.'); }
  };
  return <div className="bg-sky-50 border border-dashed border-sky-300 rounded-2xl p-4 mt-5">
    <div className="text-[11px] font-black uppercase tracking-widest text-sky-700">✋ Teste rápido</div>
    <p className="mt-2"><MathText>{check.question}</MathText></p>
    <div className="flex flex-wrap items-center gap-2 mt-3">
      <input value={value} onChange={event => setValue(event.target.value)} onKeyDown={event => { if (event.key === 'Enter') submit(); }} placeholder="Sua resposta" autoComplete="off" className="border border-slate-300 rounded-xl px-3 py-2 text-sm w-36 bg-white" />
      <button type="button" onClick={submit} className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg px-3 py-1.5 text-sm font-bold">Conferir</button>
      <button type="button" onClick={() => { setTone('text-slate-600'); setFeedback(`Resposta: ${check.answer}`); }} className="text-xs text-slate-500 underline">ver resposta</button>
      <span aria-live="polite" className={`text-sm font-bold ${tone}`}>{feedback}</span>
    </div>
  </div>;
}
