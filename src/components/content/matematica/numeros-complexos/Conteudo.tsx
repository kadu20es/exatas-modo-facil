import CourseHeader from "../../../header/CourseHeader.component";
import { MathRenderer } from "../../../Math/MathRenderer";
export function ComplexNumbersTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='Além da imaginação: números fora da realidade'
        title='Números complexos'
        description='Os números complexos ampliam os reais e permitem resolver equações sem
          solução real, como x²+1=0. Cada complexo combina uma parte real e uma
          parte imaginária.'
        bgClass='bg-gradient-to-br from-fuchsia-950 via-purple-900 to-slate-950 text-white shadow-xl'
        stats={[
          { value: "1", label: "comparar quantidades" },
          { value: "2", label: "razões equivalentes" },
          { value: "3", label: "resolver proporções" },
          { value: "✓", label: "conferir o resultado" },
        ]}
      />

      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>A unidade imaginária</h2>
          <p className='mt-3 text-slate-600'>
            Definimos i como a raiz quadrada de −1. Assim, seu quadrado é −1 e
            suas potências se repetem em um ciclo de quatro.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center space-y-2'>
            <MathRenderer
              display
              expression={String.raw`i=\sqrt{-1},\quad i^2=-1`}
            />
            <MathRenderer
              display
              expression={String.raw`i^1=i,\quad i^2=-1,\quad i^3=-i,\quad i^4=1`}
            />
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Forma algébrica</h2>
          <p className='mt-3 text-slate-600'>
            Todo número complexo pode ser escrito como z=a+bi. A parte real é a;
            o coeficiente da parte imaginária é b.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`z=a+bi,\quad a,b\in\mathbb{R}`}
            />
          </div>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Operações algébricas</h2>
          <p className='mt-3 text-slate-600'>
            Some e subtraia partes reais com reais e imaginárias com
            imaginárias. Na multiplicação, distribua os fatores e substitua i²
            por −1.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center space-y-2'>
            <MathRenderer
              display
              expression={String.raw`(a+bi)+(c+di)=(a+c)+(b+d)i`}
            />
            <MathRenderer
              display
              expression={String.raw`(a+bi)(c+di)=(ac-bd)+(ad+bc)i`}
            />
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Conjugado e divisão</h2>
          <p className='mt-3 text-slate-600'>
            O conjugado de a+bi é a−bi. Multiplicar pelo conjugado transforma o
            denominador em um número real.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`\overline{a+bi}=a-bi,\quad(a+bi)(a-bi)=a^2+b^2`}
            />
          </div>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Plano de Argand-Gauss</h2>
          <p className='mt-3 text-slate-600'>
            Associe z=a+bi ao ponto (a,b): a parte real é o eixo horizontal e a
            imaginária é o eixo vertical.
          </p>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>
            Módulo, argumento e forma trigonométrica
          </h2>
          <p className='mt-3 text-slate-600'>
            O módulo é a distância até a origem; o argumento é o ângulo com o
            eixo real positivo.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center space-y-2'>
            <MathRenderer
              display
              expression={String.raw`|z|=\rho=\sqrt{a^2+b^2},\quad\theta=\arg(z)`}
            />
            <MathRenderer
              display
              expression={String.raw`z=\rho(\cos\theta+i\sin\theta)`}
            />
          </div>
        </article>
      </div>
    </div>
  );
}
