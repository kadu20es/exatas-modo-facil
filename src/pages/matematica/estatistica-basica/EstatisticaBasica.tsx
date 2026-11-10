import { StatisticsLab } from '../../../components/exercises/matematica/estatistica-basica/StatisticsLab';
import { StatisticsTools } from '../../../components/exercises/matematica/estatistica-basica/StatisticsTools';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { StatisticsTheory } from '../../../components/content/matematica/estatistica-basica/Conteudo';
import { exercisesData } from '../../../data/matematica/estatistica-basica/exercicios';

export default function EstatisticaBasicaPage() {
  return <TopicPageLayout title="📊 Estatística Básica" tagline="Organize dados, encontre padrões e compreenda a dispersão" footer="Material interativo de Estatística Básica" tabs={[
    { id: 'teoria', label: '📚 Teoria', content: <StatisticsTheory /> },
    { id: 'laboratorio', label: '🔬 Laboratório', content: <StatisticsLab /> },
    { id: 'ferramentas', label: '🧮 Resolvedores', content: <StatisticsTools /> },
    { id: 'exercicios', label: '✏️ 200 Exercícios', content: <ExerciseList data={exercisesData} storageKey="statisticsBasicSolved" total={200} instructions="Resolva seguindo a ordem dos níveis. Use ponto ou vírgula nos valores decimais. Para questões de classificação, informe o valor numérico solicitado." levels={['L1 Média simples','L2 Mediana e rol','L3 Moda e amplitude','L4 Média desconhecida e propriedades','L5 Frequências e média ponderada','L6 Variância e desvio padrão','L7 Tabelas, classes e gráficos','L8 Interpretação e desafios']} /> },
  ]} />;
}
