import { Link } from "react-router-dom";

const groups = [
  {
    stage: "Ensino Fundamental",
    grades: [
      { grade: "5º ano", items: [["Multiplicação e Divisão", "/matematica/multiplicacao-divisao"]] },
      { grade: "6º ano", items: [["Frações", "/matematica/fracoes"], ["Decimais", "/matematica/decimais"], ["Introdução à Álgebra", "/matematica/introducao-algebra"]] },
      { grade: "7º ano", items: [["Razão e Proporção", "/matematica/razao-proporcao"], ["Regra de Três", "/matematica/regra-de-tres"], ["Equações de 1º Grau", "/matematica/equacoes-1-grau"], ["Estatística Básica", "/matematica/estatistica-basica"], ["Geometria Básica", "/matematica/geometria-basica"]] },
      { grade: "8º ano", items: [["Potenciação", "/matematica/potenciacao"], ["Notação Científica", "/matematica/notacao-cientifica"], ["Cálculo Algébrico", "/matematica/calculo-algebrico"], ["Teorema de Pitágoras", "/matematica/pitagoras"]] },
      { grade: "9º ano", items: [["Radiciação", "/matematica/radiciacao"], ["Geometria Plana", "/matematica/geometria-plana"], ["Equações de 2º Grau", "/matematica/equacoes-2-grau"]] },
    ],
  },
  {
    stage: "Ensino Médio",
    grades: [
      { grade: "1º ano", items: [["Conjuntos Numéricos", "/matematica/conjuntos-numericos"], ["Matemática Financeira", "/matematica/matematica-financeira"], ["Função do 1º Grau", "/matematica/funcao-primeiro-grau"], ["Função do 2º Grau", "/matematica/funcao-segundo-grau"], ["Progressão Geométrica", "/matematica/progressao-geometrica"], ["Progressão Aritmética", "/matematica/progressao-aritmetica"]] },
      { grade: "2º ano", items: [["Probabilidade", "/matematica/probabilidade"], ["Trigonometria", "/matematica/trigonometria"], ["Matrizes e Sistemas", "/matematica/matrizes-sistemas"], ["Análise Combinatória", "/matematica/analise-combinatoria"], ["Exponencial e Logaritmo", "/matematica/exponencial-logaritmo"]] },
      { grade: "3º ano", items: [["Geometria Analítica", "/matematica/geometria-analitica"], ["Estatística e Probabilidade Avançada", "/matematica/estatistica-probabilidade-avancada"], ["Números Complexos", "/matematica/numeros-complexos"]] },
    ],
  },
];

export default function ConteudosPage() {
  return (
    <main className="min-h-screen bg-[#f8f7ff] text-slate-900">
      <header className="border-b border-indigo-100 bg-white/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="flex items-center gap-3 font-black text-indigo-950"><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-xl text-white">∑</span><span>Exatas<span className="block text-xs font-medium text-slate-500">Aprender com sentido</span></span></Link>
          <Link to="/" className="rounded-xl px-4 py-2 text-sm font-bold text-indigo-700 hover:bg-indigo-50">← Página inicial</Link>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[.18em] text-indigo-600">Biblioteca de aprendizagem</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-indigo-950 sm:text-5xl">Escolha o que quer aprender.</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">Os conteúdos estão organizados por etapa e ano escolar. Entre em um tema para estudar a teoria, explorar ferramentas e praticar.</p>
        </div>
        <div className="mt-10 space-y-12">
          {groups.map((group) => <section key={group.stage}>
            <h2 className="flex items-center gap-3 text-2xl font-black text-indigo-950"><span className="h-8 w-1.5 rounded-full bg-indigo-500" />Matemática · {group.stage}</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.grades.map((grade) => <article key={grade.grade} className="rounded-3xl border border-indigo-100 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-wider text-indigo-600">{grade.grade}</h3>
                <ul className="mt-3 space-y-1">
                  {grade.items.map(([title, to]) => <li key={to}><Link to={to} className="group flex items-center justify-between rounded-xl px-3 py-2.5 font-semibold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-800"><span>{title}</span><span aria-hidden="true" className="text-indigo-400 transition group-hover:translate-x-1">→</span></Link></li>)}
                </ul>
              </article>)}
            </div>
          </section>)}
        </div>
      </div>
    </main>
  );
}
