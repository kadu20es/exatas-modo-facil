import { ScientificLab, ScientificTools } from '../../../components/exercises/matematica/notacao-cientifica/ScientificTools';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { scientificExercises } from '../../../data/matematica/notacao-cientifica/exercicios';
import { ScientificTheory, ScientificExamples } from '../../../components/content/matematica/notacao-cientifica/Conteudo';

export default function NotacaoCientificaPage() {
  return <TopicPageLayout title="🌌 Notação Científica" tagline="Aprenda entendendo, não decorando" footer="Material interativo de estudo de Notação Científica" tabs={[
    { id: 'teoria', label: '📚 Teoria', content: <ScientificTheory /> },
    { id: 'exemplos', label: '💡 Exemplos', content: <ScientificExamples /> },
    { id: 'laboratorio', label: '🔬 Laboratório', content: <ScientificLab /> },
    { id: 'ferramentas', label: '🧮 Calculadoras', content: <ScientificTools /> },
    { id: 'exercicios', label: '✏️ 100 Exercícios', content: <ExerciseList data={scientificExercises} storageKey="sciSolved" total={100} scientificNotation instructions="Responda no formato 3.2*10^4, 3.2x10^4 ou com o valor padrão (ex: 32000). Use ponto ou vírgula nos decimais." levels={['Nível 1 (Grandes)','Nível 2 (Pequenos)','Nível 3 (Voltar)','Nível 4 (Multiplicação/Divisão)','Nível 5 (Soma/Subtração)']} /> },
  ]} />;
}
