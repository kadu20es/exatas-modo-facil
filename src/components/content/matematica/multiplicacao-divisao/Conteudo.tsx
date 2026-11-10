import CourseHeader from "../../../header/CourseHeader.component";
import { MathRenderer } from "../../../Math/MathRenderer";

function DisplayFormula({ expression }: { expression: string }) {
  return (
    <div className='my-5 paper rounded-xl p-5 text-center text-xl font-mono text-teal-800'>
      <MathRenderer display expression={expression} />
    </div>
  );
}

function LongDivisionDiagram() {
  return (
    <div className='paper p-6 rounded-xl text-center flex flex-col justify-center items-center font-mono text-xl text-slate-700 mt-2 lg:mt-0 shadow-inner min-h-72'>
      <div className='text-teal-700 font-bold mb-4 font-sans text-lg'>
        Visualizando a Chave
      </div>
      <div className='text-left inline-block'>
        <div className='flex'>
          <div className='w-16 text-right pr-2 tracking-[0.2em]'>85</div>
          <div className='w-16 border-l-2 border-b-2 border-teal-800 pl-2'>
            5
          </div>
        </div>
        <div className='flex'>
          <div className='w-16 text-right pr-2 text-red-500 tracking-[0.2em]'>
            -5
            <br />
            <span className='text-black border-t border-slate-400 w-full inline-block mt-1 pt-1'>
              35
            </span>
            <br />
            <span className='text-red-500'>-35</span>
            <br />
            <span className='text-black border-t border-slate-400 w-full inline-block mt-1 pt-1 ml-2'>
              0
            </span>
          </div>
          <div className='w-16 pl-2 text-teal-700 font-bold tracking-[0.2em]'>
            17
          </div>
        </div>
      </div>
    </div>
  );
}

export function MultiplicacaoDivisaoTheory() {
  return (
    <section className='space-y-7'>
      <CourseHeader
        eyebrow='Curso Completo de Multiplicação e Divisão'
        title='Irmas e rivais'
        description='Enquanto a Multiplicação serve para somar o mesmo número várias vezes
          (construir grupos), a Divisão serve para pegar um montão e repartir
          igualmente (separar os grupos).'
        bgClass='bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 text-white shadow-xl'
        stats={[
          { value: "✓", label: "conceitos bem explicados" },
          { value: "🟪", label: "laboratório visual" },
          { value: "1x1", label: "Laboratório visual" },
          { value: "80", label: "exercícios" },
        ]}
      />

      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-teal-100 text-teal-700 grid place-items-center font-black'>
              ✖️
            </span>
            <h2 className='text-xl font-black'>Multiplicação: Soma Rápida</h2>
          </div>
          <p className='mt-4 text-slate-600 leading-7'>
            Se você comprar 3 caixas de ovos, e cada caixa tem 6 ovos, quantos
            ovos você tem? Em vez de fazer{" "}
            <MathRenderer expression={String.raw`6+6+6`} />, você usa a
            multiplicação: <MathRenderer expression={String.raw`3\times6`} />.
          </p>
          <DisplayFormula expression={String.raw`3\times6=18`} />
          <div className='grid sm:grid-cols-2 gap-3 text-sm'>
            <div className='bg-teal-50 rounded-xl p-4'>
              <b>Fatores</b>
              <br />
              Os números que se multiplicam (3 e 6). A ordem não importa!
            </div>
            <div className='bg-teal-50 rounded-xl p-4'>
              <b>Produto</b>
              <br />O resultado final (18).
            </div>
          </div>
        </article>

        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-cyan-100 text-cyan-700 grid place-items-center font-black'>
              ➗
            </span>
            <h2 className='text-xl font-black'>Divisão: Repartição Justa</h2>
          </div>
          <p className='mt-4 text-slate-600 leading-7'>
            Se você tem 18 ovos e quer dividir igualmente em 3 caixas, você faz
            o caminho inverso: <MathRenderer expression={String.raw`18\div3`} />
            . A resposta será quantos ovos ficam em cada caixa.
          </p>
          <div className='my-5 paper rounded-xl p-5 text-center text-xl font-mono text-cyan-800'>
            <MathRenderer display expression={String.raw`18\div3=6`} />
          </div>
          <div className='grid sm:grid-cols-2 gap-3 text-sm'>
            <div className='bg-cyan-50 rounded-xl p-4'>
              <b>Dividendo / Divisor</b>
              <br />O total (18) e em quantas partes será dividido (3).
            </div>
            <div className='bg-cyan-50 rounded-xl p-4'>
              <b>Quociente e Resto</b>
              <br />A resposta (6) e o que sobrou (0).
            </div>
          </div>
        </article>
      </div>

      <article className='bg-white rounded-2xl border p-6 sm:p-8 shadow-sm'>
        <div className='inline-block px-3 py-1 bg-teal-100 text-teal-800 text-xs font-black rounded-full uppercase tracking-wider mb-4'>
          Masterclass
        </div>
        <h2 className='text-2xl sm:text-3xl font-black text-teal-900 mb-6'>
          Guia Definitivo da Divisão
        </h2>
        <p className='text-slate-600 mb-8 leading-relaxed'>
          A divisão é a operação que mais gera dúvidas, pois ela tem regras
          visuais para armar a conta e se transforma quando lidamos com números
          decimais ou negativos. Abaixo, detalhamos todos os cenários possíveis
          de forma didática.
        </p>

        <div className='space-y-10'>
          <div className='grid lg:grid-cols-2 gap-6 items-start'>
            <div>
              <h3 className='font-black text-xl text-teal-800 mb-3 flex items-center gap-2'>
                <span className='text-2xl'>1️⃣</span> Divisão no Papel (A Chave)
              </h3>
              <p className='text-slate-600 text-sm leading-6 mb-4'>
                Para resolver contas maiores, armamos a conta usando o famoso{" "}
                <b>Método da Chave</b>. Vamos usar{" "}
                <MathRenderer expression={String.raw`85\div5`} /> como exemplo.
              </p>
              <div className='space-y-3 text-sm text-slate-700'>
                <div className='step' data-step='1'>
                  <b>Arme a conta:</b> Coloque o{" "}
                  <MathRenderer expression='85' /> (Dividendo) do lado esquerdo
                  e o <MathRenderer expression='5' /> (Divisor) "preso" dentro
                  da chave <MathRenderer expression={String.raw`\lfloor`} />.
                </div>
                <div className='step' data-step='2'>
                  <b>Pegue o primeiro dígito:</b> Olhe para o{" "}
                  <MathRenderer expression='8' />. Quantas vezes o{" "}
                  <MathRenderer expression='5' /> cabe no{" "}
                  <MathRenderer expression='8' />? Cabe{" "}
                  <MathRenderer expression='1' /> vez. Anote{" "}
                  <MathRenderer expression='1' /> no quociente (embaixo da
                  chave).
                </div>
                <div className='step' data-step='3'>
                  <b>Multiplique e subtraia:</b> O que você anotou, você
                  multiplica de volta:{" "}
                  <MathRenderer expression={String.raw`1\times5=5`} />. Subtraia
                  do número que você pegou:{" "}
                  <MathRenderer expression={String.raw`8-5=3`} />. Esse{" "}
                  <MathRenderer expression='3' /> é o seu resto parcial.
                </div>
                <div className='step' data-step='4'>
                  <b>Desça o próximo número:</b> Pegue o{" "}
                  <MathRenderer expression='5' /> que sobrou lá em cima e desça
                  ele ao lado do resto <MathRenderer expression='3' />. Você
                  formou o número <MathRenderer expression='35' />.
                </div>
                <div className='step' data-step='5'>
                  <b>Repita o ciclo:</b> Quantas vezes o{" "}
                  <MathRenderer expression='5' /> cabe em{" "}
                  <MathRenderer expression='35' />? Sabemos pela tabuada que{" "}
                  <MathRenderer expression={String.raw`7\times5=35`} />. Anote o{" "}
                  <MathRenderer expression='7' /> no quociente. O resto final é{" "}
                  <MathRenderer expression='0' />.
                </div>
              </div>
            </div>
            <LongDivisionDiagram />
          </div>

          <div className='bg-slate-50 border rounded-2xl p-6'>
            <h3 className='font-black text-xl text-teal-800 mb-3 flex items-center gap-2'>
              <span className='text-2xl'>2️⃣</span> Divisão de Números Grandes
              (Ex: <MathRenderer expression={String.raw`432\div12`} />)
            </h3>
            <p className='text-slate-600 text-sm leading-6 mb-4'>
              Quando o divisor (quem está na chave) tem dois ou mais dígitos, o
              processo é idêntico, mas você precisará "abraçar" mais números do
              dividendo no começo da conta.
            </p>
            <div className='space-y-3 text-sm text-slate-700'>
              <div className='step' data-step='1'>
                Tentamos o primeiro dígito: o <MathRenderer expression='12' />{" "}
                não cabe no <MathRenderer expression='4' />. Então juntamos os
                dois primeiros dígitos: <MathRenderer expression='43' />.
              </div>
              <div className='step' data-step='2'>
                Construa uma "mini tabuada" do 12 mentalmente:{" "}
                <MathRenderer expression={String.raw`12\times1=12`} />,{" "}
                <MathRenderer expression={String.raw`12\times2=24`} />,{" "}
                <MathRenderer expression={String.raw`12\times3=36`} />,{" "}
                <MathRenderer expression={String.raw`12\times4=48`} /> (passou
                de 43!). Então usamos o <MathRenderer expression='3' />.
              </div>
              <div className='step' data-step='3'>
                Anotamos o <MathRenderer expression='3' /> na resposta.
                Subtraímos <MathRenderer expression='36' /> de{" "}
                <MathRenderer expression='43' />. Sobram{" "}
                <MathRenderer expression='7' />.
              </div>
              <div className='step' data-step='4'>
                Descemos o próximo dígito, o <MathRenderer expression='2' />,
                juntando com o <MathRenderer expression='7' />. Formamos o
                número <MathRenderer expression='72' />.
              </div>
              <div className='step' data-step='5'>
                Voltamos à tabuada: Quantas vezes{" "}
                <MathRenderer expression='12' /> cabe em{" "}
                <MathRenderer expression='72' />? Exatamente{" "}
                <MathRenderer expression='6' /> vezes (
                <MathRenderer expression={String.raw`12\times6=72`} />
                ). O quociente ganha o número <MathRenderer expression='6' />. A
                conta acaba com resto zero. Resultado final: <b>36</b>.
              </div>
            </div>
          </div>

          <div>
            <h3 className='font-black text-xl text-teal-800 mb-3 flex items-center gap-2'>
              <span className='text-2xl'>3️⃣</span> Dividindo um Menor por um
              Maior (Ex: <MathRenderer expression={String.raw`2\div5`} />)
            </h3>
            <p className='text-slate-600 text-sm leading-6 mb-4'>
              O que acontece se você tem apenas 2 balas, mas quer dividir
              igualmente entre 5 crianças? Nenhuma criança vai ganhar uma bala
              inteira. A resposta será um pedaço de bala, ou seja, "zero vírgula
              alguma coisa".
            </p>
            <div className='tip rounded-xl p-5 text-sm space-y-2 border border-amber-200'>
              <p>
                <b>A Regra de Ouro:</b> Como o <MathRenderer expression='5' />{" "}
                não cabe no <MathRenderer expression='2' />, você anota
                imediatamente{" "}
                <b>
                  <MathRenderer expression='0,' /> (zero vírgula)
                </b>{" "}
                no quociente. Ao colocar essa vírgula, você ganha o "poder
                mágico" de adicionar um{" "}
                <b>
                  <MathRenderer expression='0' />
                </b>{" "}
                ao lado do <MathRenderer expression='2' />, transformando-o em{" "}
                <MathRenderer expression='20' />.
              </p>
              <ul className='list-disc pl-5 mt-3 space-y-2 text-amber-900'>
                <li>
                  <b>Conta original:</b>{" "}
                  <MathRenderer expression={String.raw`2\div5`} />
                </li>
                <li>
                  <b>A mágica acontece:</b> A conta vira{" "}
                  <MathRenderer expression={String.raw`20\div5`} /> (e você
                  anota <MathRenderer expression='0,' /> na área de resposta).
                </li>
                <li>
                  <b>Resolve normalmente:</b>{" "}
                  <MathRenderer expression={String.raw`20\div5=4`} />
                </li>
                <li>
                  <b>Resultado final:</b> Junta o "zero vírgula" com o 4,
                  obtendo <b>0,4</b>.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className='font-black text-xl text-teal-800 mb-3 flex items-center gap-2'>
              <span className='text-2xl'>4️⃣</span> Divisão de Números com
              Vírgula (Decimais)
            </h3>
            <p className='text-slate-600 text-sm leading-6 mb-4'>
              A vírgula costuma dar calafrios na hora de armar a chave, mas o
              truque matemático é maravilhoso e simples:{" "}
              <b>Livre-se da vírgula antes de começar a dividir!</b> Fazemos
              isso multiplicando os dois lados da conta por 10, 100 ou 1000.
            </p>
            <div className='grid md:grid-cols-2 gap-4'>
              <div className='bg-cyan-50 border border-cyan-200 rounded-xl p-5 text-sm'>
                <h4 className='font-black text-cyan-800 mb-2'>
                  Caso A: Vírgula no Divisor
                </h4>
                <p className='mb-3 text-cyan-900 bg-white inline-block px-2 py-1 rounded border border-cyan-100'>
                  Ex: <MathRenderer expression={String.raw`15\div0{,}5`} />
                </p>
                <p className='text-slate-600'>
                  O <MathRenderer expression='0{,}5' /> tem uma casa depois da
                  vírgula. Para ela desaparecer, multiplicamos ambos os números
                  por <MathRenderer expression='10' /> (que significa pular a
                  vírgula uma vez para a direita).
                </p>
                <ul className='list-disc pl-5 mt-2 text-slate-600'>
                  <li>
                    O <MathRenderer expression='15' /> ganha um zero e vira{" "}
                    <MathRenderer expression='150' />.
                  </li>
                  <li>
                    O <MathRenderer expression='0{,}5' /> pula a vírgula e vira{" "}
                    <MathRenderer expression='5' />.
                  </li>
                </ul>
                <p className='font-black mt-3 text-cyan-900 text-base border-t border-cyan-200 pt-2'>
                  Nova conta:{" "}
                  <MathRenderer expression={String.raw`150\div5=30`} />
                </p>
              </div>
              <div className='bg-cyan-50 border border-cyan-200 rounded-xl p-5 text-sm'>
                <h4 className='font-black text-cyan-800 mb-2'>
                  Caso B: Vírgula no Dividendo
                </h4>
                <p className='mb-3 text-cyan-900 bg-white inline-block px-2 py-1 rounded border border-cyan-100'>
                  Ex: <MathRenderer expression={String.raw`12{,}6\div3`} />
                </p>
                <p className='text-slate-600'>
                  A mesma lógica se aplica. Como o{" "}
                  <MathRenderer expression='12{,}6' /> tem uma casa decimal,
                  multiplique ambos os lados por{" "}
                  <MathRenderer expression='10' /> para nivelar as coisas.
                </p>
                <ul className='list-disc pl-5 mt-2 text-slate-600'>
                  <li>
                    O <MathRenderer expression='12{,}6' /> pula a vírgula e vira{" "}
                    <MathRenderer expression='126' />.
                  </li>
                  <li>
                    O <MathRenderer expression='3' /> ganha um zero e vira{" "}
                    <MathRenderer expression='30' />.
                  </li>
                </ul>
                <p className='font-black mt-3 text-cyan-900 text-base border-t border-cyan-200 pt-2'>
                  Nova conta:{" "}
                  <MathRenderer expression={String.raw`126\div30=4{,}2`} />
                </p>
              </div>
            </div>
            <p className='text-sm mt-3 text-slate-500 italic text-center'>
              Dica: Se houvesse dois números após a vírgula (como 0,25), você
              multiplicaria os dois lados por 100!
            </p>
          </div>

          <div className='border rounded-2xl p-6 sm:p-8 relative overflow-hidden bg-white'>
            <div className='absolute -top-10 -right-10 w-40 h-40 bg-teal-50 rounded-full -z-10 blur-2xl' />
            <h3 className='font-black text-xl text-teal-800 mb-3 flex items-center gap-2'>
              <span className='text-2xl'>5️⃣</span> Divisão com Negativos (Regra
              de Sinais)
            </h3>
            <p className='text-slate-600 text-sm leading-6 mb-5'>
              Você possui uma dívida de 20 reais e quer dividi-la com 4 amigos.
              Como fica essa conta? Trate os números de forma normal e deixe
              para pensar no sinal de MAIS <MathRenderer expression='+' /> ou
              MENOS <MathRenderer expression='-' /> apenas no resultado final. A
              regra é idêntica à da multiplicação:
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
              {[
                [
                  String.raw`\text{Positivo }\div\text{ Positivo}`,
                  "+",
                  "bg-emerald-50 text-emerald-900 border-emerald-200 text-emerald-600",
                ],
                [
                  String.raw`\text{Negativo }\div\text{ Positivo}`,
                  "-",
                  "bg-rose-50 text-rose-900 border-rose-200 text-rose-600",
                ],
                [
                  String.raw`\text{Positivo }\div\text{ Negativo}`,
                  "-",
                  "bg-rose-50 text-rose-900 border-rose-200 text-rose-600",
                ],
                [
                  String.raw`\text{Negativo }\div\text{ Negativo}`,
                  "+",
                  "bg-emerald-50 text-emerald-900 border-emerald-200 text-emerald-600",
                ],
              ].map(([expression, sign, colors]) => (
                <div
                  key={expression}
                  className={`${colors.split(" ").slice(0, 2).join(" ")} py-4 rounded-xl border ${colors.split(" ")[2]} shadow-sm transition-transform hover:-translate-y-1`}
                >
                  <div className='font-black text-lg'>
                    <MathRenderer expression={expression} />
                  </div>
                  <div
                    className={`text-xl font-black mt-2 ${colors.split(" ")[3]}`}
                  >
                    = {sign}
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-6 text-sm text-slate-700 bg-slate-50 border p-4 rounded-xl flex items-center gap-4'>
              <div className='text-3xl'>💡</div>
              <div>
                <b>Resumo prático:</b> Se os números tiverem{" "}
                <b>sinais IGUAIS</b>, o resultado é <b>(+)</b>. Se os números
                tiverem <b>sinais DIFERENTES</b>, o resultado é <b>(-)</b>.
                <br />
                <span className='text-teal-700 font-bold block mt-1'>
                  Exemplo: <MathRenderer expression={String.raw`-20\div4=-5`} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
