import CourseHeader from "../../../header/CourseHeader.component";
import { MathRenderer, MathText } from "../../../Math/MathRenderer";

const nested = [
  ["ℕ", "Naturais", "0, 1, 2, 3, …"],
  ["ℤ", "Inteiros", "…, −2, −1, 0, 1, 2, …"],
  ["ℚ", "Racionais", "Números que podem ser escritos como fração"],
  ["ℝ", "Reais", "Racionais e irracionais"],
];
export function NumberSetsTheory() {
  return (
    <div className='space-y-7'>
      <CourseHeader
        eyebrow='CURSO DO ZERO'
        title='Conjuntos numéricos: As caixas da Matemática'
        description='Os conjuntos numéricos foram criados conforme surgiram novas
          necessidades: contar, representar dívidas, partes de um todo e números
          que não podem ser escritos como fração.'
        bgClass='bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900'
        stats={[
          { value: "8", label: "conceitos" },
          { value: "100", label: "exercícios" },
          { value: "✓", label: "dízimas periódicas" },
          { value: "📦", label: "diagrama interativo" },
        ]}
      />

      <div className='tip rounded-2xl p-5'>
        <b>Regra das caixas:</b> os conjuntos são encaixados. Todo número
        natural também é inteiro, racional e real:{" "}
        <MathText>
          {
            "\\(\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}\\)"
          }
        </MathText>
        .
      </div>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-5'>
        {nested.map(([symbol, name, description], i) => (
          <article
            key={symbol}
            className='bg-white rounded-2xl border p-5 shadow-sm'
          >
            <span className='text-xs uppercase tracking-widest font-bold text-indigo-600'>
              Conjunto {i + 1}
            </span>
            <h2 className='text-2xl font-black mt-2'>
              {name} <MathText>{`\\(${symbol}\\)`}</MathText>
            </h2>
            <p className='text-sm text-slate-600 mt-3'>{description}</p>
            <div className='paper p-3 mt-4 text-center'>
              <MathText>
                {symbol === "ℕ"
                  ? "\\[0,1,2,3,\\ldots\\]"
                  : symbol === "ℤ"
                    ? "\\[\\ldots,-2,-1,0,1,2,\\ldots\\]"
                    : symbol === "ℚ"
                      ? "\\[\\frac{a}{b},\\;a,b\\in\\mathbb{Z},\\;b\\ne0\\]"
                      : "\\[\\mathbb{Q}\\cup\\mathbb{I}\\]"}
              </MathText>
            </div>
          </article>
        ))}
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Irracionais (𝕀)</h2>
          <p className='mt-3 text-slate-600'>
            Não podem ser expressos como razão de dois inteiros. Sua
            representação decimal é infinita e não periódica.
          </p>
          <div className='paper p-4 rounded-xl text-center mt-4'>
            <MathRenderer
              expression={"\\sqrt{2}=1.4142\\ldots\\qquad \\pi=3.14159\\ldots"}
              display
            />
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Símbolos essenciais</h2>
          <div className='space-y-2 text-sm mt-4'>
            <p>
              <b>∈</b> pertence; <b>∉</b> não pertence.
            </p>
            <p>
              <b>⊂</b> está contido; <b>⊄</b> não está contido.
            </p>
            <p>
              <b>∪</b> união; <b>∩</b> interseção.
            </p>
            <p>
              <b>∅</b> conjunto vazio; <b>ℝ</b> conjunto dos reais.
            </p>
          </div>
        </article>
      </div>
      <div className='grid lg:grid-cols-2 gap-6'>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>
            Dízima periódica e fração geratriz
          </h2>
          <p className='mt-3 text-slate-600'>
            Dízimas periódicas são racionais. Use uma equação para eliminar a
            repetição. Em 0,333…, seja x = 0,333…; então 10x = 3,333…, e 9x = 3,
            logo x = 1/3.
          </p>
          <div className='paper p-4 rounded-xl text-center mt-4'>
            <MathText>{"\\[0,\\overline{3}=\\frac{1}{3}\\]"}</MathText>
          </div>
        </article>
        <article className='bg-white rounded-2xl border p-6'>
          <h2 className='text-xl font-black'>Intervalos reais</h2>
          <p className='mt-3 text-slate-600'>
            Intervalo descreve todos os reais entre extremos. Parêntese indica
            extremo aberto; colchete indica extremo incluído.
          </p>
          <div className='space-y-2 mt-4 text-sm'>
            <div className='paper p-3 rounded-lg'>
              <MathText>{"\\((2,5)=\\{x\\in\\mathbb R:2<x<5\\}\\)"}</MathText>
            </div>
            <div className='paper p-3 rounded-lg'>
              <MathText>
                {"\\([2,5]=\\{x\\in\\mathbb R:2\\le x\\le5\\}\\)"}
              </MathText>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
