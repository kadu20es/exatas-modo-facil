import CourseHeader from "../../../header/CourseHeader.component";
import { MathRenderer } from "../../../Math/MathRenderer";

export function QuadraticFunctionTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='Curso do zero'
        title='Função do 2º Grau sem mistério'
        description='A função quadrática descreve uma parábola. Aprenda a calcular valores,
          encontrar raízes e interpretar vértice, concavidade e situações de
          máximo ou mínimo.'
        bgClass='bg-gradient-to-br from-teal-950 via-teal-900 to-slate-900 text-white shadow-xl'
        stats={[
          { value: "8", label: "tópicos" },
          { value: "📈", label: "parábola interativa" },
          { value: "✓", label: "resolução detalhada" },
          { value: "30", label: "exercícios" },
        ]}
      />

      <div className='tip rounded-2xl p-5'>
        Na forma geral f(x)=ax²+bx+c, com a≠0. Observe o gráfico para associar
        os cálculos às propriedades da parábola.
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Forma e gráfico</h2>
          <p className='mt-3 text-slate-600'>
            O coeficiente a define a concavidade: para cima quando a&gt;0 e para
            baixo quando a&lt;0. O intercepto do eixo y é (0,c).
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`f(x)=ax^2+bx+c,\quad a\ne 0`}
            />
          </div>
          <p className='text-sm text-slate-600 mt-3'>
            Para calcular f(x), substitua o valor de x e respeite a ordem das
            operações.
          </p>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Discriminante e raízes</h2>
          <p className='mt-3 text-slate-600'>
            O discriminante indica quantas raízes reais existem. As raízes são
            os pontos onde a parábola cruza o eixo x.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`\Delta=b^2-4ac,\quad x=\frac{-b\pm\sqrt{\Delta}}{2a}`}
            />
          </div>
          <ul className='list-disc pl-5 text-sm text-slate-600 mt-3'>
            <li>Δ&gt;0: duas raízes reais distintas.</li>
            <li>Δ=0: uma raiz real dupla.</li>
            <li>Δ&lt;0: não há raízes reais.</li>
          </ul>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Exemplo completo</h2>
          <p className='mt-3 text-slate-600'>Para x²−5x+6=0, a=1, b=−5, c=6.</p>
          <div className='space-y-2 mt-4'>
            <p>Δ=(−5)²−4·1·6=25−24=1.</p>
            <p>x=(5±1)/2.</p>
            <p className='font-bold text-indigo-800'>Raízes: x=3 e x=2.</p>
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Vértice e eixo de simetria</h2>
          <p className='mt-3 text-slate-600'>
            O vértice é o ponto máximo ou mínimo da parábola. Seu eixo de
            simetria é a reta vertical que passa pelo vértice.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`x_v=-\frac{b}{2a},\quad y_v=f(x_v)=-\frac{\Delta}{4a}`}
            />
          </div>
          <p className='text-sm text-slate-600 mt-3'>
            a&gt;0 dá mínimo; a&lt;0 dá máximo.
          </p>
        </article>
      </div>
      <div className='bg-white rounded-2xl border p-6'>
        <h2 className='text-xl font-black'>Estratégia de resolução</h2>
        <div className='grid md:grid-cols-4 gap-3 mt-4 text-sm'>
          {[
            ["1. Identifique", "Leia a, b e c."],
            ["2. Calcule Δ", "Use b²−4ac."],
            ["3. Resolva", "Use Bhaskara se pedir raízes."],
            ["4. Interprete", "Considere vértice e contexto do problema."],
          ].map(([a, b]) => (
            <div className='bg-slate-50 rounded-xl p-4' key={a}>
              <b>{a}</b>
              <p className='mt-1 text-slate-600'>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function QuadraticFunctionExamples() {
  const items = [
    ["Calcular f(x)", "f(x)=x²−3x+2; calcule f(4).", "f(4)=16−12+2=6."],
    [
      "Calcular Δ",
      "Para x²−5x+6, encontre o discriminante.",
      "a=1, b=−5, c=6; Δ=25−24=1.",
    ],
    ["Encontrar raízes", "Resolva x²−5x+6=0.", "Δ=1; x=(5±1)/2; raízes 3 e 2."],
    [
      "Vértice",
      "Para f(x)=x²−4x+3, calcule o vértice.",
      "xᵥ=4/2=2; yᵥ=f(2)=−1; vértice (2,−1).",
    ],
    [
      "Delta negativo",
      "x²+x+1 tem raízes reais?",
      "Δ=1−4=−3<0, então não tem raízes reais.",
    ],
    [
      "Altura máxima",
      "h(t)=−5t²+20t. Quando atinge altura máxima e qual é essa altura?",
      "tᵥ=−20/(−10)=2; h(2)=−20+40=20 m.",
    ],
  ];
  return (
    <section className='space-y-6'>
      <div className='bg-white rounded-3xl border p-7'>
        <span className='text-xs uppercase tracking-widest font-bold text-indigo-600'>
          Exemplos resolvidos
        </span>
        <h1 className='text-3xl font-black mt-2'>Do cálculo à interpretação</h1>
      </div>
      {items.map(([title, q, s], i) => (
        <article className='bg-white rounded-2xl border p-6' key={title}>
          <h2 className='text-xl font-black text-indigo-800'>
            Exemplo {i + 1} — {title}
          </h2>
          <p className='mt-3 text-slate-600'>{q}</p>
          <div className='step mt-4' data-step='✓'>
            {s}
          </div>
        </article>
      ))}
    </section>
  );
}
