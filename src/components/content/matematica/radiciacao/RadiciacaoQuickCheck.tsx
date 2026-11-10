import { useState } from "react";
import { MathText } from "../../../Math/MathRenderer";

const questions = [
  ["Quanto vale \\(\\sqrt{49}\\)?", "7"],
  [
    "Um quadrado tem área \\(64\\text{ cm}^2\\). Quantos centímetros mede cada lado?",
    "8",
  ],
  ["Quanto vale \\(\\sqrt{0{,}49}\\)?", "0,7"],
  ["Quanto vale \\(\\sqrt[3]{125}\\)?", "5"],
  ["\\(\\sqrt{30}\\) está entre 5 e qual número inteiro?", "6"],
  ["Quanto é \\(4{,}5^2\\)? (útil para aproximar \\(\\sqrt{20}\\))", "20,25"],
  [
    "Simplificando \\(\\sqrt{72}\\) obtemos \\(a\\sqrt2\\). Quanto vale \\(a\\)?",
    "6",
  ],
  [
    "Escrevendo \\(3\\sqrt2\\) como uma única raiz, obtemos \\(\\sqrt{n}\\). Quanto vale \\(n\\)?",
    "18",
  ],
  ["Se \\(\\sqrt{18} + \\sqrt{8} = k\\sqrt2\\), quanto vale \\(k\\)?", "5"],
  ["Quanto vale \\((2\\sqrt3)^2\\)?", "12"],
  [
    "Um quadrado tem área \\(81\\text{ m}^2\\). Qual é o perímetro, em metros?",
    "36",
  ],
  ["Qual número positivo elevado ao quadrado dá \\(2{,}25\\)?", "1,5"],
];

export function RadiciacaoQuickCheck({ index }: { index: number }) {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const question = questions[index];
  if (!question) return null;
  const check = () =>
    setFeedback(
      answer.trim().replace(".", ",") === question[1]
        ? "✓ Certo! Pode seguir."
        : "✗ Ainda não. Releia a lição e tente de novo.",
    );
  return (
    <div className="bg-sky-50 border border-dashed border-sky-300 rounded-2xl p-4 mt-5">
      <div className="text-[11px] font-black uppercase tracking-widest text-sky-700">
        ✋ Teste rápido
      </div>
      <p className="mt-2">
        <MathText>{question[0]}</MathText>
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
            Resposta: {question[1]}
          </span>
        )}
      </div>
    </div>
  );
}
