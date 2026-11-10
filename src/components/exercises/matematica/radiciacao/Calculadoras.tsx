import { useState } from "react";
import { MathText } from "../../../Math/MathRenderer";

const parseNumber = (raw: string) => {
  const s = raw.trim().replace(",", ".");
  if (s.includes("/")) {
    const [a, b] = s.split("/").map(Number);
    if (!Number.isFinite(a) || !Number.isFinite(b) || b === 0)
      throw new Error("Valor inválido. Use números como 3, 0,25 ou 9/16.");
    return a / b;
  }
  const n = Number(s);
  if (!s || !Number.isFinite(n))
    throw new Error("Valor inválido. Use números como 3, 0,25 ou 9/16.");
  return n;
};
const simplify = (n: number) => {
  let out = 1,
    inside = Math.round(n);
  for (let p = 2; p <= inside; p++) {
    let count = 0;
    while (inside % p === 0) {
      inside /= p;
      count++;
    }
    out *= p ** Math.floor(count / 2);
    inside *= p ** (count % 2);
  }
  return { out, inside };
};
const num = (n: number) =>
  Number.isInteger(n)
    ? String(n)
    : n.toLocaleString("pt-BR", { maximumFractionDigits: 6 });

export function RadiciacaoCalculadoras() {
  const [radicand, setRadicand] = useState("72"),
    [rootResult, setRootResult] = useState<{
      steps: string[];
      final: string;
    } | null>(null),
    [rootError, setRootError] = useState("");
  const [a1, setA1] = useState("3"),
    [r1, setR1] = useState("2"),
    [op, setOp] = useState("+"),
    [a2, setA2] = useState("5"),
    [r2, setR2] = useState("2");
  const [operation, setOperation] = useState<{
      steps: string[];
      final: string;
    } | null>(null),
    [operationError, setOperationError] = useState("");
  const runRoot = () => {
    try {
      const n = parseNumber(radicand);
      if (n < 0)
        throw new Error(
          "Não existe raiz quadrada real de número negativo (por enquanto).",
        );
      const root = Math.sqrt(n);
      let steps: string[];
      let final: string;
      if (Number.isInteger(n)) {
        if (n > 1e9) throw new Error("Use um número até 1 000 000 000.");
        const s = simplify(n);
        steps = [
          `Fatore o radicando: ${n}. Procure pares de fatores iguais.`,
          s.out > 1
            ? `Os pares saem da raiz como ${s.out}. O que não forma par permanece dentro.`
            : `Não há pares de fatores iguais; a raiz não é exata e não dá para simplificar.`,
          `Compare os quadrados perfeitos próximos para estimar o valor.`,
        ];
        final =
          s.inside === 1
            ? `√${n} = ${s.out}`
            : `√${n} = ${s.out === 1 ? "" : s.out + "√"}${s.inside} ≈ ${num(root)}`;
      } else {
        steps = [
          `Escreva o número como fração, se necessário: ${num(n)}.`,
          "A raiz de uma fração é a raiz de cima dividida pela raiz de baixo.",
          `Valor aproximado (calculadora): √${num(n)} ≈ ${num(root)}.`,
        ];
        final = `√${num(n)} ≈ ${num(root)}`;
      }
      setRootResult({ steps, final });
      setRootError("");
    } catch (e) {
      setRootError((e as Error).message);
      setRootResult(null);
    }
  };
  const runOperation = () => {
    try {
      const c1 = parseNumber(a1),
        c2 = parseNumber(a2),
        n1 = Number(r1),
        n2 = Number(r2);
      if (
        !Number.isInteger(c1) ||
        !Number.isInteger(c2) ||
        !Number.isInteger(n1) ||
        !Number.isInteger(n2) ||
        n1 < 1 ||
        n2 < 1
      )
        throw new Error(
          "Use coeficientes inteiros e radicandos inteiros positivos.",
        );
      const x = simplify(n1),
        y = simplify(n2),
        left = c1 * x.out,
        right = c2 * y.out;
      let steps = [
        `Expressão: ${left === 1 ? "" : left + "√"}${x.inside} ${op === "*" ? "·" : op === "/" ? "÷" : op} ${right === 1 ? "" : right + "√"}${y.inside}.`,
      ];
      let final = "";
      if (op === "+" || op === "-") {
        if (x.inside === y.inside) {
          const val = left + (op === "+" ? 1 : -1) * right;
          steps.push(
            `Os radicais são semelhantes (mesmo √${x.inside}): opere os números de fora.`,
          );
          final =
            x.inside === 1
              ? String(val)
              : `${val === 1 ? "" : val + "√"}${x.inside}`;
        } else {
          steps.push(
            `Os radicandos são diferentes (√${x.inside} e √${y.inside}): não dá para juntar. A resposta fica indicada.`,
          );
          final = `${left === 1 ? "" : left + "√"}${x.inside} ${op} ${right === 1 ? "" : right + "√"}${y.inside} ≈ ${num(left * Math.sqrt(x.inside) + (op === "+" ? 1 : -1) * right * Math.sqrt(y.inside))}`;
        }
      } else if (op === "*") {
        const s = simplify(x.inside * y.inside),
          c = left * right * s.out;
        steps.push(
          `Fora com fora: ${left} · ${right}. Dentro com dentro: ${x.inside} · ${y.inside} = ${x.inside * y.inside}.`,
        );
        final =
          s.inside === 1 ? String(c) : `${c === 1 ? "" : c + "√"}${s.inside}`;
      } else {
        if (c2 === 0) throw new Error("Não existe divisão por zero.");
        steps.push(
          "Para dividir, simplifique os radicais e reduza a fração dos coeficientes.",
        );
        final = `(${left === 1 ? "" : left + "√"}${x.inside}) ÷ (${right === 1 ? "" : right + "√"}${y.inside}) ≈ ${num((left * Math.sqrt(x.inside)) / (right * Math.sqrt(y.inside)))}`;
      }
      setOperation({ steps, final });
      setOperationError("");
    } catch (e) {
      setOperationError((e as Error).message);
      setOperation(null);
    }
  };
  return (
    <section className="space-y-6">
      <div className="bg-white rounded-3xl border p-7 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
          Calculadoras passo a passo
        </span>
        <h1 className="text-3xl font-black mt-2">
          Digite o seu problema e veja a resolução
        </h1>
        <p className="text-slate-600 mt-2">
          Cada calculadora mostra a conta no formato que você faria no papel.
          Aceita números inteiros, decimais (
          <kbd className="rounded bg-slate-100 px-1">0,25</kbd>) e frações (
          <kbd className="rounded bg-slate-100 px-1">9/16</kbd>). Use para{" "}
          <b>conferir</b> o que você fez.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <article className="bg-white rounded-2xl border p-6 shadow-sm">
          <h2 className="font-black text-lg">Raiz quadrada passo a passo</h2>
          <label className="text-xs font-bold text-slate-600 block mt-4">
            Número dentro da raiz (inteiro, decimal ou fração)
            <input
              value={radicand}
              onChange={(e) => setRadicand(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && runRoot()}
              className="border rounded-xl p-2 w-full mt-1 text-sm"
            />
          </label>
          <button
            type="button"
            onClick={runRoot}
            className="mt-3 w-full bg-indigo-600 text-white rounded-xl py-3 font-bold"
          >
            Resolver passo a passo
          </button>
          {rootError && (
            <div className="warning p-4 rounded-xl mt-4">{rootError}</div>
          )}
          {rootResult && (
            <div className="paper rounded-xl p-5 mt-4 text-sm space-y-3">
              {rootResult.steps.map((s, i) => (
                <div key={i} className="step" data-step={i + 1}>
                  <MathText>{s}</MathText>
                </div>
              ))}
              <div className="success rounded-xl p-4 text-center font-bold">
                <MathText>{rootResult.final}</MathText>
              </div>
            </div>
          )}
        </article>
        <article className="bg-white rounded-2xl border p-6 shadow-sm">
          <h2 className="font-black text-lg">Operações com radicais</h2>
          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            {[
              [a1, setA1, "Primeiro radical: número de fora"],
              [r1, setR1, "Primeiro radical: número dentro da raiz"],
              [a2, setA2, "Segundo radical: número de fora"],
              [r2, setR2, "Segundo radical: número dentro da raiz"],
            ].map(([v, set, label]) => (
              <label
                key={String(label)}
                className="text-xs font-bold text-slate-600"
              >
                {String(label)}
                <input
                  value={String(v)}
                  onChange={(e) =>
                    (set as (value: string) => void)(e.target.value)
                  }
                  className="border rounded-xl p-2 w-full mt-1 text-sm"
                />
              </label>
            ))}
            <label className="text-xs font-bold text-slate-600">
              Operação
              <select
                value={op}
                onChange={(e) => setOp(e.target.value)}
                className="border rounded-xl p-2 w-full mt-1 text-sm bg-white"
              >
                {[
                  ["+", "Somar (+)"],
                  ["-", "Subtrair (−)"],
                  ["*", "Multiplicar (×)"],
                  ["/", "Dividir (÷)"],
                ].map(([v, l]) => (
                  <option key={v} value={v}>
                    {l}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button
            type="button"
            onClick={runOperation}
            className="mt-3 w-full bg-pink-600 text-white rounded-xl py-3 font-bold"
          >
            Resolver passo a passo
          </button>
          {operationError && (
            <div className="warning p-4 rounded-xl mt-4">{operationError}</div>
          )}
          {operation && (
            <div className="paper rounded-xl p-5 mt-4 text-sm space-y-3">
              {operation.steps.map((s, i) => (
                <div key={i} className="step" data-step={i + 1}>
                  <MathText>{s}</MathText>
                </div>
              ))}
              <div className="success rounded-xl p-4 text-center font-bold">
                <MathText>{operation.final}</MathText>
              </div>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
