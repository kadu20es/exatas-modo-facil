import CourseHeader from "../../../header/CourseHeader.component";
import { MathText } from "../../../Math/MathRenderer";

export function LinearTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='CURSO DO ZERO'
        title='A arte de encontrar o x'
        description=' Resolver uma equação não é mágica de “passar para o outro lado”.
          É manter uma balança equilibrada até que o x fique sozinho.'
        bgClass='bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900'
        stats={[
          { value: "7", label: "ideias essenciais" },
          { value: "⚖️", label: "balança virtual" },
          { value: "✓", label: "resolução detalhada" },
          { value: "100", label: "exercícios" },
        ]}
      />

      <div className='tip rounded-2xl p-5 shadow-sm'>
        <b>Regra de ouro:</b> uma equação é uma balança em equilíbrio. Tudo que
        você fizer de um lado — somar, subtrair, multiplicar ou dividir — deve
        ser feito igualmente do outro lado.
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <h2 className='text-xl font-black'>1. O que é uma equação?</h2>
          <p className='mt-4 text-slate-600 leading-7'>
            É uma afirmação de que duas expressões têm o mesmo valor. O sinal de
            igual é o centro da balança. O objetivo é deixar a incógnita x
            sozinha.
          </p>
          <div className='paper p-5 mt-4 text-center text-xl'>
            <MathText>{"\\[2x+3=11\\]"}</MathText>
          </div>
          <div className='grid sm:grid-cols-2 gap-3 text-sm mt-4'>
            <div className='bg-indigo-50 rounded-xl p-4'>
              <b>Membro esquerdo</b>
              <br />
              Tudo antes do sinal de igual, como 2x + 3.
            </div>
            <div className='bg-amber-50 rounded-xl p-4'>
              <b>Membro direito</b>
              <br />
              Tudo depois do sinal de igual, como 11.
            </div>
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <h2 className='text-xl font-black'>2. Soma e subtração</h2>
          <p className='mt-4 text-slate-600 leading-7'>
            Para remover um número que soma com x, usamos a operação inversa nos
            dois lados.
          </p>
          <div className='paper p-5 mt-4 text-center space-y-2'>
            <MathText>{"\\(x+5=12\\)"}</MathText>
            <p className='text-slate-500 text-sm'>Subtraia 5 dos dois lados.</p>
            <MathText>{"\\(x+5-5=12-5\\)"}</MathText>
            <b>
              <MathText>{"\\(x=7\\)"}</MathText>
            </b>
          </div>
          <p className='success p-4 rounded-xl mt-4 text-sm'>
            Dizer que o 5 “passa trocando de sinal” é um atalho para a operação
            inversa feita nos dois lados.
          </p>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>3. Multiplicação e divisão</h2>
          <p className='mt-3 text-slate-600'>
            Se um número está multiplicando x, divida os dois lados por ele.
          </p>
          <div className='space-y-3 mt-4 text-sm'>
            <div className='step' data-step='1'>
              Equação: <MathText>{"\\(3x=15\\)"}</MathText>.
            </div>
            <div className='step' data-step='2'>
              Divida ambos os lados por 3.
            </div>
            <div className='step' data-step='3'>
              <MathText>{"\\(\\frac{3x}{3}=\\frac{15}{3}\\)"}</MathText>; sobra
              x = 5.
            </div>
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>4. Letras dos dois lados</h2>
          <p className='mt-3 text-slate-600'>
            Agrupe os termos com x em um membro e os números no outro, sempre
            aplicando a mesma operação nos dois lados.
          </p>
          <div className='paper p-5 mt-4 text-center space-y-2'>
            <MathText>{"\\(5x=2x+12\\)"}</MathText>
            <MathText>{"\\(3x=12\\)"}</MathText>
            <b>
              <MathText>{"\\(x=4\\)"}</MathText>
            </b>
          </div>
        </article>
      </div>
      <section className='bg-white rounded-2xl border shadow-sm p-6'>
        <h2 className='text-2xl font-black'>
          5. Equações completas: ordem de ataque
        </h2>
        <div className='grid lg:grid-cols-2 gap-6 mt-5'>
          <ol className='space-y-2 text-sm list-decimal list-inside text-slate-700'>
            <li>
              <b>Limpe:</b> resolva parênteses e junte termos semelhantes.
            </li>
            <li>
              <b>Agrupe os x:</b> leve os termos com incógnita a um lado.
            </li>
            <li>
              <b>Agrupe os números:</b> leve os termos independentes ao outro.
            </li>
            <li>
              <b>Isole:</b> divida pelo coeficiente de x.
            </li>
          </ol>
          <div className='paper rounded-2xl p-5 text-sm space-y-3'>
            <b className='text-indigo-700'>Exemplo: 4x − 5 = x + 7</b>
            <p>Subtraia x dos dois lados: 3x − 5 = 7.</p>
            <p>Some 5 dos dois lados: 3x = 12.</p>
            <p>Divida por 3: x = 4.</p>
          </div>
        </div>
      </section>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>6. Propriedade distributiva</h2>
          <p className='mt-3 text-slate-600'>
            Multiplique o fator externo por todos os termos dentro dos
            parênteses.
          </p>
          <div className='paper p-5 mt-4 text-center space-y-2'>
            <MathText>{"\\(2(x+4)=18\\)"}</MathText>
            <MathText>{"\\(2x+8=18\\)"}</MathText>
            <MathText>{"\\(2x=10\\Rightarrow x=5\\)"}</MathText>
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>7. Equações com frações</h2>
          <p className='mt-3 text-slate-600'>
            Elimine as frações multiplicando todos os termos pelo MMC dos
            denominadores.
          </p>
          <div className='paper p-5 mt-4 text-center space-y-2'>
            <MathText>{"\\(\\frac{x}{3}+2=5\\)"}</MathText>
            <p>Multiplique cada termo por 3.</p>
            <MathText>{"\\(x+6=15\\Rightarrow x=9\\)"}</MathText>
          </div>
        </article>
      </div>
    </div>
  );
}
