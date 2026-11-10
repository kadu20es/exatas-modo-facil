import { useState } from "react";
import { MathText } from "../../../Math/MathRenderer";

const presets = [
  [3, 4],
  [5, 12],
  [8, 15],
  [1, 1],
  [2, 3],
  [6, 8],
] as const;
const classify = (values: number[]) => {
  const [a, b, c] = [...values].sort((x, y) => x - y);
  if (a + b <= c)
    return "Não forma triângulo: a soma dos dois lados menores não é maior que o maior lado.";
  const s = a * a + b * b - c * c;
  return s === 0
    ? "Triângulo retângulo: a² + b² = c²."
    : s > 0
      ? "Triângulo acutângulo: a² + b² > c²."
      : "Triângulo obtusângulo: a² + b² < c².";
};
const fmt = (n: number) =>
  n.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
const simplifyRoot = (value: number) => {
  let outside = 1;
  let inside = value;
  for (let factor = 2; factor <= inside; factor++) {
    let count = 0;
    while (inside % factor === 0) {
      inside /= factor;
      count++;
    }
    outside *= factor ** Math.floor(count / 2);
    inside *= factor ** (count % 2);
  }
  return { outside, inside };
};

export function PitagorasLaboratorio() {
  const [a, setA] = useState(3),
    [b, setB] = useState(4);
  const [sides, setSides] = useState([3, 4, 5]);
  const [ladder, setLadder] = useState(5),
    [foot, setFoot] = useState(3);
  const [points, setPoints] = useState([-3, -2, 3, 6]);
  const c = Math.sqrt(a * a + b * b),
    tri = [...sides].sort((x, y) => x - y),
    valid = tri[0] + tri[1] > tri[2],
    cosX = valid ? (tri[1] ** 2 + tri[2] ** 2 - tri[0] ** 2) / (2 * tri[2]) : 0,
    height = valid ? Math.sqrt(Math.max(0, tri[1] ** 2 - cosX ** 2)) : 0;
  const squareScale = Math.min(330 / (a + 2 * b), 300 / (2 * a + b));
  const hypotenuseParts = simplifyRoot(a * a + b * b);
  const X = (x: number) => 20 + (x + b) * squareScale;
  const Y = (y: number) => 10 + (a + b - y) * squareScale;
  const point = (x: number, y: number) => `${X(x)},${Y(y)}`;
  const squareTriangle = [point(0, 0), point(a, 0), point(0, b)].join(" ");
  const squareA = [point(0, 0), point(a, 0), point(a, -a), point(0, -a)].join(
    " ",
  );
  const squareB = [point(0, 0), point(0, b), point(-b, b), point(-b, 0)].join(
    " ",
  );
  const squareC = [
    point(a, 0),
    point(0, b),
    point(b, a + b),
    point(a + b, a),
  ].join(" ");
  const squareViewBox = `0 0 ${Math.ceil(40 + (a + 2 * b) * squareScale)} ${Math.ceil(20 + (2 * a + b) * squareScale)}`;
  const ladderValid = foot < ladder,
    wallHeight = ladderValid ? Math.sqrt(ladder ** 2 - foot ** 2) : 0;
  const [x1, y1, x2, y2] = points,
    dx = x2 - x1,
    dy = y2 - y1,
    distance = Math.sqrt(dx * dx + dy * dy);
  const changePoint = (index: number, value: number) =>
    setPoints((old) => old.map((v, i) => (i === index ? value : v)));
  const range = (
    label: string,
    value: number,
    min: number,
    max: number,
    step: number,
    onChange: (v: number) => void,
  ) => (
    <label className="block text-sm font-bold text-slate-700">
      {label}: <span className="text-indigo-600">{fmt(value)}</span>
      <input
        aria-label={label}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full mt-1 accent-indigo-600"
      />
    </label>
  );
  return (
    <section className="space-y-7">
      <header className="bg-white rounded-3xl border p-7 shadow-sm">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
          Laboratório
        </span>
        <h1 className="text-3xl font-black mt-2">
          Experimente: mexa nas medidas e veja o teorema funcionando
        </h1>
        <p className="text-slate-600 mt-2">
          Quatro experimentos para “ver” o Teorema de Pitágoras: quadrados sobre
          os lados, reconhecimento de ângulo reto, escada na parede e distância
          no plano. É só arrastar os controles.
        </p>
      </header>
      <article className="bg-white rounded-2xl border p-6 shadow-sm">
        <h2 className="font-black text-xl">
          Experimento 1 · Os quadrados do teorema
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Escolha os catetos. O quadrado sobre a hipotenusa sempre tem a{" "}
          <b>soma</b> das áreas dos quadrados sobre os catetos.
        </p>
        <div className="grid lg:grid-cols-[300px_1fr] gap-6 mt-4">
          <div>
            {range("Cateto a", a, 1, 12, 1, setA)}
            {range("Cateto b", b, 1, 12, 1, setB)}
            <div className="flex flex-wrap gap-2 mt-3">
              {presets.map(([u, v]) => (
                <button
                  type="button"
                  key={`${u}-${v}`}
                  onClick={() => {
                    setA(u);
                    setB(v);
                  }}
                  className="border rounded-lg px-2 py-1 text-xs font-bold bg-slate-50"
                >
                  {u} e {v}
                </button>
              ))}
            </div>
            <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-3 mt-5 text-sm leading-6 text-amber-950">
              Quadrados sobre os catetos:{" "}
              <MathText>{`\\(${a}^2 = ${a * a}\\)`}</MathText> e{" "}
              <MathText>{`\\(${b}^2 = ${b * b}\\)`}</MathText>. Soma:{" "}
              <MathText>{`\\(${a * a} + ${b * b} = ${a * a + b * b}\\)`}</MathText>
              .<br />
              Quadrado sobre a hipotenusa:{" "}
              <MathText>{`\\(c^2 = ${a * a + b * b}\\)`}</MathText> ✓ (a soma!).
              <br />
              Hipotenusa:{" "}
              {Number.isInteger(c) ? (
                <>
                  <MathText>{`\\(c = \\sqrt{${a * a + b * b}} = ${c}\\)`}</MathText>
                  {` — terno pitagórico ${Math.min(a, b)}-${Math.max(a, b)}-${c}!`}
                </>
              ) : (
                <MathText>{`\\(c = \\sqrt{${a * a + b * b}}${hypotenuseParts.outside > 1 ? ` = ${hypotenuseParts.outside}\\sqrt{${hypotenuseParts.inside}}` : ""} \\approx ${fmt(c)}\\)`}</MathText>
              )}
            </div>
          </div>
          <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
            <svg
              viewBox={squareViewBox}
              className="w-full max-w-lg mx-auto h-auto"
              role="img"
              aria-label="Triângulo retângulo com quadrados sobre os três lados"
            >
              <polygon
                points={squareTriangle}
                fill="#e0e7ff"
                stroke="#4f46e5"
                strokeWidth="3"
              />
              <polygon
                points={squareA}
                fill="#fde68a"
                stroke="#d97706"
                strokeWidth="2"
              />
              <polygon
                points={squareB}
                fill="#bbf7d0"
                stroke="#059669"
                strokeWidth="2"
              />
              <polygon
                points={squareC}
                fill="#fbcfe8"
                stroke="#ec4899"
                strokeWidth="2"
              />
              <path
                d={`M${X(0)},${Y(0) - 10}h10v10`}
                fill="none"
                stroke="#ec4899"
                strokeWidth="2"
              />
              <text
                x={X(a / 2)}
                y={Y(-a / 2) + 5}
                textAnchor="middle"
                fill="#92400e"
                fontWeight="bold"
              >
                a² = {a * a}
              </text>
              <text
                x={X(-b / 2)}
                y={Y(b / 2) + 5}
                textAnchor="middle"
                fill="#166534"
                fontWeight="bold"
              >
                b² = {b * b}
              </text>
              <text
                x={X((a + b) / 2)}
                y={Y((a + b) / 2) + 5}
                textAnchor="middle"
                fill="#9d174d"
                fontWeight="bold"
              >
                c² = {a * a + b * b}
              </text>
              <text
                x={X(a / 2)}
                y={Y(0) + 18}
                textAnchor="middle"
                fill="#1e293b"
              >
                a={a}
              </text>
              <text x={X(0) - 8} y={Y(b / 2)} textAnchor="end" fill="#1e293b">
                b={b}
              </text>
            </svg>
          </div>
        </div>
      </article>
      <article className="bg-white rounded-2xl border p-6 shadow-sm">
        <h2 className="font-black text-xl">
          Experimento 2 · Retângulo ou não?
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Escolha três lados. O laboratório compara <b>a² + b²</b> com <b>c²</b>{" "}
          (c é o maior lado) e diz se o triângulo é retângulo, acutângulo ou
          obtusângulo.
        </p>
        <div className="grid lg:grid-cols-[300px_1fr] gap-6 mt-4">
          <div>
            {sides.map((v, i) =>
              range(`Lado ${i + 1}`, v, 1, 20, 1, (n) =>
                setSides((old) => old.map((x, j) => (j === i ? n : x))),
              ),
            )}
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                [3, 4, 5],
                [4, 5, 6],
                [4, 5, 7],
                [6, 8, 10],
                [5, 12, 13],
                [7, 8, 9],
              ].map((v) => (
                <button
                  type="button"
                  key={v.join("-")}
                  onClick={() => setSides(v)}
                  className="border rounded-lg px-2 py-1 text-xs font-bold bg-slate-50"
                >
                  {v.join("-")}
                </button>
              ))}
            </div>
            <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-3 mt-5 text-sm leading-6 text-amber-950">
              {classify(sides)}
              {valid && (
                <>
                  <br />
                  Compare:{" "}
                  <MathText>{`\\(${tri[0]}^2 + ${tri[1]}^2 = ${tri[0] ** 2 + tri[1] ** 2}\\)`}</MathText>{" "}
                  e <MathText>{`\\(${tri[2]}^2 = ${tri[2] ** 2}\\)`}</MathText>.
                </>
              )}
            </div>
          </div>
          <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center flex items-center justify-center min-h-48">
            <svg
              viewBox="0 0 360 220"
              className="w-full max-w-md h-auto"
              role="img"
              aria-label={`Triângulo com lados ${sides.join(", ")}`}
            >
              <polygon
                points={`35,185 ${Math.max(60, 35 + tri[2] * 28)},185 ${35 + cosX * 28},${185 - height * 28}`}
                fill={valid ? "#e0e7ff" : "none"}
                stroke="#4f46e5"
                strokeWidth="3"
              />
              <text x="120" y="210" fill="#be185d">
                c = {tri[2]}
              </text>
              <text x="40" y="100" fill="#1e293b">
                a = {tri[0]}
              </text>
              <text x="200" y="100" fill="#1e293b">
                b = {tri[1]}
              </text>
              {!valid && (
                <text
                  x="180"
                  y="110"
                  textAnchor="middle"
                  fill="#b91c1c"
                  fontWeight="bold"
                >
                  Os lados não fecham um triângulo
                </text>
              )}
            </svg>
          </div>
        </div>
      </article>
      <article className="bg-white rounded-2xl border p-6 shadow-sm">
        <h2 className="font-black text-xl">
          Experimento 3 · A escada na parede
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Escolha o comprimento da escada e o quanto o pé dela fica afastado da
          parede. O laboratório calcula a altura que ela alcança.
        </p>
        <div className="grid lg:grid-cols-[300px_1fr] gap-6 mt-4">
          <div>
            {range("Comprimento da escada (m)", ladder, 2, 10, 0.5, setLadder)}
            {range("Pé afastado da parede (m)", foot, 0.5, 9.5, 0.5, setFoot)}
            <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-3 mt-5 text-sm leading-6 text-amber-950">
              {ladderValid ? (
                <>
                  <MathText>{`\\(h^2 = ${ladder}^2 - ${foot}^2 = ${fmt(ladder * ladder)} - ${fmt(foot * foot)} = ${fmt(wallHeight * wallHeight)}\\)`}</MathText>
                  .<br />A escada alcança <b>{fmt(wallHeight)} m</b> de altura.
                </>
              ) : (
                <>
                  O pé da escada está mais longe que seu comprimento. A escada
                  não alcança a parede com essas medidas.
                </>
              )}
            </div>
          </div>
          <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center flex items-end justify-center min-h-56">
            <svg
              viewBox="0 0 380 240"
              className="w-full max-w-md h-auto"
              role="img"
              aria-label="Escada apoiada na parede"
            >
              <line
                x1="35"
                y1="205"
                x2="340"
                y2="205"
                stroke="#64748b"
                strokeWidth="4"
              />
              <line
                x1="65"
                y1="205"
                x2="65"
                y2="25"
                stroke="#64748b"
                strokeWidth="5"
              />
              <line
                x1="65"
                y1="205"
                x2={ladderValid ? Math.min(340, 65 + foot * 25) : 300}
                y2={ladderValid ? 205 - wallHeight * 25 : 205}
                stroke="#4f46e5"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M65 190h15v15"
                fill="none"
                stroke="#ec4899"
                strokeWidth="2"
              />
              <text x="68" y="115" fill="#059669">
                h = {ladderValid ? fmt(wallHeight) : "?"} m
              </text>
              <text x="160" y="230" fill="#be185d">
                d = {fmt(foot)} m
              </text>
              <text
                x="155"
                y={ladderValid ? 195 - wallHeight * 13 : 190}
                fill="#3730a3"
              >
                L = {fmt(ladder)} m
              </text>
            </svg>
          </div>
        </div>
      </article>
      <article className="bg-white rounded-2xl border p-6 shadow-sm">
        <h2 className="font-black text-xl">
          Experimento 4 · Distância no plano
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Mova os dois pontos. O “triângulo escondido” mostra os catetos e a
          distância vira a hipotenusa.
        </p>
        <div className="grid lg:grid-cols-[300px_1fr] gap-6 mt-4">
          <div className="grid grid-cols-2 gap-3">
            {points.map((v, i) =>
              range(
                `${i % 2 === 0 ? "x" : "y"} do ${i < 2 ? "A" : "B"}`,
                v,
                -8,
                8,
                1,
                (n) => changePoint(i, n),
              ),
            )}
            <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-3 mt-3 text-sm leading-6 text-amber-950 col-span-2">
              {dx === 0 && dy === 0 ? (
                "Os pontos coincidem; a distância é 0."
              ) : (
                <>
                  Catetos:{" "}
                  <MathText>{`\\(|${x2} - (${x1})| = ${Math.abs(dx)}\\)`}</MathText>{" "}
                  (horizontal) e{" "}
                  <MathText>{`\\(|${y2} - (${y1})| = ${Math.abs(dy)}\\)`}</MathText>{" "}
                  (vertical).
                  <br />
                  <MathText>{`\\(d^2 = ${dx}^2 + ${dy}^2 = ${dx * dx + dy * dy}\\)`}</MathText>
                  .<br />
                  Distância: <b>{fmt(distance)}</b>.
                </>
              )}
            </div>
          </div>
          <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
            <svg
              viewBox="0 0 400 330"
              className="w-full max-w-lg mx-auto h-auto"
              role="img"
              aria-label={`Distância entre A(${x1}, ${y1}) e B(${x2}, ${y2})`}
            >
              {Array.from({ length: 9 }, (_, i) => (
                <g key={`grid${i}`}>
                  <line
                    x1={35 + i * 40}
                    y1="25"
                    x2={35 + i * 40}
                    y2="295"
                    stroke="#e2e8f0"
                  />
                  <line
                    x1="35"
                    y1={25 + i * 33.75}
                    x2="355"
                    y2={25 + i * 33.75}
                    stroke="#e2e8f0"
                  />
                </g>
              ))}
              <line
                x1="195"
                y1="25"
                x2="195"
                y2="295"
                stroke="#475569"
                strokeWidth="2"
              />
              <line
                x1="35"
                y1="160"
                x2="355"
                y2="160"
                stroke="#475569"
                strokeWidth="2"
              />
              <polyline
                points={`${195 + x1 * 18},${160 - y1 * 15} ${195 + x2 * 18},${160 - y1 * 15} ${195 + x2 * 18},${160 - y2 * 15}`}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="3"
                strokeDasharray="6 4"
              />
              <line
                x1={195 + x1 * 18}
                y1={160 - y1 * 15}
                x2={195 + x2 * 18}
                y2={160 - y2 * 15}
                stroke="#4f46e5"
                strokeWidth="4"
              />
              <circle
                cx={195 + x1 * 18}
                cy={160 - y1 * 15}
                r="6"
                fill="#ec4899"
              />
              <circle
                cx={195 + x2 * 18}
                cy={160 - y2 * 15}
                r="6"
                fill="#ec4899"
              />
              <text x={202 + x1 * 18} y={155 - y1 * 15} fontWeight="bold">
                A
              </text>
              <text x={202 + x2 * 18} y={155 - y2 * 15} fontWeight="bold">
                B
              </text>
              <text x="205" y="315" textAnchor="middle" fill="#3730a3">
                d ≈ {fmt(distance)}
              </text>
            </svg>
          </div>
        </div>
      </article>
    </section>
  );
}
