import { useState } from "react";
import { TransformacoesGeometricasCalculadoras } from "../../../components/exercises/matematica/transformacoes-geometricas/Calculadoras";
import { TransformacoesGeometricasLaboratorio } from "../../../components/exercises/matematica/transformacoes-geometricas/Laboratorio";
import { ExerciseList } from "../../../components/UI/ExerciseList";
import { StudyHeader } from "../../../components/UI/StudyHeader";
import { TransformacoesGeometricasTeoria } from "../../../components/content/matematica/transformacoes-geometricas/Teoria";
import { transformacoesGeometricasExercises, transformacoesGeometricasLevels } from "../../../data/matematica/transformacoes-geometricas/exercicios";

const tabs = [
  { id: "teoria", label: "📚 Aprender" },
  { id: "laboratorio", label: "🔬 Laboratório" },
  { id: "ferramentas", label: "🧮 Calculadoras" },
  { id: "exercicios", label: "✏️ Exercícios" },
];

export default function TransformacoesGeometricasPage() {
  const [activeTab, setActiveTab] = useState("teoria");
  const [exerciseLevel, setExerciseLevel] = useState("all");
  const review = (lesson: string) => {
    setActiveTab("teoria");
    window.setTimeout(() => document.getElementById(lesson)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  return (
    <div className="min-h-screen bg-indigo-50 text-[#1f2a44]">
      <StudyHeader title="📐 Transformações Geométricas" tagline="Translação, reflexão, rotação e homotetia no plano cartesiano" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="mx-auto max-w-7xl px-4 py-7">
        {activeTab === "teoria" && (
          <div onClick={event => {
            const target = event.target;
            if (!(target instanceof Element)) return;
            const tab = target.closest<HTMLElement>("[data-gotab]");
            if (tab?.dataset.gotab) setActiveTab(tab.dataset.gotab);
            const level = target.closest<HTMLElement>("[data-goto]");
            if (level?.dataset.goto) { setExerciseLevel(level.dataset.goto); setActiveTab("exercicios"); }
            const link = target.closest<HTMLAnchorElement>('a[href^="#l"]');
            if (link) { event.preventDefault(); window.setTimeout(() => document.getElementById(link.hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" }), 60); }
          }}>
            <TransformacoesGeometricasTeoria />
          </div>
        )}
        {activeTab === "laboratorio" && <TransformacoesGeometricasLaboratorio />}
        {activeTab === "ferramentas" && <TransformacoesGeometricasCalculadoras />}
        {activeTab === "exercicios" && <ExerciseList data={transformacoesGeometricasExercises} storageKey="transformacoesGeomSolved_v1" total={transformacoesGeometricasExercises.length} levels={transformacoesGeometricasLevels.map(level => level.name)} levelInfo={transformacoesGeometricasLevels} initialLevel={exerciseLevel} instructions="Digite decimais como 2,5 e frações como 1/2. Quando a resposta for aproximada, o enunciado diz quantas casas decimais usar." headingText="126 exercícios em 8 níveis" descriptionText="Comece pelo Nível 1 e vá avançando. Há contas, questões de escolha e problemas de interpretação. Cada exercício tem dica e resolução passo a passo. Digite decimais como 2,5 e frações como 1/2. Quando a resposta for aproximada, o enunciado diz quantas casas decimais usar." onReviewLesson={review} showUnsolvedFilter allowResetProgress />}
      </main>
      <footer className="mx-auto max-w-7xl px-4 pb-10 text-center text-xs text-slate-400">Transformações Geométricas · 8º ano · seu progresso fica salvo neste navegador.</footer>
    </div>
  );
}
