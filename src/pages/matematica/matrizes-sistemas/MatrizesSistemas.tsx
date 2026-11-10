import { MatrixLab, MatrixTools } from '../../../components/exercises/matematica/matrizes-sistemas/Ferramentas';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { MatricesTheory } from '../../../components/content/matematica/matrizes-sistemas/Conteudo';
import { exercisesData } from '../../../data/matematica/matrizes-sistemas/exercicios';
export default function MatrizesSistemasPage(){return <TopicPageLayout title="🔢 Matrizes e Sistemas" tagline="Operações, determinantes e sistemas lineares" footer="Material interativo de Matrizes e Sistemas" tabs={[{id:'teoria',label:'📚 Teoria',content:<MatricesTheory/>},{id:'laboratorio',label:'🔬 Laboratório',content:<MatrixLab/>},{id:'ferramentas',label:'⚙️ Calculadoras',content:<MatrixTools/>},{id:'exercicios',label:'✏️ 100 Exercícios',content:<ExerciseList data={exercisesData} storageKey="matricesSystemsSolved" total={100} levels={['Nível 1 Soma e escalar','Nível 2 Multiplicação','Nível 3 Determinante 2×2','Nível 4 Determinante 3×3','Nível 5 Sistemas 2×2','Nível 6 Sistemas 3×3 e propriedades']}/>}]}/>}
