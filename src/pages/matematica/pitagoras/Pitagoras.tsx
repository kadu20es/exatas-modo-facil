import { useState } from "react";
import { PitagorasCalculadoras } from "../../../components/exercises/matematica/pitagoras/Calculadoras";
import { PitagorasLaboratorio } from "../../../components/exercises/matematica/pitagoras/Laboratorio";
import { ExerciseList } from "../../../components/UI/ExerciseList";
import { StudyHeader } from "../../../components/UI/StudyHeader";
import { PitagorasTeoria } from "../../../components/content/matematica/pitagoras/Teoria";
import {
  pitagorasExercises,
  pitagorasLevels,
} from "../../../data/matematica/pitagoras/exercicios";

const tabs = [
  { id: "teoria", label: "📚 Aprender" },
  { id: "laboratorio", label: "🔬 Laboratório" },
  { id: "ferramentas", label: "🧮 Calculadoras" },
  { id: "exercicios", label: "✏️ Exercícios" },
];

export default function PitagorasPage() {
  const [activeTab, setActiveTab] = useState("teoria"),
    [exerciseLevel, setExerciseLevel] = useState("all");
  const review = (lesson: string) => {
    setActiveTab("teoria");
    window.setTimeout(
      () =>
        document
          .getElementById(lesson)
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      80,
    );
  };
  return (
    <div className="min-h-screen bg-indigo-50 text-[#1f2a44]">
      <StudyHeader
        title="📐 Teorema de Pitágoras"
        tagline="Hipotenusa, catetos, ternos, diagonais, alturas e distância no plano"
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
              const tab = target.closest<HTMLElement>("[data-gotab]");
              if (tab?.dataset.gotab) setActiveTab(tab.dataset.gotab);
              const level = target.closest<HTMLElement>("[data-goto]");
              if (level?.dataset.goto) {
                setExerciseLevel(level.dataset.goto);
                setActiveTab("exercicios");
              }
              const link = target.closest<HTMLAnchorElement>('a[href^="#l"]');
              if (link) {
                event.preventDefault();
                window.setTimeout(
                  () =>
                    document
                      .getElementById(link.hash.slice(1))
                      ?.scrollIntoView({ behavior: "smooth", block: "start" }),
                  60,
                );
              }
            }}
          >
            <PitagorasTeoria />
          </div>
        )}
        {activeTab === "laboratorio" && <PitagorasLaboratorio />}
        {activeTab === "ferramentas" && <PitagorasCalculadoras />}
        {activeTab === "exercicios" && (
          <ExerciseList
            data={pitagorasExercises}
            storageKey="pitagorasSolved"
            total={pitagorasExercises.length}
            levels={pitagorasLevels.map((level) => level.name)}
            levelInfo={pitagorasLevels}
            initialLevel={exerciseLevel}
            instructions="Digite números inteiros ou decimais com vírgula. Quando a resposta envolver raiz não exata, use o valor indicado no enunciado."
            headingText="100 exercícios em 8 níveis progressivos"
            descriptionText="Comece pelo Nível 1 e avance até os desafios. Há questões de escolha, cálculos e problemas de interpretação; cada exercício inclui dica e resolução passo a passo."
            onReviewLesson={review}
            showUnsolvedFilter
            allowResetProgress
          />
        )}
      </main>
      <footer className="mt-8 border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-7 text-center text-sm text-slate-500">
          Teorema de Pitágoras · curso completo do zero · 8º ano
        </div>
      </footer>
    </div>
  );
}
