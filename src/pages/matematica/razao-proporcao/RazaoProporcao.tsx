import { RatioTheory, RatioExamples } from '../../../components/content/matematica/razao-proporcao/Conteudo';
import { exercisesData } from '../../../data/matematica/razao-proporcao/exercicios';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { RatioLab } from '../../../components/exercises/matematica/razao-proporcao/RatioLab';

export default function RazaoProporcaoPage(){return <TopicPageLayout title="⚖️ Razão e Proporção" tagline="Aprenda entendendo, não decorando" footer="Material interativo de estudo de Razão e Proporção" tabs={[{id:'teoria',label:'📚 Teoria',content:<RatioTheory/>},{id:'exemplos',label:'💡 Exemplos',content:<RatioExamples/>},{id:'laboratorio',label:'🔬 Laboratório',content:<RatioLab/>},{id:'exercicios',label:'✏️ 30 Exercícios',content:<ExerciseList data={exercisesData} storageKey="razSolved" total={30} levels={['Nível 1 · Ler e simplificar razões','Nível 2 · Equivalência e proporção','Nível 3 · Encontrar o termo x','Nível 4 · Divisão proporcional','Nível 5 · Problemas do cotidiano']}/>}]}/>;}
