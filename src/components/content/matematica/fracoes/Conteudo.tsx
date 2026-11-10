import CourseHeader from "../../../header/CourseHeader.component";
import { MathText } from "../../../Math/MathRenderer";
import { MiniFractionVisual } from "../../../Math/MiniFractionVisual";

export function FractionTheory() {
  return (
    <>
      <section id='sec-teoria' className='space-y-7'>
        <CourseHeader
          eyebrow='CURSO DO ZERO'
          title='Frações sem decorar regras'
          description='Cada assunto começa pela ideia...'
          bgClass='bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900'
          stats={[
            { value: "10", label: "módulos" },
            { value: "100", label: "exercícios" },
            { value: "✓", label: "resolução detalhada" },
            { value: "🔬", label: "laboratório visual" },
          ]}
        />

        {"\r\n\r\n      "}
        <div className='tip rounded-2xl p-5 shadow-sm'>
          <b>{"Como estudar:"}</b>
          {
            " leia a ideia, observe o desenho, faça o exemplo\r\n        acompanhando os passos e só então tente os exercícios. Se esquecer uma regra, volte ao procedimento — não é\r\n        preciso decorar tudo de uma vez."
          }
        </div>
        {"\r\n\r\n      "}
        <div className='grid lg:grid-cols-2 gap-6'>
          {"\r\n        "}
          <article className='bg-white rounded-2xl border p-6 shadow-sm'>
            {"\r\n          "}
            <div className='flex items-center gap-3'>
              <span className='w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-black'>
                {"1"}
              </span>
              {"\r\n            "}
              <h2 className='text-xl font-black'>{"O que é uma fração?"}</h2>
              {"\r\n          "}
            </div>
            {"\r\n          "}
            <p className='mt-4 text-slate-600 leading-7'>
              {
                "Uma fração representa uma ou mais partes de um inteiro dividido em\r\n            "
              }
              <b>{"partes iguais"}</b>
              <MathText>
                {
                  ". Em \\(\\frac{3}{4}\\), o 4 diz em quantas partes iguais o inteiro foi dividido; o 3 diz\r\n            quantas dessas partes estamos considerando.\r\n          "
                }
              </MathText>
            </p>
            {"\r\n          "}
            <div className='my-5 flex justify-center'>
              {"\r\n            "}
              <MiniFractionVisual />
              {"\r\n          "}
            </div>
            {"\r\n          "}
            <div className='grid sm:grid-cols-2 gap-3 text-sm'>
              {"\r\n            "}
              <div className='bg-indigo-50 rounded-xl p-4'>
                <b>{"Numerador"}</b>
                <br />
                {"quantas partes pegamos."}
              </div>
              {"\r\n            "}
              <div className='bg-amber-50 rounded-xl p-4'>
                <b>{"Denominador"}</b>
                <br />
                {"em quantas partes iguais dividimos."}
              </div>
              {"\r\n          "}
            </div>
            {"\r\n        "}
          </article>
          {"\r\n\r\n        "}
          <article className='bg-white rounded-2xl border p-6 shadow-sm'>
            {"\r\n          "}
            <div className='flex items-center gap-3'>
              <span className='w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 grid place-items-center font-black'>
                {"2"}
              </span>
              {"\r\n            "}
              <h2 className='text-xl font-black'>{"Frações equivalentes"}</h2>
              {"\r\n          "}
            </div>
            {"\r\n          "}
            <p className='mt-4 text-slate-600 leading-7'>
              {
                "Frações equivalentes têm a mesma quantidade, embora possam estar\r\n            divididas em números diferentes de partes. Multiplicar ou dividir "
              }
              <b>
                {"numerador e denominador pelo mesmo\r\n              número"}
              </b>
              {" mantém o valor."}
            </p>
            {"\r\n          "}
            <div className='paper rounded-xl p-5 mt-4 text-center text-lg'>
              <MathText>
                {
                  "\r\n            \\[\\frac12=\\frac{1\\times2}{2\\times2}=\\frac24=\\frac{2\\times2}{4\\times2}=\\frac48\\]"
                }
              </MathText>
            </div>
            {"\r\n          "}
            <div className='success rounded-xl p-4 mt-4 text-sm'>
              <b>{"Por que funciona?"}</b>
              {
                " Se você dobra o número de pedaços,\r\n            também dobra a quantidade de pedaços que representa a mesma parte do inteiro."
              }
            </div>
            {"\r\n        "}
          </article>
          {"\r\n      "}
        </div>
        {"\r\n\r\n      "}
        <div className='grid lg:grid-cols-2 gap-6'>
          {"\r\n        "}
          <article className='bg-white rounded-2xl border p-6 shadow-sm'>
            {"\r\n          "}
            <h2 className='text-xl font-black'>{"3. Simplificação"}</h2>
            {"\r\n          "}
            <p className='mt-3 text-slate-600'>
              {
                "Simplificar é escrever a mesma quantidade usando números menores."
              }
            </p>
            {"\r\n          "}
            <div className='space-y-3 mt-4'>
              {"\r\n            "}
              <div className='step' data-step='1'>
                <b>{"Procure um divisor comum."}</b>
                {"\r\n              "}
                <div className='mt-1'>
                  <MathText>
                    {"Em \\(\\frac{12}{18}\\), 6 divide 12 e 18."}
                  </MathText>
                </div>
                {"\r\n            "}
              </div>
              {"\r\n            "}
              <div className='step' data-step='2'>
                <b>{"Divida os dois pelo mesmo número."}</b>
                {"\r\n              "}
                <div className='mt-1'>
                  <MathText>{"\\(12\\div6=2\\) e \\(18\\div6=3\\)."}</MathText>
                </div>
                {"\r\n            "}
              </div>
              {"\r\n            "}
              <div className='step' data-step='3'>
                <b>{"Escreva a fração simplificada."}</b>
                {"\r\n              "}
                <div className='mt-1'>
                  <MathText>{"\\[\\frac{12}{18}=\\frac23\\]"}</MathText>
                </div>
                {"\r\n            "}
              </div>
              {"\r\n          "}
            </div>
            {"\r\n        "}
          </article>
          {"\r\n        "}
          <article className='bg-white rounded-2xl border p-6 shadow-sm'>
            {"\r\n          "}
            <h2 className='text-xl font-black'>{"4. Comparação de frações"}</h2>
            {"\r\n          "}
            <div className='space-y-3 mt-4 text-sm'>
              {"\r\n            "}
              <div className='bg-slate-50 rounded-xl p-4'>
                <b>{"Mesmo denominador:"}</b>
                <MathText>
                  {
                    " compare os numeradores.\r\n              \\(\\frac35>\\frac15\\)."
                  }
                </MathText>
              </div>
              {"\r\n            "}
              <div className='bg-slate-50 rounded-xl p-4'>
                <b>{"Mesmo numerador:"}</b>
                <MathText>
                  {
                    " o menor denominador produz partes maiores.\r\n              \\(\\frac12>\\frac13\\)."
                  }
                </MathText>
              </div>
              {"\r\n            "}
              <div className='bg-slate-50 rounded-xl p-4'>
                <b>{"Denominadores diferentes:"}</b>
                {
                  " transforme as frações para um\r\n              denominador comum e compare os numeradores."
                }
              </div>
              {"\r\n          "}
            </div>
            {"\r\n          "}
            <div className='mt-4 text-center'>
              <MathText>
                {
                  "\\[\\frac23=\\frac6{9}\\quad\\text{e}\\quad\\frac34=\\frac9{12}\\]"
                }
              </MathText>
            </div>
            {"\r\n        "}
          </article>
          {"\r\n      "}
        </div>
        {"\r\n\r\n      "}
        <div className='bg-white rounded-2xl border shadow-sm p-6'>
          {"\r\n        "}
          <h2 className='text-2xl font-black'>{"5. Adição e subtração"}</h2>
          {"\r\n        "}
          <div className='grid lg:grid-cols-2 gap-6 mt-5'>
            {"\r\n          "}
            <div>
              {"\r\n            "}
              <h3 className='font-bold text-indigo-800'>
                {"Denominadores iguais"}
              </h3>
              {"\r\n            "}
              <p className='text-sm text-slate-600 mt-2'>
                {
                  "As partes têm o mesmo tamanho. Conservamos o denominador e somamos ou\r\n              subtraímos os numeradores."
                }
              </p>
              {"\r\n            "}
              <div className='paper rounded-xl p-5 mt-3 text-center'>
                <MathText>
                  {"\\[\\frac25+\\frac15=\\frac{2+1}{5}=\\frac35\\]"}
                </MathText>
              </div>
              {"\r\n          "}
            </div>
            {"\r\n          "}
            <div>
              {"\r\n            "}
              <h3 className='font-bold text-indigo-800'>
                {"Denominadores diferentes — método do MMC"}
              </h3>
              {"\r\n            "}
              <ol className='mt-3 space-y-2 text-sm list-decimal list-inside text-slate-700'>
                {"\r\n              "}
                <li>
                  {"Encontre o "}
                  <b>{"MMC"}</b>
                  {" dos denominadores."}
                </li>
                {"\r\n              "}
                <li>
                  {"O MMC será o "}
                  <b>{"novo denominador"}</b>
                  {"."}
                </li>
                {"\r\n              "}
                <li>
                  {"Para cada fração, faça "}
                  <b>{"MMC ÷ denominador original"}</b>
                  {"."}
                </li>
                {"\r\n              "}
                <li>
                  {"Multiplique o resultado pelo "}
                  <b>{"numerador original"}</b>
                  {"."}
                </li>
                {"\r\n              "}
                <li>{"Repita para a outra fração."}</li>
                {"\r\n              "}
                <li>
                  {"Some ou subtraia os "}
                  <b>{"novos numeradores"}</b>
                  {"."}
                </li>
                {"\r\n              "}
                <li>{"Simplifique, se for possível."}</li>
                {"\r\n            "}
              </ol>
              {"\r\n          "}
            </div>
            {"\r\n        "}
          </div>
          {"\r\n        "}
          <div className='paper rounded-2xl p-5 mt-6'>
            {"\r\n          "}
            <div className='text-sm font-bold text-indigo-700 mb-3'>
              {"EXEMPLO GUIADO"}
            </div>
            {"\r\n          "}
            <div className='grid md:grid-cols-2 gap-4 text-sm'>
              {"\r\n            "}
              <div className='step' data-step='1'>
                <b>{"MMC:"}</b>
                <MathText>{" \\(MMC(4,3)=12\\)."}</MathText>
              </div>
              {"\r\n            "}
              <div className='step' data-step='2'>
                <b>{"Primeira fração:"}</b>
                <MathText>
                  {
                    " \\(12\\div4=3\\); \\(3\\times1=3\\). Então\r\n              \\(\\frac14=\\frac3{12}\\)."
                  }
                </MathText>
              </div>
              {"\r\n            "}
              <div className='step' data-step='3'>
                <b>{"Segunda fração:"}</b>
                <MathText>
                  {
                    " \\(12\\div3=4\\); \\(4\\times2=8\\). Então\r\n              \\(\\frac23=\\frac8{12}\\)."
                  }
                </MathText>
              </div>
              {"\r\n            "}
              <div className='step' data-step='4'>
                <b>{"Some:"}</b>
                <MathText>
                  {" \\(\\frac3{12}+\\frac8{12}=\\frac{11}{12}\\)."}
                </MathText>
              </div>
              {"\r\n          "}
            </div>
            {"\r\n        "}
          </div>
          {"\r\n      "}
        </div>
        {"\r\n\r\n      "}
        <div className='grid lg:grid-cols-2 gap-6'>
          {"\r\n        "}
          <article className='bg-white rounded-2xl border p-6 shadow-sm'>
            {"\r\n          "}
            <h2 className='text-xl font-black'>
              {"6. Frações impróprias e números mistos"}
            </h2>
            {"\r\n          "}
            <p className='mt-3 text-slate-600'>
              {
                "Quando o numerador é maior ou igual ao denominador, temos uma fração imprópria.\r\n            Ela pode representar mais de um inteiro."
              }
            </p>
            {"\r\n          "}
            <div className='paper rounded-xl p-5 mt-4'>
              {"\r\n            "}
              <b>{"Fração imprópria → número misto"}</b>
              {"\r\n            "}
              <div className='space-y-2 mt-3 text-sm'>
                <MathText>{"\\(\\frac74\\)"}</MathText>
              </div>
              {"\r\n            "}
              <div className='space-y-2 text-sm'>
                <MathText>{"\\(7\\div4=1\\) com resto \\(3\\)."}</MathText>
              </div>
              {"\r\n            "}
              <div className='space-y-2 text-sm'>
                {
                  "O quociente é a parte inteira, o resto vira o numerador e o denominador\r\n              permanece."
                }
              </div>
              {"\r\n            "}
              <div className='text-center mt-2'>
                <MathText>{"\\[\\boxed{\\frac74=1\\frac34}\\]"}</MathText>
              </div>
              {"\r\n          "}
            </div>
            {"\r\n          "}
            <div className='bg-indigo-50 rounded-xl p-4 mt-4 text-sm'>
              <b>{"Misto → imprópria:"}</b>
              {
                " multiplique a parte inteira\r\n            pelo denominador, some o numerador e conserve o\r\n            denominador."
              }
              <br />
              <MathText>
                {"\\[2\\frac34=\\frac{2\\times4+3}{4}=\\frac{11}{4}\\]"}
              </MathText>
            </div>
            {"\r\n        "}
          </article>
          {"\r\n        "}
          <article className='bg-white rounded-2xl border p-6 shadow-sm'>
            {"\r\n          "}
            <h2 className='text-xl font-black'>{"7. Multiplicação"}</h2>
            {"\r\n          "}
            <p className='mt-3 text-slate-600'>
              {
                "Multiplique numerador com numerador e denominador com denominador. Depois\r\n            simplifique."
              }
            </p>
            {"\r\n          "}
            <div className='space-y-3 mt-4'>
              {"\r\n            "}
              <div className='step' data-step='1'>
                <MathText>{"\\[\\frac23\\times\\frac34\\]"}</MathText>
              </div>
              {"\r\n            "}
              <div className='step' data-step='2'>
                <MathText>
                  {"Multiplique os numeradores: \\(2\\times3=6\\)."}
                </MathText>
              </div>
              {"\r\n            "}
              <div className='step' data-step='3'>
                <MathText>
                  {"Multiplique os denominadores: \\(3\\times4=12\\)."}
                </MathText>
              </div>
              {"\r\n            "}
              <div className='step' data-step='4'>
                <MathText>{"\\[\\frac6{12}=\\frac12\\]"}</MathText>
              </div>
              {"\r\n          "}
            </div>
            {"\r\n        "}
          </article>
          {"\r\n      "}
        </div>
        {"\r\n\r\n      "}
        <div className='grid lg:grid-cols-2 gap-6'>
          {"\r\n        "}
          <article className='bg-white rounded-2xl border p-6 shadow-sm'>
            {"\r\n          "}
            <h2 className='text-xl font-black'>
              {"8. Divisão — entenda antes de aplicar a regra"}
            </h2>
            {"\r\n          "}
            <p className='mt-3 text-slate-600'>
              <MathText>
                {
                  "Dividir \\(\\frac34\\) por \\(\\frac12\\) significa perguntar: "
                }
              </MathText>
              <b>{"quantas metades\r\n              cabem em três quartos?"}</b>
            </p>
            {"\r\n          "}
            <div className='space-y-3 mt-4 text-sm'>
              {"\r\n            "}
              <div className='step' data-step='1'>
                <MathText>
                  {"Escreva a operação: \\(\\frac34\\div\\frac12\\)."}
                </MathText>
              </div>
              {"\r\n            "}
              <div className='step' data-step='2'>
                <MathText>
                  {"Mantenha a primeira fração: \\(\\frac34\\)."}
                </MathText>
              </div>
              {"\r\n            "}
              <div className='step' data-step='3'>
                <MathText>
                  {"Inverta a segunda: \\(\\frac12\\to\\frac21\\)."}
                </MathText>
              </div>
              {"\r\n            "}
              <div className='step' data-step='4'>
                <MathText>
                  {
                    "Troque \\(\\div\\) por \\(\\times\\): \\(\\frac34\\times\\frac21\\)."
                  }
                </MathText>
              </div>
              {"\r\n            "}
              <div className='step' data-step='5'>
                <MathText>
                  {"Multiplique e simplifique: \\(\\frac64=\\frac32\\)."}
                </MathText>
              </div>
              {"\r\n          "}
            </div>
            {"\r\n          "}
            <div className='warning rounded-xl p-4 mt-4 text-sm'>
              <b>{"Atenção:"}</b>
              {
                " nunca inverta a primeira fração. Na divisão,\r\n            somente a segunda fração é invertida."
              }
            </div>
            {"\r\n        "}
          </article>
          {"\r\n        "}
          <article className='bg-white rounded-2xl border p-6 shadow-sm'>
            {"\r\n          "}
            <h2 className='text-xl font-black'>{"9. Operações combinadas"}</h2>
            {"\r\n          "}
            <p className='mt-3 text-slate-600'>
              {
                "A ordem importa. Resolva primeiro parênteses; depois multiplicações e divisões;\r\n            por último adições e subtrações."
              }
            </p>
            {"\r\n          "}
            <div className='paper rounded-xl p-5 mt-4 text-sm'>
              {"\r\n            "}
              <div>
                <b>{"Exemplo:"}</b>
                <MathText>{" \\(\\frac12+\\frac13\\times\\frac34\\)"}</MathText>
              </div>
              {"\r\n            "}
              <div className='mt-3'>
                <MathText>
                  {"1. Multiplicação: \\(\\frac13\\times\\frac34=\\frac14\\)."}
                </MathText>
              </div>
              {"\r\n            "}
              <div>
                <MathText>
                  {"2. Adição: \\(\\frac12+\\frac14=\\frac34\\)."}
                </MathText>
              </div>
              {"\r\n            "}
              <div className='mt-2 text-center'>
                <MathText>{"\\[\\boxed{\\frac34}\\]"}</MathText>
              </div>
              {"\r\n          "}
            </div>
            {"\r\n          "}
            <div className='tip rounded-xl p-4 mt-4 text-sm'>
              <b>{"Regra prática:"}</b>
              {
                " não resolva simplesmente da esquerda para a\r\n            direita quando houver operações de prioridades diferentes."
              }
            </div>
            {"\r\n        "}
          </article>
          {"\r\n      "}
        </div>
        {"\r\n\r\n      "}
        <article className='bg-white rounded-2xl border p-6 shadow-sm'>
          {"\r\n        "}
          <h2 className='text-xl font-black'>
            {"10. Checklist para qualquer questão"}
          </h2>
          {"\r\n        "}
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 text-sm'>
            {"\r\n          "}
            <div className='bg-slate-50 rounded-xl p-4'>
              <b>{"① Identifique"}</b>
              <br />
              {"Qual operação aparece?"}
            </div>
            {"\r\n          "}
            <div className='bg-slate-50 rounded-xl p-4'>
              <b>{"② Prepare"}</b>
              <br />
              {"Precisa de MMC ou conversão?"}
            </div>
            {"\r\n          "}
            <div className='bg-slate-50 rounded-xl p-4'>
              <b>{"③ Calcule"}</b>
              <br />
              {"Siga os passos na ordem."}
            </div>
            {"\r\n          "}
            <div className='bg-slate-50 rounded-xl p-4'>
              <b>{"④ Confira"}</b>
              <br />
              {"Simplifique e veja se o resultado faz sentido.\r\n          "}
            </div>
            {"\r\n        "}
          </div>
          {"\r\n      "}
        </article>
        {"\r\n    "}
      </section>
    </>
  );
}
