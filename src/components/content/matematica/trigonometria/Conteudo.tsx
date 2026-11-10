import CourseHeader from "../../../header/CourseHeader.component";
import { MathRenderer } from "../../../Math/MathRenderer";

export function TrigonometryTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow=' A Magia das Proporções'
        title='Seno, Cosseno e Tangente'
        description='A trigonometria estuda a relação entre os ângulos de um triângulo e o
                tamanho dos seus lados. Ela permite calcular alturas e distâncias que
                não podem ser medidas diretamente.'
        bgClass='bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-950 text-white shadow-xl'
        stats={[
          { value: "4", label: "fórmulas chave" },
          { value: "📐", label: "simulador dinâmico" },
          { value: "✓", label: "tabela de ângulos" },
          { value: "100", label: "exercícios" },
        ]}
      />

      <div className='tip rounded-2xl p-5'>
        <b>Regra de ouro:</b> as razões trigonométricas apresentadas aqui se
        aplicam ao triângulo retângulo, que possui um ângulo de 90°. Identifique
        a hipotenusa e os catetos antes de calcular.
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>1. Teorema de Pitágoras</h2>
          <p className='mt-4 text-slate-600 leading-7'>
            O quadrado da hipotenusa, o maior lado e oposto ao ângulo de 90°, é
            igual à soma dos quadrados dos catetos.
          </p>
          <div className='paper rounded-xl p-4 mt-4 text-center'>
            <MathRenderer display expression={String.raw`a^2=b^2+c^2`} />
          </div>
          <p className='mt-4 text-sm text-slate-600'>
            Use Pitágoras quando conhecer dois lados e quiser descobrir o
            terceiro, sem precisar usar os outros ângulos.
          </p>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>2. Nomeando os catetos</h2>
          <p className='mt-4 text-slate-600 leading-7'>
            A hipotenusa é fixa. Os nomes dos catetos dependem do ângulo de
            referência α.
          </p>
          <div className='grid gap-3 mt-4 text-sm'>
            <div className='bg-rose-50 text-rose-900 p-4 rounded-xl'>
              <b>Cateto oposto:</b> fica de frente para o ângulo e não toca
              nele.
            </div>
            <div className='bg-emerald-50 text-emerald-900 p-4 rounded-xl'>
              <b>Cateto adjacente:</b> toca no ângulo e forma-o junto com a
              hipotenusa.
            </div>
          </div>
        </article>
      </div>
      <article className='bg-white rounded-2xl border p-6'>
        <h2 className='text-2xl font-black'>3. A fórmula SOH CAH TOA</h2>
        <p className='mt-3 text-slate-600'>
          O mnemônico relaciona seno, cosseno e tangente aos lados do triângulo.
        </p>
        <div className='grid md:grid-cols-3 gap-4 mt-5'>
          {[
            [
              "SOH",
              "Seno = Oposto / Hipotenusa",
              String.raw`\sin(\theta)=\frac{\text{cateto oposto}}{\text{hipotenusa}}`,
              "text-rose-700",
            ],
            [
              "CAH",
              "Cosseno = Adjacente / Hipotenusa",
              String.raw`\cos(\theta)=\frac{\text{cateto adjacente}}{\text{hipotenusa}}`,
              "text-emerald-700",
            ],
            [
              "TOA",
              "Tangente = Oposto / Adjacente",
              String.raw`\tan(\theta)=\frac{\text{cateto oposto}}{\text{cateto adjacente}}`,
              "text-indigo-700",
            ],
          ].map(([name, label, formula, color]) => (
            <div className='paper rounded-xl p-4 text-center' key={name}>
              <div className={`font-black text-2xl mb-1 ${color}`}>{name}</div>
              <div className='text-sm font-bold text-slate-500'>{label}</div>
              <MathRenderer display expression={formula} />
            </div>
          ))}
        </div>
      </article>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>4. Tabela de ângulos notáveis</h2>
          <p className='mt-3 text-slate-600 text-sm'>
            Os valores de 30°, 45° e 60° aparecem com frequência. Use a tabela
            para resolver exercícios sem calculadora.
          </p>
          <div className='overflow-x-auto mt-4'>
            <table className='w-full text-center border-collapse'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='p-2 border'>Ângulo</th>
                  <th className='p-2 border text-rose-700'>Seno</th>
                  <th className='p-2 border text-emerald-700'>Cosseno</th>
                  <th className='p-2 border text-indigo-700'>Tangente</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "30°",
                    String.raw`\frac{1}{2}`,
                    String.raw`\frac{\sqrt{3}}{2}`,
                    String.raw`\frac{\sqrt{3}}{3}`,
                  ],
                  [
                    "45°",
                    String.raw`\frac{\sqrt{2}}{2}`,
                    String.raw`\frac{\sqrt{2}}{2}`,
                    "1",
                  ],
                  [
                    "60°",
                    String.raw`\frac{\sqrt{3}}{2}`,
                    String.raw`\frac{1}{2}`,
                    String.raw`\sqrt{3}`,
                  ],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((v, i) => (
                      <td key={i} className='p-2 border font-semibold'>
                        {i === 0 ? v : <MathRenderer expression={v} />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>5. Dicas de resolução</h2>
          <ol className='mt-4 space-y-3 text-sm text-slate-700 list-decimal list-inside'>
            {[
              "Leia o problema e identifique o ângulo dado.",
              "Veja qual lado já tem valor conhecido.",
              "Identifique qual lado o problema pede.",
              "Escolha a razão que relaciona o ângulo e os dois lados envolvidos.",
            ].map((t) => (
              <li key={t} className='bg-slate-50 p-3 rounded border'>
                {t}
              </li>
            ))}
          </ol>
          <p className='mt-4 text-sm text-slate-600'>
            Se você conhece o cateto oposto e a hipotenusa, use seno; para
            adjacente e hipotenusa, use cosseno; para os dois catetos, use
            tangente.
          </p>
        </article>
      </div>
    </div>
  );
}
