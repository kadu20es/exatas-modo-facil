import { DecimalTheory, DecimalExamples } from '../../../components/content/matematica/decimais/Conteudo';
import { exercisesData } from '../../../data/matematica/decimais/exercicios';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { DecimalLab } from '../../../components/exercises/matematica/decimais/DecimalLab';

export default function DecimaisPage(){return <TopicPageLayout title="🔢 Números Decimais" tagline="Aprenda entendendo, não decorando" footer="Material interativo de estudo de Números Decimais" tabs={[{id:'teoria',label:'📚 Teoria',content:<DecimalTheory/>},{id:'exemplos',label:'💡 Exemplos',content:<DecimalExamples/>},{id:'laboratorio',label:'🔬 Laboratório',content:<DecimalLab/>},{id:'exercicios',label:'✏️ Exercícios',content:<ExerciseList data={exercisesData} storageKey="decSolved" total={30} levels={['Nível 1 · Valor posicional','Nível 2 · Soma/Subtração','Nível 3 · Multiplicação','Nível 4 · Divisão','Nível 5 · Conversão']}/>}]}/>;}
