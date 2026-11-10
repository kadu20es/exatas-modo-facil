import { useEffect } from 'react';
import { MathText } from '../../../Math/MathRenderer';
import { GeometryQuickCheck } from '../../../exercises/matematica/geometria-basica/Interacoes';

export function GeometriaBasicaTheory() {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.geometry-basica-toc a'));
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) links.forEach(link => link.classList.toggle('on', link.hash === `#${entry.target.id}`));
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    document.querySelectorAll('.geometry-basica-lesson').forEach(lesson => observer.observe(lesson));
    return () => observer.disconnect();
  }, []);
  return (
<section className="space-y-6" id="sec-teoria">
  <div className="rounded-3xl p-7 sm:p-10 bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 text-white shadow-xl">
    <span className="text-xs uppercase tracking-widest font-bold text-indigo-200">
      <MathText>{"Curso completo · base para o 8º ano · do zero"}</MathText>
    </span>
    <h1 className="text-3xl sm:text-5xl font-black mt-2">
      <MathText>{"Geometria Básica"}</MathText>
    </h1>
    <p className="mt-4 max-w-3xl text-indigo-100 leading-7">
      <MathText>{"Pontos, retas, ângulos, triângulos, perímetro, área, números inteiros e plano cartesiano. Você não precisa saber nada sobre o assunto: aqui você vai entender "}</MathText>
      <b>
        <MathText>{"o que é"}</MathText>
      </b>
      <MathText>{", "}</MathText>
      <b>
        <MathText>{"como funciona"}</MathText>
      </b>
      <MathText>{", "}</MathText>
      <b>
        <MathText>{"para que serve"}</MathText>
      </b>
      <MathText>{", "}</MathText>
      <b>
        <MathText>{"como armar cada conta no papel"}</MathText>
      </b>
      <MathText>{" e "}</MathText>
      <b>
        <MathText>{"como resolver problemas"}</MathText>
      </b>
      <MathText>{". Este curso prepara você para o "}</MathText>
      <b>
        <MathText>{"Teorema de Pitágoras"}</MathText>
      </b>
      <MathText>{", as "}</MathText>
      <b>
        <MathText>{"relações métricas"}</MathText>
      </b>
      <MathText>{", as "}</MathText>
      <b>
        <MathText>{"transformações geométricas"}</MathText>
      </b>
      <MathText>{" e, depois, a "}</MathText>
      <b>
        <MathText>{"trigonometria"}</MathText>
      </b>
      <MathText>{"."}</MathText>
    </p>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 items-start">
    <aside className="geometry-basica-toc lg:sticky lg:top-20 bg-white rounded-2xl border p-3 shadow-sm lg:max-h-[calc(100vh-6rem)] overflow-y-auto">
      <div className="text-[11px] font-black uppercase tracking-widest text-indigo-600 px-2 pb-1">
        <MathText>{"Lições"}</MathText>
      </div>
      <a className="block px-3 py-2 rounded-xl text-sm text-slate-600 font-semibold hover:bg-indigo-100 hover:text-indigo-800 [&.on]:bg-indigo-100 [&.on]:text-indigo-800 [&.on]:font-extrabold" href={"#l0"}>
        <MathText>{"0 · Comece por aqui"}</MathText>
      </a>
      <a className="block px-3 py-2 rounded-xl text-sm text-slate-600 font-semibold hover:bg-indigo-100 hover:text-indigo-800 [&.on]:bg-indigo-100 [&.on]:text-indigo-800 [&.on]:font-extrabold" href={"#l1"}>
        <MathText>{"1 · Ponto, reta, segmento e medidas"}</MathText>
      </a>
      <a className="block px-3 py-2 rounded-xl text-sm text-slate-600 font-semibold hover:bg-indigo-100 hover:text-indigo-800 [&.on]:bg-indigo-100 [&.on]:text-indigo-800 [&.on]:font-extrabold" href={"#l2"}>
        <MathText>{"2 · Retas: paralelas e perpendiculares"}</MathText>
      </a>
      <a className="block px-3 py-2 rounded-xl text-sm text-slate-600 font-semibold hover:bg-indigo-100 hover:text-indigo-800 [&.on]:bg-indigo-100 [&.on]:text-indigo-800 [&.on]:font-extrabold" href={"#l3"}>
        <MathText>{"3 · Ângulos"}</MathText>
      </a>
      <a className="block px-3 py-2 rounded-xl text-sm text-slate-600 font-semibold hover:bg-indigo-100 hover:text-indigo-800 [&.on]:bg-indigo-100 [&.on]:text-indigo-800 [&.on]:font-extrabold" href={"#l4"}>
        <MathText>{"4 · Relações entre ângulos"}</MathText>
      </a>
      <a className="block px-3 py-2 rounded-xl text-sm text-slate-600 font-semibold hover:bg-indigo-100 hover:text-indigo-800 [&.on]:bg-indigo-100 [&.on]:text-indigo-800 [&.on]:font-extrabold" href={"#l5"}>
        <MathText>{"5 · Polígonos e quadriláteros"}</MathText>
      </a>
      <a className="block px-3 py-2 rounded-xl text-sm text-slate-600 font-semibold hover:bg-indigo-100 hover:text-indigo-800 [&.on]:bg-indigo-100 [&.on]:text-indigo-800 [&.on]:font-extrabold" href={"#l6"}>
        <MathText>{"6 · Triângulos"}</MathText>
      </a>
      <a className="block px-3 py-2 rounded-xl text-sm text-slate-600 font-semibold hover:bg-indigo-100 hover:text-indigo-800 [&.on]:bg-indigo-100 [&.on]:text-indigo-800 [&.on]:font-extrabold" href={"#l7"}>
        <MathText>{"7 · Perímetro"}</MathText>
      </a>
      <a className="block px-3 py-2 rounded-xl text-sm text-slate-600 font-semibold hover:bg-indigo-100 hover:text-indigo-800 [&.on]:bg-indigo-100 [&.on]:text-indigo-800 [&.on]:font-extrabold" href={"#l8"}>
        <MathText>{"8 · Área e unidades de área"}</MathText>
      </a>
      <a className="block px-3 py-2 rounded-xl text-sm text-slate-600 font-semibold hover:bg-indigo-100 hover:text-indigo-800 [&.on]:bg-indigo-100 [&.on]:text-indigo-800 [&.on]:font-extrabold" href={"#l9"}>
        <MathText>{"9 · Circunferência e círculo"}</MathText>
      </a>
      <a className="block px-3 py-2 rounded-xl text-sm text-slate-600 font-semibold hover:bg-indigo-100 hover:text-indigo-800 [&.on]:bg-indigo-100 [&.on]:text-indigo-800 [&.on]:font-extrabold" href={"#l10"}>
        <MathText>{"10 · Números inteiros"}</MathText>
      </a>
      <a className="block px-3 py-2 rounded-xl text-sm text-slate-600 font-semibold hover:bg-indigo-100 hover:text-indigo-800 [&.on]:bg-indigo-100 [&.on]:text-indigo-800 [&.on]:font-extrabold" href={"#l11"}>
        <MathText>{"11 · Plano cartesiano"}</MathText>
      </a>
      <a className="block px-3 py-2 rounded-xl text-sm text-slate-600 font-semibold hover:bg-indigo-100 hover:text-indigo-800 [&.on]:bg-indigo-100 [&.on]:text-indigo-800 [&.on]:font-extrabold" href={"#l12"}>
        <MathText>{"12 · Congruência e simetria"}</MathText>
      </a>
      <a className="block px-3 py-2 rounded-xl text-sm text-slate-600 font-semibold hover:bg-indigo-100 hover:text-indigo-800 [&.on]:bg-indigo-100 [&.on]:text-indigo-800 [&.on]:font-extrabold" href={"#l13"}>
        <MathText>{"13 · Resolvendo problemas no papel"}</MathText>
      </a>
      <a className="block px-3 py-2 rounded-xl text-sm text-slate-600 font-semibold hover:bg-indigo-100 hover:text-indigo-800 [&.on]:bg-indigo-100 [&.on]:text-indigo-800 [&.on]:font-extrabold" href={"#l14"}>
        <MathText>{"14 · Erros comuns e folha de cola"}</MathText>
      </a>
    </aside>
    <div className="space-y-6 min-w-0">
      <article className="geometry-basica-lesson bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_.lesson-tag]:text-[.7rem] [&_.lesson-tag]:font-extrabold [&_.lesson-tag]:tracking-[.12em] [&_.lesson-tag]:uppercase [&_.lesson-tag]:text-indigo-600 [&_h2]:text-[1.6rem] [&_h2]:font-black [&_h2]:mt-1 [&_h2]:text-slate-800 [&_h3]:font-extrabold [&_h3]:text-lg [&_h3]:mt-7 [&_h3]:text-indigo-800 [&_h4]:mt-4 [&_h4]:font-bold [&_p]:leading-[1.85] [&_p]:text-slate-600 [&_p]:mt-3 [&_ul]:pl-6 [&_ul]:text-slate-600 [&_ul]:leading-[1.85] [&_ul]:mt-2 [&_ul]:list-disc [&_ol]:pl-6 [&_ol]:text-slate-600 [&_ol]:leading-[1.85] [&_ol]:mt-2 [&_ol]:list-decimal [&_li]:mt-1 [&_b]:text-slate-800 [&_strong]:text-slate-800" id={"l0"}>
        <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 0"}</MathText>
        </div>
        <h2>
          <MathText>{"Comece por aqui"}</MathText>
        </h2>
        <p>
          <b>
            <MathText>{"Geometria"}</MathText>
          </b>
          <MathText>{" é a parte da matemática que estuda as "}</MathText>
          <b>
            <MathText>{"formas"}</MathText>
          </b>
          <MathText>{" (triângulos, quadrados, círculos…), os "}</MathText>
          <b>
            <MathText>{"tamanhos"}</MathText>
          </b>
          <MathText>{" (quanto mede, quanto cobre) e as "}</MathText>
          <b>
            <MathText>{"posições"}</MathText>
          </b>
          <MathText>{" (onde está, para que lado aponta). A palavra vem do grego e significa, mais ou menos, "}</MathText>
          <i>
            <MathText>{"“medir a terra”"}</MathText>
          </i>
          <MathText>{": os antigos egípcios já usavam geometria para refazer os limites dos terrenos depois das cheias do rio Nilo."}</MathText>
        </p>
        <div className="grid gap-3 mt-4 md:grid-cols-3 [&>div]:rounded-2xl [&>div]:p-4 [&>div]:text-sm [&>div]:leading-7 [&>div]:text-slate-700">
          <div className="bg-indigo-50">
            <b>
              <MathText>{"1 · Formas"}</MathText>
            </b>
            <br />
            <MathText>{"Olhe ao redor: a tela é um retângulo, a roda é um círculo, o telhado tem triângulos. Geometria dá "}</MathText>
            <b>
              <MathText>{"nome"}</MathText>
            </b>
            <MathText>{" e "}</MathText>
            <b>
              <MathText>{"regras"}</MathText>
            </b>
            <MathText>{" a cada forma."}</MathText>
          </div>
          <div className="bg-amber-50">
            <b>
              <MathText>{"2 · Medidas"}</MathText>
            </b>
            <br />
            <MathText>{"Quanto mede o contorno? Quanto de piso eu preciso? Quanto abre esta porta? Aqui você aprende a "}</MathText>
            <b>
              <MathText>{"medir e calcular"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </div>
          <div className="bg-emerald-50">
            <b>
              <MathText>{"3 · Posições"}</MathText>
            </b>
            <br />
            <MathText>{"Duas ruas se cruzam? Uma é paralela à outra? Onde fica o ponto no mapa? Para isso existem as retas e o "}</MathText>
            <b>
              <MathText>{"plano cartesiano"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </div>
        </div>
        <h3>
          <MathText>{"0.1 Para que serve geometria?"}</MathText>
        </h3>
        <ul>
          <li>
            <b>
              <MathText>{"Construção:"}</MathText>
            </b>
            <MathText>{" o pedreiro confere se a parede está em “esquadro” (ângulo de 90°) e calcula quanta tinta e quanto piso comprar."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Mapas e GPS:"}</MathText>
            </b>
            <MathText>{" localizar um ponto usando duas coordenadas, como na batalha naval."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Jogos e animações:"}</MathText>
            </b>
            <MathText>{" cada personagem é feito de milhares de triângulos que se movem na tela."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Design e costura:"}</MathText>
            </b>
            <MathText>{" encaixar peças, cortar tecido sem desperdício, desenhar logos."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Esportes:"}</MathText>
            </b>
            <MathText>{" o ângulo do chute, a distância do arremesso, as medidas da quadra."}</MathText>
          </li>
        </ul>
        <h3>
          <MathText>{"0.2 Por que este é um curso “de base”?"}</MathText>
        </h3>
        <p>
          <MathText>{"Logo depois deste curso você vai estudar três assuntos muito importantes: o "}</MathText>
          <b>
            <MathText>{"Teorema de Pitágoras"}</MathText>
          </b>
          <MathText>{", as "}</MathText>
          <b>
            <MathText>{"relações métricas no triângulo retângulo"}</MathText>
          </b>
          <MathText>{" e as "}</MathText>
          <b>
            <MathText>{"transformações geométricas"}</MathText>
          </b>
          <MathText>{" (mover, girar e espelhar figuras). Mais adiante vem a "}</MathText>
          <b>
            <MathText>{"trigonometria"}</MathText>
          </b>
          <MathText>{". Todos eles usam as ideias deste curso: "}</MathText>
          <b>
            <MathText>{"ângulos, triângulos, perímetro, área, números inteiros e plano cartesiano"}</MathText>
          </b>
          <MathText>{". Quem domina a base aprende o resto com muito menos esforço."}</MathText>
        </p>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-blue-500 bg-blue-50">
          <b>
            <MathText>{"Combinado"}</MathText>
          </b>
          <MathText>{"Você não precisa saber nada de geometria para começar. Se algo parecer difícil, volte uma lição: tudo aqui foi colocado em ordem de dificuldade."}</MathText>
        </div>
        <h3>
          <MathText>{"0.3 Seu material de trabalho"}</MathText>
        </h3>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 100"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Quatro instrumentos: régua, esquadro, transferidor e compasso"}>
            <rect x={"5"} y={"25"} width={"100"} height={"28"} rx={"3"} fill={"#fef3c7"} stroke={"#d97706"} strokeWidth={"2"}>
            </rect>
            <line x1={"10"} y1={"25"} x2={"10"} y2={"40"} stroke={"#92400e"} strokeWidth={"1.3"}>
            </line>
            <line x1={"19"} y1={"25"} x2={"19"} y2={"34"} stroke={"#92400e"} strokeWidth={"1.3"}>
            </line>
            <line x1={"28"} y1={"25"} x2={"28"} y2={"34"} stroke={"#92400e"} strokeWidth={"1.3"}>
            </line>
            <line x1={"37"} y1={"25"} x2={"37"} y2={"34"} stroke={"#92400e"} strokeWidth={"1.3"}>
            </line>
            <line x1={"46"} y1={"25"} x2={"46"} y2={"34"} stroke={"#92400e"} strokeWidth={"1.3"}>
            </line>
            <line x1={"55"} y1={"25"} x2={"55"} y2={"40"} stroke={"#92400e"} strokeWidth={"1.3"}>
            </line>
            <line x1={"64"} y1={"25"} x2={"64"} y2={"34"} stroke={"#92400e"} strokeWidth={"1.3"}>
            </line>
            <line x1={"73"} y1={"25"} x2={"73"} y2={"34"} stroke={"#92400e"} strokeWidth={"1.3"}>
            </line>
            <line x1={"82"} y1={"25"} x2={"82"} y2={"34"} stroke={"#92400e"} strokeWidth={"1.3"}>
            </line>
            <line x1={"91"} y1={"25"} x2={"91"} y2={"34"} stroke={"#92400e"} strokeWidth={"1.3"}>
            </line>
            <line x1={"100"} y1={"25"} x2={"100"} y2={"40"} stroke={"#92400e"} strokeWidth={"1.3"}>
            </line>
            <text x={"55"} y={"88"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"régua"}</MathText>
            </text>
            <polygon points={"125,70 205,70 125,12"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"}>
            </polygon>
            <polyline points={"141,70 141,54 125,54"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <text x={"165"} y={"88"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"esquadro"}</MathText>
            </text>
            <path d={"M214,70 A48 48 0 0 1 310,70 Z"} fill={"#e0f2fe"} stroke={"#0369a1"} strokeWidth={"2"}>
            </path>
            <line x1={"310"} y1={"70"} x2={"298"} y2={"70"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"308.4"} y1={"57.6"} x2={"302.6"} y2={"59.1"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"303.6"} y1={"46"} x2={"298.4"} y2={"49"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"295.9"} y1={"36.1"} x2={"287.5"} y2={"44.5"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"286"} y1={"28.4"} x2={"283"} y2={"33.6"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"274.4"} y1={"23.6"} x2={"272.9"} y2={"29.4"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"262"} y1={"22"} x2={"262"} y2={"34"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"249.6"} y1={"23.6"} x2={"251.1"} y2={"29.4"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"238"} y1={"28.4"} x2={"241"} y2={"33.6"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"228.1"} y1={"36.1"} x2={"236.5"} y2={"44.5"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"220.4"} y1={"46"} x2={"225.6"} y2={"49"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"215.6"} y1={"57.6"} x2={"221.4"} y2={"59.1"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"214"} y1={"70"} x2={"226"} y2={"70"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <circle cx={"262"} cy={"70"} r={"3"} fill={"#0369a1"}>
            </circle>
            <text x={"262"} y={"88"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"transferidor"}</MathText>
            </text>
            <circle cx={"372"} cy={"14"} r={"6"} fill={"#64748b"}>
            </circle>
            <line x1={"372"} y1={"18"} x2={"350"} y2={"70"} stroke={"#475569"} strokeWidth={"5"} strokeLinecap={"round"}>
            </line>
            <line x1={"372"} y1={"18"} x2={"394"} y2={"62"} stroke={"#475569"} strokeWidth={"5"} strokeLinecap={"round"}>
            </line>
            <polygon points={"391,62 397,62 394,74"} fill={"#ec4899"}>
            </polygon>
            <text x={"372"} y={"88"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"compasso"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Os quatro instrumentos da geometria"}</MathText>
          </div>
        </div>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Instrumento"}</MathText>
              </th>
              <th>
                <MathText>{"Serve para"}</MathText>
              </th>
              <th>
                <MathText>{"Dica de uso"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>
                  <MathText>{"Régua"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"medir e traçar segmentos"}</MathText>
              </td>
              <td>
                <MathText>{"O zero da régua pode não ficar na ponta! Alinhe o "}</MathText>
                <b>
                  <MathText>{"0"}</MathText>
                </b>
                <MathText>{" com o início do segmento."}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Esquadro"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"traçar retas perpendiculares (90°) e paralelas"}</MathText>
              </td>
              <td>
                <MathText>{"Dois lados formam um ângulo reto. Apoie-o sempre numa régua para não escorregar."}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Transferidor"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"medir e construir ângulos, em graus"}</MathText>
              </td>
              <td>
                <MathText>{"O furinho (centro) vai sobre o vértice do ângulo."}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Compasso"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"desenhar circunferências e transportar medidas"}</MathText>
              </td>
              <td>
                <MathText>{"Segure só pela parte de cima e gire com a ponta fixa no centro."}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <MathText>{"Além deles: "}</MathText>
          <b>
            <MathText>{"lápis apontado"}</MathText>
          </b>
          <MathText>{", "}</MathText>
          <b>
            <MathText>{"borracha"}</MathText>
          </b>
          <MathText>{" e, de preferência, um "}</MathText>
          <b>
            <MathText>{"caderno quadriculado"}</MathText>
          </b>
          <MathText>{". Desenhar de verdade faz você entender muito mais do que só ler."}</MathText>
        </p>
        <h3>
          <MathText>{"0.4 Como estudar este curso"}</MathText>
        </h3>
        <ol>
          <li>
            <MathText>{"Leia as lições "}</MathText>
            <b>
              <MathText>{"na ordem"}</MathText>
            </b>
            <MathText>{". Cada uma usa a anterior."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Desenhe"}</MathText>
            </b>
            <MathText>{" cada figura no caderno e "}</MathText>
            <b>
              <MathText>{"refaça os exemplos"}</MathText>
            </b>
            <MathText>{" antes de olhar a solução."}</MathText>
          </li>
          <li>
            <MathText>{"Responda os "}</MathText>
            <b>
              <MathText>{"“Teste rápido”"}</MathText>
            </b>
            <MathText>{" (caixas azuis) para saber se pode avançar."}</MathText>
          </li>
          <li>
            <MathText>{"Depois de cada lição, faça os "}</MathText>
            <b>
              <MathText>{"exercícios do nível indicado"}</MathText>
            </b>
            <MathText>{". Eles começam fáceis e ficam mais difíceis, com "}</MathText>
            <b>
              <MathText>{"contas"}</MathText>
            </b>
            <MathText>{" e também "}</MathText>
            <b>
              <MathText>{"problemas que pedem interpretação"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </li>
          <li>
            <MathText>{"Use o "}</MathText>
            <b>
              <MathText>{"Laboratório"}</MathText>
            </b>
            <MathText>{" para experimentar e as "}</MathText>
            <b>
              <MathText>{"Calculadoras"}</MathText>
            </b>
            <MathText>{" para conferir suas contas passo a passo."}</MathText>
          </li>
          <li>
            <MathText>{"Travou? Use a "}</MathText>
            <b>
              <MathText>{"💡 Dica"}</MathText>
            </b>
            <MathText>{"; se ainda assim não sair, veja a "}</MathText>
            <b>
              <MathText>{"resolução passo a passo"}</MathText>
            </b>
            <MathText>{" e tente outro exercício parecido."}</MathText>
          </li>
        </ol>
        <h3>
          <MathText>{"0.5 Mapa do curso"}</MathText>
        </h3>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
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
            <tr>
              <td>
                <MathText>{"1"}</MathText>
              </td>
              <td>
                <MathText>{"Ponto, reta, semirreta e segmento; medir com régua; unidades de comprimento"}</MathText>
              </td>
              <td>
                <MathText>{"Níveis 1 e 2"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"2"}</MathText>
              </td>
              <td>
                <MathText>{"Retas paralelas, concorrentes e perpendiculares"}</MathText>
              </td>
              <td>
                <MathText>{"Nível 3"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"3"}</MathText>
              </td>
              <td>
                <MathText>{"Ângulos: medir, construir e classificar"}</MathText>
              </td>
              <td>
                <MathText>{"Nível 4"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"4"}</MathText>
              </td>
              <td>
                <MathText>{"Relações entre ângulos (complementares, suplementares, opostos pelo vértice, paralelas) e equações"}</MathText>
              </td>
              <td>
                <MathText>{"Nível 5"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"5"}</MathText>
              </td>
              <td>
                <MathText>{"Polígonos e quadriláteros"}</MathText>
              </td>
              <td>
                <MathText>{"Nível 6"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"6"}</MathText>
              </td>
              <td>
                <MathText>{"Triângulos: classificação, soma dos ângulos, altura"}</MathText>
              </td>
              <td>
                <MathText>{"Nível 7"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"7"}</MathText>
              </td>
              <td>
                <MathText>{"Perímetro"}</MathText>
              </td>
              <td>
                <MathText>{"Nível 8"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"8"}</MathText>
              </td>
              <td>
                <MathText>{"Área e unidades de área"}</MathText>
              </td>
              <td>
                <MathText>{"Níveis 9 e 10"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"9"}</MathText>
              </td>
              <td>
                <MathText>{"Circunferência e círculo (e o número π)"}</MathText>
              </td>
              <td>
                <MathText>{"Nível 11"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"10"}</MathText>
              </td>
              <td>
                <MathText>{"Números inteiros e reta numérica"}</MathText>
              </td>
              <td>
                <MathText>{"Nível 12"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"11"}</MathText>
              </td>
              <td>
                <MathText>{"Plano cartesiano"}</MathText>
              </td>
              <td>
                <MathText>{"Nível 13"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"12"}</MathText>
              </td>
              <td>
                <MathText>{"Congruência e simetria"}</MathText>
              </td>
              <td>
                <MathText>{"Nível 14"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"13 e 14"}</MathText>
              </td>
              <td>
                <MathText>{"Resolver problemas no papel; erros comuns; folha de cola"}</MathText>
              </td>
              <td>
                <MathText>{"Nível 15 (desafios)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <GeometryQuickCheck index={0} />
        <a className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" href={"#l1"} data-lesson={"l1"}>
          <MathText>{"Começar pela lição 1 →"}</MathText>
        </a>
      </article>
      <article className="geometry-basica-lesson bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_.lesson-tag]:text-[.7rem] [&_.lesson-tag]:font-extrabold [&_.lesson-tag]:tracking-[.12em] [&_.lesson-tag]:uppercase [&_.lesson-tag]:text-indigo-600 [&_h2]:text-[1.6rem] [&_h2]:font-black [&_h2]:mt-1 [&_h2]:text-slate-800 [&_h3]:font-extrabold [&_h3]:text-lg [&_h3]:mt-7 [&_h3]:text-indigo-800 [&_h4]:mt-4 [&_h4]:font-bold [&_p]:leading-[1.85] [&_p]:text-slate-600 [&_p]:mt-3 [&_ul]:pl-6 [&_ul]:text-slate-600 [&_ul]:leading-[1.85] [&_ul]:mt-2 [&_ul]:list-disc [&_ol]:pl-6 [&_ol]:text-slate-600 [&_ol]:leading-[1.85] [&_ol]:mt-2 [&_ol]:list-decimal [&_li]:mt-1 [&_b]:text-slate-800 [&_strong]:text-slate-800" id={"l1"}>
        <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 1"}</MathText>
        </div>
        <h2>
          <MathText>{"Ponto, reta, segmento e medidas de comprimento"}</MathText>
        </h2>
        <p>
          <MathText>{"Toda a geometria é construída a partir de poucas ideias simples. Nesta lição você conhece as quatro primeiras e aprende a "}</MathText>
          <b>
            <MathText>{"medir"}</MathText>
          </b>
          <MathText>{" com régua e a "}</MathText>
          <b>
            <MathText>{"trocar de unidade"}</MathText>
          </b>
          <MathText>{" (de metros para centímetros, por exemplo)."}</MathText>
        </p>
        <h3>
          <MathText>{"1.1 Ponto, reta, semirreta e segmento"}</MathText>
        </h3>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 210"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Ponto, reta, semirreta e segmento desenhados"}>
            <circle cx={"100"} cy={"30"} r={"5"} fill={"#ec4899"}>
            </circle>
            <text x={"100"} y={"16"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"A"}</MathText>
            </text>
            <text x={"215"} y={"28"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <tspan fontWeight={"800"}>
                <MathText>{"Ponto"}</MathText>
              </tspan>
              <MathText>{": marca um lugar."}</MathText>
            </text>
            <text x={"215"} y={"45"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <MathText>{"Não tem tamanho."}</MathText>
            </text>
            <line x1={"25"} y1={"80"} x2={"185"} y2={"80"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <polygon points={"14,80  24,75.5  24,84.5"} fill={"#4f46e5"}>
            </polygon>
            <polygon points={"196,80  186,84.5  186,75.5"} fill={"#4f46e5"}>
            </polygon>
            <circle cx={"75"} cy={"80"} r={"5"} fill={"#ec4899"}>
            </circle>
            <circle cx={"135"} cy={"80"} r={"5"} fill={"#ec4899"}>
            </circle>
            <text x={"75"} y={"66"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"A"}</MathText>
            </text>
            <text x={"135"} y={"66"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"B"}</MathText>
            </text>
            <text x={"215"} y={"78"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <tspan fontWeight={"800"}>
                <MathText>{"Reta"}</MathText>
              </tspan>
              <MathText>{": sem começo e sem fim."}</MathText>
            </text>
            <text x={"215"} y={"95"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <MathText>{"Não dá para medir."}</MathText>
            </text>
            <line x1={"60"} y1={"130"} x2={"182"} y2={"130"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <polygon points={"194,130  184,134.5  184,125.5"} fill={"#4f46e5"}>
            </polygon>
            <circle cx={"60"} cy={"130"} r={"5"} fill={"#ec4899"}>
            </circle>
            <circle cx={"125"} cy={"130"} r={"5"} fill={"#ec4899"}>
            </circle>
            <text x={"60"} y={"116"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"A"}</MathText>
            </text>
            <text x={"125"} y={"116"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"B"}</MathText>
            </text>
            <text x={"215"} y={"128"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <tspan fontWeight={"800"}>
                <MathText>{"Semirreta"}</MathText>
              </tspan>
              <MathText>{": começa em A"}</MathText>
            </text>
            <text x={"215"} y={"145"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <MathText>{"e não tem fim."}</MathText>
            </text>
            <line x1={"60"} y1={"180"} x2={"160"} y2={"180"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <circle cx={"60"} cy={"180"} r={"5"} fill={"#ec4899"}>
            </circle>
            <circle cx={"160"} cy={"180"} r={"5"} fill={"#ec4899"}>
            </circle>
            <text x={"60"} y={"166"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"A"}</MathText>
            </text>
            <text x={"160"} y={"166"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"B"}</MathText>
            </text>
            <text x={"215"} y={"178"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <tspan fontWeight={"800"}>
                <MathText>{"Segmento"}</MathText>
              </tspan>
              <MathText>{": começa em A e"}</MathText>
            </text>
            <text x={"215"} y={"195"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <MathText>{"termina em B. Dá para medir!"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Ponto, reta, semirreta e segmento"}</MathText>
          </div>
        </div>
        <ul>
          <li>
            <b>
              <MathText>{"Ponto:"}</MathText>
            </b>
            <MathText>{" uma posição exata, sem tamanho. Desenhamos com um pontinho e damos nome com uma "}</MathText>
            <b>
              <MathText>{"letra maiúscula"}</MathText>
            </b>
            <MathText>{": ponto \\(A\\)."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Reta:"}</MathText>
            </b>
            <MathText>{" uma linha reta que continua para sempre nos dois sentidos. Por isso "}</MathText>
            <b>
              <MathText>{"não tem medida"}</MathText>
            </b>
            <MathText>{". Nome: letra minúscula (\\(r\\)) ou dois pontos dela (\\(\\overleftrightarrow{AB}\\))."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Semirreta:"}</MathText>
            </b>
            <MathText>{" tem "}</MathText>
            <b>
              <MathText>{"começo"}</MathText>
            </b>
            <MathText>{" (a origem), mas continua para sempre num só sentido. Nome: \\(\\overrightarrow{AB}\\) (origem em \\(A\\), passando por \\(B\\))."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Segmento de reta:"}</MathText>
            </b>
            <MathText>{" o pedaço da reta entre dois pontos (as extremidades). "}</MathText>
            <b>
              <MathText>{"Tem medida"}</MathText>
            </b>
            <MathText>{". Nome: \\(\\overline{AB}\\)."}</MathText>
          </li>
        </ul>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-amber-500 bg-amber-50">
          <b>
            <MathText>{"Plano"}</MathText>
          </b>
          <MathText>{"O "}</MathText>
          <b>
            <MathText>{"plano"}</MathText>
          </b>
          <MathText>{" é uma superfície lisa que se estende para todos os lados, como uma folha de papel infinita. Quase tudo nesta lição acontece "}</MathText>
          <b>
            <MathText>{"no plano"}</MathText>
          </b>
          <MathText>{": é onde desenhamos."}</MathText>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Cuidado com a notação"}</MathText>
          </b>
          <MathText>{"\\(\\overline{AB}\\) é o segmento (a figura); \\(AB\\) sem traço é a "}</MathText>
          <b>
            <MathText>{"medida"}</MathText>
          </b>
          <MathText>{" dele. Escrevemos \\(AB = 5\\text{ cm}\\) e não \\(\\overline{AB} = 5\\text{ cm}\\)."}</MathText>
        </div>
        <h3>
          <MathText>{"1.2 Como medir um segmento com a régua"}</MathText>
        </h3>
        <ol>
          <li>
            <MathText>{"Encoste a régua no segmento."}</MathText>
          </li>
          <li>
            <MathText>{"Alinhe o "}</MathText>
            <b>
              <MathText>{"zero"}</MathText>
            </b>
            <MathText>{" da régua com uma extremidade (muitas réguas têm uma pequena margem antes do zero)."}</MathText>
          </li>
          <li>
            <MathText>{"Leia a marca onde está a "}</MathText>
            <b>
              <MathText>{"outra extremidade"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </li>
          <li>
            <MathText>{"Escreva o número "}</MathText>
            <b>
              <MathText>{"com a unidade"}</MathText>
            </b>
            <MathText>{": cm."}</MathText>
          </li>
        </ol>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 112"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Régua medindo um segmento de 6,5 cm"}>
            <rect x={"10"} y={"62"} width={"400"} height={"42"} rx={"4"} fill={"#fef3c7"} stroke={"#d97706"} strokeWidth={"2"}>
            </rect>
            <line x1={"20"} y1={"62"} x2={"20"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"23.6"} y1={"62"} x2={"23.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"27.2"} y1={"62"} x2={"27.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"30.8"} y1={"62"} x2={"30.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"34.4"} y1={"62"} x2={"34.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"38"} y1={"62"} x2={"38"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"41.6"} y1={"62"} x2={"41.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"45.2"} y1={"62"} x2={"45.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"48.8"} y1={"62"} x2={"48.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"52.4"} y1={"62"} x2={"52.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"56"} y1={"62"} x2={"56"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"59.6"} y1={"62"} x2={"59.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"63.2"} y1={"62"} x2={"63.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"66.8"} y1={"62"} x2={"66.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"70.4"} y1={"62"} x2={"70.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"74"} y1={"62"} x2={"74"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"77.6"} y1={"62"} x2={"77.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"81.2"} y1={"62"} x2={"81.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"84.8"} y1={"62"} x2={"84.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"88.4"} y1={"62"} x2={"88.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"92"} y1={"62"} x2={"92"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"95.6"} y1={"62"} x2={"95.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"99.2"} y1={"62"} x2={"99.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"102.8"} y1={"62"} x2={"102.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"106.4"} y1={"62"} x2={"106.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"110"} y1={"62"} x2={"110"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"113.6"} y1={"62"} x2={"113.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"117.2"} y1={"62"} x2={"117.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"120.8"} y1={"62"} x2={"120.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"124.4"} y1={"62"} x2={"124.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"128"} y1={"62"} x2={"128"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"131.6"} y1={"62"} x2={"131.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"135.2"} y1={"62"} x2={"135.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"138.8"} y1={"62"} x2={"138.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"142.4"} y1={"62"} x2={"142.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"146"} y1={"62"} x2={"146"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"149.6"} y1={"62"} x2={"149.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"153.2"} y1={"62"} x2={"153.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"156.8"} y1={"62"} x2={"156.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"160.4"} y1={"62"} x2={"160.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"164"} y1={"62"} x2={"164"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"167.6"} y1={"62"} x2={"167.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"171.2"} y1={"62"} x2={"171.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"174.8"} y1={"62"} x2={"174.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"178.4"} y1={"62"} x2={"178.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"182"} y1={"62"} x2={"182"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"185.6"} y1={"62"} x2={"185.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"189.2"} y1={"62"} x2={"189.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"192.8"} y1={"62"} x2={"192.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"196.4"} y1={"62"} x2={"196.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"200"} y1={"62"} x2={"200"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"203.6"} y1={"62"} x2={"203.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"207.2"} y1={"62"} x2={"207.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"210.8"} y1={"62"} x2={"210.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"214.4"} y1={"62"} x2={"214.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"218"} y1={"62"} x2={"218"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"221.6"} y1={"62"} x2={"221.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"225.2"} y1={"62"} x2={"225.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"228.8"} y1={"62"} x2={"228.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"232.4"} y1={"62"} x2={"232.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"236"} y1={"62"} x2={"236"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"239.6"} y1={"62"} x2={"239.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"243.2"} y1={"62"} x2={"243.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"246.8"} y1={"62"} x2={"246.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"250.4"} y1={"62"} x2={"250.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"254"} y1={"62"} x2={"254"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"257.6"} y1={"62"} x2={"257.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"261.2"} y1={"62"} x2={"261.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"264.8"} y1={"62"} x2={"264.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"268.4"} y1={"62"} x2={"268.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"272"} y1={"62"} x2={"272"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"275.6"} y1={"62"} x2={"275.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"279.2"} y1={"62"} x2={"279.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"282.8"} y1={"62"} x2={"282.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"286.4"} y1={"62"} x2={"286.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"290"} y1={"62"} x2={"290"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"293.6"} y1={"62"} x2={"293.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"297.2"} y1={"62"} x2={"297.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"300.8"} y1={"62"} x2={"300.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"304.4"} y1={"62"} x2={"304.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"308"} y1={"62"} x2={"308"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"311.6"} y1={"62"} x2={"311.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"315.2"} y1={"62"} x2={"315.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"318.8"} y1={"62"} x2={"318.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"322.4"} y1={"62"} x2={"322.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"326"} y1={"62"} x2={"326"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"329.6"} y1={"62"} x2={"329.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"333.2"} y1={"62"} x2={"333.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"336.8"} y1={"62"} x2={"336.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"340.4"} y1={"62"} x2={"340.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"344"} y1={"62"} x2={"344"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"347.6"} y1={"62"} x2={"347.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"351.2"} y1={"62"} x2={"351.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"354.8"} y1={"62"} x2={"354.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"358.4"} y1={"62"} x2={"358.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"362"} y1={"62"} x2={"362"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"365.6"} y1={"62"} x2={"365.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"369.2"} y1={"62"} x2={"369.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"372.8"} y1={"62"} x2={"372.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"376.4"} y1={"62"} x2={"376.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"380"} y1={"62"} x2={"380"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <text x={"20"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"0"}</MathText>
            </text>
            <text x={"56"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"1"}</MathText>
            </text>
            <text x={"92"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"2"}</MathText>
            </text>
            <text x={"128"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"3"}</MathText>
            </text>
            <text x={"164"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"4"}</MathText>
            </text>
            <text x={"200"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"5"}</MathText>
            </text>
            <text x={"236"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"6"}</MathText>
            </text>
            <text x={"272"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"7"}</MathText>
            </text>
            <text x={"308"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"8"}</MathText>
            </text>
            <text x={"344"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"9"}</MathText>
            </text>
            <text x={"380"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"10"}</MathText>
            </text>
            <text x={"402"} y={"80"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  fontStyle={"italic"}>
              <MathText>{"cm"}</MathText>
            </text>
            <line x1={"20"} y1={"40"} x2={"254"} y2={"40"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"20"} y1={"33"} x2={"20"} y2={"47"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"254"} y1={"33"} x2={"254"} y2={"47"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"20"} y1={"47"} x2={"20"} y2={"62"} stroke={"#94a3b8"} strokeWidth={"1.5"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"254"} y1={"47"} x2={"254"} y2={"62"} stroke={"#94a3b8"} strokeWidth={"1.5"} strokeDasharray={"5 4"}>
            </line>
            <text x={"20"} y={"22"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"A"}</MathText>
            </text>
            <text x={"254"} y={"22"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"B"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Certo: o segmento começa no 0 e termina na marca 6,5: AB = 6,5 cm"}</MathText>
          </div>
        </div>
        <p>
          <MathText>{"Entre dois números inteiros há "}</MathText>
          <b>
            <MathText>{"10 tracinhos"}</MathText>
          </b>
          <MathText>{": cada um é "}</MathText>
          <b>
            <MathText>{"1 milímetro (mm)"}</MathText>
          </b>
          <MathText>{". O tracinho do meio vale "}</MathText>
          <b>
            <MathText>{"0,5 cm"}</MathText>
          </b>
          <MathText>{" (5 mm). Na figura, o segmento termina no tracinho do meio depois do 6: "}</MathText>
          <b>
            <MathText>{"6,5 cm"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <h3>
          <MathText>{"E se o segmento não começar no zero?"}</MathText>
        </h3>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 112"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Régua medindo um segmento que começa na marca 2"}>
            <rect x={"10"} y={"62"} width={"400"} height={"42"} rx={"4"} fill={"#fef3c7"} stroke={"#d97706"} strokeWidth={"2"}>
            </rect>
            <line x1={"20"} y1={"62"} x2={"20"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"23.6"} y1={"62"} x2={"23.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"27.2"} y1={"62"} x2={"27.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"30.8"} y1={"62"} x2={"30.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"34.4"} y1={"62"} x2={"34.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"38"} y1={"62"} x2={"38"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"41.6"} y1={"62"} x2={"41.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"45.2"} y1={"62"} x2={"45.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"48.8"} y1={"62"} x2={"48.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"52.4"} y1={"62"} x2={"52.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"56"} y1={"62"} x2={"56"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"59.6"} y1={"62"} x2={"59.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"63.2"} y1={"62"} x2={"63.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"66.8"} y1={"62"} x2={"66.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"70.4"} y1={"62"} x2={"70.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"74"} y1={"62"} x2={"74"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"77.6"} y1={"62"} x2={"77.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"81.2"} y1={"62"} x2={"81.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"84.8"} y1={"62"} x2={"84.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"88.4"} y1={"62"} x2={"88.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"92"} y1={"62"} x2={"92"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"95.6"} y1={"62"} x2={"95.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"99.2"} y1={"62"} x2={"99.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"102.8"} y1={"62"} x2={"102.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"106.4"} y1={"62"} x2={"106.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"110"} y1={"62"} x2={"110"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"113.6"} y1={"62"} x2={"113.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"117.2"} y1={"62"} x2={"117.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"120.8"} y1={"62"} x2={"120.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"124.4"} y1={"62"} x2={"124.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"128"} y1={"62"} x2={"128"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"131.6"} y1={"62"} x2={"131.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"135.2"} y1={"62"} x2={"135.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"138.8"} y1={"62"} x2={"138.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"142.4"} y1={"62"} x2={"142.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"146"} y1={"62"} x2={"146"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"149.6"} y1={"62"} x2={"149.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"153.2"} y1={"62"} x2={"153.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"156.8"} y1={"62"} x2={"156.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"160.4"} y1={"62"} x2={"160.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"164"} y1={"62"} x2={"164"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"167.6"} y1={"62"} x2={"167.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"171.2"} y1={"62"} x2={"171.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"174.8"} y1={"62"} x2={"174.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"178.4"} y1={"62"} x2={"178.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"182"} y1={"62"} x2={"182"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"185.6"} y1={"62"} x2={"185.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"189.2"} y1={"62"} x2={"189.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"192.8"} y1={"62"} x2={"192.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"196.4"} y1={"62"} x2={"196.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"200"} y1={"62"} x2={"200"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"203.6"} y1={"62"} x2={"203.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"207.2"} y1={"62"} x2={"207.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"210.8"} y1={"62"} x2={"210.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"214.4"} y1={"62"} x2={"214.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"218"} y1={"62"} x2={"218"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"221.6"} y1={"62"} x2={"221.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"225.2"} y1={"62"} x2={"225.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"228.8"} y1={"62"} x2={"228.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"232.4"} y1={"62"} x2={"232.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"236"} y1={"62"} x2={"236"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"239.6"} y1={"62"} x2={"239.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"243.2"} y1={"62"} x2={"243.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"246.8"} y1={"62"} x2={"246.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"250.4"} y1={"62"} x2={"250.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"254"} y1={"62"} x2={"254"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"257.6"} y1={"62"} x2={"257.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"261.2"} y1={"62"} x2={"261.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"264.8"} y1={"62"} x2={"264.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"268.4"} y1={"62"} x2={"268.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"272"} y1={"62"} x2={"272"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"275.6"} y1={"62"} x2={"275.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"279.2"} y1={"62"} x2={"279.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"282.8"} y1={"62"} x2={"282.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"286.4"} y1={"62"} x2={"286.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"290"} y1={"62"} x2={"290"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"293.6"} y1={"62"} x2={"293.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"297.2"} y1={"62"} x2={"297.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"300.8"} y1={"62"} x2={"300.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"304.4"} y1={"62"} x2={"304.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"308"} y1={"62"} x2={"308"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"311.6"} y1={"62"} x2={"311.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"315.2"} y1={"62"} x2={"315.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"318.8"} y1={"62"} x2={"318.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"322.4"} y1={"62"} x2={"322.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"326"} y1={"62"} x2={"326"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"329.6"} y1={"62"} x2={"329.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"333.2"} y1={"62"} x2={"333.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"336.8"} y1={"62"} x2={"336.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"340.4"} y1={"62"} x2={"340.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"344"} y1={"62"} x2={"344"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <line x1={"347.6"} y1={"62"} x2={"347.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"351.2"} y1={"62"} x2={"351.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"354.8"} y1={"62"} x2={"354.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"358.4"} y1={"62"} x2={"358.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"362"} y1={"62"} x2={"362"} y2={"76"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"365.6"} y1={"62"} x2={"365.6"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"369.2"} y1={"62"} x2={"369.2"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"372.8"} y1={"62"} x2={"372.8"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"376.4"} y1={"62"} x2={"376.4"} y2={"70"} stroke={"#92400e"} strokeWidth={"1"}>
            </line>
            <line x1={"380"} y1={"62"} x2={"380"} y2={"82"} stroke={"#92400e"} strokeWidth={"1.6"}>
            </line>
            <text x={"20"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"0"}</MathText>
            </text>
            <text x={"56"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"1"}</MathText>
            </text>
            <text x={"92"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"2"}</MathText>
            </text>
            <text x={"128"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"3"}</MathText>
            </text>
            <text x={"164"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"4"}</MathText>
            </text>
            <text x={"200"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"5"}</MathText>
            </text>
            <text x={"236"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"6"}</MathText>
            </text>
            <text x={"272"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"7"}</MathText>
            </text>
            <text x={"308"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"8"}</MathText>
            </text>
            <text x={"344"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"9"}</MathText>
            </text>
            <text x={"380"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"10"}</MathText>
            </text>
            <text x={"402"} y={"80"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  fontStyle={"italic"}>
              <MathText>{"cm"}</MathText>
            </text>
            <line x1={"92"} y1={"40"} x2={"290"} y2={"40"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"92"} y1={"33"} x2={"92"} y2={"47"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"290"} y1={"33"} x2={"290"} y2={"47"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"92"} y1={"47"} x2={"92"} y2={"62"} stroke={"#94a3b8"} strokeWidth={"1.5"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"290"} y1={"47"} x2={"290"} y2={"62"} stroke={"#94a3b8"} strokeWidth={"1.5"} strokeDasharray={"5 4"}>
            </line>
            <text x={"92"} y={"22"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"C"}</MathText>
            </text>
            <text x={"290"} y={"22"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"D"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"O segmento CD não começa no 0: lemos 2 e 7,5, então CD = 7,5 − 2 = 5,5 cm"}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 1 — segmento que começa na marca 2"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Ponto \\(C\\) está na marca \\(2\\) e ponto \\(D\\) na marca \\(7{,}5\\)."}</MathText>
            </div>
            <div>
              <MathText>{"Medida = marca final − marca inicial"}</MathText>
            </div>
            <div>
              <MathText>{"\\(CD = 7{,}5 - 2 = 5{,}5\\text{ cm}\\) ✓"}</MathText>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Erro clássico"}</MathText>
          </b>
          <MathText>{"Ler “7,5 cm” só porque a ponta final está na marca 7,5. Se o início "}</MathText>
          <b>
            <MathText>{"não"}</MathText>
          </b>
          <MathText>{" está no zero, é preciso "}</MathText>
          <b>
            <MathText>{"subtrair"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </div>
        <h3>
          <MathText>{"1.3 Somando segmentos e o ponto médio"}</MathText>
        </h3>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 250"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Segmentos consecutivos AB e BC formando AC, e ponto médio M de PQ"}>
            <line x1={"30"} y1={"55"} x2={"310"} y2={"55"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <circle cx={"30"} cy={"55"} r={"5"} fill={"#ec4899"}>
            </circle>
            <circle cx={"150"} cy={"55"} r={"5"} fill={"#ec4899"}>
            </circle>
            <circle cx={"310"} cy={"55"} r={"5"} fill={"#ec4899"}>
            </circle>
            <text x={"30"} y={"40"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"A"}</MathText>
            </text>
            <text x={"150"} y={"40"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"B"}</MathText>
            </text>
            <text x={"310"} y={"40"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"C"}</MathText>
            </text>
            <line x1={"30"} y1={"78"} x2={"150"} y2={"78"} stroke={"#ec4899"} strokeWidth={"3"}>
            </line>
            <line x1={"30"} y1={"72"} x2={"30"} y2={"78"} stroke={"#ec4899"} strokeWidth={"3"}>
            </line>
            <line x1={"150"} y1={"72"} x2={"150"} y2={"78"} stroke={"#ec4899"} strokeWidth={"3"}>
            </line>
            <text x={"90"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"AB = 3 cm"}</MathText>
            </text>
            <line x1={"150"} y1={"78"} x2={"310"} y2={"78"} stroke={"#f59e0b"} strokeWidth={"3"}>
            </line>
            <line x1={"150"} y1={"72"} x2={"150"} y2={"78"} stroke={"#f59e0b"} strokeWidth={"3"}>
            </line>
            <line x1={"310"} y1={"72"} x2={"310"} y2={"78"} stroke={"#f59e0b"} strokeWidth={"3"}>
            </line>
            <text x={"230"} y={"98"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"BC = 4 cm"}</MathText>
            </text>
            <line x1={"30"} y1={"112"} x2={"310"} y2={"112"} stroke={"#4f46e5"} strokeWidth={"3"}>
            </line>
            <line x1={"30"} y1={"106"} x2={"30"} y2={"112"} stroke={"#4f46e5"} strokeWidth={"3"}>
            </line>
            <line x1={"310"} y1={"106"} x2={"310"} y2={"112"} stroke={"#4f46e5"} strokeWidth={"3"}>
            </line>
            <text x={"170"} y={"132"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"AC = AB + BC = 7 cm"}</MathText>
            </text>
            <line x1={"40"} y1={"190"} x2={"360"} y2={"190"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <circle cx={"40"} cy={"190"} r={"5"} fill={"#ec4899"}>
            </circle>
            <circle cx={"200"} cy={"190"} r={"6"} fill={"#10b981"}>
            </circle>
            <circle cx={"360"} cy={"190"} r={"5"} fill={"#ec4899"}>
            </circle>
            <text x={"40"} y={"172"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"P"}</MathText>
            </text>
            <text x={"200"} y={"172"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"M"}</MathText>
            </text>
            <text x={"360"} y={"172"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Q"}</MathText>
            </text>
            <line x1={"120"} y1={"183"} x2={"120"} y2={"197"} stroke={"#1e293b"} strokeWidth={"2"}>
            </line>
            <line x1={"280"} y1={"183"} x2={"280"} y2={"197"} stroke={"#1e293b"} strokeWidth={"2"}>
            </line>
            <text x={"120"} y={"216"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"3 cm"}</MathText>
            </text>
            <text x={"280"} y={"216"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"3 cm"}</MathText>
            </text>
            <text x={"10"} y={"240"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <MathText>{"M é o ponto médio de PQ: divide o segmento em duas partes iguais (PQ = 6 cm)."}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Em cima: soma de segmentos. Embaixo: ponto médio"}</MathText>
          </div>
        </div>
        <p>
          <MathText>{"Se \\(A\\), \\(B\\) e \\(C\\) estão "}</MathText>
          <b>
            <MathText>{"alinhados"}</MathText>
          </b>
          <MathText>{" e \\(B\\) está entre \\(A\\) e \\(C\\), os segmentos \\(\\overline{AB}\\) e \\(\\overline{BC}\\) são "}</MathText>
          <b>
            <MathText>{"consecutivos"}</MathText>
          </b>
          <MathText>{" e:"}</MathText>
        </p>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ AC = AB + BC \\]"}</MathText>
        </div>
        <p>
          <MathText>{"O "}</MathText>
          <b>
            <MathText>{"ponto médio"}</MathText>
          </b>
          <MathText>{" de um segmento é o ponto que o divide em "}</MathText>
          <b>
            <MathText>{"duas partes iguais"}</MathText>
          </b>
          <MathText>{". A medida de cada parte é "}</MathText>
          <b>
            <MathText>{"metade"}</MathText>
          </b>
          <MathText>{" do segmento inteiro: \\(PM = MQ = \\dfrac{PQ}{2}\\)."}</MathText>
        </p>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 2 — Os pontos \\(R\\), \\(S\\) e \\(T\\) estão alinhados, \\(S\\) entre \\(R\\) e \\(T\\). \\(RS = 8{,}5\\text{ cm}\\) e \\(ST = 5\\text{ cm}\\). Quanto mede \\(RT\\)?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(RT = RS + ST\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(RT = 8{,}5 + 5 = 13{,}5\\text{ cm}\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 3 — \\(M\\) é o ponto médio de \\(\\overline{AB}\\) e \\(AB = 18\\text{ cm}\\). Quanto mede \\(AM\\)?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(AM = \\dfrac{AB}{2} = \\dfrac{18}{2} = 9\\text{ cm}\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 4 (com letra) — \\(AB = 3x\\), \\(BC = 20\\) e \\(AC = 50\\) (em cm). Ache \\(x\\)."}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(AC = AB + BC\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(50 = 3x + 20\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(50 - 20 = 3x\\) → \\(30 = 3x\\) → \\(x = 30 \\div 3 = 10\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Conferência: \\(AB = 3 \\cdot 10 = 30\\); \\(30 + 20 = 50\\) ✓"}</MathText>
            </div>
          </div>
        </div>
        <GeometryQuickCheck index={1} />
        <h3>
          <MathText>{"1.4 Unidades de comprimento"}</MathText>
        </h3>
        <p>
          <MathText>{"Medir é comparar com uma "}</MathText>
          <b>
            <MathText>{"unidade"}</MathText>
          </b>
          <MathText>{". A unidade principal é o "}</MathText>
          <b>
            <MathText>{"metro (m)"}</MathText>
          </b>
          <MathText>{". Para coisas grandes usamos o "}</MathText>
          <b>
            <MathText>{"quilômetro"}</MathText>
          </b>
          <MathText>{"; para coisas pequenas, o "}</MathText>
          <b>
            <MathText>{"centímetro"}</MathText>
          </b>
          <MathText>{" e o "}</MathText>
          <b>
            <MathText>{"milímetro"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Unidade"}</MathText>
              </th>
              <th>
                <MathText>{"Símbolo"}</MathText>
              </th>
              <th>
                <MathText>{"Vale"}</MathText>
              </th>
              <th>
                <MathText>{"Exemplo do dia a dia"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"quilômetro"}</MathText>
              </td>
              <td>
                <MathText>{"km"}</MathText>
              </td>
              <td>
                <MathText>{"1 000 m"}</MathText>
              </td>
              <td>
                <MathText>{"distância entre cidades"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"metro"}</MathText>
              </td>
              <td>
                <MathText>{"m"}</MathText>
              </td>
              <td>
                <MathText>{"—"}</MathText>
              </td>
              <td>
                <MathText>{"altura de uma porta ≈ 2 m"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"centímetro"}</MathText>
              </td>
              <td>
                <MathText>{"cm"}</MathText>
              </td>
              <td>
                <MathText>{"0,01 m (um centésimo)"}</MathText>
              </td>
              <td>
                <MathText>{"largura de um dedo ≈ 1 cm"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"milímetro"}</MathText>
              </td>
              <td>
                <MathText>{"mm"}</MathText>
              </td>
              <td>
                <MathText>{"0,001 m (um milésimo)"}</MathText>
              </td>
              <td>
                <MathText>{"espessura de uma moeda ≈ 2 mm"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <MathText>{"Relações para decorar: \\(1\\text{ km} = 1\\,000\\text{ m}\\) · \\(1\\text{ m} = 100\\text{ cm}\\) · \\(1\\text{ cm} = 10\\text{ mm}\\) · \\(1\\text{ m} = 1\\,000\\text{ mm}\\)."}</MathText>
        </p>
        <h3>
          <MathText>{"1.5 Como trocar de unidade (a escada)"}</MathText>
        </h3>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 148"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Escada das unidades de comprimento: km, hm, dam, m, dm, cm, mm"}>
            <rect x={"8"} y={"50"} width={"52"} height={"36"} rx={"8"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2"}>
            </rect>
            <text x={"34"} y={"74"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"km"}</MathText>
            </text>
            <rect x={"66"} y={"50"} width={"52"} height={"36"} rx={"8"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2"}>
            </rect>
            <text x={"92"} y={"74"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"hm"}</MathText>
            </text>
            <rect x={"124"} y={"50"} width={"52"} height={"36"} rx={"8"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2"}>
            </rect>
            <text x={"150"} y={"74"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"dam"}</MathText>
            </text>
            <rect x={"182"} y={"50"} width={"52"} height={"36"} rx={"8"} fill={"#fde68a"} stroke={"#4f46e5"} strokeWidth={"2"}>
            </rect>
            <text x={"208"} y={"74"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"m"}</MathText>
            </text>
            <rect x={"240"} y={"50"} width={"52"} height={"36"} rx={"8"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2"}>
            </rect>
            <text x={"266"} y={"74"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"dm"}</MathText>
            </text>
            <rect x={"298"} y={"50"} width={"52"} height={"36"} rx={"8"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2"}>
            </rect>
            <text x={"324"} y={"74"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"cm"}</MathText>
            </text>
            <rect x={"356"} y={"50"} width={"52"} height={"36"} rx={"8"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2"}>
            </rect>
            <text x={"382"} y={"74"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"mm"}</MathText>
            </text>
            <line x1={"14"} y1={"34"} x2={"400"} y2={"34"} stroke={"#10b981"} strokeWidth={"3"}>
            </line>
            <polygon points={"408,34  398,38.5  398,29.5"} fill={"#4f46e5"}>
            </polygon>
            <text x={"210"} y={"24"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"para a direita (unidade menor): × 10 a cada degrau"}</MathText>
            </text>
            <line x1={"402"} y1={"112"} x2={"20"} y2={"112"} stroke={"#ef4444"} strokeWidth={"3"}>
            </line>
            <polygon points={"12,112  22,107.5  22,116.5"} fill={"#4f46e5"}>
            </polygon>
            <text x={"210"} y={"136"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"para a esquerda (unidade maior): ÷ 10 a cada degrau"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"A escada das unidades de comprimento"}</MathText>
          </div>
        </div>
        <p>
          <MathText>{"As unidades formam uma escada de 7 degraus. Cada degrau "}</MathText>
          <b>
            <MathText>{"multiplica ou divide por 10"}</MathText>
          </b>
          <MathText>{":"}</MathText>
        </p>
        <ul>
          <li>
            <b>
              <MathText>{"Para uma unidade menor"}</MathText>
            </b>
            <MathText>{" (descer para a direita): "}</MathText>
            <b>
              <MathText>{"multiplique"}</MathText>
            </b>
            <MathText>{" por 10 a cada degrau. O número fica "}</MathText>
            <b>
              <MathText>{"maior"}</MathText>
            </b>
            <MathText>{" (porque cabem mais unidades pequenas)."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Para uma unidade maior"}</MathText>
            </b>
            <MathText>{" (subir para a esquerda): "}</MathText>
            <b>
              <MathText>{"divida"}</MathText>
            </b>
            <MathText>{" por 10 a cada degrau. O número fica "}</MathText>
            <b>
              <MathText>{"menor"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </li>
        </ul>
        <p>
          <MathText>{"Na prática: "}</MathText>
          <b>
            <MathText>{"conte os degraus"}</MathText>
          </b>
          <MathText>{" entre as duas unidades. Cada degrau “anda” uma casa decimal com a vírgula."}</MathText>
        </p>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 5 — Converter \\(3{,}5\\text{ m}\\) para cm"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"De m para cm: m → dm → cm = "}</MathText>
              <b>
                <MathText>{"2 degraus"}</MathText>
              </b>
              <MathText>{" para a direita (unidade menor)."}</MathText>
            </div>
            <div>
              <MathText>{"Multiplica por \\(10 \\cdot 10 = 100\\)."}</MathText>
            </div>
            <div>
              <MathText>{"\\(3{,}5 \\cdot 100 = 350\\text{ cm}\\) ✓"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 6 — Converter \\(4\\,500\\text{ mm}\\) para m"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"De mm para m: mm → cm → dm → m = "}</MathText>
              <b>
                <MathText>{"3 degraus"}</MathText>
              </b>
              <MathText>{" para a esquerda (unidade maior)."}</MathText>
            </div>
            <div>
              <MathText>{"Divide por \\(1\\,000\\)."}</MathText>
            </div>
            <div>
              <MathText>{"\\(4\\,500 \\div 1\\,000 = 4{,}5\\text{ m}\\) ✓"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 7 — Converter \\(2{,}4\\text{ km}\\) para m"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"km → hm → dam → m = 3 degraus para a direita → \\(\\times 1\\,000\\)."}</MathText>
            </div>
            <div>
              <MathText>{"\\(2{,}4 \\cdot 1\\,000 = 2\\,400\\text{ m}\\) ✓"}</MathText>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-amber-500 bg-amber-50">
          <b>
            <MathText>{"Como saber se está certo?"}</MathText>
          </b>
          <MathText>{"Pergunte: “o número deveria ficar maior ou menor?”. Trocar para unidade "}</MathText>
          <b>
            <MathText>{"menor"}</MathText>
          </b>
          <MathText>{" sempre dá número "}</MathText>
          <b>
            <MathText>{"maior"}</MathText>
          </b>
          <MathText>{". Se deu o contrário, você multiplicou onde devia dividir."}</MathText>
        </div>
        <h3>
          <MathText>{"1.6 Medidas misturadas e problemas"}</MathText>
        </h3>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 8 — “Uma fita tem 1 m e 25 cm. Cortaram 40 cm. Quanto sobrou, em cm?”"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Coloque tudo na "}</MathText>
              <b>
                <MathText>{"mesma unidade"}</MathText>
              </b>
              <MathText>{" (cm): \\(1\\text{ m} = 100\\text{ cm}\\)."}</MathText>
            </div>
            <div>
              <MathText>{"\\(1\\text{ m } 25\\text{ cm} = 100 + 25 = 125\\text{ cm}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(125 - 40 = 85\\text{ cm}\\) ✓"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 9 — “Uma tábua de 2,3 m será cortada em pedaços de 50 cm. Quantos pedaços inteiros saem? Quanto sobra?”"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(2{,}3\\text{ m} = 2{,}3 \\cdot 100 = 230\\text{ cm}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(230 \\div 50 = 4\\) e sobram \\(230 - 4 \\cdot 50 = 30\\text{ cm}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Resposta: "}</MathText>
              <b>
                <MathText>{"4 pedaços"}</MathText>
              </b>
              <MathText>{" e sobram "}</MathText>
              <b>
                <MathText>{"30 cm"}</MathText>
              </b>
              <MathText>{"."}</MathText>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Nunca some unidades diferentes"}</MathText>
          </b>
          <MathText>{"“1 m + 25 cm” não é “26”. Converta primeiro, some depois: \\(100\\text{ cm} + 25\\text{ cm} = 125\\text{ cm}\\)."}</MathText>
        </div>
        <h3>
          <MathText>{"1.7 Estimar medidas (conferir se faz sentido)"}</MathText>
        </h3>
        <p>
          <MathText>{"Ter uma noção do tamanho das coisas evita respostas absurdas, como “a porta tem 20 m”. Guarde alguns "}</MathText>
          <b>
            <MathText>{"modelos"}</MathText>
          </b>
          <MathText>{":"}</MathText>
        </p>
        <ul>
          <li>
            <MathText>{"um "}</MathText>
            <b>
              <MathText>{"dedo"}</MathText>
            </b>
            <MathText>{" de largura ≈ 1 cm; um "}</MathText>
            <b>
              <MathText>{"palmo"}</MathText>
            </b>
            <MathText>{" ≈ 20 cm; um "}</MathText>
            <b>
              <MathText>{"passo"}</MathText>
            </b>
            <MathText>{" de adulto ≈ 70 cm a 80 cm;"}</MathText>
          </li>
          <li>
            <MathText>{"uma "}</MathText>
            <b>
              <MathText>{"porta"}</MathText>
            </b>
            <MathText>{" ≈ 2 m de altura; uma "}</MathText>
            <b>
              <MathText>{"mesa"}</MathText>
            </b>
            <MathText>{" ≈ 75 cm; uma "}</MathText>
            <b>
              <MathText>{"folha A4"}</MathText>
            </b>
            <MathText>{" = 29,7 cm × 21 cm;"}</MathText>
          </li>
          <li>
            <MathText>{"um "}</MathText>
            <b>
              <MathText>{"quarteirão"}</MathText>
            </b>
            <MathText>{" ≈ 100 m; "}</MathText>
            <b>
              <MathText>{"10 minutos andando"}</MathText>
            </b>
            <MathText>{" ≈ 800 m."}</MathText>
          </li>
        </ul>
        <GeometryQuickCheck index={2} />
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto={"1"}>
          <MathText>{"✏️ Fazer os exercícios dos níveis 1 e 2"}</MathText>
        </button>
      </article>
      <article className="geometry-basica-lesson bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_.lesson-tag]:text-[.7rem] [&_.lesson-tag]:font-extrabold [&_.lesson-tag]:tracking-[.12em] [&_.lesson-tag]:uppercase [&_.lesson-tag]:text-indigo-600 [&_h2]:text-[1.6rem] [&_h2]:font-black [&_h2]:mt-1 [&_h2]:text-slate-800 [&_h3]:font-extrabold [&_h3]:text-lg [&_h3]:mt-7 [&_h3]:text-indigo-800 [&_h4]:mt-4 [&_h4]:font-bold [&_p]:leading-[1.85] [&_p]:text-slate-600 [&_p]:mt-3 [&_ul]:pl-6 [&_ul]:text-slate-600 [&_ul]:leading-[1.85] [&_ul]:mt-2 [&_ul]:list-disc [&_ol]:pl-6 [&_ol]:text-slate-600 [&_ol]:leading-[1.85] [&_ol]:mt-2 [&_ol]:list-decimal [&_li]:mt-1 [&_b]:text-slate-800 [&_strong]:text-slate-800" id={"l2"}>
        <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 2"}</MathText>
        </div>
        <h2>
          <MathText>{"Retas paralelas, concorrentes e perpendiculares"}</MathText>
        </h2>
        <p>
          <MathText>{"Os trilhos de um trem nunca se encontram. Duas ruas se cruzam num cruzamento. Os cantos de uma folha de papel formam um “quadradinho” perfeito. Tudo isso é "}</MathText>
          <b>
            <MathText>{"posição entre retas"}</MathText>
          </b>
          <MathText>{", e é a primeira coisa que a geometria precisa ensinar, porque quase toda figura (quadrado, retângulo, triângulo…) é feita de segmentos que se relacionam assim."}</MathText>
        </p>
        <h3>
          <MathText>{"2.1 As quatro posições possíveis"}</MathText>
        </h3>
        <p>
          <MathText>{"Lembre da lição anterior: uma "}</MathText>
          <b>
            <MathText>{"reta"}</MathText>
          </b>
          <MathText>{" não tem começo nem fim; ela se estende para sempre dos dois lados. Quando desenhamos duas retas no mesmo plano (a mesma folha), só existem "}</MathText>
          <b>
            <MathText>{"quatro"}</MathText>
          </b>
          <MathText>{" situações:"}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 245"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Quatro posições entre duas retas: paralelas, concorrentes, perpendiculares e coincidentes"}>
            <g>
              <line x1={"20"} y1={"30"} x2={"185"} y2={"30"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
              </line>
              <line x1={"20"} y1={"70"} x2={"185"} y2={"70"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
              </line>
              <text x={"195"} y={"34"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
                <MathText>{"r"}</MathText>
              </text>
              <text x={"195"} y={"74"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
                <MathText>{"s"}</MathText>
              </text>
              <text x={"100"} y={"100"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
                <MathText>{"paralelas (nunca se encontram)"}</MathText>
              </text>
            </g>
            <g transform={"translate(215,0)"}>
              <line x1={"20"} y1={"85"} x2={"160"} y2={"15"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
              </line>
              <line x1={"30"} y1={"15"} x2={"150"} y2={"85"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
              </line>
              <circle cx={"90"} cy={"50"} r={"5"} fill={"#ec4899"}>
              </circle>
              <text x={"90"} y={"74"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
                <MathText>{"P"}</MathText>
              </text>
              <text x={"95"} y={"108"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
                <MathText>{"concorrentes (cruzam em 1 ponto)"}</MathText>
              </text>
            </g>
            <g transform={"translate(0,120)"}>
              <line x1={"20"} y1={"50"} x2={"185"} y2={"50"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
              </line>
              <line x1={"100"} y1={"5"} x2={"100"} y2={"95"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
              </line>
              <polyline points={"111,50 111,39 100,39"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
              </polyline>
              <text x={"100"} y={"112"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
                <MathText>{"perpendiculares (cruzam em 90°)"}</MathText>
              </text>
            </g>
            <g transform={"translate(215,120)"}>
              <line x1={"20"} y1={"50"} x2={"185"} y2={"50"} stroke={"#4f46e5"} strokeWidth={"6"} strokeLinecap={"round"}>
              </line>
              <text x={"190"} y={"40"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
                <MathText>{"r = s"}</MathText>
              </text>
              <text x={"100"} y={"112"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
                <MathText>{"coincidentes (a mesma reta)"}</MathText>
              </text>
            </g>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"As posições entre duas retas no plano"}</MathText>
          </div>
        </div>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Posição"}</MathText>
              </th>
              <th>
                <MathText>{"O que acontece"}</MathText>
              </th>
              <th>
                <MathText>{"Símbolo"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>
                  <MathText>{"Paralelas"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"nunca se encontram, nem se forem prolongadas. Estão sempre “na mesma direção”."}</MathText>
              </td>
              <td>
                <MathText>{"\\(r \\parallel s\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Concorrentes"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"se encontram em "}</MathText>
                <b>
                  <MathText>{"exatamente um ponto"}</MathText>
                </b>
                <MathText>{"."}</MathText>
              </td>
              <td>
                <MathText>{"—"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Perpendiculares"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"são concorrentes e formam um ângulo de "}</MathText>
                <b>
                  <MathText>{"90°"}</MathText>
                </b>
                <MathText>{" (ângulo reto) no encontro."}</MathText>
              </td>
              <td>
                <MathText>{"\\(r \\perp s\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Coincidentes"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"são a "}</MathText>
                <b>
                  <MathText>{"mesma reta"}</MathText>
                </b>
                <MathText>{" (todos os pontos em comum)."}</MathText>
              </td>
              <td>
                <MathText>{"\\(r = s\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-blue-500 bg-blue-50">
          <b>
            <MathText>{"Perpendiculares também são concorrentes"}</MathText>
          </b>
          <MathText>{"As perpendiculares são um caso "}</MathText>
          <u>
            <MathText>{"especial"}</MathText>
          </u>
          <MathText>{" das concorrentes: todas as perpendiculares são concorrentes, mas nem toda concorrente é perpendicular."}</MathText>
        </div>
        <h3>
          <MathText>{"2.2 Onde isso aparece na vida real?"}</MathText>
        </h3>
        <div className="grid gap-3 mt-4 md:grid-cols-3 [&>div]:rounded-2xl [&>div]:p-4 [&>div]:text-sm [&>div]:leading-7 [&>div]:text-slate-700">
          <div className="bg-indigo-50">
            <b>
              <MathText>{"Paralelas"}</MathText>
            </b>
            <br />
            <MathText>{"Trilhos de trem, linhas do caderno, faixas da calçada, as bordas opostas de uma régua, degraus de uma escada de pedreiro."}</MathText>
          </div>
          <div className="bg-amber-50">
            <b>
              <MathText>{"Concorrentes"}</MathText>
            </b>
            <br />
            <MathText>{"Duas ruas que se cruzam em ângulo qualquer, as lâminas de uma tesoura aberta, os raios de uma bicicleta."}</MathText>
          </div>
          <div className="bg-emerald-50">
            <b>
              <MathText>{"Perpendiculares"}</MathText>
            </b>
            <br />
            <MathText>{"Os cantos de uma folha, o encontro da parede com o chão, os ponteiros do relógio às 3 horas, a cruz."}</MathText>
          </div>
        </div>
        <h3>
          <MathText>{"2.3 O ângulo reto"}</MathText>
        </h3>
        <p>
          <MathText>{"Quando duas retas são perpendiculares, elas formam "}</MathText>
          <b>
            <MathText>{"quatro ângulos iguais"}</MathText>
          </b>
          <MathText>{", todos com "}</MathText>
          <b>
            <MathText>{"90°"}</MathText>
          </b>
          <MathText>{". Esse ângulo é chamado de "}</MathText>
          <b>
            <MathText>{"ângulo reto"}</MathText>
          </b>
          <MathText>{" e é desenhado com um "}</MathText>
          <b>
            <MathText>{"quadradinho"}</MathText>
          </b>
          <MathText>{" no canto (não com um arco). Você pode testar um ângulo reto com a quina de uma folha de papel: se a quina encaixa perfeitamente, é reto."}</MathText>
        </p>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-amber-500 bg-amber-50">
          <b>
            <MathText>{"Não precisa estar “em pé”"}</MathText>
          </b>
          <MathText>{"Perpendicular não quer dizer “uma reta horizontal e outra vertical”. Gire a folha: duas retas inclinadas continuam perpendiculares se formarem 90° entre si. O mesmo vale para paralelas: elas não precisam ser horizontais."}</MathText>
        </div>
        <h3>
          <MathText>{"2.4 Como traçar uma perpendicular (régua e esquadro)"}</MathText>
        </h3>
        <p>
          <MathText>{"Queremos a reta "}</MathText>
          <b>
            <MathText>{"s"}</MathText>
          </b>
          <MathText>{", perpendicular à reta "}</MathText>
          <b>
            <MathText>{"r"}</MathText>
          </b>
          <MathText>{", passando pelo ponto "}</MathText>
          <b>
            <MathText>{"A"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 190"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Esquadro com um lado sobre a reta r e o outro lado formando a perpendicular s pelo ponto A"}>
            <line x1={"20"} y1={"150"} x2={"400"} y2={"150"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <text x={"392"} y={"140"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"r"}</MathText>
            </text>
            <circle cx={"150"} cy={"150"} r={"5"} fill={"#ec4899"}>
            </circle>
            <text x={"150"} y={"172"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"A"}</MathText>
            </text>
            <polygon points={"150,150 280,150 150,50"} fill={"#e0e7ff"} fillOpacity={".8"} stroke={"#4f46e5"} strokeWidth={"2.5"}>
            </polygon>
            <polyline points={"166,150 166,134 150,134"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <line x1={"150"} y1={"50"} x2={"150"} y2={"150"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </line>
            <line x1={"150"} y1={"24"} x2={"150"} y2={"50"} stroke={"#ec4899"} strokeWidth={"2"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"150"} y1={"150"} x2={"150"} y2={"180"} stroke={"#ec4899"} strokeWidth={"2"} strokeDasharray={"5 4"}>
            </line>
            <text x={"166"} y={"36"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"s"}</MathText>
            </text>
            <text x={"250"} y={"100"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"esquadro"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Traçando a perpendicular s à reta r pelo ponto A"}</MathText>
          </div>
        </div>
        <ol>
          <li>
            <MathText>{"Apoie um dos lados "}</MathText>
            <b>
              <MathText>{"menores"}</MathText>
            </b>
            <MathText>{" do esquadro (o que forma o ângulo reto) sobre a reta \\(r\\)."}</MathText>
          </li>
          <li>
            <MathText>{"Deslize o esquadro ao longo de \\(r\\) até o "}</MathText>
            <b>
              <MathText>{"outro"}</MathText>
            </b>
            <MathText>{" lado menor encostar no ponto \\(A\\)."}</MathText>
          </li>
          <li>
            <MathText>{"Segure o esquadro firme e trace a reta com o lápis ao longo desse lado, passando por \\(A\\)."}</MathText>
          </li>
          <li>
            <MathText>{"Pronto: o ângulo entre \\(r\\) e \\(s\\) é de 90°. Marque o quadradinho."}</MathText>
          </li>
        </ol>
        <h3>
          <MathText>{"2.5 Como traçar uma paralela (régua e esquadro)"}</MathText>
        </h3>
        <p>
          <MathText>{"Queremos a reta "}</MathText>
          <b>
            <MathText>{"s"}</MathText>
          </b>
          <MathText>{", paralela à reta "}</MathText>
          <b>
            <MathText>{"r"}</MathText>
          </b>
          <MathText>{", passando pelo ponto "}</MathText>
          <b>
            <MathText>{"P"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 170"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Esquadro deslizando sobre a régua até o ponto P para traçar a reta s paralela a r"}>
            <line x1={"20"} y1={"150"} x2={"400"} y2={"150"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <text x={"392"} y={"140"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"r"}</MathText>
            </text>
            <g transform={"translate(200,60) rotate(36.87)"}>
              <rect x={"-100"} y={"-18"} width={"270"} height={"18"} fill={"#fef3c7"} stroke={"#d97706"} strokeWidth={"2"}>
              </rect>
            </g>
            <polygon points={"200,150 320,150 200,60"} fill={"none"} stroke={"#94a3b8"} strokeWidth={"2"} strokeDasharray={"5 4"}>
            </polygon>
            <polygon points={"140,105 260,105 140,15"} fill={"#e0e7ff"} fillOpacity={".85"} stroke={"#4f46e5"} strokeWidth={"2.5"}>
            </polygon>
            <line x1={"30"} y1={"105"} x2={"400"} y2={"105"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </line>
            <text x={"392"} y={"95"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"s"}</MathText>
            </text>
            <circle cx={"240"} cy={"105"} r={"5"} fill={"#ec4899"}>
            </circle>
            <text x={"240"} y={"124"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"P"}</MathText>
            </text>
            <text x={"340"} y={"60"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"régua (parada)"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Cinza tracejado: posição inicial do esquadro. Azul: depois de deslizar até P. A reta rosa s é paralela a r"}</MathText>
          </div>
        </div>
        <ol>
          <li>
            <MathText>{"Encoste um lado do esquadro na reta \\(r\\) e encoste uma "}</MathText>
            <b>
              <MathText>{"régua"}</MathText>
            </b>
            <MathText>{" em outro lado do esquadro."}</MathText>
          </li>
          <li>
            <MathText>{"Segure a régua "}</MathText>
            <b>
              <MathText>{"parada"}</MathText>
            </b>
            <MathText>{" e deslize o esquadro por ela até o lado que estava sobre \\(r\\) passar pelo ponto \\(P\\)."}</MathText>
          </li>
          <li>
            <MathText>{"Trace a reta \\(s\\) ao longo desse lado. Como o esquadro só "}</MathText>
            <b>
              <MathText>{"deslizou"}</MathText>
            </b>
            <MathText>{" sem girar, a nova reta tem a mesma direção de \\(r\\): \\(s \\parallel r\\)."}</MathText>
          </li>
        </ol>
        <h3>
          <MathText>{"2.6 A distância entre duas paralelas"}</MathText>
        </h3>
        <p>
          <MathText>{"A “distância” entre duas retas paralelas é a medida de um segmento "}</MathText>
          <b>
            <MathText>{"perpendicular"}</MathText>
          </b>
          <MathText>{" às duas (o caminho mais curto de uma até a outra). E o melhor: não importa onde você meça, o valor é "}</MathText>
          <b>
            <MathText>{"sempre o mesmo"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 140"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Duas retas paralelas com dois segmentos perpendiculares de mesma medida d"}>
            <line x1={"20"} y1={"40"} x2={"400"} y2={"40"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"20"} y1={"120"} x2={"400"} y2={"120"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <text x={"392"} y={"32"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"r"}</MathText>
            </text>
            <text x={"392"} y={"112"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"s"}</MathText>
            </text>
            <line x1={"120"} y1={"40"} x2={"120"} y2={"120"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </line>
            <polyline points={"120,110 110,110 110,120"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <polyline points={"120,50 130,50 130,40"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <text x={"134"} y={"85"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"d"}</MathText>
            </text>
            <line x1={"300"} y1={"40"} x2={"300"} y2={"120"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </line>
            <polyline points={"300,110 290,110 290,120"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <polyline points={"300,50 310,50 310,40"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <text x={"314"} y={"85"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"d"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"A distância d entre duas retas paralelas é sempre a mesma"}</MathText>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Meça na perpendicular!"}</MathText>
          </b>
          <MathText>{"Se você medir “torto” (inclinado) de uma reta até a outra, o segmento fica maior que a distância verdadeira. A distância é sempre medida em 90°."}</MathText>
        </div>
        <h3>
          <MathText>{"2.7 Exemplos no papel"}</MathText>
        </h3>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 1 — Duas ruas paralelas, uma terceira rua as corta em 90°"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"As ruas A e B são paralelas e ficam a "}</MathText>
              <b>
                <MathText>{"40 m"}</MathText>
              </b>
              <MathText>{" uma da outra. A rua C é perpendicular à rua A. Qual a posição da rua C em relação à B? Quanto mede o trecho de C entre A e B?"}</MathText>
            </div>
            <div>
              <MathText>{"1) Desenhe: A \\(\\parallel\\) B e C cortando A em 90°."}</MathText>
            </div>
            <div>
              <MathText>{"2) Se o esquadro está em 90° com A e A \\(\\parallel\\) B, ele também está em 90° com B. Logo C \\(\\perp\\) B."}</MathText>
            </div>
            <div>
              <MathText>{"3) O trecho de C entre A e B é perpendicular às duas, então mede a "}</MathText>
              <b>
                <MathText>{"distância entre elas"}</MathText>
              </b>
              <MathText>{": "}</MathText>
              <b>
                <MathText>{"40 m"}</MathText>
              </b>
              <MathText>{"."}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 2 — Classifique as retas"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"a) Linhas de um caderno: "}</MathText>
              <b>
                <MathText>{"paralelas"}</MathText>
              </b>
              <MathText>{"."}</MathText>
            </div>
            <div>
              <MathText>{"b) Linha do caderno e a margem (vertical): "}</MathText>
              <b>
                <MathText>{"perpendiculares"}</MathText>
              </b>
              <MathText>{"."}</MathText>
            </div>
            <div>
              <MathText>{"c) Duas estradas que se cruzam formando 70°: "}</MathText>
              <b>
                <MathText>{"concorrentes"}</MathText>
              </b>
              <MathText>{" (não perpendiculares)."}</MathText>
            </div>
            <div>
              <MathText>{"d) Uma reta desenhada duas vezes por cima: "}</MathText>
              <b>
                <MathText>{"coincidentes"}</MathText>
              </b>
              <MathText>{"."}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"2.8 Resumo da lição"}</MathText>
        </h3>
        <ul>
          <li>
            <MathText>{"Duas retas no plano: "}</MathText>
            <b>
              <MathText>{"paralelas"}</MathText>
            </b>
            <MathText>{", "}</MathText>
            <b>
              <MathText>{"concorrentes"}</MathText>
            </b>
            <MathText>{" (1 ponto), "}</MathText>
            <b>
              <MathText>{"perpendiculares"}</MathText>
            </b>
            <MathText>{" (90°) ou "}</MathText>
            <b>
              <MathText>{"coincidentes"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </li>
          <li>
            <MathText>{"Se \\(r \\parallel s\\) e \\(t \\perp r\\), então \\(t \\perp s\\) também."}</MathText>
          </li>
          <li>
            <MathText>{"A distância entre paralelas é medida na "}</MathText>
            <b>
              <MathText>{"perpendicular"}</MathText>
            </b>
            <MathText>{" e é constante."}</MathText>
          </li>
        </ul>
        <GeometryQuickCheck index={3} />
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto={"3"}>
          <MathText>{"✏️ Fazer os exercícios do nível 3"}</MathText>
        </button>
      </article>
      <article className="geometry-basica-lesson bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_.lesson-tag]:text-[.7rem] [&_.lesson-tag]:font-extrabold [&_.lesson-tag]:tracking-[.12em] [&_.lesson-tag]:uppercase [&_.lesson-tag]:text-indigo-600 [&_h2]:text-[1.6rem] [&_h2]:font-black [&_h2]:mt-1 [&_h2]:text-slate-800 [&_h3]:font-extrabold [&_h3]:text-lg [&_h3]:mt-7 [&_h3]:text-indigo-800 [&_h4]:mt-4 [&_h4]:font-bold [&_p]:leading-[1.85] [&_p]:text-slate-600 [&_p]:mt-3 [&_ul]:pl-6 [&_ul]:text-slate-600 [&_ul]:leading-[1.85] [&_ul]:mt-2 [&_ul]:list-disc [&_ol]:pl-6 [&_ol]:text-slate-600 [&_ol]:leading-[1.85] [&_ol]:mt-2 [&_ol]:list-decimal [&_li]:mt-1 [&_b]:text-slate-800 [&_strong]:text-slate-800" id={"l3"}>
        <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 3"}</MathText>
        </div>
        <h2>
          <MathText>{"Ângulos"}</MathText>
        </h2>
        <p>
          <MathText>{"Quando você abre uma porta, uma tesoura ou um livro, você cria um "}</MathText>
          <b>
            <MathText>{"ângulo"}</MathText>
          </b>
          <MathText>{". Quanto mais abre, maior o ângulo. A geometria precisa de um jeito de dizer “abriu quanto?”, e esse jeito é medir ângulos em "}</MathText>
          <b>
            <MathText>{"graus"}</MathText>
          </b>
          <MathText>{". Esta lição ensina a ler, desenhar e classificar ângulos."}</MathText>
        </p>
        <h3>
          <MathText>{"3.1 O que é um ângulo?"}</MathText>
        </h3>
        <p>
          <MathText>{"Um "}</MathText>
          <b>
            <MathText>{"ângulo"}</MathText>
          </b>
          <MathText>{" é a "}</MathText>
          <b>
            <MathText>{"abertura"}</MathText>
          </b>
          <MathText>{" entre duas semirretas que começam no mesmo ponto. O ponto de encontro é o "}</MathText>
          <b>
            <MathText>{"vértice"}</MathText>
          </b>
          <MathText>{" e as semirretas são os "}</MathText>
          <b>
            <MathText>{"lados"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 170"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Um ângulo AÔB com vértice O e dois lados"}>
            <line x1={"130"} y1={"120"} x2={"280"} y2={"120"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"130"} y1={"120"} x2={"204.6"} y2={"13.5"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <path d={"M168,120 A38 38 0 0 0 151.8,88.9"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <circle cx={"130"} cy={"120"} r={"4"} fill={"#1e293b"}>
            </circle>
            <text x={"116"} y={"140"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"O (vértice)"}</MathText>
            </text>
            <text x={"294"} y={"126"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"A"}</MathText>
            </text>
            <text x={"211.4"} y={"-0.2999999999999998"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"B"}</MathText>
            </text>
            <text x={"183.5"} y={"92.8"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"abertura"}</MathText>
            </text>
            <text x={"255"} y={"55"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <MathText>{"lado OB (uma semirreta)"}</MathText>
            </text>
            <text x={"255"} y={"118"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <MathText>{"lado OA (outra semirreta)"}</MathText>
            </text>
            <text x={"255"} y={"160"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"} >
              <MathText>{"Ângulo: AÔB (lemos “A O B”)"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"O ângulo é a abertura entre dois lados que começam no mesmo ponto"}</MathText>
          </div>
        </div>
        <p>
          <MathText>{"Para escrever, usamos três letras, com o "}</MathText>
          <b>
            <MathText>{"vértice no meio"}</MathText>
          </b>
          <MathText>{": \\(A\\hat{O}B\\) (lemos “ângulo A O B”). Quando não há dúvida, pode-se escrever só a letra do vértice: \\(\\hat{O}\\). A medida do ângulo \\(A\\hat{O}B\\) escrevemos assim: \\(A\\hat{O}B = 50^\\circ\\)."}</MathText>
        </p>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"O tamanho do desenho dos lados não importa"}</MathText>
          </b>
          <MathText>{"Um ângulo com lados de 3 cm e outro com lados de 10 cm podem ter "}</MathText>
          <u>
            <MathText>{"a mesma"}</MathText>
          </u>
          <MathText>{" abertura. O que conta é o quanto os lados se afastam, não o comprimento deles."}</MathText>
        </div>
        <h3>
          <MathText>{"3.2 O grau e a volta completa"}</MathText>
        </h3>
        <p>
          <MathText>{"A unidade de medida de ângulo é o "}</MathText>
          <b>
            <MathText>{"grau"}</MathText>
          </b>
          <MathText>{", escrito com um pequeno círculo: "}</MathText>
          <b>
            <MathText>{"1°"}</MathText>
          </b>
          <MathText>{". Imagine uma volta inteira ao redor de um ponto, dividida em "}</MathText>
          <b>
            <MathText>{"360 partes iguais"}</MathText>
          </b>
          <MathText>{". Cada parte é "}</MathText>
          <b>
            <MathText>{"1 grau"}</MathText>
          </b>
          <MathText>{". Por isso, "}</MathText>
          <b>
            <MathText>{"uma volta completa tem 360°"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Parte da volta"}</MathText>
              </th>
              <th>
                <MathText>{"Conta"}</MathText>
              </th>
              <th>
                <MathText>{"Ângulo"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"uma volta inteira"}</MathText>
              </td>
              <td>
                <MathText>{"—"}</MathText>
              </td>
              <td>
                <MathText>{"\\(360^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"meia volta (\\(\\tfrac{1}{2}\\))"}</MathText>
              </td>
              <td>
                <MathText>{"\\(360 \\div 2\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(180^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"um quarto de volta (\\(\\tfrac{1}{4}\\))"}</MathText>
              </td>
              <td>
                <MathText>{"\\(360 \\div 4\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(90^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"três quartos de volta (\\(\\tfrac{3}{4}\\))"}</MathText>
              </td>
              <td>
                <MathText>{"\\(3 \\cdot 90\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(270^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"um terço de volta (\\(\\tfrac{1}{3}\\))"}</MathText>
              </td>
              <td>
                <MathText>{"\\(360 \\div 3\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(120^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"um sexto de volta (\\(\\tfrac{1}{6}\\))"}</MathText>
              </td>
              <td>
                <MathText>{"\\(360 \\div 6\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(60^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"um oitavo de volta (\\(\\tfrac{1}{8}\\))"}</MathText>
              </td>
              <td>
                <MathText>{"\\(360 \\div 8\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(45^\\circ\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <MathText>{"Regra prática: "}</MathText>
          <b>
            <MathText>{"para achar uma fração da volta, divida 360 pelo denominador e multiplique pelo numerador"}</MathText>
          </b>
          <MathText>{" (você já fez isso em frações!)."}</MathText>
        </p>
        <GeometryQuickCheck index={4} />
        <h3>
          <MathText>{"3.3 Medindo com o transferidor"}</MathText>
        </h3>
        <p>
          <MathText>{"O "}</MathText>
          <b>
            <MathText>{"transferidor"}</MathText>
          </b>
          <MathText>{" é uma régua de ângulos, em forma de meio círculo, com marcas de 0° a 180°. Ele tem "}</MathText>
          <b>
            <MathText>{"duas escalas"}</MathText>
          </b>
          <MathText>{" (uma de cada lado) para você poder medir ângulos que “abrem” para a direita ou para a esquerda."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 130"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Dois transferidores medindo 50 graus, um usando a escala de fora e outro a escala de dentro"}>
            <path d={"M20,105 A85 85 0 0 1 190,105 Z"} fill={"#e0f2fe"} fillOpacity={".75"} stroke={"#0369a1"} strokeWidth={"2"}>
            </path>
            <line x1={"190"} y1={"105"} x2={"178"} y2={"105"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"188.7"} y1={"90.2"} x2={"181.8"} y2={"91.5"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"184.9"} y1={"75.9"} x2={"178.3"} y2={"78.3"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"178.6"} y1={"62.5"} x2={"168.2"} y2={"68.5"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"170.1"} y1={"50.4"} x2={"164.8"} y2={"54.9"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"159.6"} y1={"39.9"} x2={"155.1"} y2={"45.2"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"147.5"} y1={"31.4"} x2={"141.5"} y2={"41.8"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"134.1"} y1={"25.1"} x2={"131.7"} y2={"31.7"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"119.8"} y1={"21.3"} x2={"118.5"} y2={"28.2"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"105"} y1={"20"} x2={"105"} y2={"32"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"90.2"} y1={"21.3"} x2={"91.5"} y2={"28.2"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"75.9"} y1={"25.1"} x2={"78.3"} y2={"31.7"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"62.5"} y1={"31.4"} x2={"68.5"} y2={"41.8"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"50.4"} y1={"39.9"} x2={"54.9"} y2={"45.2"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"39.9"} y1={"50.4"} x2={"45.2"} y2={"54.9"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"31.4"} y1={"62.5"} x2={"41.8"} y2={"68.5"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"25.1"} y1={"75.9"} x2={"31.7"} y2={"78.3"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"21.3"} y1={"90.2"} x2={"28.2"} y2={"91.5"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"20"} y1={"105"} x2={"32"} y2={"105"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <text x={"166"} y={"109"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"0"}</MathText>
            </text>
            <text x={"150"} y={"109"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"180"}</MathText>
            </text>
            <text x={"157.8"} y={"78.5"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"30"}</MathText>
            </text>
            <text x={"144"} y={"86.5"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"150"}</MathText>
            </text>
            <text x={"135.5"} y={"56.2"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"60"}</MathText>
            </text>
            <text x={"127.5"} y={"70"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"120"}</MathText>
            </text>
            <text x={"105"} y={"48"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"90"}</MathText>
            </text>
            <text x={"105"} y={"64"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"90"}</MathText>
            </text>
            <text x={"74.5"} y={"56.2"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"120"}</MathText>
            </text>
            <text x={"82.5"} y={"70"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"60"}</MathText>
            </text>
            <text x={"52.2"} y={"78.5"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"150"}</MathText>
            </text>
            <text x={"66"} y={"86.5"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"30"}</MathText>
            </text>
            <text x={"44"} y={"109"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"180"}</MathText>
            </text>
            <text x={"60"} y={"109"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"0"}</MathText>
            </text>
            <line x1={"14"} y1={"105"} x2={"196"} y2={"105"} stroke={"#0369a1"} strokeWidth={"1.5"}>
            </line>
            <line x1={"105"} y1={"105"} x2={"204"} y2={"105"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"105"} y1={"105"} x2={"168.6"} y2={"29.2"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <circle cx={"105"} cy={"105"} r={"3.5"} fill={"#1e293b"}>
            </circle>
            <path d={"M125,105 A20 20 0 0 0 117.9,89.7"} stroke={"#f59e0b"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <path d={"M230,105 A85 85 0 0 1 400,105 Z"} fill={"#e0f2fe"} fillOpacity={".75"} stroke={"#0369a1"} strokeWidth={"2"}>
            </path>
            <line x1={"400"} y1={"105"} x2={"388"} y2={"105"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"398.7"} y1={"90.2"} x2={"391.8"} y2={"91.5"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"394.9"} y1={"75.9"} x2={"388.3"} y2={"78.3"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"388.6"} y1={"62.5"} x2={"378.2"} y2={"68.5"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"380.1"} y1={"50.4"} x2={"374.8"} y2={"54.9"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"369.6"} y1={"39.9"} x2={"365.1"} y2={"45.2"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"357.5"} y1={"31.4"} x2={"351.5"} y2={"41.8"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"344.1"} y1={"25.1"} x2={"341.7"} y2={"31.7"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"329.8"} y1={"21.3"} x2={"328.5"} y2={"28.2"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"315"} y1={"20"} x2={"315"} y2={"32"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"300.2"} y1={"21.3"} x2={"301.5"} y2={"28.2"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"285.9"} y1={"25.1"} x2={"288.3"} y2={"31.7"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"272.5"} y1={"31.4"} x2={"278.5"} y2={"41.8"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"260.4"} y1={"39.9"} x2={"264.9"} y2={"45.2"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"249.9"} y1={"50.4"} x2={"255.2"} y2={"54.9"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"241.4"} y1={"62.5"} x2={"251.8"} y2={"68.5"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"235.1"} y1={"75.9"} x2={"241.7"} y2={"78.3"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"231.3"} y1={"90.2"} x2={"238.2"} y2={"91.5"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"230"} y1={"105"} x2={"242"} y2={"105"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <text x={"376"} y={"109"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"0"}</MathText>
            </text>
            <text x={"360"} y={"109"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"180"}</MathText>
            </text>
            <text x={"367.8"} y={"78.5"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"30"}</MathText>
            </text>
            <text x={"354"} y={"86.5"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"150"}</MathText>
            </text>
            <text x={"345.5"} y={"56.2"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"60"}</MathText>
            </text>
            <text x={"337.5"} y={"70"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"120"}</MathText>
            </text>
            <text x={"315"} y={"48"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"90"}</MathText>
            </text>
            <text x={"315"} y={"64"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"90"}</MathText>
            </text>
            <text x={"284.5"} y={"56.2"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"120"}</MathText>
            </text>
            <text x={"292.5"} y={"70"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"60"}</MathText>
            </text>
            <text x={"262.2"} y={"78.5"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"150"}</MathText>
            </text>
            <text x={"276"} y={"86.5"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"30"}</MathText>
            </text>
            <text x={"254"} y={"109"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"180"}</MathText>
            </text>
            <text x={"270"} y={"109"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"0"}</MathText>
            </text>
            <line x1={"224"} y1={"105"} x2={"406"} y2={"105"} stroke={"#0369a1"} strokeWidth={"1.5"}>
            </line>
            <line x1={"315"} y1={"105"} x2={"216"} y2={"105"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"315"} y1={"105"} x2={"251.4"} y2={"29.2"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <circle cx={"315"} cy={"105"} r={"3.5"} fill={"#1e293b"}>
            </circle>
            <path d={"M302.1,89.7 A20 20 0 0 0 295,105"} stroke={"#f59e0b"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <text x={"105"} y={"124"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"lado sobre o 0 de FORA → lê 50"}</MathText>
            </text>
            <text x={"315"} y={"124"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"lado sobre o 0 de DENTRO → lê 50"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"A escala certa é a que tem o 0 no lado que está sobre a linha de base"}</MathText>
          </div>
        </div>
        <h4 className="mt-4 font-bold text-slate-800">
          <MathText>{"Passo a passo"}</MathText>
        </h4>
        <ol>
          <li>
            <MathText>{"Coloque o "}</MathText>
            <b>
              <MathText>{"furinho"}</MathText>
            </b>
            <MathText>{" (o centro do transferidor) exatamente sobre o "}</MathText>
            <b>
              <MathText>{"vértice"}</MathText>
            </b>
            <MathText>{" do ângulo."}</MathText>
          </li>
          <li>
            <MathText>{"Gire o transferidor até que um dos lados do ângulo fique sobre a "}</MathText>
            <b>
              <MathText>{"linha de base"}</MathText>
            </b>
            <MathText>{", passando pelo "}</MathText>
            <b>
              <MathText>{"0°"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </li>
          <li>
            <MathText>{"Veja por onde o "}</MathText>
            <b>
              <MathText>{"outro lado"}</MathText>
            </b>
            <MathText>{" passa na escala "}</MathText>
            <b>
              <MathText>{"que começa em 0° no lado que você alinhou"}</MathText>
            </b>
            <MathText>{". Se o lado fica curto, prolongue-o com a régua."}</MathText>
          </li>
          <li>
            <MathText>{"Escreva a medida com o símbolo de grau: \\(50^\\circ\\)."}</MathText>
          </li>
        </ol>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Escala certa!"}</MathText>
          </b>
          <MathText>{"Cada marca do transferidor tem dois números (por exemplo, 50 e 130). Use sempre o que começa no "}</MathText>
          <b>
            <MathText>{"0 do lado que está alinhado"}</MathText>
          </b>
          <MathText>{". Teste de bom senso: se o ângulo é "}</MathText>
          <u>
            <MathText>{"pequeno"}</MathText>
          </u>
          <MathText>{" (menor que um canto de folha), a resposta tem que ser menor que 90."}</MathText>
        </div>
        <h3>
          <MathText>{"3.4 Construindo um ângulo com o transferidor"}</MathText>
        </h3>
        <p>
          <MathText>{"Para desenhar um ângulo de "}</MathText>
          <b>
            <MathText>{"65°"}</MathText>
          </b>
          <MathText>{":"}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 220 125"} className="w-[220px] max-w-full h-auto" role={"img"} aria-label={"Transferidor com marca em 65 graus"}>
            <path d={"M25,105 A85 85 0 0 1 195,105 Z"} fill={"#e0f2fe"} fillOpacity={".75"} stroke={"#0369a1"} strokeWidth={"2"}>
            </path>
            <line x1={"195"} y1={"105"} x2={"183"} y2={"105"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"193.7"} y1={"90.2"} x2={"186.8"} y2={"91.5"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"189.9"} y1={"75.9"} x2={"183.3"} y2={"78.3"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"183.6"} y1={"62.5"} x2={"173.2"} y2={"68.5"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"175.1"} y1={"50.4"} x2={"169.8"} y2={"54.9"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"164.6"} y1={"39.9"} x2={"160.1"} y2={"45.2"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"152.5"} y1={"31.4"} x2={"146.5"} y2={"41.8"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"139.1"} y1={"25.1"} x2={"136.7"} y2={"31.7"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"124.8"} y1={"21.3"} x2={"123.5"} y2={"28.2"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"110"} y1={"20"} x2={"110"} y2={"32"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"95.2"} y1={"21.3"} x2={"96.5"} y2={"28.2"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"80.9"} y1={"25.1"} x2={"83.3"} y2={"31.7"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"67.5"} y1={"31.4"} x2={"73.5"} y2={"41.8"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"55.4"} y1={"39.9"} x2={"59.9"} y2={"45.2"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"44.9"} y1={"50.4"} x2={"50.2"} y2={"54.9"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"36.4"} y1={"62.5"} x2={"46.8"} y2={"68.5"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"30.1"} y1={"75.9"} x2={"36.7"} y2={"78.3"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"26.3"} y1={"90.2"} x2={"33.2"} y2={"91.5"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <line x1={"25"} y1={"105"} x2={"37"} y2={"105"} stroke={"#0369a1"} strokeWidth={"1.2"}>
            </line>
            <text x={"171"} y={"109"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"0"}</MathText>
            </text>
            <text x={"155"} y={"109"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"180"}</MathText>
            </text>
            <text x={"162.8"} y={"78.5"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"30"}</MathText>
            </text>
            <text x={"149"} y={"86.5"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"150"}</MathText>
            </text>
            <text x={"140.5"} y={"56.2"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"60"}</MathText>
            </text>
            <text x={"132.5"} y={"70"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"120"}</MathText>
            </text>
            <text x={"110"} y={"48"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"90"}</MathText>
            </text>
            <text x={"110"} y={"64"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"90"}</MathText>
            </text>
            <text x={"79.5"} y={"56.2"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"120"}</MathText>
            </text>
            <text x={"87.5"} y={"70"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"60"}</MathText>
            </text>
            <text x={"57.2"} y={"78.5"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"150"}</MathText>
            </text>
            <text x={"71"} y={"86.5"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"30"}</MathText>
            </text>
            <text x={"49"} y={"109"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"180"}</MathText>
            </text>
            <text x={"65"} y={"109"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}   >
              <MathText>{"0"}</MathText>
            </text>
            <line x1={"19"} y1={"105"} x2={"201"} y2={"105"} stroke={"#0369a1"} strokeWidth={"1.5"}>
            </line>
            <line x1={"110"} y1={"105"} x2={"209"} y2={"105"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"110"} y1={"105"} x2={"151.8"} y2={"15.3"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <circle cx={"110"} cy={"105"} r={"3.5"} fill={"#1e293b"}>
            </circle>
            <path d={"M130,105 A20 20 0 0 0 118.5,86.9"} stroke={"#f59e0b"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <circle cx={"145.9"} cy={"28"} r={"5"} fill={"none"} stroke={"#ec4899"} strokeWidth={"2"}>
            </circle>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Passo 2: marque um pontinho em 65° e depois ligue-o ao vértice"}</MathText>
          </div>
        </div>
        <ol>
          <li>
            <MathText>{"Trace uma semirreta de origem \\(O\\) (um dos lados)."}</MathText>
          </li>
          <li>
            <MathText>{"Ponha o centro do transferidor em \\(O\\) e o 0° sobre a semirreta. Faça uma marquinha no "}</MathText>
            <b>
              <MathText>{"65°"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </li>
          <li>
            <MathText>{"Tire o transferidor e, com a régua, trace a outra semirreta de \\(O\\) passando pela marquinha."}</MathText>
          </li>
          <li>
            <MathText>{"Marque o arco e escreva \\(65^\\circ\\)."}</MathText>
          </li>
        </ol>
        <h3>
          <MathText>{"3.5 Tipos de ângulo"}</MathText>
        </h3>
        <p>
          <MathText>{"Os ângulos recebem nomes conforme o tamanho. Compare todos com o "}</MathText>
          <b>
            <MathText>{"ângulo reto"}</MathText>
          </b>
          <MathText>{" (90°, o canto da folha):"}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 262"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Seis tipos de ângulo: nulo, agudo, reto, obtuso, raso e giro"}>
            <line x1={"62"} y1={"82"} x2={"117"} y2={"82"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"62"} y1={"82"} x2={"102"} y2={"82"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <circle cx={"62"} cy={"82"} r={"3.5"} fill={"#1e293b"}>
            </circle>
            <text x={"66"} y={"116"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"Nulo: 0°"}</MathText>
            </text>
            <line x1={"202"} y1={"82"} x2={"257"} y2={"82"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"202"} y1={"82"} x2={"244.1"} y2={"46.6"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <path d={"M230,82 A28 28 0 0 0 223.4,64"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <circle cx={"202"} cy={"82"} r={"3.5"} fill={"#1e293b"}>
            </circle>
            <text x={"206"} y={"116"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"Agudo: entre 0° e 90°"}</MathText>
            </text>
            <line x1={"342"} y1={"82"} x2={"397"} y2={"82"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"342"} y1={"82"} x2={"342"} y2={"27"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <polyline points={"356,82 356,68 342,68"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <circle cx={"342"} cy={"82"} r={"3.5"} fill={"#1e293b"}>
            </circle>
            <text x={"346"} y={"116"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"Reto: 90°"}</MathText>
            </text>
            <line x1={"62"} y1={"212"} x2={"117"} y2={"212"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"62"} y1={"212"} x2={"26.6"} y2={"169.9"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <path d={"M90,212 A28 28 0 0 0 44,190.6"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <circle cx={"62"} cy={"212"} r={"3.5"} fill={"#1e293b"}>
            </circle>
            <text x={"66"} y={"246"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"Obtuso: entre 90° e 180°"}</MathText>
            </text>
            <line x1={"147"} y1={"212"} x2={"257"} y2={"212"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <path d={"M230,212 A28 28 0 0 0 174,212"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <circle cx={"202"} cy={"212"} r={"3.5"} fill={"#1e293b"}>
            </circle>
            <text x={"206"} y={"246"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"Raso: 180°"}</MathText>
            </text>
            <circle cx={"342"} cy={"212"} r={"30"} fill={"none"} stroke={"#ec4899"} strokeWidth={"3"}>
            </circle>
            <line x1={"342"} y1={"212"} x2={"397"} y2={"212"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <circle cx={"342"} cy={"212"} r={"3.5"} fill={"#1e293b"}>
            </circle>
            <text x={"346"} y={"246"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"Giro: 360°"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Os tipos de ângulo"}</MathText>
          </div>
        </div>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Nome"}</MathText>
              </th>
              <th>
                <MathText>{"Medida"}</MathText>
              </th>
              <th>
                <MathText>{"Em palavras"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>
                  <MathText>{"Nulo"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"\\(0^\\circ\\)"}</MathText>
              </td>
              <td>
                <MathText>{"os dois lados coincidem"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Agudo"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"entre \\(0^\\circ\\) e \\(90^\\circ\\)"}</MathText>
              </td>
              <td>
                <MathText>{"“fechado”, menor que o canto da folha"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Reto"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"\\(90^\\circ\\)"}</MathText>
              </td>
              <td>
                <MathText>{"o canto da folha (quadradinho)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Obtuso"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"entre \\(90^\\circ\\) e \\(180^\\circ\\)"}</MathText>
              </td>
              <td>
                <MathText>{"“aberto”, maior que o canto da folha"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Raso"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"\\(180^\\circ\\)"}</MathText>
              </td>
              <td>
                <MathText>{"os lados formam uma reta (meia volta)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Côncavo"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"entre \\(180^\\circ\\) e \\(360^\\circ\\)"}</MathText>
              </td>
              <td>
                <MathText>{"passa de meia volta"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Giro"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"\\(360^\\circ\\)"}</MathText>
              </td>
              <td>
                <MathText>{"volta completa"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 1 — Classifique: 35°, 90°, 112°, 180°, 270°"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(35^\\circ\\): entre 0° e 90° → "}</MathText>
              <b>
                <MathText>{"agudo"}</MathText>
              </b>
            </div>
            <div>
              <MathText>{"\\(90^\\circ\\) → "}</MathText>
              <b>
                <MathText>{"reto"}</MathText>
              </b>
            </div>
            <div>
              <MathText>{"\\(112^\\circ\\): entre 90° e 180° → "}</MathText>
              <b>
                <MathText>{"obtuso"}</MathText>
              </b>
            </div>
            <div>
              <MathText>{"\\(180^\\circ\\) → "}</MathText>
              <b>
                <MathText>{"raso"}</MathText>
              </b>
            </div>
            <div>
              <MathText>{"\\(270^\\circ\\): entre 180° e 360° → "}</MathText>
              <b>
                <MathText>{"côncavo"}</MathText>
              </b>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-amber-500 bg-amber-50">
          <b>
            <MathText>{"Truque de memória"}</MathText>
          </b>
          <b>
            <MathText>{"A"}</MathText>
          </b>
          <MathText>{"gudo é “a-gudo”, ponta fina, "}</MathText>
          <b>
            <MathText>{"pequeno"}</MathText>
          </b>
          <MathText>{". "}</MathText>
          <b>
            <MathText>{"O"}</MathText>
          </b>
          <MathText>{"btuso é “o-bt-uso”, "}</MathText>
          <b>
            <MathText>{"grande"}</MathText>
          </b>
          <MathText>{" (maior que 90°, mas ainda menor que uma reta)."}</MathText>
        </div>
        <h3>
          <MathText>{"3.6 O ângulo dos ponteiros do relógio"}</MathText>
        </h3>
        <p>
          <MathText>{"O mostrador do relógio é uma volta completa (360°) dividida em "}</MathText>
          <b>
            <MathText>{"12 partes iguais"}</MathText>
          </b>
          <MathText>{". Então, de um número ao próximo, o ponteiro anda \\(360 \\div 12 = 30^\\circ\\). Quando o ponteiro grande está no 12, o ângulo com o ponteiro das horas é "}</MathText>
          <b>
            <MathText>{"30° vezes a hora"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 146"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Três relógios mostrando 3 horas, 4 horas e 6 horas com o ângulo entre os ponteiros"}>
            <circle cx={"70"} cy={"62"} r={"50"} fill={"#fff"} stroke={"#334155"} strokeWidth={"2"}>
            </circle>
            <line x1={"120"} y1={"62"} x2={"114"} y2={"62"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"113.3"} y1={"37"} x2={"108.1"} y2={"40"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"95"} y1={"18.7"} x2={"92"} y2={"23.9"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"70"} y1={"12"} x2={"70"} y2={"18"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"45"} y1={"18.7"} x2={"48"} y2={"23.9"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"26.7"} y1={"37"} x2={"31.9"} y2={"40"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"20"} y1={"62"} x2={"26"} y2={"62"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"26.7"} y1={"87"} x2={"31.9"} y2={"84"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"45"} y1={"105.3"} x2={"48"} y2={"100.1"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"70"} y1={"112"} x2={"70"} y2={"106"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"95"} y1={"105.3"} x2={"92"} y2={"100.1"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"113.3"} y1={"87"} x2={"108.1"} y2={"84"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <text x={"70"} y={"29"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"12"}</MathText>
            </text>
            <text x={"104"} y={"66"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"3"}</MathText>
            </text>
            <text x={"70"} y={"102"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"6"}</MathText>
            </text>
            <text x={"36"} y={"66"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"9"}</MathText>
            </text>
            <path d={"M92,62 A22 22 0 0 0 70,40"} stroke={"#f59e0b"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <line x1={"70"} y1={"62"} x2={"70"} y2={"22"} stroke={"#334155"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"70"} y1={"62"} x2={"98"} y2={"62"} stroke={"#ec4899"} strokeWidth={"5"} strokeLinecap={"round"}>
            </line>
            <circle cx={"70"} cy={"62"} r={"3"} fill={"#1e293b"}>
            </circle>
            <text x={"70"} y={"134"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"3 h → 90°"}</MathText>
            </text>
            <circle cx={"210"} cy={"62"} r={"50"} fill={"#fff"} stroke={"#334155"} strokeWidth={"2"}>
            </circle>
            <line x1={"260"} y1={"62"} x2={"254"} y2={"62"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"253.3"} y1={"37"} x2={"248.1"} y2={"40"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"235"} y1={"18.7"} x2={"232"} y2={"23.9"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"210"} y1={"12"} x2={"210"} y2={"18"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"185"} y1={"18.7"} x2={"188"} y2={"23.9"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"166.7"} y1={"37"} x2={"171.9"} y2={"40"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"160"} y1={"62"} x2={"166"} y2={"62"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"166.7"} y1={"87"} x2={"171.9"} y2={"84"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"185"} y1={"105.3"} x2={"188"} y2={"100.1"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"210"} y1={"112"} x2={"210"} y2={"106"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"235"} y1={"105.3"} x2={"232"} y2={"100.1"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"253.3"} y1={"87"} x2={"248.1"} y2={"84"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <text x={"210"} y={"29"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"12"}</MathText>
            </text>
            <text x={"244"} y={"66"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"3"}</MathText>
            </text>
            <text x={"210"} y={"102"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"6"}</MathText>
            </text>
            <text x={"176"} y={"66"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"9"}</MathText>
            </text>
            <path d={"M229.1,73 A22 22 0 0 0 210,40"} stroke={"#f59e0b"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <line x1={"210"} y1={"62"} x2={"210"} y2={"22"} stroke={"#334155"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"210"} y1={"62"} x2={"234.2"} y2={"76"} stroke={"#ec4899"} strokeWidth={"5"} strokeLinecap={"round"}>
            </line>
            <circle cx={"210"} cy={"62"} r={"3"} fill={"#1e293b"}>
            </circle>
            <text x={"210"} y={"134"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"4 h → 120°"}</MathText>
            </text>
            <circle cx={"350"} cy={"62"} r={"50"} fill={"#fff"} stroke={"#334155"} strokeWidth={"2"}>
            </circle>
            <line x1={"400"} y1={"62"} x2={"394"} y2={"62"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"393.3"} y1={"37"} x2={"388.1"} y2={"40"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"375"} y1={"18.7"} x2={"372"} y2={"23.9"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"350"} y1={"12"} x2={"350"} y2={"18"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"325"} y1={"18.7"} x2={"328"} y2={"23.9"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"306.7"} y1={"37"} x2={"311.9"} y2={"40"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"300"} y1={"62"} x2={"306"} y2={"62"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"306.7"} y1={"87"} x2={"311.9"} y2={"84"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"325"} y1={"105.3"} x2={"328"} y2={"100.1"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"350"} y1={"112"} x2={"350"} y2={"106"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"375"} y1={"105.3"} x2={"372"} y2={"100.1"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <line x1={"393.3"} y1={"87"} x2={"388.1"} y2={"84"} stroke={"#334155"} strokeWidth={"1.5"}>
            </line>
            <text x={"350"} y={"29"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"12"}</MathText>
            </text>
            <text x={"384"} y={"66"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"3"}</MathText>
            </text>
            <text x={"350"} y={"102"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"6"}</MathText>
            </text>
            <text x={"316"} y={"66"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"9"}</MathText>
            </text>
            <path d={"M350,84 A22 22 0 0 0 350,40"} stroke={"#f59e0b"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <line x1={"350"} y1={"62"} x2={"350"} y2={"22"} stroke={"#334155"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"350"} y1={"62"} x2={"350"} y2={"90"} stroke={"#ec4899"} strokeWidth={"5"} strokeLinecap={"round"}>
            </line>
            <circle cx={"350"} cy={"62"} r={"3"} fill={"#1e293b"}>
            </circle>
            <text x={"350"} y={"134"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"6 h → 180°"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Ponteiro grande no 12: o ângulo com o ponteiro das horas é 30° × hora"}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 2 — Menor ângulo entre os ponteiros às 5 h e às 8 h"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Às 5 h: \\(5 \\cdot 30^\\circ = 150^\\circ\\) (menor que 180°, serve)."}</MathText>
            </div>
            <div>
              <MathText>{"Às 8 h: \\(8 \\cdot 30^\\circ = 240^\\circ\\) → passou de meia volta."}</MathText>
            </div>
            <div>
              <MathText>{"O menor ângulo é o que sobra para a volta toda: \\(360^\\circ - 240^\\circ = 120^\\circ\\)."}</MathText>
            </div>
          </div>
        </div>
        <GeometryQuickCheck index={5} />
        <h3>
          <MathText>{"3.7 Somando e comparando ângulos"}</MathText>
        </h3>
        <p>
          <MathText>{"Dois ângulos que têm o "}</MathText>
          <b>
            <MathText>{"mesmo vértice"}</MathText>
          </b>
          <MathText>{" e um lado em comum, lado a lado, se juntam num ângulo maior (chamamos de "}</MathText>
          <b>
            <MathText>{"ângulos adjacentes"}</MathText>
          </b>
          <MathText>{"). A medida do ângulo total é a "}</MathText>
          <b>
            <MathText>{"soma"}</MathText>
          </b>
          <MathText>{": se \\(A\\hat{O}B = 35^\\circ\\) e \\(B\\hat{O}C = 40^\\circ\\), então \\(A\\hat{O}C = 35^\\circ + 40^\\circ = 75^\\circ\\). Exatamente como somar segmentos \\(AB + BC = AC\\) na lição 1."}</MathText>
        </p>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 3 — Uma porta abre 1/6 de volta e depois mais 1/12"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(\\tfrac{1}{6}\\) de volta: \\(360 \\div 6 = 60^\\circ\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(\\tfrac{1}{12}\\) de volta: \\(360 \\div 12 = 30^\\circ\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Total aberto: \\(60^\\circ + 30^\\circ = 90^\\circ\\) → a porta ficou em ângulo "}</MathText>
              <b>
                <MathText>{"reto"}</MathText>
              </b>
              <MathText>{"."}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"3.8 Resumo"}</MathText>
        </h3>
        <ul>
          <li>
            <MathText>{"Ângulo = abertura entre duas semirretas de mesma origem (o "}</MathText>
            <b>
              <MathText>{"vértice"}</MathText>
            </b>
            <MathText>{"). Notação: \\(A\\hat{O}B\\)."}</MathText>
          </li>
          <li>
            <MathText>{"Unidade: "}</MathText>
            <b>
              <MathText>{"grau"}</MathText>
            </b>
            <MathText>{". Volta inteira = "}</MathText>
            <b>
              <MathText>{"360°"}</MathText>
            </b>
            <MathText>{"; meia volta = "}</MathText>
            <b>
              <MathText>{"180°"}</MathText>
            </b>
            <MathText>{"; um quarto = "}</MathText>
            <b>
              <MathText>{"90°"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </li>
          <li>
            <MathText>{"Transferidor: centro no vértice, 0° sobre um dos lados, leia na escala certa."}</MathText>
          </li>
          <li>
            <MathText>{"Tipos: nulo (0°), agudo, reto (90°), obtuso, raso (180°), côncavo, giro (360°)."}</MathText>
          </li>
          <li>
            <MathText>{"Ângulos adjacentes se somam."}</MathText>
          </li>
        </ul>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-blue-500 bg-blue-50">
          <b>
            <MathText>{"Quer treinar?"}</MathText>
          </b>
          <MathText>{"Abra o "}</MathText>
          <b>
            <MathText>{"Laboratório → Experimento 1 (Transferidor virtual)"}</MathText>
          </b>
          <MathText>{" e mova o controle: o programa mostra o tipo e as medidas relacionadas."}</MathText>
        </div>
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-gotab={"laboratorio"}>
          <MathText>{"🔬 Abrir o laboratório"}</MathText>
        </button>
        <GeometryQuickCheck index={6} />
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto={"4"}>
          <MathText>{"✏️ Fazer os exercícios do nível 4"}</MathText>
        </button>
      </article>
      <article className="geometry-basica-lesson bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_.lesson-tag]:text-[.7rem] [&_.lesson-tag]:font-extrabold [&_.lesson-tag]:tracking-[.12em] [&_.lesson-tag]:uppercase [&_.lesson-tag]:text-indigo-600 [&_h2]:text-[1.6rem] [&_h2]:font-black [&_h2]:mt-1 [&_h2]:text-slate-800 [&_h3]:font-extrabold [&_h3]:text-lg [&_h3]:mt-7 [&_h3]:text-indigo-800 [&_h4]:mt-4 [&_h4]:font-bold [&_p]:leading-[1.85] [&_p]:text-slate-600 [&_p]:mt-3 [&_ul]:pl-6 [&_ul]:text-slate-600 [&_ul]:leading-[1.85] [&_ul]:mt-2 [&_ul]:list-disc [&_ol]:pl-6 [&_ol]:text-slate-600 [&_ol]:leading-[1.85] [&_ol]:mt-2 [&_ol]:list-decimal [&_li]:mt-1 [&_b]:text-slate-800 [&_strong]:text-slate-800" id={"l4"}>
        <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 4"}</MathText>
        </div>
        <h2>
          <MathText>{"Relações entre ângulos"}</MathText>
        </h2>
        <p>
          <MathText>{"Na lição anterior você aprendeu a medir um ângulo. Agora vem o que torna a geometria poderosa: "}</MathText>
          <b>
            <MathText>{"descobrir ângulos sem medir"}</MathText>
          </b>
          <MathText>{", só usando relações entre eles. Se você sabe que dois ângulos formam um canto de folha (90°) e um deles vale 35°, o outro "}</MathText>
          <b>
            <MathText>{"tem"}</MathText>
          </b>
          <MathText>{" que valer 55°, sem precisar de transferidor. E quando a medida é desconhecida, a "}</MathText>
          <b>
            <MathText>{"equação"}</MathText>
          </b>
          <MathText>{" (do curso de álgebra) resolve."}</MathText>
        </p>
        <h3>
          <MathText>{"4.1 Ângulos complementares"}</MathText>
        </h3>
        <p>
          <MathText>{"Dois ângulos são "}</MathText>
          <b>
            <MathText>{"complementares"}</MathText>
          </b>
          <MathText>{" quando a soma deles é "}</MathText>
          <b>
            <MathText>{"90°"}</MathText>
          </b>
          <MathText>{". Cada um é o "}</MathText>
          <b>
            <MathText>{"complemento"}</MathText>
          </b>
          <MathText>{" do outro."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 165"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Dois ângulos que somam 90 graus e dois ângulos que somam 180 graus"}>
            <line x1={"40"} y1={"145"} x2={"170"} y2={"145"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"40"} y1={"145"} x2={"40"} y2={"25"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"40"} y1={"145"} x2={"102.5"} y2={"36.7"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <polyline points={"52,145 52,133 40,133"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <path d={"M88,145 A48 48 0 0 0 64,103.4"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <path d={"M64,103.4 A48 48 0 0 0 40,97"} stroke={"#f59e0b"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <text x={"103.6"} y={"115.2"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"60°"}</MathText>
            </text>
            <text x={"53"} y={"74.6"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"30°"}</MathText>
            </text>
            <line x1={"200"} y1={"145"} x2={"400"} y2={"145"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"300"} y1={"145"} x2={"240"} y2={"41.1"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <path d={"M344,145 A44 44 0 0 0 278,106.9"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <path d={"M278,106.9 A44 44 0 0 0 256,145"} stroke={"#f59e0b"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <text x={"340.2"} y={"87.7"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"120°"}</MathText>
            </text>
            <text x={"234.2"} y={"116.1"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"60°"}</MathText>
            </text>
            <circle cx={"40"} cy={"145"} r={"3.5"} fill={"#1e293b"}>
            </circle>
            <circle cx={"300"} cy={"145"} r={"3.5"} fill={"#1e293b"}>
            </circle>
            <text x={"100"} y={"14"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"Complementares: 60° + 30° = 90°"}</MathText>
            </text>
            <text x={"305"} y={"14"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"Suplementares: 120° + 60° = 180°"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Complementares formam um ângulo reto; suplementares formam um ângulo raso"}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ \\text{complemento de } \\alpha = 90^\\circ - \\alpha \\]"}</MathText>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 1 — Qual é o complemento de 35°?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Complementares somam 90°."}</MathText>
            </div>
            <div>
              <MathText>{"\\(90^\\circ - 35^\\circ = 55^\\circ\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Conferência: \\(35^\\circ + 55^\\circ = 90^\\circ\\) ✓"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"4.2 Ângulos suplementares"}</MathText>
        </h3>
        <p>
          <MathText>{"Dois ângulos são "}</MathText>
          <b>
            <MathText>{"suplementares"}</MathText>
          </b>
          <MathText>{" quando a soma deles é "}</MathText>
          <b>
            <MathText>{"180°"}</MathText>
          </b>
          <MathText>{" (formam meia volta, ou seja, uma reta)."}</MathText>
        </p>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ \\text{suplemento de } \\alpha = 180^\\circ - \\alpha \\]"}</MathText>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 2 — Qual é o suplemento de 130°?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Suplementares somam 180°."}</MathText>
            </div>
            <div>
              <MathText>{"\\(180^\\circ - 130^\\circ = 50^\\circ\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Conferência: \\(130^\\circ + 50^\\circ = 180^\\circ\\) ✓"}</MathText>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-amber-500 bg-amber-50">
          <b>
            <MathText>{"Como não confundir os dois"}</MathText>
          </b>
          <b>
            <MathText>{"C"}</MathText>
          </b>
          <MathText>{" vem antes de "}</MathText>
          <b>
            <MathText>{"S"}</MathText>
          </b>
          <MathText>{" no alfabeto, e "}</MathText>
          <b>
            <MathText>{"90"}</MathText>
          </b>
          <MathText>{" vem antes de "}</MathText>
          <b>
            <MathText>{"180"}</MathText>
          </b>
          <MathText>{": "}</MathText>
          <b>
            <MathText>{"C"}</MathText>
          </b>
          <MathText>{"omplementares = "}</MathText>
          <b>
            <MathText>{"90°"}</MathText>
          </b>
          <MathText>{"; "}</MathText>
          <b>
            <MathText>{"S"}</MathText>
          </b>
          <MathText>{"uplementares = "}</MathText>
          <b>
            <MathText>{"180°"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Cuidado"}</MathText>
          </b>
          <MathText>{"“Complementar” e “suplementar” falam de "}</MathText>
          <b>
            <MathText>{"dois ângulos"}</MathText>
          </b>
          <MathText>{" somando um valor. Um único ângulo não é complementar “sozinho”: ele é o complemento "}</MathText>
          <u>
            <MathText>{"de outro"}</MathText>
          </u>
          <MathText>{"."}</MathText>
        </div>
        <GeometryQuickCheck index={7} />
        <h3>
          <MathText>{"4.3 Bissetriz"}</MathText>
        </h3>
        <p>
          <MathText>{"A "}</MathText>
          <b>
            <MathText>{"bissetriz"}</MathText>
          </b>
          <MathText>{" de um ângulo é a semirreta que sai do vértice e o divide em "}</MathText>
          <b>
            <MathText>{"dois ângulos iguais"}</MathText>
          </b>
          <MathText>{". Então cada parte vale a "}</MathText>
          <b>
            <MathText>{"metade"}</MathText>
          </b>
          <MathText>{" do ângulo."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 170"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Bissetriz OM dividindo o ângulo AOB de 80 graus em dois de 40 graus"}>
            <line x1={"90"} y1={"140"} x2={"250"} y2={"140"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"90"} y1={"140"} x2={"112.6"} y2={"12"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"90"} y1={"140"} x2={"201.1"} y2={"46.8"} stroke={"#10b981"} strokeWidth={"3"} strokeDasharray={"6 4"} strokeLinecap={"round"}>
            </line>
            <path d={"M138,140 A48 48 0 0 0 126.8,109.1"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <path d={"M126.8,109.1 A48 48 0 0 0 98.3,92.7"} stroke={"#f59e0b"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <line x1={"131"} y1={"127.1"} x2={"140.5"} y2={"124.1"} stroke={"#1e293b"} strokeWidth={"2"}>
            </line>
            <line x1={"129.7"} y1={"123.5"} x2={"139"} y2={"119.7"} stroke={"#1e293b"} strokeWidth={"2"}>
            </line>
            <line x1={"113.1"} y1={"103.7"} x2={"118.5"} y2={"95.3"} stroke={"#1e293b"} strokeWidth={"2"}>
            </line>
            <line x1={"109.9"} y1={"101.9"} x2={"114.5"} y2={"93"} stroke={"#1e293b"} strokeWidth={"2"}>
            </line>
            <circle cx={"90"} cy={"140"} r={"4"} fill={"#1e293b"}>
            </circle>
            <text x={"159.5"} y={"118.7"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"40°"}</MathText>
            </text>
            <text x={"120.7"} y={"78.7"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"40°"}</MathText>
            </text>
            <text x={"88"} y={"158"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"O"}</MathText>
            </text>
            <text x={"262"} y={"146"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"A"}</MathText>
            </text>
            <text x={"107"} y={"-5.8"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"B"}</MathText>
            </text>
            <text x={"217"} y={"36.4"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"M"}</MathText>
            </text>
            <text x={"280"} y={"40"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <MathText>{"OM é a bissetriz de AÔB:"}</MathText>
            </text>
            <text x={"280"} y={"58"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <MathText>{"divide o ângulo em dois"}</MathText>
            </text>
            <text x={"280"} y={"76"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <MathText>{"ângulos iguais (marcas iguais)."}</MathText>
            </text>
            <text x={"280"} y={"104"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <MathText>{"AÔB = 80°  →  AÔM = 40°"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Bissetriz de um ângulo"}</MathText>
          </div>
        </div>
        <p>
          <MathText>{"Exemplo rápido: se um ângulo mede \\(130^\\circ\\), a bissetriz o divide em dois de \\(130^\\circ \\div 2 = 65^\\circ\\). Reciprocamente, se cada metade mede \\(65^\\circ\\), o ângulo inteiro mede \\(2 \\cdot 65^\\circ = 130^\\circ\\)."}</MathText>
        </p>
        <h3>
          <MathText>{"4.4 Ângulos opostos pelo vértice"}</MathText>
        </h3>
        <p>
          <MathText>{"Quando duas retas se cruzam, formam um “X”. Os ângulos que ficam "}</MathText>
          <b>
            <MathText>{"um de frente para o outro"}</MathText>
          </b>
          <MathText>{" (opostos pelo vértice) são "}</MathText>
          <b>
            <MathText>{"iguais"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 180"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Duas retas que se cruzam formam dois pares de ângulos opostos pelo vértice"}>
            <line x1={"299.3"} y1={"55.5"} x2={"120.7"} y2={"120.5"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"162.5"} y1={"5.7"} x2={"257.5"} y2={"170.3"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <path d={"M238.2,77.7 A30 30 0 0 0 195,62"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <text x={"227.8"} y={"44.1"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"a"}</MathText>
            </text>
            <path d={"M195,62 A30 30 0 0 0 181.8,98.3"} stroke={"#f59e0b"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <text x={"161.1"} y={"75.2"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"b"}</MathText>
            </text>
            <path d={"M181.8,98.3 A30 30 0 0 0 225,114"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <text x={"192.2"} y={"141.9"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"a"}</MathText>
            </text>
            <path d={"M225,114 A30 30 0 0 0 238.2,77.7"} stroke={"#f59e0b"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <text x={"258.9"} y={"110.8"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"b"}</MathText>
            </text>
            <circle cx={"210"} cy={"88"} r={"4"} fill={"#1e293b"}>
            </circle>
            <text x={"210"} y={"14"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"O"}</MathText>
            </text>
            <text x={"8"} y={"28"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <MathText>{"Os ângulos “a” são opostos pelo vértice: iguais."}</MathText>
            </text>
            <text x={"8"} y={"172"} textAnchor={"start"} fontSize={"12.5"} fontWeight={"600"} fill={"#334155"}>
              <MathText>{"Os ângulos “b” também são opostos pelo vértice: iguais."}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Ângulos opostos pelo vértice (o “X” da figura)"}</MathText>
          </div>
        </div>
        <p>
          <b>
            <MathText>{"Por que são iguais?"}</MathText>
          </b>
          <MathText>{" O ângulo \\(a\\) e o ângulo \\(b\\) vizinhos formam uma reta: \\(a + b = 180^\\circ\\). O outro \\(a\\) (do lado oposto) também fecha uma reta com o mesmo \\(b\\): \\(a + b = 180^\\circ\\). Dois ângulos que somados com o mesmo \\(b\\) dão 180° têm que ser iguais."}</MathText>
        </p>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 3 — Duas retas se cruzam e um ângulo mede 40°. Quanto medem os outros três?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"O oposto pelo vértice também mede "}</MathText>
              <b>
                <MathText>{"40°"}</MathText>
              </b>
              <MathText>{"."}</MathText>
            </div>
            <div>
              <MathText>{"Cada vizinho é suplementar de 40°: \\(180^\\circ - 40^\\circ = 140^\\circ\\)."}</MathText>
            </div>
            <div>
              <MathText>{"O oposto desse vizinho também mede "}</MathText>
              <b>
                <MathText>{"140°"}</MathText>
              </b>
              <MathText>{"."}</MathText>
            </div>
            <div>
              <MathText>{"Os quatro ângulos: \\(40^\\circ,\\ 140^\\circ,\\ 40^\\circ,\\ 140^\\circ\\). Soma: \\(2 \\cdot 40 + 2 \\cdot 140 = 360\\) ✓ (uma volta!)"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"4.5 Paralelas cortadas por uma transversal"}</MathText>
        </h3>
        <p>
          <MathText>{"Imagine duas retas "}</MathText>
          <b>
            <MathText>{"paralelas"}</MathText>
          </b>
          <MathText>{", \\(r\\) e \\(s\\), e uma terceira reta \\(t\\), a "}</MathText>
          <b>
            <MathText>{"transversal"}</MathText>
          </b>
          <MathText>{", que as corta. Surgem "}</MathText>
          <b>
            <MathText>{"oito ângulos"}</MathText>
          </b>
          <MathText>{", e todos têm relação entre si."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 175"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Duas retas paralelas r e s cortadas por uma transversal t, com oito ângulos numerados"}>
            <line x1={"20"} y1={"55"} x2={"400"} y2={"55"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"20"} y1={"135"} x2={"400"} y2={"135"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <text x={"392"} y={"47"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"r"}</MathText>
            </text>
            <text x={"392"} y={"127"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"s"}</MathText>
            </text>
            <line x1={"171.3"} y1={"173.97114317029974"} x2={"262.5"} y2={"16.02885682970026"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <text x={"296"} y={"22"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"} >
              <MathText>{"t"}</MathText>
            </text>
            <circle cx={"240"} cy={"55"} r={"4"} fill={"#1e293b"}>
            </circle>
            <circle cx={"193.8"} cy={"135"} r={"4"} fill={"#1e293b"}>
            </circle>
            <text x={"260.8"} y={"48"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"1"}</MathText>
            </text>
            <text x={"228"} y={"39.2"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"2"}</MathText>
            </text>
            <text x={"219.2"} y={"72"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"3"}</MathText>
            </text>
            <text x={"252"} y={"80.8"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"4"}</MathText>
            </text>
            <text x={"214.6"} y={"128"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"5"}</MathText>
            </text>
            <text x={"181.8"} y={"119.2"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"6"}</MathText>
            </text>
            <text x={"173"} y={"152"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"7"}</MathText>
            </text>
            <text x={"205.8"} y={"160.8"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"8"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Oito ângulos numerados de 1 a 8 (o ângulo 1 mede 60°)"}</MathText>
          </div>
        </div>
        <p>
          <MathText>{"Na figura, o ângulo \\(1\\) mede \\(60^\\circ\\). Veja o que acontece com os outros:"}</MathText>
        </p>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Nome do par"}</MathText>
              </th>
              <th>
                <MathText>{"Exemplos na figura"}</MathText>
              </th>
              <th>
                <MathText>{"Relação"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>
                  <MathText>{"Correspondentes"}</MathText>
                </b>
                <MathText>{" (mesmo “canto” em cada paralela)"}</MathText>
              </td>
              <td>
                <MathText>{"1 e 5 · 2 e 6 · 3 e 7 · 4 e 8"}</MathText>
              </td>
              <td>
                <b>
                  <MathText>{"iguais"}</MathText>
                </b>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Alternos internos"}</MathText>
                </b>
                <MathText>{" (entre as paralelas, lados opostos da transversal)"}</MathText>
              </td>
              <td>
                <MathText>{"3 e 5 · 4 e 6"}</MathText>
              </td>
              <td>
                <b>
                  <MathText>{"iguais"}</MathText>
                </b>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Alternos externos"}</MathText>
                </b>
                <MathText>{" (fora das paralelas, lados opostos)"}</MathText>
              </td>
              <td>
                <MathText>{"1 e 7 · 2 e 8"}</MathText>
              </td>
              <td>
                <b>
                  <MathText>{"iguais"}</MathText>
                </b>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Colaterais internos"}</MathText>
                </b>
                <MathText>{" (entre as paralelas, mesmo lado)"}</MathText>
              </td>
              <td>
                <MathText>{"3 e 6 · 4 e 5"}</MathText>
              </td>
              <td>
                <MathText>{"somam "}</MathText>
                <b>
                  <MathText>{"180°"}</MathText>
                </b>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Colaterais externos"}</MathText>
                </b>
                <MathText>{" (fora das paralelas, mesmo lado)"}</MathText>
              </td>
              <td>
                <MathText>{"1 e 8 · 2 e 7"}</MathText>
              </td>
              <td>
                <MathText>{"somam "}</MathText>
                <b>
                  <MathText>{"180°"}</MathText>
                </b>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-emerald-500 bg-emerald-50">
          <b>
            <MathText>{"O atalho que resolve quase tudo"}</MathText>
          </b>
          <MathText>{"Só existem "}</MathText>
          <b>
            <MathText>{"dois valores"}</MathText>
          </b>
          <MathText>{" entre os oito ângulos: o agudo (aqui, \\(60^\\circ\\): ângulos 1, 3, 5, 7) e o obtuso (aqui, \\(120^\\circ\\): ângulos 2, 4, 6, 8). Todos os agudos são iguais, todos os obtusos são iguais, e "}</MathText>
          <b>
            <MathText>{"agudo + obtuso = 180°"}</MathText>
          </b>
          <MathText>{". (Se a transversal for perpendicular, os oito são retos.)"}</MathText>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Só vale com paralelas"}</MathText>
          </b>
          <MathText>{"Essas igualdades só funcionam quando \\(r \\parallel s\\). Se as retas não são paralelas, os ângulos correspondentes "}</MathText>
          <u>
            <MathText>{"não"}</MathText>
          </u>
          <MathText>{" são iguais."}</MathText>
        </div>
        <GeometryQuickCheck index={8} />
        <h3>
          <MathText>{"4.6 Descobrindo ângulos com equações"}</MathText>
        </h3>
        <p>
          <MathText>{"Muitas vezes o enunciado dá os ângulos com letras: por exemplo, \\(x\\) e \\(2x\\). Aí o caminho é sempre o mesmo, e você já conhece a ferramenta (a igualdade e as operações inversas, do curso de álgebra):"}</MathText>
        </p>
        <ol>
          <li>
            <b>
              <MathText>{"Desenhe"}</MathText>
            </b>
            <MathText>{" e descubra a "}</MathText>
            <b>
              <MathText>{"relação"}</MathText>
            </b>
            <MathText>{": somam 90° ? somam 180° ? são iguais?"}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Monte a equação"}</MathText>
            </b>
            <MathText>{" com essa relação."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Resolva"}</MathText>
            </b>
            <MathText>{" desfazendo as operações (inversas) nos dois lados."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Volte à pergunta"}</MathText>
            </b>
            <MathText>{": o \\(x\\) quase nunca é a resposta final. Calcule cada ângulo e "}</MathText>
            <b>
              <MathText>{"confira"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </li>
        </ol>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 165"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Ângulos desconhecidos: x e 2x formam um ângulo reto; 3x e x+20 formam um ângulo raso"}>
            <line x1={"40"} y1={"145"} x2={"170"} y2={"145"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"40"} y1={"145"} x2={"40"} y2={"25"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"40"} y1={"145"} x2={"148.3"} y2={"82.5"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <polyline points={"52,145 52,133 40,133"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <path d={"M92,145 A52 52 0 0 0 85,119"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <path d={"M85,119 A52 52 0 0 0 40,93"} stroke={"#f59e0b"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <text x={"118.3"} y={"132.8"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"x"}</MathText>
            </text>
            <text x={"76.6"} y={"80.1"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"2x"}</MathText>
            </text>
            <line x1={"200"} y1={"145"} x2={"400"} y2={"145"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"300"} y1={"145"} x2={"240"} y2={"41.1"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <path d={"M344,145 A44 44 0 0 0 278,106.9"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <path d={"M278,106.9 A44 44 0 0 0 256,145"} stroke={"#f59e0b"} strokeWidth={"3"} strokeLinecap={"round"} fill={"none"}>
            </path>
            <text x={"341.3"} y={"86"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"3x"}</MathText>
            </text>
            <text x={"217.1"} y={"112.4"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}  >
              <MathText>{"x + 20"}</MathText>
            </text>
            <circle cx={"40"} cy={"145"} r={"3.5"} fill={"#1e293b"}>
            </circle>
            <circle cx={"300"} cy={"145"} r={"3.5"} fill={"#1e293b"}>
            </circle>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Os valores de x são descobertos com equações"}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 4 — Os ângulos \\(x\\) e \\(2x\\) formam um ângulo reto. Quanto mede cada um?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Relação: formam um reto → somam 90°."}</MathText>
            </div>
            <div>
              <MathText>{"Equação: \\(x + 2x = 90\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Junte: \\(3x = 90\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Divida os dois lados por 3: \\(x = 90 \\div 3 = 30\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Os ângulos: \\(x = 30^\\circ\\) e \\(2x = 60^\\circ\\)."}</MathText>
            </div>
            <div>
              <MathText>{"Conferência: \\(30^\\circ + 60^\\circ = 90^\\circ\\) ✓"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 5 — Os ângulos \\(3x\\) e \\(x + 20^\\circ\\) são suplementares. Quanto mede cada um?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Relação: suplementares → somam 180°."}</MathText>
            </div>
            <div>
              <MathText>{"Equação: \\(3x + (x + 20) = 180\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Junte: \\(4x + 20 = 180\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Tire 20 dos dois lados: \\(4x = 160\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Divida por 4: \\(x = 40\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Os ângulos: \\(3x = 120^\\circ\\) e \\(x + 20 = 60^\\circ\\)."}</MathText>
            </div>
            <div>
              <MathText>{"Conferência: \\(120^\\circ + 60^\\circ = 180^\\circ\\) ✓"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 6 — Opostos pelo vértice: \\(4x - 10\\) e \\(2x + 30\\) (letra dos dois lados)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Relação: opostos pelo vértice → "}</MathText>
              <b>
                <MathText>{"iguais"}</MathText>
              </b>
              <MathText>{"."}</MathText>
            </div>
            <div>
              <MathText>{"Equação: \\(4x - 10 = 2x + 30\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Tire \\(2x\\) dos "}</MathText>
              <u>
                <MathText>{"dois"}</MathText>
              </u>
              <MathText>{" lados (a balança continua em equilíbrio): \\(2x - 10 = 30\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Some 10 aos dois lados: \\(2x = 40\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Divida por 2: \\(x = 20\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Os ângulos: \\(4 \\cdot 20 - 10 = 70^\\circ\\) e \\(2 \\cdot 20 + 30 = 70^\\circ\\) ✓"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 7 — Problema de interpretação: “Um ângulo mede o dobro do seu complemento”"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Chame o ângulo de \\(x\\). O complemento dele é \\(90 - x\\)."}</MathText>
            </div>
            <div>
              <MathText>{"“Mede o dobro do complemento”: \\(x = 2 \\cdot (90 - x)\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Distribua o 2: \\(x = 180 - 2x\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Some \\(2x\\) aos dois lados: \\(3x = 180\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Divida por 3: \\(x = 60\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Conferência: complemento de 60° é 30°, e 60 é o dobro de 30 ✓"}</MathText>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Erros comuns"}</MathText>
          </b>
          <ul>
            <li>
              <MathText>{"Responder só “\\(x = 30\\)” e esquecer de calcular os ângulos que o problema pediu."}</MathText>
            </li>
            <li>
              <MathText>{"Usar 180 quando a relação é de 90 (complementares) ou vice-versa."}</MathText>
            </li>
            <li>
              <MathText>{"Esquecer o parêntese: o complemento de \\(x\\) é \\(90 - x\\), e “o dobro” dele é \\(2(90 - x)\\), não \\(2 \\cdot 90 - x\\)."}</MathText>
            </li>
            <li>
              <MathText>{"Usar “alternos internos iguais” em retas que "}</MathText>
              <b>
                <MathText>{"não"}</MathText>
              </b>
              <MathText>{" são paralelas."}</MathText>
            </li>
          </ul>
        </div>
        <GeometryQuickCheck index={9} />
        <h3>
          <MathText>{"4.7 Resumo"}</MathText>
        </h3>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Relação"}</MathText>
              </th>
              <th>
                <MathText>{"Valor"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"Complementares"}</MathText>
              </td>
              <td>
                <MathText>{"somam \\(90^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Suplementares"}</MathText>
              </td>
              <td>
                <MathText>{"somam \\(180^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Ângulos em volta de um ponto"}</MathText>
              </td>
              <td>
                <MathText>{"somam \\(360^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Opostos pelo vértice"}</MathText>
              </td>
              <td>
                <MathText>{"iguais"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Bissetriz"}</MathText>
              </td>
              <td>
                <MathText>{"divide o ângulo na metade"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Paralelas: correspondentes, alternos internos e alternos externos"}</MathText>
              </td>
              <td>
                <MathText>{"iguais"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Paralelas: colaterais internos e colaterais externos"}</MathText>
              </td>
              <td>
                <MathText>{"somam \\(180^\\circ\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto={"5"}>
          <MathText>{"✏️ Fazer os exercícios do nível 5"}</MathText>
        </button>
      </article>
      <article className="geometry-basica-lesson bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_.lesson-tag]:text-[.7rem] [&_.lesson-tag]:font-extrabold [&_.lesson-tag]:tracking-[.12em] [&_.lesson-tag]:uppercase [&_.lesson-tag]:text-indigo-600 [&_h2]:text-[1.6rem] [&_h2]:font-black [&_h2]:mt-1 [&_h2]:text-slate-800 [&_h3]:font-extrabold [&_h3]:text-lg [&_h3]:mt-7 [&_h3]:text-indigo-800 [&_h4]:mt-4 [&_h4]:font-bold [&_p]:leading-[1.85] [&_p]:text-slate-600 [&_p]:mt-3 [&_ul]:pl-6 [&_ul]:text-slate-600 [&_ul]:leading-[1.85] [&_ul]:mt-2 [&_ul]:list-disc [&_ol]:pl-6 [&_ol]:text-slate-600 [&_ol]:leading-[1.85] [&_ol]:mt-2 [&_ol]:list-decimal [&_li]:mt-1 [&_b]:text-slate-800 [&_strong]:text-slate-800" id={"l5"}>
        <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 5"}</MathText>
        </div>
        <h2>
          <MathText>{"Polígonos e quadriláteros"}</MathText>
        </h2>
        <p>
          <MathText>{"Olhe ao redor: a tela do celular, a porta, a placa de trânsito, os gomos da bola de futebol, o favo de mel das abelhas. Quase toda figura feita só de "}</MathText>
          <b>
            <MathText>{"linhas retas"}</MathText>
          </b>
          <MathText>{" que fecham uma região é um "}</MathText>
          <b>
            <MathText>{"polígono"}</MathText>
          </b>
          <MathText>{". Nesta lição você vai aprender a reconhecê-los, dar nome a eles, calcular a soma dos seus ângulos e conhecer a família dos "}</MathText>
          <b>
            <MathText>{"quadriláteros"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <h3>
          <MathText>{"5.1 O que é um polígono?"}</MathText>
        </h3>
        <p>
          <MathText>{"Um polígono é uma figura plana que obedece a "}</MathText>
          <b>
            <MathText>{"três regras"}</MathText>
          </b>
          <MathText>{" ao mesmo tempo:"}</MathText>
        </p>
        <ol>
          <li>
            <MathText>{"é feito só de "}</MathText>
            <b>
              <MathText>{"segmentos de reta"}</MathText>
            </b>
            <MathText>{" (nada de linhas curvas);"}</MathText>
          </li>
          <li>
            <MathText>{"a linha é "}</MathText>
            <b>
              <MathText>{"fechada"}</MathText>
            </b>
            <MathText>{": ela volta ao ponto de onde saiu;"}</MathText>
          </li>
          <li>
            <MathText>{"os segmentos "}</MathText>
            <b>
              <MathText>{"não se cruzam"}</MathText>
            </b>
            <MathText>{" no meio do caminho."}</MathText>
          </li>
        </ol>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 135"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Um polígono e dois exemplos que não são polígonos"}>
            <polygon points={"25,95 30,40 75,20 115,55 95,100"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"70"} y={"122"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#047857"}>
              <MathText>{"✓ é polígono"}</MathText>
            </text>
            <path d={"M170,95 L170,35 Q215,5 255,35 L255,95 Z"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"}>
            </path>
            <text x={"212"} y={"122"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#b91c1c"}>
              <MathText>{"✗ lado curvo"}</MathText>
            </text>
            <polyline points={"300,95 300,35 385,35 385,95"} fill={"none"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polyline>
            <text x={"342"} y={"122"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#b91c1c"}>
              <MathText>{"✗ não é fechado"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Só a primeira figura é um polígono."}</MathText>
          </div>
        </div>
        <p>
          <MathText>{"O nome vem do grego: "}</MathText>
          <i>
            <MathText>{"poli"}</MathText>
          </i>
          <MathText>{" = “muitos” e "}</MathText>
          <i>
            <MathText>{"gonos"}</MathText>
          </i>
          <MathText>{" = “ângulos”. Polígono quer dizer “muitos ângulos”."}</MathText>
        </p>
        <h3>
          <MathText>{"5.2 Os elementos de um polígono"}</MathText>
        </h3>
        <div className="grid gap-3 mt-4 md:grid-cols-3 [&>div]:rounded-2xl [&>div]:p-4 [&>div]:text-sm [&>div]:leading-7 [&>div]:text-slate-700">
          <div className="bg-indigo-50">
            <b>
              <MathText>{"Lados"}</MathText>
            </b>
            <br />
            <MathText>{"Os segmentos que formam o contorno. Um polígono com \\(n\\) lados tem também \\(n\\) vértices e \\(n\\) ângulos."}</MathText>
          </div>
          <div className="bg-amber-50">
            <b>
              <MathText>{"Vértices"}</MathText>
            </b>
            <br />
            <MathText>{"Os “cantos”: pontos onde dois lados se encontram. Costumamos nomeá-los com letras maiúsculas: A, B, C…"}</MathText>
          </div>
          <div className="bg-emerald-50">
            <b>
              <MathText>{"Ângulos internos"}</MathText>
            </b>
            <br />
            <MathText>{"As aberturas que ficam "}</MathText>
            <u>
              <MathText>{"dentro"}</MathText>
            </u>
            <MathText>{" da figura, em cada vértice."}</MathText>
          </div>
        </div>
        <p className="mt-4">
          <MathText>{"Existe ainda a "}</MathText>
          <b>
            <MathText>{"diagonal"}</MathText>
          </b>
          <MathText>{": é um segmento que liga "}</MathText>
          <b>
            <MathText>{"dois vértices que não são vizinhos"}</MathText>
          </b>
          <MathText>{". Em um triângulo não há diagonais (todos os vértices são vizinhos). No pentágono da figura abaixo, a diagonal \\(\\overline{AC}\\) liga A a C, pulando o B."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 170"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Pentágono ABCDE com suas cinco diagonais"}>
            <polygon points={"130,23 71,65.8 93.6,135.2 166.4,135.2 189,65.8"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"130"} y1={"23"} x2={"93.6"} y2={"135.2"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <line x1={"130"} y1={"23"} x2={"166.4"} y2={"135.2"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <line x1={"71"} y1={"65.8"} x2={"166.4"} y2={"135.2"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <line x1={"71"} y1={"65.8"} x2={"189"} y2={"65.8"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <line x1={"93.6"} y1={"135.2"} x2={"189"} y2={"65.8"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <text x={"130"} y={"15"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"A"}</MathText>
            </text>
            <text x={"61"} y={"69.8"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"B"}</MathText>
            </text>
            <text x={"85.6"} y={"151.2"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"C"}</MathText>
            </text>
            <text x={"174.4"} y={"151.2"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"D"}</MathText>
            </text>
            <text x={"199"} y={"69.8"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"E"}</MathText>
            </text>
            <text x={"290"} y={"60"} textAnchor={"start"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"5 lados"}</MathText>
            </text>
            <text x={"290"} y={"82"} textAnchor={"start"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"5 vértices"}</MathText>
            </text>
            <text x={"290"} y={"104"} textAnchor={"start"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"5 diagonais (rosa)"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Diagonal: segmento que liga dois vértices que não são vizinhos."}</MathText>
          </div>
        </div>
        <h3>
          <MathText>{"5.3 Dando nome aos polígonos"}</MathText>
        </h3>
        <p>
          <MathText>{"O nome depende do "}</MathText>
          <b>
            <MathText>{"número de lados"}</MathText>
          </b>
          <MathText>{". A terminação “-gono” significa “ângulos”, e o começo diz quantos:"}</MathText>
        </p>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Lados"}</MathText>
              </th>
              <th>
                <MathText>{"Nome"}</MathText>
              </th>
              <th>
                <MathText>{"Lados"}</MathText>
              </th>
              <th>
                <MathText>{"Nome"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"3"}</MathText>
              </td>
              <td>
                <MathText>{"triângulo"}</MathText>
              </td>
              <td>
                <MathText>{"8"}</MathText>
              </td>
              <td>
                <MathText>{"octógono"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"4"}</MathText>
              </td>
              <td>
                <MathText>{"quadrilátero"}</MathText>
              </td>
              <td>
                <MathText>{"9"}</MathText>
              </td>
              <td>
                <MathText>{"eneágono"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"5"}</MathText>
              </td>
              <td>
                <MathText>{"pentágono"}</MathText>
              </td>
              <td>
                <MathText>{"10"}</MathText>
              </td>
              <td>
                <MathText>{"decágono"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"6"}</MathText>
              </td>
              <td>
                <MathText>{"hexágono"}</MathText>
              </td>
              <td>
                <MathText>{"12"}</MathText>
              </td>
              <td>
                <MathText>{"dodecágono"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"7"}</MathText>
              </td>
              <td>
                <MathText>{"heptágono"}</MathText>
              </td>
              <td>
                <MathText>{"20"}</MathText>
              </td>
              <td>
                <MathText>{"icoságono"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>
          <MathText>{"5.3.1 Regular, convexo e côncavo"}</MathText>
        </h3>
        <p>
          <MathText>{"Um polígono é "}</MathText>
          <b>
            <MathText>{"regular"}</MathText>
          </b>
          <MathText>{" quando tem "}</MathText>
          <b>
            <MathText>{"todos os lados iguais e todos os ângulos iguais"}</MathText>
          </b>
          <MathText>{". O quadrado é o regular de 4 lados; o triângulo equilátero é o regular de 3 lados."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 430 135"} className="w-[430px] max-w-full h-auto" role={"img"} aria-label={"Polígonos regulares com 3, 4, 5, 6 e 8 lados"}>
            <polygon points={"45,16 15.6,67 74.4,67"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"45"} y={"108"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"triângulo"}</MathText>
            </text>
            <text x={"45"} y={"124"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3 lados"}</MathText>
            </text>
            <polygon points={"154,26 106,26 106,74 154,74"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"130"} y={"108"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"quadrado"}</MathText>
            </text>
            <text x={"130"} y={"124"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4 lados"}</MathText>
            </text>
            <polygon points={"215,16 182.7,39.5 195,77.5 235,77.5 247.3,39.5"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"215"} y={"108"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"pentágono"}</MathText>
            </text>
            <text x={"215"} y={"124"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5 lados"}</MathText>
            </text>
            <polygon points={"300,16 270.6,33 270.6,67 300,84 329.4,67 329.4,33"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"300"} y={"108"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"hexágono"}</MathText>
            </text>
            <text x={"300"} y={"124"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"6 lados"}</MathText>
            </text>
            <polygon points={"385,16 361,26 351,50 361,74 385,84 409,74 419,50 409,26"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"385"} y={"108"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"octógono"}</MathText>
            </text>
            <text x={"385"} y={"124"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"8 lados"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Polígonos regulares: lados e ângulos todos iguais."}</MathText>
          </div>
        </div>
        <p>
          <MathText>{"Outra classificação: no polígono "}</MathText>
          <b>
            <MathText>{"convexo"}</MathText>
          </b>
          <MathText>{", qualquer segmento ligando dois pontos de dentro fica dentro. No "}</MathText>
          <b>
            <MathText>{"côncavo"}</MathText>
          </b>
          <MathText>{" existe um “dente” para dentro, e dá para traçar um segmento que sai da figura."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 430 130"} className="w-[430px] max-w-full h-auto" role={"img"} aria-label={"Um polígono convexo e um côncavo"}>
            <polygon points={"30,90 30,35 70,15 110,35 110,90"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"70"} y={"115"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#047857"}>
              <MathText>{"convexo"}</MathText>
            </text>
            <polygon points={"180,90 180,20 215,55 250,20 250,90"} fill={"#fef3c7"} stroke={"#f59e0b"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"215"} y={"115"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#b45309"}>
              <MathText>{"côncavo (tem “dente”)"}</MathText>
            </text>
            <line x1={"190"} y1={"30"} x2={"240"} y2={"30"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <text x={"280"} y={"55"} textAnchor={"start"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"o segmento rosa sai"}</MathText>
            </text>
            <text x={"280"} y={"71"} textAnchor={"start"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"da figura: côncavo"}</MathText>
            </text>
          </svg>
        </div>
        <h3>
          <MathText>{"5.4 A soma dos ângulos internos"}</MathText>
        </h3>
        <p>
          <MathText>{"Quanto valem, juntos, todos os ângulos de dentro de um polígono? A resposta vem de um truque: "}</MathText>
          <b>
            <MathText>{"dividir em triângulos"}</MathText>
          </b>
          <MathText>{". Escolha um vértice e ligue-o a todos os outros vértices (menos aos dois vizinhos). A figura vira uma fila de triângulos, e cada triângulo tem ângulos que somam "}</MathText>
          <b>
            <MathText>{"180°"}</MathText>
          </b>
          <MathText>{" (você verá isso na "}</MathText>
          <a className="underline font-bold text-indigo-700" href={"#l6"} data-lesson={"l6"}>
            <MathText>{"lição 6"}</MathText>
          </a>
          <MathText>{")."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 168"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Pentágono dividido em 3 triângulos e hexágono dividido em 4 triângulos"}>
            <polygon points={"110,15 52.9,56.5 74.7,123.5"} fill={"#fce7f3"} stroke={"#94a3b8"} strokeWidth={"1.5"} strokeLinejoin={"round"}>
            </polygon>
            <polygon points={"110,15 74.7,123.5 145.3,123.5"} fill={"#fef3c7"} stroke={"#94a3b8"} strokeWidth={"1.5"} strokeLinejoin={"round"}>
            </polygon>
            <polygon points={"110,15 145.3,123.5 167.1,56.5"} fill={"#d1fae5"} stroke={"#94a3b8"} strokeWidth={"1.5"} strokeLinejoin={"round"}>
            </polygon>
            <polygon points={"110,15 52.9,56.5 74.7,123.5 145.3,123.5 167.1,56.5"} fill={"none"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"110"} y1={"15"} x2={"74.7"} y2={"123.5"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <line x1={"110"} y1={"15"} x2={"145.3"} y2={"123.5"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <text x={"110"} y={"158"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"3 triângulos"}</MathText>
            </text>
            <polygon points={"310,15 258,45 258,105"} fill={"#fce7f3"} stroke={"#94a3b8"} strokeWidth={"1.5"} strokeLinejoin={"round"}>
            </polygon>
            <polygon points={"310,15 258,105 310,135"} fill={"#fef3c7"} stroke={"#94a3b8"} strokeWidth={"1.5"} strokeLinejoin={"round"}>
            </polygon>
            <polygon points={"310,15 310,135 362,105"} fill={"#d1fae5"} stroke={"#94a3b8"} strokeWidth={"1.5"} strokeLinejoin={"round"}>
            </polygon>
            <polygon points={"310,15 362,105 362,45"} fill={"#dbeafe"} stroke={"#94a3b8"} strokeWidth={"1.5"} strokeLinejoin={"round"}>
            </polygon>
            <polygon points={"310,15 258,45 258,105 310,135 362,105 362,45"} fill={"none"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"310"} y1={"15"} x2={"258"} y2={"105"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <line x1={"310"} y1={"15"} x2={"310"} y2={"135"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <line x1={"310"} y1={"15"} x2={"362"} y2={"105"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <text x={"310"} y={"158"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"4 triângulos"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Cada triângulo tem soma 180°."}</MathText>
          </div>
        </div>
        <p>
          <MathText>{"Repare: o pentágono (5 lados) virou "}</MathText>
          <b>
            <MathText>{"3"}</MathText>
          </b>
          <MathText>{" triângulos; o hexágono (6 lados) virou "}</MathText>
          <b>
            <MathText>{"4"}</MathText>
          </b>
          <MathText>{". Sempre sobram "}</MathText>
          <b>
            <MathText>{"2"}</MathText>
          </b>
          <MathText>{" triângulos a menos que o número de lados. Por isso:"}</MathText>
        </p>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ S = (n - 2) \\cdot 180^\\circ \\]"}</MathText>
        </div>
        <p className="text-center">
          <MathText>{"\\(S\\) é a soma dos ângulos internos e \\(n\\) é o número de lados."}</MathText>
        </p>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Polígono"}</MathText>
              </th>
              <th>
                <MathText>{"Lados \\(n\\)"}</MathText>
              </th>
              <th>
                <MathText>{"Triângulos \\(n-2\\)"}</MathText>
              </th>
              <th>
                <MathText>{"Soma \\(S\\)"}</MathText>
              </th>
              <th>
                <MathText>{"Ângulo de cada um (se for regular)"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"triângulo"}</MathText>
              </td>
              <td>
                <MathText>{"3"}</MathText>
              </td>
              <td>
                <MathText>{"1"}</MathText>
              </td>
              <td>
                <MathText>{"\\(180^\\circ\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(60^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"quadrilátero"}</MathText>
              </td>
              <td>
                <MathText>{"4"}</MathText>
              </td>
              <td>
                <MathText>{"2"}</MathText>
              </td>
              <td>
                <MathText>{"\\(360^\\circ\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(90^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"pentágono"}</MathText>
              </td>
              <td>
                <MathText>{"5"}</MathText>
              </td>
              <td>
                <MathText>{"3"}</MathText>
              </td>
              <td>
                <MathText>{"\\(540^\\circ\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(108^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"hexágono"}</MathText>
              </td>
              <td>
                <MathText>{"6"}</MathText>
              </td>
              <td>
                <MathText>{"4"}</MathText>
              </td>
              <td>
                <MathText>{"\\(720^\\circ\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(120^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"octógono"}</MathText>
              </td>
              <td>
                <MathText>{"8"}</MathText>
              </td>
              <td>
                <MathText>{"6"}</MathText>
              </td>
              <td>
                <MathText>{"\\(1080^\\circ\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(135^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"decágono"}</MathText>
              </td>
              <td>
                <MathText>{"10"}</MathText>
              </td>
              <td>
                <MathText>{"8"}</MathText>
              </td>
              <td>
                <MathText>{"\\(1440^\\circ\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(144^\\circ\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 1 — Soma dos ângulos internos de um hexágono"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Hexágono: \\(n = 6\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(S = (n - 2) \\cdot 180^\\circ\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(S = (6 - 2) \\cdot 180^\\circ = 4 \\cdot 180^\\circ = 720^\\circ\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 2 — Quanto mede cada ângulo de um hexágono regular?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Soma: \\(720^\\circ\\) (exemplo 1)"}</MathText>
            </div>
            <div>
              <MathText>{"Regular = os 6 ângulos são iguais"}</MathText>
            </div>
            <div>
              <MathText>{"Cada um: \\(720^\\circ \\div 6 = 120^\\circ\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 3 — Um pentágono tem ângulos de 100°, 110°, 120° e 90°. Quanto mede o quinto?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Soma do pentágono: \\((5 - 2) \\cdot 180^\\circ = 540^\\circ\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Já conhecemos: \\(100 + 110 + 120 + 90 = 420\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Falta: \\(x = 540 - 420 = 120^\\circ\\)"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"5.5 Contando diagonais"}</MathText>
        </h3>
        <p>
          <MathText>{"De cada vértice saem diagonais para todos os outros vértices, "}</MathText>
          <b>
            <MathText>{"menos ele mesmo e os 2 vizinhos"}</MathText>
          </b>
          <MathText>{": são \\(n - 3\\) diagonais por vértice. Como são \\(n\\) vértices, seriam \\(n \\cdot (n-3)\\)… mas cada diagonal foi contada "}</MathText>
          <b>
            <MathText>{"duas vezes"}</MathText>
          </b>
          <MathText>{" (uma de cada ponta). Por isso dividimos por 2:"}</MathText>
        </p>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ d = \\dfrac{n \\cdot (n - 3)}{2} \\]"}</MathText>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 4 — Quantas diagonais tem um hexágono?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(n = 6\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(d = \\dfrac{6 \\cdot (6-3)}{2} = \\dfrac{6 \\cdot 3}{2} = \\dfrac{18}{2} = 9\\)"}</MathText>
            </div>
          </div>
        </div>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Polígono"}</MathText>
              </th>
              <th>
                <MathText>{"pentágono"}</MathText>
              </th>
              <th>
                <MathText>{"hexágono"}</MathText>
              </th>
              <th>
                <MathText>{"octógono"}</MathText>
              </th>
              <th>
                <MathText>{"decágono"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"Diagonais"}</MathText>
              </td>
              <td>
                <MathText>{"5"}</MathText>
              </td>
              <td>
                <MathText>{"9"}</MathText>
              </td>
              <td>
                <MathText>{"20"}</MathText>
              </td>
              <td>
                <MathText>{"35"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>
          <MathText>{"5.6 Os quadriláteros"}</MathText>
        </h3>
        <p>
          <MathText>{"Quadrilátero é todo polígono de "}</MathText>
          <b>
            <MathText>{"4 lados"}</MathText>
          </b>
          <MathText>{" (“quadri” = quatro, “látero” = lado). Dividindo-o em 2 triângulos (uma diagonal), vemos que a soma dos seus ângulos internos é \\(2 \\cdot 180^\\circ = \\) "}</MathText>
          <b>
            <MathText>{"360°"}</MathText>
          </b>
          <MathText>{", qualquer que seja o quadrilátero."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 250"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Seis quadriláteros: quadrado, retângulo, losango, paralelogramo e dois trapézios"}>
            <polygon points={"40,20 100,20 100,80 40,80"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"70"} y1={"14"} x2={"70"} y2={"26"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"106"} y1={"50"} x2={"94"} y2={"50"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"70"} y1={"86"} x2={"70"} y2={"74"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"34"} y1={"50"} x2={"46"} y2={"50"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <polyline points={"48,20 48,28 40,28"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <polyline points={"92,20 92,28 100,28"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <polyline points={"92,80 92,72 100,72"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <polyline points={"48,80 48,72 40,72"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <text x={"70"} y={"108"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Quadrado"}</MathText>
            </text>
            <polygon points={"160,30 260,30 260,80 160,80"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"210"} y1={"24"} x2={"210"} y2={"36"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"210"} y1={"86"} x2={"210"} y2={"74"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"266"} y1={"52.5"} x2={"254"} y2={"52.5"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"266"} y1={"57.5"} x2={"254"} y2={"57.5"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"154"} y1={"57.5"} x2={"166"} y2={"57.5"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"154"} y1={"52.5"} x2={"166"} y2={"52.5"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <polyline points={"168,30 168,38 160,38"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <polyline points={"168,80 168,72 160,72"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <text x={"210"} y={"108"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Retângulo"}</MathText>
            </text>
            <polygon points={"350,12 392,50 350,88 308,50"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"375"} y1={"26.6"} x2={"367"} y2={"35.4"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"375"} y1={"73.4"} x2={"367"} y2={"64.6"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"325"} y1={"73.4"} x2={"333"} y2={"64.6"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"325"} y1={"26.6"} x2={"333"} y2={"35.4"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"350"} y={"108"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Losango"}</MathText>
            </text>
            <polygon points={"20,205 95,205 125,150 50,150"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"57.5"} y1={"199"} x2={"57.5"} y2={"211"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"87.5"} y1={"156"} x2={"87.5"} y2={"144"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"103.5"} y1={"176.8"} x2={"114.1"} y2={"182.6"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"105.9"} y1={"172.4"} x2={"116.5"} y2={"178.2"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"41.5"} y1={"178.2"} x2={"30.9"} y2={"172.4"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"39.1"} y1={"182.6"} x2={"28.5"} y2={"176.8"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"70"} y={"233"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Paralelogramo"}</MathText>
            </text>
            <polygon points={"155,205 265,205 238,150 182,150"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"246.1"} y1={"180.1"} x2={"256.9"} y2={"174.9"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"173.9"} y1={"180.1"} x2={"163.1"} y2={"174.9"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"210"} y={"233"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Trapézio isósceles"}</MathText>
            </text>
            <polygon points={"295,205 405,205 375,150 295,150"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <polyline points={"303,205 303,213 295,213"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <polyline points={"303,150 303,142 295,142"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <text x={"350"} y={"233"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Trapézio retângulo"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Tracinhos iguais indicam lados com a mesma medida; quadradinho indica ângulo reto."}</MathText>
          </div>
        </div>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Figura"}</MathText>
              </th>
              <th>
                <MathText>{"Lados"}</MathText>
              </th>
              <th>
                <MathText>{"Ângulos"}</MathText>
              </th>
              <th>
                <MathText>{"Diagonais"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>
                  <MathText>{"Quadrado"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"4 lados iguais; opostos paralelos"}</MathText>
              </td>
              <td>
                <MathText>{"4 ângulos retos"}</MathText>
              </td>
              <td>
                <MathText>{"iguais; cruzam-se formando ângulo reto"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Retângulo"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"opostos iguais e paralelos"}</MathText>
              </td>
              <td>
                <MathText>{"4 ângulos retos"}</MathText>
              </td>
              <td>
                <MathText>{"iguais"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Losango"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"4 lados iguais; opostos paralelos"}</MathText>
              </td>
              <td>
                <MathText>{"opostos iguais"}</MathText>
              </td>
              <td>
                <MathText>{"cruzam-se formando ângulo reto"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Paralelogramo"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"opostos iguais e paralelos"}</MathText>
              </td>
              <td>
                <MathText>{"opostos iguais; vizinhos somam \\(180^\\circ\\)"}</MathText>
              </td>
              <td>
                <MathText>{"cortam-se ao meio"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Trapézio"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"pelo menos 1 par de lados paralelos (as "}</MathText>
                <b>
                  <MathText>{"bases"}</MathText>
                </b>
                <MathText>{")"}</MathText>
              </td>
              <td>
                <MathText>{"os ângulos de um mesmo lado inclinado somam \\(180^\\circ\\)"}</MathText>
              </td>
              <td>
                <MathText>{"—"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-blue-500 bg-blue-50">
          <b>
            <MathText>{"Trapézio isósceles e retângulo"}</MathText>
          </b>
          <MathText>{"O "}</MathText>
          <b>
            <MathText>{"trapézio isósceles"}</MathText>
          </b>
          <MathText>{" tem os dois lados não paralelos com a mesma medida. O "}</MathText>
          <b>
            <MathText>{"trapézio retângulo"}</MathText>
          </b>
          <MathText>{" tem dois ângulos retos. (Alguns livros definem o trapézio com "}</MathText>
          <u>
            <MathText>{"exatamente"}</MathText>
          </u>
          <MathText>{" um par de paralelos. Aqui usamos “pelo menos um”, a definição mais comum hoje.)"}</MathText>
        </div>
        <h3>
          <MathText>{"5.6.1 A família dos quadriláteros"}</MathText>
        </h3>
        <p>
          <MathText>{"Os quadriláteros são parentes: uns “moram dentro” de outros. Olhe o diagrama:"}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 262"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Diagrama: todo quadrado é retângulo e losango; todo retângulo e todo losango é paralelogramo; todo paralelogramo é trapézio"}>
            <rect x={"5"} y={"5"} width={"410"} height={"250"} rx={"12"} fill={"#f8fafc"} stroke={"#94a3b8"} strokeWidth={"2"}>
            </rect>
            <text x={"16"} y={"24"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              <MathText>{"Quadriláteros"}</MathText>
            </text>
            <rect x={"15"} y={"32"} width={"390"} height={"215"} rx={"10"} fill={"#eef2ff"} stroke={"#4f46e5"} strokeWidth={"2"}>
            </rect>
            <text x={"26"} y={"50"} textAnchor={"start"} fontSize={"12"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"Trapézios (pelo menos 1 par de lados paralelos)"}</MathText>
            </text>
            <rect x={"30"} y={"62"} width={"360"} height={"175"} rx={"10"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2"}>
            </rect>
            <text x={"42"} y={"80"} textAnchor={"start"} fontSize={"12"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"Paralelogramos (2 pares de lados paralelos)"}</MathText>
            </text>
            <ellipse cx={"150"} cy={"158"} rx={"95"} ry={"55"} fill={"#f59e0b"} fillOpacity={".45"} stroke={"#f59e0b"} strokeWidth={"2.5"}>
            </ellipse>
            <ellipse cx={"270"} cy={"158"} rx={"95"} ry={"55"} fill={"#10b981"} fillOpacity={".45"} stroke={"#10b981"} strokeWidth={"2.5"}>
            </ellipse>
            <text x={"112"} y={"162"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Retângulos"}</MathText>
            </text>
            <text x={"308"} y={"162"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Losangos"}</MathText>
            </text>
            <text x={"210"} y={"158"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Quadrados"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Cada região menor está “dentro” da maior."}</MathText>
          </div>
        </div>
        <ul>
          <li>
            <MathText>{"Todo "}</MathText>
            <b>
              <MathText>{"quadrado"}</MathText>
            </b>
            <MathText>{" é, ao mesmo tempo, retângulo, losango, paralelogramo e trapézio."}</MathText>
          </li>
          <li>
            <MathText>{"Todo "}</MathText>
            <b>
              <MathText>{"retângulo"}</MathText>
            </b>
            <MathText>{" é paralelogramo; todo "}</MathText>
            <b>
              <MathText>{"losango"}</MathText>
            </b>
            <MathText>{" também."}</MathText>
          </li>
          <li>
            <MathText>{"Mas "}</MathText>
            <b>
              <MathText>{"nem todo retângulo é quadrado"}</MathText>
            </b>
            <MathText>{": só o que tem os 4 lados iguais."}</MathText>
          </li>
        </ul>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 5 — Um paralelogramo tem um ângulo de 70°. Quanto medem os outros três?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Ângulo oposto = igual: \\(70^\\circ\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Os vizinhos somam \\(180^\\circ\\): \\(180 - 70 = 110^\\circ\\)"}</MathText>
            </div>
            <div>
              <MathText>{"O outro oposto também: \\(110^\\circ\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Conferência: \\(70 + 110 + 70 + 110 = 360^\\circ\\) ✓"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 6 — Um quadrilátero tem ângulos de 90°, 80° e 100°. Quanto mede o quarto?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Soma dos ângulos de um quadrilátero: \\(360^\\circ\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(90 + 80 + 100 = 270\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(x = 360 - 270 = 90^\\circ\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Cuidados"}</MathText>
          </b>
          <MathText>{"• Contar "}</MathText>
          <b>
            <MathText>{"lados"}</MathText>
          </b>
          <MathText>{" não é contar "}</MathText>
          <b>
            <MathText>{"diagonais"}</MathText>
          </b>
          <MathText>{": um pentágono tem 5 lados e 5 diagonais, mas um hexágono tem 6 lados e 9 diagonais."}</MathText>
          <br />
          <MathText>{"• A fórmula \\((n-2) \\cdot 180^\\circ\\) vale para a "}</MathText>
          <b>
            <MathText>{"soma"}</MathText>
          </b>
          <MathText>{". Para o ângulo de "}</MathText>
          <u>
            <MathText>{"cada"}</MathText>
          </u>
          <MathText>{" vértice de um polígono regular, divida o resultado por \\(n\\)."}</MathText>
          <br />
          <MathText>{"• Quadrado, retângulo e losango "}</MathText>
          <b>
            <MathText>{"não são “coisas separadas”"}</MathText>
          </b>
          <MathText>{": o quadrado é os três ao mesmo tempo."}</MathText>
        </div>
        <GeometryQuickCheck index={10} />
        <GeometryQuickCheck index={11} />
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto={"6"}>
          <MathText>{"✏️ Fazer os exercícios do nível 6"}</MathText>
        </button>
      </article>
      <article className="geometry-basica-lesson bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_.lesson-tag]:text-[.7rem] [&_.lesson-tag]:font-extrabold [&_.lesson-tag]:tracking-[.12em] [&_.lesson-tag]:uppercase [&_.lesson-tag]:text-indigo-600 [&_h2]:text-[1.6rem] [&_h2]:font-black [&_h2]:mt-1 [&_h2]:text-slate-800 [&_h3]:font-extrabold [&_h3]:text-lg [&_h3]:mt-7 [&_h3]:text-indigo-800 [&_h4]:mt-4 [&_h4]:font-bold [&_p]:leading-[1.85] [&_p]:text-slate-600 [&_p]:mt-3 [&_ul]:pl-6 [&_ul]:text-slate-600 [&_ul]:leading-[1.85] [&_ul]:mt-2 [&_ul]:list-disc [&_ol]:pl-6 [&_ol]:text-slate-600 [&_ol]:leading-[1.85] [&_ol]:mt-2 [&_ol]:list-decimal [&_li]:mt-1 [&_b]:text-slate-800 [&_strong]:text-slate-800" id={"l6"}>
        <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 6"}</MathText>
        </div>
        <h2>
          <MathText>{"Triângulos"}</MathText>
        </h2>
        <p>
          <MathText>{"O triângulo é o polígono mais simples (3 lados) e o mais importante da geometria: é "}</MathText>
          <b>
            <MathText>{"rígido"}</MathText>
          </b>
          <MathText>{" (por isso aparece em pontes, telhados e torres) e todo outro polígono pode ser dividido em triângulos. Nos próximos cursos, quase tudo gira em torno dele, principalmente o "}</MathText>
          <b>
            <MathText>{"triângulo retângulo"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <h3>
          <MathText>{"6.1 Elementos de um triângulo"}</MathText>
        </h3>
        <ul>
          <li>
            <b>
              <MathText>{"3 vértices"}</MathText>
            </b>
            <MathText>{" (A, B e C), "}</MathText>
            <b>
              <MathText>{"3 lados"}</MathText>
            </b>
            <MathText>{" (\\(\\overline{AB}\\), \\(\\overline{BC}\\), \\(\\overline{AC}\\)) e "}</MathText>
            <b>
              <MathText>{"3 ângulos internos"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </li>
          <li>
            <MathText>{"Cada lado pode ser escolhido como "}</MathText>
            <b>
              <MathText>{"base"}</MathText>
            </b>
            <MathText>{". A "}</MathText>
            <b>
              <MathText>{"altura"}</MathText>
            </b>
            <MathText>{" é então a distância da base ao vértice oposto, medida "}</MathText>
            <u>
              <MathText>{"em linha perpendicular"}</MathText>
            </u>
            <MathText>{" à base."}</MathText>
          </li>
        </ul>
        <h3>
          <MathText>{"6.2 Classificando pelos lados"}</MathText>
        </h3>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 430 160"} className="w-[430px] max-w-full h-auto" role={"img"} aria-label={"Triângulo equilátero, isósceles e escaleno"}>
            <polygon points={"70,18 25,96 115,96"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"52.7"} y1={"60"} x2={"42.3"} y2={"54"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"70"} y1={"90"} x2={"70"} y2={"102"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"87.3"} y1={"60"} x2={"97.7"} y2={"54"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"70"} y={"132"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Equilátero"}</MathText>
            </text>
            <text x={"70"} y={"150"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3 lados iguais"}</MathText>
            </text>
            <polygon points={"150,112 270,112 210,20"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"175"} y1={"62.7"} x2={"185"} y2={"69.3"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"235"} y1={"69.3"} x2={"245"} y2={"62.7"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"210"} y={"132"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Isósceles"}</MathText>
            </text>
            <text x={"210"} y={"150"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2 lados iguais"}</MathText>
            </text>
            <polygon points={"310,112 410,112 340,25"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"360"} y1={"106"} x2={"360"} y2={"118"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"371.9"} y1={"74.2"} x2={"381.2"} y2={"66.7"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"368.8"} y1={"70.3"} x2={"378.1"} y2={"62.8"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"332.3"} y1={"65.7"} x2={"321"} y2={"61.8"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"330.7"} y1={"70.5"} x2={"319.3"} y2={"66.5"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"329"} y1={"75.2"} x2={"317.7"} y2={"71.3"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"360"} y={"132"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Escaleno"}</MathText>
            </text>
            <text x={"360"} y={"150"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3 lados diferentes"}</MathText>
            </text>
          </svg>
        </div>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Nome"}</MathText>
              </th>
              <th>
                <MathText>{"Lados"}</MathText>
              </th>
              <th>
                <MathText>{"Ângulos"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>
                  <MathText>{"Equilátero"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"3 lados iguais"}</MathText>
              </td>
              <td>
                <MathText>{"3 ângulos de \\(60^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Isósceles"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"2 lados iguais"}</MathText>
              </td>
              <td>
                <MathText>{"os 2 ângulos da base são iguais"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Escaleno"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"3 lados diferentes"}</MathText>
              </td>
              <td>
                <MathText>{"3 ângulos diferentes"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>
          <MathText>{"6.3 Classificando pelos ângulos"}</MathText>
        </h3>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 430 155"} className="w-[430px] max-w-full h-auto" role={"img"} aria-label={"Triângulo acutângulo, retângulo e obtusângulo"}>
            <polygon points={"20,100 130,100 85,25"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"75"} y={"128"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Acutângulo"}</MathText>
            </text>
            <text x={"75"} y={"145"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3 ângulos agudos"}</MathText>
            </text>
            <polygon points={"190,100 300,100 190,25"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <polyline points={"201,100 201,89 190,89"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <text x={"245"} y={"128"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Retângulo"}</MathText>
            </text>
            <text x={"245"} y={"145"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1 ângulo reto"}</MathText>
            </text>
            <polygon points={"340,100 418,100 320,30"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"372"} y={"128"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Obtusângulo"}</MathText>
            </text>
            <text x={"372"} y={"145"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1 ângulo obtuso"}</MathText>
            </text>
          </svg>
        </div>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Nome"}</MathText>
              </th>
              <th>
                <MathText>{"Característica"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>
                  <MathText>{"Acutângulo"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"os 3 ângulos são agudos (menores que \\(90^\\circ\\))"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Retângulo"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"tem 1 ângulo reto (\\(90^\\circ\\))"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Obtusângulo"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"tem 1 ângulo obtuso (maior que \\(90^\\circ\\))"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <MathText>{"Um triângulo pode ter as duas classificações: por exemplo, “isósceles e retângulo”, ou “escaleno e obtusângulo”."}</MathText>
        </p>
        <h3>
          <MathText>{"6.4 A soma dos ângulos internos é 180°"}</MathText>
        </h3>
        <p>
          <MathText>{"Faça você mesmo: desenhe um triângulo qualquer em uma folha, pinte os três cantos de cores diferentes e "}</MathText>
          <b>
            <MathText>{"recorte-os"}</MathText>
          </b>
          <MathText>{". Junte os três cantos pelos vértices, lado a lado. Eles formam sempre uma "}</MathText>
          <b>
            <MathText>{"linha reta"}</MathText>
          </b>
          <MathText>{", que é um ângulo de "}</MathText>
          <b>
            <MathText>{"180°"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 160"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Os três ângulos de um triângulo juntos formam um ângulo raso de 180 graus"}>
            <polygon points={"20,135 130,135 62.5,18.1"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <path d={"M44,135 A24,24 0 0 0 28.2,112.4"} fill={"none"} stroke={"#ec4899"} strokeWidth={"3.5"}>
            </path>
            <path d={"M118,114.2 A24,24 0 0 0 106,135"} fill={"none"} stroke={"#f59e0b"} strokeWidth={"3.5"}>
            </path>
            <path d={"M55,38.8 A22,22 0 0 0 73.5,37.2"} fill={"none"} stroke={"#4f46e5"} strokeWidth={"3.5"}>
            </path>
            <text x={"58"} y={"127"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"70°"}</MathText>
            </text>
            <text x={"98"} y={"127"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#b45309"}>
              <MathText>{"60°"}</MathText>
            </text>
            <text x={"62.5"} y={"63.1"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"50°"}</MathText>
            </text>
            <path d={"M290,120 L370,120 A80,80 0 0 0 317.4,44.8 Z"} fill={"#fce7f3"} stroke={"#1e293b"} strokeWidth={"1.5"}>
            </path>
            <path d={"M290,120 L317.4,44.8 A80,80 0 0 0 238.6,58.7 Z"} fill={"#fef3c7"} stroke={"#1e293b"} strokeWidth={"1.5"}>
            </path>
            <path d={"M290,120 L238.6,58.7 A80,80 0 0 0 210,120 Z"} fill={"#c7d2fe"} stroke={"#1e293b"} strokeWidth={"1.5"}>
            </path>
            <line x1={"195"} y1={"120"} x2={"385"} y2={"120"} stroke={"#1e293b"} strokeWidth={"2.5"} strokeLinecap={"round"}>
            </line>
            <text x={"328"} y={"98"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"70°"}</MathText>
            </text>
            <text x={"292"} y={"65"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#b45309"}>
              <MathText>{"60°"}</MathText>
            </text>
            <text x={"245"} y={"98"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"50°"}</MathText>
            </text>
            <text x={"290"} y={"142"} textAnchor={"middle"} fontSize={"11"} fontWeight={"700"} fill={"#475569"}>
              <MathText>{"70° + 60° + 50° = 180° (meia-volta)"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Se você juntar os três “cantinhos” do triângulo, eles formam uma linha reta."}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ \\hat{A} + \\hat{B} + \\hat{C} = 180^\\circ \\]"}</MathText>
        </div>
        <p>
          <MathText>{"Isso vale para "}</MathText>
          <b>
            <MathText>{"todo"}</MathText>
          </b>
          <MathText>{" triângulo, grande ou pequeno, de qualquer tipo. Nunca esqueça: é o seu principal recurso para descobrir um ângulo que falta."}</MathText>
        </p>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 1 — Dois ângulos de um triângulo medem 70° e 60°. Quanto mede o terceiro?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Soma dos três: \\(180^\\circ\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Já temos: \\(70 + 60 = 130\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Falta: \\(x = 180 - 130 = 50^\\circ\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 2 — Os ângulos de um triângulo são \\(x\\), \\(x + 10^\\circ\\) e \\(x + 20^\\circ\\). Quanto vale cada um?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Soma: \\(x + (x + 10) + (x + 20) = 180\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(3x + 30 = 180\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(3x = 180 - 30 = 150\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(x = 150 \\div 3 = 50\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Ângulos: \\(50^\\circ\\), \\(60^\\circ\\), \\(70^\\circ\\). Conferência: \\(50+60+70 = 180\\) ✓"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"6.5 Triângulo isósceles"}</MathText>
        </h3>
        <p>
          <MathText>{"O ângulo que fica entre os dois lados iguais é o "}</MathText>
          <b>
            <MathText>{"ângulo do vértice"}</MathText>
          </b>
          <MathText>{". Os outros dois, apoiados na "}</MathText>
          <b>
            <MathText>{"base"}</MathText>
          </b>
          <MathText>{", são sempre "}</MathText>
          <b>
            <MathText>{"iguais entre si"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 220 199"} className="w-[220px] max-w-full h-auto" role={"img"} aria-label={"Triângulo isósceles com ângulo do vértice 40 graus e dois ângulos da base iguais a x"}>
            <polygon points={"100,20 45,171.1 155,171.1"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"78.1"} y1={"97.6"} x2={"66.9"} y2={"93.5"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"133.1"} y1={"93.5"} x2={"121.9"} y2={"97.6"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <path d={"M71,171.1 A26,26 0 0 0 53.9,146.7"} fill={"none"} stroke={"#ec4899"} strokeWidth={"3.5"}>
            </path>
            <path d={"M146.1,146.7 A26,26 0 0 0 129,171.1"} fill={"none"} stroke={"#ec4899"} strokeWidth={"3.5"}>
            </path>
            <path d={"M90.4,46.3 A28,28 0 0 0 109.6,46.3"} fill={"none"} stroke={"#4f46e5"} strokeWidth={"3.5"}>
            </path>
            <text x={"87"} y={"163.1"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"x"}</MathText>
            </text>
            <text x={"113"} y={"163.1"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"x"}</MathText>
            </text>
            <text x={"100"} y={"70"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"40°"}</MathText>
            </text>
            <text x={"100"} y={"191.1"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#475569"}>
              <MathText>{"base"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"No isósceles, os ângulos da base são iguais."}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 3 — Um isósceles tem ângulo do vértice de 40°. Quanto mede cada ângulo da base?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Os ângulos da base são iguais: chame de \\(x\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(40 + x + x = 180\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(2x = 180 - 40 = 140\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(x = 140 \\div 2 = 70^\\circ\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-amber-500 bg-amber-50">
          <b>
            <MathText>{"Equilátero"}</MathText>
          </b>
          <MathText>{"Se os 3 lados são iguais, os 3 ângulos também são: \\(180^\\circ \\div 3 = 60^\\circ\\) cada um."}</MathText>
        </div>
        <h3>
          <MathText>{"6.6 O ângulo externo"}</MathText>
        </h3>
        <p>
          <MathText>{"Prolongue um lado do triângulo. O ângulo que aparece "}</MathText>
          <u>
            <MathText>{"fora"}</MathText>
          </u>
          <MathText>{", junto do vértice, é o "}</MathText>
          <b>
            <MathText>{"ângulo externo"}</MathText>
          </b>
          <MathText>{". Ele forma uma linha reta com o ângulo interno do mesmo vértice, então os dois somam \\(180^\\circ\\)."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 260 140"} className="w-[260px] max-w-full h-auto" role={"img"} aria-label={"Triângulo com o prolongamento de um lado e o ângulo externo em rosa"}>
            <polygon points={"30,110 150,110 110,30"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"150"} y1={"110"} x2={"230"} y2={"110"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <circle cx={"230"} cy={"110"} r={"0"} fill={"#4f46e5"}>
            </circle>
            <path d={"M180,110 A30,30 0 0 0 136.6,83.2"} fill={"none"} stroke={"#ec4899"} strokeWidth={"4"}>
            </path>
            <path d={"M52,110 A22,22 0 0 0 45.6,94.4"} fill={"none"} stroke={"#f59e0b"} strokeWidth={"3.5"}>
            </path>
            <path d={"M95.9,44.1 A20,20 0 0 0 118.9,47.9"} fill={"none"} stroke={"#4f46e5"} strokeWidth={"3.5"}>
            </path>
            <text x={"70"} y={"104"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#b45309"}>
              <MathText>{"50°"}</MathText>
            </text>
            <text x={"104"} y={"72"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"60°"}</MathText>
            </text>
            <text x={"200"} y={"90"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"externo"}</MathText>
            </text>
            <text x={"30"} y={"132"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"A"}</MathText>
            </text>
            <text x={"150"} y={"132"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"B"}</MathText>
            </text>
            <text x={"110"} y={"22"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"C"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"O ângulo externo (rosa) é o suplemento do ângulo interno do mesmo vértice."}</MathText>
          </div>
        </div>
        <p>
          <MathText>{"E tem mais: o ângulo externo é igual à "}</MathText>
          <b>
            <MathText>{"soma dos dois ângulos internos que não estão ao lado dele"}</MathText>
          </b>
          <MathText>{". No desenho: \\(50^\\circ + 60^\\circ = 110^\\circ\\). Confira: o terceiro ângulo interno vale \\(180 - 110 = 70^\\circ\\), e o externo é \\(180 - 70 = 110^\\circ\\) ✓."}</MathText>
        </p>
        <h3>
          <MathText>{"6.7 Dá para formar qualquer triângulo? A desigualdade triangular"}</MathText>
        </h3>
        <p>
          <MathText>{"Pegue três palitos de 2 cm, 3 cm e 6 cm e tente fechar um triângulo: "}</MathText>
          <b>
            <MathText>{"não dá"}</MathText>
          </b>
          <MathText>{"! Os dois palitos curtos juntos (\\(2 + 3 = 5\\)) não alcançam a ponta do palito de 6 cm. Com palitos de 3, 4 e 5 cm, fecha."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 480 140"} className="w-[480px] max-w-full h-auto" role={"img"} aria-label={"Palitos de 2, 3 e 6 não formam triângulo; palitos de 3, 4 e 5 formam"}>
            <line x1={"50"} y1={"105"} x2={"170"} y2={"105"} stroke={"#1e293b"} strokeWidth={"5"} strokeLinecap={"round"}>
            </line>
            <text x={"110"} y={"127"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"6"}</MathText>
            </text>
            <circle cx={"50"} cy={"105"} r={"40"} fill={"none"} stroke={"#ec4899"} strokeWidth={"2"} strokeDasharray={"5 4"}>
            </circle>
            <circle cx={"170"} cy={"105"} r={"60"} fill={"none"} stroke={"#f59e0b"} strokeWidth={"2"} strokeDasharray={"5 4"}>
            </circle>
            <line x1={"50"} y1={"105"} x2={"70"} y2={"70.4"} stroke={"#ec4899"} strokeWidth={"5"} strokeLinecap={"round"}>
            </line>
            <line x1={"170"} y1={"105"} x2={"140"} y2={"53"} stroke={"#f59e0b"} strokeWidth={"5"} strokeLinecap={"round"}>
            </line>
            <text x={"42"} y={"80"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"2"}</MathText>
            </text>
            <text x={"184"} y={"65"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#b45309"}>
              <MathText>{"3"}</MathText>
            </text>
            <text x={"110"} y={"18"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"palitos 2, 3 e 6"}</MathText>
            </text>
            <text x={"110"} y={"36"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#b91c1c"}>
              <MathText>{"2 + 3 = 5 "}</MathText>
              <MathText>{"<"}</MathText>
              <MathText>{" 6 → não fecha"}</MathText>
            </text>
            <polygon points={"320,110 420,110 356,62"} fill={"none"} stroke={"#4f46e5"} strokeWidth={"4"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"370"} y={"130"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"5"}</MathText>
            </text>
            <text x={"328"} y={"70"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"3"}</MathText>
            </text>
            <text x={"406"} y={"65"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"4"}</MathText>
            </text>
            <text x={"375"} y={"18"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"palitos 3, 4 e 5"}</MathText>
            </text>
            <text x={"375"} y={"36"} textAnchor={"middle"} fontSize={"11"} fontWeight={"700"} fill={"#047857"}>
              <MathText>{"cada lado "}</MathText>
              <MathText>{"<"}</MathText>
              <MathText>{" soma dos outros: fecha"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Os círculos tracejados mostram até onde cada palito alcança."}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ \\text{cada lado} "}</MathText>
          <MathText>{"<"}</MathText>
          <MathText>{" \\text{soma dos outros dois} \\]"}</MathText>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 4 — Dá para formar um triângulo com lados 5, 7 e 10? E com 4, 6 e 11?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"5, 7, 10: o maior é 10. \\(5 + 7 = 12\\) e \\(12 > 10\\) ✓ "}</MathText>
              <b>
                <MathText>{"dá"}</MathText>
              </b>
            </div>
            <div>
              <MathText>{"4, 6, 11: o maior é 11. \\(4 + 6 = 10\\) e \\(10 "}</MathText>
              <MathText>{"<"}</MathText>
              <MathText>{" 11\\) ✗ "}</MathText>
              <b>
                <MathText>{"não dá"}</MathText>
              </b>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-amber-500 bg-amber-50">
          <b>
            <MathText>{"Atalho"}</MathText>
          </b>
          <MathText>{"Só precisa testar o "}</MathText>
          <b>
            <MathText>{"maior"}</MathText>
          </b>
          <MathText>{" lado: se ele for menor que a soma dos outros dois, os outros testes passam sozinhos."}</MathText>
        </div>
        <p>
          <MathText>{"Se dois lados medem 4 e 9, o terceiro lado tem de ser "}</MathText>
          <b>
            <MathText>{"maior que 5"}</MathText>
          </b>
          <MathText>{" (a diferença: \\(9 - 4\\)) e "}</MathText>
          <b>
            <MathText>{"menor que 13"}</MathText>
          </b>
          <MathText>{" (a soma: \\(4 + 9\\)). Os valores inteiros possíveis são 6, 7, 8, 9, 10, 11 e 12."}</MathText>
        </p>
        <h3>
          <MathText>{"6.8 O triângulo retângulo: catetos e hipotenusa"}</MathText>
        </h3>
        <p>
          <MathText>{"O triângulo retângulo tem um ângulo de \\(90^\\circ\\) e é tão importante que seus lados ganharam nomes próprios:"}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 310 155"} className="w-[310px] max-w-full h-auto" role={"img"} aria-label={"Triângulo retângulo com os dois catetos e a hipotenusa indicados"}>
            <polygon points={"70,120 230,120 70,25"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polygon>
            <polyline points={"82,120 82,108 70,108"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <text x={"150"} y={"142"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"cateto"}</MathText>
            </text>
            <text x={"58"} y={"78"} textAnchor={"end"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"cateto"}</MathText>
            </text>
            <text x={"180"} y={"62"} textAnchor={"start"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"hipotenusa"}</MathText>
            </text>
            <line x1={"74"} y1={"28"} x2={"224"} y2={"117"} stroke={"#4f46e5"} strokeWidth={"5"} strokeLinecap={"round"}>
            </line>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Hipotenusa: lado oposto ao ângulo reto (sempre o maior). Catetos: os dois lados que formam o ângulo reto."}</MathText>
          </div>
        </div>
        <ul>
          <li>
            <b>
              <MathText>{"Hipotenusa"}</MathText>
            </b>
            <MathText>{": o lado "}</MathText>
            <u>
              <MathText>{"oposto"}</MathText>
            </u>
            <MathText>{" ao ângulo reto. É sempre o "}</MathText>
            <b>
              <MathText>{"maior"}</MathText>
            </b>
            <MathText>{" dos três."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Catetos"}</MathText>
            </b>
            <MathText>{": os dois lados que "}</MathText>
            <u>
              <MathText>{"formam"}</MathText>
            </u>
            <MathText>{" o ângulo reto."}</MathText>
          </li>
        </ul>
        <p>
          <MathText>{"Como um ângulo já vale \\(90^\\circ\\), os outros dois ângulos somam \\(180 - 90 = 90^\\circ\\): são "}</MathText>
          <b>
            <MathText>{"complementares"}</MathText>
          </b>
          <MathText>{" (lição 4). Existe uma relação famosa entre os três lados desse triângulo: é o assunto do próximo curso, o "}</MathText>
          <b>
            <MathText>{"Teorema de Pitágoras"}</MathText>
          </b>
          <MathText>{". Por ora, aprenda só a "}</MathText>
          <b>
            <MathText>{"reconhecer"}</MathText>
          </b>
          <MathText>{" catetos e hipotenusa."}</MathText>
        </p>
        <h3>
          <MathText>{"6.9 Altura de um triângulo"}</MathText>
        </h3>
        <p>
          <MathText>{"Escolha um lado como base. A "}</MathText>
          <b>
            <MathText>{"altura"}</MathText>
          </b>
          <MathText>{" é o segmento que sai do vértice oposto e chega à reta da base "}</MathText>
          <b>
            <MathText>{"formando ângulo reto"}</MathText>
          </b>
          <MathText>{". Cada triângulo tem 3 alturas (uma para cada base). Repare onde ela cai:"}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 610 135"} className="w-[610px] max-w-full h-auto" role={"img"} aria-label={"Altura relativa à base AB em um triângulo acutângulo, retângulo e obtusângulo"}>
            <polygon points={"15,90 175,90 120,22"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"120"} y1={"22"} x2={"120"} y2={"90"} stroke={"#ec4899"} strokeWidth={"3"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <polyline points={"110,90 110,80 120,80"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <text x={"15"} y={"108"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"A"}</MathText>
            </text>
            <text x={"175"} y={"108"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"B"}</MathText>
            </text>
            <text x={"120"} y={"14"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"C"}</MathText>
            </text>
            <text x={"130"} y={"56"} textAnchor={"start"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"h"}</MathText>
            </text>
            <text x={"95"} y={"126"} textAnchor={"middle"} fontSize={"11"} fontWeight={"700"} fill={"#475569"}>
              <MathText>{"base AB"}</MathText>
            </text>
            <text x={"55"} y={"12"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"acutângulo"}</MathText>
            </text>
            <polygon points={"235,90 380,90 235,22"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"235"} y1={"90"} x2={"235"} y2={"22"} stroke={"#ec4899"} strokeWidth={"4.5"} strokeLinecap={"round"}>
            </line>
            <polyline points={"245,90 245,80 235,80"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <text x={"235"} y={"108"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"A"}</MathText>
            </text>
            <text x={"380"} y={"108"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"B"}</MathText>
            </text>
            <text x={"235"} y={"14"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"C"}</MathText>
            </text>
            <text x={"245"} y={"56"} textAnchor={"start"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"h"}</MathText>
            </text>
            <text x={"307.5"} y={"126"} textAnchor={"middle"} fontSize={"11"} fontWeight={"700"} fill={"#475569"}>
              <MathText>{"base AB"}</MathText>
            </text>
            <text x={"320"} y={"12"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"retângulo"}</MathText>
            </text>
            <polygon points={"480,90 595,90 440,22"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"480"} y1={"90"} x2={"440"} y2={"90"} stroke={"#94a3b8"} strokeWidth={"2"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <line x1={"440"} y1={"22"} x2={"440"} y2={"90"} stroke={"#ec4899"} strokeWidth={"3"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <polyline points={"450,90 450,80 440,80"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <text x={"480"} y={"108"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"A"}</MathText>
            </text>
            <text x={"595"} y={"108"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"B"}</MathText>
            </text>
            <text x={"440"} y={"14"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"C"}</MathText>
            </text>
            <text x={"450"} y={"56"} textAnchor={"start"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"h"}</MathText>
            </text>
            <text x={"567.5"} y={"126"} textAnchor={"middle"} fontSize={"11"} fontWeight={"700"} fill={"#475569"}>
              <MathText>{"base AB"}</MathText>
            </text>
            <text x={"530"} y={"12"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"obtusângulo"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"A altura é sempre perpendicular à base; no obtusângulo ela cai fora do triângulo, no prolongamento da base."}</MathText>
          </div>
        </div>
        <ul>
          <li>
            <b>
              <MathText>{"Acutângulo"}</MathText>
            </b>
            <MathText>{": a altura cai "}</MathText>
            <u>
              <MathText>{"dentro"}</MathText>
            </u>
            <MathText>{" do triângulo."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Retângulo"}</MathText>
            </b>
            <MathText>{": a altura relativa a um cateto é "}</MathText>
            <u>
              <MathText>{"o outro cateto"}</MathText>
            </u>
            <MathText>{". Muito prático!"}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Obtusângulo"}</MathText>
            </b>
            <MathText>{": a altura cai "}</MathText>
            <u>
              <MathText>{"fora"}</MathText>
            </u>
            <MathText>{" do triângulo; precisamos prolongar a base (tracejado) para encontrá-la."}</MathText>
          </li>
        </ul>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Cuidados"}</MathText>
          </b>
          <MathText>{"• A altura "}</MathText>
          <b>
            <MathText>{"não"}</MathText>
          </b>
          <MathText>{" é um lado inclinado: ela faz "}</MathText>
          <b>
            <MathText>{"90°"}</MathText>
          </b>
          <MathText>{" com a base."}</MathText>
          <br />
          <MathText>{"• Hipotenusa é o lado do "}</MathText>
          <b>
            <MathText>{"ângulo reto oposto"}</MathText>
          </b>
          <MathText>{", não “o lado de baixo”. Gire o triângulo: os nomes não mudam."}</MathText>
          <br />
          <MathText>{"• Só vale “a soma é 180°” para ângulos "}</MathText>
          <b>
            <MathText>{"do mesmo triângulo"}</MathText>
          </b>
          <MathText>{". Não some ângulos de triângulos diferentes."}</MathText>
        </div>
        <GeometryQuickCheck index={12} />
        <GeometryQuickCheck index={13} />
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-gotab={"laboratorio"}>
          <MathText>{"🔬 Experimento 2: construtor de triângulos"}</MathText>
        </button>
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto={"7"}>
          <MathText>{"✏️ Fazer os exercícios do nível 7"}</MathText>
        </button>
      </article>
      <article className="geometry-basica-lesson bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_.lesson-tag]:text-[.7rem] [&_.lesson-tag]:font-extrabold [&_.lesson-tag]:tracking-[.12em] [&_.lesson-tag]:uppercase [&_.lesson-tag]:text-indigo-600 [&_h2]:text-[1.6rem] [&_h2]:font-black [&_h2]:mt-1 [&_h2]:text-slate-800 [&_h3]:font-extrabold [&_h3]:text-lg [&_h3]:mt-7 [&_h3]:text-indigo-800 [&_h4]:mt-4 [&_h4]:font-bold [&_p]:leading-[1.85] [&_p]:text-slate-600 [&_p]:mt-3 [&_ul]:pl-6 [&_ul]:text-slate-600 [&_ul]:leading-[1.85] [&_ul]:mt-2 [&_ul]:list-disc [&_ol]:pl-6 [&_ol]:text-slate-600 [&_ol]:leading-[1.85] [&_ol]:mt-2 [&_ol]:list-decimal [&_li]:mt-1 [&_b]:text-slate-800 [&_strong]:text-slate-800" id={"l7"}>
        <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 7"}</MathText>
        </div>
        <h2>
          <MathText>{"Perímetro"}</MathText>
        </h2>
        <p>
          <MathText>{"Quanto de cerca é preciso para cercar um terreno? Quanto de rodapé para a sala? Quanto de fita para contornar uma caixa? Em todos os casos queremos o "}</MathText>
          <b>
            <MathText>{"comprimento do contorno"}</MathText>
          </b>
          <MathText>{" de uma figura. Esse comprimento chama-se "}</MathText>
          <b>
            <MathText>{"perímetro"}</MathText>
          </b>
          <MathText>{" (do grego: “medida ao redor”)."}</MathText>
        </p>
        <h3>
          <MathText>{"7.1 A ideia: dar a volta e somar"}</MathText>
        </h3>
        <p>
          <MathText>{"Imagine uma formiga andando por todo o contorno da figura, até voltar ao ponto de partida. A distância que ela andou é o perímetro. Na prática: "}</MathText>
          <b>
            <MathText>{"some a medida de todos os lados"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 440 160"} className="w-[440px] max-w-full h-auto" role={"img"} aria-label={"Retângulo de 8 cm por 5 cm com o perímetro calculado"}>
            <polygon points={"70,30 230,30 230,120 70,120"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3.5"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"150"} y={"22"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"8 cm"}</MathText>
            </text>
            <text x={"150"} y={"142"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"8 cm"}</MathText>
            </text>
            <text x={"60"} y={"80"} textAnchor={"end"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"5 cm"}</MathText>
            </text>
            <text x={"242"} y={"80"} textAnchor={"start"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"5 cm"}</MathText>
            </text>
            <circle cx={"70"} cy={"30"} r={"5"} fill={"#f59e0b"}>
            </circle>
            <text x={"292"} y={"55"} textAnchor={"start"} fontSize={"15"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"P = 8 + 5 + 8 + 5"}</MathText>
            </text>
            <text x={"292"} y={"80"} textAnchor={"start"} fontSize={"15"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"P = 26 cm"}</MathText>
            </text>
            <text x={"292"} y={"105"} textAnchor={"start"} fontSize={"12"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"(dê a volta e some)"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Perímetro: o comprimento do contorno."}</MathText>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-blue-500 bg-blue-50">
          <b>
            <MathText>{"Unidade"}</MathText>
          </b>
          <MathText>{"O perímetro é um "}</MathText>
          <b>
            <MathText>{"comprimento"}</MathText>
          </b>
          <MathText>{", por isso usa as unidades de comprimento: mm, cm, m, km. Escreva sempre a unidade na resposta."}</MathText>
        </div>
        <h3>
          <MathText>{"7.2 Passo a passo no papel"}</MathText>
        </h3>
        <ol>
          <li>
            <b>
              <MathText>{"Desenhe"}</MathText>
            </b>
            <MathText>{" a figura (um rascunho serve) e escreva a medida de cada lado."}</MathText>
          </li>
          <li>
            <MathText>{"Confira se "}</MathText>
            <b>
              <MathText>{"todos os lados"}</MathText>
            </b>
            <MathText>{" têm medida (descubra os que faltam)."}</MathText>
          </li>
          <li>
            <MathText>{"Veja se as "}</MathText>
            <b>
              <MathText>{"unidades são iguais"}</MathText>
            </b>
            <MathText>{"; se não, converta antes."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Some"}</MathText>
            </b>
            <MathText>{" todos os lados e escreva a resposta com a unidade."}</MathText>
          </li>
        </ol>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 1 — Perímetro de um triângulo isósceles com lados 10 cm, 10 cm e 12 cm"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(P = 10 + 10 + 12\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(P = 32 \\text{ cm}\\)"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"7.3 Atalhos (fórmulas)"}</MathText>
        </h3>
        <p>
          <MathText>{"Quando há lados repetidos, multiplicar economiza trabalho:"}</MathText>
        </p>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Figura"}</MathText>
              </th>
              <th>
                <MathText>{"Fórmula"}</MathText>
              </th>
              <th>
                <MathText>{"Por quê?"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>
                  <MathText>{"Quadrado"}</MathText>
                </b>
                <MathText>{" de lado \\(\\ell\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(P = 4 \\cdot \\ell\\)"}</MathText>
              </td>
              <td>
                <MathText>{"4 lados iguais"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Retângulo"}</MathText>
                </b>
                <MathText>{" de base \\(b\\) e altura \\(h\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(P = 2 \\cdot (b + h)\\) ou \\(P = 2b + 2h\\)"}</MathText>
              </td>
              <td>
                <MathText>{"2 lados de cada medida"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Polígono regular"}</MathText>
                </b>
                <MathText>{" de \\(n\\) lados de medida \\(\\ell\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(P = n \\cdot \\ell\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(n\\) lados iguais"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Triângulo equilátero"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"\\(P = 3 \\cdot \\ell\\)"}</MathText>
              </td>
              <td>
                <MathText>{"caso particular (\\(n = 3\\))"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 340 158"} className="w-[340px] max-w-full h-auto" role={"img"} aria-label={"Triângulo equilátero e hexágono regular com lados iguais"}>
            <polygon points={"70,12 26.7,87 113.3,87"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"70"} y={"130"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"triângulo equilátero"}</MathText>
            </text>
            <text x={"70"} y={"148"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"P = 3 · ℓ"}</MathText>
            </text>
            <polygon points={"250,14 208.4,38 208.4,86 250,110 291.6,86 291.6,38"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"250"} y={"130"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"hexágono regular"}</MathText>
            </text>
            <text x={"250"} y={"148"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"P = 6 · ℓ"}</MathText>
            </text>
            <line x1={"52.7"} y1={"52"} x2={"44"} y2={"47"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"70"} y1={"82"} x2={"70"} y2={"92"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"87.3"} y1={"52"} x2={"96"} y2={"47"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"231.7"} y1={"30.3"} x2={"226.7"} y2={"21.7"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"213.4"} y1={"62"} x2={"203.4"} y2={"62"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"231.7"} y1={"93.7"} x2={"226.7"} y2={"102.3"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"268.3"} y1={"93.7"} x2={"273.3"} y2={"102.3"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"286.6"} y1={"62"} x2={"296.6"} y2={"62"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <line x1={"268.3"} y1={"30.3"} x2={"273.3"} y2={"21.7"} stroke={"#1e293b"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Polígono regular com n lados de medida ℓ: P = n · ℓ."}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 2 — Perímetro de um quadrado de lado 7 m e de um hexágono regular de lado 6 cm"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Quadrado: \\(P = 4 \\cdot 7 = 28 \\text{ m}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Hexágono regular: \\(P = 6 \\cdot 6 = 36 \\text{ cm}\\)"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"7.4 Descobrindo um lado quando se conhece o perímetro"}</MathText>
        </h3>
        <p>
          <MathText>{"Aqui entra a álgebra do curso anterior: escreva a fórmula, substitua o que você sabe e "}</MathText>
          <b>
            <MathText>{"desfaça as operações"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 3 — Um retângulo tem perímetro 30 cm e base 9 cm. Quanto mede a altura?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(P = 2(b + h)\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(30 = 2(9 + h)\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(9 + h = 30 \\div 2 = 15\\)  (metade do perímetro)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(h = 15 - 9 = 6 \\text{ cm}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Conferência: \\(2 \\cdot (9 + 6) = 30\\) ✓"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 4 — Um quadrado tem perímetro 36 cm. Quanto mede o lado?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(4 \\cdot \\ell = 36\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(\\ell = 36 \\div 4 = 9 \\text{ cm}\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 5 — O comprimento de um retângulo é 6 m maior que a largura. O perímetro é 44 m. Quais são as medidas?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Largura \\(= x\\) → comprimento \\(= x + 6\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(2 \\cdot (x + x + 6) = 44\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(2x + 6 = 22\\)  (dividi tudo por 2)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(2x = 16\\) → \\(x = 8\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Largura 8 m e comprimento \\(8 + 6 = 14\\) m. Conferência: \\(2 \\cdot (8+14) = 44\\) ✓"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"7.5 Figuras em “L” e lados que faltam"}</MathText>
        </h3>
        <p>
          <MathText>{"Em figuras com “degraus”, nem todos os lados vêm com medida. Mas dá para descobri-los: os lados "}</MathText>
          <b>
            <MathText>{"horizontais"}</MathText>
          </b>
          <MathText>{" de cima, somados, têm de dar o mesmo total que os de baixo; o mesmo vale para os "}</MathText>
          <b>
            <MathText>{"verticais"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 300 205"} className="w-[300px] max-w-full h-auto" role={"img"} aria-label={"Figura em L com lados 10, 8, 5 e 4 conhecidos e dois lados desconhecidos"}>
            <polygon points={"30,178 210,178 210,88 138,88 138,34 30,34"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"120"} y={"198"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"10"}</MathText>
            </text>
            <text x={"20"} y={"106"} textAnchor={"end"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"8"}</MathText>
            </text>
            <text x={"222"} y={"133"} textAnchor={"start"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"5"}</MathText>
            </text>
            <text x={"174"} y={"80"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"4"}</MathText>
            </text>
            <text x={"150"} y={"61"} textAnchor={"start"} fontSize={"18"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"?"}</MathText>
            </text>
            <text x={"84"} y={"26"} textAnchor={"middle"} fontSize={"18"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"?"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Dois lados não foram medidos: dá para descobri-los com contas."}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 6 — Perímetro da figura em L (medidas em cm)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Em cima, os horizontais devem somar 10 (como embaixo): \\(? + 4 = 10\\) → \\(? = 6\\)"}</MathText>
            </div>
            <div>
              <MathText>{"À direita, os verticais devem somar 8 (como à esquerda): \\(5 + ? = 8\\) → \\(? = 3\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(P = 10 + 5 + 4 + 3 + 6 + 8\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(P = 36 \\text{ cm}\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-amber-500 bg-amber-50">
          <b>
            <MathText>{"Atalho para o “L”"}</MathText>
          </b>
          <MathText>{"O perímetro de uma figura em L é igual ao do retângulo que a envolve: \\(2 \\cdot (10 + 8) = 36\\) cm. Os degraus não mudam o contorno total!"}</MathText>
        </div>
        <h3>
          <MathText>{"7.6 Cuidado com as unidades"}</MathText>
        </h3>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 7 — Um retângulo mede 2 m por 50 cm. Qual é o perímetro em metros?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Unidades diferentes! Converta: 2 m = 200 cm"}</MathText>
            </div>
            <div>
              <MathText>{"\\(P = 2 \\cdot (200 + 50) = 2 \\cdot 250 = 500 \\text{ cm}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"500 cm \\(\\div\\) 100 = "}</MathText>
              <b>
                <MathText>{"5 m"}</MathText>
              </b>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"7.7 Problemas com perímetro"}</MathText>
        </h3>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 8 — Seu João quer cercar um terreno retangular de 25 m por 18 m com 3 voltas de arame. Quantos metros de arame ele precisa?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"O que pede? O comprimento do contorno × 3 voltas."}</MathText>
            </div>
            <div>
              <MathText>{"\\(P = 2 \\cdot (25 + 18) = 2 \\cdot 43 = 86 \\text{ m}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"3 voltas: \\(86 \\cdot 3 = 258 \\text{ m}\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 9 — Uma sala de 5 m por 4 m tem uma porta de 1 m. O rodapé custa R$ 12 por metro e não vai na porta. Quanto custa o rodapé?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Contorno: \\(P = 2 \\cdot (5 + 4) = 18 \\text{ m}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Descontando a porta: \\(18 - 1 = 17 \\text{ m}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Custo: \\(17 \\cdot 12 = \\text{R\\$ } 204\\)"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"7.8 Perímetro não é área!"}</MathText>
        </h3>
        <p>
          <MathText>{"Um engano muito comum: achar que figuras com o mesmo perímetro têm o mesmo “tamanho”. Perímetro mede "}</MathText>
          <b>
            <MathText>{"o contorno"}</MathText>
          </b>
          <MathText>{"; a "}</MathText>
          <b>
            <MathText>{"área"}</MathText>
          </b>
          <MathText>{" (próxima lição) mede "}</MathText>
          <b>
            <MathText>{"o quanto de superfície"}</MathText>
          </b>
          <MathText>{" a figura cobre. São coisas diferentes: um retângulo de 1 cm por 9 cm e um quadrado de 5 cm por 5 cm têm o mesmo perímetro (20 cm), mas áreas bem diferentes."}</MathText>
        </p>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Cuidados"}</MathText>
          </b>
          <MathText>{"• Esquecer algum lado (principalmente os lados que “faltam” nas figuras em L)."}</MathText>
          <br />
          <MathText>{"• Misturar unidades (cm com m) na mesma soma."}</MathText>
          <br />
          <MathText>{"• Usar a fórmula do retângulo \\(2(b+h)\\) e esquecer o "}</MathText>
          <b>
            <MathText>{"2"}</MathText>
          </b>
          <MathText>{", ou calcular \\(2 \\cdot b + h\\)."}</MathText>
          <br />
          <MathText>{"• Confundir perímetro com área e dar a resposta em cm² (o perímetro é em "}</MathText>
          <b>
            <MathText>{"cm"}</MathText>
          </b>
          <MathText>{")."}</MathText>
        </div>
        <GeometryQuickCheck index={14} />
        <GeometryQuickCheck index={15} />
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-gotab={"laboratorio"}>
          <MathText>{"🔬 Experimento 3: perímetro e área"}</MathText>
        </button>
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto={"8"}>
          <MathText>{"✏️ Fazer os exercícios do nível 8"}</MathText>
        </button>
      </article>
      <article className="geometry-basica-lesson bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_.lesson-tag]:text-[.7rem] [&_.lesson-tag]:font-extrabold [&_.lesson-tag]:tracking-[.12em] [&_.lesson-tag]:uppercase [&_.lesson-tag]:text-indigo-600 [&_h2]:text-[1.6rem] [&_h2]:font-black [&_h2]:mt-1 [&_h2]:text-slate-800 [&_h3]:font-extrabold [&_h3]:text-lg [&_h3]:mt-7 [&_h3]:text-indigo-800 [&_h4]:mt-4 [&_h4]:font-bold [&_p]:leading-[1.85] [&_p]:text-slate-600 [&_p]:mt-3 [&_ul]:pl-6 [&_ul]:text-slate-600 [&_ul]:leading-[1.85] [&_ul]:mt-2 [&_ul]:list-disc [&_ol]:pl-6 [&_ol]:text-slate-600 [&_ol]:leading-[1.85] [&_ol]:mt-2 [&_ol]:list-decimal [&_li]:mt-1 [&_b]:text-slate-800 [&_strong]:text-slate-800" id={"l8"}>
        <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 8"}</MathText>
        </div>
        <h2>
          <MathText>{"Área e unidades de área"}</MathText>
        </h2>
        <p>
          <MathText>{"Quanto de piso é preciso para cobrir a sala? Quantas latas de tinta para pintar uma parede? Quanto vale um terreno? Para tudo isso precisamos medir "}</MathText>
          <b>
            <MathText>{"quanto de superfície"}</MathText>
          </b>
          <MathText>{" uma figura ocupa. Essa medida é a "}</MathText>
          <b>
            <MathText>{"área"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <h3>
          <MathText>{"8.1 O que é área?"}</MathText>
        </h3>
        <p>
          <MathText>{"Para medir um comprimento usamos um “pedacinho de linha” como régua (1 cm, 1 m). Para medir uma superfície usamos um “pedacinho de superfície”: o "}</MathText>
          <b>
            <MathText>{"quadradinho de 1 cm de lado"}</MathText>
          </b>
          <MathText>{", que tem "}</MathText>
          <b>
            <MathText>{"1 centímetro quadrado (1 cm²)"}</MathText>
          </b>
          <MathText>{" de área. A área é "}</MathText>
          <b>
            <MathText>{"quantos quadradinhos cabem dentro da figura"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 150"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Retângulo de 5 cm por 3 cm dividido em 15 quadradinhos de 1 centímetro quadrado"}>
            <rect x={"60"} y={"20"} width={"38"} height={"38"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"60"} y={"58"} width={"38"} height={"38"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"60"} y={"96"} width={"38"} height={"38"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"98"} y={"20"} width={"38"} height={"38"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"98"} y={"58"} width={"38"} height={"38"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"98"} y={"96"} width={"38"} height={"38"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"136"} y={"20"} width={"38"} height={"38"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"136"} y={"58"} width={"38"} height={"38"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"136"} y={"96"} width={"38"} height={"38"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"174"} y={"20"} width={"38"} height={"38"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"174"} y={"58"} width={"38"} height={"38"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"174"} y={"96"} width={"38"} height={"38"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"212"} y={"20"} width={"38"} height={"38"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"212"} y={"58"} width={"38"} height={"38"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"212"} y={"96"} width={"38"} height={"38"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"60"} y={"20"} width={"190"} height={"114"} rx={"0"} fill={"none"} stroke={"#4f46e5"} strokeWidth={"3.5"}>
            </rect>
            <text x={"155"} y={"14"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"5 cm"}</MathText>
            </text>
            <text x={"50"} y={"82"} textAnchor={"end"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"3 cm"}</MathText>
            </text>
            <text x={"270"} y={"60"} textAnchor={"start"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"5 colunas"}</MathText>
            </text>
            <text x={"270"} y={"80"} textAnchor={"start"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"× 3 linhas"}</MathText>
            </text>
            <text x={"270"} y={"104"} textAnchor={"start"} fontSize={"12"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"= 15 quadradinhos"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Cada quadradinho tem 1 cm de lado, ou seja, 1 cm² de área."}</MathText>
          </div>
        </div>
        <p>
          <MathText>{"Contar um por um funciona, mas dá trabalho. Repare: são 5 quadradinhos por linha e 3 linhas, então \\(5 \\cdot 3 = 15\\). É daí que nasce a fórmula do retângulo."}</MathText>
        </p>
        <h3>
          <MathText>{"8.2 Retângulo e quadrado"}</MathText>
        </h3>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ A_{\\text{retângulo}} = b \\cdot h \\qquad A_{\\text{quadrado}} = \\ell \\cdot \\ell = \\ell^2 \\]"}</MathText>
        </div>
        <p className="text-center">
          <MathText>{"\\(b\\) = base (um lado) e \\(h\\) = altura (o lado vizinho). No quadrado os dois lados são iguais."}</MathText>
        </p>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 1 — Área de um retângulo de 12 cm por 7 cm e de um quadrado de lado 9 cm"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Retângulo: \\(A = 12 \\cdot 7 = 84 \\text{ cm}^2\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Quadrado: \\(A = 9 \\cdot 9 = 9^2 = 81 \\text{ cm}^2\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 2 — Uma sala mede 4,5 m por 3 m. Qual é a área?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(A = 4{,}5 \\cdot 3\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(A = 13{,}5 \\text{ m}^2\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Unidade ao quadrado!"}</MathText>
          </b>
          <MathText>{"Se os lados estão em cm, a área sai em "}</MathText>
          <b>
            <MathText>{"cm²"}</MathText>
          </b>
          <MathText>{"; em m, sai em "}</MathText>
          <b>
            <MathText>{"m²"}</MathText>
          </b>
          <MathText>{". Isso acontece porque multiplicamos “cm × cm”. Nunca escreva só “cm” para uma área."}</MathText>
        </div>
        <h3>
          <MathText>{"8.3 Unidades de área e como converter"}</MathText>
        </h3>
        <p>
          <MathText>{"As unidades de área são “quadrados” das unidades de comprimento. Como \\(1 \\text{ dm} = 10 \\text{ cm}\\), um quadrado de 1 dm de lado tem \\(10 \\cdot 10 = 100\\) quadradinhos de 1 cm²:"}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 175"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Quadrado de 10 centímetros de lado dividido em 100 quadradinhos de 1 centímetro quadrado"}>
            <rect x={"60"} y={"20"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"60"} y={"34"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"60"} y={"48"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"60"} y={"62"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"60"} y={"76"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"60"} y={"90"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"60"} y={"104"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"60"} y={"118"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"60"} y={"132"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"60"} y={"146"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"74"} y={"20"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"74"} y={"34"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"74"} y={"48"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"74"} y={"62"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"74"} y={"76"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"74"} y={"90"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"74"} y={"104"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"74"} y={"118"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"74"} y={"132"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"74"} y={"146"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"88"} y={"20"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"88"} y={"34"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"88"} y={"48"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"88"} y={"62"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"88"} y={"76"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"88"} y={"90"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"88"} y={"104"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"88"} y={"118"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"88"} y={"132"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"88"} y={"146"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"102"} y={"20"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"102"} y={"34"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"102"} y={"48"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"102"} y={"62"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"102"} y={"76"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"102"} y={"90"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"102"} y={"104"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"102"} y={"118"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"102"} y={"132"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"102"} y={"146"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"116"} y={"20"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"116"} y={"34"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"116"} y={"48"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"116"} y={"62"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"116"} y={"76"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"116"} y={"90"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"116"} y={"104"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"116"} y={"118"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"116"} y={"132"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"116"} y={"146"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"130"} y={"20"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"130"} y={"34"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"130"} y={"48"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"130"} y={"62"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"130"} y={"76"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"130"} y={"90"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"130"} y={"104"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"130"} y={"118"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"130"} y={"132"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"130"} y={"146"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"144"} y={"20"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"144"} y={"34"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"144"} y={"48"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"144"} y={"62"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"144"} y={"76"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"144"} y={"90"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"144"} y={"104"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"144"} y={"118"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"144"} y={"132"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"144"} y={"146"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"158"} y={"20"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"158"} y={"34"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"158"} y={"48"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"158"} y={"62"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"158"} y={"76"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"158"} y={"90"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"158"} y={"104"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"158"} y={"118"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"158"} y={"132"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"158"} y={"146"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"172"} y={"20"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"172"} y={"34"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"172"} y={"48"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"172"} y={"62"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"172"} y={"76"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"172"} y={"90"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"172"} y={"104"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"172"} y={"118"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"172"} y={"132"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"172"} y={"146"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"186"} y={"20"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"186"} y={"34"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"186"} y={"48"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"186"} y={"62"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"186"} y={"76"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"186"} y={"90"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"186"} y={"104"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"186"} y={"118"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"186"} y={"132"} width={"14"} height={"14"} rx={"0"} fill={"#c7d2fe"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"186"} y={"146"} width={"14"} height={"14"} rx={"0"} fill={"#e0e7ff"} stroke={"#818cf8"} strokeWidth={"0.6"}>
            </rect>
            <rect x={"60"} y={"20"} width={"140"} height={"140"} rx={"0"} fill={"none"} stroke={"#4f46e5"} strokeWidth={"3.5"}>
            </rect>
            <text x={"130"} y={"14"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"10 cm"}</MathText>
            </text>
            <text x={"52"} y={"95"} textAnchor={"end"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"10 cm"}</MathText>
            </text>
            <text x={"225"} y={"70"} textAnchor={"start"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"1 dm² = 10 · 10"}</MathText>
            </text>
            <text x={"225"} y={"92"} textAnchor={"start"} fontSize={"15"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"= 100 cm²"}</MathText>
            </text>
            <text x={"225"} y={"120"} textAnchor={"start"} fontSize={"12"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"(1 dm = 10 cm)"}</MathText>
            </text>
          </svg>
        </div>
        <p>
          <MathText>{"Por isso, "}</MathText>
          <b>
            <MathText>{"cada “degrau” entre unidades de área multiplica por 100"}</MathText>
          </b>
          <MathText>{" (e não por 10, como no comprimento):"}</MathText>
        </p>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Unidade"}</MathText>
              </th>
              <th>
                <MathText>{"km²"}</MathText>
              </th>
              <th>
                <MathText>{"hm²"}</MathText>
              </th>
              <th>
                <MathText>{"dam²"}</MathText>
              </th>
              <th>
                <MathText>{"m²"}</MathText>
              </th>
              <th>
                <MathText>{"dm²"}</MathText>
              </th>
              <th>
                <MathText>{"cm²"}</MathText>
              </th>
              <th>
                <MathText>{"mm²"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"Para a direita"}</MathText>
              </td>
              <td colSpan={7}>
                <MathText>{"cada degrau: "}</MathText>
                <b>
                  <MathText>{"× 100"}</MathText>
                </b>
                <MathText>{"  ·  para a esquerda: "}</MathText>
                <b>
                  <MathText>{"÷ 100"}</MathText>
                </b>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Equivalência"}</MathText>
              </th>
              <th>
                <MathText>{"Em números"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"1 m² em cm²"}</MathText>
              </td>
              <td>
                <MathText>{"\\(1 \\text{ m}^2 = 100 \\cdot 100 = 10\\,000 \\text{ cm}^2\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"1 cm² em mm²"}</MathText>
              </td>
              <td>
                <MathText>{"\\(1 \\text{ cm}^2 = 100 \\text{ mm}^2\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"1 km² em m²"}</MathText>
              </td>
              <td>
                <MathText>{"\\(1 \\text{ km}^2 = 1\\,000\\,000 \\text{ m}^2\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"1 hectare (ha) = 1 hm²"}</MathText>
              </td>
              <td>
                <MathText>{"\\(1 \\text{ ha} = 10\\,000 \\text{ m}^2\\) (usado em terrenos rurais)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 3 — Converter 3 m² para cm², e 25 000 cm² para m²"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"m² → cm²: dois degraus para a direita, \\(\\times 100 \\times 100 = \\times 10\\,000\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(3 \\cdot 10\\,000 = 30\\,000 \\text{ cm}^2\\)"}</MathText>
            </div>
            <div>
              <MathText>{"cm² → m²: dois degraus para a esquerda, \\(\\div 10\\,000\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(25\\,000 \\div 10\\,000 = 2{,}5 \\text{ m}^2\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-amber-500 bg-amber-50">
          <b>
            <MathText>{"Dica"}</MathText>
          </b>
          <MathText>{"Quando as medidas dos lados estão em unidades diferentes, converta "}</MathText>
          <b>
            <MathText>{"os lados"}</MathText>
          </b>
          <MathText>{" para a mesma unidade "}</MathText>
          <u>
            <MathText>{"antes"}</MathText>
          </u>
          <MathText>{" de multiplicar. É mais seguro do que converter a área depois."}</MathText>
        </div>
        <h3>
          <MathText>{"8.4 Paralelogramo"}</MathText>
        </h3>
        <p>
          <MathText>{"O paralelogramo tem os lados opostos paralelos, mas é “torto”. Veja o truque: "}</MathText>
          <b>
            <MathText>{"corte"}</MathText>
          </b>
          <MathText>{" o triângulo da ponta e "}</MathText>
          <b>
            <MathText>{"cole"}</MathText>
          </b>
          <MathText>{" do outro lado. O paralelogramo vira um "}</MathText>
          <b>
            <MathText>{"retângulo"}</MathText>
          </b>
          <MathText>{" com a mesma base e a mesma altura!"}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 130"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Um paralelogramo vira um retângulo ao mover o triângulo rosa de um lado para o outro"}>
            <polygon points={"10,95 130,95 170,25 50,25"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polygon>
            <polygon points={"10,95 50,95 50,25"} fill={"#fce7f3"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"50"} y1={"25"} x2={"50"} y2={"95"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <polyline points={"41,95 41,86 50,86"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <text x={"90"} y={"115"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"base b"}</MathText>
            </text>
            <text x={"57"} y={"64"} textAnchor={"start"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"h"}</MathText>
            </text>
            <text x={"90"} y={"15"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#475569"}>
              <MathText>{"paralelogramo"}</MathText>
            </text>
            <polygon points={"280,95 400,95 400,25 280,25"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polygon>
            <polygon points={"360,95 400,95 400,25"} fill={"#fce7f3"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinejoin={"round"}>
            </polygon>
            <polyline points={"391,95 391,86 400,86"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <text x={"340"} y={"115"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"base b"}</MathText>
            </text>
            <text x={"285"} y={"64"} textAnchor={"start"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"h"}</MathText>
            </text>
            <text x={"320"} y={"15"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#475569"}>
              <MathText>{"retângulo"}</MathText>
            </text>
            <text x={"205"} y={"62"} textAnchor={"middle"} fontSize={"26"} fontWeight={"700"} fill={"#f59e0b"}>
              <MathText>{"➜"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Cortando o triângulo rosa e movendo-o, o paralelogramo vira um retângulo de mesma base e mesma altura."}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ A_{\\text{paralelogramo}} = b \\cdot h \\]"}</MathText>
        </div>
        <p>
          <MathText>{"Atenção: "}</MathText>
          <b>
            <MathText>{"\\(h\\) é a altura"}</MathText>
          </b>
          <MathText>{", a distância "}</MathText>
          <u>
            <MathText>{"perpendicular"}</MathText>
          </u>
          <MathText>{" entre as duas bases, e "}</MathText>
          <b>
            <MathText>{"não"}</MathText>
          </b>
          <MathText>{" o lado inclinado."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 300 128"} className="w-[300px] max-w-full h-auto" role={"img"} aria-label={"Paralelogramo com base 10, altura 6 e lado inclinado 7, que não é altura"}>
            <polygon points={"20,95 150,95 200,25 70,25"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"70"} y1={"25"} x2={"70"} y2={"95"} stroke={"#ec4899"} strokeWidth={"3"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <polyline points={"61,95 61,86 70,86"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <text x={"82"} y={"64"} textAnchor={"start"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"h = 6"}</MathText>
            </text>
            <text x={"85"} y={"117"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"b = 10"}</MathText>
            </text>
            <text x={"190"} y={"72"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#b91c1c"}>
              <MathText>{"lado 7 ✗"}</MathText>
            </text>
            <text x={"110"} y={"15"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"A = 10 · 6 = 60 cm²"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"A altura é a distância perpendicular entre as bases, não o lado inclinado."}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 4 — Paralelogramo com base 10 cm, lado inclinado 7 cm e altura 6 cm"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"O lado inclinado (7) "}</MathText>
              <b>
                <MathText>{"não entra"}</MathText>
              </b>
              <MathText>{" na área."}</MathText>
            </div>
            <div>
              <MathText>{"\\(A = b \\cdot h = 10 \\cdot 6 = 60 \\text{ cm}^2\\)"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"8.5 Triângulo"}</MathText>
        </h3>
        <p>
          <MathText>{"Pegue um triângulo e faça uma cópia igual. Gire a cópia (meia-volta) e encaixe: os dois triângulos formam um "}</MathText>
          <b>
            <MathText>{"paralelogramo"}</MathText>
          </b>
          <MathText>{" (ou retângulo). Logo, o triângulo é "}</MathText>
          <b>
            <MathText>{"a metade"}</MathText>
          </b>
          <MathText>{" de um paralelogramo de mesma base e mesma altura:"}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <div className="flex flex-wrap justify-center gap-2">
            <svg viewBox={"0 0 230 110"} className="w-[230px] max-w-full h-auto" role={"img"} aria-label={"Dois triângulos iguais formam um paralelogramo (acutângulo)"}>
              <polygon points={"10,90 130,90 205,25 85,25"} fill={"#fce7f3"} stroke={"#ec4899"} strokeWidth={"2"} strokeLinejoin={"round"}>
              </polygon>
              <polygon points={"10,90 130,90 85,25"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
              </polygon>
              <line x1={"85"} y1={"25"} x2={"85"} y2={"90"} stroke={"#f59e0b"} strokeWidth={"2.5"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
              </line>
              <polyline points={"77,90 77,82 85,82"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
              </polyline>
              <text x={"70"} y={"106"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
                <MathText>{"b"}</MathText>
              </text>
              <text x={"94"} y={"61.5"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#b45309"}>
                <MathText>{"h"}</MathText>
              </text>
              <text x={"110"} y={"12"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#475569"}>
                <MathText>{"acutângulo"}</MathText>
              </text>
            </svg>
            <svg viewBox={"0 0 230 110"} className="w-[230px] max-w-full h-auto" role={"img"} aria-label={"Dois triângulos iguais formam um paralelogramo (retângulo)"}>
              <polygon points={"10,90 130,90 130,25 10,25"} fill={"#fce7f3"} stroke={"#ec4899"} strokeWidth={"2"} strokeLinejoin={"round"}>
              </polygon>
              <polygon points={"10,90 130,90 10,25"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
              </polygon>
              <polyline points={"18,90 18,82 10,82"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
              </polyline>
              <text x={"70"} y={"106"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
                <MathText>{"b"}</MathText>
              </text>
              <text x={"19"} y={"61.5"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#b45309"}>
                <MathText>{"h"}</MathText>
              </text>
              <text x={"110"} y={"12"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#475569"}>
                <MathText>{"retângulo"}</MathText>
              </text>
            </svg>
            <svg viewBox={"0 0 230 110"} className="w-[230px] max-w-full h-auto" role={"img"} aria-label={"Dois triângulos iguais formam um paralelogramo (obtusângulo)"}>
              <polygon points={"60,90 170,90 135,25 25,25"} fill={"#fce7f3"} stroke={"#ec4899"} strokeWidth={"2"} strokeLinejoin={"round"}>
              </polygon>
              <polygon points={"60,90 170,90 25,25"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
              </polygon>
              <line x1={"60"} y1={"90"} x2={"25"} y2={"90"} stroke={"#94a3b8"} strokeWidth={"2"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
              </line>
              <line x1={"25"} y1={"25"} x2={"25"} y2={"90"} stroke={"#f59e0b"} strokeWidth={"2.5"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
              </line>
              <polyline points={"33,90 33,82 25,82"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
              </polyline>
              <text x={"140"} y={"106"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
                <MathText>{"b"}</MathText>
              </text>
              <text x={"34"} y={"61.5"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#b45309"}>
                <MathText>{"h"}</MathText>
              </text>
              <text x={"110"} y={"12"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#475569"}>
                <MathText>{"obtusângulo"}</MathText>
              </text>
            </svg>
          </div>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Dois triângulos iguais (azul + rosa) formam um paralelogramo. Logo, cada triângulo é a metade dele."}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ A_{\\text{triângulo}} = \\dfrac{b \\cdot h}{2} \\]"}</MathText>
        </div>
        <p>
          <MathText>{"Funciona para "}</MathText>
          <b>
            <MathText>{"qualquer"}</MathText>
          </b>
          <MathText>{" triângulo, desde que \\(h\\) seja a altura relativa à base escolhida."}</MathText>
        </p>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 5 — Triângulo com base 10 cm e altura 6 cm"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(A = \\dfrac{b \\cdot h}{2} = \\dfrac{10 \\cdot 6}{2} = \\dfrac{60}{2} = 30 \\text{ cm}^2\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 6 — Triângulo retângulo com catetos 6 cm e 8 cm"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Num triângulo retângulo, um cateto é a "}</MathText>
              <b>
                <MathText>{"altura"}</MathText>
              </b>
              <MathText>{" do outro!"}</MathText>
            </div>
            <div>
              <MathText>{"\\(A = \\dfrac{6 \\cdot 8}{2} = \\dfrac{48}{2} = 24 \\text{ cm}^2\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 7 — Um triângulo tem área 36 cm² e base 9 cm. Qual é a altura?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(\\dfrac{9 \\cdot h}{2} = 36\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(9 \\cdot h = 36 \\cdot 2 = 72\\)  (desfaz o ÷ 2)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(h = 72 \\div 9 = 8 \\text{ cm}\\)"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"8.6 Trapézio"}</MathText>
        </h3>
        <p>
          <MathText>{"Dois trapézios iguais, um virado de cabeça para baixo, formam um "}</MathText>
          <b>
            <MathText>{"paralelogramo"}</MathText>
          </b>
          <MathText>{" cuja base é \\(B + b\\) (base maior mais base menor). O trapézio é a metade dele:"}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 250 135"} className="w-[250px] max-w-full h-auto" role={"img"} aria-label={"Dois trapézios iguais formam um paralelogramo de base B mais b"}>
            <polygon points={"10,90 130,90 100,30 40,30"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polygon>
            <polygon points={"220,30 190,90 130,90 100,30"} fill={"#fce7f3"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"40"} y1={"30"} x2={"40"} y2={"90"} stroke={"#f59e0b"} strokeWidth={"2.5"} strokeDasharray={"5 4"} strokeLinecap={"round"}>
            </line>
            <polyline points={"32,90 32,82 40,82"} fill={"none"} stroke={"#1e293b"} strokeWidth={"1.8"}>
            </polyline>
            <text x={"70"} y={"112"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"B"}</MathText>
            </text>
            <text x={"70"} y={"22"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"b"}</MathText>
            </text>
            <text x={"47"} y={"64"} textAnchor={"start"} fontSize={"14"} fontWeight={"700"} fill={"#b45309"}>
              <MathText>{"h"}</MathText>
            </text>
            <text x={"160"} y={"112"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"B"}</MathText>
            </text>
            <text x={"160"} y={"22"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"b"}</MathText>
            </text>
            <text x={"120"} y={"128"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#475569"}>
              <MathText>{"base total: B + b"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Dois trapézios iguais (azul e rosa) formam um paralelogramo de base B + b; cada trapézio é a metade."}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ A_{\\text{trapézio}} = \\dfrac{(B + b) \\cdot h}{2} \\]"}</MathText>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 8 — Trapézio com bases 10 cm e 6 cm e altura 4 cm"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Primeiro o que está no parêntese: \\(10 + 6 = 16\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(A = \\dfrac{16 \\cdot 4}{2} = \\dfrac{64}{2} = 32 \\text{ cm}^2\\)"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"8.7 Losango (extra)"}</MathText>
        </h3>
        <p>
          <MathText>{"No losango, as "}</MathText>
          <b>
            <MathText>{"diagonais"}</MathText>
          </b>
          <MathText>{" (maior \\(D\\) e menor \\(d\\)) cruzam-se em ângulo reto e o losango é "}</MathText>
          <b>
            <MathText>{"metade do retângulo"}</MathText>
          </b>
          <MathText>{" \\(D \\times d\\) que o envolve: \\(A = \\dfrac{D \\cdot d}{2}\\). Com \\(D = 8\\) cm e \\(d = 6\\) cm: \\(A = \\dfrac{8 \\cdot 6}{2} = 24 \\text{ cm}^2\\)."}</MathText>
        </p>
        <h3>
          <MathText>{"8.8 Figuras compostas"}</MathText>
        </h3>
        <p>
          <MathText>{"Figura difícil? "}</MathText>
          <b>
            <MathText>{"Divida"}</MathText>
          </b>
          <MathText>{" em figuras conhecidas e some as áreas, ou "}</MathText>
          <b>
            <MathText>{"complete"}</MathText>
          </b>
          <MathText>{" até virar um retângulo e depois subtraia o que sobrou."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 178"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Figura em L vista como um retângulo de 10 por 8 menos um recorte de 4 por 3"}>
            <polygon points={"30,150 200,150 200,65 132,65 132,14 30,14"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinejoin={"round"}>
            </polygon>
            <polygon points={"132,14 200,14 200,65 132,65"} fill={"#fce7f3"} stroke={"#ec4899"} strokeWidth={"2"} strokeLinejoin={"round"} strokeDasharray={"5 4"}>
            </polygon>
            <text x={"166"} y={"44.5"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"recorte"}</MathText>
            </text>
            <text x={"115"} y={"168"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"10"}</MathText>
            </text>
            <text x={"22"} y={"82"} textAnchor={"end"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"8"}</MathText>
            </text>
            <text x={"208"} y={"107.5"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"5"}</MathText>
            </text>
            <text x={"166"} y={"8"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"4"}</MathText>
            </text>
            <text x={"126"} y={"44.5"} textAnchor={"end"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"3"}</MathText>
            </text>
            <text x={"250"} y={"60"} textAnchor={"start"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"Área = 10 · 8 − 4 · 3"}</MathText>
            </text>
            <text x={"250"} y={"84"} textAnchor={"start"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"= 80 − 12"}</MathText>
            </text>
            <text x={"250"} y={"108"} textAnchor={"start"} fontSize={"15"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"= 68 cm²"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Truque: complete a figura até virar um retângulo e depois subtraia o que sobrou."}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 9 — Área da figura em L (mesma figura da lição 7)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <u>
                <MathText>{"Jeito 1 (subtrair):"}</MathText>
              </u>
              <MathText>{" retângulo grande − recorte"}</MathText>
            </div>
            <div>
              <MathText>{"\\(A = 10 \\cdot 8 - 4 \\cdot 3 = 80 - 12 = 68 \\text{ cm}^2\\)"}</MathText>
            </div>
            <div>
              <u>
                <MathText>{"Jeito 2 (somar):"}</MathText>
              </u>
              <MathText>{" corte em dois retângulos"}</MathText>
            </div>
            <div>
              <MathText>{"embaixo: \\(10 \\cdot 5 = 50\\)   em cima: \\(6 \\cdot 3 = 18\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(A = 50 + 18 = 68 \\text{ cm}^2\\) ✓ (os dois jeitos concordam)"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"8.9 Problemas com área"}</MathText>
        </h3>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 10 — Uma sala de 5 m por 4 m será forrada com pisos quadrados de 50 cm de lado. Quantos pisos?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Passo 1: mesma unidade. 50 cm = 0,5 m"}</MathText>
            </div>
            <div>
              <MathText>{"Área da sala: \\(5 \\cdot 4 = 20 \\text{ m}^2\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Área de um piso: \\(0{,}5 \\cdot 0{,}5 = 0{,}25 \\text{ m}^2\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Quantidade: \\(20 \\div 0{,}25 = 80\\) pisos"}</MathText>
            </div>
            <div>
              <MathText>{"Conferência: \\(5 \\div 0{,}5 = 10\\) por fileira e \\(4 \\div 0{,}5 = 8\\) fileiras: \\(10 \\cdot 8 = 80\\) ✓"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 11 — Uma parede de 6 m por 2,5 m será pintada. Cada lata rende 10 m². Quantas latas são necessárias?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Área: \\(6 \\cdot 2{,}5 = 15 \\text{ m}^2\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(15 \\div 10 = 1{,}5\\) latas"}</MathText>
            </div>
            <div>
              <MathText>{"Não se compra meia lata: são necessárias "}</MathText>
              <b>
                <MathText>{"2 latas"}</MathText>
              </b>
              <MathText>{" (arredonde para cima)"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"8.10 Mesmo perímetro, áreas diferentes"}</MathText>
        </h3>
        <p>
          <MathText>{"Com o mesmo contorno (20 cm) dá para fazer retângulos “magros” ou “gordos”. Quanto mais parecido com um quadrado, "}</MathText>
          <b>
            <MathText>{"maior a área"}</MathText>
          </b>
          <MathText>{":"}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 155"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Cinco retângulos de perímetro 20 centímetros com áreas diferentes: 9, 16, 21, 24 e 25"}>
            <rect x={"12"} y={"20"} width={"10"} height={"90"} rx={"0"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"}>
            </rect>
            <text x={"17"} y={"128"} textAnchor={"middle"} fontSize={"11"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"1×9"}</MathText>
            </text>
            <text x={"17"} y={"144"} textAnchor={"middle"} fontSize={"11"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"9 cm²"}</MathText>
            </text>
            <rect x={"44"} y={"30"} width={"20"} height={"80"} rx={"0"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"}>
            </rect>
            <text x={"54"} y={"128"} textAnchor={"middle"} fontSize={"11"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"2×8"}</MathText>
            </text>
            <text x={"54"} y={"144"} textAnchor={"middle"} fontSize={"11"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"16 cm²"}</MathText>
            </text>
            <rect x={"86"} y={"40"} width={"30"} height={"70"} rx={"0"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"}>
            </rect>
            <text x={"101"} y={"128"} textAnchor={"middle"} fontSize={"11"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"3×7"}</MathText>
            </text>
            <text x={"101"} y={"144"} textAnchor={"middle"} fontSize={"11"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"21 cm²"}</MathText>
            </text>
            <rect x={"138"} y={"50"} width={"40"} height={"60"} rx={"0"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"}>
            </rect>
            <text x={"158"} y={"128"} textAnchor={"middle"} fontSize={"11"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"4×6"}</MathText>
            </text>
            <text x={"158"} y={"144"} textAnchor={"middle"} fontSize={"11"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"24 cm²"}</MathText>
            </text>
            <rect x={"200"} y={"60"} width={"50"} height={"50"} rx={"0"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.5"}>
            </rect>
            <text x={"225"} y={"128"} textAnchor={"middle"} fontSize={"11"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"5×5"}</MathText>
            </text>
            <text x={"225"} y={"144"} textAnchor={"middle"} fontSize={"11"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"25 cm²"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Todos têm perímetro 20 cm, mas áreas bem diferentes (desenho em escala reduzida)."}</MathText>
          </div>
        </div>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Figura"}</MathText>
              </th>
              <th>
                <MathText>{"Área"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"Retângulo"}</MathText>
              </td>
              <td>
                <MathText>{"\\(b \\cdot h\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Quadrado"}</MathText>
              </td>
              <td>
                <MathText>{"\\(\\ell^2\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Paralelogramo"}</MathText>
              </td>
              <td>
                <MathText>{"\\(b \\cdot h\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Triângulo"}</MathText>
              </td>
              <td>
                <MathText>{"\\(\\dfrac{b \\cdot h}{2}\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Trapézio"}</MathText>
              </td>
              <td>
                <MathText>{"\\(\\dfrac{(B+b) \\cdot h}{2}\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Losango"}</MathText>
              </td>
              <td>
                <MathText>{"\\(\\dfrac{D \\cdot d}{2}\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Cuidados"}</MathText>
          </b>
          <MathText>{"• Esquecer o "}</MathText>
          <b>
            <MathText>{"÷ 2"}</MathText>
          </b>
          <MathText>{" no triângulo e no trapézio."}</MathText>
          <br />
          <MathText>{"• Usar o "}</MathText>
          <b>
            <MathText>{"lado inclinado"}</MathText>
          </b>
          <MathText>{" no lugar da altura."}</MathText>
          <br />
          <MathText>{"• Responder a área em cm (sem o ²) ou misturar cm com m na mesma conta."}</MathText>
          <br />
          <MathText>{"• Converter m² para cm² multiplicando por 100 (o certo é por "}</MathText>
          <b>
            <MathText>{"10 000"}</MathText>
          </b>
          <MathText>{")."}</MathText>
          <br />
          <MathText>{"• Em problemas de “quantas latas/pisos”, lembrar de "}</MathText>
          <b>
            <MathText>{"arredondar para cima"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </div>
        <GeometryQuickCheck index={16} />
        <GeometryQuickCheck index={17} />
        <GeometryQuickCheck index={18} />
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-gotab={"laboratorio"}>
          <MathText>{"🔬 Experimento 3: perímetro e área"}</MathText>
        </button>
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-gotab={"ferramentas"}>
          <MathText>{"🧮 Conversor de unidades e área"}</MathText>
        </button>
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto={"9"}>
          <MathText>{"✏️ Fazer os exercícios do nível 9"}</MathText>
        </button>
      </article>
      <article className="geometry-basica-lesson bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_.lesson-tag]:text-[.7rem] [&_.lesson-tag]:font-extrabold [&_.lesson-tag]:tracking-[.12em] [&_.lesson-tag]:uppercase [&_.lesson-tag]:text-indigo-600 [&_h2]:text-[1.6rem] [&_h2]:font-black [&_h2]:mt-1 [&_h2]:text-slate-800 [&_h3]:font-extrabold [&_h3]:text-lg [&_h3]:mt-7 [&_h3]:text-indigo-800 [&_h4]:mt-4 [&_h4]:font-bold [&_p]:leading-[1.85] [&_p]:text-slate-600 [&_p]:mt-3 [&_ul]:pl-6 [&_ul]:text-slate-600 [&_ul]:leading-[1.85] [&_ul]:mt-2 [&_ul]:list-disc [&_ol]:pl-6 [&_ol]:text-slate-600 [&_ol]:leading-[1.85] [&_ol]:mt-2 [&_ol]:list-decimal [&_li]:mt-1 [&_b]:text-slate-800 [&_strong]:text-slate-800" id={"l9"}>
        <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 9"}</MathText>
        </div>
        <h2>
          <MathText>{"Circunferência e círculo"}</MathText>
        </h2>
        <p>
          <MathText>{"Rodas, moedas, pratos, relógios, pizzas, pistas de corrida. Nem toda figura é feita de segmentos de reta: o "}</MathText>
          <b>
            <MathText>{"círculo"}</MathText>
          </b>
          <MathText>{" é feito de uma curva perfeita, em que todos os pontos estão à "}</MathText>
          <b>
            <MathText>{"mesma distância"}</MathText>
          </b>
          <MathText>{" de um ponto central. Esta lição ensina a medir o contorno e o interior dele."}</MathText>
        </p>
        <h3>
          <MathText>{"9.1 Circunferência x círculo"}</MathText>
        </h3>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 330 162"} className="w-[330px] max-w-full h-auto" role={"img"} aria-label={"Circunferência (apenas a linha) e círculo (a linha e o interior)"}>
            <circle cx={"80"} cy={"65"} r={"48"} fill={"none"} stroke={"#4f46e5"} strokeWidth={"4"}>
            </circle>
            <text x={"80"} y={"135"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"circunferência"}</MathText>
            </text>
            <text x={"80"} y={"152"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"(só a linha)"}</MathText>
            </text>
            <circle cx={"250"} cy={"65"} r={"48"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"4"}>
            </circle>
            <text x={"250"} y={"135"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"círculo"}</MathText>
            </text>
            <text x={"250"} y={"152"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"(a linha e o miolo)"}</MathText>
            </text>
          </svg>
        </div>
        <ul>
          <li>
            <b>
              <MathText>{"Circunferência"}</MathText>
            </b>
            <MathText>{": só a "}</MathText>
            <u>
              <MathText>{"linha"}</MathText>
            </u>
            <MathText>{", o contorno. (Um arame dobrado em volta.)"}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Círculo"}</MathText>
            </b>
            <MathText>{": a linha "}</MathText>
            <u>
              <MathText>{"e"}</MathText>
            </u>
            <MathText>{" todo o miolo. (Uma moeda inteira.)"}</MathText>
          </li>
        </ul>
        <p>
          <MathText>{"Para desenhar uma circunferência use o "}</MathText>
          <b>
            <MathText>{"compasso"}</MathText>
          </b>
          <MathText>{": fixe a ponta seca no centro, abra o compasso na medida desejada e gire."}</MathText>
        </p>
        <h3>
          <MathText>{"9.2 Os elementos"}</MathText>
        </h3>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 560 180"} className="w-[560px] max-w-full h-auto" role={"img"} aria-label={"Circunferência com centro O, raio, diâmetro, corda e arco indicados"}>
            <circle cx={"130"} cy={"90"} r={"70"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3.5"}>
            </circle>
            <line x1={"60"} y1={"90"} x2={"200"} y2={"90"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"130"} y1={"90"} x2={"165"} y2={"29.4"} stroke={"#ec4899"} strokeWidth={"3.5"} strokeLinecap={"round"}>
            </line>
            <line x1={"85"} y1={"36.4"} x2={"193.4"} y2={"60.4"} stroke={"#f59e0b"} strokeWidth={"3.5"} strokeLinecap={"round"}>
            </line>
            <circle cx={"130"} cy={"90"} r={"4"} fill={"#1e293b"}>
            </circle>
            <text x={"126"} y={"108"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"O"}</MathText>
            </text>
            <text x={"168"} y={"86"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"raio"}</MathText>
            </text>
            <text x={"126"} y={"130"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"diâmetro"}</MathText>
            </text>
            <text x={"126"} y={"38"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#b45309"}>
              <MathText>{"corda"}</MathText>
            </text>
            <text x={"214"} y={"35"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#10b981"}>
              <MathText>{"arco"}</MathText>
            </text>
            <path d={"M198.9,57.9 A76,76 0 0 0 143.2,15.2"} fill={"none"} stroke={"#10b981"} strokeWidth={"5"}>
            </path>
            <text x={"300"} y={"60"} textAnchor={"start"} fontSize={"12"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"raio: centro → circunferência"}</MathText>
            </text>
            <text x={"300"} y={"82"} textAnchor={"start"} fontSize={"12"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"diâmetro: passa pelo centro"}</MathText>
            </text>
            <text x={"300"} y={"104"} textAnchor={"start"} fontSize={"12"} fontWeight={"700"} fill={"#b45309"}>
              <MathText>{"corda: liga dois pontos"}</MathText>
            </text>
            <text x={"300"} y={"126"} textAnchor={"start"} fontSize={"12"} fontWeight={"700"} fill={"#10b981"}>
              <MathText>{"arco: pedaço da circunferência"}</MathText>
            </text>
          </svg>
        </div>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Elemento"}</MathText>
              </th>
              <th>
                <MathText>{"O que é"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>
                  <MathText>{"Centro (O)"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"o ponto do meio; todos os pontos da circunferência estão à mesma distância dele"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Raio (r)"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"segmento do centro a qualquer ponto da circunferência"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Diâmetro (d)"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"segmento que passa pelo centro e liga dois pontos da circunferência; é a "}</MathText>
                <b>
                  <MathText>{"maior corda"}</MathText>
                </b>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Corda"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"segmento que liga dois pontos quaisquer da circunferência"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Arco"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"um pedaço da circunferência"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ d = 2 \\cdot r \\qquad r = \\dfrac{d}{2} \\]"}</MathText>
        </div>
        <p className="text-center">
          <MathText>{"O diâmetro é sempre "}</MathText>
          <b>
            <MathText>{"o dobro"}</MathText>
          </b>
          <MathText>{" do raio."}</MathText>
        </p>
        <h3>
          <MathText>{"9.3 O número π (pi)"}</MathText>
        </h3>
        <p>
          <MathText>{"Experimento: pegue uma lata, uma moeda ou uma roda. Meça o "}</MathText>
          <b>
            <MathText>{"contorno"}</MathText>
          </b>
          <MathText>{" com um barbante e depois o "}</MathText>
          <b>
            <MathText>{"diâmetro"}</MathText>
          </b>
          <MathText>{" com a régua. Divida o contorno pelo diâmetro. Qualquer que seja o círculo, o resultado é "}</MathText>
          <b>
            <MathText>{"sempre quase o mesmo número"}</MathText>
          </b>
          <MathText>{": 3,14…"}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 160"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"O comprimento da circunferência equivale a pouco mais de 3 diâmetros"}>
            <circle cx={"52"} cy={"38"} r={"28"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3"}>
            </circle>
            <line x1={"24"} y1={"38"} x2={"80"} y2={"38"} stroke={"#ec4899"} strokeWidth={"2.5"} strokeLinecap={"round"}>
            </line>
            <text x={"52"} y={"42"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"d"}</MathText>
            </text>
            <text x={"120"} y={"42"} textAnchor={"start"} fontSize={"12"} fontWeight={"700"} fill={"#475569"}>
              <MathText>{"← gire o círculo uma volta e “desenrole” a linha:"}</MathText>
            </text>
            <rect x={"20"} y={"92"} width={"56"} height={"26"} rx={"0"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2"}>
            </rect>
            <text x={"48"} y={"110"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"d"}</MathText>
            </text>
            <rect x={"76"} y={"92"} width={"56"} height={"26"} rx={"0"} fill={"#c7d2fe"} stroke={"#4f46e5"} strokeWidth={"2"}>
            </rect>
            <text x={"104"} y={"110"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"d"}</MathText>
            </text>
            <rect x={"132"} y={"92"} width={"56"} height={"26"} rx={"0"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2"}>
            </rect>
            <text x={"160"} y={"110"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"d"}</MathText>
            </text>
            <rect x={"188"} y={"92"} width={"7.8"} height={"26"} rx={"0"} fill={"#fce7f3"} stroke={"#ec4899"} strokeWidth={"2"}>
            </rect>
            <text x={"20"} y={"142"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"3 diâmetros inteiros e mais um pedacinho: C ≈ 3,14 · d"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"O número π (pi) é essa razão: comprimento ÷ diâmetro ≈ 3,14."}</MathText>
          </div>
        </div>
        <p>
          <MathText>{"Esse número tem nome: "}</MathText>
          <b>
            <MathText>{"π (lê-se “pi”)"}</MathText>
          </b>
          <MathText>{". Ele tem infinitas casas decimais e não se repete (3,14159265…). No dia a dia usamos "}</MathText>
          <b>
            <MathText>{"π ≈ 3,14"}</MathText>
          </b>
          <MathText>{" (o símbolo ≈ significa “aproximadamente”)."}</MathText>
        </p>
        <h3>
          <MathText>{"9.4 Comprimento da circunferência"}</MathText>
        </h3>
        <p>
          <MathText>{"Como “contorno ÷ diâmetro = π”, então o contorno é π vezes o diâmetro:"}</MathText>
        </p>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ C = \\pi \\cdot d \\qquad \\text{ou} \\qquad C = 2 \\cdot \\pi \\cdot r \\]"}</MathText>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 1 — Comprimento de uma circunferência de diâmetro 20 cm (use π = 3,14)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(C = \\pi \\cdot d = 3{,}14 \\cdot 20\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(C = 62{,}8 \\text{ cm}\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 2 — Uma roda de bicicleta tem raio 35 cm. Qual é o comprimento do pneu? E quantos metros a bicicleta anda em 10 voltas?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(C = 2 \\cdot \\pi \\cdot r = 2 \\cdot 3{,}14 \\cdot 35\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(2 \\cdot 3{,}14 = 6{,}28\\)  e  \\(6{,}28 \\cdot 35 = 219{,}8 \\text{ cm}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"10 voltas: \\(219{,}8 \\cdot 10 = 2\\,198 \\text{ cm} = 21{,}98 \\text{ m}\\)"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"9.5 Área do círculo"}</MathText>
        </h3>
        <p>
          <MathText>{"Imagine um quadrado de lado \\(2r\\) e, dentro dele, o círculo de raio \\(r\\). O quadrado é feito de 4 quadradinhos de lado \\(r\\) (área \\(r \\cdot r\\) cada). O círculo ocupa um pouco menos que os 4: ocupa “3 quadradinhos e mais um pouquinho”, exatamente "}</MathText>
          <b>
            <MathText>{"π"}</MathText>
          </b>
          <MathText>{" quadradinhos."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 150"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Círculo de raio r dentro de um quadrado de lado 2r"}>
            <rect x={"20"} y={"20"} width={"50"} height={"50"} rx={"0"} fill={"#fef3c7"} stroke={"#94a3b8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"20"} y={"70"} width={"50"} height={"50"} rx={"0"} fill={"#fde68a"} stroke={"#94a3b8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"70"} y={"20"} width={"50"} height={"50"} rx={"0"} fill={"#fde68a"} stroke={"#94a3b8"} strokeWidth={"1.5"}>
            </rect>
            <rect x={"70"} y={"70"} width={"50"} height={"50"} rx={"0"} fill={"#fef3c7"} stroke={"#94a3b8"} strokeWidth={"1.5"}>
            </rect>
            <circle cx={"70"} cy={"70"} r={"50"} fill={"#e0e7ff"} fillOpacity={".8"} stroke={"#4f46e5"} strokeWidth={"3.5"}>
            </circle>
            <rect x={"20"} y={"20"} width={"100"} height={"100"} rx={"0"} fill={"none"} stroke={"#1e293b"} strokeWidth={"2"}>
            </rect>
            <text x={"45"} y={"50"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"r·r"}</MathText>
            </text>
            <text x={"95"} y={"50"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"r·r"}</MathText>
            </text>
            <text x={"45"} y={"100"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"r·r"}</MathText>
            </text>
            <text x={"95"} y={"100"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"r·r"}</MathText>
            </text>
            <text x={"150"} y={"60"} textAnchor={"start"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"O quadrado maior tem 4 quadradinhos"}</MathText>
            </text>
            <text x={"150"} y={"80"} textAnchor={"start"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"de lado r (área 4 · r²)."}</MathText>
            </text>
            <text x={"150"} y={"106"} textAnchor={"start"} fontSize={"12"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"O círculo ocupa um pouco menos:"}</MathText>
            </text>
            <text x={"150"} y={"126"} textAnchor={"start"} fontSize={"15"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"A = 3,14 · r²"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"O círculo cobre “3 quadradinhos de lado r e mais um pouquinho”: A = π · r²."}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ A = \\pi \\cdot r^2 = \\pi \\cdot r \\cdot r \\]"}</MathText>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Primeiro a potência!"}</MathText>
          </b>
          <MathText>{"Em \\(\\pi \\cdot r^2\\), eleve o "}</MathText>
          <b>
            <MathText>{"raio"}</MathText>
          </b>
          <MathText>{" ao quadrado e só depois multiplique por π. Não faça \\((\\pi \\cdot r)^2\\)!"}</MathText>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 3 — Área de um círculo de raio 5 cm (π = 3,14)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(A = \\pi \\cdot r^2 = 3{,}14 \\cdot 5^2\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(5^2 = 25\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(A = 3{,}14 \\cdot 25 = 78{,}5 \\text{ cm}^2\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 4 — Uma pizza tem 30 cm de diâmetro. Qual é a área dela?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Cuidado: 30 é o "}</MathText>
              <b>
                <MathText>{"diâmetro"}</MathText>
              </b>
              <MathText>{". Raio: \\(30 \\div 2 = 15 \\text{ cm}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(A = 3{,}14 \\cdot 15^2 = 3{,}14 \\cdot 225\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(A = 706{,}5 \\text{ cm}^2\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 5 — Uma mesa redonda tem 1,2 m de diâmetro. Qual é a área do tampo?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Raio: \\(1{,}2 \\div 2 = 0{,}6 \\text{ m}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(A = 3{,}14 \\cdot 0{,}6^2 = 3{,}14 \\cdot 0{,}36\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(A = 1{,}1304 \\approx 1{,}13 \\text{ m}^2\\)"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"9.6 Semicírculo"}</MathText>
        </h3>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 135"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Semicírculo com raio e diâmetro indicados"}>
            <path d={"M30,100 A70,70 0 0 1 170,100 Z"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"3.5"}>
            </path>
            <circle cx={"100"} cy={"100"} r={"3"} fill={"#1e293b"}>
            </circle>
            <line x1={"100"} y1={"100"} x2={"100"} y2={"30"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <text x={"110"} y={"70"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"r"}</MathText>
            </text>
            <text x={"100"} y={"118"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"diâmetro d"}</MathText>
            </text>
            <text x={"210"} y={"60"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"perímetro ="}</MathText>
            </text>
            <text x={"210"} y={"80"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"arco (metade de 3,14·d) + d"}</MathText>
            </text>
            <text x={"210"} y={"108"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"área = metade da área"}</MathText>
            </text>
            <text x={"210"} y={"126"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"do círculo"}</MathText>
            </text>
          </svg>
        </div>
        <p>
          <MathText>{"O semicírculo é "}</MathText>
          <b>
            <MathText>{"metade"}</MathText>
          </b>
          <MathText>{" do círculo. Sua área é a metade da do círculo. Mas atenção ao perímetro: é a "}</MathText>
          <b>
            <MathText>{"metade da circunferência"}</MathText>
          </b>
          <u>
            <MathText>{"mais"}</MathText>
          </u>
          <MathText>{" o diâmetro (a parte reta)."}</MathText>
        </p>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 6 — Uma janela em forma de semicírculo tem diâmetro de 2 m. Qual é o perímetro dela?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Circunferência inteira: \\(3{,}14 \\cdot 2 = 6{,}28 \\text{ m}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Metade (parte curva): \\(6{,}28 \\div 2 = 3{,}14 \\text{ m}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Mais a parte reta (o diâmetro): \\(3{,}14 + 2 = 5{,}14 \\text{ m}\\)"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"9.7 Resumo"}</MathText>
        </h3>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Quero…"}</MathText>
              </th>
              <th>
                <MathText>{"Fórmula"}</MathText>
              </th>
              <th>
                <MathText>{"Unidade da resposta"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"comprimento da circunferência"}</MathText>
              </td>
              <td>
                <MathText>{"\\(C = 2 \\pi r\\) ou \\(C = \\pi d\\)"}</MathText>
              </td>
              <td>
                <MathText>{"cm, m (comprimento)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"área do círculo"}</MathText>
              </td>
              <td>
                <MathText>{"\\(A = \\pi r^2\\)"}</MathText>
              </td>
              <td>
                <MathText>{"cm², m² (área)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"diâmetro e raio"}</MathText>
              </td>
              <td>
                <MathText>{"\\(d = 2r\\)"}</MathText>
              </td>
              <td>
                <MathText>{"cm, m"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Cuidados"}</MathText>
          </b>
          <MathText>{"• Confundir "}</MathText>
          <b>
            <MathText>{"raio"}</MathText>
          </b>
          <MathText>{" e "}</MathText>
          <b>
            <MathText>{"diâmetro"}</MathText>
          </b>
          <MathText>{": leia o enunciado com atenção (“diâmetro 30” → raio 15)."}</MathText>
          <br />
          <MathText>{"• Esquecer de elevar o raio ao "}</MathText>
          <b>
            <MathText>{"quadrado"}</MathText>
          </b>
          <MathText>{" na área."}</MathText>
          <br />
          <MathText>{"• Confundir "}</MathText>
          <b>
            <MathText>{"comprimento"}</MathText>
          </b>
          <MathText>{" (em cm) com "}</MathText>
          <b>
            <MathText>{"área"}</MathText>
          </b>
          <MathText>{" (em cm²)."}</MathText>
          <br />
          <MathText>{"• No semicírculo, esquecer de somar o diâmetro ao calcular o perímetro."}</MathText>
        </div>
        <GeometryQuickCheck index={19} />
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto={"11"}>
          <MathText>{"✏️ Fazer os exercícios do nível 11"}</MathText>
        </button>
      </article>
      <article className="geometry-basica-lesson bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_.lesson-tag]:text-[.7rem] [&_.lesson-tag]:font-extrabold [&_.lesson-tag]:tracking-[.12em] [&_.lesson-tag]:uppercase [&_.lesson-tag]:text-indigo-600 [&_h2]:text-[1.6rem] [&_h2]:font-black [&_h2]:mt-1 [&_h2]:text-slate-800 [&_h3]:font-extrabold [&_h3]:text-lg [&_h3]:mt-7 [&_h3]:text-indigo-800 [&_h4]:mt-4 [&_h4]:font-bold [&_p]:leading-[1.85] [&_p]:text-slate-600 [&_p]:mt-3 [&_ul]:pl-6 [&_ul]:text-slate-600 [&_ul]:leading-[1.85] [&_ul]:mt-2 [&_ul]:list-disc [&_ol]:pl-6 [&_ol]:text-slate-600 [&_ol]:leading-[1.85] [&_ol]:mt-2 [&_ol]:list-decimal [&_li]:mt-1 [&_b]:text-slate-800 [&_strong]:text-slate-800" id={"l10"}>
        <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 10"}</MathText>
        </div>
        <h2>
          <MathText>{"Números inteiros e a reta numérica"}</MathText>
        </h2>
        <p>
          <MathText>{"Até aqui você usou números como 0, 1, 2, 3… para contar e medir. Mas existem situações em que “zero” não é o ponto mais baixo: a temperatura pode cair "}</MathText>
          <b>
            <MathText>{"abaixo de zero"}</MathText>
          </b>
          <MathText>{", uma conta pode ficar "}</MathText>
          <b>
            <MathText>{"no vermelho"}</MathText>
          </b>
          <MathText>{", e um prédio pode ter andares "}</MathText>
          <b>
            <MathText>{"abaixo do térreo"}</MathText>
          </b>
          <MathText>{". Para isso existem os "}</MathText>
          <b>
            <MathText>{"números negativos"}</MathText>
          </b>
          <MathText>{". Eles são essenciais na geometria: sem eles não dá para dar coordenadas completas a um ponto no plano (lição 11) nem entender reflexões e rotações (lição 12)."}</MathText>
        </p>
        <h3>
          <MathText>{"10.1 Onde aparecem números negativos?"}</MathText>
        </h3>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Situação"}</MathText>
              </th>
              <th>
                <MathText>{"Positivo (acima de zero)"}</MathText>
              </th>
              <th>
                <MathText>{"Negativo (abaixo de zero)"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"Temperatura"}</MathText>
              </td>
              <td>
                <MathText>{"\\(+8\\ °\\text{C}\\): faz frio, mas está acima do congelamento"}</MathText>
              </td>
              <td>
                <MathText>{"\\(-5\\ °\\text{C}\\): 5 graus abaixo do congelamento"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Dinheiro"}</MathText>
              </td>
              <td>
                <MathText>{"saldo de \\(+R\\$\\,50\\): você tem 50 reais"}</MathText>
              </td>
              <td>
                <MathText>{"saldo de \\(-R\\$\\,20\\): você "}</MathText>
                <b>
                  <MathText>{"deve"}</MathText>
                </b>
                <MathText>{" 20 reais"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Elevador"}</MathText>
              </td>
              <td>
                <MathText>{"andar \\(+3\\): 3 andares acima do térreo"}</MathText>
              </td>
              <td>
                <MathText>{"andar \\(-2\\): 2 andares abaixo (subsolo)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Altitude"}</MathText>
              </td>
              <td>
                <MathText>{"\\(+300\\ \\text{m}\\): acima do nível do mar"}</MathText>
              </td>
              <td>
                <MathText>{"\\(-50\\ \\text{m}\\): abaixo do nível do mar"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Futebol (saldo de gols)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(+4\\): fez 4 gols a mais do que sofreu"}</MathText>
              </td>
              <td>
                <MathText>{"\\(-3\\): sofreu 3 gols a mais do que fez"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <MathText>{"Repare: o "}</MathText>
          <b>
            <MathText>{"zero"}</MathText>
          </b>
          <MathText>{" é o ponto de partida (o “nível do mar”, o “térreo”, o “saldo zerado”). O sinal "}</MathText>
          <b>
            <MathText>{"+"}</MathText>
          </b>
          <MathText>{" ou "}</MathText>
          <b>
            <MathText>{"−"}</MathText>
          </b>
          <MathText>{" diz para que lado e "}</MathText>
          <b>
            <MathText>{"quanto"}</MathText>
          </b>
          <MathText>{" estamos afastados dele. O conjunto formado por \\(\\dots, -3, -2, -1, 0, 1, 2, 3, \\dots\\) chama-se conjunto dos "}</MathText>
          <b>
            <MathText>{"números inteiros"}</MathText>
          </b>
          <MathText>{". Escrever \\(+3\\) é o mesmo que escrever \\(3\\)."}</MathText>
        </p>
        <h3>
          <MathText>{"10.2 A reta numérica"}</MathText>
        </h3>
        <p>
          <MathText>{"Desenhe uma reta, escolha um ponto e chame-o de "}</MathText>
          <b>
            <MathText>{"origem"}</MathText>
          </b>
          <MathText>{" (o zero). Marque pontos igualmente espaçados: para a "}</MathText>
          <b>
            <MathText>{"direita"}</MathText>
          </b>
          <MathText>{" ficam os positivos \\(1, 2, 3, \\dots\\); para a "}</MathText>
          <b>
            <MathText>{"esquerda"}</MathText>
          </b>
          <MathText>{" ficam os negativos \\(-1, -2, -3, \\dots\\)."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 416 104"} className="w-[416px] max-w-full h-auto" role={"img"} aria-label={"Reta numérica de −5 a 5"}>
            <defs>
            </defs>
            <marker id={"m1"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#475569"}>
              </path>
            </marker>
            <line x1={"10.0"} y1={"70.0"} x2={"406.0"} y2={"70.0"} stroke={"#475569"} strokeWidth={"2.5"} strokeLinecap={"round"} markerEnd={"url(#m1)"} markerStart={"url(#m1)"}>
            </line>
            <line x1={"28.0"} y1={"64.0"} x2={"28.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"28.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−5"}</MathText>
            </text>
            <line x1={"64.0"} y1={"64.0"} x2={"64.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"64.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−4"}</MathText>
            </text>
            <line x1={"100.0"} y1={"64.0"} x2={"100.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"100.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−3"}</MathText>
            </text>
            <line x1={"136.0"} y1={"64.0"} x2={"136.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"136.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−2"}</MathText>
            </text>
            <line x1={"172.0"} y1={"64.0"} x2={"172.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"172.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−1"}</MathText>
            </text>
            <line x1={"208.0"} y1={"60.0"} x2={"208.0"} y2={"80.0"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <text x={"208.0"} y={"98.0"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"0"}</MathText>
            </text>
            <line x1={"244.0"} y1={"64.0"} x2={"244.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"244.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"280.0"} y1={"64.0"} x2={"280.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"280.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"316.0"} y1={"64.0"} x2={"316.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"316.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"352.0"} y1={"64.0"} x2={"352.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"352.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"388.0"} y1={"64.0"} x2={"388.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"388.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"5"}</MathText>
            </text>
            <circle cx={"64.0"} cy={"70"} r={"6.5"} fill={"#ec4899"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
            <circle cx={"208.0"} cy={"70"} r={"6.5"} fill={"#f59e0b"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
            <circle cx={"316.0"} cy={"70"} r={"6.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Reta numérica: o zero (laranja) separa os negativos (esquerda, como o −4 em rosa) dos positivos (direita, como o 3 em azul)."}</MathText>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-amber-500 bg-amber-50">
          <b>
            <MathText>{"Regra de ouro da reta"}</MathText>
          </b>
          <MathText>{"Quanto mais à "}</MathText>
          <b>
            <MathText>{"direita"}</MathText>
          </b>
          <MathText>{", "}</MathText>
          <b>
            <MathText>{"maior"}</MathText>
          </b>
          <MathText>{" o número. Quanto mais à "}</MathText>
          <b>
            <MathText>{"esquerda"}</MathText>
          </b>
          <MathText>{", "}</MathText>
          <b>
            <MathText>{"menor"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </div>
        <h3>
          <MathText>{"10.3 Oposto e módulo"}</MathText>
        </h3>
        <p>
          <MathText>{"O "}</MathText>
          <b>
            <MathText>{"oposto"}</MathText>
          </b>
          <MathText>{" (ou simétrico) de um número é o que fica do outro lado do zero, à mesma distância: o oposto de \\(4\\) é \\(-4\\), o oposto de \\(-7\\) é \\(7\\) e o oposto de \\(0\\) é o próprio \\(0\\)."}</MathText>
        </p>
        <p>
          <MathText>{"O "}</MathText>
          <b>
            <MathText>{"módulo"}</MathText>
          </b>
          <MathText>{" (ou valor absoluto) de um número é a sua "}</MathText>
          <b>
            <MathText>{"distância até o zero"}</MathText>
          </b>
          <MathText>{", contada em passos. Escrevemos \\(|\\ \\ |\\). Como distância nunca é negativa, o módulo nunca é negativo."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 416 104"} className="w-[416px] max-w-full h-auto" role={"img"} aria-label={"O oposto de 4 é −4 e os dois estão a 4 passos do zero"}>
            <defs>
            </defs>
            <marker id={"m2"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#475569"}>
              </path>
            </marker>
            <marker id={"m3"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#ec4899"}>
              </path>
            </marker>
            <marker id={"m4"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#4f46e5"}>
              </path>
            </marker>
            <line x1={"10.0"} y1={"70.0"} x2={"406.0"} y2={"70.0"} stroke={"#475569"} strokeWidth={"2.5"} strokeLinecap={"round"} markerEnd={"url(#m2)"} markerStart={"url(#m2)"}>
            </line>
            <line x1={"28.0"} y1={"64.0"} x2={"28.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"28.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−5"}</MathText>
            </text>
            <line x1={"64.0"} y1={"64.0"} x2={"64.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"64.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−4"}</MathText>
            </text>
            <line x1={"100.0"} y1={"64.0"} x2={"100.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"100.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−3"}</MathText>
            </text>
            <line x1={"136.0"} y1={"64.0"} x2={"136.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"136.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−2"}</MathText>
            </text>
            <line x1={"172.0"} y1={"64.0"} x2={"172.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"172.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−1"}</MathText>
            </text>
            <line x1={"208.0"} y1={"60.0"} x2={"208.0"} y2={"80.0"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <text x={"208.0"} y={"98.0"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"0"}</MathText>
            </text>
            <line x1={"244.0"} y1={"64.0"} x2={"244.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"244.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"280.0"} y1={"64.0"} x2={"280.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"280.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"316.0"} y1={"64.0"} x2={"316.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"316.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"352.0"} y1={"64.0"} x2={"352.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"352.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"388.0"} y1={"64.0"} x2={"388.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"388.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"5"}</MathText>
            </text>
            <path d={"M208.0,61 Q136.0,-3.0 64.0,61"} fill={"none"} stroke={"#ec4899"} strokeWidth={"2.6"} markerEnd={"url(#m3)"}>
            </path>
            <text x={"136.0"} y={"23.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"4 passos"}</MathText>
            </text>
            <path d={"M208.0,61 Q280.0,-3.0 352.0,61"} fill={"none"} stroke={"#4f46e5"} strokeWidth={"2.6"} markerEnd={"url(#m4)"}>
            </path>
            <text x={"280.0"} y={"23.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"4 passos"}</MathText>
            </text>
            <circle cx={"64.0"} cy={"70"} r={"6.5"} fill={"#ec4899"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
            <circle cx={"352.0"} cy={"70"} r={"6.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"\\(|4| = 4\\) e \\(|-4| = 4\\): os dois estão a 4 passos do zero."}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ |7| = 7 \\qquad |-7| = 7 \\qquad |0| = 0 \\]"}</MathText>
        </div>
        <h3>
          <MathText>{"10.4 Comparando números inteiros"}</MathText>
        </h3>
        <p>
          <MathText>{"Para comparar, use a reta: "}</MathText>
          <b>
            <MathText>{"o que está mais à direita é maior"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 464 104"} className="w-[464px] max-w-full h-auto" role={"img"} aria-label={"−7 fica à esquerda de −2"}>
            <defs>
            </defs>
            <marker id={"m5"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#475569"}>
              </path>
            </marker>
            <line x1={"10.0"} y1={"70.0"} x2={"454.0"} y2={"70.0"} stroke={"#475569"} strokeWidth={"2.5"} strokeLinecap={"round"} markerEnd={"url(#m5)"} markerStart={"url(#m5)"}>
            </line>
            <line x1={"28.0"} y1={"64.0"} x2={"28.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"28.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−8"}</MathText>
            </text>
            <line x1={"62.0"} y1={"64.0"} x2={"62.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"62.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−7"}</MathText>
            </text>
            <line x1={"96.0"} y1={"64.0"} x2={"96.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"96.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−6"}</MathText>
            </text>
            <line x1={"130.0"} y1={"64.0"} x2={"130.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"130.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−5"}</MathText>
            </text>
            <line x1={"164.0"} y1={"64.0"} x2={"164.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"164.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−4"}</MathText>
            </text>
            <line x1={"198.0"} y1={"64.0"} x2={"198.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"198.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−3"}</MathText>
            </text>
            <line x1={"232.0"} y1={"64.0"} x2={"232.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"232.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−2"}</MathText>
            </text>
            <line x1={"266.0"} y1={"64.0"} x2={"266.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"266.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−1"}</MathText>
            </text>
            <line x1={"300.0"} y1={"60.0"} x2={"300.0"} y2={"80.0"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <text x={"300.0"} y={"98.0"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"0"}</MathText>
            </text>
            <line x1={"334.0"} y1={"64.0"} x2={"334.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"334.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"368.0"} y1={"64.0"} x2={"368.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"368.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"402.0"} y1={"64.0"} x2={"402.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"402.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"436.0"} y1={"64.0"} x2={"436.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"436.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"4"}</MathText>
            </text>
            <circle cx={"62.0"} cy={"70"} r={"6.5"} fill={"#ec4899"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
            <circle cx={"232.0"} cy={"70"} r={"6.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"\\(-7\\) está à esquerda de \\(-2\\), então \\(-7 "}</MathText>
            <MathText>{"<"}</MathText>
            <MathText>{" -2\\)."}</MathText>
          </div>
        </div>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Caso"}</MathText>
              </th>
              <th>
                <MathText>{"Como pensar"}</MathText>
              </th>
              <th>
                <MathText>{"Exemplo"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"positivo × negativo"}</MathText>
              </td>
              <td>
                <MathText>{"todo positivo é maior que todo negativo"}</MathText>
              </td>
              <td>
                <MathText>{"\\(3 > -10\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"zero × negativo"}</MathText>
              </td>
              <td>
                <MathText>{"zero é maior que qualquer negativo"}</MathText>
              </td>
              <td>
                <MathText>{"\\(0 > -1\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"negativo × negativo"}</MathText>
              </td>
              <td>
                <MathText>{"o de "}</MathText>
                <b>
                  <MathText>{"menor módulo"}</MathText>
                </b>
                <MathText>{" é o maior (está mais perto do zero)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(-2 > -7\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Cuidado!"}</MathText>
          </b>
          <MathText>{"\\(-9\\) parece “grande” porque o 9 é grande, mas \\(-9\\) está longe do zero, "}</MathText>
          <b>
            <MathText>{"para a esquerda"}</MathText>
          </b>
          <MathText>{". Então \\(-9 "}</MathText>
          <MathText>{"<"}</MathText>
          <MathText>{" -2\\). Em dívidas: dever 9 reais é "}</MathText>
          <u>
            <MathText>{"pior"}</MathText>
          </u>
          <MathText>{" que dever 2 reais."}</MathText>
        </div>
        <h3>
          <MathText>{"10.5 Somando e subtraindo com a reta"}</MathText>
        </h3>
        <p>
          <MathText>{"Imagine que você é um boneco na reta. Você começa no "}</MathText>
          <b>
            <MathText>{"primeiro número"}</MathText>
          </b>
          <MathText>{" e depois anda:"}</MathText>
        </p>
        <ul>
          <li>
            <b>
              <MathText>{"somar um número positivo"}</MathText>
            </b>
            <MathText>{" = andar para a "}</MathText>
            <b>
              <MathText>{"direita"}</MathText>
            </b>
            <MathText>{";"}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"subtrair um número positivo"}</MathText>
            </b>
            <MathText>{" = andar para a "}</MathText>
            <b>
              <MathText>{"esquerda"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </li>
        </ul>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 1 — Calcule \\(-3 + 5\\)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Comece em \\(-3\\)."}</MathText>
            </div>
            <div>
              <MathText>{"“\\(+5\\)”: ande 5 passos para a direita."}</MathText>
            </div>
            <div>
              <MathText>{"Passou pelo 0 e chegou ao 2."}</MathText>
            </div>
            <div>
              <MathText>{"\\(-3 + 5 = 2\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 416 104"} className="w-[416px] max-w-full h-auto" role={"img"} aria-label={"Começar em −3 e andar 5 para a direita chega em 2"}>
            <defs>
            </defs>
            <marker id={"m6"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#475569"}>
              </path>
            </marker>
            <marker id={"m7"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#4f46e5"}>
              </path>
            </marker>
            <line x1={"10.0"} y1={"70.0"} x2={"406.0"} y2={"70.0"} stroke={"#475569"} strokeWidth={"2.5"} strokeLinecap={"round"} markerEnd={"url(#m6)"} markerStart={"url(#m6)"}>
            </line>
            <line x1={"28.0"} y1={"64.0"} x2={"28.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"28.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−5"}</MathText>
            </text>
            <line x1={"64.0"} y1={"64.0"} x2={"64.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"64.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−4"}</MathText>
            </text>
            <line x1={"100.0"} y1={"64.0"} x2={"100.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"100.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−3"}</MathText>
            </text>
            <line x1={"136.0"} y1={"64.0"} x2={"136.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"136.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−2"}</MathText>
            </text>
            <line x1={"172.0"} y1={"64.0"} x2={"172.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"172.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−1"}</MathText>
            </text>
            <line x1={"208.0"} y1={"60.0"} x2={"208.0"} y2={"80.0"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <text x={"208.0"} y={"98.0"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"0"}</MathText>
            </text>
            <line x1={"244.0"} y1={"64.0"} x2={"244.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"244.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"280.0"} y1={"64.0"} x2={"280.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"280.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"316.0"} y1={"64.0"} x2={"316.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"316.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"352.0"} y1={"64.0"} x2={"352.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"352.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"388.0"} y1={"64.0"} x2={"388.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"388.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"5"}</MathText>
            </text>
            <path d={"M100.0,61 Q190.0,-3.0 280.0,61"} fill={"none"} stroke={"#4f46e5"} strokeWidth={"2.6"} markerEnd={"url(#m7)"}>
            </path>
            <text x={"190.0"} y={"23.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"+5 (para a direita)"}</MathText>
            </text>
            <circle cx={"100.0"} cy={"70"} r={"6.5"} fill={"#ec4899"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
            <circle cx={"280.0"} cy={"70"} r={"6.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
          </svg>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 2 — Calcule \\(2 - 5\\)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Comece em \\(2\\)."}</MathText>
            </div>
            <div>
              <MathText>{"“\\(-5\\)”: ande 5 passos para a esquerda."}</MathText>
            </div>
            <div>
              <MathText>{"Passou pelo 0 e chegou ao \\(-3\\)."}</MathText>
            </div>
            <div>
              <MathText>{"\\(2 - 5 = -3\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 416 104"} className="w-[416px] max-w-full h-auto" role={"img"} aria-label={"Começar em 2 e andar 5 para a esquerda chega em −3"}>
            <defs>
            </defs>
            <marker id={"m8"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#475569"}>
              </path>
            </marker>
            <marker id={"m9"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#ec4899"}>
              </path>
            </marker>
            <line x1={"10.0"} y1={"70.0"} x2={"406.0"} y2={"70.0"} stroke={"#475569"} strokeWidth={"2.5"} strokeLinecap={"round"} markerEnd={"url(#m8)"} markerStart={"url(#m8)"}>
            </line>
            <line x1={"28.0"} y1={"64.0"} x2={"28.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"28.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−5"}</MathText>
            </text>
            <line x1={"64.0"} y1={"64.0"} x2={"64.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"64.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−4"}</MathText>
            </text>
            <line x1={"100.0"} y1={"64.0"} x2={"100.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"100.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−3"}</MathText>
            </text>
            <line x1={"136.0"} y1={"64.0"} x2={"136.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"136.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−2"}</MathText>
            </text>
            <line x1={"172.0"} y1={"64.0"} x2={"172.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"172.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−1"}</MathText>
            </text>
            <line x1={"208.0"} y1={"60.0"} x2={"208.0"} y2={"80.0"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <text x={"208.0"} y={"98.0"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"0"}</MathText>
            </text>
            <line x1={"244.0"} y1={"64.0"} x2={"244.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"244.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"280.0"} y1={"64.0"} x2={"280.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"280.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"316.0"} y1={"64.0"} x2={"316.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"316.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"352.0"} y1={"64.0"} x2={"352.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"352.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"388.0"} y1={"64.0"} x2={"388.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"388.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"5"}</MathText>
            </text>
            <path d={"M280.0,61 Q190.0,-3.0 100.0,61"} fill={"none"} stroke={"#ec4899"} strokeWidth={"2.6"} markerEnd={"url(#m9)"}>
            </path>
            <text x={"190.0"} y={"23.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"−5 (para a esquerda)"}</MathText>
            </text>
            <circle cx={"280.0"} cy={"70"} r={"6.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
            <circle cx={"100.0"} cy={"70"} r={"6.5"} fill={"#ec4899"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
          </svg>
        </div>
        <p>
          <MathText>{"Agora você consegue fazer \\(2 - 5\\), que antes “não existia” nos números naturais!"}</MathText>
        </p>
        <h3>
          <MathText>{"10.6 O modelo das fichas: positivas e negativas"}</MathText>
        </h3>
        <p>
          <MathText>{"Outro jeito de enxergar: imagine fichas \\(+\\) (azuis) e fichas \\(-\\) (rosa). Uma ficha \\(+\\) junto com uma ficha \\(-\\) "}</MathText>
          <b>
            <MathText>{"se anulam"}</MathText>
          </b>
          <MathText>{" (dá zero), como um real que você tem e um real que você deve."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 160"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Três fichas negativas e cinco positivas: sobram duas positivas"}>
            <text x={"210.0"} y={"18.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#475569"}>
              <MathText>{"Fichas de −3 + 5"}</MathText>
            </text>
            <circle cx={"26"} cy={"40"} r={"15"} fill={"#ec4899"} opacity={"0.35"}>
            </circle>
            <text x={"26.0"} y={"46.0"} textAnchor={"middle"} fontSize={"20"} fontWeight={"700"} fill={"#fff"} opacity={"0.35"}>
              <MathText>{"−"}</MathText>
            </text>
            <circle cx={"72"} cy={"40"} r={"15"} fill={"#ec4899"} opacity={"0.35"}>
            </circle>
            <text x={"72.0"} y={"46.0"} textAnchor={"middle"} fontSize={"20"} fontWeight={"700"} fill={"#fff"} opacity={"0.35"}>
              <MathText>{"−"}</MathText>
            </text>
            <circle cx={"118"} cy={"40"} r={"15"} fill={"#ec4899"} opacity={"0.35"}>
            </circle>
            <text x={"118.0"} y={"46.0"} textAnchor={"middle"} fontSize={"20"} fontWeight={"700"} fill={"#fff"} opacity={"0.35"}>
              <MathText>{"−"}</MathText>
            </text>
            <circle cx={"164"} cy={"40"} r={"15"} fill={"#4f46e5"} opacity={"0.35"}>
            </circle>
            <text x={"164.0"} y={"46.0"} textAnchor={"middle"} fontSize={"20"} fontWeight={"700"} fill={"#fff"} opacity={"0.35"}>
              <MathText>{"+"}</MathText>
            </text>
            <circle cx={"210"} cy={"40"} r={"15"} fill={"#4f46e5"} opacity={"0.35"}>
            </circle>
            <text x={"210.0"} y={"46.0"} textAnchor={"middle"} fontSize={"20"} fontWeight={"700"} fill={"#fff"} opacity={"0.35"}>
              <MathText>{"+"}</MathText>
            </text>
            <circle cx={"256"} cy={"40"} r={"15"} fill={"#4f46e5"} opacity={"0.35"}>
            </circle>
            <text x={"256.0"} y={"46.0"} textAnchor={"middle"} fontSize={"20"} fontWeight={"700"} fill={"#fff"} opacity={"0.35"}>
              <MathText>{"+"}</MathText>
            </text>
            <circle cx={"302"} cy={"40"} r={"15"} fill={"#4f46e5"} opacity={"1"}>
            </circle>
            <text x={"302.0"} y={"46.0"} textAnchor={"middle"} fontSize={"20"} fontWeight={"700"} fill={"#fff"} opacity={"1"}>
              <MathText>{"+"}</MathText>
            </text>
            <circle cx={"348"} cy={"40"} r={"15"} fill={"#4f46e5"} opacity={"1"}>
            </circle>
            <text x={"348.0"} y={"46.0"} textAnchor={"middle"} fontSize={"20"} fontWeight={"700"} fill={"#fff"} opacity={"1"}>
              <MathText>{"+"}</MathText>
            </text>
            <path d={"M26,55 Q95.0,89 164,55"} fill={"none"} stroke={"#f59e0b"} strokeWidth={"2"} strokeDasharray={"4 3"}>
            </path>
            <path d={"M72,55 Q141.0,89 210,55"} fill={"none"} stroke={"#f59e0b"} strokeWidth={"2"} strokeDasharray={"4 3"}>
            </path>
            <path d={"M118,55 Q187.0,89 256,55"} fill={"none"} stroke={"#f59e0b"} strokeWidth={"2"} strokeDasharray={"4 3"}>
            </path>
            <text x={"210.0"} y={"100.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#f59e0b"}>
              <MathText>{"cada par (− com +) “se anula” e vira zero"}</MathText>
            </text>
            <circle cx={"302"} cy={"120"} r={"15"} fill={"#4f46e5"}>
            </circle>
            <text x={"302.0"} y={"126.0"} textAnchor={"middle"} fontSize={"20"} fontWeight={"700"} fill={"#fff"}>
              <MathText>{"+"}</MathText>
            </text>
            <circle cx={"348"} cy={"120"} r={"15"} fill={"#4f46e5"}>
            </circle>
            <text x={"348.0"} y={"126.0"} textAnchor={"middle"} fontSize={"20"} fontWeight={"700"} fill={"#fff"}>
              <MathText>{"+"}</MathText>
            </text>
            <text x={"150.0"} y={"126.0"} textAnchor={"end"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"sobraram:"}</MathText>
            </text>
            <text x={"418.0"} y={"126.0"} textAnchor={"start"} fontSize={"17"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"= 2"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"\\(-3 + 5\\): três pares se anulam e sobram 2 fichas positivas, então o resultado é \\(2\\)."}</MathText>
          </div>
        </div>
        <h3>
          <MathText>{"10.7 As regras, passo a passo"}</MathText>
        </h3>
        <div className="grid gap-3 mt-4 md:grid-cols-3 [&>div]:rounded-2xl [&>div]:p-4 [&>div]:text-sm [&>div]:leading-7 [&>div]:text-slate-700">
          <div className="bg-indigo-50">
            <b>
              <MathText>{"Sinais iguais"}</MathText>
            </b>
            <br />
            <MathText>{"Some os módulos e "}</MathText>
            <b>
              <MathText>{"mantenha o sinal"}</MathText>
            </b>
            <MathText>{"."}</MathText>
            <br />
            <MathText>{"\\(3 + 4 = 7\\)"}</MathText>
            <br />
            <MathText>{"\\(-3 + (-4) = -7\\)"}</MathText>
          </div>
          <div className="bg-amber-50">
            <b>
              <MathText>{"Sinais diferentes"}</MathText>
            </b>
            <br />
            <b>
              <MathText>{"Subtraia"}</MathText>
            </b>
            <MathText>{" os módulos (maior menos menor) e use o "}</MathText>
            <b>
              <MathText>{"sinal do número de maior módulo"}</MathText>
            </b>
            <MathText>{"."}</MathText>
            <br />
            <MathText>{"\\(-7 + 3 = -4\\)"}</MathText>
          </div>
          <div className="bg-emerald-50">
            <b>
              <MathText>{"Números opostos"}</MathText>
            </b>
            <br />
            <MathText>{"A soma é sempre zero."}</MathText>
            <br />
            <MathText>{"\\(5 + (-5) = 0\\)"}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 3 — Calcule \\(4 + (-6)\\)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Sinais diferentes (\\(+4\\) e \\(-6\\))."}</MathText>
            </div>
            <div>
              <MathText>{"Módulos: \\(4\\) e \\(6\\). Maior menos menor: \\(6 - 4 = 2\\)."}</MathText>
            </div>
            <div>
              <MathText>{"O maior módulo é o do \\(-6\\): o resultado é negativo."}</MathText>
            </div>
            <div>
              <MathText>{"\\(4 + (-6) = -2\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 416 104"} className="w-[416px] max-w-full h-auto" role={"img"} aria-label={"4 mais menos 6 dá −2"}>
            <defs>
            </defs>
            <marker id={"m10"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#475569"}>
              </path>
            </marker>
            <marker id={"m11"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#ec4899"}>
              </path>
            </marker>
            <line x1={"10.0"} y1={"70.0"} x2={"406.0"} y2={"70.0"} stroke={"#475569"} strokeWidth={"2.5"} strokeLinecap={"round"} markerEnd={"url(#m10)"} markerStart={"url(#m10)"}>
            </line>
            <line x1={"28.0"} y1={"64.0"} x2={"28.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"28.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−4"}</MathText>
            </text>
            <line x1={"64.0"} y1={"64.0"} x2={"64.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"64.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−3"}</MathText>
            </text>
            <line x1={"100.0"} y1={"64.0"} x2={"100.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"100.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−2"}</MathText>
            </text>
            <line x1={"136.0"} y1={"64.0"} x2={"136.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"136.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−1"}</MathText>
            </text>
            <line x1={"172.0"} y1={"60.0"} x2={"172.0"} y2={"80.0"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <text x={"172.0"} y={"98.0"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"0"}</MathText>
            </text>
            <line x1={"208.0"} y1={"64.0"} x2={"208.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"208.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"244.0"} y1={"64.0"} x2={"244.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"244.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"280.0"} y1={"64.0"} x2={"280.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"280.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"316.0"} y1={"64.0"} x2={"316.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"316.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"352.0"} y1={"64.0"} x2={"352.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"352.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"5"}</MathText>
            </text>
            <line x1={"388.0"} y1={"64.0"} x2={"388.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"388.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"6"}</MathText>
            </text>
            <path d={"M316.0,61 Q208.0,-3.0 100.0,61"} fill={"none"} stroke={"#ec4899"} strokeWidth={"2.6"} markerEnd={"url(#m11)"}>
            </path>
            <text x={"208.0"} y={"23.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"+(−6): 6 para a esquerda"}</MathText>
            </text>
            <circle cx={"316.0"} cy={"70"} r={"6.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
            <circle cx={"100.0"} cy={"70"} r={"6.5"} fill={"#ec4899"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
          </svg>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-blue-500 bg-blue-50">
          <b>
            <MathText>{"Os parênteses ajudam"}</MathText>
          </b>
          <MathText>{"Escrevemos \\(4 + (-6)\\) para não deixar dois sinais colados. Somar um número negativo é o mesmo que "}</MathText>
          <b>
            <MathText>{"subtrair"}</MathText>
          </b>
          <MathText>{" o seu módulo: \\(4 + (-6) = 4 - 6\\)."}</MathText>
        </div>
        <h3>
          <MathText>{"10.8 Subtração: “subtrair é somar o oposto”"}</MathText>
        </h3>
        <p>
          <MathText>{"Tirar uma "}</MathText>
          <b>
            <MathText>{"dívida"}</MathText>
          </b>
          <MathText>{" de alguém é como dar dinheiro a essa pessoa. Por isso "}</MathText>
          <b>
            <MathText>{"subtrair um número negativo"}</MathText>
          </b>
          <MathText>{" é "}</MathText>
          <b>
            <MathText>{"somar o seu oposto"}</MathText>
          </b>
          <MathText>{":"}</MathText>
        </p>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ a - (-b) = a + b \\]"}</MathText>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 4 — Calcule \\(3 - (-5)\\)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Subtrair \\((-5)\\) é somar o oposto, \\(+5\\)."}</MathText>
            </div>
            <div>
              <MathText>{"\\(3 - (-5) = 3 + 5\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(3 - (-5) = 8\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 452 104"} className="w-[452px] max-w-full h-auto" role={"img"} aria-label={"3 menos menos 5 dá 8"}>
            <defs>
            </defs>
            <marker id={"m12"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#475569"}>
              </path>
            </marker>
            <marker id={"m13"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#4f46e5"}>
              </path>
            </marker>
            <line x1={"10.0"} y1={"70.0"} x2={"442.0"} y2={"70.0"} stroke={"#475569"} strokeWidth={"2.5"} strokeLinecap={"round"} markerEnd={"url(#m12)"} markerStart={"url(#m12)"}>
            </line>
            <line x1={"28.0"} y1={"64.0"} x2={"28.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"28.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−2"}</MathText>
            </text>
            <line x1={"64.0"} y1={"64.0"} x2={"64.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"64.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"−1"}</MathText>
            </text>
            <line x1={"100.0"} y1={"60.0"} x2={"100.0"} y2={"80.0"} stroke={"#ec4899"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <text x={"100.0"} y={"98.0"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"0"}</MathText>
            </text>
            <line x1={"136.0"} y1={"64.0"} x2={"136.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"136.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"172.0"} y1={"64.0"} x2={"172.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"172.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"208.0"} y1={"64.0"} x2={"208.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"208.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"244.0"} y1={"64.0"} x2={"244.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"244.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"280.0"} y1={"64.0"} x2={"280.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"280.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"5"}</MathText>
            </text>
            <line x1={"316.0"} y1={"64.0"} x2={"316.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"316.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"6"}</MathText>
            </text>
            <line x1={"352.0"} y1={"64.0"} x2={"352.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"352.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"7"}</MathText>
            </text>
            <line x1={"388.0"} y1={"64.0"} x2={"388.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"388.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"8"}</MathText>
            </text>
            <line x1={"424.0"} y1={"64.0"} x2={"424.0"} y2={"76.0"} stroke={"#475569"} strokeWidth={"2"} strokeLinecap={"round"}>
            </line>
            <text x={"424.0"} y={"96.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"600"} fill={"#1e293b"}>
              <MathText>{"9"}</MathText>
            </text>
            <path d={"M208.0,61 Q298.0,-3.0 388.0,61"} fill={"none"} stroke={"#4f46e5"} strokeWidth={"2.6"} markerEnd={"url(#m13)"}>
            </path>
            <text x={"298.0"} y={"23.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"3 − (−5): 5 para a direita"}</MathText>
            </text>
            <circle cx={"208.0"} cy={"70"} r={"6.5"} fill={"#ec4899"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
            <circle cx={"388.0"} cy={"70"} r={"6.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
          </svg>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 5 — Calcule \\(-2 - (-7)\\)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(-2 - (-7) = -2 + 7\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Sinais diferentes: \\(7 - 2 = 5\\), e o 7 é positivo."}</MathText>
            </div>
            <div>
              <MathText>{"\\(-2 - (-7) = 5\\)"}</MathText>
            </div>
          </div>
        </div>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Sinais colados"}</MathText>
              </th>
              <th>
                <MathText>{"Vira"}</MathText>
              </th>
              <th>
                <MathText>{"Exemplo"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"\\(+(+\\ )\\) e \\(-(-\\ )\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(+\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(8 - (-3) = 8 + 3\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"\\(+(-\\ )\\) e \\(-(+\\ )\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(-\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(8 + (-3) = 8 - 3\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>
          <MathText>{"10.9 Multiplicação e divisão de inteiros"}</MathText>
        </h3>
        <p>
          <MathText>{"Multiplicar é somar parcelas iguais: \\(3 \\cdot (-2) = (-2) + (-2) + (-2) = -6\\). Observe o padrão na coluna da direita: a cada linha, o primeiro fator diminui 1, e o resultado "}</MathText>
          <b>
            <MathText>{"sobe 2"}</MathText>
          </b>
          <MathText>{":"}</MathText>
        </p>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Conta"}</MathText>
              </th>
              <th>
                <MathText>{"Resultado"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"\\(3 \\cdot (-2)\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(-6\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"\\(2 \\cdot (-2)\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(-4\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"\\(1 \\cdot (-2)\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(-2\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"\\(0 \\cdot (-2)\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(0\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"\\((-1) \\cdot (-2)\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(2\\)  (o padrão manda continuar subindo 2!)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"\\((-2) \\cdot (-2)\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(4\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <MathText>{"É por isso que "}</MathText>
          <b>
            <MathText>{"negativo × negativo dá positivo"}</MathText>
          </b>
          <MathText>{". A regra dos sinais (vale também para a divisão):"}</MathText>
        </p>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Sinais dos números"}</MathText>
              </th>
              <th>
                <MathText>{"Resultado"}</MathText>
              </th>
              <th>
                <MathText>{"Exemplo"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"\\(+\\) e \\(+\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(+\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(4 \\cdot 3 = 12\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"\\(-\\) e \\(-\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(+\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\((-4) \\cdot (-3) = 12\\)   e   \\((-12) \\div (-4) = 3\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"\\(+\\) e \\(-\\) (ou \\(-\\) e \\(+\\))"}</MathText>
              </td>
              <td>
                <MathText>{"\\(-\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(4 \\cdot (-3) = -12\\)   e   \\(12 \\div (-4) = -3\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-amber-500 bg-amber-50">
          <b>
            <MathText>{"Truque para vários fatores"}</MathText>
          </b>
          <MathText>{"Conte quantos fatores são negativos. Quantidade "}</MathText>
          <b>
            <MathText>{"par"}</MathText>
          </b>
          <MathText>{" → resultado positivo. Quantidade "}</MathText>
          <b>
            <MathText>{"ímpar"}</MathText>
          </b>
          <MathText>{" → resultado negativo. Ex.: \\((-2) \\cdot (-3) \\cdot (-1) = -6\\) (três negativos)."}</MathText>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Divisão por zero não existe"}</MathText>
          </b>
          <MathText>{"\\(5 \\div 0\\) não tem resultado. Já \\(0 \\div 5 = 0\\)."}</MathText>
        </div>
        <h3>
          <MathText>{"10.10 Potências com base negativa"}</MathText>
        </h3>
        <p>
          <MathText>{"Potência é multiplicação repetida. O "}</MathText>
          <b>
            <MathText>{"parêntese"}</MathText>
          </b>
          <MathText>{" decide quem é a base:"}</MathText>
        </p>
        <div className="grid gap-3 mt-4 sm:grid-cols-2 [&>div]:rounded-2xl [&>div]:p-4 [&>div]:text-sm [&>div]:leading-7 [&>div]:text-slate-700">
          <div className="bg-emerald-50 border border-emerald-200">
            <b>
              <MathText>{"\\((-3)^2\\)"}</MathText>
            </b>
            <br />
            <MathText>{"A base é \\(-3\\): \\((-3)\\cdot(-3) = \\mathbf{9}\\)."}</MathText>
          </div>
          <div className="bg-red-50 border border-red-200">
            <b>
              <MathText>{"\\(-3^2\\)"}</MathText>
            </b>
            <br />
            <MathText>{"A base é só o 3; o sinal de menos fica de fora: \\(-(3\\cdot3) = \\mathbf{-9}\\)."}</MathText>
          </div>
        </div>
        <p>
          <MathText>{"Base negativa com expoente "}</MathText>
          <b>
            <MathText>{"par"}</MathText>
          </b>
          <MathText>{" dá resultado "}</MathText>
          <b>
            <MathText>{"positivo"}</MathText>
          </b>
          <MathText>{" (\\((-2)^4 = 16\\)); com expoente "}</MathText>
          <b>
            <MathText>{"ímpar"}</MathText>
          </b>
          <MathText>{" dá "}</MathText>
          <b>
            <MathText>{"negativo"}</MathText>
          </b>
          <MathText>{" (\\((-2)^3 = -8\\))."}</MathText>
        </p>
        <h3>
          <MathText>{"10.11 Expressões com várias operações"}</MathText>
        </h3>
        <p>
          <MathText>{"A ordem é a mesma de sempre: "}</MathText>
          <b>
            <MathText>{"parênteses → potências → × e ÷ → + e −"}</MathText>
          </b>
          <MathText>{". Os sinais só exigem atenção extra."}</MathText>
        </p>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 6 — Calcule \\(-2 + 3 \\cdot (-4) - (-5)\\)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"1º a multiplicação: \\(3 \\cdot (-4) = -12\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(-2 + (-12) - (-5)\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Tire os parênteses: \\(-2 - 12 + 5\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(-2 - 12 = -14\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(-14 + 5 = -9\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 7 — Calcule \\((-3)^2 - 2 \\cdot (4 - 7)\\)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Parênteses: \\(4 - 7 = -3\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Potência: \\((-3)^2 = 9\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(9 - 2 \\cdot (-3)\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Multiplicação: \\(2 \\cdot (-3) = -6\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(9 - (-6) = 9 + 6 = 15\\)"}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"10.12 Problemas de interpretação"}</MathText>
        </h3>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"PROBLEMA 1 — Saldo bancário"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"“Carla tinha R$ 40 na conta. Pagou uma conta de R$ 75. Qual o novo saldo?”"}</MathText>
            </div>
            <div>
              <MathText>{"Tinha: \\(+40\\). Pagou (saiu dinheiro): \\(-75\\)."}</MathText>
            </div>
            <div>
              <MathText>{"\\(40 - 75 = -35\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Saldo: \\(-R\\$\\,35\\). Carla ficou devendo 35 reais."}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"PROBLEMA 2 — Temperatura"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"“De manhã fazia \\(-3\\ °\\text{C}\\). À tarde subiu 9 graus. E à noite caiu 7 graus. Qual a temperatura à noite?”"}</MathText>
            </div>
            <div>
              <MathText>{"Tarde: \\(-3 + 9 = 6\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Noite: \\(6 - 7 = -1\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Resposta: \\(-1\\ °\\text{C}\\)."}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"PROBLEMA 3 — Elevador"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"“O elevador estava no 2º subsolo (\\(-2\\)), subiu 5 andares e depois desceu 4. Em que andar parou?”"}</MathText>
            </div>
            <div>
              <MathText>{"\\(-2 + 5 = 3\\)  (3º andar)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(3 - 4 = -1\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Parou no 1º subsolo (\\(-1\\))."}</MathText>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Erros comuns"}</MathText>
          </b>
          <ul>
            <li>
              <MathText>{"Achar que \\(-9 > -2\\) porque 9 é maior que 2."}</MathText>
            </li>
            <li>
              <MathText>{"Esquecer que \\(-(-5) = +5\\)."}</MathText>
            </li>
            <li>
              <MathText>{"Confundir \\(-3^2\\) (que vale \\(-9\\)) com \\((-3)^2\\) (que vale \\(9\\))."}</MathText>
            </li>
            <li>
              <MathText>{"Aplicar “menos com menos dá mais” na "}</MathText>
              <b>
                <MathText>{"soma"}</MathText>
              </b>
              <MathText>{": \\(-3 + (-4)\\) é \\(-7\\), não \\(+7\\). A regra é só para "}</MathText>
              <b>
                <MathText>{"multiplicação e divisão"}</MathText>
              </b>
              <MathText>{" (e para sinais colados)."}</MathText>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-amber-500 bg-amber-50">
          <b>
            <MathText>{"Treine à vontade"}</MathText>
          </b>
          <MathText>{"Use o "}</MathText>
          <b>
            <MathText>{"Laboratório → Exp. 4"}</MathText>
          </b>
          <MathText>{" (reta numérica) e a calculadora "}</MathText>
          <b>
            <MathText>{"Inteiros com sinais"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </div>
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-gotab={"laboratorio"}>
          <MathText>{"🔬 Abrir o laboratório"}</MathText>
        </button>
        <GeometryQuickCheck index={20} />
        <GeometryQuickCheck index={21} />
        <GeometryQuickCheck index={22} />
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto={"12"}>
          <MathText>{"✏️ Fazer os exercícios do nível 12"}</MathText>
        </button>
      </article>
      <article className="geometry-basica-lesson bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_.lesson-tag]:text-[.7rem] [&_.lesson-tag]:font-extrabold [&_.lesson-tag]:tracking-[.12em] [&_.lesson-tag]:uppercase [&_.lesson-tag]:text-indigo-600 [&_h2]:text-[1.6rem] [&_h2]:font-black [&_h2]:mt-1 [&_h2]:text-slate-800 [&_h3]:font-extrabold [&_h3]:text-lg [&_h3]:mt-7 [&_h3]:text-indigo-800 [&_h4]:mt-4 [&_h4]:font-bold [&_p]:leading-[1.85] [&_p]:text-slate-600 [&_p]:mt-3 [&_ul]:pl-6 [&_ul]:text-slate-600 [&_ul]:leading-[1.85] [&_ul]:mt-2 [&_ul]:list-disc [&_ol]:pl-6 [&_ol]:text-slate-600 [&_ol]:leading-[1.85] [&_ol]:mt-2 [&_ol]:list-decimal [&_li]:mt-1 [&_b]:text-slate-800 [&_strong]:text-slate-800" id={"l11"}>
        <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 11"}</MathText>
        </div>
        <h2>
          <MathText>{"Plano cartesiano"}</MathText>
        </h2>
        <p>
          <MathText>{"Como você explicaria a um amigo onde fica um ponto em uma folha? “Mais ou menos no meio” não serve. Em um mapa, no jogo de "}</MathText>
          <b>
            <MathText>{"batalha naval"}</MathText>
          </b>
          <MathText>{", na tela do celular, no GPS: sempre se usam "}</MathText>
          <b>
            <MathText>{"dois números"}</MathText>
          </b>
          <MathText>{" para localizar um ponto. O "}</MathText>
          <b>
            <MathText>{"plano cartesiano"}</MathText>
          </b>
          <MathText>{" (criado pelo matemático francês René Descartes) é o “endereço” de todos os pontos de uma folha. Ele junta duas coisas que você já conhece: a "}</MathText>
          <b>
            <MathText>{"reta numérica"}</MathText>
          </b>
          <MathText>{" e os "}</MathText>
          <b>
            <MathText>{"números inteiros"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-blue-500 bg-blue-50">
          <b>
            <MathText>{"Pense no cinema"}</MathText>
          </b>
          <MathText>{"Para achar seu lugar, o ingresso diz: "}</MathText>
          <b>
            <MathText>{"fileira 4, poltrona 7"}</MathText>
          </b>
          <MathText>{". Dois números, em uma ordem combinada. No plano cartesiano é igual: dois números, em uma ordem combinada, localizam o ponto."}</MathText>
        </div>
        <h3>
          <MathText>{"11.1 Os eixos e a origem"}</MathText>
        </h3>
        <p>
          <MathText>{"O plano é formado por "}</MathText>
          <b>
            <MathText>{"duas retas numéricas que se cruzam em ângulo reto (90°)"}</MathText>
          </b>
          <MathText>{", exatamente no zero de cada uma:"}</MathText>
        </p>
        <ul>
          <li>
            <MathText>{"o "}</MathText>
            <b>
              <MathText>{"eixo x"}</MathText>
            </b>
            <MathText>{" (ou eixo das abscissas) é a reta "}</MathText>
            <b>
              <MathText>{"horizontal"}</MathText>
            </b>
            <MathText>{";"}</MathText>
          </li>
          <li>
            <MathText>{"o "}</MathText>
            <b>
              <MathText>{"eixo y"}</MathText>
            </b>
            <MathText>{" (ou eixo das ordenadas) é a reta "}</MathText>
            <b>
              <MathText>{"vertical"}</MathText>
            </b>
            <MathText>{";"}</MathText>
          </li>
          <li>
            <MathText>{"o ponto onde se cruzam é a "}</MathText>
            <b>
              <MathText>{"origem"}</MathText>
            </b>
            <MathText>{", chamada de "}</MathText>
            <b>
              <MathText>{"O"}</MathText>
            </b>
            <MathText>{", com valor zero nos dois eixos."}</MathText>
          </li>
        </ul>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 396 328"} className="w-[396px] max-w-full h-auto" role={"img"} aria-label={"Eixos x e y e a origem O"}>
            <marker id={"m14"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#334155"}>
              </path>
            </marker>
            <line x1={"28.0"} y1={"28.0"} x2={"28.0"} y2={"300.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"62.0"} y1={"28.0"} x2={"62.0"} y2={"300.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"96.0"} y1={"28.0"} x2={"96.0"} y2={"300.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"130.0"} y1={"28.0"} x2={"130.0"} y2={"300.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"164.0"} y1={"28.0"} x2={"164.0"} y2={"300.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"198.0"} y1={"28.0"} x2={"198.0"} y2={"300.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"232.0"} y1={"28.0"} x2={"232.0"} y2={"300.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"266.0"} y1={"28.0"} x2={"266.0"} y2={"300.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"300.0"} y1={"28.0"} x2={"300.0"} y2={"300.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"334.0"} y1={"28.0"} x2={"334.0"} y2={"300.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"368.0"} y1={"28.0"} x2={"368.0"} y2={"300.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"300.0"} x2={"368.0"} y2={"300.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"266.0"} x2={"368.0"} y2={"266.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"232.0"} x2={"368.0"} y2={"232.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"198.0"} x2={"368.0"} y2={"198.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"164.0"} x2={"368.0"} y2={"164.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"130.0"} x2={"368.0"} y2={"130.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"96.0"} x2={"368.0"} y2={"96.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"62.0"} x2={"368.0"} y2={"62.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"28.0"} x2={"368.0"} y2={"28.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"18.0"} y1={"164.0"} x2={"380.0"} y2={"164.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m14)"}>
            </line>
            <line x1={"198.0"} y1={"310.0"} x2={"198.0"} y2={"16.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m14)"}>
            </line>
            <line x1={"28.0"} y1={"160.0"} x2={"28.0"} y2={"168.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"28.0"} y={"182.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−5"}</MathText>
            </text>
            <line x1={"62.0"} y1={"160.0"} x2={"62.0"} y2={"168.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"62.0"} y={"182.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−4"}</MathText>
            </text>
            <line x1={"96.0"} y1={"160.0"} x2={"96.0"} y2={"168.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"96.0"} y={"182.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−3"}</MathText>
            </text>
            <line x1={"130.0"} y1={"160.0"} x2={"130.0"} y2={"168.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"130.0"} y={"182.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−2"}</MathText>
            </text>
            <line x1={"164.0"} y1={"160.0"} x2={"164.0"} y2={"168.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"164.0"} y={"182.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−1"}</MathText>
            </text>
            <line x1={"232.0"} y1={"160.0"} x2={"232.0"} y2={"168.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"232.0"} y={"182.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"266.0"} y1={"160.0"} x2={"266.0"} y2={"168.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"266.0"} y={"182.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"300.0"} y1={"160.0"} x2={"300.0"} y2={"168.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"300.0"} y={"182.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"334.0"} y1={"160.0"} x2={"334.0"} y2={"168.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"334.0"} y={"182.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"368.0"} y1={"160.0"} x2={"368.0"} y2={"168.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"368.0"} y={"182.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <line x1={"194.0"} y1={"300.0"} x2={"202.0"} y2={"300.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"189.0"} y={"304.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−4"}</MathText>
            </text>
            <line x1={"194.0"} y1={"266.0"} x2={"202.0"} y2={"266.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"189.0"} y={"270.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−3"}</MathText>
            </text>
            <line x1={"194.0"} y1={"232.0"} x2={"202.0"} y2={"232.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"189.0"} y={"236.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−2"}</MathText>
            </text>
            <line x1={"194.0"} y1={"198.0"} x2={"202.0"} y2={"198.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"189.0"} y={"202.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−1"}</MathText>
            </text>
            <line x1={"194.0"} y1={"130.0"} x2={"202.0"} y2={"130.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"189.0"} y={"134.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"194.0"} y1={"96.0"} x2={"202.0"} y2={"96.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"189.0"} y={"100.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"194.0"} y1={"62.0"} x2={"202.0"} y2={"62.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"189.0"} y={"66.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"194.0"} y1={"28.0"} x2={"202.0"} y2={"28.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"189.0"} y={"32.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <text x={"189.0"} y={"180.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"0"}</MathText>
            </text>
            <text x={"376.0"} y={"155.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"x"}</MathText>
              </tspan>
            </text>
            <text x={"210.0"} y={"14.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"y"}</MathText>
              </tspan>
            </text>
            <circle cx={"198.0"} cy={"164.0"} r={"5.5"} fill={"#ec4899"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"188.0"} y={"188.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"O"}</MathText>
            </text>
            <text x={"354.4"} y={"138.5"} textAnchor={"end"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"eixo x"}</MathText>
            </text>
            <text x={"204.8"} y={"38.2"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"eixo y"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"No eixo x os números aumentam para a direita; no eixo y, para cima."}</MathText>
          </div>
        </div>
        <h3>
          <MathText>{"11.2 O par ordenado \\((x, y)\\)"}</MathText>
        </h3>
        <p>
          <MathText>{"Cada ponto recebe um "}</MathText>
          <b>
            <MathText>{"par ordenado"}</MathText>
          </b>
          <MathText>{": dois números entre parênteses, separados por vírgula. O primeiro, \\(x\\), diz "}</MathText>
          <b>
            <MathText>{"quanto andar na horizontal"}</MathText>
          </b>
          <MathText>{"; o segundo, \\(y\\), diz "}</MathText>
          <b>
            <MathText>{"quanto andar na vertical"}</MathText>
          </b>
          <MathText>{". Truque para lembrar: "}</MathText>
          <b>
            <MathText>{"“primeiro o corredor, depois o andar”"}</MathText>
          </b>
          <MathText>{" (primeiro anda para o lado, depois sobe)."}</MathText>
        </p>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ P = (x, y) \\quad\\Rightarrow\\quad \\text{horizontal primeiro, vertical depois} \\]"}</MathText>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"A ordem importa!"}</MathText>
          </b>
          <MathText>{"\\((3, 2)\\) e \\((2, 3)\\) são pontos "}</MathText>
          <b>
            <MathText>{"diferentes"}</MathText>
          </b>
          <MathText>{". Por isso se chama par "}</MathText>
          <u>
            <MathText>{"ordenado"}</MathText>
          </u>
          <MathText>{"."}</MathText>
        </div>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 320 276"} className="w-[320px] max-w-full h-auto" role={"img"} aria-label={"O ponto A (3, 2) é diferente do ponto B (2, 3)"}>
            <marker id={"m15"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#334155"}>
              </path>
            </marker>
            <line x1={"28.0"} y1={"28.0"} x2={"28.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"72.0"} y1={"28.0"} x2={"72.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"116.0"} y1={"28.0"} x2={"116.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"160.0"} y1={"28.0"} x2={"160.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"204.0"} y1={"28.0"} x2={"204.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"248.0"} y1={"28.0"} x2={"248.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"292.0"} y1={"28.0"} x2={"292.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"248.0"} x2={"292.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"204.0"} x2={"292.0"} y2={"204.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"160.0"} x2={"292.0"} y2={"160.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"116.0"} x2={"292.0"} y2={"116.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"72.0"} x2={"292.0"} y2={"72.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"28.0"} x2={"292.0"} y2={"28.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"160.0"} y1={"160.0"} x2={"160.0"} y2={"248.0"} stroke={"#ec4899"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"160.0"} y1={"160.0"} x2={"28.0"} y2={"160.0"} stroke={"#ec4899"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"116.0"} y1={"116.0"} x2={"116.0"} y2={"248.0"} stroke={"#4f46e5"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"116.0"} y1={"116.0"} x2={"28.0"} y2={"116.0"} stroke={"#4f46e5"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"18.0"} y1={"248.0"} x2={"304.0"} y2={"248.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m15)"}>
            </line>
            <line x1={"28.0"} y1={"258.0"} x2={"28.0"} y2={"16.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m15)"}>
            </line>
            <line x1={"72.0"} y1={"244.0"} x2={"72.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"72.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"116.0"} y1={"244.0"} x2={"116.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"116.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"160.0"} y1={"244.0"} x2={"160.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"160.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"204.0"} y1={"244.0"} x2={"204.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"204.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"248.0"} y1={"244.0"} x2={"248.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"248.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <line x1={"292.0"} y1={"244.0"} x2={"292.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"292.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"6"}</MathText>
            </text>
            <line x1={"24.0"} y1={"204.0"} x2={"32.0"} y2={"204.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"208.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"24.0"} y1={"160.0"} x2={"32.0"} y2={"160.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"164.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"24.0"} y1={"116.0"} x2={"32.0"} y2={"116.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"120.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"24.0"} y1={"72.0"} x2={"32.0"} y2={"72.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"76.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"24.0"} y1={"28.0"} x2={"32.0"} y2={"28.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"32.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <text x={"19.0"} y={"264.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"0"}</MathText>
            </text>
            <text x={"300.0"} y={"239.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"x"}</MathText>
              </tspan>
            </text>
            <text x={"40.0"} y={"14.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"y"}</MathText>
              </tspan>
            </text>
            <circle cx={"160.0"} cy={"160.0"} r={"5.5"} fill={"#ec4899"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"190.0"} y={"148.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"A (3, 2)"}</MathText>
            </text>
            <circle cx={"116.0"} cy={"116.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"82.0"} y={"104.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"B (2, 3)"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"A: 3 para a direita, 2 para cima. B: 2 para a direita, 3 para cima."}</MathText>
          </div>
        </div>
        <h3>
          <MathText>{"11.3 Como marcar um ponto no papel quadriculado"}</MathText>
        </h3>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 1 — Marque o ponto \\(P(4, 3)\\)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"1) Desenhe os eixos e marque os números."}</MathText>
            </div>
            <div>
              <MathText>{"2) Comece na origem \\(O\\)."}</MathText>
            </div>
            <div>
              <MathText>{"3) \\(x = 4\\): ande 4 quadradinhos para a direita."}</MathText>
            </div>
            <div>
              <MathText>{"4) \\(y = 3\\): daí suba 3 quadradinhos."}</MathText>
            </div>
            <div>
              <MathText>{"5) Faça um pontinho e escreva \\(P(4, 3)\\)."}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"11.4 Como ler as coordenadas de um ponto"}</MathText>
        </h3>
        <p>
          <MathText>{"É o caminho inverso: do ponto, desça (ou suba) até o "}</MathText>
          <b>
            <MathText>{"eixo x"}</MathText>
          </b>
          <MathText>{" e leia o número; depois vá até o "}</MathText>
          <b>
            <MathText>{"eixo y"}</MathText>
          </b>
          <MathText>{" e leia o outro."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 344 272"} className="w-[344px] max-w-full h-auto" role={"img"} aria-label={"Quatro pontos P, Q, R e S para ler as coordenadas"}>
            <marker id={"m16"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#334155"}>
              </path>
            </marker>
            <line x1={"28.0"} y1={"28.0"} x2={"28.0"} y2={"244.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"64.0"} y1={"28.0"} x2={"64.0"} y2={"244.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"100.0"} y1={"28.0"} x2={"100.0"} y2={"244.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"136.0"} y1={"28.0"} x2={"136.0"} y2={"244.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"172.0"} y1={"28.0"} x2={"172.0"} y2={"244.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"208.0"} y1={"28.0"} x2={"208.0"} y2={"244.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"244.0"} y1={"28.0"} x2={"244.0"} y2={"244.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"280.0"} y1={"28.0"} x2={"280.0"} y2={"244.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"316.0"} y1={"28.0"} x2={"316.0"} y2={"244.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"244.0"} x2={"316.0"} y2={"244.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"208.0"} x2={"316.0"} y2={"208.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"172.0"} x2={"316.0"} y2={"172.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"136.0"} x2={"316.0"} y2={"136.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"100.0"} x2={"316.0"} y2={"100.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"64.0"} x2={"316.0"} y2={"64.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"28.0"} x2={"316.0"} y2={"28.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"18.0"} y1={"244.0"} x2={"328.0"} y2={"244.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m16)"}>
            </line>
            <line x1={"28.0"} y1={"254.0"} x2={"28.0"} y2={"16.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m16)"}>
            </line>
            <line x1={"64.0"} y1={"240.0"} x2={"64.0"} y2={"248.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"64.0"} y={"262.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"100.0"} y1={"240.0"} x2={"100.0"} y2={"248.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"100.0"} y={"262.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"136.0"} y1={"240.0"} x2={"136.0"} y2={"248.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"136.0"} y={"262.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"172.0"} y1={"240.0"} x2={"172.0"} y2={"248.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"172.0"} y={"262.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"208.0"} y1={"240.0"} x2={"208.0"} y2={"248.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"208.0"} y={"262.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <line x1={"244.0"} y1={"240.0"} x2={"244.0"} y2={"248.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"244.0"} y={"262.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"6"}</MathText>
            </text>
            <line x1={"280.0"} y1={"240.0"} x2={"280.0"} y2={"248.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"280.0"} y={"262.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"7"}</MathText>
            </text>
            <line x1={"316.0"} y1={"240.0"} x2={"316.0"} y2={"248.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"316.0"} y={"262.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"8"}</MathText>
            </text>
            <line x1={"24.0"} y1={"208.0"} x2={"32.0"} y2={"208.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"212.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"24.0"} y1={"172.0"} x2={"32.0"} y2={"172.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"176.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"24.0"} y1={"136.0"} x2={"32.0"} y2={"136.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"140.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"24.0"} y1={"100.0"} x2={"32.0"} y2={"100.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"104.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"24.0"} y1={"64.0"} x2={"32.0"} y2={"64.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"68.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <line x1={"24.0"} y1={"28.0"} x2={"32.0"} y2={"28.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"32.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"6"}</MathText>
            </text>
            <text x={"19.0"} y={"260.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"0"}</MathText>
            </text>
            <text x={"324.0"} y={"235.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"x"}</MathText>
              </tspan>
            </text>
            <text x={"40.0"} y={"14.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"y"}</MathText>
              </tspan>
            </text>
            <circle cx={"64.0"} cy={"64.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"64.0"} y={"53.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"P"}</MathText>
            </text>
            <circle cx={"172.0"} cy={"172.0"} r={"5.5"} fill={"#ec4899"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"172.0"} y={"161.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"Q"}</MathText>
            </text>
            <circle cx={"280.0"} cy={"100.0"} r={"5.5"} fill={"#f59e0b"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"280.0"} y={"89.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#f59e0b"}>
              <MathText>{"R"}</MathText>
            </text>
            <circle cx={"244.0"} cy={"244.0"} r={"5.5"} fill={"#10b981"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"244.0"} y={"233.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#10b981"}>
              <MathText>{"S"}</MathText>
            </text>
          </svg>
        </div>
        <p>
          <MathText>{"Lendo a figura: \\(P(1, 5)\\), \\(Q(4, 2)\\), \\(R(7, 4)\\) e \\(S(6, 0)\\). Note que \\(S\\) está "}</MathText>
          <b>
            <MathText>{"em cima do eixo x"}</MathText>
          </b>
          <MathText>{", por isso o seu \\(y\\) é zero."}</MathText>
        </p>
        <h3>
          <MathText>{"11.5 Coordenadas negativas e os quatro quadrantes"}</MathText>
        </h3>
        <p>
          <MathText>{"Os eixos continuam para o outro lado do zero com números "}</MathText>
          <b>
            <MathText>{"negativos"}</MathText>
          </b>
          <MathText>{": para a "}</MathText>
          <b>
            <MathText>{"esquerda"}</MathText>
          </b>
          <MathText>{" no eixo x e para "}</MathText>
          <b>
            <MathText>{"baixo"}</MathText>
          </b>
          <MathText>{" no eixo y. Os eixos dividem o plano em "}</MathText>
          <b>
            <MathText>{"quatro quadrantes"}</MathText>
          </b>
          <MathText>{", numerados no sentido "}</MathText>
          <b>
            <MathText>{"anti-horário"}</MathText>
          </b>
          <MathText>{" (contrário ao dos ponteiros do relógio), começando no canto superior direito."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 416 344"} className="w-[416px] max-w-full h-auto" role={"img"} aria-label={"Os quatro quadrantes do plano cartesiano"}>
            <marker id={"m17"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#334155"}>
              </path>
            </marker>
            <line x1={"28.0"} y1={"28.0"} x2={"28.0"} y2={"316.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"64.0"} y1={"28.0"} x2={"64.0"} y2={"316.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"100.0"} y1={"28.0"} x2={"100.0"} y2={"316.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"136.0"} y1={"28.0"} x2={"136.0"} y2={"316.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"172.0"} y1={"28.0"} x2={"172.0"} y2={"316.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"208.0"} y1={"28.0"} x2={"208.0"} y2={"316.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"244.0"} y1={"28.0"} x2={"244.0"} y2={"316.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"280.0"} y1={"28.0"} x2={"280.0"} y2={"316.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"316.0"} y1={"28.0"} x2={"316.0"} y2={"316.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"352.0"} y1={"28.0"} x2={"352.0"} y2={"316.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"388.0"} y1={"28.0"} x2={"388.0"} y2={"316.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"316.0"} x2={"388.0"} y2={"316.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"280.0"} x2={"388.0"} y2={"280.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"244.0"} x2={"388.0"} y2={"244.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"208.0"} x2={"388.0"} y2={"208.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"172.0"} x2={"388.0"} y2={"172.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"136.0"} x2={"388.0"} y2={"136.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"100.0"} x2={"388.0"} y2={"100.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"64.0"} x2={"388.0"} y2={"64.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"28.0"} x2={"388.0"} y2={"28.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <text x={"298.0"} y={"109.0"} textAnchor={"middle"} fontSize={"30"} fontWeight={"800"} fill={"#4f46e5"} opacity={"0.18"}>
              <MathText>{"I"}</MathText>
            </text>
            <text x={"118.0"} y={"109.0"} textAnchor={"middle"} fontSize={"30"} fontWeight={"800"} fill={"#4f46e5"} opacity={"0.18"}>
              <MathText>{"II"}</MathText>
            </text>
            <text x={"118.0"} y={"253.0"} textAnchor={"middle"} fontSize={"30"} fontWeight={"800"} fill={"#4f46e5"} opacity={"0.18"}>
              <MathText>{"III"}</MathText>
            </text>
            <text x={"298.0"} y={"253.0"} textAnchor={"middle"} fontSize={"30"} fontWeight={"800"} fill={"#4f46e5"} opacity={"0.18"}>
              <MathText>{"IV"}</MathText>
            </text>
            <line x1={"18.0"} y1={"172.0"} x2={"400.0"} y2={"172.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m17)"}>
            </line>
            <line x1={"208.0"} y1={"326.0"} x2={"208.0"} y2={"16.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m17)"}>
            </line>
            <line x1={"28.0"} y1={"168.0"} x2={"28.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"28.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−5"}</MathText>
            </text>
            <line x1={"64.0"} y1={"168.0"} x2={"64.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"64.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−4"}</MathText>
            </text>
            <line x1={"100.0"} y1={"168.0"} x2={"100.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"100.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−3"}</MathText>
            </text>
            <line x1={"136.0"} y1={"168.0"} x2={"136.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"136.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−2"}</MathText>
            </text>
            <line x1={"172.0"} y1={"168.0"} x2={"172.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"172.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−1"}</MathText>
            </text>
            <line x1={"244.0"} y1={"168.0"} x2={"244.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"244.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"280.0"} y1={"168.0"} x2={"280.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"280.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"316.0"} y1={"168.0"} x2={"316.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"316.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"352.0"} y1={"168.0"} x2={"352.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"352.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"388.0"} y1={"168.0"} x2={"388.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"388.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <line x1={"204.0"} y1={"316.0"} x2={"212.0"} y2={"316.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"199.0"} y={"320.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−4"}</MathText>
            </text>
            <line x1={"204.0"} y1={"280.0"} x2={"212.0"} y2={"280.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"199.0"} y={"284.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−3"}</MathText>
            </text>
            <line x1={"204.0"} y1={"244.0"} x2={"212.0"} y2={"244.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"199.0"} y={"248.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−2"}</MathText>
            </text>
            <line x1={"204.0"} y1={"208.0"} x2={"212.0"} y2={"208.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"199.0"} y={"212.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−1"}</MathText>
            </text>
            <line x1={"204.0"} y1={"136.0"} x2={"212.0"} y2={"136.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"199.0"} y={"140.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"204.0"} y1={"100.0"} x2={"212.0"} y2={"100.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"199.0"} y={"104.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"204.0"} y1={"64.0"} x2={"212.0"} y2={"64.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"199.0"} y={"68.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"204.0"} y1={"28.0"} x2={"212.0"} y2={"28.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"199.0"} y={"32.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <text x={"199.0"} y={"188.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"0"}</MathText>
            </text>
            <text x={"396.0"} y={"163.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"x"}</MathText>
              </tspan>
            </text>
            <text x={"220.0"} y={"14.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"y"}</MathText>
              </tspan>
            </text>
            <circle cx={"316.0"} cy={"100.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"316.0"} y={"89.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"A (3, 2)"}</MathText>
            </text>
            <circle cx={"100.0"} cy={"100.0"} r={"5.5"} fill={"#ec4899"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"100.0"} y={"89.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"B (−3, 2)"}</MathText>
            </text>
            <circle cx={"100.0"} cy={"244.0"} r={"5.5"} fill={"#f59e0b"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"100.0"} y={"264.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#f59e0b"}>
              <MathText>{"C (−3, −2)"}</MathText>
            </text>
            <circle cx={"316.0"} cy={"244.0"} r={"5.5"} fill={"#10b981"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"316.0"} y={"264.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#10b981"}>
              <MathText>{"D (3, −2)"}</MathText>
            </text>
          </svg>
        </div>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Quadrante"}</MathText>
              </th>
              <th>
                <MathText>{"Posição"}</MathText>
              </th>
              <th>
                <MathText>{"Sinal de x"}</MathText>
              </th>
              <th>
                <MathText>{"Sinal de y"}</MathText>
              </th>
              <th>
                <MathText>{"Exemplo"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"I"}</MathText>
              </td>
              <td>
                <MathText>{"superior direito"}</MathText>
              </td>
              <td>
                <MathText>{"\\(+\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(+\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\((3, 2)\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"II"}</MathText>
              </td>
              <td>
                <MathText>{"superior esquerdo"}</MathText>
              </td>
              <td>
                <MathText>{"\\(-\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(+\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\((-3, 2)\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"III"}</MathText>
              </td>
              <td>
                <MathText>{"inferior esquerdo"}</MathText>
              </td>
              <td>
                <MathText>{"\\(-\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(-\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\((-3, -2)\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"IV"}</MathText>
              </td>
              <td>
                <MathText>{"inferior direito"}</MathText>
              </td>
              <td>
                <MathText>{"\\(+\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(-\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\((3, -2)\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-blue-500 bg-blue-50">
          <b>
            <MathText>{"Pontos sobre os eixos"}</MathText>
          </b>
          <MathText>{"Um ponto com \\(y = 0\\), como \\((5, 0)\\), está no "}</MathText>
          <b>
            <MathText>{"eixo x"}</MathText>
          </b>
          <MathText>{". Um ponto com \\(x = 0\\), como \\((0, -4)\\), está no "}</MathText>
          <b>
            <MathText>{"eixo y"}</MathText>
          </b>
          <MathText>{". Pontos sobre os eixos "}</MathText>
          <b>
            <MathText>{"não pertencem a nenhum quadrante"}</MathText>
          </b>
          <MathText>{". A origem é \\((0, 0)\\)."}</MathText>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 2 — Onde está o ponto \\((-4, -1)\\)?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(x = -4\\): 4 quadradinhos para a "}</MathText>
              <b>
                <MathText>{"esquerda"}</MathText>
              </b>
              <MathText>{"."}</MathText>
            </div>
            <div>
              <MathText>{"\\(y = -1\\): 1 quadradinho para "}</MathText>
              <b>
                <MathText>{"baixo"}</MathText>
              </b>
              <MathText>{"."}</MathText>
            </div>
            <div>
              <MathText>{"Os dois sinais são negativos: 3º quadrante."}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"11.6 Desenhando figuras no plano"}</MathText>
        </h3>
        <p>
          <MathText>{"Para desenhar um polígono, marque cada vértice e "}</MathText>
          <b>
            <MathText>{"ligue os pontos em ordem"}</MathText>
          </b>
          <MathText>{", voltando ao primeiro."}</MathText>
        </p>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 3 — Desenhe \\(A(1,1)\\), \\(B(5,1)\\), \\(C(5,4)\\) e \\(D(1,4)\\)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Marque os quatro pontos."}</MathText>
            </div>
            <div>
              <MathText>{"Ligue \\(A \\to B \\to C \\to D \\to A\\)."}</MathText>
            </div>
            <div>
              <MathText>{"Saiu um retângulo, com lados paralelos aos eixos."}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 364 276"} className="w-[364px] max-w-full h-auto" role={"img"} aria-label={"Retângulo ABCD desenhado no plano"}>
            <marker id={"m18"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#334155"}>
              </path>
            </marker>
            <line x1={"28.0"} y1={"28.0"} x2={"28.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"72.0"} y1={"28.0"} x2={"72.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"116.0"} y1={"28.0"} x2={"116.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"160.0"} y1={"28.0"} x2={"160.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"204.0"} y1={"28.0"} x2={"204.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"248.0"} y1={"28.0"} x2={"248.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"292.0"} y1={"28.0"} x2={"292.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"336.0"} y1={"28.0"} x2={"336.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"248.0"} x2={"336.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"204.0"} x2={"336.0"} y2={"204.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"160.0"} x2={"336.0"} y2={"160.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"116.0"} x2={"336.0"} y2={"116.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"72.0"} x2={"336.0"} y2={"72.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"28.0"} x2={"336.0"} y2={"28.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <polygon points={"72.0,204.0 248.0,204.0 248.0,72.0 72.0,72.0"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.6"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"18.0"} y1={"248.0"} x2={"348.0"} y2={"248.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m18)"}>
            </line>
            <line x1={"28.0"} y1={"258.0"} x2={"28.0"} y2={"16.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m18)"}>
            </line>
            <line x1={"72.0"} y1={"244.0"} x2={"72.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"72.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"116.0"} y1={"244.0"} x2={"116.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"116.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"160.0"} y1={"244.0"} x2={"160.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"160.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"204.0"} y1={"244.0"} x2={"204.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"204.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"248.0"} y1={"244.0"} x2={"248.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"248.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <line x1={"292.0"} y1={"244.0"} x2={"292.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"292.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"6"}</MathText>
            </text>
            <line x1={"336.0"} y1={"244.0"} x2={"336.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"336.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"7"}</MathText>
            </text>
            <line x1={"24.0"} y1={"204.0"} x2={"32.0"} y2={"204.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"208.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"24.0"} y1={"160.0"} x2={"32.0"} y2={"160.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"164.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"24.0"} y1={"116.0"} x2={"32.0"} y2={"116.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"120.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"24.0"} y1={"72.0"} x2={"32.0"} y2={"72.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"76.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"24.0"} y1={"28.0"} x2={"32.0"} y2={"28.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"32.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <text x={"19.0"} y={"264.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"0"}</MathText>
            </text>
            <text x={"344.0"} y={"239.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"x"}</MathText>
              </tspan>
            </text>
            <text x={"40.0"} y={"14.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"y"}</MathText>
              </tspan>
            </text>
            <circle cx={"72.0"} cy={"204.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"66.0"} y={"226.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"A (1, 1)"}</MathText>
            </text>
            <circle cx={"248.0"} cy={"204.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"254.0"} y={"226.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"B (5, 1)"}</MathText>
            </text>
            <circle cx={"248.0"} cy={"72.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"254.0"} y={"62.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"C (5, 4)"}</MathText>
            </text>
            <circle cx={"72.0"} cy={"72.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"66.0"} y={"62.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"D (1, 4)"}</MathText>
            </text>
          </svg>
        </div>
        <h3>
          <MathText>{"11.7 Medindo segmentos horizontais e verticais"}</MathText>
        </h3>
        <p>
          <MathText>{"Dois pontos com o "}</MathText>
          <b>
            <MathText>{"mesmo y"}</MathText>
          </b>
          <MathText>{" formam um segmento "}</MathText>
          <b>
            <MathText>{"horizontal"}</MathText>
          </b>
          <MathText>{"; com o "}</MathText>
          <b>
            <MathText>{"mesmo x"}</MathText>
          </b>
          <MathText>{", um segmento "}</MathText>
          <b>
            <MathText>{"vertical"}</MathText>
          </b>
          <MathText>{". O comprimento é a "}</MathText>
          <b>
            <MathText>{"distância na reta numérica"}</MathText>
          </b>
          <MathText>{", ou seja, o módulo da diferença entre os números que variam:"}</MathText>
        </p>
        <div className="grid gap-3 mt-4 md:grid-cols-3 [&>div]:rounded-2xl [&>div]:p-4 [&>div]:text-sm [&>div]:leading-7 [&>div]:text-slate-700">
          <div className="bg-indigo-50">
            <b>
              <MathText>{"Horizontal (mesmo \\(y\\))"}</MathText>
            </b>
            <br />
            <MathText>{"\\(\\text{comprimento} = |x_2 - x_1|\\)"}</MathText>
          </div>
          <div className="bg-amber-50">
            <b>
              <MathText>{"Vertical (mesmo \\(x\\))"}</MathText>
            </b>
            <br />
            <MathText>{"\\(\\text{comprimento} = |y_2 - y_1|\\)"}</MathText>
          </div>
          <div className="bg-emerald-50">
            <b>
              <MathText>{"Atalho"}</MathText>
            </b>
            <br />
            <MathText>{"Se os dois números têm o mesmo sinal, subtraia o menor do maior. Se têm sinais diferentes, "}</MathText>
            <b>
              <MathText>{"some os módulos"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </div>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 4 — Comprimento de \\(\\overline{AB}\\) com \\(A(-3, 2)\\) e \\(B(4, 2)\\)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Mesmo \\(y = 2\\): segmento horizontal."}</MathText>
            </div>
            <div>
              <MathText>{"\\(|x_2 - x_1| = |4 - (-3)| = |4 + 3| = 7\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Confira contando: de \\(-3\\) até 0 são 3; de 0 até 4 são 4; total 7. ✓"}</MathText>
            </div>
            <div>
              <MathText>{"\\(AB = 7\\) unidades."}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 380 200"} className="w-[380px] max-w-full h-auto" role={"img"} aria-label={"Segmento horizontal de A (−3, 2) a B (4, 2)"}>
            <marker id={"m19"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#334155"}>
              </path>
            </marker>
            <line x1={"28.0"} y1={"28.0"} x2={"28.0"} y2={"172.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"64.0"} y1={"28.0"} x2={"64.0"} y2={"172.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"100.0"} y1={"28.0"} x2={"100.0"} y2={"172.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"136.0"} y1={"28.0"} x2={"136.0"} y2={"172.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"172.0"} y1={"28.0"} x2={"172.0"} y2={"172.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"208.0"} y1={"28.0"} x2={"208.0"} y2={"172.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"244.0"} y1={"28.0"} x2={"244.0"} y2={"172.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"280.0"} y1={"28.0"} x2={"280.0"} y2={"172.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"316.0"} y1={"28.0"} x2={"316.0"} y2={"172.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"352.0"} y1={"28.0"} x2={"352.0"} y2={"172.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"172.0"} x2={"352.0"} y2={"172.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"136.0"} x2={"352.0"} y2={"136.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"100.0"} x2={"352.0"} y2={"100.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"64.0"} x2={"352.0"} y2={"64.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"28.0"} x2={"352.0"} y2={"28.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"64.0"} y1={"100.0"} x2={"316.0"} y2={"100.0"} stroke={"#ec4899"} strokeWidth={"4.5"} strokeLinecap={"round"}>
            </line>
            <line x1={"64.0"} y1={"100.0"} x2={"64.0"} y2={"172.0"} stroke={"#94a3b8"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"64.0"} y1={"100.0"} x2={"172.0"} y2={"100.0"} stroke={"#94a3b8"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"316.0"} y1={"100.0"} x2={"316.0"} y2={"172.0"} stroke={"#94a3b8"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"316.0"} y1={"100.0"} x2={"172.0"} y2={"100.0"} stroke={"#94a3b8"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"18.0"} y1={"172.0"} x2={"364.0"} y2={"172.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m19)"}>
            </line>
            <line x1={"172.0"} y1={"182.0"} x2={"172.0"} y2={"16.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m19)"}>
            </line>
            <line x1={"28.0"} y1={"168.0"} x2={"28.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"28.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−4"}</MathText>
            </text>
            <line x1={"64.0"} y1={"168.0"} x2={"64.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"64.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−3"}</MathText>
            </text>
            <line x1={"100.0"} y1={"168.0"} x2={"100.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"100.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−2"}</MathText>
            </text>
            <line x1={"136.0"} y1={"168.0"} x2={"136.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"136.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−1"}</MathText>
            </text>
            <line x1={"208.0"} y1={"168.0"} x2={"208.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"208.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"244.0"} y1={"168.0"} x2={"244.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"244.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"280.0"} y1={"168.0"} x2={"280.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"280.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"316.0"} y1={"168.0"} x2={"316.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"316.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"352.0"} y1={"168.0"} x2={"352.0"} y2={"176.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"352.0"} y={"190.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <line x1={"168.0"} y1={"136.0"} x2={"176.0"} y2={"136.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"163.0"} y={"140.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"168.0"} y1={"100.0"} x2={"176.0"} y2={"100.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"163.0"} y={"104.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"168.0"} y1={"64.0"} x2={"176.0"} y2={"64.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"163.0"} y={"68.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"168.0"} y1={"28.0"} x2={"176.0"} y2={"28.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"163.0"} y={"32.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <text x={"163.0"} y={"188.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"0"}</MathText>
            </text>
            <text x={"360.0"} y={"163.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"x"}</MathText>
              </tspan>
            </text>
            <text x={"184.0"} y={"14.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"y"}</MathText>
              </tspan>
            </text>
            <circle cx={"64.0"} cy={"100.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"64.0"} y={"88.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"A (−3, 2)"}</MathText>
            </text>
            <circle cx={"316.0"} cy={"100.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"316.0"} y={"88.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"B (4, 2)"}</MathText>
            </text>
            <text x={"190.0"} y={"119.8"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"7 unidades"}</MathText>
            </text>
          </svg>
        </div>
        <h3>
          <MathText>{"11.8 Perímetro e área de figuras no plano"}</MathText>
        </h3>
        <p>
          <MathText>{"Se cada quadradinho mede 1 unidade, o plano vira uma folha de medidas. No retângulo do Exemplo 3: os lados horizontais medem \\(5 - 1 = 4\\) e os verticais \\(4 - 1 = 3\\)."}</MathText>
        </p>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ P = 2 \\cdot (4 + 3) = 14 \\qquad A = 4 \\cdot 3 = 12 \\]"}</MathText>
        </div>
        <p>
          <MathText>{"Num triângulo com um lado horizontal e um vertical, esses dois lados são "}</MathText>
          <b>
            <MathText>{"perpendiculares"}</MathText>
          </b>
          <MathText>{" (formam um ângulo reto). Aqui, as "}</MathText>
          <b>
            <MathText>{"alturas e bases"}</MathText>
          </b>
          <MathText>{" são fáceis de ler:"}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 364 276"} className="w-[364px] max-w-full h-auto" role={"img"} aria-label={"Triângulo com um lado horizontal e outro vertical"}>
            <marker id={"m20"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#334155"}>
              </path>
            </marker>
            <line x1={"28.0"} y1={"28.0"} x2={"28.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"72.0"} y1={"28.0"} x2={"72.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"116.0"} y1={"28.0"} x2={"116.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"160.0"} y1={"28.0"} x2={"160.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"204.0"} y1={"28.0"} x2={"204.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"248.0"} y1={"28.0"} x2={"248.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"292.0"} y1={"28.0"} x2={"292.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"336.0"} y1={"28.0"} x2={"336.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"248.0"} x2={"336.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"204.0"} x2={"336.0"} y2={"204.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"160.0"} x2={"336.0"} y2={"160.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"116.0"} x2={"336.0"} y2={"116.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"72.0"} x2={"336.0"} y2={"72.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"28.0"} x2={"336.0"} y2={"28.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <polygon points={"72.0,204.0 248.0,204.0 72.0,72.0"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.6"} strokeLinejoin={"round"}>
            </polygon>
            <rect x={"82.8"} y={"175.2"} width={"9"} height={"9"} fill={"none"} stroke={"#ec4899"} strokeWidth={"2"}>
            </rect>
            <line x1={"18.0"} y1={"248.0"} x2={"348.0"} y2={"248.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m20)"}>
            </line>
            <line x1={"28.0"} y1={"258.0"} x2={"28.0"} y2={"16.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m20)"}>
            </line>
            <line x1={"72.0"} y1={"244.0"} x2={"72.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"72.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"116.0"} y1={"244.0"} x2={"116.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"116.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"160.0"} y1={"244.0"} x2={"160.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"160.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"204.0"} y1={"244.0"} x2={"204.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"204.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"248.0"} y1={"244.0"} x2={"248.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"248.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <line x1={"292.0"} y1={"244.0"} x2={"292.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"292.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"6"}</MathText>
            </text>
            <line x1={"336.0"} y1={"244.0"} x2={"336.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"336.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"7"}</MathText>
            </text>
            <line x1={"24.0"} y1={"204.0"} x2={"32.0"} y2={"204.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"208.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"24.0"} y1={"160.0"} x2={"32.0"} y2={"160.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"164.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"24.0"} y1={"116.0"} x2={"32.0"} y2={"116.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"120.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"24.0"} y1={"72.0"} x2={"32.0"} y2={"72.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"76.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"24.0"} y1={"28.0"} x2={"32.0"} y2={"28.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"32.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <text x={"19.0"} y={"264.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"0"}</MathText>
            </text>
            <text x={"344.0"} y={"239.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"x"}</MathText>
              </tspan>
            </text>
            <text x={"40.0"} y={"14.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"y"}</MathText>
              </tspan>
            </text>
            <circle cx={"72.0"} cy={"204.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"66.0"} y={"226.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"A (1, 1)"}</MathText>
            </text>
            <circle cx={"248.0"} cy={"204.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"254.0"} y={"226.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"B (5, 1)"}</MathText>
            </text>
            <circle cx={"72.0"} cy={"72.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"80.0"} y={"62.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"C (1, 4)"}</MathText>
            </text>
            <text x={"160.0"} y={"228.2"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"4"}</MathText>
            </text>
            <text x={"54.4"} y={"138.0"} textAnchor={"end"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"3"}</MathText>
            </text>
          </svg>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 5 — Área do triângulo \\(A(1,1)\\), \\(B(5,1)\\), \\(C(1,4)\\)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Base \\(\\overline{AB}\\) (horizontal): \\(5 - 1 = 4\\)."}</MathText>
            </div>
            <div>
              <MathText>{"Altura \\(\\overline{AC}\\) (vertical): \\(4 - 1 = 3\\)."}</MathText>
            </div>
            <div>
              <MathText>{"\\(A = \\dfrac{b \\cdot h}{2} = \\dfrac{4 \\cdot 3}{2} = 6\\) unidades de área."}</MathText>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"E o lado \\(\\overline{BC}\\)?"}</MathText>
          </b>
          <MathText>{"Ele é "}</MathText>
          <b>
            <MathText>{"inclinado"}</MathText>
          </b>
          <MathText>{": não dá para medir contando quadradinhos nem com subtração simples. Guarde essa dúvida, vamos voltar a ela na seção 11.11."}</MathText>
        </div>
        <h3>
          <MathText>{"11.9 Achando o 4º vértice de um retângulo"}</MathText>
        </h3>
        <p>
          <MathText>{"Em um retângulo com lados paralelos aos eixos, os vértices “repetem” coordenadas: dois vértices que estão no mesmo lado vertical têm o mesmo \\(x\\), e dois no mesmo lado horizontal têm o mesmo \\(y\\)."}</MathText>
        </p>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 6 — Retângulo com \\(A(-2,-1)\\), \\(B(3,-1)\\), \\(C(3,2)\\). Quem é \\(D\\)?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(D\\) está em cima de \\(A\\) (lado vertical): mesmo \\(x = -2\\)."}</MathText>
            </div>
            <div>
              <MathText>{"\\(D\\) está ao lado de \\(C\\) (lado horizontal): mesmo \\(y = 2\\)."}</MathText>
            </div>
            <div>
              <MathText>{"\\(D(-2, 2)\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Confira: \\(AB = 5\\), \\(BC = 3\\), \\(CD = 5\\), \\(DA = 3\\). ✓"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 350 266"} className="w-[350px] max-w-full h-auto" role={"img"} aria-label={"Três vértices de um retângulo conhecidos e o quarto a descobrir"}>
            <marker id={"m21"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#334155"}>
              </path>
            </marker>
            <line x1={"28.0"} y1={"28.0"} x2={"28.0"} y2={"238.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"70.0"} y1={"28.0"} x2={"70.0"} y2={"238.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"112.0"} y1={"28.0"} x2={"112.0"} y2={"238.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"154.0"} y1={"28.0"} x2={"154.0"} y2={"238.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"196.0"} y1={"28.0"} x2={"196.0"} y2={"238.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"238.0"} y1={"28.0"} x2={"238.0"} y2={"238.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"280.0"} y1={"28.0"} x2={"280.0"} y2={"238.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"322.0"} y1={"28.0"} x2={"322.0"} y2={"238.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"238.0"} x2={"322.0"} y2={"238.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"196.0"} x2={"322.0"} y2={"196.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"154.0"} x2={"322.0"} y2={"154.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"112.0"} x2={"322.0"} y2={"112.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"70.0"} x2={"322.0"} y2={"70.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"28.0"} x2={"322.0"} y2={"28.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <polygon points={"70.0,196.0 280.0,196.0 280.0,70.0 70.0,70.0"} fill={"none"} stroke={"#4f46e5"} strokeWidth={"2.6"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"70.0"} y1={"196.0"} x2={"70.0"} y2={"70.0"} stroke={"#94a3b8"} strokeWidth={"2"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"70.0"} y1={"70.0"} x2={"280.0"} y2={"70.0"} stroke={"#94a3b8"} strokeWidth={"2"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"18.0"} y1={"154.0"} x2={"334.0"} y2={"154.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m21)"}>
            </line>
            <line x1={"154.0"} y1={"248.0"} x2={"154.0"} y2={"16.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m21)"}>
            </line>
            <line x1={"28.0"} y1={"150.0"} x2={"28.0"} y2={"158.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"28.0"} y={"172.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−3"}</MathText>
            </text>
            <line x1={"70.0"} y1={"150.0"} x2={"70.0"} y2={"158.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"70.0"} y={"172.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−2"}</MathText>
            </text>
            <line x1={"112.0"} y1={"150.0"} x2={"112.0"} y2={"158.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"112.0"} y={"172.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−1"}</MathText>
            </text>
            <line x1={"196.0"} y1={"150.0"} x2={"196.0"} y2={"158.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"196.0"} y={"172.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"238.0"} y1={"150.0"} x2={"238.0"} y2={"158.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"238.0"} y={"172.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"280.0"} y1={"150.0"} x2={"280.0"} y2={"158.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"280.0"} y={"172.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"322.0"} y1={"150.0"} x2={"322.0"} y2={"158.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"322.0"} y={"172.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"150.0"} y1={"238.0"} x2={"158.0"} y2={"238.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"145.0"} y={"242.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−2"}</MathText>
            </text>
            <line x1={"150.0"} y1={"196.0"} x2={"158.0"} y2={"196.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"145.0"} y={"200.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−1"}</MathText>
            </text>
            <line x1={"150.0"} y1={"112.0"} x2={"158.0"} y2={"112.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"145.0"} y={"116.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"150.0"} y1={"70.0"} x2={"158.0"} y2={"70.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"145.0"} y={"74.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"150.0"} y1={"28.0"} x2={"158.0"} y2={"28.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"145.0"} y={"32.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <text x={"145.0"} y={"170.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"0"}</MathText>
            </text>
            <text x={"330.0"} y={"145.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"x"}</MathText>
              </tspan>
            </text>
            <text x={"166.0"} y={"14.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"y"}</MathText>
              </tspan>
            </text>
            <circle cx={"70.0"} cy={"196.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"68.0"} y={"216.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"A (−2, −1)"}</MathText>
            </text>
            <circle cx={"280.0"} cy={"196.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"284.0"} y={"216.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"B (3, −1)"}</MathText>
            </text>
            <circle cx={"280.0"} cy={"70.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"288.0"} y={"60.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"C (3, 2)"}</MathText>
            </text>
            <circle cx={"70.0"} cy={"70.0"} r={"5.5"} fill={"#ec4899"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"64.0"} y={"60.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"D (?, ?)"}</MathText>
            </text>
          </svg>
        </div>
        <h3>
          <MathText>{"11.10 Ponto médio de um segmento"}</MathText>
        </h3>
        <p>
          <MathText>{"O "}</MathText>
          <b>
            <MathText>{"ponto médio"}</MathText>
          </b>
          <MathText>{" é o ponto que está bem no meio do segmento, à mesma distância dos dois extremos. Para achá-lo, faça a "}</MathText>
          <b>
            <MathText>{"média"}</MathText>
          </b>
          <MathText>{" (some e divida por 2) das coordenadas:"}</MathText>
        </p>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ M = \\left(\\dfrac{x_1 + x_2}{2},\\ \\dfrac{y_1 + y_2}{2}\\right) \\]"}</MathText>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 7 — Ponto médio de \\(A(-4, 1)\\) e \\(B(2, 5)\\)"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(x_M = \\dfrac{-4 + 2}{2} = \\dfrac{-2}{2} = -1\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(y_M = \\dfrac{1 + 5}{2} = \\dfrac{6}{2} = 3\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(M(-1, 3)\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 376 296"} className="w-[376px] max-w-full h-auto" role={"img"} aria-label={"Ponto médio M do segmento AB"}>
            <marker id={"m22"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#334155"}>
              </path>
            </marker>
            <line x1={"28.0"} y1={"28.0"} x2={"28.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"68.0"} y1={"28.0"} x2={"68.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"108.0"} y1={"28.0"} x2={"108.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"148.0"} y1={"28.0"} x2={"148.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"188.0"} y1={"28.0"} x2={"188.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"228.0"} y1={"28.0"} x2={"228.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"268.0"} y1={"28.0"} x2={"268.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"308.0"} y1={"28.0"} x2={"308.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"348.0"} y1={"28.0"} x2={"348.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"268.0"} x2={"348.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"228.0"} x2={"348.0"} y2={"228.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"188.0"} x2={"348.0"} y2={"188.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"148.0"} x2={"348.0"} y2={"148.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"108.0"} x2={"348.0"} y2={"108.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"68.0"} x2={"348.0"} y2={"68.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"28.0"} x2={"348.0"} y2={"28.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"68.0"} y1={"228.0"} x2={"308.0"} y2={"68.0"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <line x1={"18.0"} y1={"268.0"} x2={"360.0"} y2={"268.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m22)"}>
            </line>
            <line x1={"228.0"} y1={"278.0"} x2={"228.0"} y2={"16.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m22)"}>
            </line>
            <line x1={"28.0"} y1={"264.0"} x2={"28.0"} y2={"272.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"28.0"} y={"286.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−5"}</MathText>
            </text>
            <line x1={"68.0"} y1={"264.0"} x2={"68.0"} y2={"272.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"68.0"} y={"286.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−4"}</MathText>
            </text>
            <line x1={"108.0"} y1={"264.0"} x2={"108.0"} y2={"272.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"108.0"} y={"286.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−3"}</MathText>
            </text>
            <line x1={"148.0"} y1={"264.0"} x2={"148.0"} y2={"272.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"148.0"} y={"286.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−2"}</MathText>
            </text>
            <line x1={"188.0"} y1={"264.0"} x2={"188.0"} y2={"272.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"188.0"} y={"286.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−1"}</MathText>
            </text>
            <line x1={"268.0"} y1={"264.0"} x2={"268.0"} y2={"272.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"268.0"} y={"286.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"308.0"} y1={"264.0"} x2={"308.0"} y2={"272.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"308.0"} y={"286.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"348.0"} y1={"264.0"} x2={"348.0"} y2={"272.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"348.0"} y={"286.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"224.0"} y1={"228.0"} x2={"232.0"} y2={"228.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"219.0"} y={"232.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"224.0"} y1={"188.0"} x2={"232.0"} y2={"188.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"219.0"} y={"192.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"224.0"} y1={"148.0"} x2={"232.0"} y2={"148.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"219.0"} y={"152.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"224.0"} y1={"108.0"} x2={"232.0"} y2={"108.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"219.0"} y={"112.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"224.0"} y1={"68.0"} x2={"232.0"} y2={"68.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"219.0"} y={"72.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <line x1={"224.0"} y1={"28.0"} x2={"232.0"} y2={"28.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"219.0"} y={"32.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"6"}</MathText>
            </text>
            <text x={"219.0"} y={"284.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"0"}</MathText>
            </text>
            <text x={"356.0"} y={"259.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"x"}</MathText>
              </tspan>
            </text>
            <text x={"240.0"} y={"14.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"y"}</MathText>
              </tspan>
            </text>
            <circle cx={"68.0"} cy={"228.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"74.0"} y={"250.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"A (−4, 1)"}</MathText>
            </text>
            <circle cx={"308.0"} cy={"68.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"308.0"} y={"56.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"B (2, 5)"}</MathText>
            </text>
            <circle cx={"188.0"} cy={"148.0"} r={"5.5"} fill={"#ec4899"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"186.0"} y={"170.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"M (−1, 3)"}</MathText>
            </text>
          </svg>
        </div>
        <h3>
          <MathText>{"11.11 O segmento inclinado e o “triângulo escondido”"}</MathText>
        </h3>
        <p>
          <MathText>{"E se o segmento não for horizontal nem vertical? Veja \\(\\overline{AB}\\) com \\(A(1,1)\\) e \\(B(5,4)\\). Se você traçar uma linha horizontal saindo de \\(A\\) e uma vertical saindo de \\(B\\), elas se encontram em \\((5,1)\\), formando um "}</MathText>
          <b>
            <MathText>{"triângulo retângulo escondido"}</MathText>
          </b>
          <MathText>{":"}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 320 276"} className="w-[320px] max-w-full h-auto" role={"img"} aria-label={"Segmento inclinado AB e o triângulo escondido com lados 4 e 3"}>
            <marker id={"m23"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#334155"}>
              </path>
            </marker>
            <line x1={"28.0"} y1={"28.0"} x2={"28.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"72.0"} y1={"28.0"} x2={"72.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"116.0"} y1={"28.0"} x2={"116.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"160.0"} y1={"28.0"} x2={"160.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"204.0"} y1={"28.0"} x2={"204.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"248.0"} y1={"28.0"} x2={"248.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"292.0"} y1={"28.0"} x2={"292.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"248.0"} x2={"292.0"} y2={"248.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"204.0"} x2={"292.0"} y2={"204.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"160.0"} x2={"292.0"} y2={"160.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"116.0"} x2={"292.0"} y2={"116.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"72.0"} x2={"292.0"} y2={"72.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"28.0"} x2={"292.0"} y2={"28.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"72.0"} y1={"204.0"} x2={"248.0"} y2={"72.0"} stroke={"#ec4899"} strokeWidth={"4"} strokeLinecap={"round"}>
            </line>
            <line x1={"72.0"} y1={"204.0"} x2={"248.0"} y2={"204.0"} stroke={"#4f46e5"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"248.0"} y1={"204.0"} x2={"248.0"} y2={"72.0"} stroke={"#4f46e5"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <rect x={"239.0"} y={"195.0"} width={"9"} height={"9"} fill={"none"} stroke={"#ec4899"} strokeWidth={"2"}>
            </rect>
            <line x1={"18.0"} y1={"248.0"} x2={"304.0"} y2={"248.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m23)"}>
            </line>
            <line x1={"28.0"} y1={"258.0"} x2={"28.0"} y2={"16.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m23)"}>
            </line>
            <line x1={"72.0"} y1={"244.0"} x2={"72.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"72.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"116.0"} y1={"244.0"} x2={"116.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"116.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"160.0"} y1={"244.0"} x2={"160.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"160.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"204.0"} y1={"244.0"} x2={"204.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"204.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"248.0"} y1={"244.0"} x2={"248.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"248.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <line x1={"292.0"} y1={"244.0"} x2={"292.0"} y2={"252.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"292.0"} y={"266.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"6"}</MathText>
            </text>
            <line x1={"24.0"} y1={"204.0"} x2={"32.0"} y2={"204.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"208.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"24.0"} y1={"160.0"} x2={"32.0"} y2={"160.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"164.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"24.0"} y1={"116.0"} x2={"32.0"} y2={"116.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"120.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"24.0"} y1={"72.0"} x2={"32.0"} y2={"72.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"76.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"24.0"} y1={"28.0"} x2={"32.0"} y2={"28.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"32.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <text x={"19.0"} y={"264.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"0"}</MathText>
            </text>
            <text x={"300.0"} y={"239.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"x"}</MathText>
              </tspan>
            </text>
            <text x={"40.0"} y={"14.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"y"}</MathText>
              </tspan>
            </text>
            <circle cx={"72.0"} cy={"204.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"66.0"} y={"226.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"A (1, 1)"}</MathText>
            </text>
            <circle cx={"248.0"} cy={"72.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"254.0"} y={"62.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"B (5, 4)"}</MathText>
            </text>
            <text x={"160.0"} y={"228.2"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"4"}</MathText>
            </text>
            <text x={"263.4"} y={"138.0"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"3"}</MathText>
            </text>
            <text x={"146.8"} y={"111.6"} textAnchor={"end"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"AB = ?"}</MathText>
            </text>
          </svg>
        </div>
        <p>
          <MathText>{"Os lados horizontal e vertical medem \\(4\\) e \\(3\\) (você já sabe medir). O segmento \\(\\overline{AB}\\) é o terceiro lado, o inclinado: "}</MathText>
          <b>
            <MathText>{"quanto ele mede?"}</MathText>
          </b>
          <MathText>{" Não é \\(4 + 3\\) (o caminho direto é mais curto que o caminho em “L”), e ainda não temos ferramenta para calcular. Essa é exatamente a pergunta que o "}</MathText>
          <b>
            <MathText>{"Teorema de Pitágoras"}</MathText>
          </b>
          <MathText>{" responde, no próximo curso. Todo o seu trabalho aqui, medir lados horizontais e verticais, é o primeiro passo."}</MathText>
        </p>
        <h3>
          <MathText>{"11.12 Mapas e jogos"}</MathText>
        </h3>
        <p>
          <MathText>{"No "}</MathText>
          <b>
            <MathText>{"mapa de uma cidade"}</MathText>
          </b>
          <MathText>{", “A-3” significa coluna A, linha 3. Na "}</MathText>
          <b>
            <MathText>{"batalha naval"}</MathText>
          </b>
          <MathText>{", você “atira” em \\((C, 5)\\). Nos "}</MathText>
          <b>
            <MathText>{"jogos de computador"}</MathText>
          </b>
          <MathText>{", a posição de cada personagem na tela é um par \\((x, y)\\) em pixels. Em todos os casos vale a mesma ideia: "}</MathText>
          <b>
            <MathText>{"um número (ou letra) para o lado, outro para cima"}</MathText>
          </b>
          <MathText>{", nesta ordem."}</MathText>
        </p>
        <h3>
          <MathText>{"11.13 Cuidados"}</MathText>
        </h3>
        <ul>
          <li>
            <b>
              <MathText>{"Trocar \\(x\\) e \\(y\\)"}</MathText>
            </b>
            <MathText>{": \\((2, 5)\\) não é \\((5, 2)\\). Lembre-se: horizontal primeiro."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Esquecer o sinal"}</MathText>
            </b>
            <MathText>{": \\((-3, 2)\\) fica à esquerda, e não à direita."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Distâncias entre números de sinais diferentes"}</MathText>
            </b>
            <MathText>{": de \\(-3\\) a \\(4\\) são \\(7\\) passos (não 1!)."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Medir um lado inclinado contando quadradinhos"}</MathText>
            </b>
            <MathText>{": só funciona nos lados horizontais e verticais."}</MathText>
          </li>
        </ul>
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-gotab={"laboratorio"}>
          <MathText>{"🔬 Abrir o Exp. 5 (plano cartesiano)"}</MathText>
        </button>
        <GeometryQuickCheck index={23} />
        <GeometryQuickCheck index={24} />
        <GeometryQuickCheck index={25} />
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto={"13"}>
          <MathText>{"✏️ Fazer os exercícios do nível 13"}</MathText>
        </button>
      </article>
      <article className="geometry-basica-lesson bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_.lesson-tag]:text-[.7rem] [&_.lesson-tag]:font-extrabold [&_.lesson-tag]:tracking-[.12em] [&_.lesson-tag]:uppercase [&_.lesson-tag]:text-indigo-600 [&_h2]:text-[1.6rem] [&_h2]:font-black [&_h2]:mt-1 [&_h2]:text-slate-800 [&_h3]:font-extrabold [&_h3]:text-lg [&_h3]:mt-7 [&_h3]:text-indigo-800 [&_h4]:mt-4 [&_h4]:font-bold [&_p]:leading-[1.85] [&_p]:text-slate-600 [&_p]:mt-3 [&_ul]:pl-6 [&_ul]:text-slate-600 [&_ul]:leading-[1.85] [&_ul]:mt-2 [&_ul]:list-disc [&_ol]:pl-6 [&_ol]:text-slate-600 [&_ol]:leading-[1.85] [&_ol]:mt-2 [&_ol]:list-decimal [&_li]:mt-1 [&_b]:text-slate-800 [&_strong]:text-slate-800" id={"l12"}>
        <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 12"}</MathText>
        </div>
        <h2>
          <MathText>{"Congruência e simetria"}</MathText>
        </h2>
        <p>
          <MathText>{"Duas ideias muito usadas na vida real: saber quando duas figuras são "}</MathText>
          <b>
            <MathText>{"“idênticas”"}</MathText>
          </b>
          <MathText>{" (como duas peças de um quebra-cabeça feitas no mesmo molde) e reconhecer figuras que são "}</MathText>
          <b>
            <MathText>{"“iguais dos dois lados”"}</MathText>
          </b>
          <MathText>{" (como uma borboleta, um coração ou a letra A). Elas se chamam "}</MathText>
          <b>
            <MathText>{"congruência"}</MathText>
          </b>
          <MathText>{" e "}</MathText>
          <b>
            <MathText>{"simetria"}</MathText>
          </b>
          <MathText>{". São a porta de entrada das "}</MathText>
          <b>
            <MathText>{"transformações geométricas"}</MathText>
          </b>
          <MathText>{" (deslizar, espelhar e girar figuras), tema do próximo curso."}</MathText>
        </p>
        <h3>
          <MathText>{"12.1 Figuras congruentes"}</MathText>
        </h3>
        <p>
          <MathText>{"Duas figuras são "}</MathText>
          <b>
            <MathText>{"congruentes"}</MathText>
          </b>
          <MathText>{" quando têm "}</MathText>
          <b>
            <MathText>{"exatamente a mesma forma e o mesmo tamanho"}</MathText>
          </b>
          <MathText>{". Se você recortar uma delas e colocar sobre a outra, as duas coincidem perfeitamente. Pode ser preciso virar a peça, girá-la ou até colocá-la “de cabeça para baixo”, mas ela "}</MathText>
          <b>
            <MathText>{"não pode ser esticada nem encolhida"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 430 160"} className="w-[430px] max-w-full h-auto" role={"img"} aria-label={"Dois triângulos congruentes: o segundo é o primeiro girado meia-volta"}>
            <polygon points={"30,130 130,130 67.5,75"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.6"} strokeLinejoin={"round"}>
            </polygon>
            <polygon points={"400,30 300,30 362.5,85"} fill={"#fce7f3"} stroke={"#ec4899"} strokeWidth={"2.6"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"20.0"} y={"134.0"} textAnchor={"end"} fontSize={"15"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"A"}</MathText>
            </text>
            <text x={"140.0"} y={"134.0"} textAnchor={"start"} fontSize={"15"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"B"}</MathText>
            </text>
            <text x={"67.5"} y={"67.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"C"}</MathText>
            </text>
            <text x={"410.0"} y={"28.0"} textAnchor={"start"} fontSize={"15"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"D"}</MathText>
            </text>
            <text x={"290.0"} y={"28.0"} textAnchor={"end"} fontSize={"15"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"E"}</MathText>
            </text>
            <text x={"362.5"} y={"105.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"F"}</MathText>
            </text>
            <text x={"80.0"} y={"152.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"6 cm"}</MathText>
            </text>
            <text x={"24.0"} y={"96.5"} textAnchor={"end"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"4 cm"}</MathText>
            </text>
            <text x={"134.0"} y={"96.5"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"5 cm"}</MathText>
            </text>
            <text x={"350.0"} y={"16.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"6 cm"}</MathText>
            </text>
            <text x={"406.0"} y={"71.5"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"4 cm"}</MathText>
            </text>
            <text x={"296.0"} y={"71.5"} textAnchor={"end"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"5 cm"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"O triângulo rosa é o azul girado meia-volta: mesmo formato, mesmas medidas. Eles são congruentes."}</MathText>
          </div>
        </div>
        <p>
          <MathText>{"Usamos o símbolo "}</MathText>
          <b>
            <MathText>{"\\(\\cong\\)"}</MathText>
          </b>
          <MathText>{" (“é congruente a”): \\(\\triangle ABC \\cong \\triangle DEF\\). Na ordem em que escrevemos as letras, os vértices "}</MathText>
          <b>
            <MathText>{"se correspondem"}</MathText>
          </b>
          <MathText>{": \\(A\\) com \\(D\\), \\(B\\) com \\(E\\), \\(C\\) com \\(F\\). Lados e ângulos que se correspondem têm "}</MathText>
          <b>
            <MathText>{"medidas iguais"}</MathText>
          </b>
          <MathText>{":"}</MathText>
        </p>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ AB = DE \\quad BC = EF \\quad AC = DF \\qquad \\hat{A} = \\hat{D} \\quad \\hat{B} = \\hat{E} \\quad \\hat{C} = \\hat{F} \\]"}</MathText>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 1 — Se \\(\\triangle ABC \\cong \\triangle DEF\\), \\(AB = 6\\ \\text{cm}\\), \\(BC = 5\\ \\text{cm}\\) e \\(\\hat{A} = 50^\\circ\\), quanto valem \\(DE\\), \\(EF\\) e \\(\\hat{D}\\)?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(A \\leftrightarrow D\\), \\(B \\leftrightarrow E\\), \\(C \\leftrightarrow F\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(DE\\) corresponde a \\(AB\\): \\(DE = 6\\ \\text{cm}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(EF\\) corresponde a \\(BC\\): \\(EF = 5\\ \\text{cm}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(\\hat{D}\\) corresponde a \\(\\hat{A}\\): \\(\\hat{D} = 50^\\circ\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-red-500 bg-red-50">
          <b>
            <MathText>{"Mesma forma não basta!"}</MathText>
          </b>
          <MathText>{"Uma foto ampliada tem a mesma "}</MathText>
          <u>
            <MathText>{"forma"}</MathText>
          </u>
          <MathText>{", mas outro "}</MathText>
          <u>
            <MathText>{"tamanho"}</MathText>
          </u>
          <MathText>{": não é congruente. (Figuras com a mesma forma e tamanhos diferentes se chamam "}</MathText>
          <b>
            <MathText>{"semelhantes"}</MathText>
          </b>
          <MathText>{", e é tema do próximo curso.)"}</MathText>
        </div>
        <h3>
          <MathText>{"12.2 Simetria de reflexão"}</MathText>
        </h3>
        <p>
          <MathText>{"Uma figura tem "}</MathText>
          <b>
            <MathText>{"simetria de reflexão"}</MathText>
          </b>
          <MathText>{" quando existe uma linha, o "}</MathText>
          <b>
            <MathText>{"eixo de simetria"}</MathText>
          </b>
          <MathText>{", que a divide em duas metades que são "}</MathText>
          <b>
            <MathText>{"uma o espelho da outra"}</MathText>
          </b>
          <MathText>{". O teste é prático: "}</MathText>
          <b>
            <MathText>{"dobre o papel"}</MathText>
          </b>
          <MathText>{" sobre o eixo. Se as duas metades coincidirem, a linha é um eixo de simetria."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 440 150"} className="w-[440px] max-w-full h-auto" role={"img"} aria-label={"Letras A, H, E e F com seus eixos de simetria"}>
            <text x={"60"} y={"92"} textAnchor={"middle"} fontFamily={"Arial, Helvetica, sans-serif"} fontSize={"66"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"A"}</MathText>
            </text>
            <line x1={"60.0"} y1={"18.0"} x2={"60.0"} y2={"108.0"} stroke={"#ec4899"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <text x={"60.0"} y={"134.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"1 eixo"}</MathText>
            </text>
            <text x={"160"} y={"92"} textAnchor={"middle"} fontFamily={"Arial, Helvetica, sans-serif"} fontSize={"66"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"H"}</MathText>
            </text>
            <line x1={"160.0"} y1={"18.0"} x2={"160.0"} y2={"108.0"} stroke={"#ec4899"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"122.0"} y1={"68.0"} x2={"198.0"} y2={"68.0"} stroke={"#ec4899"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <text x={"160.0"} y={"134.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"2 eixos"}</MathText>
            </text>
            <text x={"260"} y={"92"} textAnchor={"middle"} fontFamily={"Arial, Helvetica, sans-serif"} fontSize={"66"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"E"}</MathText>
            </text>
            <line x1={"222.0"} y1={"68.0"} x2={"298.0"} y2={"68.0"} stroke={"#ec4899"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <text x={"260.0"} y={"134.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"1 eixo"}</MathText>
            </text>
            <text x={"360"} y={"92"} textAnchor={"middle"} fontFamily={"Arial, Helvetica, sans-serif"} fontSize={"66"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"F"}</MathText>
            </text>
            <text x={"360.0"} y={"134.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"0 eixo"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"Letras e seus eixos (tracejados em rosa). O F não tem nenhum: se dobrar, as metades não coincidem."}</MathText>
          </div>
        </div>
        <p>
          <MathText>{"Exemplos do dia a dia: borboleta (1 eixo vertical), rosto humano (aproximadamente 1 eixo), uma bola (infinitos eixos), a placa de “Pare” (octógono regular, 8 eixos)."}</MathText>
        </p>
        <h3>
          <MathText>{"12.3 Quantos eixos tem cada figura?"}</MathText>
        </h3>
        <p>
          <MathText>{"Os "}</MathText>
          <b>
            <MathText>{"polígonos regulares"}</MathText>
          </b>
          <MathText>{" (lados e ângulos todos iguais) têm tantos eixos quanto lados:"}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 440 150"} className="w-[440px] max-w-full h-auto" role={"img"} aria-label={"Polígonos regulares com todos os seus eixos de simetria"}>
            <polygon points={"62.0,26.0 27.4,86.0 96.6,86.0"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.6"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"62.0"} y1={"17.2"} x2={"62.0"} y2={"114.8"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"19.7"} y1={"41.6"} x2={"104.3"} y2={"90.4"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"19.7"} y1={"90.4"} x2={"104.3"} y2={"41.6"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <text x={"62.0"} y={"134.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"triângulo: 3 eixos"}</MathText>
            </text>
            <polygon points={"160.0,26.0 120.0,66.0 160.0,106.0 200.0,66.0"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.6"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"160.0"} y1={"17.2"} x2={"160.0"} y2={"114.8"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"125.5"} y1={"31.5"} x2={"194.5"} y2={"100.5"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"111.2"} y1={"66.0"} x2={"208.8"} y2={"66.0"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"125.5"} y1={"100.5"} x2={"194.5"} y2={"31.5"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <text x={"160.0"} y={"134.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"quadrado: 4 eixos"}</MathText>
            </text>
            <polygon points={"262.0,26.0 224.0,53.6 238.5,98.4 285.5,98.4 300.0,53.6"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.6"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"262.0"} y1={"17.2"} x2={"262.0"} y2={"114.8"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"233.3"} y1={"26.5"} x2={"290.7"} y2={"105.5"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"215.6"} y1={"50.9"} x2={"308.4"} y2={"81.1"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"215.6"} y1={"81.1"} x2={"308.4"} y2={"50.9"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"233.3"} y1={"105.5"} x2={"290.7"} y2={"26.5"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <text x={"262.0"} y={"134.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"pentágono: 5 eixos"}</MathText>
            </text>
            <polygon points={"372.0,26.0 337.4,46.0 337.4,86.0 372.0,106.0 406.6,86.0 406.6,46.0"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.6"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"372.0"} y1={"17.2"} x2={"372.0"} y2={"114.8"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"347.6"} y1={"23.7"} x2={"396.4"} y2={"108.3"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"329.7"} y1={"41.6"} x2={"414.3"} y2={"90.4"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"323.2"} y1={"66.0"} x2={"420.8"} y2={"66.0"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"329.7"} y1={"90.4"} x2={"414.3"} y2={"41.6"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"347.6"} y1={"108.3"} x2={"396.4"} y2={"23.7"} stroke={"#ec4899"} strokeWidth={"1.6"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <text x={"372.0"} y={"134.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"hexágono: 6 eixos"}</MathText>
            </text>
          </svg>
        </div>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Figura"}</MathText>
              </th>
              <th>
                <MathText>{"Eixos de simetria"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"Polígono regular de \\(n\\) lados"}</MathText>
              </td>
              <td>
                <MathText>{"\\(n\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Retângulo (que não é quadrado)"}</MathText>
              </td>
              <td>
                <MathText>{"2 (um vertical e um horizontal)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Losango (que não é quadrado)"}</MathText>
              </td>
              <td>
                <MathText>{"2 (as duas diagonais)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Triângulo isósceles (não equilátero)"}</MathText>
              </td>
              <td>
                <MathText>{"1"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Trapézio isósceles"}</MathText>
              </td>
              <td>
                <MathText>{"1"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Paralelogramo (que não é retângulo nem losango)"}</MathText>
              </td>
              <td>
                <MathText>{"0"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Triângulo escaleno"}</MathText>
              </td>
              <td>
                <MathText>{"0"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Círculo"}</MathText>
              </td>
              <td>
                <MathText>{"infinitos (qualquer diâmetro)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-amber-500 bg-amber-50">
          <b>
            <MathText>{"Cuidado com a diagonal do retângulo"}</MathText>
          </b>
          <MathText>{"Dobrar um retângulo (não quadrado) pela diagonal "}</MathText>
          <b>
            <MathText>{"não"}</MathText>
          </b>
          <MathText>{" faz as metades coincidirem. Por isso a diagonal "}</MathText>
          <u>
            <MathText>{"não"}</MathText>
          </u>
          <MathText>{" é eixo de simetria dele. No losango, sim."}</MathText>
        </div>
        <h3>
          <MathText>{"12.4 Simétrico de um ponto em relação a um eixo"}</MathText>
        </h3>
        <p>
          <MathText>{"O espelho transforma cada ponto \\(P\\) em outro ponto \\(P'\\) (lê-se “P linha”) que está "}</MathText>
          <b>
            <MathText>{"do outro lado do eixo"}</MathText>
          </b>
          <MathText>{", "}</MathText>
          <b>
            <MathText>{"à mesma distância"}</MathText>
          </b>
          <MathText>{", e de modo que o segmento \\(\\overline{PP'}\\) seja "}</MathText>
          <b>
            <MathText>{"perpendicular"}</MathText>
          </b>
          <MathText>{" ao eixo."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 190"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Ponto P e seu simétrico P′ em relação ao eixo e"}>
            <line x1={"210.0"} y1={"12.0"} x2={"210.0"} y2={"178.0"} stroke={"#ec4899"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <text x={"216.0"} y={"24.0"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"eixo e"}</MathText>
            </text>
            <line x1={"90.0"} y1={"70.0"} x2={"330.0"} y2={"70.0"} stroke={"#94a3b8"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <line x1={"150.0"} y1={"140.0"} x2={"270.0"} y2={"140.0"} stroke={"#94a3b8"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeDasharray={"5 4"}>
            </line>
            <circle cx={"90"} cy={"70"} r={"6"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
            <text x={"90.0"} y={"58.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"P"}</MathText>
            </text>
            <circle cx={"330"} cy={"70"} r={"6"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
            <text x={"330.0"} y={"58.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"P′"}</MathText>
            </text>
            <circle cx={"150"} cy={"140"} r={"6"} fill={"#10b981"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
            <text x={"150.0"} y={"128.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#10b981"}>
              <MathText>{"R"}</MathText>
            </text>
            <circle cx={"270"} cy={"140"} r={"6"} fill={"#10b981"} stroke={"#fff"} strokeWidth={"2"}>
            </circle>
            <text x={"270.0"} y={"128.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#10b981"}>
              <MathText>{"R′"}</MathText>
            </text>
            <text x={"150.0"} y={"60.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#475569"}>
              <MathText>{"120"}</MathText>
            </text>
            <text x={"270.0"} y={"60.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#475569"}>
              <MathText>{"120"}</MathText>
            </text>
            <text x={"180.0"} y={"130.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#475569"}>
              <MathText>{"60"}</MathText>
            </text>
            <text x={"240.0"} y={"130.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#475569"}>
              <MathText>{"60"}</MathText>
            </text>
            <rect x={"201"} y={"61"} width={"9"} height={"9"} fill={"none"} stroke={"#ec4899"} strokeWidth={"2"}>
            </rect>
            <rect x={"201"} y={"131"} width={"9"} height={"9"} fill={"none"} stroke={"#ec4899"} strokeWidth={"2"}>
            </rect>
            <text x={"210.0"} y={"186.0"} textAnchor={"middle"} fontSize={"12"} fontWeight={"700"} fill={"#475569"}>
              <MathText>{"P e P′ estão à mesma distância do eixo, e PP′ é perpendicular a ele"}</MathText>
            </text>
          </svg>
        </div>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"COMO CONSTRUIR \\(P'\\) COM RÉGUA E ESQUADRO"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"1) Apoie o esquadro no eixo e trace, por \\(P\\), uma reta "}</MathText>
              <b>
                <MathText>{"perpendicular"}</MathText>
              </b>
              <MathText>{" ao eixo."}</MathText>
            </div>
            <div>
              <MathText>{"2) Meça com a régua a distância de \\(P\\) até o eixo (ex.: 4 cm)."}</MathText>
            </div>
            <div>
              <MathText>{"3) Do outro lado, sobre a mesma perpendicular, marque 4 cm a partir do eixo."}</MathText>
            </div>
            <div>
              <MathText>{"4) Esse ponto é \\(P'\\)."}</MathText>
            </div>
          </div>
        </div>
        <p>
          <MathText>{"Para refletir uma "}</MathText>
          <b>
            <MathText>{"figura inteira"}</MathText>
          </b>
          <MathText>{", reflita cada vértice e depois ligue os pontos novos na mesma ordem."}</MathText>
        </p>
        <h3>
          <MathText>{"12.5 Reflexão no plano cartesiano"}</MathText>
        </h3>
        <p>
          <MathText>{"Na lição 11 você aprendeu a localizar pontos. Refletir em relação aos eixos fica muito simples:"}</MathText>
        </p>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Reflexão"}</MathText>
              </th>
              <th>
                <MathText>{"O que acontece"}</MathText>
              </th>
              <th>
                <MathText>{"Regra"}</MathText>
              </th>
              <th>
                <MathText>{"Exemplo com \\((3, 2)\\)"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"em relação ao "}</MathText>
                <b>
                  <MathText>{"eixo y"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"troca esquerda ↔ direita"}</MathText>
              </td>
              <td>
                <MathText>{"\\((x, y) \\to (-x, y)\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\((-3, 2)\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"em relação ao "}</MathText>
                <b>
                  <MathText>{"eixo x"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"troca cima ↔ baixo"}</MathText>
              </td>
              <td>
                <MathText>{"\\((x, y) \\to (x, -y)\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\((3, -2)\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"em relação à "}</MathText>
                <b>
                  <MathText>{"origem"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"vira “de ponta-cabeça” (meia-volta)"}</MathText>
              </td>
              <td>
                <MathText>{"\\((x, y) \\to (-x, -y)\\)"}</MathText>
              </td>
              <td>
                <MathText>{"\\((-3, -2)\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <MathText>{"Repare: "}</MathText>
          <b>
            <MathText>{"troca o sinal da coordenada que “atravessa” o eixo"}</MathText>
          </b>
          <MathText>{". Refletindo no eixo y, a distância horizontal ao eixo se mantém e o ponto passa para o outro lado: só o \\(x\\) muda de sinal."}</MathText>
        </p>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 2 — Reflita \\(\\triangle ABC\\), com \\(A(1,1)\\), \\(B(4,1)\\), \\(C(2,3)\\), em relação ao eixo y"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Regra: \\((x, y) \\to (-x, y)\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(A(1, 1) \\to A'(-1, 1)\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(B(4, 1) \\to B'(-4, 1)\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(C(2, 3) \\to C'(-2, 3)\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Marque \\(A'\\), \\(B'\\) e \\(C'\\) e ligue-os."}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 456 216"} className="w-[456px] max-w-full h-auto" role={"img"} aria-label={"Triângulo ABC e sua reflexão A′B′C′ em relação ao eixo y"}>
            <marker id={"m24"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#334155"}>
              </path>
            </marker>
            <line x1={"28.0"} y1={"28.0"} x2={"28.0"} y2={"188.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"68.0"} y1={"28.0"} x2={"68.0"} y2={"188.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"108.0"} y1={"28.0"} x2={"108.0"} y2={"188.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"148.0"} y1={"28.0"} x2={"148.0"} y2={"188.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"188.0"} y1={"28.0"} x2={"188.0"} y2={"188.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"228.0"} y1={"28.0"} x2={"228.0"} y2={"188.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"268.0"} y1={"28.0"} x2={"268.0"} y2={"188.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"308.0"} y1={"28.0"} x2={"308.0"} y2={"188.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"348.0"} y1={"28.0"} x2={"348.0"} y2={"188.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"388.0"} y1={"28.0"} x2={"388.0"} y2={"188.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"428.0"} y1={"28.0"} x2={"428.0"} y2={"188.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"188.0"} x2={"428.0"} y2={"188.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"148.0"} x2={"428.0"} y2={"148.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"108.0"} x2={"428.0"} y2={"108.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"68.0"} x2={"428.0"} y2={"68.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"28.0"} x2={"428.0"} y2={"28.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <polygon points={"268.0,148.0 388.0,148.0 308.0,68.0"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.6"} strokeLinejoin={"round"}>
            </polygon>
            <polygon points={"188.0,148.0 68.0,148.0 148.0,68.0"} fill={"#fce7f3"} stroke={"#ec4899"} strokeWidth={"2.6"} strokeLinejoin={"round"}>
            </polygon>
            <line x1={"18.0"} y1={"188.0"} x2={"440.0"} y2={"188.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m24)"}>
            </line>
            <line x1={"228.0"} y1={"198.0"} x2={"228.0"} y2={"16.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m24)"}>
            </line>
            <line x1={"28.0"} y1={"184.0"} x2={"28.0"} y2={"192.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"28.0"} y={"206.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−5"}</MathText>
            </text>
            <line x1={"68.0"} y1={"184.0"} x2={"68.0"} y2={"192.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"68.0"} y={"206.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−4"}</MathText>
            </text>
            <line x1={"108.0"} y1={"184.0"} x2={"108.0"} y2={"192.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"108.0"} y={"206.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−3"}</MathText>
            </text>
            <line x1={"148.0"} y1={"184.0"} x2={"148.0"} y2={"192.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"148.0"} y={"206.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−2"}</MathText>
            </text>
            <line x1={"188.0"} y1={"184.0"} x2={"188.0"} y2={"192.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"188.0"} y={"206.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"−1"}</MathText>
            </text>
            <line x1={"268.0"} y1={"184.0"} x2={"268.0"} y2={"192.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"268.0"} y={"206.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"308.0"} y1={"184.0"} x2={"308.0"} y2={"192.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"308.0"} y={"206.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"348.0"} y1={"184.0"} x2={"348.0"} y2={"192.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"348.0"} y={"206.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"388.0"} y1={"184.0"} x2={"388.0"} y2={"192.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"388.0"} y={"206.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"428.0"} y1={"184.0"} x2={"428.0"} y2={"192.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"428.0"} y={"206.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <line x1={"224.0"} y1={"148.0"} x2={"232.0"} y2={"148.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"219.0"} y={"152.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"224.0"} y1={"108.0"} x2={"232.0"} y2={"108.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"219.0"} y={"112.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"224.0"} y1={"68.0"} x2={"232.0"} y2={"68.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"219.0"} y={"72.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"224.0"} y1={"28.0"} x2={"232.0"} y2={"28.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"219.0"} y={"32.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <text x={"219.0"} y={"204.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"0"}</MathText>
            </text>
            <text x={"436.0"} y={"179.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"x"}</MathText>
              </tspan>
            </text>
            <text x={"240.0"} y={"14.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"y"}</MathText>
              </tspan>
            </text>
            <circle cx={"268.0"} cy={"148.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"282.0"} y={"166.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"A"}</MathText>
            </text>
            <circle cx={"388.0"} cy={"148.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"400.0"} y={"166.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"B"}</MathText>
            </text>
            <circle cx={"308.0"} cy={"68.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"320.0"} y={"60.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"C"}</MathText>
            </text>
            <circle cx={"188.0"} cy={"148.0"} r={"5.5"} fill={"#ec4899"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"172.0"} y={"166.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"A′"}</MathText>
            </text>
            <circle cx={"68.0"} cy={"148.0"} r={"5.5"} fill={"#ec4899"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"54.0"} y={"166.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"B′"}</MathText>
            </text>
            <circle cx={"148.0"} cy={"68.0"} r={"5.5"} fill={"#ec4899"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"134.0"} y={"60.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"C′"}</MathText>
            </text>
          </svg>
          <div className="text-xs text-slate-500 mt-1">
            <MathText>{"O eixo y funciona como espelho. A figura rosa é congruente à azul."}</MathText>
          </div>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-blue-500 bg-blue-50">
          <b>
            <MathText>{"Refletir não muda o tamanho"}</MathText>
          </b>
          <MathText>{"A figura refletida é "}</MathText>
          <b>
            <MathText>{"congruente"}</MathText>
          </b>
          <MathText>{" à original: mesmos lados, mesmos ângulos, apenas “virada do avesso”."}</MathText>
        </div>
        <h3>
          <MathText>{"12.6 Simetria de rotação"}</MathText>
        </h3>
        <p>
          <MathText>{"Uma figura tem "}</MathText>
          <b>
            <MathText>{"simetria de rotação"}</MathText>
          </b>
          <MathText>{" quando, ao "}</MathText>
          <b>
            <MathText>{"girá-la em torno do seu centro"}</MathText>
          </b>
          <MathText>{" por um ângulo menor que uma volta (360°), ela "}</MathText>
          <b>
            <MathText>{"coincide"}</MathText>
          </b>
          <MathText>{" com a posição inicial. O número de posições em que isso acontece em uma volta é a "}</MathText>
          <b>
            <MathText>{"ordem"}</MathText>
          </b>
          <MathText>{" da rotação."}</MathText>
        </p>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 440 180"} className="w-[440px] max-w-full h-auto" role={"img"} aria-label={"Quadrado girando 90 graus e triângulo equilátero girando 120 graus"}>
            <marker id={"m25"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#ec4899"}>
              </path>
            </marker>
            <polygon points={"66,41 154,41 154,129 66,129"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.6"} strokeLinejoin={"round"}>
            </polygon>
            <text x={"56.0"} y={"35.0"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"A"}</MathText>
            </text>
            <text x={"164.0"} y={"35.0"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"B"}</MathText>
            </text>
            <text x={"164.0"} y={"145.0"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"C"}</MathText>
            </text>
            <text x={"56.0"} y={"145.0"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"D"}</MathText>
            </text>
            <circle cx={"110"} cy={"85"} r={"4"} fill={"#ec4899"}>
            </circle>
            <path d={"M88,73 A25,25 0 0 1 122,63"} fill={"none"} stroke={"#ec4899"} strokeWidth={"2.4"} markerEnd={"url(#m25)"}>
            </path>
            <text x={"110.0"} y={"115.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"90°"}</MathText>
            </text>
            <text x={"110.0"} y={"168.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"quadrado: gira 90° e coincide"}</MathText>
            </text>
            <polygon points={"320.0,39.0 275.0,117.0 365.0,117.0"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.6"} strokeLinejoin={"round"}>
            </polygon>
            <circle cx={"320"} cy={"91"} r={"4"} fill={"#ec4899"}>
            </circle>
            <text x={"320.0"} y={"31.0"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"A"}</MathText>
            </text>
            <text x={"287.0"} y={"133.0"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"B"}</MathText>
            </text>
            <text x={"353.0"} y={"133.0"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"C"}</MathText>
            </text>
            <path d={"M302,81 A22,22 0 0 1 328,71"} fill={"none"} stroke={"#ec4899"} strokeWidth={"2.4"} markerEnd={"url(#m25)"}>
            </path>
            <text x={"320.0"} y={"127.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"120°"}</MathText>
            </text>
            <text x={"320.0"} y={"168.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"triângulo equilátero: gira 120°"}</MathText>
            </text>
          </svg>
        </div>
        <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[ \\text{menor ângulo de giro} = \\dfrac{360^\\circ}{\\text{ordem}} \\]"}</MathText>
        </div>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Figura"}</MathText>
              </th>
              <th>
                <MathText>{"Ordem"}</MathText>
              </th>
              <th>
                <MathText>{"Menor giro"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <MathText>{"Triângulo equilátero"}</MathText>
              </td>
              <td>
                <MathText>{"3"}</MathText>
              </td>
              <td>
                <MathText>{"\\(360^\\circ \\div 3 = 120^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Quadrado"}</MathText>
              </td>
              <td>
                <MathText>{"4"}</MathText>
              </td>
              <td>
                <MathText>{"\\(360^\\circ \\div 4 = 90^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Hexágono regular"}</MathText>
              </td>
              <td>
                <MathText>{"6"}</MathText>
              </td>
              <td>
                <MathText>{"\\(360^\\circ \\div 6 = 60^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Retângulo (não quadrado)"}</MathText>
              </td>
              <td>
                <MathText>{"2"}</MathText>
              </td>
              <td>
                <MathText>{"\\(360^\\circ \\div 2 = 180^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <MathText>{"Letra F"}</MathText>
              </td>
              <td>
                <MathText>{"1 (só gira de volta inteira)"}</MathText>
              </td>
              <td>
                <MathText>{"\\(360^\\circ\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 3 — Um pentágono regular gira até coincidir. Qual o menor ângulo de giro?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Pentágono regular: 5 lados, ordem 5."}</MathText>
            </div>
            <div>
              <MathText>{"\\(360^\\circ \\div 5 = 72^\\circ\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Menor giro: \\(72^\\circ\\)."}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"12.7 A ponte para as transformações geométricas"}</MathText>
        </h3>
        <p>
          <MathText>{"Neste capítulo você viu que mover uma figura (virar, girar) pode deixá-la "}</MathText>
          <b>
            <MathText>{"idêntica"}</MathText>
          </b>
          <MathText>{" a ela mesma ou a outra figura congruente. No próximo curso essas ideias ganham nome e método:"}</MathText>
        </p>
        <div className="grid gap-3 mt-4 md:grid-cols-3 [&>div]:rounded-2xl [&>div]:p-4 [&>div]:text-sm [&>div]:leading-7 [&>div]:text-slate-700">
          <div className="bg-indigo-50">
            <b>
              <MathText>{"Translação"}</MathText>
            </b>
            <br />
            <MathText>{"A figura "}</MathText>
            <b>
              <MathText>{"desliza"}</MathText>
            </b>
            <MathText>{" sem girar nem virar: todos os pontos andam o mesmo tanto, na mesma direção. No plano: somar um valor fixo a todos os \\(x\\) e outro valor fixo a todos os \\(y\\)."}</MathText>
          </div>
          <div className="bg-amber-50">
            <b>
              <MathText>{"Reflexão"}</MathText>
            </b>
            <br />
            <MathText>{"A figura é "}</MathText>
            <b>
              <MathText>{"espelhada"}</MathText>
            </b>
            <MathText>{" em relação a um eixo. Você já sabe fazer: lição 12.5."}</MathText>
          </div>
          <div className="bg-emerald-50">
            <b>
              <MathText>{"Rotação"}</MathText>
            </b>
            <br />
            <MathText>{"A figura "}</MathText>
            <b>
              <MathText>{"gira"}</MathText>
            </b>
            <MathText>{" em torno de um ponto, por um ângulo. Você já usou: 12.6."}</MathText>
          </div>
        </div>
        <p>
          <MathText>{"As três "}</MathText>
          <b>
            <MathText>{"preservam"}</MathText>
          </b>
          <MathText>{" tamanhos e ângulos, então a figura obtida é sempre congruente à original. O que você aprendeu em ângulos (lições 3 e 4), no plano cartesiano (lição 11) e nos inteiros (lição 10) será usado a todo momento."}</MathText>
        </p>
        <h3>
          <MathText>{"12.8 Cuidados"}</MathText>
        </h3>
        <ul>
          <li>
            <b>
              <MathText>{"Confundir congruente com “parecido”"}</MathText>
            </b>
            <MathText>{": congruente exige o "}</MathText>
            <u>
              <MathText>{"mesmo tamanho"}</MathText>
            </u>
            <MathText>{"."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Considerar qualquer linha de dobra como eixo"}</MathText>
            </b>
            <MathText>{": só vale se as metades coincidirem."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Esquecer a distância igual"}</MathText>
            </b>
            <MathText>{": o simétrico fica "}</MathText>
            <u>
              <MathText>{"à mesma distância"}</MathText>
            </u>
            <MathText>{" do eixo, do outro lado."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Trocar as regras da reflexão"}</MathText>
            </b>
            <MathText>{": no eixo y muda o \\(x\\); no eixo x muda o \\(y\\)."}</MathText>
          </li>
        </ul>
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-gotab={"laboratorio"}>
          <MathText>{"🔬 Abrir o Exp. 5 (reflexão no plano)"}</MathText>
        </button>
        <GeometryQuickCheck index={26} />
        <GeometryQuickCheck index={27} />
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto={"14"}>
          <MathText>{"✏️ Fazer os exercícios do nível 14"}</MathText>
        </button>
      </article>
      <article className="geometry-basica-lesson bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_.lesson-tag]:text-[.7rem] [&_.lesson-tag]:font-extrabold [&_.lesson-tag]:tracking-[.12em] [&_.lesson-tag]:uppercase [&_.lesson-tag]:text-indigo-600 [&_h2]:text-[1.6rem] [&_h2]:font-black [&_h2]:mt-1 [&_h2]:text-slate-800 [&_h3]:font-extrabold [&_h3]:text-lg [&_h3]:mt-7 [&_h3]:text-indigo-800 [&_h4]:mt-4 [&_h4]:font-bold [&_p]:leading-[1.85] [&_p]:text-slate-600 [&_p]:mt-3 [&_ul]:pl-6 [&_ul]:text-slate-600 [&_ul]:leading-[1.85] [&_ul]:mt-2 [&_ul]:list-disc [&_ol]:pl-6 [&_ol]:text-slate-600 [&_ol]:leading-[1.85] [&_ol]:mt-2 [&_ol]:list-decimal [&_li]:mt-1 [&_b]:text-slate-800 [&_strong]:text-slate-800" id={"l13"}>
        <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 13"}</MathText>
        </div>
        <h2>
          <MathText>{"Resolvendo problemas de geometria no papel"}</MathText>
        </h2>
        <p>
          <MathText>{"Você já conhece as ferramentas: medidas, ângulos, perímetro, área, círculo, inteiros e plano cartesiano. Falta o que une tudo: um "}</MathText>
          <b>
            <MathText>{"método"}</MathText>
          </b>
          <MathText>{" para atacar um problema que vem em forma de texto. Quem tem método não trava, porque sempre sabe o próximo passo."}</MathText>
        </p>
        <h3>
          <MathText>{"13.1 O método em 8 passos"}</MathText>
        </h3>
        <ol>
          <li>
            <b>
              <MathText>{"Leia com calma"}</MathText>
            </b>
            <MathText>{", duas vezes. Grife os números e as palavras-chave (perímetro, área, “a mais”, “o dobro”…)."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Desenhe"}</MathText>
            </b>
            <MathText>{" a situação, mesmo que seja um rabisco. Geometria sem desenho é adivinhação."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Marque os dados na figura"}</MathText>
            </b>
            <MathText>{" (medidas, ângulos, coordenadas)."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Descubra o que o problema pede"}</MathText>
            </b>
            <MathText>{" e dê uma letra ao que for desconhecido (\\(x\\))."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Escolha a ferramenta"}</MathText>
            </b>
            <MathText>{": qual fórmula ou propriedade liga os dados ao que se pede?"}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Cuide das unidades"}</MathText>
            </b>
            <MathText>{": converta tudo para a mesma unidade antes de calcular."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Calcule"}</MathText>
            </b>
            <MathText>{" no papel, uma linha por passo, escrevendo a unidade no resultado."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Confira"}</MathText>
            </b>
            <MathText>{": o resultado faz sentido? Um quarto de 40 m² de área? Um ângulo de 200° num triângulo? Estimativas rápidas pegam muitos erros."}</MathText>
          </li>
        </ol>
        <h3>
          <MathText>{"13.2 Exemplo 1: ângulos e equação"}</MathText>
        </h3>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"PROBLEMA — Dois ângulos adjacentes ficam sobre uma reta. Um mede \\(x\\) e o outro mede \\(3x + 20^\\circ\\). Quanto mede cada um?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Desenho: dois ângulos lado a lado sobre uma reta formam um ângulo raso (180°)."}</MathText>
            </div>
            <div>
              <MathText>{"Equação: \\(x + (3x + 20) = 180\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(4x + 20 = 180\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(4x = 180 - 20 = 160\\)"}</MathText>
            </div>
            <div>
              <MathText>{"\\(x = 160 \\div 4 = 40\\)"}</MathText>
            </div>
            <div>
              <MathText>{"O outro: \\(3 \\cdot 40 + 20 = 140\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Confira: \\(40 + 140 = 180\\) ✓"}</MathText>
            </div>
            <div>
              <MathText>{"Resposta: \\(40^\\circ\\) e \\(140^\\circ\\)."}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 420 150"} className="w-[420px] max-w-full h-auto" role={"img"} aria-label={"Dois ângulos adjacentes sobre uma reta: x e 3x mais 20 graus"}>
            <line x1={"20.0"} y1={"120.0"} x2={"360.0"} y2={"120.0"} stroke={"#475569"} strokeWidth={"2.6"} strokeLinecap={"round"}>
            </line>
            <line x1={"190.0"} y1={"120.0"} x2={"281.9"} y2={"42.9"} stroke={"#4f46e5"} strokeWidth={"3"} strokeLinecap={"round"}>
            </line>
            <circle cx={"190"} cy={"120"} r={"4.5"} fill={"#ec4899"}>
            </circle>
            <path d={"M228.0,120.0 A38,38 0 0 0 219.1,95.6"} fill={"none"} stroke={"#ec4899"} strokeWidth={"2.6"}>
            </path>
            <path d={"M234.4,82.7 A58,58 0 0 0 132.0,120.0"} fill={"none"} stroke={"#f59e0b"} strokeWidth={"2.6"}>
            </path>
            <text x={"246.7"} y={"103.5"} textAnchor={"start"} fontSize={"15"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"x"}</MathText>
            </text>
            <text x={"160.8"} y={"47.7"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#f59e0b"}>
              <MathText>{"3x + 20°"}</MathText>
            </text>
          </svg>
        </div>
        <h3>
          <MathText>{"13.3 Exemplo 2: perímetro, cerca e custo"}</MathText>
        </h3>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"PROBLEMA — Seu João vai cercar um terreno retangular de 18 m por 12 m com 3 fios de arame. O arame custa R$ 2,50 o metro. Quanto ele gastará?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Perímetro: \\(P = 2 \\cdot (18 + 12) = 2 \\cdot 30 = 60\\ \\text{m}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"3 fios: \\(3 \\cdot 60 = 180\\ \\text{m}\\) de arame"}</MathText>
            </div>
            <div>
              <MathText>{"Custo: \\(180 \\cdot 2{,}50 = 450\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Estimativa: 180 m a R$ 2,50 ≈ 180 · 2 + 180 · 0,5 = 360 + 90 = 450 ✓"}</MathText>
            </div>
            <div>
              <MathText>{"Resposta: R$ 450,00."}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 330 170"} className="w-[330px] max-w-full h-auto" role={"img"} aria-label={"Terreno retangular de 18 m por 12 m"}>
            <rect x={"50"} y={"30"} width={"216"} height={"108"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.8"}>
            </rect>
            <text x={"158.0"} y={"158.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"18 m"}</MathText>
            </text>
            <text x={"40.0"} y={"88.0"} textAnchor={"end"} fontSize={"15"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"12 m"}</MathText>
            </text>
          </svg>
        </div>
        <h3>
          <MathText>{"13.4 Exemplo 3: figura composta (área e perímetro)"}</MathText>
        </h3>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"PROBLEMA — Um salão em forma de “L” foi obtido de um retângulo de 10 m por 6 m retirando-se um canto retangular de 4 m por 3 m. Qual a área do salão? E o perímetro?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Ideia: área do retângulo grande menos a parte que falta."}</MathText>
            </div>
            <div>
              <MathText>{"Retângulo grande: \\(10 \\cdot 6 = 60\\ \\text{m}^2\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Parte retirada: \\(4 \\cdot 3 = 12\\ \\text{m}^2\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Área: \\(60 - 12 = 48\\ \\text{m}^2\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Perímetro: some todos os lados do contorno em L."}</MathText>
            </div>
            <div>
              <MathText>{"Lados: \\(6 + 3 + 4 + 3 + 10 + 6 = 32\\ \\text{m}\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Observação: é igual ao perímetro do retângulo \\(10 \\times 6\\), que é \\(2 \\cdot (10 + 6) = 32\\ \\text{m}\\). O canto retirado não muda o contorno total!"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 360 200"} className="w-[360px] max-w-full h-auto" role={"img"} aria-label={"Figura em L: retângulo 10 por 6 com um retângulo 4 por 3 retirado"}>
            <polygon points={"50,30 194,30 194,102 290,102 290,174 50,174"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.8"} strokeLinejoin={"round"}>
            </polygon>
            <rect x={"194"} y={"30"} width={"96"} height={"72"} fill={"none"} stroke={"#ec4899"} strokeWidth={"2"} strokeDasharray={"5 4"}>
            </rect>
            <text x={"170.0"} y={"194.0"} textAnchor={"middle"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"10 m"}</MathText>
            </text>
            <text x={"42.0"} y={"107.0"} textAnchor={"end"} fontSize={"14"} fontWeight={"700"} fill={"#1e293b"}>
              <MathText>{"6 m"}</MathText>
            </text>
            <text x={"242.0"} y={"71.0"} textAnchor={"middle"} fontSize={"12.5"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"4 m × 3 m"}</MathText>
            </text>
            <text x={"242.0"} y={"87.0"} textAnchor={"middle"} fontSize={"11.5"} fontWeight={"600"} fill={"#ec4899"}>
              <MathText>{"(parte que falta)"}</MathText>
            </text>
          </svg>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-amber-500 bg-amber-50">
          <b>
            <MathText>{"Dois caminhos para a mesma área"}</MathText>
          </b>
          <MathText>{"Também dá para "}</MathText>
          <b>
            <MathText>{"cortar"}</MathText>
          </b>
          <MathText>{" o L em dois retângulos: \\(6 \\cdot 3\\) (em cima, à esquerda) + \\(10 \\cdot 3\\) (embaixo) = \\(18 + 30 = 48\\ \\text{m}^2\\). Se os dois caminhos dão o mesmo resultado, você acertou."}</MathText>
        </div>
        <h3>
          <MathText>{"13.5 Exemplo 4: unidades e quantidade de peças"}</MathText>
        </h3>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"PROBLEMA — O piso de uma sala de 5 m por 4 m será coberto com cerâmicas quadradas de 50 cm de lado. Quantas cerâmicas serão necessárias, comprando 10% a mais para perdas?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"Unidades diferentes: converta 50 cm = 0,5 m."}</MathText>
            </div>
            <div>
              <MathText>{"Área da sala: \\(5 \\cdot 4 = 20\\ \\text{m}^2\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Área de 1 cerâmica: \\(0{,}5 \\cdot 0{,}5 = 0{,}25\\ \\text{m}^2\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Quantidade: \\(20 \\div 0{,}25 = 80\\) cerâmicas"}</MathText>
            </div>
            <div>
              <MathText>{"10% de 80 = 8 a mais: \\(80 + 8 = 88\\)"}</MathText>
            </div>
            <div>
              <MathText>{"Resposta: 88 cerâmicas."}</MathText>
            </div>
          </div>
        </div>
        <h3>
          <MathText>{"13.6 Exemplo 5: no plano cartesiano"}</MathText>
        </h3>
        <div className="bg-[#fffef9] bg-[linear-gradient(#e0e7ff_1px,transparent_1px)] bg-[length:100%_2rem] border border-indigo-200 shadow-[0_8px_24px_#1e1b4b0d] rounded-xl p-5 mt-4">
          <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"PROBLEMA — Um terreno tem formato do triângulo de vértices \\(A(1,1)\\), \\(B(7,1)\\) e \\(C(7,5)\\) (cada unidade vale 10 m). Qual a área do terreno?"}</MathText>
          </div>
          <div className="font-[Caveat,cursive] text-[1.35rem] leading-8 text-blue-900 [&_.katex]:text-[1.05em]">
            <div>
              <MathText>{"\\(\\overline{AB}\\) é horizontal: \\(7 - 1 = 6\\) unidades."}</MathText>
            </div>
            <div>
              <MathText>{"\\(\\overline{BC}\\) é vertical: \\(5 - 1 = 4\\) unidades."}</MathText>
            </div>
            <div>
              <MathText>{"Em medidas reais: \\(60\\ \\text{m}\\) e \\(40\\ \\text{m}\\)."}</MathText>
            </div>
            <div>
              <MathText>{"Os dois lados formam ângulo reto: um é base, o outro é altura."}</MathText>
            </div>
            <div>
              <MathText>{"\\(A = \\dfrac{60 \\cdot 40}{2} = \\dfrac{2400}{2} = 1200\\ \\text{m}^2\\)"}</MathText>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-dashed border-indigo-200 rounded-2xl p-3 mt-4 overflow-x-auto text-center">
          <svg viewBox={"0 0 376 296"} className="w-[376px] max-w-full h-auto" role={"img"} aria-label={"Triângulo ABC no plano cartesiano"}>
            <marker id={"m26"} viewBox={"0 0 10 10"} refX={"8"} refY={"5"} markerWidth={"7"} markerHeight={"7"} orient={"auto-start-reverse"}>
              <path d={"M0,0 L10,5 L0,10 z"} fill={"#334155"}>
              </path>
            </marker>
            <line x1={"28.0"} y1={"28.0"} x2={"28.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"68.0"} y1={"28.0"} x2={"68.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"108.0"} y1={"28.0"} x2={"108.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"148.0"} y1={"28.0"} x2={"148.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"188.0"} y1={"28.0"} x2={"188.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"228.0"} y1={"28.0"} x2={"228.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"268.0"} y1={"28.0"} x2={"268.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"308.0"} y1={"28.0"} x2={"308.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"348.0"} y1={"28.0"} x2={"348.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"268.0"} x2={"348.0"} y2={"268.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"228.0"} x2={"348.0"} y2={"228.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"188.0"} x2={"348.0"} y2={"188.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"148.0"} x2={"348.0"} y2={"148.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"108.0"} x2={"348.0"} y2={"108.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"68.0"} x2={"348.0"} y2={"68.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <line x1={"28.0"} y1={"28.0"} x2={"348.0"} y2={"28.0"} stroke={"#e2e8f0"} strokeWidth={"1"} strokeLinecap={"round"}>
            </line>
            <polygon points={"68.0,228.0 308.0,228.0 308.0,68.0"} fill={"#e0e7ff"} stroke={"#4f46e5"} strokeWidth={"2.6"} strokeLinejoin={"round"}>
            </polygon>
            <rect x={"281.0"} y={"201.0"} width={"9"} height={"9"} fill={"none"} stroke={"#ec4899"} strokeWidth={"2"}>
            </rect>
            <line x1={"18.0"} y1={"268.0"} x2={"360.0"} y2={"268.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m26)"}>
            </line>
            <line x1={"28.0"} y1={"278.0"} x2={"28.0"} y2={"16.0"} stroke={"#334155"} strokeWidth={"2.2"} strokeLinecap={"round"} markerEnd={"url(#m26)"}>
            </line>
            <line x1={"68.0"} y1={"264.0"} x2={"68.0"} y2={"272.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"68.0"} y={"286.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"108.0"} y1={"264.0"} x2={"108.0"} y2={"272.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"108.0"} y={"286.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"148.0"} y1={"264.0"} x2={"148.0"} y2={"272.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"148.0"} y={"286.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"188.0"} y1={"264.0"} x2={"188.0"} y2={"272.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"188.0"} y={"286.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"228.0"} y1={"264.0"} x2={"228.0"} y2={"272.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"228.0"} y={"286.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <line x1={"268.0"} y1={"264.0"} x2={"268.0"} y2={"272.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"268.0"} y={"286.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"6"}</MathText>
            </text>
            <line x1={"308.0"} y1={"264.0"} x2={"308.0"} y2={"272.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"308.0"} y={"286.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"7"}</MathText>
            </text>
            <line x1={"348.0"} y1={"264.0"} x2={"348.0"} y2={"272.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"348.0"} y={"286.0"} textAnchor={"middle"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"8"}</MathText>
            </text>
            <line x1={"24.0"} y1={"228.0"} x2={"32.0"} y2={"228.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"232.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"1"}</MathText>
            </text>
            <line x1={"24.0"} y1={"188.0"} x2={"32.0"} y2={"188.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"192.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"2"}</MathText>
            </text>
            <line x1={"24.0"} y1={"148.0"} x2={"32.0"} y2={"148.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"152.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"3"}</MathText>
            </text>
            <line x1={"24.0"} y1={"108.0"} x2={"32.0"} y2={"108.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"112.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"4"}</MathText>
            </text>
            <line x1={"24.0"} y1={"68.0"} x2={"32.0"} y2={"68.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"72.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"5"}</MathText>
            </text>
            <line x1={"24.0"} y1={"28.0"} x2={"32.0"} y2={"28.0"} stroke={"#334155"} strokeWidth={"1.6"} strokeLinecap={"round"}>
            </line>
            <text x={"19.0"} y={"32.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"6"}</MathText>
            </text>
            <text x={"19.0"} y={"284.0"} textAnchor={"end"} fontSize={"11"} fontWeight={"600"} fill={"#64748b"}>
              <MathText>{"0"}</MathText>
            </text>
            <text x={"356.0"} y={"259.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"x"}</MathText>
              </tspan>
            </text>
            <text x={"40.0"} y={"14.0"} textAnchor={"middle"} fontSize={"15"} fontWeight={"700"} fill={"#334155"}>
              <tspan fontStyle={"italic"}>
                <MathText>{"y"}</MathText>
              </tspan>
            </text>
            <circle cx={"68.0"} cy={"228.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"64.0"} y={"250.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"A (1, 1)"}</MathText>
            </text>
            <circle cx={"308.0"} cy={"228.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"312.0"} y={"250.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"B (7, 1)"}</MathText>
            </text>
            <circle cx={"308.0"} cy={"68.0"} r={"5.5"} fill={"#4f46e5"} stroke={"#fff"} strokeWidth={"1.8"}>
            </circle>
            <text x={"312.0"} y={"58.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#4f46e5"}>
              <MathText>{"C (7, 5)"}</MathText>
            </text>
            <text x={"188.0"} y={"250.0"} textAnchor={"middle"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"6"}</MathText>
            </text>
            <text x={"324.0"} y={"148.0"} textAnchor={"start"} fontSize={"13"} fontWeight={"700"} fill={"#ec4899"}>
              <MathText>{"4"}</MathText>
            </text>
          </svg>
        </div>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-blue-500 bg-blue-50">
          <b>
            <MathText>{"E o terceiro lado?"}</MathText>
          </b>
          <MathText>{"Ainda não sabemos medir \\(\\overline{AC}\\) (inclinado). Mas para a "}</MathText>
          <b>
            <MathText>{"área"}</MathText>
          </b>
          <MathText>{" nem precisamos dele, porque temos base e altura."}</MathText>
        </div>
        <h3>
          <MathText>{"13.7 Como estimar para conferir"}</MathText>
        </h3>
        <ul>
          <li>
            <b>
              <MathText>{"Arredonde"}</MathText>
            </b>
            <MathText>{": \\(4{,}9 \\cdot 6{,}1 \\approx 5 \\cdot 6 = 30\\)."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Compare com algo conhecido"}</MathText>
            </b>
            <MathText>{": uma quadra de futsal tem uns 800 m². Se sua área deu 8 m² ou 80 000 m², há erro."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Ângulos"}</MathText>
            </b>
            <MathText>{": num triângulo, a soma é 180°; num quadrilátero, 360°. Se não bater, revise."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Unidade"}</MathText>
            </b>
            <MathText>{": área termina em “quadrado” (cm², m²); perímetro, não."}</MathText>
          </li>
        </ul>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-amber-500 bg-amber-50">
          <b>
            <MathText>{"Calculadoras de apoio"}</MathText>
          </b>
          <MathText>{"Use a aba "}</MathText>
          <b>
            <MathText>{"Calculadoras"}</MathText>
          </b>
          <MathText>{" (perímetro e área passo a passo, ângulos e polígonos, conversor de unidades) "}</MathText>
          <u>
            <MathText>{"depois"}</MathText>
          </u>
          <MathText>{" de fazer à mão, só para conferir."}</MathText>
        </div>
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-gotab={"ferramentas"}>
          <MathText>{"🧮 Abrir as calculadoras"}</MathText>
        </button>
        <GeometryQuickCheck index={28} />
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto={"15"}>
          <MathText>{"✏️ Fazer os exercícios do nível 15"}</MathText>
        </button>
      </article>
      <article className="geometry-basica-lesson bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_.lesson-tag]:text-[.7rem] [&_.lesson-tag]:font-extrabold [&_.lesson-tag]:tracking-[.12em] [&_.lesson-tag]:uppercase [&_.lesson-tag]:text-indigo-600 [&_h2]:text-[1.6rem] [&_h2]:font-black [&_h2]:mt-1 [&_h2]:text-slate-800 [&_h3]:font-extrabold [&_h3]:text-lg [&_h3]:mt-7 [&_h3]:text-indigo-800 [&_h4]:mt-4 [&_h4]:font-bold [&_p]:leading-[1.85] [&_p]:text-slate-600 [&_p]:mt-3 [&_ul]:pl-6 [&_ul]:text-slate-600 [&_ul]:leading-[1.85] [&_ul]:mt-2 [&_ul]:list-disc [&_ol]:pl-6 [&_ol]:text-slate-600 [&_ol]:leading-[1.85] [&_ol]:mt-2 [&_ol]:list-decimal [&_li]:mt-1 [&_b]:text-slate-800 [&_strong]:text-slate-800" id={"l14"}>
        <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 14"}</MathText>
        </div>
        <h2>
          <MathText>{"Erros comuns e folha de cola"}</MathText>
        </h2>
        <p>
          <MathText>{"Quem sabe "}</MathText>
          <b>
            <MathText>{"onde as pessoas costumam errar"}</MathText>
          </b>
          <MathText>{" erra menos. Leia esta lição antes de começar a lista de problemas e volte a ela sempre que um resultado parecer estranho. Se for imprimir, esta é a lição para guardar."}</MathText>
        </p>
        <h3>
          <MathText>{"14.1 Os 12 erros mais comuns"}</MathText>
        </h3>
        <div className="grid gap-3 mt-4 sm:grid-cols-2 [&>div]:rounded-2xl [&>div]:p-4 [&>div]:text-sm [&>div]:leading-7 [&>div]:text-slate-700">
          <div className="bg-red-50 border border-red-200">
            <b>
              <MathText>{"1. Régua sem começar do zero"}</MathText>
            </b>
            <br />
            <MathText>{"Medir um segmento de “2” a “7” e dizer 7 cm."}</MathText>
          </div>
          <div className="bg-emerald-50 border border-emerald-200">
            <b>
              <MathText>{"Certo"}</MathText>
            </b>
            <br />
            <MathText>{"Alinhe o "}</MathText>
            <u>
              <MathText>{"zero"}</MathText>
            </u>
            <MathText>{" da régua com a ponta; ou subtraia as leituras: \\(7 - 2 = 5\\ \\text{cm}\\)."}</MathText>
          </div>
          <div className="bg-red-50 border border-red-200">
            <b>
              <MathText>{"2. Escala errada do transferidor"}</MathText>
            </b>
            <br />
            <MathText>{"Ler 130° num ângulo que é obviamente agudo."}</MathText>
          </div>
          <div className="bg-emerald-50 border border-emerald-200">
            <b>
              <MathText>{"Certo"}</MathText>
            </b>
            <br />
            <MathText>{"Use a escala que começa em 0 no "}</MathText>
            <u>
              <MathText>{"lado que você alinhou"}</MathText>
            </u>
            <MathText>{". Antes de ler, pergunte: o ângulo é agudo ou obtuso?"}</MathText>
          </div>
          <div className="bg-red-50 border border-red-200">
            <b>
              <MathText>{"3. Confundir perímetro com área"}</MathText>
            </b>
            <br />
            <MathText>{"Somar lados quando se pede área (ou multiplicar quando se pede perímetro)."}</MathText>
          </div>
          <div className="bg-emerald-50 border border-emerald-200">
            <b>
              <MathText>{"Certo"}</MathText>
            </b>
            <br />
            <MathText>{"Perímetro = "}</MathText>
            <b>
              <MathText>{"contorno"}</MathText>
            </b>
            <MathText>{" (metros, cm). Área = "}</MathText>
            <b>
              <MathText>{"superfície"}</MathText>
            </b>
            <MathText>{" (m², cm²)."}</MathText>
          </div>
          <div className="bg-red-50 border border-red-200">
            <b>
              <MathText>{"4. Usar o lado inclinado como altura"}</MathText>
            </b>
            <br />
            <MathText>{"No paralelogramo ou no triângulo, multiplicar pela lateral."}</MathText>
          </div>
          <div className="bg-emerald-50 border border-emerald-200">
            <b>
              <MathText>{"Certo"}</MathText>
            </b>
            <br />
            <MathText>{"A "}</MathText>
            <b>
              <MathText>{"altura"}</MathText>
            </b>
            <MathText>{" forma 90° com a base. O lado inclinado é maior que a altura."}</MathText>
          </div>
          <div className="bg-red-50 border border-red-200">
            <b>
              <MathText>{"5. Esquecer o ÷ 2 no triângulo"}</MathText>
            </b>
            <br />
            <MathText>{"\\(A = 10 \\cdot 6 = 60\\)"}</MathText>
          </div>
          <div className="bg-emerald-50 border border-emerald-200">
            <b>
              <MathText>{"Certo"}</MathText>
            </b>
            <br />
            <MathText>{"\\(A = \\dfrac{10 \\cdot 6}{2} = 30\\). Triângulo é "}</MathText>
            <u>
              <MathText>{"metade"}</MathText>
            </u>
            <MathText>{" de um paralelogramo."}</MathText>
          </div>
          <div className="bg-red-50 border border-red-200">
            <b>
              <MathText>{"6. Misturar unidades"}</MathText>
            </b>
            <br />
            <MathText>{"\\(2\\ \\text{m} + 50\\ \\text{cm} = 52\\)"}</MathText>
          </div>
          <div className="bg-emerald-50 border border-emerald-200">
            <b>
              <MathText>{"Certo"}</MathText>
            </b>
            <br />
            <MathText>{"Converta antes: \\(200\\ \\text{cm} + 50\\ \\text{cm} = 250\\ \\text{cm}\\) (ou \\(2{,}5\\ \\text{m}\\))."}</MathText>
          </div>
          <div className="bg-red-50 border border-red-200">
            <b>
              <MathText>{"7. Converter área como se fosse comprimento"}</MathText>
            </b>
            <br />
            <MathText>{"\\(1\\ \\text{m}^2 = 100\\ \\text{cm}^2\\)"}</MathText>
          </div>
          <div className="bg-emerald-50 border border-emerald-200">
            <b>
              <MathText>{"Certo"}</MathText>
            </b>
            <br />
            <MathText>{"\\(1\\ \\text{m}^2 = 100 \\cdot 100 = 10\\,000\\ \\text{cm}^2\\). Área tem duas dimensões."}</MathText>
          </div>
          <div className="bg-red-50 border border-red-200">
            <b>
              <MathText>{"8. Confundir raio e diâmetro"}</MathText>
            </b>
            <br />
            <MathText>{"Usar \\(d\\) em \\(\\pi r^2\\)."}</MathText>
          </div>
          <div className="bg-emerald-50 border border-emerald-200">
            <b>
              <MathText>{"Certo"}</MathText>
            </b>
            <br />
            <MathText>{"\\(d = 2r\\), ou seja, \\(r = d \\div 2\\). Na área, eleve o "}</MathText>
            <u>
              <MathText>{"raio"}</MathText>
            </u>
            <MathText>{" ao quadrado."}</MathText>
          </div>
          <div className="bg-red-50 border border-red-200">
            <b>
              <MathText>{"9. Trocar \\(x\\) e \\(y\\)"}</MathText>
            </b>
            <br />
            <MathText>{"Marcar \\((2, 5)\\) como \\((5, 2)\\)."}</MathText>
          </div>
          <div className="bg-emerald-50 border border-emerald-200">
            <b>
              <MathText>{"Certo"}</MathText>
            </b>
            <br />
            <MathText>{"Horizontal primeiro (\\(x\\)), depois vertical (\\(y\\))."}</MathText>
          </div>
          <div className="bg-red-50 border border-red-200">
            <b>
              <MathText>{"10. Confundir \\(-3^2\\) com \\((-3)^2\\)"}</MathText>
            </b>
            <br />
            <MathText>{"Dizer que os dois valem 9."}</MathText>
          </div>
          <div className="bg-emerald-50 border border-emerald-200">
            <b>
              <MathText>{"Certo"}</MathText>
            </b>
            <br />
            <MathText>{"\\(-3^2 = -9\\) e \\((-3)^2 = 9\\). O parêntese diz quem é a base."}</MathText>
          </div>
          <div className="bg-red-50 border border-red-200">
            <b>
              <MathText>{"11. Distância entre números de sinais diferentes"}</MathText>
            </b>
            <br />
            <MathText>{"De \\(-3\\) a \\(4\\): \\(4 - 3 = 1\\)."}</MathText>
          </div>
          <div className="bg-emerald-50 border border-emerald-200">
            <b>
              <MathText>{"Certo"}</MathText>
            </b>
            <br />
            <MathText>{"\\(|4 - (-3)| = 7\\). Atravessa o zero: some os módulos."}</MathText>
          </div>
          <div className="bg-red-50 border border-red-200">
            <b>
              <MathText>{"12. Somar ângulos que não são do mesmo triângulo"}</MathText>
            </b>
            <br />
            <MathText>{"Dizer que dois triângulos juntos somam 180°."}</MathText>
          </div>
          <div className="bg-emerald-50 border border-emerald-200">
            <b>
              <MathText>{"Certo"}</MathText>
            </b>
            <br />
            <MathText>{"180° é a soma dos "}</MathText>
            <u>
              <MathText>{"três ângulos de um mesmo"}</MathText>
            </u>
            <MathText>{" triângulo."}</MathText>
          </div>
        </div>
        <h3>
          <MathText>{"14.2 Folha de cola: fórmulas e propriedades"}</MathText>
        </h3>
        <table className="relative block w-full border-collapse mt-4 text-sm overflow-x-auto [&_th]:bg-indigo-100 [&_th]:text-indigo-900 [&_th]:text-left [&_th]:p-2 [&_th]:font-extrabold [&_th]:whitespace-nowrap [&_td]:border-t [&_td]:border-slate-100 [&_td]:p-2 [&_td]:text-slate-600 [&_td]:align-top">
          <thead>
            <tr>
              <th>
                <MathText>{"Assunto"}</MathText>
              </th>
              <th>
                <MathText>{"Fórmula ou ideia"}</MathText>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>
                  <MathText>{"Ângulos"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"complementares: soma \\(90^\\circ\\) · suplementares: soma \\(180^\\circ\\) · opostos pelo vértice: iguais · volta inteira: \\(360^\\circ\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Triângulo"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"soma dos ângulos internos \\(= 180^\\circ\\) · cada lado menor que a soma dos outros dois · isósceles: ângulos da base iguais"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Polígono de \\(n\\) lados"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"soma dos ângulos internos \\(S = (n - 2) \\cdot 180^\\circ\\) · se regular, cada ângulo \\(= S \\div n\\) · diagonais \\(\\dfrac{n(n-3)}{2}\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Perímetro"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"soma de todos os lados · quadrado \\(4\\ell\\) · retângulo \\(2(b + h)\\) · polígono regular \\(n \\cdot \\ell\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Área: quadrado"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"\\(\\ell^2\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Área: retângulo"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"\\(b \\cdot h\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Área: paralelogramo"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"\\(b \\cdot h\\) (altura perpendicular à base)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Área: triângulo"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"\\(\\dfrac{b \\cdot h}{2}\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Área: trapézio"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"\\(\\dfrac{(B + b) \\cdot h}{2}\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Área: losango"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"\\(\\dfrac{D \\cdot d}{2}\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Unidades"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"comprimento: de km para m, ×1000; de m para cm, ×100; de cm para mm, ×10 · área: \\(1\\ \\text{m}^2 = 10\\,000\\ \\text{cm}^2\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Círculo"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"\\(d = 2r\\) · \\(C = 2\\pi r\\) · \\(A = \\pi r^2\\) · \\(\\pi \\approx 3{,}14\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Inteiros"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"sinais iguais: soma e mantém · sinais diferentes: subtrai e fica o sinal do maior módulo · \\(a - (-b) = a + b\\) · \\(+\\cdot+=+,\\ -\\cdot-=+,\\ +\\cdot-=-\\)"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Plano cartesiano"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"par ordenado \\((x, y)\\) · quadrantes I \\((+,+)\\), II \\((-,+)\\), III \\((-,-)\\), IV \\((+,-)\\) · segmento horizontal \\(|x_2 - x_1|\\), vertical \\(|y_2 - y_1|\\) · ponto médio: médias das coordenadas"}</MathText>
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  <MathText>{"Simetria"}</MathText>
                </b>
              </td>
              <td>
                <MathText>{"reflexão no eixo y: \\((x, y) \\to (-x, y)\\) · no eixo x: \\((x, y) \\to (x, -y)\\) · polígono regular de \\(n\\) lados tem \\(n\\) eixos · giro mínimo \\(= 360^\\circ \\div \\text{ordem}\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>
          <MathText>{"14.3 Glossário"}</MathText>
        </h3>
        <ul>
          <li>
            <b>
              <MathText>{"Segmento"}</MathText>
            </b>
            <MathText>{": parte de uma reta entre dois pontos. "}</MathText>
            <b>
              <MathText>{"Semirreta"}</MathText>
            </b>
            <MathText>{": começa num ponto e segue sem fim. "}</MathText>
            <b>
              <MathText>{"Reta"}</MathText>
            </b>
            <MathText>{": sem começo nem fim."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Perpendiculares"}</MathText>
            </b>
            <MathText>{": formam ângulo de 90°. "}</MathText>
            <b>
              <MathText>{"Paralelas"}</MathText>
            </b>
            <MathText>{": nunca se encontram."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Vértice"}</MathText>
            </b>
            <MathText>{": ponto onde dois lados se encontram. "}</MathText>
            <b>
              <MathText>{"Diagonal"}</MathText>
            </b>
            <MathText>{": segmento que liga dois vértices não vizinhos."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Base"}</MathText>
            </b>
            <MathText>{" e "}</MathText>
            <b>
              <MathText>{"altura"}</MathText>
            </b>
            <MathText>{": a altura é a distância perpendicular à base."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Congruente"}</MathText>
            </b>
            <MathText>{": mesma forma e mesmo tamanho. "}</MathText>
            <b>
              <MathText>{"Eixo de simetria"}</MathText>
            </b>
            <MathText>{": linha que divide a figura em duas metades espelhadas."}</MathText>
          </li>
          <li>
            <b>
              <MathText>{"Origem"}</MathText>
            </b>
            <MathText>{": ponto \\((0, 0)\\). "}</MathText>
            <b>
              <MathText>{"Quadrante"}</MathText>
            </b>
            <MathText>{": cada uma das quatro regiões do plano cartesiano. "}</MathText>
            <b>
              <MathText>{"Módulo"}</MathText>
            </b>
            <MathText>{": distância até o zero."}</MathText>
          </li>
        </ul>
        <h3>
          <MathText>{"14.4 Estou pronto para o Teorema de Pitágoras?"}</MathText>
        </h3>
        <p>
          <MathText>{"Responda mentalmente (ou no caderno), depois abra a resposta para conferir. Se errar mais de duas, volte à lição indicada."}</MathText>
        </p>
        <ol>
          <li>
            <MathText>{"Quanto mede o ângulo entre duas retas perpendiculares? "}</MathText>
            <details>
              <summary className="underline text-indigo-700 cursor-pointer">
                <MathText>{"ver resposta"}</MathText>
              </summary>
              <MathText>{"90° (ângulo reto). Lições 2 e 3."}</MathText>
            </details>
          </li>
          <li>
            <MathText>{"Qual a soma dos ângulos de um triângulo? E se um deles é reto, quanto soma os outros dois? "}</MathText>
            <details>
              <summary className="underline text-indigo-700 cursor-pointer">
                <MathText>{"ver resposta"}</MathText>
              </summary>
              <MathText>{"180°. Os outros dois somam 90° (são complementares). Lições 4 e 6."}</MathText>
            </details>
          </li>
          <li>
            <MathText>{"Num triângulo retângulo, como se chamam o lado oposto ao ângulo reto e os outros dois? "}</MathText>
            <details>
              <summary className="underline text-indigo-700 cursor-pointer">
                <MathText>{"ver resposta"}</MathText>
              </summary>
              <MathText>{"Hipotenusa (o maior) e catetos. Lição 6."}</MathText>
            </details>
          </li>
          <li>
            <MathText>{"Qual a área de um quadrado de lado 7 cm? "}</MathText>
            <details>
              <summary className="underline text-indigo-700 cursor-pointer">
                <MathText>{"ver resposta"}</MathText>
              </summary>
              <MathText>{"\\(7 \\cdot 7 = 49\\ \\text{cm}^2\\). Lição 8."}</MathText>
            </details>
          </li>
          <li>
            <MathText>{"Qual a área de um triângulo de base 8 cm e altura 5 cm? "}</MathText>
            <details>
              <summary className="underline text-indigo-700 cursor-pointer">
                <MathText>{"ver resposta"}</MathText>
              </summary>
              <MathText>{"\\(8 \\cdot 5 \\div 2 = 20\\ \\text{cm}^2\\). Lição 8."}</MathText>
            </details>
          </li>
          <li>
            <MathText>{"Quanto mede um segmento horizontal de \\((-2, 3)\\) a \\((5, 3)\\)? "}</MathText>
            <details>
              <summary className="underline text-indigo-700 cursor-pointer">
                <MathText>{"ver resposta"}</MathText>
              </summary>
              <MathText>{"\\(|5 - (-2)| = 7\\). Lição 11."}</MathText>
            </details>
          </li>
          <li>
            <MathText>{"Quanto vale \\((-4)^2\\)? E \\(-4^2\\)? "}</MathText>
            <details>
              <summary className="underline text-indigo-700 cursor-pointer">
                <MathText>{"ver resposta"}</MathText>
              </summary>
              <MathText>{"\\(16\\) e \\(-16\\). Lição 10."}</MathText>
            </details>
          </li>
          <li>
            <MathText>{"Converta \\(2{,}5\\ \\text{m}\\) em cm. "}</MathText>
            <details>
              <summary className="underline text-indigo-700 cursor-pointer">
                <MathText>{"ver resposta"}</MathText>
              </summary>
              <MathText>{"250 cm. Lição 1."}</MathText>
            </details>
          </li>
          <li>
            <MathText>{"Se \\(x + 2x = 90\\), quanto vale \\(x\\)? "}</MathText>
            <details>
              <summary className="underline text-indigo-700 cursor-pointer">
                <MathText>{"ver resposta"}</MathText>
              </summary>
              <MathText>{"\\(3x = 90\\), então \\(x = 30\\). Lição 4 e Álgebra."}</MathText>
            </details>
          </li>
          <li>
            <MathText>{"Dois triângulos têm os mesmos três lados. São congruentes? "}</MathText>
            <details>
              <summary className="underline text-indigo-700 cursor-pointer">
                <MathText>{"ver resposta"}</MathText>
              </summary>
              <MathText>{"Sim: mesma forma e mesmo tamanho. Lição 12."}</MathText>
            </details>
          </li>
        </ol>
        <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 [&>b:first-child]:block [&>b:first-child]:mb-1 border-l-4 border-emerald-500 bg-emerald-50">
          <b>
            <MathText>{"Você chegou ao fim da teoria! 🎉"}</MathText>
          </b>
          <MathText>{"Agora vá para os exercícios e avance nível por nível. Quando tiver segurança nos níveis 12 a 15, você estará pronto para o "}</MathText>
          <b>
            <MathText>{"Teorema de Pitágoras"}</MathText>
          </b>
          <MathText>{", as "}</MathText>
          <b>
            <MathText>{"relações métricas"}</MathText>
          </b>
          <MathText>{" e as "}</MathText>
          <b>
            <MathText>{"transformações geométricas"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </div>
        <GeometryQuickCheck index={29} />
        <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto={"all"}>
          <MathText>{"✏️ Ir para os exercícios"}</MathText>
        </button>
      </article>
    </div>
  </div>
</section>
  );
}



