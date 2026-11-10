import { CombinatoricsLab, CombinatoricsTools } from '../../../components/exercises/matematica/analise-combinatoria/Ferramentas';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { CombinatoricsTheory } from '../../../components/content/matematica/analise-combinatoria/Conteudo';
import { combinatoricsExercises } from '../../../data/matematica/analise-combinatoria/exercicios';
export default function CombinatoricsPage(){return <TopicPageLayout title="🔢 Análise Combinatória" tagline="Conte possibilidades sem listar uma a uma" footer="Material interativo de Análise Combinatória" tabs={[{id:'teoria',label:'📚 Teoria',content:<CombinatoricsTheory/>},{id:'laboratorio',label:'🔬 Laboratório',content:<CombinatoricsLab/>},{id:'ferramentas',label:'🧮 Resolvedores',content:<CombinatoricsTools/>},{id:'exercicios',label:'✏️ 100 Exercícios',content:<ExerciseList data={combinatoricsExercises} storageKey="combinatoricsSolved" total={100} levels={['Nv 1 Fatorial','Nv 2 PFC','Nv 3 Permutações','Nv 4 Arranjos','Nv 5 Combinações','Nv 6 Desafios']}/>} ]}/>}
