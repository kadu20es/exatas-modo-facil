import { Link } from "react-router-dom";

const Arrow = () => (
  <svg
    aria-hidden='true'
    viewBox='0 0 24 24'
    className='h-5 w-5'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M5 12h14M13 6l6 6-6 6' />
  </svg>
);

export default function HomePage() {
  return (
    <div className='min-h-screen overflow-hidden bg-[#f8f7ff] text-slate-900'>
      <header className='relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8'>
        <Link
          to='/'
          className='flex items-center gap-3'
          aria-label='Exatas, página inicial'
        >
          <span className='grid h-11 w-11 place-items-center rounded-2xl bg-indigo-600 text-xl font-black text-white shadow-lg shadow-indigo-600/20'>
            ∑
          </span>
          <span>
            <span className='block text-lg font-black tracking-tight text-indigo-950'>
              Exatas Modo Fácil
            </span>
            <span className='block text-xs text-slate-500'>
              Aprender com sentido
            </span>
          </span>
        </Link>
        <nav
          aria-label='Navegação principal'
          className='flex items-center gap-3 sm:gap-7'
        >
          <a
            href='#como-funciona'
            className='hidden text-sm font-semibold text-slate-600 hover:text-indigo-700 sm:inline'
          >
            Como funciona
          </a>
          <Link
            to='/conteudos'
            className='rounded-full border border-indigo-200 bg-white px-4 py-2.5 text-sm font-bold text-indigo-800 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50'
          >
            Conteúdos
          </Link>
        </nav>
      </header>

      <main>
        <section className='relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 sm:pt-16 lg:grid-cols-[1.05fr_.95fr] lg:pb-28 lg:pt-20'>
          <div className='absolute -left-36 top-8 h-80 w-80 rounded-full bg-violet-200/50 blur-3xl' />
          <div className='relative z-10'>
            <div className='inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3.5 py-2 text-xs font-bold uppercase tracking-[.16em] text-indigo-700 shadow-sm'>
              <span className='h-2 w-2 rounded-full bg-emerald-500' />
              Matemática, do seu jeito
            </div>
            <h1 className='mt-6 max-w-2xl text-5xl font-black leading-[1.04] tracking-tight text-indigo-950 sm:text-6xl lg:text-7xl'>
              Entenda a matemática.{" "}
              <span className='text-indigo-600'>Faça acontecer.</span>
            </h1>
            <p className='mt-6 max-w-xl text-lg leading-8 text-slate-600'>
              Aprenda passo a passo, explore ideias em laboratórios interativos
              e pratique com exercícios que avançam junto com você.
            </p>
            <div className='mt-8 flex flex-wrap items-center gap-3'>
              <Link
                to='/conteudos'
                className='group inline-flex items-center gap-3 rounded-2xl bg-indigo-600 px-6 py-4 font-extrabold text-white shadow-xl shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700'
              >
                Explorar conteúdos{" "}
                <span className='transition group-hover:translate-x-1'>
                  <Arrow />
                </span>
              </Link>
              <Link
                to='/matematica/fracoes'
                className='rounded-2xl px-5 py-4 font-bold text-indigo-800 transition hover:bg-white'
              >
                Começar por Frações <span aria-hidden='true'>↗</span>
              </Link>
            </div>
            <div className='mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-slate-500'>
              <span className='flex items-center gap-2'>
                <span className='text-emerald-600'>✓</span> Teoria clara
              </span>
              <span className='flex items-center gap-2'>
                <span className='text-emerald-600'>✓</span> Ferramentas
                interativas
              </span>
              <span className='flex items-center gap-2'>
                <span className='text-emerald-600'>✓</span> Prática progressiva
              </span>
            </div>
          </div>

          <div className='relative mx-auto w-full max-w-xl lg:ml-auto'>
            <div className='absolute -right-4 -top-6 h-28 w-28 rounded-full border-[18px] border-amber-200/80 sm:-right-8 sm:-top-9 sm:h-36 sm:w-36' />
            <div className='absolute -bottom-6 -left-7 h-28 w-28 rounded-full bg-violet-200/70 blur-2xl' />
            <div className='relative rounded-[2rem] border border-white/80 bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 p-5 shadow-2xl shadow-indigo-950/20 sm:p-7'>
              <div className='flex items-center justify-between text-xs font-bold uppercase tracking-[.16em] text-indigo-200'>
                <span>Aprender fazendo</span>
                <span className='rounded-full bg-white/10 px-3 py-1.5 text-white'>
                  01 — 03
                </span>
              </div>
              <div className='mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[.06] p-3 sm:p-5'>
                <svg
                  viewBox='0 0 520 330'
                  className='w-full'
                  role='img'
                  aria-label='Triângulo retângulo com quadrados que ilustram o Teorema de Pitágoras'
                >
                  <defs>
                    <pattern
                      id='landing-grid'
                      width='26'
                      height='26'
                      patternUnits='userSpaceOnUse'
                    >
                      <path
                        d='M26 0H0V26'
                        fill='none'
                        stroke='#c7d2fe'
                        strokeOpacity='.13'
                        strokeWidth='1'
                      />
                    </pattern>
                    <linearGradient
                      id='landing-fill'
                      x1='0'
                      y1='0'
                      x2='1'
                      y2='1'
                    >
                      <stop stopColor='#a5b4fc' />
                      <stop offset='1' stopColor='#c4b5fd' />
                    </linearGradient>
                  </defs>
                  <rect
                    width='520'
                    height='330'
                    rx='18'
                    fill='url(#landing-grid)'
                  />
                  <path
                    d='M142 245h190V115z'
                    fill='url(#landing-fill)'
                    fillOpacity='.92'
                    stroke='#e0e7ff'
                    strokeWidth='3'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M142 245h190v65H142z'
                    fill='#fbbf24'
                    fillOpacity='.92'
                    stroke='#fde68a'
                    strokeWidth='2'
                  />
                  <path
                    d='M142 115v130H77V115z'
                    fill='#34d399'
                    fillOpacity='.86'
                    stroke='#a7f3d0'
                    strokeWidth='2'
                  />
                  <path
                    d='m142 115 190 130 44-64L186 51z'
                    fill='#f472b6'
                    fillOpacity='.9'
                    stroke='#fbcfe8'
                    strokeWidth='2'
                  />
                  <path
                    d='M142 229h16v16'
                    fill='none'
                    stroke='white'
                    strokeWidth='3'
                  />
                  <text
                    x='236'
                    y='285'
                    textAnchor='middle'
                    fill='#422006'
                    fontSize='17'
                    fontWeight='800'
                  >
                    a²
                  </text>
                  <text
                    x='108'
                    y='190'
                    textAnchor='middle'
                    fill='#064e3b'
                    fontSize='17'
                    fontWeight='800'
                  >
                    b²
                  </text>
                  <text
                    x='300'
                    y='145'
                    textAnchor='middle'
                    fill='#831843'
                    fontSize='17'
                    fontWeight='800'
                  >
                    c²
                  </text>
                  <text
                    x='390'
                    y='80'
                    fill='#fff'
                    fontSize='15'
                    fontWeight='700'
                  >
                    Uma ideia,
                  </text>
                  <text x='390' y='103' fill='#c7d2fe' fontSize='15'>
                    muitas descobertas.
                  </text>
                </svg>
              </div>
              <div className='mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4 sm:p-5'>
                <div>
                  <div className='text-xs font-bold uppercase tracking-wider text-indigo-500'>
                    Uma relação que aparece por toda parte
                  </div>
                  <div className='mt-1 text-xl font-black text-slate-800 sm:text-2xl'>
                    a² + b² = c²
                  </div>
                </div>
                <div className='grid h-11 w-11 place-items-center rounded-xl bg-amber-100 text-xl text-amber-700'>
                  √
                </div>
              </div>
            </div>
            <div className='absolute -left-5 top-24 hidden rounded-2xl border border-indigo-100 bg-white px-4 py-3 shadow-xl sm:block'>
              <span className='text-xs font-bold text-slate-500'>
                Uma parte de
              </span>
              <span className='ml-2 text-lg font-black text-indigo-700'>
                100+
              </span>
            </div>
            <div className='absolute -bottom-5 right-8 rounded-2xl border border-emerald-100 bg-white px-4 py-3 shadow-xl'>
              <span className='mr-2 text-lg'>✦</span>
              <span className='text-sm font-bold text-slate-700'>
                Visual. Prático. No seu ritmo.
              </span>
            </div>
          </div>
        </section>

        <section
          id='como-funciona'
          className='border-y border-indigo-100 bg-white/75 py-16 sm:py-20'
        >
          <div className='mx-auto max-w-7xl px-5 sm:px-8'>
            <div className='max-w-2xl'>
              <p className='text-xs font-black uppercase tracking-[.18em] text-indigo-600'>
                Um caminho de aprendizagem
              </p>
              <h2 className='mt-3 text-3xl font-black tracking-tight text-indigo-950 sm:text-4xl'>
                Da primeira ideia à prática independente.
              </h2>
              <p className='mt-4 leading-7 text-slate-600'>
                Cada conteúdo combina explicações, exemplos e atividades para
                você construir confiança enquanto aprende.
              </p>
            </div>
            <div className='mt-10 grid gap-4 md:grid-cols-3'>
              {[
                [
                  "01",
                  "Entenda",
                  "Comece pela ideia e veja como ela se conecta com situações reais.",
                  "bg-indigo-100 text-indigo-700",
                ],
                [
                  "02",
                  "Explore",
                  "Mude valores, observe padrões e descubra como os conceitos funcionam.",
                  "bg-emerald-100 text-emerald-700",
                ],
                [
                  "03",
                  "Pratique",
                  "Resolva exercícios em sequência, do primeiro passo aos desafios.",
                  "bg-amber-100 text-amber-700",
                ],
              ].map(([number, title, description, tone]) => (
                <article
                  key={number}
                  className='rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg'
                >
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-2xl text-sm font-black ${tone}`}
                  >
                    {number}
                  </div>
                  <h3 className='mt-5 text-xl font-extrabold text-slate-900'>
                    {title}
                  </h3>
                  <p className='mt-2 leading-7 text-slate-600'>{description}</p>
                </article>
              ))}
            </div>
            <div className='mt-9 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-indigo-950 px-6 py-7 text-white sm:px-9'>
              <div>
                <h3 className='text-xl font-black sm:text-2xl'>
                  Pronto para escolher seu próximo assunto?
                </h3>
                <p className='mt-1 text-indigo-200'>
                  Explore os conteúdos organizados por etapa e ano.
                </p>
              </div>
              <Link
                to='/conteudos'
                className='inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-extrabold text-indigo-900 transition hover:bg-indigo-100'
              >
                Ver conteúdos <Arrow />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className='mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-7 text-sm text-slate-500 sm:px-8'>
        <span className='font-bold text-indigo-900'>
          Exatas Modo Fácil · Aprender com sentido
        </span>
        <span>Aprenda uma ideia de cada vez.</span>
      </footer>
    </div>
  );
}
