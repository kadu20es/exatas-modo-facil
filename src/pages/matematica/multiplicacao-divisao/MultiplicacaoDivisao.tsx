import { MultiplicacaoDivisaoLab, MultiplicacaoDivisaoTools } from '../../../components/exercises/matematica/multiplicacao-divisao/Ferramentas';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { MultiplicacaoDivisaoTheory } from '../../../components/content/matematica/multiplicacao-divisao/Conteudo';
import { multiplicacaoDivisaoExercises } from '../../../data/matematica/multiplicacao-divisao/exercicios';

export default function MultiplicacaoDivisaoPage() {
  return <TopicPageLayout title="✖️ Multiplicação e Divisão" tagline="Entenda grupos iguais, partilhas e operações inversas" footer="Material interativo de Multiplicação e Divisão" tabs={[
    { id: 'teoria', label: '📚 Teoria', content: <MultiplicacaoDivisaoTheory /> },
    { id: 'laboratorio', label: '🔬 Lab Visual', content: <MultiplicacaoDivisaoLab /> },
    { id: 'ferramentas', label: '🧮 Calculadoras', content: <MultiplicacaoDivisaoTools /> },
    { id: 'exercicios', label: '✏️ 80 Exercícios', content: <ExerciseList data={multiplicacaoDivisaoExercises} storageKey="multDivSolved" total={80} levels={['Multiplicação — Tabuada', 'Multiplicação — dezenas × 1 dígito', 'Multiplicação — 2 dígitos × 1 dígito', 'Multiplicação — 2 dígitos × 2 dígitos', 'Divisão — Tabuada exata', 'Divisão — com resto', 'Divisão — 2/3 dígitos × 1 dígito', 'Divisão — 3 dígitos × 2 dígitos']} instructions="Para divisões com resto, informe quociente e resto (por exemplo: 5r2 ou 5 resto 2)." /> },
  ]} />;
}
