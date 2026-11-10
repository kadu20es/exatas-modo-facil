import CourseHeader from "../../../header/CourseHeader.component";
import { MathRenderer } from "../../../Math/MathRenderer";

export function AdvancedStatisticsTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='Nível pré-vestibular'
        title='Além da moeda e do dado'
        description='Estude experimentos repetidos pela distribuição binomial, atualize
          probabilidades com evidências usando Bayes e descreva dados com a
          curva normal.'
        bgClass='bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-950 text-white shadow-xl'
        stats={[
          { value: "Bayes", label: "atualizando crenças" },
          { value: "Z-score", label: "padronização" },
          { value: "Curva normal", label: "distribuição" },
          { value: "100", label: "exercícios progressivos" },
        ]}
      />

      <div className='tip rounded-2xl p-5'>
        <b>A analogia do galope:</b> ao ouvir um galope no Brasil, é mais
        provável pensar em cavalo do que em zebra. Bayes combina a evidência
        observada com a probabilidade prévia de cada causa.
      </div>
      <div className='bg-white rounded-2xl border p-6'>
        <h2 className='text-2xl font-black'>1. Teorema de Bayes</h2>
        <p className='mt-3 text-slate-600'>
          Bayes permite inverter uma probabilidade condicional: conhecemos o
          resultado e queremos estimar a chance de uma origem específica. Em um
          exemplo de doença que afeta 1% da população, com teste que acerta 90%
          dos doentes e produz 10% de falsos positivos, a chance real de doença
          após um resultado positivo é aproximadamente 8,3%, não 90%.
        </p>
        <div className='grid lg:grid-cols-2 gap-5 mt-5'>
          <div className='bg-sky-50 rounded-xl p-5'>
            <h3 className='font-black text-sky-800'>
              Paradoxo do exame médico
            </h3>
            <p className='text-sm text-slate-600 mt-2'>
              Como 99% da população é saudável, os falsos positivos podem
              superar os verdadeiros positivos. É essencial considerar a
              prevalência da doença.
            </p>
          </div>
          <div className='paper rounded-xl p-5 text-center'>
            <h3 className='font-black text-sky-800 mb-4'>A fórmula de Bayes</h3>
            <MathRenderer
              display
              expression={String.raw`P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}`}
            />
            <p className='mt-3 text-xs text-slate-500'>
              Probabilidade da causa A dado que observamos a evidência B.
            </p>
          </div>
        </div>
        <div className='paper rounded-xl p-4 mt-4 text-center'>
          <b>Árvore de decisão:</b> multiplique as probabilidades ao longo de
          cada caminho e some os caminhos que levam ao resultado observado.
        </div>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>2. Distribuição binomial</h2>
          <p className='mt-3 text-slate-600'>
            Use quando há um número fixo de tentativas independentes, cada uma
            com dois resultados possíveis e a mesma probabilidade p de sucesso.
            A probabilidade de obter exatamente k sucessos em n tentativas é:
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}`}
            />
          </div>
          <p className='text-sm text-slate-600 mt-3'>
            A combinação conta as maneiras de posicionar os sucessos. A média é
            np e o desvio padrão é √(np(1−p)).
          </p>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>
            3. Curva normal e regra empírica
          </h2>
          <p className='mt-3 text-slate-600'>
            Em uma distribuição aproximadamente normal, os dados se concentram
            ao redor da média μ e se espalham conforme o desvio padrão σ.
          </p>
          <div className='grid gap-3 mt-4 text-sm font-bold'>
            <div className='bg-indigo-50 p-4 rounded-xl'>
              <b className='text-indigo-700'>68%</b> ficam a até 1σ da média.
            </div>
            <div className='bg-indigo-100 p-4 rounded-xl'>
              <b className='text-indigo-800'>95%</b> ficam a até 2σ.
            </div>
            <div className='bg-indigo-200 p-4 rounded-xl'>
              <b className='text-indigo-900'>99,7%</b> ficam a até 3σ.
            </div>
          </div>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>4. Escore Z (Z-score)</h2>
          <p className='mt-3 text-slate-600'>
            O escore Z informa quantos desvios padrão uma observação está acima
            ou abaixo da média. Isso permite comparar posições em distribuições
            diferentes.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`Z=\frac{X-\mu}{\sigma}`}
            />
          </div>
          <p className='text-sm text-slate-600 mt-3'>
            Se a média é 170 cm, o desvio padrão é 10 cm e alguém mede 180 cm,
            então Z=1: está um desvio acima da média.
          </p>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>5. Valor esperado (esperança)</h2>
          <p className='mt-3 text-slate-600'>
            E[X] representa a média de longo prazo de uma variável aleatória
            quando o experimento é repetido muitas vezes.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`E[X]=\sum_i x_iP(x_i)`}
            />
          </div>
          <p className='text-sm text-slate-600 mt-3'>
            Multiplique cada resultado possível por sua probabilidade e some os
            produtos. Em jogos, um valor esperado negativo indica perda média no
            longo prazo.
          </p>
        </article>
      </div>
      <div className='bg-white rounded-2xl border p-6'>
        <h2 className='text-xl font-black'>Como escolher a ferramenta</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 text-sm'>
          {[
            [
              "Bayes",
              "Você conhece uma evidência e quer estimar a probabilidade da causa.",
            ],
            [
              "Binomial",
              "Há várias tentativas com sucesso/fracasso e queremos contar sucessos.",
            ],
            [
              "Normal / Z",
              "Os dados seguem uma distribuição contínua aproximadamente normal.",
            ],
            [
              "Esperança",
              "Queremos a média de longo prazo de resultados aleatórios.",
            ],
          ].map(([h, p]) => (
            <div key={h} className='bg-sky-50 rounded-xl p-4'>
              <b>{h}</b>
              <p className='mt-1 text-slate-600'>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
