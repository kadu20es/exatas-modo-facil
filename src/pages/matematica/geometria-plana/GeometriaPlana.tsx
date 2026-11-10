import { GeometryLab, GeometryTools } from '../../../components/exercises/matematica/geometria-plana/Ferramentas';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { PlaneGeometryTheory } from '../../../components/content/matematica/geometria-plana/Conteudo';
import { exercisesData } from '../../../data/matematica/geometria-plana/exercicios';
export default function GeometriaPlanaPage(){return <TopicPageLayout title="📐 Geometria Plana" tagline="Explore formas, áreas, perímetros e polígonos" footer="Material interativo de Geometria Plana" tabs={[{id:'teoria',label:'📚 Teoria',content:<PlaneGeometryTheory/>},{id:'laboratorio',label:'🔬 Laboratório',content:<GeometryLab/>},{id:'ferramentas',label:'🧮 Resolvedor',content:<GeometryTools/>},{id:'exercicios',label:'✏️ 100 Exercícios',content:<ExerciseList data={exercisesData} storageKey="planeGeometrySolved" total={100} levels={['L1 Retângulos','L2 Triângulos','L3 Círculos','L4 Polígonos','L5 Desafios']}/>}]}/>}
