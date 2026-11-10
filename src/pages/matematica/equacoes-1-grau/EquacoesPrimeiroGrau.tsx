import { LinearLab, LinearSolver } from '../../../components/exercises/matematica/equacoes-1-grau/Ferramentas';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { LinearTheory } from '../../../components/content/matematica/equacoes-1-grau/Conteudo';
import { exercisesData } from '../../../data/matematica/equacoes-1-grau/exercicios';

export default function EquacoesPrimeiroGrauPage(){return <TopicPageLayout title="➗ Equações de 1º Grau" tagline="Entenda a balança e encontre o valor de x" footer="Material interativo de Equações do 1º Grau" tabs={[
  {id:'teoria',label:'📚 Teoria',content:<LinearTheory/>},
  {id:'laboratorio',label:'⚖️ A Balança',content:<LinearLab/>},
  {id:'ferramentas',label:'🧮 Resolvedor',content:<LinearSolver/>},
  {id:'exercicios',label:'✏️ 100 Exercícios',content:<ExerciseList data={exercisesData} storageKey="linearEquationsSolved" total={100} instructions="Informe x como número ou fração (ex.: 3/2 ou -1/4)." levels={['Básico · Soma e multiplicação','Duas etapas','Variável nos dois lados','Distributiva','Frações']}/>},
]}/>;}
