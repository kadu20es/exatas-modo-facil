import CourseHeader from "../../../header/CourseHeader.component";
import { MathText } from "../../../Math/MathRenderer";

export function QuadraticTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='Anatomia da parábola'
        title='Os segredos de Bhaskara'
        description='Equações do segundo grau formam parábolas. Aprenda a encontrar onde a
          curva corta o eixo x (raízes) e onde atinge seu ponto máximo ou mínimo
          (vértice).'
        bgClass='bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900'
        stats={[
          { value: "5", label: "tópicos" },
          { value: "📈", label: "gráfico interativo" },
          { value: "✓", label: "fórmulas visuais" },
          { value: "100", label: "exercícios" },
        ]}
      />

      <div className='tip rounded-2xl p-5'>
        <b>Estrutura base:</b> organize a equação em{" "}
        <MathText>{"\\(ax^2+bx+c=0\\)"}</MathText>. Os coeficientes a, b e c são
        números e a não pode ser zero.
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>1. Discriminante (Delta)</h2>
          <p className='mt-4 text-slate-600 leading-7'>
            O delta antecipa quantas raízes reais a equação possui.
          </p>
          <div className='paper p-4 mt-4 text-center font-bold'>
            <MathText>{"\\[\\Delta=b^2-4ac\\]"}</MathText>
          </div>
          <div className='mt-4 space-y-2 text-sm'>
            <div className='bg-emerald-50 text-emerald-800 p-3 rounded-lg'>
              <b>Δ &gt; 0:</b> duas raízes reais diferentes.
            </div>
            <div className='bg-amber-50 text-amber-800 p-3 rounded-lg'>
              <b>Δ = 0:</b> duas raízes reais iguais.
            </div>
            <div className='bg-rose-50 text-rose-800 p-3 rounded-lg'>
              <b>Δ &lt; 0:</b> não há raízes reais.
            </div>
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>2. Fórmula de Bhaskara</h2>
          <p className='mt-4 text-slate-600 leading-7'>
            Depois de calcular o delta, substitua-o na fórmula para encontrar x₁
            e x₂.
          </p>
          <div className='paper p-4 mt-4 text-center font-bold text-lg'>
            <MathText>{"\\[x=\\frac{-b\\pm\\sqrt{\\Delta}}{2a}\\]"}</MathText>
          </div>
          <p className='text-sm text-slate-600 bg-slate-50 p-4 rounded-lg mt-4'>
            O sinal ± pede duas contas: uma com mais para x₁ e outra com menos
            para x₂.
          </p>
        </article>
      </div>
      <section className='bg-white rounded-2xl border p-6'>
        <h2 className='text-2xl font-black'>
          3. Soma e produto: atalho mental
        </h2>
        <p className='mt-3 text-slate-600'>
          Quando a = 1, procure dois números cuja soma seja −b e cujo produto
          seja c.
        </p>
        <div className='grid lg:grid-cols-2 gap-6 mt-5'>
          <div className='paper p-5 rounded-xl text-center'>
            <MathText>{"\\[S=-\\frac{b}{a}\\qquad P=\\frac{c}{a}\\]"}</MathText>
          </div>
          <div className='bg-slate-50 p-5 rounded-xl border text-sm'>
            Em x² − 5x + 6 = 0, a soma é 5 e o produto é 6. Os números são 2 e
            3.
          </div>
        </div>
      </section>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>4. Vértice da parábola</h2>
          <p className='mt-3 text-slate-600'>
            O vértice é o ponto de virada. Se a &gt; 0, é mínimo; se a &lt; 0, é
            máximo.
          </p>
          <div className='paper p-4 mt-4 text-center'>
            <MathText>
              {"\\[X_v=-\\frac{b}{2a}\\qquad Y_v=-\\frac{\\Delta}{4a}\\]"}
            </MathText>
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>5. Equações incompletas</h2>
          <p className='mt-3 text-slate-600'>
            Se faltar b ou c, há atalhos que evitam Bhaskara.
          </p>
          <div className='space-y-3 mt-4 text-sm'>
            <div className='bg-slate-50 p-3 rounded border'>
              <b>Se c = 0:</b> coloque x em evidência.{" "}
              <MathText>{"\\(x^2-4x=0\\Rightarrow x(x-4)=0\\)"}</MathText>;
              raízes 0 e 4.
            </div>
            <div className='bg-slate-50 p-3 rounded border'>
              <b>Se b = 0:</b> isole x² e tire a raiz.{" "}
              <MathText>{"\\(x^2-25=0\\Rightarrow x=\\pm5\\)"}</MathText>.
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
