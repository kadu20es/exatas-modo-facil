import CourseHeader from "../../../header/CourseHeader.component";
import { MathText } from "../../../Math/MathRenderer";

export function PlaneGeometryTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='O espaço em 2D'
        title='Área e perímetro'
        description='Geometria conecta formas e medidas. O perímetro acompanha as bordas; a
          área mede a superfície preenchida.'
        bgClass='bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-950 text-white shadow-xl'
        stats={[
          { value: "2", label: "conceitos vitais" },
          { value: "📐", label: "construtor dinâmico" },
          { value: "✓", label: "fórmulas visuais" },
          { value: "100", label: "exercícios" },
        ]}
      />

      <div className='grid md:grid-cols-2 gap-5'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Perímetro: o contorno</h2>
          <p className='mt-3 text-slate-600'>
            Some os comprimentos de todos os lados. É medido em unidades
            lineares, como cm ou m.
          </p>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Área: a superfície</h2>
          <p className='mt-3 text-slate-600'>
            Mede o espaço interno. É expressa em unidades quadradas, como cm² ou
            m².
          </p>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Retângulo e quadrado</h2>
          <p className='mt-3 text-slate-600'>
            Multiplique base por altura. No quadrado, todos os lados são iguais.
          </p>
          <div className='paper p-4 rounded-xl text-center mt-4'>
            <MathText>{"\\[A=b\\cdot h\\qquad P=2b+2h\\]"}</MathText>
            <p className='text-sm mt-2'>Quadrado de lado ℓ: A = ℓ² e P = 4ℓ.</p>
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Triângulo</h2>
          <p className='mt-3 text-slate-600'>
            A área corresponde à metade de um retângulo com a mesma base e
            altura. O perímetro é a soma dos três lados.
          </p>
          <div className='paper p-4 rounded-xl text-center mt-4'>
            <MathText>{"\\[A=\\frac{b\\cdot h}{2}\\qquad P=a+b+c\\]"}</MathText>
          </div>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Círculo e o número π</h2>
          <p className='mt-3 text-slate-600'>
            O comprimento da circunferência é o perímetro. A área mede a região
            interna circular.
          </p>
          <div className='paper p-4 rounded-xl text-center mt-4'>
            <MathText>{"\\[C=2\\pi r=\\pi d\\qquad A=\\pi r^2\\]"}</MathText>
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Paralelogramo e trapézio</h2>
          <p className='mt-3 text-slate-600'>
            A área do paralelogramo usa base e altura perpendicular. No
            trapézio, some as bases paralelas e multiplique pela altura,
            dividindo por dois.
          </p>
          <div className='paper p-4 rounded-xl text-center mt-4'>
            <MathText>
              {"\\[A_{par}=b\\cdot h\\qquad A_{trap}=\\frac{(B+b)h}{2}\\]"}
            </MathText>
          </div>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Unidades de medida</h2>
          <p className='mt-3 text-slate-600'>
            Perímetro usa unidades lineares; área usa unidades ao quadrado. Ao
            converter m² para cm², o fator de conversão também fica ao quadrado:
            1 m² = 10.000 cm².
          </p>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Polígonos regulares</h2>
          <p className='mt-3 text-slate-600'>
            Polígono regular tem lados e ângulos iguais. Para n lados, a soma
            dos ângulos internos é (n − 2)·180° e o número de diagonais é n(n −
            3)/2.
          </p>
          <div className='paper p-4 rounded-xl text-center mt-4'>
            <MathText>
              {"\\[S=(n-2)\\cdot180^\\circ\\qquad D=\\frac{n(n-3)}{2}\\]"}
            </MathText>
          </div>
        </article>
      </div>
    </div>
  );
}
