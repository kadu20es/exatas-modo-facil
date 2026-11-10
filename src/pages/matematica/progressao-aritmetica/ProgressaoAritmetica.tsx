import { ArithmeticProgressionExamples, ArithmeticProgressionTheory } from '../../../components/content/matematica/progressao-aritmetica/Conteudo';
import { ArithmeticProgressionLab, ArithmeticProgressionTools } from '../../../components/exercises/matematica/progressao-aritmetica/Ferramentas';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { arithmeticProgressionExercises } from '../../../data/matematica/progressao-aritmetica/exercicios';

export default function ArithmeticProgressionPage() {
  return <TopicPageLayout title="📊 Progressão Aritmética" tagline="Entenda sequências que avançam por diferenças iguais" footer="Material interativo de estudo de Progressão Aritmética" tabs={[
    { id: 'teoria', label: '📚 Teoria', content: <ArithmeticProgressionTheory /> },
    { id: 'exemplos', label: '💡 Exemplos', content: <ArithmeticProgressionExamples /> },
    { id: 'laboratorio', label: '🔬 Laboratório', content: <ArithmeticProgressionLab /> },
    { id: 'ferramentas', label: '🧮 Calculadora', content: <ArithmeticProgressionTools /> },
    { id: 'exercicios', label: '✏️ 50 Exercícios', content: <ExerciseList data={arithmeticProgressionExercises} storageKey="arithmeticProgressionSolved" total={50} levels={['1 · Reconhecer uma PA', '2 · Termo geral', '3 · Encontrar razão ou posição', '4 · Soma finita', '5 · Problemas aplicados']} instructions="Responda com um número; use vírgula ou ponto nos decimais." /> },
  ]} />;
}
