import { useState } from "react";
import { MathText } from "../../../Math/MathRenderer";
import { transformacoesGeometricasQuickChecks } from "../../../../data/matematica/transformacoes-geometricas/exercicios";

export function TransformacoesGeometricasQuickCheck({ index }: { index: number }) {
  const item = transformacoesGeometricasQuickChecks[String(index) as keyof typeof transformacoesGeometricasQuickChecks];
  const [value, setValue] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const check = () => {
    const normalize = (s: string) => s.trim().toLowerCase().replace(/\s/g, "").replace(",", ".");
    setFeedback(normalize(value) === normalize(item.a) ? "✓ Certo! Pode seguir." : "✗ Ainda não. Releia a lição e tente de novo.");
  };
  return (
    <div className="mt-5 rounded-2xl border border-dashed border-sky-300 bg-sky-50 p-4">
      <div className="text-[11px] font-black uppercase tracking-widest text-sky-700">✋ Teste rápido</div>
      <p className="mt-2 leading-7 text-slate-700"><MathText>{item.q}</MathText></p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <input value={value} onChange={event => setValue(event.target.value)} onKeyDown={event => event.key === "Enter" && check()} placeholder="Sua resposta" className="w-36 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm" />
        <button type="button" onClick={check} className="rounded-lg bg-sky-600 px-3 py-1.5 text-sm font-bold text-white">Conferir</button>
        <button type="button" onClick={() => setShowAnswer(true)} className="text-xs text-slate-600 underline">ver resposta</button>
        <span className="text-sm font-bold text-emerald-700">{showAnswer ? `Resposta: ${item.a}` : feedback}</span>
      </div>
    </div>
  );
}
