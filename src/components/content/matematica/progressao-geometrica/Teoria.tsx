import { useState, type MouseEvent } from "react";
import CourseHeader from "../../../header/CourseHeader.component";
import { MathText } from "../../../Math/MathRenderer";
import { geometricProgressionLevels } from "../../../../data/matematica/progressao-geometrica/exercicios";

const QUICK = [
  { q: String.raw`Quanto vale \((-3)^3\)?`, a: "-27" },
  { q: String.raw`Quanto vale \(3 \cdot 2^4\)?`, a: "48" },
  { q: String.raw`Qual é a razão da P.G. \((4,\;12,\;36,\;\ldots)\)?`, a: "3" },
  {
    q: String.raw`Qual é a razão da P.G. \((80,\;40,\;20,\;\ldots)\)? (digite como fração, ex.: 1/2)`,
    a: "1/2",
  },
  {
    q: String.raw`Qual é o 5º termo da P.G. com \(a_1 = 2\) e \(q = 3\)?`,
    a: "162",
  },
  {
    q: String.raw`Qual é o 4º termo da P.G. com \(a_1 = 5\) e \(q = -2\)?`,
    a: "-40",
  },
  {
    q: String.raw`Em uma P.G. com \(q = 3\), o 4º termo vale 54. Qual é o primeiro termo?`,
    a: "2",
  },
  {
    q: String.raw`Em uma P.G. com \(a_1 = 2\) e \(q = 2\), que posição ocupa o termo 64?`,
    a: "6",
  },
  {
    q: String.raw`Para que valor de \(x\) a sequência \((x,\;10,\;50)\) é uma P.G.?`,
    a: "2",
  },
  {
    q: String.raw`Some os 5 primeiros termos da P.G. com \(a_1 = 1\) e \(q = 2\).`,
    a: "31",
  },
  {
    q: String.raw`Qual é a soma de todos os termos da P.G. infinita com \(a_1 = 10\) e \(q = \tfrac{1}{2}\)?`,
    a: "20",
  },
];

function QuickCheck({ index }: { index: number }) {
  const item = QUICK[index];
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const check = () => {
    if (!answer.trim()) {
      setFeedback("Digite um número.");
      return;
    }
    const norm = (v: string) => v.trim().replace(/,/g, ".").replace(/\s/g, "");
    const numeric = (v: string) => {
      const f = v.split("/");
      return f.length === 2 ? Number(f[0]) / Number(f[1]) : Number(v);
    };
    setFeedback(
      Math.abs(numeric(answer) - numeric(item.a)) < 1e-9
        ? "✓ Certo! Pode seguir."
        : "✗ Ainda não. Releia a lição e tente de novo.",
    );
  };
  return (
    <div className='quick'>
      <div className='text-[11px] font-black uppercase tracking-widest text-pink-700'>
        ✋ Teste rápido
      </div>
      <p className='mt-2'>
        <MathText>{item.q}</MathText>
      </p>
      <div className='flex flex-wrap items-center gap-2 mt-3'>
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") check();
          }}
          type='text'
          placeholder='Sua resposta'
          autoComplete='off'
        />
        <button
          type='button'
          onClick={check}
          className='bg-pink-600 text-white rounded-lg px-3 py-1.5 text-sm font-bold'
        >
          Conferir
        </button>
        <button
          type='button'
          onClick={() => setFeedback("Resposta: " + item.a.replace("-", "−"))}
          className='text-xs text-slate-500 underline'
        >
          ver resposta
        </button>
        <span
          aria-live='polite'
          className={`text-sm font-bold ${feedback.startsWith("✓") ? "text-emerald-600" : feedback.startsWith("✗") ? "text-red-600" : "text-slate-600"}`}
        >
          {feedback}
        </span>
      </div>
    </div>
  );
}

export function GeometricProgressionTheory({
  onNavigateTab,
  onNavigateLevel,
}: {
  onNavigateTab: (tab: string) => void;
  onNavigateLevel: (level: string) => void;
}) {
  const handleActions = (event: MouseEvent<HTMLElement>) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>(
      "[data-goto],[data-gotab]",
    );
    if (!target) return;
    const tab = target.dataset.gotab;
    const level = target.dataset.goto;
    if (tab) onNavigateTab(tab);
    if (level) {
      onNavigateTab("exercicios");
      onNavigateLevel(level);
    }
  };
  return (
    <div className={"space-y-6 text-[#243044] [&_.lesson]:scroll-mt-24 [&_.lesson]:rounded-2xl [&_.lesson]:border [&_.lesson]:border-slate-200 [&_.lesson]:bg-white [&_.lesson]:p-6 [&_.lesson]:shadow-sm sm:[&_.lesson]:p-8 [&_.lesson-tag]:text-[.7rem] [&_.lesson-tag]:font-extrabold [&_.lesson-tag]:uppercase [&_.lesson-tag]:tracking-[.12em] [&_.lesson-tag]:text-pink-600 [&_.lesson_h2]:mt-1 [&_.lesson_h2]:text-[1.6rem] [&_.lesson_h2]:font-black [&_.lesson_h2]:text-slate-800 [&_.lesson_h3]:mt-7 [&_.lesson_h3]:text-lg [&_.lesson_h3]:font-extrabold [&_.lesson_h3]:text-pink-800 [&_.lesson_p]:mt-3 [&_.lesson_p]:leading-[1.85] [&_.lesson_p]:text-slate-600 [&_.lesson_ul]:mt-2 [&_.lesson_ul]:list-disc [&_.lesson_ul]:pl-6 [&_.lesson_ul]:leading-[1.85] [&_.lesson_ul]:text-slate-600 [&_.lesson_ol]:mt-2 [&_.lesson_ol]:list-decimal [&_.lesson_ol]:pl-6 [&_.lesson_ol]:leading-[1.85] [&_.lesson_ol]:text-slate-600 [&_.lesson_li]:mt-1 [&_.lesson_b]:text-slate-800 [&_.callout]:mt-4 [&_.callout]:rounded-xl [&_.callout]:px-4 [&_.callout]:py-3 [&_.callout]:text-[.95rem] [&_.callout]:leading-7 [&_.callout>b:first-child]:mb-1 [&_.callout>b:first-child]:block [&_.formula]:mt-4 [&_.formula]:overflow-x-auto [&_.formula]:rounded-2xl [&_.formula]:border-2 [&_.formula]:border-pink-300 [&_.formula]:bg-[#fffdf8] [&_.formula]:p-4 [&_.formula]:text-center [&_.formula]:text-xl [&_.tb]:mt-4 [&_.tb]:block [&_.tb]:w-full [&_.tb]:overflow-x-auto [&_.tb]:border-collapse [&_.tb]:text-sm [&_.tb_th]:whitespace-nowrap [&_.tb_th]:bg-pink-100 [&_.tb_th]:px-3 [&_.tb_th]:py-2 [&_.tb_th]:text-left [&_.tb_th]:font-extrabold [&_.tb_th]:text-pink-950 [&_.tb_td]:border-t [&_.tb_td]:border-slate-100 [&_.tb_td]:px-3 [&_.tb_td]:py-2 [&_.tb_td]:align-top [&_.tb_td]:text-slate-600 [&_.seq]:mt-4 [&_.seq]:flex [&_.seq]:flex-wrap [&_.seq]:items-center [&_.seq]:justify-center [&_.seq]:gap-1.5 [&_.seq]:font-mono [&_.seq_.t]:rounded-lg [&_.seq_.t]:border-2 [&_.seq_.t]:border-pink-300 [&_.seq_.t]:bg-pink-50 [&_.seq_.t]:px-3 [&_.seq_.t]:py-1.5 [&_.seq_.t]:text-lg [&_.seq_.t]:font-extrabold [&_.seq_.t]:text-pink-800 [&_.seq_.a]:rounded-full [&_.seq_.a]:bg-amber-50 [&_.seq_.a]:px-2 [&_.seq_.a]:py-1 [&_.seq_.a]:text-xs [&_.seq_.a]:font-extrabold [&_.seq_.a]:text-amber-600 [&_.cmp]:mt-4 [&_.cmp]:grid [&_.cmp]:gap-3 sm:[&_.cmp]:grid-cols-2 [&_.cmp>div]:rounded-xl [&_.cmp>div]:p-4 [&_.cmp>div]:text-[.92rem] [&_.cmp>div]:leading-7 [&_.cmp>div]:text-slate-700 [&_.toc_a]:block [&_.toc_a]:rounded-lg [&_.toc_a]:px-3 [&_.toc_a]:py-1.5 [&_.toc_a]:text-sm [&_.toc_a]:font-semibold [&_.toc_a]:text-slate-600 [&_.toc_a:hover]:bg-pink-100 [&_.toc_a:hover]:text-pink-800 [&_.toc_a.on]:bg-pink-100 [&_.toc_a.on]:font-extrabold [&_.toc_a.on]:text-pink-800 [&_.quick]:mt-5 [&_.quick]:rounded-2xl [&_.quick]:border [&_.quick]:border-dashed [&_.quick]:border-sky-300 [&_.quick]:bg-sky-50 [&_.quick]:p-4 [&_.quick_input]:w-36 [&_.quick_input]:rounded-xl [&_.quick_input]:border [&_.quick_input]:border-slate-300 [&_.quick_input]:bg-white [&_.quick_input]:px-3 [&_.quick_input]:py-2 [&_.quick_input]:text-sm [&_.gobtn]:mt-4 [&_.gobtn]:inline-block [&_.gobtn]:rounded-xl [&_.gobtn]:bg-pink-600 [&_.gobtn]:px-4 [&_.gobtn]:py-2 [&_.gobtn]:text-sm [&_.gobtn]:font-extrabold [&_.gobtn]:text-white [&_.gobtn:hover]:bg-pink-700 [&_.lvl-head]:rounded-2xl [&_.lvl-head]:bg-gradient-to-br [&_.lvl-head]:from-pink-900 [&_.lvl-head]:to-pink-700 [&_.lvl-head]:p-5 [&_.lvl-head]:text-white [&_kbd]:rounded-md [&_kbd]:border [&_kbd]:border-slate-300 [&_kbd]:bg-slate-100 [&_kbd]:px-1 [&_kbd]:text-xs"} onClick={handleActions}>
      <CourseHeader
        eyebrow='CURSO COMPLETO · DO ZERO'
        title='Progressão Geométrica'
        description='Você não precisa saber nada sobre o assunto. Aqui você vai entender o que é, como funciona, para que serve, como armar cada conta no papel e como resolver qualquer tipo de problema — com exemplos passo a passo e cerca de 100 exercícios do mais fácil ao mais difícil.'
        bgClass='bg-gradient-to-br from-pink-950 via-pink-900 to-rose-900'
        accent='pink'
        stats={[
          { value: "13", label: "lições" },
          { value: "100", label: "exercícios" },
          { value: "4", label: "experimentos" },
          { value: "8", label: "calculadoras" },
        ]}
      />
      <section id='sec-teoria' className='space-y-6'>
        <div
          className={
            "grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 items-start"
          }
        >
          <aside
            className={
              "toc lg:sticky lg:top-20 bg-white rounded-2xl border p-3 shadow-sm lg:max-h-[calc(100vh-6rem)] overflow-y-auto"
            }
          >
            <div
              className={
                "text-[11px] font-black uppercase tracking-widest text-pink-600 px-2 pb-1"
              }
            >
              {"Lições"}
            </div>

            <a className="block rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-pink-100 hover:text-pink-800" href={"#l0"}>{"0 · Comece por aqui"}</a>

            <a className="block rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-pink-100 hover:text-pink-800" href={"#l1"}>{"1 · Revisão rápida"}</a>

            <a className="block rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-pink-100 hover:text-pink-800" href={"#l2"}>{"2 · O que é uma P.G.?"}</a>

            <a className="block rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-pink-100 hover:text-pink-800" href={"#l3"}>{"3 · Tipos de P.G."}</a>

            <a className="block rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-pink-100 hover:text-pink-800" href={"#l4"}>{"4 · O termo geral"}</a>

            <a className="block rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-pink-100 hover:text-pink-800" href={"#l5"}>{"5 · Descobrindo cada incógnita"}</a>

            <a className="block rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-pink-100 hover:text-pink-800" href={"#l6"}>{"6 · Propriedades e interpolação"}</a>

            <a className="block rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-pink-100 hover:text-pink-800" href={"#l7"}>{"7 · Soma dos n primeiros termos"}</a>

            <a className="block rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-pink-100 hover:text-pink-800" href={"#l8"}>{"8 · Soma infinita"}</a>

            <a className="block rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-pink-100 hover:text-pink-800" href={"#l9"}>{"9 · Para que serve?"}</a>

            <a className="block rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-pink-100 hover:text-pink-800" href={"#l10"}>{"10 · Montando a conta no papel"}</a>

            <a className="block rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-pink-100 hover:text-pink-800" href={"#l11"}>{"11 · Erros comuns"}</a>

            <a className="block rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-600 hover:bg-pink-100 hover:text-pink-800" href={"#l12"}>{"12 · Resumo e folha de cola"}</a>
          </aside>

          <div className={"space-y-6 min-w-0"}>
            <article className={"lesson"} id={"l0"}>
              <div className={"lesson-tag"}>{"Lição 0"}</div>

              <h2>{"Comece por aqui"}</h2>

              <p>
                {"Uma "}
                <b>{"Progressão Geométrica (P.G.)"}</b>
                {
                  " é uma lista de números em que cada um nasce do anterior por uma "
                }
                <b>{"multiplicação sempre igual"}</b>
                {
                  ". Parece simples — e é. Mas essa ideia explica por que dinheiro rende juros sobre juros, por que um vírus se espalha tão rápido e por que uma folha dobrada ao meio 42 vezes chegaria à Lua."
                }
              </p>

              <h3>{"Como estudar"}</h3>

              <ol>
                <li>
                  {"Leia as lições "}
                  <b>{"na ordem"}</b>
                  {". Cada uma usa o que a anterior ensinou."}
                </li>

                <li>
                  {"Tenha "}
                  <b>{"caderno e lápis"}</b>
                  {
                    ". Refaça cada exemplo no papel antes de olhar a solução — é assim que se aprende matemática."
                  }
                </li>

                <li>
                  {"Responda os "}
                  <b>{"“Teste rápido”"}</b>
                  {
                    " (caixas azuis). Eles mostram se você pode seguir em frente."
                  }
                </li>

                <li>
                  {"Depois de cada bloco de lições, faça os "}
                  <b>{"exercícios do nível correspondente"}</b>
                  {". Eles começam fáceis e vão ficando mais difíceis."}
                </li>

                <li>
                  {"Travou? Use a "}
                  <b>{"💡 Dica"}</b>
                  {"; ainda travado? Abra a "}
                  <b>{"resolução passo a passo"}</b>
                  {" e depois tente de novo outro exercício parecido."}
                </li>
              </ol>

              <h3>{"Mapa do curso"}</h3>

              <table className={"tb"}>
                <thead>
                  <tr>
                    <th>{"Lição"}</th>
                    <th>{"O que você aprende"}</th>
                    <th>{"Exercícios"}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{"1"}</td>
                    <td>{"Revisão: sequências, potências, sinais, frações"}</td>
                    <td>{"—"}</td>
                  </tr>

                  <tr>
                    <td>{"2 e 3"}</td>
                    <td>{"O que é P.G., razão, tipos de P.G."}</td>
                    <td>{"Níveis 1, 2 e 3"}</td>
                  </tr>

                  <tr>
                    <td>{"4"}</td>
                    <td>{"Fórmula do termo geral"}</td>
                    <td>{"Níveis 4 e 5"}</td>
                  </tr>

                  <tr>
                    <td>{"5"}</td>
                    <td>
                      {"Descobrir "}
                      <i>{"n"}</i>
                      {", "}
                      <i>{"a₁"}</i>
                      {" ou "}
                      <i>{"q"}</i>
                    </td>
                    <td>{"Níveis 6 e 7"}</td>
                  </tr>

                  <tr>
                    <td>{"6"}</td>
                    <td>{"Termo médio, propriedades, interpolação"}</td>
                    <td>{"Níveis 8 e 9"}</td>
                  </tr>

                  <tr>
                    <td>{"7"}</td>
                    <td>
                      {"Soma dos "}
                      <i>{"n"}</i>
                      {" primeiros termos"}
                    </td>
                    <td>{"Nível 10"}</td>
                  </tr>

                  <tr>
                    <td>{"8"}</td>
                    <td>{"Soma infinita e dízimas periódicas"}</td>
                    <td>{"Nível 11"}</td>
                  </tr>

                  <tr>
                    <td>{"9 e 10"}</td>
                    <td>{"Aplicações reais e como montar a conta no papel"}</td>
                    <td>{"Nível 12"}</td>
                  </tr>

                  <tr>
                    <td>{"11 e 12"}</td>
                    <td>{"Erros comuns e resumo"}</td>
                    <td>{"Nível 13 (desafios)"}</td>
                  </tr>
                </tbody>
              </table>
            </article>

            <article className={"lesson"} id={"l1"}>
              <div className={"lesson-tag"}>{"Lição 1"}</div>

              <h2>{"Revisão rápida: o que você precisa saber"}</h2>

              <p>
                {
                  "Quase todo erro em P.G. vem de uma conta básica mal feita (potência, sinal ou fração). Vale gastar cinco minutos aqui."
                }
              </p>

              <h3>{"1.1 Sequência e posição"}</h3>

              <p>
                {"Uma "}
                <b>{"sequência"}</b>
                {" é uma lista de números em ordem. Cada número é um "}
                <b>{"termo"}</b>
                {". Damos nome a eles pela posição:"}
              </p>

              <div className={"seq"}>
                <span className={"t"}>{"5"}</span>
                <span className={"t"}>{"10"}</span>
                <span className={"t"}>{"20"}</span>
                <span className={"t"}>{"40"}</span>
              </div>

              <div className={"seq"} style={{ marginTop: ".25rem" }}>
                <span className={"text-xs text-slate-500 w-14 text-center"}>
                  <MathText>{"\\(a_1\\)"}</MathText>
                </span>
                <span className={"text-xs text-slate-500 w-14 text-center"}>
                  <MathText>{"\\(a_2\\)"}</MathText>
                </span>
                <span className={"text-xs text-slate-500 w-14 text-center"}>
                  <MathText>{"\\(a_3\\)"}</MathText>
                </span>
                <span className={"text-xs text-slate-500 w-14 text-center"}>
                  <MathText>{"\\(a_4\\)"}</MathText>
                </span>
              </div>

              <ul>
                <li>
                  <MathText>{"\\(a_1 = 5\\) é o "}</MathText>
                  <b>{"1º termo"}</b>
                  <MathText>
                    {", \\(a_2 = 10\\) é o 2º, e assim por diante."}
                  </MathText>
                </li>

                <li>
                  <MathText>
                    {"\\(a_n\\) significa “o termo que está na posição "}
                  </MathText>
                  <i>{"n"}</i>
                  {"”. A letra "}
                  <i>{"n"}</i>
                  {" é só um nome para uma posição qualquer."}
                </li>

                <li>
                  {"O número pequeno embaixo ("}
                  <b>{"índice"}</b>
                  {") diz a "}
                  <b>{"posição"}</b>
                  <MathText>{". \\(a_3\\) "}</MathText>
                  <u>{"não"}</u>
                  {" é “a vezes 3”."}
                </li>
              </ul>

              <h3>{"1.2 Potência = multiplicação repetida"}</h3>

              <p>
                {
                  "Uma potência é uma forma curta de escrever uma multiplicação de números iguais. O número que se repete é a "
                }
                <b>{"base"}</b>
                {"; quantas vezes ele aparece é o "}
                <b>{"expoente"}</b>
                {"."}
              </p>

              <div className={"formula"}>
                <MathText>
                  {
                    "\\[2^4 = \\underbrace{2 \\cdot 2 \\cdot 2 \\cdot 2}_{4\\text{ vezes}} = 16\\]"
                  }
                </MathText>
              </div>

              <ul>
                <li>
                  <MathText>
                    {
                      "Expoente 1: \\(q^1 = q\\) (o número sozinho). Exemplo: \\(7^1 = 7\\)."
                    }
                  </MathText>
                </li>

                <li>
                  <MathText>
                    {
                      "Expoente 0: \\(q^0 = 1\\) (qualquer número, menos zero). Exemplo: \\(9^0 = 1\\). Isso vai aparecer quando \\(n=1\\)."
                    }
                  </MathText>
                </li>
              </ul>

              <p>
                <b>{"Vale decorar"}</b>
                {" (você vai usar o tempo todo):"}
              </p>

              <table className={"tb"}>
                <thead>
                  <tr>
                    <th>{"Base"}</th>
                    <th>{"Potências"}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{"2"}</td>
                    <td>{"2, 4, 8, 16, 32, 64, 128, 256, 512, 1024"}</td>
                  </tr>

                  <tr>
                    <td>{"3"}</td>
                    <td>{"3, 9, 27, 81, 243, 729, 2187"}</td>
                  </tr>

                  <tr>
                    <td>{"4"}</td>
                    <td>{"4, 16, 64, 256, 1024"}</td>
                  </tr>

                  <tr>
                    <td>{"5"}</td>
                    <td>{"5, 25, 125, 625, 3125"}</td>
                  </tr>

                  <tr>
                    <td>{"10"}</td>
                    <td>{"10, 100, 1000, 10000, …"}</td>
                  </tr>
                </tbody>
              </table>

              <div className={"callout tip"}>
                <b>{"Truque de papel"}</b>
                <MathText>
                  {
                    "Para calcular uma potência grande, vá multiplicando de um em um e anotando: \\(3^5\\): 3 → 9 → 27 → 81 → 243. Assim você não se perde e ainda ganha a tabela de graça."
                  }
                </MathText>
              </div>

              <h3>{"1.3 Potências com número negativo"}</h3>

              <p>
                {
                  "Regra do sinal: multiplicar dois negativos dá positivo. Então:"
                }
              </p>

              <ul>
                <li>
                  <b>{"Expoente par"}</b>
                  {" → resultado "}
                  <b>{"positivo"}</b>
                  <MathText>
                    {": \\((-2)^4 = (-2)(-2)(-2)(-2) = +16\\)."}
                  </MathText>
                </li>

                <li>
                  <b>{"Expoente ímpar"}</b>
                  {" → resultado "}
                  <b>{"negativo"}</b>
                  <MathText>{": \\((-2)^3 = (-2)(-2)(-2) = -8\\)."}</MathText>
                </li>
              </ul>

              <div className={"callout warning"}>
                <b>{"Os parênteses mudam tudo!"}</b>
                <MathText>
                  {
                    "\\((-2)^4 = 16\\), mas \\(-2^4 = -16\\) (aqui só o 2 é elevado e o sinal fica de fora). Na P.G., a razão negativa "
                  }
                </MathText>
                <u>{"sempre"}</u>
                {" vai entre parênteses."}
              </div>

              <h3>{"1.4 Frações e decimais"}</h3>

              <ul>
                <li>
                  {"Potência de fração: eleva-se o de cima "}
                  <u>{"e"}</u>
                  <MathText>
                    {
                      " o de baixo. \\(\\left(\\tfrac{1}{2}\\right)^3 = \\tfrac{1^3}{2^3} = \\tfrac{1}{8}\\)."
                    }
                  </MathText>
                </li>

                <li>
                  <MathText>
                    {
                      "Multiplicar por fração: \\(64 \\cdot \\tfrac{1}{8} = \\tfrac{64}{8} = 8\\)."
                    }
                  </MathText>
                </li>

                <li>
                  <MathText>
                    {
                      "Dividir por fração = multiplicar pelo inverso: \\(3 \\div \\tfrac{1}{2} = 3 \\cdot 2 = 6\\)."
                    }
                  </MathText>
                </li>

                <li>
                  <MathText>
                    {
                      "Decimais úteis: \\(0{,}5 = \\tfrac12\\), \\(0{,}25 = \\tfrac14\\), \\(0{,}1 = \\tfrac{1}{10}\\), \\(1{,}5 = \\tfrac32\\)."
                    }
                  </MathText>
                </li>
              </ul>

              <h3>{"1.5 Ordem das operações"}</h3>

              <p>
                {"Sempre nesta ordem: "}
                <b>
                  {
                    "1º parênteses → 2º potências → 3º multiplicação e divisão → 4º soma e subtração"
                  }
                </b>
                {". Na P.G. isso significa: calcule a potência "}
                <u>{"antes"}</u>
                <MathText>
                  {
                    " de multiplicar pelo primeiro termo. Exemplo: \\(3 \\cdot 2^4 = 3 \\cdot 16 = 48\\) (e não \\(6^4\\)!)."
                  }
                </MathText>
              </p>

              <QuickCheck index={0} />

              <QuickCheck index={1} />
            </article>

            <article className={"lesson"} id={"l2"}>
              <div className={"lesson-tag"}>{"Lição 2"}</div>

              <h2>{"O que é uma Progressão Geométrica?"}</h2>

              <h3>{"2.1 A ideia, com uma história"}</h3>

              <p>
                {"Imagine que alguém lhe propõe: "}
                <i>
                  {
                    "“Hoje você recebe 1 centavo. Amanhã, o dobro do que recebeu hoje. Depois de amanhã, o dobro do dia anterior… por 30 dias.”"
                  }
                </i>
                {" Parece pouco? Veja os primeiros dias:"}
              </p>

              <div className={"seq"}>
                <span className={"t"}>{"1"}</span>
                <span className={"a"}>{"×2"}</span>
                <span className={"t"}>{"2"}</span>
                <span className={"a"}>{"×2"}</span>
                <span className={"t"}>{"4"}</span>
                <span className={"a"}>{"×2"}</span>
                <span className={"t"}>{"8"}</span>
                <span className={"a"}>{"×2"}</span>
                <span className={"t"}>{"16"}</span>
                <span className={"a"}>{"×2"}</span>
                <span className={"t"}>{"32"}</span>
              </div>

              <p>
                {"Cada número é o anterior "}
                <b>{"multiplicado por 2"}</b>
                {
                  ". Isso é uma P.G. (No 30º dia você receberia mais de cinco milhões de reais — ao longo desta lição você vai ver como calcular isso!)"
                }
              </p>

              <h3>{"2.2 Definição"}</h3>

              <div className={"callout info"}>
                <b>{"Progressão Geométrica"}</b>
                {"É uma sequência de números em que, "}
                <u>{"a partir do 2º termo"}</u>
                {", cada termo é igual ao anterior "}
                <b>{"multiplicado por um mesmo número fixo"}</b>
                {", chamado "}
                <b>{"razão"}</b>
                {" e representado pela letra "}
                <b>{"q"}</b>
                {"."}
              </div>

              <div className={"formula"}>
                <MathText>{"\\[a_{n+1} = a_n \\cdot q\\]"}</MathText>
              </div>

              <p>
                {
                  "Leia assim: “o termo seguinte é o termo atual vezes a razão”."
                }
              </p>

              <h3>{"2.3 O vocabulário"}</h3>

              <table className={"tb"}>
                <thead>
                  <tr>
                    <th>{"Nome"}</th>
                    <th>{"Símbolo"}</th>
                    <th>{"Significa"}</th>
                    <th>{"Em (3, 6, 12, 24, 48)"}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <b>{"Termo"}</b>
                    </td>
                    <td>
                      <MathText>{"\\(a_n\\)"}</MathText>
                    </td>
                    <td>{"cada número da lista"}</td>
                    <td>{"3, 6, 12, 24, 48"}</td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Primeiro termo"}</b>
                    </td>
                    <td>
                      <MathText>{"\\(a_1\\)"}</MathText>
                    </td>
                    <td>{"onde a P.G. começa"}</td>
                    <td>{"3"}</td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Razão"}</b>
                    </td>
                    <td>
                      <MathText>{"\\(q\\)"}</MathText>
                    </td>
                    <td>{"o número pelo qual se multiplica"}</td>
                    <td>{"2"}</td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Posição"}</b>
                    </td>
                    <td>
                      <MathText>{"\\(n\\)"}</MathText>
                    </td>
                    <td>{"o “número da vaga” do termo"}</td>
                    <td>
                      <MathText>{"o 4º termo é 24, então \\(n=4\\)"}</MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Número de termos"}</b>
                    </td>
                    <td>
                      <MathText>{"\\(n\\)"}</MathText>
                    </td>
                    <td>{"quantos números há na lista"}</td>
                    <td>{"5 termos"}</td>
                  </tr>
                </tbody>
              </table>

              <h3>{"2.4 Como descobrir a razão"}</h3>

              <p>
                {"Se cada termo é o anterior vezes "}
                <i>{"q"}</i>
                {", então "}
                <i>{"q"}</i>
                {
                  " é “quanto o termo seguinte tem a mais, em vezes, do que o anterior”. Para achar, "
                }
                <b>{"divida qualquer termo pelo anterior"}</b>
                {":"}
              </p>

              <div className={"formula"}>
                <MathText>
                  {
                    "\\[q = \\frac{a_2}{a_1} = \\frac{a_3}{a_2} = \\frac{a_4}{a_3} = \\dots\\]"
                  }
                </MathText>
              </div>

              <div className={"mt-4 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-2"}>
                  {"EXEMPLO: qual é a razão de (5, 15, 45, 135)?"}
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>{"\\(15 \\div 5 = 3\\)"}</MathText>
                  </div>

                  <div>
                    <MathText>{"\\(45 \\div 15 = 3\\)"}</MathText>
                  </div>

                  <div>
                    <MathText>{"\\(135 \\div 45 = 3\\)"}</MathText>
                  </div>

                  <div>
                    <MathText>
                      {"Deu 3 sempre ✓   ⇒   é P.G. com \\(q = 3\\)"}
                    </MathText>
                  </div>
                </div>
              </div>

              <div className={"callout tip"}>
                <b>{"Teste dos dois pares"}</b>
                {
                  "Para ter certeza de que uma sequência é P.G., calcule a divisão em "
                }
                <u>{"pelo menos dois pares"}</u>
                {" seguidos. Se os resultados forem diferentes, "}
                <u>{"não é P.G."}</u>
              </div>

              <div className={"callout warning"}>
                <b>{"Cuidado com a ordem da divisão"}</b>
                {"É sempre "}
                <u>{"o termo da frente dividido pelo termo de trás"}</u>
                <MathText>
                  {
                    ": \\(a_2 \\div a_1\\). Se fizer ao contrário, vai achar o inverso (\\(1/q\\))."
                  }
                </MathText>
              </div>

              <h3>{"2.5 Mais exemplos (razão inteira, fração e negativa)"}</h3>

              <table className={"tb"}>
                <thead>
                  <tr>
                    <th>{"P.G."}</th>
                    <th>{"Conta"}</th>
                    <th>{"Razão"}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{"(2, 8, 32, 128)"}</td>
                    <td>
                      <MathText>{"\\(8 \\div 2\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(q = 4\\)"}</MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>{"(80, 40, 20, 10)"}</td>
                    <td>
                      <MathText>{"\\(40 \\div 80 = \\tfrac{1}{2}\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(q = \\tfrac{1}{2}\\) "}</MathText>
                      <small>{"(cada termo é metade do anterior)"}</small>
                    </td>
                  </tr>

                  <tr>
                    <td>{"(2, −6, 18, −54)"}</td>
                    <td>
                      <MathText>{"\\(-6 \\div 2\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(q = -3\\) "}</MathText>
                      <small>{"(os sinais alternam)"}</small>
                    </td>
                  </tr>

                  <tr>
                    <td>{"(7, 7, 7, 7)"}</td>
                    <td>
                      <MathText>{"\\(7 \\div 7\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(q = 1\\) "}</MathText>
                      <small>{"(P.G. constante)"}</small>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className={"callout info"}>
                <b>{"Regra de ouro"}</b>
                {"Na P.G., o primeiro termo e a razão "}
                <b>{"não podem ser zero"}</b>
                <MathText>
                  {
                    ". Se \\(q=0\\), a sequência vira (a, 0, 0, 0…) e perde o padrão; se \\(a_1 = 0\\), tudo vira zero."
                  }
                </MathText>
              </div>

              <h3>{"2.6 P.A. × P.G.: não confunda!"}</h3>

              <p>
                {"Você pode ter visto a "}
                <b>{"Progressão Aritmética (P.A.)"}</b>
                {". Ela é “irmã” da P.G., mas o motor é outro:"}
              </p>

              <table className={"tb"}>
                <thead>
                  <tr>
                    <th></th>
                    <th>{"P.A."}</th>
                    <th>{"P.G."}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <b>{"Como passa de um termo ao próximo"}</b>
                    </td>
                    <td>
                      <b>{"soma"}</b>
                      <MathText>{" sempre o mesmo número (\\(+r\\))"}</MathText>
                    </td>
                    <td>
                      <b>{"multiplica"}</b>
                      <MathText>
                        {" sempre pelo mesmo número (\\(\\times q\\))"}
                      </MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Exemplo"}</b>
                    </td>
                    <td>
                      <MathText>{"(3, 5, 7, 9, 11) → \\(+2\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>
                        {"(3, 6, 12, 24, 48) → \\(\\times 2\\)"}
                      </MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Teste"}</b>
                    </td>
                    <td>
                      <b>{"subtraia"}</b>
                      {" termos vizinhos: dá sempre igual"}
                    </td>
                    <td>
                      <b>{"divida"}</b>
                      {" termos vizinhos: dá sempre igual"}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Crescimento"}</b>
                    </td>
                    <td>{"“de degrau em degrau” (reta)"}</td>
                    <td>{"“explosivo” (ou encolhe muito rápido)"}</td>
                  </tr>
                </tbody>
              </table>

              <QuickCheck index={2} />

              <QuickCheck index={3} />

              <button className={"gobtn"} data-goto={"1"}>
                {"✏️ Treinar: Nível 1 e 2"}
              </button>
            </article>

            <article className={"lesson"} id={"l3"}>
              <div className={"lesson-tag"}>{"Lição 3"}</div>

              <h2>{"Tipos de P.G.: ela sobe, desce ou “pula”?"}</h2>

              <p>
                {
                  "Só de olhar o primeiro termo e a razão você já sabe como a P.G. vai se comportar:"
                }
              </p>

              <table className={"tb"}>
                <thead>
                  <tr>
                    <th>{"Tipo"}</th>
                    <th>{"Condição"}</th>
                    <th>{"Exemplo"}</th>
                    <th>{"O que acontece"}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <b>{"Crescente"}</b>
                    </td>
                    <td>
                      <MathText>{"\\(a_1 > 0\\) e \\(q > 1\\)"}</MathText>
                      <br />
                      <MathText>{"ou \\(a_1 "}</MathText>
                      {"<"}
                      <MathText>{" 0\\) e \\(0 "}</MathText>
                      {"<"}
                      {" q "}
                      {"<"}
                      {" 1\\)"}
                    </td>
                    <td>
                      {"(2, 6, 18, 54, …)"}
                      <br />
                      {"(−80, −40, −20, −10, …)"}
                    </td>
                    <td>{"cada termo é maior que o anterior"}</td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Decrescente"}</b>
                    </td>
                    <td>
                      <MathText>{"\\(a_1 > 0\\) e \\(0 "}</MathText>
                      {"<"}
                      {" q "}
                      {"<"}
                      {" 1\\)"}
                      <br />
                      <MathText>{"ou \\(a_1 "}</MathText>
                      {"<"}
                      <MathText>{" 0\\) e \\(q > 1\\)"}</MathText>
                    </td>
                    <td>
                      {"(80, 40, 20, 10, …)"}
                      <br />
                      {"(−2, −6, −18, …)"}
                    </td>
                    <td>{"cada termo é menor que o anterior"}</td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Constante"}</b>
                    </td>
                    <td>
                      <MathText>{"\\(q = 1\\)"}</MathText>
                    </td>
                    <td>{"(7, 7, 7, 7, …)"}</td>
                    <td>{"todos os termos são iguais"}</td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Alternante"}</b>
                      {" (oscilante)"}
                    </td>
                    <td>
                      <MathText>{"\\(q "}</MathText>
                      {"<"}
                      {" 0\\)"}
                    </td>
                    <td>{"(3, −6, 12, −24, …)"}</td>
                    <td>{"o sinal troca a cada termo"}</td>
                  </tr>
                </tbody>
              </table>

              <div className={"callout tip"}>
                <b>{"Como lembrar sem decorar a tabela"}</b>

                <ul>
                  <li>
                    <b>{"q maior que 1"}</b>
                    {": os números “se afastam de zero” (explodem)."}
                  </li>

                  <li>
                    <b>{"q entre 0 e 1"}</b>
                    {
                      " (uma fração, como ½): os números “se aproximam de zero” (encolhem)."
                    }
                  </li>

                  <li>
                    <b>{"q negativa"}</b>
                    {": os sinais ficam "}
                    <b>{"+ − + − …"}</b>
                    {" (alternam)."}
                  </li>

                  <li>
                    <b>{"q igual a 1"}</b>
                    {": nada muda."}
                  </li>
                </ul>
                {
                  "\n              Se o primeiro termo for negativo, tudo isso se "
                }
                <u>{"espelha"}</u>
                {" (o que “explode” vai para −∞).\n            "}
              </div>

              <div className={"callout info"}>
                <b>{"Por que isso importa?"}</b>
                {
                  "Antes de calcular, você já sabe o que esperar. Se o problema diz que a P.G. é crescente e a sua resposta deu menor que o termo anterior, "
                }
                <u>{"algo está errado"}</u>
                {" — é uma ótima forma de conferir."}
              </div>

              <p>
                {"Quer ver isso acontecendo? Vá ao "}
                <b>{"Laboratório"}</b>
                {" e mexa na razão: veja a P.G. disparar, encolher e alternar."}
              </p>

              <button className={"gobtn"} data-gotab={"laboratorio"}>
                {"🔬 Abrir o Laboratório"}
              </button>
            </article>

            <article className={"lesson"} id={"l4"}>
              <div className={"lesson-tag"}>{"Lição 4"}</div>

              <h2>
                {"O termo geral: chegando em qualquer termo sem listar todos"}
              </h2>

              <h3>{"4.1 O problema"}</h3>

              <p>
                {"Na P.G. (3, 6, 12, 24, …), qual é o "}
                <b>{"20º termo"}</b>
                {
                  "? Dá para multiplicar por 2 vinte vezes, mas é trabalhoso (e fácil de errar). Precisamos de um atalho."
                }
              </p>

              <h3>{"4.2 Descobrindo o padrão"}</h3>

              <p>
                {"Vamos escrever cada termo a partir do "}
                <u>{"primeiro"}</u>
                {":"}
              </p>

              <table className={"tb"}>
                <thead>
                  <tr>
                    <th>{"Termo"}</th>
                    <th>{"Como se forma"}</th>
                    <th>{"Forma curta"}</th>
                    <th>
                      {"Quantas multiplicações por "}
                      <i>{"q"}</i>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <MathText>{"\\(a_1\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(a_1\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(a_1\\)"}</MathText>
                    </td>
                    <td>{"0"}</td>
                  </tr>

                  <tr>
                    <td>
                      <MathText>{"\\(a_2\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(a_1 \\cdot q\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(a_1 \\cdot q^1\\)"}</MathText>
                    </td>
                    <td>{"1"}</td>
                  </tr>

                  <tr>
                    <td>
                      <MathText>{"\\(a_3\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(a_1 \\cdot q \\cdot q\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(a_1 \\cdot q^2\\)"}</MathText>
                    </td>
                    <td>{"2"}</td>
                  </tr>

                  <tr>
                    <td>
                      <MathText>{"\\(a_4\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>
                        {"\\(a_1 \\cdot q \\cdot q \\cdot q\\)"}
                      </MathText>
                    </td>
                    <td>
                      <MathText>{"\\(a_1 \\cdot q^3\\)"}</MathText>
                    </td>
                    <td>{"3"}</td>
                  </tr>

                  <tr>
                    <td>
                      <MathText>{"\\(a_5\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>
                        {"\\(a_1 \\cdot q \\cdot q \\cdot q \\cdot q\\)"}
                      </MathText>
                    </td>
                    <td>
                      <MathText>{"\\(a_1 \\cdot q^4\\)"}</MathText>
                    </td>
                    <td>{"4"}</td>
                  </tr>

                  <tr>
                    <td>
                      <MathText>{"\\(a_n\\)"}</MathText>
                    </td>
                    <td>{"…"}</td>
                    <td>
                      <MathText>{"\\(a_1 \\cdot q^{\\,n-1}\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(n-1\\)"}</MathText>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p>
                {"Repare: o "}
                <b>{"expoente é sempre um a menos que a posição"}</b>
                {". Isso é porque para chegar ao termo número "}
                <i>{"n"}</i>
                {" partindo do 1º, você dá apenas "}
                <b>{"n − 1 saltos"}</b>
                {
                  ". Como numa escada: do degrau 1 ao degrau 5 você sobe 4 degraus, não 5."
                }
              </p>

              <div className={"formula"}>
                <MathText>{"\\[a_n = a_1 \\cdot q^{\\,n-1}\\]"}</MathText>
              </div>

              <div className={"grid sm:grid-cols-2 gap-3 mt-3 text-sm"}>
                <div className={"bg-pink-50 rounded-xl p-3"}>
                  <b>
                    <MathText>{"\\(a_n\\)"}</MathText>
                  </b>
                  {" — o termo que você quer (o da posição "}
                  <i>{"n"}</i>
                  {")"}
                </div>

                <div className={"bg-pink-50 rounded-xl p-3"}>
                  <b>
                    <MathText>{"\\(a_1\\)"}</MathText>
                  </b>
                  {" — o primeiro termo"}
                </div>

                <div className={"bg-pink-50 rounded-xl p-3"}>
                  <b>
                    <MathText>{"\\(q\\)"}</MathText>
                  </b>
                  {" — a razão"}
                </div>

                <div className={"bg-pink-50 rounded-xl p-3"}>
                  <b>
                    <MathText>{"\\(n\\)"}</MathText>
                  </b>
                  {" — a posição do termo que você quer"}
                </div>
              </div>

              <h3>{"4.3 A receita no papel (5 passos)"}</h3>

              <ol>
                <li>
                  <b>{"Escreva os dados"}</b>
                  <MathText>{": \\(a_1\\), \\(q\\), \\(n\\)."}</MathText>
                </li>

                <li>
                  <b>{"Escreva a fórmula"}</b>
                  <MathText>{": \\(a_n = a_1 \\cdot q^{\\,n-1}\\)."}</MathText>
                </li>

                <li>
                  <b>{"Substitua"}</b>
                  {
                    " as letras pelos números (razão negativa ou fração entre parênteses)."
                  }
                </li>

                <li>
                  <b>{"Calcule o expoente"}</b>
                  <MathText>{" \\(n-1\\)."}</MathText>
                </li>

                <li>
                  <b>{"Calcule a potência"}</b>
                  {" primeiro e "}
                  <b>{"depois multiplique"}</b>
                  <MathText>{" por \\(a_1\\)."}</MathText>
                </li>
              </ol>

              <div className={"mt-4 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  {"EXEMPLO 1 — Qual é o 8º termo da P.G. (3, 6, 12, …)?"}
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>
                      {
                        "Dados: \\(a_1 = 3\\), \\(q = 6 \\div 3 = 2\\), \\(n = 8\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>{"\\(a_8 = a_1 \\cdot q^{\\,n-1}\\)"}</MathText>
                  </div>

                  <div>
                    <MathText>{"\\(a_8 = 3 \\cdot 2^{\\,8-1}\\)"}</MathText>
                  </div>

                  <div>
                    <MathText>{"\\(a_8 = 3 \\cdot 2^{7}\\)"}</MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "\\(2^7 = 2\\cdot2\\cdot2\\cdot2\\cdot2\\cdot2\\cdot2 = 128\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>{"\\(a_8 = 3 \\cdot 128 = 384\\)"}</MathText>
                  </div>
                </div>
              </div>

              <div className={"callout success"}>
                <b>{"Conferindo"}</b>
                {"Listando: 3, 6, 12, 24, 48, 96, 192, "}
                <b>{"384"}</b>
                {" ✓ (é o 8º da lista)."}
              </div>

              <div className={"mt-4 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  {
                    "EXEMPLO 2 — Razão negativa: 5º termo da P.G. (2, −6, 18, …)"
                  }
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>
                      {
                        "Dados: \\(a_1 = 2\\), \\(q = -6 \\div 2 = -3\\), \\(n = 5\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {"\\(a_5 = 2 \\cdot (-3)^{\\,5-1} = 2 \\cdot (-3)^4\\)"}
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {"\\((-3)^4 = (-3)(-3)(-3)(-3) = +81\\)   "}
                    </MathText>
                    <small>{"(expoente par → positivo)"}</small>
                  </div>

                  <div>
                    <MathText>{"\\(a_5 = 2 \\cdot 81 = 162\\)"}</MathText>
                  </div>
                </div>
              </div>

              <div className={"mt-4 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  {
                    "EXEMPLO 3 — Razão fracionária: 5º termo da P.G. (64, 32, 16, …)"
                  }
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>
                      {
                        "Dados: \\(a_1 = 64\\), \\(q = 32 \\div 64 = \\tfrac{1}{2}\\), \\(n = 5\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {"\\(a_5 = 64 \\cdot \\left(\\tfrac{1}{2}\\right)^{4}\\)"}
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "\\(\\left(\\tfrac{1}{2}\\right)^4 = \\tfrac{1\\cdot1\\cdot1\\cdot1}{2\\cdot2\\cdot2\\cdot2} = \\tfrac{1}{16}\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "\\(a_5 = 64 \\cdot \\tfrac{1}{16} = \\tfrac{64}{16} = 4\\)"
                      }
                    </MathText>
                  </div>
                </div>
              </div>

              <h3>
                {"4.4 Atalho: partir de qualquer termo (não só do primeiro)"}
              </h3>

              <p>
                <MathText>
                  {
                    "Às vezes o problema não dá o \\(a_1\\), e sim outro termo, como \\(a_3\\). A mesma lógica funciona: de \\(a_m\\) até \\(a_n\\) são \\(n-m\\) saltos."
                  }
                </MathText>
              </p>

              <div className={"formula"}>
                <MathText>{"\\[a_n = a_m \\cdot q^{\\,n-m}\\]"}</MathText>
              </div>

              <div className={"mt-4 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  <MathText>
                    {
                      "EXEMPLO 4 — Em uma P.G. de razão 2 temos \\(a_3 = 12\\). Qual é \\(a_7\\)?"
                    }
                  </MathText>
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>
                      {
                        "\\(a_7 = a_3 \\cdot q^{\\,7-3} = 12 \\cdot 2^4 = 12 \\cdot 16 = 192\\)"
                      }
                    </MathText>
                  </div>
                </div>
              </div>

              <div className={"callout info"}>
                <b>{"E o desafio do dobro?"}</b>
                <MathText>
                  {
                    "1 centavo no 1º dia, dobrando por 30 dias: \\(a_{30} = 1 \\cdot 2^{29} = 536\\,870\\,912\\) centavos, ou seja, "
                  }
                </MathText>
                <b>{"mais de 5 milhões de reais"}</b>
                {" só no último dia."}
              </div>

              <QuickCheck index={4} />

              <QuickCheck index={5} />

              <button className={"gobtn"} data-goto={"4"}>
                {"✏️ Treinar: Nível 4 e 5"}
              </button>
            </article>

            <article className={"lesson"} id={"l5"}>
              <div className={"lesson-tag"}>{"Lição 5"}</div>

              <h2>{"Descobrindo cada incógnita da fórmula"}</h2>

              <p>
                <MathText>
                  {"A fórmula \\(a_n = a_1 \\cdot q^{\\,n-1}\\) tem "}
                </MathText>
                <b>{"quatro letras"}</b>
                <MathText>
                  {
                    ": \\(a_n\\), \\(a_1\\), \\(q\\) e \\(n\\). Se o problema der "
                  }
                </MathText>
                <b>{"três"}</b>
                {" delas, você descobre a "}
                <b>{"quarta"}</b>
                <MathText>
                  {
                    ". Já fizemos o caso de achar \\(a_n\\). Vejamos os outros três."
                  }
                </MathText>
              </p>

              <h3>
                <MathText>
                  {"A) Descobrindo o primeiro termo \\(a_1\\)"}
                </MathText>
              </h3>

              <p>
                {"É só "}
                <b>{"isolar"}</b>
                <MathText>
                  {" \\(a_1\\): como ele está multiplicando, passa dividindo."}
                </MathText>
              </p>

              <div className={"mt-3 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  <MathText>
                    {
                      "EXEMPLO — P.G. com \\(q = 2\\), 5º termo igual a 48. Qual é \\(a_1\\)?"
                    }
                  </MathText>
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>{"\\(a_n = a_1 \\cdot q^{\\,n-1}\\)"}</MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "\\(48 = a_1 \\cdot 2^{\\,5-1} = a_1 \\cdot 2^4 = a_1 \\cdot 16\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>{"\\(a_1 = 48 \\div 16 = 3\\)"}</MathText>
                  </div>
                </div>
              </div>

              <h3>
                <MathText>
                  {
                    "B) Descobrindo a posição \\(n\\) (“que lugar este número ocupa?”)"
                  }
                </MathText>
              </h3>

              <p>
                <MathText>{"Aqui o \\(n\\) está no "}</MathText>
                <b>{"expoente"}</b>
                {". Sem logaritmos, usamos um método simples: "}
                <b>{"isole a potência"}</b>
                {" e descubra "}
                <i>{"“q elevado a quanto dá isso?”"}</i>
                {"."}
              </p>

              <div className={"mt-3 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  <MathText>
                    {
                      "EXEMPLO — Em uma P.G. com \\(a_1 = 5\\) e \\(q = 3\\), qual a posição do termo 405?"
                    }
                  </MathText>
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>{"\\(405 = 5 \\cdot 3^{\\,n-1}\\)"}</MathText>
                  </div>

                  <div>
                    <MathText>
                      {"Divido os dois lados por 5:   \\(81 = 3^{\\,n-1}\\)"}
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "Lista das potências de 3: \\(3^1=3,\\; 3^2=9,\\; 3^3=27,\\; 3^4=81\\) ✓"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {"Então \\(n - 1 = 4\\), logo \\(n = 5\\)"}
                    </MathText>
                  </div>
                </div>
              </div>

              <div className={"callout tip"}>
                <b>{"Outro jeito: “divida até chegar em 1”"}</b>
                {
                  "Pegue 81 e divida por 3 repetidamente, contando: 81 → 27 → 9 → 3 → 1. Foram "
                }
                <b>{"4 divisões"}</b>
                <MathText>
                  {", então \\(n-1 = 4\\). Funciona com qualquer razão."}
                </MathText>
              </div>

              <div className={"callout warning"}>
                <b>{"Não esqueça do último passo!"}</b>
                {"O que você descobre é o "}
                <b>{"expoente"}</b>
                <MathText>{" (\\(n-1\\)). A posição é esse número "}</MathText>
                <b>{"mais 1"}</b>
                {"."}
              </div>

              <h3>
                <MathText>{"C) Descobrindo a razão \\(q\\)"}</MathText>
              </h3>

              <p>
                <MathText>
                  {"Aqui você isola \\(q^{\\,n-1}\\) e pergunta: "}
                </MathText>
                <i>
                  <MathText>
                    {
                      "“qual número, multiplicado por ele mesmo \\(n-1\\) vezes, dá este resultado?”"
                    }
                  </MathText>
                </i>
                {" (isso é uma raiz)."}
              </p>

              <div className={"mt-3 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  <MathText>
                    {
                      "EXEMPLO — \\(a_1 = 2\\) e \\(a_4 = 54\\). Qual é a razão?"
                    }
                  </MathText>
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>
                      {"\\(54 = 2 \\cdot q^{\\,4-1} = 2 \\cdot q^3\\)"}
                    </MathText>
                  </div>

                  <div>
                    <MathText>{"Divido por 2:   \\(27 = q^3\\)"}</MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "Qual número ao cubo dá 27?   \\(3 \\cdot 3 \\cdot 3 = 27\\) ✓"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>{"\\(q = 3\\)"}</MathText>
                  </div>
                </div>
              </div>

              <div className={"callout info"}>
                <b>{"Expoente par? Cuidado com os dois sinais"}</b>
                <MathText>
                  {
                    "Se \\(q^2 = 25\\), tanto \\(5\\) quanto \\(-5\\) servem (\\((-5)^2 = 25\\) também). Se o enunciado disser “termos positivos” ou “razão positiva”, fique com o positivo. Se o expoente for "
                  }
                </MathText>
                <u>{"ímpar"}</u>
                <MathText>
                  {
                    " (como \\(q^3 = 27\\)), só há uma resposta: o sinal de \\(q\\) é o mesmo do resultado."
                  }
                </MathText>
              </div>

              <p>
                {"Tabelas que ajudam: "}
                <b>{"quadrados"}</b>
                {" 4, 9, 16, 25, 36, 49, 64, 81, 100 · "}
                <b>{"cubos"}</b>
                {" 8, 27, 64, 125 · "}
                <b>{"quartas potências"}</b>
                {" 16, 81, 256, 625."}
              </p>

              <h3>{"Qual caminho seguir? Quadro-resumo"}</h3>

              <table className={"tb"}>
                <thead>
                  <tr>
                    <th>{"Eu quero…"}</th>
                    <th>{"Eu tenho…"}</th>
                    <th>{"O que faço"}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <MathText>{"\\(a_n\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(a_1, q, n\\)"}</MathText>
                    </td>
                    <td>{"Substituir e calcular"}</td>
                  </tr>

                  <tr>
                    <td>
                      <MathText>{"\\(a_1\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(a_n, q, n\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"Calcular \\(q^{n-1}\\) e "}</MathText>
                      <b>{"dividir"}</b>
                      <MathText>{" \\(a_n\\) por ele"}</MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <MathText>{"\\(n\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(a_n, a_1, q\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>
                        {"Dividir \\(a_n \\div a_1\\) e descobrir o expoente; "}
                      </MathText>
                      <b>{"somar 1"}</b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <MathText>{"\\(q\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(a_n, a_1, n\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>
                        {
                          "Dividir \\(a_n \\div a_1\\) e extrair a raiz de índice \\(n-1\\)"
                        }
                      </MathText>
                    </td>
                  </tr>
                </tbody>
              </table>

              <QuickCheck index={6} />

              <QuickCheck index={7} />

              <button className={"gobtn"} data-goto={"6"}>
                {"✏️ Treinar: Nível 6 e 7"}
              </button>
            </article>

            <article className={"lesson"} id={"l6"}>
              <div className={"lesson-tag"}>{"Lição 6"}</div>

              <h2>{"Propriedades e interpolação geométrica"}</h2>

              <h3>{"6.1 Termo médio (média geométrica)"}</h3>

              <p>
                {"Pegue três termos "}
                <b>{"vizinhos"}</b>
                <MathText>
                  {
                    " de uma P.G.: \\(a,\\ b,\\ c\\). A razão entre eles é a mesma: \\(\\tfrac{b}{a} = \\tfrac{c}{b}\\). Multiplicando em cruz:"
                  }
                </MathText>
              </p>

              <div className={"formula"}>
                <MathText>{"\\[b^2 = a \\cdot c\\]"}</MathText>
              </div>

              <p>
                {"“O "}
                <b>{"quadrado do termo do meio"}</b>
                {" é igual ao "}
                <b>{"produto dos extremos"}</b>
                {
                  ".” Isso é ótimo para achar um termo desconhecido sem precisar da razão."
                }
              </p>

              <div className={"mt-3 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  <MathText>
                    {
                      "EXEMPLO 1 — Para que \\(x\\) a sequência \\((x,\\ 6,\\ 18)\\) é uma P.G.?"
                    }
                  </MathText>
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>{"\\(6^2 = x \\cdot 18\\)"}</MathText>
                  </div>

                  <div>
                    <MathText>{"\\(36 = 18x\\)"}</MathText>
                  </div>

                  <div>
                    <MathText>
                      {"\\(x = 36 \\div 18 = 2\\)   ✓ (2, 6, 18 → \\(q=3\\))"}
                    </MathText>
                  </div>
                </div>
              </div>

              <div className={"mt-3 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  <MathText>
                    {
                      "EXEMPLO 2 — \\((4,\\ x,\\ 16)\\) é P.G. de termos positivos. Qual é \\(x\\)?"
                    }
                  </MathText>
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>{"\\(x^2 = 4 \\cdot 16 = 64\\)"}</MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "\\(x = \\pm 8\\), mas os termos são positivos, então \\(x = 8\\)"
                      }
                    </MathText>
                  </div>
                </div>
              </div>

              <div className={"callout info"}>
                <b>{"Sem a palavra “positivos”"}</b>
                {" haveria "}
                <u>{"duas"}</u>
                <MathText>
                  {
                    " respostas: (4, 8, 16) com \\(q=2\\) e (4, −8, 16) com \\(q=-2\\). As duas são P.G.!"
                  }
                </MathText>
              </div>

              <h3>{"6.2 Termos equidistantes dos extremos"}</h3>

              <p>
                {
                  "Em uma P.G. finita, o produto de dois termos que estão à mesma distância dos extremos é sempre o mesmo. Exemplo com (2, 6, 18, 54, 162):"
                }
              </p>

              <div className={"formula"}>
                <MathText>
                  {
                    "\\[a_1 \\cdot a_5 = 2 \\cdot 162 = 324 \\qquad a_2 \\cdot a_4 = 6 \\cdot 54 = 324 \\qquad a_3^2 = 18^2 = 324\\]"
                  }
                </MathText>
              </div>

              <p>
                <MathText>
                  {
                    "Use quando o problema dá termos “simétricos” (por exemplo \\(a_2\\) e \\(a_4\\) para achar \\(a_3\\))."
                  }
                </MathText>
              </p>

              <h3>
                {"6.3 Interpolação geométrica (inserir “meios geométricos”)"}
              </h3>

              <p>
                <b>{"Interpolar"}</b>
                {
                  " é inserir termos entre dois números dados, de modo a formar uma P.G. Os termos inseridos chamam-se "
                }
                <b>{"meios geométricos"}</b>
                {"."}
              </p>

              <div className={"callout tip"}>
                <b>{"O segredo"}</b>
                <MathText>
                  {
                    "Se vamos inserir \\(m\\) meios entre \\(A\\) e \\(B\\), a P.G. fica com \\(n = m + 2\\) termos (os \\(m\\) inseridos + os 2 extremos), com \\(a_1 = A\\) e \\(a_n = B\\). Depois é só usar o termo geral para achar \\(q\\)."
                  }
                </MathText>
              </div>

              <div className={"mt-3 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  {"EXEMPLO — Insira 3 meios geométricos entre 2 e 162."}
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>
                      {
                        "\\(m = 3\\) ⇒ \\(n = 3 + 2 = 5\\) termos; \\(a_1 = 2\\); \\(a_5 = 162\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {"\\(162 = 2 \\cdot q^{\\,5-1} = 2 q^4\\)"}
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {"\\(q^4 = 162 \\div 2 = 81\\)   ⇒   \\(q = 3\\)   "}
                    </MathText>
                    <small>
                      <MathText>{"(pois \\(3^4 = 81\\))"}</MathText>
                    </small>
                  </div>

                  <div>
                    <MathText>
                      {
                        "P.G.: \\((2,\\ \\mathbf{6},\\ \\mathbf{18},\\ \\mathbf{54},\\ 162)\\)"
                      }
                    </MathText>
                  </div>
                </div>
              </div>

              <h3>{"6.4 Truque para três números em P.G."}</h3>

              <p>
                {"Quando o problema fala de "}
                <b>{"três números em P.G."}</b>
                {" com soma ou produto dados, escreva-os como "}
                <b>
                  <MathText>{"\\(\\tfrac{x}{q},\\ x,\\ x\\cdot q\\)"}</MathText>
                </b>
                <MathText>
                  {". Assim, o produto vira simplesmente \\(x^3\\)."}
                </MathText>
              </p>

              <div className={"mt-3 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  {
                    "EXEMPLO — Três números em P.G. têm produto 216 e soma 26. Quais são?"
                  }
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>
                      {
                        "\\(\\tfrac{x}{q}\\cdot x \\cdot xq = x^3 = 216\\) ⇒ \\(x = 6\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "Soma: \\(\\tfrac{6}{q} + 6 + 6q = 26\\) ⇒ \\(\\tfrac{6}{q} + 6q = 20\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "Multiplico por \\(q\\): \\(6 + 6q^2 = 20q\\) ⇒ \\(3q^2 - 10q + 3 = 0\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "Bhaskara: \\(\\Delta = 100 - 36 = 64\\); \\(q = \\tfrac{10 \\pm 8}{6}\\) ⇒ \\(q = 3\\) ou \\(q = \\tfrac13\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "Com \\(q=3\\): (2, 6, 18)   (com \\(q=\\tfrac13\\) é a mesma lista ao contrário)"
                      }
                    </MathText>
                  </div>
                </div>
              </div>

              <h3>{"6.5 Para curiosos: produto dos termos"}</h3>

              <p>
                <MathText>
                  {
                    "O produto dos \\(n\\) primeiros termos pode ser calculado emparelhando os extremos: \\(P_n = (a_1 \\cdot a_n)^{n/2}\\). Exemplo: (2, 4, 8, 16): \\(2\\cdot4\\cdot8\\cdot16 = 1024\\) e \\((2\\cdot16)^{4/2} = 32^2 = 1024\\) ✓."
                  }
                </MathText>
              </p>

              <QuickCheck index={8} />

              <button className={"gobtn"} data-goto={"8"}>
                {"✏️ Treinar: Nível 8 e 9"}
              </button>
            </article>

            <article className={"lesson"} id={"l7"}>
              <div className={"lesson-tag"}>{"Lição 7"}</div>

              <h2>{"Soma dos n primeiros termos"}</h2>

              <h3>{"7.1 O problema"}</h3>

              <p>
                <MathText>
                  {
                    "Somar (3, 6, 12, 24) à mão é fácil: \\(3+6+12+24 = 45\\). Mas e a soma dos 20 primeiros termos? Precisamos de uma fórmula. Vamos "
                  }
                </MathText>
                <b>{"descobrir"}</b>
                {" como ela nasce (é uma ideia linda e simples)."}
              </p>

              <h3>{"7.2 De onde vem a fórmula (com a P.G. 1, 2, 4, 8)"}</h3>

              <div className={"mt-3 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>{"\\(S = 1 + 2 + 4 + 8\\)"}</MathText>
                  </div>

                  <div>
                    <MathText>{"Multiplico tudo por \\(q = 2\\):"}</MathText>
                  </div>

                  <div>
                    <MathText>{"\\(2S = 2 + 4 + 8 + 16\\)"}</MathText>
                  </div>

                  <div>
                    <MathText>
                      {"Subtraio: \\(2S - S = (2+4+8+16) - (1+2+4+8)\\)"}
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {"Quase tudo se cancela: \\(S = 16 - 1 = 15\\) ✓"}
                    </MathText>
                  </div>
                </div>
              </div>

              <p>
                <MathText>
                  {
                    "Em geral, multiplicar a soma por \\(q\\) “empurra” todos os termos um lugar para frente. Ao subtrair, sobram só o "
                  }
                </MathText>
                <b>{"termo novo do final"}</b>
                <MathText>{" (\\(a_1 q^n\\)) e o "}</MathText>
                <b>{"primeiro"}</b>
                <MathText>{" (\\(a_1\\)):"}</MathText>
              </p>

              <div className={"formula"}>
                <MathText>
                  {
                    "\\[S_n \\cdot q - S_n = a_1 q^n - a_1 \\;\\Rightarrow\\; S_n (q-1) = a_1 (q^n - 1)\\]"
                  }
                </MathText>
              </div>

              <h3>{"7.3 A fórmula"}</h3>

              <div className={"formula"}>
                <MathText>
                  {
                    "\\[S_n = \\frac{a_1 \\cdot (q^n - 1)}{q - 1} \\qquad (q \\neq 1)\\]"
                  }
                </MathText>
              </div>

              <ul>
                <li>
                  <b>
                    <MathText>{"\\(S_n\\)"}</MathText>
                  </b>
                  {": a soma dos "}
                  <b>{"n primeiros termos"}</b>
                  {"."}
                </li>

                <li>
                  {"Aqui o expoente é "}
                  <b>
                    <MathText>{"\\(n\\)"}</MathText>
                  </b>
                  {" (e "}
                  <u>{"não"}</u>
                  <MathText>{" \\(n-1\\)): estamos somando "}</MathText>
                  <i>{"n"}</i>
                  {" termos."}
                </li>

                <li>
                  <b>
                    <MathText>{"Se \\(q = 1\\)"}</MathText>
                  </b>
                  <MathText>
                    {
                      ": todos os termos são iguais, então \\(S_n = n \\cdot a_1\\) (a fórmula acima daria divisão por zero)."
                    }
                  </MathText>
                </li>

                <li>
                  <b>{"Variante útil"}</b>
                  <MathText>
                    {
                      " quando você conhece o último termo \\(a_n\\): \\(\\displaystyle S_n = \\frac{a_n \\cdot q - a_1}{q - 1}\\)."
                    }
                  </MathText>
                </li>

                <li>
                  <MathText>
                    {
                      "Para \(0 < q < 1\), você pode usar a versão equivalente \(\displaystyle S_n = \frac{a_1(1-q^n)}{1-q}\), que evita sinais negativos."
                    }
                  </MathText>
                </li>
              </ul>

              <h3>{"7.4 A receita no papel"}</h3>

              <ol>
                <li>
                  <MathText>
                    {
                      "Anote \\(a_1\\), \\(q\\) e \\(n\\) (quantos termos você vai somar)."
                    }
                  </MathText>
                </li>

                <li>{"Escreva a fórmula e substitua."}</li>

                <li>
                  {"Calcule a "}
                  <b>{"potência"}</b>
                  <MathText>{" \\(q^n\\)."}</MathText>
                </li>

                <li>
                  {"Faça o "}
                  <b>{"parêntese"}</b>
                  <MathText>{" \\(q^n - 1\\) e o "}</MathText>
                  <b>{"denominador"}</b>
                  <MathText>{" \\(q - 1\\)."}</MathText>
                </li>

                <li>
                  <MathText>
                    {"Multiplique \\(a_1\\) pelo parêntese e "}
                  </MathText>
                  <b>{"divida"}</b>
                  {" pelo denominador."}
                </li>

                <li>
                  <b>{"Confira"}</b>
                  <MathText>
                    {" somando à mão se \\(n\\) for pequeno."}
                  </MathText>
                </li>
              </ol>

              <div className={"mt-4 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  {"EXEMPLO 1 — Some os 4 primeiros termos de (3, 6, 12, …)"}
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>
                      {"\\(a_1 = 3\\), \\(q = 2\\), \\(n = 4\\)"}
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {"\\(S_4 = \\dfrac{3 \\cdot (2^4 - 1)}{2 - 1}\\)"}
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "\\(2^4 = 16\\) ⇒ \\(S_4 = \\dfrac{3 \\cdot (16 - 1)}{1} = \\dfrac{3 \\cdot 15}{1}\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {"\\(S_4 = 45\\)   ✓ (confere: \\(3+6+12+24 = 45\\))"}
                    </MathText>
                  </div>
                </div>
              </div>

              <div className={"mt-4 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  {
                    "EXEMPLO 2 — Razão fracionária: some os 4 primeiros termos de (64, 32, 16, …)"
                  }
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>
                      {"\\(a_1 = 64\\), \\(q = \\tfrac{1}{2}\\), \\(n = 4\\)"}
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "\\(q^4 = \\tfrac{1}{16}\\) ⇒ \\(q^4 - 1 = \\tfrac{1}{16} - \\tfrac{16}{16} = -\\tfrac{15}{16}\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {"\\(q - 1 = \\tfrac{1}{2} - 1 = -\\tfrac{1}{2}\\)"}
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "\\(S_4 = \\dfrac{64 \\cdot \\left(-\\tfrac{15}{16}\\right)}{-\\tfrac{1}{2}} = \\dfrac{-60}{-\\tfrac12} = 120\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>{"Confere: \\(64+32+16+8 = 120\\) ✓"}</MathText>
                  </div>
                </div>
              </div>

              <div className={"callout warning"}>
                <b>{"Atenção"}</b>
                {"Sempre confira se o problema pede a soma dos "}
                <b>{"n primeiros termos"}</b>
                <MathText>{" (use \\(S_n\\)) ou apenas "}</MathText>
                <b>
                  <MathText>{"o termo \\(a_n\\)"}</MathText>
                </b>
                {". São contas diferentes!"}
              </div>

              <QuickCheck index={9} />

              <button className={"gobtn"} data-goto={"10"}>
                {"✏️ Treinar: Nível 10"}
              </button>
            </article>

            <article className={"lesson"} id={"l8"}>
              <div className={"lesson-tag"}>{"Lição 8"}</div>

              <h2>{"Soma infinita e dízimas periódicas"}</h2>

              <h3>{"8.1 Somar “para sempre” pode dar um número finito?"}</h3>

              <p>
                {
                  "Imagine um quadrado de área 1. Pinte metade dele. Depois pinte metade do que sobrou. Depois metade do que sobrou… para sempre."
                }
              </p>

              <div className={"seq"}>
                <span className={"t"}>{"½"}</span>
                <span className={"a"}>{"+"}</span>
                <span className={"t"}>{"¼"}</span>
                <span className={"a"}>{"+"}</span>
                <span className={"t"}>{"⅛"}</span>
                <span className={"a"}>{"+"}</span>
                <span className={"t"}>{"1/16"}</span>
                <span className={"a"}>{"+"}</span>
                <span className={"t"}>{"…"}</span>
                <span className={"a"}>{"="}</span>
                <span className={"t"}>{"1"}</span>
              </div>

              <p>
                {
                  "A cada passo a soma chega mais perto de 1, mas nunca passa: 0,5 → 0,75 → 0,875 → 0,9375 → 0,96875… Somando infinitos termos, o resultado é "
                }
                <b>{"exatamente 1"}</b>
                {". (Veja isso no "}
                <b>{"Laboratório"}</b>
                {".)"}
              </p>

              <h3>{"8.2 Quando isso funciona?"}</h3>

              <p>
                {"Só quando os termos "}
                <b>{"vão ficando cada vez mais perto de zero"}</b>
                {". Isso acontece quando a razão está "}
                <b>{"entre −1 e 1"}</b>
                {":"}
              </p>

              <div className={"formula"}>
                <MathText>{"\\[-1 "}</MathText>
                {"<"}
                {" q "}
                {"<"}
                {" 1 \\quad (\\text{ou } |q| "}
                {"<"}
                {" 1)\\]"}
              </div>

              <p>
                <MathText>
                  {
                    "Se \\(|q| \\geq 1\\), os termos não encolhem (1 + 2 + 4 + 8 + … cresce sem parar; 1 − 1 + 1 − 1 + … fica pulando). Dizemos que a soma "
                  }
                </MathText>
                <b>{"diverge"}</b>
                {" (não existe valor finito)."}
              </p>

              <h3>{"8.3 A fórmula"}</h3>

              <p>
                <MathText>
                  {
                    "Na soma finita, \\(S_n = \\dfrac{a_1(q^n - 1)}{q - 1}\\). Quando \\(|q|"
                  }
                </MathText>
                {"<"}
                <MathText>
                  {
                    "1\\) e \\(n\\) fica enorme, \\(q^n\\) vira praticamente 0. Sobra:"
                  }
                </MathText>
              </p>

              <div className={"formula"}>
                <MathText>
                  {"\\[S_\\infty = \\frac{a_1}{1 - q} \\qquad (|q| "}
                </MathText>
                {"<"}
                {" 1)\\]"}
              </div>

              <div className={"mt-4 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  {"EXEMPLO 1 — Some todos os termos de (4, 2, 1, ½, …)"}
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>
                      {
                        "\\(a_1 = 4\\), \\(q = 2 \\div 4 = \\tfrac{1}{2}\\) — está entre −1 e 1 ✓"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "\\(S = \\dfrac{4}{1 - \\tfrac{1}{2}} = \\dfrac{4}{\\tfrac{1}{2}} = 4 \\cdot 2 = 8\\)"
                      }
                    </MathText>
                  </div>
                </div>
              </div>

              <div className={"mt-4 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  {"EXEMPLO 2 — Razão negativa: (6, −3, 3/2, −3/4, …)"}
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>
                      {"\\(q = -3 \\div 6 = -\\tfrac{1}{2}\\) ✓"}
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "\\(S = \\dfrac{6}{1 - \\left(-\\tfrac{1}{2}\\right)} = \\dfrac{6}{\\tfrac{3}{2}} = 6 \\cdot \\tfrac{2}{3} = 4\\)"
                      }
                    </MathText>
                  </div>
                </div>
              </div>

              <h3>{"8.4 Dízimas periódicas viram fração"}</h3>

              <p>
                <MathText>
                  {
                    "Uma dízima como \\(0{,}333\\ldots\\) é uma soma infinita: \\(0{,}3 + 0{,}03 + 0{,}003 + \\dots\\). Isso é uma P.G. com \\(a_1 = \\tfrac{3}{10}\\) e \\(q = \\tfrac{1}{10}\\)."
                  }
                </MathText>
              </p>

              <div className={"mt-3 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  <MathText>
                    {"EXEMPLO 3 — Escreva \\(0{,}333\\ldots\\) como fração"}
                  </MathText>
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>
                      {"\\(a_1 = \\tfrac{3}{10}\\), \\(q = \\tfrac{1}{10}\\)"}
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "\\(S = \\dfrac{\\tfrac{3}{10}}{1 - \\tfrac{1}{10}} = \\dfrac{\\tfrac{3}{10}}{\\tfrac{9}{10}} = \\dfrac{3}{9} = \\dfrac{1}{3}\\)"
                      }
                    </MathText>
                  </div>
                </div>
              </div>

              <div className={"callout tip"}>
                <b>{"Para dízimas de 2 casas"}</b>
                <MathText>
                  {
                    "Em \\(0{,}2525\\ldots\\) o bloco que se repete é “25” (2 algarismos): \\(a_1 = \\tfrac{25}{100}\\) e \\(q = \\tfrac{1}{100}\\). Resultado: \\(\\tfrac{25}{99}\\)."
                  }
                </MathText>
              </div>

              <QuickCheck index={10} />

              <button className={"gobtn"} data-goto={"11"}>
                {"✏️ Treinar: Nível 11"}
              </button>
            </article>

            <article className={"lesson"} id={"l9"}>
              <div className={"lesson-tag"}>{"Lição 9"}</div>

              <h2>{"Para que serve a P.G.?"}</h2>

              <p>
                {"A P.G. aparece sempre que algo "}
                <b>
                  {
                    "cresce ou diminui por uma porcentagem constante a cada período"
                  }
                </b>
                {". E isso acontece em todo lugar."}
              </p>

              <h3>{"9.1 A chave: porcentagem vira razão"}</h3>

              <p>
                {
                  "Aumentar 10% significa ficar com 100% + 10% = 110% do valor, ou seja, "
                }
                <b>{"multiplicar por 1,10"}</b>
                {". Diminuir 10% significa ficar com 90%, ou seja, "}
                <b>{"multiplicar por 0,90"}</b>
                {". A razão da P.G. é esse "}
                <b>{"fator de multiplicação"}</b>
                {":"}
              </p>

              <div className={"formula"}>
                <MathText>
                  {
                    "\\[q = 1 + i \\qquad (i = \\text{taxa em forma decimal; negativa se for queda})\\]"
                  }
                </MathText>
              </div>

              <table className={"tb"}>
                <thead>
                  <tr>
                    <th>{"O que acontece a cada período"}</th>
                    <th>{"Conta"}</th>
                    <th>
                      <MathText>{"Razão \\(q\\)"}</MathText>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{"aumenta 10%"}</td>
                    <td>
                      <MathText>{"\\(1 + 0{,}10\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(1{,}10\\)"}</MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>{"aumenta 50%"}</td>
                    <td>
                      <MathText>{"\\(1 + 0{,}50\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(1{,}5\\)"}</MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>{"dobra (aumenta 100%)"}</td>
                    <td>
                      <MathText>{"\\(1 + 1\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(2\\)"}</MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>{"diminui 10%"}</td>
                    <td>
                      <MathText>{"\\(1 - 0{,}10\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(0{,}9\\)"}</MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>{"diminui 25%"}</td>
                    <td>
                      <MathText>{"\\(1 - 0{,}25\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(0{,}75\\)"}</MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>{"cai pela metade (−50%)"}</td>
                    <td>
                      <MathText>{"\\(1 - 0{,}5\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(0{,}5\\)"}</MathText>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3>{"9.2 Onde isso é usado"}</h3>

              <div className={"grid sm:grid-cols-2 gap-3 mt-3 text-sm"}>
                <div className={"bg-emerald-50 rounded-xl p-4"}>
                  <b>{"💰 Juros compostos"}</b>
                  <br />
                  {"O banco calcula os juros sobre o valor que "}
                  <u>{"já inclui"}</u>
                  <MathText>
                    {
                      " os juros anteriores. O dinheiro vira uma P.G. de razão \\(1+i\\). É por isso que dívidas “crescem sozinhas” e investimentos rendem cada vez mais."
                    }
                  </MathText>
                </div>

                <div className={"bg-blue-50 rounded-xl p-4"}>
                  <b>{"🦠 Populações e viralização"}</b>
                  <br />
                  {
                    "Bactérias que se dividem, uma doença que contagia mais pessoas a cada rodada, um vídeo que é compartilhado: todos seguem uma P.G."
                  }
                </div>

                <div className={"bg-amber-50 rounded-xl p-4"}>
                  <b>{"🚗 Depreciação"}</b>
                  <br />
                  {
                    "Um carro, celular ou máquina perde uma porcentagem do valor por ano. Valor após "
                  }
                  <i>{"t"}</i>
                  {" anos = P.G. com razão menor que 1."}
                </div>

                <div className={"bg-sky-50 rounded-xl p-4"}>
                  <b>{"☢️ Meia-vida e remédios"}</b>
                  <br />
                  <MathText>
                    {
                      "Materiais radioativos e medicamentos no sangue caem pela metade em intervalos iguais de tempo: razão \\(\\tfrac12\\) a cada meia-vida."
                    }
                  </MathText>
                </div>

                <div className={"bg-violet-50 rounded-xl p-4"}>
                  <b>{"💻 Tecnologia"}</b>
                  <br />
                  {
                    "Com 1 bit há 2 opções; com 2 bits, 4; com 3 bits, 8… as possibilidades formam uma P.G. de razão 2. Tamanhos de memória (1, 2, 4, 8, 16 GB…) também."
                  }
                </div>

                <div className={"bg-pink-50 rounded-xl p-4"}>
                  <b>{"🎵 Música"}</b>
                  <br />
                  <MathText>
                    {
                      "A frequência de uma nota dobra a cada oitava, e cada semitom multiplica a frequência por \\(2^{1/12} \\approx 1{,}0595\\). O piano é uma P.G.!"
                    }
                  </MathText>
                </div>
              </div>

              <h3>{"9.3 Exemplo completo: juros compostos"}</h3>

              <div className={"mt-3 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  {
                    "Aplico R$ 2.000 a 5% ao mês. Quanto terei depois de 3 meses?"
                  }
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <MathText>
                      {"Aumenta 5% ⇒ \\(q = 1 + 0{,}05 = 1{,}05\\)"}
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {"Hoje (mês 0) é o 1º termo: \\(a_1 = 2000\\)"}
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "Mês 1 → \\(a_2\\); mês 2 → \\(a_3\\); mês 3 → \\(a_4\\). Então \\(n = 4\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <MathText>
                      {
                        "\\(a_4 = 2000 \\cdot 1{,}05^{\\,3} = 2000 \\cdot 1{,}157625 = 2315{,}25\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    {"Resposta: "}
                    <b>{"R$ 2.315,25"}</b>
                  </div>
                </div>
              </div>

              <div className={"callout warning"}>
                <b>{"A armadilha do “mês zero”"}</b>
                {"Se o enunciado fala em “depois de "}
                <i>{"t"}</i>
                <MathText>
                  {
                    " períodos” e o valor inicial é o da data 0, o valor inicial é \\(a_1\\) e o valor após "
                  }
                </MathText>
                <i>{"t"}</i>
                <MathText>
                  {
                    " períodos é \\(a_{t+1}\\). Ou seja, \\(n = t + 1\\). (Dá para pensar também como \\(\\text{valor} = a_1 \\cdot q^{\\,t}\\): são "
                  }
                </MathText>
                <i>{"t"}</i>
                {" saltos.)"}
              </div>

              <h3>{"9.4 Por que a P.G. impressiona: a lenda do xadrez"}</h3>

              <p>
                <MathText>
                  {
                    "Reza a lenda que o inventor do xadrez pediu ao rei, como recompensa, 1 grão de trigo na 1ª casa, 2 na 2ª, 4 na 3ª, e assim por diante, dobrando até a 64ª casa. O rei achou pouco… Mas só a última casa teria \\(2^{63} \\approx 9{,}2 \\times 10^{18}\\) grãos — mais trigo do que a humanidade já produziu. Uma P.G. de razão 2 "
                  }
                </MathText>
                <b>{"explode"}</b>
                {"."}
              </p>

              <button className={"gobtn"} data-gotab={"laboratorio"}>
                {"🔬 Simular crescimento no Laboratório"}
              </button>

              <button
                className={"gobtn"}
                data-goto={"12"}
                style={{ marginLeft: ".5rem" }}
              >
                {"✏️ Treinar: Nível 12"}
              </button>
            </article>

            <article className={"lesson"} id={"l10"}>
              <div className={"lesson-tag"}>{"Lição 10"}</div>

              <h2>{"Montando a conta no papel: o método completo"}</h2>

              <p>
                {"Resolver um problema é principalmente "}
                <b>{"organizar"}</b>
                {". Use sempre esta folha-modelo:"}
              </p>

              <div className={"mt-4 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  {"📝 FOLHA-MODELO (copie no caderno)"}
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <b>{"1. Dados"}</b>
                    <MathText>
                      {
                        " — escreva o que o problema dá: \\(a_1 = \\ ?\\), \\(q = \\ ?\\), \\(n = \\ ?\\), \\(a_n = \\ ?\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <b>{"2. Pergunta"}</b>
                    {
                      " — circule o que ele quer: um termo? a razão? a posição? uma soma?"
                    }
                  </div>

                  <div>
                    <b>{"3. Fórmula"}</b>
                    {" — escolha a fórmula certa (veja a tabela abaixo)"}
                  </div>

                  <div>
                    <b>{"4. Substituição"}</b>
                    {
                      " — troque as letras pelos números (parênteses em negativos e frações)"
                    }
                  </div>

                  <div>
                    <b>{"5. Contas"}</b>
                    {" — nesta ordem: parênteses → potências → × e ÷ → + e −"}
                  </div>

                  <div>
                    <b>{"6. Resposta + conferência"}</b>
                    {
                      " — escreva a resposta com unidade e teste (listando termos ou fazendo sentido)"
                    }
                  </div>
                </div>
              </div>

              <h3>{"Qual fórmula usar? (leia a pergunta)"}</h3>

              <table className={"tb"}>
                <thead>
                  <tr>
                    <th>{"Se a pergunta é…"}</th>
                    <th>{"Use"}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{"“Qual é a razão?”"}</td>
                    <td>
                      <MathText>
                        {
                          "\\(q = a_2 \\div a_1\\) (ou termo geral, se faltar termo vizinho)"
                        }
                      </MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      {"“Qual é o "}
                      <i>{"n"}</i>
                      {"-ésimo termo?”"}
                    </td>
                    <td>
                      <MathText>{"\\(a_n = a_1 \\cdot q^{\\,n-1}\\)"}</MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>{"“Que posição / quantos termos tem?”"}</td>
                    <td>
                      <MathText>{"termo geral, isolando \\(n\\)"}</MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>{"“Qual o primeiro termo?”"}</td>
                    <td>
                      <MathText>{"termo geral, isolando \\(a_1\\)"}</MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      {"“Soma dos "}
                      <i>{"n"}</i>
                      {" primeiros termos”"}
                    </td>
                    <td>
                      <MathText>
                        {"\\(S_n = \\dfrac{a_1(q^n - 1)}{q - 1}\\)"}
                      </MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <MathText>
                        {"“Soma de todos os termos” (infinitos, \\(|q|"}
                      </MathText>
                      {"<"}
                      {"1\\))"}
                    </td>
                    <td>
                      <MathText>{"\\(S = \\dfrac{a_1}{1-q}\\)"}</MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      {"“Três termos seguidos / valor de x para ser P.G.”"}
                    </td>
                    <td>
                      <MathText>{"\\(b^2 = a \\cdot c\\)"}</MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>{"“Insira … meios geométricos”"}</td>
                    <td>
                      <MathText>{"\\(n = m + 2\\) e termo geral"}</MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>{"“Aumenta/diminui …% por período”"}</td>
                    <td>
                      <MathText>{"\\(q = 1 \\pm i\\) e termo geral"}</MathText>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3>{"Problema completo, resolvido na folha-modelo"}</h3>

              <div className={"mt-3 rounded-xl border border-pink-200 bg-[#fffdf8] bg-[length:100%_2rem] bg-[linear-gradient(#fce7f3_1px,transparent_1px)] p-5 shadow-[0_8px_24px_#4c1d950d]"}>
                <div className={"text-sm font-bold text-pink-700 mb-3"}>
                  {
                    "“Uma cultura tem 5 bactérias, que dobram a cada hora. (a) Quantas bactérias há após 6 horas? (b) Quantas bactérias foram contadas, ao todo, nas 7 medições (hora 0 até hora 6)?”"
                  }
                </div>

                <div className={"font-serif text-xl leading-8 text-blue-900"}>
                  <div>
                    <b>{"Dados:"}</b>
                    <MathText>
                      {" \\(a_1 = 5\\) (hora 0); dobra ⇒ \\(q = 2\\)"}
                    </MathText>
                  </div>

                  <div>
                    <MathText>{"Hora 6 é o 7º termo ⇒ \\(n = 7\\)"}</MathText>
                  </div>

                  <div>
                    <b>{"(a)"}</b>
                    <MathText>
                      {
                        " \\(a_7 = 5 \\cdot 2^{\\,7-1} = 5 \\cdot 2^6 = 5 \\cdot 64 = 320\\) bactérias"
                      }
                    </MathText>
                  </div>

                  <div>
                    <b>{"(b)"}</b>
                    <MathText>
                      {
                        " \\(S_7 = \\dfrac{5 \\cdot (2^7 - 1)}{2 - 1} = \\dfrac{5 \\cdot 127}{1} = 635\\)"
                      }
                    </MathText>
                  </div>

                  <div>
                    <b>{"Conferência de (a):"}</b>
                    {" 5, 10, 20, 40, 80, 160, "}
                    <b>{"320"}</b>
                    {" ✓"}
                  </div>
                </div>
              </div>

              <h3>{"Checklist de conferência"}</h3>

              <ul>
                <li>
                  <MathText>
                    {
                      "O resultado faz sentido com o tipo da P.G.? (crescente → termos maiores; \\(q"
                    }
                  </MathText>
                  {"<"}
                  {"0\\) → sinais alternando.)"}
                </li>

                <li>
                  {"Usei "}
                  <b>
                    <MathText>{"\\(n-1\\)"}</MathText>
                  </b>
                  {" no termo geral e "}
                  <b>
                    <MathText>{"\\(n\\)"}</MathText>
                  </b>
                  {" na soma?"}
                </li>

                <li>
                  {"Se for possível, "}
                  <b>{"liste os termos"}</b>
                  {" e veja se bate."}
                </li>

                <li>
                  {
                    "A resposta tem a unidade correta (reais, bactérias, metros)?"
                  }
                </li>
              </ul>

              <div className={"callout success"}>
                <b>{"Use as Calculadoras!"}</b>
                {
                  "Na aba “Calculadoras” você digita os números do seu problema e vê o passo a passo no formato desta folha-modelo — ótimo para conferir o que você fez no papel."
                }
              </div>
            </article>

            <article className={"lesson"} id={"l11"}>
              <div className={"lesson-tag"}>{"Lição 11"}</div>

              <h2>{"Erros comuns (e como evitar)"}</h2>

              <p>
                {
                  "Estes são os tropeços mais frequentes. Reconhecê-los vale metade da nota."
                }
              </p>

              <h3>
                <MathText>
                  {"1. Usar \\(n\\) em vez de \\(n-1\\) no termo geral"}
                </MathText>
              </h3>

              <div className={"cmp"}>
                <div className={"rounded-xl border border-red-200 bg-red-50 p-4 text-slate-700 leading-7"}>
                  <b>{"❌ Errado"}</b>
                  <br />
                  <MathText>
                    {"\\(a_5\\) de (2, 6, 18, …): \\(2 \\cdot 3^5 = 486\\)"}
                  </MathText>
                </div>

                <div className={"rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-slate-700 leading-7"}>
                  <b>{"✅ Certo"}</b>
                  <br />
                  <MathText>
                    {"\\(a_5 = 2 \\cdot 3^{5-1} = 2 \\cdot 81 = 162\\)"}
                  </MathText>
                </div>
              </div>

              <h3>
                <MathText>
                  {"2. Multiplicar \\(a_1\\) e \\(q\\) antes de elevar"}
                </MathText>
              </h3>

              <div className={"cmp"}>
                <div className={"rounded-xl border border-red-200 bg-red-50 p-4 text-slate-700 leading-7"}>
                  <b>{"❌ Errado"}</b>
                  <br />
                  <MathText>{"\\(3 \\cdot 2^4 \\to 6^4 = 1296\\)"}</MathText>
                </div>

                <div className={"rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-slate-700 leading-7"}>
                  <b>{"✅ Certo"}</b>
                  <br />
                  <MathText>
                    {"Potência primeiro: \\(3 \\cdot 2^4 = 3 \\cdot 16 = 48\\)"}
                  </MathText>
                </div>
              </div>

              <h3>{"3. Esquecer os parênteses na razão negativa"}</h3>

              <div className={"cmp"}>
                <div className={"rounded-xl border border-red-200 bg-red-50 p-4 text-slate-700 leading-7"}>
                  <b>{"❌ Errado"}</b>
                  <br />
                  <MathText>{"\\(3 \\cdot -2^4 = -48\\)"}</MathText>
                </div>

                <div className={"rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-slate-700 leading-7"}>
                  <b>{"✅ Certo"}</b>
                  <br />
                  <MathText>
                    {"\\(3 \\cdot (-2)^4 = 3 \\cdot 16 = 48\\)"}
                  </MathText>
                </div>
              </div>

              <h3>{"4. Dividir na ordem errada ao achar a razão"}</h3>

              <div className={"cmp"}>
                <div className={"rounded-xl border border-red-200 bg-red-50 p-4 text-slate-700 leading-7"}>
                  <b>{"❌ Errado"}</b>
                  <br />
                  <MathText>
                    {"(3, 12, 48): \\(3 \\div 12 = \\tfrac{1}{4}\\)"}
                  </MathText>
                </div>

                <div className={"rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-slate-700 leading-7"}>
                  <b>{"✅ Certo"}</b>
                  <br />
                  <MathText>
                    {"\\(12 \\div 3 = 4\\) (sempre o da frente ÷ o de trás)"}
                  </MathText>
                </div>
              </div>

              <h3>{"5. Esquecer de somar 1 ao achar a posição"}</h3>

              <div className={"cmp"}>
                <div className={"rounded-xl border border-red-200 bg-red-50 p-4 text-slate-700 leading-7"}>
                  <b>{"❌ Errado"}</b>
                  <br />
                  <MathText>{"\\(81 = 3^{n-1}\\) ⇒ \\(n = 4\\)"}</MathText>
                </div>

                <div className={"rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-slate-700 leading-7"}>
                  <b>{"✅ Certo"}</b>
                  <br />
                  <MathText>{"\\(n - 1 = 4\\) ⇒ \\(n = 5\\)"}</MathText>
                </div>
              </div>

              <h3>{"6. Confundir P.A. com P.G."}</h3>

              <div className={"cmp"}>
                <div className={"rounded-xl border border-red-200 bg-red-50 p-4 text-slate-700 leading-7"}>
                  <b>{"❌ Errado"}</b>
                  <br />
                  {"(2, 4, 6, 8) “é P.G. de razão 2”"}
                </div>

                <div className={"rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-slate-700 leading-7"}>
                  <b>{"✅ Certo"}</b>
                  <br />
                  <MathText>
                    {"\\(4/2 = 2\\), mas \\(6/4 = 1{,}5\\): "}
                  </MathText>
                  <u>{"não"}</u>
                  {" é P.G. (é P.A. de razão 2)"}
                </div>
              </div>

              <h3>
                <MathText>{"7. Usar a soma com \\(q = 1\\)"}</MathText>
              </h3>

              <div className={"cmp"}>
                <div className={"rounded-xl border border-red-200 bg-red-50 p-4 text-slate-700 leading-7"}>
                  <b>{"❌ Errado"}</b>
                  <br />
                  <MathText>
                    {
                      "\\(S_5\\) de (7,7,7,7,7) pela fórmula → \\(\\tfrac{7(1-1)}{1-1} = \\tfrac{0}{0}\\)"
                    }
                  </MathText>
                </div>

                <div className={"rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-slate-700 leading-7"}>
                  <b>{"✅ Certo"}</b>
                  <br />
                  <MathText>
                    {"\\(q=1\\) ⇒ \\(S_n = n \\cdot a_1 = 5 \\cdot 7 = 35\\)"}
                  </MathText>
                </div>
              </div>

              <h3>
                <MathText>
                  {"8. Aplicar a soma infinita sem checar \\(|q|"}
                </MathText>
                {"<"}
                {"1\\)"}
              </h3>

              <div className={"cmp"}>
                <div className={"rounded-xl border border-red-200 bg-red-50 p-4 text-slate-700 leading-7"}>
                  <b>{"❌ Errado"}</b>
                  <br />
                  <MathText>
                    {"(1, 2, 4, …): \\(\\tfrac{1}{1-2} = -1\\)"}
                  </MathText>
                </div>

                <div className={"rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-slate-700 leading-7"}>
                  <b>{"✅ Certo"}</b>
                  <br />
                  <MathText>
                    {"\\(q=2\\) não está entre −1 e 1: a soma "}
                  </MathText>
                  <b>{"diverge"}</b>
                  {"."}
                </div>
              </div>

              <h3>{"9. “Termo médio” com um único sinal"}</h3>

              <div className={"cmp"}>
                <div className={"rounded-xl border border-red-200 bg-red-50 p-4 text-slate-700 leading-7"}>
                  <b>{"❌ Errado"}</b>
                  <br />
                  <MathText>
                    {"\\(x^2 = 64 \\Rightarrow x = 8\\) (sempre)"}
                  </MathText>
                </div>

                <div className={"rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-slate-700 leading-7"}>
                  <b>{"✅ Certo"}</b>
                  <br />
                  <MathText>
                    {
                      "\\(x = \\pm 8\\); só fique com +8 se o enunciado disser “positivos”."
                    }
                  </MathText>
                </div>
              </div>
            </article>

            <article className={"lesson"} id={"l12"}>
              <div className={"lesson-tag"}>{"Lição 12"}</div>

              <h2>{"Resumo e folha de cola"}</h2>

              <p>{"Se for imprimir, esta é a lição para guardar."}</p>

              <table className={"tb"}>
                <thead>
                  <tr>
                    <th>{"Assunto"}</th>
                    <th>{"Fórmula"}</th>
                    <th>{"Observação"}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <b>{"Definição"}</b>
                    </td>
                    <td>
                      <MathText>{"\\(a_{n+1} = a_n \\cdot q\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>
                        {"\\(a_1 \\neq 0\\), \\(q \\neq 0\\)"}
                      </MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Razão"}</b>
                    </td>
                    <td>
                      <MathText>
                        {
                          "\\(q = \\dfrac{a_2}{a_1} = \\dfrac{a_3}{a_2} = \\cdots\\)"
                        }
                      </MathText>
                    </td>
                    <td>{"termo da frente ÷ termo de trás"}</td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Termo geral"}</b>
                    </td>
                    <td>
                      <MathText>{"\\(a_n = a_1 \\cdot q^{\\,n-1}\\)"}</MathText>
                    </td>
                    <td>
                      {"expoente é "}
                      <b>{"n − 1"}</b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Termo geral (outro ponto)"}</b>
                    </td>
                    <td>
                      <MathText>{"\\(a_n = a_m \\cdot q^{\\,n-m}\\)"}</MathText>
                    </td>
                    <td>{"vale partindo de qualquer termo"}</td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Termo médio"}</b>
                    </td>
                    <td>
                      <MathText>{"\\(b^2 = a \\cdot c\\)"}</MathText>
                    </td>
                    <td>{"3 termos seguidos"}</td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Interpolação"}</b>
                    </td>
                    <td>
                      <MathText>{"\\(n = m + 2\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>
                        {"\\(m\\) meios entre \\(a_1\\) e \\(a_n\\)"}
                      </MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Soma de n termos"}</b>
                    </td>
                    <td>
                      <MathText>
                        {"\\(S_n = \\dfrac{a_1(q^n - 1)}{q - 1}\\)"}
                      </MathText>
                    </td>
                    <td>
                      <MathText>
                        {"\\(q \\neq 1\\). Se \\(q = 1\\): \\(S_n = n\\,a_1\\)"}
                      </MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>
                        <MathText>
                          {"Soma de n termos (com \\(a_n\\))"}
                        </MathText>
                      </b>
                    </td>
                    <td>
                      <MathText>
                        {"\\(S_n = \\dfrac{a_n \\cdot q - a_1}{q - 1}\\)"}
                      </MathText>
                    </td>
                    <td>
                      <MathText>{"quando já se conhece \\(a_n\\)"}</MathText>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Soma infinita"}</b>
                    </td>
                    <td>
                      <MathText>
                        {"\\(S_\\infty = \\dfrac{a_1}{1 - q}\\)"}
                      </MathText>
                    </td>
                    <td>
                      <MathText>{"só se \\(-1 "}</MathText>
                      {"<"}
                      {" q "}
                      {"<"}
                      {" 1\\)"}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Produto de n termos"}</b>
                    </td>
                    <td>
                      <MathText>
                        {"\\(P_n = (a_1 \\cdot a_n)^{n/2}\\)"}
                      </MathText>
                    </td>
                    <td>{"curiosidade"}</td>
                  </tr>

                  <tr>
                    <td>
                      <b>{"Porcentagem → razão"}</b>
                    </td>
                    <td>
                      <MathText>{"\\(q = 1 + i\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(i\\) negativo para queda"}</MathText>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3>{"Comportamento da P.G."}</h3>

              <ul>
                <li>
                  <MathText>{"\\(q > 1\\): “explode” · \\(0 "}</MathText>
                  {"<"}
                  {" q "}
                  {"<"}
                  <MathText>{" 1\\): “encolhe” · \\(q "}</MathText>
                  {"<"}
                  <MathText>
                    {" 0\\): “alterna sinais” · \\(q = 1\\): “constante”."}
                  </MathText>
                </li>
              </ul>

              <h3>{"Glossário"}</h3>

              <ul>
                <li>
                  <b>{"Termo"}</b>
                  {": cada número da sequência. "}
                  <b>{"Razão"}</b>
                  {": o número pelo qual se multiplica. "}
                  <b>{"Posição"}</b>
                  {": o lugar do termo na lista."}
                </li>

                <li>
                  <b>{"Meio geométrico"}</b>
                  {": termo inserido entre dois outros numa P.G. "}
                  <b>{"Diverge"}</b>
                  {": soma infinita sem valor finito. "}
                  <b>{"Alternante"}</b>
                  {": P.G. com razão negativa."}
                </li>
              </ul>

              <div className={"callout success"}>
                <b>{"Você chegou ao fim da teoria! 🎉"}</b>
                {
                  "Agora vá para os exercícios e avance nível por nível. Se travar, volte à lição indicada no "
                }
                <a className="block rounded-lg px-3 py-1.5 text-sm font-semibold text-pink-700 underline hover:bg-pink-100 hover:text-pink-800" href={"#l0"}>
                  {"mapa do curso"}
                </a>
                {"."}
              </div>

              <button className={"gobtn"} data-goto={"all"}>
                {"✏️ Ir para os exercícios"}
              </button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

