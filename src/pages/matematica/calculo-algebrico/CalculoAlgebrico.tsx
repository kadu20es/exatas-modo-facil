import { AlgebraLab, PolynomialSolver } from '../../../components/exercises/matematica/calculo-algebrico/Ferramentas';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { AlgebraTheory } from '../../../components/content/matematica/calculo-algebrico/Conteudo';
import { exercisesData } from '../../../data/matematica/calculo-algebrico/exercicios';
export default function CalculoAlgebricoPage(){return <TopicPageLayout title="✏️ Cálculo Algébrico" tagline="Entenda expressões, monômios e polinômios" footer="Material interativo de Cálculo Algébrico" tabs={[{id:'teoria',label:'📚 Teoria',content:<AlgebraTheory/>},{id:'laboratorio',label:'🔬 Laboratório',content:<AlgebraLab/>},{id:'ferramentas',label:'🧮 Resolvedor',content:<PolynomialSolver/>},{id:'exercicios',label:'✏️ 100 Exercícios',content:<ExerciseList data={exercisesData} storageKey="algebraSolved" total={100} levels={['L1 Valor numérico','L2 Monômios','L3 Polinômios','L4 Operações','L5 Desafios']}/>}]}/>}
