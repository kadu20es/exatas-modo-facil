import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { MathRenderer } from "../../../Math/MathRenderer";
import CourseHeader from "../../../header/CourseHeader.component";

function Formula({ expression }: { expression: string }) {
  return (
    <div className='paper rounded-xl p-4 sm:p-5 mt-4 text-center overflow-x-auto'>
      <MathRenderer display expression={expression} />
    </div>
  );
}

function Section({
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

export function RuleOfThreeTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='Curso do zero · proporções na prática'
        title='Regra de Três: entenda e resolva'
        description='A Regra de Três ajuda a encontrar um valor desconhecido quando as
          quantidades envolvidas mantêm uma relação proporcional. Aprenda a
          reconhecer essa relação, organizar os dados em uma tabela, montar as
          contas no papel e conferir se o resultado faz sentido.'
        bgClass='bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-950 text-white shadow-xl'
        stats={[
          { value: "1", label: "entenda as grandezas" },
          { value: "2", label: "decida direta ou inversa" },
          { value: "3", label: "monte a conta" },
          { value: "130", label: "exercícios progressivos" },
        ]}
      />

      <div className='tip rounded-2xl p-5 shadow-sm'>
        <b>Regra de ouro:</b> antes de multiplicar cruzado, descubra quais
        grandezas estão relacionadas e se a relação é direta ou inversa. A conta
        só funciona quando o problema realmente mantém uma proporcionalidade.
      </div>

      <Section number='1' title='O que é Regra de Três e para que serve?'>
        <p className='text-slate-600 leading-7'>
          É um método para calcular um valor que falta a partir de uma relação
          proporcional entre grandezas. Uma <b>grandeza</b> é algo que pode ser
          medido ou contado, como preço, massa, distância, tempo, quantidade de
          trabalhadores ou número de peças.
        </p>
        <p className='text-slate-600 leading-7 mt-3'>
          Usamos Regra de Três quando conhecemos três valores relacionados e
          queremos descobrir o quarto. Ela aparece em receitas, compras, mapas,
          velocidade, produção e divisão de tarefas. Para que o método seja
          válido, as condições precisam permanecer comparáveis: mesmo preço por
          unidade, mesma velocidade, mesma produtividade ou a mesma quantidade
          de trabalho, por exemplo.
        </p>
        <div className='grid md:grid-cols-2 gap-4 mt-5'>
          <article className='bg-indigo-50 rounded-xl p-5'>
            <b>Relação direta</b>
            <p className='text-sm text-slate-700 mt-2'>
              Se 5 kg de arroz custam R$ 20, quanto custam 8 kg ao mesmo preço
              por quilo? Mais quilos correspondem a mais reais.
            </p>
          </article>
          <article className='bg-rose-50 rounded-xl p-5'>
            <b>Relação inversa</b>
            <p className='text-sm text-slate-700 mt-2'>
              Se mais trabalhadores, no mesmo ritmo, fazem a mesma obra, o
              número de dias diminui. Mais trabalhadores correspondem a menos
              dias.
            </p>
          </article>
        </div>
      </Section>

      <Section number='2' title='Entenda a relação entre as grandezas'>
        <div className='grid lg:grid-cols-2 gap-5'>
          <article className='border border-emerald-200 bg-emerald-50 rounded-xl p-5'>
            <h3 className='font-black text-emerald-900 text-lg'>
              Diretamente proporcionais
            </h3>
            <p className='text-sm text-slate-700 mt-2'>
              Uma grandeza é multiplicada por um fator e a outra também é
              multiplicada pelo mesmo fator. Se uma dobra, a outra dobra; se cai
              pela metade, a outra também cai pela metade. A razão
              correspondente permanece constante.
            </p>
            <Formula expression={String.raw`\frac{y}{x}=k`} />
            <p className='text-sm text-slate-700 mt-3'>
              <b>Exemplos:</b> quantidade e preço com preço unitário fixo; tempo
              e distância com velocidade constante; quantidade de ingredientes e
              número de porções.
            </p>
          </article>
          <article className='border border-rose-200 bg-rose-50 rounded-xl p-5'>
            <h3 className='font-black text-rose-900 text-lg'>
              Inversamente proporcionais
            </h3>
            <p className='text-sm text-slate-700 mt-2'>
              Uma grandeza é multiplicada por um fator e a outra é dividida por
              esse mesmo fator. Se uma dobra, a outra cai pela metade. O produto
              das duas grandezas permanece constante.
            </p>
            <Formula expression={String.raw`x\cdot y=k`} />
            <p className='text-sm text-slate-700 mt-3'>
              <b>Exemplos:</b> velocidade e tempo para percorrer uma distância
              fixa; número de pessoas e tempo para concluir o mesmo trabalho, se
              todas mantêm o mesmo ritmo.
            </p>
          </article>
        </div>
        <div className='warning rounded-xl p-4 mt-4 text-sm'>
          <b>O contexto decide.</b> Mais velocidade significa menos tempo apenas
          quando a distância é fixa. Mais trabalhadores reduzem o prazo apenas
          quando fazem o mesmo trabalho, com produtividade comparável. Leia as
          condições antes de classificar.
        </div>
      </Section>

      <Section number='3' title='Como montar a Regra de Três simples no papel'>
        <p className='text-slate-600 leading-7'>
          A Regra de Três é <b>simples</b> quando relaciona duas grandezas.
          Organize os valores em uma tabela: cada coluna representa uma grandeza
          e cada linha representa uma situação correspondente. Coloque{" "}
          <MathRenderer expression='x' /> no lugar do valor desconhecido.
        </p>
        <div className='overflow-x-auto mt-4'>
          <table className='w-full max-w-xl mx-auto text-center border-collapse'>
            <thead>
              <tr className='bg-indigo-100'>
                <th className='border p-3'>Massa de arroz</th>
                <th className='border p-3'>Preço</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border p-3'>5 kg</td>
                <td className='border p-3'>R$ 20</td>
              </tr>
              <tr>
                <td className='border p-3'>8 kg</td>
                <td className='border p-3'>R$ x</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ol className='grid md:grid-cols-2 gap-3 mt-5 text-sm'>
          {[
            [
              "1. Organize",
              "Escreva as grandezas e alinhe os valores que pertencem à mesma situação.",
            ],
            [
              "2. Classifique",
              "Pergunte o que acontece com uma grandeza quando a outra aumenta, mantendo o contexto.",
            ],
            [
              "3. Monte a relação",
              "Direta: conserve a ordem dos fatores. Inversa: use a relação de produto constante ou inverta uma razão.",
            ],
            [
              "4. Resolva e confira",
              "Isole x, coloque a unidade e substitua o resultado na situação para ver se faz sentido.",
            ],
          ].map(([title, text]) => (
            <li key={title} className='rounded-xl border bg-slate-50 p-4'>
              <b className='text-indigo-900'>{title}</b>
              <p className='text-slate-600 mt-1'>{text}</p>
            </li>
          ))}
        </ol>
        <p className='text-sm text-slate-600 mt-4'>
          Uma conversão útil para fazer a conta mentalmente é descobrir primeiro
          o valor de uma unidade. Se 5 kg custam R$ 20, cada quilo custa{" "}
          <MathRenderer expression='20÷5=4' /> reais; 8 kg custam{" "}
          <MathRenderer expression='8×4=32' /> reais. O método da proporção
          chega ao mesmo resultado.
        </p>
      </Section>

      <Section number='4' title='Resolver uma relação direta'>
        <p className='text-slate-600 leading-7'>
          Na tabela, sejam <MathRenderer expression='a_1' /> e{" "}
          <MathRenderer expression='a_2' /> as quantidades da primeira grandeza;{" "}
          <MathRenderer expression='b_1' /> e <MathRenderer expression='x' /> as
          quantidades correspondentes da segunda.
        </p>
        <Formula
          expression={String.raw`\text{Direta: }\quad\frac{a_1}{a_2}=\frac{b_1}{x}\quad\Longrightarrow\quad x=\frac{a_2\,b_1}{a_1}`}
        />
        <div className='grid lg:grid-cols-2 gap-5 mt-5'>
          <div className='space-y-3 text-sm'>
            <div className='step' data-step='1'>
              <b>Situação:</b> 5 kg custam R$ 20. Quanto custam 8 kg?
            </div>
            <div className='step' data-step='2'>
              <b>Classifique:</b> mantendo o preço por quilo, mais quilos custam
              mais. É direta.
            </div>
            <div className='step' data-step='3'>
              <b>Monte e multiplique cruzado:</b>{" "}
              <MathRenderer expression={String.raw`\frac{5}{8}=\frac{20}{x}`} />
              ; então <MathRenderer expression='5x=8×20=160' />.
            </div>
            <div className='step' data-step='4'>
              <b>Isole x:</b> <MathRenderer expression='x=160÷5=32' />.
              Resposta: <b>R$ 32</b>.
            </div>
          </div>
          <div className='success rounded-xl p-5'>
            <b>Confira de duas formas</b>
            <p className='text-sm mt-2'>
              O preço por quilo continua <MathRenderer expression='20÷5=4' />{" "}
              reais e <MathRenderer expression='32÷8=4' /> reais. Também, 8 kg é{" "}
              <MathRenderer expression='8÷5=1{,}6' /> vezes 5 kg; R$ 32 é 1,6
              vezes R$ 20.
            </p>
          </div>
        </div>
      </Section>

      <Section number='5' title='Resolver uma relação inversa'>
        <p className='text-slate-600 leading-7'>
          Em uma relação inversa, o produto correspondente permanece constante.
          Na tabela abaixo, mais velocidade significa menos tempo para percorrer
          a mesma distância.
        </p>
        <Formula
          expression={String.raw`\text{Inversa: }\quad a_1\,b_1=a_2\,x\quad\Longrightarrow\quad x=\frac{a_1\,b_1}{a_2}`}
        />
        <div className='grid lg:grid-cols-2 gap-5 mt-5'>
          <div className='space-y-3 text-sm'>
            <div className='step' data-step='1'>
              <b>Situação:</b> a 60 km/h, uma viagem leva 4 horas. Quanto leva a
              80 km/h, na mesma distância?
            </div>
            <div className='step' data-step='2'>
              <b>Classifique:</b> a velocidade aumenta, então o tempo diminui. É
              inversa.
            </div>
            <div className='step' data-step='3'>
              <b>Mantenha constante o produto:</b>{" "}
              <MathRenderer expression='60×4=80×x' />.
            </div>
            <div className='step' data-step='4'>
              <b>Isole x:</b> <MathRenderer expression='x=(60×4)÷80=3' />.
              Resposta: <b>3 horas</b>.
            </div>
          </div>
          <div className='bg-rose-50 rounded-xl p-5 text-sm'>
            <b>Por que a conta é diferente?</b>
            <p className='text-slate-700 mt-2'>
              A distância não muda: <MathRenderer expression='60×4=240' /> km e{" "}
              <MathRenderer expression='80×3=240' /> km. Se usarmos duas
              frações, podemos escrever{" "}
              <MathRenderer
                expression={String.raw`\frac{60}{80}=\frac{x}{4}`}
              />
              . O produto constante deixa clara a relação inversa e ajuda a
              evitar inverter a coluna errada.
            </p>
          </div>
        </div>
      </Section>

      <Section
        number='6'
        title='Regra de Três composta: três ou mais grandezas'
      >
        <p className='text-slate-600 leading-7'>
          A Regra de Três é <b>composta</b> quando o valor procurado depende de
          três ou mais grandezas. Escolha a grandeza do{" "}
          <MathRenderer expression='x' /> como referência e compare cada uma das
          outras com ela, uma de cada vez. Multiplique os fatores
          correspondentes.
        </p>
        <div className='bg-amber-50 rounded-xl p-5 mt-4'>
          <b>Exemplo: máquinas, dias e peças</b>
          <p className='text-sm text-slate-700 mt-2'>
            8 máquinas produzem 400 peças em 5 dias. Quantas peças 4 máquinas
            produzem em 10 dias, mantendo o mesmo ritmo?
          </p>
          <div className='grid md:grid-cols-2 gap-4 mt-4 text-sm'>
            <div className='space-y-2'>
              <div className='step' data-step='1'>
                A incógnita é o número de peças. Menos máquinas produzem menos
                peças: relação direta, fator{" "}
                <MathRenderer expression='4÷8=1/2' />.
              </div>
              <div className='step' data-step='2'>
                Mais dias produzem mais peças: relação direta, fator{" "}
                <MathRenderer expression='10÷5=2' />.
              </div>
              <div className='step' data-step='3'>
                Aplique os dois fatores ao total inicial:{" "}
                <MathRenderer expression='x=400×(4÷8)×(10÷5)=400' /> peças.
              </div>
            </div>
            <div className='bg-white rounded-xl p-4'>
              <b>Interpretação</b>
              <p className='mt-2 text-slate-700'>
                A metade das máquinas durante o dobro do tempo compensa:{" "}
                <MathRenderer expression='1/2×2=1' />. Por isso, a produção
                permanece em 400 peças.
              </p>
            </div>
          </div>
        </div>
        <div className='bg-indigo-50 rounded-xl p-5 mt-4'>
          <b>Exemplo com relações inversas: dias de trabalho</b>
          <p className='text-sm text-slate-700 mt-2'>
            6 trabalhadores, 8 horas por dia, concluem uma tarefa em 10 dias. Em
            quantos dias 8 trabalhadores trabalhando 6 horas por dia fariam a
            mesma tarefa?
          </p>
          <p className='text-sm text-slate-700 mt-2'>
            Mais trabalhadores reduzem os dias: fator inverso{" "}
            <MathRenderer expression='6÷8' />. Mais horas por dia também reduzem
            os dias: fator inverso <MathRenderer expression='8÷6' />. Assim,{" "}
            <MathRenderer expression='x=10×(6÷8)×(8÷6)=10' /> dias.
          </p>
        </div>
        <div className='warning rounded-xl p-4 mt-4 text-sm'>
          <b>Na composta, classifique cada relação separadamente.</b> Não
          escolha direta ou inversa para o problema inteiro; compare cada
          grandeza com a incógnita mantendo as demais sob controle.
        </div>
      </Section>

      <Section number='7' title='Unidades, taxas e quando o método se aplica'>
        <div className='grid md:grid-cols-2 gap-4'>
          <article className='border rounded-xl p-5'>
            <h3 className='font-black'>Converta unidades antes</h3>
            <p className='text-sm text-slate-600 mt-2'>
              Se um mapa tem escala 1:100.000 e mede 4 cm entre dois pontos, a
              distância real é <MathRenderer expression='4×100.000=400.000' />{" "}
              cm. Como 100.000 cm = 1 km, a distância é 4 km. Identifique a
              unidade antes de registrar a resposta.
            </p>
          </article>
          <article className='border rounded-xl p-5'>
            <h3 className='font-black'>Use a taxa unitária</h3>
            <p className='text-sm text-slate-600 mt-2'>
              Se um carro percorre 300 km com 20 L, sua taxa é{" "}
              <MathRenderer expression='300÷20=15' /> km/L. Com 30 L, mantendo a
              mesma eficiência, percorre <MathRenderer expression='15×30=450' />{" "}
              km.
            </p>
          </article>
        </div>
        <p className='text-sm text-slate-600 mt-4'>
          Uma relação aparentemente direta pode deixar de ser proporcional se
          houver uma taxa fixa, desconto por faixa, mudança de ritmo ou outra
          condição que altere o fator por unidade. Por exemplo, uma taxa de
          entrega fixa faz com que o preço total não seja simplesmente
          proporcional ao peso do pedido. Nesse caso, modele a situação antes de
          aplicar a Regra de Três.
        </p>
        <div className='tip rounded-xl p-4 mt-4 text-sm'>
          <b>Relação com outros estudos:</b> a Regra de Três usa razões e
          proporções. Se precisar rever esses fundamentos, visite{" "}
          <Link
            to='/matematica/razao-proporcao'
            className='font-bold text-indigo-800 hover:underline'
          >
            Razão e Proporção
          </Link>
          ; para aplicações com porcentagens, consulte{" "}
          <Link
            to='/matematica/matematica-financeira'
            className='font-bold text-indigo-800 hover:underline'
          >
            Matemática Financeira
          </Link>
          .
        </div>
      </Section>

      <Section number='✓' title='Checklist e erros frequentes'>
        <ol className='grid md:grid-cols-2 gap-3 text-sm'>
          {[
            "Nomeei as grandezas e alinhei os valores correspondentes?",
            "Identifiquei qual quantidade é desconhecida e escrevi x no lugar certo?",
            "A relação é realmente proporcional nas condições do enunciado?",
            "Quando aumento uma grandeza, a incógnita aumenta ou diminui?",
            "Na composta, analisei cada grandeza em relação à incógnita separadamente?",
            "Conferi a conta, a unidade e o sentido do resultado?",
          ].map((text, i) => (
            <li key={text} className='bg-slate-50 border rounded-xl p-4'>
              <b className='text-indigo-800'>{i + 1}.</b> {text}
            </li>
          ))}
        </ol>
        <div className='bg-rose-50 rounded-xl p-4 mt-4 text-sm'>
          <b>Erros comuns:</b> multiplicar cruzado sem verificar a
          proporcionalidade; misturar unidades; inverter uma razão sem
          justificar pela relação inversa; esquecer que uma mesma obra,
          distância ou produção precisa permanecer fixa no contexto.
        </div>
      </Section>

      <section className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black'>Continue estudando</h2>
        <div className='grid md:grid-cols-2 gap-3 mt-4'>
          <Link
            to='/matematica/razao-proporcao'
            className='rounded-xl border p-4 hover:bg-indigo-50'
          >
            <b className='text-indigo-900'>Razão e Proporção →</b>
            <p className='text-sm text-slate-600 mt-1'>
              Revise razões equivalentes e a propriedade fundamental das
              proporções.
            </p>
          </Link>
          <Link
            to='/matematica/matematica-financeira'
            className='rounded-xl border p-4 hover:bg-indigo-50'
          >
            <b className='text-indigo-900'>Matemática Financeira →</b>
            <p className='text-sm text-slate-600 mt-1'>
              Aplique proporções em taxas, porcentagens e situações de dinheiro.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export function RuleOfThreeExamples() {
  return (
    <div className='space-y-5'>
      <div className='bg-white rounded-3xl border p-7 shadow-sm'>
        <span className='text-xs font-bold uppercase tracking-widest text-indigo-600'>
          Exemplos resolvidos
        </span>
        <h1 className='text-3xl font-black mt-2'>
          Acompanhe cada decisão e cada conta
        </h1>
        <p className='text-slate-600 mt-2'>
          Em todos os exemplos, primeiro identifique a relação; depois monte e
          resolva a conta.
        </p>
      </div>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          Exemplo 1 — Compra (direta)
        </h2>
        <p className='mt-2 text-slate-600'>
          Se 5 kg de arroz custam R$ 20, quanto custam 8 kg?
        </p>
        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            Mais quilos ao mesmo preço unitário custam mais: relação direta.
          </div>
          <div className='step' data-step='2'>
            Tabela: 5 kg ↔ R$ 20; 8 kg ↔ R$ x.
          </div>
          <div className='step' data-step='3'>
            Proporção: <MathRenderer expression={String.raw`5/8=20/x`} />.
            Multiplicando cruzado: <MathRenderer expression='5x=160' />.
          </div>
          <div className='step' data-step='4'>
            <MathRenderer expression='x=160÷5=32' />. Resposta: <b>R$ 32</b>.
          </div>
        </div>
      </article>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          Exemplo 2 — Velocidade e tempo (inversa)
        </h2>
        <p className='mt-2 text-slate-600'>
          Um carro a 60 km/h faz uma viagem em 4 horas. Em quanto tempo faria a
          mesma viagem a 80 km/h?
        </p>
        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            Para a mesma distância, maior velocidade significa menor tempo:
            relação inversa.
          </div>
          <div className='step' data-step='2'>
            Mantenha velocidade × tempo: <MathRenderer expression='60×4=80×x' />
            .
          </div>
          <div className='step' data-step='3'>
            <MathRenderer expression='240=80x' />, então{" "}
            <MathRenderer expression='x=3' />.
          </div>
          <div className='step' data-step='4'>
            Resposta: <b>3 horas</b>. Conferência: 60×4 e 80×3 dão 240 km.
          </div>
        </div>
      </article>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          Exemplo 3 — Trabalhadores e prazo (inversa)
        </h2>
        <p className='mt-2 text-slate-600'>
          3 pedreiros constroem um muro em 12 dias. Quantos dias levariam 4
          pedreiros no mesmo ritmo?
        </p>
        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            Mais pedreiros fazem a mesma obra em menos dias: relação inversa.
          </div>
          <div className='step' data-step='2'>
            Produto constante: <MathRenderer expression='3×12=4×x' />.
          </div>
          <div className='step' data-step='3'>
            <MathRenderer expression='36=4x' />, logo{" "}
            <MathRenderer expression='x=9' />.
          </div>
          <div className='step' data-step='4'>
            Resposta: <b>9 dias</b>.
          </div>
        </div>
      </article>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          Exemplo 4 — Produção por tempo (direta)
        </h2>
        <p className='mt-2 text-slate-600'>
          Uma torneira enche 15 litros em 3 minutos. Quantos litros enche em 7
          minutos no mesmo fluxo?
        </p>
        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            Mais tempo com fluxo constante significa mais litros: relação
            direta.
          </div>
          <div className='step' data-step='2'>
            Taxa por minuto: 15÷3=5 litros. Em 7 minutos: 5×7=35.
          </div>
          <div className='step' data-step='3'>
            Resposta: <b>35 litros</b>.
          </div>
        </div>
      </article>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          Exemplo 5 — Regra de Três composta
        </h2>
        <p className='mt-2 text-slate-600'>
          8 máquinas produzem 400 peças em 5 dias. Quantas peças 4 máquinas
          produzem em 10 dias?
        </p>
        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            Menos máquinas produzem menos peças: direta, fator 4÷8.
          </div>
          <div className='step' data-step='2'>
            Mais dias produzem mais peças: direta, fator 10÷5.
          </div>
          <div className='step' data-step='3'>
            Aplique os fatores: 400×(4÷8)×(10÷5)=400.
          </div>
          <div className='step' data-step='4'>
            Resposta: <b>400 peças</b>. A metade das máquinas durante o dobro do
            tempo mantém a produção.
          </div>
        </div>
      </article>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          Exemplo 6 — Regra de Três composta com relações inversas
        </h2>
        <p className='mt-2 text-slate-600'>
          6 trabalhadores, trabalhando 8 horas por dia, concluem uma tarefa em
          10 dias. Em quantos dias 8 trabalhadores, trabalhando 6 horas por dia,
          fazem a mesma tarefa?
        </p>
        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            Mais trabalhadores reduzem os dias: inversa, fator 6÷8.
          </div>
          <div className='step' data-step='2'>
            Mais horas diárias também reduzem os dias: inversa, fator 8÷6.
          </div>
          <div className='step' data-step='3'>
            10×(6÷8)×(8÷6)=10.
          </div>
          <div className='step' data-step='4'>
            Resposta: <b>10 dias</b>. As duas mudanças se compensam.
          </div>
        </div>
      </article>
      <article className='bg-white rounded-2xl border p-6 shadow-sm'>
        <h2 className='text-xl font-black text-indigo-800'>
          Exemplo 7 — Escala e conversão de unidades
        </h2>
        <p className='mt-2 text-slate-600'>
          Em um mapa de escala 1:100.000, a distância entre duas cidades mede 4
          cm. Qual é a distância real em quilômetros?
        </p>
        <div className='space-y-3 mt-4 text-sm'>
          <div className='step' data-step='1'>
            A escala indica que 1 cm no mapa representa 100.000 cm na realidade.
          </div>
          <div className='step' data-step='2'>
            Multiplique: 4×100.000=400.000 cm.
          </div>
          <div className='step' data-step='3'>
            Converta: 100.000 cm = 1 km; então 400.000 cm = 4 km.
          </div>
          <div className='step' data-step='4'>
            Resposta: <b>4 km</b>.
          </div>
        </div>
      </article>
    </div>
  );
}
