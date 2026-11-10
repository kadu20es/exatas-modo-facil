import { useState } from "react";
import { MathText } from "../../../Math/MathRenderer";
import { pitagorasQuickChecks } from "../../../../data/matematica/pitagoras/exercicios";

export function PitagorasQuickCheck({ index }: { index: number }) {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const item = Object.values(pitagorasQuickChecks)[index];
  if (!item) return null;
  const check = () =>
    setFeedback(
      answer.trim().replace(".", ",") === item.a.trim().replace(".", ",")
        ? "✓ Certo! Pode seguir."
        : "✗ Ainda não. Releia a lição e tente de novo.",
    );
  return (
    <div className="bg-sky-50 border border-dashed border-sky-300 rounded-2xl p-4 mt-5">
      <div className="text-[11px] font-black uppercase tracking-widest text-sky-700">
        ✋ Teste rápido
      </div>
      <p className="mt-2">
        <MathText>{item.q}</MathText>
      </p>
      <div className="flex flex-wrap items-center gap-2 mt-3">
        <input
          aria-label="Sua resposta"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && check()}
          placeholder="Sua resposta"
          className="border border-slate-300 rounded-xl px-3 py-2 text-sm bg-white"
        />
        <button
          type="button"
          onClick={check}
          className="bg-sky-600 text-white rounded-lg px-3 py-2 text-sm font-bold"
        >
          Conferir
        </button>
        <button
          type="button"
          onClick={() => setShowAnswer(true)}
          className="text-xs text-slate-600 underline"
        >
          ver resposta
        </button>
        {feedback && (
          <span
            className={`text-sm font-bold ${feedback.startsWith("✓") ? "text-emerald-700" : "text-red-700"}`}
          >
            {feedback}
          </span>
        )}
        {showAnswer && (
          <span className="text-sm font-bold text-indigo-700">
            Resposta: {item.a}
          </span>
        )}
      </div>
    </div>
  );
}
