import { useState } from "react";
import { MathText } from "../../../Math/MathRenderer";

const fmt = (n: number, digits = 2) =>
  n.toLocaleString("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
const factors = (n: number) => {
  const out: number[] = [];
  for (let p = 2; p <= n; p++)
    while (n % p === 0) {
      out.push(p);
      n /= p;
    }
  return out;
};

export function RadiciacaoExperimentos() {
  const [area, setArea] = useState(20);
  const [target, setTarget] = useState("20");
  const [guess, setGuess] = useState(400);
  const [radicand, setRadicand] = useState(72);
  const root = Math.sqrt(area),
    lower = Math.floor(root),
    leftover = area - lower * lower;
  const guessValue = guess / 100,
    difference = guessValue ** 2 - Number(target);
  const primeFactors = factors(radicand),
    counts = primeFactors.reduce<Record<number, number>>(
      (acc, p) => ({ ...acc, [p]: (acc[p] ?? 0) + 1 }),
      {},
    );
  const outside = Object.entries(counts).reduce(
    (a, [p, count]) => a * Number(p) ** Math.floor(count / 2),
    1,
  );
  const inside = Object.entries(counts).reduce(
    (a, [p, count]) => a * Number(p) ** (count % 2),
    1,
  );
  return (
    <section className="space-y-6">
      <header className="bg-white rounded-3xl border p-7 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
          Laboratório
        </span>
        <h1 className="text-3xl font-black mt-2">
          Experimente: mexa nos números e veja as raízes funcionando
        </h1>
        <p className="text-slate-600 mt-2">
          Três experimentos para “sentir” a raiz quadrada: como lado do
          quadrado, como busca por tentativa e como simplificação. É só arrastar
          os controles.
        </p>
      </header>
      <article className="bg-white rounded-2xl border p-6 shadow-sm">
        <h2 className="font-black text-xl">
          Experimento 1 · Quadrados e raízes
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Escolha a <b>área</b> de um quadrado. Veja se o lado é um número
          inteiro (quadrado perfeito) ou se fica no meio do caminho.
        </p>
        <div className="grid lg:grid-cols-[300px_1fr] gap-6 mt-4">
          <div>
            <label className="font-bold text-sm block">
              Área: <span className="text-indigo-600">{area}</span> unidades
              quadradas
            </label>
            <input
              aria-label="Área do quadrado"
              type="range"
              min="1"
              max="150"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full mt-2 accent-indigo-600"
            />
            <div className="flex flex-wrap gap-2 mt-3">
              {[9, 16, 20, 49, 50, 100].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setArea(v)}
                  className="border rounded-lg px-2 py-1 text-xs font-bold bg-slate-50"
                >
                  {v}
                </button>
              ))}
            </div>
            <div className="tip rounded-xl p-3 mt-5 text-sm leading-6">
              {leftover === 0 ? (
                <>
                  <b>✓ Quadrado perfeito!</b> {area} quadradinho
                  {area > 1 ? "s" : ""} formam um quadrado {lower}×{lower}.
                  Então <MathText>{`\\(\\sqrt{${area}} = ${lower}\\)`}</MathText>.
                </>
              ) : (
                <>
                  {area} quadradinhos <b>não</b> formam um quadrado perfeito: o
                  maior bloco quadrado é {lower}×{lower} ({lower * lower}) e
                  sobram <b>{leftover}</b>.<br />
                  Como{" "}
                  <MathText>{`\\(${lower}^2 = ${lower * lower} < ${area} < ${(lower + 1) ** 2} = ${lower + 1}^2\\)`}</MathText>
                  , temos{" "}
                  <MathText>{`\\(${lower} < \\sqrt{${area}} < ${lower + 1}\\)`}</MathText>
                  .<br />
                  Valor aproximado:{" "}
                  <MathText>{`\\(\\sqrt{${area}} \\approx ${fmt(root)}\\)`}</MathText>
                  .
                </>
              )}
            </div>
          </div>
          <div className="figbox">
            <svg
              viewBox={`0 0 ${Math.max(150, (lower + 1) * 20 + 20)} ${Math.max(120, (lower + 2) * 20 + 30)}`}
              className="mx-auto max-w-full h-auto"
              role="img"
              aria-label={`Representação de ${area} quadradinhos`}
            >
              {Array.from({ length: lower * lower }, (_, i) => (
                <rect
                  key={`sq${i}`}
                  x={10 + (i % lower) * 20}
                  y={10 + Math.floor(i / lower) * 20}
                  width="20"
                  height="20"
                  fill="#e0e7ff"
                  stroke="#4f46e5"
                  strokeWidth="1.5"
                />
              ))}
              {Array.from({ length: leftover }, (_, i) => (
                <rect
                  key={`ex${i}`}
                  x={10 + (i % (lower + 1)) * 20}
                  y={10 + lower * 20 + 6 + Math.floor(i / (lower + 1)) * 20}
                  width="20"
                  height="20"
                  fill="#fbcfe8"
                  stroke="#ec4899"
                  strokeWidth="1.5"
                />
              ))}
              <text
                x="12"
                y={Math.max(110, (lower + 2) * 20 + 16)}
                fontSize="12"
                fontWeight="700"
                fill="#1e293b"
              >
                {leftover === 0
                  ? `lado = ${lower}`
                  : `bloco ${lower}×${lower} + ${leftover} sobrando`}
              </text>
            </svg>
          </div>
        </div>
      </article>
      <article className="bg-white rounded-2xl border p-6 shadow-sm">
        <h2 className="font-black text-xl">
          Experimento 2 · Caçador de raízes (tentativa e erro)
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Escolha um número e dê palpites para a raiz dele. O palpite ao
          quadrado precisa chegar perto do número. Tente chegar com{" "}
          <b>duas casas decimais</b>!
        </p>
        <div className="grid lg:grid-cols-[300px_1fr] gap-6 mt-4">
          <div>
            <label className="font-bold text-sm block" htmlFor="rad-target">
              Descubra a raiz de
            </label>
            <select
              id="rad-target"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="border rounded-xl p-2 w-full mt-2 text-sm bg-white"
            >
              {[
                ["2", "2"],
                ["3", "3"],
                ["5", "5"],
                ["7", "7"],
                ["10", "10"],
                ["20", "20"],
                ["50", "50"],
                ["2.25", "2,25"],
              ].map(([v, l]) => (
                <option key={v} value={v}>
                  {l}
                </option>
              ))}
            </select>
            <label className="font-bold text-sm block mt-5">
              Meu palpite:{" "}
              <span className="text-indigo-600">{fmt(guessValue)}</span>
            </label>
            <input
              aria-label="Meu palpite"
              type="range"
              min="0"
              max="1000"
              value={guess}
              onChange={(e) => setGuess(Number(e.target.value))}
              className="w-full mt-2 accent-indigo-600"
            />
            <div className="flex gap-2 mt-2">
              <button
                type="button"
                onClick={() => setGuess((v) => Math.max(0, v - 1))}
                className="border rounded-lg px-3 py-1 text-sm font-bold bg-slate-50"
              >
                − 0,01
              </button>
              <button
                type="button"
                onClick={() => setGuess((v) => Math.min(1000, v + 1))}
                className="border rounded-lg px-3 py-1 text-sm font-bold bg-slate-50"
              >
                + 0,01
              </button>
            </div>
            <div className="tip rounded-xl p-3 mt-5 text-sm leading-6">
              Palpite {fmt(guessValue)}:{" "}
              <MathText>{`\\(${fmt(guessValue).replace(",", "{,}")}^2 = ${fmt(guessValue ** 2, 4).replace(",", "{,}")}\\)`}</MathText>
              .<br />
              {Math.abs(difference) < 1e-9 ? (
                <>
                  <b>🎯 Exato!</b>{" "}
                  <MathText>{`\\(\\sqrt{${target.replace(".", "{,}")}} = ${fmt(guessValue).replace(",", "{,}")}\\)`}</MathText>
                  .
                </>
              ) : Math.abs(difference) <
                0.0101 * Math.max(1, Number(target) / 5) ? (
                <>
                  🔥 <b>Muito perto!</b> {difference > 0 ? "Passou" : "Faltou"}{" "}
                  só {fmt(Math.abs(difference), 4)}. Então{" "}
                  <MathText>{`\\(\\sqrt{${target.replace(".", "{,}")}} \\approx ${fmt(guessValue).replace(",", "{,}")}\\)`}</MathText>
                  .
                </>
              ) : difference > 0 ? (
                <>
                  ⬆️ <b>Passou</b> do alvo por {fmt(difference, 4)}. Diminua o
                  palpite.
                </>
              ) : (
                <>
                  ⬇️ <b>Faltou</b> {fmt(-difference, 4)}. Aumente o palpite.
                </>
              )}
            </div>
          </div>
          <div className="figbox">
            <svg
              viewBox="0 0 330 118"
              className="mx-auto max-w-full h-auto"
              role="img"
              aria-label="Comparação entre o quadrado do palpite e o alvo"
            >
              <text x="10" y="18" fontSize="13" fontWeight="700" fill="#1e293b">
                palpite² = {fmt(guessValue ** 2, 4)}
              </text>
              <rect
                x="10"
                y="24"
                width={Math.max(
                  2,
                  (guessValue ** 2 /
                    Math.max(Number(target), guessValue ** 2, 1) /
                    1.1) *
                    300,
                )}
                height="22"
                fill="#ec4899"
                rx="4"
              />
              <text x="10" y="78" fontSize="13" fontWeight="700" fill="#1e293b">
                alvo = {target.replace(".", ",")}
              </text>
              <rect
                x="10"
                y="84"
                width={Math.max(
                  2,
                  (Number(target) /
                    Math.max(Number(target), guessValue ** 2, 1) /
                    1.1) *
                    300,
                )}
                height="22"
                fill="#4f46e5"
                rx="4"
              />
            </svg>
          </div>
        </div>
      </article>
      <article className="bg-white rounded-2xl border p-6 shadow-sm">
        <h2 className="font-black text-xl">
          Experimento 3 · Simplificador de raízes
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Escolha um radicando. O laboratório decompõe em fatores primos, forma
          os pares e tira do radical o que dá para tirar.
        </p>
        <div className="grid lg:grid-cols-[300px_1fr] gap-6 mt-4">
          <div>
            <label className="font-bold text-sm block">
              Número dentro da raiz:{" "}
              <span className="text-indigo-600">{radicand}</span>
            </label>
            <input
              aria-label="Número dentro da raiz"
              type="range"
              min="2"
              max="300"
              value={radicand}
              onChange={(e) => setRadicand(Number(e.target.value))}
              className="w-full mt-2 accent-indigo-600"
            />
            <div className="flex flex-wrap gap-2 mt-3">
              {[12, 18, 50, 72, 98, 200].map((v) => (
                <button
                  type="button"
                  key={v}
                  onClick={() => setRadicand(v)}
                  className="border rounded-lg px-2 py-1 text-xs font-bold bg-slate-50"
                >
                  √{v}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="figbox">
              <div className="flex flex-wrap gap-2 justify-center">
                {Object.entries(counts)
                  .sort(([a], [b]) => Number(a) - Number(b))
                  .flatMap(([p, count]) =>
                    [
                      ...Array(Math.floor(count / 2)).fill("pair"),
                      ...(count % 2 ? ["left"] : []),
                    ].map((kind, i) => (
                      <span
                        key={`${p}-${kind}-${i}`}
                        className={`inline-flex items-center justify-center rounded-xl h-10 ${kind === "pair" ? "w-20 bg-indigo-100 border-2 border-indigo-500 text-indigo-900" : "w-10 bg-pink-100 border-2 border-pink-500 text-pink-900"} font-bold`}
                      >
                        {kind === "pair" ? `${p} · ${p}` : p}
                      </span>
                    )),
                  )}
              </div>
              <div className="flex justify-between text-xs font-bold mt-3">
                <span className="text-indigo-700">pares (saem da raiz)</span>
                <span className="text-pink-700">sobra (fica dentro)</span>
              </div>
            </div>
            <div className="paper rounded-xl p-4 mt-4 text-sm leading-7">
              <div>
                Fatoração:{" "}
                <MathText>{`\\(${radicand} = ${primeFactors.join(" \\cdot ")}${
                  primeFactors.length > 1
                    ? ` = ${Object.entries(counts)
                        .map(([p, n]) => (n > 1 ? `${p}^{${n}}` : p))
                        .join(" \\cdot ")}`
                    : ""
                }\\)`}</MathText>
              </div>
              <div>
                {inside === 1 ? (
                  <>
                    Todos os fatores formam pares ⇒ <b>quadrado perfeito</b>:{" "}
                    <MathText>{`\\(\\sqrt{${radicand}} = ${outside}\\)`}</MathText>
                    .
                  </>
                ) : outside === 1 ? (
                  <>
                    Nenhum par ⇒ <MathText>{`\\sqrt{${radicand}}`}</MathText>{" "}
                    não pode ser simplificada.
                  </>
                ) : (
                  <>
                    Cada par sai como um fator: sai{" "}
                    <MathText>{`\\(${outside}\\)`}</MathText>, sobra{" "}
                    <MathText>{`\\(${inside}\\)`}</MathText> dentro.{" "}
                    <MathText>{`\\(\\sqrt{${radicand}} = ${outside}\\sqrt{${inside}}\\)`}</MathText>
                    .
                  </>
                )}
                <br />
                Valor aproximado:{" "}
                <MathText>{`\\(\\sqrt{${radicand}} \\approx ${fmt(Math.sqrt(radicand))}\\)`}</MathText>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
