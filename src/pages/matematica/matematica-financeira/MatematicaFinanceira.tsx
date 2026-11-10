import { FinancialLab, FinancialTools } from '../../../components/exercises/matematica/matematica-financeira/Ferramentas';
import { ExerciseList } from '../../../components/UI/ExerciseList';
import { TopicPageLayout } from '../../../components/UI/TopicPageLayout';
import { FinancialMathTheory } from '../../../components/content/matematica/matematica-financeira/Conteudo';
import { exercisesData } from '../../../data/matematica/matematica-financeira/exercicios';
export default function MatematicaFinanceiraPage(){return <TopicPageLayout title="💰 Matemática Financeira" tagline="Entenda taxas, juros e o valor do dinheiro no tempo" footer="Material interativo de Matemática Financeira" tabs={[{id:'teoria',label:'📚 Teoria',content:<FinancialMathTheory/>},{id:'laboratorio',label:'📈 Gráfico dos Juros',content:<FinancialLab/>},{id:'ferramentas',label:'⚙️ Calculadoras',content:<FinancialTools/>},{id:'exercicios',label:'✏️ 100 Exercícios',content:<ExerciseList data={exercisesData} storageKey="financialMathSolved" total={100} levels={['L1 Porcentagem','L2 Fatores','L3 Juros simples','L4 Juros compostos','L5 Taxas e inflação','L6 Cotidiano']}/>}]}/>}
