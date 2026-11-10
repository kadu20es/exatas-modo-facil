import {
  ProbabilityLab,
  ProbabilityTools,
} from "../../../components/exercises/matematica/probabilidade/Ferramentas";
import { ExerciseList } from "../../../components/UI/ExerciseList";
import { TopicPageLayout } from "../../../components/UI/TopicPageLayout";
import { ProbabilityTheory } from "../../../components/content/matematica/probabilidade/Conteudo";
import { exercisesData } from "../../../data/matematica/probabilidade/exercicios";
export default function ProbabilidadePage() {
  return (
    <TopicPageLayout
      title='🎲 Probabilidade'
      tagline='Aprenda a contar possibilidades e calcular chances'
      footer='Material interativo de Probabilidade'
      tabs={[
        { id: "teoria", label: "📚 Teoria", content: <ProbabilityTheory /> },
        {
          id: "laboratorio",
          label: "🔬 Laboratório",
          content: <ProbabilityLab />,
        },
        {
          id: "ferramentas",
          label: "⚙️ Ferramentas",
          content: <ProbabilityTools />,
        },
        {
          id: "exercicios",
          label: "✏️ 100 Exercícios",
          content: (
            <ExerciseList
              data={exercisesData}
              storageKey='probSolved'
              total={100}
              formatFractions
              instructions='Responda usando frações, decimais ou porcentagens. Ex.: 1/2, 0,5 ou 50%.'
              levels={[
                "L1 Moedas e dados",
                "L2 Baralhos e espaços amostrais",
                "L3 União e complementar",
                "L4 Eventos independentes",
                "L5 Condicional e sem reposição",
                "L6 Desafios e Bayes",
              ]}
            />
          ),
        },
      ]}
    />
  );
}
