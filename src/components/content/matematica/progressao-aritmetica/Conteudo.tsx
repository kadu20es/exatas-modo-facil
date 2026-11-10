import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { MathRenderer } from "../../../Math/MathRenderer";
import CourseHeader from "../../../header/CourseHeader.component";

function Section({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className='bg-white rounded-2xl border p-6 shadow-sm'>
      <div className='flex items-start gap-4'>
        <span className='grid place-items-center shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-800 font-black'>
          {number}
        </span>
        <div className='min-w-0 flex-1'>
          <h2 className='text-xl font-black text-slate-900'>{title}</h2>
          <div className='mt-3 space-y-3 text-slate-700 leading-7'>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function SourceTheory() {
  return (
    <section className='space-y-6' aria-labelledby='source-pa-title'>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-indigo-100 text-indigo-800 grid place-items-center font-black'>
              1
            </span>
            <h3 className='text-xl font-black'>O que é uma P.A.?</h3>
          </div>
          <p className='mt-4 text-slate-600 leading-7'>
            Imagine que você tem um cofrinho. No primeiro dia, você tem R$ 5,00.
            Esse é o seu <b>primeiro termo</b> (
            <MathRenderer expression='a_1' display={false} />
            ). A partir de amanhã, você guarda sempre R$ 2,00 por dia. O valor
            que aumenta (ou diminui) fixamente a cada passo é chamado de{" "}
            <b>razão</b> (<MathRenderer expression='r' display={false} />
            ).
          </p>
          <div className='my-5 rounded-xl border border-indigo-100 bg-indigo-50 p-5 text-center text-xl font-mono text-indigo-900'>
            <MathRenderer
              expression='(5,\ 7,\ 9,\ 11,\ 13,\ldots)'
              display={false}
            />
          </div>
          <div className='grid sm:grid-cols-2 gap-3 text-sm'>
            <div className='bg-indigo-50 rounded-xl p-4'>
              <b>
                <MathRenderer expression='a_1' display={false} /> (Primeiro
                Termo)
              </b>
              <br />O ponto de partida. No exemplo: 5.
            </div>
            <div className='bg-amber-50 rounded-xl p-4'>
              <b>
                <MathRenderer expression='r' display={false} /> (Razão)
              </b>
              <br />O tamanho do passo. No exemplo: +2.
            </div>
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-indigo-100 text-indigo-800 grid place-items-center font-black'>
              2
            </span>
            <h3 className='text-xl font-black'>
              Descobrindo o Futuro (Termo Geral)
            </h3>
          </div>
          <p className='mt-4 text-slate-600 leading-7'>
            Como saber quanto teremos no 10º dia sem precisar somar dedo por
            dedo? Para chegar ao 10º dia, você dá <b>9 passos</b> a partir do
            primeiro. Você multiplica o número de passos pela razão e soma com o
            início.
          </p>
          <div className='rounded-xl border border-indigo-100 bg-indigo-50 p-5 mt-4 text-center text-lg'>
            <MathRenderer expression='a_n=a_1+(n-1)\cdot r' display />
          </div>
          <div className='rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-4 mt-4 text-sm'>
            <b>
              Por que <MathRenderer expression='(n-1)' display={false} />?
            </b>{" "}
            Porque o primeiro dia já está lá! Para achar o 10º termo, pulamos
            apenas 9 vezes.
          </div>
        </article>
      </div>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <div className='flex items-center gap-3'>
          <span className='w-9 h-9 rounded-full bg-indigo-100 text-indigo-800 grid place-items-center font-black'>
            3
          </span>
          <h3 className='text-xl font-black'>
            A Mágica da Soma (Truque de Gauss)
          </h3>
        </div>
        <div className='grid lg:grid-cols-2 gap-6 mt-5'>
          <div>
            <p className='text-slate-600 leading-7'>
              Para somar todos os números de 1 até 100, um garoto chamado Gauss
              percebeu que somar as pontas dava sempre o mesmo valor: 1+100=101,
              2+99=101... São 50 pares de 101. A regra para somar termos de
              qualquer P.A. é exatamente essa!
            </p>
            <div className='rounded-xl border border-indigo-100 bg-indigo-50 p-5 mt-4 text-center text-lg'>
              <MathRenderer
                expression='S_n=\frac{(a_1+a_n)\cdot n}{2}'
                display
              />
            </div>
          </div>
          <div className='rounded-xl border bg-amber-50/60 p-5'>
            <div className='text-sm font-bold text-indigo-800 mb-3'>
              EXEMPLO GUIADO: Somar de 1 até 10
            </div>
            <div className='space-y-3 text-sm text-slate-700'>
              <div className='rounded-xl border bg-white p-4'>
                <b>1. Descubra as pontas:</b>{" "}
                <MathRenderer expression='a_1=1' display={false} /> e{" "}
                <MathRenderer expression='a_{10}=10' display={false} />.
              </div>
              <div className='rounded-xl border bg-white p-4'>
                <b>2. Some as pontas:</b>{" "}
                <MathRenderer expression='1+10=11' display={false} />.
              </div>
              <div className='rounded-xl border bg-white p-4'>
                <b>3. Quantos números tem?</b>{" "}
                <MathRenderer expression='n=10' display={false} />.
              </div>
              <div className='rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-4'>
                <b>4. Multiplique e divida por 2:</b>{" "}
                <MathRenderer
                  expression='\frac{11\times10}{2}=\frac{110}{2}=55'
                  display={false}
                />
                .
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export function ArithmeticProgressionTheory() {
  return (
    <article className='space-y-6'>
      <CourseHeader
        eyebrow='Sequências e padrões'
        title=' Progressão Aritmética (PA)'
        description=' Entenda sequências que avançam por acréscimos iguais. Aprenda a
          encontrar termos, somar sequências e resolver situações passo a passo.'
        bgClass='bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-950 text-white shadow-xl'
        stats={[
          { value: "1", label: "teoria completa" },
          { value: "2", label: "Exemplos práticos" },
          { value: "3", label: "laboratório interativo" },
          { value: "50", label: "exercícios com gabarito" },
        ]}
      />

      <SourceTheory />
      <Section number={1} title='Sequências, posições e a ideia de PA'>
        <p>
          Uma sequência é uma lista ordenada de números. Cada valor é um{" "}
          <b>termo</b> e sua posição é indicada por um índice: primeiro termo{" "}
          <MathRenderer expression='a_1' display={false} />, segundo termo{" "}
          <MathRenderer expression='a_2' display={false} />, até o termo de
          posição <MathRenderer expression='n' display={false} />, chamado{" "}
          <MathRenderer expression='a_n' display={false} />.
        </p>
        <p>
          Uma Progressão Aritmética é uma sequência em que a diferença entre um
          termo e o anterior é sempre a mesma. Essa diferença constante recebe o
          nome de <b>razão</b>, representada por{" "}
          <MathRenderer expression='r' display={false} />.
        </p>
        <MathRenderer expression='r=a_{n+1}-a_n' display />
        <p>
          Exemplo:{" "}
          <MathRenderer expression='4,\ 7,\ 10,\ 13,\ldots' display={false} />{" "}
          aumenta 3 a cada passo. É uma PA de razão{" "}
          <MathRenderer expression='r=3' display={false} />. Já{" "}
          <MathRenderer expression='4,\ 8,\ 16,\ 32,\ldots' display={false} />{" "}
          multiplica por 2: é uma PG.
        </p>
      </Section>
      <Section
        number={2}
        title='Como identificar, classificar e escrever uma PA'
      >
        <p>
          Subtraia cada termo pelo anterior. Se todas as diferenças forem
          iguais, a sequência é uma PA. A razão pode ser positiva, negativa ou
          zero.
        </p>
        <ul className='list-disc pl-6'>
          <li>
            <b>
              <MathRenderer expression='r&gt;0' display={false} />:
            </b>{" "}
            PA crescente.
          </li>
          <li>
            <b>
              <MathRenderer expression='r&lt;0' display={false} />:
            </b>{" "}
            PA decrescente.
          </li>
          <li>
            <b>
              <MathRenderer expression='r=0' display={false} />:
            </b>{" "}
            PA constante; todos os termos são iguais.
          </li>
        </ul>
        <p>
          Essas classificações descrevem a sequência quando observada na ordem
          dos índices. Para identificar a razão, faça sempre posterior menos
          anterior, mantendo a ordem.
        </p>
        <div className='rounded-xl bg-indigo-50 p-4'>
          <b>Exemplo:</b> em{" "}
          <MathRenderer expression='18,\ 13,\ 8,\ 3' display={false} />,
          calculamos <MathRenderer expression='13-18=-5' display={false} />,{" "}
          <MathRenderer expression='8-13=-5' display={false} /> e{" "}
          <MathRenderer expression='3-8=-5' display={false} />. Logo,{" "}
          <MathRenderer expression='r=-5' display={false} /> e a PA é
          decrescente.
        </div>
      </Section>
      <Section
        number={3}
        title='Encontrar qualquer termo: fórmula do termo geral'
      >
        <p>
          Para avançar termo a termo, somamos a razão. Do primeiro termo até a
          posição <MathRenderer expression='n' display={false} /> fazemos{" "}
          <MathRenderer expression='n-1' display={false} /> acréscimos:
        </p>
        <MathRenderer expression='a_n=a_1+(n-1)r' display />
        <p>
          A fórmula funciona para razões negativas e zero também. O{" "}
          <MathRenderer expression='n-1' display={false} /> aparece porque o
          primeiro termo já está na posição 1: para chegar à posição 5, por
          exemplo, são quatro passos.
        </p>
        <div className='rounded-xl bg-amber-50 border-l-4 border-amber-400 p-4'>
          <b>Como montar no papel:</b>
          <ol className='list-decimal pl-6 mt-2'>
            <li>
              Anote <MathRenderer expression='a_1' display={false} />,{" "}
              <MathRenderer expression='r' display={false} /> e a posição
              desejada <MathRenderer expression='n' display={false} />.
            </li>
            <li>
              Escreva{" "}
              <MathRenderer expression='a_n=a_1+(n-1)r' display={false} /> e
              substitua os dados.
            </li>
            <li>
              Calcule primeiro o parêntese, depois a multiplicação e a soma.
            </li>
            <li>
              Confira avançando a sequência ou calculando a diferença entre
              termos.
            </li>
          </ol>
        </div>
        <p>
          Exemplo: PA{" "}
          <MathRenderer expression='5,\ 9,\ 13,\ldots' display={false} />. Temos{" "}
          <MathRenderer expression='a_1=5' display={false} />,{" "}
          <MathRenderer expression='r=4' display={false} />. O 12º termo é{" "}
          <MathRenderer expression='a_{12}=5+(12-1)\cdot4=49' display={false} />
          .
        </p>
      </Section>
      <Section
        number={4}
        title='Descobrir a razão, o primeiro termo ou a posição'
      >
        <p>
          Quando conhecemos dois termos consecutivos, a razão é a diferença
          entre eles. Para termos distantes, podemos usar o termo geral e
          resolver a equação.
        </p>
        <p>
          Exemplo: <MathRenderer expression='a_3=11' display={false} /> e{" "}
          <MathRenderer expression='a_8=31' display={false} />. Entre as
          posições 3 e 8 há cinco intervalos, então:
        </p>
        <MathRenderer
          expression='r=\frac{a_8-a_3}{8-3}=\frac{31-11}{5}=4'
          display
        />
        <p>
          Com a razão, voltamos à fórmula para encontrar o primeiro termo:{" "}
          <MathRenderer expression='11=a_1+(3-1)\cdot4' display={false} />,
          então <MathRenderer expression='a_1=3' display={false} />.
        </p>
        <p>
          Se a incógnita for a posição, isole{" "}
          <MathRenderer expression='n' display={false} /> em{" "}
          <MathRenderer expression='a_n=a_1+(n-1)r' display={false} />. A
          posição deve ser um número inteiro positivo coerente com o enunciado.
        </p>
      </Section>
      <Section number={5} title='Soma dos primeiros termos'>
        <p>
          Somar termo por termo pode ser demorado. Em uma PA finita, o primeiro
          e o último, o segundo e o penúltimo, e assim por diante formam pares
          com a mesma soma. Daí obtemos:
        </p>
        <MathRenderer expression='S_n=\frac{n(a_1+a_n)}{2}' display />
        <p>
          Se ainda não conhecemos o último termo, podemos substituí-lo pela
          fórmula geral:
        </p>
        <MathRenderer expression='S_n=\frac{n\,[2a_1+(n-1)r]}{2}' display />
        <p>
          Exemplo: some os 10 primeiros termos de{" "}
          <MathRenderer expression='2,\ 5,\ 8,\ldots' display={false} />. O
          décimo é{" "}
          <MathRenderer expression='a_{10}=2+9\cdot3=29' display={false} />.
          Então:
        </p>
        <MathRenderer expression='S_{10}=\frac{10(2+29)}2=155' display />
        <p>
          Na folha, uma forma intuitiva é escrever a soma uma vez na ordem
          normal e outra invertida. Somando as colunas, cada par vale{" "}
          <MathRenderer expression='a_1+a_n' display={false} />; dividir por 2
          evita contar duas vezes.
        </p>
      </Section>
      <Section number={6} title='Aplicações e modelagem de problemas'>
        <p>
          PA modela situações em que uma quantidade muda por um{" "}
          <b>acréscimo ou decréscimo fixo</b> a cada etapa: economia semanal com
          depósito igual, fileiras com número de assentos aumentando sempre pelo
          mesmo valor, numeração de páginas ou distância percorrida em
          intervalos de tempo iguais a velocidade constante.
        </p>
        <p>
          Exemplo: alguém guarda R$ 20 na primeira semana e aumenta o depósito
          semanal em R$ 5. Os depósitos formam{" "}
          <MathRenderer expression='20,\ 25,\ 30,\ldots' display={false} />. O
          depósito da 8ª semana é{" "}
          <MathRenderer expression='20+7\cdot5=55' display={false} /> reais.
          Para saber quanto guardou ao todo nas oito semanas, usamos a soma:{" "}
          <MathRenderer expression='S_8=8(20+55)/2=300' display={false} />{" "}
          reais.
        </p>
        <div className='rounded-xl bg-emerald-50 border-l-4 border-emerald-500 p-4'>
          <b>Roteiro para resolver:</b>
          <ol className='list-decimal pl-6 mt-2'>
            <li>
              Defina o que cada termo representa e o que significa uma posição.
            </li>
            <li>Verifique se a mudança entre etapas é um valor fixo.</li>
            <li>
              Identifique <MathRenderer expression='a_1' display={false} />,{" "}
              <MathRenderer expression='r' display={false} /> e{" "}
              <MathRenderer expression='n' display={false} />.
            </li>
            <li>
              Escolha termo geral para um valor em uma posição ou soma para o
              total acumulado.
            </li>
            <li>Calcule e escreva a resposta com unidade e interpretação.</li>
          </ol>
        </div>
        <p>
          Uma taxa percentual fixa normalmente gera uma PG, pois a variação em
          reais muda junto com o valor. Um aumento fixo em reais normalmente
          gera uma PA. Veja também{" "}
          <Link
            to='/matematica/progressao-geometrica'
            className='font-bold text-indigo-800 hover:underline'
          >
            Progressão Geométrica
          </Link>
          .
        </p>
      </Section>
      <Section number={7} title='Erros frequentes e conferência'>
        <ul className='list-disc pl-6'>
          <li>
            Trocar a ordem da subtração: use sempre termo seguinte menos termo
            anterior.
          </li>
          <li>
            Usar <MathRenderer expression='n' display={false} /> em vez de{" "}
            <MathRenderer expression='n-1' display={false} /> na fórmula do
            termo geral.
          </li>
          <li>
            Confundir <MathRenderer expression='a_n' display={false} /> (um
            termo) com <MathRenderer expression='S_n' display={false} /> (a soma
            de vários termos).
          </li>
          <li>
            Aplicar uma PA em uma situação de variação percentual constante sem
            verificar se o acréscimo é realmente fixo.
          </li>
          <li>
            Esquecer sinais negativos, unidades ou que a posição começa em 1.
          </li>
        </ul>
        <p>
          Ao terminar, confira se{" "}
          <MathRenderer expression='a_{n+1}-a_n=r' display={false} /> e estime
          se o resultado deveria aumentar ou diminuir. Para revisar razões e
          proporções usadas em problemas, consulte{" "}
          <Link
            to='/matematica/razao-proporcao'
            className='font-bold text-indigo-800 hover:underline'
          >
            Razão e Proporção
          </Link>
          .
        </p>
      </Section>
    </article>
  );
}

export function ArithmeticProgressionExamples() {
  const examples = [
    {
      title: "1 · Descubra se é PA",
      prompt: "A sequência 7, 12, 17, 22 é uma PA?",
      steps: [
        "Calcule as diferenças: 12−7=5, 17−12=5 e 22−17=5.",
        "As diferenças são iguais; sim, é uma PA.",
        "A razão é r=5.",
      ],
    },
    {
      title: "2 · Encontre o 20º termo",
      prompt: "Na PA 3, 8, 13, ..., determine a₂₀.",
      steps: ["a₁=3 e r=5.", "a₂₀ = a₁+(20−1)r.", "a₂₀ = 3+19·5 = 98."],
    },
    {
      title: "3 · Razão negativa",
      prompt: "Uma PA começa em 40 e tem razão −6. Qual é o 7º termo?",
      steps: ["a₁=40, r=−6 e n=7.", "a₇=40+(7−1)(−6).", "a₇=40−36=4."],
    },
    {
      title: "4 · Encontre a razão entre termos distantes",
      prompt: "Em uma PA, a₄=14 e a₁₀=38. Determine r.",
      steps: [
        "Há 10−4=6 intervalos entre os termos.",
        "r=(a₁₀−a₄)/(10−4)=(38−14)/6.",
        "r=4.",
      ],
    },
    {
      title: "5 · Soma com o último termo",
      prompt:
        "Calcule a soma dos 12 primeiros termos de uma PA cujo primeiro termo é 2 e o décimo segundo é 35.",
      steps: ["Use Sₙ=n(a₁+aₙ)/2.", "S₁₂=12(2+35)/2.", "S₁₂=222."],
    },
    {
      title: "6 · Problema de economia",
      prompt:
        "Uma pessoa economiza R$ 15 na primeira semana e acrescenta R$ 5 ao depósito a cada semana. Quanto economiza ao todo em 8 semanas?",
      steps: [
        "Os depósitos formam uma PA: a₁=15, r=5 e n=8.",
        "a₈=15+7·5=50.",
        "S₈=8(15+50)/2=260. Ao todo, R$ 260.",
      ],
    },
  ];
  return (
    <section className='space-y-5'>
      <header className='bg-white rounded-3xl border p-7 shadow-sm'>
        <span className='text-xs font-black uppercase tracking-widest text-indigo-600'>
          Exemplos resolvidos
        </span>
        <h1 className='text-3xl font-black mt-2'>
          Da identificação à aplicação
        </h1>
        <p className='text-slate-600 mt-2'>
          Acompanhe a escolha da fórmula e cada etapa das contas.
        </p>
      </header>
      {examples.map((example) => (
        <article
          key={example.title}
          className='bg-white rounded-2xl border p-6 shadow-sm'
        >
          <h2 className='text-xl font-black text-indigo-900'>
            {example.title}
          </h2>
          <p className='text-slate-700 mt-3'>{example.prompt}</p>
          <ol className='mt-4 space-y-2'>
            {example.steps.map((step, index) => (
              <li
                key={step}
                className='step text-slate-700'
                data-step={index + 1}
              >
                {step}
              </li>
            ))}
          </ol>
        </article>
      ))}
    </section>
  );
}
