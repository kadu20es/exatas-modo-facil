import { useState } from "react";
import {
  RootLab,
  RootTools,
} from "../../../components/exercises/matematica/radiciacao/RootTools";
import { RadiciacaoExperimentos } from "../../../components/exercises/matematica/radiciacao/Experimentos";
import { RadiciacaoCalculadoras } from "../../../components/exercises/matematica/radiciacao/Calculadoras";
import { ExerciseList } from "../../../components/UI/ExerciseList";
import { StudyHeader } from "../../../components/UI/StudyHeader";
import { RootExamples } from "../../../components/content/matematica/radiciacao/Conteudo";
import { RadiciacaoCursoCompleto } from "../../../components/content/matematica/radiciacao/CursoCompleto";
import { exercises } from "../../../data/matematica/radiciacao/exercicios";
import {
  radiciacaoReforcoExercises,
  radiciacaoReforcoLevels,
} from "../../../data/matematica/radiciacao/exercicios-reforco";

const tabs = [
  { id: "teoria", label: "📚 Aprender" },
  { id: "exemplos", label: "💡 Exemplos" },
  { id: "laboratorio", label: "🔬 Laboratório" },
  { id: "ferramentas", label: "🧮 Calculadoras" },
  { id: "exercicios", label: "✏️ Exercícios" },
];

function ExerciseBanks({ initialLevel }: { initialLevel: string }) {
  const [bank, setBank] = useState<"reforco" | "original">("reforco");
  const reviewLesson = (lesson: string) => {
    setTimeout(
      () =>
        document
          .getElementById(lesson)
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      80,
    );
  };
  return (
    <section className="space-y-4">
      <div className="bg-white rounded-2xl border p-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setBank("reforco")}
          className={`rounded-xl px-4 py-2 font-bold ${bank === "reforco" ? "bg-indigo-600 text-white" : "bg-indigo-50 text-indigo-800"}`}
        >
          Reforço completo · 71 exercícios
        </button>
        <button
          type="button"
          onClick={() => setBank("original")}
          className={`rounded-xl px-4 py-2 font-bold ${bank === "original" ? "bg-indigo-600 text-white" : "bg-indigo-50 text-indigo-800"}`}
        >
          Banco anterior · 100 exercícios
        </button>
      </div>
      {bank === "reforco" ? (
        <ExerciseList
          key="rad-reforco"
          data={radiciacaoReforcoExercises}
          storageKey="radReforcoSolved"
          total={radiciacaoReforcoExercises.length}
          levels={radiciacaoReforcoLevels.map((level) => level.name)}
          levelInfo={radiciacaoReforcoLevels}
          initialLevel={initialLevel}
          headingText="Treino progressivo · do mais fácil ao mais difícil"
          descriptionText="Há questões de escolha, cálculos e problemas de interpretação. Cada exercício traz uma dica e uma resolução passo a passo."
          instructions="Digite decimais com vírgula e frações como 1/2. Quando a resposta for aproximada, o enunciado informa quantas casas decimais usar."
          onReviewLesson={reviewLesson}
          showUnsolvedFilter
          allowResetProgress
        />
      ) : (
        <ExerciseList
          key="rad-original"
          data={exercises}
          storageKey="radSolved"
          total={100}
          instructions="Para raízes, use V (ex: 2V3 ou V5); para raízes cúbicas, use V[3] (ex: 2V[3]2). Para frações, use a barra; se a raiz não for real, digite N."
          levels={[
            "Nv 1 (Raízes Exatas)",
            "Nv 2 (Sinais/Armadilhas)",
            "Nv 3 (Expoente Fracionário)",
            "Nv 4 (Propriedades)",
            "Nv 5 (Simplificação)",
            "Nv 6 (Racionalização)",
          ]}
        />
      )}
    </section>
  );
}

export default function RadiciacaoPage() {
  const [activeTab, setActiveTab] = useState("teoria");
  const [exerciseLevel, setExerciseLevel] = useState("all");
  const scrollToLesson = (lesson: string) =>
    window.setTimeout(
      () =>
        document
          .getElementById(lesson)
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      80,
    );
  return (
    <div className="min-h-screen bg-indigo-50 text-[#1f2a44]">
      <StudyHeader
        title="√ Radiciação"
        tagline="Raiz exata, aproximada, simplificação e operações com radicais"
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="mx-auto max-w-7xl px-4 py-7">
        {activeTab === "teoria" && (
          <div
            onClick={(event) => {
              const target = event.target;
              if (!(target instanceof Element)) return;
              const action = target.closest<HTMLElement>("[data-gotab]");
              if (action?.dataset.gotab) setActiveTab(action.dataset.gotab);
              const goToLevel = target.closest<HTMLElement>("[data-goto]");
              if (goToLevel?.dataset.goto) {
                setExerciseLevel(goToLevel.dataset.goto);
                setActiveTab("exercicios");
              }
              const link = target.closest<HTMLAnchorElement>('a[href^="#l"]');
              if (link) {
                event.preventDefault();
                scrollToLesson(link.hash.slice(1));
              }
            }}
          >
            <RadiciacaoCursoCompleto />
          </div>
        )}
        {activeTab === "exemplos" && <RootExamples />}
        {activeTab === "laboratorio" && (
          <>
            <RadiciacaoExperimentos />
            <RootLab />
          </>
        )}
        {activeTab === "ferramentas" && (
          <div className="space-y-7">
            <RadiciacaoCalculadoras />
            <RootTools />
          </div>
        )}
        {activeTab === "exercicios" && (
          <ExerciseBanks initialLevel={exerciseLevel} />
        )}
      </main>
      <footer className="mt-8 border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-7 text-center text-sm text-slate-500">
          Radiciação · reforço para o Teorema de Pitágoras · fórmulas
          renderizadas com KaTeX
        </div>
      </footer>
    </div>
  );
}
