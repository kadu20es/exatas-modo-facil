import { MathText } from "../../../Math/MathRenderer";
import { RadiciacaoQuickCheck } from "./RadiciacaoQuickCheck";

export function RadiciacaoCursoCompleto() {
  return (
    <>
      <section id="sec-teoria" className="space-y-6">
        <MathText>{"\n      "}</MathText>
        <div className="rounded-3xl p-7 sm:p-10 bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 text-white shadow-xl">
          <MathText>{"\n        "}</MathText>
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-200">
            <MathText>
              {"Reforço · pré-requisito do Teorema de Pitágoras · do zero"}
            </MathText>
          </span>
          <MathText>{"\n        "}</MathText>
          <h1 className="text-3xl sm:text-5xl font-black mt-2">
            <MathText>{"Radiciação"}</MathText>
          </h1>
          <MathText>{"\n        "}</MathText>
          <p className="mt-4 max-w-3xl text-indigo-100 leading-7">
            <MathText>
              {
                "Raiz quadrada exata e aproximada, simplificação de radicais e operações com raízes. Você não precisa saber nada sobre o assunto: aqui você aprende o que é, como funciona, para que serve e como montar as contas no papel. É a ferramenta que o Teorema de Pitágoras vai usar o tempo todo."
              }
            </MathText>
          </p>
          <MathText>{"\n      "}</MathText>
        </div>
        <MathText>{"\n      "}</MathText>
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 items-start">
          <MathText>{"\n        "}</MathText>
          <aside className=" lg:sticky lg:top-20 bg-white rounded-2xl border p-3 shadow-sm lg:max-h-[calc(100vh-6rem)] overflow-y-auto">
            <MathText>{"\n          "}</MathText>
            <div className="text-[11px] font-black uppercase tracking-widest text-indigo-600 px-2 pb-1">
              <MathText>{"Lições"}</MathText>
            </div>
            <MathText>{"\n          "}</MathText>
            <a href="#l0" className="block rounded-xl px-3 py-2 text-sm font-semibold leading-5 text-slate-600 hover:bg-indigo-100 hover:text-indigo-800">
              <MathText>{"0 · Comece por aqui"}</MathText>
            </a>
            <MathText>{"\n          "}</MathText>
            <a href="#l1" className="block rounded-xl px-3 py-2 text-sm font-semibold leading-5 text-slate-600 hover:bg-indigo-100 hover:text-indigo-800">
              <MathText>{"1 · Raiz quadrada exata"}</MathText>
            </a>
            <MathText>{"\n          "}</MathText>
            <a href="#l2" className="block rounded-xl px-3 py-2 text-sm font-semibold leading-5 text-slate-600 hover:bg-indigo-100 hover:text-indigo-800">
              <MathText>{"2 · Raiz não exata e estimativa"}</MathText>
            </a>
            <MathText>{"\n          "}</MathText>
            <a href="#l3" className="block rounded-xl px-3 py-2 text-sm font-semibold leading-5 text-slate-600 hover:bg-indigo-100 hover:text-indigo-800">
              <MathText>{"3 · Propriedades e simplificação"}</MathText>
            </a>
            <MathText>{"\n          "}</MathText>
            <a href="#l4" className="block rounded-xl px-3 py-2 text-sm font-semibold leading-5 text-slate-600 hover:bg-indigo-100 hover:text-indigo-800">
              <MathText>{"4 · Operações com radicais"}</MathText>
            </a>
            <MathText>{"\n          "}</MathText>
            <a href="#l5" className="block rounded-xl px-3 py-2 text-sm font-semibold leading-5 text-slate-600 hover:bg-indigo-100 hover:text-indigo-800">
              <MathText>{"5 · Problemas, erros e folha de cola"}</MathText>
            </a>
            <MathText>{"\n        "}</MathText>
          </aside>
          <MathText>{"\n        "}</MathText>
          <div className="space-y-6 min-w-0">
            <MathText>{"\n"}</MathText>
            <MathText>{"\n"}</MathText>
            <article
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
              id="l0"
            >
              <MathText>{"\n  "}</MathText>
              <div className="text-xs font-extrabold tracking-widest uppercase text-indigo-600">
                <MathText>{"Lição 0"}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <h2>
                <MathText>
                  {"Comece por aqui: o que é uma raiz quadrada?"}
                </MathText>
              </h2>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {"Imagine que você quer ladrilhar um quadrado no chão com "}
                </MathText>
                <b>
                  <MathText>{"9 ladrilhos quadrados"}</MathText>
                </b>
                <MathText>
                  {
                    " de 1 m de lado, sem sobrar nem faltar. Quantos ladrilhos cabem em cada fileira? Três. Você acabou de calcular uma "
                  }
                </MathText>
                <b>
                  <MathText>{"raiz quadrada"}</MathText>
                </b>
                <MathText>{": descobriu o "}</MathText>
                <b>
                  <MathText>{"lado"}</MathText>
                </b>
                <MathText>{" do quadrado a partir da sua "}</MathText>
                <b>
                  <MathText>{"área"}</MathText>
                </b>
                <MathText>{"."}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <h3>
                <MathText>{"0.1 A ideia em uma frase"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "Você já sabe elevar ao quadrado: \\(3^2 = 3 \\cdot 3 = 9\\). A "
                  }
                </MathText>
                <b>
                  <MathText>{"raiz quadrada"}</MathText>
                </b>
                <MathText>{" faz o caminho de volta: ela pergunta "}</MathText>
                <b>
                  <MathText>
                    {"“qual número, multiplicado por ele mesmo, dá 9?”"}
                  </MathText>
                </b>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
                <MathText>
                  {
                    "\\[ \\sqrt{9} = 3 \\quad\\text{porque}\\quad 3 \\cdot 3 = 9 \\]"
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 340 175"
                  style={{ width: "340px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Quadrado de área 9 formado por 3 por 3 quadradinhos"
                >
                  <rect
                    x="60"
                    y="20"
                    width="40"
                    height="40"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="1.5"
                  ></rect>
                  <rect
                    x="60"
                    y="60"
                    width="40"
                    height="40"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="1.5"
                  ></rect>
                  <rect
                    x="60"
                    y="100"
                    width="40"
                    height="40"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="1.5"
                  ></rect>
                  <rect
                    x="100"
                    y="20"
                    width="40"
                    height="40"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="1.5"
                  ></rect>
                  <rect
                    x="100"
                    y="60"
                    width="40"
                    height="40"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="1.5"
                  ></rect>
                  <rect
                    x="100"
                    y="100"
                    width="40"
                    height="40"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="1.5"
                  ></rect>
                  <rect
                    x="140"
                    y="20"
                    width="40"
                    height="40"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="1.5"
                  ></rect>
                  <rect
                    x="140"
                    y="60"
                    width="40"
                    height="40"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="1.5"
                  ></rect>
                  <rect
                    x="140"
                    y="100"
                    width="40"
                    height="40"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="1.5"
                  ></rect>
                  <rect
                    x="60"
                    y="20"
                    width="120"
                    height="120"
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="3"
                  ></rect>
                  <text
                    x="120"
                    y="85"
                    textAnchor="middle"
                    fontSize="16"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    "área = 9"
                  </text>
                  <text
                    x="120"
                    y="162"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    "lado = ? "
                  </text>
                  <text
                    x="40"
                    y="85"
                    textAnchor="middle"
                    fontSize="16"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    "?"
                  </text>
                  <text
                    x="270"
                    y="70"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "? × ? = 9"
                  </text>
                  <text
                    x="270"
                    y="95"
                    textAnchor="middle"
                    fontSize="16"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    "? = 3"
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Um quadrado de área 9 tem lado 3: o lado é a raiz quadrada da área."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="callout border-l-4 border-amber-500 bg-amber-50">
                <b>
                  <MathText>{"Operação inversa"}</MathText>
                </b>
                <MathText>
                  {
                    "Assim como a subtração desfaz a soma e a divisão desfaz a multiplicação, a "
                  }
                </MathText>
                <b>
                  <MathText>
                    {"raiz quadrada desfaz a potência de expoente 2"}
                  </MathText>
                </b>
                <MathText>
                  {". Se você sabe a tabuada, já sabe quase tudo!"}
                </MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"0.2 Para que serve?"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <ul>
                <MathText>{"\n    "}</MathText>
                <li>
                  <b>
                    <MathText>{"Achar o lado de um quadrado"}</MathText>
                  </b>
                  <MathText>
                    {" quando se conhece a área (piso, terreno, toalha, tela)."}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li>
                  <b>
                    <MathText>{"Equações simples"}</MathText>
                  </b>
                  <MathText>
                    {" como \\(x^2 = 49\\) (qual número ao quadrado dá 49?)."}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li>
                  <b>
                    <MathText>{"Teorema de Pitágoras"}</MathText>
                  </b>
                  <MathText>
                    {
                      " (próximo curso): para achar o lado que falta de um triângulo retângulo você vai calcular coisas como \\(\\sqrt{3^2 + 4^2}\\). Sem saber raízes, esse teorema trava!"
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li>
                  <b>
                    <MathText>{"Trigonometria, física e computação"}</MathText>
                  </b>
                  <MathText>
                    {
                      ": distâncias, velocidades, desvios… as raízes aparecem o tempo todo."
                    }
                  </MathText>
                </li>
                <MathText>{"\n  "}</MathText>
              </ul>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"0.3 O vocabulário"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>{"COMO SE LÊ E COMO SE ESCREVE"}</MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(\\sqrt[2]{49} = 7\\)  (e como o índice 2 é o mais comum, escrevemos só \\(\\sqrt{49}\\))"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"O símbolo \\(\\sqrt{\\ \\ }\\) chama-se "}
                    </MathText>
                    <b>
                      <MathText>{"radical"}</MathText>
                    </b>
                    <MathText>{"."}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"O número de dentro (49) é o "}</MathText>
                    <b>
                      <MathText>{"radicando"}</MathText>
                    </b>
                    <MathText>{"."}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"O número pequenininho (2) é o "}</MathText>
                    <b>
                      <MathText>{"índice"}</MathText>
                    </b>
                    <MathText>{"."}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"O resultado (7) é a "}</MathText>
                    <b>
                      <MathText>{"raiz"}</MathText>
                    </b>
                    <MathText>{"."}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>{"Leia “\\(\\sqrt{49}\\)” como "}</MathText>
                <b>
                  <MathText>{"“raiz quadrada de 49”"}</MathText>
                </b>
                <MathText>{". Se o índice for 3, é a "}</MathText>
                <b>
                  <MathText>{"raiz cúbica"}</MathText>
                </b>
                <MathText>
                  {" (\\(\\sqrt[3]{8} = 2\\)); vamos vê-la na lição 1."}
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"0.4 Mapa do curso"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <table className="relative w-full border-collapse my-4 text-sm block overflow-x-auto">
                <thead>
                  <tr>
                    <th>
                      <MathText>{"Lição"}</MathText>
                    </th>
                    <th>
                      <MathText>{"O que você aprende"}</MathText>
                    </th>
                    <th>
                      <MathText>{"Exercícios"}</MathText>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td>
                      <MathText>{"1 · Raiz exata"}</MathText>
                    </td>
                    <td>
                      <MathText>
                        {
                          "Quadrados perfeitos, raiz de frações e decimais, fatoração, raiz cúbica"
                        }
                      </MathText>
                    </td>
                    <td>
                      <MathText>{"Nível 1"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td>
                      <MathText>{"2 · Estimativa"}</MathText>
                    </td>
                    <td>
                      <MathText>
                        {
                          "Raízes que “não fecham”: entre quais inteiros estão, aproximar, comparar"
                        }
                      </MathText>
                    </td>
                    <td>
                      <MathText>{"Nível 2"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td>
                      <MathText>{"3 · Simplificação"}</MathText>
                    </td>
                    <td>
                      <MathText>
                        {
                          "\\(\\sqrt{12} = 2\\sqrt3\\): tirar números de dentro da raiz"
                        }
                      </MathText>
                    </td>
                    <td>
                      <MathText>{"Nível 3"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td>
                      <MathText>{"4 · Operações"}</MathText>
                    </td>
                    <td>
                      <MathText>
                        {"Somar, multiplicar, dividir e racionalizar radicais"}
                      </MathText>
                    </td>
                    <td>
                      <MathText>{"Nível 4"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td>
                      <MathText>{"5 · Problemas"}</MathText>
                    </td>
                    <td>
                      <MathText>
                        {"Situações do dia a dia, erros comuns, folha de cola"}
                      </MathText>
                    </td>
                    <td>
                      <MathText>{"Nível 5"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n  "}</MathText>
                </tbody>
              </table>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"0.5 Como estudar"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="grid gap-3 mt-4 md:grid-cols-3">
                <MathText>{"\n    "}</MathText>
                <div className="bg-indigo-50">
                  <b>
                    <MathText>{"1. Leia com lápis na mão"}</MathText>
                  </b>
                  <br />
                  <MathText>
                    {"Refaça cada exemplo no caderno, sem olhar a resolução."}
                  </MathText>
                </div>
                <MathText>{"\n    "}</MathText>
                <div className="bg-amber-50">
                  <b>
                    <MathText>{"2. Decore a tabuada dos quadrados"}</MathText>
                  </b>
                  <br />
                  <MathText>
                    {
                      "Conhecer \\(1^2\\) até \\(15^2\\) de cabeça faz tudo ficar rápido."
                    }
                  </MathText>
                </div>
                <MathText>{"\n    "}</MathText>
                <div className="bg-emerald-50">
                  <b>
                    <MathText>{"3. Brinque no laboratório"}</MathText>
                  </b>
                  <br />
                  <MathText>
                    {"Arraste os controles e veja as raízes “ao vivo”."}
                  </MathText>
                </div>
                <MathText>{"\n  "}</MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <RadiciacaoQuickCheck index={0} />
              <MathText>{"\n  "}</MathText>
              <RadiciacaoQuickCheck index={1} />
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-gotab="laboratorio"
              >
                <MathText>{"🔬 Abrir o laboratório"}</MathText>
              </button>
              <MathText>{"\n"}</MathText>
            </article>
            <MathText>{"\n"}</MathText>
            <MathText>{"\n"}</MathText>
            <article
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
              id="l1"
            >
              <MathText>{"\n  "}</MathText>
              <div className="text-xs font-extrabold tracking-widest uppercase text-indigo-600">
                <MathText>{"Lição 1"}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <h2>
                <MathText>{"Raiz quadrada exata"}</MathText>
              </h2>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "Quando o resultado é um número “redondinho” (inteiro, fração ou decimal que termina), dizemos que a raiz é "
                  }
                </MathText>
                <b>
                  <MathText>{"exata"}</MathText>
                </b>
                <MathText>{". O radicando, nesse caso, é um "}</MathText>
                <b>
                  <MathText>{"quadrado perfeito"}</MathText>
                </b>
                <MathText>{"."}</MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"1.1 Quadrados perfeitos"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>{"Um "}</MathText>
                <b>
                  <MathText>{"quadrado perfeito"}</MathText>
                </b>
                <MathText>
                  {
                    " é o resultado de um número inteiro multiplicado por ele mesmo. Cada quadrado perfeito é a área de um quadrado cujo lado é inteiro:"
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 366 142"
                  style={{ width: "366px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Quadrados de área 1, 4, 9, 16 e 25 com lados 1, 2, 3, 4 e 5"
                >
                  <rect
                    x="20"
                    y="102"
                    width="18"
                    height="18"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                  ></rect>
                  <text
                    x="29"
                    y="116"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    "1"
                  </text>
                  <text
                    x="29"
                    y="138"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "lado 1"
                  </text>
                  <rect
                    x="52"
                    y="84"
                    width="36"
                    height="36"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                  ></rect>
                  <text
                    x="70"
                    y="107"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    "4"
                  </text>
                  <text
                    x="70"
                    y="138"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "lado 2"
                  </text>
                  <rect
                    x="102"
                    y="66"
                    width="54"
                    height="54"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                  ></rect>
                  <text
                    x="129"
                    y="98"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    "9"
                  </text>
                  <text
                    x="129"
                    y="138"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "lado 3"
                  </text>
                  <rect
                    x="170"
                    y="48"
                    width="72"
                    height="72"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                  ></rect>
                  <text
                    x="206"
                    y="89"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    "16"
                  </text>
                  <text
                    x="206"
                    y="138"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "lado 4"
                  </text>
                  <rect
                    x="256"
                    y="30"
                    width="90"
                    height="90"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                  ></rect>
                  <text
                    x="301"
                    y="80"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    "25"
                  </text>
                  <text
                    x="301"
                    y="138"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "lado 5"
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {"Áreas 1, 4, 9, 16 e 25: os lados são 1, 2, 3, 4 e 5."}
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <table className="relative w-full border-collapse my-4 text-sm block overflow-x-auto">
                <thead>
                  <tr>
                    <th>
                      <MathText>{"n"}</MathText>
                    </th>
                    <th>
                      <MathText>{"1"}</MathText>
                    </th>
                    <th>
                      <MathText>{"2"}</MathText>
                    </th>
                    <th>
                      <MathText>{"3"}</MathText>
                    </th>
                    <th>
                      <MathText>{"4"}</MathText>
                    </th>
                    <th>
                      <MathText>{"5"}</MathText>
                    </th>
                    <th>
                      <MathText>{"6"}</MathText>
                    </th>
                    <th>
                      <MathText>{"7"}</MathText>
                    </th>
                    <th>
                      <MathText>{"8"}</MathText>
                    </th>
                    <th>
                      <MathText>{"9"}</MathText>
                    </th>
                    <th>
                      <MathText>{"10"}</MathText>
                    </th>
                  </tr>
                </thead>
                <MathText>{"\n  "}</MathText>
                <tbody>
                  <tr>
                    <td>
                      <MathText>{"\\(n^2\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"1"}</MathText>
                    </td>
                    <td>
                      <MathText>{"4"}</MathText>
                    </td>
                    <td>
                      <MathText>{"9"}</MathText>
                    </td>
                    <td>
                      <MathText>{"16"}</MathText>
                    </td>
                    <td>
                      <MathText>{"25"}</MathText>
                    </td>
                    <td>
                      <MathText>{"36"}</MathText>
                    </td>
                    <td>
                      <MathText>{"49"}</MathText>
                    </td>
                    <td>
                      <MathText>{"64"}</MathText>
                    </td>
                    <td>
                      <MathText>{"81"}</MathText>
                    </td>
                    <td>
                      <MathText>{"100"}</MathText>
                    </td>
                  </tr>
                </tbody>
              </table>
              <MathText>{"\n  "}</MathText>
              <table className="relative w-full border-collapse my-4 text-sm block overflow-x-auto">
                <thead>
                  <tr>
                    <th>
                      <MathText>{"n"}</MathText>
                    </th>
                    <th>
                      <MathText>{"11"}</MathText>
                    </th>
                    <th>
                      <MathText>{"12"}</MathText>
                    </th>
                    <th>
                      <MathText>{"13"}</MathText>
                    </th>
                    <th>
                      <MathText>{"14"}</MathText>
                    </th>
                    <th>
                      <MathText>{"15"}</MathText>
                    </th>
                    <th>
                      <MathText>{"16"}</MathText>
                    </th>
                    <th>
                      <MathText>{"17"}</MathText>
                    </th>
                    <th>
                      <MathText>{"18"}</MathText>
                    </th>
                    <th>
                      <MathText>{"19"}</MathText>
                    </th>
                    <th>
                      <MathText>{"20"}</MathText>
                    </th>
                  </tr>
                </thead>
                <MathText>{"\n  "}</MathText>
                <tbody>
                  <tr>
                    <td>
                      <MathText>{"\\(n^2\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"121"}</MathText>
                    </td>
                    <td>
                      <MathText>{"144"}</MathText>
                    </td>
                    <td>
                      <MathText>{"169"}</MathText>
                    </td>
                    <td>
                      <MathText>{"196"}</MathText>
                    </td>
                    <td>
                      <MathText>{"225"}</MathText>
                    </td>
                    <td>
                      <MathText>{"256"}</MathText>
                    </td>
                    <td>
                      <MathText>{"289"}</MathText>
                    </td>
                    <td>
                      <MathText>{"324"}</MathText>
                    </td>
                    <td>
                      <MathText>{"361"}</MathText>
                    </td>
                    <td>
                      <MathText>{"400"}</MathText>
                    </td>
                  </tr>
                </tbody>
              </table>
              <MathText>{"\n  "}</MathText>
              <table className="relative w-full border-collapse my-4 text-sm block overflow-x-auto">
                <thead>
                  <tr>
                    <th>
                      <MathText>{"n"}</MathText>
                    </th>
                    <th>
                      <MathText>{"25"}</MathText>
                    </th>
                    <th>
                      <MathText>{"30"}</MathText>
                    </th>
                    <th>
                      <MathText>{"40"}</MathText>
                    </th>
                    <th>
                      <MathText>{"50"}</MathText>
                    </th>
                    <th>
                      <MathText>{"60"}</MathText>
                    </th>
                    <th>
                      <MathText>{"70"}</MathText>
                    </th>
                    <th>
                      <MathText>{"80"}</MathText>
                    </th>
                    <th>
                      <MathText>{"90"}</MathText>
                    </th>
                    <th>
                      <MathText>{"100"}</MathText>
                    </th>
                  </tr>
                </thead>
                <MathText>{"\n  "}</MathText>
                <tbody>
                  <tr>
                    <td>
                      <MathText>{"\\(n^2\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"625"}</MathText>
                    </td>
                    <td>
                      <MathText>{"900"}</MathText>
                    </td>
                    <td>
                      <MathText>{"1 600"}</MathText>
                    </td>
                    <td>
                      <MathText>{"2 500"}</MathText>
                    </td>
                    <td>
                      <MathText>{"3 600"}</MathText>
                    </td>
                    <td>
                      <MathText>{"4 900"}</MathText>
                    </td>
                    <td>
                      <MathText>{"6 400"}</MathText>
                    </td>
                    <td>
                      <MathText>{"8 100"}</MathText>
                    </td>
                    <td>
                      <MathText>{"10 000"}</MathText>
                    </td>
                  </tr>
                </tbody>
              </table>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "Para achar a raiz, procure o número na linha de baixo e olhe para cima: \\(\\sqrt{144} = 12\\), \\(\\sqrt{400} = 20\\), \\(\\sqrt{2\\,500} = 50\\)."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"1.2 Casos especiais e uma convenção"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <ul>
                <MathText>{"\n    "}</MathText>
                <li>
                  <MathText>
                    {
                      "\\(\\sqrt{0} = 0\\) (pois \\(0 \\cdot 0 = 0\\)) e \\(\\sqrt{1} = 1\\)."
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li>
                  <b>
                    <MathText>{"A raiz quadrada nunca é negativa."}</MathText>
                  </b>
                  <MathText>
                    {
                      " É verdade que \\((-5)\\cdot(-5) = 25\\), mas por convenção \\(\\sqrt{25}\\) é "
                    }
                  </MathText>
                  <b>
                    <MathText>{"só o valor positivo"}</MathText>
                  </b>
                  <MathText>
                    {
                      ": \\(\\sqrt{25} = 5\\). (Em equações como \\(x^2 = 25\\), aí sim há duas respostas: \\(x = 5\\) ou \\(x = -5\\).)"
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li>
                  <b>
                    <MathText>{"\\(\\sqrt{-9}\\) não existe"}</MathText>
                  </b>
                  <MathText>
                    {
                      " entre os números que conhecemos: nenhum número multiplicado por ele mesmo dá resultado negativo (positivo·positivo = positivo e negativo·negativo = positivo). Não se preocupe: nesta etapa, radicando negativo = “não existe”."
                    }
                  </MathText>
                </li>
                <MathText>{"\n  "}</MathText>
              </ul>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"1.3 Raiz de frações e de decimais"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {"Tire a raiz de cima e de baixo, separadamente:"}
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
                <MathText>
                  {
                    "\\[ \\sqrt{\\dfrac{9}{16}} = \\dfrac{\\sqrt9}{\\sqrt{16}} = \\dfrac{3}{4} \\]"
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>{"Com decimais, pense em "}</MathText>
                <b>
                  <MathText>{"fração com denominador 100"}</MathText>
                </b>
                <MathText>
                  {" (duas casas decimais viram uma casa na raiz):"}
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 1 — calcule \\(\\sqrt{0{,}04}\\) e \\(\\sqrt{1{,}44}\\)"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(0{,}04 = \\dfrac{4}{100}\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(\\sqrt{0{,}04} = \\dfrac{\\sqrt4}{\\sqrt{100}} = \\dfrac{2}{10} = 0{,}2\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(1{,}44 = \\dfrac{144}{100}\\) → \\(\\sqrt{1{,}44} = \\dfrac{12}{10} = 1{,}2\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Conferência: \\(1{,}2 \\cdot 1{,}2 = 1{,}44\\) ✓"}
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="callout border-l-4 border-red-500 bg-red-50">
                <b>
                  <MathText>{"Cuidado com a vírgula!"}</MathText>
                </b>
                <MathText>{"\\(\\sqrt{0{,}04} = 0{,}2\\) e "}</MathText>
                <u>
                  <MathText>{"não"}</MathText>
                </u>
                <MathText>
                  {
                    " \\(0{,}02\\). Sempre confira multiplicando: \\(0{,}2 \\cdot 0{,}2 = 0{,}04\\)."
                  }
                </MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>
                  {"1.4 Raízes de números grandes: fatoração"}
                </MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {"E se o número não está na tabela? Use a "}
                </MathText>
                <b>
                  <MathText>{"fatoração em primos"}</MathText>
                </b>
                <MathText>
                  {
                    ": divida o número pelos primos (2, 3, 5, 7…) até chegar a 1, e depois "
                  }
                </MathText>
                <b>
                  <MathText>{"junte os fatores iguais em pares"}</MathText>
                </b>
                <MathText>{". Cada par vira "}</MathText>
                <b>
                  <MathText>{"um"}</MathText>
                </b>
                <MathText>{" fator fora da raiz."}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>{"EXEMPLO 2 — calcule \\(\\sqrt{324}\\)"}</MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"324 ÷ 2 = 162"}</MathText>
                  </div>
                  <div>
                    <MathText>{"162 ÷ 2 = 81"}</MathText>
                  </div>
                  <div>
                    <MathText>{"81 ÷ 3 = 27"}</MathText>
                  </div>
                  <div>
                    <MathText>{"27 ÷ 3 = 9"}</MathText>
                  </div>
                  <div>
                    <MathText>{"9 ÷ 3 = 3"}</MathText>
                  </div>
                  <div>
                    <MathText>{"3 ÷ 3 = 1"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(324 = 2 \\cdot 2 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 = 2^2 \\cdot 3^2 \\cdot 3^2\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(\\sqrt{324} = 2 \\cdot 3 \\cdot 3 = 18\\) ✓ (\\(18^2 = 324\\))"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {"EXEMPLO 3 — calcule \\(\\sqrt{1\\,225}\\)"}
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"1225 ÷ 5 = 245"}</MathText>
                  </div>
                  <div>
                    <MathText>{"245 ÷ 5 = 49"}</MathText>
                  </div>
                  <div>
                    <MathText>{"49 ÷ 7 = 7"}</MathText>
                  </div>
                  <div>
                    <MathText>{"7 ÷ 7 = 1"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(1225 = 5^2 \\cdot 7^2\\) → \\(\\sqrt{1225} = 5 \\cdot 7 = 35\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 4 (problema) — Um terreno quadrado tem 625 m². Quanto mede cada lado? E o perímetro?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Área = lado · lado → lado = \\(\\sqrt{625}\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(625 = 5 \\cdot 5 \\cdot 5 \\cdot 5\\) → \\(\\sqrt{625} = 5 \\cdot 5 = 25\\) m"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Perímetro = \\(4 \\cdot 25 = 100\\) m"}
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"1.5 Raiz cúbica e o índice"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>{"A "}</MathText>
                <b>
                  <MathText>{"raiz cúbica"}</MathText>
                </b>
                <MathText>{" procura o lado de um "}</MathText>
                <b>
                  <MathText>{"cubo"}</MathText>
                </b>
                <MathText>
                  {
                    " a partir do seu volume: \\(\\sqrt[3]{8} = 2\\), pois \\(2 \\cdot 2 \\cdot 2 = 8\\). O "
                  }
                </MathText>
                <b>
                  <MathText>{"índice 3"}</MathText>
                </b>
                <MathText>
                  {" aparece pequenininho em cima do radical."}
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <table className="relative w-full border-collapse my-4 text-sm block overflow-x-auto">
                <thead>
                  <tr>
                    <th>
                      <MathText>{"n"}</MathText>
                    </th>
                    <th>
                      <MathText>{"1"}</MathText>
                    </th>
                    <th>
                      <MathText>{"2"}</MathText>
                    </th>
                    <th>
                      <MathText>{"3"}</MathText>
                    </th>
                    <th>
                      <MathText>{"4"}</MathText>
                    </th>
                    <th>
                      <MathText>{"5"}</MathText>
                    </th>
                    <th>
                      <MathText>{"6"}</MathText>
                    </th>
                    <th>
                      <MathText>{"10"}</MathText>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <MathText>{"\\(n^3\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"1"}</MathText>
                    </td>
                    <td>
                      <MathText>{"8"}</MathText>
                    </td>
                    <td>
                      <MathText>{"27"}</MathText>
                    </td>
                    <td>
                      <MathText>{"64"}</MathText>
                    </td>
                    <td>
                      <MathText>{"125"}</MathText>
                    </td>
                    <td>
                      <MathText>{"216"}</MathText>
                    </td>
                    <td>
                      <MathText>{"1 000"}</MathText>
                    </td>
                  </tr>
                </tbody>
              </table>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "Exemplos: \\(\\sqrt[3]{27} = 3\\), \\(\\sqrt[3]{125} = 5\\), \\(\\sqrt[3]{1000} = 10\\). Diferença importante: "
                  }
                </MathText>
                <b>
                  <MathText>
                    {"a raiz cúbica aceita radicando negativo"}
                  </MathText>
                </b>
                <MathText>
                  {
                    ", pois negativo·negativo·negativo dá negativo: \\(\\sqrt[3]{-8} = -2\\), já que \\((-2)\\cdot(-2)\\cdot(-2) = -8\\)."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <div className="callout border-l-4 border-red-500 bg-red-50">
                <b>
                  <MathText>{"Erros comuns"}</MathText>
                </b>
                <ul>
                  <li>
                    <MathText>
                      {
                        "\\(\\sqrt{16} = 8\\)? Não! Raiz não é “dividir por 2”. É \\(4\\), pois \\(4 \\cdot 4 = 16\\)."
                      }
                    </MathText>
                  </li>
                  <li>
                    <MathText>
                      {"\\(\\sqrt{16} = \\pm4\\)? Na raiz quadrada, resposta "}
                    </MathText>
                    <b>
                      <MathText>{"só positiva"}</MathText>
                    </b>
                    <MathText>{": 4."}</MathText>
                  </li>
                  <li>
                    <MathText>
                      {
                        "Esquecer que \\(\\sqrt{1} = 1\\) e \\(\\sqrt{0} = 0\\)."
                      }
                    </MathText>
                  </li>
                </ul>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="callout border-l-4 border-emerald-500 bg-emerald-50">
                <b>
                  <MathText>{"Resumo"}</MathText>
                </b>
                <MathText>
                  {
                    "Raiz quadrada = lado do quadrado. Quadrado perfeito → raiz inteira. Fração → raiz em cima e embaixo. Decimal → pense em centésimos. Número grande → fatore e junte os pares. Resposta da raiz quadrada: "
                  }
                </MathText>
                <b>
                  <MathText>{"nunca negativa"}</MathText>
                </b>
                <MathText>{"."}</MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <RadiciacaoQuickCheck index={2} />
              <MathText>{"\n  "}</MathText>
              <RadiciacaoQuickCheck index={3} />
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-goto="1"
              >
                <MathText>{"✏️ Fazer os exercícios do nível 1"}</MathText>
              </button>
              <MathText>{"\n"}</MathText>
            </article>
            <MathText>{"\n"}</MathText>
            <MathText>{"\n"}</MathText>
            <article
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
              id="l2"
            >
              <MathText>{"\n  "}</MathText>
              <div className="text-xs font-extrabold tracking-widest uppercase text-indigo-600">
                <MathText>{"Lição 2"}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <h2>
                <MathText>
                  {"Raiz não exata, estimativa e aproximação"}
                </MathText>
              </h2>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "Nem todo número é quadrado perfeito. E a raiz de 20? Nenhum inteiro vezes ele mesmo dá 20: \\(4 \\cdot 4 = 16\\) é pouco e \\(5 \\cdot 5 = 25\\) é demais. Mas a raiz de 20 "
                  }
                </MathText>
                <b>
                  <MathText>{"existe"}</MathText>
                </b>
                <MathText>
                  {": é um número entre 4 e 5. Nesta lição você aprende a "}
                </MathText>
                <b>
                  <MathText>{"localizar"}</MathText>
                </b>
                <MathText>{" e "}</MathText>
                <b>
                  <MathText>{"aproximar"}</MathText>
                </b>
                <MathText>{" raízes assim."}</MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"2.1 Raízes irracionais"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "Quando o radicando não é quadrado perfeito, a raiz é um decimal "
                  }
                </MathText>
                <b>
                  <MathText>{"infinito e sem repetição"}</MathText>
                </b>
                <MathText>{". Chamamos esses números de "}</MathText>
                <b>
                  <MathText>{"irracionais"}</MathText>
                </b>
                <MathText>{". Por exemplo:"}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
                <MathText>{"\\[ \\sqrt{2} = 1{,}41421356\\ldots \\]"}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "Os pontinhos significam que as casas decimais continuam para sempre. Por isso, na prática, usamos "
                  }
                </MathText>
                <b>
                  <MathText>{"aproximações"}</MathText>
                </b>
                <MathText>
                  {
                    " (e o símbolo \\(\\approx\\), “aproximadamente”). Mas a raiz exata é o próprio \\(\\sqrt{2}\\): escrever \\(\\sqrt2\\) é a forma "
                  }
                </MathText>
                <b>
                  <MathText>{"exata"}</MathText>
                </b>
                <MathText>{"; \\(1{,}41\\) é só uma aproximação."}</MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"2.2 Entre quais inteiros está a raiz?"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {"Use os quadrados perfeitos vizinhos como “cercas”:"}
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {"EXEMPLO 1 — entre quais inteiros está \\(\\sqrt{20}\\)?"}
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Quadrados perfeitos perto de 20: 16 e 25."}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(16 < 20 < 25\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(\\sqrt{16} < \\sqrt{20} < \\sqrt{25}\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(4 < \\sqrt{20} < 5\\)"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 420 118"
                  style={{ width: "420px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Reta numérica de 4 a 5 com a raiz de 20 por volta de 4,47"
                >
                  <line
                    x1="20"
                    y1="60"
                    x2="400"
                    y2="60"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="54"
                    x2="30"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="65.99999999999987"
                    y1="54"
                    x2="65.99999999999987"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="102.00000000000006"
                    y1="54"
                    x2="102.00000000000006"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="137.99999999999994"
                    y1="54"
                    x2="137.99999999999994"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="174.0000000000001"
                    y1="54"
                    x2="174.0000000000001"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="210"
                    y1="54"
                    x2="210"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="245.9999999999999"
                    y1="54"
                    x2="245.9999999999999"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="282.00000000000006"
                    y1="54"
                    x2="282.00000000000006"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="317.99999999999994"
                    y1="54"
                    x2="317.99999999999994"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="354.0000000000001"
                    y1="54"
                    x2="354.0000000000001"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="390"
                    y1="54"
                    x2="390"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <text
                    x="30"
                    y="86"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "4"
                  </text>
                  <text
                    x="210"
                    y="86"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "4,5"
                  </text>
                  <text
                    x="390"
                    y="86"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "5"
                  </text>
                  <circle
                    cx="199.96894379984866"
                    cy="60"
                    r="7"
                    fill="#ec4899"
                  ></circle>
                  <text
                    x="199.96894379984866"
                    y="38"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    "√20 ≈ 4,47"
                  </text>
                  <line
                    x1="174.0000000000001"
                    y1="44"
                    x2="174.0000000000001"
                    y2="56"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="210"
                    y1="44"
                    x2="210"
                    y2="56"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <text
                    x="30"
                    y="108"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    "√16"
                  </text>
                  <text
                    x="390"
                    y="108"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    "√25"
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {"\\(\\sqrt{20}\\) fica entre 4 e 5, em torno de 4,47."}
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <p>
                <b>
                  <MathText>{"Qual está mais perto?"}</MathText>
                </b>
                <MathText>
                  {
                    " 20 está a 4 unidades de 16 e a 5 de 25, então \\(\\sqrt{20}\\) está um pouco mais perto de 4 do que de 5. De fato, \\(\\sqrt{20} \\approx 4{,}47\\). (Cuidado: a raiz não anda “na mesma proporção” que o radicando. Por isso a primeira estimativa é só uma ideia!)"
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>
                  {"2.3 Tentativa e erro: 1 e 2 casas decimais"}
                </MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "Para aproximar melhor, teste números decimais e calcule o quadrado deles:"
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {"EXEMPLO 2 — aproxime \\(\\sqrt{20}\\) com 1 casa decimal"}
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"Sabemos: está entre 4 e 5."}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(4{,}4^2 = 19{,}36\\)  (menor que 20)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(4{,}5^2 = 20{,}25\\)  (maior que 20)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Logo \\(4{,}4 < \\sqrt{20} < 4{,}5\\)."}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "20 está mais perto de 20,25 → \\(\\sqrt{20} \\approx 4{,}5\\) (1 casa)."
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Para 2 casas: \\(4{,}47^2 = 19{,}9809\\) e \\(4{,}48^2 = 20{,}0704\\) → \\(\\sqrt{20} \\approx 4{,}47\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>{"Você pode treinar isso no "}</MathText>
                <b>
                  <MathText>
                    {"laboratório (Exp. 2 · Caçador de raízes)"}
                  </MathText>
                </b>
                <MathText>
                  {
                    ": dê palpites com 2 casas decimais e veja se o quadrado passa ou fica abaixo do radicando."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"2.4 Valores para decorar"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 420 118"
                  style={{ width: "420px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Reta numérica de 1 a 2 com a raiz de 2 por volta de 1,41"
                >
                  <line
                    x1="20"
                    y1="60"
                    x2="400"
                    y2="60"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="54"
                    x2="30"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="66.00000000000003"
                    y1="54"
                    x2="66.00000000000003"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="101.99999999999999"
                    y1="54"
                    x2="101.99999999999999"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="138"
                    y1="54"
                    x2="138"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="173.99999999999997"
                    y1="54"
                    x2="173.99999999999997"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="210"
                    y1="54"
                    x2="210"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="246.00000000000003"
                    y1="54"
                    x2="246.00000000000003"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="282"
                    y1="54"
                    x2="282"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="318"
                    y1="54"
                    x2="318"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="353.99999999999994"
                    y1="54"
                    x2="353.99999999999994"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="390"
                    y1="54"
                    x2="390"
                    y2="66"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></line>
                  <text
                    x="30"
                    y="86"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "1"
                  </text>
                  <text
                    x="210"
                    y="86"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "1,5"
                  </text>
                  <text
                    x="390"
                    y="86"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "2"
                  </text>
                  <circle
                    cx="179.11688245431426"
                    cy="60"
                    r="7"
                    fill="#ec4899"
                  ></circle>
                  <text
                    x="179.11688245431426"
                    y="38"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    "√2 ≈ 1,414…"
                  </text>
                  <text
                    x="30"
                    y="108"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    "√1"
                  </text>
                  <text
                    x="390"
                    y="108"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    "√4"
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {"\\(\\sqrt{2}\\) está entre 1 e 2, perto de 1,41."}
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <table className="relative w-full border-collapse my-4 text-sm block overflow-x-auto">
                <thead>
                  <tr>
                    <th>
                      <MathText>{"Raiz"}</MathText>
                    </th>
                    <th>
                      <MathText>{"\\(\\sqrt2\\)"}</MathText>
                    </th>
                    <th>
                      <MathText>{"\\(\\sqrt3\\)"}</MathText>
                    </th>
                    <th>
                      <MathText>{"\\(\\sqrt5\\)"}</MathText>
                    </th>
                    <th>
                      <MathText>{"\\(\\sqrt{10}\\)"}</MathText>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <MathText>{"Valor aproximado"}</MathText>
                    </td>
                    <td>
                      <MathText>{"1,41"}</MathText>
                    </td>
                    <td>
                      <MathText>{"1,73"}</MathText>
                    </td>
                    <td>
                      <MathText>{"2,24"}</MathText>
                    </td>
                    <td>
                      <MathText>{"3,16"}</MathText>
                    </td>
                  </tr>
                </tbody>
              </table>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "Vão aparecer muito no Teorema de Pitágoras e na trigonometria. Na calculadora do celular, a tecla \\(\\sqrt{\\ }\\) dá essas aproximações."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"2.5 Comparando raízes"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>{"Quanto "}</MathText>
                <b>
                  <MathText>{"maior o radicando"}</MathText>
                </b>
                <MathText>{", "}</MathText>
                <b>
                  <MathText>{"maior a raiz"}</MathText>
                </b>
                <MathText>
                  {
                    ". Para comparar uma raiz com um inteiro, escreva o inteiro como raiz (ou eleve os dois ao quadrado):"
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 3 — compare \\(\\sqrt7\\) com 3, e \\(\\sqrt{50}\\) com 7"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(3 = \\sqrt{9}\\) e \\(7 < 9\\) → \\(\\sqrt7 < 3\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(7 = \\sqrt{49}\\) e \\(50 > 49\\) → \\(\\sqrt{50} > 7\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Ordem crescente de \\(\\sqrt{10}\\), 3 e \\(\\sqrt8\\): \\(3 = \\sqrt9\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(8 < 9 < 10\\) → \\(\\sqrt8 < 3 < \\sqrt{10}\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"2.6 Arredondando"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "Olhe a casa seguinte: se for 5 ou mais, aumente a última casa; se for menos de 5, mantenha. \\(1{,}4142 \\to 1{,}41\\) (2 casas) e \\(2{,}236 \\to 2{,}24\\). "
                  }
                </MathText>
                <b>
                  <MathText>{"Dica:"}</MathText>
                </b>
                <MathText>
                  {
                    " faça todas as contas com a raiz exata (\\(\\sqrt5\\)) e só aproxime no "
                  }
                </MathText>
                <b>
                  <MathText>{"final"}</MathText>
                </b>
                <MathText>{"; arredondar cedo acumula erro."}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 4 (problema) — Um canteiro quadrado tem 50 m² de área. Quanto mede o lado, aproximadamente?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"lado = \\(\\sqrt{50}\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(49 < 50 < 64\\) → \\(7 < \\sqrt{50} < 8\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(7{,}1^2 = 50{,}41\\) (passou) ; \\(7{,}0^2 = 49\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(7{,}07^2 = 49{,}9849\\) ; \\(7{,}08^2 = 50{,}1264\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"lado \\(\\approx 7{,}07\\) m"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <div className="callout border-l-4 border-red-500 bg-red-50">
                <b>
                  <MathText>{"Cuidado"}</MathText>
                </b>
                <ul>
                  <li>
                    <MathText>{"\\(\\sqrt{20} = 4{,}47\\)? É só "}</MathText>
                    <b>
                      <MathText>{"aproximação"}</MathText>
                    </b>
                    <MathText>{": use \\(\\approx\\)."}</MathText>
                  </li>
                  <li>
                    <MathText>
                      {
                        "Não chute: confirme sempre a aproximação elevando ao quadrado."
                      }
                    </MathText>
                  </li>
                  <li>
                    <MathText>
                      {"\\(\\sqrt{50} \\neq 25\\): raiz não é dividir por 2."}
                    </MathText>
                  </li>
                </ul>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="callout border-l-4 border-emerald-500 bg-emerald-50">
                <b>
                  <MathText>{"Resumo"}</MathText>
                </b>
                <MathText>
                  {
                    "Entre dois quadrados perfeitos → entre duas raízes inteiras. Aproxime por tentativa: eleve ao quadrado e compare. Memorize \\(\\sqrt2 \\approx 1{,}41\\), \\(\\sqrt3 \\approx 1{,}73\\), \\(\\sqrt5 \\approx 2{,}24\\), \\(\\sqrt{10} \\approx 3{,}16\\)."
                  }
                </MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <RadiciacaoQuickCheck index={4} />
              <MathText>{"\n  "}</MathText>
              <RadiciacaoQuickCheck index={5} />
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-gotab="laboratorio"
              >
                <MathText>{"🔬 Abrir o laboratório (Exp. 2)"}</MathText>
              </button>
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-goto="2"
              >
                <MathText>{"✏️ Fazer os exercícios do nível 2"}</MathText>
              </button>
              <MathText>{"\n"}</MathText>
            </article>
            <MathText>{"\n"}</MathText>
            <MathText>{"\n"}</MathText>
            <article
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
              id="l3"
            >
              <MathText>{"\n  "}</MathText>
              <div className="text-xs font-extrabold tracking-widest uppercase text-indigo-600">
                <MathText>{"Lição 3"}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <h2>
                <MathText>
                  {"Propriedades e simplificação de radicais"}
                </MathText>
              </h2>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "\\(\\sqrt{12}\\) não é exata, mas podemos escrevê-la de um jeito mais “limpo”: \\(2\\sqrt3\\). Simplificar raízes deixa as contas mais fáceis e as respostas mais bonitas. Para isso, precisamos de duas propriedades."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"3.1 Raiz do produto e do quociente"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
                <MathText>
                  {
                    "\\[ \\sqrt{a \\cdot b} = \\sqrt a \\cdot \\sqrt b \\qquad\\qquad \\sqrt{\\dfrac{a}{b}} = \\dfrac{\\sqrt a}{\\sqrt b} \\]"
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "(vale para \\(a \\ge 0\\) e \\(b \\ge 0\\); no quociente, \\(b \\neq 0\\).) "
                  }
                </MathText>
                <b>
                  <MathText>{"Teste com números:"}</MathText>
                </b>
                <MathText>
                  {
                    " \\(\\sqrt{36} = 6\\) e \\(\\sqrt4 \\cdot \\sqrt9 = 2 \\cdot 3 = 6\\) ✓. Também \\(\\sqrt{\\tfrac{100}{25}} = \\sqrt4 = 2\\) e \\(\\tfrac{\\sqrt{100}}{\\sqrt{25}} = \\tfrac{10}{5} = 2\\) ✓."
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "Outra regra útil: \\(\\sqrt{a^2} = a\\) (para \\(a \\ge 0\\)). Por exemplo, \\(\\sqrt{7^2} = 7\\)."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>
                  {"3.2 Simplificar: tirar o quadrado de dentro"}
                </MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <b>
                  <MathText>{"Ideia:"}</MathText>
                </b>
                <MathText>{" procure o "}</MathText>
                <b>
                  <MathText>{"maior quadrado perfeito"}</MathText>
                </b>
                <MathText>
                  {
                    " que divide o radicando. Escreva o radicando como produto e “solte” a raiz exata."
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {"EXEMPLO 1 — simplifique \\(\\sqrt{12}\\)"}
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Quadrados perfeitos que dividem 12: 4 (12 = 4 · 3)."}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(\\sqrt{12} = \\sqrt{4 \\cdot 3}\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(= \\sqrt4 \\cdot \\sqrt3\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(= 2\\sqrt3\\)"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 2 — simplifique \\(\\sqrt{50}\\) e \\(\\sqrt{72}\\)"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt2\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(\\sqrt{72}\\): 72 = 36 · 2 (36 é o maior quadrado que divide)."
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt2\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Se usar 4: \\(\\sqrt{72} = 2\\sqrt{18}\\) — ainda dá para simplificar mais!"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>
                  {"3.3 Simplificar pela fatoração (método infalível)"}
                </MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>{"Se você não enxerga o maior quadrado, "}</MathText>
                <b>
                  <MathText>{"fatore"}</MathText>
                </b>
                <MathText>{": cada "}</MathText>
                <b>
                  <MathText>{"par"}</MathText>
                </b>
                <MathText>{" de fatores iguais sai da raiz como "}</MathText>
                <b>
                  <MathText>{"um"}</MathText>
                </b>
                <MathText>{"; o que sobra sem par fica dentro."}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 420 235"
                  style={{ width: "420px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Árvore de fatoração de 72: 2, 2, 2, 3 e 3"
                >
                  <line
                    x1="210"
                    y1="39"
                    x2="150"
                    y2="56"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="210"
                    y1="39"
                    x2="270"
                    y2="56"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="270"
                    y1="84"
                    x2="225"
                    y2="101"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="270"
                    y1="84"
                    x2="315"
                    y2="101"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="315"
                    y1="129"
                    x2="285"
                    y2="146"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="315"
                    y1="129"
                    x2="345"
                    y2="146"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="345"
                    y1="174"
                    x2="320"
                    y2="191"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="345"
                    y1="174"
                    x2="375"
                    y2="191"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <circle
                    cx="210"
                    cy="25"
                    r="16"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                  ></circle>
                  <text
                    x="210"
                    y="30"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "72"
                  </text>
                  <circle
                    cx="150"
                    cy="70"
                    r="16"
                    fill="#fce7f3"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                  ></circle>
                  <text
                    x="150"
                    y="75"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "2"
                  </text>
                  <circle
                    cx="270"
                    cy="70"
                    r="16"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                  ></circle>
                  <text
                    x="270"
                    y="75"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "36"
                  </text>
                  <circle
                    cx="225"
                    cy="115"
                    r="16"
                    fill="#fce7f3"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                  ></circle>
                  <text
                    x="225"
                    y="120"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "2"
                  </text>
                  <circle
                    cx="315"
                    cy="115"
                    r="16"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                  ></circle>
                  <text
                    x="315"
                    y="120"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "18"
                  </text>
                  <circle
                    cx="285"
                    cy="160"
                    r="16"
                    fill="#fce7f3"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                  ></circle>
                  <text
                    x="285"
                    y="165"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "2"
                  </text>
                  <circle
                    cx="345"
                    cy="160"
                    r="16"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                  ></circle>
                  <text
                    x="345"
                    y="165"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "9"
                  </text>
                  <circle
                    cx="320"
                    cy="205"
                    r="16"
                    fill="#fce7f3"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                  ></circle>
                  <text
                    x="320"
                    y="210"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "3"
                  </text>
                  <circle
                    cx="375"
                    cy="205"
                    r="16"
                    fill="#fce7f3"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                  ></circle>
                  <text
                    x="375"
                    y="210"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "3"
                  </text>
                  <text
                    x="60"
                    y="75"
                    textAnchor="start"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "72 = 2 · 36"
                  </text>
                  <text
                    x="60"
                    y="100"
                    textAnchor="start"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "36 = 2 · 18"
                  </text>
                  <text
                    x="60"
                    y="125"
                    textAnchor="start"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "18 = 2 · 9"
                  </text>
                  <text
                    x="60"
                    y="150"
                    textAnchor="start"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    "9 = 3 · 3"
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Árvore de fatoração: \\(72 = 2 \\cdot 2 \\cdot 2 \\cdot 3 \\cdot 3\\)."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 3 — simplifique \\(\\sqrt{72}\\) e \\(\\sqrt{200}\\) pela fatoração"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(72 = 2 \\cdot 2 \\cdot 2 \\cdot 3 \\cdot 3 = 2^2 \\cdot 3^2 \\cdot 2\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "pares: (2·2) e (3·3) saem → \\(2 \\cdot 3 = 6\\); sobra um 2 dentro"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(\\sqrt{72} = 6\\sqrt2\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(200 = 2 \\cdot 2 \\cdot 2 \\cdot 5 \\cdot 5 = 2^2 \\cdot 5^2 \\cdot 2\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"saem 2 e 5 → \\(\\sqrt{200} = 10\\sqrt2\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <p>
                <b>
                  <MathText>{"Quando já está simplificada?"}</MathText>
                </b>
                <MathText>{" Quando o radicando "}</MathText>
                <b>
                  <MathText>
                    {"não tem nenhum fator quadrado perfeito"}
                  </MathText>
                </b>
                <MathText>
                  {
                    " (além de 1): \\(\\sqrt{30} = \\sqrt{2\\cdot3\\cdot5}\\) já está simplificada."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>
                  {"3.4 O caminho de volta: colocar para dentro"}
                </MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {"EXEMPLO 4 — escreva \\(3\\sqrt2\\) como uma única raiz"}
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(3 = \\sqrt{9}\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(3\\sqrt2 = \\sqrt9 \\cdot \\sqrt2 = \\sqrt{18}\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Conferência: \\(\\sqrt{18} = \\sqrt{9\\cdot2} = 3\\sqrt2\\) ✓"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {"Regra prática: o número que está fora é "}
                </MathText>
                <b>
                  <MathText>{"elevado ao quadrado"}</MathText>
                </b>
                <MathText>{" e "}</MathText>
                <b>
                  <MathText>{"multiplicado"}</MathText>
                </b>
                <MathText>{" pelo radicando."}</MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"3.5 Para que serve? Aproximar"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "Com \\(\\sqrt2 \\approx 1{,}41\\): \\(\\sqrt{50} = 5\\sqrt2 \\approx 5 \\cdot 1{,}41 = 7{,}05\\). Muito mais fácil do que tentar chutar \\(\\sqrt{50}\\)! Você pode conferir no "
                  }
                </MathText>
                <b>
                  <MathText>
                    {"laboratório (Exp. 3 · Simplificador de raízes)"}
                  </MathText>
                </b>
                <MathText>{" e na calculadora "}</MathText>
                <b>
                  <MathText>{"Raiz quadrada passo a passo"}</MathText>
                </b>
                <MathText>{"."}</MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <div className="callout border-l-4 border-red-500 bg-red-50">
                <b>
                  <MathText>{"A armadilha mais famosa da raiz"}</MathText>
                </b>
                <MathText>
                  {
                    "\\(\\sqrt{a+b} \\neq \\sqrt a + \\sqrt b\\). Teste: \\(\\sqrt{9+16} = \\sqrt{25} = 5\\), mas \\(\\sqrt9 + \\sqrt{16} = 3 + 4 = 7\\). Da mesma forma, \\(\\sqrt{a^2+b^2} \\neq a+b\\). As propriedades valem para "
                  }
                </MathText>
                <b>
                  <MathText>{"produto"}</MathText>
                </b>
                <MathText>{" e "}</MathText>
                <b>
                  <MathText>{"quociente"}</MathText>
                </b>
                <MathText>
                  {
                    ", nunca para soma e subtração! (No Pitágoras você vai calcular \\(\\sqrt{3^2+4^2} = \\sqrt{25} = 5\\), e não \\(3+4\\).)"
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="callout border-l-4 border-emerald-500 bg-emerald-50">
                <b>
                  <MathText>{"Resumo"}</MathText>
                </b>
                <MathText>
                  {
                    "\\(\\sqrt{a\\cdot b} = \\sqrt a\\cdot\\sqrt b\\). Para simplificar: ache o maior quadrado perfeito que divide (ou fatore e tire os pares). Para colocar para dentro: eleve ao quadrado e multiplique."
                  }
                </MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <RadiciacaoQuickCheck index={6} />
              <MathText>{"\n  "}</MathText>
              <RadiciacaoQuickCheck index={7} />
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-gotab="laboratorio"
              >
                <MathText>{"🔬 Abrir o laboratório (Exp. 3)"}</MathText>
              </button>
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-gotab="ferramentas"
              >
                <MathText>{"🧮 Abrir as calculadoras"}</MathText>
              </button>
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-goto="3"
              >
                <MathText>{"✏️ Fazer os exercícios do nível 3"}</MathText>
              </button>
              <MathText>{"\n"}</MathText>
            </article>
            <MathText>{"\n"}</MathText>
            <MathText>{"\n"}</MathText>
            <article
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
              id="l4"
            >
              <MathText>{"\n  "}</MathText>
              <div className="text-xs font-extrabold tracking-widest uppercase text-indigo-600">
                <MathText>{"Lição 4"}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <h2>
                <MathText>{"Operações com radicais"}</MathText>
              </h2>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "Agora vamos somar, multiplicar e dividir raízes. A boa notícia: o radical se comporta quase como uma letra da álgebra (\\(\\sqrt2\\) funciona como o “x”)."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>
                  {"4.1 Adição e subtração: só radicais semelhantes"}
                </MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>{"Radicais "}</MathText>
                <b>
                  <MathText>{"semelhantes"}</MathText>
                </b>
                <MathText>{" têm o "}</MathText>
                <b>
                  <MathText>{"mesmo radicando"}</MathText>
                </b>
                <MathText>
                  {
                    ". Eles se somam como termos semelhantes: some os números de fora e mantenha o radical."
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
                <MathText>
                  {
                    "\\[ 3\\sqrt2 + 5\\sqrt2 = 8\\sqrt2 \\qquad\\text{(como } 3x + 5x = 8x\\text{)} \\]"
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>{"Se os radicandos são diferentes, "}</MathText>
                <b>
                  <MathText>{"não dá para juntar"}</MathText>
                </b>
                <MathText>
                  {
                    ": \\(\\sqrt2 + \\sqrt3\\) fica como está (e não é \\(\\sqrt5\\)!)."
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {"EXEMPLO 1 — calcule \\(\\sqrt{18} + \\sqrt{8}\\)"}
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Radicandos diferentes? Simplifique antes!"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(\\sqrt{18} = \\sqrt{9\\cdot2} = 3\\sqrt2\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(\\sqrt{8} = \\sqrt{4\\cdot2} = 2\\sqrt2\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(3\\sqrt2 + 2\\sqrt2 = 5\\sqrt2\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 2 — calcule \\(\\sqrt{50} - \\sqrt{32} + \\sqrt{2}\\)"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(\\sqrt{50} = 5\\sqrt2\\) ; \\(\\sqrt{32} = 4\\sqrt2\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(5\\sqrt2 - 4\\sqrt2 + 1\\sqrt2 = 2\\sqrt2\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="callout border-l-4 border-amber-500 bg-amber-50">
                <b>
                  <MathText>{"Lembre"}</MathText>
                </b>
                <MathText>
                  {
                    "\\(\\sqrt2\\) sozinho vale \\(1\\sqrt2\\). Por isso \\(\\sqrt2 + \\sqrt2 = 2\\sqrt2\\)."
                  }
                </MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"4.2 Multiplicação e divisão"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>{"Multiplique "}</MathText>
                <b>
                  <MathText>{"os de fora entre si"}</MathText>
                </b>
                <MathText>{" e "}</MathText>
                <b>
                  <MathText>{"os de dentro entre si"}</MathText>
                </b>
                <MathText>{":"}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
                <MathText>
                  {
                    "\\[ a\\sqrt b \\cdot c\\sqrt d = (a\\cdot c)\\sqrt{b\\cdot d} \\]"
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>{"EXEMPLO 3 — multiplicações"}</MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(\\sqrt2 \\cdot \\sqrt8 = \\sqrt{16} = 4\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(3\\sqrt2 \\cdot 4\\sqrt3 = 12\\sqrt6\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(\\sqrt3 \\cdot \\sqrt3 = \\sqrt9 = 3\\)  → \\((\\sqrt5)^2 = 5\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\((2\\sqrt3)^2 = 2^2 \\cdot (\\sqrt3)^2 = 4 \\cdot 3 = 12\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>{"Para "}</MathText>
                <b>
                  <MathText>{"dividir"}</MathText>
                </b>
                <MathText>
                  {
                    ": \\(\\dfrac{\\sqrt{50}}{\\sqrt2} = \\sqrt{\\dfrac{50}{2}} = \\sqrt{25} = 5\\)."
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="callout border-l-4 border-emerald-500 bg-emerald-50">
                <b>
                  <MathText>{"Dois fatos que valem ouro"}</MathText>
                </b>
                <MathText>
                  {
                    "\\((\\sqrt a)^2 = a\\) e \\(\\sqrt a \\cdot \\sqrt a = a\\). Quadrado e raiz “se cancelam”."
                  }
                </MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"4.3 Racionalização simples"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "Escrever \\(\\dfrac{1}{\\sqrt2}\\) é correto, mas é incômodo ter raiz no denominador (dividir por 1,41…). "
                  }
                </MathText>
                <b>
                  <MathText>{"Racionalizar"}</MathText>
                </b>
                <MathText>
                  {
                    " é tirar a raiz de baixo, multiplicando em cima e embaixo pela própria raiz (isso não muda o valor, pois é multiplicar por 1):"
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 4 — racionalize \\(\\dfrac{1}{\\sqrt2}\\) e \\(\\dfrac{6}{\\sqrt3}\\)"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(\\dfrac{1}{\\sqrt2} = \\dfrac{1\\cdot\\sqrt2}{\\sqrt2\\cdot\\sqrt2} = \\dfrac{\\sqrt2}{2}\\)  (≈ 1,41 ÷ 2 = 0,71)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(\\dfrac{6}{\\sqrt3} = \\dfrac{6\\sqrt3}{\\sqrt3\\cdot\\sqrt3} = \\dfrac{6\\sqrt3}{3} = 2\\sqrt3\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <p>
                <b>
                  <MathText>{"Para quê?"}</MathText>
                </b>
                <MathText>
                  {
                    " Fica fácil comparar e aproximar: \\(\\tfrac{\\sqrt2}{2}\\) é só “1,41 dividido por 2”."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>
                  {"4.4 O caso que vem aí: \\(\\sqrt{x^2 + y^2}\\)"}
                </MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "No Teorema de Pitágoras você somará dois quadrados e tirará a raiz do resultado. Treine:"
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 5 — calcule \\(\\sqrt{3^2+4^2}\\) e \\(\\sqrt{1^2+1^2}\\) e \\(\\sqrt{5^2+5^2}\\)"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"Primeiro "}</MathText>
                    <b>
                      <MathText>{"dentro"}</MathText>
                    </b>
                    <MathText>{" da raiz (potências, depois soma):"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(\\sqrt{9+16} = \\sqrt{25} = 5\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(\\sqrt{1+1} = \\sqrt2 \\approx 1{,}41\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(\\sqrt{25+25} = \\sqrt{50} = 5\\sqrt2\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 6 — expressão: \\(2\\sqrt{3}\\cdot\\sqrt{3} + \\sqrt{16} - 3\\sqrt{2}\\cdot\\sqrt{2}\\)"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Multiplicações primeiro: \\(2 \\cdot 3 + 4 - 3\\cdot2\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(= 6 + 4 - 6 = 4\\)"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <div className="callout border-l-4 border-red-500 bg-red-50">
                <b>
                  <MathText>{"Erros comuns"}</MathText>
                </b>
                <ul>
                  <li>
                    <MathText>{"\\(\\sqrt2 + \\sqrt3 = \\sqrt5\\)? "}</MathText>
                    <b>
                      <MathText>{"Não!"}</MathText>
                    </b>
                    <MathText>
                      {
                        " (1,41 + 1,73 = 3,14, e \\(\\sqrt5 \\approx 2{,}24\\).)"
                      }
                    </MathText>
                  </li>
                  <li>
                    <MathText>
                      {
                        "\\(3\\sqrt2 + 5\\sqrt3 = 8\\sqrt5\\)? Não: radicandos diferentes não se somam."
                      }
                    </MathText>
                  </li>
                  <li>
                    <MathText>
                      {
                        "\\(2\\sqrt3 \\cdot 3\\sqrt3 = 6\\sqrt3\\)? Não: é \\(6 \\cdot 3 = 18\\), pois \\(\\sqrt3\\cdot\\sqrt3 = 3\\)."
                      }
                    </MathText>
                  </li>
                  <li>
                    <MathText>
                      {
                        "\\(\\sqrt{9} + \\sqrt{16} = \\sqrt{25}\\)? Não: \\(3+4 = 7\\)."
                      }
                    </MathText>
                  </li>
                </ul>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="callout border-l-4 border-emerald-500 bg-emerald-50">
                <b>
                  <MathText>{"Resumo"}</MathText>
                </b>
                <MathText>
                  {
                    "Somar: só radicais semelhantes (simplifique antes). Multiplicar: fora com fora, dentro com dentro. Dividir: raiz do quociente. \\((\\sqrt a)^2 = a\\). Racionalizar: multiplique em cima e embaixo pela raiz."
                  }
                </MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <RadiciacaoQuickCheck index={8} />
              <MathText>{"\n  "}</MathText>
              <RadiciacaoQuickCheck index={9} />
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-gotab="ferramentas"
              >
                <MathText>
                  {"🧮 Abrir as calculadoras (Operações com radicais)"}
                </MathText>
              </button>
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-goto="4"
              >
                <MathText>{"✏️ Fazer os exercícios do nível 4"}</MathText>
              </button>
              <MathText>{"\n"}</MathText>
            </article>
            <MathText>{"\n"}</MathText>
            <MathText>{"\n"}</MathText>
            <article
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
              id="l5"
            >
              <MathText>{"\n  "}</MathText>
              <div className="text-xs font-extrabold tracking-widest uppercase text-indigo-600">
                <MathText>{"Lição 5"}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <h2>
                <MathText>{"Problemas, erros comuns e folha de cola"}</MathText>
              </h2>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "Chegou a hora de usar as raízes em situações reais, evitar as armadilhas e conferir se você está pronto para o Teorema de Pitágoras."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"5.1 Método para problemas com raízes"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <ol>
                <MathText>{"\n    "}</MathText>
                <li>
                  <b>
                    <MathText>{"Leia"}</MathText>
                  </b>
                  <MathText>
                    {
                      " e descubra o que se pede (lado? perímetro? valor aproximado?)."
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li>
                  <b>
                    <MathText>{"Desenhe"}</MathText>
                  </b>
                  <MathText>{" e marque os dados."}</MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li>
                  <b>
                    <MathText>{"Monte a equação"}</MathText>
                  </b>
                  <MathText>
                    {": para quadrado, \\(x^2 = \\text{área}\\)."}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li>
                  <b>
                    <MathText>{"Tire a raiz"}</MathText>
                  </b>
                  <MathText>
                    {" (só o valor positivo, pois medida não é negativa)."}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li>
                  <b>
                    <MathText>{"Unidade"}</MathText>
                  </b>
                  <MathText>{": m, cm… (e m² para área)."}</MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li>
                  <b>
                    <MathText>{"Confira"}</MathText>
                  </b>
                  <MathText>{" elevando ao quadrado."}</MathText>
                </li>
                <MathText>{"\n  "}</MathText>
              </ol>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"5.2 Exemplos resolvidos"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 1 — Uma sala quadrada tem 81 m² de piso. Quanto mede cada lado e quantos metros de rodapé são necessários (sem descontar a porta)?"
                    }
                  </MathText>
                </div>
                <MathText>{"\n  "}</MathText>
                <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                  <svg
                    viewBox="0 0 380 170"
                    style={{ width: "380px", maxWidth: "100%", height: "auto" }}
                    role="img"
                    aria-label="Quadrado de área 81 metros quadrados"
                  >
                    <rect
                      x="50"
                      y="15"
                      width="120"
                      height="120"
                      fill="#e0e7ff"
                      stroke="#4f46e5"
                      strokeWidth="3"
                    ></rect>
                    <text
                      x="110"
                      y="82"
                      textAnchor="middle"
                      fontSize="15"
                      fontWeight="700"
                      fill="#ec4899"
                    >
                      "área = 81 m²"
                    </text>
                    <text
                      x="110"
                      y="156"
                      textAnchor="middle"
                      fontSize="15"
                      fontWeight="700"
                      fill="#1e293b"
                    >
                      "lado x"
                    </text>
                    <text
                      x="24"
                      y="80"
                      textAnchor="middle"
                      fontSize="15"
                      fontWeight="700"
                      fill="#1e293b"
                    >
                      "x"
                    </text>
                    <text
                      x="290"
                      y="70"
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="700"
                      fill="#1e293b"
                    >
                      "x² = 81"
                    </text>
                    <text
                      x="290"
                      y="94"
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="700"
                      fill="#4f46e5"
                    >
                      "x = √81 = 9 m"
                    </text>
                  </svg>
                  <div className="text-xs text-slate-500 mt-1">
                    <MathText>{"Quadrado de área 81 m²."}</MathText>
                  </div>
                </div>
                <MathText>{"\n  "}</MathText>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(x^2 = 81\\) → \\(x = \\sqrt{81} = 9\\) m"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Rodapé = perímetro = \\(4 \\cdot 9 = 36\\) m"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Conferência: \\(9 \\cdot 9 = 81\\) ✓"}
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 2 — Um quadrado tem perímetro de 20 cm. Qual é a área? E qual é o lado de um quadrado com o "
                    }
                  </MathText>
                  <b>
                    <MathText>{"dobro"}</MathText>
                  </b>
                  <MathText>{" dessa área?"}</MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"lado = \\(20 \\div 4 = 5\\) cm → área = \\(25\\) cm²"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"dobro da área = 50 cm²"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "novo lado = \\(\\sqrt{50} = 5\\sqrt2 \\approx 7{,}07\\) cm"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 3 — Que número positivo elevado ao quadrado dá 2,25?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(x^2 = 2{,}25 = \\dfrac{225}{100}\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(x = \\dfrac{\\sqrt{225}}{\\sqrt{100}} = \\dfrac{15}{10} = 1{,}5\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Conferência: \\(1{,}5 \\cdot 1{,}5 = 2{,}25\\) ✓"}
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 4 — Pré-visão: um quadrado de lado 1 m. Quanto mede sua diagonal?"
                    }
                  </MathText>
                </div>
                <MathText>{"\n  "}</MathText>
                <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                  <svg
                    viewBox="0 0 380 162"
                    style={{ width: "380px", maxWidth: "100%", height: "auto" }}
                    role="img"
                    aria-label="Quadrado de lado 1 com a diagonal medindo raiz de 2"
                  >
                    <rect
                      x="60"
                      y="20"
                      width="110"
                      height="110"
                      fill="#e0e7ff"
                      stroke="#4f46e5"
                      strokeWidth="2.5"
                    ></rect>
                    <line
                      x1="60"
                      y1="130"
                      x2="170"
                      y2="20"
                      stroke="#ec4899"
                      strokeWidth="3"
                      strokeLinecap="round"
                    ></line>
                    <text
                      x="115"
                      y="150"
                      textAnchor="middle"
                      fontSize="15"
                      fontWeight="700"
                      fill="#1e293b"
                    >
                      "1"
                    </text>
                    <text
                      x="44"
                      y="80"
                      textAnchor="middle"
                      fontSize="15"
                      fontWeight="700"
                      fill="#1e293b"
                    >
                      "1"
                    </text>
                    <text
                      x="135"
                      y="66"
                      textAnchor="start"
                      fontSize="16"
                      fontWeight="700"
                      fill="#ec4899"
                    >
                      "√2"
                    </text>
                    <text
                      x="290"
                      y="70"
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="700"
                      fill="#1e293b"
                    >
                      "quadrado de lado 1"
                    </text>
                    <text
                      x="290"
                      y="92"
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="700"
                      fill="#ec4899"
                    >
                      "diagonal ≈ 1,41"
                    </text>
                  </svg>
                  <div className="text-xs text-slate-500 mt-1">
                    <MathText>
                      {
                        "A diagonal de um quadrado de lado 1 mede \\(\\sqrt2\\) (você verá o porquê no Teorema de Pitágoras)."
                      }
                    </MathText>
                  </div>
                </div>
                <MathText>{"\n  "}</MathText>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Sem entrar em detalhes ainda: a diagonal mede \\(\\sqrt{1^2+1^2} = \\sqrt2\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(\\sqrt2 \\approx 1{,}41\\) m — maior que o lado, como esperado."
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 5 — Um terreno quadrado tem 200 m² e será cercado com 3 voltas de arame. Quantos metros de arame são necessários (aprox.)?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "lado = \\(\\sqrt{200} = 10\\sqrt2 \\approx 10 \\cdot 1{,}41 = 14{,}1\\) m"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"perímetro = \\(4 \\cdot 14{,}1 = 56{,}4\\) m"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"3 voltas = \\(3 \\cdot 56{,}4 = 169{,}2\\) m"}
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"5.3 Os 12 erros mais comuns"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="grid gap-3 mt-4 sm:grid-cols-2">
                <MathText>{"\n    "}</MathText>
                <div className="bg-red-50 border border-red-200">
                  <b>
                    <MathText>{"✗ Errado"}</MathText>
                  </b>
                  <br />
                  <MathText>{"1. \\(\\sqrt{9+16} = 3+4\\)"}</MathText>
                  <br />
                  <MathText>{"2. \\(\\sqrt{16} = \\pm4\\)"}</MathText>
                  <br />
                  <MathText>{"3. \\(\\sqrt{9} = 4{,}5\\)"}</MathText>
                  <br />
                  <MathText>
                    {"4. \\(\\sqrt{12}\\) “já está simplificada”"}
                  </MathText>
                  <br />
                  <MathText>{"5. \\(\\sqrt2 + \\sqrt3 = \\sqrt5\\)"}</MathText>
                  <br />
                  <MathText>{"6. \\(2\\sqrt3 = \\sqrt6\\)"}</MathText>
                  <br />
                  <MathText>{"7. \\(\\sqrt{-4} = -2\\)"}</MathText>
                  <br />
                  <MathText>{"8. \\(\\sqrt{0{,}09} = 0{,}03\\)"}</MathText>
                  <br />
                  <MathText>{"9. \\(\\sqrt{x^2} = x\\) sempre"}</MathText>
                  <br />
                  <MathText>
                    {"10. Arredondar \\(\\sqrt2\\) para 1 já no começo"}
                  </MathText>
                  <br />
                  <MathText>{"11. \\((\\sqrt5)^2 = 25\\)"}</MathText>
                  <br />
                  <MathText>
                    {"12. \\(3\\sqrt2 \\cdot 2\\sqrt2 = 6\\sqrt2\\)"}
                  </MathText>
                </div>
                <MathText>{"\n    "}</MathText>
                <div className="bg-emerald-50 border border-emerald-200">
                  <b>
                    <MathText>{"✓ Certo"}</MathText>
                  </b>
                  <br />
                  <MathText>
                    {
                      "1. \\(\\sqrt{25} = 5\\) (some dentro, depois tire a raiz)"
                    }
                  </MathText>
                  <br />
                  <MathText>{"2. \\(\\sqrt{16} = 4\\) (só positiva)"}</MathText>
                  <br />
                  <MathText>
                    {"3. \\(\\sqrt9 = 3\\) (não é dividir por 2)"}
                  </MathText>
                  <br />
                  <MathText>{"4. \\(\\sqrt{12} = 2\\sqrt3\\)"}</MathText>
                  <br />
                  <MathText>{"5. soma só se o radicando for igual"}</MathText>
                  <br />
                  <MathText>{"6. \\(2\\sqrt3 = \\sqrt{12}\\)"}</MathText>
                  <br />
                  <MathText>
                    {"7. não existe (nos números que conhecemos)"}
                  </MathText>
                  <br />
                  <MathText>
                    {"8. \\(0{,}3\\), pois \\(0{,}3\\cdot0{,}3 = 0{,}09\\)"}
                  </MathText>
                  <br />
                  <MathText>
                    {
                      "9. \\(\\sqrt{x^2} = |x|\\): para \\(x=-3\\), dá \\(3\\) (só mencionar!)"
                    }
                  </MathText>
                  <br />
                  <MathText>{"10. aproxime só no final"}</MathText>
                  <br />
                  <MathText>{"11. \\((\\sqrt5)^2 = 5\\)"}</MathText>
                  <br />
                  <MathText>{"12. \\(6 \\cdot 2 = 12\\)"}</MathText>
                </div>
                <MathText>{"\n  "}</MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"5.4 Folha de cola"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <table className="relative w-full border-collapse my-4 text-sm block overflow-x-auto">
                <thead>
                  <tr>
                    <th>
                      <MathText>{"Regra"}</MathText>
                    </th>
                    <th>
                      <MathText>{"Exemplo"}</MathText>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td>
                      <MathText>{"\\(\\sqrt{a^2} = a\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(\\sqrt{49} = 7\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td>
                      <MathText>
                        {"\\(\\sqrt{a\\cdot b} = \\sqrt a\\cdot\\sqrt b\\)"}
                      </MathText>
                    </td>
                    <td>
                      <MathText>{"\\(\\sqrt{12} = 2\\sqrt3\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td>
                      <MathText>
                        {"\\(\\sqrt{a/b} = \\sqrt a/\\sqrt b\\)"}
                      </MathText>
                    </td>
                    <td>
                      <MathText>{"\\(\\sqrt{9/16} = 3/4\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td>
                      <MathText>{"\\((\\sqrt a)^2 = a\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\((\\sqrt7)^2 = 7\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td>
                      <MathText>
                        {"\\(m\\sqrt a \\pm n\\sqrt a = (m\\pm n)\\sqrt a\\)"}
                      </MathText>
                    </td>
                    <td>
                      <MathText>
                        {"\\(3\\sqrt2 + 5\\sqrt2 = 8\\sqrt2\\)"}
                      </MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td>
                      <MathText>
                        {"\\(\\sqrt{a+b} \\neq \\sqrt a+\\sqrt b\\)"}
                      </MathText>
                    </td>
                    <td>
                      <MathText>{"\\(\\sqrt{25} \\neq 3+4\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td>
                      <MathText>{"\\(1/\\sqrt a = \\sqrt a/a\\)"}</MathText>
                    </td>
                    <td>
                      <MathText>{"\\(1/\\sqrt2 = \\sqrt2/2\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n  "}</MathText>
                </tbody>
              </table>
              <MathText>{"\n  "}</MathText>
              <p>
                <b>
                  <MathText>{"Para decorar:"}</MathText>
                </b>
                <MathText>
                  {
                    " \\(\\sqrt2 \\approx 1{,}41\\); \\(\\sqrt3 \\approx 1{,}73\\); \\(\\sqrt5 \\approx 2{,}24\\); \\(\\sqrt{10} \\approx 3{,}16\\)."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>{"5.5 Glossário"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <ul>
                <li>
                  <b>
                    <MathText>{"Radical"}</MathText>
                  </b>
                  <MathText>{": o símbolo \\(\\sqrt{\\ \\ }\\). "}</MathText>
                  <b>
                    <MathText>{"Radicando"}</MathText>
                  </b>
                  <MathText>{": o que está dentro. "}</MathText>
                  <b>
                    <MathText>{"Índice"}</MathText>
                  </b>
                  <MathText>{": o número pequeno (2 é omitido)."}</MathText>
                </li>
                <li>
                  <b>
                    <MathText>{"Quadrado perfeito"}</MathText>
                  </b>
                  <MathText>
                    {": inteiro cuja raiz quadrada é inteira (1, 4, 9, 16…)."}
                  </MathText>
                </li>
                <li>
                  <b>
                    <MathText>{"Irracional"}</MathText>
                  </b>
                  <MathText>
                    {": decimal infinito sem repetição (\\(\\sqrt2\\))."}
                  </MathText>
                </li>
                <li>
                  <b>
                    <MathText>{"Radicais semelhantes"}</MathText>
                  </b>
                  <MathText>{": mesmo radicando."}</MathText>
                </li>
                <li>
                  <b>
                    <MathText>{"Racionalizar"}</MathText>
                  </b>
                  <MathText>{": tirar a raiz do denominador."}</MathText>
                </li>
              </ul>
              <MathText>{"\n\n  "}</MathText>
              <h3>
                <MathText>
                  {"5.6 Checklist: estou pronto para o Teorema de Pitágoras?"}
                </MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <ul>
                <MathText>{"\n    "}</MathText>
                <li>
                  <MathText>
                    {"☐ Sei de cabeça os quadrados de 1 a 15?"}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li>
                  <MathText>
                    {
                      "☐ Sei calcular \\(\\sqrt{144}\\), \\(\\sqrt{0{,}25}\\) e \\(\\sqrt{\\tfrac{4}{9}}\\)?"
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li>
                  <MathText>
                    {"☐ Sei dizer entre quais inteiros está \\(\\sqrt{40}\\)?"}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li>
                  <MathText>
                    {"☐ Sei simplificar \\(\\sqrt{45}\\) e \\(\\sqrt{98}\\)?"}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li>
                  <MathText>
                    {"☐ Sei resolver \\(x^2 = 169\\) (valor positivo)?"}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li>
                  <MathText>
                    {
                      "☐ Sei que \\(\\sqrt{9+16} \\neq 3+4\\) e calcular \\(\\sqrt{6^2+8^2}\\)?"
                    }
                  </MathText>
                </li>
                <MathText>{"\n  "}</MathText>
              </ul>
              <MathText>{"\n  "}</MathText>
              <p>
                <MathText>
                  {
                    "Se marcou todos, você está pronto! Se não, volte à lição correspondente."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <RadiciacaoQuickCheck index={10} />
              <MathText>{"\n  "}</MathText>
              <RadiciacaoQuickCheck index={11} />
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-goto="5"
              >
                <MathText>{"✏️ Fazer os exercícios do nível 5"}</MathText>
              </button>
              <MathText>{"\n"}</MathText>
            </article>
            <MathText>{"\n        "}</MathText>
          </div>
          <MathText>{"\n      "}</MathText>
        </div>
        <MathText>{"\n    "}</MathText>
      </section>
      <MathText>{"\n\n    "}</MathText>
    </>
  );
}
