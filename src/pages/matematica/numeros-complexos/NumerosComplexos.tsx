import { ComplexPlaneLab, ComplexTools } from '../../../components/exercises/matematica/numeros-complexos/Ferramentas';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { ComplexNumbersTheory } from '../../../components/content/matematica/numeros-complexos/Conteudo';
import { complexExercises } from '../../../data/matematica/numeros-complexos/exercicios';
export default function ComplexNumbersPage(){return <TopicPageLayout title="🧮 Números Complexos" tagline="Explore a unidade imaginária e o plano de Argand-Gauss" footer="Material interativo de Números Complexos" tabs={[{id:'teoria',label:'📚 Teoria',content:<ComplexNumbersTheory/>},{id:'laboratorio',label:'🔬 Laboratório',content:<ComplexPlaneLab/>},{id:'ferramentas',label:'🧮 Calculadoras',content:<ComplexTools/>},{id:'exercicios',label:'✏️ 100 Exercícios',content:<ExerciseList data={complexExercises} storageKey="complexNumbersSolved" total={100} levels={['Nv 1 Potências de i','Nv 2 Álgebra básica','Nv 3 Divisão e conjugado','Nv 4 Módulo e geometria','Nv 5 Trigonometria','Nv 6 Desafios']}/>} ]}/>}
