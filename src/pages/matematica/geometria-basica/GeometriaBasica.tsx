import { useState, type MouseEvent } from 'react';
import { GeometriaBasicaTheory } from '../../../components/content/matematica/geometria-basica/Teoria';
import { GeometriaBasicaCalculators, GeometriaBasicaLab } from '../../../components/exercises/matematica/geometria-basica/Ferramentas';
import { GeometriaBasicaExercises } from '../../../components/exercises/matematica/geometria-basica/Exercicios';
import { StudyHeader } from '../../../components/UI/StudyHeader';

const tabs = [
  { id: 'teoria', label: '📚 Aprender' },
  { id: 'laboratorio', label: '🔬 Laboratório' },
  { id: 'ferramentas', label: '🧮 Calculadoras' },
  { id: 'exercicios', label: '✏️ Exercícios' },
];

export default function GeometriaBasicaPage() {
  const [activeTab, setActiveTab] = useState('teoria');
  const [exerciseLevel, setExerciseLevel] = useState('all');
  const reviewLesson = (lesson: string) => {
    setActiveTab('teoria');
    window.setTimeout(() => document.getElementById(lesson)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  };
  const handleTheoryNavigation = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const action = target.closest<HTMLElement>('[data-goto],[data-gotab]');
    if (!action) return;
    if (action.hasAttribute('data-goto')) {
      setExerciseLevel(action.dataset.goto ?? 'all');
      setActiveTab('exercicios');
    } else if (action.dataset.gotab) setActiveTab(action.dataset.gotab);
  };

  return <div className="min-h-screen bg-indigo-50 text-[#1f2a44]">
    <StudyHeader title="📐 Geometria Básica" tagline="Ângulos, triângulos, perímetro, área, inteiros e plano cartesiano" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
    <main className="mx-auto max-w-7xl px-4 py-7">
      {activeTab === 'teoria' && <div onClick={handleTheoryNavigation}><GeometriaBasicaTheory /></div>}
      {activeTab === 'laboratorio' && <GeometriaBasicaLab />}
      {activeTab === 'ferramentas' && <GeometriaBasicaCalculators />}
      {activeTab === 'exercicios' && <GeometriaBasicaExercises initialLevel={exerciseLevel} onReviewLesson={reviewLesson} />}
    </main>
    <footer className="max-w-7xl mx-auto px-4 pb-10 text-center text-xs text-slate-400">Geometria Básica · pré-requisito para o Teorema de Pitágoras · seu progresso fica salvo neste navegador.</footer>
  </div>;
}
