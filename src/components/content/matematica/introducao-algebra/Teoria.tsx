import { MathText } from '../../../Math/MathRenderer';
import { AlgebraQuickCheck, AlgebraMatchFigures, AlgebraScaleFigure, AlgebraTheoryToc } from './InteracoesDaTeoria';

export function AlgebraIntroductionTheory() {
  return (
<section className="space-y-6" id="sec-teoria">
    <div className="rounded-3xl p-7 sm:p-10 bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 text-white shadow-xl">
        <span className="text-xs uppercase tracking-widest font-bold text-indigo-200">
      <MathText>{"Curso completo · 6º ano · do zero"}</MathText>
    </span>
        <h1 className="text-3xl sm:text-5xl font-black mt-2">
      <MathText>{"Introdução à Álgebra"}</MathText>
    </h1>
        <p className="mt-4 max-w-3xl text-indigo-100 leading-7">
      <MathText>{"Expressões algébricas e valor numérico. Você não precisa saber nada sobre o assunto: aqui você vai entender "}</MathText>
            <b>
        <MathText>{"o que é"}</MathText>
      </b>
      <MathText>{", "}</MathText>
            <b>
        <MathText>{"como funciona"}</MathText>
      </b>
      <MathText>{", "}</MathText>
            <b>
        <MathText>{"para que serve"}</MathText>
      </b>
      <MathText>{", "}</MathText>
            <b>
        <MathText>{"como armar cada conta no papel"}</MathText>
      </b>
      <MathText>{" e "}</MathText>
            <b>
        <MathText>{"como resolver problemas que pedem interpretação"}</MathText>
      </b>
      <MathText>{", com exemplos passo a passo e mais de 100 exercícios do mais fácil ao mais difícil."}</MathText>
    </p>
  </div>
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 items-start">
    <AlgebraTheoryToc />
        <div className="space-y-6 min-w-0">
            <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_b]:text-slate-800" id="l0">
                <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 0"}</MathText>
        </div>
                <h2 className="text-2xl sm:text-3xl font-black mt-1 text-slate-800">
          <MathText>{"Comece por aqui"}</MathText>
        </h2>
                <p className="mt-3 leading-7 text-slate-600">
                    <b>
            <MathText>{"Álgebra"}</MathText>
          </b>
          <MathText>{" é a parte da matemática que usa "}</MathText>
                    <b>
            <MathText>{"letras"}</MathText>
          </b>
          <MathText>{" para representar números. Parece estranho misturar letras com números, mas você já faz isso sem perceber: quando diz “o dobro de um número qualquer”, você está falando de algo que pode ser 2, 10 ou 1.000, e a regra é sempre a mesma. A álgebra serve para "}</MathText>
                    <b>
            <MathText>{"escrever essa regra de forma curta"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
                <div className="grid gap-3 mt-4 sm:grid-cols-2 min-[700px]:grid-cols-3 [&_>div]:rounded-2xl [&_>div]:p-4 [&_>div]:text-sm [&_>div]:leading-7">
                    <div className="bg-indigo-50">
                        <b>
              <MathText>{"1 · Letras guardam números"}</MathText>
            </b>
                        <br />
            <MathText>{"Uma letra é como uma caixinha com um número dentro. Às vezes não sabemos qual é; às vezes ele pode mudar."}</MathText>
          </div>
                    <div className="bg-amber-50">
                        <b>
              <MathText>{"2 · Expressões são receitas"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(3x + 5\\) é uma “receita de cálculo”: pegue um número, multiplique por 3 e some 5."}</MathText>
          </div>
                    <div className="bg-emerald-50">
                        <b>
              <MathText>{"3 · Valor numérico"}</MathText>
            </b>
                        <br />
            <MathText>{"Quando escolhemos o número da caixinha e fazemos a conta, achamos o "}</MathText>
                        <b>
              <MathText>{"valor numérico"}</MathText>
            </b>
            <MathText>{" da expressão."}</MathText>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"Como estudar"}</MathText>
        </h3>
                <ol className="pl-6 mt-3 space-y-1 list-decimal leading-7 text-slate-600">
                    <li className="mt-1">
            <MathText>{"Leia as lições "}</MathText>
                        <b>
              <MathText>{"na ordem"}</MathText>
            </b>
            <MathText>{". Cada uma usa o que a anterior ensinou."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Tenha "}</MathText>
                        <b>
              <MathText>{"caderno e lápis"}</MathText>
            </b>
            <MathText>{". Copie cada exemplo no caderno e refaça antes de olhar a solução. É assim que se aprende matemática."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Responda os "}</MathText>
                        <b>
              <MathText>{"“Teste rápido”"}</MathText>
            </b>
            <MathText>{" (caixas azuis) para ver se pode seguir em frente."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Depois de cada bloco de lições, faça os "}</MathText>
                        <b>
              <MathText>{"exercícios do nível correspondente"}</MathText>
            </b>
            <MathText>{". Eles começam fáceis e vão ficando mais difíceis. Há "}</MathText>
                        <b>
              <MathText>{"contas"}</MathText>
            </b>
            <MathText>{" e também "}</MathText>
                        <b>
              <MathText>{"problemas que pedem interpretação"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Travou? Use a "}</MathText>
                        <b>
              <MathText>{"💡 Dica"}</MathText>
            </b>
            <MathText>{"; ainda travado? Abra a "}</MathText>
                        <b>
              <MathText>{"resolução passo a passo"}</MathText>
            </b>
            <MathText>{" e depois tente outro exercício parecido."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Use o "}</MathText>
                        <b>
              <MathText>{"Laboratório"}</MathText>
            </b>
            <MathText>{" para “brincar” com os números e as "}</MathText>
                        <b>
              <MathText>{"Calculadoras"}</MathText>
            </b>
            <MathText>{" para conferir suas contas."}</MathText>
          </li>
        </ol>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"Mapa do curso"}</MathText>
        </h3>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Lição"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"O que você aprende"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Exercícios"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"1"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Revisão: ordem das operações, potências, dobro, triplo, metade"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"—"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"2 e 4"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Por que usar letras; como escrever expressões; termos e coeficientes"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Nível 1"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"3"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Traduzir frases para a linguagem algébrica (e o contrário)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Níveis 2 e 3"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"5"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Valor numérico: trocar letras por números e calcular"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Níveis 4 a 8"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"6"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Tabelas, sequências e regras gerais"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Nível 9"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"9"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Fórmulas do dia a dia (perímetro, área, preços…)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Nível 10"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"10"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Resolver problemas com interpretação, no papel"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Nível 11"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"7"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Igualdades e descobrir o valor desconhecido"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Níveis 12 e 13"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"8, 11 e 12"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Expressões equivalentes, erros comuns, resumo"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Nível 14 (desafios)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
            <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_b]:text-slate-800" id="l1">
                <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 1"}</MathText>
        </div>
                <h2 className="text-2xl sm:text-3xl font-black mt-1 text-slate-800">
          <MathText>{"Revisão rápida: o que você precisa saber"}</MathText>
        </h2>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Quase todo erro em álgebra vem de uma conta básica mal feita. Vale gastar cinco minutos aqui."}</MathText>
        </p>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"1.1 Palavras que viram contas"}</MathText>
        </h3>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Palavra"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Significa"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Exemplo com 7"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"dobro"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"vezes 2"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(2 \\times 7 = 14\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"triplo"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"vezes 3"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(3 \\times 7 = 21\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"quádruplo"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"vezes 4"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(4 \\times 7 = 28\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"metade"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"dividido por 2"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(14 \\div 2 = 7\\), a metade de 14"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"sucessor"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"o próximo número (mais 1)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(7 + 1 = 8\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"antecessor"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"o número anterior (menos 1)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(7 - 1 = 6\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"quadrado"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"o número vezes ele mesmo"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(7 \\times 7 = 49\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"1.2 Potência: multiplicação repetida"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Uma potência é um jeito curto de escrever uma multiplicação de números iguais. O número que se repete é a "}</MathText>
                    <b>
            <MathText>{"base"}</MathText>
          </b>
          <MathText>{"; quantas vezes ele aparece é o "}</MathText>
                    <b>
            <MathText>{"expoente"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
                <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[\\begin{gathered}3^2 = 3 \\times 3 = 9 \\\\ 2^3 = 2 \\times 2 \\times 2 = 8\\end{gathered}\\]"}</MathText>
        </div>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50">
                    <b>
            <MathText>{"Cuidado!"}</MathText>
          </b>
          <MathText>{"\\(3^2\\) "}</MathText>
                    <u>
            <MathText>{"não"}</MathText>
          </u>
          <MathText>{" é \\(3 \\times 2\\). É \\(3 \\times 3\\). O expoente diz "}</MathText>
                    <i>
            <MathText>{"quantas vezes"}</MathText>
          </i>
          <MathText>{" o número se repete na multiplicação."}</MathText>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"1.3 Ordem das operações"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Quando há várias contas juntas, a ordem importa. Siga sempre:"}</MathText>
        </p>
                <ol className="pl-6 mt-3 space-y-1 list-decimal leading-7 text-slate-600">
                    <li className="mt-1">
                        <b>
              <MathText>{"Parênteses"}</MathText>
            </b>
            <MathText>{" primeiro (de dentro para fora)."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Depois as "}</MathText>
                        <b>
              <MathText>{"potências"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Depois "}</MathText>
                        <b>
              <MathText>{"multiplicações e divisões"}</MathText>
            </b>
            <MathText>{", da esquerda para a direita."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Por último, "}</MathText>
                        <b>
              <MathText>{"somas e subtrações"}</MathText>
            </b>
            <MathText>{", da esquerda para a direita."}</MathText>
          </li>
        </ol>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-3">
                    <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO: \\(2 + 3 \\times 4\\)"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
              <MathText>{"Primeiro a multiplicação: \\(3 \\times 4 = 12\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Depois a soma: \\(2 + 12 = 14\\)"}</MathText>
            </div>
          </div>
        </div>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-amber-500 bg-amber-50">
                    <b>
            <MathText>{"Dica de papel"}</MathText>
          </b>
          <MathText>{"Escreva "}</MathText>
                    <u>
            <MathText>{"a conta inteira de novo"}</MathText>
          </u>
          <MathText>{" a cada passo, resolvendo só uma parte. Assim você não perde nada no caminho: \\(2 + 3 \\times 4 \\to 2 + 12 \\to 14\\)."}</MathText>
        </div>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-3">
                    <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO COM PARÊNTESES E POTÊNCIA: \\(2 \\times (1 + 3)^2 - 5\\)"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
              <MathText>{"Parênteses: \\(1 + 3 = 4\\)  ⇒  \\(2 \\times 4^2 - 5\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Potência: \\(4^2 = 16\\)  ⇒  \\(2 \\times 16 - 5\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Multiplicação: \\(2 \\times 16 = 32\\)  ⇒  \\(32 - 5\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Subtração: \\(32 - 5 = 27\\)"}</MathText>
            </div>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"1.4 Três jeitos de escrever “vezes”"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"\\(3 \\times 4\\), \\(3 \\cdot 4\\) e \\(3(4)\\) significam a mesma coisa: "}</MathText>
                    <b>
            <MathText>{"12"}</MathText>
          </b>
          <MathText>{". Em álgebra vamos usar muito o ponto e, principalmente, o jeito mais curto de todos: "}</MathText>
                    <b>
            <MathText>{"não escrever sinal nenhum"}</MathText>
          </b>
          <MathText>{" entre um número e uma letra (você verá na lição 4)."}</MathText>
        </p>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"1.5 Decimais e frações que aparecem muito"}</MathText>
        </h3>
                <ul className="pl-6 mt-3 space-y-1 list-disc leading-7 text-slate-600">
                    <li className="mt-1">
            <MathText>{"\\(0{,}5 = \\tfrac{1}{2}\\) (metade)  ·  \\(0{,}25 = \\tfrac{1}{4}\\)  ·  \\(0{,}1 = \\tfrac{1}{10}\\)"}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Dividir por 2 é o mesmo que tirar a metade: \\(10 \\div 2 = 5\\)."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"\\(x \\div 2\\) também pode ser escrito como fração: \\(\\dfrac{x}{2}\\)."}</MathText>
          </li>
        </ul>
        <AlgebraQuickCheck index={0} />
        <AlgebraQuickCheck index={1} />
      </article>
            <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_b]:text-slate-800" id="l2">
                <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 2"}</MathText>
        </div>
                <h2 className="text-2xl sm:text-3xl font-black mt-1 text-slate-800">
          <MathText>{"Por que usar letras na matemática?"}</MathText>
        </h2>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"2.1 Uma história de papelaria"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Um caderno custa "}</MathText>
                    <b>
            <MathText>{"R$ 8"}</MathText>
          </b>
          <MathText>{". Quanto se paga por vários cadernos? Veja:"}</MathText>
        </p>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Cadernos"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Conta"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Preço"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"1"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(8 \\times 1\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"R$ 8"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"2"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(8 \\times 2\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"R$ 16"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"3"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(8 \\times 3\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"R$ 24"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"10"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(8 \\times 10\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"R$ 80"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"?"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(8 \\times ?\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"…"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"A "}</MathText>
                    <b>
            <MathText>{"regra é sempre a mesma"}</MathText>
          </b>
          <MathText>{": multiplicar a quantidade por 8. E se não soubermos quantos cadernos vão ser comprados? Chamamos essa quantidade de "}</MathText>
                    <b>
            <MathText>{"n"}</MathText>
          </b>
          <MathText>{" e escrevemos a regra de uma vez só:"}</MathText>
        </p>
                <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[\\text{preço} = 8 \\times n \\quad\\text{ou, mais curto:}\\quad 8n\\]"}</MathText>
        </div>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Pronto! \\(8n\\) vale para 1 caderno, 10 cadernos, 1.000 cadernos… Esse é o poder da álgebra: "}</MathText>
                    <b>
            <MathText>{"uma regra para infinitos casos"}</MathText>
          </b>
          <MathText>{"."}</MathText>
        </p>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"2.2 A máquina de expressões"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Pense em uma máquina: você coloca um número, ela faz sempre a mesma conta e devolve outro número."}</MathText>
        </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                    <span className="min-w-18 rounded-xl border-2 border-indigo-300 bg-indigo-50 px-4 py-2 text-center font-extrabold text-indigo-800">
            <MathText>{"entra: \\(n\\)"}</MathText>
          </span>
                    <span>
            <MathText>{"➜"}</MathText>
          </span>
                    <span className="rounded-xl bg-indigo-600 px-4 py-3 font-extrabold text-white">
            <MathText>{"multiplica por 8"}</MathText>
          </span>
                    <span>
            <MathText>{"➜"}</MathText>
          </span>
                    <span className="min-w-18 rounded-xl border-2 border-indigo-300 bg-indigo-50 px-4 py-2 text-center font-extrabold text-indigo-800">
            <MathText>{"sai: \\(8n\\)"}</MathText>
          </span>
        </div>
                <p className="mt-3 leading-7 text-center">
          <MathText>{"Se entra 3, sai \\(8 \\times 3 = 24\\). Se entra 10, sai 80."}</MathText>
        </p>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"2.3 O que é uma letra em álgebra?"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Uma letra representa um "}</MathText>
                    <b>
            <MathText>{"número"}</MathText>
          </b>
          <MathText>{". Ela pode ser de dois jeitos:"}</MathText>
        </p>
                <div className="grid gap-3 mt-4 sm:grid-cols-2 [&_>div]:rounded-2xl [&_>div]:p-4 [&_>div]:text-sm [&_>div]:leading-7 [&_>div]:text-slate-700">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4" style={{ background: "#eef2ff", borderColor: "#c7d2fe"}}>
                        <b>
              <MathText>{"Variável"}</MathText>
            </b>
                        <br />
            <MathText>{"um número que "}</MathText>
                        <u>
              <MathText>{"pode mudar"}</MathText>
            </u>
            <MathText>{". Em \\(8n\\), o número de cadernos \\(n\\) varia: 1, 2, 3…"}</MathText>
          </div>
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4" style={{ background: "#fffbeb", borderColor: "#fde68a"}}>
                        <b>
              <MathText>{"Incógnita"}</MathText>
            </b>
                        <br />
            <MathText>{"um número que "}</MathText>
                        <u>
              <MathText>{"não conhecemos"}</MathText>
            </u>
            <MathText>{" e queremos descobrir. Ex.: “pensei num número, somei 5 e deu 12”."}</MathText>
          </div>
        </div>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50">
                    <b>
            <MathText>{"Regras importantes sobre as letras"}</MathText>
          </b>
                    <ul className="pl-6 mt-3 space-y-1 list-disc leading-7 text-slate-600">
                        <li className="mt-1">
              <MathText>{"Pode ser "}</MathText>
                            <b>
                <MathText>{"qualquer letra"}</MathText>
              </b>
              <MathText>{": \\(x\\), \\(n\\), \\(a\\), \\(b\\)… A letra é só um nome."}</MathText>
            </li>
                        <li className="mt-1">
              <MathText>{"Em um mesmo problema, "}</MathText>
                            <b>
                <MathText>{"a mesma letra representa o mesmo número"}</MathText>
              </b>
              <MathText>{"."}</MathText>
            </li>
                        <li className="mt-1">
              <MathText>{"Letras diferentes "}</MathText>
                            <b>
                <MathText>{"podem"}</MathText>
              </b>
              <MathText>{" ter valores diferentes (ou até iguais)."}</MathText>
            </li>
          </ul>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"2.4 O que é uma expressão algébrica?"}</MathText>
        </h3>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50">
                    <b>
            <MathText>{"Expressão algébrica"}</MathText>
          </b>
          <MathText>{"É uma expressão matemática que tem "}</MathText>
                    <b>
            <MathText>{"letras"}</MathText>
          </b>
          <MathText>{" (e, em geral, números e operações) misturados."}</MathText>
        </div>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"É expressão algébrica ✅"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Não é (só números) ❌"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(8n\\), \\(x + 5\\), \\(2a + 3b\\), \\(\\dfrac{y}{2}\\), \\(x^2\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(3 + 5\\), \\(8 \\times 4\\), \\(2^3 - 1\\) (essas são "}</MathText>
                                <b>
                  <MathText>{"expressões numéricas"}</MathText>
                </b>
                <MathText>{")"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"2.5 Onde você já viu isso?"}</MathText>
        </h3>
                <ul className="pl-6 mt-3 space-y-1 list-disc leading-7 text-slate-600">
                    <li className="mt-1">
            <MathText>{"Fórmulas: “perímetro de um quadrado = 4 × lado”."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Jogos: “pontos = 10 × número de moedas”."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Planilhas e programação: as células e as “variáveis” guardam números que mudam."}</MathText>
          </li>
        </ul>
        <AlgebraQuickCheck index={2} />
      </article>
            <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_b]:text-slate-800" id="l3">
                <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 3"}</MathText>
        </div>
                <h2 className="text-2xl sm:text-3xl font-black mt-1 text-slate-800">
          <MathText>{"Da frase para a álgebra: a linguagem algébrica"}</MathText>
        </h2>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Escrever uma situação em linguagem algébrica é como "}</MathText>
                    <b>
            <MathText>{"traduzir"}</MathText>
          </b>
          <MathText>{" do português para a matemática. Quem domina essa tradução resolve qualquer problema depois."}</MathText>
        </p>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"3.1 O dicionário (com n = 6 como exemplo)"}</MathText>
        </h3>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Em português"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Em álgebra"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Se n = 6"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"o "}</MathText>
                                <b>
                  <MathText>{"dobro"}</MathText>
                </b>
                <MathText>{" de um número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(2n\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"12"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"o "}</MathText>
                                <b>
                  <MathText>{"triplo"}</MathText>
                </b>
                <MathText>{" de um número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(3n\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"18"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"o "}</MathText>
                                <b>
                  <MathText>{"quádruplo"}</MathText>
                </b>
                <MathText>{" de um número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(4n\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"24"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"a "}</MathText>
                                <b>
                  <MathText>{"metade"}</MathText>
                </b>
                <MathText>{" de um número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(\\dfrac{n}{2}\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"3"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"a "}</MathText>
                                <b>
                  <MathText>{"terça parte"}</MathText>
                </b>
                <MathText>{" de um número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(\\dfrac{n}{3}\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"2"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"o "}</MathText>
                                <b>
                  <MathText>{"sucessor"}</MathText>
                </b>
                <MathText>{" de um número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(n + 1\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"7"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"o "}</MathText>
                                <b>
                  <MathText>{"antecessor"}</MathText>
                </b>
                <MathText>{" de um número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(n - 1\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"5"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"um número "}</MathText>
                                <b>
                  <MathText>{"mais"}</MathText>
                </b>
                <MathText>{" 5  ·  5 "}</MathText>
                                <b>
                  <MathText>{"a mais"}</MathText>
                </b>
                <MathText>{" que um número  ·  aumentado em 5"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(n + 5\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"11"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"um número "}</MathText>
                                <b>
                  <MathText>{"menos"}</MathText>
                </b>
                <MathText>{" 3  ·  3 "}</MathText>
                                <b>
                  <MathText>{"a menos"}</MathText>
                </b>
                <MathText>{" que um número  ·  diminuído em 3"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(n - 3\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"3"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"o "}</MathText>
                                <b>
                  <MathText>{"quadrado"}</MathText>
                </b>
                <MathText>{" de um número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(n^2\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"36"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"o "}</MathText>
                                <b>
                  <MathText>{"cubo"}</MathText>
                </b>
                <MathText>{" de um número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(n^3\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"216"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"um número "}</MathText>
                                <b>
                  <MathText>{"par"}</MathText>
                </b>
                <MathText>{" (n é natural)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(2n\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"12"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"um número "}</MathText>
                                <b>
                  <MathText>{"ímpar"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(2n + 1\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"13"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"um "}</MathText>
                                <b>
                  <MathText>{"múltiplo de 5"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(5n\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"30"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Com duas letras"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Em álgebra"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"a "}</MathText>
                                <b>
                  <MathText>{"soma"}</MathText>
                </b>
                <MathText>{" de \\(a\\) e \\(b\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(a + b\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"a "}</MathText>
                                <b>
                  <MathText>{"diferença"}</MathText>
                </b>
                <MathText>{" entre \\(a\\) e \\(b\\) (nessa ordem)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(a - b\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"o "}</MathText>
                                <b>
                  <MathText>{"produto"}</MathText>
                </b>
                <MathText>{" de \\(a\\) por \\(b\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(ab\\) (ou \\(a \\cdot b\\))"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"o "}</MathText>
                                <b>
                  <MathText>{"quociente"}</MathText>
                </b>
                <MathText>{" de \\(a\\) por \\(b\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(\\dfrac{a}{b}\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"3.2 O método da tradução (4 passos)"}</MathText>
        </h3>
                <ol className="pl-6 mt-3 space-y-1 list-decimal leading-7 text-slate-600">
                    <li className="mt-1">
                        <b>
              <MathText>{"Descubra o que é desconhecido"}</MathText>
            </b>
            <MathText>{" (ou o que muda) e dê uma "}</MathText>
                        <b>
              <MathText>{"letra"}</MathText>
            </b>
            <MathText>{" a ele."}</MathText>
          </li>
                    <li className="mt-1">
                        <b>
              <MathText>{"Quebre a frase em pedaços"}</MathText>
            </b>
            <MathText>{" (palavra por palavra)."}</MathText>
          </li>
                    <li className="mt-1">
                        <b>
              <MathText>{"Traduza cada pedaço"}</MathText>
            </b>
            <MathText>{" com o dicionário e junte."}</MathText>
          </li>
                    <li className="mt-1">
                        <b>
              <MathText>{"Teste com um número"}</MathText>
            </b>
            <MathText>{": a expressão e a frase dão o mesmo resultado?"}</MathText>
          </li>
        </ol>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                    <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 1 — “O dobro de um número, mais 5”"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
              <MathText>{"Número desconhecido → \\(n\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"“o dobro de um número” → \\(2n\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"“mais 5” → \\(+ 5\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Expressão: \\(2n + 5\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Teste com \\(n = 3\\): dobro de 3 é 6, mais 5 dá 11. E \\(2 \\cdot 3 + 5 = 11\\) ✓"}</MathText>
            </div>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"3.3 Cuidado com a vírgula e com a ordem!"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"A mesma sequência de palavras pode dar expressões diferentes. Repare:"}</MathText>
        </p>
                <div className="grid gap-3 mt-4 sm:grid-cols-2 [&_>div]:rounded-2xl [&_>div]:p-4 [&_>div]:text-sm [&_>div]:leading-7 [&_>div]:text-slate-700">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                        <b>
              <MathText>{"“O dobro "}</MathText>
                            <u>
                <MathText>{"da soma"}</MathText>
              </u>
              <MathText>{" de um número com 5”"}</MathText>
            </b>
                        <br />
            <MathText>{"Primeiro soma: \\(n + 5\\). Depois dobra "}</MathText>
                        <u>
              <MathText>{"tudo"}</MathText>
            </u>
            <MathText>{": "}</MathText>
                        <b>
              <MathText>{"\\(2(n + 5)\\)"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                        <b>
              <MathText>{"“A soma "}</MathText>
                            <u>
                <MathText>{"do dobro"}</MathText>
              </u>
              <MathText>{" de um número com 5”"}</MathText>
            </b>
                        <br />
            <MathText>{"Primeiro dobra: \\(2n\\). Depois soma 5: "}</MathText>
                        <b>
              <MathText>{"\\(2n + 5\\)"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </div>
        </div>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Teste com \\(n = 3\\): \\(2(3 + 5) = 16\\), mas \\(2 \\cdot 3 + 5 = 11\\). São expressões "}</MathText>
                    <b>
            <MathText>{"diferentes"}</MathText>
          </b>
          <MathText>{"! Os parênteses mostram “o que é dobrado”."}</MathText>
        </p>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50">
                    <b>
            <MathText>{"A ordem da subtração importa"}</MathText>
          </b>
          <MathText>{"“A diferença entre \\(a\\) e 7” é \\(a - 7\\). “7 menos \\(a\\)” é \\(7 - a\\). Se \\(a = 10\\): \\(10 - 7 = 3\\), mas \\(7 - 10\\) nem existe ainda nos naturais. Leia a ordem que a frase manda."}</MathText>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"3.4 Tradução ao contrário (da álgebra para o português)"}</MathText>
        </h3>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Expressão"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Uma frase que a descreve"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(x + 8\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"um número aumentado em 8; 8 a mais que um número"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(3x - 1\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"o triplo de um número, menos 1"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(3(x - 1)\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"o triplo do antecessor de um número"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(\\dfrac{x}{2} + 4\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"a metade de um número, mais 4"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
        <AlgebraQuickCheck index={3} />
                <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto="2">
          <MathText>{"✏️ Treinar: Níveis 2 e 3"}</MathText>
        </button>
      </article>
            <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_b]:text-slate-800" id="l4">
                <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 4"}</MathText>
        </div>
                <h2 className="text-2xl sm:text-3xl font-black mt-1 text-slate-800">
          <MathText>{"Como se escreve uma expressão e quais são as partes dela"}</MathText>
        </h2>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"4.1 As regras de escrita"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Para economizar espaço, a álgebra tem combinações. Elas valem o tempo todo:"}</MathText>
        </p>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Regra"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Em vez de…"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Escreva"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"1."}</MathText>
                </b>
                <MathText>{" Entre número e letra, o sinal de vezes some"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(3 \\cdot x\\) ou \\(3 \\times x\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(3x\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"2."}</MathText>
                </b>
                <MathText>{" O número vai na frente da letra"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(x3\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(3x\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"3."}</MathText>
                </b>
                <MathText>{" Entre duas letras o sinal de vezes também some"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(a \\cdot b\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(ab\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"4."}</MathText>
                </b>
                <MathText>{" Letra vezes ela mesma vira potência"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(x \\cdot x\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(x^2\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"5."}</MathText>
                </b>
                <MathText>{" O número 1 na frente da letra não aparece"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(1x\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(x\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"6."}</MathText>
                </b>
                <MathText>{" Divisão pode virar fração"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(x \\div 2\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(\\dfrac{x}{2}\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"7."}</MathText>
                </b>
                <MathText>{" Número vezes parênteses: o sinal some"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(2 \\cdot (x + 1)\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(2(x + 1)\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50">
                    <b>
            <MathText>{"Atenção!"}</MathText>
          </b>
          <MathText>{"\\(3x\\) "}</MathText>
                    <u>
            <MathText>{"não"}</MathText>
          </u>
          <MathText>{" é \\(3 + x\\) e "}</MathText>
                    <u>
            <MathText>{"não"}</MathText>
          </u>
          <MathText>{" é “trinta e x”. \\(3x\\) significa "}</MathText>
                    <b>
            <MathText>{"3 vezes x"}</MathText>
          </b>
          <MathText>{". Se \\(x = 4\\), então \\(3x = 3 \\times 4 = 12\\) (e não 34!)."}</MathText>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"4.2 As partes de uma expressão"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Uma expressão é feita de pedaços ligados por "}</MathText>
                    <b>
            <MathText>{"+"}</MathText>
          </b>
          <MathText>{" ou "}</MathText>
                    <b>
            <MathText>{"−"}</MathText>
          </b>
          <MathText>{". Cada pedaço é um "}</MathText>
                    <b>
            <MathText>{"termo"}</MathText>
          </b>
          <MathText>{". Veja a expressão \\(4x + 3y - 7\\):"}</MathText>
        </p>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Termo"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Coeficiente"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Parte literal"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Tipo"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(4x\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"4"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(x\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"termo com letra"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(3y\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"3"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(y\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"termo com letra"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(7\\) (vem depois do sinal −)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"7"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"— (não tem letra)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"termo independente"}</MathText>
                </b>
                <MathText>{" (constante)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <div className="grid gap-3 mt-4 sm:grid-cols-2 min-[700px]:grid-cols-3 [&_>div]:rounded-2xl [&_>div]:p-4 [&_>div]:text-sm [&_>div]:leading-7">
                    <div className="bg-indigo-50">
                        <b>
              <MathText>{"Termo"}</MathText>
            </b>
                        <br />
            <MathText>{"cada parte separada por + ou −. Em \\(4x + 3y - 7\\) são "}</MathText>
                        <b>
              <MathText>{"3 termos"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </div>
                    <div className="bg-amber-50">
                        <b>
              <MathText>{"Coeficiente"}</MathText>
            </b>
                        <br />
            <MathText>{"o número que multiplica a letra. Em \\(4x\\) é o 4. Em \\(x\\) o coeficiente é 1 (escondido)."}</MathText>
          </div>
                    <div className="bg-emerald-50">
                        <b>
              <MathText>{"Parte literal"}</MathText>
            </b>
                        <br />
            <MathText>{"a parte com letras. Em \\(4x\\) é \\(x\\). Em \\(5ab\\) é \\(ab\\)."}</MathText>
          </div>
        </div>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50">
                    <b>
            <MathText>{"Termo independente"}</MathText>
          </b>
          <MathText>{"É o termo que "}</MathText>
                    <u>
            <MathText>{"não tem letra"}</MathText>
          </u>
          <MathText>{". Ele não “depende” de nenhum valor: seja qual for o \\(x\\), ele continua o mesmo."}</MathText>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"4.3 Contando termos"}</MathText>
        </h3>
                <ul className="pl-6 mt-3 space-y-1 list-disc leading-7 text-slate-600">
                    <li className="mt-1">
            <MathText>{"\\(5x\\) → 1 termo."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"\\(x + 8\\) → 2 termos (\\(x\\) e \\(8\\))."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"\\(2a + 3b + 9\\) → 3 termos."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"\\(2(x + 1)\\) → 1 termo (o dobro do que está no parêntese)."}</MathText>
          </li>
        </ul>
        <AlgebraQuickCheck index={4} />
        <AlgebraQuickCheck index={5} />
                <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto="1">
          <MathText>{"✏️ Treinar: Nível 1"}</MathText>
        </button>
      </article>
            <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_b]:text-slate-800" id="l5">
                <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 5"}</MathText>
        </div>
                <h2 className="text-2xl sm:text-3xl font-black mt-1 text-slate-800">
          <MathText>{"Valor numérico: trocar a letra por um número e calcular"}</MathText>
        </h2>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"5.1 A ideia"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Uma expressão com letras só vira um "}</MathText>
                    <b>
            <MathText>{"número"}</MathText>
          </b>
          <MathText>{" quando dizemos "}</MathText>
                    <b>
            <MathText>{"quanto vale cada letra"}</MathText>
          </b>
          <MathText>{". Esse número que aparece no final é o "}</MathText>
                    <b>
            <MathText>{"valor numérico"}</MathText>
          </b>
          <MathText>{" da expressão."}</MathText>
        </p>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50">
                    <b>
            <MathText>{"Valor numérico"}</MathText>
          </b>
          <MathText>{"É o resultado que se obtém ao "}</MathText>
                    <b>
            <MathText>{"substituir as letras por números"}</MathText>
          </b>
          <MathText>{" e fazer as contas na ordem certa."}</MathText>
        </div>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                    <span className="min-w-18 rounded-xl border-2 border-indigo-300 bg-indigo-50 px-4 py-2 text-center font-extrabold text-indigo-800">
            <MathText>{"\\(x = 4\\)"}</MathText>
          </span>
                    <span>
            <MathText>{"➜"}</MathText>
          </span>
                    <span className="rounded-xl bg-indigo-600 px-4 py-3 font-extrabold text-white">
            <MathText>{"\\(3x + 5\\)"}</MathText>
          </span>
                    <span>
            <MathText>{"➜"}</MathText>
          </span>
                    <span className="min-w-18 rounded-xl border-2 border-indigo-300 bg-indigo-50 px-4 py-2 text-center font-extrabold text-indigo-800">
            <MathText>{"\\(17\\)"}</MathText>
          </span>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"5.2 A receita no papel (5 passos)"}</MathText>
        </h3>
                <ol className="pl-6 mt-3 space-y-1 list-decimal leading-7 text-slate-600">
                    <li className="mt-1">
                        <b>
              <MathText>{"Escreva a expressão"}</MathText>
            </b>
            <MathText>{" e anote os valores das letras."}</MathText>
          </li>
                    <li className="mt-1">
                        <b>
              <MathText>{"Troque cada letra pelo valor dela"}</MathText>
            </b>
            <MathText>{". Escreva o número no lugar exato da letra."}</MathText>
          </li>
                    <li className="mt-1">
                        <b>
              <MathText>{"Apareça com o sinal de vezes"}</MathText>
            </b>
            <MathText>{" que estava escondido (\\(3x\\) vira \\(3 \\cdot 4\\))."}</MathText>
          </li>
                    <li className="mt-1">
                        <b>
              <MathText>{"Resolva na ordem"}</MathText>
            </b>
            <MathText>{": parênteses → potências → × e ÷ → + e −. Reescreva a conta a cada passo."}</MathText>
          </li>
                    <li className="mt-1">
                        <b>
              <MathText>{"Escreva a resposta"}</MathText>
            </b>
            <MathText>{" e confira se faz sentido."}</MathText>
          </li>
        </ol>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                    <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 1 — Valor numérico de \\(3x + 5\\) para \\(x = 4\\)"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
              <MathText>{"\\(3x + 5\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Troco \\(x\\) por 4: \\(3 \\cdot 4 + 5\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Multiplicação primeiro: \\(12 + 5\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Soma: \\(17\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Resposta: o valor numérico é "}</MathText>
                            <b>
                <MathText>{"17"}</MathText>
              </b>
              <MathText>{"."}</MathText>
            </div>
          </div>
        </div>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                    <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 2 — Com potência: \\(x^2 + 1\\) para \\(x = 5\\)"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
              <MathText>{"\\(x^2 + 1\\)  →  \\(5^2 + 1\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Potência: \\(5^2 = 5 \\cdot 5 = 25\\)  →  \\(25 + 1\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Soma: \\(26\\)"}</MathText>
            </div>
          </div>
        </div>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50">
                    <b>
            <MathText>{"\\(x^2\\) é diferente de \\(2x\\)"}</MathText>
          </b>
          <MathText>{"Com \\(x = 5\\): \\(x^2 = 5 \\cdot 5 = 25\\), mas \\(2x = 2 \\cdot 5 = 10\\)."}</MathText>
        </div>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                    <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 3 — Com parênteses: \\(2(x + 3)\\) para \\(x = 4\\)"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
              <MathText>{"\\(2(x + 3)\\)  →  \\(2 \\cdot (4 + 3)\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Parênteses: \\(4 + 3 = 7\\)  →  \\(2 \\cdot 7\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Multiplicação: \\(14\\)"}</MathText>
            </div>
          </div>
        </div>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                    <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 4 — Duas letras: \\(2a + 3b\\) para \\(a = 5\\) e \\(b = 4\\)"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
              <MathText>{"\\(2a + 3b\\)  →  \\(2 \\cdot 5 + 3 \\cdot 4\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"As duas multiplicações: \\(10 + 12\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Soma: \\(22\\)"}</MathText>
            </div>
          </div>
        </div>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                    <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 5 — Com divisão: \\(\\dfrac{x}{2} + 1\\) para \\(x = 10\\)"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
              <MathText>{"\\(\\dfrac{x}{2} + 1\\) significa \\(x \\div 2 + 1\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Troco: \\(10 \\div 2 + 1\\)  →  \\(5 + 1\\)  →  \\(6\\)"}</MathText>
            </div>
          </div>
        </div>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                    <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 6 — Com decimal: \\(4x\\) para \\(x = 2{,}5\\)"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
              <MathText>{"\\(4 \\cdot 2{,}5 = 10\\)  (4 vezes 2 é 8, e 4 vezes 0,5 é 2: 8 + 2 = 10)"}</MathText>
            </div>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"5.3 A mesma expressão, valores diferentes"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Mudando o valor da letra, o resultado muda. Veja \\(3x + 5\\):"}</MathText>
        </p>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"\\(x\\)"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"0"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"1"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"2"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"3"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"4"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"10"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(3x + 5\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"5"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"8"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"11"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"14"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"17"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"35"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Uma tabela assim mostra bem a ideia de "}</MathText>
                    <b>
            <MathText>{"variável"}</MathText>
          </b>
          <MathText>{": o \\(x\\) varia e o valor da expressão acompanha."}</MathText>
        </p>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"5.4 Dois cuidados que valem nota"}</MathText>
        </h3>
                <div className="grid gap-3 mt-4 sm:grid-cols-2 [&_>div]:rounded-2xl [&_>div]:p-4 [&_>div]:text-sm [&_>div]:leading-7 [&_>div]:text-slate-700">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                        <b>
              <MathText>{"❌ Errado"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(3x\\) com \\(x = 4\\): “34”"}</MathText>
                        <br />
            <MathText>{"Isso é "}</MathText>
                        <u>
              <MathText>{"juntar"}</MathText>
            </u>
            <MathText>{" os números, e não multiplicar."}</MathText>
          </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                        <b>
              <MathText>{"✅ Certo"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(3x = 3 \\cdot 4 = 12\\)"}</MathText>
          </div>
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                        <b>
              <MathText>{"❌ Errado"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(2 + 3x\\), \\(x = 4\\): \\((2+3) \\cdot 4 = 20\\)"}</MathText>
                        <br />
            <MathText>{"Somou antes de multiplicar."}</MathText>
          </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                        <b>
              <MathText>{"✅ Certo"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(2 + 3 \\cdot 4 = 2 + 12 = 14\\)"}</MathText>
          </div>
        </div>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-amber-500 bg-amber-50">
                    <b>
            <MathText>{"Substitua com cuidado em potências com número na frente"}</MathText>
          </b>
          <MathText>{"\\(2x^2\\) com \\(x = 3\\): o expoente 2 pertence só ao \\(x\\): \\(2 \\cdot 3^2 = 2 \\cdot 9 = 18\\). Já \\((2x)^2\\) com \\(x = 3\\) é \\((2 \\cdot 3)^2 = 6^2 = 36\\). Os parênteses mudam tudo."}</MathText>
        </div>
        <AlgebraQuickCheck index={6} />
        <AlgebraQuickCheck index={7} />
        <AlgebraQuickCheck index={8} />
                <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto="4">
          <MathText>{"✏️ Treinar: Níveis 4 a 8"}</MathText>
        </button>
                <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-gotab="ferramentas" style={{ marginLeft: ".5rem" }}>
          <MathText>{"🧮 Abrir a calculadora de valor numérico"}</MathText>
        </button>
      </article>
            <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_b]:text-slate-800" id="l6">
                <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 6"}</MathText>
        </div>
                <h2 className="text-2xl sm:text-3xl font-black mt-1 text-slate-800">
          <MathText>{"Tabelas e padrões: descobrindo a regra geral"}</MathText>
        </h2>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"6.1 Uma figura que cresce"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Com palitos de fósforo, vamos formar quadrados lado a lado. Quantos palitos precisamos?"}</MathText>
        </p>
                <div className="mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center">
          <AlgebraMatchFigures kind="sq" n={1} />
          <AlgebraMatchFigures kind="sq" n={2} />
          <AlgebraMatchFigures kind="sq" n={3} />
        </div>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Quadrados (n)"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"1"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"2"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"3"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"4"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Palitos"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"4"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"7"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"10"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"13"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Cada quadrado a mais precisa de "}</MathText>
                    <b>
            <MathText>{"3 palitos novos"}</MathText>
          </b>
          <MathText>{" (porque um lado já existe). Então a regra sempre soma 3."}</MathText>
        </p>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"6.2 Como achar a regra geral (3 passos)"}</MathText>
        </h3>
                <ol className="pl-6 mt-3 space-y-1 list-decimal leading-7 text-slate-600">
                    <li className="mt-1">
                        <b>
              <MathText>{"Veja quanto cresce"}</MathText>
            </b>
            <MathText>{" de um termo para o próximo (aqui, +3). Esse é o "}</MathText>
                        <b>
              <MathText>{"coeficiente"}</MathText>
            </b>
            <MathText>{" de \\(n\\)."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Monte \\(3n\\) e compare com a tabela: com \\(n = 1\\) dá 3, mas o certo é 4. "}</MathText>
                        <b>
              <MathText>{"Falta 1"}</MathText>
            </b>
            <MathText>{"."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Some o que falta: regra "}</MathText>
                        <b>
              <MathText>{"\\(3n + 1\\)"}</MathText>
            </b>
            <MathText>{". Teste: \\(n = 2 \\to 7\\) ✓, \\(n = 3 \\to 10\\) ✓, \\(n = 4 \\to 13\\) ✓."}</MathText>
          </li>
        </ol>
                <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[\\text{palitos} = 3n + 1\\]"}</MathText>
        </div>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Agora dá para responder sem desenhar: com "}</MathText>
                    <b>
            <MathText>{"20 quadrados"}</MathText>
          </b>
          <MathText>{" são \\(3 \\cdot 20 + 1 = 61\\) palitos. E com 100? \\(3 \\cdot 100 + 1 = 301\\)."}</MathText>
        </p>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                    <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO — Sequência 5, 8, 11, 14, … Qual é a regra?"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
              <MathText>{"Cresce de 3 em 3  ⇒  começa com \\(3n\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"\\(n = 1\\): \\(3 \\cdot 1 = 3\\), mas o 1º termo é 5. Falta 2."}</MathText>
            </div>
                        <div>
              <MathText>{"Regra: \\(3n + 2\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Teste: \\(n = 4 \\to 3 \\cdot 4 + 2 = 14\\) ✓"}</MathText>
            </div>
                        <div>
              <MathText>{"O 10º termo é \\(3 \\cdot 10 + 2 = 32\\)"}</MathText>
            </div>
          </div>
        </div>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-amber-500 bg-amber-50">
                    <b>
            <MathText>{"Truque para achar o “que falta”"}</MathText>
          </b>
          <MathText>{"A regra \\(c \\cdot n + k\\): o "}</MathText>
                    <b>
            <MathText>{"c"}</MathText>
          </b>
          <MathText>{" é o quanto a sequência cresce a cada passo, e o "}</MathText>
                    <b>
            <MathText>{"k"}</MathText>
          </b>
          <MathText>{" é o 1º termo menos o \\(c\\). (Para 5, 8, 11: \\(c = 3\\) e \\(k = 5 - 3 = 2\\).)"}</MathText>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"6.3 Outras regras que você vai encontrar"}</MathText>
        </h3>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Sequência"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Regra"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Por quê?"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"4, 8, 12, 16, …"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(4n\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"múltiplos de 4"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"3, 5, 7, 9, …"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(2n + 1\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"ímpares a partir de 3"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"1, 4, 9, 16, …"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(n^2\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"quadrados perfeitos"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Brinque com o "}</MathText>
                    <b>
            <MathText>{"Laboratório"}</MathText>
          </b>
          <MathText>{" (Experimento 3) para ver os palitos mudando conforme o \\(n\\)."}</MathText>
        </p>
        <AlgebraQuickCheck index={9} />
                <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto="9">
          <MathText>{"✏️ Treinar: Nível 9"}</MathText>
        </button>
                <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-gotab="laboratorio" style={{ marginLeft: ".5rem" }}>
          <MathText>{"🔬 Abrir o Laboratório"}</MathText>
        </button>
      </article>
            <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_b]:text-slate-800" id="l7">
                <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 7"}</MathText>
        </div>
                <h2 className="text-2xl sm:text-3xl font-black mt-1 text-slate-800">
          <MathText>{"Igualdades e valor desconhecido"}</MathText>
        </h2>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"7.1 A balança em equilíbrio"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"O sinal de "}</MathText>
                    <b>
            <MathText>{"igual (=)"}</MathText>
          </b>
          <MathText>{" diz que os dois lados têm o "}</MathText>
                    <b>
            <MathText>{"mesmo valor"}</MathText>
          </b>
          <MathText>{", como uma balança equilibrada. Se existe uma letra, ela é um número desconhecido (incógnita) e queremos descobrir seu valor."}</MathText>
        </p>
                <div className="mt-4 overflow-x-auto rounded-2xl border-2 border-dashed border-indigo-200 bg-white p-3 text-center">
          <AlgebraScaleFigure left="x + 7" right="15" />
        </div>
                <p className="mt-3 leading-7 text-center">
          <MathText>{"\\(x + 7 = 15\\)  →  “um número mais 7 dá 15”. Qual número é esse?"}</MathText>
        </p>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50">
                    <b>
            <MathText>{"Regra de ouro da balança"}</MathText>
          </b>
          <MathText>{"O que você fizer de um lado, "}</MathText>
                    <b>
            <MathText>{"faça do outro"}</MathText>
          </b>
          <MathText>{" também (somar, subtrair, multiplicar ou dividir pelo mesmo número). Assim ela continua equilibrada."}</MathText>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"7.2 Desfazendo as contas (operações inversas)"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Para deixar o \\(x\\) sozinho, "}</MathText>
                    <b>
            <MathText>{"desfaça"}</MathText>
          </b>
          <MathText>{" o que foi feito com ele usando a operação contrária:"}</MathText>
        </p>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Se o x está…"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Faça nos dois lados…"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Exemplo"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"somando um número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"subtraia"}</MathText>
                </b>
                <MathText>{" esse número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(x + 7 = 15 \\to x = 15 - 7\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"subtraindo um número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"some"}</MathText>
                </b>
                <MathText>{" esse número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(x - 6 = 9 \\to x = 9 + 6\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"multiplicado por um número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"divida"}</MathText>
                </b>
                <MathText>{" por esse número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(4x = 28 \\to x = 28 \\div 4\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"dividido por um número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"multiplique"}</MathText>
                </b>
                <MathText>{" por esse número"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(\\dfrac{x}{3} = 5 \\to x = 5 \\cdot 3\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                    <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 1 — \\(x + 7 = 15\\)"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
              <MathText>{"\\(x + 7 = 15\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Tiro 7 dos dois lados: \\(x + 7 - 7 = 15 - 7\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"\\(x = 8\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Confiro: \\(8 + 7 = 15\\) ✓"}</MathText>
            </div>
          </div>
        </div>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                    <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 2 — \\(4x = 28\\)"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
              <MathText>{"\\(4x\\) é “4 vezes x”. Divido os dois lados por 4:"}</MathText>
            </div>
                        <div>
              <MathText>{"\\(\\dfrac{4x}{4} = \\dfrac{28}{4}\\)  ⇒  \\(x = 7\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Confiro: \\(4 \\cdot 7 = 28\\) ✓"}</MathText>
            </div>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"7.3 Quando há duas operações"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Desfaça "}</MathText>
                    <b>
            <MathText>{"na ordem contrária"}</MathText>
          </b>
          <MathText>{" da que foi feita: primeiro a soma ou subtração, depois a multiplicação ou divisão."}</MathText>
        </p>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                    <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"EXEMPLO 3 — \\(2x + 3 = 11\\)"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
              <MathText>{"Primeiro tiro o 3 dos dois lados: \\(2x = 11 - 3\\)  ⇒  \\(2x = 8\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Depois divido por 2: \\(x = 8 \\div 2 = 4\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Confiro: \\(2 \\cdot 4 + 3 = 11\\) ✓"}</MathText>
            </div>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"7.4 Dois casos que pedem raciocínio"}</MathText>
        </h3>
                <ul className="pl-6 mt-3 space-y-1 list-disc leading-7 text-slate-600">
                    <li className="mt-1">
                        <b>
              <MathText>{"\\(10 - x = 4\\)"}</MathText>
            </b>
            <MathText>{": pergunte “10 menos quanto dá 4?”. Resposta: \\(x = 10 - 4 = 6\\)."}</MathText>
          </li>
                    <li className="mt-1">
                        <b>
              <MathText>{"\\(12 \\div x = 3\\)"}</MathText>
            </b>
            <MathText>{": pergunte “12 dividido por quanto dá 3?”. Resposta: \\(x = 12 \\div 3 = 4\\)."}</MathText>
          </li>
        </ul>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-amber-500 bg-amber-50">
                    <b>
            <MathText>{"Sempre confira!"}</MathText>
          </b>
          <MathText>{"Troque o \\(x\\) pelo valor que você achou na igualdade original. Se os dois lados derem o mesmo número, você acertou. Isso é um "}</MathText>
                    <b>
            <MathText>{"valor numérico"}</MathText>
          </b>
          <MathText>{" (lição 5) aplicado dos dois lados."}</MathText>
        </div>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-blue-500 bg-blue-50">
                    <b>
            <MathText>{"Igualdade pode vir “virada”"}</MathText>
          </b>
          <MathText>{"\\(15 = x + 7\\) é a mesma coisa que \\(x + 7 = 15\\)."}</MathText>
        </div>
        <AlgebraQuickCheck index={10} />
        <AlgebraQuickCheck index={11} />
                <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto="12">
          <MathText>{"✏️ Treinar: Níveis 12 e 13"}</MathText>
        </button>
                <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-gotab="laboratorio" style={{ marginLeft: ".5rem" }}>
          <MathText>{"🔬 Balança no Laboratório"}</MathText>
        </button>
      </article>
            <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_b]:text-slate-800" id="l8">
                <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 8 · para ir além"}</MathText>
        </div>
                <h2 className="text-2xl sm:text-3xl font-black mt-1 text-slate-800">
          <MathText>{"Expressões equivalentes: parecem diferentes, valem o mesmo"}</MathText>
        </h2>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Duas expressões são "}</MathText>
                    <b>
            <MathText>{"equivalentes"}</MathText>
          </b>
          <MathText>{" quando dão o "}</MathText>
                    <b>
            <MathText>{"mesmo valor numérico para qualquer valor da letra"}</MathText>
          </b>
          <MathText>{". Veja \\(x + x\\) e \\(2x\\):"}</MathText>
        </p>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"\\(x\\)"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"1"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"2"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"5"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"10"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(x + x\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"2"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"4"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"10"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"20"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(2x\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"2"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"4"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"10"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"20"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Sempre iguais: então \\(x + x = 2x\\)."}</MathText>
        </p>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"8.1 Juntando termos semelhantes"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
                    <b>
            <MathText>{"Termos semelhantes"}</MathText>
          </b>
          <MathText>{" têm a "}</MathText>
                    <u>
            <MathText>{"mesma parte literal"}</MathText>
          </u>
          <MathText>{". Eles podem ser juntados somando (ou subtraindo) os coeficientes, como juntar “3 maçãs + 2 maçãs = 5 maçãs”."}</MathText>
        </p>
                <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[3x + 2x = 5x \\qquad\\quad 7a - 4a = 3a\\]"}</MathText>
        </div>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-red-500 bg-red-50">
                    <b>
            <MathText>{"Só dá para juntar o que é semelhante!"}</MathText>
          </b>
          <MathText>{"\\(3x + 2\\) "}</MathText>
                    <u>
            <MathText>{"não"}</MathText>
          </u>
          <MathText>{" vira \\(5x\\) (uma coisa tem x, a outra não). \\(3x + 2y\\) também não junta (letras diferentes). Teste com \\(x = 1\\): \\(3 + 2 = 5\\), mas \\(5x = 5\\). Parece igual! Teste com \\(x = 2\\): \\(3 \\cdot 2 + 2 = 8\\), mas \\(5 \\cdot 2 = 10\\). Diferentes, então "}</MathText>
                    <u>
            <MathText>{"não são equivalentes"}</MathText>
          </u>
          <MathText>{"."}</MathText>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"8.2 Distribuindo: \\(2(x + 3)\\)"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"\\(2(x + 3)\\) é “2 vezes tudo o que está no parêntese”. Pense na área de um retângulo de altura 2 e base \\(x + 3\\): ela é a soma das áreas de duas partes."}</MathText>
        </p>
                <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[2(x + 3) = 2 \\cdot x + 2 \\cdot 3 = 2x + 6\\]"}</MathText>
        </div>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Teste com \\(x = 4\\): \\(2(4 + 3) = 14\\) e \\(2 \\cdot 4 + 6 = 14\\) ✓."}</MathText>
        </p>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-amber-500 bg-amber-50">
                    <b>
            <MathText>{"Como saber se duas expressões são equivalentes?"}</MathText>
          </b>
                    <br />
          <MathText>{"Calcule o valor numérico das duas para "}</MathText>
                    <b>
            <MathText>{"vários"}</MathText>
          </b>
          <MathText>{" valores. Se algum deles der diferente, "}</MathText>
                    <b>
            <MathText>{"não são"}</MathText>
          </b>
          <MathText>{" equivalentes. Se sempre derem iguais (e você sabe a regra), são equivalentes."}</MathText>
        </div>
        <AlgebraQuickCheck index={12} />
                <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto="14">
          <MathText>{"✏️ Treinar: Nível 14 (desafios)"}</MathText>
        </button>
      </article>
            <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_b]:text-slate-800" id="l9">
                <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 9"}</MathText>
        </div>
                <h2 className="text-2xl sm:text-3xl font-black mt-1 text-slate-800">
          <MathText>{"Para que serve a álgebra?"}</MathText>
        </h2>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Sempre que uma "}</MathText>
                    <b>
            <MathText>{"regra"}</MathText>
          </b>
          <MathText>{" vale para muitos valores diferentes, a álgebra escreve essa regra uma só vez, com uma letra. Isso ajuda quem faz contas, programa, projeta, cozinha ou administra dinheiro."}</MathText>
        </p>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"9.1 Fórmulas que você já conhece"}</MathText>
        </h3>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Situação"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Fórmula"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"O que as letras são"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Perímetro do quadrado"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(P = 4 \\cdot \\ell\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(\\ell\\) = lado"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Perímetro do retângulo"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(P = 2(b + h)\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(b\\) = base, \\(h\\) = altura"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Área do retângulo"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(A = b \\cdot h\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(b\\) = base, \\(h\\) = altura"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Área do quadrado"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(A = \\ell^2\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(\\ell\\) = lado"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Distância percorrida"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(d = v \\cdot t\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(v\\) = velocidade, \\(t\\) = tempo"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Média de dois números"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(M = \\dfrac{a + b}{2}\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(a\\) e \\(b\\) = os números"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Custo com taxa fixa"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(C = f + p \\cdot n\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(f\\) = taxa fixa, \\(p\\) = preço de cada, \\(n\\) = quantidade"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"9.2 Exemplo: corrida de aplicativo"}</MathText>
        </h3>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Um aplicativo cobra "}</MathText>
                    <b>
            <MathText>{"R$ 5 de taxa fixa"}</MathText>
          </b>
          <MathText>{" mais "}</MathText>
                    <b>
            <MathText>{"R$ 2 por quilômetro"}</MathText>
          </b>
          <MathText>{". Chamando de \\(k\\) os quilômetros, o preço é:"}</MathText>
        </p>
                <div className="bg-[#fffef9] border-2 border-indigo-300 rounded-2xl p-5 mt-4 text-center text-xl overflow-x-auto">
          <MathText>{"\\[P = 5 + 2k\\]"}</MathText>
        </div>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"km (\\(k\\))"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"1"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"5"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"10"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"20"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"Preço (R$)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"7"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"15"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"25"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"45"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-3">
                    <div className="text-sm font-bold text-indigo-700 mb-2">
            <MathText>{"Quanto custa uma corrida de 12 km?"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
              <MathText>{"\\(P = 5 + 2k\\), com \\(k = 12\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"\\(P = 5 + 2 \\cdot 12\\)  →  \\(5 + 24\\)  →  \\(29\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Resposta: "}</MathText>
                            <b>
                <MathText>{"R$ 29"}</MathText>
              </b>
            </div>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"9.3 Álgebra em todo lugar"}</MathText>
        </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-sm">
                    <div className="bg-emerald-50 rounded-xl p-4">
                        <b>
              <MathText>{"🍳 Cozinha"}</MathText>
            </b>
                        <br />
            <MathText>{"Uma receita usa 2 ovos para cada pessoa: ovos = \\(2p\\). Para 7 pessoas, \\(2 \\cdot 7 = 14\\) ovos."}</MathText>
          </div>
                    <div className="bg-sky-50 rounded-xl p-4">
                        <b>
              <MathText>{"📱 Celular"}</MathText>
            </b>
                        <br />
            <MathText>{"Plano: R$ 30 fixos + R$ 0,50 por GB extra. Custo = \\(30 + 0{,}5g\\)."}</MathText>
          </div>
                    <div className="bg-amber-50 rounded-xl p-4">
                        <b>
              <MathText>{"🎮 Jogos"}</MathText>
            </b>
                        <br />
            <MathText>{"Pontuação = \\(10m + 50\\) (10 por moeda e 50 de bônus). Os desenvolvedores escrevem isso em código com “variáveis”."}</MathText>
          </div>
                    <div className="bg-rose-50 rounded-xl p-4">
                        <b>
              <MathText>{"🏗️ Construção"}</MathText>
            </b>
                        <br />
            <MathText>{"Para cercar um terreno quadrado de lado \\(\\ell\\): arame = \\(4\\ell\\) metros."}</MathText>
          </div>
        </div>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-emerald-500 bg-emerald-50">
                    <b>
            <MathText>{"Por que a letra ajuda tanto?"}</MathText>
          </b>
          <MathText>{"Você escreve a regra "}</MathText>
                    <b>
            <MathText>{"uma vez"}</MathText>
          </b>
          <MathText>{" e depois só troca o número. É por isso que planilhas, aplicativos e calculadoras funcionam: eles guardam fórmulas."}</MathText>
        </div>
                <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto="10">
          <MathText>{"✏️ Treinar: Nível 10"}</MathText>
        </button>
                <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-gotab="laboratorio" style={{ marginLeft: ".5rem" }}>
          <MathText>{"🔬 Simulador de preços"}</MathText>
        </button>
      </article>
            <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_b]:text-slate-800" id="l10">
                <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 10"}</MathText>
        </div>
                <h2 className="text-2xl sm:text-3xl font-black mt-1 text-slate-800">
          <MathText>{"Resolvendo problemas no papel: o método completo"}</MathText>
        </h2>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Problemas que pedem "}</MathText>
                    <b>
            <MathText>{"interpretação"}</MathText>
          </b>
          <MathText>{" costumam assustar por causa do texto. A solução é um passo a passo fixo. Use esta folha-modelo sempre:"}</MathText>
        </p>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-4">
                    <div className="text-sm font-bold text-indigo-700 mb-3">
            <MathText>{"📝 FOLHA-MODELO (copie no caderno)"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
                            <b>
                <MathText>{"1. Leia"}</MathText>
              </b>
              <MathText>{" o problema duas vezes. Sublinhe os números e a pergunta."}</MathText>
            </div>
                        <div>
                            <b>
                <MathText>{"2. O que muda?"}</MathText>
              </b>
              <MathText>{" (ou o que não sei?) Dê uma "}</MathText>
                            <b>
                <MathText>{"letra"}</MathText>
              </b>
              <MathText>{" a isso."}</MathText>
            </div>
                        <div>
                            <b>
                <MathText>{"3. Expressão"}</MathText>
              </b>
              <MathText>{" — traduza a regra do problema para a álgebra."}</MathText>
            </div>
                        <div>
                            <b>
                <MathText>{"4a. Se pede um valor"}</MathText>
              </b>
              <MathText>{": substitua a letra e calcule (valor numérico)."}</MathText>
            </div>
                        <div>
                            <b>
                <MathText>{"4b. Se há um total dado"}</MathText>
              </b>
              <MathText>{": monte uma "}</MathText>
                            <b>
                <MathText>{"igualdade"}</MathText>
              </b>
              <MathText>{" e descubra a letra."}</MathText>
            </div>
                        <div>
                            <b>
                <MathText>{"5. Responda"}</MathText>
              </b>
              <MathText>{" com uma frase e a "}</MathText>
                            <b>
                <MathText>{"unidade"}</MathText>
              </b>
              <MathText>{" (reais, anos, cm…)."}</MathText>
            </div>
                        <div>
                            <b>
                <MathText>{"6. Confira"}</MathText>
              </b>
              <MathText>{" se a resposta faz sentido no problema."}</MathText>
            </div>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"Como saber se é “valor numérico” ou “igualdade”?"}</MathText>
        </h3>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Se o problema…"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Você faz…"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"diz o valor da letra (ex.: “10 km”) e pergunta o resultado"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"valor numérico"}</MathText>
                </b>
                <MathText>{": substitui e calcula"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"diz o resultado (ex.: “pagou R$ 31”) e pergunta o valor da letra"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"igualdade"}</MathText>
                </b>
                <MathText>{": monta a equação e descobre o desconhecido"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"Exemplo 1 — Pedindo um valor"}</MathText>
        </h3>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-3">
                    <div className="text-sm font-bold text-indigo-700 mb-3">
            <MathText>{"“Uma lanchonete cobra R$ 6 por sanduíche e R$ 4 por um suco. Quanto custa um pedido com 3 sanduíches e 1 suco?”"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
                            <b>
                <MathText>{"O que muda?"}</MathText>
              </b>
              <MathText>{" O número de sanduíches → \\(s\\)"}</MathText>
            </div>
                        <div>
                            <b>
                <MathText>{"Expressão:"}</MathText>
              </b>
              <MathText>{" cada sanduíche custa 6, e o suco soma 4: \\(6s + 4\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Substituo \\(s = 3\\): \\(6 \\cdot 3 + 4\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Multiplicação: \\(18 + 4\\)  →  \\(22\\)"}</MathText>
            </div>
                        <div>
                            <b>
                <MathText>{"Resposta:"}</MathText>
              </b>
              <MathText>{" o pedido custa R$ 22."}</MathText>
            </div>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"Exemplo 2 — Descobrindo o desconhecido"}</MathText>
        </h3>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-3">
                    <div className="text-sm font-bold text-indigo-700 mb-3">
            <MathText>{"“Um táxi cobra R$ 5 fixos mais R$ 2 por km. Rita pagou R$ 31. Quantos km ela rodou?”"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
                            <b>
                <MathText>{"O que não sei?"}</MathText>
              </b>
              <MathText>{" Os quilômetros → \\(k\\)"}</MathText>
            </div>
                        <div>
                            <b>
                <MathText>{"Preço:"}</MathText>
              </b>
              <MathText>{" \\(5 + 2k\\). Rita pagou 31, então: \\(5 + 2k = 31\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Tiro 5 dos dois lados: \\(2k = 26\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Divido por 2: \\(k = 13\\)"}</MathText>
            </div>
                        <div>
                            <b>
                <MathText>{"Confiro:"}</MathText>
              </b>
              <MathText>{" \\(5 + 2 \\cdot 13 = 31\\) ✓"}</MathText>
            </div>
                        <div>
                            <b>
                <MathText>{"Resposta:"}</MathText>
              </b>
              <MathText>{" Rita rodou 13 km."}</MathText>
            </div>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"Exemplo 3 — “Pensei em um número”"}</MathText>
        </h3>
                <div className="bg-[#fffef9] border border-indigo-200 rounded-2xl shadow-[0_8px_24px_rgba(30,27,75,0.05)] bg-[linear-gradient(to_bottom,transparent_31px,#e0e7ff_32px)] bg-[length:100%_2rem] rounded-xl p-5 mt-3">
                    <div className="text-sm font-bold text-indigo-700 mb-3">
            <MathText>{"“Pensei em um número, multipliquei por 3 e somei 4. O resultado foi 25. Que número pensei?”"}</MathText>
          </div>
                    <div className="font-[cursive] text-xl leading-8 text-blue-900">
                        <div>
              <MathText>{"Número desconhecido: \\(n\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Multiplicou por 3: \\(3n\\); somou 4: \\(3n + 4\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Resultado 25: \\(3n + 4 = 25\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Tiro 4: \\(3n = 21\\)  →  divido por 3: \\(n = 7\\)"}</MathText>
            </div>
                        <div>
              <MathText>{"Confiro: \\(3 \\cdot 7 + 4 = 25\\) ✓"}</MathText>
            </div>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"Truques quando travar"}</MathText>
        </h3>
                <ul className="pl-6 mt-3 space-y-1 list-disc leading-7 text-slate-600">
                    <li className="mt-1">
                        <b>
              <MathText>{"Teste com números fáceis"}</MathText>
            </b>
            <MathText>{": se não sabe a regra, calcule o preço de 1, 2 e 3 itens e veja o padrão."}</MathText>
          </li>
                    <li className="mt-1">
                        <b>
              <MathText>{"Desenhe"}</MathText>
            </b>
            <MathText>{" uma barra ou um esquema."}</MathText>
          </li>
                    <li className="mt-1">
                        <b>
              <MathText>{"Palavras-chave"}</MathText>
            </b>
            <MathText>{": “a mais”, “ganhou”, “total” → soma; “a menos”, “gastou”, “sobrou” → subtração; “cada”, “por”, “vezes” → multiplicação; “repartiu”, “igualmente” → divisão."}</MathText>
          </li>
        </ul>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"Checklist final"}</MathText>
        </h3>
                <ul className="pl-6 mt-3 space-y-1 list-disc leading-7 text-slate-600">
                    <li className="mt-1">
            <MathText>{"Escrevi o que a letra significa?"}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"A resposta tem unidade e faz sentido (por exemplo, não existe “−3 pessoas”)?"}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Substituí na história para conferir?"}</MathText>
          </li>
        </ul>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-emerald-500 bg-emerald-50">
                    <b>
            <MathText>{"Calculadoras"}</MathText>
          </b>
          <MathText>{"Na aba “Calculadoras” você digita a expressão e os valores e vê o passo a passo no formato desta folha-modelo."}</MathText>
        </div>
                <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto="11">
          <MathText>{"✏️ Treinar: Nível 11 (interpretação)"}</MathText>
        </button>
                <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto="13" style={{ marginLeft: ".5rem" }}>
          <MathText>{"✏️ Nível 13 (interpretação com igualdade)"}</MathText>
        </button>
      </article>
            <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_b]:text-slate-800" id="l11">
                <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 11"}</MathText>
        </div>
                <h2 className="text-2xl sm:text-3xl font-black mt-1 text-slate-800">
          <MathText>{"Erros comuns (e como evitar)"}</MathText>
        </h2>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"1. Juntar os números em vez de multiplicar"}</MathText>
        </h3>
                <div className="grid gap-3 mt-4 sm:grid-cols-2 [&_>div]:rounded-2xl [&_>div]:p-4 [&_>div]:text-sm [&_>div]:leading-7 [&_>div]:text-slate-700">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                        <b>
              <MathText>{"❌ Errado"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(3x\\) com \\(x = 4\\) → “34”"}</MathText>
          </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                        <b>
              <MathText>{"✅ Certo"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(3x = 3 \\cdot 4 = 12\\)"}</MathText>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"2. Confundir \\(x^2\\) com \\(2x\\)"}</MathText>
        </h3>
                <div className="grid gap-3 mt-4 sm:grid-cols-2 [&_>div]:rounded-2xl [&_>div]:p-4 [&_>div]:text-sm [&_>div]:leading-7 [&_>div]:text-slate-700">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                        <b>
              <MathText>{"❌ Errado"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(x^2\\) com \\(x = 5\\) → \\(2 \\cdot 5 = 10\\)"}</MathText>
          </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                        <b>
              <MathText>{"✅ Certo"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(x^2 = 5 \\cdot 5 = 25\\)"}</MathText>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"3. Elevar também o número da frente"}</MathText>
        </h3>
                <div className="grid gap-3 mt-4 sm:grid-cols-2 [&_>div]:rounded-2xl [&_>div]:p-4 [&_>div]:text-sm [&_>div]:leading-7 [&_>div]:text-slate-700">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                        <b>
              <MathText>{"❌ Errado"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(2x^2\\) com \\(x = 3\\) → \\((2 \\cdot 3)^2 = 36\\)"}</MathText>
          </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                        <b>
              <MathText>{"✅ Certo"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(2 \\cdot 3^2 = 2 \\cdot 9 = 18\\)"}</MathText>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"4. Errar a ordem das operações"}</MathText>
        </h3>
                <div className="grid gap-3 mt-4 sm:grid-cols-2 [&_>div]:rounded-2xl [&_>div]:p-4 [&_>div]:text-sm [&_>div]:leading-7 [&_>div]:text-slate-700">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                        <b>
              <MathText>{"❌ Errado"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(2 + 3x\\), \\(x = 4\\) → \\(5 \\cdot 4 = 20\\)"}</MathText>
          </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                        <b>
              <MathText>{"✅ Certo"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(2 + 3 \\cdot 4 = 2 + 12 = 14\\)"}</MathText>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"5. Traduzir “o dobro da soma” sem parênteses"}</MathText>
        </h3>
                <div className="grid gap-3 mt-4 sm:grid-cols-2 [&_>div]:rounded-2xl [&_>div]:p-4 [&_>div]:text-sm [&_>div]:leading-7 [&_>div]:text-slate-700">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                        <b>
              <MathText>{"❌ Errado"}</MathText>
            </b>
                        <br />
            <MathText>{"“o dobro da soma de \\(x\\) e 3” → \\(2x + 3\\)"}</MathText>
          </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                        <b>
              <MathText>{"✅ Certo"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(2(x + 3)\\)"}</MathText>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"6. Juntar termos que não são semelhantes"}</MathText>
        </h3>
                <div className="grid gap-3 mt-4 sm:grid-cols-2 [&_>div]:rounded-2xl [&_>div]:p-4 [&_>div]:text-sm [&_>div]:leading-7 [&_>div]:text-slate-700">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                        <b>
              <MathText>{"❌ Errado"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(3x + 2 = 5x\\) (ou \\(x + x = x^2\\))"}</MathText>
          </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                        <b>
              <MathText>{"✅ Certo"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(3x + 2\\) não se junta. E \\(x + x = 2x\\)."}</MathText>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"7. Fazer a operação errada ao desfazer"}</MathText>
        </h3>
                <div className="grid gap-3 mt-4 sm:grid-cols-2 [&_>div]:rounded-2xl [&_>div]:p-4 [&_>div]:text-sm [&_>div]:leading-7 [&_>div]:text-slate-700">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                        <b>
              <MathText>{"❌ Errado"}</MathText>
            </b>
                        <br />
            <MathText>{"\\(x + 5 = 12 \\to x = 12 + 5 = 17\\)"}</MathText>
          </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                        <b>
              <MathText>{"✅ Certo"}</MathText>
            </b>
                        <br />
            <MathText>{"Para desfazer “+ 5”, subtraia: \\(x = 12 - 5 = 7\\)"}</MathText>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"8. Esquecer de conferir e de dar a unidade"}</MathText>
        </h3>
                <div className="grid gap-3 mt-4 sm:grid-cols-2 [&_>div]:rounded-2xl [&_>div]:p-4 [&_>div]:text-sm [&_>div]:leading-7 [&_>div]:text-slate-700">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                        <b>
              <MathText>{"❌ Errado"}</MathText>
            </b>
                        <br />
            <MathText>{"“A resposta é 13.”"}</MathText>
          </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                        <b>
              <MathText>{"✅ Certo"}</MathText>
            </b>
                        <br />
            <MathText>{"“Rita rodou 13 km.” (e confiro: \\(5 + 2 \\cdot 13 = 31\\) ✓)"}</MathText>
          </div>
        </div>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"9. Achar que letras diferentes têm valores diferentes sempre"}</MathText>
        </h3>
                <div className="grid gap-3 mt-4 sm:grid-cols-2 [&_>div]:rounded-2xl [&_>div]:p-4 [&_>div]:text-sm [&_>div]:leading-7 [&_>div]:text-slate-700">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                        <b>
              <MathText>{"❌ Errado"}</MathText>
            </b>
                        <br />
            <MathText>{"“\\(a\\) e \\(b\\) nunca podem valer o mesmo número.”"}</MathText>
          </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                        <b>
              <MathText>{"✅ Certo"}</MathText>
            </b>
                        <br />
            <MathText>{"Podem sim! Só não é obrigatório. A mesma letra, no mesmo problema, vale sempre o mesmo número."}</MathText>
          </div>
        </div>
      </article>
            <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 [&_b]:text-slate-800" id="l12">
                <div className="text-[.7rem] font-extrabold tracking-[.12em] uppercase text-indigo-600">
          <MathText>{"Lição 12"}</MathText>
        </div>
                <h2 className="text-2xl sm:text-3xl font-black mt-1 text-slate-800">
          <MathText>{"Resumo e folha de cola"}</MathText>
        </h2>
                <p className="mt-3 leading-7 text-slate-600">
          <MathText>{"Se for imprimir, esta é a lição para guardar."}</MathText>
        </p>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Assunto"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"Resumo"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"Letra"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"representa um número (que pode variar ou ser desconhecido)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"Expressão algébrica"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"tem letras, números e operações. Ex.: \\(3x + 5\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"Notação"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(3 \\cdot x = 3x\\)  ·  \\(a \\cdot b = ab\\)  ·  \\(x \\cdot x = x^2\\)  ·  \\(1x = x\\)  ·  \\(x \\div 2 = \\tfrac{x}{2}\\)  ·  \\(2 \\cdot (x+1) = 2(x+1)\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"Termo"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"cada parte separada por + ou −"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"Coeficiente"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"número que multiplica a letra (\\(4x\\) → 4)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"Parte literal"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"a parte com letras (\\(4x\\) → \\(x\\))"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"Termo independente"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"termo sem letra (constante)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"Valor numérico"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"resultado da expressão depois de trocar as letras por números"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"Ordem das operações"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"parênteses → potências → × e ÷ → + e −"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"Regra de um padrão"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"cresce \\(c\\) por passo ⇒ \\(c \\cdot n + k\\), com \\(k = 1^\\circ\\ \\text{termo} - c\\)"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"Igualdade"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"faça nos dois lados a operação "}</MathText>
                                <b>
                  <MathText>{"inversa"}</MathText>
                </b>
                <MathText>{"; confira no final"}</MathText>
              </td>
            </tr>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                                <b>
                  <MathText>{"Equivalentes"}</MathText>
                </b>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"mesmo valor para qualquer valor da letra (\\(x + x = 2x\\))"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"Dicionário rápido"}</MathText>
        </h3>
                <table className="relative block w-full border-collapse overflow-x-auto relative block w-full border-collapse mt-4 text-sm overflow-x-auto">
                    <thead>
                        <tr>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"dobro"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"triplo"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"metade"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"sucessor"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"antecessor"}</MathText>
              </th>
                            <th className="bg-indigo-100 text-indigo-900 text-left p-2 font-extrabold whitespace-nowrap">
                <MathText>{"quadrado"}</MathText>
              </th>
            </tr>
          </thead>
                    <tbody>
                        <tr>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(2n\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(3n\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(\\tfrac{n}{2}\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(n+1\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(n-1\\)"}</MathText>
              </td>
                            <td className="border-t border-slate-100 p-2 text-slate-600 align-top">
                <MathText>{"\\(n^2\\)"}</MathText>
              </td>
            </tr>
          </tbody>
        </table>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"Receita do valor numérico"}</MathText>
        </h3>
                <ol className="pl-6 mt-3 space-y-1 list-decimal leading-7 text-slate-600">
                    <li className="mt-1">
            <MathText>{"Escreva a expressão e os valores."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Troque a letra pelo número."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Mostre o “vezes” escondido."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Resolva na ordem, reescrevendo a conta a cada passo."}</MathText>
          </li>
                    <li className="mt-1">
            <MathText>{"Escreva a resposta e confira."}</MathText>
          </li>
        </ol>
                <h3 className="font-extrabold text-lg mt-7 text-indigo-800">
          <MathText>{"Glossário"}</MathText>
        </h3>
                <ul className="pl-6 mt-3 space-y-1 list-disc leading-7 text-slate-600">
                    <li className="mt-1">
                        <b>
              <MathText>{"Variável"}</MathText>
            </b>
            <MathText>{": letra que pode assumir vários valores. "}</MathText>
                        <b>
              <MathText>{"Incógnita"}</MathText>
            </b>
            <MathText>{": letra cujo valor queremos descobrir."}</MathText>
          </li>
                    <li className="mt-1">
                        <b>
              <MathText>{"Substituir"}</MathText>
            </b>
            <MathText>{": trocar a letra pelo número. "}</MathText>
                        <b>
              <MathText>{"Equivalentes"}</MathText>
            </b>
            <MathText>{": expressões com o mesmo valor para qualquer número."}</MathText>
          </li>
        </ul>
                <div className="rounded-2xl p-4 mt-4 text-sm leading-7 text-slate-700 border-l-4 border-emerald-500 bg-emerald-50">
                    <b>
            <MathText>{"Você chegou ao fim da teoria! 🎉"}</MathText>
          </b>
          <MathText>{"Agora vá para os exercícios e avance nível por nível. Se travar, volte à lição indicada no "}</MathText>
                    <a className="underline font-bold text-indigo-700" href="#l0">
            <MathText>{"mapa do curso"}</MathText>
          </a>
          <MathText>{"."}</MathText>
        </div>
                <button className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl px-4 py-2 text-sm" data-goto="all">
          <MathText>{"✏️ Ir para os exercícios"}</MathText>
        </button>
      </article>
    </div>
  </div>
</section>
  );
}
