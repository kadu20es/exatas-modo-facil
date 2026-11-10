import { useState } from 'react';
import { AlgebraIntroductionTheory } from '../../../components/content/matematica/introducao-algebra/Teoria';
import { AlgebraCalculators, AlgebraLab } from '../../../components/exercises/matematica/introducao-algebra/Ferramentas';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { StudyHeader } from '../../../components/UI/StudyHeader';
import { exercisesData, exerciseLevels } from '../../../data/matematica/introducao-algebra/exercicios';

const tabs = [
  { id: 'teoria', label: '📚 Aprender' },
  { id: 'laboratorio', label: '🔬 Laboratório' },
  { id: 'calculadoras', label: '🧮 Calculadoras' },
  { id: 'exercicios', label: '✏️ Exercícios' },
];

export default function IntroducaoAlgebraPage() {
  const [activeTab, setActiveTab] = useState('teoria');
  const [exerciseLevel, setExerciseLevel] = useState('all');
  const reviewLesson = (lesson: string) => {
    setActiveTab('teoria');
    window.setTimeout(() => document.getElementById(lesson)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  };
  return <div className="min-h-screen bg-indigo-50 text-[#1f2a44]">
    <StudyHeader title="🔤 Introdução à Álgebra" tagline="Expressões algébricas e valor numérico · 6º ano" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
    <main className="mx-auto max-w-7xl px-4 py-7">
      {activeTab === 'teoria' && <div onClick={event => { const target = event.target; if (!(target instanceof Element)) return; const action = target.closest<HTMLElement>('[data-goto],[data-gotab]'); if (!action) return; if (action.hasAttribute('data-goto')) { setExerciseLevel(action.dataset.goto ?? 'all'); setActiveTab('exercicios'); } else if (action.dataset.gotab === 'ferramentas') setActiveTab('calculadoras'); else if (action.dataset.gotab) setActiveTab(action.dataset.gotab); }}><AlgebraIntroductionTheory /></div>}
      {activeTab === 'laboratorio' && <AlgebraLab />}
      {activeTab === 'calculadoras' && <AlgebraCalculators />}
      {activeTab === 'exercicios' && <ExerciseList data={exercisesData} storageKey="introAlgebraSolved" total={exercisesData.length} headingText={`${exercisesData.length} exercícios em ${exerciseLevels.length} níveis`} descriptionText="Comece pelo Nível 1 e vá avançando. Há contas, questões de escolha e problemas de interpretação. Cada exercício tem 💡 dica e resolução passo a passo. Digite decimais como 2,5 e frações como 1/2." levels={exerciseLevels.map(level => level.name)} levelInfo={exerciseLevels} initialLevel={exerciseLevel} onReviewLesson={reviewLesson} showUnsolvedFilter allowResetProgress />}
    </main>
    <footer className="mt-8 border-t bg-white"><div className="mx-auto max-w-7xl px-4 py-7 text-center text-sm text-slate-500">Introdução à Álgebra · 6º ano · Fórmulas renderizadas com KaTeX</div></footer>
  </div>;
}
