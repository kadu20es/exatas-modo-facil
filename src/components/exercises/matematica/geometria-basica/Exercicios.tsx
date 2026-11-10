import { useMemo, useState, type ElementType, type ReactNode } from 'react';
import { MathText } from '../../../Math/MathRenderer';
import { exerciseLevels, exercisesData } from '../../../../data/matematica/geometria-basica/exercicios';

type SvgNode = { tag: string; attrs: Record<string, string>; children: Array<SvgNode | string> };
type GeometryExercise = (typeof exercisesData)[number];

const svgAttributeNames: Record<string, string> = {
  'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap', 'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray', 'text-anchor': 'textAnchor', 'font-size': 'fontSize',
  'font-weight': 'fontWeight', 'font-style': 'fontStyle', 'fill-rule': 'fillRule', 'clip-rule': 'clipRule',
};

function DrawNode({ node }: { node: SvgNode }) {
  const Tag = node.tag as ElementType;
  const props = Object.fromEntries(Object.entries(node.attrs).filter(([key]) => key !== 'style').map(([key, value]) => [svgAttributeNames[key] ?? key, value]));
  if (node.tag === 'svg') {
    const width = /(?:^|;)\s*width:\s*(\d+)px/.exec(node.attrs.style ?? '')?.[1];
    props.className = `w-full h-auto max-w-[${width ?? '100%'}${width ? 'px' : ''}]`;
  }
  return <Tag {...props}>{node.children.map((child, index) => typeof child === 'string' ? child : <DrawNode key={index} node={child} />)}</Tag>;
}

function RichMath({ text }: { text: string }) {
  const tokens = text.split(/(<\/?b>|<br\s*\/?\s*>)/gi);
  const stack: Array<{ tag: 'b'; children: ReactNode[] }> = [];
  const root: ReactNode[] = [];
  const current = () => stack.at(-1)?.children ?? root;
  tokens.forEach((token, index) => {
    if (/^<b>$/i.test(token)) stack.push({ tag: 'b', children: [] });
    else if (/^<\/b>$/i.test(token)) {
      const bold = stack.pop();
      if (bold) current().push(<b key={`b-${index}`} className="font-bold text-slate-800">{bold.children}</b>);
    } else if (/^<br\s*\/?\s*>$/i.test(token)) current().push(<br key={`br-${index}`} />);
    else if (token) current().push(<MathText key={`text-${index}`} formatFractions>{token}</MathText>);
  });
  while (stack.length) {
    const bold = stack.pop()!;
    current().push(<b key={`b-tail-${stack.length}`} className="font-bold text-slate-800">{bold.children}</b>);
  }
  return <>{root}</>;
}

function plain(text: string) { return text.replace(/<[^>]*>/g, ' ').replace(/\\\([\s\S]*?\\\)/g, ' ').replace(/\\\[[\s\S]*?\\\]/g, ' '); }
function normalize(text: string) { return text.trim().toLocaleLowerCase('pt-BR').replace(/\s+/g, '').replace(/−/g, '-').replace(/,/g, '.'); }
function rational(text: string): [bigint, bigint] | null {
  const parts = text.trim().replace(/−/g, '-').replace(/,/g, '.').split('/');
  if (parts.length > 2 || !parts[0]) return null;
  const numberParts = parts.map(part => {
    const match = /^([+-]?)(\d+)(?:\.(\d+))?$/.exec(part);
    if (!match) return null;
    const scale = 10n ** BigInt((match[3] ?? '').length);
    const numerator = BigInt(match[2] + (match[3] ?? '')) * (match[1] === '-' ? -1n : 1n);
    return [numerator, scale] as [bigint, bigint];
  });
  if (numberParts.some(part => !part)) return null;
  const [an, ad] = numberParts[0]!;
  if (numberParts.length === 1) return [an, ad];
  const [bn, bd] = numberParts[1]!;
  if (bn === 0n) return null;
  return [an * bd, ad * bn];
}
function sameNumber(actual: string, expected: string) {
  const a = rational(actual), b = rational(expected);
  return a && b ? a[0] * b[1] === b[0] * a[1] : normalize(actual) === normalize(expected);
}
function pair(text: string) {
  const match = /^\(?\s*([^,;]+)\s*[,;]\s*([^,;]+)\s*\)?$/.exec(text.trim());
  return match ? [match[1].trim(), match[2].trim()] : null;
}

export function GeometriaBasicaExercises({ onReviewLesson, initialLevel = 'all' }: { onReviewLesson?: (lesson: string) => void; initialLevel?: string }) {
  const [solved, setSolved] = useState<number[]>(() => {
    try { const value = JSON.parse(localStorage.getItem('geoBasicaSolved') ?? '[]'); return Array.isArray(value) ? value : []; } catch { return []; }
  });
  const [level, setLevel] = useState(initialLevel);
  const [search, setSearch] = useState('');
  const [onlyOpen, setOnlyOpen] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [feedback, setFeedback] = useState<Record<number, { ok: boolean; text: string }>>({});
  const [openHints, setOpenHints] = useState<number[]>([]);
  const [openSolutions, setOpenSolutions] = useState<number[]>([]);

  const visible = useMemo(() => exercisesData.filter(item =>
    (level === 'all' || item.level === Number(level)) && (!onlyOpen || !solved.includes(item.id)) &&
    (`${item.id} ${item.title} ${plain(item.expr)} ${item.options.map(plain).join(' ')} ${item.hint}`).toLocaleLowerCase('pt-BR').includes(search.toLocaleLowerCase('pt-BR')),
  ), [level, onlyOpen, search, solved]);
  const markSolved = (id: number) => setSolved(previous => {
    if (previous.includes(id)) return previous;
    const next = [...previous, id];
    try { localStorage.setItem('geoBasicaSolved', JSON.stringify(next)); } catch { /* O progresso pode não estar disponível. */ }
    return next;
  });
  const report = (item: GeometryExercise, value: string) => {
    const expected = item.answer;
    let ok = false;
    if (item.kind === 'pair' && Array.isArray(expected)) {
      const entered = pair(value);
      ok = Boolean(entered && sameNumber(entered[0], expected[0]) && sameNumber(entered[1], expected[1]));
      if (!ok && entered && sameNumber(entered[0], expected[1]) && sameNumber(entered[1], expected[0])) {
        setFeedback(previous => ({ ...previous, [item.id]: { ok: false, text: '✗ Quase! Você trocou x e y. O par é (x, y): primeiro a horizontal.' } }));
        return;
      }
    } else if (item.kind === 'num' && typeof expected === 'string') ok = sameNumber(value, expected);
    else if (item.kind === 'mc' && typeof expected === 'string') ok = normalize(value) === normalize(expected);
    const common = item.common.find(candidate => sameNumber(value, candidate.value));
    setFeedback(previous => ({ ...previous, [item.id]: { ok, text: ok ? '✓ Perfeito! Resposta correta.' : common ? `✗ Quase! ${common.message}` : '✗ Ainda não. Use a 💡 Dica ou veja a resolução passo a passo.' } }));
    if (ok) markSolved(item.id);
  };
  const reset = () => {
    if (!window.confirm('Zerar todo o seu progresso nos exercícios?')) return;
    setSolved([]); setAnswers({}); setFeedback({});
    try { localStorage.setItem('geoBasicaSolved', '[]'); } catch { /* O progresso pode não estar disponível. */ }
  };

  return <section className="space-y-6">
    <div className="bg-white rounded-3xl border p-7 shadow-sm flex flex-col lg:flex-row justify-between gap-5">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Treino progressivo · do mais fácil ao mais difícil</span>
        <h1 className="text-3xl font-black mt-2">{exercisesData.length} exercícios em {exerciseLevels.length} níveis</h1>
        <p className="text-slate-600 mt-2 max-w-2xl">Comece pelo Nível 1 e vá avançando. Há <b>contas</b>, <b>questões de escolha</b>, <b>figuras para interpretar</b> e <b>problemas do dia a dia</b>. Cada exercício tem <b>💡 dica</b> e <b>resolução passo a passo</b>. Digite decimais como <kbd className="bg-slate-100 border border-slate-300 border-b-2 rounded px-1">2,5</kbd> e frações como <kbd className="bg-slate-100 border border-slate-300 border-b-2 rounded px-1">1/2</kbd>; nas respostas com ponto no plano, digite assim: <kbd className="bg-slate-100 border border-slate-300 border-b-2 rounded px-1">(3, -2)</kbd>.</p>
      </div>
      <div className="min-w-[230px]">
        <div className="flex justify-between text-sm font-bold"><span>Progresso</span><span>{solved.length} / {exercisesData.length}</span></div>
        <div className="h-3 bg-slate-100 rounded-full mt-2 overflow-hidden"><div className="h-full bg-indigo-600 rounded-full transition-all" style={{ width: `${Math.min(100, solved.length / exercisesData.length * 100)}%` }} /></div>
        <button type="button" onClick={reset} className="mt-3 text-xs text-slate-400 hover:text-red-600 underline">Zerar meu progresso</button>
      </div>
    </div>

    <div className="bg-white rounded-2xl border p-4 shadow-sm space-y-3">
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => setLevel('all')} className={`rounded-lg px-3 py-2 text-xs font-bold ${level === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-100'}`}>Todos · {solved.length}/{exercisesData.length}</button>
        {exerciseLevels.map(item => <button key={item.level} type="button" title={item.name} onClick={() => setLevel(String(item.level))} className={`rounded-lg px-3 py-2 text-xs font-bold ${level === String(item.level) ? 'bg-indigo-600 text-white' : 'bg-slate-100'}`}>Nível {item.level} · {solved.filter(id => exercisesData.find(exercise => exercise.id === id)?.level === item.level).length}/{exercisesData.filter(exercise => exercise.level === item.level).length}</button>)}
      </div>
      {level !== 'all' && <div className="rounded-xl bg-indigo-50 p-4 text-sm"><h2 className="font-black text-indigo-900">Nível {level} · {exerciseLevels[Number(level) - 1]?.name}</h2><p className="mt-1 text-slate-700">{exerciseLevels[Number(level) - 1]?.description}</p><p className="mt-2 text-slate-700"><b>Lembrete:</b> {exerciseLevels[Number(level) - 1]?.reminder}</p><button type="button" onClick={() => onReviewLesson?.(exerciseLevels[Number(level) - 1]?.lesson ?? 'l0')} className="mt-2 font-bold text-indigo-700 underline">Rever a lição</button></div>}
      <div className="flex flex-wrap items-center gap-4">
        <label className="text-xs font-bold text-slate-600 flex items-center gap-2"><input type="checkbox" checked={onlyOpen} onChange={event => setOnlyOpen(event.target.checked)} />Mostrar só os não resolvidos</label>
        <input value={search} onChange={event => setSearch(event.target.value)} placeholder="Buscar (ex.: ângulo, cerca, quadrante)…" className="border rounded-lg px-3 py-2 text-xs flex-1 min-w-[200px]" />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {visible.map(item => {
        const isSolved = solved.includes(item.id);
        const toggle = (values: number[], set: (next: number[]) => void) => set(values.includes(item.id) ? values.filter(id => id !== item.id) : [...values, item.id]);
        return <article key={item.id} id={`ex-${item.id}`} className={`bg-white rounded-2xl border-2 ${isSolved ? 'border-emerald-400' : 'border-slate-200'} p-5 shadow-sm`}>
          <div className="flex justify-between gap-3 items-center"><span className="text-xs font-black px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700">Questão {item.id}</span><span className="text-xs text-slate-400">Nível {item.level}</span></div>
          <div className="bg-slate-50 rounded-xl border border-dashed mt-3 p-5 text-base sm:text-lg text-slate-700 leading-8"><RichMath text={item.expr} /></div>
          {item.figure && <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center"><DrawNode node={item.figure as unknown as SvgNode} /></div>}
          {item.kind === 'mc' ? <div className="grid grid-cols-1 gap-2 mt-4">{item.options.map((option, index) => <button key={index} type="button" onClick={() => { setAnswers(previous => ({ ...previous, [item.id]: option })); report(item as GeometryExercise, option); }} className={`rounded-xl border-2 px-4 py-3 text-left text-sm ${answers[item.id] === option ? (item.correctIndex === index ? 'border-emerald-400 bg-emerald-50' : 'border-red-300 bg-red-50') : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50'}`}><RichMath text={option} /></button>)}</div> : <div className="flex gap-2 mt-4"><input value={answers[item.id] ?? ''} onChange={event => setAnswers(previous => ({ ...previous, [item.id]: event.target.value }))} onKeyDown={event => { if (event.key === 'Enter') report(item as GeometryExercise, answers[item.id] ?? ''); }} className="flex-1 border rounded-xl px-3 py-2 text-sm min-w-0" placeholder={item.kind === 'pair' ? 'Sua resposta, ex.: (3, -2)' : 'Sua resposta (ex.: 12, 3,5)'} autoComplete="off" /><button type="button" onClick={() => report(item as GeometryExercise, answers[item.id] ?? '')} className="bg-indigo-600 text-white rounded-xl px-4 py-2 text-sm font-bold">Conferir</button></div>}
          <div aria-live="polite" className={`text-sm font-bold mt-2 min-h-5 ${feedback[item.id]?.ok ? 'text-emerald-600' : 'text-red-600'}`}>{feedback[item.id]?.text ?? (isSolved ? '✓ Já resolvido' : '')}</div>
          <div className="flex gap-5 mt-1"><button type="button" onClick={() => toggle(openHints, setOpenHints)} className="text-sm font-bold text-amber-700 hover:underline">💡 {openHints.includes(item.id) ? 'Ocultar dica' : 'Dica'}</button><button type="button" onClick={() => toggle(openSolutions, setOpenSolutions)} className="text-sm font-bold text-indigo-700 hover:underline">👁 {openSolutions.includes(item.id) ? 'Ocultar resolução' : 'Resolução passo a passo'}</button></div>
          {openHints.includes(item.id) && <div className="border-l-4 border-amber-500 bg-amber-50 rounded-xl p-3 mt-3 text-sm"><b>💡 Dica:</b> <RichMath text={item.hint} /></div>}
          {openSolutions.includes(item.id) && <div className="mt-4 border-t pt-4"><div className="text-xs uppercase tracking-widest font-black text-emerald-700 mb-3">Resolução passo a passo</div><div className="space-y-3">{item.steps.map((step, index) => <div key={index} data-step={index + 1} className="relative pl-12 p-4 border border-gray-200 rounded-2xl bg-white before:content-[attr(data-step)] before:absolute before:left-4 before:top-4 before:w-[1.65rem] before:h-[1.65rem] before:rounded-full before:bg-indigo-100 before:text-indigo-800 before:font-extrabold before:grid before:place-items-center before:text-xs text-sm"><RichMath text={step} /></div>)}</div><div className="border-l-4 border-emerald-500 bg-emerald-50 rounded-xl p-4 mt-3 text-center font-bold">Resposta: <MathText formatFractions>{Array.isArray(item.answer) ? `(${item.answer.join(', ')})` : String(item.answer)}</MathText></div></div>}
        </article>;
      })}
      {!visible.length && <div className="md:col-span-2 text-center text-slate-500 py-10">Nenhum exercício encontrado com esses filtros.</div>}
    </div>
  </section>;
}

