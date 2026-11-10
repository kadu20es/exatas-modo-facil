import CourseHeader from "../../../header/CourseHeader.component";
import { MathText } from "../../../Math/MathRenderer";

const Card = ({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) => (
  <article className='bg-white rounded-2xl border p-6 shadow-sm'>
    <div className='flex items-center gap-3'>
      <span className='w-9 h-9 rounded-full bg-sky-100 text-sky-700 grid place-items-center font-black'>
        {n}
      </span>
      <h2 className='text-xl font-black'>{title}</h2>
    </div>
    <div className='mt-4 text-slate-600 leading-7'>{children}</div>
  </article>
);
export function ProbabilityTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='Curso completo'
        title='A Matemática da Sorte'
        description='Prevemos possibilidades comparando o universo de resultados com aquilo
          que queremos que aconteça. Probabilidade transforma incerteza em
          frações e cálculos.'
        bgClass='bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-950 text-white shadow-xl'
        stats={[
          { value: "10", label: "passos lógicos" },
          { value: "🎱", label: "laboratório da urna" },
          { value: "✓", label: "resoluções em frações" },
          { value: "100", label: "exercícios" },
        ]}
      />

      <div className='tip rounded-2xl p-5'>
        <b>Ideia central:</b> casos favoráveis divididos pelo total de casos
        possíveis. A dificuldade costuma estar em contar corretamente os
        resultados.
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <Card n='1' title='A fórmula de Laplace'>
          <p>
            Quando todos os resultados são igualmente possíveis, a probabilidade
            de um evento A é a razão entre os casos favoráveis e o tamanho do
            espaço amostral Ω.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathText>{"\\[P(A)=\\frac{n(A)}{n(\\Omega)}\\]"}</MathText>
          </div>
          <p className='mt-3'>O valor fica entre 0 (impossível) e 1 (certo).</p>
        </Card>
        <Card n='2' title='Espaço amostral e evento'>
          <p>
            O espaço amostral Ω reúne todos os resultados possíveis. O evento A
            é o conjunto dos resultados que respondem ao que a questão
            perguntou.
          </p>
          <ul className='list-disc pl-5 mt-3 space-y-1'>
            <li>Dado: Ω = {"{1,2,3,4,5,6}"} e n(Ω)=6.</li>
            <li>Moeda: Ω = {"{cara,coroa}"} e n(Ω)=2.</li>
            <li>Baralho padrão: 52 cartas.</li>
          </ul>
        </Card>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <Card n='3' title='Evento e complementar'>
          <p>
            Ao lançar um dado, os resultados pares são {"{2,4,6}"}. Assim,
            P(par)=3/6=1/2. O evento complementar reúne tudo que não pertence a
            A.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathText>{"\\[P(A^c)=1-P(A)\\]"}</MathText>
          </div>
          <p className='mt-3'>
            Se P(chuva)=1/5, então P(não chover)=1−1/5=4/5. Para perguntas “pelo
            menos um”, muitas vezes é mais simples subtrair a chance de nenhum.
          </p>
        </Card>
        <Card n='4' title='Regra do OU: união'>
          <p>
            Para “A ou B”, some as probabilidades e desconte a interseção, que
            seria contada duas vezes. Se os eventos são disjuntos, a interseção
            é zero.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathText>{"\\[P(A\\cup B)=P(A)+P(B)-P(A\\cap B)\\]"}</MathText>
          </div>
          <p className='mt-3'>
            Exemplo: rei ou copas em um baralho: 4/52 + 13/52 − 1/52 = 16/52.
          </p>
        </Card>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <Card n='5' title='Regra do E e independência'>
          <p>
            Para eventos independentes, a ocorrência de um não altera a
            probabilidade do outro; nesse caso, multiplicamos. Duas moedas, por
            exemplo, têm chance 1/2 × 1/2 = 1/4 de dar cara nas duas.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathText>
              {
                "\\[P(A\\cap B)=P(A)\\cdot P(B)\\quad\\text{(eventos independentes)}\\]"
              }
            </MathText>
          </div>
        </Card>
        <Card n='6' title='Condicional e sorteios sem reposição'>
          <p>
            “Sabendo que B ocorreu” reduz o universo aos resultados de B. A
            probabilidade condicional divide a interseção pelo novo universo. Ao
            retirar uma bola sem devolvê-la, as quantidades mudam antes do
            próximo sorteio.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathText>{"\\[P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}\\]"}</MathText>
          </div>
          <p className='mt-3'>
            Exemplo: sabendo que o resultado do dado é par, o universo passa a
            ser {"{2,4,6}"}.
          </p>
        </Card>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <Card n='7' title='Teorema de Bayes'>
          <p>
            Bayes atualiza uma probabilidade inicial quando recebemos uma nova
            evidência. Em problemas de testes ou máquinas, compare a
            contribuição de cada origem para o resultado observado.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathText>
              {"\\[P(A\\mid B)=\\frac{P(B\\mid A)P(A)}{P(B)}\\]"}
            </MathText>
          </div>
        </Card>
        <Card n='8' title='Checklist para resolver'>
          <ul className='list-disc pl-5 space-y-2'>
            <li>Defina o espaço amostral e seu total.</li>
            <li>Conte os casos favoráveis sem repetir resultados.</li>
            <li>
              Observe as palavras “ou”, “e”, “pelo menos um” e “sabendo que”.
            </li>
            <li>Verifique se há reposição e simplifique a fração.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
