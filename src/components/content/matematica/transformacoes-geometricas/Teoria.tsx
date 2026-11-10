import { MathText } from "../../../Math/MathRenderer";
import { TransformacoesGeometricasQuickCheck } from "./QuickCheck";

export function TransformacoesGeometricasTeoria() {
  return (
    <div className="space-y-6 min-w-0">
<section id={"sec-teoria"} className={"space-y-6"}>
  {<MathText>{" "}</MathText>}
  <div className={"rounded-3xl p-7 sm:p-10 bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 text-white shadow-xl"}>
    {<MathText>{" "}</MathText>}
    <span className={"text-xs uppercase tracking-widest font-bold text-indigo-200"}>
      {<MathText>{"Curso completo · 8º ano · do zero"}</MathText>}
    </span>
    {<MathText>{" "}</MathText>}
    <h1 className={"text-3xl sm:text-5xl font-black mt-2"}>
      {<MathText>{"Transformações Geométricas"}</MathText>}
    </h1>
    {<MathText>{" "}</MathText>}
    <p className={"mt-3 leading-7 text-slate-600 mt-4 max-w-3xl text-indigo-100 leading-7"}>
      {<MathText>{"Mover, espelhar, girar, ampliar e reduzir figuras: translação, reflexão, rotação e homotetia, tudo no plano cartesiano, com coordenadas. Você não precisa saber nada sobre o assunto: aqui você aprende o que é, como funciona, para que serve e como fazer as contas no papel. É a última peça antes da trigonometria."}</MathText>}
    </p>
    {<MathText>{" "}</MathText>}
  </div>
  {<MathText>{" "}</MathText>}
  <div className={"grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 items-start"}>
    {<MathText>{" "}</MathText>}
    <aside className={"space-y-1 lg:sticky lg:top-20 bg-white rounded-2xl border p-3 shadow-sm lg:max-h-[calc(100vh-6rem)] overflow-y-auto"}>
      {<MathText>{" "}</MathText>}
      <div className={"text-[11px] font-black uppercase tracking-widest text-indigo-600 px-2 pb-1"}>
        {<MathText>{"Lições"}</MathText>}
      </div>
      {<MathText>{" "}</MathText>}
      <a href={"#l0"} className={"block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"}>
        {<MathText>{"0 · Comece por aqui"}</MathText>}
      </a>
      {<MathText>{" "}</MathText>}
      <a href={"#l1"} className={"block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"}>
        {<MathText>{"1 · Plano cartesiano e coordenadas"}</MathText>}
      </a>
      {<MathText>{" "}</MathText>}
      <a href={"#l2"} className={"block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"}>
        {<MathText>{"2 · Translação"}</MathText>}
      </a>
      {<MathText>{" "}</MathText>}
      <a href={"#l3"} className={"block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"}>
        {<MathText>{"3 · Reflexão"}</MathText>}
      </a>
      {<MathText>{" "}</MathText>}
      <a href={"#l4"} className={"block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"}>
        {<MathText>{"4 · Rotação"}</MathText>}
      </a>
      {<MathText>{" "}</MathText>}
      <a href={"#l5"} className={"block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"}>
        {<MathText>{"5 · Homotetia"}</MathText>}
      </a>
      {<MathText>{" "}</MathText>}
      <a href={"#l6"} className={"block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"}>
        {<MathText>{"6 · Identificar e compor"}</MathText>}
      </a>
      {<MathText>{" "}</MathText>}
      <a href={"#l7"} className={"block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"}>
        {<MathText>{"7 · Aplicações e problemas"}</MathText>}
      </a>
      {<MathText>{" "}</MathText>}
      <a href={"#l8"} className={"block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-indigo-100 hover:text-indigo-800"}>
        {<MathText>{"8 · Erros, folha de cola e ponte"}</MathText>}
      </a>
      {<MathText>{" "}</MathText>}
    </aside>
    {<MathText>{" "}</MathText>}
    <div className={"space-y-6 min-w-0"}>
      {<MathText>{" "}</MathText>}
      {<MathText>{" "}</MathText>}
      <article className={"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-24 sm:p-8"} id={"l0"}>
        {<MathText>{" "}</MathText>}
        <div className={"text-[.7rem] font-extrabold uppercase tracking-[.12em] text-indigo-600"}>
          {<MathText>{"Lição 0"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h2 className={"mt-1 text-2xl font-black text-slate-800"}>
          {<MathText>{"Comece por aqui: mover, espelhar, girar e ampliar figuras"}</MathText>}
        </h2>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Quando você arrasta uma foto na tela do celular, vira o celular de lado ou dá zoom, a imagem "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"continua sendo a mesma imagem"}</MathText>}
          </b>
          {<MathText>{": só mudou de lugar, de posição ou de tamanho. Em matemática, cada um desses movimentos se chama "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"transformação geométrica"}</MathText>}
          </b>
          {<MathText>{". Neste curso você aprende a descrever cada uma delas com "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"números"}</MathText>}
          </b>
          {<MathText>{": as coordenadas dos pontos no plano cartesiano."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 396 272"} className={"h-auto max-w-full w-[396px]"} role={"img"} aria-label={"Quatro tipos de transformação: translação, reflexão, rotação e homotetia"}>
            <rect x={"0"} y={"0"} width={"196"} height={"132"} rx={"10"} fill={"#f8fafc"} stroke={"#e2e8f0"}></rect>
            <rect x={"200"} y={"0"} width={"196"} height={"132"} rx={"10"} fill={"#f8fafc"} stroke={"#e2e8f0"}></rect>
            <rect x={"0"} y={"140"} width={"196"} height={"132"} rx={"10"} fill={"#f8fafc"} stroke={"#e2e8f0"}></rect>
            <rect x={"200"} y={"140"} width={"196"} height={"132"} rx={"10"} fill={"#f8fafc"} stroke={"#e2e8f0"}></rect>
            <polygon points={"15.0,85.0 55.0,85.0 35.0,50.0"} fill={"#e0e7ff"} fill-opacity={".85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <polygon points={"115.0,60.0 155.0,60.0 135.0,25.0"} fill={"#fce7f3"} fill-opacity={".85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <line x1={"60.0"} y1={"70.0"} x2={"108.0"} y2={"50.0"} stroke={"#ec4899"} strokeWidth={"2"} strokeDasharray={"5 4"}></line>
            <text x={"98"} y={"122"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              {"Translação: desliza"}
            </text>
            <line x1={"295.0"} y1={"12.0"} x2={"295.0"} y2={"100.0"} stroke={"#f59e0b"} strokeWidth={"2.5"} strokeDasharray={"5 4"}></line>
            <polygon points={"220.0,85.0 270.0,85.0 245.0,40.0"} fill={"#e0e7ff"} fill-opacity={".85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <polygon points={"370.0,85.0 320.0,85.0 345.0,40.0"} fill={"#fce7f3"} fill-opacity={".85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <text x={"298"} y={"122"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              {"Reflexão: espelho"}
            </text>
            <polygon points={"70.0,225.0 120.0,225.0 70.0,180.0"} fill={"#e0e7ff"} fill-opacity={".85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <polygon points={"70.0,225.0 70.0,175.0 25.0,225.0"} fill={"#fce7f3"} fill-opacity={".85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <polyline points={"94,225 93.7,221.2 92.8,217.6 91.4,214.1 89.4,210.9 87,208 84.1,205.6 80.9,203.6 77.4,202.2 73.8,201.3 70,201"} fill={"none"} stroke={"#f59e0b"} strokeWidth={"2.5"}></polyline>
            <circle cx={"70"} cy={"225"} r={"4"} fill={"#1e293b"}></circle>
            <text x={"98"} y={"262"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              {"Rotação: gira"}
            </text>
            <line x1={"215.0"} y1={"230.0"} x2={"350.0"} y2={"230.0"} stroke={"#94a3b8"} strokeWidth={"1.5"} strokeDasharray={"5 4"}></line>
            <line x1={"215.0"} y1={"230.0"} x2={"326.0"} y2={"200.0"} stroke={"#94a3b8"} strokeWidth={"1.5"} strokeDasharray={"5 4"}></line>
            <line x1={"215.0"} y1={"230.0"} x2={"300.0"} y2={"230.0"} stroke={"#94a3b8"} strokeWidth={"0"}></line>
            <polygon points={"245.0,230.0 270.0,230.0 257.0,215.0"} fill={"#e0e7ff"} fill-opacity={".85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <polygon points={"275.0,230.0 325.0,230.0 299.0,200.0"} fill={"#fce7f3"} fill-opacity={".85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"215"} cy={"230"} r={"4"} fill={"#1e293b"}></circle>
            <text x={"298"} y={"262"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              {"Homotetia: amplia"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"As quatro transformações do curso. Azul = figura original; rosa = imagem (o resultado)."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"0.1 Para que serve?"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <ul className={"mt-3 list-disc space-y-1 pl-6 leading-7 text-slate-600"}>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Jogos e animações:"}</MathText>}
            </b>
            {<MathText>{" o personagem anda (translação), vira (rotação), o reflexo na água aparece (reflexão) e o zoom aproxima a cena (homotetia)."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Logotipos e padrões:"}</MathText>}
            </b>
            {<MathText>{" azulejos, tecidos, papéis de parede e bandeiras são feitos repetindo uma figura deslocada, espelhada ou girada."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Robótica:"}</MathText>}
            </b>
            {<MathText>{" um robô recebe a ordem “ande 3 para a direita e 2 para cima” — isso é uma translação."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Edição de imagens:"}</MathText>}
            </b>
            {<MathText>{" girar, espelhar e redimensionar uma foto são exatamente essas operações."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Arquitetura e design:"}</MathText>}
            </b>
            {<MathText>{" plantas simétricas e mosaicos."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
        </ul>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"0.2 Os dois grupos"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"}>
          {<MathText>{" "}</MathText>}
          <div className={"bg-indigo-50 rounded-2xl p-4 text-slate-700 leading-7"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Translação"}</MathText>}
            </b>
            {<MathText>{"A figura "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"desliza"}</MathText>}
            </b>
            {<MathText>{" sem girar. Forma e tamanho iguais."}</MathText>}
          </div>
          {<MathText>{" "}</MathText>}
          <div className={"bg-amber-50 rounded-2xl p-4 text-slate-700 leading-7"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Reflexão e rotação"}</MathText>}
            </b>
            {<MathText>{"A figura é "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"espelhada"}</MathText>}
            </b>
            {<MathText>{" ou "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"girada"}</MathText>}
            </b>
            {<MathText>{". Forma e tamanho iguais."}</MathText>}
          </div>
          {<MathText>{" "}</MathText>}
          <div className={"bg-emerald-50 rounded-2xl p-4 text-slate-700 leading-7"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Homotetia"}</MathText>}
            </b>
            {<MathText>{"A figura é "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"ampliada ou reduzida"}</MathText>}
            </b>
            {<MathText>{". Forma igual, tamanho diferente (é a ideia de semelhança!)."}</MathText>}
          </div>
          {<MathText>{" "}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"As três primeiras (translação, reflexão e rotação) são chamadas de "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"isometrias"}</MathText>}
          </b>
          {<MathText>{": “iso” = igual, “metria” = medida. Elas "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"preservam as medidas"}</MathText>}
          </b>
          {<MathText>{": lados, ângulos, perímetro e área da figura não mudam. A homotetia muda o tamanho, mas mantém os ângulos e a proporção entre os lados."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"0.3 Original e imagem"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"A figura de partida se chama "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"figura original"}</MathText>}
          </b>
          {<MathText>{". O resultado da transformação se chama "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"imagem"}</MathText>}
          </b>
          {<MathText>{". Os pontos da imagem recebem o nome do ponto original com um tracinho: o ponto \\(A\\) vira \\(A'\\) (lê-se “A linha”), \\(B\\) vira \\(B'\\), \\(C\\) vira \\(C'\\). Assim:"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-indigo-300 bg-[#fffef9] p-5 text-center text-xl"}>
          {<MathText>{"\\[ A \\;\\longrightarrow\\; A' \\]"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Regra de ouro do curso"}</MathText>}
          </b>
          {<MathText>{"Toda transformação é uma "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"regra"}</MathText>}
          </b>
          {<MathText>{" que diz: “o ponto de coordenadas \\((x, y)\\) vai para o ponto de coordenadas …”. Você vai aprender cada regra e, principalmente, "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"entender de onde ela vem"}</MathText>}
          </b>
          {<MathText>{"."}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"0.4 Mapa do curso"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <table className={"mt-4 block w-full overflow-x-auto border-collapse text-sm"}>
          <thead>
            <tr>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Lição"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"O que você aprende"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Exercícios"}</MathText>}
              </th>
            </tr>
          </thead>
          <tbody>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"1 · Plano cartesiano"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Coordenadas, quadrantes, vértices e “imagem”"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Nível 1"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"2 · Translação"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Vetor \\((a, b)\\) e a regra \\((x + a,\\ y + b)\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Nível 2"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"3 · Reflexão"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Espelho nos eixos e em retas, orientação invertida"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Nível 3"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"4 · Rotação"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"90°, 180°, 270°, giro em torno de qualquer centro, ordem"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Nível 4"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"5 · Homotetia"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Centro e razão \\(k\\); ampliar, reduzir e inverter"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Nível 5"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"6 · Compor e identificar"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Qual foi a transformação? Duas transformações seguidas"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Níveis 6 e 7"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"7 · Aplicações"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Padrões, jogos, mapas e problemas de interpretação"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Nível 8"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"8 · Erros e folha de cola"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Resumo, erros comuns e a ponte para a trigonometria"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Nível 8"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
          </tbody>
        </table>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"0.5 Como estudar"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <ol className={"mt-3 list-decimal space-y-1 pl-6 leading-7 text-slate-600"}>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Desenhe sempre"}</MathText>}
            </b>
            {<MathText>{" no papel quadriculado: marque os pontos, ligue-os e confira a imagem."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"Use a tabela de vértices: uma linha para cada ponto, uma coluna para o original e outra para a imagem."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"Teste a regra em "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"um ponto"}</MathText>}
            </b>
            {<MathText>{" antes de fazer a figura toda."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"Confira no laboratório e use as calculadoras para "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"conferir"}</MathText>}
            </b>
            {<MathText>{" (não para substituir) suas contas."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
        </ol>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"0.6 Teste rápido"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"As isometrias não mudam as medidas. Aplique isso:"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={0} />
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={1} />
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-goto={"1"}>
          {<MathText>{"✏️ Começar pelos exercícios do nível 1"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
      </article>
      {<MathText>{" "}</MathText>}
      {<MathText>{" "}</MathText>}
      <article className={"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-24 sm:p-8"} id={"l1"}>
        {<MathText>{" "}</MathText>}
        <div className={"text-[.7rem] font-extrabold uppercase tracking-[.12em] text-indigo-600"}>
          {<MathText>{"Lição 1"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h2 className={"mt-1 text-2xl font-black text-slate-800"}>
          {<MathText>{"Plano cartesiano e as coordenadas dos vértices"}</MathText>}
        </h2>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Para descrever uma transformação com números, precisamos de uma forma de dar o endereço exato de cada ponto. Esse endereço são as "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"coordenadas"}</MathText>}
          </b>
          {<MathText>{". Vamos revisar tudo com calma, porque o resto do curso depende disso."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"1.1 Os eixos e o par ordenado"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"O "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"plano cartesiano"}</MathText>}
          </b>
          {<MathText>{" é formado por duas retas numéricas que se cruzam em ângulo reto:"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <ul className={"mt-3 list-disc space-y-1 pl-6 leading-7 text-slate-600"}>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"o "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"eixo x"}</MathText>}
            </b>
            {<MathText>{" (horizontal, o “corredor”) — números crescem para a "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"direita"}</MathText>}
            </b>
            {<MathText>{";"}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"o "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"eixo y"}</MathText>}
            </b>
            {<MathText>{" (vertical, o “andar”) — números crescem para "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"cima"}</MathText>}
            </b>
            {<MathText>{";"}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"o cruzamento é a "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"origem"}</MathText>}
            </b>
            {<MathText>{", \\(O(0,\\,0)\\)."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
        </ul>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Cada ponto tem um "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"par ordenado"}</MathText>}
          </b>
          {<MathText>{" \\((x,\\,y)\\). O primeiro número, \\(x\\), é a "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"abscissa"}</MathText>}
          </b>
          {<MathText>{": quanto andar na "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"horizontal"}</MathText>}
          </b>
          {<MathText>{". O segundo, \\(y\\), é a "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"ordenada"}</MathText>}
          </b>
          {<MathText>{": quanto andar na "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"vertical"}</MathText>}
          </b>
          {<MathText>{". A ordem importa: \\((3,\\,1)\\) e \\((1,\\,3)\\) são pontos diferentes!"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 1 — Marque o ponto \\(P(3,\\,-2)\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Comece na origem \\((0,\\,0)\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(x = 3\\): ande "}</MathText>}
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"3 para a direita"}</MathText>}
              </b>
              {<MathText>{"."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(y = -2\\): ande "}</MathText>}
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"2 para baixo"}</MathText>}
              </b>
              {<MathText>{" (negativo = para baixo)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Marque o ponto e escreva \\(P(3,\\,-2)\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"1.2 Os quatro quadrantes"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Os eixos dividem o plano em quatro regiões, os "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"quadrantes"}</MathText>}
          </b>
          {<MathText>{", numerados no sentido anti-horário a partir de cima à direita. O quadrante é decidido pelos "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"sinais"}</MathText>}
          </b>
          {<MathText>{" de \\(x\\) e \\(y\\):"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 344 284"} className={"h-auto max-w-full w-[344px]"} role={"img"} aria-label={"Os quatro quadrantes do plano cartesiano"}>
            <line x1={"22"} y1={"262"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"52"} y1={"262"} x2={"52"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"82"} y1={"262"} x2={"82"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"112"} y1={"262"} x2={"112"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"142"} y1={"262"} x2={"142"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"172"} y1={"262"} x2={"172"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"202"} y1={"262"} x2={"202"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"232"} y1={"262"} x2={"232"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"262"} y1={"262"} x2={"262"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"292"} y1={"262"} x2={"292"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"322"} y1={"262"} x2={"322"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"262"} x2={"322"} y2={"262"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"232"} x2={"322"} y2={"232"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"202"} x2={"322"} y2={"202"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"172"} x2={"322"} y2={"172"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"142"} x2={"322"} y2={"142"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"112"} x2={"322"} y2={"112"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"82"} x2={"322"} y2={"82"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"52"} x2={"322"} y2={"52"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"322"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"142"} x2={"322"} y2={"142"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"172"} y1={"262"} x2={"172"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"322,142 315,138 315,146"} fill={"#475569"}></polygon>
            <polygon points={"172,22 168,29 176,29"} fill={"#475569"}></polygon>
            <text x={"320"} y={"133"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"181"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-5"}
            </text>
            <text x={"52"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-4"}
            </text>
            <text x={"82"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-3"}
            </text>
            <text x={"112"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-2"}
            </text>
            <text x={"142"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"202"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"232"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"262"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"292"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"322"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"166"} y={"266"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-4"}
            </text>
            <text x={"166"} y={"236"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-3"}
            </text>
            <text x={"166"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-2"}
            </text>
            <text x={"166"} y={"176"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"166"} y={"116"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"166"} y={"86"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"166"} y={"56"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"166"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"166"} y={"155"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <text x={"250"} y={"64"} fontSize={"15"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"I (+, +)"}
            </text>
            <text x={"94"} y={"64"} fontSize={"15"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"II (−, +)"}
            </text>
            <text x={"94"} y={"220"} fontSize={"15"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"III (−, −)"}
            </text>
            <text x={"250"} y={"220"} fontSize={"15"} fontWeight={"700"} fill={"#b45309"} textAnchor={"middle"}>
              {"IV (+, −)"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Os quadrantes e os sinais das coordenadas em cada um."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <table className={"mt-4 block w-full overflow-x-auto border-collapse text-sm"}>
          <thead>
            <tr>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Quadrante"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Sinal de \\(x\\)"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Sinal de \\(y\\)"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Exemplo"}</MathText>}
              </th>
            </tr>
          </thead>
          <tbody>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"I"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"+"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"+"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((3,\\,2)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"II"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"−"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"+"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((-3,\\,2)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"III"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"−"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"−"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((-3,\\,-2)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"IV"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"+"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"−"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((3,\\,-2)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
          </tbody>
        </table>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-amber-500 bg-amber-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Pontos sobre os eixos"}</MathText>}
          </b>
          {<MathText>{"Se \\(y = 0\\), o ponto está no "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"eixo x"}</MathText>}
          </b>
          {<MathText>{" (exemplo: \\((4,\\,0)\\)). Se \\(x = 0\\), está no "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"eixo y"}</MathText>}
          </b>
          {<MathText>{" (exemplo: \\((0,\\,-3)\\)). Esses pontos "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"não pertencem a nenhum quadrante"}</MathText>}
          </b>
          {<MathText>{"."}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"1.3 Desenhando uma figura pelas coordenadas"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Um polígono é determinado pelos seus "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"vértices"}</MathText>}
          </b>
          {<MathText>{". Para desenhar, marque cada vértice e ligue-os em ordem. Para "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"descrever"}</MathText>}
          </b>
          {<MathText>{", use uma tabela. Vamos usar este triângulo ao longo de todo o curso:"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 296 260"} className={"h-auto max-w-full w-[296px]"} role={"img"} aria-label={"Triângulo ABC com A(1,1), B(4,1) e C(2,3)"}>
            <line x1={"22"} y1={"238"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"58"} y1={"238"} x2={"58"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"94"} y1={"238"} x2={"94"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"130"} y1={"238"} x2={"130"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"166"} y1={"238"} x2={"166"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"202"} y1={"238"} x2={"202"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"238"} y1={"238"} x2={"238"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"274"} y1={"238"} x2={"274"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"238"} x2={"274"} y2={"238"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"202"} x2={"274"} y2={"202"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"166"} x2={"274"} y2={"166"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"130"} x2={"274"} y2={"130"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"94"} x2={"274"} y2={"94"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"58"} x2={"274"} y2={"58"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"274"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"202"} x2={"274"} y2={"202"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"58"} y1={"238"} x2={"58"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"274,202 267,198 267,206"} fill={"#475569"}></polygon>
            <polygon points={"58,22 54,29 62,29"} fill={"#475569"}></polygon>
            <text x={"272"} y={"193"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"67"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"216"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"94"} y={"216"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"130"} y={"216"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"166"} y={"216"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"202"} y={"216"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"238"} y={"216"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"274"} y={"216"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"52"} y={"242"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"52"} y={"170"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"52"} y={"134"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"52"} y={"98"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"52"} y={"62"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"52"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"52"} y={"215"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polygon points={"94,166 202,166 130,94"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"94"} cy={"166"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"202"} cy={"166"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"130"} cy={"94"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"82.4"} y={"175.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"214.1"} y={"174.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"126.8"} y={"85.4"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <text x={"90"} y={"186"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"(1, 1)"}
            </text>
            <text x={"206"} y={"186"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"(4, 1)"}
            </text>
            <text x={"148"} y={"70"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"(2, 3)"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"O triângulo ABC, nosso “modelo” de figura: A(1, 1), B(4, 1) e C(2, 3)."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <table className={"mt-4 block w-full overflow-x-auto border-collapse text-sm"}>
          <thead>
            <tr>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Vértice"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"\\(x\\)"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"\\(y\\)"}</MathText>}
              </th>
            </tr>
          </thead>
          <tbody>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(A\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"1"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"1"}</MathText>}
              </td>
            </tr>
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(B\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"4"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"1"}</MathText>}
              </td>
            </tr>
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(C\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"2"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"3"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
          </tbody>
        </table>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Os lados \\(AB\\) (de \\((1,1)\\) a \\((4,1)\\)) tem "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"y igual"}</MathText>}
          </b>
          {<MathText>{" nos dois pontos: é um segmento "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"horizontal"}</MathText>}
          </b>
          {<MathText>{". Seu comprimento é a diferença dos \\(x\\): \\(4 - 1 = 3\\). Em um segmento "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"vertical"}</MathText>}
          </b>
          {<MathText>{", \\(x\\) é igual e o comprimento é a diferença dos \\(y\\)."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 2 — Comprimento de um segmento horizontal de \\(M(-2,\\,4)\\) a \\(N(5,\\,4)\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(y\\) é igual nos dois (\\(4\\)): segmento horizontal."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Comprimento \\(= |5 - (-2)| = |5 + 2| = 7\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Conferência: de \\(-2\\) até \\(0\\) são 2 passos; de \\(0\\) até \\(5\\) são 5 passos: \\(2 + 5 = 7\\) ✓"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={2} />
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"1.4 A ideia de imagem"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Quando uma transformação move a figura, cada ponto vai para outro lugar. O ponto de chegada é a "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"imagem"}</MathText>}
          </b>
          {<MathText>{" do ponto de partida. Aqui o triângulo foi deslizado: \\(A(1,\\,1)\\) foi para \\(A'(5,\\,3)\\)."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 384 282"} className={"h-auto max-w-full w-[384px]"} role={"img"} aria-label={"Triângulo ABC e a sua imagem A′B′C′"}>
            <line x1={"22"} y1={"260"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"56"} y1={"260"} x2={"56"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"90"} y1={"260"} x2={"90"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"124"} y1={"260"} x2={"124"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"158"} y1={"260"} x2={"158"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"192"} y1={"260"} x2={"192"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"226"} y1={"260"} x2={"226"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"260"} y1={"260"} x2={"260"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"294"} y1={"260"} x2={"294"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"328"} y1={"260"} x2={"328"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"362"} y1={"260"} x2={"362"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"260"} x2={"362"} y2={"260"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"226"} x2={"362"} y2={"226"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"192"} x2={"362"} y2={"192"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"158"} x2={"362"} y2={"158"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"124"} x2={"362"} y2={"124"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"90"} x2={"362"} y2={"90"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"56"} x2={"362"} y2={"56"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"362"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"226"} x2={"362"} y2={"226"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"56"} y1={"260"} x2={"56"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"362,226 355,222 355,230"} fill={"#475569"}></polygon>
            <polygon points={"56,22 52,29 60,29"} fill={"#475569"}></polygon>
            <text x={"360"} y={"217"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"65"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"90"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"124"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"158"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"192"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"226"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"260"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"294"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"7"}
            </text>
            <text x={"328"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"8"}
            </text>
            <text x={"362"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"9"}
            </text>
            <text x={"50"} y={"264"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"50"} y={"196"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"50"} y={"162"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"50"} y={"128"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"50"} y={"94"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"50"} y={"60"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"50"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"6"}
            </text>
            <text x={"50"} y={"239"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polygon points={"90,192 192,192 124,124"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"90"} cy={"192"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"192"} cy={"192"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"124"} cy={"124"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"78.4"} y={"201.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"204.1"} y={"200.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"120.8"} y={"115.4"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <polygon points={"226,124 328,124 260,56"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"226"} cy={"124"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"328"} cy={"124"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"260"} cy={"56"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"214.4"} y={"133.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A′"}
            </text>
            <text x={"340.1"} y={"132.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"B′"}
            </text>
            <text x={"256.8"} y={"47.4"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"C′"}
            </text>
            <line x1={"90"} y1={"192"} x2={"222.4"} y2={"125.8"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"226,124 220.2,130.8 217.0,124.6"} fill={"#94a3b8"}></polygon>
            <line x1={"192"} y1={"192"} x2={"324.4"} y2={"125.8"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"328,124 322.2,130.8 319.0,124.6"} fill={"#94a3b8"}></polygon>
            <line x1={"124"} y1={"124"} x2={"256.4"} y2={"57.8"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"260,56 254.2,62.8 251.0,56.6"} fill={"#94a3b8"}></polygon>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Cada vértice do triângulo azul tem uma imagem no triângulo rosa. As setas mostram o caminho de cada ponto."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <table className={"mt-4 block w-full overflow-x-auto border-collapse text-sm"}>
          <thead>
            <tr>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Original"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}></th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Imagem"}</MathText>}
              </th>
            </tr>
          </thead>
          <tbody>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(A(1,\\,1)\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"→"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(A'(5,\\,3)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(B(4,\\,1)\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"→"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(B'(8,\\,3)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(C(2,\\,3)\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"→"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(C'(6,\\,5)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
          </tbody>
        </table>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Toda transformação, no fim, é uma "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"tabela como esta"}</MathText>}
          </b>
          {<MathText>{": para cada ponto original, qual é a imagem. As lições seguintes ensinam a regra que preenche a coluna da direita."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={3} />
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"1.5 Cuidados"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Erros comuns"}</MathText>}
          </b>
          <ul className={"mt-3 list-disc space-y-1 pl-6 leading-7 text-slate-600"}>
            <li className={"mt-1"}>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"Trocar x e y:"}</MathText>}
              </b>
              {<MathText>{" \\((2,\\,5)\\) é “2 na horizontal, 5 na vertical”."}</MathText>}
            </li>
            <li className={"mt-1"}>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"Esquecer o sinal:"}</MathText>}
              </b>
              {<MathText>{" \\(x\\) negativo é para a "}</MathText>}
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"esquerda"}</MathText>}
              </b>
              {<MathText>{"; \\(y\\) negativo é para "}</MathText>}
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"baixo"}</MathText>}
              </b>
              {<MathText>{"."}</MathText>}
            </li>
            <li className={"mt-1"}>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"Contar errado:"}</MathText>}
              </b>
              {<MathText>{" conte "}</MathText>}
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"passos"}</MathText>}
              </b>
              {<MathText>{", não pontos; comece pela origem."}</MathText>}
            </li>
            <li className={"mt-1"}>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"Ligar os vértices fora de ordem"}</MathText>}
              </b>
              {<MathText>{" e desenhar uma figura “torcida”."}</MathText>}
            </li>
          </ul>
        </div>
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-goto={"1"}>
          {<MathText>{"✏️ Fazer os exercícios do nível 1"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
      </article>
      {<MathText>{" "}</MathText>}
      {<MathText>{" "}</MathText>}
      <article className={"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-24 sm:p-8"} id={"l2"}>
        {<MathText>{" "}</MathText>}
        <div className={"text-[.7rem] font-extrabold uppercase tracking-[.12em] text-indigo-600"}>
          {<MathText>{"Lição 2"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h2 className={"mt-1 text-2xl font-black text-slate-800"}>
          {<MathText>{"Translação: deslizar a figura"}</MathText>}
        </h2>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Pense em um robô que anda por um piso quadriculado, ou em uma peça de tabuleiro que se move. A peça não gira e não vira de lado: "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"todos os seus pontos andam a mesma distância, na mesma direção"}</MathText>}
          </b>
          {<MathText>{". Isso é uma "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"translação"}</MathText>}
          </b>
          {<MathText>{"."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"2.1 O vetor de deslocamento"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"O “quanto e para onde” de uma translação é dado por dois números, o "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"vetor"}</MathText>}
          </b>
          {<MathText>{" \\((a,\\,b)\\):"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <ul className={"mt-3 list-disc space-y-1 pl-6 leading-7 text-slate-600"}>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"\\(a\\) = deslocamento "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"horizontal"}</MathText>}
            </b>
            {<MathText>{": positivo → direita; negativo → esquerda;"}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"\\(b\\) = deslocamento "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"vertical"}</MathText>}
            </b>
            {<MathText>{": positivo → cima; negativo → baixo."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
        </ul>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 364 284"} className={"h-auto max-w-full w-[364px]"} role={"img"} aria-label={"Vetor (4, 2): 4 para a direita e 2 para cima"}>
            <line x1={"22"} y1={"262"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"62"} y1={"262"} x2={"62"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"102"} y1={"262"} x2={"102"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"142"} y1={"262"} x2={"142"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"182"} y1={"262"} x2={"182"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"222"} y1={"262"} x2={"222"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"262"} y1={"262"} x2={"262"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"302"} y1={"262"} x2={"302"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"342"} y1={"262"} x2={"342"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"262"} x2={"342"} y2={"262"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"222"} x2={"342"} y2={"222"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"182"} x2={"342"} y2={"182"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"142"} x2={"342"} y2={"142"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"102"} x2={"342"} y2={"102"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"62"} x2={"342"} y2={"62"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"342"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"222"} x2={"342"} y2={"222"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"62"} y1={"262"} x2={"62"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"342,222 335,218 335,226"} fill={"#475569"}></polygon>
            <polygon points={"62,22 58,29 66,29"} fill={"#475569"}></polygon>
            <text x={"340"} y={"213"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"71"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"236"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"102"} y={"236"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"142"} y={"236"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"182"} y={"236"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"222"} y={"236"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"262"} y={"236"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"302"} y={"236"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"342"} y={"236"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"7"}
            </text>
            <text x={"56"} y={"266"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"56"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"56"} y={"146"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"56"} y={"106"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"56"} y={"66"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"56"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"56"} y={"235"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <circle cx={"102"} cy={"182"} r={"5"} fill={"#4f46e5"}></circle>
            <circle cx={"262"} cy={"102"} r={"5"} fill={"#ec4899"}></circle>
            <polyline points={"102,182 262,182 262,102"} fill={"none"} stroke={"#f59e0b"} strokeWidth={"2.5"} strokeDasharray={"6 4"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <line x1={"102"} y1={"182"} x2={"258.4"} y2={"103.8"} stroke={"#ec4899"} strokeWidth={"2.6"}></line>
            <polygon points={"262,102 256.2,108.8 253.0,102.6"} fill={"#ec4899"}></polygon>
            <text x={"96"} y={"202"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A(1, 1)"}
            </text>
            <text x={"280"} y={"90"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A′(5, 3)"}
            </text>
            <text x={"182"} y={"200"} fontSize={"14"} fontWeight={"700"} fill={"#b45309"} textAnchor={"middle"}>
              {"4 →"}
            </text>
            <text x={"280"} y={"146"} fontSize={"14"} fontWeight={"700"} fill={"#b45309"} textAnchor={"middle"}>
              {"2 ↑"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"O vetor (4, 2) leva A(1, 1) até A′(5, 3): 4 passos para a direita e 2 para cima."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Em uma frase"}</MathText>}
          </b>
          {<MathText>{"Translação pelo vetor \\((a,\\,b)\\): ande \\(a\\) na horizontal e \\(b\\) na vertical. "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Todos os pontos da figura"}</MathText>}
          </b>
          {<MathText>{" fazem o mesmo deslocamento."}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"2.2 A regra"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Se o ponto original é \\((x,\\,y)\\), o "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"mesmo deslocamento"}</MathText>}
          </b>
          {<MathText>{" é somado a todos os pontos:"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-indigo-300 bg-[#fffef9] p-5 text-center text-xl"}>
          {<MathText>{"\\[ (x,\\,y) \\;\\longrightarrow\\; (x + a,\\; y + b) \\]"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 1 — Translade o triângulo \\(A(1,1),\\ B(4,1),\\ C(2,3)\\) pelo vetor \\((4,\\,2)\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Regra: \\((x,\\,y) \\to (x + 4,\\; y + 2)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(A'\\): \\((1 + 4,\\; 1 + 2) = (5,\\,3)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(B'\\): \\((4 + 4,\\; 1 + 2) = (8,\\,3)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(C'\\): \\((2 + 4,\\; 3 + 2) = (6,\\,5)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 384 282"} className={"h-auto max-w-full w-[384px]"} role={"img"} aria-label={"Triângulo ABC deslizado pelo vetor (4, 2)"}>
            <line x1={"22"} y1={"260"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"56"} y1={"260"} x2={"56"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"90"} y1={"260"} x2={"90"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"124"} y1={"260"} x2={"124"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"158"} y1={"260"} x2={"158"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"192"} y1={"260"} x2={"192"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"226"} y1={"260"} x2={"226"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"260"} y1={"260"} x2={"260"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"294"} y1={"260"} x2={"294"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"328"} y1={"260"} x2={"328"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"362"} y1={"260"} x2={"362"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"260"} x2={"362"} y2={"260"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"226"} x2={"362"} y2={"226"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"192"} x2={"362"} y2={"192"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"158"} x2={"362"} y2={"158"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"124"} x2={"362"} y2={"124"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"90"} x2={"362"} y2={"90"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"56"} x2={"362"} y2={"56"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"362"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"226"} x2={"362"} y2={"226"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"56"} y1={"260"} x2={"56"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"362,226 355,222 355,230"} fill={"#475569"}></polygon>
            <polygon points={"56,22 52,29 60,29"} fill={"#475569"}></polygon>
            <text x={"360"} y={"217"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"65"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"90"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"124"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"158"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"192"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"226"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"260"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"294"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"7"}
            </text>
            <text x={"328"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"8"}
            </text>
            <text x={"362"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"9"}
            </text>
            <text x={"50"} y={"264"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"50"} y={"196"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"50"} y={"162"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"50"} y={"128"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"50"} y={"94"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"50"} y={"60"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"50"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"6"}
            </text>
            <text x={"50"} y={"239"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polygon points={"90,192 192,192 124,124"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"90"} cy={"192"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"192"} cy={"192"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"124"} cy={"124"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"78.4"} y={"201.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"204.1"} y={"200.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"120.8"} y={"115.4"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <polygon points={"226,124 328,124 260,56"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"226"} cy={"124"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"328"} cy={"124"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"260"} cy={"56"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"214.4"} y={"133.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A′"}
            </text>
            <text x={"340.1"} y={"132.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"B′"}
            </text>
            <text x={"256.8"} y={"47.4"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"C′"}
            </text>
            <line x1={"90"} y1={"192"} x2={"222.4"} y2={"125.8"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"226,124 220.2,130.8 217.0,124.6"} fill={"#94a3b8"}></polygon>
            <line x1={"192"} y1={"192"} x2={"324.4"} y2={"125.8"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"328,124 322.2,130.8 319.0,124.6"} fill={"#94a3b8"}></polygon>
            <line x1={"124"} y1={"124"} x2={"256.4"} y2={"57.8"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"260,56 254.2,62.8 251.0,56.6"} fill={"#94a3b8"}></polygon>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"O triângulo “escorrega” 4 para a direita e 2 para cima. As setas são todas paralelas e do mesmo tamanho."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={4} />
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"2.3 Vetores com sinais negativos"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Um número negativo no vetor significa "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"voltar"}</MathText>}
          </b>
          {<MathText>{": esquerda (para \\(a\\)) ou baixo (para \\(b\\)). Não tenha medo: é só somar números inteiros."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 2 — Mesmo triângulo, vetor \\((-3,\\,-2)\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Regra: \\((x,\\,y) \\to (x - 3,\\; y - 2)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(A'\\): \\((1 - 3,\\; 1 - 2) = (-2,\\,-1)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(B'\\): \\((4 - 3,\\; 1 - 2) = (1,\\,-1)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(C'\\): \\((2 - 3,\\; 3 - 2) = (-1,\\,1)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 384 282"} className={"h-auto max-w-full w-[384px]"} role={"img"} aria-label={"Triângulo ABC deslizado pelo vetor (−3, −2)"}>
            <line x1={"22"} y1={"260"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"56"} y1={"260"} x2={"56"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"90"} y1={"260"} x2={"90"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"124"} y1={"260"} x2={"124"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"158"} y1={"260"} x2={"158"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"192"} y1={"260"} x2={"192"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"226"} y1={"260"} x2={"226"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"260"} y1={"260"} x2={"260"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"294"} y1={"260"} x2={"294"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"328"} y1={"260"} x2={"328"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"362"} y1={"260"} x2={"362"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"260"} x2={"362"} y2={"260"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"226"} x2={"362"} y2={"226"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"192"} x2={"362"} y2={"192"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"158"} x2={"362"} y2={"158"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"124"} x2={"362"} y2={"124"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"90"} x2={"362"} y2={"90"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"56"} x2={"362"} y2={"56"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"362"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"158"} x2={"362"} y2={"158"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"158"} y1={"260"} x2={"158"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"362,158 355,154 355,162"} fill={"#475569"}></polygon>
            <polygon points={"158,22 154,29 162,29"} fill={"#475569"}></polygon>
            <text x={"360"} y={"149"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"167"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-4"}
            </text>
            <text x={"56"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-3"}
            </text>
            <text x={"90"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-2"}
            </text>
            <text x={"124"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"192"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"226"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"260"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"294"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"328"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"362"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"152"} y={"264"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-3"}
            </text>
            <text x={"152"} y={"230"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-2"}
            </text>
            <text x={"152"} y={"196"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"152"} y={"128"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"152"} y={"94"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"152"} y={"60"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"152"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"152"} y={"171"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polygon points={"192,124 294,124 226,56"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"192"} cy={"124"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"294"} cy={"124"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"226"} cy={"56"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"180.4"} y={"133.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"306.1"} y={"132.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"222.8"} y={"47.4"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <polygon points={"90,192 192,192 124,124"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"90"} cy={"192"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"192"} cy={"192"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"124"} cy={"124"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"78.4"} y={"201.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A′"}
            </text>
            <text x={"204.1"} y={"200.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"B′"}
            </text>
            <text x={"120.8"} y={"115.4"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"C′"}
            </text>
            <line x1={"192"} y1={"124"} x2={"93.3"} y2={"189.8"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"90,192 95.0,184.5 98.8,190.3"} fill={"#94a3b8"}></polygon>
            <line x1={"294"} y1={"124"} x2={"195.3"} y2={"189.8"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"192,192 197.0,184.5 200.8,190.3"} fill={"#94a3b8"}></polygon>
            <line x1={"226"} y1={"56"} x2={"127.3"} y2={"121.8"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"124,124 129.0,116.5 132.8,122.3"} fill={"#94a3b8"}></polygon>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Vetor (−3, −2): 3 para a esquerda e 2 para baixo. A figura cruzou o eixo!"}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"2.4 Descobrindo o vetor"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Se você conhece um ponto e a sua imagem, o vetor é a "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"diferença"}</MathText>}
          </b>
          {<MathText>{" entre eles: "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"imagem menos original"}</MathText>}
          </b>
          {<MathText>{", coordenada por coordenada."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-indigo-300 bg-[#fffef9] p-5 text-center text-xl"}>
          {<MathText>{"\\[ a = x' - x \\qquad b = y' - y \\]"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 428 300"} className={"h-auto max-w-full w-[428px]"} role={"img"} aria-label={"Triângulo ABC e a imagem A′B′C′: qual foi o vetor?"}>
            <line x1={"22"} y1={"278"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"54"} y1={"278"} x2={"54"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"86"} y1={"278"} x2={"86"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"118"} y1={"278"} x2={"118"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"150"} y1={"278"} x2={"150"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"182"} y1={"278"} x2={"182"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"214"} y1={"278"} x2={"214"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"246"} y1={"278"} x2={"246"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"278"} y1={"278"} x2={"278"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"310"} y1={"278"} x2={"310"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"342"} y1={"278"} x2={"342"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"374"} y1={"278"} x2={"374"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"406"} y1={"278"} x2={"406"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"278"} x2={"406"} y2={"278"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"246"} x2={"406"} y2={"246"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"214"} x2={"406"} y2={"214"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"182"} x2={"406"} y2={"182"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"150"} x2={"406"} y2={"150"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"118"} x2={"406"} y2={"118"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"86"} x2={"406"} y2={"86"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"54"} x2={"406"} y2={"54"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"406"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"150"} x2={"406"} y2={"150"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"182"} y1={"278"} x2={"182"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"406,150 399,146 399,154"} fill={"#475569"}></polygon>
            <polygon points={"182,22 178,29 186,29"} fill={"#475569"}></polygon>
            <text x={"404"} y={"141"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"191"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"164"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-5"}
            </text>
            <text x={"54"} y={"164"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-4"}
            </text>
            <text x={"86"} y={"164"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-3"}
            </text>
            <text x={"118"} y={"164"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-2"}
            </text>
            <text x={"150"} y={"164"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"214"} y={"164"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"246"} y={"164"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"278"} y={"164"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"310"} y={"164"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"342"} y={"164"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"374"} y={"164"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"406"} y={"164"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"7"}
            </text>
            <text x={"176"} y={"282"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-4"}
            </text>
            <text x={"176"} y={"250"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-3"}
            </text>
            <text x={"176"} y={"218"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-2"}
            </text>
            <text x={"176"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"176"} y={"122"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"176"} y={"90"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"176"} y={"58"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"176"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"176"} y={"163"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polygon points={"54,118 150,118 86,54"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"54"} cy={"118"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"150"} cy={"118"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"86"} cy={"54"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"42.4"} y={"127.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"162.1"} y={"126.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"82.8"} y={"45.4"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <polygon points={"246,214 342,214 278,150"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"246"} cy={"214"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"342"} cy={"214"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"278"} cy={"150"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"234.4"} y={"223.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A′"}
            </text>
            <text x={"354.1"} y={"222.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"B′"}
            </text>
            <text x={"274.8"} y={"141.4"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"C′"}
            </text>
            <line x1={"54"} y1={"118"} x2={"242.4"} y2={"212.2"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"246,214 237.0,213.4 240.2,207.2"} fill={"#94a3b8"}></polygon>
            <line x1={"150"} y1={"118"} x2={"338.4"} y2={"212.2"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"342,214 333.0,213.4 336.2,207.2"} fill={"#94a3b8"}></polygon>
            <line x1={"86"} y1={"54"} x2={"274.4"} y2={"148.2"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"278,150 269.0,149.4 272.2,143.2"} fill={"#94a3b8"}></polygon>
            <text x={"54"} y={"138"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"(−4, 1)"}
            </text>
            <text x={"246"} y={"234"} fontSize={"12"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"(2, −2)"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"O triângulo ABC foi transladado. Qual foi o vetor?"}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 3 — \\(A(-4,\\,1)\\) foi para \\(A'(2,\\,-2)\\). Ache o vetor"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(a = 2 - (-4) = 2 + 4 = 6\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(b = -2 - 1 = -3\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Vetor \\((6,\\,-3)\\): 6 para a direita e 3 para baixo."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Conferência com \\(B(-1,\\,1)\\): \\((-1 + 6,\\; 1 - 3) = (5,\\,-2)\\) ✓ (é o \\(B'\\) da figura)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={5} />
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"2.5 Translação inversa e propriedades"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Para "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"desfazer"}</MathText>}
          </b>
          {<MathText>{" uma translação pelo vetor \\((a,\\,b)\\), aplique o vetor "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"oposto"}</MathText>}
          </b>
          {<MathText>{" \\((-a,\\,-b)\\). Exemplo: o inverso de \\((4,\\,2)\\) é \\((-4,\\,-2)\\)."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <table className={"mt-4 block w-full overflow-x-auto border-collapse text-sm"}>
          <thead>
            <tr>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"O que muda?"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Na translação"}</MathText>}
              </th>
            </tr>
          </thead>
          <tbody>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Posição"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Muda"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Tamanho dos lados, perímetro e área"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Não muda"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Medida dos ângulos"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Não muda"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Direção dos lados (paralelismo)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Cada lado fica "}</MathText>}
                <b className={"font-bold text-slate-900"}>
                  {<MathText>{"paralelo"}</MathText>}
                </b>
                {<MathText>{" ao original"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Orientação (“o lado de cima”)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Não muda: a figura não gira nem vira"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
          </tbody>
        </table>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"2.6 Problemas com texto"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 4 — Um robô está em \\((2,\\,3)\\). Ele anda 5 para a direita e 6 para baixo. Onde ele chega?"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Vetor: direita 5 → \\(a = +5\\); baixo 6 → \\(b = -6\\). Vetor \\((5,\\,-6)\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Chegada: \\((2 + 5,\\; 3 - 6) = (7,\\,-3)\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 5 — Uma peça do tabuleiro vai de \\((4,\\,6)\\) para \\((1,\\,2)\\). Qual foi o vetor?"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(a = 1 - 4 = -3\\) e \\(b = 2 - 6 = -4\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Vetor \\((-3,\\,-4)\\): 3 casas para a esquerda e 4 para baixo."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"2.7 Cuidados"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Erros comuns"}</MathText>}
          </b>
          <ul className={"mt-3 list-disc space-y-1 pl-6 leading-7 text-slate-600"}>
            <li className={"mt-1"}>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"Somar o vetor só a um dos pontos"}</MathText>}
              </b>
              {<MathText>{" e esquecer os outros vértices."}</MathText>}
            </li>
            <li className={"mt-1"}>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"Trocar a ordem:"}</MathText>}
              </b>
              {<MathText>{" o primeiro número do vetor mexe em \\(x\\), o segundo em \\(y\\)."}</MathText>}
            </li>
            <li className={"mt-1"}>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"Subtrair ao contrário"}</MathText>}
              </b>
              {<MathText>{" ao descobrir o vetor: é "}</MathText>}
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"imagem − original"}</MathText>}
              </b>
              {<MathText>{"."}</MathText>}
            </li>
            <li className={"mt-1"}>
              {<MathText>{"Esquecer que “esquerda” e “baixo” são "}</MathText>}
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"negativos"}</MathText>}
              </b>
              {<MathText>{"."}</MathText>}
            </li>
          </ul>
        </div>
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-gotab={"laboratorio"}>
          {<MathText>{"🔬 Abrir o laboratório (Exp. 1 — Translação: deslizando figuras)"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-gotab={"ferramentas"}>
          {<MathText>{"🧮 Calculadora “Translação de pontos”"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-goto={"2"}>
          {<MathText>{"✏️ Fazer os exercícios do nível 2"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
      </article>
      {<MathText>{" "}</MathText>}
      {<MathText>{" "}</MathText>}
      <article className={"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-24 sm:p-8"} id={"l3"}>
        {<MathText>{" "}</MathText>}
        <div className={"text-[.7rem] font-extrabold uppercase tracking-[.12em] text-indigo-600"}>
          {<MathText>{"Lição 3"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h2 className={"mt-1 text-2xl font-black text-slate-800"}>
          {<MathText>{"Reflexão: a figura no espelho"}</MathText>}
        </h2>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Olhe-se em um espelho: sua imagem parece estar do "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"outro lado"}</MathText>}
          </b>
          {<MathText>{", na "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"mesma distância"}</MathText>}
          </b>
          {<MathText>{" do espelho em que você está, e sua mão direita vira a mão esquerda. A "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"reflexão"}</MathText>}
          </b>
          {<MathText>{" faz o mesmo com figuras: o espelho é uma "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"reta"}</MathText>}
          </b>
          {<MathText>{", chamada "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"eixo de reflexão"}</MathText>}
          </b>
          {<MathText>{" (ou eixo de simetria)."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"A ideia"}</MathText>}
          </b>
          {<MathText>{"A imagem de um ponto \\(P\\) é o ponto \\(P'\\) tal que o eixo fica "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"exatamente no meio"}</MathText>}
          </b>
          {<MathText>{" de \\(P\\) e \\(P'\\), e o segmento \\(PP'\\) é "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"perpendicular"}</MathText>}
          </b>
          {<MathText>{" ao eixo. Ou seja: "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"mesma distância do eixo, do outro lado"}</MathText>}
          </b>
          {<MathText>{"."}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"3.1 Contando quadradinhos"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"No papel quadriculado dá para refletir só contando. Exemplo: refletir \\(P(3,\\,2)\\) no "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"eixo x"}</MathText>}
          </b>
          {<MathText>{"."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 1 — Reflexão de \\(P(3,\\,2)\\) no eixo x"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(P\\) está "}</MathText>}
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"2 unidades acima"}</MathText>}
              </b>
              {<MathText>{" do eixo x."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"A imagem fica "}</MathText>}
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"2 unidades abaixo"}</MathText>}
              </b>
              {<MathText>{", na mesma coluna \\(x = 3\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(P'(3,\\,-2)\\). O \\(x\\) ficou igual; o \\(y\\) trocou de sinal."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"3.2 Reflexão nos eixos"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 316 316"} className={"h-auto max-w-full w-[316px]"} role={"img"} aria-label={"Reflexão do triângulo ABC no eixo x"}>
            <line x1={"22"} y1={"294"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"56"} y1={"294"} x2={"56"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"90"} y1={"294"} x2={"90"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"124"} y1={"294"} x2={"124"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"158"} y1={"294"} x2={"158"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"192"} y1={"294"} x2={"192"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"226"} y1={"294"} x2={"226"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"260"} y1={"294"} x2={"260"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"294"} y1={"294"} x2={"294"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"294"} x2={"294"} y2={"294"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"260"} x2={"294"} y2={"260"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"226"} x2={"294"} y2={"226"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"192"} x2={"294"} y2={"192"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"158"} x2={"294"} y2={"158"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"124"} x2={"294"} y2={"124"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"90"} x2={"294"} y2={"90"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"56"} x2={"294"} y2={"56"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"294"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"158"} x2={"294"} y2={"158"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"90"} y1={"294"} x2={"90"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"294,158 287,154 287,162"} fill={"#475569"}></polygon>
            <polygon points={"90,22 86,29 94,29"} fill={"#475569"}></polygon>
            <text x={"292"} y={"149"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"99"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-2"}
            </text>
            <text x={"56"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"124"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"158"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"192"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"226"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"260"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"294"} y={"172"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"84"} y={"298"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-4"}
            </text>
            <text x={"84"} y={"264"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-3"}
            </text>
            <text x={"84"} y={"230"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-2"}
            </text>
            <text x={"84"} y={"196"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"84"} y={"128"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"84"} y={"94"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"84"} y={"60"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"84"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"84"} y={"171"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polygon points={"124,124 226,124 158,56"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"124"} cy={"124"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"226"} cy={"124"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"158"} cy={"56"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"112.4"} y={"133.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"238.1"} y={"132.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"154.8"} y={"47.4"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <polygon points={"124,192 226,192 158,260"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"124"} cy={"192"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"226"} cy={"192"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"158"} cy={"260"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"112.4"} y={"190.2"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A′"}
            </text>
            <text x={"238.1"} y={"191.2"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"B′"}
            </text>
            <text x={"154.8"} y={"276.6"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"C′"}
            </text>
            <line x1={"124"} y1={"124"} x2={"124.0"} y2={"188.0"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"124,192 120.5,183.7 127.5,183.7"} fill={"#94a3b8"}></polygon>
            <line x1={"226"} y1={"124"} x2={"226.0"} y2={"188.0"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"226,192 222.5,183.7 229.5,183.7"} fill={"#94a3b8"}></polygon>
            <line x1={"158"} y1={"56"} x2={"158.0"} y2={"256.0"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"158,260 154.5,251.7 161.5,251.7"} fill={"#94a3b8"}></polygon>
            <text x={"260"} y={"176.7"} fontSize={"12"} fontWeight={"700"} fill={"#475569"} textAnchor={"middle"}>
              {"eixo x"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Reflexão no eixo x: o triângulo “vira” para baixo. O x de cada ponto fica igual e o y troca de sinal."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 2 — Reflexão do triângulo ABC no eixo x"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Regra: \\((x,\\,y) \\to (x,\\,-y)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(A(1,\\,1) \\to A'(1,\\,-1)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(B(4,\\,1) \\to B'(4,\\,-1)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(C(2,\\,3) \\to C'(2,\\,-3)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 452 248"} className={"h-auto max-w-full w-[452px]"} role={"img"} aria-label={"Reflexão do triângulo ABC no eixo y"}>
            <line x1={"22"} y1={"226"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"56"} y1={"226"} x2={"56"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"90"} y1={"226"} x2={"90"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"124"} y1={"226"} x2={"124"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"158"} y1={"226"} x2={"158"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"192"} y1={"226"} x2={"192"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"226"} y1={"226"} x2={"226"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"260"} y1={"226"} x2={"260"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"294"} y1={"226"} x2={"294"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"328"} y1={"226"} x2={"328"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"362"} y1={"226"} x2={"362"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"396"} y1={"226"} x2={"396"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"430"} y1={"226"} x2={"430"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"226"} x2={"430"} y2={"226"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"192"} x2={"430"} y2={"192"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"158"} x2={"430"} y2={"158"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"124"} x2={"430"} y2={"124"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"90"} x2={"430"} y2={"90"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"56"} x2={"430"} y2={"56"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"430"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"192"} x2={"430"} y2={"192"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"226"} y1={"226"} x2={"226"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"430,192 423,188 423,196"} fill={"#475569"}></polygon>
            <polygon points={"226,22 222,29 230,29"} fill={"#475569"}></polygon>
            <text x={"428"} y={"183"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"235"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-6"}
            </text>
            <text x={"56"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-5"}
            </text>
            <text x={"90"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-4"}
            </text>
            <text x={"124"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-3"}
            </text>
            <text x={"158"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-2"}
            </text>
            <text x={"192"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"260"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"294"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"328"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"362"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"396"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"430"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"220"} y={"230"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"220"} y={"162"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"220"} y={"128"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"220"} y={"94"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"220"} y={"60"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"220"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"220"} y={"205"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polygon points={"260,158 362,158 294,90"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"260"} cy={"158"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"362"} cy={"158"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"294"} cy={"90"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"248.4"} y={"167.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"374.1"} y={"166.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"290.8"} y={"81.4"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <polygon points={"192,158 90,158 158,90"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"192"} cy={"158"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"90"} cy={"158"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"158"} cy={"90"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"203.6"} y={"167.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A′"}
            </text>
            <text x={"77.9"} y={"166.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"B′"}
            </text>
            <text x={"161.2"} y={"81.4"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"C′"}
            </text>
            <line x1={"260"} y1={"158"} x2={"196.0"} y2={"158.0"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"192,158 200.3,154.5 200.3,161.5"} fill={"#94a3b8"}></polygon>
            <line x1={"362"} y1={"158"} x2={"94.0"} y2={"158.0"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"90,158 98.3,154.5 98.3,161.5"} fill={"#94a3b8"}></polygon>
            <line x1={"294"} y1={"90"} x2={"162.0"} y2={"90.0"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"158,90 166.3,86.5 166.3,93.5"} fill={"#94a3b8"}></polygon>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Reflexão no eixo y: agora é o x que troca de sinal e o y fica igual."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 3 — Reflexão do triângulo ABC no eixo y"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Regra: \\((x,\\,y) \\to (-x,\\,y)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(A(1,\\,1) \\to A'(-1,\\,1)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(B(4,\\,1) \\to B'(-4,\\,1)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(C(2,\\,3) \\to C'(-2,\\,3)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-amber-500 bg-amber-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Como lembrar"}</MathText>}
          </b>
          {<MathText>{"No eixo "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"x"}</MathText>}
          </b>
          {<MathText>{" o que muda de sinal é o "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"y"}</MathText>}
          </b>
          {<MathText>{" (a coordenada que “sai” do eixo). No eixo "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"y"}</MathText>}
          </b>
          {<MathText>{" o que muda de sinal é o "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"x"}</MathText>}
          </b>
          {<MathText>{". Pergunta de teste: “quem se afasta do espelho?” — essa é a que troca."}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={6} />
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"3.3 Reflexão em uma reta vertical ou horizontal"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"O espelho pode estar em qualquer lugar! Em uma reta "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"vertical"}</MathText>}
          </b>
          {<MathText>{" \\(x = k\\) a regra é \\((x,\\,y) \\to (2k - x,\\; y)\\); em uma reta "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"horizontal"}</MathText>}
          </b>
          {<MathText>{" \\(y = k\\), \\((x,\\,y) \\to (x,\\; 2k - y)\\). Mas você não precisa decorar: dá para "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"contar as distâncias"}</MathText>}
          </b>
          {<MathText>{"."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 384 248"} className={"h-auto max-w-full w-[384px]"} role={"img"} aria-label={"Reflexão do triângulo PQR na reta vertical x = 4"}>
            <line x1={"22"} y1={"226"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"56"} y1={"226"} x2={"56"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"90"} y1={"226"} x2={"90"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"124"} y1={"226"} x2={"124"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"158"} y1={"226"} x2={"158"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"192"} y1={"226"} x2={"192"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"226"} y1={"226"} x2={"226"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"260"} y1={"226"} x2={"260"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"294"} y1={"226"} x2={"294"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"328"} y1={"226"} x2={"328"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"362"} y1={"226"} x2={"362"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"226"} x2={"362"} y2={"226"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"192"} x2={"362"} y2={"192"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"158"} x2={"362"} y2={"158"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"124"} x2={"362"} y2={"124"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"90"} x2={"362"} y2={"90"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"56"} x2={"362"} y2={"56"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"362"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"192"} x2={"362"} y2={"192"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"56"} y1={"226"} x2={"56"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"362,192 355,188 355,196"} fill={"#475569"}></polygon>
            <polygon points={"56,22 52,29 60,29"} fill={"#475569"}></polygon>
            <text x={"360"} y={"183"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"65"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"90"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"124"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"158"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"192"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"226"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"260"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"294"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"7"}
            </text>
            <text x={"328"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"8"}
            </text>
            <text x={"362"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"9"}
            </text>
            <text x={"50"} y={"230"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"50"} y={"162"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"50"} y={"128"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"50"} y={"94"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"50"} y={"60"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"50"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"50"} y={"205"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polygon points={"56,158 158,158 90,90"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"56"} cy={"158"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"158"} cy={"158"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"90"} cy={"90"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"44.4"} y={"167.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"P"}
            </text>
            <text x={"170.1"} y={"166.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"Q"}
            </text>
            <text x={"86.8"} y={"81.4"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"R"}
            </text>
            <polygon points={"328,158 226,158 294,90"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"328"} cy={"158"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"226"} cy={"158"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"294"} cy={"90"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"339.6"} y={"167.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"P′"}
            </text>
            <text x={"213.9"} y={"166.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"Q′"}
            </text>
            <text x={"297.2"} y={"81.4"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"R′"}
            </text>
            <line x1={"192"} y1={"226"} x2={"192"} y2={"22"} stroke={"#f59e0b"} strokeWidth={"2.5"} strokeDasharray={"6 4"}></line>
            <text x={"218"} y={"39"} fontSize={"13"} fontWeight={"700"} fill={"#b45309"} textAnchor={"middle"}>
              {"x = 4"}
            </text>
            <line x1={"56"} y1={"158"} x2={"324.0"} y2={"158.0"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"328,158 319.7,161.5 319.7,154.5"} fill={"#94a3b8"}></polygon>
            <line x1={"158"} y1={"158"} x2={"222.0"} y2={"158.0"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"226,158 217.7,161.5 217.7,154.5"} fill={"#94a3b8"}></polygon>
            <line x1={"90"} y1={"90"} x2={"290.0"} y2={"90.0"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"294,90 285.7,93.5 285.7,86.5"} fill={"#94a3b8"}></polygon>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Espelho na reta x = 4. Cada ponto e a sua imagem estão à mesma distância da reta, em lados opostos."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 4 — Reflita \\(P(0,\\,1)\\), \\(Q(3,\\,1)\\) e \\(R(1,\\,3)\\) na reta \\(x = 4\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Método das distâncias: \\(P\\) está 4 à esquerda da reta → \\(P'\\) fica 4 à direita: \\(x = 4 + 4 = 8\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(Q\\): distância 1 → \\(Q'\\): \\(x = 5\\). \\(R\\): distância 3 → \\(R'\\): \\(x = 7\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Pela regra \\(2k - x = 8 - x\\): \\(8 - 0 = 8\\), \\(8 - 3 = 5\\), \\(8 - 1 = 7\\) ✓. O \\(y\\) não muda."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(P'(8,\\,1),\\ Q'(5,\\,1),\\ R'(7,\\,3)\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 5 — Reflita \\(T(2,\\,1)\\) na reta horizontal \\(y = 3\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(T\\) está 2 unidades "}</MathText>}
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"abaixo"}</MathText>}
              </b>
              {<MathText>{" da reta (de \\(y = 1\\) até \\(y = 3\\))."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"A imagem fica 2 "}</MathText>}
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"acima"}</MathText>}
              </b>
              {<MathText>{": \\(y = 3 + 2 = 5\\). Regra: \\(2 \\cdot 3 - 1 = 5\\) ✓"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(T'(2,\\,5)\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={7} />
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"3.4 Reflexão na reta y = x"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"A reta \\(y = x\\) é a "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"diagonal"}</MathText>}
          </b>
          {<MathText>{" do plano. Refletir nela "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"troca"}</MathText>}
          </b>
          {<MathText>{" as coordenadas: \\((x,\\,y) \\to (y,\\,x)\\)."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 282 282"} className={"h-auto max-w-full w-[282px]"} role={"img"} aria-label={"Reflexão do triângulo ABC na reta y = x"}>
            <line x1={"22"} y1={"260"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"56"} y1={"260"} x2={"56"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"90"} y1={"260"} x2={"90"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"124"} y1={"260"} x2={"124"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"158"} y1={"260"} x2={"158"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"192"} y1={"260"} x2={"192"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"226"} y1={"260"} x2={"226"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"260"} y1={"260"} x2={"260"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"260"} x2={"260"} y2={"260"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"226"} x2={"260"} y2={"226"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"192"} x2={"260"} y2={"192"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"158"} x2={"260"} y2={"158"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"124"} x2={"260"} y2={"124"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"90"} x2={"260"} y2={"90"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"56"} x2={"260"} y2={"56"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"260"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"226"} x2={"260"} y2={"226"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"56"} y1={"260"} x2={"56"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"260,226 253,222 253,230"} fill={"#475569"}></polygon>
            <polygon points={"56,22 52,29 60,29"} fill={"#475569"}></polygon>
            <text x={"258"} y={"217"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"65"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"90"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"124"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"158"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"192"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"226"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"260"} y={"240"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"50"} y={"264"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"50"} y={"196"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"50"} y={"162"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"50"} y={"128"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"50"} y={"94"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"50"} y={"60"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"50"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"6"}
            </text>
            <text x={"50"} y={"239"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polygon points={"90,192 192,192 124,124"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"90"} cy={"192"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"192"} cy={"192"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"124"} cy={"124"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"78.4"} y={"201.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"204.1"} y={"200.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"120.8"} y={"115.4"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <polygon points={"90,192 90,90 158,158"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"90"} cy={"192"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"90"} cy={"90"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"158"} cy={"158"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"84.2"} y={"207.6"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A′"}
            </text>
            <text x={"85.2"} y={"81.9"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"B′"}
            </text>
            <text x={"170.6"} y={"165.2"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"C′"}
            </text>
            <line x1={"90"} y1={"192"} x2={"86.0"} y2={"192.0"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"90,192 81.7,195.5 81.7,188.5"} fill={"#94a3b8"}></polygon>
            <line x1={"192"} y1={"192"} x2={"92.8"} y2={"92.8"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"90,90 98.3,93.4 93.4,98.3"} fill={"#94a3b8"}></polygon>
            <line x1={"124"} y1={"124"} x2={"155.2"} y2={"155.2"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"5 4"}></line>
            <polygon points={"158,158 149.7,154.6 154.6,149.7"} fill={"#94a3b8"}></polygon>
            <line x1={"22"} y1={"260"} x2={"260"} y2={"22"} stroke={"#f59e0b"} strokeWidth={"2.5"} strokeDasharray={"6 4"}></line>
            <text x={"220"} y={"35.6"} fontSize={"13"} fontWeight={"700"} fill={"#b45309"} textAnchor={"end"}>
              {"y = x"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Reflexão na diagonal y = x: \\(A(1,1)\\) fica no lugar (está sobre o espelho), \\(B(4,1)\\) vira \\(B'(1,4)\\), \\(C(2,3)\\) vira \\(C'(3,2)\\)."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"3.5 O que a reflexão faz"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 384 316"} className={"h-auto max-w-full w-[384px]"} role={"img"} aria-label={"A letra F e a sua reflexão no eixo y: a imagem fica ao contrário"}>
            <line x1={"22"} y1={"294"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"56"} y1={"294"} x2={"56"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"90"} y1={"294"} x2={"90"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"124"} y1={"294"} x2={"124"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"158"} y1={"294"} x2={"158"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"192"} y1={"294"} x2={"192"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"226"} y1={"294"} x2={"226"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"260"} y1={"294"} x2={"260"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"294"} y1={"294"} x2={"294"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"328"} y1={"294"} x2={"328"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"362"} y1={"294"} x2={"362"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"294"} x2={"362"} y2={"294"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"260"} x2={"362"} y2={"260"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"226"} x2={"362"} y2={"226"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"192"} x2={"362"} y2={"192"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"158"} x2={"362"} y2={"158"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"124"} x2={"362"} y2={"124"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"90"} x2={"362"} y2={"90"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"56"} x2={"362"} y2={"56"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"362"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"260"} x2={"362"} y2={"260"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"192"} y1={"294"} x2={"192"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"362,260 355,256 355,264"} fill={"#475569"}></polygon>
            <polygon points={"192,22 188,29 196,29"} fill={"#475569"}></polygon>
            <text x={"360"} y={"251"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"201"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"274"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-5"}
            </text>
            <text x={"56"} y={"274"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-4"}
            </text>
            <text x={"90"} y={"274"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-3"}
            </text>
            <text x={"124"} y={"274"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-2"}
            </text>
            <text x={"158"} y={"274"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"226"} y={"274"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"260"} y={"274"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"294"} y={"274"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"328"} y={"274"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"362"} y={"274"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"186"} y={"298"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"186"} y={"230"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"186"} y={"196"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"186"} y={"162"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"186"} y={"128"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"186"} y={"94"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"186"} y={"60"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"6"}
            </text>
            <text x={"186"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"7"}
            </text>
            <text x={"186"} y={"273"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polygon points={"226,226 260,226 260,158 294,158 294,124 260,124 260,90 328,90 328,56 226,56"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"226"} cy={"226"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"260"} cy={"226"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"260"} cy={"158"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"294"} cy={"158"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"294"} cy={"124"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"260"} cy={"124"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"260"} cy={"90"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"328"} cy={"90"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"328"} cy={"56"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"226"} cy={"56"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"220.2"} y={"241.6"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <polygon points={"158,226 124,226 124,158 90,158 90,124 124,124 124,90 56,90 56,56 158,56"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"158"} cy={"226"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"124"} cy={"226"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"124"} cy={"158"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"90"} cy={"158"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"90"} cy={"124"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"124"} cy={"124"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"124"} cy={"90"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"56"} cy={"90"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"56"} cy={"56"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"158"} cy={"56"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"163.8"} y={"241.6"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A′"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Observe a letra F. Se você girar a imagem, nunca conseguirá colocá-la sobre a original: ela está “ao contrário”."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <table className={"mt-4 block w-full overflow-x-auto border-collapse text-sm"}>
          <thead>
            <tr>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"O que muda?"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Na reflexão"}</MathText>}
              </th>
            </tr>
          </thead>
          <tbody>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Comprimentos e ângulos"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Não mudam (é isometria)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Pontos sobre o eixo"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Ficam "}</MathText>}
                <b className={"font-bold text-slate-900"}>
                  {<MathText>{"fixos"}</MathText>}
                </b>
                {<MathText>{" (distância 0 do espelho)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Orientação"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                <b className={"font-bold text-slate-900"}>
                  {<MathText>{"Inverte"}</MathText>}
                </b>
                {<MathText>{": sentido horário vira anti-horário"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Figura simétrica"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Se a imagem coincide com a figura, o eixo é um "}</MathText>}
                <b className={"font-bold text-slate-900"}>
                  {<MathText>{"eixo de simetria"}</MathText>}
                </b>
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
          </tbody>
        </table>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"3.6 Cuidados"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Erros comuns"}</MathText>}
          </b>
          <ul className={"mt-3 list-disc space-y-1 pl-6 leading-7 text-slate-600"}>
            <li className={"mt-1"}>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"Trocar o sinal da coordenada errada"}</MathText>}
              </b>
              {<MathText>{" (eixo x muda y; eixo y muda x)."}</MathText>}
            </li>
            <li className={"mt-1"}>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"Contar a distância só até o eixo"}</MathText>}
              </b>
              {<MathText>{" e esquecer de contar o mesmo tanto "}</MathText>}
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"do outro lado"}</MathText>}
              </b>
              {<MathText>{"."}</MathText>}
            </li>
            <li className={"mt-1"}>
              {<MathText>{"Em \\(x = k\\), mexer no \\(y\\): o \\(y\\) "}</MathText>}
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"não muda"}</MathText>}
              </b>
              {<MathText>{" (o espelho é vertical)."}</MathText>}
            </li>
            <li className={"mt-1"}>
              {<MathText>{"Confundir reflexão com translação: na reflexão a figura “vira”."}</MathText>}
            </li>
          </ul>
        </div>
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-gotab={"laboratorio"}>
          {<MathText>{"🔬 Abrir o laboratório (Exp. 2 — Reflexão: o espelho)"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-gotab={"ferramentas"}>
          {<MathText>{"🧮 Calculadora “Reflexão de pontos”"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-goto={"3"}>
          {<MathText>{"✏️ Fazer os exercícios do nível 3"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
      </article>
      {<MathText>{" "}</MathText>}
      {<MathText>{" "}</MathText>}
      <article className={"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-24 sm:p-8"} id={"l4"}>
        {<MathText>{" "}</MathText>}
        <div className={"text-[.7rem] font-extrabold uppercase tracking-[.12em] text-indigo-600"}>
          {<MathText>{"Lição 4"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h2 className={"mt-1 text-2xl font-black text-slate-800"}>
          {<MathText>{"Rotação: girar a figura"}</MathText>}
        </h2>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"A porta, a roda-gigante e os ponteiros do relógio "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"giram"}</MathText>}
          </b>
          {<MathText>{" em torno de um ponto fixo. Uma "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"rotação"}</MathText>}
          </b>
          {<MathText>{" precisa de três informações: o "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"centro"}</MathText>}
          </b>
          {<MathText>{" do giro, o "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"ângulo"}</MathText>}
          </b>
          {<MathText>{" e o "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"sentido"}</MathText>}
          </b>
          {<MathText>{". O centro não sai do lugar; todos os outros pontos andam em arcos."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"4.1 O sentido do giro"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 400 180"} className={"h-auto max-w-full w-[400px]"} role={"img"} aria-label={"Relógio com ponteiro girando de 12 para 3: sentido horário, ângulo negativo"}>
            <circle cx={"90"} cy={"90"} r={"64"} fill={"#fff"} stroke={"#1e293b"} strokeWidth={"3"}></circle>
            <line x1={"90.0"} y1={"32.0"} x2={"90.0"} y2={"42.0"} stroke={"#1e293b"} strokeWidth={"2"}></line>
            <line x1={"119.0"} y1={"39.8"} x2={"116.0"} y2={"45.0"} stroke={"#1e293b"} strokeWidth={"2"}></line>
            <line x1={"140.2"} y1={"61.0"} x2={"135.0"} y2={"64.0"} stroke={"#1e293b"} strokeWidth={"2"}></line>
            <line x1={"148.0"} y1={"90.0"} x2={"138.0"} y2={"90.0"} stroke={"#1e293b"} strokeWidth={"2"}></line>
            <line x1={"140.2"} y1={"119.0"} x2={"135.0"} y2={"116.0"} stroke={"#1e293b"} strokeWidth={"2"}></line>
            <line x1={"119.0"} y1={"140.2"} x2={"116.0"} y2={"135.0"} stroke={"#1e293b"} strokeWidth={"2"}></line>
            <line x1={"90.0"} y1={"148.0"} x2={"90.0"} y2={"138.0"} stroke={"#1e293b"} strokeWidth={"2"}></line>
            <line x1={"61.0"} y1={"140.2"} x2={"64.0"} y2={"135.0"} stroke={"#1e293b"} strokeWidth={"2"}></line>
            <line x1={"39.8"} y1={"119.0"} x2={"45.0"} y2={"116.0"} stroke={"#1e293b"} strokeWidth={"2"}></line>
            <line x1={"32.0"} y1={"90.0"} x2={"42.0"} y2={"90.0"} stroke={"#1e293b"} strokeWidth={"2"}></line>
            <line x1={"39.8"} y1={"61.0"} x2={"45.0"} y2={"64.0"} stroke={"#1e293b"} strokeWidth={"2"}></line>
            <line x1={"61.0"} y1={"39.8"} x2={"64.0"} y2={"45.0"} stroke={"#1e293b"} strokeWidth={"2"}></line>
            <line x1={"90"} y1={"90"} x2={"90"} y2={"40"} stroke={"#4f46e5"} strokeWidth={"4"} strokeLinecap={"round"}></line>
            <line x1={"90"} y1={"90"} x2={"140"} y2={"90"} stroke={"#ec4899"} strokeWidth={"4"} strokeLinecap={"round"} strokeDasharray={"1 0"}></line>
            <circle cx={"90"} cy={"90"} r={"4"} fill={"#1e293b"}></circle>
            <path d={"M 94 60 A 30 30 0 0 1 120 86"} fill={"none"} stroke={"#f59e0b"} strokeWidth={"3"}></path>
            <polygon points={"120,93 113,85 127,85"} fill={"#f59e0b"}></polygon>
            <text x={"200"} y={"60"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              {"O ponteiro foi de 12 até 3:"}
            </text>
            <text x={"200"} y={"80"} fontSize={"13"} fontWeight={"700"} fill={"#b45309"}>
              {"sentido horário"}
            </text>
            <text x={"200"} y={"100"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              {"= ângulo negativo, −90°"}
            </text>
            <text x={"200"} y={"130"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              {"Contrário ao relógio:"}
            </text>
            <text x={"200"} y={"150"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              {"anti-horário = positivo"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Convenção da matemática: giro contrário ao dos ponteiros do relógio (anti-horário) é POSITIVO."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Combinado"}</MathText>}
          </b>
          {<MathText>{"Neste curso (e em toda a matemática): ângulo "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"positivo"}</MathText>}
          </b>
          {<MathText>{" = sentido "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"anti-horário"}</MathText>}
          </b>
          {<MathText>{"; ângulo "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"negativo"}</MathText>}
          </b>
          {<MathText>{" = sentido "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"horário"}</MathText>}
          </b>
          {<MathText>{". Então \\(-90^\\circ\\) gira 90° como os ponteiros do relógio."}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"4.2 Rotação de 90° em torno da origem: por quê?"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Vamos girar o ponto \\(P(3,\\,1)\\) em \\(90^\\circ\\) em torno da origem \\(O\\). Veja o “triangulinho” que liga \\(O\\) a \\(P\\): ele tem 3 para a direita e 1 para cima. Quando giramos 90° anti-horário, o eixo “direita” vira o eixo “cima” e o eixo “cima” vira “esquerda”:"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 396 308"} className={"h-auto max-w-full w-[396px]"} role={"img"} aria-label={"O ponto P(3, 1) gira 90° em torno da origem e vai para P′(−1, 3)"}>
            <line x1={"22"} y1={"286"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"66"} y1={"286"} x2={"66"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"110"} y1={"286"} x2={"110"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"154"} y1={"286"} x2={"154"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"198"} y1={"286"} x2={"198"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"242"} y1={"286"} x2={"242"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"286"} y1={"286"} x2={"286"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"330"} y1={"286"} x2={"330"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"374"} y1={"286"} x2={"374"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"286"} x2={"374"} y2={"286"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"242"} x2={"374"} y2={"242"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"198"} x2={"374"} y2={"198"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"154"} x2={"374"} y2={"154"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"110"} x2={"374"} y2={"110"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"66"} x2={"374"} y2={"66"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"374"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"242"} x2={"374"} y2={"242"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"154"} y1={"286"} x2={"154"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"374,242 367,238 367,246"} fill={"#475569"}></polygon>
            <polygon points={"154,22 150,29 158,29"} fill={"#475569"}></polygon>
            <text x={"372"} y={"233"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"163"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"256"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-3"}
            </text>
            <text x={"66"} y={"256"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-2"}
            </text>
            <text x={"110"} y={"256"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"198"} y={"256"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"242"} y={"256"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"286"} y={"256"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"330"} y={"256"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"374"} y={"256"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"148"} y={"290"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"148"} y={"202"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"148"} y={"158"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"148"} y={"114"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"148"} y={"70"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"148"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"148"} y={"255"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polygon points={"154,242 286,242 286,198"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"154"} cy={"242"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"286"} cy={"242"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"286"} cy={"198"} r={"3.6"} fill={"#4f46e5"}></circle>
            <polygon points={"154,242 154,110 110,110"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"154"} cy={"242"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"154"} cy={"110"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"110"} cy={"110"} r={"3.6"} fill={"#ec4899"}></circle>
            <polyline points={"286,198 280.2,183.5 272.9,169.7 264.1,156.9 253.8,145.1 242.4,134.5 229.8,125.3 216.2,117.5 201.9,111.4 187,106.8 171.6,104 156.1,102.9 140.5,103.5 125.1,105.9 110,110"} fill={"none"} stroke={"#f59e0b"} strokeWidth={"2.5"} strokeDasharray={"5 4"}></polyline>
            <text x={"292"} y={"189"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"start"}>
              {"P(3, 1)"}
            </text>
            <text x={"96"} y={"101"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"end"}>
              {"P′(−1, 3)"}
            </text>
            <text x={"144"} y={"258"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"O"}
            </text>
            <text x={"224.4"} y={"258"} fontSize={"12"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"298"} y={"224"} fontSize={"12"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"142"} y={"175.6"} fontSize={"12"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"132"} y={"102"} fontSize={"12"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"1"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"O triângulo do ponto girou junto: os 3 que iam para a direita agora vão para cima, e o 1 que ia para cima agora vai para a esquerda. Resultado: P′(−1, 3)."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <ul className={"mt-3 list-disc space-y-1 pl-6 leading-7 text-slate-600"}>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"3 para a direita → "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"3 para cima"}</MathText>}
            </b>
            {<MathText>{" (vira o novo \\(y\\));"}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"1 para cima → "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"1 para a esquerda"}</MathText>}
            </b>
            {<MathText>{" (vira o novo \\(x\\), negativo)."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
        </ul>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Resultado: \\(P'(-1,\\,3)\\). A regra geral, “"}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"troca e muda um sinal"}</MathText>}
          </b>
          {<MathText>{"”:"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-indigo-300 bg-[#fffef9] p-5 text-center text-xl"}>
          {<MathText>{"\\[ R_{90^\\circ}:\\ (x,\\,y) \\longrightarrow (-y,\\; x) \\]"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"As outras rotações em torno da origem são giros de 90° repetidos:"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <table className={"mt-4 block w-full overflow-x-auto border-collapse text-sm"}>
          <thead>
            <tr>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Ângulo (anti-horário)"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Regra"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Exemplo com \\((3,\\,1)\\)"}</MathText>}
              </th>
            </tr>
          </thead>
          <tbody>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(90^\\circ\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((x,\\,y) \\to (-y,\\ x)\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((-1,\\ 3)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(180^\\circ\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((x,\\,y) \\to (-x,\\ -y)\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((-3,\\ -1)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(270^\\circ\\) (= \\(-90^\\circ\\))"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((x,\\,y) \\to (y,\\ -x)\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((1,\\ -3)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(360^\\circ\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((x,\\,y) \\to (x,\\ y)\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((3,\\ 1)\\) — não muda nada!"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
          </tbody>
        </table>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-amber-500 bg-amber-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Dica de memória"}</MathText>}
          </b>
          {<MathText>{"90° e 270° "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"trocam"}</MathText>}
          </b>
          {<MathText>{" as posições de \\(x\\) e \\(y\\) (e um fica negativo). 180° "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"não troca"}</MathText>}
          </b>
          {<MathText>{": só muda os dois sinais. 180° é “virar de ponta-cabeça”."}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={8} />
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"4.3 Girando um triângulo"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 324 324"} className={"h-auto max-w-full w-[324px]"} role={"img"} aria-label={"Triângulo ABC e as rotações de 90°, 180° e 270° em torno da origem"}>
            <line x1={"22"} y1={"302"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"50"} y1={"302"} x2={"50"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"78"} y1={"302"} x2={"78"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"106"} y1={"302"} x2={"106"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"134"} y1={"302"} x2={"134"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"162"} y1={"302"} x2={"162"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"190"} y1={"302"} x2={"190"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"218"} y1={"302"} x2={"218"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"246"} y1={"302"} x2={"246"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"274"} y1={"302"} x2={"274"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"302"} y1={"302"} x2={"302"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"302"} x2={"302"} y2={"302"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"274"} x2={"302"} y2={"274"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"246"} x2={"302"} y2={"246"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"218"} x2={"302"} y2={"218"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"190"} x2={"302"} y2={"190"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"162"} x2={"302"} y2={"162"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"134"} x2={"302"} y2={"134"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"106"} x2={"302"} y2={"106"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"78"} x2={"302"} y2={"78"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"50"} x2={"302"} y2={"50"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"302"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"162"} x2={"302"} y2={"162"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"162"} y1={"302"} x2={"162"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"302,162 295,158 295,166"} fill={"#475569"}></polygon>
            <polygon points={"162,22 158,29 166,29"} fill={"#475569"}></polygon>
            <text x={"300"} y={"153"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"171"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"176"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-5"}
            </text>
            <text x={"50"} y={"176"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-4"}
            </text>
            <text x={"78"} y={"176"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-3"}
            </text>
            <text x={"106"} y={"176"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-2"}
            </text>
            <text x={"134"} y={"176"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"190"} y={"176"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"218"} y={"176"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"246"} y={"176"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"274"} y={"176"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"302"} y={"176"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"156"} y={"306"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-5"}
            </text>
            <text x={"156"} y={"278"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-4"}
            </text>
            <text x={"156"} y={"250"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-3"}
            </text>
            <text x={"156"} y={"222"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-2"}
            </text>
            <text x={"156"} y={"194"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"156"} y={"138"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"156"} y={"110"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"156"} y={"82"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"156"} y={"54"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"156"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"156"} y={"175"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polygon points={"190,134 274,134 218,78"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"190"} cy={"134"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"274"} cy={"134"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"218"} cy={"78"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"178.4"} y={"143.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"286.1"} y={"142.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"214.8"} y={"69.4"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <polygon points={"134,134 134,50 78,106"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"134"} cy={"134"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"134"} cy={"50"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"78"} cy={"106"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"139.8"} y={"149.6"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A′"}
            </text>
            <text x={"138.8"} y={"41.9"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"B′"}
            </text>
            <text x={"65.4"} y={"113.2"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"C′"}
            </text>
            <polygon points={"134,190 50,190 106,246"} fill={"#dcfce7"} fill-opacity={"0.85"} stroke={"#16a34a"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"134"} cy={"190"} r={"3.6"} fill={"#16a34a"}></circle>
            <circle cx={"50"} cy={"190"} r={"3.6"} fill={"#16a34a"}></circle>
            <circle cx={"106"} cy={"246"} r={"3.6"} fill={"#16a34a"}></circle>
            <text x={"145.6"} y={"188.2"} fontSize={"14"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"A″"}
            </text>
            <text x={"37.9"} y={"189.2"} fontSize={"14"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"B″"}
            </text>
            <text x={"109.2"} y={"262.6"} fontSize={"14"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"C″"}
            </text>
            <polygon points={"190,190 190,274 246,218"} fill={"#fef3c7"} fill-opacity={"0.85"} stroke={"#f59e0b"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"190"} cy={"190"} r={"3.6"} fill={"#f59e0b"}></circle>
            <circle cx={"190"} cy={"274"} r={"3.6"} fill={"#f59e0b"}></circle>
            <circle cx={"246"} cy={"218"} r={"3.6"} fill={"#f59e0b"}></circle>
            <text x={"184.2"} y={"182.4"} fontSize={"14"} fontWeight={"700"} fill={"#f59e0b"} textAnchor={"middle"}>
              {"A‴"}
            </text>
            <text x={"185.2"} y={"290.1"} fontSize={"14"} fontWeight={"700"} fill={"#f59e0b"} textAnchor={"middle"}>
              {"B‴"}
            </text>
            <text x={"258.6"} y={"218.8"} fontSize={"14"} fontWeight={"700"} fill={"#f59e0b"} textAnchor={"middle"}>
              {"C‴"}
            </text>
            <text x={"227.3"} y={"119.3"} fontSize={"11"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"0°"}
            </text>
            <text x={"115.3"} y={"100.7"} fontSize={"11"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"90°"}
            </text>
            <text x={"96.7"} y={"212.7"} fontSize={"11"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"180°"}
            </text>
            <text x={"208.7"} y={"231.3"} fontSize={"11"} fontWeight={"700"} fill={"#b45309"} textAnchor={"middle"}>
              {"270°"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"O triângulo ABC e suas rotações de 90° (rosa), 180° (verde) e 270° (amarelo) em torno da origem."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 1 — Gire \\(A(1,1),\\ B(4,1),\\ C(2,3)\\) em \\(90^\\circ\\) em torno de \\(O\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Regra: \\((x,\\,y) \\to (-y,\\ x)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(A'\\): \\((-1,\\ 1)\\) \\(B'\\): \\((-1,\\ 4)\\) \\(C'\\): \\((-3,\\ 2)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Com 180°, \\((x,\\,y) \\to (-x,\\,-y)\\): \\(A''(-1,\\,-1)\\), \\(B''(-4,\\,-1)\\), \\(C''(-2,\\,-3)\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Com 270°, \\((x,\\,y) \\to (y,\\,-x)\\): \\(A'''(1,\\,-1)\\), \\(B'''(1,\\,-4)\\), \\(C'''(3,\\,-2)\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-emerald-500 bg-emerald-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Rotação de −90°?"}</MathText>}
          </b>
          {<MathText>{"Girar \\(-90^\\circ\\) (horário) leva ao mesmo lugar que girar \\(270^\\circ\\) anti-horário: a regra é \\((x,\\,y) \\to (y,\\,-x)\\). E girar \\(450^\\circ\\) é \\(360^\\circ + 90^\\circ\\): igual a \\(90^\\circ\\)."}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={9} />
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"4.4 Rotação em torno de outro centro"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"E se o centro não for a origem? Use "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"três passos"}</MathText>}
          </b>
          {<MathText>{": (1) calcule o vetor do centro até o ponto; (2) gire esse vetor com a regra da origem; (3) some o resultado de volta às coordenadas do centro."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 404 296"} className={"h-auto max-w-full w-[404px]"} role={"img"} aria-label={"Rotação de 90° do triângulo ABC em torno do centro Q(1, 1)"}>
            <line x1={"22"} y1={"274"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"58"} y1={"274"} x2={"58"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"94"} y1={"274"} x2={"94"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"130"} y1={"274"} x2={"130"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"166"} y1={"274"} x2={"166"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"202"} y1={"274"} x2={"202"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"238"} y1={"274"} x2={"238"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"274"} y1={"274"} x2={"274"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"310"} y1={"274"} x2={"310"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"346"} y1={"274"} x2={"346"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"382"} y1={"274"} x2={"382"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"274"} x2={"382"} y2={"274"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"238"} x2={"382"} y2={"238"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"202"} x2={"382"} y2={"202"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"166"} x2={"382"} y2={"166"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"130"} x2={"382"} y2={"130"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"94"} x2={"382"} y2={"94"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"58"} x2={"382"} y2={"58"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"382"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"238"} x2={"382"} y2={"238"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"130"} y1={"274"} x2={"130"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"382,238 375,234 375,242"} fill={"#475569"}></polygon>
            <polygon points={"130,22 126,29 134,29"} fill={"#475569"}></polygon>
            <text x={"380"} y={"229"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"139"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"252"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-3"}
            </text>
            <text x={"58"} y={"252"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-2"}
            </text>
            <text x={"94"} y={"252"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"166"} y={"252"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"202"} y={"252"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"238"} y={"252"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"274"} y={"252"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"310"} y={"252"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"346"} y={"252"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"382"} y={"252"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"7"}
            </text>
            <text x={"124"} y={"278"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"124"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"124"} y={"170"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"124"} y={"134"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"124"} y={"98"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"124"} y={"62"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"124"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"6"}
            </text>
            <text x={"124"} y={"251"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polygon points={"238,202 310,202 238,130"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"238"} cy={"202"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"310"} cy={"202"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"238"} cy={"130"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"228.8"} y={"215.2"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"321.6"} y={"211.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"232.2"} y={"122.4"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <polygon points={"166,130 166,58 94,130"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"166"} cy={"130"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"166"} cy={"58"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"94"} cy={"130"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"175.2"} y={"143.2"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A′"}
            </text>
            <text x={"171.8"} y={"50.4"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"B′"}
            </text>
            <text x={"82.4"} y={"139.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"C′"}
            </text>
            <circle cx={"166"} cy={"202"} r={"6"} fill={"#1e293b"}></circle>
            <line x1={"166"} y1={"202"} x2={"234.0"} y2={"202.0"} stroke={"#94a3b8"} strokeWidth={"1.8"} strokeDasharray={"5 4"}></line>
            <polygon points={"238,202 229.7,205.5 229.7,198.5"} fill={"#94a3b8"}></polygon>
            <line x1={"166"} y1={"202"} x2={"166.0"} y2={"134.0"} stroke={"#94a3b8"} strokeWidth={"1.8"} strokeDasharray={"5 4"}></line>
            <polygon points={"166,130 169.5,138.3 162.5,138.3"} fill={"#94a3b8"}></polygon>
            <text x={"156"} y={"218"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"Q"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Rotação de 90° em torno do centro Q(1, 1). Os vetores de Q até A e de Q até A′ formam um ângulo reto."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 2 — Gire \\(A(3,1),\\ B(5,1),\\ C(3,3)\\) em \\(90^\\circ\\) em torno de \\(Q(1,\\,1)\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"1)"}</MathText>}
              </b>
              {<MathText>{" Vetores a partir de \\(Q\\): \\(A\\): \\((3-1,\\ 1-1) = (2,\\,0)\\); \\(B\\): \\((4,\\,0)\\); \\(C\\): \\((2,\\,2)\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"2)"}</MathText>}
              </b>
              {<MathText>{" Gire com \\((x,y) \\to (-y,\\,x)\\): \\((0,\\,2)\\); \\((0,\\,4)\\); \\((-2,\\,2)\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"3)"}</MathText>}
              </b>
              {<MathText>{" Some \\(Q(1,\\,1)\\): \\(A'(1,\\,3)\\); \\(B'(1,\\,5)\\); \\(C'(-1,\\,3)\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"4.5 Simetria de rotação"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Uma figura tem "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"simetria de rotação"}</MathText>}
          </b>
          {<MathText>{" quando, ao girar em torno do seu centro por um certo ângulo (menor que 360°), ela "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"cai exatamente sobre si mesma"}</MathText>}
          </b>
          {<MathText>{". A "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"ordem"}</MathText>}
          </b>
          {<MathText>{" é quantas vezes isso acontece em uma volta completa."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 440 200"} className={"h-auto max-w-full w-[440px]"} role={"img"} aria-label={"Quadrado com vértices numerados que coincide consigo mesmo a cada giro de 90°"}>
            <rect x={"60"} y={"45"} width={"100"} height={"100"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"}></rect>
            <circle cx={"110"} cy={"95"} r={"4"} fill={"#1e293b"}></circle>
            <text x={"50"} y={"41"} textAnchor={"end"} fontSize={"15"} fontWeight={"700"} fill={"#ec4899"}>
              {"1"}
            </text>
            <text x={"170"} y={"41"} textAnchor={"start"} fontSize={"15"} fontWeight={"700"} fill={"#ec4899"}>
              {"2"}
            </text>
            <text x={"170"} y={"159"} textAnchor={"start"} fontSize={"15"} fontWeight={"700"} fill={"#ec4899"}>
              {"3"}
            </text>
            <text x={"50"} y={"159"} textAnchor={"end"} fontSize={"15"} fontWeight={"700"} fill={"#ec4899"}>
              {"4"}
            </text>
            <path d={"M 136 95 A 26 26 0 0 0 110 69"} fill={"none"} stroke={"#f59e0b"} strokeWidth={"3"}></path>
            <polygon points={"110,62 118,69 110,76"} fill={"#f59e0b"}></polygon>
            <text x={"130"} y={"63"} fontSize={"12"} fontWeight={"700"} fill={"#b45309"}>
              {"90°"}
            </text>
            <text x={"205"} y={"60"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              {"0° → vértice 1 no lugar do 1"}
            </text>
            <text x={"205"} y={"84"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              {"90° → o 4 vai ao lugar do 1"}
            </text>
            <text x={"205"} y={"108"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              {"180° → o 3 vai ao lugar do 1"}
            </text>
            <text x={"205"} y={"132"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              {"270° → o 2 vai ao lugar do 1"}
            </text>
            <text x={"205"} y={"160"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              {"Em cada giro o quadrado “cai”"}
            </text>
            <text x={"205"} y={"178"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              {"em cima de si mesmo: ordem 4"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"O quadrado coincide com ele mesmo a cada 90°: simetria de rotação de ordem 4."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <table className={"mt-4 block w-full overflow-x-auto border-collapse text-sm"}>
          <thead>
            <tr>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Figura"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Menor giro"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Ordem"}</MathText>}
              </th>
            </tr>
          </thead>
          <tbody>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Triângulo equilátero"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(120^\\circ\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"3"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Quadrado"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(90^\\circ\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"4"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Hexágono regular"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(60^\\circ\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"6"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Retângulo (não quadrado)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(180^\\circ\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"2"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
          </tbody>
        </table>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Para um polígono regular de \\(n\\) lados: menor giro \\(= 360^\\circ \\div n\\) e a ordem é \\(n\\)."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"4.6 No papel, com compasso e transferidor"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <ol className={"mt-3 list-decimal space-y-1 pl-6 leading-7 text-slate-600"}>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"Marque o centro \\(O\\) e o ponto \\(P\\); ligue \\(O\\) a \\(P\\)."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"Com o "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"transferidor"}</MathText>}
            </b>
            {<MathText>{" centrado em \\(O\\), marque o ângulo desejado (anti-horário) a partir de \\(OP\\)."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"Com o "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"compasso"}</MathText>}
            </b>
            {<MathText>{" em \\(O\\) e abertura \\(OP\\), marque \\(P'\\) sobre a nova semirreta: \\(OP' = OP\\)."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"Repita para cada vértice e ligue as imagens."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
        </ol>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"4.7 Cuidados"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Erros comuns"}</MathText>}
          </b>
          <ul className={"mt-3 list-disc space-y-1 pl-6 leading-7 text-slate-600"}>
            <li className={"mt-1"}>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"Girar para o lado errado:"}</MathText>}
              </b>
              {<MathText>{" positivo é "}</MathText>}
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"anti-horário"}</MathText>}
              </b>
              {<MathText>{"."}</MathText>}
            </li>
            <li className={"mt-1"}>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"Esquecer de trocar de lugar"}</MathText>}
              </b>
              {<MathText>{" \\(x\\) e \\(y\\) em 90° e 270°."}</MathText>}
            </li>
            <li className={"mt-1"}>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"Mudar o sinal errado:"}</MathText>}
              </b>
              {<MathText>{" 90° → \\((-y,\\,x)\\); 270° → \\((y,\\,-x)\\). Teste com \\((1,0)\\): 90° deve ir para \\((0,1)\\), em cima."}</MathText>}
            </li>
            <li className={"mt-1"}>
              {<MathText>{"Com centro fora da origem, "}</MathText>}
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"esquecer de somar o centro de volta"}</MathText>}
              </b>
              {<MathText>{"."}</MathText>}
            </li>
          </ul>
        </div>
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-gotab={"laboratorio"}>
          {<MathText>{"🔬 Abrir o laboratório (Exp. 3 — Rotação: girando a figura)"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-gotab={"ferramentas"}>
          {<MathText>{"🧮 Calculadora “Rotação de pontos”"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-goto={"4"}>
          {<MathText>{"✏️ Fazer os exercícios do nível 4"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
      </article>
      {<MathText>{" "}</MathText>}
      {<MathText>{" "}</MathText>}
      <article className={"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-24 sm:p-8"} id={"l5"}>
        {<MathText>{" "}</MathText>}
        <div className={"text-[.7rem] font-extrabold uppercase tracking-[.12em] text-indigo-600"}>
          {<MathText>{"Lição 5"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h2 className={"mt-1 text-2xl font-black text-slate-800"}>
          {<MathText>{"Homotetia: ampliar e reduzir"}</MathText>}
        </h2>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Você já viu três transformações que "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"mudam a posição"}</MathText>}
          </b>
          {<MathText>{" de uma figura sem mudar seu tamanho: a "}</MathText>}
          <a href={"#l2"} data-lesson={"l2"} className={"underline font-bold text-indigo-700"}>
            {<MathText>{"translação"}</MathText>}
          </a>
          {<MathText>{", a "}</MathText>}
          <a href={"#l3"} data-lesson={"l3"} className={"underline font-bold text-indigo-700"}>
            {<MathText>{"reflexão"}</MathText>}
          </a>
          {<MathText>{" e a "}</MathText>}
          <a href={"#l4"} data-lesson={"l4"} className={"underline font-bold text-indigo-700"}>
            {<MathText>{"rotação"}</MathText>}
          </a>
          {<MathText>{". Agora vem a quarta, que "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"muda o tamanho"}</MathText>}
          </b>
          {<MathText>{": a "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"homotetia"}</MathText>}
          </b>
          {<MathText>{". É o que acontece quando você dá zoom em uma foto, usa um projetor ou faz uma maquete."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"5.1 O que é uma homotetia"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Para fazer uma homotetia você precisa de duas coisas:"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <ul className={"mt-3 list-disc space-y-1 pl-6 leading-7 text-slate-600"}>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"um ponto fixo chamado "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"centro"}</MathText>}
            </b>
            {<MathText>{" (vamos chamá-lo de \\(O\\));"}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"um número chamado "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"razão"}</MathText>}
            </b>
            {<MathText>{", que escrevemos \\(k\\)."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
        </ul>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"A regra é simples: cada ponto \\(P\\) da figura vai para um ponto \\(P'\\) "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"sobre a reta que liga \\(O\\) a \\(P\\)"}</MathText>}
          </b>
          {<MathText>{", de modo que"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-indigo-300 bg-[#fffef9] p-5 text-center text-xl"}>
          {<MathText>{"\\[ OP' = k \\cdot OP \\]"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Ou seja: a "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"distância ao centro"}</MathText>}
          </b>
          {<MathText>{" fica multiplicada por \\(k\\). Veja o triângulo \\(ABC\\) ampliado com \\(k = 2\\) e centro na origem: cada vértice ficou duas vezes mais longe de \\(O\\)."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 284 224"} className={"h-auto max-w-full w-[284px]"} role={"img"} aria-label={"Triângulo ABC e sua imagem com homotetia de centro O e razão 2"}>
            <line x1={"22"} y1={"202"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"52"} y1={"202"} x2={"52"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"82"} y1={"202"} x2={"82"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"112"} y1={"202"} x2={"112"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"142"} y1={"202"} x2={"142"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"172"} y1={"202"} x2={"172"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"202"} y1={"202"} x2={"202"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"232"} y1={"202"} x2={"232"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"262"} y1={"202"} x2={"262"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"202"} x2={"262"} y2={"202"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"172"} x2={"262"} y2={"172"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"142"} x2={"262"} y2={"142"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"112"} x2={"262"} y2={"112"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"82"} x2={"262"} y2={"82"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"52"} x2={"262"} y2={"52"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"262"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"172"} x2={"262"} y2={"172"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"52"} y1={"202"} x2={"52"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"262,172 255,168 255,176"} fill={"#475569"}></polygon>
            <polygon points={"52,22 48,29 56,29"} fill={"#475569"}></polygon>
            <text x={"260"} y={"163"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"61"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"82"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"112"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"142"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"172"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"202"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"232"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"262"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"7"}
            </text>
            <text x={"46"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"46"} y={"146"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"46"} y={"116"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"46"} y={"86"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"46"} y={"56"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"46"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"46"} y={"185"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polyline points={"52,172 112,112"} fill={"none"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"6 4"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <polyline points={"52,172 232,112"} fill={"none"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"6 4"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <polyline points={"52,172 112,52"} fill={"none"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"6 4"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <polygon points={"112,112 232,112 112,52"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"112"} cy={"112"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"232"} cy={"112"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"112"} cy={"52"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"100.4"} y={"121.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A'"}
            </text>
            <text x={"244.6"} y={"119.2"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"B'"}
            </text>
            <text x={"102.8"} y={"46.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"C'"}
            </text>
            <polygon points={"82,142 142,142 82,112"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"82"} cy={"142"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"142"} cy={"142"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"82"} cy={"112"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"70.4"} y={"151.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"154.6"} y={"149.2"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"72.8"} y={"106.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <circle cx={"52"} cy={"172"} r={"5"} fill={"#1e293b"}></circle>
            <text x={"43"} y={"188"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"O"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Homotetia de centro O (a origem) e razão k = 2: A(1, 1) vai para A′(2, 2), B(3, 1) para B′(6, 2) e C(1, 2) para C′(2, 4). As retas tracejadas passam pelo centro."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-amber-500 bg-amber-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Como desenhar com régua"}</MathText>}
          </b>
          {<MathText>{"Ligue o centro \\(O\\) a cada vértice. Meça \\(OA\\) e marque, sobre a mesma reta, o ponto \\(A'\\) a uma distância \\(2 \\cdot OA\\) (se \\(k = 2\\)). Faça o mesmo com \\(B\\) e \\(C\\) e una os três pontos novos: pronto, a figura ampliada!"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"5.2 Os três casos de k positivo"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <table className={"mt-4 block w-full overflow-x-auto border-collapse text-sm"}>
          <thead>
            <tr>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Razão \\(k\\)"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"O que acontece"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Exemplo"}</MathText>}
              </th>
            </tr>
          </thead>
          <tbody>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(k > 1\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                <b className={"font-bold text-slate-900"}>
                  {<MathText>{"Ampliação"}</MathText>}
                </b>
                {<MathText>{": a figura cresce e se afasta do centro"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(k = 3\\): tudo fica 3 vezes maior"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(0 "}</MathText>}
                {<MathText>{"<"}</MathText>}
                {<MathText>{" k "}</MathText>}
                {<MathText>{"<"}</MathText>}
                {<MathText>{" 1\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                <b className={"font-bold text-slate-900"}>
                  {<MathText>{"Redução"}</MathText>}
                </b>
                {<MathText>{": a figura encolhe e se aproxima do centro"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(k = \\dfrac12\\): tudo fica pela metade"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(k = 1\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Nada muda: cada ponto fica onde estava"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"a figura “coincide” com ela mesma"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
          </tbody>
        </table>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 284 224"} className={"h-auto max-w-full w-[284px]"} role={"img"} aria-label={"Redução com razão 1/2 e centro na origem"}>
            <line x1={"22"} y1={"202"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"52"} y1={"202"} x2={"52"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"82"} y1={"202"} x2={"82"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"112"} y1={"202"} x2={"112"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"142"} y1={"202"} x2={"142"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"172"} y1={"202"} x2={"172"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"202"} y1={"202"} x2={"202"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"232"} y1={"202"} x2={"232"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"262"} y1={"202"} x2={"262"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"202"} x2={"262"} y2={"202"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"172"} x2={"262"} y2={"172"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"142"} x2={"262"} y2={"142"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"112"} x2={"262"} y2={"112"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"82"} x2={"262"} y2={"82"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"52"} x2={"262"} y2={"52"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"262"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"172"} x2={"262"} y2={"172"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"52"} y1={"202"} x2={"52"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"262,172 255,168 255,176"} fill={"#475569"}></polygon>
            <polygon points={"52,22 48,29 56,29"} fill={"#475569"}></polygon>
            <text x={"260"} y={"163"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"61"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"82"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"112"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"142"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"172"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"202"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"232"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"262"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"7"}
            </text>
            <text x={"46"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"46"} y={"146"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"46"} y={"116"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"46"} y={"86"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"46"} y={"56"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"46"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"46"} y={"185"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polyline points={"52,172 232,112"} fill={"none"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"6 4"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <polyline points={"52,172 112,52"} fill={"none"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"6 4"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <polygon points={"112,112 232,112 112,52"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"112"} cy={"112"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"232"} cy={"112"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"112"} cy={"52"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"100.4"} y={"121.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"244.6"} y={"119.2"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"102.8"} y={"46.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <polygon points={"82,142 142,142 82,112"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"82"} cy={"142"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"142"} cy={"142"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"82"} cy={"112"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"66.4"} y={"161.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A'"}
            </text>
            <text x={"160.6"} y={"157.2"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"B'"}
            </text>
            <text x={"64.8"} y={"106.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"C'"}
            </text>
            <circle cx={"52"} cy={"172"} r={"5"} fill={"#1e293b"}></circle>
            <text x={"43"} y={"188"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"O"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Redução com k = 1/2 e centro na origem: A(2, 2), B(6, 2), C(2, 4) vão para A′(1, 1), B′(3, 1), C′(1, 2)."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"5.3 A regra com centro na origem"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Quando o centro é a origem \\(O(0,0)\\), a conta é bem fácil: "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"multiplique as duas coordenadas por \\(k\\)"}</MathText>}
          </b>
          {<MathText>{"."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-indigo-300 bg-[#fffef9] p-5 text-center text-xl"}>
          {<MathText>{"\\[ (x,\\,y) \\;\\longrightarrow\\; (k\\cdot x,\\; k\\cdot y) \\]"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 1 — Ampliar o ponto \\(P(2,3)\\) com \\(k = 3\\) e centro na origem"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(x' = 3 \\cdot 2 = 6\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(y' = 3 \\cdot 3 = 9\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(P'(6,\\,9)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Conferindo: \\(P'\\) está na reta de \\(O\\) por \\(P\\) e três vezes mais longe. ✓"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 2 — Reduzir o triângulo \\(A(2,2)\\), \\(B(6,2)\\), \\(C(2,4)\\) com \\(k = \\tfrac12\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(A' = \\left(\\tfrac12\\cdot 2,\\ \\tfrac12\\cdot 2\\right) = (1,\\,1)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(B' = \\left(\\tfrac12\\cdot 6,\\ \\tfrac12\\cdot 2\\right) = (3,\\,1)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(C' = \\left(\\tfrac12\\cdot 2,\\ \\tfrac12\\cdot 4\\right) = (1,\\,2)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"(o mesmo triângulo da figura acima, de volta ao tamanho pequeno)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 3 — Razão decimal: \\(Q(4,2)\\) com \\(k = 1{,}5\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(x' = 1{,}5 \\cdot 4 = 6\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(y' = 1{,}5 \\cdot 2 = 3\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(Q'(6,\\,3)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"As DUAS coordenadas!"}</MathText>}
          </b>
          {<MathText>{"Erro clássico: multiplicar só o \\(x\\) (ou só o \\(y\\)). Se você multiplicar só uma, a figura fica esticada em uma direção e deixa de ser uma ampliação."}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"5.4 E se k for negativo?"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"A regra é a mesma, \\((x,y) \\to (kx,\\,ky)\\). Mas agora o ponto \\(P'\\) cai "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"do lado oposto do centro"}</MathText>}
          </b>
          {<MathText>{", e a figura fica “de cabeça para baixo”. O tamanho continua mudando por \\(|k|\\) (a distância nunca é negativa): com \\(k = -2\\) a figura fica "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"2 vezes maior"}</MathText>}
          </b>
          {<MathText>{" e "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"do outro lado"}</MathText>}
          </b>
          {<MathText>{"."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 330 252"} className={"h-auto max-w-full w-[330px]"} role={"img"} aria-label={"Homotetia de razão negativa −2: a figura vai para o outro lado do centro"}>
            <line x1={"22"} y1={"230"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"48"} y1={"230"} x2={"48"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"74"} y1={"230"} x2={"74"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"100"} y1={"230"} x2={"100"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"126"} y1={"230"} x2={"126"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"152"} y1={"230"} x2={"152"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"178"} y1={"230"} x2={"178"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"204"} y1={"230"} x2={"204"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"230"} y1={"230"} x2={"230"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"256"} y1={"230"} x2={"256"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"282"} y1={"230"} x2={"282"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"308"} y1={"230"} x2={"308"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"230"} x2={"308"} y2={"230"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"204"} x2={"308"} y2={"204"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"178"} x2={"308"} y2={"178"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"152"} x2={"308"} y2={"152"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"126"} x2={"308"} y2={"126"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"100"} x2={"308"} y2={"100"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"74"} x2={"308"} y2={"74"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"48"} x2={"308"} y2={"48"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"308"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"100"} x2={"308"} y2={"100"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"204"} y1={"230"} x2={"204"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"308,100 301,96 301,104"} fill={"#475569"}></polygon>
            <polygon points={"204,22 200,29 208,29"} fill={"#475569"}></polygon>
            <text x={"306"} y={"91"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"213"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"114"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-7"}
            </text>
            <text x={"48"} y={"114"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-6"}
            </text>
            <text x={"74"} y={"114"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-5"}
            </text>
            <text x={"100"} y={"114"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-4"}
            </text>
            <text x={"126"} y={"114"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-3"}
            </text>
            <text x={"152"} y={"114"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-2"}
            </text>
            <text x={"178"} y={"114"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"230"} y={"114"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"256"} y={"114"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"282"} y={"114"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"308"} y={"114"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"198"} y={"234"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-5"}
            </text>
            <text x={"198"} y={"208"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-4"}
            </text>
            <text x={"198"} y={"182"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-3"}
            </text>
            <text x={"198"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-2"}
            </text>
            <text x={"198"} y={"130"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"198"} y={"78"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"198"} y={"52"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"198"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"198"} y={"113"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polyline points={"204,100 152,152"} fill={"none"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"6 4"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <polyline points={"204,100 48,152"} fill={"none"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"6 4"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <polyline points={"204,100 152,204"} fill={"none"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"6 4"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <polygon points={"152,152 48,152 152,204"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"152"} cy={"152"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"48"} cy={"152"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"152"} cy={"204"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"163.6"} y={"150.2"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A'"}
            </text>
            <text x={"35.4"} y={"152.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"B'"}
            </text>
            <text x={"161.2"} y={"217.2"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"C'"}
            </text>
            <polygon points={"230,74 282,74 230,48"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"230"} cy={"74"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"282"} cy={"74"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"230"} cy={"48"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"218.4"} y={"83.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"294.6"} y={"81.2"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"220.8"} y={"42.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <circle cx={"204"} cy={"100"} r={"5"} fill={"#1e293b"}></circle>
            <text x={"213"} y={"116"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"O"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Razão k = −2: A(1, 1) vai para A′(−2, −2); B(3, 1) para B′(−6, −2); C(1, 2) para C′(−2, −4). Repare na figura “invertida”."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Caso especial: k = −1"}</MathText>}
          </b>
          {<MathText>{"O tamanho não muda, mas o ponto vai para o lado oposto, à mesma distância: \\((x,y) \\to (-x,-y)\\). Isso é exatamente a "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"rotação de 180°"}</MathText>}
          </b>
          {<MathText>{" em torno do centro! Em geral, uma homotetia com \\(k"}</MathText>}
          {<MathText>{"<"}</MathText>}
          {<MathText>{"0\\) é uma homotetia com \\(|k|\\) "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"mais"}</MathText>}
          </b>
          {<MathText>{" uma rotação de 180°."}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"5.5 Quando o centro NÃO é a origem"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Agora o centro é um ponto \\(C(p,\\,q)\\) qualquer. A ideia é a mesma, mas as distâncias são medidas "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"a partir de C"}</MathText>}
          </b>
          {<MathText>{". Fazemos em 3 passos:"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <ol className={"mt-3 list-decimal space-y-1 pl-6 leading-7 text-slate-600"}>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Vetor do centro até o ponto:"}</MathText>}
            </b>
            {<MathText>{" \\(P - C = (x-p,\\; y-q)\\)."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Multiplique esse vetor por \\(k\\):"}</MathText>}
            </b>
            {<MathText>{" \\((k(x-p),\\; k(y-q))\\)."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Some de volta ao centro:"}</MathText>}
            </b>
            {<MathText>{" \\(P' = C + k\\,(P-C)\\)."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
        </ol>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-indigo-300 bg-[#fffef9] p-5 text-center text-xl"}>
          {<MathText>{"\\[ x' = p + k\\,(x-p) \\qquad y' = q + k\\,(y-q) \\]"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 4 — Centro \\(C(1,1)\\), razão \\(k = 2\\), ponto \\(P(3,2)\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"1) Vetor de C até P: \\(P - C = (3-1,\\ 2-1) = (2,\\,1)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"2) Multiplicar por 2: \\((4,\\,2)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"3) Somar a C: \\(P' = (1+4,\\ 1+2) = (5,\\,3)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 284 224"} className={"h-auto max-w-full w-[284px]"} role={"img"} aria-label={"Homotetia com centro C(1, 1) e razão 2 aplicada ao ponto P(3, 2)"}>
            <line x1={"22"} y1={"202"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"52"} y1={"202"} x2={"52"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"82"} y1={"202"} x2={"82"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"112"} y1={"202"} x2={"112"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"142"} y1={"202"} x2={"142"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"172"} y1={"202"} x2={"172"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"202"} y1={"202"} x2={"202"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"232"} y1={"202"} x2={"232"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"262"} y1={"202"} x2={"262"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"202"} x2={"262"} y2={"202"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"172"} x2={"262"} y2={"172"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"142"} x2={"262"} y2={"142"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"112"} x2={"262"} y2={"112"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"82"} x2={"262"} y2={"82"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"52"} x2={"262"} y2={"52"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"262"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"172"} x2={"262"} y2={"172"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"52"} y1={"202"} x2={"52"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"262,172 255,168 255,176"} fill={"#475569"}></polygon>
            <polygon points={"52,22 48,29 56,29"} fill={"#475569"}></polygon>
            <text x={"260"} y={"163"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"61"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"82"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"112"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"142"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"172"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"202"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"232"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"262"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"7"}
            </text>
            <text x={"46"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"46"} y={"146"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"46"} y={"116"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"46"} y={"86"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"46"} y={"56"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"46"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"46"} y={"185"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polyline points={"82,142 202,82"} fill={"none"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"6 4"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <polyline points={"82,142 142,142 142,112"} fill={"none"} stroke={"#f59e0b"} strokeWidth={"2.6"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <polyline points={"142,142 202,142 202,82"} fill={"none"} stroke={"#ec4899"} strokeWidth={"2.6"} strokeDasharray={"6 4"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <circle cx={"82"} cy={"142"} r={"5.5"} fill={"#1e293b"}></circle>
            <circle cx={"142"} cy={"112"} r={"5.5"} fill={"#4f46e5"}></circle>
            <circle cx={"202"} cy={"82"} r={"5.5"} fill={"#ec4899"}></circle>
            <text x={"72"} y={"157"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"C"}
            </text>
            <text x={"130"} y={"106"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"P"}
            </text>
            <text x={"216"} y={"78"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"P'"}
            </text>
            <text x={"112"} y={"158"} fontSize={"13"} fontWeight={"700"} fill={"#b45309"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"133"} y={"131"} fontSize={"13"} fontWeight={"700"} fill={"#b45309"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"172"} y={"158"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"213"} y={"116"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"2"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"O vetor de C até P é “2 para a direita, 1 para cima”. Com k = 2 ele vira “4 para a direita, 2 para cima”, e a partir de C chegamos a P′(5, 3)."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 5 — Centro \\(C(2,1)\\), \\(k = -1\\), ponto \\(P(-1,3)\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(P - C = (-1-2,\\ 3-1) = (-3,\\,2)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(\\cdot (-1)\\ \\Rightarrow\\ (3,\\,-2)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(P' = (2+3,\\ 1+(-2)) = (5,\\,-1)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 6 — Centro \\(C(-1,2)\\), \\(k = \\tfrac13\\), ponto \\(P(5,-4)\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(P - C = (5-(-1),\\ -4-2) = (6,\\,-6)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(\\cdot \\tfrac13\\ \\Rightarrow\\ (2,\\,-2)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(P' = (-1+2,\\ 2+(-2)) = (1,\\,0)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Cuidado com os sinais"}</MathText>}
          </b>
          {<MathText>{"Em \\(x - p\\), se \\(p\\) for negativo você fica com “menos menos”: \\(5-(-1) = 6\\). Escreva os parênteses no papel!"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"5.6 O que muda e o que não muda"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <table className={"mt-4 block w-full overflow-x-auto border-collapse text-sm"}>
          <thead>
            <tr>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Grandeza"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"O que acontece com razão \\(k\\)"}</MathText>}
              </th>
            </tr>
          </thead>
          <tbody>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Lados e perímetro"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"ficam multiplicados por \\(|k|\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Área"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"fica multiplicada por \\(k^2\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Ângulos"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                <b className={"font-bold text-slate-900"}>
                  {<MathText>{"não mudam"}</MathText>}
                </b>
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Forma"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                <b className={"font-bold text-slate-900"}>
                  {<MathText>{"não muda"}</MathText>}
                </b>
                {<MathText>{" (figuras semelhantes)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Retas"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"cada reta vai para uma reta "}</MathText>}
                <b className={"font-bold text-slate-900"}>
                  {<MathText>{"paralela"}</MathText>}
                </b>
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
          </tbody>
        </table>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Isso é "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"exatamente a semelhança de figuras"}</MathText>}
          </b>
          {<MathText>{" que você estudou no curso anterior (“Semelhança e Relações Métricas”): a razão de semelhança é \\(|k|\\), perímetro \\(\\times k\\) e área \\(\\times k^2\\). A homotetia é a semelhança vista como uma "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"transformação"}</MathText>}
          </b>
          {<MathText>{"."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 7 — Triângulo 3, 4, 5 (área 6) com \\(k = 3\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Lados: \\(3 \\cdot 3 = 9\\), \\(4 \\cdot 3 = 12\\), \\(5 \\cdot 3 = 15\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Perímetro: \\(12 \\cdot 3 = 36\\) (ou \\(9+12+15 = 36\\))"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Área: \\(6 \\cdot 3^2 = 6 \\cdot 9 = 54\\) (confira: \\(9 \\cdot 12 \\div 2 = 54\\) ✓)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"5.7 Descobrindo o centro e a razão"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Você recebe uma figura e a sua ampliação e quer saber "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"qual foi a homotetia"}</MathText>}
          </b>
          {<MathText>{"."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <ul className={"mt-3 list-disc space-y-1 pl-6 leading-7 text-slate-600"}>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Razão:"}</MathText>}
            </b>
            {<MathText>{" divida um lado da imagem pelo lado correspondente do original: \\(k = \\dfrac{A'B'}{AB}\\). (Se a imagem estiver “de cabeça para baixo” em relação ao centro, o \\(k\\) é negativo.)"}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Centro:"}</MathText>}
            </b>
            {<MathText>{" trace as retas \\(AA'\\), \\(BB'\\), \\(CC'\\). Elas se cruzam "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"no centro"}</MathText>}
            </b>
            {<MathText>{"."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
        </ul>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 314 224"} className={"h-auto max-w-full w-[314px]"} role={"img"} aria-label={"Dois triângulos semelhantes: as retas que ligam pontos correspondentes se cruzam no centro M"}>
            <line x1={"22"} y1={"202"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"52"} y1={"202"} x2={"52"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"82"} y1={"202"} x2={"82"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"112"} y1={"202"} x2={"112"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"142"} y1={"202"} x2={"142"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"172"} y1={"202"} x2={"172"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"202"} y1={"202"} x2={"202"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"232"} y1={"202"} x2={"232"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"262"} y1={"202"} x2={"262"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"292"} y1={"202"} x2={"292"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"202"} x2={"292"} y2={"202"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"172"} x2={"292"} y2={"172"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"142"} x2={"292"} y2={"142"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"112"} x2={"292"} y2={"112"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"82"} x2={"292"} y2={"82"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"52"} x2={"292"} y2={"52"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"292"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"172"} x2={"292"} y2={"172"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"52"} y1={"202"} x2={"52"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"292,172 285,168 285,176"} fill={"#475569"}></polygon>
            <polygon points={"52,22 48,29 56,29"} fill={"#475569"}></polygon>
            <text x={"290"} y={"163"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"61"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"82"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"112"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"142"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"172"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"202"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"232"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"262"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"7"}
            </text>
            <text x={"292"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"8"}
            </text>
            <text x={"46"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"46"} y={"146"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"46"} y={"116"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"46"} y={"86"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"46"} y={"56"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"46"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"46"} y={"185"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polyline points={"82,172 142,112"} fill={"none"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"6 4"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <polyline points={"82,172 262,112"} fill={"none"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"6 4"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <polyline points={"82,172 142,52"} fill={"none"} stroke={"#94a3b8"} strokeWidth={"1.6"} strokeDasharray={"6 4"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <polygon points={"142,112 262,112 142,52"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"142"} cy={"112"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"262"} cy={"112"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"142"} cy={"52"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"130.4"} y={"121.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A'"}
            </text>
            <text x={"274.6"} y={"119.2"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"B'"}
            </text>
            <text x={"132.8"} y={"46.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"C'"}
            </text>
            <polygon points={"112,142 172,142 112,112"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"112"} cy={"142"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"172"} cy={"142"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"112"} cy={"112"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"100.4"} y={"151.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"184.6"} y={"149.2"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"102.8"} y={"106.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <circle cx={"82"} cy={"172"} r={"5.5"} fill={"#1e293b"}></circle>
            <text x={"78"} y={"163"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"M"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"As retas AA′, BB′ e CC′ se cruzam em M(1, 0): esse é o centro. A razão é k = A′B′ ÷ AB = 4 ÷ 2 = 2."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={10} />
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={11} />
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={12} />
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-gotab={"laboratorio"}>
          {<MathText>{"🔬 Abrir o laboratório (Exp. 4 — Homotetia: ampliar e reduzir)"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-goto={"5"}>
          {<MathText>{"✏️ Fazer os exercícios do nível 5"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
      </article>
      {<MathText>{" "}</MathText>}
      {<MathText>{" "}</MathText>}
      <article className={"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-24 sm:p-8"} id={"l6"}>
        {<MathText>{" "}</MathText>}
        <div className={"text-[.7rem] font-extrabold uppercase tracking-[.12em] text-indigo-600"}>
          {<MathText>{"Lição 6"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h2 className={"mt-1 text-2xl font-black text-slate-800"}>
          {<MathText>{"Comparando, identificando e compondo transformações"}</MathText>}
        </h2>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Você já conhece as quatro transformações. Agora vamos aprender a "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"compará-las"}</MathText>}
          </b>
          {<MathText>{", a "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"descobrir qual delas foi usada"}</MathText>}
          </b>
          {<MathText>{" olhando só as coordenadas e a "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"combinar"}</MathText>}
          </b>
          {<MathText>{" várias, uma depois da outra."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"6.1 O que cada transformação conserva"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Para comparar, vamos usar a letra "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"F"}</MathText>}
          </b>
          {<MathText>{": ela não é simétrica, então dá para perceber se foi virada “de espelho” ou apenas girada."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 401 149.4"} className={"h-auto max-w-full w-[401px]"} role={"img"} aria-label={"A letra F: original, transladada, refletida e girada 90 graus"}>
            <polygon points={"39,110.4 56,110.4 56,93.4 73,93.4 73,76.4 56,76.4 56,59.4 90,59.4 90,42.4 39,42.4"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.4"} strokeLinejoin={"round"}></polygon>
            <polygon points={"124,110.4 141,110.4 141,93.4 158,93.4 158,76.4 141,76.4 141,59.4 175,59.4 175,42.4 124,42.4"} fill={"#dcfce7"} fill-opacity={"0.85"} stroke={"#16a34a"} strokeWidth={"2.4"} strokeLinejoin={"round"}></polygon>
            <polygon points={"260,110.4 243,110.4 243,93.4 226,93.4 226,76.4 243,76.4 243,59.4 209,59.4 209,42.4 260,42.4"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.4"} strokeLinejoin={"round"}></polygon>
            <polygon points={"362,110.4 362,93.4 345,93.4 345,76.4 328,76.4 328,93.4 311,93.4 311,59.4 294,59.4 294,110.4"} fill={"#fef3c7"} fill-opacity={"0.85"} stroke={"#f59e0b"} strokeWidth={"2.4"} strokeLinejoin={"round"}></polygon>
            <text x={"64.5"} y={"125.7"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"original"}
            </text>
            <text x={"149.5"} y={"125.7"} fontSize={"12"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"translação"}
            </text>
            <text x={"234.5"} y={"125.7"} fontSize={"12"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"reflexão"}
            </text>
            <text x={"336.5"} y={"125.7"} fontSize={"12"} fontWeight={"700"} fill={"#b45309"} textAnchor={"middle"}>
              {"rotação 90°"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"A letra F: original (azul), deslocada para a direita (verde), refletida como em um espelho (rosa) e girada 90° (amarelo)."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <table className={"mt-4 block w-full overflow-x-auto border-collapse text-sm"}>
          <thead>
            <tr>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Transformação"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Distâncias e tamanho"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Ângulos"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Sentido (o F fica…)"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Regra com centro/eixo na origem"}</MathText>}
              </th>
            </tr>
          </thead>
          <tbody>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                <b className={"font-bold text-slate-900"}>
                  {<MathText>{"Translação"}</MathText>}
                </b>
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"iguais"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"iguais"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"do mesmo jeito"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((x+a,\\ y+b)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                <b className={"font-bold text-slate-900"}>
                  {<MathText>{"Reflexão"}</MathText>}
                </b>
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"iguais"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"iguais"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                <b className={"font-bold text-slate-900"}>
                  {<MathText>{"de espelho"}</MathText>}
                </b>
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((x,-y)\\), \\((-x,y)\\), \\((y,x)\\)…"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                <b className={"font-bold text-slate-900"}>
                  {<MathText>{"Rotação"}</MathText>}
                </b>
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"iguais"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"iguais"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"do mesmo jeito (só girado)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((-y,x)\\), \\((-x,-y)\\), \\((y,-x)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                <b className={"font-bold text-slate-900"}>
                  {<MathText>{"Homotetia"}</MathText>}
                </b>
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"multiplicados por \\(\\lvert k\\rvert\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"iguais"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"do mesmo jeito"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((kx,\\ ky)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
          </tbody>
        </table>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Isometrias"}</MathText>}
          </b>
          {<MathText>{"As três primeiras (translação, reflexão e rotação) conservam as distâncias: a figura nova é "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"congruente"}</MathText>}
          </b>
          {<MathText>{" à original, só mudou de lugar ou de posição. Elas se chamam "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"isometrias"}</MathText>}
          </b>
          {<MathText>{". A homotetia conserva a forma, mas não o tamanho: dá uma figura "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"semelhante"}</MathText>}
          </b>
          {<MathText>{". E só a reflexão “vira a figura ao contrário”, como um espelho."}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"6.2 Qual transformação foi aplicada?"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Compare as coordenadas de \\(A\\) e de \\(A'\\). Estas pistas funcionam quase sempre:"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <table className={"mt-4 block w-full overflow-x-auto border-collapse text-sm"}>
          <thead>
            <tr>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Se você vê…"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"…é provavelmente"}</MathText>}
              </th>
            </tr>
          </thead>
          <tbody>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(x' = x + a\\) e \\(y' = y + b\\) (somam-se sempre os mesmos números)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"translação de vetor \\((a,b)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((x,\\,-y)\\) ou \\((-x,\\,y)\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"reflexão no eixo \\(x\\) ou no eixo \\(y\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((y,\\,x)\\) ou \\((-y,\\,-x)\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"reflexão na reta \\(y = x\\) ou \\(y = -x\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((-y,\\,x)\\), \\((-x,\\,-y)\\), \\((y,\\,-x)\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"rotação de 90°, 180°, 270° (anti-horário)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((kx,\\ ky)\\) com \\(k \\neq \\pm 1\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"homotetia de razão \\(k\\) (centro na origem)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
          </tbody>
        </table>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 1 — \\(A(2,1)\\to A'(5,1)\\) e \\(B(4,3)\\to B'(7,3)\\). Qual transformação?"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(5-2 = 3\\) e \\(7-4 = 3\\) (a diferença em \\(x\\) é sempre 3)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(1-1 = 0\\) e \\(3-3 = 0\\) (em \\(y\\) é sempre 0)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Translação com vetor \\((3,\\,0)\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 2 — \\(A(3,1)\\to A'(1,3)\\). E agora?"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"As coordenadas trocaram de lugar: \\((x,y)\\to(y,x)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Teste a rotação de 90°: \\((-y,\\,x) = (-1,\\,3)\\) ✗ (não bate)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Reflexão na reta \\(y = x\\)."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 3 — \\(A(2,3)\\to A'(-3,2)\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Teste \\((-y,\\,x) = (-3,\\,2)\\) ✓"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Rotação de 90° (anti-horário) em torno da origem."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 4 — \\(A(2,1)\\to A'(6,3)\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(6 \\div 2 = 3\\) e \\(3 \\div 1 = 3\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"As duas coordenadas foram multiplicadas por 3: homotetia com \\(k = 3\\) e centro na origem."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Um ponto só pode enganar"}</MathText>}
          </b>
          {<MathText>{"Um único ponto às vezes serve para duas transformações (por exemplo, \\((2,2)\\to(2,-2)\\) pode ser reflexão no eixo \\(x\\) "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"ou"}</MathText>}
          </b>
          {<MathText>{" rotação de 270°). Teste "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"pelo menos dois pontos"}</MathText>}
          </b>
          {<MathText>{" e olhe o "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"sentido"}</MathText>}
          </b>
          {<MathText>{" da figura (se virou espelho, é reflexão)."}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"6.3 Compondo transformações"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Compor"}</MathText>}
          </b>
          {<MathText>{" é aplicar uma transformação e, "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"no resultado"}</MathText>}
          </b>
          {<MathText>{", aplicar outra. Chamamos o ponto original de \\(A\\), o primeiro resultado de \\(A'\\) e o segundo de \\(A''\\) (lê-se “A duas linhas”)."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 5 — \\(A(2,3)\\): 1º refletir no eixo \\(x\\); 2º transladar com vetor \\((4,1)\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"1º) \\((x,y)\\to(x,-y)\\): \\(A'(2,\\,-3)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"2º) \\((x+4,\\ y+1)\\): \\(A''(2+4,\\ -3+1) = (6,\\,-2)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <table className={"mt-4 block w-full overflow-x-auto border-collapse text-sm"}>
          <thead>
            <tr>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Ponto"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"original"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"depois da reflexão"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"depois da translação"}</MathText>}
              </th>
            </tr>
          </thead>
          <tbody>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(A\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((2,3)\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((2,-3)\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((6,-2)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
          </tbody>
        </table>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"A ordem importa!"}</MathText>}
          </b>
          {<MathText>{"Compor \\(f\\) e depois \\(g\\) em geral é diferente de \\(g\\) e depois \\(f\\). Veja com \\(P(3,1)\\), translação \\((2,1)\\) e reflexão no eixo \\(y\\)."}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 380 184"} className={"h-auto max-w-full w-[380px]"} role={"img"} aria-label={"Mesmo ponto, duas ordens diferentes de transformações"}>
            <line x1={"22"} y1={"162"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"50"} y1={"162"} x2={"50"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"78"} y1={"162"} x2={"78"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"106"} y1={"162"} x2={"106"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"134"} y1={"162"} x2={"134"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"162"} y1={"162"} x2={"162"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"190"} y1={"162"} x2={"190"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"218"} y1={"162"} x2={"218"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"246"} y1={"162"} x2={"246"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"274"} y1={"162"} x2={"274"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"302"} y1={"162"} x2={"302"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"330"} y1={"162"} x2={"330"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"358"} y1={"162"} x2={"358"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"162"} x2={"358"} y2={"162"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"134"} x2={"358"} y2={"134"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"106"} x2={"358"} y2={"106"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"78"} x2={"358"} y2={"78"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"50"} x2={"358"} y2={"50"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"358"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"134"} x2={"358"} y2={"134"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"190"} y1={"162"} x2={"190"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"358,134 351,130 351,138"} fill={"#475569"}></polygon>
            <polygon points={"190,22 186,29 194,29"} fill={"#475569"}></polygon>
            <text x={"356"} y={"125"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"199"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"148"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-6"}
            </text>
            <text x={"50"} y={"148"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-5"}
            </text>
            <text x={"78"} y={"148"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-4"}
            </text>
            <text x={"106"} y={"148"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-3"}
            </text>
            <text x={"134"} y={"148"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-2"}
            </text>
            <text x={"162"} y={"148"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"218"} y={"148"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"246"} y={"148"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"274"} y={"148"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"302"} y={"148"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"330"} y={"148"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"358"} y={"148"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"184"} y={"166"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"184"} y={"110"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"184"} y={"82"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"184"} y={"54"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"184"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"184"} y={"147"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <line x1={"274"} y1={"106"} x2={"326.4"} y2={"79.8"} stroke={"#ec4899"} strokeWidth={"2.2"} strokeDasharray={"5 4"}></line>
            <polygon points={"330,78 324.2,84.8 321.0,78.6"} fill={"#ec4899"}></polygon>
            <line x1={"330"} y1={"78"} x2={"54.0"} y2={"78.0"} stroke={"#ec4899"} strokeWidth={"2.2"} strokeDasharray={"5 4"}></line>
            <polygon points={"50,78 58.3,74.5 58.3,81.5"} fill={"#ec4899"}></polygon>
            <line x1={"274"} y1={"106"} x2={"110.0"} y2={"106.0"} stroke={"#16a34a"} strokeWidth={"2.2"} strokeDasharray={"5 4"}></line>
            <polygon points={"106,106 114.3,102.5 114.3,109.5"} fill={"#16a34a"}></polygon>
            <line x1={"106"} y1={"106"} x2={"158.4"} y2={"79.8"} stroke={"#16a34a"} strokeWidth={"2.2"} strokeDasharray={"5 4"}></line>
            <polygon points={"162,78 156.2,84.8 153.0,78.6"} fill={"#16a34a"}></polygon>
            <circle cx={"274"} cy={"106"} r={"4.5"} fill={"#4f46e5"}></circle>
            <text x={"284"} y={"118"} fontSize={"12"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"P"}
            </text>
            <circle cx={"330"} cy={"78"} r={"4.5"} fill={"#ec4899"}></circle>
            <text x={"330"} y={"69"} fontSize={"12"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"1º: (5, 2)"}
            </text>
            <circle cx={"50"} cy={"78"} r={"4.5"} fill={"#ec4899"}></circle>
            <text x={"50"} y={"69"} fontSize={"12"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"(−5, 2)"}
            </text>
            <circle cx={"106"} cy={"106"} r={"4.5"} fill={"#16a34a"}></circle>
            <text x={"106"} y={"122"} fontSize={"12"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"(−3, 1)"}
            </text>
            <circle cx={"162"} cy={"78"} r={"4.5"} fill={"#16a34a"}></circle>
            <text x={"162"} y={"69"} fontSize={"12"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"(−1, 2)"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Rosa: primeiro transladar (2, 1) e depois refletir no eixo y → (−5, 2). Verde: primeiro refletir no eixo y e depois transladar (2, 1) → (−1, 2). Resultados diferentes!"}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"Conferindo as duas ordens para \\(P(3,1)\\)"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Translação e depois reflexão: \\((3,1)\\to(5,2)\\to(-5,\\,2)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Reflexão e depois translação: \\((3,1)\\to(-3,1)\\to(-1,\\,2)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\((-5,2) \\neq (-1,2)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"6.4 Duas reflexões viram outra transformação"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Que coisa curiosa: se você refletir uma figura duas vezes, o resultado "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"deixa de ser um espelho"}</MathText>}
          </b>
          {<MathText>{" (o F volta ao sentido normal!). E vira uma translação ou uma rotação:"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <ul className={"mt-3 list-disc space-y-1 pl-6 leading-7 text-slate-600"}>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Dois eixos paralelos"}</MathText>}
            </b>
            {<MathText>{" ⇒ "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"translação"}</MathText>}
            </b>
            {<MathText>{", com deslocamento igual ao "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"dobro da distância entre os eixos"}</MathText>}
            </b>
            {<MathText>{"."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Dois eixos que se cruzam"}</MathText>}
            </b>
            {<MathText>{" ⇒ "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"rotação"}</MathText>}
            </b>
            {<MathText>{" em torno do ponto de encontro, com ângulo igual ao "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"dobro do ângulo entre os eixos"}</MathText>}
            </b>
            {<MathText>{"."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
        </ul>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 314 194"} className={"h-auto max-w-full w-[314px]"} role={"img"} aria-label={"Duas reflexões em eixos paralelos equivalem a uma translação"}>
            <line x1={"22"} y1={"172"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"52"} y1={"172"} x2={"52"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"82"} y1={"172"} x2={"82"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"112"} y1={"172"} x2={"112"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"142"} y1={"172"} x2={"142"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"172"} y1={"172"} x2={"172"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"202"} y1={"172"} x2={"202"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"232"} y1={"172"} x2={"232"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"262"} y1={"172"} x2={"262"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"292"} y1={"172"} x2={"292"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"172"} x2={"292"} y2={"172"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"142"} x2={"292"} y2={"142"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"112"} x2={"292"} y2={"112"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"82"} x2={"292"} y2={"82"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"52"} x2={"292"} y2={"52"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"292"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"142"} x2={"292"} y2={"142"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"52"} y1={"172"} x2={"52"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"292,142 285,138 285,146"} fill={"#475569"}></polygon>
            <polygon points={"52,22 48,29 56,29"} fill={"#475569"}></polygon>
            <text x={"290"} y={"133"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"61"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"82"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"112"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"142"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"172"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"202"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"232"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"262"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"7"}
            </text>
            <text x={"292"} y={"156"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"8"}
            </text>
            <text x={"46"} y={"176"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"46"} y={"116"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"46"} y={"86"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"46"} y={"56"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"46"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"46"} y={"155"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polyline points={"112,172 112,22"} fill={"none"} stroke={"#94a3b8"} strokeWidth={"2"} strokeDasharray={"6 4"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <polyline points={"202,172 202,22"} fill={"none"} stroke={"#94a3b8"} strokeWidth={"2"} strokeDasharray={"6 4"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <polygon points={"52,112 82,112 52,82"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"52"} cy={"112"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"82"} cy={"112"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"52"} cy={"82"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"42.8"} y={"125.2"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"93.6"} y={"121.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"46.2"} y={"74.4"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <polygon points={"172,112 142,112 172,82"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"172"} cy={"112"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"142"} cy={"112"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"172"} cy={"82"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"181.2"} y={"125.2"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A'"}
            </text>
            <text x={"130.4"} y={"121.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"B'"}
            </text>
            <text x={"177.8"} y={"74.4"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"C'"}
            </text>
            <polygon points={"232,112 262,112 232,82"} fill={"#dcfce7"} fill-opacity={"0.85"} stroke={"#16a34a"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"232"} cy={"112"} r={"3.6"} fill={"#16a34a"}></circle>
            <circle cx={"262"} cy={"112"} r={"3.6"} fill={"#16a34a"}></circle>
            <circle cx={"232"} cy={"82"} r={"3.6"} fill={"#16a34a"}></circle>
            <text x={"222.8"} y={"125.2"} fontSize={"14"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"A''"}
            </text>
            <text x={"273.6"} y={"121.8"} fontSize={"14"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"B''"}
            </text>
            <text x={"226.2"} y={"74.4"} fontSize={"14"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"C''"}
            </text>
            <text x={"146"} y={"37"} fontSize={"12"} fontWeight={"700"} fill={"#64748b"} textAnchor={"middle"}>
              {"e₁: x = 2"}
            </text>
            <text x={"236"} y={"37"} fontSize={"12"} fontWeight={"700"} fill={"#64748b"} textAnchor={"middle"}>
              {"e₂: x = 5"}
            </text>
            <line x1={"52"} y1={"130"} x2={"228.0"} y2={"130.0"} stroke={"#1e293b"} strokeWidth={"1.8"}></line>
            <polygon points={"232,130 223.7,133.5 223.7,126.5"} fill={"#1e293b"}></polygon>
            <text x={"142"} y={"137.5"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"6 = 2 · 3"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Refletindo em x = 2 e depois em x = 5 (distância 3 entre os eixos), o triângulo anda 2 · 3 = 6 unidades para a direita."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 300 236"} className={"h-auto max-w-full w-[300px]"} role={"img"} aria-label={"Reflexão no eixo x seguida de reflexão no eixo y: equivale a rotação de 180 graus"}>
            <line x1={"22"} y1={"214"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"54"} y1={"214"} x2={"54"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"86"} y1={"214"} x2={"86"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"118"} y1={"214"} x2={"118"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"150"} y1={"214"} x2={"150"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"182"} y1={"214"} x2={"182"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"214"} y1={"214"} x2={"214"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"246"} y1={"214"} x2={"246"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"278"} y1={"214"} x2={"278"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"214"} x2={"278"} y2={"214"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"182"} x2={"278"} y2={"182"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"150"} x2={"278"} y2={"150"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"118"} x2={"278"} y2={"118"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"86"} x2={"278"} y2={"86"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"54"} x2={"278"} y2={"54"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"278"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"118"} x2={"278"} y2={"118"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"150"} y1={"214"} x2={"150"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"278,118 271,114 271,122"} fill={"#475569"}></polygon>
            <polygon points={"150,22 146,29 154,29"} fill={"#475569"}></polygon>
            <text x={"276"} y={"109"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"159"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"132"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-4"}
            </text>
            <text x={"54"} y={"132"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-3"}
            </text>
            <text x={"86"} y={"132"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-2"}
            </text>
            <text x={"118"} y={"132"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"182"} y={"132"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"214"} y={"132"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"246"} y={"132"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"278"} y={"132"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"144"} y={"218"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-3"}
            </text>
            <text x={"144"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-2"}
            </text>
            <text x={"144"} y={"154"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"144"} y={"90"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"144"} y={"58"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"144"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"144"} y={"131"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polygon points={"182,86 246,86 182,54"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"182"} cy={"86"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"246"} cy={"86"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"182"} cy={"54"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"170.4"} y={"95.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"258.6"} y={"93.2"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"172.8"} y={"48.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <polygon points={"182,150 246,150 182,182"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"182"} cy={"150"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"246"} cy={"150"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"182"} cy={"182"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"170.4"} y={"148.2"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A'"}
            </text>
            <text x={"258.6"} y={"150.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"B'"}
            </text>
            <text x={"172.8"} y={"195.2"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"C'"}
            </text>
            <polygon points={"118,150 54,150 118,182"} fill={"#dcfce7"} fill-opacity={"0.85"} stroke={"#16a34a"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"118"} cy={"150"} r={"3.6"} fill={"#16a34a"}></circle>
            <circle cx={"54"} cy={"150"} r={"3.6"} fill={"#16a34a"}></circle>
            <circle cx={"118"} cy={"182"} r={"3.6"} fill={"#16a34a"}></circle>
            <text x={"129.6"} y={"148.2"} fontSize={"14"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"A''"}
            </text>
            <text x={"41.4"} y={"150.8"} fontSize={"14"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"B''"}
            </text>
            <text x={"127.2"} y={"195.2"} fontSize={"14"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"C''"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Refletindo no eixo x e depois no eixo y (que formam 90°), o triângulo gira 2 · 90° = 180° em torno da origem: (x, y) → (−x, −y)."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Curiosidade: reflexão deslizante"}</MathText>}
          </b>
          {<MathText>{"Se você refletir em um eixo e depois deslizar a figura "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"ao longo"}</MathText>}
          </b>
          {<MathText>{" desse eixo, tem uma “reflexão com deslizamento”. É como as pegadas de alguém caminhando na areia: cada pé é o espelho do outro, e os dois avançam."}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"6.5 Transformação inversa: desfazendo"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Toda transformação pode ser "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"desfeita"}</MathText>}
          </b>
          {<MathText>{" por outra, a "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"inversa"}</MathText>}
          </b>
          {<MathText>{":"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <table className={"mt-4 block w-full overflow-x-auto border-collapse text-sm"}>
          <thead>
            <tr>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Transformação"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Como desfazer"}</MathText>}
              </th>
            </tr>
          </thead>
          <tbody>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Translação \\((a,b)\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"translação \\((-a,\\,-b)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Reflexão"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"a "}</MathText>}
                <b className={"font-bold text-slate-900"}>
                  {<MathText>{"mesma"}</MathText>}
                </b>
                {<MathText>{" reflexão (refletir duas vezes volta ao início)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Rotação de \\(\\theta\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"rotação de \\(-\\theta\\) (sentido contrário), ou de \\(360^\\circ-\\theta\\) no mesmo sentido"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Homotetia de razão \\(k\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"homotetia de razão \\(\\dfrac1k\\), com o mesmo centro"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
          </tbody>
        </table>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"EXEMPLO 6 — \\(A''(6,-2)\\) saiu de \\(A\\) por reflexão no eixo \\(x\\) e translação \\((4,1)\\). Qual era \\(A\\)?"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Desfaça na ordem inversa: primeiro a translação, depois a reflexão."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\((6-4,\\ -2-1) = (2,\\,-3)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Reflexão no eixo \\(x\\): \\((2,\\,3)\\) → \\(A(2,3)\\) ✓"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={13} />
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={14} />
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-gotab={"ferramentas"}>
          {<MathText>{"🧮 Abrir as calculadoras (Translação, Reflexão, Rotação e Homotetia de pontos)"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-goto={"6"}>
          {<MathText>{"✏️ Fazer os exercícios do nível 6"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-goto={"7"}>
          {<MathText>{"✏️ Fazer os exercícios do nível 7"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
      </article>
      {<MathText>{" "}</MathText>}
      {<MathText>{" "}</MathText>}
      <article className={"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-24 sm:p-8"} id={"l7"}>
        {<MathText>{" "}</MathText>}
        <div className={"text-[.7rem] font-extrabold uppercase tracking-[.12em] text-indigo-600"}>
          {<MathText>{"Lição 7"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h2 className={"mt-1 text-2xl font-black text-slate-800"}>
          {<MathText>{"Aplicações e problemas"}</MathText>}
        </h2>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Transformações geométricas não são só de caderno. Elas estão por trás de muita coisa do dia a dia:"}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"}>
          {<MathText>{" "}</MathText>}
          <div className={"bg-indigo-50 rounded-2xl p-4 text-slate-700 leading-7"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"🧱 Padrões e mosaicos"}</MathText>}
            </b>
            <br />
            {<MathText>{"Pisos, azulejos, papéis de parede e tecidos são um motivo "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"repetido"}</MathText>}
            </b>
            {<MathText>{" por translação, reflexão e rotação."}</MathText>}
          </div>
          {<MathText>{" "}</MathText>}
          <div className={"bg-amber-50 rounded-2xl p-4 text-slate-700 leading-7"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"🎮 Jogos e robôs"}</MathText>}
            </b>
            <br />
            {<MathText>{"Peças que giram e deslizam (como no Tetris) e robôs de limpeza seguem “andar \\(a\\) para a direita e \\(b\\) para cima” e “girar 90°”."}</MathText>}
          </div>
          {<MathText>{" "}</MathText>}
          <div className={"bg-emerald-50 rounded-2xl p-4 text-slate-700 leading-7"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"🖼️ Edição de imagens"}</MathText>}
            </b>
            <br />
            {<MathText>{"Dar "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"zoom"}</MathText>}
            </b>
            {<MathText>{" é homotetia; "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"espelhar"}</MathText>}
            </b>
            {<MathText>{" é reflexão; "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"girar"}</MathText>}
            </b>
            {<MathText>{" é rotação; "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"arrastar"}</MathText>}
            </b>
            {<MathText>{" é translação."}</MathText>}
          </div>
          {<MathText>{" "}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 394 178.4"} className={"h-auto max-w-full w-[394px]"} role={"img"} aria-label={"Friso: um triângulo repetido por translação e refletido em uma linha horizontal"}>
            <polygon points={"36,83.6 92,83.6 64,38.8"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <polygon points={"120,83.6 176,83.6 148,38.8"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <polygon points={"204,83.6 260,83.6 232,38.8"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <polygon points={"288,83.6 344,83.6 316,38.8"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <polygon points={"36,94.8 92,94.8 64,139.6"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <polygon points={"120,94.8 176,94.8 148,139.6"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <polygon points={"204,94.8 260,94.8 232,139.6"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <polygon points={"288,94.8 344,94.8 316,139.6"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <text x={"204"} y={"27.6"} fontSize={"12"} fontWeight={"700"} fill={"#64748b"} textAnchor={"middle"}>
              {"translação repete o motivo →"}
            </text>
            <text x={"204"} y={"152.2"} fontSize={"12"} fontWeight={"700"} fill={"#64748b"} textAnchor={"middle"}>
              {"reflexão cria a fileira de baixo"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Um friso (faixa decorativa): a fileira de cima repete o motivo por translação; a de baixo é o reflexo da fileira de cima, com as cores trocadas."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Mapas, plantas e maquetes são homotetias da realidade (escala = razão \\(k\\)). Em animação e programação de jogos, cada quadro é calculado aplicando essas regras às coordenadas dos pontos."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"7.1 Método para qualquer problema"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-amber-500 bg-amber-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Os 4 passos"}</MathText>}
          </b>
          {<MathText>{" "}</MathText>}
          <ol className={"mt-3 list-decimal space-y-1 pl-6 leading-7 text-slate-600"}>
            {<MathText>{" "}</MathText>}
            <li className={"mt-1"}>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"Desenhe"}</MathText>}
              </b>
              {<MathText>{" o plano e marque os pontos dados."}</MathText>}
            </li>
            {<MathText>{" "}</MathText>}
            <li className={"mt-1"}>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"Anote as coordenadas"}</MathText>}
              </b>
              {<MathText>{" e identifique a transformação (e o que ela pede: vetor, eixo, ângulo, centro e razão)."}</MathText>}
            </li>
            {<MathText>{" "}</MathText>}
            <li className={"mt-1"}>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"Escolha a regra"}</MathText>}
              </b>
              {<MathText>{" e aplique, "}</MathText>}
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"um ponto por vez"}</MathText>}
              </b>
              {<MathText>{" e uma transformação por vez."}</MathText>}
            </li>
            {<MathText>{" "}</MathText>}
            <li className={"mt-1"}>
              <b className={"font-bold text-slate-900"}>
                {<MathText>{"Confira"}</MathText>}
              </b>
              {<MathText>{" olhando o desenho: o resultado faz sentido? As distâncias se conservaram (ou mudaram por \\(k\\))?"}</MathText>}
            </li>
            {<MathText>{" "}</MathText>}
          </ol>
        </div>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"7.2 Problemas resolvidos"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"PROBLEMA 1 — O robô de limpeza está em \\(A(2,3)\\). O programa manda: “4 para a direita e 5 para baixo”. Onde ele para? E que deslocamento o faz voltar ao início?"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"“Direita” soma ao \\(x\\); “baixo” subtrai do \\(y\\): vetor \\((4,\\,-5)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(A' = (2+4,\\ 3+(-5)) = (6,\\,-2)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Para voltar: o vetor oposto, \\((-4,\\,+5)\\): 4 para a esquerda e 5 para cima."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 314 284"} className={"h-auto max-w-full w-[314px]"} role={"img"} aria-label={"Robô vai de A(2, 3) para A prime (6, −2)"}>
            <line x1={"22"} y1={"262"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"52"} y1={"262"} x2={"52"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"82"} y1={"262"} x2={"82"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"112"} y1={"262"} x2={"112"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"142"} y1={"262"} x2={"142"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"172"} y1={"262"} x2={"172"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"202"} y1={"262"} x2={"202"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"232"} y1={"262"} x2={"232"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"262"} y1={"262"} x2={"262"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"292"} y1={"262"} x2={"292"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"262"} x2={"292"} y2={"262"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"232"} x2={"292"} y2={"232"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"202"} x2={"292"} y2={"202"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"172"} x2={"292"} y2={"172"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"142"} x2={"292"} y2={"142"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"112"} x2={"292"} y2={"112"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"82"} x2={"292"} y2={"82"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"52"} x2={"292"} y2={"52"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"292"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"172"} x2={"292"} y2={"172"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"52"} y1={"262"} x2={"52"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"292,172 285,168 285,176"} fill={"#475569"}></polygon>
            <polygon points={"52,22 48,29 56,29"} fill={"#475569"}></polygon>
            <text x={"290"} y={"163"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"61"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"82"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"112"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"142"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"172"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"202"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"232"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"262"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"7"}
            </text>
            <text x={"292"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"8"}
            </text>
            <text x={"46"} y={"266"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-3"}
            </text>
            <text x={"46"} y={"236"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-2"}
            </text>
            <text x={"46"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"46"} y={"146"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"46"} y={"116"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"46"} y={"86"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"46"} y={"56"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"46"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"46"} y={"185"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <line x1={"112"} y1={"82"} x2={"228.0"} y2={"82.0"} stroke={"#16a34a"} strokeWidth={"2.6"}></line>
            <polygon points={"232,82 223.7,85.5 223.7,78.5"} fill={"#16a34a"}></polygon>
            <line x1={"232"} y1={"82"} x2={"232.0"} y2={"228.0"} stroke={"#ec4899"} strokeWidth={"2.6"}></line>
            <polygon points={"232,232 228.5,223.7 235.5,223.7"} fill={"#ec4899"}></polygon>
            <line x1={"112"} y1={"82"} x2={"229.5"} y2={"228.9"} stroke={"#94a3b8"} strokeWidth={"1.8"} strokeDasharray={"5 4"}></line>
            <polygon points={"232,232 224.1,227.7 229.6,223.3"} fill={"#94a3b8"}></polygon>
            <circle cx={"112"} cy={"82"} r={"5.5"} fill={"#4f46e5"}></circle>
            <circle cx={"232"} cy={"232"} r={"5.5"} fill={"#ec4899"}></circle>
            <text x={"108"} y={"71"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A(2, 3)"}
            </text>
            <text x={"232"} y={"252"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A'(6, −2)"}
            </text>
            <text x={"172"} y={"74"} fontSize={"13"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"+4"}
            </text>
            <text x={"250"} y={"157"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"−5"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Problema 1: o deslocamento (4, −5) leva o robô de A(2, 3) a A′(6, −2)."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"PROBLEMA 2 — Um parque será simétrico em relação a um rio que corre ao longo da reta \\(x = 3\\). Uma árvore está em \\((1,2)\\). Onde plantar a árvore simétrica?"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Reflexão em \\(x = k\\): \\(x' = 2k - x,\\ \\ y' = y\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(x' = 2 \\cdot 3 - 1 = 5\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Árvore simétrica em \\((5,\\,2)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Conferindo: a árvore está a 2 do rio, e a nova também a 2. ✓"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 314 224"} className={"h-auto max-w-full w-[314px]"} role={"img"} aria-label={"Árvore em (1, 2) e sua simétrica em relação ao rio na reta x = 3"}>
            <line x1={"22"} y1={"202"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"52"} y1={"202"} x2={"52"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"82"} y1={"202"} x2={"82"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"112"} y1={"202"} x2={"112"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"142"} y1={"202"} x2={"142"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"172"} y1={"202"} x2={"172"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"202"} y1={"202"} x2={"202"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"232"} y1={"202"} x2={"232"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"262"} y1={"202"} x2={"262"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"292"} y1={"202"} x2={"292"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"202"} x2={"292"} y2={"202"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"172"} x2={"292"} y2={"172"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"142"} x2={"292"} y2={"142"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"112"} x2={"292"} y2={"112"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"82"} x2={"292"} y2={"82"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"52"} x2={"292"} y2={"52"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"292"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"172"} x2={"292"} y2={"172"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"52"} y1={"202"} x2={"52"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"292,172 285,168 285,176"} fill={"#475569"}></polygon>
            <polygon points={"52,22 48,29 56,29"} fill={"#475569"}></polygon>
            <text x={"290"} y={"163"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"61"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"82"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"112"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"142"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"172"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"202"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"5"}
            </text>
            <text x={"232"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"6"}
            </text>
            <text x={"262"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"7"}
            </text>
            <text x={"292"} y={"186"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"8"}
            </text>
            <text x={"46"} y={"206"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"46"} y={"146"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"46"} y={"116"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"46"} y={"86"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"46"} y={"56"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"46"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"46"} y={"185"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polyline points={"142,202 142,22"} fill={"none"} stroke={"#0ea5e9"} strokeWidth={"6"} strokeLinejoin={"round"} strokeLinecap={"round"}></polyline>
            <line x1={"82"} y1={"112"} x2={"198.0"} y2={"112.0"} stroke={"#94a3b8"} strokeWidth={"1.8"} strokeDasharray={"5 4"}></line>
            <polygon points={"202,112 193.7,115.5 193.7,108.5"} fill={"#94a3b8"}></polygon>
            <circle cx={"82"} cy={"112"} r={"5.5"} fill={"#4f46e5"}></circle>
            <circle cx={"202"} cy={"112"} r={"5.5"} fill={"#ec4899"}></circle>
            <text x={"82"} y={"102"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"(1, 2)"}
            </text>
            <text x={"202"} y={"102"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"(5, 2)"}
            </text>
            <text x={"180"} y={"37"} fontSize={"12"} fontWeight={"700"} fill={"#0369a1"} textAnchor={"middle"}>
              {"rio: x = 3"}
            </text>
            <text x={"112"} y={"124"} fontSize={"12"} fontWeight={"700"} fill={"#b45309"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"172"} y={"124"} fontSize={"12"} fontWeight={"700"} fill={"#b45309"} textAnchor={"middle"}>
              {"2"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Problema 2: as duas árvores estão a 2 unidades do rio, uma de cada lado."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"PROBLEMA 3 — A ponta de uma hélice está em \\(P(4,0)\\) e gira 90° (anti-horário) em torno da origem, três vezes seguidas. Quais são as posições?"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Regra do 90°: \\((x,y)\\to(-y,\\,x)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(P_1 = (-0,\\ 4) = (0,\\,4)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(P_2 = (-4,\\ 0)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"\\(P_3 = (-0,\\ -4) = (0,\\,-4)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Mais um giro de 90° e volta a \\((4,\\,0)\\): 4 giros = 360°."}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 324 324"} className={"h-auto max-w-full w-[324px]"} role={"img"} aria-label={"Ponta de hélice em (4, 0) girando 90 graus de cada vez"}>
            <line x1={"22"} y1={"302"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"50"} y1={"302"} x2={"50"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"78"} y1={"302"} x2={"78"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"106"} y1={"302"} x2={"106"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"134"} y1={"302"} x2={"134"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"162"} y1={"302"} x2={"162"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"190"} y1={"302"} x2={"190"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"218"} y1={"302"} x2={"218"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"246"} y1={"302"} x2={"246"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"274"} y1={"302"} x2={"274"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"302"} y1={"302"} x2={"302"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"302"} x2={"302"} y2={"302"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"274"} x2={"302"} y2={"274"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"246"} x2={"302"} y2={"246"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"218"} x2={"302"} y2={"218"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"190"} x2={"302"} y2={"190"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"162"} x2={"302"} y2={"162"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"134"} x2={"302"} y2={"134"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"106"} x2={"302"} y2={"106"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"78"} x2={"302"} y2={"78"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"50"} x2={"302"} y2={"50"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"302"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"162"} x2={"302"} y2={"162"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"162"} y1={"302"} x2={"162"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"302,162 295,158 295,166"} fill={"#475569"}></polygon>
            <polygon points={"162,22 158,29 166,29"} fill={"#475569"}></polygon>
            <text x={"300"} y={"153"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"171"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <circle cx={"162"} cy={"162"} r={"112"} fill={"none"} stroke={"#94a3b8"} strokeDasharray={"5 4"} strokeWidth={"1.6"}></circle>
            <circle cx={"274"} cy={"162"} r={"5.5"} fill={"#4f46e5"}></circle>
            <circle cx={"162"} cy={"50"} r={"5.5"} fill={"#ec4899"}></circle>
            <circle cx={"50"} cy={"162"} r={"5.5"} fill={"#ec4899"}></circle>
            <circle cx={"162"} cy={"274"} r={"5.5"} fill={"#ec4899"}></circle>
            <text x={"270"} y={"150"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"P(4, 0)"}
            </text>
            <text x={"202"} y={"54"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"P₁(0, 4)"}
            </text>
            <text x={"50"} y={"150"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"P₂(−4, 0)"}
            </text>
            <text x={"204"} y={"278"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"P₃(0, −4)"}
            </text>
            <path d={"M 223.6 162 A 61.60000000000001 61.60000000000001 0 0 0 162 100.4"} fill={"none"} stroke={"#f59e0b"} strokeWidth={"2.4"}></path>
            <text x={"204"} y={"120"} fontSize={"12"} fontWeight={"700"} fill={"#b45309"} textAnchor={"middle"}>
              {"90°"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Problema 3: os quatro pontos ficam em um círculo de raio 4, a 90° um do outro."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"PROBLEMA 4 — Uma foto de 4 cm por 3 cm é ampliada com razão \\(k = 2{,}5\\). Quais são as novas dimensões e a nova área?"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Lados × \\(k\\): \\(4 \\cdot 2{,}5 = 10\\ \\text{cm}\\) e \\(3 \\cdot 2{,}5 = 7{,}5\\ \\text{cm}\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Área nova: \\(10 \\cdot 7{,}5 = 75\\ \\text{cm}^2\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"Conferindo: \\(12 \\cdot k^2 = 12 \\cdot 6{,}25 = 75\\) ✓"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 266 150"} className={"h-auto max-w-full w-[266px]"} role={"img"} aria-label={"Foto de 4 por 3 centímetros ampliada com razão 2,5"}>
            <rect x={"14"} y={"82"} width={"56"} height={"42"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"}></rect>
            <text x={"42"} y={"140"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"4 cm × 3 cm"}
            </text>
            <rect x={"110"} y={"19"} width={"140"} height={"105"} fill={"#fce7f3"} stroke={"#ec4899"} strokeWidth={"2.5"}></rect>
            <text x={"180"} y={"140"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"10 cm × 7,5 cm"}
            </text>
            <text x={"90"} y={"82"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"k=2,5"}
            </text>
            <path d={"M 76 90 L 104 90"} stroke={"#1e293b"} strokeWidth={"2"} marker-end={"none"}></path>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Problema 4: ampliar 2,5 vezes multiplica a área por 6,25 (de 12 cm² para 75 cm²)."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-sm rounded-xl p-5 mt-4"}>
          <div className={"text-sm font-bold text-indigo-700 mb-2"}>
            {<MathText>{"PROBLEMA 5 — Uma peça tem vértices \\(A(1,1)\\), \\(B(3,1)\\), \\(C(1,2)\\). Ela é refletida no eixo \\(y\\) e depois sobe 3 unidades. Onde ficam os vértices?"}</MathText>}
          </div>
          <div className={"font-serif text-lg italic leading-8 text-blue-900"}>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"1º) \\((x,y)\\to(-x,\\,y)\\): \\(A'(-1,1)\\), \\(B'(-3,1)\\), \\(C'(-1,2)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
            <div>
              {<MathText>{"2º) \\((x,\\ y+3)\\): \\(A''(-1,4)\\), \\(B''(-3,4)\\), \\(C''(-1,5)\\)"}</MathText>}
            </div>
            {<MathText>{" "}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 284 254"} className={"h-auto max-w-full w-[284px]"} role={"img"} aria-label={"Peça refletida no eixo y e depois deslocada 3 unidades para cima"}>
            <line x1={"22"} y1={"232"} x2={"22"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"52"} y1={"232"} x2={"52"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"82"} y1={"232"} x2={"82"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"112"} y1={"232"} x2={"112"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"142"} y1={"232"} x2={"142"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"172"} y1={"232"} x2={"172"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"202"} y1={"232"} x2={"202"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"232"} y1={"232"} x2={"232"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"262"} y1={"232"} x2={"262"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"232"} x2={"262"} y2={"232"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"202"} x2={"262"} y2={"202"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"172"} x2={"262"} y2={"172"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"142"} x2={"262"} y2={"142"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"112"} x2={"262"} y2={"112"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"82"} x2={"262"} y2={"82"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"52"} x2={"262"} y2={"52"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"22"} x2={"262"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"202"} x2={"262"} y2={"202"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"142"} y1={"232"} x2={"142"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"262,202 255,198 255,206"} fill={"#475569"}></polygon>
            <polygon points={"142,22 138,29 146,29"} fill={"#475569"}></polygon>
            <text x={"260"} y={"193"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"151"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"22"} y={"216"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-4"}
            </text>
            <text x={"52"} y={"216"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-3"}
            </text>
            <text x={"82"} y={"216"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-2"}
            </text>
            <text x={"112"} y={"216"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"172"} y={"216"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"202"} y={"216"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"232"} y={"216"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"3"}
            </text>
            <text x={"262"} y={"216"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"4"}
            </text>
            <text x={"136"} y={"236"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"136"} y={"176"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"136"} y={"146"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"2"}
            </text>
            <text x={"136"} y={"116"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"3"}
            </text>
            <text x={"136"} y={"86"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"4"}
            </text>
            <text x={"136"} y={"56"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"5"}
            </text>
            <text x={"136"} y={"26"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"6"}
            </text>
            <text x={"136"} y={"215"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <polygon points={"172,172 232,172 172,142"} fill={"#e0e7ff"} fill-opacity={"0.85"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"172"} cy={"172"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"232"} cy={"172"} r={"3.6"} fill={"#4f46e5"}></circle>
            <circle cx={"172"} cy={"142"} r={"3.6"} fill={"#4f46e5"}></circle>
            <text x={"160.4"} y={"181.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"A"}
            </text>
            <text x={"244.6"} y={"179.2"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"B"}
            </text>
            <text x={"162.8"} y={"136.8"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"C"}
            </text>
            <polygon points={"112,172 52,172 112,142"} fill={"#fce7f3"} fill-opacity={"0.85"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"112"} cy={"172"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"52"} cy={"172"} r={"3.6"} fill={"#ec4899"}></circle>
            <circle cx={"112"} cy={"142"} r={"3.6"} fill={"#ec4899"}></circle>
            <text x={"123.6"} y={"181.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"A'"}
            </text>
            <text x={"39.4"} y={"179.2"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"B'"}
            </text>
            <text x={"121.2"} y={"136.8"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"} textAnchor={"middle"}>
              {"C'"}
            </text>
            <polygon points={"112,82 52,82 112,52"} fill={"#dcfce7"} fill-opacity={"0.85"} stroke={"#16a34a"} strokeWidth={"2.5"} strokeLinejoin={"round"}></polygon>
            <circle cx={"112"} cy={"82"} r={"3.6"} fill={"#16a34a"}></circle>
            <circle cx={"52"} cy={"82"} r={"3.6"} fill={"#16a34a"}></circle>
            <circle cx={"112"} cy={"52"} r={"3.6"} fill={"#16a34a"}></circle>
            <text x={"123.6"} y={"91.8"} fontSize={"14"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"A''"}
            </text>
            <text x={"39.4"} y={"89.2"} fontSize={"14"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"B''"}
            </text>
            <text x={"121.2"} y={"46.8"} fontSize={"14"} fontWeight={"700"} fill={"#16a34a"} textAnchor={"middle"}>
              {"C''"}
            </text>
            <line x1={"97"} y1={"154"} x2={"97.0"} y2={"68.0"} stroke={"#1e293b"} strokeWidth={"1.8"} strokeDasharray={"5 4"}></line>
            <polygon points={"97,64 100.5,72.3 93.5,72.3"} fill={"#1e293b"}></polygon>
            <text x={"82"} y={"106"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"+3"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Problema 5: reflexão no eixo y (rosa) e depois translação de 3 para cima (verde)."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-emerald-500 bg-emerald-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Dica final"}</MathText>}
          </b>
          {<MathText>{"Em problemas longos, faça uma tabela com as colunas “original → depois do 1º passo → depois do 2º passo”. Você não se perde e ainda ganha tempo para conferir."}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={15} />
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={16} />
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-gotab={"ferramentas"}>
          {<MathText>{"🧮 Abrir as calculadoras"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-goto={"8"}>
          {<MathText>{"✏️ Fazer os exercícios do nível 8"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
      </article>
      {<MathText>{" "}</MathText>}
      {<MathText>{" "}</MathText>}
      <article className={"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm scroll-mt-24 sm:p-8"} id={"l8"}>
        {<MathText>{" "}</MathText>}
        <div className={"text-[.7rem] font-extrabold uppercase tracking-[.12em] text-indigo-600"}>
          {<MathText>{"Lição 8"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <h2 className={"mt-1 text-2xl font-black text-slate-800"}>
          {<MathText>{"Erros comuns, folha de cola e ponte para a trigonometria"}</MathText>}
        </h2>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"8.1 Os erros mais comuns"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 grid gap-3 sm:grid-cols-2"}>
          <div className={"rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-7 text-slate-700"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"✅ Certo"}</MathText>}
            </b>
            <br />
            {<MathText>{"Rotação positiva é "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"anti-horária"}</MathText>}
            </b>
            {<MathText>{": \\(90^\\circ:\\ (x,y)\\to(-y,\\,x)\\)."}</MathText>}
          </div>
          <div className={"rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-7 text-slate-700"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"❌ Errado"}</MathText>}
            </b>
            <br />
            {<MathText>{"Usar \\((y,\\,-x)\\) para 90°: esse é o giro de 270° (ou 90° horário)."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <ol className={"mt-3 list-decimal space-y-1 pl-6 leading-7 text-slate-600"}>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Trocar o sinal de \\(a\\) na translação."}</MathText>}
            </b>
            {<MathText>{" “Para a esquerda” é \\(a"}</MathText>}
            {<MathText>{"<"}</MathText>}
            {<MathText>{"0\\); “para baixo”, \\(b"}</MathText>}
            {<MathText>{"<"}</MathText>}
            {<MathText>{"0\\)."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Confundir rotação horária com anti-horária."}</MathText>}
            </b>
            {<MathText>{" Sem aviso, o giro é anti-horário. 90° horário = 270° anti-horário."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Confundir 90° com 270°."}</MathText>}
            </b>
            {<MathText>{" Teste com \\((1,0)\\): 90° leva a \\((0,1)\\); 270° leva a \\((0,-1)\\)."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Refletir na reta \\(y = x\\) só trocando o sinal."}</MathText>}
            </b>
            {<MathText>{" O certo é "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"trocar as coordenadas"}</MathText>}
            </b>
            {<MathText>{": \\((x,y)\\to(y,x)\\)."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Refletir em \\(x = k\\) com \\(x' = -x\\)."}</MathText>}
            </b>
            {<MathText>{" Isso só vale para \\(k = 0\\). O certo é \\(x' = 2k - x\\)."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Multiplicar só uma coordenada por \\(k\\)"}</MathText>}
            </b>
            {<MathText>{" na homotetia. As "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"duas"}</MathText>}
            </b>
            {<MathText>{" são multiplicadas."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Esquecer que a área vai por \\(k^2\\)"}</MathText>}
            </b>
            {<MathText>{": com \\(k = 3\\), a área fica 9 vezes maior, não 3."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Usar centro na origem quando o centro é outro ponto."}</MathText>}
            </b>
            {<MathText>{" Faça: vetor \\(P-C\\), multiplique por \\(k\\), some a \\(C\\)."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Trocar a ordem da composição."}</MathText>}
            </b>
            {<MathText>{" “Primeiro A, depois B” não é “primeiro B, depois A”."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Confundir \\(A\\) com \\(A'\\)."}</MathText>}
            </b>
            {<MathText>{" O ponto \\(A\\) é o original; \\(A'\\) é a imagem. Não troque os dois nas contas."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Sinais em \\(x - p\\) com \\(p\\) negativo:"}</MathText>}
            </b>
            {<MathText>{" \\(5-(-1) = 6\\), não 4."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Dizer que a reflexão preserva o sentido."}</MathText>}
            </b>
            {<MathText>{" Só a reflexão “vira de espelho”; translação, rotação e homotetia mantêm o sentido."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
        </ol>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"8.2 Folha de cola"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <table className={"mt-4 block w-full overflow-x-auto border-collapse text-sm"}>
          <thead>
            <tr>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Transformação"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Dados"}</MathText>}
              </th>
              <th className={"whitespace-nowrap bg-indigo-100 px-3 py-2 text-left font-extrabold text-indigo-900"}>
                {<MathText>{"Regra"}</MathText>}
              </th>
            </tr>
          </thead>
          <tbody>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Translação"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"vetor \\((a,b)\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((x+a,\\ y+b)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Reflexão no eixo \\(x\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"—"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((x,\\,-y)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Reflexão no eixo \\(y\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"—"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((-x,\\,y)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Reflexão em \\(y = x\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"—"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((y,\\,x)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Reflexão em \\(y = -x\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"—"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((-y,\\,-x)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Reflexão em \\(x = k\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(k\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((2k-x,\\ y)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Reflexão em \\(y = k\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(k\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((x,\\ 2k-y)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Rotação 90° (anti-horário)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"centro \\(O\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((-y,\\ x)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Rotação 180°"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"centro \\(O\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((-x,\\,-y)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Rotação 270° (anti-horário)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"centro \\(O\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((y,\\,-x)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Homotetia, centro \\(O\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"razão \\(k\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((kx,\\ ky)\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Homotetia, centro \\(C(p,q)\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"razão \\(k\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\((p+k(x-p),\\ q+k(y-q))\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
            <tr>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"Lados, perímetro, área"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"razão \\(k\\)"}</MathText>}
              </td>
              <td className={"border-t border-slate-100 px-3 py-2 align-top text-slate-600"}>
                {<MathText>{"\\(\\times|k|\\), \\(\\times|k|\\), \\(\\times k^2\\)"}</MathText>}
              </td>
            </tr>
            {<MathText>{" "}</MathText>}
          </tbody>
        </table>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"8.3 Glossário"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <ul className={"mt-3 list-disc space-y-1 pl-6 leading-7 text-slate-600"}>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Imagem:"}</MathText>}
            </b>
            {<MathText>{" a figura (ou o ponto) obtida depois da transformação, escrita com um apóstrofo (\\(A'\\))."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Vetor de translação:"}</MathText>}
            </b>
            {<MathText>{" o par \\((a,b)\\) que diz quanto andar na horizontal e na vertical."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Eixo de simetria (ou de reflexão):"}</MathText>}
            </b>
            {<MathText>{" a reta que funciona como espelho."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Centro:"}</MathText>}
            </b>
            {<MathText>{" o ponto fixo da rotação ou da homotetia."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Razão \\(k\\):"}</MathText>}
            </b>
            {<MathText>{" o número pelo qual as distâncias ao centro são multiplicadas."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Isometria:"}</MathText>}
            </b>
            {<MathText>{" transformação que conserva as distâncias (translação, reflexão, rotação)."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Composição:"}</MathText>}
            </b>
            {<MathText>{" aplicar uma transformação e depois outra."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Congruentes:"}</MathText>}
            </b>
            {<MathText>{" mesma forma e mesmo tamanho. "}</MathText>}
            <b className={"font-bold text-slate-900"}>
              {<MathText>{"Semelhantes:"}</MathText>}
            </b>
            {<MathText>{" mesma forma, tamanho possivelmente diferente."}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
        </ul>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"8.4 Ponte para a trigonometria"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"Olhe de novo para as rotações. Se girarmos o ponto \\((1,0)\\) em torno da origem de um ângulo \\(\\theta\\) (anti-horário), ele percorre um círculo de raio 1. Com \\(\\theta = 90^\\circ\\) ele vai para \\((0,1)\\); com \\(180^\\circ\\), para \\((-1,0)\\); com \\(270^\\circ\\), para \\((0,-1)\\). Para "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"qualquer"}</MathText>}
          </b>
          {<MathText>{" ângulo, o ponto onde ele chega tem coordenadas que ganham nomes especiais: "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"cosseno"}</MathText>}
          </b>
          {<MathText>{" e "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"seno"}</MathText>}
          </b>
          {<MathText>{" de \\(\\theta\\)."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-indigo-300 bg-[#fffef9] p-5 text-center text-xl"}>
          {<MathText>{"\\[ (1,\\,0) \\ \\xrightarrow{\\ \\text{giro de }\\theta\\ }\\ (\\cos\\theta,\\ \\operatorname{sen}\\theta) \\]"}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center"}>
          <svg viewBox={"0 0 338 268"} className={"h-auto max-w-full w-[338px]"} role={"img"} aria-label={"Círculo de raio 1: girando o ponto (1, 0) obtemos (cos θ, sen θ)"}>
            <line x1={"71"} y1={"246"} x2={"71"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"141"} y1={"246"} x2={"141"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"211"} y1={"246"} x2={"211"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"281"} y1={"246"} x2={"281"} y2={"22"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"204"} x2={"316"} y2={"204"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"134"} x2={"316"} y2={"134"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"64"} x2={"316"} y2={"64"} stroke={"#e2e8f0"} strokeWidth={"1"}></line>
            <line x1={"22"} y1={"134"} x2={"316"} y2={"134"} stroke={"#475569"} strokeWidth={"2"}></line>
            <line x1={"141"} y1={"246"} x2={"141"} y2={"22"} stroke={"#475569"} strokeWidth={"2"}></line>
            <polygon points={"316,134 309,130 309,138"} fill={"#475569"}></polygon>
            <polygon points={"141,22 137,29 145,29"} fill={"#475569"}></polygon>
            <text x={"314"} y={"125"} fontSize={"13"} fontWeight={"700"} fill={"#475569"} textAnchor={"end"}>
              {"x"}
            </text>
            <text x={"150"} y={"32"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              {"y"}
            </text>
            <text x={"71"} y={"148"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"-1"}
            </text>
            <text x={"211"} y={"148"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"1"}
            </text>
            <text x={"281"} y={"148"} fontSize={"11"} fill={"#64748b"} textAnchor={"middle"}>
              {"2"}
            </text>
            <text x={"135"} y={"208"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"-1"}
            </text>
            <text x={"135"} y={"68"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"1"}
            </text>
            <text x={"135"} y={"147"} fontSize={"11"} fill={"#64748b"} textAnchor={"end"}>
              {"0"}
            </text>
            <circle cx={"141"} cy={"134"} r={"70"} fill={"none"} stroke={"#4f46e5"} strokeWidth={"2.4"}></circle>
            <line x1={"141"} y1={"134"} x2={"198.3"} y2={"93.8"} stroke={"#ec4899"} strokeWidth={"2.4"}></line>
            <line x1={"198.3"} y1={"93.8"} x2={"198.3"} y2={"134"} stroke={"#f59e0b"} strokeWidth={"2.2"} strokeDasharray={"4 3"}></line>
            <line x1={"141"} y1={"134"} x2={"198.3"} y2={"134"} stroke={"#16a34a"} strokeWidth={"2.6"}></line>
            <path d={"M 167 134 A 26 26 0 0 0 162.3 119.1"} fill={"none"} stroke={"#f59e0b"} strokeWidth={"2.4"}></path>
            <text x={"175"} y={"126"} fontSize={"14"} fontWeight={"700"} fill={"#b45309"}>
              {"θ"}
            </text>
            <circle cx={"198.3"} cy={"93.8"} r={"5.5"} fill={"#ec4899"}></circle>
            <text x={"206.3"} y={"85.8"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              {"(cos θ, sen θ)"}
            </text>
            <circle cx={"211"} cy={"134"} r={"5"} fill={"#4f46e5"}></circle>
            <text x={"237"} y={"154"} fontSize={"12"} fontWeight={"700"} fill={"#4f46e5"} textAnchor={"middle"}>
              {"0°: (1, 0)"}
            </text>
            <circle cx={"141"} cy={"64"} r={"5"} fill={"#1e293b"}></circle>
            <text x={"191"} y={"56"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"90°: (0, 1)"}
            </text>
            <circle cx={"71"} cy={"134"} r={"5"} fill={"#1e293b"}></circle>
            <text x={"71"} y={"122"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"180°: (−1, 0)"}
            </text>
            <circle cx={"141"} cy={"204"} r={"5"} fill={"#1e293b"}></circle>
            <text x={"193"} y={"222"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"} textAnchor={"middle"}>
              {"270°: (0, −1)"}
            </text>
          </svg>
          <div className={"text-xs text-slate-500 mt-1"}>
            {<MathText>{"Girando o ponto (1, 0) de θ em torno da origem, ele chega a (cos θ, sen θ). Nos giros de 90°, 180° e 270° essas coordenadas são números simples."}</MathText>}
          </div>
        </div>
        {<MathText>{" "}</MathText>}
        <p className={"mt-3 leading-7 text-slate-600"}>
          {<MathText>{"E aquela razão “cateto oposto ÷ hipotenusa” que apareceu na semelhança de triângulos retângulos? É o "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"seno"}</MathText>}
          </b>
          {<MathText>{". Em um círculo de raio 1 a hipotenusa vale 1, e o cateto oposto é exatamente a altura do ponto. Por isso, a trigonometria é o próximo passo natural: ela junta "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"semelhança"}</MathText>}
          </b>
          {<MathText>{" (razões que não dependem do tamanho) e "}</MathText>}
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"rotação"}</MathText>}
          </b>
          {<MathText>{" (pontos girando no plano)."}</MathText>}
        </p>
        {<MathText>{" "}</MathText>}
        <h3 className={"mt-7 text-lg font-extrabold text-indigo-800"}>
          {<MathText>{"8.5 Estou pronto para a trigonometria?"}</MathText>}
        </h3>
        {<MathText>{" "}</MathText>}
        <ul className={"mt-3 list-disc space-y-1 pl-6 leading-7 text-slate-600"}>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"Sei marcar pontos no plano cartesiano e dizer em que quadrante estão?"}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"Sei aplicar translação, reflexão (nos eixos e em \\(y=x\\)) e rotação (90°, 180°, 270°) a um ponto?"}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"Sei fazer uma homotetia com centro na origem e com centro em outro ponto?"}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"Sei que perímetro vai por \\(k\\) e área por \\(k^2\\)?"}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"Sei identificar a transformação olhando as coordenadas de \\(A\\) e \\(A'\\)?"}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
          <li className={"mt-1"}>
            {<MathText>{"Sei calcular catetos e hipotenusa com Pitágoras e usar razões em triângulos semelhantes?"}</MathText>}
          </li>
          {<MathText>{" "}</MathText>}
        </ul>
        {<MathText>{" "}</MathText>}
        <div className={"mt-4 rounded-2xl p-4 text-[.95rem] leading-7 text-slate-700 border-l-4 border-emerald-500 bg-emerald-50"}>
          <b className={"font-bold text-slate-900"}>
            {<MathText>{"Parabéns!"}</MathText>}
          </b>
          {<MathText>{"Se você respondeu “sim” a tudo, está pronto para a trigonometria. Se algum “não” apareceu, volte à lição correspondente e refaça os exercícios daquele nível."}</MathText>}
        </div>
        {<MathText>{" "}</MathText>}
        <TransformacoesGeometricasQuickCheck index={17} />
        {<MathText>{" "}</MathText>}
        <button className={"mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-indigo-700"} data-goto={"8"}>
          {<MathText>{"✏️ Fazer os exercícios do nível 8"}</MathText>}
        </button>
        {<MathText>{" "}</MathText>}
      </article>
      {<MathText>{" "}</MathText>}
    </div>
    {<MathText>{" "}</MathText>}
  </div>
  {<MathText>{" "}</MathText>}
</section>
{<MathText>{" "}</MathText>}
    </div>
  );
}
