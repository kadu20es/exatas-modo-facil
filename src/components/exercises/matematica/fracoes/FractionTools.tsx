import { useState } from 'react';
import { add, divide, fraction, fractionLatex, lcm, multiply, subtract, type Fraction } from '../../../../utils/mathUtils';
import { MathRenderer } from '../../../Math/MathRenderer';

function mmcRows(values: number[]) {
  const cur = [...values], rows: Array<{ values: number[]; divisor: number }> = [];
  for (let p = 2; cur.some(x => x > 1); p++) {
    if (cur.some(x => x > 1 && x % p === 0)) {
      rows.push({ values: [...cur], divisor: p });
      cur.forEach((x, i) => { if (x > 1 && x % p === 0) cur[i] = x / p; });
      p--;
    }
  }
  return rows;
}

export function FractionTools() {
  const [a, setA] = useState(4), [b, setB] = useState(6), [mmcVisible, setMmcVisible] = useState(false);
  const [n1, setN1] = useState(1), [d1, setD1] = useState(4), [n2, setN2] = useState(2), [d2, setD2] = useState(3), [op, setOp] = useState('+');
  const [result, setResult] = useState<Fraction | null>(null), [error, setError] = useState('');
  const rows = mmcRows([Math.max(1, a), Math.max(1, b)]);
  const calculate = () => {
    if (d1 === 0 || d2 === 0) { setError('Os denominadores devem ser maiores que zero.'); setResult(null); return; }
    const x = fraction(n1, d1), y = fraction(n2, d2);
    if (op === '÷' && y.n === 0) { setError('Não é possível dividir por zero.'); setResult(null); return; }
    setError('');
    setResult(op === '+' ? add(x, y) : op === '−' ? subtract(x, y) : op === '×' ? multiply(x, y) : divide(x, y));
  };
  return <section className="space-y-7">
    <div className="bg-white rounded-3xl border p-7 shadow-sm"><span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Ferramentas pedagógicas</span><h1 className="text-3xl font-black mt-2">MMC e operação de frações</h1><p className="text-slate-600 mt-2">Digite os números e acompanhe o cálculo como em uma folha de caderno.</p></div>
    <div className="grid lg:grid-cols-2 gap-6">
      <article className="bg-white rounded-2xl border p-6 shadow-sm"><h2 className="font-black text-xl">MMC passo a passo</h2><div className="grid grid-cols-2 gap-3 mt-4"><input aria-label="Primeiro número" type="number" min="1" value={a} onChange={e => setA(Math.max(1, Number(e.target.value)))} className="border rounded-xl p-3" /><input aria-label="Segundo número" type="number" min="1" value={b} onChange={e => setB(Math.max(1, Number(e.target.value)))} className="border rounded-xl p-3" /></div><button onClick={() => setMmcVisible(true)} className="mt-3 w-full bg-indigo-600 text-white rounded-xl py-3 font-bold">Calcular MMC</button>{mmcVisible && <div className="paper rounded-xl p-5 mt-4"><div className="text-sm text-slate-500">Fatoração simultânea</div><div className="mt-3 font-mono text-lg">{rows.map((row, i) => <div key={i}>{row.values.join('　')}　|　{row.divisor}</div>)}</div><hr className="my-4" /><div>Os fatores à direita são: <b>{rows.map(row => row.divisor).join(' × ')}</b>.</div><div className="text-center text-xl mt-3"><MathRenderer expression={`MMC(${a},${b})=${rows.reduce((r, row) => r * row.divisor, 1)}`} display /></div><div className="tip rounded-xl p-3 mt-4 text-sm"><b>Para soma/subtração:</b> {rows.reduce((r, row) => r * row.divisor, 1)} será o novo denominador comum. Depois faça {rows.reduce((r, row) => r * row.divisor, 1)} ÷ denominador original e multiplique pelo numerador original.</div></div>}</article>
      <article className="bg-white rounded-2xl border p-6 shadow-sm"><h2 className="font-black text-xl">Operador de frações</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4"><input aria-label="Numerador da primeira fração" type="number" min="0" value={n1} onChange={e => setN1(Number(e.target.value))} className="border rounded-xl p-3" /><input aria-label="Denominador da primeira fração" type="number" min="1" value={d1} onChange={e => setD1(Number(e.target.value))} className="border rounded-xl p-3" /><select aria-label="Operação" value={op} onChange={e => setOp(e.target.value)} className="border rounded-xl p-3"><option>+</option><option>−</option><option>×</option><option>÷</option></select><div className="grid grid-cols-2 gap-2"><input aria-label="Numerador da segunda fração" type="number" min="0" value={n2} onChange={e => setN2(Number(e.target.value))} className="border rounded-xl p-3" /><input aria-label="Denominador da segunda fração" type="number" min="1" value={d2} onChange={e => setD2(Number(e.target.value))} className="border rounded-xl p-3" /></div></div><button onClick={calculate} className="mt-3 w-full bg-emerald-600 text-white rounded-xl py-3 font-bold">Resolver passo a passo</button>{error && <div className="warning rounded-xl p-4 mt-4">{error}</div>}{result && <div className="paper rounded-xl p-5 mt-4 space-y-3"><div className="text-center text-xl"><MathRenderer expression={`${fractionLatex(fraction(n1, d1))} ${op} ${fractionLatex(fraction(n2, d2))}`} display /></div>{(op === '+' || op === '−') && <><div className="step" data-step="1"><b>1. Encontre o MMC:</b> <MathRenderer expression={`MMC(${d1},${d2})=${lcm(d1,d2)}`} />.</div><div className="step" data-step="2"><b>2. Primeira fração:</b> <MathRenderer expression={`${lcm(d1,d2)}\\div${d1}=${lcm(d1,d2)/d1}`} />; <MathRenderer expression={`${lcm(d1,d2)/d1}\\times${n1}=${lcm(d1,d2)/d1*n1}`} />. Então <MathRenderer expression={`${fractionLatex(fraction(n1,d1))}=${fractionLatex(fraction(lcm(d1,d2)/d1*n1,lcm(d1,d2)))}`} />.</div><div className="step" data-step="3"><b>3. Segunda fração:</b> <MathRenderer expression={`${lcm(d1,d2)}\\div${d2}=${lcm(d1,d2)/d2}`} />; <MathRenderer expression={`${lcm(d1,d2)/d2}\\times${n2}=${lcm(d1,d2)/d2*n2}`} />. Então <MathRenderer expression={`${fractionLatex(fraction(n2,d2))}=${fractionLatex(fraction(lcm(d1,d2)/d2*n2,lcm(d1,d2)))}`} />.</div><div className="step" data-step="4"><b>4. {op === '+' ? 'Some' : 'Subtraia'} os numeradores:</b> {lcm(d1,d2)/d1*n1} {op} {lcm(d1,d2)/d2*n2}. Resultado: <MathRenderer expression={fractionLatex(result)} />.</div></>}{op === '×' && <><div className="step" data-step="1">1. Multiplique numeradores: {n1}×{n2}={n1*n2}.</div><div className="step" data-step="2">2. Multiplique denominadores: {d1}×{d2}={d1*d2}.</div><div className="step" data-step="3">3. Simplifique: <MathRenderer expression={`${fractionLatex(fraction(n1*n2,d1*d2))}=${fractionLatex(result)}`} />.</div></>}{op === '÷' && <><div className="step" data-step="1">1. Mantenha a primeira fração: <MathRenderer expression={fractionLatex(fraction(n1,d1))} />.</div><div className="step" data-step="2">2. Inverta a segunda: <MathRenderer expression={`${fractionLatex(fraction(n2,d2))}\\to${fractionLatex(fraction(d2,n2))}`} />.</div><div className="step" data-step="3">3. Troque divisão por multiplicação: <MathRenderer expression={`${fractionLatex(fraction(n1,d1))}\\times${fractionLatex(fraction(d2,n2))}`} />.</div><div className="step" data-step="4">4. Multiplique e simplifique: <MathRenderer expression={`${fractionLatex(fraction(n1*d2,d1*n2))}=${fractionLatex(result)}`} />.</div></>}<div className="success rounded-xl p-4 mt-4 text-center font-bold">Resposta: <MathRenderer expression={fractionLatex(result)} display /></div></div>}</article>
    </div>
  </section>;
}


