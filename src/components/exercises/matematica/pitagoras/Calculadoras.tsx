import { useState } from "react";
import { MathText } from "../../../Math/MathRenderer";

type Values = Record<string, string>;
type Result = { steps: string[]; final: string };
type Field = {
  id: string;
  label: string;
  value: string;
  options?: readonly (readonly [string, string])[];
};
function ToolCard({
  title,
  color,
  fields,
  solve,
}: {
  title: string;
  color: string;
  fields: Field[];
  solve: (v: Values) => Result;
}) {
  const [values, setValues] = useState<Values>(() =>
      Object.fromEntries(fields.map((f) => [f.id, f.value])),
    ),
    [result, setResult] = useState<Result | null>(null),
    [error, setError] = useState("");
  const update = (id: string, value: string) =>
    setValues((old) => ({ ...old, [id]: value }));
  const run = () => {
    try {
      setResult(solve(values));
      setError("");
    } catch (e) {
      setResult(null);
      setError((e as Error).message);
    }
  };
  return (
    <article className="bg-white rounded-2xl border p-6 shadow-sm">
      <h2 className="font-black text-lg">{title}</h2>
      <div
        className={`grid gap-3 mt-4 grid-cols-1 ${fields.length > 1 ? "sm:grid-cols-2" : ""}`}
      >
        {fields.map((f) => (
          <label key={f.id} className="text-xs font-bold text-slate-600">
            {f.label}
            {f.options ? (
              <select
                value={values[f.id]}
                onChange={(e) => update(f.id, e.target.value)}
                className="border rounded-xl p-2 w-full mt-1 text-sm bg-white"
              >
                {f.options.map(([v, l]) => (
                  <option value={v} key={v}>
                    {l}
                  </option>
                ))}
              </select>
            ) : (
              <input
                value={values[f.id]}
                onChange={(e) => update(f.id, e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && run()}
                className="border rounded-xl p-2 w-full mt-1 text-sm"
              />
            )}
          </label>
        ))}
      </div>
      <button
        type="button"
        onClick={run}
        className={`mt-3 w-full ${color} text-white rounded-xl py-3 font-bold`}
      >
        Resolver passo a passo
      </button>
      {error && (
        <div className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 mt-4 text-sm text-red-900">
          {error}
        </div>
      )}
      {result && (
        <div className="bg-[#fffef9] border border-indigo-200 bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4 text-sm space-y-3">
          {result.steps.map((s, i) => (
            <div className="step" data-step={i + 1} key={i}>
              <MathText>{s}</MathText>
            </div>
          ))}
          <div className="border-l-4 border-emerald-500 bg-emerald-50 text-emerald-900 rounded-xl p-4 text-center font-bold">
            <MathText>{result.final}</MathText>
          </div>
        </div>
      )}
    </article>
  );
}
const n = (v: string, label: string) => {
  const x = Number(v.trim().replace(",", "."));
  if (!v.trim() || !Number.isFinite(x))
    throw new Error(
      `Valor inválido em “${label}”. Use números como 3, 2,5 ou -4.`,
    );
  return x;
};
const fmt = (x: number) =>
  Number.isInteger(x)
    ? String(x)
    : x.toLocaleString("pt-BR", { maximumFractionDigits: 4 });
const root = (x: number) =>
  Number.isInteger(x) && Math.sqrt(x) % 1 === 0
    ? String(Math.sqrt(x))
    : `\\sqrt{${fmt(x)}} \\approx ${fmt(Math.sqrt(x))}`;
const unit = (v: string) =>
  v.trim() ? `\\text{ ${v.trim().slice(0, 6)}}` : "";

export function PitagorasCalculadoras() {
  const pythagoras = (v: Values): Result => {
    const a = n(v.v1, "1ª medida"),
      b = n(v.v2, "2ª medida"),
      u = unit(v.u);
    if (a <= 0 || b <= 0)
      throw new Error("As medidas precisam ser maiores que zero.");
    let value: number, steps: string[], name: string;
    if (v.q === "hip") {
      value = a * a + b * b;
      name = "Hipotenusa c";
      steps = [
        `Procuro a hipotenusa (soma). Catetos: ${fmt(a)} e ${fmt(b)}.`,
        `Fórmula: \\(c^2 = a^2 + b^2\\).`,
        `Substitua: \\(c^2 = ${fmt(a)}^2 + ${fmt(b)}^2 = ${fmt(a * a)} + ${fmt(b * b)}\\).`,
        `Some: \\(c^2 = ${fmt(value)}\\).`,
        `Tire a raiz: \\(c = ${root(value)}\\).`,
      ];
    } else {
      if (b <= a)
        throw new Error(
          "A hipotenusa (2ª medida) precisa ser maior que o cateto (1ª medida).",
        );
      value = b * b - a * a;
      name = "Outro cateto";
      steps = [
        `Procuro um cateto (subtração). Cateto: ${fmt(a)}; hipotenusa: ${fmt(b)}.`,
        `Fórmula: \\(a^2 + b^2 = c^2\\), então \\(x^2 = c^2 - a^2\\).`,
        `Substitua: \\(x^2 = ${fmt(b)}^2 - ${fmt(a)}^2 = ${fmt(b * b)} - ${fmt(a * a)} = ${fmt(value)}\\).`,
        `Tire a raiz: \\(x = ${root(value)}\\).`,
      ];
    }
    steps.push(
      v.q === "hip"
        ? "Confira: a hipotenusa deve ser maior que cada cateto ✓."
        : "Confira: o cateto deve ser menor que a hipotenusa ✓.",
    );
    return { steps, final: `\\(${name} = ${root(value)}${u}\\)` };
  };
  const classify = (v: Values): Result => {
    const values = v.l
      .split(/[;\s]+/)
      .filter(Boolean)
      .map((x) => n(x, "lado"))
      .sort((a, b) => a - b);
    if (values.length !== 3)
      throw new Error("Digite exatamente três medidas, por exemplo: 6; 8; 10.");
    if (values.some((value) => value <= 0))
      throw new Error("Cada medida precisa ser maior que zero.");
    const [a, b, c] = values,
      steps = [
        `Ordene: o maior lado é c = ${fmt(c)}; os outros são a = ${fmt(a)} e b = ${fmt(b)}.`,
      ];
    if (a + b <= c)
      return {
        steps: [
          ...steps,
          `Desigualdade triangular: ${fmt(a)} + ${fmt(b)} = ${fmt(a + b)} não é maior que ${fmt(c)}.`,
        ],
        final: "Não forma um triângulo.",
      };
    steps.push(
      `Desigualdade triangular: ${fmt(a + b)} > ${fmt(c)} ✓ (o triângulo existe).`,
      `Compare a² + b² com c²: ${fmt(a * a)} + ${fmt(b * b)} = ${fmt(a * a + b * b)} e ${fmt(c)}² = ${fmt(c * c)}.`,
    );
    const s = a * a + b * b,
      classification =
        s === c * c
          ? "retângulo (ângulo reto oposto ao maior lado)"
          : s > c * c
            ? "acutângulo (três ângulos agudos)"
            : "obtusângulo (um ângulo obtuso)";
    steps.push(
      s === c * c
        ? "Iguais ⇒ vale a recíproca do teorema."
        : `${s > c * c ? "a² + b² > c²" : "a² + b² < c²"} ⇒ ${classification}.`,
    );
    const sides =
      a === b && b === c
        ? "equilátero"
        : a === b || b === c
          ? "isósceles"
          : "escaleno";
    steps.push(`Pelos lados: ${sides}.`);
    return { steps, final: `Triângulo ${classification}, ${sides}.` };
  };
  const distance = (v: Values): Result => {
    const x1 = n(v.x1, "x de A"),
      y1 = n(v.y1, "y de A"),
      x2 = n(v.x2, "x de B"),
      y2 = n(v.y2, "y de B"),
      dx = x2 - x1,
      dy = y2 - y1,
      sq = dx * dx + dy * dy;
    return {
      steps: [
        `Pontos: A(${fmt(x1)}, ${fmt(y1)}) e B(${fmt(x2)}, ${fmt(y2)}).`,
        `Catetos do “triângulo escondido”: Δx = ${fmt(x2)} − (${fmt(x1)}) = ${fmt(dx)} e Δy = ${fmt(y2)} − (${fmt(y1)}) = ${fmt(dy)}.`,
        `Fórmula: d² = (Δx)² + (Δy)² = ${fmt(dx)}² + ${fmt(dy)}² = ${fmt(sq)}. (O quadrado apaga o sinal.)`,
        `Tire a raiz: d = ${root(sq)}.`,
      ],
      final: `\\(Distância\\ d = ${root(sq)}\\)`,
    };
  };
  const diagonals = (v: Values): Result => {
    const measures = v.m
      .split(/[;\s]+/)
      .filter(Boolean)
      .map((x) => n(x, "medida"));
    const type = v.f,
      need = type === "ret" || type === "isos" ? 2 : type === "caixa" ? 3 : 1;
    if (measures.length < need)
      throw new Error(
        `Esta figura precisa de ${need} medida(s), separadas por ponto e vírgula.`,
      );
    if (measures.some((x) => x <= 0))
      throw new Error("As medidas precisam ser maiores que zero.");
    const [a, b, c] = measures,
      un = unit(v.u);
    let val: number,
      name = "Diagonal d",
      steps: string[] = [];
    if (type === "quad" || type === "cubo") {
      const k = type === "quad" ? 2 : 3;
      steps = [
        `${type === "quad" ? "Quadrado" : "Cubo"} de ${type === "quad" ? "lado" : "aresta"} ${fmt(a)}.`,
        type === "quad"
          ? `A diagonal é a hipotenusa de um triângulo retângulo com catetos ${fmt(a)} e ${fmt(a)}: d² = ${fmt(a * a)} + ${fmt(a * a)} = ${fmt(2 * a * a)}.`
          : `Diagonal da face: ℓ√2; depois, com a altura ℓ, d² = (ℓ√2)² + ℓ² = 3ℓ².`,
        `Resultado: d = ${fmt(a)}√${k}.`,
      ];
      val = a * Math.sqrt(k);
    } else if (type === "equi") {
      val = (a * Math.sqrt(3)) / 2;
      name = "Altura h";
      steps = [
        `Triângulo equilátero de lado ${fmt(a)}. A altura corta a base ao meio: cateto ${fmt(a / 2)}.`,
        `h² = ${fmt(a)}² − ${fmt(a / 2)}² = ${fmt(a * a - (a * a) / 4)}.`,
        `Fórmula direta: h = ℓ√3 ÷ 2.`,
      ];
    } else if (type === "ret") {
      val = Math.sqrt(a * a + b * b);
      steps = [
        `Retângulo ${fmt(a)} × ${fmt(b)}: a diagonal é a hipotenusa.`,
        `d² = ${fmt(a * a)} + ${fmt(b * b)} = ${fmt(a * a + b * b)}.`,
        `d = ${root(a * a + b * b)}.`,
      ];
    } else if (type === "isos") {
      if (b <= a / 2)
        throw new Error("O lado igual precisa ser maior que a metade da base.");
      val = Math.sqrt(b * b - (a / 2) ** 2);
      name = "Altura h";
      steps = [
        `Triângulo isósceles: base ${fmt(a)}, lados iguais ${fmt(b)}. A altura divide a base ao meio: cateto ${fmt(a / 2)}.`,
        `h² = ${fmt(b * b)} − ${fmt((a / 2) ** 2)} = ${fmt(b * b - (a / 2) ** 2)}.`,
        `h = ${root(b * b - (a / 2) ** 2)}.`,
      ];
    } else {
      val = Math.sqrt(a * a + b * b + c * c);
      steps = [
        `Caixa ${fmt(a)} × ${fmt(b)} × ${fmt(c)}. A diagonal da base e a altura formam outro triângulo retângulo, então d² = a² + b² + c².`,
        `d² = ${fmt(a * a)} + ${fmt(b * b)} + ${fmt(c * c)} = ${fmt(a * a + b * b + c * c)}.`,
        `d = ${root(a * a + b * b + c * c)}.`,
      ];
    }
    return { steps, final: `\\(${name} = ${root(val * val)}${un}\\)` };
  };
  const fieldsP: Field[] = [
    {
      id: "q",
      label: "O que você procura?",
      value: "hip",
      options: [
        ["hip", "A hipotenusa (dados os dois catetos)"],
        ["cat", "Um cateto (dados o outro cateto e a hipotenusa)"],
      ],
    },
    { id: "u", label: "Unidade (opcional)", value: "cm" },
    { id: "v1", label: "Cateto conhecido (1º)", value: "3" },
    {
      id: "v2",
      label:
        "Se procura hipotenusa: o outro cateto. Se procura cateto: a hipotenusa.",
      value: "4",
    },
  ];
  const fieldsDiag: Field[] = [
    {
      id: "f",
      label: "Figura",
      value: "quad",
      options: [
        ["quad", "Diagonal do quadrado (lado)"],
        ["ret", "Diagonal do retângulo (base; altura)"],
        ["equi", "Altura do triângulo equilátero (lado)"],
        ["isos", "Altura do triângulo isósceles (base; lado igual)"],
        ["caixa", "Diagonal da caixa (a; b; c)"],
        ["cubo", "Diagonal do cubo (aresta)"],
      ],
    },
    { id: "m", label: "Medidas (separe por ponto e vírgula)", value: "5" },
    { id: "u", label: "Unidade (opcional)", value: "cm" },
  ];
  return (
    <section className="space-y-7">
      <header className="bg-white rounded-3xl border p-7 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
          Calculadoras passo a passo
        </span>
        <h1 className="text-3xl font-black mt-2">
          Digite o seu problema e veja a resolução
        </h1>
        <p className="text-slate-600 mt-2">
          Cada calculadora mostra a conta no formato que você faria no papel.
          Aceita números inteiros e decimais (2,5). Use para <b>conferir</b> o
          que você fez.
        </p>
      </header>
      <div className="grid lg:grid-cols-2 gap-6">
        <ToolCard
          title="Teorema de Pitágoras passo a passo"
          color="bg-indigo-600"
          fields={fieldsP}
          solve={pythagoras}
        />
        <ToolCard
          title="Classificar triângulo pelos lados"
          color="bg-pink-600"
          fields={[
            {
              id: "l",
              label: "Três lados (separe por ponto e vírgula)",
              value: "6; 8; 10",
            },
          ]}
          solve={classify}
        />
        <ToolCard
          title="Distância entre dois pontos"
          color="bg-emerald-600"
          fields={[
            { id: "x1", label: "x do ponto A", value: "-3" },
            { id: "y1", label: "y do ponto A", value: "-1" },
            { id: "x2", label: "x do ponto B", value: "2" },
            { id: "y2", label: "y do ponto B", value: "11" },
          ]}
          solve={distance}
        />
        <ToolCard
          title="Diagonais e alturas"
          color="bg-amber-600"
          fields={fieldsDiag}
          solve={diagonals}
        />
      </div>
    </section>
  );
}
