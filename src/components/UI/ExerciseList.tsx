import { useMemo, useState } from "react";
import type { ElementType } from "react";
import { MathRenderer, MathText } from "../Math/MathRenderer";

type SvgExerciseNode = {
  tag: string;
  attrs: Record<string, string>;
  children: readonly (SvgExerciseNode | string)[];
};
const svgAttributeNames: Record<string, string> = {
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "text-anchor": "textAnchor",
  "font-size": "fontSize",
  "font-weight": "fontWeight",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  viewbox: "viewBox",
};
function SvgExerciseFigure({ node }: { node: SvgExerciseNode }) {
  const Tag = node.tag as ElementType;
  const props = Object.fromEntries(
    Object.entries(node.attrs).map(([name, value]) => {
      const key = svgAttributeNames[name] ?? name;
      if (name === "style") {
        const style = Object.fromEntries(
          value
            .split(";")
            .filter(Boolean)
            .map((rule) => {
              const [rawKey, ...rest] = rule.split(":");
              return [
                rawKey
                  .trim()
                  .replace(/-([a-z])/g, (_, c: string) => c.toUpperCase()),
                rest.join(":").trim(),
              ];
            }),
        );
        return [key, style];
      }
      return [key, value];
    }),
  );
  return (
    <Tag {...props}>
      {node.children.map((child, index) =>
        typeof child === "string" ? (
          child
        ) : (
          <SvgExerciseFigure key={`${child.tag}-${index}`} node={child} />
        ),
      )}
    </Tag>
  );
}

type Exercise = {
  id: number;
  level: number;
  title?: string;
  kind?: string;
  question?: string;
  text?: string;
  expr?: string;
  answer?: string | number;
  ans?: string | number;
  accept?: readonly string[];
  tolerance?: number;
  options?: readonly string[];
  answerText?: string;
  hint?: string;
  common?: readonly { value: string; message: string }[];
  figure?: SvgExerciseNode;
  steps: ReadonlyArray<readonly [string, string] | readonly string[] | string>;
};
type ExerciseLevelInfo = {
  level: number;
  name: string;
  description: string;
  reminder: string;
  lesson: string;
};
const normalize = (value: string) =>
  value
    .trim()
    .toLocaleLowerCase("pt-BR")
    .replace(/\s+/g, "")
    .replace(/\./g, ",");
const solvedFromStorage = (key: string) => {
  try {
    const v = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(v) ? (v.filter(Number.isInteger) as number[]) : [];
  } catch {
    return [];
  }
};

export function ExerciseList({
  data,
  storageKey,
  levels,
  total,
  reinforcement = false,
  formatFractions = false,
  scientificNotation = false,
  instructions,
  initialLevel = "all",
  levelInfo,
  onReviewLesson,
  accent = "indigo",
  showUnsolvedFilter = false,
  allowResetProgress = false,
  headingText,
  descriptionText,
}: {
  data: readonly Exercise[];
  storageKey: string;
  levels: string[];
  total: number;
  reinforcement?: boolean;
  formatFractions?: boolean;
  scientificNotation?: boolean;
  instructions?: string;
  initialLevel?: string;
  levelInfo?: readonly ExerciseLevelInfo[];
  onReviewLesson?: (lesson: string) => void;
  accent?: "indigo" | "pink";
  showUnsolvedFilter?: boolean;
  allowResetProgress?: boolean;
  headingText?: string;
  descriptionText?: string;
}) {
  const [solved, setSolved] = useState(() => solvedFromStorage(storageKey));
  const [level, setLevel] = useState(initialLevel);
  const [query, setQuery] = useState("");
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [feedback, setFeedback] = useState<
    Record<number, "correct" | "wrong" | "empty">
  >({});
  const [open, setOpen] = useState<number[]>([]);
  const [hintsOpen, setHintsOpen] = useState<number[]>([]);
  const [onlyOpen, setOnlyOpen] = useState(false);
  const visible = useMemo(
    () =>
      data.filter(
        (ex) =>
          (level === "all" || ex.level === Number(level)) &&
          (!onlyOpen || !solved.includes(ex.id)) &&
          `questão ${ex.id} ${ex.title ?? ""} ${ex.question ?? ex.text ?? ""}`
            .toLocaleLowerCase("pt-BR")
            .includes(query.toLocaleLowerCase("pt-BR")),
      ),
    [data, level, query, onlyOpen, solved],
  );
  const check = (ex: Exercise) => {
    const raw = answers[ex.id] ?? "";
    if (!raw.trim()) {
      setFeedback((v) => ({ ...v, [ex.id]: "empty" }));
      return;
    }
    const target = ex.answer ?? ex.ans ?? "";
    const accepted = (ex.accept ?? [String(target)]).map(normalize);
    let ok = accepted.includes(normalize(raw));
    const parseNumber = (value: string) => {
      const normalized = value.trim().replace(",", ".").replace(/\s/g, "");
      const fraction = normalized.match(/^([-+]?\d*\.?\d+)\/([-+]?\d*\.?\d+)$/);
      if (fraction) return Number(fraction[1]) / Number(fraction[2]);
      return Number(normalized);
    };
    if (!ok && (String(target).includes("/") || raw.includes("/"))) {
      const parsed = parseNumber(raw),
        expected = parseNumber(String(target));
      ok =
        Number.isFinite(parsed) &&
        Number.isFinite(expected) &&
        Math.abs(parsed - expected) < 1e-9;
    }
    const tolerance =
      ex.tolerance ??
      (scientificNotation
        ? Math.abs(Number(target) * 0.0001)
        : reinforcement
          ? 0.01
          : undefined);
    if (!ok && tolerance !== undefined) {
      const scientific =
        raw
          .trim()
          .toLowerCase()
          .replace(",", ".")
          .replace(/\s/g, "")
          .match(/^([-+]?\d*\.?\d+)(?:\*|x)10\^?([-+]?\d+)$/) ??
        raw
          .trim()
          .toLowerCase()
          .replace(",", ".")
          .match(/^([-+]?\d*\.?\d+)e([-+]?\d+)$/);
      const parsed =
        scientificNotation && scientific
          ? Number(scientific[1]) * 10 ** Number(scientific[2])
          : Number(raw.replace(",", "."));
      const expected = Number(String(target).replace(",", "."));
      ok =
        Number.isFinite(parsed) &&
        Number.isFinite(expected) &&
        Math.abs(parsed - expected) <= tolerance;
    }
    setFeedback((v) => ({ ...v, [ex.id]: ok ? "correct" : "wrong" }));
    if (ok && !solved.includes(ex.id)) {
      const next = [...solved, ex.id];
      setSolved(next);
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        /* persistência é opcional */
      }
    }
  };
  const choose = (ex: Exercise, option: string) => {
    setAnswers((v) => ({ ...v, [ex.id]: option }));
    const ok =
      normalize(option) === normalize(String(ex.answer ?? ex.ans ?? ""));
    setFeedback((v) => ({ ...v, [ex.id]: ok ? "correct" : "wrong" }));
    if (ok && !solved.includes(ex.id)) {
      const next = [...solved, ex.id];
      setSolved(next);
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        /* persistência é opcional */
      }
    }
  };
  const toggle = (id: number) =>
    setOpen((v) => (v.includes(id) ? v.filter((x) => x !== id) : [...v, id]));
  return (
    <section className="space-y-6">
      <div className="bg-white rounded-3xl border p-7 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div>
            <span
              className={`text-xs font-bold uppercase tracking-widest ${accent === "pink" ? "text-pink-600" : "text-indigo-600"}`}
            >
              Treino progressivo
            </span>
            <h1 className="text-3xl font-black mt-2">
              {headingText ?? `${total} exercícios com resolução`}
            </h1>
            <p className="text-slate-600 mt-2">
              {descriptionText ?? (
                <>
                  Tente primeiro. Quando quiser conferir, clique em{" "}
                  <b>
                    {reinforcement
                      ? "Ver Passo a Passo"
                      : "Visualizar resposta e resolução"}
                  </b>
                  .
                </>
              )}
            </p>
            {!descriptionText && (
              <p className="text-slate-500 text-sm mt-1">
                {instructions ?? "Use vírgula ou ponto para decimais."}
              </p>
            )}
          </div>
          <div className="min-w-[210px]">
            <div className="flex justify-between text-sm font-bold">
              <span>Progresso</span>
              <span>
                {solved.length} / {total}
              </span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full mt-2 overflow-hidden">
              <div
                className={`h-full ${accent === "pink" ? "bg-pink-600" : "bg-indigo-600"} rounded-full transition-all`}
                style={{
                  width: `${Math.min(100, (solved.length / total) * 100)}%`,
                }}
              />
            </div>
            {allowResetProgress && (
              <button
                type="button"
                onClick={() => {
                  if (
                    window.confirm("Zerar todo o seu progresso nos exercícios?")
                  ) {
                    setSolved([]);
                    setFeedback({});
                    setAnswers({});
                    try {
                      localStorage.setItem(storageKey, "[]");
                    } catch {
                      /* persistência opcional */
                    }
                  }
                }}
                className="mt-2 text-xs text-slate-400 underline hover:text-red-600"
              >
                Zerar meu progresso
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setLevel("all")}
            className={`level-btn rounded-lg px-3 py-2 text-xs font-bold ${level === "all" ? `active ${accent === "pink" ? "!bg-pink-600 !border-pink-600 !text-white" : ""}` : "bg-slate-100"}`}
          >
            Todos
          </button>
          {levels.map((label, index) => (
            <button
              key={label}
              onClick={() => setLevel(String(index + 1))}
              className={`level-btn rounded-lg px-3 py-2 text-xs font-bold ${level === String(index + 1) ? `active ${accent === "pink" ? "!bg-pink-600 !border-pink-600 !text-white" : ""}` : "bg-slate-100"}`}
            >
              {label}
            </button>
          ))}
          <input
            aria-label="Buscar questão"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar questão..."
            className="border rounded-lg px-3 py-2 text-xs flex-1 min-w-[180px]"
          />
          {showUnsolvedFilter && (
            <label className="flex items-center gap-2 px-2 text-xs font-semibold text-slate-600">
              <input
                type="checkbox"
                checked={onlyOpen}
                onChange={(e) => setOnlyOpen(e.target.checked)}
              />
              Mostrar só os não resolvidos
            </label>
          )}
        </div>
        {level !== "all" && levelInfo?.[Number(level) - 1] && (
          <div
            className={`mt-4 rounded-xl ${accent === "pink" ? "bg-pink-50" : "bg-indigo-50"} p-4 text-sm`}
          >
            <h2
              className={`font-black ${accent === "pink" ? "text-pink-900" : "text-indigo-900"}`}
            >
              Nível {level} · {levelInfo[Number(level) - 1].name}
            </h2>
            <p className="mt-1 text-slate-700">
              {levelInfo[Number(level) - 1].description}
            </p>
            <p className="mt-2 text-slate-700">
              <b>Lembrete:</b>{" "}
              <MathText>{levelInfo[Number(level) - 1].reminder}</MathText>
            </p>
            <button
              type="button"
              onClick={() =>
                onReviewLesson?.(levelInfo[Number(level) - 1].lesson)
              }
              className={`mt-2 font-bold ${accent === "pink" ? "text-pink-700" : "text-indigo-700"} underline`}
            >
              Rever a lição correspondente
            </button>
          </div>
        )}
      </div>
      <div
        className={`grid ${reinforcement ? "lg:grid-cols-2" : "md:grid-cols-2"} gap-5`}
      >
        {visible.map((ex) => {
          const target = Number(ex.answer ?? ex.ans);
          const answerDisplay =
            scientificNotation && Number.isFinite(target) && target !== 0 ? (
              (() => {
                const exp = Math.floor(Math.log10(Math.abs(target)));
                const mant = Number((target / 10 ** exp).toPrecision(6));
                return (
                  <>
                    <div>
                      Formato padrão:{" "}
                      {target.toLocaleString("en-US", {
                        maximumFractionDigits: 10,
                      })}
                    </div>
                    <div className="mt-2">
                      Notação científica:{" "}
                      <MathRenderer
                        expression={`${mant} \\times 10^{${exp}}`}
                      />
                    </div>
                  </>
                );
              })()
            ) : (
              <>
                {reinforcement ? "Resposta Final: x = " : "Resposta: "}
                <MathText>
                  {ex.answerText ?? String(ex.answer ?? ex.ans)}
                </MathText>
              </>
            );
          const question = ex.question ?? ex.text;
          const commonFeedback = ex.common?.find(
            (item) => normalize(item.value) === normalize(answers[ex.id] ?? ""),
          )?.message;
          return (
            <article
              key={ex.id}
              className={`bg-white rounded-2xl border ${solved.includes(ex.id) ? "border-emerald-400" : "border-slate-200"} p-5 shadow-sm ${reinforcement ? "flex flex-col justify-between" : ""}`}
            >
              <div>
                <div className="flex justify-between gap-3 mb-3">
                  <span
                    className={`text-xs font-black px-2.5 py-1 rounded-full ${accent === "pink" ? "bg-pink-50 text-pink-700" : "bg-indigo-50 text-indigo-700"} whitespace-nowrap`}
                  >
                    Questão {ex.id}
                  </span>
                  <span className="text-xs text-slate-400 text-right">
                    {ex.title ?? `Nível ${ex.level}`}
                  </span>
                </div>
                <div
                  className={`${reinforcement ? "text-slate-700 leading-relaxed min-h-[60px] whitespace-pre-line" : "bg-slate-50 rounded-xl border border-dashed p-6 text-center text-lg"}`}
                >
                  {question ? (
                    <MathText formatFractions={formatFractions}>
                      {question}
                    </MathText>
                  ) : (
                    <MathRenderer expression={ex.expr ?? ""} display />
                  )}
                </div>
                {ex.figure && (
                  <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 my-4 overflow-x-auto text-center">
                    <SvgExerciseFigure node={ex.figure} />
                  </div>
                )}
              </div>
              <div className="mt-4">
                {ex.options ? (
                  <div className="grid gap-2">
                    {ex.options.map((option, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => choose(ex, option)}
                        className={`rounded-xl border-2 px-4 py-3 text-left text-sm ${normalize(answers[ex.id] ?? "") === normalize(option) ? (normalize(option) === normalize(String(ex.answer ?? ex.ans ?? "")) ? "border-emerald-400 bg-emerald-50" : "border-red-300 bg-red-50") : "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50"}`}
                      >
                        <MathText>{option}</MathText>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      aria-label={`Resposta da questão ${ex.id}`}
                      value={answers[ex.id] ?? ""}
                      onChange={(e) =>
                        setAnswers((v) => ({ ...v, [ex.id]: e.target.value }))
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") check(ex);
                      }}
                      className="flex-1 border rounded-xl px-3 py-2 text-sm"
                      placeholder={
                        reinforcement
                          ? "Digite o valor de x..."
                          : "Sua resposta"
                      }
                    />
                    <button
                      onClick={() => check(ex)}
                      className={`${accent === "pink" ? "bg-pink-600 hover:bg-pink-700" : "bg-indigo-600 hover:bg-indigo-700"} text-white rounded-xl px-4 py-2 text-sm font-bold`}
                    >
                      Conferir
                    </button>
                  </div>
                )}
                <div
                  aria-live="polite"
                  className={`text-sm font-bold mt-2 min-h-5 ${feedback[ex.id] === "correct" ? "text-emerald-600" : feedback[ex.id] === "wrong" ? "text-red-600" : feedback[ex.id] === "empty" ? "text-amber-600" : ""}`}
                >
                  {feedback[ex.id] === "correct"
                    ? reinforcement
                      ? "✓ Correto! Lógica perfeita."
                      : "✓ Correto! Muito bem."
                    : feedback[ex.id] === "wrong"
                      ? (commonFeedback ??
                        (reinforcement
                          ? "✗ Ops, o valor não é esse. Revise as setas!"
                          : "✗ Ainda não. Revise os passos e tente novamente."))
                      : feedback[ex.id] === "empty"
                        ? "⚠ Digite um valor antes de conferir."
                        : ""}
                </div>
                {ex.hint && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setHintsOpen((v) =>
                          v.includes(ex.id)
                            ? v.filter((id) => id !== ex.id)
                            : [...v, ex.id],
                        )
                      }
                      className="mt-2 mr-4 text-sm font-bold text-amber-700 hover:underline"
                    >
                      💡 {hintsOpen.includes(ex.id) ? "Ocultar dica" : "Dica"}
                    </button>
                    {hintsOpen.includes(ex.id) && (
                      <div className="mt-2 rounded-xl bg-amber-50 p-3 text-sm">
                        <MathText>{ex.hint}</MathText>
                      </div>
                    )}
                  </>
                )}
                <button
                  onClick={() => toggle(ex.id)}
                  className={`mt-2 text-sm font-bold ${accent === "pink" ? "text-pink-700" : "text-indigo-700"} hover:underline`}
                >
                  👁{" "}
                  {reinforcement
                    ? "Ver Passo a Passo"
                    : "Visualizar resposta e resolução"}
                </button>
                {open.includes(ex.id) && (
                  <div className="exercise-solution mt-4 border-t pt-4">
                    <div className="text-xs uppercase tracking-widest font-black text-emerald-700 mb-3">
                      {reinforcement ? "Resolução" : "Resolução completa"}
                    </div>
                    {ex.steps.map((step, index) => {
                      const number =
                        typeof step === "string"
                          ? String(index + 1)
                          : (step[0] ?? String(index + 1));
                      const text =
                        typeof step === "string" ? step : (step[1] ?? "");
                      return (
                        <div
                          key={index}
                          className="step mb-3 text-sm whitespace-pre-line"
                          data-step={number}
                        >
                          <MathText formatFractions={formatFractions}>
                            {text}
                          </MathText>
                        </div>
                      );
                    })}
                    <div className="success rounded-xl p-4 text-center font-bold">
                      {answerDisplay}
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
