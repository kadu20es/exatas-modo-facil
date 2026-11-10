import CourseHeader from "../../../header/CourseHeader.component";
import { MathRenderer } from "../../../Math/MathRenderer";
export function ExponentialLogTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='Funções inversas'
        title='Dominando exponenciais e logaritmos'
        description='A função exponencial descreve crescimento e decaimento. O logaritmo
          responde à pergunta inversa: a que expoente devemos elevar uma base
          para obter certo valor?'
        bgClass='bg-gradient-to-br from-teal-950 via-teal-900 to-slate-900 text-white shadow-xl'
        stats={[
          { value: "1", label: "introdução" },
          { value: "🔬", label: "laboratório interativo" },
          { value: "🧮", label: "calculadora" },
          { value: "100", label: "exercícios progressivos" },
        ]}
      />

      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>
            Potências e expoentes especiais
          </h2>
          <p className='mt-3 text-slate-600'>
            Uma potência representa multiplicações repetidas. Expoente zero
            resulta em 1 (para base não nula); expoente negativo inverte a base;
            expoente fracionário representa uma raiz.
          </p>
          <div className='paper p-4 rounded-xl mt-4 space-y-2 text-center'>
            <MathRenderer
              display
              expression={String.raw`a^m a^n=a^{m+n},\quad\frac{a^m}{a^n}=a^{m-n}`}
            />
            <MathRenderer
              display
              expression={String.raw`a^0=1,\quad a^{-n}=\frac1{a^n},\quad a^{m/n}=\sqrt[n]{a^m}`}
            />
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>O que é logaritmo?</h2>
          <p className='mt-3 text-slate-600'>
            O logaritmo logₐ(b) é o expoente ao qual devemos elevar a para obter
            b. Ele é a operação inversa da potenciação.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`\log_a b=x\iff a^x=b`}
            />
          </div>
          <div className='bg-rose-50 text-rose-900 p-4 rounded-xl mt-4 text-sm'>
            <b>Condições:</b> a&gt;0, a≠1 e b&gt;0.
          </div>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Logaritmos famosos</h2>
          <p className='mt-3 text-slate-600'>
            O logaritmo decimal usa base 10; o logaritmo natural usa base e,
            aproximadamente 2,718.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center space-y-2'>
            <MathRenderer
              display
              expression={String.raw`\log x=\log_{10}x,\qquad\ln x=\log_e x`}
            />
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Três propriedades de ouro</h2>
          <div className='paper p-4 rounded-xl mt-4 space-y-3 text-center'>
            <MathRenderer
              display
              expression={String.raw`\log_a(xy)=\log_a x+\log_a y`}
            />
            <MathRenderer
              display
              expression={String.raw`\log_a\left(\frac{x}{y}\right)=\log_a x-\log_a y`}
            />
            <MathRenderer
              display
              expression={String.raw`\log_a(x^r)=r\log_a x`}
            />
          </div>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Mudança de base</h2>
          <p className='mt-3 text-slate-600'>
            Use esta fórmula para calcular um logaritmo em uma base diferente da
            disponível na calculadora.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`\log_a x=\frac{\log_b x}{\log_b a}`}
            />
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Equações exponenciais</h2>
          <p className='mt-3 text-slate-600'>
            Tente reescrever os dois lados com a mesma base. Se a base comum é
            positiva e diferente de 1, iguale os expoentes.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`a^{f(x)}=a^{g(x)}\Rightarrow f(x)=g(x)`}
            />
          </div>
        </article>
      </div>
      <div className='tip rounded-2xl p-5'>
        <b>Checklist:</b> procure bases iguais; verifique as condições de
        existência antes de operar logaritmos; substitua a solução na equação
        original.
      </div>
    </div>
  );
}
