import { TrigonometrySolver, TrigonometryLab } from '../../../components/exercises/matematica/trigonometria/Ferramentas';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { TrigonometryTheory } from '../../../components/content/matematica/trigonometria/Conteudo';
import { trigonometryExercises } from '../../../data/matematica/trigonometria/exercicios';

export default function TrigonometryPage(){return <TopicPageLayout title="📐 Trigonometria" tagline="Dominando ângulos e triângulos" footer="Material didático interativo de Trigonometria" tabs={[{id:'teoria',label:'📚 Teoria',content:<TrigonometryTheory/>},{id:'laboratorio',label:'🔬 Simulador',content:<TrigonometryLab/>},{id:'ferramentas',label:'🧮 Resolvedor',content:<TrigonometrySolver/>},{id:'exercicios',label:'✏️ 100 Exercícios',content:<ExerciseList data={trigonometryExercises} storageKey="trigSolved" total={100} instructions="Informe valores numéricos; arredonde para duas casas decimais quando o enunciado pedir." levels={['L1 Pitágoras','L2 Identificar razões','L3 Ângulos notáveis','L4 Problemas (sombra/escada)','L5 Desafios inversos']}/>} ]}/>}
