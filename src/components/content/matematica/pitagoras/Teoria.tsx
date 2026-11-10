import { MathText } from "../../../Math/MathRenderer";
import { PitagorasQuickCheck } from "./PitagorasQuickCheck";

export function PitagorasTeoria() {
  return (
    <>
      <section id="sec-teoria" className="space-y-6">
        <MathText>{"\n      "}</MathText>
        <div className="rounded-3xl p-7 sm:p-10 bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 text-white shadow-xl">
          <MathText>{"\n        "}</MathText>
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-200">
            <MathText>{"Curso completo · 8º ano · do zero"}</MathText>
          </span>
          <MathText>{"\n        "}</MathText>
          <h1 className="text-3xl sm:text-5xl font-black mt-2">
            <MathText>{"Teorema de Pitágoras"}</MathText>
          </h1>
          <MathText>{"\n        "}</MathText>
          <p className="mt-4 max-w-3xl text-indigo-100 leading-7">
            <MathText>
              {
                "O teorema mais famoso da matemática: como calcular o lado que falta de um triângulo retângulo, reconhecer ângulos retos, achar diagonais, alturas e distâncias. Você não precisa saber nada sobre o assunto: aqui você aprende o que é, como funciona, para que serve e como montar as contas no papel. É a porta de entrada para a trigonometria."
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
            <a
              href="#l0"
              className="block rounded-xl px-3 py-2 text-sm font-semibold leading-5 text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"
            >
              <MathText>{"0 · Comece por aqui"}</MathText>
            </a>
            <MathText>{"\n          "}</MathText>
            <a
              href="#l1"
              className="block rounded-xl px-3 py-2 text-sm font-semibold leading-5 text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"
            >
              <MathText>{"1 · O teorema: o que ele diz"}</MathText>
            </a>
            <MathText>{"\n          "}</MathText>
            <a
              href="#l2"
              className="block rounded-xl px-3 py-2 text-sm font-semibold leading-5 text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"
            >
              <MathText>{"2 · Calculando a hipotenusa"}</MathText>
            </a>
            <MathText>{"\n          "}</MathText>
            <a
              href="#l3"
              className="block rounded-xl px-3 py-2 text-sm font-semibold leading-5 text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"
            >
              <MathText>{"3 · Calculando um cateto"}</MathText>
            </a>
            <MathText>{"\n          "}</MathText>
            <a
              href="#l4"
              className="block rounded-xl px-3 py-2 text-sm font-semibold leading-5 text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"
            >
              <MathText>{"4 · Ternos pitagóricos e recíproca"}</MathText>
            </a>
            <MathText>{"\n          "}</MathText>
            <a
              href="#l5"
              className="block rounded-xl px-3 py-2 text-sm font-semibold leading-5 text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"
            >
              <MathText>{"5 · Diagonais e alturas"}</MathText>
            </a>
            <MathText>{"\n          "}</MathText>
            <a
              href="#l6"
              className="block rounded-xl px-3 py-2 text-sm font-semibold leading-5 text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"
            >
              <MathText>{"6 · Distância no plano cartesiano"}</MathText>
            </a>
            <MathText>{"\n          "}</MathText>
            <a
              href="#l7"
              className="block rounded-xl px-3 py-2 text-sm font-semibold leading-5 text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"
            >
              <MathText>{"7 · Aplicações no dia a dia"}</MathText>
            </a>
            <MathText>{"\n          "}</MathText>
            <a
              href="#l8"
              className="block rounded-xl px-3 py-2 text-sm font-semibold leading-5 text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"
            >
              <MathText>{"8 · Problemas, erros e folha de cola"}</MathText>
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
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-800">
                <MathText>
                  {
                    "Comece por aqui: o triângulo retângulo e a ideia de Pitágoras"
                  }
                </MathText>
              </h2>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {
                    "Você já viu uma escada apoiada em uma parede? O chão, a parede e a escada formam um "
                  }
                </MathText>
                <b>
                  <MathText>{"triângulo"}</MathText>
                </b>
                <MathText>{", e o canto entre o chão e a parede é "}</MathText>
                <b>
                  <MathText>{"reto"}</MathText>
                </b>
                <MathText>
                  {
                    ". Um pedreiro, um marceneiro ou um piloto de drone precisam saber "
                  }
                </MathText>
                <b>
                  <MathText>{"quanto mede um desses lados"}</MathText>
                </b>
                <MathText>
                  {
                    " sem esticar a trena. Existe uma regra, com mais de 2 500 anos, que resolve isso com uma conta simples. É o "
                  }
                </MathText>
                <b>
                  <MathText>{"Teorema de Pitágoras"}</MathText>
                </b>
                <MathText>
                  {", e este curso ensina você a usá-lo do zero."}
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>
                  {"0.1 Revisão rápida: o triângulo retângulo"}
                </MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>{"Um "}</MathText>
                <b>
                  <MathText>{"triângulo retângulo"}</MathText>
                </b>
                <MathText>{" é o triângulo que tem "}</MathText>
                <b>
                  <MathText>{"um ângulo reto"}</MathText>
                </b>
                <MathText>
                  {
                    " (de \\(90^\\circ\\)), o “cantinho de quadrado”. Seus lados têm nomes especiais:"
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <ul className="mt-3 pl-6 list-disc leading-8 text-slate-600">
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>{"os dois lados que "}</MathText>
                  <b>
                    <MathText>{"formam"}</MathText>
                  </b>
                  <MathText>{" o ângulo reto são os "}</MathText>
                  <b>
                    <MathText>{"catetos"}</MathText>
                  </b>
                  <MathText>{";"}</MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>{"o lado que fica "}</MathText>
                  <b>
                    <MathText>{"do lado oposto"}</MathText>
                  </b>
                  <MathText>
                    {" ao ângulo reto (aquele que “fecha” o triângulo) é a "}
                  </MathText>
                  <b>
                    <MathText>{"hipotenusa"}</MathText>
                  </b>
                  <MathText>{"."}</MathText>
                </li>
                <MathText>{"\n  "}</MathText>
              </ul>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 420 300"
                  style={{ width: "420px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Triângulo retângulo desenhado em quatro posições diferentes, com a hipotenusa em rosa"
                >
                  <polygon
                    points="78.3,60.0 158.3,60.0 78.3,120.0"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polyline
                    points="87.33333333333333,60 87.33333333333333,69 78.33333333333333,69"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <line
                    x1="158.33333333333331"
                    y1="60"
                    x2="78.33333333333333"
                    y2="120"
                    stroke="#ec4899"
                    strokeWidth="4"
                    strokeLinecap="round"
                  ></line>
                  <text
                    x="127.9"
                    y="107.2"
                    textAnchor="start"
                    fontSize="12"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"hipotenusa"}
                  </text>
                  <text
                    x="123.9"
                    y="49.7"
                    textAnchor="start"
                    fontSize="11"
                    fontWeight="700"
                    fill="#475569"
                  >
                    {"cateto"}
                  </text>
                  <text
                    x="69.0"
                    y="103.5"
                    textAnchor="end"
                    fontSize="11"
                    fontWeight="700"
                    fill="#475569"
                  >
                    {"cateto"}
                  </text>
                  <polygon
                    points="335.0,106.7 335.0,26.7 275.0,106.7"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polyline
                    points="335,97.66666666666667 326,97.66666666666667 326,106.66666666666667"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <line
                    x1="335"
                    y1="26.66666666666667"
                    x2="275"
                    y2="106.66666666666667"
                    stroke="#ec4899"
                    strokeWidth="4"
                    strokeLinecap="round"
                  ></line>
                  <text
                    x="297.8"
                    y="55.1"
                    textAnchor="end"
                    fontSize="12"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"hipotenusa"}
                  </text>
                  <text
                    x="343.3"
                    y="59.1"
                    textAnchor="start"
                    fontSize="11"
                    fontWeight="700"
                    fill="#475569"
                  >
                    {"cateto"}
                  </text>
                  <text
                    x="301.5"
                    y="126.0"
                    textAnchor="end"
                    fontSize="11"
                    fontWeight="700"
                    fill="#475569"
                  >
                    {"cateto"}
                  </text>
                  <polygon
                    points="123.2,257.9 48.0,230.6 143.7,201.5"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polyline
                    points="114.76083343403768,254.83620828113834 117.83901472396869,246.37897469406516 126.29624831104186,249.4571559839962"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <line
                    x1="48.04265735823818"
                    y1="230.55277810501585"
                    x2="143.73927562065097"
                    y2="201.53283232391482"
                    stroke="#ec4899"
                    strokeWidth="4"
                    strokeLinecap="round"
                  ></line>
                  <text
                    x="89.3"
                    y="204.0"
                    textAnchor="end"
                    fontSize="12"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"hipotenusa"}
                  </text>
                  <text
                    x="77.6"
                    y="260.2"
                    textAnchor="end"
                    fontSize="11"
                    fontWeight="700"
                    fill="#475569"
                  >
                    {"cateto"}
                  </text>
                  <text
                    x="143.5"
                    y="233.6"
                    textAnchor="start"
                    fontSize="11"
                    fontWeight="700"
                    fill="#475569"
                  >
                    {"cateto"}
                  </text>
                  <polygon
                    points="304.6,198.3 370.2,244.2 270.2,247.5"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polyline
                    points="311.99984261124877,203.48377540535168 306.83765468408933,210.85614380395262 299.4652862854884,205.6939558767932"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <line
                    x1="370.15963775576716"
                    y1="244.2077023862759"
                    x2="270.21288803158507"
                    y2="247.4707101355318"
                    stroke="#ec4899"
                    strokeWidth="4"
                    strokeLinecap="round"
                  ></line>
                  <text
                    x="323.9"
                    y="267.2"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"hipotenusa"}
                  </text>
                  <text
                    x="346.7"
                    y="215.6"
                    textAnchor="start"
                    fontSize="11"
                    fontWeight="700"
                    fill="#475569"
                  >
                    {"cateto"}
                  </text>
                  <text
                    x="277.7"
                    y="224.4"
                    textAnchor="end"
                    fontSize="11"
                    fontWeight="700"
                    fill="#475569"
                  >
                    {"cateto"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "O triângulo é o mesmo nas quatro figuras, só mudou de posição. A hipotenusa (em rosa) é sempre o lado em frente ao ângulo reto."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-amber-500 bg-amber-50">
                <b>
                  <MathText>{"Como achar a hipotenusa sem errar"}</MathText>
                </b>
                <MathText>
                  {
                    "Procure o quadradinho do ângulo reto. A hipotenusa é o lado que "
                  }
                </MathText>
                <b>
                  <MathText>{"não encosta"}</MathText>
                </b>
                <MathText>
                  {" nele, o lado “de frente”. Ela também é "}
                </MathText>
                <b>
                  <MathText>{"sempre o maior lado"}</MathText>
                </b>
                <MathText>
                  {
                    " do triângulo retângulo. Não importa se o triângulo está deitado, de ponta-cabeça ou inclinado: o critério é o mesmo."
                  }
                </MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"0.2 Uma história curta"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <ul className="mt-3 pl-6 list-disc leading-8 text-slate-600">
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Pitágoras de Samos"}</MathText>
                  </b>
                  <MathText>
                    {
                      " foi um filósofo e matemático grego que viveu por volta do século VI a.C. Seus seguidores ficaram famosos por estudar a relação entre os lados do triângulo retângulo; por isso o teorema leva o nome dele."
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>{"Mas a regra é "}</MathText>
                  <b>
                    <MathText>{"mais antiga"}</MathText>
                  </b>
                  <MathText>
                    {". Uma tabuleta de argila babilônica (a "}
                  </MathText>
                  <i>
                    <MathText>{"Plimpton 322"}</MathText>
                  </i>
                  <MathText>
                    {
                      ", com cerca de 3 800 anos) lista trios de números que obedecem a ela."
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>
                    {"Construtores do Egito antigo usavam uma "}
                  </MathText>
                  <b>
                    <MathText>{"corda com 12 nós"}</MathText>
                  </b>
                  <MathText>
                    {
                      " igualmente espaçados. Formando um triângulo com lados de 3, 4 e 5 espaços, o canto ficava "
                    }
                  </MathText>
                  <b>
                    <MathText>{"exatamente reto"}</MathText>
                  </b>
                  <MathText>{". Você vai ver isso na "}</MathText>
                  <a
                    href="#l4"
                    data-lesson="l4"
                    className="underline font-bold text-indigo-700 block rounded-xl px-3 py-2 text-sm leading-5 hover:bg-indigo-100 hover:text-indigo-800"
                  >
                    <MathText>{"lição 4"}</MathText>
                  </a>
                  <MathText>{"."}</MathText>
                </li>
                <MathText>{"\n  "}</MathText>
              </ul>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"0.3 Para que serve?"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <ul className="mt-3 pl-6 list-disc leading-8 text-slate-600">
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Construção civil:"}</MathText>
                  </b>
                  <MathText>
                    {
                      " conferir se uma parede está no esquadro, calcular o comprimento de um telhado, de uma rampa ou de uma escada."
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Telas e objetos:"}</MathText>
                  </b>
                  <MathText>{" a polegada de uma TV é a medida da "}</MathText>
                  <b>
                    <MathText>{"diagonal"}</MathText>
                  </b>
                  <MathText>
                    {
                      " da tela (você descobre a diagonal a partir da largura e da altura)."
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Distâncias:"}</MathText>
                  </b>
                  <MathText>
                    {
                      " a menor distância em linha reta entre dois lugares de um mapa, entre dois pontos de um jogo ou entre dois pontos de um plano."
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Navegação e GPS:"}</MathText>
                  </b>
                  <MathText>
                    {" o cálculo de distâncias usa essa ideia o tempo todo."}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Trigonometria:"}</MathText>
                  </b>
                  <MathText>
                    {
                      " o próximo grande assunto da matemática (seno, cosseno e tangente) nasce "
                    }
                  </MathText>
                  <b>
                    <MathText>{"dentro do triângulo retângulo"}</MathText>
                  </b>
                  <MathText>
                    {". Sem dominar Pitágoras, a trigonometria trava."}
                  </MathText>
                </li>
                <MathText>{"\n  "}</MathText>
              </ul>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"0.4 Mapa do curso"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <table className="relative w-full border-collapse my-4 text-sm block overflow-x-auto">
                <thead>
                  <tr>
                    <th className="bg-indigo-100 text-indigo-900 text-left px-3 py-2 font-extrabold whitespace-nowrap">
                      <MathText>{"Lição"}</MathText>
                    </th>
                    <th className="bg-indigo-100 text-indigo-900 text-left px-3 py-2 font-extrabold whitespace-nowrap">
                      <MathText>{"O que você aprende"}</MathText>
                    </th>
                    <th className="bg-indigo-100 text-indigo-900 text-left px-3 py-2 font-extrabold whitespace-nowrap">
                      <MathText>{"Exercícios"}</MathText>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"1 · O teorema"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>
                        {"O que ele diz, por que vale e quando pode ser usado"}
                      </MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Nível 1"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"2 · Hipotenusa"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>
                        {"Achar o lado maior (soma dos quadrados e raiz)"}
                      </MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Nível 2"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"3 · Cateto"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>
                        {"Achar um lado menor (subtração e raiz)"}
                      </MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Nível 3"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"4 · Ternos e recíproca"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>
                        {
                          "Trios famosos (3, 4, 5…) e como saber se um triângulo é retângulo"
                        }
                      </MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Nível 4"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"5 · Diagonais e alturas"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>
                        {"Quadrado, retângulo e triângulos com altura"}
                      </MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Nível 5"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"6 · Distância no plano"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>
                        {"Distância entre dois pontos no plano cartesiano"}
                      </MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Nível 6"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"7 · Aplicações"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>
                        {"Escadas, rampas, cabos, telas e mapas"}
                      </MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Nível 7"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"8 · Desafios e folha de cola"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>
                        {"Problemas de interpretação, erros comuns e resumo"}
                      </MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Nível 8"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n  "}</MathText>
                </tbody>
              </table>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"0.5 Como estudar"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="grid gap-3 mt-4 md:grid-cols-3">
                <MathText>{"\n    "}</MathText>
                <div className="bg-indigo-50">
                  <b>
                    <MathText>{"1. Sempre desenhe"}</MathText>
                  </b>
                  <br />
                  <MathText>
                    {
                      "Faça o triângulo, marque o ângulo reto e escreva as medidas nos lados antes de calcular."
                    }
                  </MathText>
                </div>
                <MathText>{"\n    "}</MathText>
                <div className="bg-amber-50">
                  <b>
                    <MathText>{"2. Domine a tabuada dos quadrados"}</MathText>
                  </b>
                  <br />
                  <MathText>
                    {
                      "Saber \\(1^2\\) até \\(15^2\\) de cabeça e as raízes exatas deixa tudo mais rápido."
                    }
                  </MathText>
                </div>
                <MathText>{"\n    "}</MathText>
                <div className="bg-emerald-50">
                  <b>
                    <MathText>{"3. Mexa no laboratório"}</MathText>
                  </b>
                  <br />
                  <MathText>
                    {
                      "Arraste os controles do Exp. 1 “Os quadrados do teorema” e veja a regra funcionando."
                    }
                  </MathText>
                </div>
                <MathText>{"\n  "}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <p className="mt-4 leading-8 text-slate-600">
                <MathText>
                  {
                    "Pré-requisitos que vamos usar: raiz quadrada (curso de Radiciação), áreas e triângulos (Geometria Básica) e equações simples (Álgebra)."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <PitagorasQuickCheck index={0} />
              <MathText>{"\n  "}</MathText>
              <PitagorasQuickCheck index={1} />
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-gotab="laboratorio"
              >
                <MathText>{"🔬 Abrir o laboratório"}</MathText>
              </button>
              <MathText>{"\n"}</MathText>
            </article>
            <MathText>{"\n\n"}</MathText>
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
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-800">
                <MathText>{"O Teorema de Pitágoras: o que ele diz"}</MathText>
              </h2>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {"Pegue um triângulo retângulo e desenhe um "}
                </MathText>
                <b>
                  <MathText>{"quadrado em cima de cada lado"}</MathText>
                </b>
                <MathText>
                  {". Pitágoras descobriu que os quadrados dos catetos, "}
                </MathText>
                <b>
                  <MathText>{"juntos"}</MathText>
                </b>
                <MathText>{", têm a "}</MathText>
                <b>
                  <MathText>{"mesma área"}</MathText>
                </b>
                <MathText>
                  {
                    " que o quadrado da hipotenusa. Vamos ver isso com números e depois entender "
                  }
                </MathText>
                <b>
                  <MathText>{"por quê"}</MathText>
                </b>
                <MathText>{"."}</MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"1.1 O enunciado"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-emerald-500 bg-emerald-50">
                <b>
                  <MathText>{"Teorema de Pitágoras"}</MathText>
                </b>
                <MathText>{"Em todo triângulo "}</MathText>
                <b>
                  <MathText>{"retângulo"}</MathText>
                </b>
                <MathText>
                  {
                    ", o quadrado da hipotenusa é igual à soma dos quadrados dos catetos."
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
                <MathText>{"\\[ a^2 + b^2 = c^2 \\]"}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 380 175"
                  style={{ width: "380px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Triângulo retângulo com catetos a e b e hipotenusa c"
                >
                  <polygon
                    points="100.0,140.0 236.0,140.0 100.0,38.0"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <line
                    x1="236"
                    y1="140"
                    x2="100"
                    y2="38"
                    stroke="#ec4899"
                    strokeWidth="4"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="111,140 111,129 100,129"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="168.0"
                    y="155.3"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"b (cateto)"}
                  </text>
                  <text
                    x="92.0"
                    y="89.0"
                    textAnchor="end"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"a (cateto)"}
                  </text>
                  <text
                    x="173.1"
                    y="73.7"
                    textAnchor="start"
                    fontSize="13"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"c (hipotenusa)"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Convenção: \\(a\\) e \\(b\\) são os catetos e \\(c\\) é a hipotenusa."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {
                    "“Elevar ao quadrado” é multiplicar o número por ele mesmo: \\(3^2 = 3 \\cdot 3 = 9\\). Aqui, \\(a^2\\) é a área de um quadrado de lado \\(a\\)."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"1.2 Com números: o triângulo 3-4-5"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 420 326"
                  style={{ width: "420px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Triângulo de catetos 3 e 4 e hipotenusa 5 com um quadrado sobre cada lado: áreas 9, 16 e 25"
                >
                  <polygon
                    points="98.0,202.0 202.0,202.0 202.0,306.0 98.0,306.0"
                    fill="#fef3c7"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <line
                    x1="124"
                    y1="202"
                    x2="124"
                    y2="306"
                    stroke="#fcd34d"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="98"
                    y1="228"
                    x2="202"
                    y2="228"
                    stroke="#fcd34d"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="150"
                    y1="202"
                    x2="150"
                    y2="306"
                    stroke="#fcd34d"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="98"
                    y1="254"
                    x2="202"
                    y2="254"
                    stroke="#fcd34d"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="176"
                    y1="202"
                    x2="176"
                    y2="306"
                    stroke="#fcd34d"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="98"
                    y1="280"
                    x2="202"
                    y2="280"
                    stroke="#fcd34d"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <polygon
                    points="98.0,202.0 98.0,124.0 20.0,124.0 20.0,202.0"
                    fill="#dcfce7"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <line
                    x1="98"
                    y1="176"
                    x2="20"
                    y2="176"
                    stroke="#86efac"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="72"
                    y1="202"
                    x2="72"
                    y2="124"
                    stroke="#86efac"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="98"
                    y1="150"
                    x2="20"
                    y2="150"
                    stroke="#86efac"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="46"
                    y1="202"
                    x2="46"
                    y2="124"
                    stroke="#86efac"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <polygon
                    points="202.0,202.0 98.0,124.0 176.0,20.0 280.0,98.0"
                    fill="#fce7f3"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <line
                    x1="181.2"
                    y1="186.4"
                    x2="259.2"
                    y2="82.4"
                    stroke="#f9a8d4"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="217.6"
                    y1="181.2"
                    x2="113.60000000000001"
                    y2="103.2"
                    stroke="#f9a8d4"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="160.4"
                    y1="170.8"
                    x2="238.4"
                    y2="66.79999999999998"
                    stroke="#f9a8d4"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="233.2"
                    y1="160.4"
                    x2="129.2"
                    y2="82.4"
                    stroke="#f9a8d4"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="139.6"
                    y1="155.2"
                    x2="217.6"
                    y2="51.20000000000002"
                    stroke="#f9a8d4"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="248.8"
                    y1="139.6"
                    x2="144.8"
                    y2="61.599999999999994"
                    stroke="#f9a8d4"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="118.8"
                    y1="139.6"
                    x2="196.79999999999998"
                    y2="35.599999999999994"
                    stroke="#f9a8d4"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="264.4"
                    y1="118.8"
                    x2="160.4"
                    y2="40.79999999999998"
                    stroke="#f9a8d4"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <polygon
                    points="98.0,202.0 202.0,202.0 98.0,124.0"
                    fill="#fff"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></polygon>
                  <polyline
                    points="108,202 108,192 98,192"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="150.0"
                    y="254.0"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"b² = 16"}
                  </text>
                  <text
                    x="59.0"
                    y="163.0"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"a² = 9"}
                  </text>
                  <text
                    x="207.2"
                    y="111.0"
                    textAnchor="middle"
                    fontSize="16"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"c² = 25"}
                  </text>
                  <text
                    x="150.0"
                    y="187.7"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"b = 4"}
                  </text>
                  <text
                    x="103.2"
                    y="163.0"
                    textAnchor="start"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"a = 3"}
                  </text>
                  <text
                    x="160.4"
                    y="147.4"
                    textAnchor="start"
                    fontSize="12"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"c = 5"}
                  </text>
                  <text
                    x="345.0"
                    y="90.0"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"9 + 16 = 25"}
                  </text>
                  <text
                    x="345.0"
                    y="114.0"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"a² + b² = c²"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Catetos 3 e 4, hipotenusa 5. As áreas dos três quadrados: 9, 16 e 25. E 9 + 16 = 25."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 1 — conferindo o teorema no triângulo de lados 3, 4 e 5"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Catetos: \\(a = 3\\) e \\(b = 4\\). Hipotenusa: \\(c = 5\\)."
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(a^2 + b^2 = 3^2 + 4^2 = 9 + 16 = 25\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(c^2 = 5^2 = 25\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(25 = 25\\) ✓ A regra funciona!"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {"EXEMPLO 2 — mais dois triângulos retângulos"}
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Lados 6, 8 e 10: \\(6^2 + 8^2 = 36 + 64 = 100 = 10^2\\) ✓"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Lados 5, 12 e 13: \\(5^2 + 12^2 = 25 + 144 = 169 = 13^2\\) ✓"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>
                  {"1.3 Por que vale? Uma demonstração com desenhos"}
                </MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>{"Não precisamos “acreditar”: dá para "}</MathText>
                <b>
                  <MathText>{"ver"}</MathText>
                </b>
                <MathText>{". Pegue "}</MathText>
                <b>
                  <MathText>{"4 cópias"}</MathText>
                </b>
                <MathText>
                  {
                    " do mesmo triângulo retângulo (catetos \\(a\\) e \\(b\\), hipotenusa \\(c\\)) e monte "
                  }
                </MathText>
                <b>
                  <MathText>{"dois quadrados idênticos"}</MathText>
                </b>
                <MathText>{", ambos com lado \\(a + b\\)."}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 420 244"
                  style={{ width: "420px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Dois quadrados de lado a mais b: no primeiro cabem quatro triângulos e o quadrado c²; no segundo, os mesmos quatro triângulos e os quadrados a² e b²"
                >
                  <polygon
                    points="20.0,205.0 195.0,205.0 195.0,30.0 20.0,30.0"
                    fill="#fff"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></polygon>
                  <polygon
                    points="95.0,205.0 195.0,130.0 120.0,30.0 20.0,105.0"
                    fill="#fbcfe8"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polygon
                    points="20.0,205.0 95.0,205.0 20.0,105.0"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polygon
                    points="95.0,205.0 195.0,205.0 195.0,130.0"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polygon
                    points="195.0,130.0 195.0,30.0 120.0,30.0"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polygon
                    points="120.0,30.0 20.0,30.0 20.0,105.0"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <text
                    x="107.5"
                    y="122.5"
                    textAnchor="middle"
                    fontSize="20"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"c²"}
                  </text>
                  <text
                    x="57.5"
                    y="218.8"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"a"}
                  </text>
                  <text
                    x="145.0"
                    y="218.8"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"b"}
                  </text>
                  <text
                    x="97.0"
                    y="17.0"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"lado = a + b"}
                  </text>
                  <polygon
                    points="225.0,205.0 400.0,205.0 400.0,30.0 225.0,30.0"
                    fill="#fff"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></polygon>
                  <polygon
                    points="225.0,205.0 325.0,205.0 325.0,105.0 225.0,105.0"
                    fill="#fde68a"
                    stroke="#d97706"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polygon
                    points="325.0,105.0 400.0,105.0 400.0,30.0 325.0,30.0"
                    fill="#bbf7d0"
                    stroke="#16a34a"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polygon
                    points="225.0,105.0 325.0,105.0 325.0,30.0"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polygon
                    points="225.0,105.0 225.0,30.0 325.0,30.0"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polygon
                    points="325.0,205.0 400.0,205.0 400.0,105.0"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polygon
                    points="325.0,205.0 325.0,105.0 400.0,105.0"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <text
                    x="275.0"
                    y="160.0"
                    textAnchor="middle"
                    fontSize="20"
                    fontWeight="700"
                    fill="#b45309"
                  >
                    {"b²"}
                  </text>
                  <text
                    x="362.5"
                    y="75.0"
                    textAnchor="middle"
                    fontSize="18"
                    fontWeight="700"
                    fill="#15803d"
                  >
                    {"a²"}
                  </text>
                  <text
                    x="275.0"
                    y="218.8"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"b"}
                  </text>
                  <text
                    x="362.5"
                    y="218.8"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"a"}
                  </text>
                  <text
                    x="302.0"
                    y="17.0"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"lado = a + b"}
                  </text>
                  <text
                    x="97.0"
                    y="232.0"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"4 triângulos + c²"}
                  </text>
                  <text
                    x="302.0"
                    y="232.0"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"4 triângulos + a² + b²"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Os dois quadrados grandes são iguais (mesmo lado \\(a+b\\)). Em cada um sobram partes diferentes depois de colocar os 4 triângulos."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <ul className="mt-3 pl-6 list-disc leading-8 text-slate-600">
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Quadrado da esquerda:"}</MathText>
                  </b>
                  <MathText>{" os 4 triângulos ficam nos cantos e "}</MathText>
                  <b>
                    <MathText>{"sobra no meio"}</MathText>
                  </b>
                  <MathText>
                    {
                      " um quadrado inclinado, de lado \\(c\\). Sua área é \\(c^2\\)."
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Quadrado da direita:"}</MathText>
                  </b>
                  <MathText>
                    {
                      " os mesmos 4 triângulos, arrumados de outro jeito, deixam "
                    }
                  </MathText>
                  <b>
                    <MathText>{"dois quadrados"}</MathText>
                  </b>
                  <MathText>
                    {
                      " livres: um de lado \\(a\\) (área \\(a^2\\)) e um de lado \\(b\\) (área \\(b^2\\))."
                    }
                  </MathText>
                </li>
                <MathText>{"\n  "}</MathText>
              </ul>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>{"Os dois quadrados grandes têm a "}</MathText>
                <b>
                  <MathText>{"mesma área"}</MathText>
                </b>
                <MathText>{", e os 4 triângulos ocupam o "}</MathText>
                <b>
                  <MathText>{"mesmo espaço"}</MathText>
                </b>
                <MathText>
                  {" nos dois. Então o que sobra também é igual:"}
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
                <MathText>
                  {
                    "\\[ \\underbrace{c^2}_{\\text{esquerda}} \\;=\\; \\underbrace{a^2 + b^2}_{\\text{direita}} \\]"
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>{"CONFERINDO COM NÚMEROS (a = 3, b = 4)"}</MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Lado do quadrado grande: \\(3 + 4 = 7\\). Área: \\(7^2 = 49\\)."
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Cada triângulo: \\(\\dfrac{3 \\cdot 4}{2} = 6\\). Quatro triângulos: \\(4 \\cdot 6 = 24\\)."
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"Esquerda: \\(49 - 24 = 25 = c^2\\)."}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Direita: \\(49 - 24 = 25\\) e também \\(3^2 + 4^2 = 9 + 16 = 25\\) ✓"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"1.4 Quando posso usar?"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="grid gap-3 mt-4 sm:grid-cols-2">
                <MathText>{"\n    "}</MathText>
                <div className="bg-emerald-50 border border-emerald-200">
                  <b>
                    <MathText>{"✔ Só em triângulo retângulo."}</MathText>
                  </b>
                  <br />
                  <MathText>
                    {
                      "Antes de usar, confirme que há um ângulo reto (o quadradinho, ou a informação no enunciado)."
                    }
                  </MathText>
                </div>
                <MathText>{"\n    "}</MathText>
                <div className="bg-red-50 border border-red-200">
                  <b>
                    <MathText>{"✘ Em triângulo qualquer, não."}</MathText>
                  </b>
                  <br />
                  <MathText>
                    {
                      "Exemplo: lados 4, 5 e 6 → \\(4^2 + 5^2 = 16 + 25 = 41\\), mas \\(6^2 = 36\\). \\(41 \\ne 36\\): esse triângulo "
                    }
                  </MathText>
                  <b>
                    <MathText>{"não"}</MathText>
                  </b>
                  <MathText>{" é retângulo."}</MathText>
                </div>
                <MathText>{"\n  "}</MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"1.5 Qual é a hipotenusa?"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <ol className="mt-3 pl-6 list-decimal leading-8 text-slate-600">
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>{"Ache o ângulo reto."}</MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>{"A hipotenusa é o lado "}</MathText>
                  <b>
                    <MathText>{"oposto"}</MathText>
                  </b>
                  <MathText>
                    {" a ele (o que não encosta no ângulo reto)."}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>
                    {
                      "Chame-a de \\(c\\). Os outros dois são \\(a\\) e \\(b\\) (a ordem entre eles não importa)."
                    }
                  </MathText>
                </li>
                <MathText>{"\n  "}</MathText>
              </ol>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50">
                <b>
                  <MathText>{"Erros comuns"}</MathText>
                </b>
                <MathText>{"\n    "}</MathText>
                <b>
                  <MathText>{"1)"}</MathText>
                </b>
                <MathText>
                  {
                    " Escrever \\(c = a + b\\). Errado: \\(3 + 4 = 7\\), mas a hipotenusa é 5. O teorema fala de "
                  }
                </MathText>
                <b>
                  <MathText>{"quadrados"}</MathText>
                </b>
                <MathText>{"."}</MathText>
                <br />
                <MathText>{"\n    "}</MathText>
                <b>
                  <MathText>{"2)"}</MathText>
                </b>
                <MathText>
                  {
                    " Escrever \\(a + b = c\\) ou \\(a^2 + b^2 = c\\) (esquecer o quadrado de \\(c\\))."
                  }
                </MathText>
                <br />
                <MathText>{"\n    "}</MathText>
                <b>
                  <MathText>{"3)"}</MathText>
                </b>
                <MathText>
                  {" Usar o teorema em um triângulo sem ângulo reto."}
                </MathText>
                <br />
                <MathText>{"\n    "}</MathText>
                <b>
                  <MathText>{"4)"}</MathText>
                </b>
                <MathText>
                  {
                    " Chamar de hipotenusa o lado que “parece maior” sem checar o ângulo reto: ela é sempre a oposta ao ângulo reto.\n  "
                  }
                </MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"1.6 Resumo"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <ul className="mt-3 pl-6 list-disc leading-8 text-slate-600">
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>
                    {
                      "Triângulo retângulo: \\(a^2 + b^2 = c^2\\), com \\(c\\) a hipotenusa."
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>
                    {
                      "Geometricamente: área do quadrado da hipotenusa = soma das áreas dos quadrados dos catetos."
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>{"Isso vale "}</MathText>
                  <b>
                    <MathText>{"só"}</MathText>
                  </b>
                  <MathText>{" com ângulo reto."}</MathText>
                </li>
                <MathText>{"\n  "}</MathText>
              </ul>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {
                    "Brinque com o Exp. 1 “Os quadrados do teorema”: mude \\(a\\) e \\(b\\) e veja os quadrados e a hipotenusa se ajustarem."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <PitagorasQuickCheck index={2} />
              <MathText>{"\n  "}</MathText>
              <PitagorasQuickCheck index={3} />
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-gotab="laboratorio"
              >
                <MathText>{"🔬 Abrir o laboratório (Exp. 1)"}</MathText>
              </button>
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-goto="1"
              >
                <MathText>{"✏️ Fazer os exercícios do nível 1"}</MathText>
              </button>
              <MathText>{"\n"}</MathText>
            </article>
            <MathText>{"\n\n"}</MathText>
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
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-800">
                <MathText>{"Calculando a hipotenusa"}</MathText>
              </h2>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>{"Quando você conhece os "}</MathText>
                <b>
                  <MathText>{"dois catetos"}</MathText>
                </b>
                <MathText>{" e quer a "}</MathText>
                <b>
                  <MathText>{"hipotenusa"}</MathText>
                </b>
                <MathText>{", a conta é: "}</MathText>
                <b>
                  <MathText>
                    {"eleve cada cateto ao quadrado, some e tire a raiz"}
                  </MathText>
                </b>
                <MathText>{"."}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
                <MathText>{"\\[ c = \\sqrt{a^2 + b^2} \\]"}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"2.1 O passo a passo no papel"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <ol className="mt-3 pl-6 list-decimal leading-8 text-slate-600">
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Desenhe"}</MathText>
                  </b>
                  <MathText>
                    {" o triângulo, marque o ângulo reto e escreva as medidas."}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Escreva a fórmula:"}</MathText>
                  </b>
                  <MathText>{" \\(a^2 + b^2 = c^2\\)."}</MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Substitua"}</MathText>
                  </b>
                  <MathText>{" os valores conhecidos."}</MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Calcule as potências."}</MathText>
                  </b>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Some"}</MathText>
                  </b>
                  <MathText>{" os resultados."}</MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Tire a raiz quadrada"}</MathText>
                  </b>
                  <MathText>
                    {" dos dois lados (a medida é positiva)."}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Unidade e conferência:"}</MathText>
                  </b>
                  <MathText>
                    {" escreva a unidade e veja se faz sentido."}
                  </MathText>
                </li>
                <MathText>{"\n  "}</MathText>
              </ol>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>{"EXEMPLO 1 — catetos 3 cm e 4 cm"}</MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(c^2 = a^2 + b^2\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(c^2 = 3^2 + 4^2 = 9 + 16 = 25\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(c = \\sqrt{25} = 5\\) cm"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>{"EXEMPLO 2 — outros resultados exatos"}</MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Catetos 5 e 12: \\(25 + 144 = 169 \\Rightarrow c = \\sqrt{169} = 13\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Catetos 9 e 12: \\(81 + 144 = 225 \\Rightarrow c = \\sqrt{225} = 15\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Catetos 1,5 e 2: \\(2{,}25 + 4 = 6{,}25 \\Rightarrow c = \\sqrt{6{,}25} = 2{,}5\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"2.2 E quando a raiz não é exata?"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>{"Muitas vezes a soma "}</MathText>
                <b>
                  <MathText>{"não é um quadrado perfeito"}</MathText>
                </b>
                <MathText>
                  {
                    ". Tudo bem: deixe a raiz indicada (resposta exata) e, se pedirem, use a aproximação que você aprendeu em Radiciação."
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>{"EXEMPLO 3 — catetos 1 e 1"}</MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(c^2 = 1^2 + 1^2 = 1 + 1 = 2\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(c = \\sqrt{2} \\approx 1{,}41\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"(É a diagonal de um quadrado de lado 1!)"}
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>{"EXEMPLO 4 — catetos 2 e 3"}</MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(c^2 = 2^2 + 3^2 = 4 + 9 = 13\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(c = \\sqrt{13} \\approx 3{,}61\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Conferência: \\(3{,}6^2 = 12{,}96\\) ✓ (perto de 13)"}
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {"EXEMPLO 5 — catetos 4 e 6 (com simplificação)"}
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(c^2 = 4^2 + 6^2 = 16 + 36 = 52\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(c = \\sqrt{52} = \\sqrt{4 \\cdot 13} = 2\\sqrt{13}\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(\\sqrt{13} \\approx 3{,}606 \\Rightarrow c \\approx 2 \\cdot 3{,}606 \\approx 7{,}21\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"2.3 Um problema com texto"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 420 206"
                  style={{ width: "420px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Tela retangular de 40 por 30 centímetros com a diagonal desenhada"
                >
                  <rect
                    x="90"
                    y="20"
                    width="200"
                    height="150"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="3"
                  ></rect>
                  <line
                    x1="90"
                    y1="170"
                    x2="290"
                    y2="20"
                    stroke="#ec4899"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="102,170 102,158 90,158"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="190.0"
                    y="194.0"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"40 cm"}
                  </text>
                  <text
                    x="78.0"
                    y="98.0"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"30 cm"}
                  </text>
                  <text
                    x="215.0"
                    y="128.0"
                    textAnchor="start"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"d = ?"}
                  </text>
                  <text
                    x="360.0"
                    y="80.0"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"a diagonal cria"}
                  </text>
                  <text
                    x="360.0"
                    y="100.0"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"um triângulo"}
                  </text>
                  <text
                    x="360.0"
                    y="120.0"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"retângulo"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "A diagonal divide o retângulo em dois triângulos retângulos iguais."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 6 — Uma tela retangular tem 40 cm de largura e 30 cm de altura. Quanto mede a diagonal?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"A diagonal é a hipotenusa: os catetos são 40 e 30."}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(d^2 = 40^2 + 30^2 = 1\\,600 + 900 = 2\\,500\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(d = \\sqrt{2\\,500} = 50\\) cm"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"(É um 3-4-5 ampliado dez vezes: \\(30, 40, 50\\).)"}
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>
                  {"2.4 Como conferir se a resposta faz sentido"}
                </MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-amber-500 bg-amber-50">
                <b>
                  <MathText>{"Teste de bom senso"}</MathText>
                </b>
                <MathText>{"A hipotenusa é "}</MathText>
                <b>
                  <MathText>{"maior"}</MathText>
                </b>
                <MathText>{" que cada cateto e "}</MathText>
                <b>
                  <MathText>{"menor"}</MathText>
                </b>
                <MathText>
                  {
                    " que a soma deles. Nos catetos 3 e 4: \\(4 < 5 < 7\\) ✓. Se encontrar uma hipotenusa menor que um cateto, há erro."
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50">
                <b>
                  <MathText>{"Erros comuns"}</MathText>
                </b>
                <MathText>{"\n    "}</MathText>
                <b>
                  <MathText>{"1)"}</MathText>
                </b>
                <MathText>
                  {
                    " Tirar a raiz de cada parcela: \\(\\sqrt{3^2 + 4^2} \\neq 3 + 4\\). Primeiro "
                  }
                </MathText>
                <b>
                  <MathText>{"some"}</MathText>
                </b>
                <MathText>{" (9 + 16 = 25), depois tire a raiz."}</MathText>
                <br />
                <MathText>{"\n    "}</MathText>
                <b>
                  <MathText>{"2)"}</MathText>
                </b>
                <MathText>
                  {
                    " Esquecer a raiz no final e responder \\(c^2\\) (por exemplo, 25 em vez de 5)."
                  }
                </MathText>
                <br />
                <MathText>{"\n    "}</MathText>
                <b>
                  <MathText>{"3)"}</MathText>
                </b>
                <MathText>
                  {
                    " Elevar ao quadrado como se fosse dobrar: \\(3^2 = 9\\), não 6."
                  }
                </MathText>
                <br />
                <MathText>{"\n    "}</MathText>
                <b>
                  <MathText>{"4)"}</MathText>
                </b>
                <MathText>{" Esquecer a unidade (cm, m…).\n  "}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <PitagorasQuickCheck index={4} />
              <MathText>{"\n  "}</MathText>
              <PitagorasQuickCheck index={5} />
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-gotab="ferramentas"
              >
                <MathText>
                  {
                    "🧮 Abrir a calculadora “Teorema de Pitágoras passo a passo”"
                  }
                </MathText>
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
            <MathText>{"\n\n"}</MathText>
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
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-800">
                <MathText>{"Calculando um cateto"}</MathText>
              </h2>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>{"E se você conhece a "}</MathText>
                <b>
                  <MathText>{"hipotenusa"}</MathText>
                </b>
                <MathText>{" e "}</MathText>
                <b>
                  <MathText>{"um cateto"}</MathText>
                </b>
                <MathText>{", e quer o "}</MathText>
                <b>
                  <MathText>{"outro cateto"}</MathText>
                </b>
                <MathText>
                  {"? É a mesma fórmula, só que você precisa "}
                </MathText>
                <b>
                  <MathText>{"desfazer a soma"}</MathText>
                </b>
                <MathText>{" com uma "}</MathText>
                <b>
                  <MathText>{"subtração"}</MathText>
                </b>
                <MathText>{"."}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"3.1 Isolando o cateto"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {"COMO “ARRUMAR” A FÓRMULA (operação inversa)"}
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(a^2 + b^2 = c^2\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Para achar \\(a\\), tire \\(b^2\\) dos dois lados:"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(a^2 = c^2 - b^2\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Tire a raiz: \\(a = \\sqrt{c^2 - b^2}\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
                <MathText>
                  {
                    "\\[ a = \\sqrt{c^2 - b^2} \\qquad\\text{(a hipotenusa } c \\text{ vem primeiro!)} \\]"
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <table className="relative w-full border-collapse my-4 text-sm block overflow-x-auto">
                <thead>
                  <tr>
                    <th className="bg-indigo-100 text-indigo-900 text-left px-3 py-2 font-extrabold whitespace-nowrap">
                      <MathText>{"O que procuro?"}</MathText>
                    </th>
                    <th className="bg-indigo-100 text-indigo-900 text-left px-3 py-2 font-extrabold whitespace-nowrap">
                      <MathText>{"Operação dentro da raiz"}</MathText>
                    </th>
                    <th className="bg-indigo-100 text-indigo-900 text-left px-3 py-2 font-extrabold whitespace-nowrap">
                      <MathText>{"Fórmula"}</MathText>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <b>
                        <MathText>{"Hipotenusa"}</MathText>
                      </b>
                      <MathText>{" (lado maior)"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <b>
                        <MathText>{"Soma"}</MathText>
                      </b>
                      <MathText>{" dos quadrados"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"\\(c = \\sqrt{a^2 + b^2}\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <b>
                        <MathText>{"Cateto"}</MathText>
                      </b>
                      <MathText>{" (lado menor)"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <b>
                        <MathText>{"Subtração"}</MathText>
                      </b>
                      <MathText>
                        {": quadrado da hipotenusa menos o do outro cateto"}
                      </MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"\\(a = \\sqrt{c^2 - b^2}\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n  "}</MathText>
                </tbody>
              </table>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"3.2 Passo a passo"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <ol className="mt-3 pl-6 list-decimal leading-8 text-slate-600">
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>
                    {"Desenhe e marque o que sabe e o que procura."}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>{"Identifique a "}</MathText>
                  <b>
                    <MathText>{"hipotenusa"}</MathText>
                  </b>
                  <MathText>{" (oposta ao ângulo reto)."}</MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>{"Escreva \\(a^2 + b^2 = c^2\\) e "}</MathText>
                  <b>
                    <MathText>{"substitua"}</MathText>
                  </b>
                  <MathText>{" os valores conhecidos."}</MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>
                    {"Isole o termo desconhecido (subtraia)."}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>
                    {"Calcule, tire a raiz e escreva a unidade."}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>{"Confira: o cateto precisa ser "}</MathText>
                  <b>
                    <MathText>{"menor"}</MathText>
                  </b>
                  <MathText>{" que a hipotenusa."}</MathText>
                </li>
                <MathText>{"\n  "}</MathText>
              </ol>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {"EXEMPLO 1 — hipotenusa 10 e um cateto 6"}
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(a^2 + 6^2 = 10^2\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(a^2 + 36 = 100\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(a^2 = 100 - 36 = 64\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(a = \\sqrt{64} = 8\\) ✓ (8 < 10)"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>{"EXEMPLO 2 — hipotenusa 13 e cateto 5"}</MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(a^2 = 13^2 - 5^2 = 169 - 25 = 144\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(a = \\sqrt{144} = 12\\)"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>{"EXEMPLO 3 — hipotenusa 5 e cateto 4"}</MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(a^2 = 5^2 - 4^2 = 25 - 16 = 9\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(a = \\sqrt{9} = 3\\)"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {"EXEMPLO 4 — raiz não exata: hipotenusa 6 e cateto 4"}
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(a^2 = 6^2 - 4^2 = 36 - 16 = 20\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(a = \\sqrt{20} = \\sqrt{4 \\cdot 5} = 2\\sqrt{5}\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(\\sqrt{5} \\approx 2{,}236 \\Rightarrow a \\approx 2 \\cdot 2{,}236 \\approx 4{,}47\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"3.3 Um problema com texto"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 320 176"
                  style={{ width: "320px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Escada de 5 metros encostada em uma parede, com o pé a 3 metros da parede e altura desconhecida"
                >
                  <rect
                    x="230"
                    y="20"
                    width="24"
                    height="130"
                    fill="#cbd5e1"
                    stroke="#64748b"
                    strokeWidth="2"
                  ></rect>
                  <line
                    x1="30"
                    y1="150"
                    x2="254"
                    y2="150"
                    stroke="#64748b"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="140"
                    y1="150"
                    x2="230"
                    y2="30"
                    stroke="#ec4899"
                    strokeWidth="5"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="220,150 220,140 230,140"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <circle cx="140" cy="150" r="5" fill="#4f46e5"></circle>
                  <circle cx="230" cy="30" r="5" fill="#4f46e5"></circle>
                  <text
                    x="173.0"
                    y="82.0"
                    textAnchor="end"
                    fontSize="13"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"escada 5 m"}
                  </text>
                  <text
                    x="185.0"
                    y="170.0"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"3 m"}
                  </text>
                  <text
                    x="262.0"
                    y="90.0"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"h = ?"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "A escada, o chão e a parede formam um triângulo retângulo. A escada é a hipotenusa."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 5 — Uma escada de 5 m está apoiada em uma parede, com o pé a 3 m da parede. A que altura ela toca a parede?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Hipotenusa (escada): \\(c = 5\\). Cateto no chão: \\(3\\). Procuro \\(h\\)."
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(h^2 = 5^2 - 3^2 = 25 - 9 = 16\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(h = \\sqrt{16} = 4\\) m"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 6 — Um cabo de aço de 10 m liga o topo de um poste ao chão, a 6 m da base. Qual é a altura do poste?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "O cabo é a hipotenusa (10); a distância no chão é um cateto (6)."
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(h^2 = 10^2 - 6^2 = 100 - 36 = 64 \\Rightarrow h = 8\\) m"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {
                    "Teste no Exp. 3 “A escada na parede”: afaste o pé da escada e veja a altura mudar."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50">
                <b>
                  <MathText>{"Erros comuns"}</MathText>
                </b>
                <MathText>{"\n    "}</MathText>
                <b>
                  <MathText>{"1)"}</MathText>
                </b>
                <MathText> </MathText>
                <b>
                  <MathText>{"Somar"}</MathText>
                </b>
                <MathText>{" quando devia "}</MathText>
                <b>
                  <MathText>{"subtrair"}</MathText>
                </b>
                <MathText>
                  {
                    ": \\(\\sqrt{5^2 + 3^2}\\) é a hipotenusa de catetos 5 e 3, não o cateto que falta."
                  }
                </MathText>
                <br />
                <MathText>{"\n    "}</MathText>
                <b>
                  <MathText>{"2)"}</MathText>
                </b>
                <MathText>{" Subtrair na "}</MathText>
                <b>
                  <MathText>{"ordem errada"}</MathText>
                </b>
                <MathText>
                  {
                    ": \\(3^2 - 5^2 = -16\\), e não existe raiz real de número negativo. A hipotenusa (maior) vem "
                  }
                </MathText>
                <b>
                  <MathText>{"primeiro"}</MathText>
                </b>
                <MathText>{"."}</MathText>
                <br />
                <MathText>{"\n    "}</MathText>
                <b>
                  <MathText>{"3)"}</MathText>
                </b>
                <MathText>
                  {" Colocar a hipotenusa no lugar de um cateto, e vice-versa."}
                </MathText>
                <br />
                <MathText>{"\n    "}</MathText>
                <b>
                  <MathText>{"4)"}</MathText>
                </b>
                <MathText>
                  {
                    " Resultado maior que a hipotenusa: se o cateto deu maior, há erro.\n  "
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <PitagorasQuickCheck index={6} />
              <MathText>{"\n  "}</MathText>
              <PitagorasQuickCheck index={7} />
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-gotab="ferramentas"
              >
                <MathText>
                  {
                    "🧮 Abrir a calculadora “Teorema de Pitágoras passo a passo”"
                  }
                </MathText>
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
            <MathText>{"\n\n"}</MathText>
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
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-800">
                <MathText>{"Ternos pitagóricos e a recíproca"}</MathText>
              </h2>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {
                    "Alguns trios de números inteiros fazem a conta de Pitágoras “fechar certinho”, sem raiz estranha. Eles são tão úteis que têm nome: "
                  }
                </MathText>
                <b>
                  <MathText>{"ternos pitagóricos"}</MathText>
                </b>
                <MathText>{"."}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"4.1 Os ternos mais famosos"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <table className="relative w-full border-collapse my-4 text-sm block overflow-x-auto">
                <thead>
                  <tr>
                    <th className="bg-indigo-100 text-indigo-900 text-left px-3 py-2 font-extrabold whitespace-nowrap">
                      <MathText>{"Terno \\((a, b, c)\\)"}</MathText>
                    </th>
                    <th className="bg-indigo-100 text-indigo-900 text-left px-3 py-2 font-extrabold whitespace-nowrap">
                      <MathText>{"Conferência"}</MathText>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"3, 4, 5"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"\\(9 + 16 = 25\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"5, 12, 13"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"\\(25 + 144 = 169\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"8, 15, 17"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"\\(64 + 225 = 289\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"7, 24, 25"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"\\(49 + 576 = 625\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"20, 21, 29"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"\\(400 + 441 = 841\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n  "}</MathText>
                </tbody>
              </table>
              <MathText>{"\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"4.2 Múltiplos também funcionam"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>{"Se você "}</MathText>
                <b>
                  <MathText>{"multiplica"}</MathText>
                </b>
                <MathText>
                  {
                    " os três números de um terno pelo mesmo valor, o triângulo só "
                  }
                </MathText>
                <b>
                  <MathText>{"aumenta"}</MathText>
                </b>
                <MathText>
                  {" (fica semelhante), e a regra continua valendo:"}
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>{"A FAMÍLIA DO 3-4-5"}</MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(\\times 2\\): 6, 8, 10 → \\(36 + 64 = 100\\) ✓"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(\\times 3\\): 9, 12, 15 → \\(81 + 144 = 225\\) ✓"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(\\times 10\\): 30, 40, 50 → \\(900 + 1600 = 2500\\) ✓"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-amber-500 bg-amber-50">
                <b>
                  <MathText>{"Truque de prova"}</MathText>
                </b>
                <MathText>
                  {
                    "Se os catetos são 30 e 40, pense “3-4-5 vezes 10” e responda 50 sem fazer a conta. Se a hipotenusa é 26 e um cateto é 10, pense “5-12-13 vezes 2”: o outro cateto é 24."
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50">
                <b>
                  <MathText>{"Curiosidade: como gerar ternos"}</MathText>
                </b>
                <MathText>
                  {
                    "Escolha dois números inteiros \\(m > n\\). Então \\(m^2 - n^2\\), \\(2mn\\) e \\(m^2 + n^2\\) formam um terno. Com \\(m = 2\\) e \\(n = 1\\): \\(3, 4, 5\\). Com \\(m = 3\\) e \\(n = 2\\): \\(5, 12, 13\\). Com \\(m = 4\\) e \\(n = 3\\): \\(7, 24, 25\\)."
                  }
                </MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>
                  {"4.3 A recíproca: se a conta fecha, o triângulo é retângulo"}
                </MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {
                    "O teorema diz: triângulo retângulo \\(\\Rightarrow\\) \\(a^2 + b^2 = c^2\\). A "
                  }
                </MathText>
                <b>
                  <MathText>{"recíproca"}</MathText>
                </b>
                <MathText>
                  {
                    " também é verdadeira: se os três lados de um triângulo satisfazem \\(a^2 + b^2 = c^2\\) (com \\(c\\) o maior lado), então o triângulo "
                  }
                </MathText>
                <b>
                  <MathText>{"é retângulo"}</MathText>
                </b>
                <MathText>{"."}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 420 205"
                  style={{ width: "420px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Triângulo 3, 4 e 5 formado com uma corda de 12 nós igualmente espaçados"
                >
                  <polygon
                    points="40.0,165.0 240.0,165.0 40.0,15.0"
                    fill="#f0f9ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polyline
                    points="51,165 51,154 40,154"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <circle cx="40" cy="165" r="5" fill="#ec4899"></circle>
                  <circle cx="90" cy="165" r="5" fill="#ec4899"></circle>
                  <circle cx="140" cy="165" r="5" fill="#ec4899"></circle>
                  <circle cx="190" cy="165" r="5" fill="#ec4899"></circle>
                  <circle cx="240" cy="165" r="5" fill="#ec4899"></circle>
                  <circle cx="40" cy="115" r="5" fill="#ec4899"></circle>
                  <circle cx="40" cy="65" r="5" fill="#ec4899"></circle>
                  <circle cx="40" cy="15" r="5" fill="#ec4899"></circle>
                  <circle cx="200" cy="135" r="5" fill="#ec4899"></circle>
                  <circle cx="160" cy="105" r="5" fill="#ec4899"></circle>
                  <circle cx="120" cy="75" r="5" fill="#ec4899"></circle>
                  <circle cx="80" cy="45" r="5" fill="#ec4899"></circle>
                  <text
                    x="140.0"
                    y="187.5"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"4 espaços"}
                  </text>
                  <text
                    x="26.0"
                    y="90.0"
                    textAnchor="end"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"3"}
                  </text>
                  <text
                    x="155.0"
                    y="70.0"
                    textAnchor="start"
                    fontSize="13"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"5"}
                  </text>
                  <text
                    x="330.0"
                    y="70.0"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"corda com"}
                  </text>
                  <text
                    x="330.0"
                    y="90.0"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"12 nós"}
                  </text>
                  <text
                    x="330.0"
                    y="116.0"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"3 + 4 + 5 = 12"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Corda de 12 nós: os lados 3, 4 e 5 espaços formam um canto exatamente reto. É o esquadro dos antigos construtores."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>{"Pedreiros ainda usam isso: marcam "}</MathText>
                <b>
                  <MathText>{"30 cm"}</MathText>
                </b>
                <MathText>{" em um lado, "}</MathText>
                <b>
                  <MathText>{"40 cm"}</MathText>
                </b>
                <MathText>
                  {" no outro e conferem se a distância entre as marcas é "}
                </MathText>
                <b>
                  <MathText>{"50 cm"}</MathText>
                </b>
                <MathText>{". Se for, o canto está no esquadro."}</MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>
                  {"4.4 Retângulo, acutângulo ou obtusângulo?"}
                </MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>{"Chame de \\(c\\) o "}</MathText>
                <b>
                  <MathText>{"maior"}</MathText>
                </b>
                <MathText>
                  {" lado e compare \\(c^2\\) com \\(a^2 + b^2\\):"}
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <table className="relative w-full border-collapse my-4 text-sm block overflow-x-auto">
                <thead>
                  <tr>
                    <th className="bg-indigo-100 text-indigo-900 text-left px-3 py-2 font-extrabold whitespace-nowrap">
                      <MathText>{"Comparação"}</MathText>
                    </th>
                    <th className="bg-indigo-100 text-indigo-900 text-left px-3 py-2 font-extrabold whitespace-nowrap">
                      <MathText>{"O triângulo é…"}</MathText>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"\\(a^2 + b^2 = c^2\\)"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <b>
                        <MathText>{"retângulo"}</MathText>
                      </b>
                      <MathText>{" (um ângulo de 90°)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"\\(a^2 + b^2 > c^2\\)"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <b>
                        <MathText>{"acutângulo"}</MathText>
                      </b>
                      <MathText>{" (todos os ângulos agudos)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"\\(a^2 + b^2 < c^2\\)"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <b>
                        <MathText>{"obtusângulo"}</MathText>
                      </b>
                      <MathText>{" (um ângulo obtuso)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n  "}</MathText>
                </tbody>
              </table>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 420 156"
                  style={{ width: "420px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Três triângulos: 4, 5 e 6 acutângulo; 6, 8 e 10 retângulo; 4, 5 e 7 obtusângulo"
                >
                  <polygon
                    points="15.0,92.0 93.0,92.0 63.8,49.0"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <text
                    x="54.0"
                    y="107.0"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"6"}
                  </text>
                  <text
                    x="31.4"
                    y="68.5"
                    textAnchor="end"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"5"}
                  </text>
                  <text
                    x="86.4"
                    y="68.5"
                    textAnchor="start"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"4"}
                  </text>
                  <text
                    x="70.0"
                    y="128.0"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"acutângulo"}
                  </text>
                  <text
                    x="70.0"
                    y="145.0"
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    fill="#475569"
                  >
                    {"16 + 25 = 41 > 36"}
                  </text>
                  <polygon
                    points="150.0,92.0 280.0,92.0 233.2,29.6"
                    fill="#dcfce7"
                    stroke="#16a34a"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polyline
                    points="226,35.000000000000014 231.4,42.20000000000001 238.6,36.80000000000001"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="215.0"
                    y="107.0"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"10"}
                  </text>
                  <text
                    x="183.6"
                    y="58.8"
                    textAnchor="end"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"8"}
                  </text>
                  <text
                    x="264.6"
                    y="58.8"
                    textAnchor="start"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"6"}
                  </text>
                  <text
                    x="205.0"
                    y="128.0"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#15803d"
                  >
                    {"retângulo"}
                  </text>
                  <text
                    x="205.0"
                    y="145.0"
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    fill="#475569"
                  >
                    {"36 + 64 = 100"}
                  </text>
                  <polygon
                    points="285.0,92.0 376.0,92.0 338.9,55.6"
                    fill="#fce7f3"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <text
                    x="330.5"
                    y="107.0"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"7"}
                  </text>
                  <text
                    x="303.9"
                    y="71.8"
                    textAnchor="end"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"5"}
                  </text>
                  <text
                    x="365.4"
                    y="71.8"
                    textAnchor="start"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"4"}
                  </text>
                  <text
                    x="340.0"
                    y="128.0"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"obtusângulo"}
                  </text>
                  <text
                    x="340.0"
                    y="145.0"
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    fill="#475569"
                  >
                    {"16 + 25 = 41 < 49"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Mesma escala nos três: quanto maior \\(c^2\\) em relação a \\(a^2+b^2\\), mais “aberto” fica o ângulo oposto a \\(c\\)."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>{"EXEMPLO 1 — lados 4, 5 e 6"}</MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Maior lado: 6. \\(4^2 + 5^2 = 16 + 25 = 41\\) e \\(6^2 = 36\\)."
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(41 > 36\\) ⇒ "}</MathText>
                    <b>
                      <MathText>{"acutângulo"}</MathText>
                    </b>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>{"EXEMPLO 2 — lados 4, 5 e 7"}</MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Existe? \\(4 + 5 = 9 > 7\\) ✓ (desigualdade triangular)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(4^2 + 5^2 = 41\\) e \\(7^2 = 49\\). \\(41 < 49\\) ⇒ "
                      }
                    </MathText>
                    <b>
                      <MathText>{"obtusângulo"}</MathText>
                    </b>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {"EXEMPLO 3 — lados 10, 6 e 8 (fora de ordem!)"}
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Maior lado: 10. \\(6^2 + 8^2 = 36 + 64 = 100 = 10^2\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"⇒ "}</MathText>
                    <b>
                      <MathText>{"retângulo"}</MathText>
                    </b>
                    <MathText>{" (e a hipotenusa é 10)"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50">
                <b>
                  <MathText>{"Erros comuns"}</MathText>
                </b>
                <MathText>{"\n    "}</MathText>
                <b>
                  <MathText>{"1)"}</MathText>
                </b>
                <MathText>
                  {
                    " Usar como \\(c\\) um lado que não é o maior. O maior lado é sempre o candidato a hipotenusa."
                  }
                </MathText>
                <br />
                <MathText>{"\n    "}</MathText>
                <b>
                  <MathText>{"2)"}</MathText>
                </b>
                <MathText>
                  {
                    " Pular a desigualdade triangular: 2, 3 e 6 nem formam triângulo (\\(2 + 3 < 6\\)), não adianta classificar."
                  }
                </MathText>
                <br />
                <MathText>{"\n    "}</MathText>
                <b>
                  <MathText>{"3)"}</MathText>
                </b>
                <MathText>
                  {
                    " Achar que \\(a^2 + b^2 \\ne c^2\\) significa “não é triângulo”. Significa apenas que "
                  }
                </MathText>
                <b>
                  <MathText>{"não é retângulo"}</MathText>
                </b>
                <MathText>{"."}</MathText>
                <br />
                <MathText>{"\n    "}</MathText>
                <b>
                  <MathText>{"4)"}</MathText>
                </b>
                <MathText>
                  {
                    " Verificar com os lados sem elevar ao quadrado (\\(3 + 4 = 7\\) e \\(5 \\ne 7\\) não prova nada).\n  "
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {
                    "Teste no Exp. 2 “Retângulo ou não?” e na calculadora “Classificar triângulo pelos lados”."
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <PitagorasQuickCheck index={8} />
              <MathText>{"\n  "}</MathText>
              <PitagorasQuickCheck index={9} />
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
                data-gotab="ferramentas"
              >
                <MathText>{"🧮 Abrir as calculadoras"}</MathText>
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
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-800">
                <MathText>
                  {"Diagonais e alturas: o triângulo retângulo escondido"}
                </MathText>
              </h2>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>{"Muitas figuras que "}</MathText>
                <b>
                  <MathText>{"não parecem"}</MathText>
                </b>
                <MathText>
                  {" ter um triângulo retângulo escondem um. Basta traçar uma "}
                </MathText>
                <b>
                  <MathText>{"diagonal"}</MathText>
                </b>
                <MathText>{" ou uma "}</MathText>
                <b>
                  <MathText>{"altura"}</MathText>
                </b>
                <MathText>
                  {
                    ", e o Teorema de Pitágoras entra em ação. Nesta lição você vai descobrir fórmulas prontas que valem a pena guardar, mas, principalmente, vai aprender o "
                  }
                </MathText>
                <b>
                  <MathText>{"caminho"}</MathText>
                </b>
                <MathText>{" para chegar a elas."}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
                <MathText>
                  {"\\[ a^2 + b^2 = c^2 \\qquad (c = \\text{hipotenusa}) \\]"}
                </MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"5.1 A diagonal do quadrado"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {
                    "Trace a diagonal de um quadrado de lado \\(\\ell\\). Ela corta o quadrado em dois triângulos retângulos. Os "
                  }
                </MathText>
                <b>
                  <MathText>{"catetos"}</MathText>
                </b>
                <MathText>
                  {" são dois lados do quadrado (valem \\(\\ell\\) cada) e a "}
                </MathText>
                <b>
                  <MathText>{"hipotenusa"}</MathText>
                </b>
                <MathText>{" é a diagonal \\(d\\)."}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 380 152"
                  style={{ width: "380px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Quadrado de lado ℓ com a diagonal d, que forma um triângulo retângulo com dois lados"
                >
                  <rect
                    x="40"
                    y="20"
                    width="100"
                    height="100"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="3"
                  ></rect>
                  <line
                    x1="40"
                    y1="120"
                    x2="140"
                    y2="20"
                    stroke="#ec4899"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="129,120 129,109 140,109"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="90"
                    y="142"
                    textAnchor="middle"
                    fontSize="16"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"ℓ"}
                  </text>
                  <text
                    x="24"
                    y="74"
                    textAnchor="middle"
                    fontSize="16"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"ℓ"}
                  </text>
                  <text
                    x="100"
                    y="64"
                    textAnchor="end"
                    fontSize="16"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"d"}
                  </text>
                  <text
                    x="270"
                    y="50"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"d² = ℓ² + ℓ²"}
                  </text>
                  <text
                    x="270"
                    y="76"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"d² = 2ℓ²"}
                  </text>
                  <text
                    x="270"
                    y="104"
                    textAnchor="middle"
                    fontSize="17"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"d = ℓ√2"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "A diagonal é a hipotenusa de um triângulo retângulo cujos catetos são dois lados do quadrado."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
                <MathText>
                  {
                    "\\[ d^2 = \\ell^2 + \\ell^2 = 2\\ell^2 \\;\\;\\Rightarrow\\;\\; d = \\sqrt{2\\ell^2} = \\ell\\sqrt{2} \\]"
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>{"Ou seja: "}</MathText>
                <b>
                  <MathText>
                    {
                      "a diagonal de qualquer quadrado é o lado vezes \\(\\sqrt2\\)"
                    }
                  </MathText>
                </b>
                <MathText>
                  {
                    ". É daí que vem o \\(\\sqrt2 \\approx 1{,}41\\) que você viu na lição de raízes: um quadrado de lado 1 tem diagonal \\(\\sqrt2\\)."
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 1 — Qual é a diagonal de um quadrado de lado 5 cm?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(d^2 = 5^2 + 5^2 = 25 + 25 = 50\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(d = \\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt2\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(d \\approx 5 \\cdot 1{,}41 = 7{,}05\\text{ cm}\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Conferência: a diagonal é maior que o lado (5) e menor que dois lados (10). ✓"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"5.2 A diagonal do retângulo"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {"No retângulo é a mesma ideia, só que os dois catetos são "}
                </MathText>
                <b>
                  <MathText>{"diferentes"}</MathText>
                </b>
                <MathText>{": a base \\(b\\) e a altura \\(h\\)."}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 302 120"
                  style={{ width: "302px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Retângulo com a diagonal formando um triângulo retângulo"
                >
                  <rect
                    x="62"
                    y="16"
                    width="192"
                    height="80"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="3"
                  ></rect>
                  <line
                    x1="62"
                    y1="96"
                    x2="254"
                    y2="16"
                    stroke="#ec4899"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="243,96 243,85 254,85"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="158"
                    y="118"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"12"}
                  </text>
                  <text
                    x="54"
                    y="61"
                    textAnchor="end"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"5"}
                  </text>
                  <text
                    x="152"
                    y="46"
                    textAnchor="end"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"d = ?"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {"Retângulo de 12 por 5: a diagonal é a hipotenusa."}
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
                <MathText>{"\\[ d = \\sqrt{b^2 + h^2} \\]"}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 2 — Um retângulo mede 12 m por 5 m. Quanto mede a diagonal?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(d^2 = 12^2 + 5^2 = 144 + 25 = 169\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(d = \\sqrt{169} = 13\\text{ m}\\)"}
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
                      "EXEMPLO 3 — Uma tela de TV tem 96 cm de largura e 72 cm de altura. Qual é a “polegada” dela? (1 polegada = 2,54 cm)"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"A medida da TV em polegadas é a "}</MathText>
                    <b>
                      <MathText>{"diagonal"}</MathText>
                    </b>
                    <MathText>{" da tela."}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(d^2 = 96^2 + 72^2 = 9216 + 5184 = 14400\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(d = \\sqrt{14400} = 120\\text{ cm}\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(120 \\div 2{,}54 \\approx 47{,}2\\) polegadas (uma TV “de 47 polegadas”)."
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 278 166"
                  style={{ width: "278px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Retângulo com a diagonal formando um triângulo retângulo"
                >
                  <rect
                    x="62"
                    y="16"
                    width="168"
                    height="126"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="3"
                  ></rect>
                  <line
                    x1="62"
                    y1="142"
                    x2="230"
                    y2="16"
                    stroke="#ec4899"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="219,142 219,131 230,131"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="146"
                    y="164"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"96 cm"}
                  </text>
                  <text
                    x="54"
                    y="84"
                    textAnchor="end"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"72 cm"}
                  </text>
                  <text
                    x="140"
                    y="69"
                    textAnchor="end"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"d = ?"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {"A medida da TV (em polegadas) é a diagonal da tela."}
                  </MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"5.3 A altura do triângulo equilátero"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {
                    "Um triângulo equilátero tem os três lados iguais a \\(\\ell\\). Trace a "
                  }
                </MathText>
                <b>
                  <MathText>{"altura"}</MathText>
                </b>
                <MathText>
                  {
                    ": ela cai no meio da base e forma dois triângulos retângulos. Cada um tem hipotenusa \\(\\ell\\), um cateto \\(\\dfrac{\\ell}{2}\\) e o outro cateto é a altura \\(h\\)."
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 420 208"
                  style={{ width: "420px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Triângulo equilátero de lado 6 com a altura dividindo a base ao meio"
                >
                  <polygon
                    points="40,160 200,160 120,21.400000000000006"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></polygon>
                  <line
                    x1="120"
                    y1="160"
                    x2="120"
                    y2="21.400000000000006"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="109,160 109,149 120,149"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="120"
                    y="198"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"ℓ = 6"}
                  </text>
                  <text
                    x="80"
                    y="178"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"3"}
                  </text>
                  <text
                    x="160"
                    y="178"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"3"}
                  </text>
                  <text
                    x="130"
                    y="100"
                    textAnchor="start"
                    fontSize="16"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"h"}
                  </text>
                  <text
                    x="70"
                    y="100"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"6"}
                  </text>
                  <text
                    x="300"
                    y="70"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"metade da base: ℓ/2 = 3"}
                  </text>
                  <text
                    x="300"
                    y="94"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"h² + 3² = 6²"}
                  </text>
                  <text
                    x="300"
                    y="118"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"h² = 36 − 9 = 27"}
                  </text>
                  <text
                    x="300"
                    y="142"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"h = 3√3 ≈ 5,19"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "A altura divide a base ao meio. Triângulo retângulo com hipotenusa 6, cateto 3 e cateto h."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
                <MathText>
                  {
                    "\\[ h^2 + \\left(\\dfrac{\\ell}{2}\\right)^2 = \\ell^2 \\;\\Rightarrow\\; h^2 = \\dfrac{3\\ell^2}{4} \\;\\Rightarrow\\; h = \\dfrac{\\ell\\sqrt3}{2} \\]"
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 4 — Altura e área de um triângulo equilátero de lado 6 cm (use √3 ≈ 1,73)"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(h^2 + 3^2 = 6^2 \\Rightarrow h^2 = 36 - 9 = 27\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(h = \\sqrt{27} = \\sqrt{9 \\cdot 3} = 3\\sqrt3 \\approx 3 \\cdot 1{,}73 = 5{,}19\\text{ cm}\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Área \\(= \\dfrac{b \\cdot h}{2} = \\dfrac{6 \\cdot 3\\sqrt3}{2} = 9\\sqrt3 \\approx 15{,}57\\text{ cm}^2\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50">
                <b>
                  <MathText>{"Fórmula da área (opcional)"}</MathText>
                </b>
                <MathText>
                  {
                    "Repetindo a conta com \\(\\ell\\) qualquer: \\(A = \\dfrac{\\ell \\cdot \\ell\\sqrt3/2}{2} = \\dfrac{\\ell^2\\sqrt3}{4}\\). Com \\(\\ell = 6\\): \\(\\dfrac{36\\sqrt3}{4} = 9\\sqrt3\\). ✓"
                  }
                </MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"5.4 A altura do triângulo isósceles"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {"No isósceles, a altura relativa à base também cai no "}
                </MathText>
                <b>
                  <MathText>{"meio"}</MathText>
                </b>
                <MathText>
                  {
                    " da base. Metade da base é um cateto, o lado igual é a hipotenusa."
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 190 178"
                  style={{ width: "190px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Triângulo isósceles com a altura traçada até a base"
                >
                  <polygon
                    points="30,146 140,146 85,14"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></polygon>
                  <line
                    x1="85"
                    y1="14"
                    x2="85"
                    y2="146"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="74,146 74,135 85,135"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="85"
                    y="168"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"base = 10"}
                  </text>
                  <text
                    x="43.5"
                    y="76"
                    textAnchor="end"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"13"}
                  </text>
                  <text
                    x="136.5"
                    y="76"
                    textAnchor="start"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"13"}
                  </text>
                  <text
                    x="91"
                    y="86"
                    textAnchor="start"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"h"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Triângulo isósceles de base 10 e lados 13: a altura forma um triângulo retângulo com metade da base (5)."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 5 — Um triângulo isósceles tem base 10 cm e lados iguais de 13 cm. Qual é a altura?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Metade da base: \\(10 \\div 2 = 5\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(h^2 + 5^2 = 13^2\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(h^2 = 169 - 25 = 144\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(h = 12\\text{ cm}\\)"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50">
                <b>
                  <MathText>{"Cuidado: aqui o 13 é a hipotenusa"}</MathText>
                </b>
                <MathText>
                  {"Como a hipotenusa (13) já é conhecida e o que falta é um "}
                </MathText>
                <b>
                  <MathText>{"cateto"}</MathText>
                </b>
                <MathText>{", o cálculo é uma "}</MathText>
                <b>
                  <MathText>{"subtração"}</MathText>
                </b>
                <MathText>{": \\(169 - 25\\), e não \\(169 + 25\\)."}</MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"5.5 A altura do trapézio"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>{"No "}</MathText>
                <b>
                  <MathText>{"trapézio isósceles"}</MathText>
                </b>
                <MathText>
                  {
                    ", trace duas alturas. Elas cortam dois triângulos retângulos iguais nas pontas. O cateto horizontal de cada um é a "
                  }
                </MathText>
                <b>
                  <MathText>{"sobra"}</MathText>
                </b>
                <MathText>{": \\(\\dfrac{B - b}{2}\\)."}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 340 142"
                  style={{ width: "340px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Trapézio isósceles com duas alturas formando dois triângulos retângulos"
                >
                  <polygon
                    points="30,110 310,110 250,30 90,30"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></polygon>
                  <line
                    x1="90"
                    y1="30"
                    x2="90"
                    y2="110"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="101,110 101,99 90,99"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <line
                    x1="250"
                    y1="30"
                    x2="250"
                    y2="110"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="239,110 239,99 250,99"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="170"
                    y="132"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"B = 14"}
                  </text>
                  <text
                    x="170"
                    y="20"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"b = 8"}
                  </text>
                  <text
                    x="60"
                    y="126"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"3"}
                  </text>
                  <text
                    x="280"
                    y="126"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"3"}
                  </text>
                  <text
                    x="48"
                    y="64"
                    textAnchor="end"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"5"}
                  </text>
                  <text
                    x="290"
                    y="64"
                    textAnchor="start"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"5"}
                  </text>
                  <text
                    x="98"
                    y="74"
                    textAnchor="start"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"h"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Trapézio isósceles: B = 14, b = 8, lados oblíquos 5. Sobra de cada lado: (14 − 8) ÷ 2 = 3."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 6 — Trapézio isósceles com bases 14 m e 8 m e lados oblíquos de 5 m. Ache a altura e a área."
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Sobra de cada lado: \\((14 - 8) \\div 2 = 3\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(h^2 + 3^2 = 5^2 \\Rightarrow h^2 = 25 - 9 = 16 \\Rightarrow h = 4\\text{ m}\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Área \\(= \\dfrac{(B + b) \\cdot h}{2} = \\dfrac{(14 + 8) \\cdot 4}{2} = \\dfrac{88}{2} = 44\\text{ m}^2\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>{"No "}</MathText>
                <b>
                  <MathText>{"trapézio retângulo"}</MathText>
                </b>
                <MathText>
                  {
                    " há só um triângulo retângulo escondido: o cateto horizontal é \\(B - b\\) (a diferença das bases inteira)."
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 330 142"
                  style={{ width: "330px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Trapézio retângulo com a altura formando um triângulo retângulo de hipotenusa 13"
                >
                  <polygon
                    points="30,110 300,110 190,30 30,30"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></polygon>
                  <line
                    x1="190"
                    y1="30"
                    x2="190"
                    y2="110"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="179,110 179,99 190,99"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <polyline
                    points="41,110 41,99 30,99"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <polyline
                    points="41,30 41,41 30,41"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="165"
                    y="132"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"B = 12"}
                  </text>
                  <text
                    x="110"
                    y="20"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"b = 7"}
                  </text>
                  <text
                    x="245"
                    y="132"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"5"}
                  </text>
                  <text
                    x="18"
                    y="74"
                    textAnchor="end"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"h"}
                  </text>
                  <text
                    x="260"
                    y="64"
                    textAnchor="start"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"13"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Trapézio retângulo: B = 12, b = 7, lado oblíquo 13. Cateto horizontal: 12 − 7 = 5."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 7 — Trapézio retângulo com bases 12 e 7 e lado oblíquo 13. Qual é a altura?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"Cateto horizontal: \\(12 - 7 = 5\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(h^2 + 5^2 = 13^2 \\Rightarrow h^2 = 169 - 25 = 144 \\Rightarrow h = 12\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Área \\(= \\dfrac{(12 + 7) \\cdot 12}{2} = 114\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"5.6 No espaço: diagonal da caixa"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>{"Em uma caixa (paralelepípedo) a "}</MathText>
                <b>
                  <MathText>{"diagonal do espaço"}</MathText>
                </b>
                <MathText>
                  {
                    " liga um canto ao canto oposto, atravessando o interior. Usa-se o Pitágoras "
                  }
                </MathText>
                <b>
                  <MathText>{"duas vezes"}</MathText>
                </b>
                <MathText>
                  {": primeiro na base, depois no triângulo vertical."}
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 440 226"
                  style={{ width: "440px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Caixa de 4 por 3 por 12 com a diagonal da base e a diagonal do espaço"
                >
                  <polygon
                    points="40,200 160,200 160,50 40,50"
                    fill="#eef2ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polygon
                    points="160,200 205,170 205,20 160,50"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <polygon
                    points="40,50 160,50 205,20 85,20"
                    fill="#f5f7ff"
                    stroke="#4f46e5"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <line
                    x1="40"
                    y1="200"
                    x2="205"
                    y2="170"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="40"
                    y1="200"
                    x2="205"
                    y2="20"
                    stroke="#ec4899"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="205"
                    y1="170"
                    x2="205"
                    y2="20"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <text
                    x="100"
                    y="218"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"4"}
                  </text>
                  <text
                    x="194"
                    y="198"
                    textAnchor="start"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"3"}
                  </text>
                  <text
                    x="26"
                    y="130"
                    textAnchor="end"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"12"}
                  </text>
                  <text
                    x="120"
                    y="134"
                    textAnchor="start"
                    fontSize="16"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"D"}
                  </text>
                  <text
                    x="60"
                    y="168"
                    textAnchor="end"
                    fontSize="15"
                    fontWeight="700"
                    fill="#f59e0b"
                  >
                    {"5"}
                  </text>
                  <text
                    x="310"
                    y="70"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"1º passo (base):"}
                  </text>
                  <text
                    x="310"
                    y="92"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"5² = 3² + 4²"}
                  </text>
                  <text
                    x="310"
                    y="124"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"2º passo (espaço):"}
                  </text>
                  <text
                    x="310"
                    y="146"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"D² = 5² + 12²"}
                  </text>
                  <text
                    x="310"
                    y="172"
                    textAnchor="middle"
                    fontSize="17"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"D = 13"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Caixa 4 × 3 × 12: primeiro a diagonal da base (5), depois a diagonal do espaço (13)."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
                <MathText>
                  {
                    "\\[ D = \\sqrt{a^2 + b^2 + c^2} \\qquad\\text{(cubo: } D = \\ell\\sqrt3\\text{)} \\]"
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 8 — Qual o maior bastão que cabe em uma caixa de 3 m × 4 m × 12 m?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Diagonal da base: \\(\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Diagonal do espaço: \\(D^2 = 5^2 + 12^2 = 25 + 144 = 169\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(D = 13\\text{ m}\\)"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50">
                <b>
                  <MathText>{"Erros comuns desta lição"}</MathText>
                </b>
                <MathText>{"\n    "}</MathText>
                <ul className="mt-3 pl-6 list-disc leading-8 text-slate-600">
                  <li className="mt-1">
                    <MathText>
                      {"Trocar as fórmulas: \\(d = \\ell\\sqrt2\\) é do "}
                    </MathText>
                    <b>
                      <MathText>{"quadrado"}</MathText>
                    </b>
                    <MathText>
                      {"; \\(h = \\dfrac{\\ell\\sqrt3}{2}\\) é do "}
                    </MathText>
                    <b>
                      <MathText>{"triângulo equilátero"}</MathText>
                    </b>
                    <MathText>{"."}</MathText>
                  </li>
                  <MathText>{"\n    "}</MathText>
                  <li className="mt-1">
                    <MathText>
                      {
                        "Esquecer de dividir a base por 2 antes de usar Pitágoras no isósceles e no equilátero."
                      }
                    </MathText>
                  </li>
                  <MathText>{"\n    "}</MathText>
                  <li className="mt-1">
                    <MathText>
                      {"Usar o lado oblíquo do trapézio como altura."}
                    </MathText>
                  </li>
                  <MathText>{"\n    "}</MathText>
                  <li className="mt-1">
                    <MathText>
                      {
                        "Somar quando deveria subtrair (cateto desconhecido: \\(c^2 - a^2\\))."
                      }
                    </MathText>
                  </li>
                </ul>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"5.7 Quadro-resumo"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <table className="relative w-full border-collapse my-4 text-sm block overflow-x-auto">
                <thead>
                  <tr>
                    <th className="bg-indigo-100 text-indigo-900 text-left px-3 py-2 font-extrabold whitespace-nowrap">
                      <MathText>{"Figura"}</MathText>
                    </th>
                    <th className="bg-indigo-100 text-indigo-900 text-left px-3 py-2 font-extrabold whitespace-nowrap">
                      <MathText>{"O que procurar"}</MathText>
                    </th>
                    <th className="bg-indigo-100 text-indigo-900 text-left px-3 py-2 font-extrabold whitespace-nowrap">
                      <MathText>{"Fórmula"}</MathText>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Quadrado"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"diagonal"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"\\(d = \\ell\\sqrt2\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Retângulo"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"diagonal"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"\\(d = \\sqrt{b^2 + h^2}\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Triângulo equilátero"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"altura"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>
                        {"\\(h = \\dfrac{\\ell\\sqrt3}{2}\\)"}
                      </MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Triângulo isósceles"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"altura"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>
                        {"\\(h^2 + (\\text{base}/2)^2 = \\text{lado}^2\\)"}
                      </MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Trapézio isósceles"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"altura"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>
                        {
                          "sobra \\(= \\dfrac{B-b}{2}\\); \\(h^2 + \\text{sobra}^2 = \\text{lado}^2\\)"
                        }
                      </MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Caixa / cubo"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"diagonal do espaço"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>
                        {"\\(\\sqrt{a^2+b^2+c^2}\\) / \\(\\ell\\sqrt3\\)"}
                      </MathText>
                    </td>
                  </tr>
                  <MathText>{"\n  "}</MathText>
                </tbody>
              </table>
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-gotab="ferramentas"
              >
                <MathText>
                  {"🧮 Abrir a calculadora “Diagonais e alturas”"}
                </MathText>
              </button>
              <MathText>{"\n\n  "}</MathText>
              <PitagorasQuickCheck index={10} />
              <MathText>{"\n  "}</MathText>
              <PitagorasQuickCheck index={11} />
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-goto="5"
              >
                <MathText>{"✏️ Fazer os exercícios do nível 5"}</MathText>
              </button>
              <MathText>{"\n"}</MathText>
            </article>
            <MathText>{"\n\n"}</MathText>
            <MathText>{"\n"}</MathText>
            <article
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
              id="l6"
            >
              <MathText>{"\n  "}</MathText>
              <div className="text-xs font-extrabold tracking-widest uppercase text-indigo-600">
                <MathText>{"Lição 6"}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-800">
                <MathText>
                  {"Distância entre dois pontos no plano cartesiano"}
                </MathText>
              </h2>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {
                    "No plano cartesiano, dois pontos nem sempre estão na mesma linha horizontal ou vertical. Quando estão “na diagonal”, como medir a distância entre eles? Com o triângulo retângulo escondido que você já viu na lição de plano cartesiano da geometria básica e com o Teorema de Pitágoras."
                  }
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"6.1 O triângulo escondido"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {
                    "Para ir de \\(A(-2, 1)\\) até \\(B(4, 9)\\) você pode andar "
                  }
                </MathText>
                <b>
                  <MathText>{"6 para a direita"}</MathText>
                </b>
                <MathText>
                  {" (de \\(x=-2\\) até \\(x=4\\)) e depois "}
                </MathText>
                <b>
                  <MathText>{"8 para cima"}</MathText>
                </b>
                <MathText>
                  {
                    " (de \\(y=1\\) até \\(y=9\\)). Esses dois passos formam os "
                  }
                </MathText>
                <b>
                  <MathText>{"catetos"}</MathText>
                </b>
                <MathText>
                  {
                    " de um triângulo retângulo; o caminho direto de A até B é a "
                  }
                </MathText>
                <b>
                  <MathText>{"hipotenusa"}</MathText>
                </b>
                <MathText>{"."}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 268 300"
                  style={{ width: "268px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Pontos A(-2,1) e B(4,9) com o triângulo retângulo escondido de catetos 6 e 8"
                >
                  <line
                    x1="30"
                    y1="16"
                    x2="30"
                    y2="276"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="56"
                    y1="16"
                    x2="56"
                    y2="276"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="82"
                    y1="16"
                    x2="82"
                    y2="276"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="108"
                    y1="16"
                    x2="108"
                    y2="276"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="134"
                    y1="16"
                    x2="134"
                    y2="276"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="160"
                    y1="16"
                    x2="160"
                    y2="276"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="186"
                    y1="16"
                    x2="186"
                    y2="276"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="212"
                    y1="16"
                    x2="212"
                    y2="276"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="238"
                    y1="16"
                    x2="238"
                    y2="276"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="276"
                    x2="238"
                    y2="276"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="250"
                    x2="238"
                    y2="250"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="224"
                    x2="238"
                    y2="224"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="198"
                    x2="238"
                    y2="198"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="172"
                    x2="238"
                    y2="172"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="146"
                    x2="238"
                    y2="146"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="120"
                    x2="238"
                    y2="120"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="94"
                    x2="238"
                    y2="94"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="68"
                    x2="238"
                    y2="68"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="42"
                    x2="238"
                    y2="42"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="16"
                    x2="238"
                    y2="16"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="24"
                    y1="276"
                    x2="246"
                    y2="276"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="108"
                    y1="8"
                    x2="108"
                    y2="282"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <text
                    x="30"
                    y="290"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-3"}
                  </text>
                  <text
                    x="56"
                    y="290"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-2"}
                  </text>
                  <text
                    x="82"
                    y="290"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-1"}
                  </text>
                  <text
                    x="134"
                    y="290"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"1"}
                  </text>
                  <text
                    x="160"
                    y="290"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"2"}
                  </text>
                  <text
                    x="186"
                    y="290"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"3"}
                  </text>
                  <text
                    x="212"
                    y="290"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"4"}
                  </text>
                  <text
                    x="238"
                    y="290"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"5"}
                  </text>
                  <text
                    x="102"
                    y="254"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"1"}
                  </text>
                  <text
                    x="102"
                    y="228"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"2"}
                  </text>
                  <text
                    x="102"
                    y="202"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"3"}
                  </text>
                  <text
                    x="102"
                    y="176"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"4"}
                  </text>
                  <text
                    x="102"
                    y="150"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"5"}
                  </text>
                  <text
                    x="102"
                    y="124"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"6"}
                  </text>
                  <text
                    x="102"
                    y="98"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"7"}
                  </text>
                  <text
                    x="102"
                    y="72"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"8"}
                  </text>
                  <text
                    x="102"
                    y="46"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"9"}
                  </text>
                  <text
                    x="102"
                    y="20"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"10"}
                  </text>
                  <line
                    x1="56"
                    y1="250"
                    x2="212"
                    y2="250"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="212"
                    y1="250"
                    x2="212"
                    y2="42"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="56"
                    y1="250"
                    x2="212"
                    y2="42"
                    stroke="#ec4899"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="202,250 202,240 212,240"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <circle cx="56" cy="250" r="5" fill="#4f46e5"></circle>
                  <circle cx="212" cy="42" r="5" fill="#4f46e5"></circle>
                  <text
                    x="48"
                    y="266"
                    textAnchor="end"
                    fontSize="13"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"A(−2, 1)"}
                  </text>
                  <text
                    x="222"
                    y="46"
                    textAnchor="start"
                    fontSize="13"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"B(4, 9)"}
                  </text>
                  <text
                    x="134"
                    y="266"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#f59e0b"
                  >
                    {"6"}
                  </text>
                  <text
                    x="224"
                    y="150"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#f59e0b"
                  >
                    {"8"}
                  </text>
                  <text
                    x="141.8"
                    y="156.4"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"d = ?"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Os passos horizontal (6) e vertical (8) formam os catetos; a distância AB é a hipotenusa."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {"EXEMPLO 1 — Distância entre A(−2, 1) e B(4, 9)"}
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Cateto horizontal: \\(4 - (-2) = 6\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"Cateto vertical: \\(9 - 1 = 8\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(d^2 = 6^2 + 8^2 = 36 + 64 = 100\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(d = \\sqrt{100} = 10\\)"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"6.2 A fórmula da distância"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {
                    "Fazendo a mesma conta com \\(A(x_1, y_1)\\) e \\(B(x_2, y_2)\\): o cateto horizontal é a diferença dos \\(x\\), o vertical é a diferença dos \\(y\\)."
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
                <MathText>
                  {"\\[ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\]"}
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-amber-500 bg-amber-50">
                <b>
                  <MathText>{"Por que o sinal não importa?"}</MathText>
                </b>
                <MathText>
                  {
                    "Se você subtrair na ordem trocada, dá o número oposto: \\(x_1 - x_2 = -6\\) em vez de \\(6\\). Mas o "
                  }
                </MathText>
                <b>
                  <MathText>{"quadrado"}</MathText>
                </b>
                <MathText>
                  {
                    " apaga o sinal: \\((-6)^2 = 36 = 6^2\\). Por isso tanto faz qual ponto é “1” e qual é “2”, "
                  }
                </MathText>
                <b>
                  <MathText>
                    {"desde que você use a mesma ordem para x e para y"}
                  </MathText>
                </b>
                <MathText>{" dentro de cada diferença."}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50">
                <b>
                  <MathText>{"Parênteses com número negativo!"}</MathText>
                </b>
                <MathText>
                  {
                    "\\(x_2 - x_1\\) com \\(x_1 = -2\\) e \\(x_2 = 4\\) é \\(4 - (-2) = 6\\) (e não \\(4 - 2\\)). Escreva o parêntese sempre. E quadrado de negativo: \\((-3)^2 = 9\\), não \\(-9\\)."
                  }
                </MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"6.3 Mais exemplos"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {"EXEMPLO 2 — Distância da origem O(0, 0) até P(3, 4)"}
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(d = \\sqrt{(3 - 0)^2 + (4 - 0)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\)"
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
                    {"EXEMPLO 3 — Distância entre A(1, 2) e B(4, 4)"}
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(d = \\sqrt{(4 - 1)^2 + (4 - 2)^2} = \\sqrt{9 + 4} = \\sqrt{13}\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(13\\) não é quadrado perfeito: \\(3^2 = 9 < 13 < 16 = 4^2\\), então \\(d \\approx 3{,}61\\)."
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 276 220"
                  style={{ width: "276px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Pontos A(1,2) e B(4,4) com catetos 3 e 2"
                >
                  <line
                    x1="30"
                    y1="16"
                    x2="30"
                    y2="196"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="66"
                    y1="16"
                    x2="66"
                    y2="196"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="102"
                    y1="16"
                    x2="102"
                    y2="196"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="138"
                    y1="16"
                    x2="138"
                    y2="196"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="174"
                    y1="16"
                    x2="174"
                    y2="196"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="210"
                    y1="16"
                    x2="210"
                    y2="196"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="246"
                    y1="16"
                    x2="246"
                    y2="196"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="196"
                    x2="246"
                    y2="196"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="160"
                    x2="246"
                    y2="160"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="124"
                    x2="246"
                    y2="124"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="88"
                    x2="246"
                    y2="88"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="52"
                    x2="246"
                    y2="52"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="16"
                    x2="246"
                    y2="16"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="24"
                    y1="196"
                    x2="254"
                    y2="196"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="66"
                    y1="8"
                    x2="66"
                    y2="202"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <text
                    x="30"
                    y="210"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-1"}
                  </text>
                  <text
                    x="102"
                    y="210"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"1"}
                  </text>
                  <text
                    x="138"
                    y="210"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"2"}
                  </text>
                  <text
                    x="174"
                    y="210"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"3"}
                  </text>
                  <text
                    x="210"
                    y="210"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"4"}
                  </text>
                  <text
                    x="246"
                    y="210"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"5"}
                  </text>
                  <text
                    x="60"
                    y="164"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"1"}
                  </text>
                  <text
                    x="60"
                    y="128"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"2"}
                  </text>
                  <text
                    x="60"
                    y="92"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"3"}
                  </text>
                  <text
                    x="60"
                    y="56"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"4"}
                  </text>
                  <text
                    x="60"
                    y="20"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"5"}
                  </text>
                  <line
                    x1="102"
                    y1="124"
                    x2="210"
                    y2="124"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="210"
                    y1="124"
                    x2="210"
                    y2="52"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="102"
                    y1="124"
                    x2="210"
                    y2="52"
                    stroke="#ec4899"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="200,124 200,114 210,114"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <circle cx="102" cy="124" r="5" fill="#4f46e5"></circle>
                  <circle cx="210" cy="52" r="5" fill="#4f46e5"></circle>
                  <text
                    x="96"
                    y="142"
                    textAnchor="end"
                    fontSize="13"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"A(1, 2)"}
                  </text>
                  <text
                    x="220"
                    y="46"
                    textAnchor="start"
                    fontSize="13"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"B(4, 4)"}
                  </text>
                  <text
                    x="156"
                    y="142"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#f59e0b"
                  >
                    {"3"}
                  </text>
                  <text
                    x="222"
                    y="92"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#f59e0b"
                  >
                    {"2"}
                  </text>
                  <text
                    x="141.2"
                    y="74.8"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"d = ?"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>{"Catetos 3 e 2: distância √13 ≈ 3,61."}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {"EXEMPLO 4 — Distância entre A(−3, −1) e B(2, −6)"}
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"Horizontal: \\(2 - (-3) = 5\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Vertical: \\(-6 - (-1) = -6 + 1 = -5\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(d = \\sqrt{5^2 + (-5)^2} = \\sqrt{25 + 25} = \\sqrt{50} = 5\\sqrt2\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(d \\approx 5 \\cdot 1{,}41 = 7{,}05\\) (calculadora: 7,07)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 300 250"
                  style={{ width: "300px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Pontos A(-3,-1) e B(2,-6) com catetos 5 e 5"
                >
                  <line
                    x1="30"
                    y1="16"
                    x2="30"
                    y2="226"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="60"
                    y1="16"
                    x2="60"
                    y2="226"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="90"
                    y1="16"
                    x2="90"
                    y2="226"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="120"
                    y1="16"
                    x2="120"
                    y2="226"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="150"
                    y1="16"
                    x2="150"
                    y2="226"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="180"
                    y1="16"
                    x2="180"
                    y2="226"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="210"
                    y1="16"
                    x2="210"
                    y2="226"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="240"
                    y1="16"
                    x2="240"
                    y2="226"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="270"
                    y1="16"
                    x2="270"
                    y2="226"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="226"
                    x2="270"
                    y2="226"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="196"
                    x2="270"
                    y2="196"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="166"
                    x2="270"
                    y2="166"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="136"
                    x2="270"
                    y2="136"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="106"
                    x2="270"
                    y2="106"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="76"
                    x2="270"
                    y2="76"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="46"
                    x2="270"
                    y2="46"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="16"
                    x2="270"
                    y2="16"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="24"
                    y1="16"
                    x2="278"
                    y2="16"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="180"
                    y1="8"
                    x2="180"
                    y2="232"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <text
                    x="30"
                    y="30"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-5"}
                  </text>
                  <text
                    x="60"
                    y="30"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-4"}
                  </text>
                  <text
                    x="90"
                    y="30"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-3"}
                  </text>
                  <text
                    x="120"
                    y="30"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-2"}
                  </text>
                  <text
                    x="150"
                    y="30"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-1"}
                  </text>
                  <text
                    x="210"
                    y="30"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"1"}
                  </text>
                  <text
                    x="240"
                    y="30"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"2"}
                  </text>
                  <text
                    x="270"
                    y="30"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"3"}
                  </text>
                  <text
                    x="174"
                    y="230"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-7"}
                  </text>
                  <text
                    x="174"
                    y="200"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-6"}
                  </text>
                  <text
                    x="174"
                    y="170"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-5"}
                  </text>
                  <text
                    x="174"
                    y="140"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-4"}
                  </text>
                  <text
                    x="174"
                    y="110"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-3"}
                  </text>
                  <text
                    x="174"
                    y="80"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-2"}
                  </text>
                  <text
                    x="174"
                    y="50"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-1"}
                  </text>
                  <line
                    x1="90"
                    y1="46"
                    x2="240"
                    y2="46"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="240"
                    y1="46"
                    x2="240"
                    y2="196"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="90"
                    y1="46"
                    x2="240"
                    y2="196"
                    stroke="#ec4899"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="230,46 230,56 240,56"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <circle cx="90" cy="46" r="5" fill="#4f46e5"></circle>
                  <circle cx="240" cy="196" r="5" fill="#4f46e5"></circle>
                  <text
                    x="82"
                    y="64"
                    textAnchor="end"
                    fontSize="13"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"A(−3, −1)"}
                  </text>
                  <text
                    x="248"
                    y="212"
                    textAnchor="start"
                    fontSize="13"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"B(2, −6)"}
                  </text>
                  <text
                    x="165"
                    y="38"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#f59e0b"
                  >
                    {"5"}
                  </text>
                  <text
                    x="252"
                    y="125"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#f59e0b"
                  >
                    {"5"}
                  </text>
                  <text
                    x="120"
                    y="145"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"d = ?"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {"Catetos 5 e 5: uma “diagonal de quadrado” de lado 5."}
                  </MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>
                  {"6.4 Perímetro e tipo de triângulo no plano"}
                </MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>{"Com a fórmula você mede "}</MathText>
                <b>
                  <MathText>{"cada lado"}</MathText>
                </b>
                <MathText>
                  {
                    " de um triângulo dado por três pontos. Somando, tem o perímetro. Comparando os quadrados dos lados, descobre se é "
                  }
                </MathText>
                <b>
                  <MathText>{"retângulo"}</MathText>
                </b>
                <MathText>
                  {
                    ": o quadrado do maior lado precisa ser igual à soma dos outros dois (recíproca do teorema)."
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 298 278"
                  style={{ width: "298px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Triângulo com vértices A(0,0), B(4,1) e C(1,-4)"
                >
                  <line
                    x1="30"
                    y1="16"
                    x2="30"
                    y2="254"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="64"
                    y1="16"
                    x2="64"
                    y2="254"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="98"
                    y1="16"
                    x2="98"
                    y2="254"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="132"
                    y1="16"
                    x2="132"
                    y2="254"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="166"
                    y1="16"
                    x2="166"
                    y2="254"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="200"
                    y1="16"
                    x2="200"
                    y2="254"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="234"
                    y1="16"
                    x2="234"
                    y2="254"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="268"
                    y1="16"
                    x2="268"
                    y2="254"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="254"
                    x2="268"
                    y2="254"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="220"
                    x2="268"
                    y2="220"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="186"
                    x2="268"
                    y2="186"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="152"
                    x2="268"
                    y2="152"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="118"
                    x2="268"
                    y2="118"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="84"
                    x2="268"
                    y2="84"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="50"
                    x2="268"
                    y2="50"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="30"
                    y1="16"
                    x2="268"
                    y2="16"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="24"
                    y1="84"
                    x2="276"
                    y2="84"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="64"
                    y1="8"
                    x2="64"
                    y2="260"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <text
                    x="30"
                    y="98"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-1"}
                  </text>
                  <text
                    x="98"
                    y="98"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"1"}
                  </text>
                  <text
                    x="132"
                    y="98"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"2"}
                  </text>
                  <text
                    x="166"
                    y="98"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"3"}
                  </text>
                  <text
                    x="200"
                    y="98"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"4"}
                  </text>
                  <text
                    x="234"
                    y="98"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"5"}
                  </text>
                  <text
                    x="268"
                    y="98"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"6"}
                  </text>
                  <text
                    x="58"
                    y="258"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-5"}
                  </text>
                  <text
                    x="58"
                    y="224"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-4"}
                  </text>
                  <text
                    x="58"
                    y="190"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-3"}
                  </text>
                  <text
                    x="58"
                    y="156"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-2"}
                  </text>
                  <text
                    x="58"
                    y="122"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"-1"}
                  </text>
                  <text
                    x="58"
                    y="54"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"1"}
                  </text>
                  <text
                    x="58"
                    y="20"
                    textAnchor="end"
                    fontSize="10"
                    fontWeight="700"
                    fill="#64748b"
                  >
                    {"2"}
                  </text>
                  <polygon
                    points="64,84 200,50 98,220"
                    fill="rgba(224,231,255,.6)"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></polygon>
                  <circle cx="64" cy="84" r="5" fill="#4f46e5"></circle>
                  <circle cx="200" cy="50" r="5" fill="#4f46e5"></circle>
                  <circle cx="98" cy="220" r="5" fill="#4f46e5"></circle>
                  <text
                    x="54"
                    y="76"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"A"}
                  </text>
                  <text
                    x="208"
                    y="46"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"B"}
                  </text>
                  <text
                    x="104"
                    y="236"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"C"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>{"Triângulo A(0,0), B(4,1), C(1,−4)."}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 5 — O triângulo A(0, 0), B(4, 1), C(1, −4) é retângulo? Qual o perímetro?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(AB^2 = 4^2 + 1^2 = 17\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(AC^2 = 1^2 + (-4)^2 = 17\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(BC^2 = (1 - 4)^2 + (-4 - 1)^2 = 9 + 25 = 34\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(17 + 17 = 34 = BC^2\\) ⇒ é "}</MathText>
                    <b>
                      <MathText>{"retângulo em A"}</MathText>
                    </b>
                    <MathText>{" (e isósceles)."}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Perímetro \\(= \\sqrt{17} + \\sqrt{17} + \\sqrt{34} \\approx 4{,}12 + 4{,}12 + 5{,}83 = 14{,}07\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50">
                <b>
                  <MathText>{"Ponto médio, em uma frase"}</MathText>
                </b>
                <MathText>
                  {
                    "O ponto médio de \\(A(x_1,y_1)\\) e \\(B(x_2,y_2)\\) é \\(\\left(\\dfrac{x_1+x_2}{2},\\ \\dfrac{y_1+y_2}{2}\\right)\\): a média das coordenadas. Ele não precisa de Pitágoras."
                  }
                </MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50">
                <b>
                  <MathText>{"Erros comuns"}</MathText>
                </b>
                <MathText>{"\n    "}</MathText>
                <ul className="mt-3 pl-6 list-disc leading-8 text-slate-600">
                  <li className="mt-1">
                    <MathText>
                      {
                        "Calcular \\(4 - -2\\) como \\(4 - 2\\) (esquecer o parêntese)."
                      }
                    </MathText>
                  </li>
                  <MathText>{"\n    "}</MathText>
                  <li className="mt-1">
                    <MathText>
                      {"Somar \\(3 + 2\\) em vez de somar os "}
                    </MathText>
                    <b>
                      <MathText>{"quadrados"}</MathText>
                    </b>
                    <MathText>{" \\(3^2 + 2^2\\)."}</MathText>
                  </li>
                  <MathText>{"\n    "}</MathText>
                  <li className="mt-1">
                    <MathText>
                      {
                        "Esquecer de tirar a raiz no final (\\(d^2 = 13\\), mas \\(d = \\sqrt{13}\\))."
                      }
                    </MathText>
                  </li>
                  <MathText>{"\n    "}</MathText>
                  <li className="mt-1">
                    <MathText>
                      {
                        "Usar \\((x_2 - x_1) + (y_2 - y_1)\\) como se fosse a distância: isso é o caminho “em L”, não a linha reta."
                      }
                    </MathText>
                  </li>
                </ul>
              </div>
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-gotab="laboratorio"
              >
                <MathText>
                  {"🔬 Abrir o laboratório (Exp. 4 “Distância no plano”)"}
                </MathText>
              </button>
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-gotab="ferramentas"
              >
                <MathText>
                  {"🧮 Abrir a calculadora “Distância entre dois pontos”"}
                </MathText>
              </button>
              <MathText>{"\n\n  "}</MathText>
              <PitagorasQuickCheck index={12} />
              <MathText>{"\n  "}</MathText>
              <PitagorasQuickCheck index={13} />
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-goto="6"
              >
                <MathText>{"✏️ Fazer os exercícios do nível 6"}</MathText>
              </button>
              <MathText>{"\n"}</MathText>
            </article>
            <MathText>{"\n\n"}</MathText>
            <MathText>{"\n"}</MathText>
            <article
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
              id="l7"
            >
              <MathText>{"\n  "}</MathText>
              <div className="text-xs font-extrabold tracking-widest uppercase text-indigo-600">
                <MathText>{"Lição 7"}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-800">
                <MathText>{"Aplicações do teorema no dia a dia"}</MathText>
              </h2>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {
                    "Pedreiros, marceneiros, engenheiros, pilotos e programadores de jogos usam o Teorema de Pitágoras o tempo todo. A dificuldade quase nunca é a conta; é "
                  }
                </MathText>
                <b>
                  <MathText>{"enxergar o triângulo retângulo"}</MathText>
                </b>
                <MathText>{" na situação."}</MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"7.1 O método em 6 passos"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <ol className="mt-3 pl-6 list-decimal leading-8 text-slate-600">
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Leia"}</MathText>
                  </b>
                  <MathText>
                    {" e desenhe a situação (um rascunho já ajuda muito)."}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Ache o triângulo retângulo"}</MathText>
                  </b>
                  <MathText>
                    {
                      ": chão + parede? terreno + diagonal? Procure o ângulo de 90°."
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Marque"}</MathText>
                  </b>
                  <MathText>
                    {" os catetos e a hipotenusa (a hipotenusa fica "}
                  </MathText>
                  <b>
                    <MathText>{"de frente"}</MathText>
                  </b>
                  <MathText>{" para o ângulo reto)."}</MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Converta"}</MathText>
                  </b>
                  <MathText>
                    {" tudo para a mesma unidade antes de calcular."}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>{"Aplique \\(a^2 + b^2 = c^2\\): "}</MathText>
                  <b>
                    <MathText>{"soma"}</MathText>
                  </b>
                  <MathText>{" se procura a hipotenusa, "}</MathText>
                  <b>
                    <MathText>{"subtração"}</MathText>
                  </b>
                  <MathText>{" se procura um cateto."}</MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>{"Tire a raiz, "}</MathText>
                  <b>
                    <MathText>{"confira"}</MathText>
                  </b>
                  <MathText>
                    {" (a hipotenusa é o maior lado) e escreva a "}
                  </MathText>
                  <b>
                    <MathText>{"unidade"}</MathText>
                  </b>
                  <MathText>{"."}</MathText>
                </li>
                <MathText>{"\n  "}</MathText>
              </ol>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"7.2 A escada na parede"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 253 214"
                  style={{ width: "253px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Triângulo retângulo formado pela situação"
                >
                  <line
                    x1="20"
                    y1="180"
                    x2="173"
                    y2="180"
                    stroke="#1e293b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  ></line>
                  <rect
                    x="64"
                    y="14"
                    width="14"
                    height="166"
                    fill="#cbd5e1"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  ></rect>
                  <line
                    x1="78"
                    y1="24"
                    x2="143"
                    y2="180"
                    stroke="#ec4899"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="89,180 89,169 78,169"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <circle cx="143" cy="180" r="5" fill="#ec4899"></circle>
                  <text
                    x="58"
                    y="107"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"h = ?"}
                  </text>
                  <text
                    x="110.5"
                    y="200"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"2,5 m"}
                  </text>
                  <text
                    x="122.5"
                    y="98"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"escada 6,5 m"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {"Escada de 6,5 m com o pé a 2,5 m da parede."}
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 1 — Uma escada de 6,5 m está apoiada na parede, com o pé a 2,5 m dela. A que altura ela toca a parede?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Escada = hipotenusa = 6,5. Chão = cateto = 2,5. Parede = cateto = \\(h\\)."
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(h^2 + 2{,}5^2 = 6{,}5^2\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(h^2 = 42{,}25 - 6{,}25 = 36\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(h = 6\\text{ m}\\)"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50">
                <b>
                  <MathText>{"Curiosidade: a regra do “1 para 4”"}</MathText>
                </b>
                <MathText>
                  {"Pintores costumam apoiar a escada com o pé a "}
                </MathText>
                <b>
                  <MathText>{"1/4 da altura"}</MathText>
                </b>
                <MathText>
                  {
                    " da parede. Para tocar a 4 m de altura, o pé fica a 1 m: a escada precisa ter \\(\\sqrt{4^2 + 1^2} = \\sqrt{17} \\approx 4{,}12\\text{ m}\\). Mais inclinada, a escada escorrega; mais deitada, ela fica instável."
                  }
                </MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>
                  {"7.3 Rampa de acessibilidade (e conversão de unidades)"}
                </MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 340 126"
                  style={{ width: "340px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Rampa de acessibilidade: triângulo retângulo com catetos 2,4 m e 0,7 m"
                >
                  <line
                    x1="20"
                    y1="100"
                    x2="300"
                    y2="100"
                    stroke="#1e293b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  ></line>
                  <polygon
                    points="30,100 270,100 270,30"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></polygon>
                  <line
                    x1="30"
                    y1="100"
                    x2="270"
                    y2="30"
                    stroke="#ec4899"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="259,100 259,89 270,89"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="150"
                    y="120"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"2,4 m"}
                  </text>
                  <text
                    x="280"
                    y="70"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"0,7 m"}
                  </text>
                  <text
                    x="130"
                    y="52"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"rampa = ?"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Rampa com 2,4 m de comprimento horizontal e 0,7 m de altura."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 2 — Uma rampa sobe 70 cm em 2,4 m de distância horizontal. Qual é o comprimento da rampa?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Unidades diferentes! Converta: \\(2{,}4\\text{ m} = 240\\text{ cm}\\)."
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(c^2 = 240^2 + 70^2 = 57\\,600 + 4\\,900 = 62\\,500\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(c = \\sqrt{62\\,500} = 250\\text{ cm} = 2{,}5\\text{ m}\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"7.4 Poste com cabo de sustentação"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 336 190"
                  style={{ width: "336px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Triângulo retângulo formado pela situação"
                >
                  <line
                    x1="20"
                    y1="156"
                    x2="256"
                    y2="156"
                    stroke="#1e293b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="50"
                    y1="24"
                    x2="50"
                    y2="156"
                    stroke="#1e293b"
                    strokeWidth="5"
                    strokeLinecap="round"
                  ></line>
                  <circle cx="50" cy="24" r="6" fill="#f59e0b"></circle>
                  <line
                    x1="50"
                    y1="24"
                    x2="226"
                    y2="156"
                    stroke="#ec4899"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="61,156 61,145 50,145"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <circle cx="226" cy="156" r="5" fill="#ec4899"></circle>
                  <text
                    x="38"
                    y="95"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"6 m"}
                  </text>
                  <text
                    x="138"
                    y="176"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"8 m"}
                  </text>
                  <text
                    x="150"
                    y="86"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"cabo = ?"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {"Cabo esticado do topo do poste até um ponto no chão."}
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 3 — Um poste de 6 m é sustentado por um cabo preso a 8 m do pé do poste. Quanto mede o cabo?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(c^2 = 6^2 + 8^2 = 36 + 64 = 100\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(c = 10\\text{ m}\\)"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"7.5 Caminho mais curto: o atalho"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 316 200"
                  style={{ width: "316px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Terreno retangular de 80 por 60 metros com atalho pela diagonal"
                >
                  <rect
                    x="56"
                    y="20"
                    width="192"
                    height="144"
                    fill="#dcfce7"
                    stroke="#16a34a"
                    strokeWidth="2.5"
                  ></rect>
                  <line
                    x1="56"
                    y1="164"
                    x2="56"
                    y2="20"
                    stroke="#f59e0b"
                    strokeWidth="4"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="56"
                    y1="20"
                    x2="248"
                    y2="20"
                    stroke="#f59e0b"
                    strokeWidth="4"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="56"
                    y1="164"
                    x2="248"
                    y2="20"
                    stroke="#ec4899"
                    strokeWidth="4"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="67,20 67,31 56,31"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="152"
                    y="15"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"80 m"}
                  </text>
                  <text
                    x="48"
                    y="97"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"60 m"}
                  </text>
                  <text
                    x="160"
                    y="106"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"atalho = ?"}
                  </text>
                  <text
                    x="76"
                    y="186"
                    textAnchor="start"
                    fontSize="13"
                    fontWeight="700"
                    fill="#b45309"
                  >
                    {"Pelo contorno: 60 + 80 = 140 m"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>{"Cortar pela diagonal poupa metros."}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 4 — Um terreno retangular mede 80 m por 60 m. Quantos metros se economizam indo pela diagonal em vez de contornar?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Contornando: \\(80 + 60 = 140\\text{ m}\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Diagonal: \\(d = \\sqrt{80^2 + 60^2} = \\sqrt{6400 + 3600} = \\sqrt{10\\,000} = 100\\text{ m}\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Economia: \\(140 - 100 = 40\\text{ m}\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"7.6 Navegação"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 440 210"
                  style={{ width: "440px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Barco que vai 8 km a leste e 6 km ao norte: triângulo retângulo"
                >
                  <polygon
                    points="40,176 232,176 232,32"
                    fill="#e0f2fe"
                    stroke="#0284c7"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  ></polygon>
                  <line
                    x1="40"
                    y1="176"
                    x2="232"
                    y2="32"
                    stroke="#ec4899"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="221,176 221,165 232,165"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <circle cx="40" cy="176" r="6" fill="#4f46e5"></circle>
                  <circle cx="232" cy="32" r="6" fill="#ec4899"></circle>
                  <text
                    x="136"
                    y="196"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"8 km a leste"}
                  </text>
                  <text
                    x="242"
                    y="104"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"6 km a norte"}
                  </text>
                  <text
                    x="130"
                    y="96"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"distância = ?"}
                  </text>
                  <text
                    x="36"
                    y="194"
                    textAnchor="end"
                    fontSize="13"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"porto"}
                  </text>
                  <text
                    x="232"
                    y="20"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"ilha"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Os dois deslocamentos formam um ângulo reto (leste e norte)."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 5 — Um barco sai do porto, anda 8 km a leste e depois 6 km ao norte. A que distância, em linha reta, ele está do porto?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Leste e norte formam 90°. \\(d^2 = 8^2 + 6^2 = 64 + 36 = 100\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(d = 10\\text{ km}\\)"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"7.7 Telhado"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 330 130"
                  style={{ width: "330px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Telhado: meia largura 6 m, altura 2,5 m e inclinação a descobrir"
                >
                  <polygon
                    points="30,100 294,100 162,45"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></polygon>
                  <line
                    x1="162"
                    y1="100"
                    x2="162"
                    y2="45"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="151,100 151,89 162,89"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <line
                    x1="30"
                    y1="100"
                    x2="294"
                    y2="100"
                    stroke="#1e293b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  ></line>
                  <text
                    x="96"
                    y="120"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"6 m"}
                  </text>
                  <text
                    x="228"
                    y="120"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"6 m"}
                  </text>
                  <text
                    x="170"
                    y="78"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"2,5 m"}
                  </text>
                  <text
                    x="86"
                    y="64"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"água = ?"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Metade da largura (6 m) e altura (2,5 m) formam os catetos; a água do telhado é a hipotenusa."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 6 — Um telhado de duas águas cobre uma largura de 12 m e tem 2,5 m de altura no meio. Quanto mede cada “água” (lado inclinado)?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Metade da largura: \\(12 \\div 2 = 6\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(a^2 = 6^2 + 2{,}5^2 = 36 + 6{,}25 = 42{,}25\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(a = 6{,}5\\text{ m}\\)"}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"7.8 Mais situações com o mesmo desenho"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 320 178"
                  style={{ width: "320px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Triângulo retângulo formado pela situação"
                >
                  <line
                    x1="20"
                    y1="144"
                    x2="240"
                    y2="144"
                    stroke="#1e293b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="50"
                    y1="24"
                    x2="50"
                    y2="144"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <polygon
                    points="50,10 60,24 50,38 40,24"
                    fill="#fde68a"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  ></polygon>
                  <line
                    x1="50"
                    y1="24"
                    x2="210"
                    y2="144"
                    stroke="#ec4899"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="61,144 61,133 50,133"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <circle cx="210" cy="144" r="5" fill="#ec4899"></circle>
                  <text
                    x="38"
                    y="89"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"15 m"}
                  </text>
                  <text
                    x="130"
                    y="164"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"20 m"}
                  </text>
                  <text
                    x="142"
                    y="80"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"fio = ?"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Pipa: fio esticado, 15 m de altura e 20 m de distância horizontal."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <b>
                  <MathText>{"Pipa:"}</MathText>
                </b>
                <MathText>
                  {
                    " altura 15 m e 20 m de distância horizontal: fio \\(= \\sqrt{15^2 + 20^2} = \\sqrt{625} = 25\\text{ m}\\)."
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 300 163"
                  style={{ width: "300px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Triângulo retângulo formado pela situação"
                >
                  <line
                    x1="20"
                    y1="129"
                    x2="220"
                    y2="129"
                    stroke="#1e293b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="50"
                    y1="24"
                    x2="50"
                    y2="129"
                    stroke="#1e293b"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="42"
                    y1="24"
                    x2="54"
                    y2="24"
                    stroke="#1e293b"
                    strokeWidth="4"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="50"
                    y1="24"
                    x2="190"
                    y2="129"
                    stroke="#ec4899"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="61,129 61,118 50,118"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <circle cx="190" cy="129" r="5" fill="#ec4899"></circle>
                  <text
                    x="38"
                    y="81.5"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"1,5 m"}
                  </text>
                  <text
                    x="120"
                    y="149"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"2 m"}
                  </text>
                  <text
                    x="132"
                    y="72.5"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"rampa = ?"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {"Escorregador de 1,5 m de altura e 2 m de afastamento."}
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <b>
                  <MathText>{"Escorregador:"}</MathText>
                </b>
                <MathText>
                  {
                    " altura 1,5 m e 2 m de afastamento: rampa \\(= \\sqrt{1{,}5^2 + 2^2} = \\sqrt{2{,}25 + 4} = \\sqrt{6{,}25} = 2{,}5\\text{ m}\\)."
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="rounded-xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50">
                <b>
                  <MathText>{"Erros comuns em aplicações"}</MathText>
                </b>
                <MathText>{"\n    "}</MathText>
                <ul className="mt-3 pl-6 list-disc leading-8 text-slate-600">
                  <li className="mt-1">
                    <MathText>
                      {
                        "Misturar unidades (m com cm) antes de elevar ao quadrado."
                      }
                    </MathText>
                  </li>
                  <MathText>{"\n    "}</MathText>
                  <li className="mt-1">
                    <MathText>
                      {
                        "Escolher o triângulo errado: se não há ângulo reto, o teorema não vale."
                      }
                    </MathText>
                  </li>
                  <MathText>{"\n    "}</MathText>
                  <li className="mt-1">
                    <MathText>
                      {
                        "Colocar a hipotenusa no lugar errado: ela é o lado mais longo, "
                      }
                    </MathText>
                    <b>
                      <MathText>{"oposto"}</MathText>
                    </b>
                    <MathText>{" ao ângulo reto."}</MathText>
                  </li>
                  <MathText>{"\n    "}</MathText>
                  <li className="mt-1">
                    <MathText>{"Responder só o número, sem unidade."}</MathText>
                  </li>
                </ul>
              </div>
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-gotab="laboratorio"
              >
                <MathText>
                  {"🔬 Abrir o laboratório (Exp. 3 “A escada na parede”)"}
                </MathText>
              </button>
              <MathText>{"\n\n  "}</MathText>
              <PitagorasQuickCheck index={14} />
              <MathText>{"\n  "}</MathText>
              <PitagorasQuickCheck index={15} />
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-goto="7"
              >
                <MathText>{"✏️ Fazer os exercícios do nível 7"}</MathText>
              </button>
              <MathText>{"\n"}</MathText>
            </article>
            <MathText>{"\n\n"}</MathText>
            <MathText>{"\n"}</MathText>
            <article
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
              id="l8"
            >
              <MathText>{"\n  "}</MathText>
              <div className="text-xs font-extrabold tracking-widest uppercase text-indigo-600">
                <MathText>{"Lição 8"}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-800">
                <MathText>{"Problemas, erros comuns e folha de cola"}</MathText>
              </h2>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {
                    "Problemas mais longos juntam várias ideias: dois triângulos, uma equação, uma subtração antes da raiz. Aqui estão o método e cinco exemplos completos, do mais fácil ao mais difícil."
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"8.1 O método geral"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <ol className="mt-3 pl-6 list-decimal leading-8 text-slate-600">
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Leia"}</MathText>
                  </b>
                  <MathText>{" o enunciado duas vezes e "}</MathText>
                  <b>
                    <MathText>{"desenhe"}</MathText>
                  </b>
                  <MathText>{"."}</MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Ache o triângulo retângulo"}</MathText>
                  </b>
                  <MathText>{" (às vezes são dois)."}</MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Marque"}</MathText>
                  </b>
                  <MathText>{" catetos e hipotenusa."}</MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>{"Procura-se a hipotenusa? "}</MathText>
                  <b>
                    <MathText>{"Some"}</MathText>
                  </b>
                  <MathText>{" os quadrados. Procura-se um cateto? "}</MathText>
                  <b>
                    <MathText>{"Subtraia"}</MathText>
                  </b>
                  <MathText>{"."}</MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>
                    {"Tire a raiz; simplifique ou aproxime (só no final)."}
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <b>
                    <MathText>{"Confira:"}</MathText>
                  </b>
                  <MathText>
                    {
                      " a hipotenusa é o maior lado? A resposta tem unidade e faz sentido?"
                    }
                  </MathText>
                </li>
                <MathText>{"\n  "}</MathText>
              </ol>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"8.2 Exemplos resolvidos"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 300 204"
                  style={{ width: "300px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Casa: parede retangular de 12 por 5 e telhado triangular com lados de 10 m"
                >
                  <rect
                    x="40"
                    y="110"
                    width="144"
                    height="60"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="3"
                  ></rect>
                  <polygon
                    points="40,110 184,110 112,14"
                    fill="#fde68a"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></polygon>
                  <line
                    x1="112"
                    y1="110"
                    x2="112"
                    y2="14"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="101,110 101,99 112,99"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="112"
                    y="190"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"12 m"}
                  </text>
                  <text
                    x="32"
                    y="145"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"5 m"}
                  </text>
                  <text
                    x="70"
                    y="60"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#4f46e5"
                  >
                    {"10 m"}
                  </text>
                  <text
                    x="120"
                    y="72"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"h = ?"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {"Casa: parede retangular com telhado triangular."}
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 1 — A frente de uma casa é um retângulo de 12 m por 5 m com um telhado triangular de lados inclinados de 10 m. Qual a altura total da casa e a área da frente?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Altura do telhado: \\(h^2 + 6^2 = 10^2 \\Rightarrow h^2 = 100 - 36 = 64 \\Rightarrow h = 8\\text{ m}\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Altura total: \\(5 + 8 = 13\\text{ m}\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Área \\(= 12 \\cdot 5 + \\dfrac{12 \\cdot 8}{2} = 60 + 48 = 108\\text{ m}^2\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 290 174"
                  style={{ width: "290px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Dois postes com um cabo ligando os topos"
                >
                  <line
                    x1="20"
                    y1="140"
                    x2="248"
                    y2="140"
                    stroke="#1e293b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="40"
                    y1="140"
                    x2="40"
                    y2="98"
                    stroke="#1e293b"
                    strokeWidth="5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="208"
                    y1="140"
                    x2="208"
                    y2="28"
                    stroke="#1e293b"
                    strokeWidth="5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="40"
                    y1="98"
                    x2="208"
                    y2="28"
                    stroke="#ec4899"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="40"
                    y1="98"
                    x2="208"
                    y2="98"
                    stroke="#f59e0b"
                    strokeWidth="2.5"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="197,98 197,87 208,87"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="32"
                    y="122"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"3 m"}
                  </text>
                  <text
                    x="218"
                    y="80"
                    textAnchor="start"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"8 m"}
                  </text>
                  <text
                    x="124"
                    y="160"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"12 m"}
                  </text>
                  <text
                    x="200"
                    y="68"
                    textAnchor="end"
                    fontSize="13"
                    fontWeight="700"
                    fill="#f59e0b"
                  >
                    {"5 m"}
                  </text>
                  <text
                    x="110"
                    y="62"
                    textAnchor="end"
                    fontSize="14"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"cabo = ?"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "Os catetos são a distância (12) e a diferença de alturas (8 − 3 = 5)."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 2 — Dois postes, de 3 m e de 8 m, ficam a 12 m um do outro. Quanto mede o cabo esticado entre os topos?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Diferença de alturas: \\(8 - 3 = 5\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "\\(c^2 = 12^2 + 5^2 = 144 + 25 = 169 \\Rightarrow c = 13\\text{ m}\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 250 190"
                  style={{ width: "250px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Triângulo retângulo com catetos x e x+7 e hipotenusa 13"
                >
                  <polygon
                    points="40,156 100,156 100,12"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></polygon>
                  <polyline
                    points="89,156 89,145 100,145"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="70"
                    y="176"
                    textAnchor="middle"
                    fontSize="16"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"x"}
                  </text>
                  <text
                    x="112"
                    y="86"
                    textAnchor="start"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"x + 7"}
                  </text>
                  <text
                    x="60"
                    y="74"
                    textAnchor="end"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"13"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>{"Catetos x e x + 7 e hipotenusa 13."}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 3 — Um triângulo retângulo tem catetos \\(x\\) e \\(x+7\\) e hipotenusa 13. Qual é o valor de \\(x\\)?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(x^2 + (x + 7)^2 = 13^2 = 169\\)"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"Tentativas com inteiros positivos:"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(x = 3\\): \\(9 + 100 = 109\\) (pouco)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"\\(x = 4\\): \\(16 + 121 = 137\\) (pouco)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"\\(x = 5\\): \\(25 + 144 = 169\\) ✓"}</MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>{"Catetos 5 e 12, hipotenusa 13."}</MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {
                    "Como a soma cresce quando \\(x\\) cresce, não há outro valor positivo. A tentativa organizada em tabela é um método válido!"
                  }
                </MathText>
              </p>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 360 214"
                  style={{ width: "360px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Escada de 10 m escorregando: antes (amarelo) e depois (rosa)"
                >
                  <line
                    x1="20"
                    y1="170"
                    x2="274"
                    y2="170"
                    stroke="#1e293b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  ></line>
                  <rect
                    x="56"
                    y="16"
                    width="14"
                    height="154"
                    fill="#cbd5e1"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  ></rect>
                  <line
                    x1="70"
                    y1="26"
                    x2="178"
                    y2="170"
                    stroke="#f59e0b"
                    strokeWidth="3.5"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="70"
                    y1="62"
                    x2="214"
                    y2="170"
                    stroke="#ec4899"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="81,170 81,159 70,159"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="50"
                    y="80"
                    textAnchor="end"
                    fontSize="13"
                    fontWeight="700"
                    fill="#f59e0b"
                  >
                    {"8 m"}
                  </text>
                  <text
                    x="50"
                    y="134"
                    textAnchor="end"
                    fontSize="13"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"6 m"}
                  </text>
                  <text
                    x="124"
                    y="188"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#f59e0b"
                  >
                    {"6 m"}
                  </text>
                  <text
                    x="196"
                    y="206"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"8 m"}
                  </text>
                  <text
                    x="180"
                    y="44"
                    textAnchor="start"
                    fontSize="12"
                    fontWeight="700"
                    fill="#b45309"
                  >
                    {"antes: altura 8, pé a 6"}
                  </text>
                  <text
                    x="180"
                    y="62"
                    textAnchor="start"
                    fontSize="12"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"depois: altura 6, pé a 8"}
                  </text>
                  <text
                    x="180"
                    y="80"
                    textAnchor="start"
                    fontSize="12"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"escada = 10 m"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>
                    {
                      "A escada de 10 m escorrega: o topo desce 2 m e o pé se afasta."
                    }
                  </MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 4 — Uma escada de 10 m está com o pé a 6 m da parede. Se o topo escorregar 2 m para baixo, quanto o pé se afasta?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {"Antes: \\(h^2 = 10^2 - 6^2 = 64 \\Rightarrow h = 8\\)"}
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Depois: altura \\(8 - 2 = 6\\), então \\(x^2 = 10^2 - 6^2 = 64 \\Rightarrow x = 8\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "O pé foi de 6 m a 8 m da parede: afastou-se \\(8 - 6 = 2\\text{ m}\\)."
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
                <svg
                  viewBox="0 0 208 166"
                  style={{ width: "208px", maxWidth: "100%", height: "auto" }}
                  role="img"
                  aria-label="Triângulo isósceles com a altura traçada até a base"
                >
                  <polygon
                    points="30,134 158,134 94,14"
                    fill="#e0e7ff"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  ></polygon>
                  <line
                    x1="94"
                    y1="14"
                    x2="94"
                    y2="134"
                    stroke="#ec4899"
                    strokeWidth="2.5"
                    stroke-dasharray="5 4"
                    strokeLinecap="round"
                  ></line>
                  <polyline
                    points="83,134 83,123 94,123"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  ></polyline>
                  <text
                    x="94"
                    y="156"
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"base = 16"}
                  </text>
                  <text
                    x="48"
                    y="70"
                    textAnchor="end"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"17"}
                  </text>
                  <text
                    x="150"
                    y="70"
                    textAnchor="start"
                    fontSize="15"
                    fontWeight="700"
                    fill="#1e293b"
                  >
                    {"17"}
                  </text>
                  <text
                    x="100"
                    y="80"
                    textAnchor="start"
                    fontSize="15"
                    fontWeight="700"
                    fill="#ec4899"
                  >
                    {"h"}
                  </text>
                </svg>
                <div className="text-xs text-slate-500 mt-1">
                  <MathText>{"Isósceles de base 16 e lados 17."}</MathText>
                </div>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="bg-[#fffef9] border border-indigo-200 shadow-sm bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                <div className="text-sm font-bold text-indigo-700 mb-2">
                  <MathText>
                    {
                      "EXEMPLO 5 — Um triângulo isósceles tem base 16 cm e lados iguais de 17 cm. Qual é a área?"
                    }
                  </MathText>
                </div>
                <div className="font-serif text-xl leading-8 text-blue-900">
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Metade da base: 8. \\(h^2 = 17^2 - 8^2 = 289 - 64 = 225 \\Rightarrow h = 15\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n    "}</MathText>
                  <div>
                    <MathText>
                      {
                        "Área \\(= \\dfrac{16 \\cdot 15}{2} = 120\\text{ cm}^2\\)"
                      }
                    </MathText>
                  </div>
                  <MathText>{"\n  "}</MathText>
                </div>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"8.3 Os 12 erros mais comuns"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <div className="grid gap-3 mt-4 sm:grid-cols-2">
                <MathText>{"\n    "}</MathText>
                <div className="bg-red-50 border border-red-200">
                  <b>
                    <MathText>{"✗ Erro"}</MathText>
                  </b>
                  <br />
                  <MathText>
                    {"1. Somar quando deveria subtrair (cateto desconhecido)."}
                  </MathText>
                  <br />
                  <MathText>
                    {"2. Usar o lado errado como hipotenusa."}
                  </MathText>
                  <br />
                  <MathText>
                    {"3. Achar que \\((a + b)^2 = a^2 + b^2\\)."}
                  </MathText>
                  <br />
                  <MathText>{"4. Esquecer de tirar a raiz no final."}</MathText>
                  <br />
                  <MathText>
                    {"5. Aplicar o teorema em triângulo que não é retângulo."}
                  </MathText>
                  <br />
                  <MathText>{"6. Misturar unidades."}</MathText>
                </div>
                <MathText>{"\n    "}</MathText>
                <div className="bg-emerald-50 border border-emerald-200">
                  <b>
                    <MathText>{"✓ Certo"}</MathText>
                  </b>
                  <br />
                  <MathText>{"1. Cateto: \\(c^2 - a^2\\)."}</MathText>
                  <br />
                  <MathText>
                    {"2. Hipotenusa fica oposta ao ângulo reto e é a maior."}
                  </MathText>
                  <br />
                  <MathText>
                    {"3. \\((3 + 4)^2 = 49\\), mas \\(3^2 + 4^2 = 25\\)."}
                  </MathText>
                  <br />
                  <MathText>{"4. \\(d^2 = 25\\) ⇒ \\(d = 5\\)."}</MathText>
                  <br />
                  <MathText>{"5. Primeiro garanta o ângulo de 90°."}</MathText>
                  <br />
                  <MathText>{"6. Converta tudo antes de calcular."}</MathText>
                </div>
                <MathText>{"\n  "}</MathText>
              </div>
              <MathText>{"\n  "}</MathText>
              <div className="grid gap-3 mt-4 sm:grid-cols-2">
                <MathText>{"\n    "}</MathText>
                <div className="bg-red-50 border border-red-200">
                  <b>
                    <MathText>{"✗ Erro"}</MathText>
                  </b>
                  <br />
                  <MathText>{"7. Arredondar no meio da conta."}</MathText>
                  <br />
                  <MathText>{"8. \\(\\sqrt{a^2 + b^2} = a + b\\)."}</MathText>
                  <br />
                  <MathText>{"9. \\(0{,}3^2 = 0{,}9\\)."}</MathText>
                  <br />
                  <MathText>
                    {
                      "10. Confundir cateto com altura (a altura de um triângulo qualquer só é cateto se houver ângulo reto)."
                    }
                  </MathText>
                  <br />
                  <MathText>
                    {
                      "11. Achar que todo triângulo de lados 3, 4 e 6 funciona (precisa de \\(9 + 16 = 25\\), não 36)."
                    }
                  </MathText>
                  <br />
                  <MathText>
                    {"12. Não conferir se a hipotenusa é o maior lado."}
                  </MathText>
                </div>
                <MathText>{"\n    "}</MathText>
                <div className="bg-emerald-50 border border-emerald-200">
                  <b>
                    <MathText>{"✓ Certo"}</MathText>
                  </b>
                  <br />
                  <MathText>{"7. Arredonde só no final."}</MathText>
                  <br />
                  <MathText>{"8. \\(\\sqrt{9 + 16} = 5\\), não 7."}</MathText>
                  <br />
                  <MathText>{"9. \\(0{,}3^2 = 0{,}09\\)."}</MathText>
                  <br />
                  <MathText>
                    {"10. Marque o ângulo reto e veja quem é cateto."}
                  </MathText>
                  <br />
                  <MathText>
                    {"11. A recíproca exige \\(a^2 + b^2 = c^2\\) exato."}
                  </MathText>
                  <br />
                  <MathText>
                    {"12. Se deu menor que um cateto, tem erro."}
                  </MathText>
                </div>
                <MathText>{"\n  "}</MathText>
              </div>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>{"8.4 Folha de cola"}</MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <table className="relative w-full border-collapse my-4 text-sm block overflow-x-auto">
                <thead>
                  <tr>
                    <th className="bg-indigo-100 text-indigo-900 text-left px-3 py-2 font-extrabold whitespace-nowrap">
                      <MathText>{"Situação"}</MathText>
                    </th>
                    <th className="bg-indigo-100 text-indigo-900 text-left px-3 py-2 font-extrabold whitespace-nowrap">
                      <MathText>{"Fórmula"}</MathText>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Hipotenusa"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"\\(c = \\sqrt{a^2 + b^2}\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Cateto"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"\\(a = \\sqrt{c^2 - b^2}\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"É retângulo?"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>
                        {"maior\\(^2\\) = soma dos outros dois quadrados"}
                      </MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Ternos clássicos"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>
                        {"3-4-5, 5-12-13, 8-15-17, 7-24-25 (e múltiplos)"}
                      </MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Diagonal do quadrado"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"\\(\\ell\\sqrt2\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Altura do equilátero"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"\\(\\dfrac{\\ell\\sqrt3}{2}\\)"}</MathText>
                    </td>
                  </tr>
                  <MathText>{"\n    "}</MathText>
                  <tr>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>{"Distância entre dois pontos"}</MathText>
                    </td>
                    <td className="border-t border-slate-100 px-3 py-2 text-slate-600 align-top">
                      <MathText>
                        {"\\(\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\\)"}
                      </MathText>
                    </td>
                  </tr>
                  <MathText>{"\n  "}</MathText>
                </tbody>
              </table>
              <MathText>{"\n\n  "}</MathText>
              <h3 className="mt-7 text-lg font-extrabold text-indigo-800">
                <MathText>
                  {"8.5 Estou pronto para Relações Métricas e Semelhança?"}
                </MathText>
              </h3>
              <MathText>{"\n  "}</MathText>
              <ul className="mt-3 pl-6 list-disc leading-8 text-slate-600">
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>
                    {
                      "☐ Sei apontar catetos e hipotenusa em qualquer posição do triângulo?"
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>
                    {
                      "☐ Sei calcular \\(\\sqrt{5^2 + 12^2}\\) e \\(\\sqrt{17^2 - 8^2}\\)?"
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>
                    {
                      "☐ Sei verificar se 9, 12 e 15 formam um triângulo retângulo?"
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>
                    {
                      "☐ Sei achar a altura de um triângulo isósceles de base 10 e lados 13?"
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>
                    {
                      "☐ Sei calcular a distância entre \\((1, 2)\\) e \\((4, 6)\\)?"
                    }
                  </MathText>
                </li>
                <MathText>{"\n    "}</MathText>
                <li className="mt-1">
                  <MathText>
                    {"☐ Sei simplificar \\(\\sqrt{50}\\) e \\(\\sqrt{18}\\)?"}
                  </MathText>
                </li>
                <MathText>{"\n  "}</MathText>
              </ul>
              <MathText>{"\n  "}</MathText>
              <p className="mt-3 leading-8 text-slate-600">
                <MathText>
                  {
                    "Se marcou todos, você está pronto! O próximo curso mostra que dentro de um triângulo retângulo há "
                  }
                </MathText>
                <b>
                  <MathText>{"triângulos menores parecidos"}</MathText>
                </b>
                <MathText>
                  {" com ele, e dessa semelhança vêm novas fórmulas."}
                </MathText>
              </p>
              <MathText>{"\n\n  "}</MathText>
              <PitagorasQuickCheck index={16} />
              <MathText>{"\n  "}</MathText>
              <PitagorasQuickCheck index={17} />
              <MathText>{"\n  "}</MathText>
              <button
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm"
                data-goto="8"
              >
                <MathText>{"✏️ Fazer os exercícios do nível 8"}</MathText>
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
