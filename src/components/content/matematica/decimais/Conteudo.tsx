import { MathText } from "../../../Math/MathRenderer";
import {
  DecimalIntroVisual,
  RatioIntroVisual,
} from "../../../Math/IntroVisuals";
import CourseHeader from "../../../header/CourseHeader.component";

export function DecimalTheory() {
  return (
    <>
      <div className='flex flex-col gap-6'>
        <CourseHeader
          eyebrow='CURSO DO ZERO'
          title='Números Decimais sem mistério'
          description='Você vai entender o que cada casa depois da vírgula significa e vai aprender um jeito seguro de somar, subtrair, multiplicar, dividir e comparar decimais — sem decorar truques soltos.'
          bgClass='bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900'
          stats={[
            { value: "8", label: "tópicos de teoria" },
            { value: "🔬", label: "laboratório visual" },
            { value: "✓", label: "resolução detalhada" },
            { value: "30", label: "exercícios" },
          ]}
        />

        <div className='tip rounded-2xl p-5 shadow-sm'>
          <b>{"Como estudar:"}</b>
          {
            " leia a ideia, observe o desenho, veja o exemplo\r\n        resolvido na aba "
          }
          <b>{"Exemplos"}</b>
          {
            " e só depois tente os exercícios. Errar faz parte do aprendizado — volte ao\r\n        passo a passo sempre que precisar, sem pressa."
          }
        </div>

        <div className='grid lg:grid-cols-2 gap-6'>
          <article className='bg-white rounded-2xl border p-6 shadow-sm'>
            <div className='flex items-center gap-3'>
              <span className='w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-black'>
                {"1"}
              </span>

              <h2 className='text-xl font-black'>
                {"O que é um número decimal?"}
              </h2>
            </div>

            <p className='mt-4 text-slate-600 leading-7'>
              {
                "Um número decimal é um jeito de escrever uma quantidade que não é\r\n            inteira, usando uma "
              }
              <b>{"vírgula"}</b>
              <MathText>
                {
                  ' para separar a parte inteira da parte "quebrada". Em \\(3{,}45\\): o\r\n            '
                }
              </MathText>
              <b>{"3"}</b>
              {" é a parte inteira e o "}
              <b>{"45"}</b>
              {", depois da vírgula, é a parte decimal.\r\n          "}
            </p>

            <div className='my-5 flex justify-center'>
              <DecimalIntroVisual />
            </div>

            <div className='grid sm:grid-cols-2 gap-3 text-sm'>
              <div className='bg-indigo-50 rounded-xl p-4'>
                <b>{"Parte inteira"}</b>
                <br />
                {"o que vem antes da vírgula."}
              </div>

              <div className='bg-amber-50 rounded-xl p-4'>
                <b>{"Parte decimal"}</b>
                <br />
                {
                  "o que vem depois da vírgula — sempre menorque um inteiro inteiro completo."
                }
              </div>
            </div>
          </article>

          <article className='bg-white rounded-2xl border p-6 shadow-sm'>
            <div className='flex items-center gap-3'>
              <span className='w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-black'>
                {"2"}
              </span>

              <h2 className='text-xl font-black'>{"Valor posicional"}</h2>
            </div>

            <p className='mt-4 text-slate-600 leading-7'>
              {"Cada casa depois da vírgula vale "}
              <b>{"10 vezes menos"}</b>
              {
                ' que a\r\n            anterior. É a mesma ideia das unidades, dezenas e centenas — só que "de trás para frente".'
              }
            </p>

            <div className='paper rounded-xl p-5 mt-4 overflow-x-auto'>
              <table className='w-full text-center text-sm'>
                <thead>
                  <tr className='text-indigo-700 font-bold'>
                    <td>{"Centena"}</td>

                    <td>{"Dezena"}</td>

                    <td>{"Unidade"}</td>

                    <td>{","}</td>

                    <td>{"Décimos"}</td>

                    <td>{"Centésimos"}</td>

                    <td>{"Milésimos"}</td>
                  </tr>
                </thead>

                <tbody>
                  <tr className='font-mono text-lg'>
                    <td>{"-"}</td>

                    <td>{"-"}</td>

                    <td>{"2"}</td>

                    <td>{","}</td>

                    <td>{"3"}</td>

                    <td>{"5"}</td>

                    <td>{"7"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='success rounded-xl p-4 mt-4 text-sm'>
              <MathText>
                {
                  "Em \\(2{,}357\\): 3 décimos (\\(\\frac{3}{10}\\)), 5 centésimos\r\n            (\\(\\frac{5}{100}\\)) e 7 milésimos (\\(\\frac{7}{1000}\\))."
                }
              </MathText>
            </div>
          </article>
        </div>

        <div className='grid lg:grid-cols-2 gap-6'>
          <article className='bg-white rounded-2xl border p-6 shadow-sm'>
            <h2 className='text-xl font-black'>{"3. Comparando decimais"}</h2>

            <p className='mt-3 text-slate-600 leading-7'>
              <MathText>
                {
                  'A armadilha mais comum é achar que \\(0{,}7\\) é menor que \\(0{,}65\\)\r\n            só porque "7 é menor que 65". Para comparar direito, '
                }
              </MathText>
              <b>{"iguale o número de casas decimais"}</b>
              {
                " completando\r\n            com zeros à direita — isso não muda o valor."
              }
            </p>

            <div className='space-y-3 mt-4'>
              <div className='step' data-step='1'>
                <MathText>
                  {
                    "Iguale as casas: \\(0{,}7 \\to 0{,}70\\) e \\(0{,}65\\) já tem duas casas."
                  }
                </MathText>
              </div>

              <div className='step' data-step='2'>
                <MathText>
                  {"Agora compare como se fossem inteiros: \\(70 > 65\\)."}
                </MathText>
              </div>

              <div className='step' data-step='3'>
                <MathText>
                  {
                    "Logo, \\(0{,}70 > 0{,}65\\), ou seja, \\(0{,}7 > 0{,}65\\)."
                  }
                </MathText>
              </div>
            </div>
          </article>

          <article className='bg-white rounded-2xl border p-6 shadow-sm'>
            <h2 className='text-xl font-black'>{"4. Adição e subtração"}</h2>

            <p className='mt-3 text-slate-600 leading-7'>
              {"A regra de ouro: "}
              <b>{"alinhe a vírgula embaixo da vírgula"}</b>
              {
                '. Complete\r\n            as casas que faltam com zero para os números ficarem do mesmo "tamanho".'
              }
            </p>

            <div className='paper rounded-xl p-5 mt-4 text-center font-mono text-lg leading-8'>
              {"\r\n              3,40"}
              <br />
              {"+1,25"}
              <br />

              <hr className='my-1' />
              {"  4,65\r\n          "}
            </div>

            <div className='tip rounded-xl p-4 mt-4 text-sm'>
              <b>{"Dica:"}</b>
              <MathText>
                {
                  " \\(3{,}4\\) é igual a \\(3{,}40\\) — acrescentar zero no\r\n            final de um decimal não muda seu valor."
                }
              </MathText>
            </div>
          </article>
        </div>

        <div className='bg-white rounded-2xl border shadow-sm p-6'>
          <h2 className='text-2xl font-black'>
            {"5. Multiplicação de decimais"}
          </h2>

          <div className='grid lg:grid-cols-2 gap-6 mt-5'>
            <div>
              <h3 className='font-bold text-indigo-800'>{"A ideia"}</h3>

              <p className='text-sm text-slate-600 mt-2 leading-7'>
                {"Multiplique "}
                <b>{"ignorando as vírgulas"}</b>
                {
                  ", como se fossemnúmeros inteiros. No final, conte quantas casas decimais os dois números tinham "
                }
                <b>{"juntos"}</b>
                {
                  " e coloque avírgula nessa posição, contando da direita para a esquerda."
                }
              </p>
            </div>

            <div>
              <h3 className='font-bold text-indigo-800'>{"Passo a passo"}</h3>

              <ol className='mt-3 space-y-2 text-sm list-decimal list-inside text-slate-700'>
                <li>
                  {"Multiplique os números "}
                  <b>{"sem a vírgula"}</b>
                  {"."}
                </li>

                <li>{"Conte as casas decimais de cada fator."}</li>

                <li>
                  <b>{"Some"}</b>
                  {" essas quantidades de casas."}
                </li>

                <li>
                  {"No resultado, ande esse número de casas "}
                  <b>{"da direita para a esquerda"}</b>
                  {" e coloque a vírgula."}
                </li>
              </ol>
            </div>
          </div>

          <div className='paper rounded-2xl p-5 mt-6'>
            <div className='text-sm font-bold text-indigo-700 mb-3'>
              {"EXEMPLO GUIADO"}
            </div>

            <div className='grid md:grid-cols-2 gap-4 text-sm'>
              <div className='step' data-step='1'>
                <b>{"Multiplique sem vírgula:"}</b>
                <MathText>{" \\(12 \\times 3 = 36\\)."}</MathText>
              </div>

              <div className='step' data-step='2'>
                <b>{"Conte as casas:"}</b>
                <MathText>
                  {
                    " \\(1{,}2\\) tem 1 casa; \\(0{,}3\\) tem 1 casa. Total: 2casas."
                  }
                </MathText>
              </div>

              <div className='step' data-step='3'>
                <b>{"Posicione a vírgula:"}</b>
                {" ande 2 casas em 36 a partir da direita."}
              </div>

              <div className='step' data-step='4'>
                <b>{"Resultado:"}</b>
                <MathText>{" \\(1{,}2 \\times 0{,}3 = 0{,}36\\)."}</MathText>
              </div>
            </div>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-6'>
          <article className='bg-white rounded-2xl border p-6 shadow-sm'>
            <h2 className='text-xl font-black'>{"6. Divisão de decimais"}</h2>

            <p className='mt-3 text-slate-600 leading-7'>
              "O truque é transformar a divisão de decimais em uma divisão de
              <strong>"números inteiros"</strong>: multiplique o dividendo e o
              divisor pela mesma potência de 10, até o divisor virar inteiro."
            </p>

            <div className='space-y-3 mt-4 text-sm'>
              <div className='step' data-step='1'>
                <MathText>
                  {"Escreva a divisão: \\(4{,}8 \\div 0{,}4\\)."}
                </MathText>
              </div>

              <div className='step' data-step='2'>
                <MathText>
                  {
                    "Multiplique os dois por 10 para eliminar a vírgula do divisor: \\(48 \\div4\\)."
                  }
                </MathText>
              </div>

              <div className='step' data-step='3'>
                <MathText>
                  {"Divida normalmente: \\(48 \\div 4 = 12\\)."}
                </MathText>
              </div>
            </div>

            <div className='warning rounded-xl p-4 mt-4 text-sm'>
              <b>{"Atenção:"}</b>
              {
                " o que você faz no dividendo, tem que fazer no\r\n            divisor também — multiplicar os dois pelo mesmo número mantém o resultado da divisão igual."
              }
            </div>
          </article>

          <article className='bg-white rounded-2xl border p-6 shadow-sm'>
            <h2 className='text-xl font-black'>{"7. Fração ↔ Decimal"}</h2>

            <p className='mt-3 text-slate-600 leading-7'>
              {"Toda fração pode virar decimal: basta "}
              <b>{"dividir o numerador pelodenominador"}</b>
              {
                ". E todo decimal exato pode virar fração usando o valor posicional."
              }
            </p>

            <div className='bg-indigo-50 rounded-xl p-4 mt-4 text-sm'>
              <b>{"Fração → decimal:"}</b>
              <MathText>
                {" \\(\\frac{3}{4} = 3 \\div 4 =\r\n            0{,}75\\)."}
              </MathText>
            </div>

            <div className='bg-amber-50 rounded-xl p-4 mt-3 text-sm'>
              <b>{"Decimal → fração:"}</b>
              <MathText>
                {
                  " \\(0{,}75 = \\frac{75}{100} =\r\n            \\frac{3}{4}\\) (simplificando)."
                }
              </MathText>
            </div>

            <div className='warning rounded-xl p-4 mt-3 text-sm'>
              <b>{"Dízima periódica:"}</b>
              <MathText>
                {
                  " \\(\\frac{1}{3} = 1 \\div 3 =\r\n            0{,}333\\ldots\\) — os algarismos se repetem para sempre. É chamada de dízima periódica."
                }
              </MathText>
            </div>
          </article>
        </div>

        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <h2 className='text-xl font-black'>{"8. Arredondamento"}</h2>

          <p className='mt-3 text-slate-600 leading-7'>
            {"Para arredondar, olhe o algarismo "}
            <b>{"logo depois"}</b>
            {
              " da casa que você\r\n          quer manter: se for 5, 6, 7, 8 ou 9, o algarismo anterior "
            }
            <b>{"sobe uma unidade"}</b>
            {"; se for 0, 1, 2, 3 ou 4, ele\r\n          "}
            <b>{"permanece igual"}</b>
            {". Todos os algarismos depois são descartados.\r\n        "}
          </p>

          <div className='grid sm:grid-cols-2 gap-3 mt-4 text-sm'>
            <div className='bg-slate-50 rounded-xl p-4'>
              <b>
                <MathText>
                  {"Arredondar \\(2{,}378\\) para centésimos:"}
                </MathText>
              </b>
              <MathText>
                {
                  " o algarismo seguinte é\r\n            8 (≥5) → \\(2{,}38\\)."
                }
              </MathText>
            </div>

            <div className='bg-slate-50 rounded-xl p-4'>
              <b>
                <MathText>{"Arredondar \\(5{,}132\\) para décimos:"}</MathText>
              </b>
              <MathText>
                {
                  " o algarismo seguinte é 3 (\r\n            <5) → \\(5{,}1\\)."
                }
              </MathText>
            </div>
          </div>
        </article>

        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <h2 className='text-xl font-black'>
            {"Checklist para qualquer questão"}
          </h2>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 text-sm'>
            <div className='bg-slate-50 rounded-xl p-4'>
              <b>{"① Identifique"}</b>
              <br />
              {
                "Qual operação é: somar, comparar, multiplicar,\r\n            dividir?"
              }
            </div>

            <div className='bg-slate-50 rounded-xl p-4'>
              <b>{"② Alinhe"}</b>
              <br />
              {
                "Em soma/subtração, alinhe a vírgula. Complete zeros\r\n            se precisar."
              }
            </div>

            <div className='bg-slate-50 rounded-xl p-4'>
              <b>{"③ Calcule"}</b>
              <br />
              {"Siga o passo a passo da operação, com calma."}
            </div>

            <div className='bg-slate-50 rounded-xl p-4'>
              <b>{"④ Confira"}</b>
              <br />
              {
                "O resultado faz sentido? A vírgula está no lugar\r\n            certo?"
              }
            </div>
          </div>
        </article>
        {"\r\n    "}
      </div>
    </>
  );
}

export function DecimalExamples() {
  return (
    <>
      <div className='grid lg:grid-cols-2 gap-6'>
        <div className='bg-white rounded-3xl border p-7 shadow-sm '>
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
            {"Exemplo 1 — Comparar dois decimais"}
          </h2>

          <p className='mt-2 text-slate-600'>
            <MathText>{"Qual é maior: \\(0{,}45\\) ou \\(0{,}4\\)?"}</MathText>
          </p>

          <div className='space-y-3 mt-4 text-sm'>
            <div className='step' data-step='1'>
              <MathText>
                {"Iguale as casas decimais: \\(0{,}4 \\to 0{,}40\\)."}
              </MathText>
            </div>

            <div className='step' data-step='2'>
              <MathText>{"Compare como inteiros: \\(45 > 40\\)."}</MathText>
            </div>

            <div className='step' data-step='3'>
              <b>{"Resposta:"}</b>
              <MathText>{" \\(0{,}45 > 0{,}4\\)."}</MathText>
            </div>
          </div>
        </article>

        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <h2 className='text-xl font-black text-indigo-800'>
            {"Exemplo 2 — Adição com casas diferentes"}
          </h2>

          <p className='mt-2 text-slate-600'>
            <MathText>{"Calcule \\(7{,}2 + 1{,}35\\)."}</MathText>
          </p>

          <div className='space-y-3 mt-4 text-sm'>
            <div className='step' data-step='1'>
              <MathText>
                {"Complete com zero: \\(7{,}2 \\to 7{,}20\\)."}
              </MathText>
            </div>

            <div className='step' data-step='2'>
              <MathText>
                {"Alinhe as vírgulas e some: \\(7{,}20 + 1{,}35\\)."}
              </MathText>
            </div>

            <div className='step' data-step='3'>
              <MathText>
                {
                  "Some casa por casa, da direita: \\(0+5=5\\); \\(2+3=5\\); \\(7+1=8\\)."
                }
              </MathText>
            </div>

            <div className='step' data-step='4'>
              <b>{"Resposta:"}</b>
              <MathText>{" \\(8{,}55\\)."}</MathText>
            </div>
          </div>
        </article>

        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <h2 className='text-xl font-black text-indigo-800'>
            {'Exemplo 3 — Subtração "emprestando"'}
          </h2>

          <p className='mt-2 text-slate-600'>
            <MathText>{"Calcule \\(5 - 2{,}35\\)."}</MathText>
          </p>

          <div className='space-y-3 mt-4 text-sm'>
            <div className='step' data-step='1'>
              <MathText>{"Escreva 5 como decimal: \\(5{,}00\\)."}</MathText>
            </div>

            <div className='step' data-step='2'>
              <MathText>
                {"Alinhe as vírgulas: \\(5{,}00 - 2{,}35\\)."}
              </MathText>
            </div>

            <div className='step' data-step='3'>
              {
                "Subtraia normalmente, emprestando quando precisar, como em números inteiros.\r\n          "
              }
            </div>

            <div className='step' data-step='4'>
              <b>{"Resposta:"}</b>
              <MathText>{" \\(2{,}65\\)."}</MathText>
            </div>
          </div>
        </article>

        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <h2 className='text-xl font-black text-indigo-800'>
            {"Exemplo 4 — Multiplicação"}
          </h2>

          <p className='mt-2 text-slate-600'>
            <MathText>{"Calcule \\(2{,}5 \\times 1{,}4\\)."}</MathText>
          </p>

          <div className='space-y-3 mt-4 text-sm'>
            <div className='step' data-step='1'>
              <MathText>
                {"Multiplique sem vírgula: \\(25 \\times 14 = 350\\)."}
              </MathText>
            </div>

            <div className='step' data-step='2'>
              {"Conte as casas: 1 casa + 1 casa = 2 casas."}
            </div>

            <div className='step' data-step='3'>
              <MathText>
                {
                  "Posicione a vírgula andando 2 casas da direita em 350: \\(3{,}50\\)."
                }
              </MathText>
            </div>

            <div className='step' data-step='4'>
              <b>{"Resposta:"}</b>
              <MathText>{" \\(3{,}5\\)."}</MathText>
            </div>
          </div>
        </article>

        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <h2 className='text-xl font-black text-indigo-800'>
            {"Exemplo 5 — Divisão"}
          </h2>

          <p className='mt-2 text-slate-600'>
            <MathText>{"Calcule \\(7{,}5 \\div 0{,}25\\)."}</MathText>
          </p>

          <div className='space-y-3 mt-4 text-sm'>
            <div className='step' data-step='1'>
              <MathText>
                {
                  "O divisor \\(0{,}25\\) tem 2 casas decimais, então multiplique os dois por 100.\r\n          "
                }
              </MathText>
            </div>

            <div className='step' data-step='2'>
              <MathText>{"Fica \\(750 \\div 25\\)."}</MathText>
            </div>

            <div className='step' data-step='3'>
              <MathText>{"Divida: \\(750 \\div 25 = 30\\)."}</MathText>
            </div>

            <div className='step' data-step='4'>
              <b>{"Resposta:"}</b>
              <MathText>{" \\(30\\)."}</MathText>
            </div>
          </div>
        </article>

        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <h2 className='text-xl font-black text-indigo-800'>
            {"Exemplo 6 — Fração para decimal e arredondamento"}
          </h2>

          <p className='mt-2 text-slate-600'>
            <MathText>
              {
                "Escreva \\(\\frac{2}{3}\\) como decimal, arredondado para centésimos."
              }
            </MathText>
          </p>

          <div className='space-y-3 mt-4 text-sm'>
            <div className='step' data-step='1'>
              <MathText>
                {"Divida: \\(2 \\div 3 = 0{,}666\\ldots\\) (dízima periódica)."}
              </MathText>
            </div>

            <div className='step' data-step='2'>
              {"Para arredondar em centésimos, olhe a terceira casa: é 6 (≥5)."}
            </div>

            <div className='step' data-step='3'>
              {"A segunda casa (6) sobe para 7."}
            </div>

            <div className='step' data-step='4'>
              <b>{"Resposta:"}</b>
              <MathText>{" \\(0{,}67\\)."}</MathText>
            </div>
          </div>
        </article>
        {"\r\n    "}
      </div>
    </>
  );
}
