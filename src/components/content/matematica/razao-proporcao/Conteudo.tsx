import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { MathRenderer } from "../../../Math/MathRenderer";
import { RatioIntroVisual } from "../../../Math/IntroVisuals";
import CourseHeader from "../../../header/CourseHeader.component";

function Formula({ expression }: { expression: string }) {
  return (
    <div className='paper rounded-xl p-4 sm:p-5 mt-4 text-center overflow-x-auto'>
      <MathRenderer display expression={expression} />
    </div>
  );
}

function TheorySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className='bg-white rounded-2xl border p-6 sm:p-8 shadow-sm'>
      <div className='flex items-center gap-3 mb-4'>
        <span className='w-9 h-9 shrink-0 rounded-full bg-indigo-100 text-indigo-800 grid place-items-center font-black'>
          {number}
        </span>
        <h2 className='text-2xl font-black'>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function RatioTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='Curso do zero · comparação de quantidades'
        title='Razão e Proporção sem mistério'
        description='Razões comparam quantidades. Proporções mostram quando duas
          comparações têm o mesmo valor. Com essas ideias, resolvemos situações
          de receitas, misturas, mapas, repartições e muitas outras do dia a
          dia.'
        bgClass='bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-950 text-white shadow-xl'
        stats={[
          { value: "1", label: "comparar quantidades" },
          { value: "2", label: "razões equivalentes" },
          { value: "3", label: "resolver proporções" },
          { value: "✓", label: "conferir o resultado" },
        ]}
      />

      <div className='tip rounded-2xl p-5 shadow-sm'>
        <b>Ideia principal:</b> em uma razão, compare os termos na ordem pedida.
        Em uma proporção, mantenha a mesma ordem nas duas razões. Antes de
        calcular, confira o que cada número representa e se as unidades são
        compatíveis.
      </div>

      <TheorySection number='1' title='O que é uma razão?'>
        <p className='text-slate-600 leading-7'>
          Uma <b>razão</b> é uma comparação entre duas quantidades feita por
          divisão. A razão de <MathRenderer expression='a' /> para{" "}
          <MathRenderer expression='b' /> pode ser escrita{" "}
          <MathRenderer expression='a:b' /> ou{" "}
          <MathRenderer expression={String.raw`\frac{a}{b}`} /> e lida “a está
          para b”. O segundo termo precisa ser diferente de zero, porque não se
          pode dividir por zero.
        </p>
        <div className='grid lg:grid-cols-2 gap-5 items-center mt-4'>
          <div className='flex justify-center'>
            <RatioIntroVisual />
          </div>
          <div className='space-y-3 text-sm'>
            <div className='bg-indigo-50 rounded-xl p-4'>
              <b>Exemplo — comparar dois grupos</b>
              <p className='text-slate-700 mt-1'>
                Há 12 meninos e 8 meninas. A razão meninos:meninas é{" "}
                <MathRenderer expression='12:8' />. Dividindo os dois termos por
                4, fica <MathRenderer expression='3:2' />: para cada 3 meninos
                há 2 meninas.
              </p>
            </div>
            <div className='bg-violet-50 rounded-xl p-4'>
              <b>A ordem muda o significado</b>
              <p className='text-slate-700 mt-1'>
                A razão meninas:meninos é <MathRenderer expression='8:12=2:3' />
                . Se comparar meninos com o total, são{" "}
                <MathRenderer expression='12:(12+8)=12:20=3:5' />. Escreva
                sempre o que está sendo comparado.
              </p>
            </div>
          </div>
        </div>
        <p className='text-sm text-slate-600 mt-4'>
          Uma razão pode comparar partes do mesmo tipo, como meninos e meninas,
          ou quantidades de tipos diferentes, como quilômetros por litro. No
          segundo caso, ela também é chamada de <b>taxa</b> e as unidades fazem
          parte da interpretação.
        </p>
      </TheorySection>

      <TheorySection
        number='2'
        title='Como simplificar e criar razões equivalentes'
      >
        <p className='text-slate-600 leading-7'>
          Uma razão equivalente representa a mesma comparação. Para simplificar,
          divida os dois termos pelo mesmo divisor comum. Para ampliar,
          multiplique os dois termos pelo mesmo número diferente de zero. Não
          altere apenas um termo.
        </p>
        <div className='grid md:grid-cols-2 gap-4 mt-4'>
          <article className='rounded-xl bg-slate-50 p-5'>
            <b>Passo a passo: simplifique 18:12</b>
            <ol className='list-decimal list-inside mt-2 space-y-1 text-sm text-slate-700'>
              <li>Encontre um divisor comum: 6 divide 18 e 12.</li>
              <li>Divida os dois termos: 18 ÷ 6 = 3 e 12 ÷ 6 = 2.</li>
              <li>Escreva o resultado: 18:12 = 3:2.</li>
            </ol>
          </article>
          <article className='rounded-xl bg-indigo-50 p-5'>
            <b>Amplie 2:5 até o segundo termo ser 15</b>
            <p className='text-sm text-slate-700 mt-2'>
              Como 5 × 3 = 15, multiplique também o primeiro termo por 3: 2 × 3
              = 6. Portanto, <MathRenderer expression='2:5=6:15' />.
            </p>
          </article>
        </div>
        <Formula expression={String.raw`a:b=ka:kb\quad(k\ne0)`} />
        <p className='text-sm text-slate-600 mt-3'>
          Por exemplo, <MathRenderer expression='3:2=6:4=9:6=12:8' />. Em cada
          caso, a razão entre o primeiro e o segundo termo continua sendo{" "}
          <MathRenderer expression='3/2=1{,}5' />. Se os termos representam
          quantidades contáveis, normalmente usamos um fator positivo.
        </p>
        <div className='warning rounded-xl p-4 mt-4 text-sm'>
          <b>Erro comum:</b> somar o mesmo número aos termos não preserva, em
          geral, a razão. De <MathRenderer expression='2:3' /> não se obtém uma
          razão equivalente somando 1 a cada termo:{" "}
          <MathRenderer expression='3:4' /> tem outro valor.
        </div>
      </TheorySection>

      <TheorySection number='3' title='O que é uma proporção?'>
        <p className='text-slate-600 leading-7'>
          Uma <b>proporção</b> é uma igualdade entre duas razões. Ela afirma que
          as comparações têm o mesmo valor. Em{" "}
          <MathRenderer expression={String.raw`\frac{a}{b}=\frac{c}{d}`} />, os
          termos <MathRenderer expression='a' /> e{" "}
          <MathRenderer expression='d' /> são os <b>extremos</b>;{" "}
          <MathRenderer expression='b' /> e <MathRenderer expression='c' /> são
          os <b>meios</b>.
        </p>
        <Formula expression={String.raw`\frac{2}{3}=\frac{4}{6}`} />
        <div className='grid md:grid-cols-2 gap-4 mt-4 text-sm'>
          <div className='bg-emerald-50 rounded-xl p-4'>
            <b>Verifique 4:6 e 10:15</b>
            <p className='text-slate-700 mt-2'>
              Compare os produtos cruzados:{" "}
              <MathRenderer expression='4×15=60' /> e{" "}
              <MathRenderer expression='6×10=60' />. Como são iguais, as razões
              formam uma proporção.
            </p>
          </div>
          <div className='bg-rose-50 rounded-xl p-4'>
            <b>Verifique 3:5 e 9:20</b>
            <p className='text-slate-700 mt-2'>
              <MathRenderer expression='3×20=60' />, mas{" "}
              <MathRenderer expression='5×9=45' />. Como os produtos são
              diferentes, não formam uma proporção.
            </p>
          </div>
        </div>
        <p className='text-sm text-slate-600 mt-4'>
          A propriedade funciona porque, se{" "}
          <MathRenderer expression={String.raw`\frac{a}{b}=\frac{c}{d}`} /> e os
          denominadores não são zero, multiplicar os dois lados por{" "}
          <MathRenderer expression='bd' /> resulta em{" "}
          <MathRenderer expression='a×d=b×c' />: o produto dos extremos é igual
          ao produto dos meios.
        </p>
      </TheorySection>

      <TheorySection number='4' title='Como encontrar um termo desconhecido'>
        <p className='text-slate-600 leading-7'>
          Quando uma proporção tem um valor desconhecido, represente-o por{" "}
          <MathRenderer expression='x' />. Multiplique cruzado e depois isole{" "}
          <MathRenderer expression='x' /> usando operações inversas, como em uma
          equação.
        </p>
        <div className='grid lg:grid-cols-2 gap-5 mt-4'>
          <div className='space-y-3 text-sm'>
            <div className='step' data-step='1'>
              Monte a igualdade mantendo a mesma ordem dos termos:{" "}
              <MathRenderer expression={String.raw`\frac{2}{3}=\frac{x}{9}`} />.
            </div>
            <div className='step' data-step='2'>
              Multiplique os extremos e os meios:{" "}
              <MathRenderer expression='2×9=3×x' />.
            </div>
            <div className='step' data-step='3'>
              Calcule e isole <MathRenderer expression='x' />:{" "}
              <MathRenderer expression='18=3x' />, então{" "}
              <MathRenderer expression='x=18÷3=6' />.
            </div>
            <div className='success rounded-xl p-4'>
              <b>Confira:</b>{" "}
              <MathRenderer expression={String.raw`\frac{2}{3}=\frac{6}{9}`} />.
              As razões são equivalentes.
            </div>
          </div>
          <div className='bg-indigo-50 rounded-xl p-5'>
            <b>Como montar no papel</b>
            <ol className='list-decimal list-inside mt-2 space-y-2 text-sm text-slate-700'>
              <li>Escreva cada par de grandezas na mesma ordem.</li>
              <li>
                Coloque <MathRenderer expression='x' /> no lugar da quantidade
                desconhecida.
              </li>
              <li>Use o produto dos meios igual ao produto dos extremos.</li>
              <li>
                Resolva a equação e substitua o resultado na proporção para
                conferir.
              </li>
            </ol>
          </div>
        </div>
        <div className='warning rounded-xl p-4 mt-4 text-sm'>
          <b>Atenção à posição:</b>{" "}
          <MathRenderer expression={String.raw`\frac{2}{3}=\frac{9}{x}`} /> não
          é a mesma montagem que{" "}
          <MathRenderer expression={String.raw`\frac{2}{3}=\frac{x}{9}`} />.
          Desenhe ou identifique o que cada posição representa antes de
          multiplicar cruzado.
        </div>
      </TheorySection>

      <TheorySection number='5' title='Variação direta e inversa'>
        <p className='text-slate-600 leading-7'>
          Duas grandezas são <b>diretamente proporcionais</b> quando uma cresce
          ou diminui pelo mesmo fator que a outra. Se dobramos uma quantidade, a
          outra também dobra; a razão entre valores correspondentes permanece
          constante.
        </p>
        <div className='grid md:grid-cols-2 gap-4 mt-4'>
          <div className='bg-sky-50 rounded-xl p-5'>
            <b>Direta: preço por unidade constante</b>
            <p className='text-sm text-slate-700 mt-2'>
              Se 1 caderno custa R$ 4, então 2 custam R$ 8 e 5 custam R$ 20. A
              razão preço/quantidade é constante: R$ 4 por caderno.
            </p>
            <Formula
              expression={String.raw`\frac{4}{1}=\frac{8}{2}=\frac{20}{5}`}
            />
          </div>
          <div className='bg-amber-50 rounded-xl p-5'>
            <b>Inversa: total de trabalho fixo</b>
            <p className='text-sm text-slate-700 mt-2'>
              Se a mesma tarefa é dividida igualmente entre mais pessoas
              trabalhando no mesmo ritmo, o tempo necessário diminui. Dobrar o
              número de pessoas reduz o tempo à metade; o produto pessoas ×
              tempo permanece constante.
            </p>
            <Formula expression={String.raw`2\times12=4\times6=24`} />
          </div>
        </div>
        <p className='text-sm text-slate-600 mt-4'>
          Para decidir se a relação é direta ou inversa, pense no contexto antes
          de montar uma proporção. Mais trabalhadores podem reduzir o tempo de
          uma tarefa, mas mais quilômetros percorridos com velocidade constante
          exigem mais tempo. A aba de{" "}
          <Link
            className='font-bold text-indigo-700 hover:underline'
            to='/matematica/regra-de-tres'
          >
            Regra de Três
          </Link>{" "}
          desenvolve esses problemas com mais exemplos.
        </p>
      </TheorySection>

      <TheorySection number='6' title='Divisão em partes proporcionais'>
        <p className='text-slate-600 leading-7'>
          Para repartir um total na razão indicada, some os termos da razão.
          Essa soma representa o número total de partes iguais. Divida o total
          por essa soma para encontrar o valor de uma parte; depois multiplique
          pelas partes de cada pessoa ou grupo.
        </p>
        <div className='bg-violet-50 rounded-xl p-5 mt-4'>
          <b>Exemplo: divida 100 na razão 2:3</b>
          <div className='grid sm:grid-cols-3 gap-3 mt-3 text-sm'>
            <div className='bg-white rounded-lg p-3'>
              <b>1. Some as partes</b>
              <p className='mt-1'>2 + 3 = 5 partes.</p>
            </div>
            <div className='bg-white rounded-lg p-3'>
              <b>2. Ache uma parte</b>
              <p className='mt-1'>100 ÷ 5 = 20.</p>
            </div>
            <div className='bg-white rounded-lg p-3'>
              <b>3. Reparta</b>
              <p className='mt-1'>2×20=40 e 3×20=60.</p>
            </div>
          </div>
          <p className='text-sm mt-3'>
            Confira: <MathRenderer expression='40+60=100' /> e{" "}
            <MathRenderer expression='40:60=2:3' />.
          </p>
        </div>
        <p className='text-sm text-slate-600 mt-4'>
          Para três ou mais partes, o método é igual. Por exemplo, para dividir
          120 na razão 1:2:3, há 6 partes ao todo; cada parte vale 20 e a
          divisão fica 20, 40 e 60.
        </p>
      </TheorySection>

      <TheorySection number='7' title='Escalas, taxas e unidades'>
        <p className='text-slate-600 leading-7'>
          A escala é uma razão entre uma medida no desenho e a medida
          correspondente no objeto real. As duas medidas precisam estar na{" "}
          <b>mesma unidade</b> antes da comparação. A escala{" "}
          <MathRenderer expression='1:50000' /> significa que 1 unidade no mapa
          corresponde a 50.000 unidades reais.
        </p>
        <div className='grid lg:grid-cols-2 gap-4 mt-4'>
          <article className='border rounded-xl p-5'>
            <b>Exemplo: mapa</b>
            <p className='text-sm text-slate-700 mt-2'>
              Escala 1:50.000 e distância de 3 cm no mapa.
            </p>
            <ol className='list-decimal list-inside mt-2 space-y-1 text-sm text-slate-700'>
              <li>Multiplique: 3×50.000 = 150.000 cm.</li>
              <li>Converta a unidade: 150.000 cm ÷ 100 = 1.500 m.</li>
              <li>Converta novamente: 1.500 m ÷ 1.000 = 1,5 km.</li>
            </ol>
          </article>
          <article className='border rounded-xl p-5'>
            <b>Exemplo: taxa</b>
            <p className='text-sm text-slate-700 mt-2'>
              Um carro percorre 300 km com 20 L. A razão distância/combustível é{" "}
              <MathRenderer expression='300÷20=15' /> km/L. Mantida a mesma
              taxa, com 30 L percorre <MathRenderer expression='15×30=450' />{" "}
              km.
            </p>
            <p className='text-xs text-slate-500 mt-2'>
              A unidade km/L diz o que está sendo comparado: quilômetros por
              litro.
            </p>
          </article>
        </div>
        <div className='tip rounded-xl p-4 mt-4 text-sm'>
          <b>Porcentagem também é razão:</b> 25% significa 25 em cada 100, isto
          é,{" "}
          <MathRenderer
            expression={String.raw`25:100=\frac{25}{100}=\frac{1}{4}`}
          />
          .
        </div>
      </TheorySection>

      <TheorySection number='8' title='Roteiro para resolver qualquer problema'>
        <div className='grid sm:grid-cols-2 gap-3 text-sm'>
          {[
            [
              "1. Identifique",
              "Quais quantidades estão sendo comparadas? Qual delas é desconhecida?",
            ],
            [
              "2. Mantenha a ordem",
              "Se a primeira razão compara A com B, a segunda também deve comparar A com B.",
            ],
            [
              "3. Confira as unidades",
              "Converta para a mesma unidade quando comparar comprimentos, massas ou capacidades.",
            ],
            [
              "4. Decida a relação",
              "Verifique se as grandezas variam diretamente, inversamente ou se o problema pede uma repartição.",
            ],
            [
              "5. Calcule com cuidado",
              "Simplifique a razão ou use a propriedade fundamental da proporção; depois isole a incógnita.",
            ],
            [
              "6. Confira e responda",
              "Substitua o valor, verifique a razão, as unidades e se a resposta faz sentido no contexto.",
            ],
          ].map(([title, description]) => (
            <div key={title} className='rounded-xl bg-slate-50 border p-4'>
              <b className='text-indigo-900'>{title}</b>
              <p className='text-slate-600 mt-1'>{description}</p>
            </div>
          ))}
        </div>
        <div className='bg-rose-50 rounded-xl p-4 mt-4 text-sm'>
          <b>Erros para evitar</b>
          <ul className='list-disc list-inside mt-2 space-y-1 text-slate-700'>
            <li>Trocar a ordem dos termos e comparar grandezas diferentes.</li>
            <li>
              Multiplicar cruzado antes de confirmar que existe uma proporção.
            </li>
            <li>Comparar medidas em unidades diferentes sem conversão.</li>
            <li>
              Esquecer que a soma das partes repartidas precisa recuperar o
              total.
            </li>
            <li>
              Deixar a resposta sem unidade ou sem explicar o que ela
              representa.
            </li>
          </ul>
        </div>
      </TheorySection>

      <section className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black'>Continue estudando</h2>
        <div className='grid md:grid-cols-2 gap-3 mt-4'>
          <Link
            to='/matematica/regra-de-tres'
            className='rounded-xl border p-4 hover:bg-indigo-50'
          >
            <b className='text-indigo-900'>Regra de Três →</b>
            <p className='text-sm text-slate-600 mt-1'>
              Use proporções para encontrar valores em relações diretas e
              inversas.
            </p>
          </Link>
          <Link
            to='/matematica/fracoes'
            className='rounded-xl border p-4 hover:bg-indigo-50'
          >
            <b className='text-indigo-900'>Frações →</b>
            <p className='text-sm text-slate-600 mt-1'>
              Revise frações equivalentes e simplificação, que também aparecem
              nas razões.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export function RatioExamples() {
  return (
    <div className='space-y-5'>
      <div className='bg-white rounded-3xl border p-7 shadow-sm'>
        <span className='text-xs font-bold uppercase tracking-widest text-indigo-600'>
          Exemplos resolvidos
        </span>
        <h1 className='text-3xl font-black mt-2'>
          Veja o raciocínio completo, passo a passo
        </h1>
        <p className='text-slate-600 mt-2'>
          Antes de tentar os exercícios, acompanhe estes modelos com atenção.
        </p>
      </div>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          Exemplo 1 — Simplificar uma razão
        </h2>
        <p className='mt-2 text-slate-600'>Simplifique a razão 15:20.</p>
        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            Encontre um divisor comum: 5 divide 15 e 20.
          </div>
          <div className='step' data-step='2'>
            Divida os dois termos:{" "}
            <MathRenderer expression={String.raw`15÷5=3`} /> e{" "}
            <MathRenderer expression={String.raw`20÷5=4`} />.
          </div>
          <div className='step' data-step='3'>
            <b>Resposta:</b> 3:4.
          </div>
        </div>
      </article>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          Exemplo 2 — Verificar se é proporção
        </h2>
        <p className='mt-2 text-slate-600'>
          As razões 4:6 e 10:15 formam uma proporção?
        </p>
        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            Multiplique cruzado: <MathRenderer expression='4×15=60' /> e{" "}
            <MathRenderer expression='6×10=60' />.
          </div>
          <div className='step' data-step='2'>
            Os produtos são iguais.
          </div>
          <div className='step' data-step='3'>
            <b>Resposta:</b> sim, formam uma proporção.
          </div>
        </div>
      </article>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          Exemplo 3 — Resolver uma proporção
        </h2>
        <p className='mt-2 text-slate-600'>
          Encontre <MathRenderer expression='x' /> em{" "}
          <MathRenderer expression={String.raw`\frac{5}{8}=\frac{x}{40}`} />.
        </p>
        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            Multiplique cruzado: <MathRenderer expression='5×40=8×x' />.
          </div>
          <div className='step' data-step='2'>
            <MathRenderer expression='200=8x' />.
          </div>
          <div className='step' data-step='3'>
            Isole x: <MathRenderer expression='x=200÷8=25' />.
          </div>
        </div>
      </article>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          Exemplo 4 — Divisão proporcional
        </h2>
        <p className='mt-2 text-slate-600'>
          Divida 90 em partes proporcionais a 4 e 5.
        </p>
        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            Some: 4+5=9 partes.
          </div>
          <div className='step' data-step='2'>
            Valor de cada parte: 90÷9=10.
          </div>
          <div className='step' data-step='3'>
            Primeira parte: 4×10=40. Segunda parte: 5×10=50.
          </div>
          <div className='step' data-step='4'>
            <b>Resposta:</b> 40 e 50 (soma confere: 40+50=90).
          </div>
        </div>
      </article>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          Exemplo 5 — Problema de receita
        </h2>
        <p className='mt-2 text-slate-600'>
          Uma receita usa 2 xícaras de farinha para 3 ovos. Quantos ovos são
          necessários para 8 xícaras de farinha?
        </p>
        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            Monte a proporção na mesma ordem (farinha/ovos):{" "}
            <MathRenderer expression={String.raw`\frac{2}{3}=\frac{8}{x}`} />.
          </div>
          <div className='step' data-step='2'>
            Multiplique cruzado: <MathRenderer expression='2x=3×8=24' />.
          </div>
          <div className='step' data-step='3'>
            <MathRenderer expression='x=24÷2=12' />.
          </div>
          <div className='step' data-step='4'>
            <b>Resposta:</b> 12 ovos.
          </div>
        </div>
      </article>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          Exemplo 6 — Escala de mapa
        </h2>
        <p className='mt-2 text-slate-600'>
          Um mapa tem escala 1:100.000. Uma distância no mapa mede 4 cm. Qual é
          a distância real, em quilômetros?
        </p>
        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            A escala compara medidas na mesma unidade. Multiplique: 4 cm ×
            100.000 = 400.000 cm.
          </div>
          <div className='step' data-step='2'>
            Converta centímetros em quilômetros: 400.000 ÷ 100.000 = 4 km.
          </div>
          <div className='step' data-step='3'>
            <b>Resposta:</b> 4 km.
          </div>
        </div>
      </article>
    </div>
  );
}
