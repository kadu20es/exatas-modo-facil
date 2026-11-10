import { AnalyticGeometryLab, AnalyticGeometryTools } from '../../../components/exercises/matematica/geometria-analitica/Ferramentas';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { AnalyticGeometryTheory } from '../../../components/content/matematica/geometria-analitica/Conteudo';
import { exercisesData } from '../../../data/matematica/geometria-analitica/exercicios';
export default function GeometriaAnaliticaPage(){return <TopicPageLayout title="🗺️ Geometria Analítica" tagline="Conecte coordenadas, retas e circunferências" footer="Material interativo de Geometria Analítica" tabs={[{id:'teoria',label:'📚 Teoria',content:<AnalyticGeometryTheory/>},{id:'laboratorio',label:'🗺️ Plano Interativo',content:<AnalyticGeometryLab/>},{id:'ferramentas',label:'⚙️ Calculadoras',content:<AnalyticGeometryTools/>},{id:'exercicios',label:'✏️ 100 Exercícios',content:<ExerciseList data={exercisesData} storageKey="analyticGeometrySolved" total={100} levels={['L1 Pontos e ponto médio','L2 Distância','L3 Coeficiente angular','L4 Equação da reta','L5 Circunferência','L6 Desafios']}/>}]}/>}
