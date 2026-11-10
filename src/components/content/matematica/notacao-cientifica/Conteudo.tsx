import CourseHeader from "../../../header/CourseHeader.component";
import { MathText } from "../../../Math/MathRenderer";

export function ScientificTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='Curso do zero'
        title='Dominando a Notação Científica'
        description='Números no universo variam do microscópico (átomos) ao gigantesco (galáxias). Aprenda a escrever e operar com esses números sem se perder em zeros.'
        bgClass='bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 text-white shadow-xl'
        stats={[
          { value: "8", label: "módulos" },
          { value: "🔬", label: "Laboratório visual" },
          { value: "✓", label: "resolução detalhada" },
          { value: "100", label: "exercícios" },
        ]}
      />

      <div className='tip rounded-2xl p-5 shadow-sm'>
        <b>{"Como estudar:"}</b>
        {
          " Leia o conceito, visualize o exemplo, use o laboratório para testar a vírgula e, por fim, resolva os exercícios para fixar."
        }
      </div>

      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-black'>
              {"1"}
            </span>
            <h2 className='text-xl font-black'>{"A Estrutura"}</h2>
          </div>

          <p className='mt-4 text-slate-600 leading-7'>
            {
              "A notação científica transforma qualquer número em uma multiplicação de duas partes: um número base (mantissa) e uma potência de 10."
            }
          </p>

          <div className='paper rounded-xl p-5 mt-4 text-center text-xl'>
            <MathText>{"\\[ a \\times 10^n \\]"}</MathText>
          </div>

          <div className='grid sm:grid-cols-2 gap-3 text-sm mt-4'>
            <div className='bg-indigo-50 rounded-xl p-4'>
              <b>{'O número "a" (Mantissa)'}</b>
              <br />
              {"Deve ser igual ou maior que 1 e menor que 10."}
              <br />
              <i>{"Ex: 3.5 (Correto), 35 (Errado)."}</i>
            </div>

            <div className='bg-amber-50 rounded-xl p-4'>
              <b>{'O expoente "n"'}</b>
              <br />
              {"É um número inteiro. Mostra quantas casas a vírgula andou."}
            </div>
          </div>
        </article>

        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-black'>
              {"2"}
            </span>
            <h2 className='text-xl font-black'>
              {"Números Grandes (Expoente Positivo)"}
            </h2>
          </div>

          <p className='mt-4 text-slate-600 leading-7'>
            {"Para números maiores que 10, a vírgula anda para a "}
            <b>{"esquerda"}</b>
            {
              ". O expoente positivo indica quantas vezes o número foi multiplicado por 10."
            }
          </p>

          <div className='paper rounded-xl p-5 mt-4 text-center text-lg'>
            <MathText>{"\\[ 45.000 = 4.5 \\times 10^4 \\]"}</MathText>
          </div>

          <div className='success rounded-xl p-4 mt-4 text-sm'>
            <b>{"Ideia:"}</b>
            <MathText>
              {
                ' O $10^4$ significa $10 \\times 10 \\times 10 \\times 10 = 10.000$. Então, $4.5 \\times 10.000 = 45.000$. O expoente é o número de "pulos" da vírgula até ficar atrás do 4.'
              }
            </MathText>
          </div>
        </article>
      </div>

      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <h2 className='text-xl font-black'>
            {"3. Números Pequenos (Expoente Negativo)"}
          </h2>

          <p className='mt-3 text-slate-600'>
            {"Para decimais menores que 1 (como 0.002), a vírgula anda para a "}
            <b>{"direita"}</b>
            {". O expoente negativo indica divisão por 10."}
          </p>

          <div className='paper rounded-xl p-5 mt-4 text-center text-lg'>
            <MathText>{"\\[ 0.00032 = 3.2 \\times 10^{-4} \\]"}</MathText>
          </div>

          <div className='space-y-3 mt-4'>
            <div className='step' data-step='1'>
              <MathText>
                {"A vírgula sai do $0.00032$ e pula para a direita."}
              </MathText>
            </div>

            <div className='step' data-step='2'>
              <MathText>
                {
                  "Ela para entre o 3 e o 2 para criar o número $3.2$ (que está entre 1 e 10)."
                }
              </MathText>
            </div>

            <div className='step' data-step='3'>
              <MathText>
                {"Como pulou 4 casas para a direita, o expoente é $-4$."}
              </MathText>
            </div>
          </div>
        </article>
        {"\r\n  \r\n  "}
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <h2 className='text-xl font-black'>
            {"4. Dica de Ouro: Esquerda vs Direita"}
          </h2>

          <div className='space-y-3 mt-4 text-sm'>
            <div className='bg-slate-50 rounded-xl p-4'>
              <b>{"Transformando de Normal para Científica:"}</b>
              <br />
              {"• Andou pra "}
              <b>{"ESQUERDA"}</b>
              <MathText>{" $\\leftarrow$ = Expoente "}</MathText>
              <b>{"AUMENTA"}</b>
              {" (+)"}
              <br />
              {"• Andou pra "}
              <b>{"DIREITA"}</b>
              <MathText>{" $\\rightarrow$ = Expoente "}</MathText>
              <b>{"DIMINUI"}</b>
              {" (-)"}
            </div>

            <div className='bg-slate-50 rounded-xl p-4'>
              <b>{"Tirando da Notação Científica (Desfazendo):"}</b>
              <br />
              {"• Expoente "}
              <b>{"POSITIVO"}</b>
              {": Empurre a vírgula para a "}
              <b>{"DIREITA"}</b>
              {"."}
              <br />
              {"• Expoente "}
              <b>{"NEGATIVO"}</b>
              {": Empurre a vírgula para a "}
              <b>{"ESQUERDA"}</b>
              {"."}
            </div>
          </div>

          <div className='mt-4 text-center'>
            <MathText>
              {
                "\\[ 2.5 \\times 10^3 = 2500 \\quad \\text{(direita)} \\]\\[ 2.5 \\times 10^{-3} = 0.0025 \\quad \\text{(esquerda)} \\]"
              }
            </MathText>
          </div>
        </article>
      </div>

      <div className='bg-white rounded-2xl border shadow-sm p-6'>
        <h2 className='text-2xl font-black'>{"5. Multiplicação e Divisão"}</h2>

        <div className='grid lg:grid-cols-2 gap-6 mt-5'>
          <div>
            <h3 className='font-bold text-indigo-800'>{"Multiplicação"}</h3>

            <p className='text-sm text-slate-600 mt-2'>
              {"Multiplique os números base e "}
              <b>{"some"}</b>
              {" os expoentes (propriedade das potências de mesma base)."}
            </p>

            <div className='paper rounded-xl p-5 mt-3 text-center text-sm'>
              <MathText>
                {
                  "\r\n      \\[ (2 \\times 10^3) \\times (4 \\times 10^5) \\]\r\n      \\[ (2 \\times 4) \\times 10^{3+5} \\]\r\n      \\[ 8 \\times 10^8 \\]\r\n    "
                }
              </MathText>
            </div>
          </div>

          <div>
            <h3 className='font-bold text-indigo-800'>{"Divisão"}</h3>

            <p className='text-sm text-slate-600 mt-2'>
              {"Divida os números base e "}
              <b>{"subtraia"}</b>
              {" os expoentes (de cima menos o de baixo)."}
            </p>

            <div className='paper rounded-xl p-5 mt-3 text-center text-sm'>
              <MathText>
                {
                  "\r\n      \\[ \\frac{8 \\times 10^7}{2 \\times 10^3} \\]\r\n      \\[ (8 \\div 2) \\times 10^{7-3} \\]\r\n      \\[ 4 \\times 10^4 \\]\r\n    "
                }
              </MathText>
            </div>
          </div>
        </div>

        <div className='warning rounded-xl p-4 mt-6 text-sm'>
          <b>{"Ajuste final:"}</b>
          <MathText>
            {
              " Às vezes, após multiplicar, a resposta foge da regra (ex: $15 \\times 10^4$). Você deve ajustar a vírgula! O $15$ vira $1.5$ (andou 1 para a esquerda), então soma 1 no expoente: $1.5 \\times 10^5$.\r\n  "
            }
          </MathText>
        </div>
      </div>

      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <h2 className='text-xl font-black'>{"6. Adição e Subtração"}</h2>

          <p className='mt-3 text-slate-600'>
            {"Você "}
            <b>{"não pode"}</b>
            {
              ' somar diretamente se os expoentes forem diferentes. Pense nos expoentes como "unidades" diferentes (ex: não dá pra somar metros com centímetros sem converter).'
            }
          </p>

          <div className='space-y-3 mt-4 text-sm'>
            <div className='step' data-step='1'>
              {"Iguale os expoentes. Escolha o maior deles."}
            </div>

            <div className='step' data-step='2'>
              {"Converta o outro número deslocando a vírgula."}
            </div>

            <div className='step' data-step='3'>
              {"Some/Subtraia as mantissas e repita a potência de 10."}
            </div>
          </div>

          <div className='paper rounded-xl p-5 mt-4 text-sm'>
            <b>{"Exemplo:"}</b>
            <MathText>
              {" \\( (3 \\times 10^4) + (5 \\times 10^3) \\)"}
            </MathText>
            <br />
            <MathText>
              {
                "\r\n    Transforme \\(10^3\\) em \\(10^4\\) andando a vírgula do 5 para a esquerda: \\(0.5 \\times 10^4\\)."
              }
            </MathText>
            <br />
            <MathText>
              {
                "\r\n    Agora some: \\(3 + 0.5 = 3.5\\). Resposta: \\(3.5 \\times 10^4\\).\r\n   "
              }
            </MathText>
          </div>
        </article>
        {"\r\n  \r\n  "}
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <h2 className='text-xl font-black'>
            {"7. Checklist para Exercícios"}
          </h2>

          <div className='grid sm:grid-cols-2 gap-3 mt-4 text-sm'>
            <div className='bg-slate-50 rounded-xl p-4'>
              <b>{'1. O "a" está certo?'}</b>
              <br />
              {"Verifique se a mantissa está entre 1 e 9.999..."}
            </div>

            <div className='bg-slate-50 rounded-xl p-4'>
              <b>{"2. O expoente está certo?"}</b>
              <br />
              {
                "Positivo = era número grande. Negativo = era número decimal pequeno."
              }
            </div>

            <div className='bg-slate-50 rounded-xl p-4'>
              <b>{"3. Operação"}</b>
              <br />
              {"Multiplicação soma expoente, Divisão subtrai."}
            </div>

            <div className='bg-slate-50 rounded-xl p-4'>
              <b>{"4. Ajuste"}</b>
              <br />
              <MathText>
                {
                  "Sempre olhe o resultado final. Se deu \\(25 \\times 10^3\\), corrija para \\(2.5 \\times 10^4\\)."
                }
              </MathText>
            </div>
          </div>
        </article>
      </div>
      {"\r\n"}
    </div>
  );
}

export function ScientificExamples() {
  return (
    <>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <div className='flex items-center gap-3'>
          <span className='w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-black'>
            {"2"}
          </span>
          <h2 className='text-xl font-black'>
            {"Números Grandes (Expoente Positivo)"}
          </h2>
        </div>

        <p className='mt-4 text-slate-600 leading-7'>
          {"Para números maiores que 10, a vírgula anda para a "}
          <b>{"esquerda"}</b>
          {
            ". O expoente positivo indica quantas vezes o número foi multiplicado por 10."
          }
        </p>

        <div className='paper rounded-xl p-5 mt-4 text-center text-lg'>
          <MathText>{"\\[ 45.000 = 4.5 \\times 10^4 \\]"}</MathText>
        </div>

        <div className='success rounded-xl p-4 mt-4 text-sm'>
          <b>{"Ideia:"}</b>
          <MathText>
            {
              ' O $10^4$ significa $10 \\times 10 \\times 10 \\times 10 = 10.000$. Então, $4.5 \\times 10.000 = 45.000$. O expoente é o número de "pulos" da vírgula até ficar atrás do 4.'
            }
          </MathText>
        </div>
      </article>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black'>
          {"3. Números Pequenos (Expoente Negativo)"}
        </h2>

        <p className='mt-3 text-slate-600'>
          {"Para decimais menores que 1 (como 0.002), a vírgula anda para a "}
          <b>{"direita"}</b>
          {". O expoente negativo indica divisão por 10."}
        </p>

        <div className='paper rounded-xl p-5 mt-4 text-center text-lg'>
          <MathText>{"\\[ 0.00032 = 3.2 \\times 10^{-4} \\]"}</MathText>
        </div>

        <div className='space-y-3 mt-4'>
          <div className='step' data-step='1'>
            <MathText>
              {"A vírgula sai do $0.00032$ e pula para a direita."}
            </MathText>
          </div>

          <div className='step' data-step='2'>
            <MathText>
              {
                "Ela para entre o 3 e o 2 para criar o número $3.2$ (que está entre 1 e 10)."
              }
            </MathText>
          </div>

          <div className='step' data-step='3'>
            <MathText>
              {"Como pulou 4 casas para a direita, o expoente é $-4$."}
            </MathText>
          </div>
        </div>
      </article>
      <div className='bg-white rounded-2xl border shadow-sm p-6'>
        <h2 className='text-2xl font-black'>{"5. Multiplicação e Divisão"}</h2>

        <div className='grid lg:grid-cols-2 gap-6 mt-5'>
          <div>
            <h3 className='font-bold text-indigo-800'>{"Multiplicação"}</h3>

            <p className='text-sm text-slate-600 mt-2'>
              {"Multiplique os números base e "}
              <b>{"some"}</b>
              {" os expoentes (propriedade das potências de mesma base)."}
            </p>

            <div className='paper rounded-xl p-5 mt-3 text-center text-sm'>
              <MathText>
                {
                  "\r\n      \\[ (2 \\times 10^3) \\times (4 \\times 10^5) \\]\r\n      \\[ (2 \\times 4) \\times 10^{3+5} \\]\r\n      \\[ 8 \\times 10^8 \\]\r\n    "
                }
              </MathText>
            </div>
          </div>

          <div>
            <h3 className='font-bold text-indigo-800'>{"Divisão"}</h3>

            <p className='text-sm text-slate-600 mt-2'>
              {"Divida os números base e "}
              <b>{"subtraia"}</b>
              {" os expoentes (de cima menos o de baixo)."}
            </p>

            <div className='paper rounded-xl p-5 mt-3 text-center text-sm'>
              <MathText>
                {
                  "\r\n      \\[ \\frac{8 \\times 10^7}{2 \\times 10^3} \\]\r\n      \\[ (8 \\div 2) \\times 10^{7-3} \\]\r\n      \\[ 4 \\times 10^4 \\]\r\n    "
                }
              </MathText>
            </div>
          </div>
        </div>

        <div className='warning rounded-xl p-4 mt-6 text-sm'>
          <b>{"Ajuste final:"}</b>
          <MathText>
            {
              " Às vezes, após multiplicar, a resposta foge da regra (ex: $15 \\times 10^4$). Você deve ajustar a vírgula! O $15$ vira $1.5$ (andou 1 para a esquerda), então soma 1 no expoente: $1.5 \\times 10^5$.\r\n  "
            }
          </MathText>
        </div>
      </div>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black'>{"6. Adição e Subtração"}</h2>

        <p className='mt-3 text-slate-600'>
          {"Você "}
          <b>{"não pode"}</b>
          {
            ' somar diretamente se os expoentes forem diferentes. Pense nos expoentes como "unidades" diferentes (ex: não dá pra somar metros com centímetros sem converter).'
          }
        </p>

        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            {"Iguale os expoentes. Escolha o maior deles."}
          </div>

          <div className='step' data-step='2'>
            {"Converta o outro número deslocando a vírgula."}
          </div>

          <div className='step' data-step='3'>
            {"Some/Subtraia as mantissas e repita a potência de 10."}
          </div>
        </div>

        <div className='paper rounded-xl p-5 mt-4 text-sm'>
          <b>{"Exemplo:"}</b>
          <MathText>{" \\( (3 \\times 10^4) + (5 \\times 10^3) \\)"}</MathText>
          <br />
          <MathText>
            {
              "\r\n    Transforme \\(10^3\\) em \\(10^4\\) andando a vírgula do 5 para a esquerda: \\(0.5 \\times 10^4\\)."
            }
          </MathText>
          <br />
          <MathText>
            {
              "\r\n    Agora some: \\(3 + 0.5 = 3.5\\). Resposta: \\(3.5 \\times 10^4\\).\r\n   "
            }
          </MathText>
        </div>
      </article>
    </>
  );
}
