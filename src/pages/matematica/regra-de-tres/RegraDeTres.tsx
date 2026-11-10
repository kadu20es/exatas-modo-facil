import { RuleOfThreeTheory, RuleOfThreeExamples } from '../../../components/content/matematica/regra-de-tres/Conteudo';
import { ReinforcementLab, ReinforcementTool } from '../../../components/exercises/matematica/regra-de-tres/Reinforcement';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { exercisesData, migrateRuleOfThreeProgress } from '../../../data/matematica/regra-de-tres/exercicios';

const levels = [
  '1 · Reconhecer relações',
  '2 · Cálculos diretos',
  '3 · Problemas diretos',
  '4 · Cálculos inversos',
  '5 · Problemas inversos',
  '6 · Problemas mistos',
  '7 · Regra de três composta',
];

export default function RegraDeTresPage() {
  migrateRuleOfThreeProgress();

  return <TopicPageLayout
    title="📐 Regra de Três"
    tagline="Aprenda entendendo, não decorando"
    footer="Material interativo de estudo de Regra de Três"
    tabs={[
      { id: 'teoria', label: '📚 Teoria', content: <RuleOfThreeTheory /> },
      { id: 'exemplos', label: '💡 Exemplos', content: <RuleOfThreeExamples /> },
      { id: 'laboratorio', label: '🔬 Laboratório', content: <ReinforcementLab /> },
      { id: 'resolvedor', label: '🧮 Resolvedor', content: <ReinforcementTool /> },
      { id: 'exercicios', label: '✏️ 130 Exercícios', content: <ExerciseList data={exercisesData} storageKey="r3CombinedSolved" total={130} levels={levels} formatFractions /> },
    ]}
  />;
}
