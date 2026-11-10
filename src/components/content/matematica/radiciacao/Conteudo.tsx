import CourseHeader from "../../../header/CourseHeader.component";
import { MathText } from "../../../Math/MathRenderer";

export function RootTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='Curso Completo'
        title='Desvendando as Raízes'
        description='A Radiciação é o caminho de volta. Se a potenciação constrói o prédio multiplicando os tijolos, a radiciação pergunta: "<i>Se este prédio tem 27 andares e é um cubo perfeito, qual o tamanho de cada lado?"</i> Aprenda as propriedades e veja que a raiz é apenas um expoente disfarçado.'
        bgClass='bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-950 text-white shadow-xl'
        stats={[
          { value: "8", label: "regras lógicas" },
          { value: "📍", label: "reta numérica" },
          { value: "✓", label: "fatoração guiada" },
          { value: "100", label: "exercícios" },
        ]}
      />

      <div className='tip rounded-2xl p-5 shadow-sm'>
        <b>{"A Regra de Ouro:"}</b>
        {" A raiz é a operação "}
        <b>{"inversa"}</b>
        <MathText>
          {
            " da potência. Para achar a $\\sqrt{25}$, seu cérebro\n        deve perguntar: "
          }
        </MathText>
        <i>{'"Qual número que, elevado ao quadrado, resulta em 25?"'}</i>
        {".\n      "}
      </div>
      {"\n\n      "}
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-black'>
              {"1"}
            </span>

            <h2 className='text-xl font-black'>{"A Anatomia do Radical"}</h2>
          </div>

          <p className='mt-4 text-slate-600 leading-7'>
            {
              'Para dominar as raízes, primeiro precisamos saber o nome de cada\n            parte dessa "casinha" matemática.'
            }
          </p>

          <div className='paper rounded-xl p-5 mt-4 text-center text-lg font-bold text-indigo-900'>
            <MathText>
              {
                "\n            \\[ \\sqrt[\\textcolor{#dc2626}{n}]{\\textcolor{#2563eb}{x}} = \\textcolor{#059669}{y} \\]\n          "
              }
            </MathText>
          </div>

          <div className='grid grid-cols-2 gap-3 mt-4 text-sm text-slate-700'>
            <div className='bg-slate-50 p-3 rounded-lg border'>
              <b>
                <MathText>{"Índice ($\\color{#dc2626}{n}$):"}</MathText>
              </b>
              {
                " O número lá em cima. Ele diz quantas vezes a resposta deve ser multiplicada por si mesma."
              }
            </div>

            <div className='bg-slate-50 p-3 rounded-lg border'>
              <b>
                <MathText>{"Radicando ($\\color{#2563eb}{x}$):"}</MathText>
              </b>
              {
                " O número debaixo do telhado. É o resultado final que queremos atingir."
              }
            </div>

            <div className='bg-slate-50 p-3 rounded-lg border col-span-2 text-center'>
              <b>{"Aviso:"}</b>
              <MathText>
                {
                  " Quando não tem nenhum índice escrito (ex: $\\sqrt{16}$), assumimos que o índice é o "
                }
              </MathText>
              <b>{"2"}</b>
              {" (Raiz Quadrada)."}
            </div>
          </div>
        </article>

        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-black'>
              {"2"}
            </span>

            <h2 className='text-xl font-black'>
              {"Casos Essenciais (Mentalmente)"}
            </h2>
          </div>

          <div className='grid grid-cols-2 gap-2 mt-4 text-sm font-bold text-center'>
            <div className='bg-slate-50 p-3 rounded border border-slate-200'>
              <b>{"Raiz Quadrada"}</b>
              <br />
              {"Índice 2 (oculto)."}
              <br />
              <MathText>{" $\\sqrt{49} = 7$"}</MathText>
              <br />

              <span className='text-xs text-slate-500 font-normal'>
                <MathText>{"Pois $7 \\times 7 = 49$"}</MathText>
              </span>
            </div>

            <div className='bg-slate-50 p-3 rounded border border-slate-200'>
              <b>{"Raiz Cúbica"}</b>
              <br />
              {"Índice 3."}
              <br />
              <MathText>{" $\\sqrt[3]{8} = 2$"}</MathText>
              <br />

              <span className='text-xs text-slate-500 font-normal'>
                <MathText>{"Pois $2 \\times 2 \\times 2 = 8$"}</MathText>
              </span>
            </div>

            <div className='bg-slate-50 p-3 rounded border border-slate-200'>
              <b>{"Raiz de 1"}</b>
              <br />
              {"Sempre será 1."}
              <br />
              <MathText>{" $\\sqrt[10]{1} = 1$"}</MathText>
              <br />

              <span className='text-xs text-slate-500 font-normal'>
                <MathText>{"Pois $1^{10} = 1$"}</MathText>
              </span>
            </div>

            <div className='bg-slate-50 p-3 rounded border border-slate-200'>
              <b>{"Raiz de 0"}</b>
              <br />
              {"Sempre será 0."}
              <br />
              <MathText>{" $\\sqrt[5]{0} = 0$"}</MathText>
              <br />

              <span className='text-xs text-slate-500 font-normal'>
                <MathText>{"Pois $0^5 = 0$"}</MathText>
              </span>
            </div>
          </div>
        </article>
      </div>
      {"\n\n      "}
      <div className='bg-indigo-900 text-white rounded-2xl border shadow-sm p-6 sm:p-10 mt-6'>
        <div className='flex items-center gap-3'>
          <span className='w-9 h-9 rounded-full bg-indigo-800 text-indigo-100 grid place-items-center font-black'>
            {"3"}
          </span>

          <h2 className='text-3xl font-black'>{"A Armadilha do Sinal"}</h2>
        </div>

        <p className='mt-4 text-indigo-100 text-lg leading-relaxed'>
          {
            "Existe raiz de número negativo? Depende do porteiro da\n          casa (o índice)! Isso confunde 9 em cada 10 alunos."
          }
        </p>

        <div className='grid md:grid-cols-2 gap-6 mt-6'>
          <div className='bg-white text-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden text-center border-t-4 border-red-500'>
            <div className='text-sm text-slate-500 font-bold uppercase tracking-wide'>
              {"Índice PAR (ex: 2, 4, 6)"}
            </div>

            <p className='mt-3 text-sm'>
              {
                "Todo número real elevado a um expoente PAR fica positivo. Logo, "
              }
              <b>{"NÃO EXISTE"}</b>
              {" raiz real de radicando negativo!"}
            </p>

            <div className='mt-3 text-xl font-bold text-red-600'>
              <MathText>
                {"\\[ \\sqrt{-16} = \\text{Não existe em } \\mathbb{R} \\]"}
              </MathText>
            </div>

            <div className='mt-2 text-xs text-slate-500'>
              <MathText>
                {
                  "Pois nem $4^2$ e nem $(-4)^2$ dão $-16$. Ambos dão $+16$. (A resposta reside nos Números Complexos)."
                }
              </MathText>
            </div>
          </div>

          <div className='bg-white text-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden text-center border-t-4 border-emerald-500'>
            <div className='text-sm text-slate-500 font-bold uppercase tracking-wide'>
              {"Índice ÍMPAR (ex: 3, 5, 7)"}
            </div>

            <p className='mt-3 text-sm'>
              {
                "O sinal se mantém! Números negativos elevados a expoentes ímpares "
              }
              <b>{"continuam   negativos"}</b>
              {". Portanto, existe!"}
            </p>

            <div className='mt-3 text-xl font-bold text-emerald-600'>
              <MathText>{"\\[ \\sqrt[3]{-8} = -2 \\]"}</MathText>
            </div>

            <div className='mt-2 text-xs text-slate-500'>
              <MathText>
                {"Faz sentido, pois $(-2) \\times (-2) \\times (-2) = -8$."}
              </MathText>
            </div>
          </div>
        </div>
      </div>
      {"\n\n      "}
      <div className='grid lg:grid-cols-2 gap-6 mt-6'>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-black'>
              {"4"}
            </span>

            <h2 className='text-xl font-black'>{"Propriedades Operatórias"}</h2>
          </div>

          <div className='space-y-4 mt-4 text-sm text-slate-600'>
            <div className='step' data-step='×'>
              <b>{"Raiz de um Produto:"}</b>
              {
                " A raiz da multiplicação é a multiplicação das raízes (se tiverem o mesmo índice)."
              }
              <br />
              <MathText>
                {
                  " $\\sqrt{4 \\times 9} = \\sqrt{4} \\times \\sqrt{9} = 2 \\times 3 = 6$"
                }
              </MathText>
              <br />
              <MathText>
                {
                  " Isso também serve para juntar: $\\sqrt{2} \\times \\sqrt{8} = \\sqrt{16} = 4$.\n            "
                }
              </MathText>
            </div>

            <div className='step' data-step='÷'>
              <b>{"Raiz de um Quociente:"}</b>
              {" Funciona igual para divisão/fração."}
              <br />
              <MathText>
                {
                  " $\\sqrt{\\frac{100}{25}} = \\frac{\\sqrt{100}}{\\sqrt{25}} = \\frac{10}{5} = 2$.\n            "
                }
              </MathText>
            </div>

            <div className='text-center bg-red-50 p-4 rounded-xl border border-red-100 font-bold text-red-800 mt-2 space-y-3'>
              <p>
                ⚠️ ATENÇÃO:
                <br /> NÃO FAÇA ISSO NA SOMA OU SUBTRAÇÃO!
              </p>
              <MathText>
                {
                  " $\\sqrt{16 + 9} \\neq \\sqrt{16} + \\sqrt{9}$ (Pois $\\sqrt{25} = 5$, e $4+3=7$). "
                }
              </MathText>
              <p>Resolva a conta de dentro primeiro!</p>
            </div>
          </div>
        </article>

        <div className='space-y-6'>
          <article className='bg-white rounded-2xl border p-6 shadow-sm border-l-4 border-l-indigo-500'>
            <div className='flex items-center gap-3'>
              <span className='w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-black'>
                {"5"}
              </span>

              <h2 className='text-xl font-black'>
                {"O Disfarce (Expoente Fracionário)"}
              </h2>
            </div>

            <p className='mt-3 text-slate-600 text-sm'>
              {
                "Toda raiz pode ser escrita como uma potência usando uma fração. É a regra do "
              }
              <b>
                {
                  '"Quem tá no sol vai pra sombra, quem tá na sombra vai pro sol"'
                }
              </b>
              {"."}
            </p>

            <div className='paper rounded-xl p-4 mt-3 text-center text-indigo-900 font-bold text-lg'>
              <MathText>
                {
                  " \\[ x^{\\frac{\\text{sol}}{\\text{sombra}}} = \\sqrt[\\text{sombra}]{x^{\\text{sol}}} \\]\n            "
                }
              </MathText>
            </div>

            <div className='text-sm text-slate-500 mt-3'>
              <MathText>
                {" Exemplo: $27^{\\frac{1}{3}} = \\sqrt[3]{27^1} = 3$"}
              </MathText>
              <br />
              <MathText>
                {" Exemplo: $\\sqrt{x} = x^{\\frac{1}{2}}$\n            "}
              </MathText>
            </div>
          </article>

          <article className='bg-white rounded-2xl border p-6 shadow-sm'>
            <div className='flex items-center gap-3'>
              <span className='w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-black'>
                {"6"}
              </span>

              <h2 className='text-xl font-black'>{"Raiz de Raiz"}</h2>
            </div>

            <p className='mt-3 text-slate-600 text-sm'>
              {
                "Quando temos uma casinha dentro da outra, basta manter o radicando e "
              }
              <b>{"MULTIPLICAR os índices"}</b>
              {".\n            "}
            </p>

            <div className='bg-slate-50 rounded-xl p-3 mt-3 text-center font-bold text-lg border'>
              <MathText>
                {
                  " \\[ \\sqrt{\\sqrt[3]{64}} = \\sqrt[2 \\times 3]{64} = \\sqrt[6]{64} = 2 \\]\n            "
                }
              </MathText>
            </div>
          </article>
        </div>
      </div>
      {"\n\n      "}
      <div className='grid lg:grid-cols-2 gap-6 mt-6'>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-black'>
              {"7"}
            </span>

            <h2 className='text-xl font-black'>
              {"Simplificação (Fatoração)"}
            </h2>
          </div>

          <p className='mt-4 text-slate-600 text-sm'>
            <MathText>
              {
                'O que fazer com raízes não exatas como $\\sqrt{72}$? Nós a "quebramos"\n            em pedaços usando os números primos e tiramos da raiz quem formar pares (pois o índice é 2).'
              }
            </MathText>
          </p>

          <div className='space-y-3 mt-4 text-sm bg-slate-50 p-4 rounded-xl border'>
            <div>
              <b>{"1. Fatore:"}</b>
              <MathText>
                {" $72 = 2 \\times 2 \\times 2 \\times 3 \\times 3$"}
              </MathText>
            </div>

            <div>
              <b>{"2. Agrupe:"}</b>
              <MathText>{" $(2^2) \\times 2^1 \\times (3^2)$"}</MathText>
            </div>

            <div>
              <b>{"3. Corte e Tire:"}</b>
              <MathText>
                {
                  " Quem está ao quadrado corta com a raiz e pula para fora. O $2^1$ fica preso.\n            "
                }
              </MathText>
            </div>

            <div className='font-bold text-center mt-2 text-indigo-800'>
              <MathText>
                {
                  "$\\sqrt{72} = 2 \\times 3 \\times \\sqrt{2} = 6\\sqrt{2}$\n            "
                }
              </MathText>
            </div>
          </div>
        </article>

        <article className='bg-slate-900 text-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-slate-800 text-indigo-400 grid place-items-center font-black'>
              {"8"}
            </span>

            <h2 className='text-2xl font-black text-indigo-400'>
              {"Racionalização"}
            </h2>
          </div>

          <p className='mt-3 text-slate-300 text-sm'>
            {
              'Na matemática, é "falta de educação" deixar uma raiz no denominador\n            (embaixo) de uma fração. Precisamos subir ela!'
            }
          </p>

          <div className='mt-4 space-y-4'>
            <div className='bg-slate-800 p-4 rounded-lg border border-slate-700 text-sm'>
              <b>
                <MathText>{"Caso Simples ($\\sqrt{x}$):"}</MathText>
              </b>
              {" Multiplique em cima e embaixo pela própria raiz."}
              <br />
              <MathText>
                {
                  " $\\frac{5}{\\sqrt{2}} = \\frac{5 \\cdot \\sqrt{2}}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{5\\sqrt{2}}{2}$\n            "
                }
              </MathText>
            </div>

            <div className='bg-slate-800 p-4 rounded-lg border border-slate-700 text-sm'>
              <b>{"Com Soma/Subtração embaixo:"}</b>
              {" Multiplique pelo "}
              <i>{"conjugado"}</i>
              {" (troca o sinal do meio)."}
              <br />
              <MathText>
                {
                  " $\\frac{1}{\\sqrt{3}-1} \\times \\frac{\\sqrt{3}+1}{\\sqrt{3}+1} = \\frac{\\sqrt{3}+1}{3 - 1} = \\frac{\\sqrt{3}+1}{2}$\n            "
                }
              </MathText>
            </div>
          </div>
        </article>
      </div>
      {"\n    "}
    </div>
  );
}

export function RootExamples() {
  return (
    <>
      <div className='bg-white rounded-3xl border p-7 shadow-sm'>
        <span className='text-xs font-bold uppercase tracking-widest text-indigo-600'>
          {"Exemplos resolvidos"}
        </span>
        {"\r\n        "}
        <h1 className='text-3xl font-black mt-2'>
          {"Veja o raciocínio completo, passo a passo"}
        </h1>
        {"\r\n        "}
        <p className='text-slate-600 mt-2'>
          {
            "Antes de tentar os exercícios, acompanhe estes modelos com atenção."
          }
        </p>
        {"\r\n      "}
      </div>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        {"\r\n        "}
        <h2 className='text-xl font-black text-indigo-800'>
          {"Exemplo 5 — Radiciação exata"}
        </h2>
        {"\r\n        "}
        <p className='mt-2 text-slate-600'>
          <MathText>{"Calcule \\(\\sqrt{81}\\)."}</MathText>
        </p>
        {"\r\n        "}
        <div className='space-y-3 mt-4 text-sm'>
          {"\r\n          "}
          <div className='step' data-step='1'>
            {"Pergunte: que número multiplicado por ele mesmo dá 81?"}
          </div>
          {"\r\n          "}
          <div className='step' data-step='2'>
            <MathText>{"Teste: \\(9\\times9=81\\)."}</MathText>
          </div>
          {"\r\n          "}
          <div className='step' data-step='3'>
            <b>{"Resposta:"}</b>
            <MathText>{" \\(\\sqrt{81}=9\\)."}</MathText>
          </div>
          {"\r\n        "}
        </div>
        {"\r\n      "}
      </article>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        {"\r\n        "}
        <h2 className='text-xl font-black text-indigo-800'>
          {"Exemplo 6 — Simplificando um radical"}
        </h2>
        {"\r\n        "}
        <p className='mt-2 text-slate-600'>
          <MathText>{"Simplifique \\(\\sqrt{50}\\)."}</MathText>
        </p>
        {"\r\n        "}
        <div className='space-y-3 mt-4 text-sm'>
          {"\r\n          "}
          <div className='step' data-step='1'>
            <MathText>
              {
                "Escreva 50 como produto envolvendo um quadrado perfeito: \\(50 = 25\\times2\\).\r\n          "
              }
            </MathText>
          </div>
          {"\r\n          "}
          <div className='step' data-step='2'>
            <MathText>
              {
                "Separe as raízes: \\(\\sqrt{25\\times2}=\\sqrt{25}\\times\\sqrt{2}\\)."
              }
            </MathText>
          </div>
          {"\r\n          "}
          <div className='step' data-step='3'>
            <MathText>{"Calcule \\(\\sqrt{25}=5\\)."}</MathText>
          </div>
          {"\r\n          "}
          <div className='step' data-step='4'>
            <b>{"Resposta:"}</b>
            <MathText>{" \\(5\\sqrt{2}\\)."}</MathText>
          </div>
          {"\r\n        "}
        </div>
        {"\r\n      "}
      </article>
    </>
  );
}
