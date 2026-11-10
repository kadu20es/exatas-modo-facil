import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export type StudyTab = { id: string; label: string };
type MenuNode = { title: string; to?: string; children?: MenuNode[] };
const subjects: MenuNode[] = [
  {
    title: "Matemática",
    children: [
      {
        title: "Matemática ensino fundamental",
        children: [
          {
            title: "5º ano",
            children: [
              {
                to: "/matematica/multiplicacao-divisao",
                title: "Multiplicação e Divisão",
              },
            ],
          },
          {
            title: "6º ano",
            children: [
              { to: "/matematica/fracoes", title: "Frações" },
              { to: "/matematica/decimais", title: "Decimais" },
              {
                to: "/matematica/introducao-algebra",
                title: "Introdução à Álgebra",
              },
            ],
          },
          {
            title: "7º ano",
            children: [
              { to: "/matematica/razao-proporcao", title: "Razão e Proporção" },
              { to: "/matematica/regra-de-tres", title: "Regra de Três" },
              {
                to: "/matematica/equacoes-1-grau",
                title: "Equações de 1º Grau",
              },
              {
                to: "/matematica/estatistica-basica",
                title: "Estatística Básica",
              },
              { to: "/matematica/geometria-basica", title: "Geometria Básica" },
            ],
          },
          {
            title: "8º ano",
            children: [
              { to: "/matematica/potenciacao", title: "Potenciação" },
              {
                to: "/matematica/notacao-cientifica",
                title: "Notação Científica",
              },
              {
                to: "/matematica/calculo-algebrico",
                title: "Cálculo Algébrico",
              },
              { to: "/matematica/pitagoras", title: "Teorema de Pitágoras" },
              { to: "/matematica/relacoes-metricas", title: "Relações Métricas" },
              { to: "/matematica/transformacoes-geometricas", title: "Transformações Geométricas" },
            ],
          },
          {
            title: "9º ano",
            children: [
              { to: "/matematica/radiciacao", title: "Radiciação" },
              { to: "/matematica/geometria-plana", title: "Geometria Plana" },
              {
                to: "/matematica/equacoes-2-grau",
                title: "Equações de 2º Grau",
              },
            ],
          },
        ],
      },
      {
        title: "Matemática ensino médio",
        children: [
          {
            title: "1º ano",
            children: [
              {
                to: "/matematica/conjuntos-numericos",
                title: "Conjuntos Numéricos",
              },
              {
                to: "/matematica/matematica-financeira",
                title: "Matemática Financeira",
              },
              {
                to: "/matematica/funcao-primeiro-grau",
                title: "Função do 1º Grau",
              },
              {
                to: "/matematica/funcao-segundo-grau",
                title: "Função do 2º Grau",
              },
              {
                to: "/matematica/progressao-geometrica",
                title: "Progressão Geométrica",
              },
              {
                to: "/matematica/progressao-aritmetica",
                title: "Progressão Aritmética",
              },
            ],
          },
          {
            title: "2º ano",
            children: [
              { to: "/matematica/probabilidade", title: "Probabilidade" },
              { to: "/matematica/trigonometria", title: "Trigonometria" },
              {
                to: "/matematica/matrizes-sistemas",
                title: "Matrizes e Sistemas",
              },
              {
                to: "/matematica/analise-combinatoria",
                title: "Análise Combinatória",
              },
              {
                to: "/matematica/exponencial-logaritmo",
                title: "Exponencial e Logaritmo",
              },
            ],
          },
          {
            title: "3º ano",
            children: [
              {
                to: "/matematica/geometria-analitica",
                title: "Geometria Analítica",
              },
              {
                to: "/matematica/estatistica-probabilidade-avancada",
                title: "Estatística e Probabilidade Avançada",
              },
              {
                to: "/matematica/numeros-complexos",
                title: "Números Complexos",
              },
            ],
          },
        ],
      },
    ],
  },
];

function MenuBranch({
  node,
  path,
  openBranches,
  onToggle,
  onNavigate,
  depth = 0,
}: {
  node: MenuNode;
  path: string;
  openBranches: Record<string, boolean>;
  onToggle: (path: string) => void;
  onNavigate: () => void;
  depth?: number;
}) {
  if (node.to)
    return (
      <NavLink
        to={node.to}
        onClick={onNavigate}
        className={({ isActive }) =>
          `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold ${isActive ? "bg-indigo-50 text-indigo-800" : "text-slate-700 hover:bg-slate-50"}`
        }
      >
        <span aria-hidden="true" className="text-indigo-500">
          ›
        </span>
        {node.title}
      </NavLink>
    );
  const isOpen = Boolean(openBranches[path]);
  return (
    <section>
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => onToggle(path)}
        className={`w-full flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-left font-bold hover:bg-slate-50 ${depth === 0 ? "text-indigo-900 text-base" : depth === 1 ? "text-slate-700 text-sm" : "text-slate-600 text-sm"}`}
      >
        <span>{node.title}</span>
        <span
          aria-hidden="true"
          className={`text-indigo-500 transition-transform ${isOpen ? "rotate-90" : ""}`}
        >
          ›
        </span>
      </button>
      {isOpen && (
        <div
          className={`ml-3 pl-2 border-l ${depth < 2 ? "border-indigo-100" : "border-slate-100"}`}
        >
          {node.children?.map((child, index) => (
            <MenuBranch
              key={`${path}/${index}`}
              node={child}
              path={`${path}/${index}`}
              openBranches={openBranches}
              onToggle={onToggle}
              onNavigate={onNavigate}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export function StudyHeader({
  title,
  tagline,
  tabs,
  activeTab,
  onTabChange,
  accent = "indigo",
}: {
  title: string;
  tagline: string;
  tabs: readonly StudyTab[];
  activeTab: string;
  onTabChange: (id: string) => void;
  accent?: "indigo" | "pink";
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openBranches, setOpenBranches] = useState<Record<string, boolean>>({});
  const toggleBranch = (path: string) =>
    setOpenBranches((open) => ({ ...open, [path]: !open[path] }));
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm ${accent === "pink" ? "border-pink-200" : "border-amber-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-3">
            <div className="flex items-center min-w-0 gap-3">
              <button
                type="button"
                aria-label={
                  menuOpen
                    ? "Fechar menu de conteúdos"
                    : "Abrir menu de conteúdos"
                }
                aria-expanded={menuOpen}
                aria-controls="study-side-menu"
                onClick={() => setMenuOpen((open) => !open)}
                className="shrink-0 w-10 h-10 rounded-xl hover:bg-slate-100 grid place-items-center text-slate-700"
                title="Menu de conteúdos"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="min-w-0">
                <div
                  className={`font-black text-lg sm:text-xl ${accent === "pink" ? "text-pink-900" : "text-indigo-900"} truncate`}
                >
                  {title}
                </div>
                <div className="text-[11px] text-slate-500 hidden sm:block truncate">
                  {tagline}
                </div>
              </div>
            </div>
            <nav
              aria-label={`Abas de ${title}`}
              className="flex gap-1 overflow-x-auto ml-2"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onTabChange(tab.id)}
                  aria-current={activeTab === tab.id ? "page" : undefined}
                  className={`tab-btn px-3 py-5 text-sm border-b-2 border-transparent whitespace-nowrap ${activeTab === tab.id ? `active ${accent === "pink" ? "!text-pink-600 !border-pink-600" : ""}` : ""}`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>
      {menuOpen && (
        <div
          className="fixed inset-x-0 top-16 bottom-0 z-40"
          role="presentation"
        >
          <button
            type="button"
            aria-label="Fechar menu de conteúdos"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 w-full h-full bg-slate-950/40"
          />
          <aside
            id="study-side-menu"
            aria-label="Navegação dos conteúdos migrados"
            className="absolute inset-y-0 left-0 w-[min(21rem,88vw)] bg-white shadow-2xl flex flex-col animate-[slide-in_.18s_ease-out]"
          >
            <div className="h-16 px-5 border-b flex items-center justify-between">
              <div className="font-black text-indigo-900">Conteúdos</div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
                className="w-10 h-10 rounded-xl hover:bg-slate-100 text-xl"
              >
                ×
              </button>
            </div>
            <nav
              aria-label="Disciplinas e conteúdos"
              className="p-4 overflow-y-auto space-y-2"
            >
              {subjects.map((subject, index) => (
                <MenuBranch
                  key={subject.title}
                  node={subject}
                  path={String(index)}
                  openBranches={openBranches}
                  onToggle={toggleBranch}
                  onNavigate={() => setMenuOpen(false)}
                />
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
