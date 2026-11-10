import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/Home"));
const ConteudosPage = lazy(() => import("./pages/Conteudos"));

const FracoesPage = lazy(() => import("./pages/matematica/fracoes/Fracoes"));
const DecimaisPage = lazy(() => import("./pages/matematica/decimais/Decimais"));
const RazaoProporcaoPage = lazy(
  () => import("./pages/matematica/razao-proporcao/RazaoProporcao"),
);
const RegraDeTresPage = lazy(
  () => import("./pages/matematica/regra-de-tres/RegraDeTres"),
);
const RadiciacaoPage = lazy(
  () => import("./pages/matematica/radiciacao/Radiciacao"),
);
const PotenciacaoPage = lazy(
  () => import("./pages/matematica/potenciacao/Potenciacao"),
);
const NotacaoCientificaPage = lazy(
  () => import("./pages/matematica/notacao-cientifica/NotacaoCientifica"),
);
const EstatisticaBasicaPage = lazy(
  () => import("./pages/matematica/estatistica-basica/EstatisticaBasica"),
);
const EquacoesPrimeiroGrauPage = lazy(
  () => import("./pages/matematica/equacoes-1-grau/EquacoesPrimeiroGrau"),
);
const EquacoesSegundoGrauPage = lazy(
  () => import("./pages/matematica/equacoes-2-grau/EquacoesSegundoGrau"),
);
const CalculoAlgebricoPage = lazy(
  () => import("./pages/matematica/calculo-algebrico/CalculoAlgebrico"),
);
const ConjuntosNumericosPage = lazy(
  () => import("./pages/matematica/conjuntos-numericos/ConjuntosNumericos"),
);
const GeometriaPlanaPage = lazy(
  () => import("./pages/matematica/geometria-plana/GeometriaPlana"),
);
const ProbabilidadePage = lazy(
  () => import("./pages/matematica/probabilidade/Probabilidade"),
);
const GeometriaAnaliticaPage = lazy(
  () => import("./pages/matematica/geometria-analitica/GeometriaAnalitica"),
);
const MatematicaFinanceiraPage = lazy(
  () => import("./pages/matematica/matematica-financeira/MatematicaFinanceira"),
);
const FuncaoPrimeiroGrauPage = lazy(
  () => import("./pages/matematica/funcao-primeiro-grau/FuncaoPrimeiroGrau"),
);
const FuncaoSegundoGrauPage = lazy(
  () => import("./pages/matematica/funcao-segundo-grau/FuncaoSegundoGrau"),
);
const MatrizesSistemasPage = lazy(
  () => import("./pages/matematica/matrizes-sistemas/MatrizesSistemas"),
);
const TrigonometryPage = lazy(
  () => import("./pages/matematica/trigonometria/Trigonometria"),
);
const AdvancedStatisticsPage = lazy(
  () =>
    import(
      "./pages/matematica/estatistica-probabilidade-avancada/EstatisticaProbabilidadeAvancada"
    ),
);
const CombinatoricsPage = lazy(
  () => import("./pages/matematica/analise-combinatoria/AnaliseCombinatoria"),
);
const ExponentialLogPage = lazy(
  () => import("./pages/matematica/exponencial-logaritmo/ExponencialLogaritmo"),
);
const GeometricProgressionPage = lazy(
  () => import("./pages/matematica/progressao-geometrica/ProgressaoGeometrica"),
);
const ArithmeticProgressionPage = lazy(
  () => import("./pages/matematica/progressao-aritmetica/ProgressaoAritmetica"),
);
const ComplexNumbersPage = lazy(
  () => import("./pages/matematica/numeros-complexos/NumerosComplexos"),
);
const MultiplicacaoDivisaoPage = lazy(
  () => import("./pages/matematica/multiplicacao-divisao/MultiplicacaoDivisao"),
);
const IntroducaoAlgebraPage = lazy(
  () => import("./pages/matematica/introducao-algebra/IntroducaoAlgebra"),
);
const GeometriaBasicaPage = lazy(
  () => import("./pages/matematica/geometria-basica/GeometriaBasica"),
);
const PitagorasPage = lazy(
  () => import("./pages/matematica/pitagoras/Pitagoras"),
);

export default function App() {
  return (
    <Suspense
      fallback={
        <main className="min-h-[50vh] grid place-items-center px-4">
          <div
            role="status"
            className="rounded-2xl border bg-white px-6 py-4 text-sm font-semibold text-slate-600 shadow-sm"
          >
            Carregando conteúdo…
          </div>
        </main>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/conteudos" element={<ConteudosPage />} />
        <Route path="/matematica/fracoes" element={<FracoesPage />} />
        <Route path="/matematica/fracoes-refactor" element={<FracoesPage />} />
        <Route path="/matematica/decimais" element={<DecimaisPage />} />
        <Route
          path="/matematica/razao-proporcao"
          element={<RazaoProporcaoPage />}
        />
        <Route path="/matematica/regra-de-tres" element={<RegraDeTresPage />} />
        <Route
          path="/matematica/regra-de-tres-reforco"
          element={<Navigate to="/matematica/regra-de-tres" replace />}
        />
        <Route path="/matematica/radiciacao" element={<RadiciacaoPage />} />
        <Route path="/matematica/potenciacao" element={<PotenciacaoPage />} />
        <Route
          path="/matematica/potenciacao-radiciacao"
          element={<Navigate to="/matematica/potenciacao" replace />}
        />
        <Route
          path="/matematica/notacao-cientifica"
          element={<NotacaoCientificaPage />}
        />
        <Route
          path="/matematica/estatistica-basica"
          element={<EstatisticaBasicaPage />}
        />
        <Route
          path="/matematica/equacoes-1-grau"
          element={<EquacoesPrimeiroGrauPage />}
        />
        <Route
          path="/matematica/equacoes-2-grau"
          element={<EquacoesSegundoGrauPage />}
        />
        <Route
          path="/matematica/calculo-algebrico"
          element={<CalculoAlgebricoPage />}
        />
        <Route
          path="/matematica/conjuntos-numericos"
          element={<ConjuntosNumericosPage />}
        />
        <Route
          path="/matematica/geometria-plana"
          element={<GeometriaPlanaPage />}
        />
        <Route
          path="/matematica/probabilidade"
          element={<ProbabilidadePage />}
        />
        <Route
          path="/matematica/geometria-analitica"
          element={<GeometriaAnaliticaPage />}
        />
        <Route
          path="/matematica/matematica-financeira"
          element={<MatematicaFinanceiraPage />}
        />
        <Route
          path="/matematica/funcao-primeiro-grau"
          element={<FuncaoPrimeiroGrauPage />}
        />
        <Route
          path="/matematica/funcao-segundo-grau"
          element={<FuncaoSegundoGrauPage />}
        />
        <Route
          path="/matematica/matrizes-sistemas"
          element={<MatrizesSistemasPage />}
        />
        <Route
          path="/matematica/trigonometria"
          element={<TrigonometryPage />}
        />
        <Route
          path="/matematica/estatistica-probabilidade-avancada"
          element={<AdvancedStatisticsPage />}
        />
        <Route
          path="/matematica/analise-combinatoria"
          element={<CombinatoricsPage />}
        />
        <Route
          path="/matematica/exponencial-logaritmo"
          element={<ExponentialLogPage />}
        />
        <Route
          path="/matematica/progressao-geometrica"
          element={<GeometricProgressionPage />}
        />
        <Route
          path="/matematica/progressao-aritmetica"
          element={<ArithmeticProgressionPage />}
        />
        <Route
          path="/matematica/numeros-complexos"
          element={<ComplexNumbersPage />}
        />
        <Route
          path="/matematica/multiplicacao-divisao"
          element={<MultiplicacaoDivisaoPage />}
        />
        <Route
          path="/matematica/introducao-algebra"
          element={<IntroducaoAlgebraPage />}
        />
        <Route
          path="/matematica/geometria-basica"
          element={<GeometriaBasicaPage />}
        />
        <Route path="/matematica/pitagoras" element={<PitagorasPage />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Suspense>
  );
}
