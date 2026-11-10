import { NumberSetLab, NumberSetTools } from '../../../components/exercises/matematica/conjuntos-numericos/Ferramentas';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { NumberSetsTheory } from '../../../components/content/matematica/conjuntos-numericos/Conteudo';
import { exercisesData } from '../../../data/matematica/conjuntos-numericos/exercicios';
export default function ConjuntosNumericosPage(){return <TopicPageLayout title="🔢 Conjuntos Numéricos" tagline="Classifique e relacione os conjuntos numéricos" footer="Material interativo de Conjuntos Numéricos" tabs={[{id:'teoria',label:'📚 Teoria',content:<NumberSetsTheory/>},{id:'laboratorio',label:'🔬 Laboratório',content:<NumberSetLab/>},{id:'ferramentas',label:'🧮 Ferramentas',content:<NumberSetTools/>},{id:'exercicios',label:'✏️ 100 Exercícios',content:<ExerciseList data={exercisesData} storageKey="numberSetsSolved" total={100} levels={['L1 Naturais','L2 Inteiros','L3 Racionais','L4 Irracionais','L5 Reais','L6 Intervalos']}/>}]}/>}
