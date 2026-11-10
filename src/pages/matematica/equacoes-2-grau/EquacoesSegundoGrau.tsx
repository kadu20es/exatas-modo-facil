import { BhaskaraSolver, QuadraticLab } from '../../../components/exercises/matematica/equacoes-2-grau/Ferramentas';
import { QuadraticExercises } from '../../../components/exercises/matematica/equacoes-2-grau/QuadraticExercises';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { QuadraticTheory } from '../../../components/content/matematica/equacoes-2-grau/Conteudo';
import { exercisesData } from '../../../data/matematica/equacoes-2-grau/exercicios';

export default function EquacoesSegundoGrauPage(){return <TopicPageLayout title="📈 Equações de 2º Grau" tagline="Explore raízes, discriminante e parábolas" footer="Material interativo de Equações do 2º Grau" tabs={[
  {id:'teoria',label:'📚 Teoria',content:<QuadraticTheory/>},
  {id:'laboratorio',label:'📈 Plotador',content:<QuadraticLab/>},
  {id:'ferramentas',label:'🧮 Bhaskara',content:<BhaskaraSolver/>},
  {id:'exercicios',label:'✏️ 100 Exercícios',content:<QuadraticExercises data={exercisesData}/>},
]}/>;}
