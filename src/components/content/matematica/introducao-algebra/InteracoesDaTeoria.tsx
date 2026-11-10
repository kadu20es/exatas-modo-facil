import { useEffect, useState } from 'react';
import { MathText } from '../../../Math/MathRenderer';

const quickItems = [
  { question: 'Quanto é \\(2 + 3 \\cdot 4\\)?', answer: '14' },
  { question: 'Quanto vale \\(2^3 + 4\\)?', answer: '12' },
  { question: 'Cada caderno custa R$ 8. Quanto se paga por 5 cadernos?', answer: '40' },
  { question: 'Se \\(n = 6\\), quanto vale “o sucessor do dobro de \\(n\\)”, isto é, \\(2n + 1\\)?', answer: '13' },
  { question: 'Quantos <b>termos</b> tem a expressão \\(5x + 3y - 8\\)?', answer: '3' },
  { question: 'Qual é o coeficiente de \\(y\\) na expressão \\(y + 4\\)?', answer: '1' },
  { question: 'Calcule o valor numérico de \\(4x + 1\\) para \\(x = 3\\).', answer: '13' },
  { question: 'Calcule o valor numérico de \\(x^2 + 2\\) para \\(x = 5\\).', answer: '27' },
  { question: 'Calcule o valor numérico de \\(2(x + 1)\\) para \\(x = 4\\).', answer: '10' },
  { question: 'Uma sequência segue a regra \\(3n + 1\\) (\\(n\\) é a posição). Qual é o <b>10º termo</b>?', answer: '31' },
  { question: 'Descubra \\(x\\) em \\(x + 7 = 15\\).', answer: '8' },
  { question: 'Descubra \\(x\\) em \\(3x + 2 = 20\\).', answer: '6' },
  { question: 'Com \\(x = 2\\), quanto vale \\(3x + 2x\\)?', answer: '10' },
];

export function AlgebraQuickCheck({ index }: { index: number }) {
  const item = quickItems[index]; const [value,setValue]=useState(''); const [result,setResult]=useState('');
  if(!item) return null;
  return <div className="mt-5 rounded-2xl border border-dashed border-sky-300 bg-sky-50 p-4">
    <div className="text-[11px] font-black uppercase tracking-widest text-sky-700">✋ Teste rápido</div>
    <p className="mt-2 text-slate-700"><MathText>{item.question.replace(/<\/?b>/g,'')}</MathText></p>
    <div className="mt-3 flex flex-wrap items-center gap-2"><input value={value} onChange={e=>setValue(e.target.value)} onKeyDown={e=>{if(e.key==='Enter')check()}} placeholder="Sua resposta" aria-label="Sua resposta" className="w-36 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"/><button type="button" onClick={check} className="rounded-lg bg-sky-600 px-3 py-1.5 text-sm font-bold text-white">Conferir</button><button type="button" onClick={()=>setResult(`Resposta: ${item.answer}`)} className="text-xs text-slate-500 underline">ver resposta</button><span aria-live="polite" className={`text-sm font-bold ${result.startsWith('✓')?'text-emerald-700':result.startsWith('✗')?'text-red-600':result.startsWith('Digite')?'text-amber-600':'text-slate-600'}`}>{result}</span></div>
  </div>;
  function check(){const parsed=Number(value.replace(',','.'));if(!value.trim()||!Number.isFinite(parsed)){setResult('Digite um número.');return;}setResult(parsed===Number(item.answer)?'✓ Certo! Pode seguir.':'✗ Ainda não. Releia a lição e tente de novo.');}
}

export function AlgebraMatchFigures({kind,n}:{kind:'sq'|'tri';n:number}) {
  const s=40,pad=12,hh=s*.87;
  const segments:{x1:number;y1:number;x2:number;y2:number;color:string}[]=[];
  const color=(i:number)=>i===0?'#4f46e5':'#ec4899';
  if(kind==='sq') for(let i=0;i<n;i++){const x=pad+i*s,y=pad,c=color(i);segments.push({x1:x,y1:y,x2:x+s,y2:y,color:c},{x1:x,y1:y+s,x2:x+s,y2:y+s,color:c},{x1:x+s,y1:y,x2:x+s,y2:y+s,color:c});if(i===0)segments.push({x1:x,y1:y,x2:x,y2:y+s,color:c});}
  else {const point=(i:number)=>[pad+i*s/2,i%2===0?pad+hh:pad];for(let i=0;i<n+2;i++){if(i+1<n+2){const a=point(i),b=point(i+1);segments.push({x1:a[0],y1:a[1],x2:b[0],y2:b[1],color:color(Math.max(0,i-1))});}if(i+2<n+2){const a=point(i),b=point(i+2);segments.push({x1:a[0],y1:a[1],x2:b[0],y2:b[1],color:color(i)});}}}
  const width=kind==='sq'?n*s+pad*2:(n+2)*s/2+pad*2,height=kind==='sq'?s+pad*2:hh+pad*2;
  return <svg viewBox={`0 0 ${width} ${height}`} style={{width,height:'auto',maxWidth:'100%'}} role="img" aria-label={`${n} figuras de palitos`} className="mx-auto"><>{segments.map((line,i)=><g key={i}><line {...line} stroke={line.color} strokeWidth="5" strokeLinecap="round"/><circle cx={line.x1} cy={line.y1} r="2.5" fill="#f59e0b"/></g>)}</></svg>;
}

export function AlgebraScaleFigure({left,right}:{left:string;right:string}) {
  return <div className="flex flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-4"><MathText>{`\\(${left} = ${right}\\)`}</MathText><svg viewBox="0 0 300 100" className="h-24 w-full max-w-xs" role="img" aria-label={`Balança representando ${left} igual a ${right}`}><line x1="45" y1="45" x2="255" y2="45" stroke="#4f46e5" strokeWidth="7" strokeLinecap="round"/><path d="M150 45 L130 88 L170 88 Z" fill="#c7d2fe" stroke="#4338ca" strokeWidth="3"/><line x1="75" y1="45" x2="75" y2="65" stroke="#64748b" strokeWidth="3"/><line x1="225" y1="45" x2="225" y2="65" stroke="#64748b" strokeWidth="3"/><path d="M45 65 Q75 84 105 65" fill="none" stroke="#64748b" strokeWidth="3"/><path d="M195 65 Q225 84 255 65" fill="none" stroke="#64748b" strokeWidth="3"/><text x="75" y="58" textAnchor="middle" fontSize="13" fill="#312e81">{left}</text><text x="225" y="58" textAnchor="middle" fontSize="13" fill="#312e81">{right}</text></svg></div>;
}

const lessonLinks = [
  ['l0','0 · Comece por aqui'], ['l1','1 · Revisão rápida'], ['l2','2 · Por que usar letras?'],
  ['l3','3 · Da frase para a álgebra'], ['l4','4 · Como se escreve e as partes'],
  ['l5','5 · Valor numérico'], ['l6','6 · Tabelas e padrões'],
  ['l7','7 · Igualdades e valor desconhecido'], ['l8','8 · Expressões equivalentes'],
  ['l9','9 · Para que serve?'], ['l10','10 · Resolvendo problemas no papel'],
  ['l11','11 · Erros comuns'], ['l12','12 · Resumo e folha de cola'],
] as const;

export function AlgebraTheoryToc() {
  const [active,setActive]=useState('l0');
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];
      if(visible) setActive(visible.target.id);
    },{rootMargin:'-25% 0px -65% 0px'});
    lessonLinks.forEach(([id])=>{const element=document.getElementById(id);if(element)observer.observe(element)});
    return ()=>observer.disconnect();
  },[]);
  return <aside className="toc lg:sticky lg:top-20 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"><div className="px-2 pb-1 text-[11px] font-black uppercase tracking-widest text-indigo-600">Lições</div><nav className="space-y-1">{lessonLinks.map(([id,label])=><a key={id} href={`#${id}`} className={`block rounded-xl px-3 py-2 text-sm font-semibold no-underline transition-colors ${active===id?'bg-indigo-100 text-indigo-800':'text-slate-600 hover:bg-indigo-50 hover:text-indigo-800'}`}>{label}</a>)}</nav></aside>;
}
