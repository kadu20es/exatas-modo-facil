import CourseHeader from "../../../header/CourseHeader.component";
import { MathRenderer } from "../../../Math/MathRenderer";

export function LinearFunctionTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='Curso do zero'
        title='Função do 1º Grau sem mistério'
        description='Uma função afim descreve uma relação que muda sempre na mesma
          proporção. Seu gráfico é uma reta; aprenda a ler a lei, calcular
          valores e interpretar situações do cotidiano.'
        bgClass='bg-gradient-to-br from-teal-950 via-teal-900 to-slate-900 text-white shadow-xl'
        stats={[
          { value: "8", label: "tópicos" },
          { value: "📈", label: "gráfico interativo" },
          { value: "✓", label: "resolução detalhada" },
          { value: "30", label: "exercícios" },
        ]}
      />

      <div className='tip rounded-2xl p-5'>
        <b>Como estudar:</b> identifique os coeficientes, veja o que o problema
        pede e use o gráfico para conferir seu raciocínio.
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Forma geral e coeficientes</h2>
          <p className='mt-3 text-slate-600'>
            A função do primeiro grau pode ser escrita na forma:
          </p>
          <div className='paper rounded-xl p-5 mt-4 text-center'>
            <MathRenderer
              display
              expression={String.raw`f(x)=ax+b,\quad a\ne 0`}
            />
          </div>
          <p className='mt-3 text-slate-600'>
            <b>a</b> é o coeficiente angular e determina inclinação e
            crescimento. <b>b</b> é o coeficiente linear: o valor da função
            quando x=0.
          </p>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Calculando f(x)</h2>
          <p className='mt-3 text-slate-600'>
            Substitua x pelo valor pedido e resolva as operações.
          </p>
          <div className='paper rounded-xl p-4 mt-4'>
            <p>Para f(x)=2x+3, calcule f(4):</p>
            <div className='mt-3 space-y-2'>
              <p>f(4)=2·4+3</p>
              <p>=8+3</p>
              <p className='font-bold text-indigo-800'>=11</p>
            </div>
          </div>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Gráfico, raiz e interceptos</h2>
          <p className='mt-3 text-slate-600'>
            Dois pontos determinam a reta. O valor b marca o cruzamento com o
            eixo y. A raiz é o x para o qual f(x)=0, ponto em que a reta cruza o
            eixo x.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathRenderer display expression={String.raw`x_0=-\frac{b}{a}`} />
          </div>
          <p className='mt-3 text-sm text-slate-600'>
            Exemplo: 2x+3=0, então x=−3/2.
          </p>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Crescente e decrescente</h2>
          <p className='mt-3 text-slate-600'>
            O sinal de a indica como a função se comporta quando x aumenta.
          </p>
          <div className='grid gap-3 mt-4'>
            <div className='bg-emerald-50 text-emerald-900 p-4 rounded-xl'>
              <b>a&gt;0:</b> função crescente; a reta sobe da esquerda para a
              direita.
            </div>
            <div className='bg-rose-50 text-rose-900 p-4 rounded-xl'>
              <b>a&lt;0:</b> função decrescente; a reta desce da esquerda para a
              direita.
            </div>
          </div>
          <p className='text-sm text-slate-600 mt-3'>
            Quanto maior |a|, maior a inclinação. Se a=0, a função é constante,
            não de primeiro grau.
          </p>
        </article>
      </div>
      <article className='bg-white rounded-2xl border p-6'>
        <h2 className='text-xl font-black'>
          Encontrando a lei a partir de dois pontos
        </h2>
        <p className='mt-3 text-slate-600'>
          Calcule a variação de y dividida pela variação de x para encontrar a;
          em seguida, substitua um dos pontos em f(x)=ax+b para descobrir b.
        </p>
        <div className='paper rounded-xl p-4 mt-4'>
          <p className='text-center'>a = (y₂−y₁)/(x₂−x₁)</p>
          <p className='text-center mt-3'>
            Pelos pontos (1,5) e (3,9): a=4/2=2; então 5=2·1+b e b=3. Logo
            f(x)=2x+3.
          </p>
        </div>
      </article>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm'>
        {[
          ["① Identifique", "a e b ou encontre-os pelos dados."],
          ["② Decida", "Valor de f(x), raiz ou lei da função?"],
          ["③ Substitua", "Resolva com uma etapa de cada vez."],
          ["④ Confira", "O sinal de a combina com o sentido da reta?"],
        ].map(([h, p]) => (
          <div className='bg-white rounded-xl border p-4' key={h}>
            <b>{h}</b>
            <p className='text-slate-600 mt-1'>{p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LinearFunctionExamples() {
  const examples = [
    ["Calcular f(x)", "Dada f(x)=3x−4, calcule f(2).", "f(2)=3·2−4=6−4=2."],
    ["Encontrar a raiz", "Encontre a raiz de f(x)=4x−8.", "4x−8=0; 4x=8; x=2."],
    [
      "Classificar a função",
      "f(x)=−2x+5 é crescente ou decrescente?",
      "a=−2<0, então a função é decrescente.",
    ],
    [
      "Lei por dois pontos",
      "A reta passa por (0,1) e (2,7).",
      "a=(7−1)/(2−0)=3; como x=0 dá b=1, f(x)=3x+1.",
    ],
    [
      "Aluguel de carro",
      "Uma locadora cobra R$ 50 fixos mais R$ 2 por km. Quanto custa rodar 80 km?",
      "f(x)=2x+50; f(80)=160+50=R$ 210.",
    ],
    ["Encontrar x", "f(x)=5x−3. Para qual x, f(x)=17?", "5x−3=17; 5x=20; x=4."],
  ];
  return (
    <section className='space-y-6'>
      <div className='bg-white rounded-3xl border p-7'>
        <span className='text-xs uppercase tracking-widest font-bold text-indigo-600'>
          Exemplos resolvidos
        </span>
        <h1 className='text-3xl font-black mt-2'>Raciocínio passo a passo</h1>
        <p className='text-slate-600 mt-2'>
          Acompanhe os modelos antes de praticar.
        </p>
      </div>
      {examples.map(([title, q, steps], i) => (
        <article className='bg-white rounded-2xl border p-6' key={title}>
          <h2 className='text-xl font-black text-indigo-800'>
            Exemplo {i + 1} — {title}
          </h2>
          <p className='mt-3 text-slate-600'>{q}</p>
          <div className='step mt-4' data-step='✓'>
            {steps}
          </div>
        </article>
      ))}
    </section>
  );
}
