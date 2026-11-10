import CourseHeader from "../../../header/CourseHeader.component";
import { MathText } from "../../../Math/MathRenderer";

export function PowerTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='Curso completo'
        title='Domine os Expoentes'
        description='As propriedades das potências foram inventadas por preguiça! Os matemáticos queriam um atalho para não ter que escrever listas gigantescas de multiplicações. Aprenda as regras do jogo e nunca mais decore sem entender.'
        bgClass='bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-950 text-white shadow-xl'
        stats={[
          { value: "10", label: "passos lógicos" },
          { value: "🎱", label: "laboratório da urna" },
          { value: "✓", label: "resoluções em frações" },
          { value: "100", label: "exercícios" },
        ]}
      />

      <div className='tip rounded-2xl p-5 shadow-sm'>
        <b>{"A Regra de Ouro:"}</b>
        <MathText>
          {
            ' O expoente NUNCA multiplica a base! Se você vir $3^2$, seu cérebro deve ler "três vezes três" e não "três vezes dois". O expoente apenas dita o número de repetições. '
          }
        </MathText>
      </div>

      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-blue-100 text-blue-700 grid place-items-center font-black'>
              {"1"}
            </span>

            <h2 className='text-xl font-black'>{"A Anatomia da Potência"}</h2>
          </div>

          <p className='mt-4 text-slate-600 leading-7'>
            {"Uma potência é formada por dois atores: a "}
            <b>{"Base"}</b>
            {" (o tijolo, o número que será multiplicado) e o "}
            <b>{"Expoente"}</b>
            {
              " (o chefe, que diz quantas vezes o tijolo vai aparecer na multiplicação)."
            }
          </p>

          <div className='paper rounded-xl p-5 mt-4 text-center text-lg font-bold text-blue-900'>
            <MathText>
              {
                " \\[ \\textcolor{#2563eb}{2}^{\\textcolor{#dc2626}{4}} = \\textcolor{#2563eb}{2} \\times \\textcolor{#2563eb}{2} \\times \\textcolor{#2563eb}{2} \\times \\textcolor{#2563eb}{2} = 16 \\] "
              }
            </MathText>
          </div>

          <p className='mt-4 text-sm text-slate-600'>
            <MathText>
              {
                "Base $\\color{#2563eb}{2}$ repetida $\\color{#dc2626}{4}$ vezes em multiplicações sucessivas."
              }
            </MathText>
          </p>
        </article>

        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-blue-100 text-blue-700 grid place-items-center font-black'>
              {"2"}
            </span>

            <h2 className='text-xl font-black'>
              {"Casos Essenciais (Decoreba Útil)"}
            </h2>
          </div>

          <div className='grid grid-cols-2 gap-2 mt-4 text-sm font-bold text-center'>
            <div className='bg-slate-50 p-3 rounded border border-slate-200'>
              {" "}
              <b>{"Expoente 1"}</b>
              <br />
              {" Todo número elevado a 1 é ele mesmo."}
              <br />
              <MathText>{" $5^1 = 5$ "}</MathText>
            </div>

            <div className='bg-slate-50 p-3 rounded border border-slate-200'>
              {" "}
              <b>{"Expoente 0"}</b>
              <br />
              {" Todo número (diferente de zero) elevado a 0 é 1."}
              <br />
              <MathText>{" $8^0 = 1$ "}</MathText>
            </div>

            <div className='bg-slate-50 p-3 rounded border border-slate-200'>
              {" "}
              <b>{"Base 1"}</b>
              <br />
              {" O número 1 elevado a qualquer coisa é sempre 1."}
              <br />
              <MathText>{" $1^{100} = 1$ "}</MathText>
            </div>

            <div className='bg-slate-50 p-3 rounded border border-slate-200'>
              {" "}
              <b>{"Base 0"}</b>
              <br />
              {" O zero elevado a qualquer número positivo é 0."}
              <br />
              <MathText>{" $0^{5} = 0$ "}</MathText>
            </div>
          </div>
        </article>
      </div>

      <div className='bg-blue-900 text-white rounded-2xl border shadow-sm p-6 sm:p-10 mt-6'>
        <div className='flex items-center gap-3'>
          <span className='w-9 h-9 rounded-full bg-blue-800 text-blue-100 grid place-items-center font-black'>
            {"3"}
          </span>

          <h2 className='text-3xl font-black'>
            {"A Armadilha do Sinal (Parênteses importam!)"}
          </h2>
        </div>

        <p className='mt-4 text-blue-100 text-lg leading-relaxed'>
          <MathText>
            {
              "Este é o erro mais cometido do mundo na matemática escolar. Existe uma diferença brutal entre $(-2)^4$ e $-2^4$. Quem está elevado à quarta potência?"
            }
          </MathText>
        </p>

        <div className='grid md:grid-cols-2 gap-6 mt-6'>
          <div className='bg-white text-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden text-center'>
            <div className='text-sm text-slate-500 font-bold uppercase tracking-wide'>
              {"Com Parênteses"}
            </div>

            <p className='mt-3 text-sm'>
              {'O sinal de "menos" '}
              <b>{"faz parte da base"}</b>
              {". Ele se repete na multiplicação."}
            </p>

            <div className='mt-3 text-xl font-bold text-blue-700'>
              <MathText>{"\\[ (-2)^4 \\]"}</MathText>
            </div>

            <div className='mt-2 text-sm'>
              <MathText>
                {"$= (-2) \\times (-2) \\times (-2) \\times (-2)$"}
              </MathText>
            </div>

            <div className='mt-2 font-black text-emerald-600 text-2xl'>
              <MathText>{"$+ 16$"}</MathText>
            </div>
          </div>

          <div className='bg-white text-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden text-center'>
            <div className='text-sm text-slate-500 font-bold uppercase tracking-wide'>
              {"Sem Parênteses"}
            </div>

            <p className='mt-3 text-sm'>
              {'O "menos" '}
              <b>{"NÃO"}</b>
              {
                ' está elevado. É como se fosse um "-1" esperando do lado de fora!'
              }
            </p>

            <div className='mt-3 text-xl font-bold text-blue-700'>
              <MathText>{"\\[ -2^4 \\]"}</MathText>
            </div>

            <div className='mt-2 text-sm'>
              <MathText>{"$= -(2 \\times 2 \\times 2 \\times 2)$"}</MathText>
            </div>

            <div className='mt-2 font-black text-red-600 text-2xl'>
              <MathText>{"$- 16$"}</MathText>
            </div>
          </div>
        </div>

        <p className='mt-5 text-sm text-center font-bold text-blue-200'>
          {
            "* Dica: Base negativa com expoente PAR fica positiva. Com expoente ÍMPAR, continua negativa."
          }
        </p>
      </div>

      <div className='grid lg:grid-cols-2 gap-6 mt-6'>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-blue-100 text-blue-700 grid place-items-center font-black'>
              {"4"}
            </span>

            <h2 className='text-xl font-black'>
              {"Multiplicação e Divisão (Mesma Base)"}
            </h2>
          </div>

          <div className='space-y-4 mt-4 text-sm'>
            <div className='step' data-step='×'>
              <b>{"Na multiplicação:"}</b>
              {" Conserva a base e SOMA os expoentes."}
              <br />
              <MathText>
                {
                  " $2^3 \\times 2^4 = (2\\times2\\times2) \\times (2\\times2\\times2\\times2)$"
                }
              </MathText>
              <br />
              <MathText>
                {" Temos 7 repetições! Logo, $2^3 \\times 2^4 = 2^7$. "}
              </MathText>
            </div>

            <div className='step' data-step='÷'>
              <b>{"Na divisão:"}</b>
              {" Conserva a base e SUBTRAI os expoentes."}
              <br />
              <MathText>
                {
                  " $\\frac{5^6}{5^2} = 5^{6-2} = 5^4$. Os de cima cortam os de baixo! "
                }
              </MathText>
            </div>
          </div>
        </article>

        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-blue-100 text-blue-700 grid place-items-center font-black'>
              {"5"}
            </span>

            <h2 className='text-xl font-black'>{"Potência de Potência"}</h2>
          </div>

          <p className='mt-3 text-slate-600 text-sm'>
            <MathText>
              {
                "O que acontece quando uma potência inteira é elevada a outro expoente? Ex: $(2^3)^2$."
              }
            </MathText>
          </p>

          <div className='bg-slate-50 rounded-xl p-3 mt-3 text-sm border'>
            <MathText>
              {" Significa $(2^3) \\times (2^3) = 2^6$. A regra rápida é: "}
            </MathText>
            <b>{"Conserva a base e MULTIPLICA os expoentes!"}</b>
          </div>

          <div className='text-center font-bold mt-3 text-lg text-blue-800'>
            <MathText>{"\\[ (x^a)^b = x^{a \\cdot b} \\]"}</MathText>
          </div>
        </article>
      </div>

      <div className='grid lg:grid-cols-2 gap-6 mt-6'>
        <div className='space-y-6'>
          <article className='bg-white rounded-2xl border p-6 shadow-sm border-l-4 border-l-cyan-500'>
            <div className='flex items-center gap-3'>
              <span className='w-9 h-9 rounded-full bg-blue-100 text-blue-700 grid place-items-center font-black'>
                {"6"}
              </span>{" "}
              <h2 className='text-xl font-black'>
                {"O Expoente Negativo (Elevador)"}
              </h2>
            </div>

            <p className='mt-3 text-slate-600 text-sm'>
              {'O sinal de "menos" '}
              <b>{"no expoente"}</b>
              {
                " não tem poder de deixar o número negativo. Ele é apenas uma placa de trânsito dizendo: "
              }
              <b>{'"INVERTA A BASE!"'}</b>
              {"."}
            </p>

            <div className='paper rounded-xl p-4 mt-3 text-center text-cyan-900 font-bold text-lg'>
              <MathText>
                {
                  " \\[ x^{-n} = \\left(\\frac{1}{x}\\right)^n = \\frac{1}{x^n} \\] "
                }
              </MathText>
            </div>

            <div className='text-xs text-slate-500 mt-2'>
              <MathText>
                {
                  " Ex: $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$. Se a base for uma fração, basta girá-la: $(\\frac{2}{3})^{-2} = (\\frac{3}{2})^2 = \\frac{9}{4}$. "
                }
              </MathText>
            </div>
          </article>

          <article className='bg-white rounded-2xl border p-6 shadow-sm border-l-4 border-l-emerald-500'>
            <div className='flex items-center gap-3'>
              <span className='w-9 h-9 rounded-full bg-blue-100 text-blue-700 grid place-items-center font-black'>
                {"7"}
              </span>{" "}
              <h2 className='text-xl font-black'>{"O Expoente Fracionário"}</h2>
            </div>

            <div className='text-sm mt-3 text-slate-600'>
              {
                ' Toda raiz é, na verdade, uma potência disfarçada. Um expoente em forma de fração se converte em raiz seguindo a regra "Quem tá no sol vai pra sombra, quem tá na sombra vai pro sol". '
              }
              <div className='text-center font-bold mt-3 text-lg'>
                <MathText>
                  {
                    "\\[ x^{\\frac{\\text{sol}}{\\text{sombra}}} =   \\sqrt[\\text{sombra}]{x^{\\text{sol}}} \\]"
                  }
                </MathText>
              </div>
              <MathText>
                {" Ex: $9^{\\frac{1}{2}} = \\sqrt[2]{9^1} = 3$. "}
              </MathText>
            </div>
          </article>
        </div>

        <article className='bg-slate-900 text-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-slate-800 text-blue-400 grid place-items-center font-black'>
              {"8"}
            </span>

            <h2 className='text-2xl font-black text-blue-400'>
              {"Notação Científica"}
            </h2>
          </div>

          <p className='mt-3 text-slate-300 text-sm'>
            {
              "As potências de 10 servem para escrevermos o tamanho de galáxias ou vírus de forma curta. Tudo baseia-se em deslocar a vírgula."
            }
          </p>

          <div className='mt-5 space-y-4'>
            <div className='bg-slate-800 p-3 rounded-lg border border-slate-700 text-sm'>
              {" "}
              <b>{"Números Gigantes (Expoente Positivo):"}</b>
              <br />
              {
                " A vírgula anda para a ESQUERDA. O expoente diz quantas casas andou."
              }
              <br />
              <MathText>{" $150.000.000 = 1,5 \\times 10^8$ "}</MathText>
            </div>

            <div className='bg-slate-800 p-3 rounded-lg border border-slate-700 text-sm'>
              {" "}
              <b>{"Números Minúsculos (Expoente Negativo):"}</b>
              <br />
              {
                " A vírgula anda para a DIREITA. O expoente diz as casas, com sinal negativo."
              }
              <br />
              <MathText>{" $0,0000042 = 4,2 \\times 10^{-6}$ "}</MathText>
            </div>
          </div>

          <p className='text-xs text-slate-400 mt-4'>
            <b>{"Regra:"}</b>
            <MathText>
              {
                " O número principal (antes do $\\times 10$) deve estar sempre entre 1 e 9,99."
              }
            </MathText>
          </p>
        </article>
      </div>
    </div>
  );
}

export function PowerExamples() {
  return (
    <div className='space-y-7'>
      <div className='bg-white rounded-3xl border p-7 shadow-sm'>
        <span className='text-xs font-bold uppercase tracking-widest text-indigo-600'>
          {"Exemplos resolvidos"}
        </span>

        <h1 className='text-3xl font-black mt-2'>
          {"Veja o raciocínio completo, passo a passo"}
        </h1>

        <p className='text-slate-600 mt-2'>
          {
            "Antes de tentar os exercícios, acompanhe estes modelos com atenção."
          }
        </p>
      </div>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          {"Exemplo 1 — Potenciação básica"}
        </h2>

        <p className='mt-2 text-slate-600'>
          <MathText>{"Calcule \\(3^4\\)."}</MathText>
        </p>

        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            <MathText>{"Expanda: \\(3\\times3\\times3\\times3\\)."}</MathText>
          </div>

          <div className='step' data-step='2'>
            <MathText>
              {
                "Multiplique aos poucos: \\(3\\times3=9\\); \\(9\\times3=27\\); \\(27\\times3=81\\).\r "
              }
            </MathText>
          </div>

          <div className='step' data-step='3'>
            <b>{"Resposta:"}</b>
            {" 81."}
          </div>
        </div>
      </article>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          {"Exemplo 2 — Produto de potências de mesma base"}
        </h2>

        <p className='mt-2 text-slate-600'>
          <MathText>{"Simplifique \\(2^3 \\times 2^5\\)."}</MathText>
        </p>

        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            <MathText>
              {"Mesma base (2), então some os expoentes: \\(3+5=8\\)."}
            </MathText>
          </div>

          <div className='step' data-step='2'>
            <MathText>{"Resultado: \\(2^8\\)."}</MathText>
          </div>

          <div className='step' data-step='3'>
            <b>{"Resposta:"}</b>
            <MathText>{" \\(2^8 = 256\\)."}</MathText>
          </div>
        </div>
      </article>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          {"Exemplo 3 — Expoente negativo"}
        </h2>

        <p className='mt-2 text-slate-600'>
          <MathText>{"Calcule \\(2^{-3}\\)."}</MathText>
        </p>

        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            <MathText>
              {
                "Expoente negativo inverte a base: \\(2^{-3} = \\frac{1}{2^3}\\)."
              }
            </MathText>
          </div>

          <div className='step' data-step='2'>
            <MathText>{"Calcule \\(2^3=8\\)."}</MathText>
          </div>

          <div className='step' data-step='3'>
            <b>{"Resposta:"}</b>
            <MathText>{" \\(\\frac{1}{8}\\)."}</MathText>
          </div>
        </div>
      </article>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          {"Exemplo 4 — Potência de potência"}
        </h2>

        <p className='mt-2 text-slate-600'>
          <MathText>{"Simplifique \\((3^2)^3\\)."}</MathText>
        </p>

        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            <MathText>
              {"Multiplique os expoentes: \\(2\\times3=6\\)."}
            </MathText>
          </div>

          <div className='step' data-step='2'>
            <MathText>{"Resultado: \\(3^6\\)."}</MathText>
          </div>

          <div className='step' data-step='3'>
            <b>{"Resposta:"}</b>
            <MathText>{" \\(3^6 = 729\\)."}</MathText>
          </div>
        </div>
      </article>
    </div>
  );
}
