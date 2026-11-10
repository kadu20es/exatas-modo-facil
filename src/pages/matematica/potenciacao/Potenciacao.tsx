import { PowerLab, PowerTools } from '../../../components/exercises/matematica/potenciacao/PowerTools';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { PowerTheory, PowerExamples } from '../../../components/content/matematica/potenciacao/Conteudo';
import { exercises } from '../../../data/matematica/potenciacao/exercicios';

export default function PotenciacaoPage() {
  return <TopicPageLayout title="⚡ Potenciação" tagline="A matemática da multiplicação acelerada" footer="Material interativo de estudo de Potenciação" tabs={[
    { id: 'teoria', label: '📚 Teoria', content: <PowerTheory /> },
    { id: 'exemplos', label: '💡 Exemplos', content: <PowerExamples /> },
    { id: 'laboratorio', label: '📈 Crescimento', content: <PowerLab /> },
    { id: 'ferramentas', label: '⚙️ Calculadoras', content: <PowerTools /> },
    { id: 'exercicios', label: '✏️ Exercícios', content: <ExerciseList data={exercises} storageKey="potSolved" total={100} instructions="Digite o valor da potência. Para frações, use a barra (ex: 1/8 ou -1/4); para expressões com letras, use a forma indicada no enunciado." levels={['Nv 1 (Definição)','Nv 2 (Sinais/Zeros)','Nv 3 (Propriedades)','Nv 4 (Expoente Negativo)','Nv 5 (Expoente Fracionário)','Nv 6 (Notação/Misto)']} /> },
  ]} />;
}
