import { useState } from 'react';

export function NumberSetLab() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  function classify() {
    const raw = value.trim().replace(',', '.');
    let n = Number(raw);
    if (/^\d+\/\d+$/.test(raw)) { const [a,b] = raw.split('/').map(Number); n = a / b; }
    if (raw === 'π' || raw.toLowerCase() === 'pi') n = Math.PI;
    if (raw === '√2' || raw.toLowerCase() === 'sqrt(2)') n = Math.sqrt(2);
    if (!Number.isFinite(n)) { setResult('Informe um número, uma fração ou use π e √2.'); return; }
    const sets = [Number.isInteger(n) && n >= 0 ? 'ℕ' : '', Number.isInteger(n) ? 'ℤ' : '', Number.isFinite(n) && n !== Math.PI && n !== Math.sqrt(2) ? 'ℚ' : '', !Number.isInteger(n) && (n === Math.PI || n === Math.sqrt(2)) ? '𝕀' : '', 'ℝ'].filter(Boolean);
    setResult(`${value} pertence a ${sets.join(' ⊂ ')}.`);
  }
  return <section className="bg-white rounded-3xl border p-7 space-y-5"><div><span className="text-xs uppercase tracking-widest font-bold text-indigo-600">Laboratório</span><h1 className="text-3xl font-black mt-2">Classificador de números</h1><p className="text-slate-600 mt-2">Teste números naturais, inteiros, frações, π e √2.</p></div><div className="flex flex-wrap gap-3"><input aria-label="Número para classificar" className="border rounded-xl px-4 py-3 flex-1 min-w-48" value={value} onChange={e=>setValue(e.target.value)} placeholder="Ex.: -3, 2/5, π, √2" onKeyDown={e=>e.key==='Enter'&&classify()}/><button onClick={classify} className="rounded-xl bg-indigo-600 text-white font-bold px-5">Classificar</button></div>{result&&<div aria-live="polite" className="bg-indigo-50 text-indigo-950 font-bold rounded-xl p-4">{result}</div>}<div className="grid sm:grid-cols-4 gap-3 text-center">{['ℕ Naturais','ℤ Inteiros','ℚ Racionais','ℝ Reais'].map(x=><div className="rounded-xl border bg-slate-50 p-4 font-bold" key={x}>{x}</div>)}</div></section>;
}

export function NumberSetTools() {
  const [pre, setPre] = useState('0'); const [period, setPeriod] = useState('3'); const [fraction, setFraction] = useState('');
  const [a, setA] = useState('1'); const [b, setB] = useState('5'); const [c, setC] = useState('3'); const [d, setD] = useState('7'); const [interval, setInterval] = useState('');
  function makeFraction() { const digits=pre.replace(/\D/g,'')||'0', rep=period.replace(/\D/g,'')||'0'; const m=10**digits.length, r=10**rep.length-1; let num=Number(digits+rep)-Number(digits), den=m*r; const gcd=(x:number,y:number):number=>y?gcd(y,x%y):Math.abs(x); const g=gcd(num,den)||1; setFraction(`${num/g}/${den/g}`); }
  function compareIntervals() { const x1=Number(a),x2=Number(b),y1=Number(c),y2=Number(d); setInterval(`Interseção: [${Math.max(x1,y1)}, ${Math.min(x2,y2)}]${Math.max(x1,y1)>Math.min(x2,y2)?' (vazia)':''}. União: [${Math.min(x1,y1)}, ${Math.max(x2,y2)}].`); }
  return <section className="grid lg:grid-cols-2 gap-5"><article className="bg-white rounded-3xl border p-7"><h1 className="text-2xl font-black">Gerador de fração geratriz</h1><p className="text-slate-600 mt-2">Para uma dízima 0,ab̅, informe a parte não periódica e o período.</p><div className="flex gap-2 mt-5"><label className="text-sm flex-1">Parte não periódica<input className="block w-full border rounded-lg p-2 mt-1" value={pre} onChange={e=>setPre(e.target.value)}/></label><label className="text-sm flex-1">Período<input className="block w-full border rounded-lg p-2 mt-1" value={period} onChange={e=>setPeriod(e.target.value)}/></label></div><button onClick={makeFraction} className="mt-4 bg-indigo-600 text-white rounded-xl px-4 py-2 font-bold">Converter</button>{fraction&&<p className="paper rounded-xl p-4 mt-4 font-bold">Fração geratriz: {fraction}</p>}</article><article className="bg-white rounded-3xl border p-7"><h2 className="text-2xl font-black">Calculadora de intervalos</h2><p className="text-slate-600 mt-2">Compare intervalos fechados [a,b] e [c,d].</p><div className="grid grid-cols-4 gap-2 mt-5">{[[a,setA,'a'],[b,setB,'b'],[c,setC,'c'],[d,setD,'d']].map(([v,s,l]:any)=><label key={l} className="text-sm">{l}<input type="number" className="w-full border rounded-lg p-2 mt-1" value={v} onChange={e=>s(e.target.value)}/></label>)}</div><button onClick={compareIntervals} className="mt-4 bg-indigo-600 text-white rounded-xl px-4 py-2 font-bold">Calcular união e interseção</button>{interval&&<p className="paper rounded-xl p-4 mt-4 font-bold">{interval}</p>}</article></section>;
}
