import CourseHeader from "../../../header/CourseHeader.component";
import { MathText } from "../../../Math/MathRenderer";

export function FinancialMathTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='Educação financeira'
        title='O Segredo do Dinheiro no Tempo'
        description='A matemática financeira estuda como taxas e tempo alteram o valor do
          dinheiro, em compras, dívidas, investimentos e inflação.'
        bgClass='bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-950 text-white shadow-xl'
        stats={[
          { value: "8", label: "conceitos" },
          { value: "📈", label: "simulador" },
          { value: "✓", label: "sem decoreba" },
          { value: "100", label: "exercícios" },
        ]}
      />

      <div className='tip rounded-2xl p-5'>
        <b>Regra de ouro:</b> use fatores de multiplicação para acompanhar
        aumentos, descontos e juros ao longo do tempo.
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Porcentagem e taxa unitária</h2>
          <p className='mt-3 text-slate-600'>
            Por cento significa “a cada cem”. Antes de aplicar uma taxa,
            escreva-a em forma decimal: 5% = 5/100 = 0,05.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathText>{"\\[p\\%=\\frac{p}{100}\\]"}</MathText>
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Fatores e taxas sucessivas</h2>
          <p className='mt-3 text-slate-600'>
            Aumento de i usa fator 1+i; desconto usa 1−i. Para taxas sucessivas,
            multiplique os fatores. Um aumento de 20% seguido de desconto de 20%
            resulta em 1,20×0,80=0,96.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathText>{"\\[V_f=V_i\\cdot F_1\\cdot F_2\\cdots\\]"}</MathText>
          </div>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Juros simples e montante</h2>
          <p className='mt-3 text-slate-600'>
            Nos juros simples, a taxa incide sempre sobre o capital inicial.
            Compatibilize a unidade de tempo com a unidade da taxa.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathText>
              {"\\[J=C\\cdot i\\cdot t\\qquad M=C+J=C(1+it)\\]"}
            </MathText>
          </div>
          <p className='text-sm text-slate-600 mt-3'>
            C é o capital, i a taxa unitária, t o tempo e M o montante final.
          </p>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Juros compostos</h2>
          <p className='mt-3 text-slate-600'>
            A cada período, os juros incorporam-se ao capital. O período
            seguinte rende sobre o valor atualizado, formando “juros sobre
            juros”.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathText>{"\\[M=C(1+i)^t\\qquad J=M-C\\]"}</MathText>
          </div>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Taxas equivalentes</h2>
          <p className='mt-3 text-slate-600'>
            Em juros simples, taxas proporcionais variam na mesma razão do
            tempo. Em juros compostos, compare fatores equivalentes, elevando o
            fator do período menor ao número de períodos.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathText>{"\\[(1+i_a)=(1+i_m)^{12}\\]"}</MathText>
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Inflação e taxa real</h2>
          <p className='mt-3 text-slate-600'>
            O rendimento nominal não é o mesmo que o ganho de poder de compra.
            Relacione taxa aparente, taxa real e inflação pelos fatores
            multiplicativos.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathText>{"\\[(1+i_a)=(1+i_r)(1+I)\\]"}</MathText>
          </div>
          <p className='text-sm text-slate-600 mt-3'>
            I é a inflação; iₐ é a taxa aparente; iᵣ é a taxa real.
          </p>
        </article>
      </div>
      <div className='bg-slate-900 text-slate-100 rounded-2xl p-6'>
        <h2 className='text-xl font-black text-amber-300'>Antes de calcular</h2>
        <ol className='list-decimal pl-5 mt-3 space-y-2'>
          <li>Identifique capital, taxa, tempo e o que a questão pede.</li>
          <li>
            Converta a porcentagem para decimal e iguale unidades de tempo.
          </li>
          <li>Escolha juros simples ou compostos.</li>
          <li>
            Em variações sucessivas, multiplique fatores; não some percentuais.
          </li>
        </ol>
      </div>
    </div>
  );
}
