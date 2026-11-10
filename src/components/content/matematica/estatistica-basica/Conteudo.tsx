import CourseHeader from "../../../header/CourseHeader.component";
import { MathRenderer } from "../../../Math/MathRenderer";
import { Link } from "react-router-dom";

function Formula({ expression }: { expression: string }) {
  return (
    <div className='paper rounded-xl p-4 sm:p-5 mt-4 text-center overflow-x-auto'>
      <MathRenderer display expression={expression} />
    </div>
  );
}

function SectionTitle({
  number,
  children,
}: {
  number: string;
  children: string;
}) {
  return (
    <div className='flex items-center gap-3 mb-4'>
      <span className='w-9 h-9 shrink-0 rounded-full bg-emerald-100 text-emerald-800 grid place-items-center font-black'>
        {number}
      </span>
      <h2 className='text-2xl font-black text-slate-900'>{children}</h2>
    </div>
  );
}

const scoreRows = [
  ["5", "1", "1", "16,7%"],
  ["6", "1", "2", "16,7%"],
  ["7", "1", "3", "16,7%"],
  ["8", "3", "6", "50%"],
];

export function StatisticsTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='Estatística descritiva · do começo ao cálculo'
        title='Entenda os dados e o que eles contam'
        description='Estatística é uma maneira organizada de transformar observações em
          informação. Ela ajuda a responder perguntas como “qual nota é
          típica?”, “os resultados são parecidos?” e “o que mudou entre dois
          grupos?”. Vamos aprender a organizar os dados, calcular as medidas à
          mão e interpretar o resultado.'
        bgClass='bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-950 text-white shadow-xl'
        stats={[
          { value: "1", label: "organize os dados" },
          { value: "2", label: "medidas de centro" },
          { value: "3", label: "medidas de dispersão" },
          { value: "200", label: "exercícios progressivos" },
        ]}
      />

      <section className='bg-white rounded-2xl border p-6 sm:p-8 shadow-sm'>
        <SectionTitle number='1'>
          O que é estatística e para que serve?
        </SectionTitle>
        <p className='text-slate-600 leading-7'>
          Imagine que uma escola queira saber como foi o desempenho de uma
          turma. A lista de notas, sozinha, é difícil de resumir. A estatística
          organiza essa lista, encontra padrões e ajuda a comunicar uma
          conclusão. Ela aparece em pesquisas, esportes, saúde, notícias,
          orçamento e decisões do dia a dia.
        </p>
        <div className='grid md:grid-cols-2 gap-4 mt-5'>
          <article className='bg-emerald-50 rounded-xl p-5'>
            <h3 className='font-black text-emerald-900'>População e amostra</h3>
            <p className='text-sm text-slate-700 mt-2'>
              <b>População</b> é o grupo completo que queremos estudar. Se
              queremos conhecer as notas de todos os alunos da escola, todos
              eles formam a população. Uma <b>amostra</b> é uma parte desse
              grupo. Uma amostra só representa bem a população se for escolhida
              de modo adequado, sem selecionar apenas pessoas que confirmem uma
              expectativa.
            </p>
          </article>
          <article className='bg-teal-50 rounded-xl p-5'>
            <h3 className='font-black text-teal-900'>
              Dado, indivíduo e variável
            </h3>
            <p className='text-sm text-slate-700 mt-2'>
              Cada pessoa ou objeto observado é um <b>indivíduo</b>. A
              característica que registramos é a <b>variável</b>; seu valor
              observado é um <b>dado</b>. Exemplo: para cada aluno (indivíduo),
              registramos a nota da prova (variável) e observamos valores como
              6, 8 e 9 (dados).
            </p>
          </article>
        </div>
        <div className='grid md:grid-cols-3 gap-3 mt-4 text-sm'>
          <div className='border rounded-xl p-4'>
            <b>Qualitativa</b>
            <p className='text-slate-600 mt-1'>
              Categoria, não quantidade: cor favorita, tipo de transporte,
              opinião.
            </p>
          </div>
          <div className='border rounded-xl p-4'>
            <b>Quantitativa discreta</b>
            <p className='text-slate-600 mt-1'>
              Contagem: número de irmãos, livros ou gols.
            </p>
          </div>
          <div className='border rounded-xl p-4'>
            <b>Quantitativa contínua</b>
            <p className='text-slate-600 mt-1'>
              Medida que pode assumir valores entre outros: altura, tempo ou
              massa.
            </p>
          </div>
        </div>
        <p className='text-sm text-slate-500 mt-4'>
          Nesta matéria, a maior parte dos exemplos usa estatística descritiva:
          resumimos os dados que observamos. Quando usamos uma amostra para
          tirar conclusões sobre toda uma população, precisamos considerar
          também o modo como a amostra foi escolhida e a incerteza envolvida.
        </p>
      </section>

      <section className='bg-white rounded-2xl border p-6 sm:p-8 shadow-sm'>
        <SectionTitle number='2'>
          Um roteiro para resolver problemas em papel
        </SectionTitle>
        <ol className='grid sm:grid-cols-2 gap-3 text-sm'>
          {[
            [
              "Leia a pergunta",
              "Descubra o que querem saber: um centro, uma frequência, uma comparação ou o espalhamento dos dados.",
            ],
            [
              "Identifique o grupo",
              "Anote quem ou o que está sendo observado e qual característica foi medida.",
            ],
            [
              "Organize os valores",
              "Confira se todos os dados foram copiados. Para mediana, ordene do menor para o maior e forme o rol.",
            ],
            [
              "Escolha a medida",
              "Média, mediana, moda e dispersão respondem a perguntas diferentes. Não comece uma fórmula antes de saber o que ela mede.",
            ],
            [
              "Mostre as contas",
              "Escreva a soma, a quantidade, os produtos por frequência ou os desvios. Assim, outra pessoa consegue acompanhar seu raciocínio.",
            ],
            [
              "Interprete o resultado",
              "Responda com uma frase, unidade e contexto. Verifique se o número é possível e se ele responde à pergunta.",
            ],
          ].map(([heading, description], i) => (
            <li key={heading} className='rounded-xl border bg-slate-50 p-4'>
              <b className='text-emerald-800'>
                {i + 1}. {heading}
              </b>
              <p className='text-slate-600 mt-1'>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className='bg-white rounded-2xl border p-6 sm:p-8 shadow-sm'>
        <SectionTitle number='3'>Da lista solta ao rol e à tabela</SectionTitle>
        <p className='text-slate-600 leading-7'>
          Os dados como foram anotados são os <b>dados brutos</b>. O <b>rol</b>{" "}
          é a lista organizada em ordem crescente ou decrescente. A ordem não
          altera os dados, mas facilita achar posições e conferir valores.
        </p>
        <div className='grid md:grid-cols-2 gap-4 mt-4'>
          <div className='rounded-xl bg-slate-50 border p-5'>
            <b>Notas anotadas (dados brutos)</b>
            <p className='font-mono text-lg mt-2'>8, 5, 8, 7, 6, 8</p>
            <b className='block mt-4'>Rol crescente</b>
            <p className='font-mono text-lg mt-2'>5, 6, 7, 8, 8, 8</p>
          </div>
          <div className='rounded-xl bg-emerald-50 p-5'>
            <b>Frequência</b>
            <p className='text-sm text-slate-700 mt-2'>
              A frequência absoluta <MathRenderer expression='f_i' /> conta
              quantas vezes um valor aparece. A frequência acumulada soma as
              frequências até aquela linha. A frequência relativa divide a
              frequência pelo total de observações.
            </p>
            <Formula
              expression={String.raw`f_{rel}=\frac{f_i}{n}\qquad\text{percentual}=\frac{f_i}{n}\times100\%`}
            />
          </div>
        </div>
        <p className='text-xs text-slate-500 mt-2'>
          Percentuais da tabela arredondados para uma casa decimal; por isso, a
          soma exibida pode diferir ligeiramente de 100%.
        </p>
        <div className='overflow-x-auto mt-5'>
          <table className='w-full text-sm border-collapse text-center'>
            <thead>
              <tr className='bg-emerald-100 text-emerald-950'>
                <th className='border p-2'>Nota (x)</th>
                <th className='border p-2'>Frequência absoluta (f)</th>
                <th className='border p-2'>Acumulada (F)</th>
                <th className='border p-2'>Relativa</th>
              </tr>
            </thead>
            <tbody>
              {scoreRows.map((row) => (
                <tr key={row[0]} className='bg-white'>
                  <td className='border p-2'>{row[0]}</td>
                  <td className='border p-2'>{row[1]}</td>
                  <td className='border p-2'>{row[2]}</td>
                  <td className='border p-2'>{row[3]}</td>
                </tr>
              ))}
              <tr className='bg-slate-50 font-bold'>
                <td className='border p-2'>Total</td>
                <td className='border p-2'>6</td>
                <td className='border p-2'>6</td>
                <td className='border p-2'>100%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='text-sm text-slate-600 mt-3'>
          Para montar a tabela à mão: liste cada valor diferente uma vez, faça
          marcas de contagem ao percorrer os dados e depois some as frequências.
          A soma das frequências absolutas precisa ser o número total de dados (
          <MathRenderer expression='n=6' /> neste exemplo).
        </p>
      </section>

      <section className='grid lg:grid-cols-3 gap-5'>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 grid place-items-center font-black'>
              <MathRenderer expression='\\bar{x}' />
            </span>
            <h2 className='text-xl font-black'>Média aritmética</h2>
          </div>
          <p className='mt-4 text-slate-600 text-sm leading-6'>
            A média reparte o total igualmente entre os dados; também pode ser
            vista como um ponto de equilíbrio. Some todos os valores e divida
            pela quantidade de valores. A letra <MathRenderer expression='n' />{" "}
            representa essa quantidade.
          </p>
          <Formula
            expression={String.raw`\bar{x}=\frac{x_1+x_2+\cdots+x_n}{n}=\frac{\text{soma dos valores}}{\text{quantidade}}`}
          />
          <div className='bg-emerald-50 rounded-xl p-4 mt-4 text-sm'>
            <b>Conta no papel</b>
            <ol className='list-decimal list-inside mt-2 space-y-1'>
              <li>Some: 2 + 4 + 6 = 12.</li>
              <li>Conte os valores: são 3.</li>
              <li>Divida: 12 ÷ 3 = 4.</li>
            </ol>
            <p className='mt-2'>
              A média é 4. Ela não precisa ser um dos valores da lista.
            </p>
          </div>
          <p className='text-xs text-slate-500 mt-3'>
            Se os dados forem notas, a média fica na mesma escala das notas.
          </p>
        </article>

        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-amber-100 text-amber-800 grid place-items-center font-black'>
              Md
            </span>
            <h2 className='text-xl font-black'>Mediana</h2>
          </div>
          <p className='mt-4 text-slate-600 text-sm leading-6'>
            A mediana é o valor que fica no meio do rol: depois de ordenar,
            cerca de metade dos dados fica de cada lado.{" "}
            <b>
              Sem ordenar, não é possível localizar a mediana com segurança.
            </b>
          </p>
          <div className='bg-amber-50 rounded-xl p-4 mt-4 text-sm border border-amber-100'>
            <b className='text-amber-900'>Quantidade ímpar</b>
            <p className='text-slate-700 mt-1'>
              Há um único valor central. Para encontrar sua posição, use{" "}
              <MathRenderer expression={String.raw`\frac{n+1}{2}`} />.
            </p>
            <p className='mt-2'>
              Rol: 2, 4, <b>5</b>, 7, 9. São 5 dados; o termo central está na
              posição <MathRenderer expression={String.raw`(5+1)\div2=3`} />.
              Mediana = 5.
            </p>
          </div>
          <div className='bg-amber-50 rounded-xl p-4 mt-3 text-sm border border-amber-100'>
            <b className='text-amber-900'>Quantidade par</b>
            <p className='text-slate-700 mt-1'>
              Os dois valores centrais ficam nas posições{" "}
              <MathRenderer expression={String.raw`\frac{n}{2}`} /> e{" "}
              <MathRenderer expression={String.raw`\frac{n}{2}+1`} />. Calcule a
              média deles.
            </p>
            <Formula
              expression={String.raw`Md=\frac{x_{(n/2)}+x_{(n/2+1)}}{2}`}
            />
            <p className='mt-2'>
              Rol: 1, 2, 5, 8. Os termos centrais são 2 e 5;{" "}
              <MathRenderer expression={String.raw`Md=(2+5)\div2=3{,}5`} />.
            </p>
          </div>
          <p className='text-xs text-slate-500 mt-3'>
            Na fórmula, <MathRenderer expression='x_{(k)}' /> significa o valor
            que ocupa a posição <MathRenderer expression='k' /> depois que a
            lista foi ordenada.
          </p>
        </article>

        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <div className='flex items-center gap-3'>
            <span className='w-9 h-9 rounded-full bg-rose-100 text-rose-800 grid place-items-center font-black'>
              Mo
            </span>
            <h2 className='text-xl font-black'>Moda</h2>
          </div>
          <p className='mt-4 text-slate-600 text-sm leading-6'>
            A moda é o valor ou categoria que aparece mais vezes. Conte as
            repetições; não some os valores para encontrá-la.
          </p>
          <div className='space-y-2 mt-4 text-sm'>
            <div className='bg-rose-50 rounded-xl p-4'>
              <b>Uma moda:</b> 2, 2, 3, 5 → moda 2 (unimodal).
            </div>
            <div className='bg-rose-50 rounded-xl p-4'>
              <b>Duas modas:</b> 1, 1, 2, 2, 5 → modas 1 e 2 (bimodal).
            </div>
            <div className='bg-rose-50 rounded-xl p-4'>
              <b>Sem moda:</b> 4, 5, 6 → nenhum valor se repete (amodal).
            </div>
          </div>
          <p className='text-xs text-slate-500 mt-3'>
            Diferentemente da média, a moda também pode resumir categorias, como
            a cor favorita mais escolhida.
          </p>
        </article>
      </section>

      <section className='bg-white rounded-2xl border p-6 sm:p-8 shadow-sm'>
        <SectionTitle number='4'>Qual medida de centro devo usar?</SectionTitle>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm border-collapse'>
            <thead>
              <tr className='bg-teal-50'>
                <th className='border p-3 text-left'>Medida</th>
                <th className='border p-3 text-left'>Use quando...</th>
                <th className='border p-3 text-left'>Cuidado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border p-3 font-bold'>Média</td>
                <td className='border p-3'>
                  Os valores numéricos devem contribuir todos para o resultado e
                  não há extremos que distorçam o resumo.
                </td>
                <td className='border p-3'>
                  É afetada por valores muito altos ou muito baixos.
                </td>
              </tr>
              <tr>
                <td className='border p-3 font-bold'>Mediana</td>
                <td className='border p-3'>
                  Queremos o centro da lista ordenada, especialmente quando há
                  valores extremos ou uma distribuição desigual.
                </td>
                <td className='border p-3'>
                  Não usa a distância entre todos os valores; depende das
                  posições centrais.
                </td>
              </tr>
              <tr>
                <td className='border p-3 font-bold'>Moda</td>
                <td className='border p-3'>
                  Queremos saber o valor ou categoria mais frequente.
                </td>
                <td className='border p-3'>
                  Pode haver mais de uma moda ou nenhuma repetição.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='grid md:grid-cols-2 gap-4 mt-5'>
          <div className='bg-rose-50 rounded-xl p-5'>
            <b>Por que valores extremos importam?</b>
            <p className='text-sm text-slate-700 mt-2'>
              Salários em milhares de reais: 2, 2, 3 e 93. Média:{" "}
              <MathRenderer expression={String.raw`(2+2+3+93)\div4=25`} /> mil.
              Mediana:{" "}
              <MathRenderer expression={String.raw`(2+3)\div2=2{,}5`} /> mil. O
              salário de 93 mil puxa a média para cima; aqui, a mediana descreve
              melhor o centro da maioria.
            </p>
          </div>
          <div className='bg-slate-50 rounded-xl p-5'>
            <b>Não existe uma medida “melhor” em qualquer situação</b>
            <p className='text-sm text-slate-700 mt-2'>
              A medida deve combinar com a pergunta e com os dados. Em
              relatórios, pode ser útil mostrar mais de uma medida e explicar o
              que cada uma revela.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-white rounded-2xl border p-6 sm:p-8 shadow-sm'>
        <SectionTitle number='5'>Frequência e média ponderada</SectionTitle>
        <p className='text-slate-600 leading-7'>
          Se um valor aparece muitas vezes, não precisamos escrevê-lo
          repetidamente: multiplicamos o valor pela sua frequência. A frequência
          funciona como um peso. Para notas com pesos diferentes, usamos a mesma
          ideia.
        </p>
        <Formula
          expression={String.raw`\bar{x}_p=\frac{\sum x_i f_i}{\sum f_i}=\frac{\text{soma de cada valor}\times\text{sua frequência}}{\text{total de observações}}`}
        />
        <div className='grid lg:grid-cols-2 gap-5 mt-5'>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm text-center border-collapse'>
              <thead>
                <tr className='bg-emerald-50'>
                  <th className='border p-2'>Nota x</th>
                  <th className='border p-2'>Frequência f</th>
                  <th className='border p-2'>Produto x·f</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border p-2'>7</td>
                  <td className='border p-2'>4</td>
                  <td className='border p-2'>28</td>
                </tr>
                <tr>
                  <td className='border p-2'>8</td>
                  <td className='border p-2'>6</td>
                  <td className='border p-2'>48</td>
                </tr>
                <tr className='font-bold bg-slate-50'>
                  <td className='border p-2'>—</td>
                  <td className='border p-2'>10</td>
                  <td className='border p-2'>76</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='bg-emerald-50 rounded-xl p-5 text-sm'>
            <b>Como calcular à mão</b>
            <ol className='list-decimal list-inside mt-2 space-y-1'>
              <li>Multiplique cada nota pela frequência: 7×4=28 e 8×6=48.</li>
              <li>Some os produtos: 28+48=76.</li>
              <li>Some as frequências: 4+6=10 alunos.</li>
              <li>Divida: 76÷10=7,6.</li>
            </ol>
            <p className='mt-2'>A média da turma é 7,6.</p>
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-4 mt-4'>
          <div className='border rounded-xl p-5'>
            <b>Média com pesos</b>
            <p className='text-sm text-slate-600 mt-2'>
              Se o trabalho vale peso 1 e a prova peso 2, nota 6 no trabalho e 9
              na prova resultam em{" "}
              <MathRenderer
                expression={String.raw`(6\times1+9\times2)\div(1+2)=8`}
              />
              . Multiplique cada nota pelo peso e divida pela soma dos pesos.
            </p>
          </div>
          <div className='border rounded-xl p-5'>
            <b>Média de grupos</b>
            <p className='text-sm text-slate-600 mt-2'>
              Não faça a média simples das médias quando os grupos têm tamanhos
              diferentes. Para 20 alunos com média 5 e 10 com média 8:{" "}
              <MathRenderer
                expression={String.raw`(20\times5+10\times8)\div30=6`}
              />
              .
            </p>
          </div>
        </div>
      </section>

      <section className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <SectionTitle number='6'>Descobrir um valor que falta</SectionTitle>
          <p className='text-sm text-slate-600'>
            A média também ajuda a encontrar um dado desconhecido. Traduza o
            enunciado para a fórmula e isole a incógnita.
          </p>
          <div className='bg-slate-50 rounded-xl p-5 mt-4 text-sm'>
            <p>
              As notas 6, 7 e <MathRenderer expression='X' /> têm média 8. Qual
              é a terceira nota?
            </p>
            <ol className='list-decimal list-inside mt-3 space-y-2'>
              <li>
                Escreva média = soma ÷ quantidade:{" "}
                <MathRenderer expression={String.raw`(6+7+X)\div3=8`} />.
              </li>
              <li>
                Multiplique os dois lados por 3: a soma total deve ser{" "}
                <MathRenderer expression={String.raw`8\times3=24`} />.
              </li>
              <li>
                Subtraia o que já sabemos:{" "}
                <MathRenderer expression={String.raw`X=24-6-7=11`} />.
              </li>
            </ol>
            <p className='mt-3'>
              Conferência:{" "}
              <MathRenderer expression={String.raw`(6+7+11)\div3=8`} />. A conta
              está correta; se o contexto limitar as notas a 0–10, esse
              resultado também mostra que a meta não seria possível.
            </p>
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <SectionTitle number='7'>
            Amplitude: o espalhamento mais simples
          </SectionTitle>
          <p className='text-sm text-slate-600'>
            Duas turmas podem ter a mesma média, mas notas muito diferentes
            entre si. A amplitude compara apenas o maior e o menor dado.
          </p>
          <Formula expression={String.raw`A=x_{\max}-x_{\min}`} />
          <div className='space-y-3 mt-4 text-sm'>
            <div className='bg-emerald-50 rounded-xl p-4'>
              <b>Turma A:</b> 14, 15, 14, 15, 16 →{" "}
              <MathRenderer expression={String.raw`16-14=2`} />.
            </div>
            <div className='bg-amber-50 rounded-xl p-4'>
              <b>Turma B:</b> 9, 12, 15, 18, 21 →{" "}
              <MathRenderer expression={String.raw`21-9=12`} />. Os resultados
              estão mais espalhados.
            </div>
          </div>
          <p className='text-xs text-slate-500 mt-3'>
            Limite: amplitude ignora os valores do meio e muda bastante se o
            menor ou maior valor for extremo.
          </p>
        </article>
      </section>

      <section className='bg-emerald-900 text-white rounded-2xl p-6 sm:p-9'>
        <SectionTitle number='8'>Variância e desvio padrão</SectionTitle>
        <p className='text-emerald-100 leading-7'>
          A variância e o desvio padrão medem o quanto os dados se afastam da
          média. Primeiro calculamos cada desvio em relação à média. Como
          desvios positivos e negativos se cancelariam, elevamos cada um ao
          quadrado. A variância é a média desses quadrados; o desvio padrão é a
          raiz quadrada da variância.
        </p>
        <div className='grid md:grid-cols-2 gap-4 mt-5'>
          <div className='bg-white text-slate-800 rounded-2xl p-5'>
            <h3 className='font-black'>Variância populacional</h3>
            <p className='mt-2 text-sm'>
              Use quando os dados representam todo o grupo que está sendo
              descrito: some os desvios quadrados e divida por{" "}
              <MathRenderer expression='n' />.
            </p>
            <div className='mt-3'>
              <MathRenderer
                display
                expression={String.raw`\sigma^2=\frac{\sum(x_i-\bar{x})^2}{n}`}
              />
            </div>
          </div>
          <div className='bg-white text-slate-800 rounded-2xl p-5'>
            <h3 className='font-black'>Desvio padrão populacional</h3>
            <p className='mt-2 text-sm'>
              É a raiz da variância e volta à unidade original dos dados. Em
              geral, quanto menor o desvio padrão, mais próximos da média estão
              os valores.
            </p>
            <div className='mt-3'>
              <MathRenderer
                display
                expression={String.raw`\sigma=\sqrt{\sigma^2}`}
              />
            </div>
          </div>
        </div>
        <div className='overflow-x-auto rounded-xl bg-white text-slate-800 mt-5'>
          <table className='w-full text-sm text-center border-collapse'>
            <thead>
              <tr className='bg-emerald-100'>
                <th className='border p-2'>Dado x</th>
                <th className='border p-2'>Desvio x−média</th>
                <th className='border p-2'>Desvio ao quadrado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border p-2'>2</td>
                <td className='border p-2'>−2</td>
                <td className='border p-2'>4</td>
              </tr>
              <tr>
                <td className='border p-2'>4</td>
                <td className='border p-2'>0</td>
                <td className='border p-2'>0</td>
              </tr>
              <tr>
                <td className='border p-2'>6</td>
                <td className='border p-2'>2</td>
                <td className='border p-2'>4</td>
              </tr>
              <tr className='font-bold'>
                <td className='border p-2'>Soma</td>
                <td className='border p-2'>0</td>
                <td className='border p-2'>8</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='bg-white/10 rounded-xl p-5 mt-4 text-sm text-emerald-50'>
          <b>Exemplo completo no papel: {`{2, 4, 6}`}</b>
          <ol className='list-decimal list-inside mt-2 space-y-1'>
            <li>
              Média: <MathRenderer expression={String.raw`(2+4+6)\div3=4`} />.
            </li>
            <li>
              Subtraia a média de cada dado e eleve ao quadrado: 4, 0 e 4. A
              tabela mostra todas as linhas.
            </li>
            <li>
              Some: 4+0+4=8. Divida por 3:{" "}
              <MathRenderer
                expression={String.raw`\sigma^2=8\div3\approx2{,}67`}
              />
              .
            </li>
            <li>
              Tire a raiz:{" "}
              <MathRenderer
                expression={String.raw`\sigma=\sqrt{2{,}67}\approx1{,}63`}
              />
              .
            </li>
          </ol>
          <p className='mt-3'>
            A variância fica em unidades ao quadrado; o desvio padrão fica na
            mesma unidade dos dados.
          </p>
        </div>
        <div className='bg-amber-100 text-amber-950 rounded-xl p-5 mt-4 text-sm'>
          <b>Quando os dados são apenas uma amostra</b>
          <p className='mt-1'>
            Se o objetivo é usar uma amostra para estimar a variabilidade de uma
            população maior, muitos cursos usam a variância amostral, dividindo
            por <MathRenderer expression='n-1' /> em vez de{" "}
            <MathRenderer expression='n' />. O desvio padrão amostral é a raiz
            dessa variância. Nesta página, no laboratório e nas ferramentas, a
            convenção usada nos cálculos é a variância populacional (divisão por{" "}
            <MathRenderer expression='n' />
            ); confira sempre qual convenção o enunciado pede.
          </p>
          <div className='mt-2'>
            <MathRenderer
              display
              expression={String.raw`s^2=\frac{\sum(x_i-\bar{x})^2}{n-1}\qquad s=\sqrt{s^2}`}
            />
          </div>
        </div>
      </section>

      <section className='bg-white rounded-2xl border p-6 sm:p-8 shadow-sm'>
        <SectionTitle number='9'>Tabelas, classes e gráficos</SectionTitle>
        <p className='text-slate-600 leading-7'>
          Quando há muitos dados, agrupá-los em uma tabela facilita a leitura.
          Para uma variável contínua, podem ser usadas classes (intervalos). Ao
          calcular uma média a partir de classes, usamos o ponto médio de cada
          intervalo como representante; por isso, o resultado é uma{" "}
          <b>aproximação</b>.
        </p>
        <div className='grid lg:grid-cols-2 gap-5 mt-4'>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm text-center border-collapse'>
              <thead>
                <tr className='bg-teal-50'>
                  <th className='border p-2'>Intervalo</th>
                  <th className='border p-2'>Ponto médio</th>
                  <th className='border p-2'>Frequência</th>
                  <th className='border p-2'>Produto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border p-2'>[0, 2)</td>
                  <td className='border p-2'>1</td>
                  <td className='border p-2'>2</td>
                  <td className='border p-2'>2</td>
                </tr>
                <tr>
                  <td className='border p-2'>[2, 4)</td>
                  <td className='border p-2'>3</td>
                  <td className='border p-2'>2</td>
                  <td className='border p-2'>6</td>
                </tr>
                <tr className='font-bold'>
                  <td className='border p-2'>Total</td>
                  <td className='border p-2'>—</td>
                  <td className='border p-2'>4</td>
                  <td className='border p-2'>8</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='bg-teal-50 rounded-xl p-5 text-sm'>
            <b>Exemplo de média agrupada</b>
            <p className='text-slate-700 mt-2'>
              O ponto médio é a média dos limites: para [0, 2),{" "}
              <MathRenderer expression={String.raw`(0+2)\div2=1`} />.
              Multiplique cada ponto médio pela frequência, some os produtos e
              divida pela frequência total:{" "}
              <MathRenderer
                expression={String.raw`(1\times2+3\times2)\div4=2`}
              />
              . Sem os dados individuais, não sabemos a média exata; o cálculo
              representa cada classe pelo seu centro.
            </p>
          </div>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5 text-sm'>
          {[
            ["Barras", "Compare categorias ou valores discretos."],
            [
              "Histograma",
              "Veja a distribuição de medidas agrupadas em intervalos; as barras encostam.",
            ],
            ["Linhas", "Acompanhe uma medida ao longo do tempo."],
            [
              "Setores",
              "Mostre como um total se divide em partes; os setores somam 100%.",
            ],
          ].map(([name, description]) => (
            <div key={name} className='border rounded-xl p-4'>
              <b className='text-teal-900'>{name}</b>
              <p className='text-slate-600 mt-1'>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <SectionTitle number='10'>
            Como os dados mudam quando transformamos todos?
          </SectionTitle>
          <p className='text-sm text-slate-600'>
            Essas relações ajudam a conferir contas e entender mudanças de
            escala.
          </p>
          <ul className='list-disc list-inside mt-3 space-y-2 text-sm text-slate-700'>
            <li>
              Somar <MathRenderer expression='c' /> a todos os dados soma{" "}
              <MathRenderer expression='c' /> à média, à mediana e à moda;
              amplitude e desvio padrão não mudam.
            </li>
            <li>
              Multiplicar todos os dados por <MathRenderer expression='k' />{" "}
              multiplica média, mediana e os valores da moda por{" "}
              <MathRenderer expression='k' />; amplitude e desvio padrão são
              multiplicados por <MathRenderer expression='|k|' />. Se{" "}
              <MathRenderer expression='k<0' />, a ordem dos dados se inverte.
            </li>
            <li>
              A variância é multiplicada por <MathRenderer expression='k^2' />.
            </li>
            <li>
              A soma dos desvios em relação à média é zero: os desvios positivos
              e negativos se equilibram.
            </li>
          </ul>
        </article>
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          <SectionTitle number='✓'>Checklist antes de entregar</SectionTitle>
          <ol className='list-decimal list-inside mt-3 space-y-2 text-sm text-slate-700'>
            <li>Copiei todos os dados e conferi a quantidade?</li>
            <li>Ordenei a lista se o problema pede mediana?</li>
            <li>Na média, dividi pela quantidade certa de observações?</li>
            <li>Na tabela, somei as frequências para obter o total?</li>
            <li>Na variância, subtraí a média antes de elevar ao quadrado?</li>
            <li>Usei a convenção pedida (populacional ou amostral)?</li>
            <li>Escrevi o que o resultado significa e mantive a unidade?</li>
          </ol>
        </article>
      </section>

      <section className='rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 p-6 sm:p-8'>
        <h2 className='text-2xl font-black text-emerald-950'>
          Um resumo para escolher o próximo passo
        </h2>
        <p className='text-slate-700 mt-3 leading-7'>
          Para representar o centro, comece perguntando se os dados são
          numéricos e se existe um valor extremo: a média considera cada valor;
          a mediana localiza o meio do rol; a moda encontra a ocorrência mais
          frequente. Para saber se os dados estão próximos ou espalhados,
          calcule uma medida de dispersão como amplitude ou desvio padrão.
          Nenhuma medida conta toda a história sozinha: use os números junto com
          o contexto.
        </p>
        <div className='grid md:grid-cols-3 gap-3 mt-5 text-center text-sm'>
          <div className='bg-white rounded-xl p-4'>
            <b>Centro</b>
            <p className='text-slate-600 mt-1'>Média · mediana · moda</p>
          </div>
          <div className='bg-white rounded-xl p-4'>
            <b>Espalhamento</b>
            <p className='text-slate-600 mt-1'>
              Amplitude · variância · desvio padrão
            </p>
          </div>
          <div className='bg-white rounded-xl p-4'>
            <b>Organização</b>
            <p className='text-slate-600 mt-1'>
              Rol · frequência · tabela · gráfico
            </p>
          </div>
        </div>
      </section>

      <section className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black'>Conexões com outros conteúdos</h2>
        <div className='grid md:grid-cols-3 gap-3 mt-4'>
          {[
            [
              "/matematica/fracoes",
              "Frações",
              "Retome a divisão em partes iguais e a leitura de proporções.",
            ],
            [
              "/matematica/decimais",
              "Decimais",
              "Pratique contas e arredondamentos usados nas médias e porcentagens.",
            ],
            [
              "/matematica/probabilidade",
              "Probabilidade",
              "Use frequências para compreender chances e resultados de experimentos.",
            ],
          ].map(([to, label, description]) => (
            <Link
              key={to}
              to={to}
              className='rounded-xl border p-4 hover:border-emerald-300 hover:bg-emerald-50'
            >
              <b className='text-emerald-900'>{label} →</b>
              <p className='text-sm text-slate-600 mt-1'>{description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
