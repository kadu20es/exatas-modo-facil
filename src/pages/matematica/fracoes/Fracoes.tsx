import { useState } from 'react';
import { FractionExercises } from '../../../components/exercises/matematica/fracoes/FractionExercises';
import { FractionLab } from '../../../components/exercises/matematica/fracoes/FractionLab';
import { FractionTools } from '../../../components/exercises/matematica/fracoes/FractionTools';
import { FractionTheory } from '../../../components/content/matematica/fracoes/Conteudo';
import { StudyHeader } from '../../../components/UI/StudyHeader';

const tabs = [
  { id: 'teoria', label: '📚 Teoria' },
  { id: 'laboratorio', label: '🔬 Laboratório' },
  { id: 'ferramentas', label: '🧮 MMC & Cálculos' },
  { id: 'exercicios', label: '✏️ 100 Exercícios' },
] as const;
type Tab = typeof tabs[number]['id'];

export default function FracoesPage() {
  const [tab, setTab] = useState<Tab>('teoria');
  return <>
    <StudyHeader title="📘 Frações" tagline="Aprenda entendendo, não decorando" tabs={tabs} activeTab={tab} onTabChange={id => setTab(id as Tab)} />
    <main className="max-w-7xl mx-auto px-4 py-7">
      {tab === 'teoria' && <FractionTheory />}
      {tab === 'laboratorio' && <FractionLab />}
      {tab === 'ferramentas' && <FractionTools />}
      {tab === 'exercicios' && <FractionExercises />}
    </main>
  </>;
}
