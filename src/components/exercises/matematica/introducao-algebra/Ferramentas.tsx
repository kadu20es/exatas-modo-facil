import { useMemo, useState } from 'react';
import { MathRenderer, MathText } from '../../../Math/MathRenderer';

function evaluate(source: string, values: Record<string, number> = {}) {
  const cleaned = source.replace(/,/g, '.').replace(/[×·]/g, '*').replace(/[÷:]/g, '/').replace(/−/g, '-').replace(/²/g, '^2').replace(/³/g, '^3');
  const raw = cleaned.match(/\d*\.?\d+|[a-zA-Z]|[()+\-*/^]/g) ?? [];
  if (raw.join('') !== cleaned.replace(/\s/g, '')) throw new Error('Confira a expressão. Use números, letras, parênteses e operações básicas.');
  const tokens: string[] = [];
  raw.forEach((token, i) => {
    const previous = raw[i - 1];
    if (previous && /^(?:\d*\.?\d+|[a-zA-Z]|\))$/.test(previous) && /^(?:[a-zA-Z(])$/.test(token)) tokens.push('*');
    tokens.push(token);
  });
  let cursor = 0;
  const peek = () => tokens[cursor];
  const take = () => tokens[cursor++];
  const atom = (): number => {
    const token = take();
    if (token === '+') return atom();
    if (token === '-') return -atom();
    if (token === '(') { const value = sum(); if (take() !== ')') throw new Error('Está faltando fechar um parêntese.'); return value; }
    if (/^\d/.test(token ?? '')) return Number(token);
    if (/^[a-zA-Z]$/.test(token ?? '')) {
      if (values[token] === undefined) throw new Error(`Informe o valor da letra ${token}.`);
      return values[token];
    }
    throw new Error('A expressão não está completa.');
  };
  const power = (): number => { const value = atom(); return peek() === '^' ? (take(), value ** power()) : value; };
  const product = (): number => { let value = power(); while (peek() === '*' || peek() === '/') { const op = take(); const right = power(); value = op === '*' ? value * right : value / right; } return value; };
  const sum = (): number => { let value = product(); while (peek() === '+' || peek() === '-') { const op = take(); const right = product(); value = op === '+' ? value + right : value - right; } return value; };
  const result = sum();
  if (cursor !== tokens.length || !Number.isFinite(result)) throw new Error('Não foi possível calcular com esses valores.');
  return result;
}
const fmt = (value: number) => Number.isInteger(value) ? String(value) : value.toLocaleString('pt-BR', { maximumFractionDigits: 5 });
const card = 'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm';
const field = 'mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-800';
const range = 'w-full accent-indigo-600';

function Paper({ children }: {children: React.ReactNode}) { return <div className="rounded-2xl border border-indigo-200 bg-[#fffef9] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] p-5 shadow-sm">{children}</div>; }

function LabOne() {
  const [expression, setExpression] = useState('3x+5'); const [custom, setCustom] = useState('4x+2(x-1)'); const [x, setX] = useState(4);
  const expr = expression === '__custom' ? custom : expression;
  let result: number | null = null; let error = '';
  try { result = evaluate(expr, {x}); } catch (e) { error = e instanceof Error ? e.message : 'Expressão inválida.'; }
  const values = Array.from({length: 11}, (_, i) => { try { return evaluate(expr, {x:i}); } catch { return null; } });
  const max = Math.max(1, ...values.map(v => Math.abs(v ?? 0)));
  return <article className={card}><h2 className="text-xl font-black">Experimento 1 · A máquina de expressões (valor numérico)</h2><p className="mt-2 text-sm text-slate-600">Escolha uma expressão e um valor para <MathText>{'\\(x\\)'}</MathText>. A máquina mostra a conta <b>passo a passo</b>, na ordem certa.</p><div className="mt-5 grid gap-6 lg:grid-cols-[300px_1fr]"><div><label className="font-bold text-sm">Expressão<select className={field} value={expression} onChange={e=>setExpression(e.target.value)}><option value="3x+5">3x + 5</option><option value="2(x+3)">2(x + 3)</option><option value="x^2+1">x² + 1</option><option value="5x-4">5x − 4</option><option value="x/2+3">x/2 + 3</option><option value="(x+1)^2">(x + 1)²</option><option value="2x^2">2x²</option><option value="(2x)^2">(2x)²</option><option value="10-x">10 − x</option><option value="__custom">Outra (digite)…</option></select></label>{expression==='__custom'&&<input className={field} value={custom} onChange={e=>setCustom(e.target.value)} aria-label="Expressão personalizada"/>}<label className="mt-5 block font-bold text-sm"><MathText>{'Valor de \\(x\\):'}</MathText> <span className="text-indigo-600">{x}</span><input type="range" min="0" max="20" value={x} onChange={e=>setX(Number(e.target.value))} className={range}/></label><div className="mt-5 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-3 text-sm">{error || 'Arraste o controle e veja o resultado mudar.'}</div></div><div><div className="flex flex-wrap items-center justify-center gap-3 text-center"><div className="rounded-xl border-2 border-indigo-300 bg-indigo-50 px-5 py-3 font-bold text-indigo-800">x = {x}</div><span className="text-2xl text-indigo-500">➜</span><div className="rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white"><MathText>{`\(${expr.replace(/\*/g,' \\cdot ')}\)`}</MathText></div><span className="text-2xl text-indigo-500">➜</span><div className="rounded-xl border-2 border-indigo-300 bg-indigo-50 px-5 py-3 font-bold text-indigo-800">{result === null ? '—' : fmt(result)}</div></div><Paper><div className="space-y-2 font-mono text-lg text-blue-900">{result===null ? error : <><div>Expressão: <MathText>{`\(${expr}\)`}</MathText></div><div>Substitua x por {x}: <MathText>{`\(${expr.replace(/x/g,`(${x})`)}\)`}</MathText></div><div className="font-bold">Resultado: {fmt(result)}</div></>}</div></Paper><div className="mt-4 flex h-32 items-end gap-1 border-b-2 border-slate-300">{values.map((v,i)=><div key={i} title={`x = ${i}: ${v===null?'indefinido':fmt(v)}`} className={`flex h-full flex-1 flex-col justify-end ${i===x?'':'opacity-70'}`}><div className={`rounded-t transition-all ${i===x?'bg-pink-500':'bg-indigo-300'}`} style={{height:`${v===null?0:Math.max(3,Math.abs(v)/max*100)}%`}}/></div>)}</div><p className="mt-1 text-xs text-slate-500">As barras mostram o valor da expressão para <MathText>{'\\(x\\)'}</MathText> de 0 a 10.</p></div></div></article>;
}

function BalanceGraphic({ leftLines, rightLines, angle }: { leftLines: string[]; rightLines: string[]; angle: number }) {
  const cx=200, cy=70, arm=125, radians=angle*Math.PI/180;
  const left=[cx-arm*Math.cos(radians),cy-arm*Math.sin(radians)];
  const right=[cx+arm*Math.cos(radians),cy+arm*Math.sin(radians)];
  const drawPan=(point:number[],lines:string[],color:string)=><g>
    <line x1={point[0]} y1={point[1]} x2={point[0]-42} y2={point[1]+58} stroke="#94a3b8" strokeWidth="2"/>
    <line x1={point[0]} y1={point[1]} x2={point[0]+42} y2={point[1]+58} stroke="#94a3b8" strokeWidth="2"/>
    <rect x={point[0]-50} y={point[1]+58} width="100" height="10" rx="5" fill={color}/>
    {lines.map((line,index)=><text key={`${line}-${index}`} x={point[0]} y={point[1]+88+index*18} textAnchor="middle" fontSize="15" fontWeight="800" fill="#1e293b">{line}</text>)}
  </g>;
  return <svg viewBox="0 0 400 235" className="h-auto w-full max-w-[400px]" role="img" aria-label="Balança de dois pratos inclinável">
    <polygon points={`${cx},${cy} ${cx-34},222 ${cx+34},222`} fill="#c7d2fe"/>
    <line x1={left[0]} y1={left[1]} x2={right[0]} y2={right[1]} stroke="#4338ca" strokeWidth="8" strokeLinecap="round"/>
    <circle cx={cx} cy={cy} r="9" fill="#312e81"/>
    {drawPan(left,leftLines,'#818cf8')}
    {drawPan(right,rightLines,'#f9a8d4')}
  </svg>;
}

function LabTwo() {
  const [kind,setKind]=useState(1); const [guess,setGuess]=useState(0); const [a,setA]=useState(4); const [b,setB]=useState(8); const [show,setShow]=useState(false);
  const x=kind===1?b-a:kind===2?b/a:3;
  const lhs=kind===1?`x + ${a}`:kind===2?`${a}x`:`${a}x + ${b}`; const rhs=kind===1?b:kind===2?b:a*3+b;
  const leftValue=kind===1?guess+a:kind===2?a*guess:a*guess+b;
  const difference=leftValue-rhs;
  const angle=difference===0?0:-Math.max(-14,Math.min(14,difference*1.2));
  const leftText=kind===1?`${guess} + ${a}`:kind===2?`${a} · ${guess}`:`${a} · ${guess} + ${b}`;
  const newValues=()=>{const aa=2+Math.floor(Math.random()*6), xx=2+Math.floor(Math.random()*9), bb=1+Math.floor(Math.random()*15);setA(aa);setB(kind===2?aa*xx:kind===3?bb:xx+aa);setGuess(0);setShow(false);};
  const steps=kind===1?[`Subtraia ${a} dos dois lados: x + ${a} − ${a} = ${rhs} − ${a}.`,`Resolva: x = ${rhs-a}.`]:kind===2?[`Divida os dois lados por ${a}: ${a}x ÷ ${a} = ${rhs} ÷ ${a}.`,`Resolva: x = ${rhs/a}.`]:[`Subtraia ${b} dos dois lados: ${a}x = ${rhs-b}.`,`Divida os dois lados por ${a}: x = ${rhs-b} ÷ ${a} = ${x}.`];
  const message=difference===0?'⚖️ Equilibrou! Você descobriu:':difference<0?'O lado direito está mais pesado: tente um palpite maior.':'O lado esquerdo está mais pesado: tente um palpite menor.';
  const messageColor=difference===0?'text-emerald-600':difference<0?'text-amber-600':'text-red-600';
  return <article className={card}>
    <h2 className="text-xl font-black">Experimento 2 · A balança: descubra o valor de <MathText>{'\\(x\\)'}</MathText></h2>
    <p className="mt-2 text-sm text-slate-600">Dê palpites para <MathText>{'\\(x\\)'}</MathText> com o controle. Quando a balança <b>equilibrar</b>, você descobriu! Depois clique em “Mostrar o passo a passo” para ver como resolver no papel.</p>
    <div className="mt-5 grid gap-6 lg:grid-cols-[350px_1fr]">
      <div>
        <label className="block text-sm font-bold">Tipo de igualdade<select className={field} value={kind} onChange={e=>{setKind(Number(e.target.value));setShow(false);setGuess(0)}}><option value={1}>Fácil: x + a = b</option><option value={2}>Médio: a·x = b</option><option value={3}>Difícil: a·x + b = c</option></select></label>
        <button type="button" onClick={newValues} className="mt-3 w-full rounded-xl bg-indigo-600 py-3 font-bold text-white hover:bg-indigo-700">🎲 Nova balança</button>
        <label className="mt-5 block text-sm font-bold"><MathText>{'Meu palpite para \\(x\\):'}</MathText> <span className="text-indigo-600">{guess}</span><input type="range" min="0" max="30" value={guess} onChange={e=>setGuess(Number(e.target.value))} className={range}/></label>
        <button type="button" onClick={()=>setShow(v=>!v)} className="mt-3 w-full rounded-xl border-2 border-indigo-300 bg-white py-3 text-sm font-bold text-indigo-700 hover:bg-indigo-50">👁 {show?'Ocultar':'Mostrar'} o passo a passo</button>
      </div>
      <div>
        <div className="overflow-hidden rounded-2xl border-2 border-dashed border-indigo-300 bg-white p-4 sm:p-6">
          <div className="mb-1 text-center text-lg"><MathRenderer expression={`${lhs} = ${rhs}`}/></div>
          <BalanceGraphic leftLines={[leftText,`= ${fmt(leftValue)}`]} rightLines={[fmt(rhs)]} angle={angle}/>
        </div>
        <p className={`mt-3 text-center font-bold ${messageColor}`}>{message}{difference===0&&<> <MathRenderer expression={`x = ${guess}`}/></>}</p>
        {show&&<Paper><div className="space-y-3"><div className="text-xs font-black uppercase tracking-widest text-indigo-700">Resolução da igualdade</div><MathRenderer expression={`${lhs} = ${rhs}`} display/>{steps.map((step,index)=><div key={index} className="rounded-xl border border-slate-200 bg-white p-3"><MathText>{step}</MathText></div>)}<div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-3 text-center font-bold">Resposta: <MathRenderer expression={`x = ${x}`}/></div></div></Paper>}
      </div>
    </div>
  </article>;
}

function LabThree() {
  const [kind,setKind]=useState('sq');const [n,setN]=useState(4);const total=kind==='sq'?3*n+1:2*n+1;
  const lines=useMemo(()=>{const out:React.ReactNode[]=[];const s=44,pad=14;if(kind==='sq'){for(let i=0;i<n;i++){let x=pad+i*s,y=pad;out.push(<g key={i}><line x1={x} y1={y} x2={x+s} y2={y} stroke={i?'#ec4899':'#4f46e5'} strokeWidth="5"/><line x1={x} y1={y+s} x2={x+s} y2={y+s} stroke={i?'#ec4899':'#4f46e5'} strokeWidth="5"/><line x1={x+s} y1={y} x2={x+s} y2={y+s} stroke={i?'#ec4899':'#4f46e5'} strokeWidth="5"/>{i===0&&<line x1={x} y1={y} x2={x} y2={y+s} stroke="#4f46e5" strokeWidth="5"/>}</g>);}}else{for(let i=0;i<n;i++){const x=pad+i*s/2,y=pad+(i%2?s*.87:0);out.push(<g key={i}><line x1={x} y1={y+s*.87} x2={x+s/2} y2={y} stroke={i?'#ec4899':'#4f46e5'} strokeWidth="5"/><line x1={x+s/2} y1={y} x2={x+s} y2={y+s*.87} stroke={i?'#ec4899':'#4f46e5'} strokeWidth="5"/><line x1={x} y1={y+s*.87} x2={x+s} y2={y+s*.87} stroke={i?'#ec4899':'#4f46e5'} strokeWidth="5"/></g>);}}return out;},[kind,n]);
  return <article className={card}><h2 className="text-xl font-black">Experimento 3 · Padrões com palitos de fósforo</h2><p className="mt-2 text-sm text-slate-600">Aumente o número de figuras e veja a <b>regra geral</b> contando os palitos por você.</p><div className="mt-5 grid gap-6 lg:grid-cols-[300px_1fr]"><div><label className="font-bold text-sm">Figura<select className={field} value={kind} onChange={e=>setKind(e.target.value)}><option value="sq">Quadrados em fila</option><option value="tri">Triângulos em fila</option></select></label><label className="mt-5 block text-sm font-bold"><MathText>{'Quantidade de figuras \\(n\\):'}</MathText> <span className="text-indigo-600">{n}</span><input type="range" min="1" max="10" value={n} onChange={e=>setN(Number(e.target.value))} className={range}/></label><div className="mt-5 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-3 text-sm">{kind==='sq'?'O primeiro quadrado usa 4 palitos. Cada novo quadrado compartilha um lado e acrescenta 3.':'O primeiro triângulo usa 3 palitos. Cada novo triângulo compartilha um lado e acrescenta 2.'}<div className="mt-2 font-bold">Regra: {kind==='sq'?'3n + 1':'2n + 1'}</div></div></div><div className="overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-5 text-center"><svg role="img" aria-label={`${n} figuras e ${total} palitos`} viewBox={`0 0 ${Math.max(100,n*44+30)} 100`} className="mx-auto h-auto max-h-40 w-full">{lines}</svg><p className="mt-2 font-bold">{n} figura(s) → {total} palitos</p><div className="mt-4 overflow-x-auto"><table className="w-full text-sm"><tbody><tr><th className="bg-indigo-100 p-2">Figuras</th>{Array.from({length:Math.min(10,n+2)},(_,i)=><td key={i} className="border-t p-2">{i+1}</td>)}</tr><tr><th className="bg-indigo-100 p-2">Palitos</th>{Array.from({length:Math.min(10,n+2)},(_,i)=><td key={i} className="border-t p-2">{kind==='sq'?3*(i+1)+1:2*(i+1)+1}</td>)}</tr></tbody></table></div></div></div></article>;
}

function LabFour() {
  const [fa,setFa]=useState(20),[pa,setPa]=useState(2),[fb,setFb]=useState(10),[pb,setPb]=useState(4),[k,setK]=useState(3);
  const meet=pa===pb?null:(fb-fa)/(pa-pb);
  return <article className={card}><h2 className="text-xl font-black">Experimento 4 · Simulador de preços (taxa fixa + preço por unidade)</h2><p className="mt-2 text-sm text-slate-600">Dois planos: cada um tem uma <b>taxa fixa</b> e um <b>preço por unidade</b> (por km, por GB…). Compare os dois e descubra quando custam o mesmo.</p><div className="mt-5 grid gap-6 lg:grid-cols-[300px_1fr]"><div className="space-y-4"><div className="rounded-xl bg-indigo-50 p-3"><b className="text-indigo-800">Plano A</b><Slider label="Taxa fixa" value={fa} set={setFa} max={30}/><Slider label="Por unidade" value={pa} set={setPa} max={10}/></div><div className="rounded-xl bg-amber-50 p-3"><b className="text-amber-800">Plano B</b><Slider label="Taxa fixa" value={fb} set={setFb} max={30}/><Slider label="Por unidade" value={pb} set={setPb} max={10}/></div><Slider label="Quantidade usada (k)" value={k} set={setK} max={20}/></div><div><div className="grid gap-3 sm:grid-cols-2"><div className="rounded-xl bg-indigo-50 p-4 text-center"><MathRenderer expression={`A(k) = ${fa} + ${pa}k`}/><p className="mt-2 font-bold">A({k}) = R$ {fmt(fa+pa*k)}</p></div><div className="rounded-xl bg-amber-50 p-4 text-center"><MathRenderer expression={`B(k) = ${fb} + ${pb}k`}/><p className="mt-2 font-bold">B({k}) = R$ {fmt(fb+pb*k)}</p></div></div><p className="mt-3 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-3 text-sm">{meet===null?'Os preços por unidade são iguais; compare as taxas fixas.':meet>=0?`Os planos custam o mesmo em k = ${fmt(meet)} unidades.`:'Com quantidades positivas, o plano A e o plano B não se cruzam.'}</p><div className="mt-4 overflow-x-auto"><table className="w-full text-sm"><thead><tr className="bg-indigo-100"><th className="p-2 text-left">Unidades</th><th className="p-2">Plano A</th><th className="p-2">Plano B</th><th className="p-2">Mais barato</th></tr></thead><tbody>{Array.from({length:11},(_,i)=><tr key={i} className={i===k?'bg-indigo-50 font-bold':''}><td className="border-t p-2">{i}</td><td className="border-t p-2 text-center">R$ {fa+pa*i}</td><td className="border-t p-2 text-center">R$ {fb+pb*i}</td><td className="border-t p-2 text-center">{fa+pa*i===fb+pb*i?'iguais':fa+pa*i<fb+pb*i?'A':'B'}</td></tr>)}</tbody></table></div></div></div></article>;
}
function Slider({label,value,set,max}:{label:string;value:number;set:(n:number)=>void;max:number}){return <label className="mt-2 block text-xs font-bold">{label}: R$ {value}<input type="range" min="0" max={max} value={value} onChange={e=>set(Number(e.target.value))} className={range}/></label>;}

export function AlgebraLab(){return <section className="space-y-6"><header className={card}><span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Laboratório</span><h1 className="mt-2 text-3xl font-black">Experimente: mexa nos números e veja a álgebra funcionando</h1><p className="mt-2 text-slate-600">Quatro experimentos para você “sentir” as expressões, o valor numérico, os padrões e as igualdades. É só arrastar os controles.</p></header><LabOne/><LabTwo/><LabThree/><LabFour/></section>}

type ToolResult={steps:string[];formula?:string;result?:string;table?:string[][]};
function ToolCard({title,color,fields,run}:{title:string;color:string;fields:{key:string;label:string;initial:string}[];run:(values:Record<string,string>)=>ToolResult}){
 const [values,setValues]=useState(()=>Object.fromEntries(fields.map(f=>[f.key,f.initial])));const [output,setOutput]=useState<ToolResult|null>(null);const [error,setError]=useState('');
 const execute=()=>{try{setOutput(run(values));setError('')}catch(e){setOutput(null);setError(e instanceof Error?e.message:'Não foi possível calcular.')}};
 return <article className={card}><h2 className="text-lg font-black">{title}</h2><div className={`mt-4 grid gap-3 ${fields.length===1?'grid-cols-1':fields.length===2?'sm:grid-cols-2':'sm:grid-cols-3'}`}>{fields.map(f=><label key={f.key} className="text-xs font-bold text-slate-600">{f.label}<input className={field} value={values[f.key]} onChange={e=>setValues(v=>({...v,[f.key]:e.target.value}))}/></label>)}</div><button type="button" onClick={execute} className={`mt-3 w-full rounded-xl ${color} py-3 font-bold text-white`}>Resolver passo a passo</button>{error&&<div className="mt-4 rounded-xl border-l-4 border-red-500 bg-red-50 p-4 text-sm">{error}</div>}{output&&<Paper><div className="space-y-3 text-sm">{output.formula&&<p className="text-center"><MathRenderer expression={output.formula} display/></p>}{output.steps.map((s,i)=><div key={i} className="rounded-xl border border-slate-200 bg-white p-3"><MathText>{s}</MathText></div>)}{output.table&&<div className="overflow-x-auto"><table className="w-full text-left text-sm"><tbody>{output.table.map((row,i)=><tr key={i}>{row.map((v,j)=><td key={j} className="border-t p-2">{v}</td>)}</tr>)}</tbody></table></div>}{output.result&&<div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-4 text-center font-bold"><MathText>{output.result}</MathText></div>}</div></Paper>}</article>;
}

export function AlgebraCalculators(){return <section className="space-y-6"><header className={card}><span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Calculadoras passo a passo</span><h1 className="mt-2 text-3xl font-black">Digite o seu problema e veja a resolução</h1><p className="mt-2 text-slate-600">Cada calculadora mostra a conta no formato da folha-modelo. Aceita números inteiros, decimais (0,5) e frações (1/2). Nas expressões, escreva 3x, 2(x+1), x^2 (potência) e x/2 (divisão). Use para conferir o que você fez no papel.</p></header><div className="grid gap-6 lg:grid-cols-2">
 <ToolCard title="Valor numérico de uma expressão" color="bg-indigo-600 hover:bg-indigo-700" fields={[{key:'expr',label:'Expressão (ex.: 3x + 2y)',initial:'3x + 2(y - 1)'},{key:'vals',label:'Valores das letras (ex.: x = 4; y = 5)',initial:'x = 4; y = 5'}]} run={v=>{const vars=Object.fromEntries([...v.vals.matchAll(/([a-zA-Z])\s*=\s*([\d.,/]+)/g)].map(m=>[m[1],evaluate(m[2])]));const result=evaluate(v.expr,vars);return {formula:`${v.expr.replace(/\*/g,'\\cdot ')} = ${fmt(result)}`,steps:[`Expressão: \\(${v.expr}\\).`,`Substitua os valores informados e respeite a ordem das operações.`,`Resultado: \\(${fmt(result)}\\).`],result:`Valor numérico: \\(${fmt(result)}\\)`}}}/>
 <ToolCard title="Descobrir o valor desconhecido (igualdade)" color="bg-pink-600 hover:bg-pink-700" fields={[{key:'eq',label:'Igualdade (ex.: 3x + 2 = 20)',initial:'3x + 2 = 20'}]} run={v=>{const [lhs,rhs,...rest]=v.eq.split('=');if(!rhs||rest.length)throw new Error('Digite uma igualdade com um único sinal =.');const left0=evaluate(lhs,{x:0}),left1=evaluate(lhs,{x:1}),right=evaluate(rhs),a=left1-left0;if(Math.abs(evaluate(lhs,{x:2})-left0-2*a)>1e-8||a===0)throw new Error('Use uma igualdade linear com uma única solução.');const x=(right-left0)/a;return {formula:`${lhs.trim()} = ${rhs.trim()}`,steps:[`Igualdade inicial: \\(${lhs.trim()} = ${rhs.trim()}\\).`,`Isole x, desfazendo as operações na ordem contrária e mantendo a igualdade equilibrada.`,`Confira substituindo x = ${fmt(x)} na igualdade.`],result:`Resposta: \\(x = ${fmt(x)}\\)`}}}/>
 <ToolCard title="Descobrir a regra de um padrão (n-ésimo termo)" color="bg-amber-600 hover:bg-amber-700" fields={[{key:'terms',label:'Termos (separe com ; ou espaço)',initial:'5; 8; 11; 14'}]} run={v=>{const terms=v.terms.split(/[;\s]+/).filter(Boolean).map(Number);if(terms.length<2||terms.some(n=>!Number.isFinite(n)))throw new Error('Informe pelo menos dois termos numéricos.');const d=terms[1]-terms[0];if(!terms.every((n,i)=>i===0||Math.abs(n-terms[i-1]-d)<1e-8))throw new Error('Os termos informados não seguem uma regra linear com crescimento constante.');const k=terms[0]-d;return {formula:`a_n = ${d}n ${k<0?'-':'+'} ${Math.abs(k)}`,steps:[`Diferenças entre termos consecutivos: ${fmt(d)}.`,`A regra começa com ${fmt(d)}n. Ajuste o termo constante para chegar ao primeiro termo.`,`Verifique a regra com os valores informados.`],result:`Regra: \\(a_n = ${d}n ${k<0?'-':'+'} ${Math.abs(k)}\\)`}}}/>
 <ToolCard title="Analisar as partes de uma expressão" color="bg-sky-600 hover:bg-sky-700" fields={[{key:'expr',label:'Expressão (soma/subtração de termos)',initial:'4x + 3y - 7 + x'}]} run={v=>{const terms=v.expr.replace(/-/g,'+-').split('+').map(s=>s.trim()).filter(Boolean);const rows=[['Termo','Classificação'],...terms.map(t=>[t,/[a-zA-Z]/.test(t)?'termo com letra':'termo independente'])];return {steps:['Termos são as partes separadas por + ou −.','Coeficiente é o número que multiplica as letras; a parte literal reúne as letras e seus expoentes.'],table:rows,result:`A expressão tem ${terms.length} termo(s).`}}}/>
 <ToolCard title="Tabela de valores de uma expressão" color="bg-emerald-600 hover:bg-emerald-700" fields={[{key:'expr',label:'Expressão com x',initial:'2x + 3'},{key:'de',label:'x de',initial:'0'},{key:'ate',label:'até',initial:'10'}]} run={v=>{const start=Number(v.de),end=Number(v.ate);if(!Number.isInteger(start)||!Number.isInteger(end)||start<0||end<start||end-start>30)throw new Error('Use inteiros não negativos e peça no máximo 31 valores.');const rows=[['x',v.expr],...Array.from({length:end-start+1},(_,i)=>{const x=start+i;return [String(x),fmt(evaluate(v.expr,{x}))]})];return {steps:['Substitua x por cada número inteiro do intervalo.','Calcule cada valor numérico na ordem correta das operações.'],table:rows}}}/>
 </div></section>}
