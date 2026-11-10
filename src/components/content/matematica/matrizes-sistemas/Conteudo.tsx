import CourseHeader from "../../../header/CourseHeader.component";
import { MathRenderer } from "../../../Math/MathRenderer";

export function MatricesTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='Álgebra linear do zero'
        title='Matrizes e Sistemas'
        description='Matrizes organizam informações em linhas e colunas; operações e
          determinantes ajudam a resolver sistemas e compreender transformações.'
        bgClass='bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-950 text-white shadow-xl'
        stats={[
          { value: "8", label: "conceitos" },
          { value: "🟪", label: "laboratório visual" },
          { value: "✓", label: "passo a passo" },
          { value: "100", label: "exercícios" },
        ]}
      />

      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>O que é uma matriz?</h2>
          <p className='mt-3 text-slate-600'>
            É uma tabela retangular de elementos. A ordem informa quantidade de
            linhas por quantidade de colunas; o elemento aᵢⱼ está na linha i e
            coluna j.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`A_{2\times2}=\begin{bmatrix}a&b\\c&d\end{bmatrix}`}
            />
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Matrizes especiais</h2>
          <p className='mt-3 text-slate-600'>
            A matriz nula contém zeros; a identidade tem 1 na diagonal principal
            e zeros fora dela; uma matriz transposta troca linhas por colunas.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`I_2=\begin{bmatrix}1&0\\0&1\end{bmatrix}`}
            />
          </div>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Operações</h2>
          <p className='mt-3 text-slate-600'>
            Soma e subtração são feitas elemento a elemento e exigem matrizes da
            mesma ordem. Multiplicar por escalar significa multiplicar cada
            entrada pelo número.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`(A+B)_{ij}=a_{ij}+b_{ij},\quad(kA)_{ij}=ka_{ij}`}
            />
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Multiplicação de matrizes</h2>
          <p className='mt-3 text-slate-600'>
            Para calcular AB, o número de colunas de A deve ser igual ao número
            de linhas de B. Cada elemento resulta do produto escalar de uma
            linha por uma coluna. Em geral, AB≠BA.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`c_{ij}=\sum_k a_{ik}b_{kj}`}
            />
          </div>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Determinantes</h2>
          <p className='mt-3 text-slate-600'>
            Determinante é um número associado a uma matriz quadrada. Para 2×2,
            multiplique a diagonal principal e subtraia o produto da secundária.
            Para 3×3, a regra de Sarrus soma diagonais descendentes e subtrai as
            ascendentes.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`\det\begin{bmatrix}a&b\\c&d\end{bmatrix}=ad-bc`}
            />
            <div className='mt-3'>
              Para 3×3: soma das diagonais principais − soma das diagonais
              secundárias.
            </div>
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Sistemas lineares e Cramer</h2>
          <p className='mt-3 text-slate-600'>
            Um sistema reúne equações com as mesmas incógnitas. Na regra de
            Cramer, se o determinante principal D não for zero, cada incógnita é
            o determinante da matriz substituída dividido por D.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`x=\frac{D_x}{D},\quad y=\frac{D_y}{D}`}
            />
          </div>
          <p className='text-sm text-slate-600 mt-3'>
            Se D=0, não há solução única: o sistema pode ser impossível ou
            indeterminado.
          </p>
        </article>
      </div>
      <div className='tip rounded-2xl p-5'>
        <b>Interpretação geométrica:</b> o módulo do determinante 2×2 representa
        o fator de escala da área. Determinante negativo também indica inversão
        de orientação.
      </div>
    </div>
  );
}
