import { useEffect, useRef, useState } from 'react';
import { MathRenderer } from '../../../Math/MathRenderer';

function drawPizza(canvas: HTMLCanvasElement, fill: number, denominator: number) {
  const ctx = canvas.getContext('2d'); if (!ctx) return;
  const cx = 75, cy = 75, radius = 60;
  for (let i = 0; i < denominator; i++) {
    const start = -Math.PI / 2 + i * 2 * Math.PI / denominator;
    const end = -Math.PI / 2 + (i + 1) * 2 * Math.PI / denominator;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, radius, start, end); ctx.closePath();
    ctx.fillStyle = i < fill ? '#6366f1' : '#f8fafc'; ctx.fill(); ctx.strokeStyle = '#64748b'; ctx.stroke();
  }
}
function drawBar(canvas: HTMLCanvasElement, fill: number, denominator: number) {
  const ctx = canvas.getContext('2d'); if (!ctx) return;
  const x = 8, y = 8, width = 304, height = 36, cell = width / denominator;
  for (let i = 0; i < denominator; i++) {
    ctx.beginPath(); ctx.rect(x + i * cell, y, cell, height);
    ctx.fillStyle = i < fill ? '#10b981' : '#f8fafc'; ctx.fill(); ctx.strokeStyle = '#64748b'; ctx.stroke();
  }
}

export function FractionLab() {
  const [numerator, setNumerator] = useState(3);
  const [denominator, setDenominator] = useState(4);
  const [preset, setPreset] = useState('');
  const pizzaRefs = useRef<Array<HTMLCanvasElement | null>>([]);
  const barRefs = useRef<Array<HTMLCanvasElement | null>>([]);
  const count = Math.max(1, Math.ceil(numerator / denominator));
  const whole = Math.floor(numerator / denominator), remainder = numerator % denominator;
  const type = numerator === 0 ? 'Fração nula' : numerator < denominator ? 'Fração própria (menor que 1)' : remainder === 0 ? 'Fração aparente (inteiro)' : 'Fração imprópria (maior que 1)';
  useEffect(() => {
    for (let i = 0; i < count; i++) {
      const fill = Math.min(denominator, Math.max(0, numerator - i * denominator));
      const pizza = pizzaRefs.current[i]; if (pizza) drawPizza(pizza, fill, denominator);
      const bar = barRefs.current[i]; if (bar) drawBar(bar, fill, denominator);
    }
  }, [numerator, denominator, count]);
  const change = (n: number, d: number) => { setNumerator(Math.max(0, Math.min(24, n))); setDenominator(Math.max(1, Math.min(12, d))); };
  return <section className="space-y-7">
    <div className="bg-white rounded-3xl border p-7 shadow-sm"><span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Laboratório visual</span><h1 className="text-3xl font-black mt-2">Mova os controles e veja a fração mudar</h1><p className="text-slate-600 mt-2">Use a pizza e a barra para enxergar numerador, denominador, parte inteira e fração imprópria.</p></div>
    <div className="grid lg:grid-cols-[320px_1fr] gap-6">
      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <label className="font-bold text-sm">Numerador: <span className="text-indigo-600">{numerator}</span></label><input aria-label="Numerador" type="range" min="0" max="24" value={numerator} onChange={e => setNumerator(Number(e.target.value))} className="w-full mt-3" />
        <label className="font-bold text-sm block mt-6">Denominador: <span className="text-indigo-600">{denominator}</span></label><input aria-label="Denominador" type="range" min="1" max="12" value={denominator} onChange={e => setDenominator(Number(e.target.value))} className="w-full mt-3" />
        <div className="grid grid-cols-2 gap-2 mt-6"><button onClick={() => change(numerator - 1, denominator)} className="rounded-xl bg-slate-100 py-2 font-bold">−</button><button onClick={() => change(numerator + 1, denominator)} className="rounded-xl bg-slate-100 py-2 font-bold">+</button></div>
      </div>
      <div className="bg-white rounded-2xl border p-6 shadow-sm"><div className="grid md:grid-cols-2 gap-7">
        <div><h3 className="font-black text-center">Pizza</h3><div className="flex flex-wrap gap-3 justify-center mt-4">{Array.from({ length: count }, (_, i) => <canvas key={i} ref={el => { pizzaRefs.current[i] = el; }} width={150} height={150} aria-label={`Pizza ${i + 1}`} />)}</div></div>
        <div><h3 className="font-black text-center">Barra</h3><div className="space-y-3 mt-8">{Array.from({ length: count }, (_, i) => <canvas key={i} ref={el => { barRefs.current[i] = el; }} width={320} height={52} className="w-full" aria-label={`Barra ${i + 1}`} />)}</div></div>
      </div><div className="border-t mt-6 pt-5 text-center"><div className="text-3xl font-black"><span className="fraction"><span className="top">{numerator}</span><span className="bottom">{denominator}</span></span></div><div className="text-slate-500 mt-2">{numerator === 0 ? 'zero' : numerator === 1 ? `um sobre ${denominator}` : `${numerator} sobre ${denominator}`}</div><div className="mt-4 grid sm:grid-cols-3 gap-2 text-sm"><div className="bg-slate-50 rounded-xl p-3"><b>Decimal</b><br />{(numerator / denominator).toFixed(3)}</div><div className="bg-slate-50 rounded-xl p-3"><b>Tipo</b><br />{type}</div><div className="bg-slate-50 rounded-xl p-3"><b>Forma mista</b><br />{whole ? <>{whole} {remainder ? <span className="fraction"><span className="top">{remainder}</span><span className="bottom">{denominator}</span></span> : 'inteiro'}</> : remainder ? <span className="fraction"><span className="top">{remainder}</span><span className="bottom">{denominator}</span></span> : '0'}</div></div></div></div>
    </div>
    <div className="bg-indigo-950 text-white rounded-2xl p-6"><h2 className="font-black text-xl">Experimente estas perguntas</h2><div className="grid sm:grid-cols-3 gap-3 mt-4">{[
      { id: 'half', n: 1, d: 2, text: <>O que acontece com <MathRenderer expression="\\frac12" /> se eu duplicar as partes?</> },
      { id: 'greater', n: 7, d: 4, text: <>Como fica uma fração maior que 1?</> },
      { id: 'equiv', n: 4, d: 8, text: <>Por que <MathRenderer expression="\\frac48" /> equivale a <MathRenderer expression="\\frac12" />?</> },
    ].map(item => <button key={item.id} onClick={() => { change(item.n, item.d); setPreset(item.id); }} className={`choice rounded-xl border border-white/20 p-3 text-left ${preset === item.id ? 'active' : ''}`}>{item.text}</button>)}</div></div>
  </section>;
}


