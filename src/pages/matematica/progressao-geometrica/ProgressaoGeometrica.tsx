import { useState } from 'react';
import { GeometricProgressionTheory } from '../../../components/content/matematica/progressao-geometrica/Teoria';
import { GeometricProgressionLab, GeometricProgressionTools } from '../../../components/exercises/matematica/progressao-geometrica/Ferramentas';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { StudyHeader, type StudyTab } from '../../../components/UI/StudyHeader';
import { geometricProgressionExercises, geometricProgressionLevels } from '../../../data/matematica/progressao-geometrica/exercicios';

const tabs: StudyTab[] = [
  { id: 'teoria', label: '📚 Aprender' },
  { id: 'laboratorio', label: '🔬 Laboratório' },
  { id: 'ferramentas', label: '🧮 Calculadoras' },
  { id: 'exercicios', label: '✏️ Exercícios' },
];
export default function GeometricProgressionPage() {
  const [activeTab, setActiveTab] = useState('teoria');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const goToLevel = (level: string) => { setSelectedLevel(level); setActiveTab('exercicios'); };
  const reviewLesson = (lesson: string) => { setActiveTab('teoria'); window.setTimeout(() => document.getElementById(lesson)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0); };
  const content = activeTab === 'teoria'
    ? <GeometricProgressionTheory onNavigateTab={setActiveTab} onNavigateLevel={goToLevel} />
    : activeTab === 'laboratorio'
      ? <GeometricProgressionLab />
      : activeTab === 'ferramentas'
        ? <GeometricProgressionTools />
        : <div><ExerciseList key={selectedLevel} data={geometricProgressionExercises} storageKey="geometricProgressionSourceSolvedV1" total={100} initialLevel={selectedLevel} levels={geometricProgressionLevels.map(level => `Nível ${level.level} · ${level.name}`)} instructions="Tente resolver no papel antes de conferir. Aceita números inteiros, frações, decimais e números negativos." levelInfo={geometricProgressionLevels} onReviewLesson={reviewLesson} accent="pink" /></div>;
  return <div className="min-h-screen bg-pink-50">
    <StudyHeader title="📈 Progressão Geométrica" tagline="Curso completo, do zero ao domínio" tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} accent="pink" />
    <main className="max-w-7xl mx-auto px-4 py-7">{content}</main>
    <footer className="border-t bg-white mt-8"><div className="max-w-7xl mx-auto px-4 py-7 text-center text-sm text-slate-500">Material interativo de estudo de Progressão Geométrica • Fórmulas renderizadas em notação matemática</div></footer>
  </div>;
}
