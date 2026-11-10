import CourseHeader from "../../../header/CourseHeader.component";
import { MathText } from "../../../Math/MathRenderer";

export function AnalyticGeometryTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='Coordenadas e formas'
        title='O GPS da Matemática'
        description='A Geometria Analítica traduz figuras em equações e posições em
          coordenadas no plano cartesiano.'
        bgClass='bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-950 text-white shadow-xl'
        stats={[
          { value: "6", label: "tópicos" },
          { value: "🗺️", label: "plano interativo" },
          { value: "✓", label: "fórmulas" },
          { value: "100", label: "exercícios" },
        ]}
      />

      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Plano cartesiano e quadrantes</h2>
          <p className='mt-3 text-slate-600'>
            Um ponto é descrito pelo par ordenado (x,y). O eixo horizontal é das
            abscissas; o vertical é das ordenadas. Os sinais identificam os
            quatro quadrantes.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathText>
              {"\\[(+,+):I\\quad(-,+):II\\quad(-,-):III\\quad(+,-):IV\\]"}
            </MathText>
          </div>
          <p className='text-sm text-slate-600 mt-3'>
            Pontos sobre os eixos não pertencem a nenhum quadrante.
          </p>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Ponto médio</h2>
          <p className='mt-3 text-slate-600'>
            O ponto médio fica exatamente à mesma distância das duas
            extremidades. Faça a média das coordenadas x e, separadamente, das
            coordenadas y.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathText>
              {"\\[M=\\left(\\frac{x_A+x_B}{2},\\frac{y_A+y_B}{2}\\right)\\]"}
            </MathText>
          </div>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Distância entre pontos</h2>
          <p className='mt-3 text-slate-600'>
            As diferenças horizontal e vertical formam os catetos de um
            triângulo retângulo. Use Pitágoras para achar o segmento que liga os
            pontos.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathText>
              {"\\[d(A,B)=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}\\]"}
            </MathText>
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Coeficiente angular</h2>
          <p className='mt-3 text-slate-600'>
            A inclinação da reta é a variação vertical dividida pela variação
            horizontal. Reta crescente tem inclinação positiva; decrescente,
            negativa.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathText>{"\\[m=\\frac{y_2-y_1}{x_2-x_1}\\]"}</MathText>
          </div>
          <p className='text-sm text-slate-600 mt-3'>
            Se x₁=x₂, a reta é vertical e não possui coeficiente angular
            definido.
          </p>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Equação da reta</h2>
          <p className='mt-3 text-slate-600'>
            Na forma reduzida, m informa a inclinação e n indica onde a reta
            cruza o eixo y. Pela forma ponto-inclinação, substitua um ponto
            conhecido e o coeficiente angular.
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathText>{"\\[y=mx+n\\qquad y-y_0=m(x-x_0)\\]"}</MathText>
          </div>
          <p className='mt-3 text-sm text-slate-600'>
            Retas paralelas têm mesmo m. Retas perpendiculares têm inclinações
            cujo produto é −1, quando ambas não são verticais.
          </p>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Circunferência</h2>
          <p className='mt-3 text-slate-600'>
            A circunferência reúne pontos que estão a uma distância fixa r do
            centro C(a,b).
          </p>
          <div className='paper p-4 rounded-xl mt-4 text-center'>
            <MathText>{"\\[(x-a)^2+(y-b)^2=r^2\\]"}</MathText>
          </div>
          <p className='text-sm text-slate-600 mt-3'>
            A forma geral pode ser reorganizada completando quadrados para
            identificar centro e raio.
          </p>
        </article>
      </div>
      <div className='tip rounded-2xl p-5'>
        <b>Distância de ponto à reta:</b> para Ax+By+C=0 e ponto P(x₀,y₀), use{" "}
        <MathText>{"\\(d=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}\\)"}</MathText>.
      </div>
    </div>
  );
}
