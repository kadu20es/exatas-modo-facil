# Especificação de Projeto: Plataforma Exatas de A a Z

## 1. Visão Geral
O projeto consiste na migração de 49 arquivos SPA em formato HTML (Matemática, Física, Lógica e Programação) para uma aplicação única em React com TypeScript, organizada para atender às 48 matérias previstas. O objetivo é unificar o padrão visual, componentizar elementos repetitivos e garantir a escalabilidade do código.

## 2. Estado Atual (Legado)
* **Estrutura:** Múltiplos arquivos HTML independentes (ex: `fracoes.html`).
* **Estilo:** Mistura de Tailwind CSS via CDN e CSS customizado em tags `<style>`.
* **Interatividade:** Manipulação imperativa do DOM via Vanilla JavaScript (`document.getElementById`, `.innerHTML`).
* **Matemática:** Uso da biblioteca KaTeX renderizada globalmente no ciclo de vida da página via `renderMathInElement`.
* **Dados:** Arrays de exercícios e lógicas de resolução acoplados diretamente no script de cada arquivo HTML.

## 3. Estado Desejado (Target)
* **Framework:** React 18+ com TypeScript.
* **Build:** Vite.
* **Roteamento:** `react-router-dom` para navegação entre disciplinas e assuntos (ex: `/matematica/fracoes`).
* **Estilização:** Tailwind CSS configurado no projeto + CSS Global unificado (`index.css` para variáveis `--ink`, `--paper`, etc.). Conteúdo executado pela aplicação deve estar em componentes React para que suas classes sejam detectadas pelo Tailwind.
* **Fórmulas:** Componente React encapsulado para KaTeX (evitando varredura global do DOM).
* **Estado:** Gerenciamento declarativo usando Hooks (`useState`, `useMemo`, `useEffect`).
* **Dados:** Camada de dados isolada em módulos TypeScript; conteúdo didático apresentado na interface é implementado como JSX/React.

## 4. Estrutura de Diretórios
Os componentes, dados e páginas devem ser organizados por disciplina e assunto. Para Frações, o padrão estabelecido é:

```text
src/
├── assets/                         # Imagens e fontes
├── components/
│   ├── Layout/                     # Sidebar, Header, PageContainer
│   ├── Math/                       # MathRenderer e elementos matemáticos reutilizáveis
│   ├── UI/                         # Tabs, Buttons, ProgressBars
│   ├── content/
│   │   └── matematica/<assunto>/   # Teoria e exemplos em componentes React
│   └── exercises/
│       └── matematica/
│           └── fracoes/             # Exercícios, laboratório e ferramentas de frações
├── data/
│   └── matematica/
│       └── fracoes/                 # Dados estruturados dos exercícios
├── pages/
│   └── matematica/
│       └── fracoes/                 # Página roteável de frações
├── utils/
│   └── mathUtils.ts                # MMC, MDC e operações puras com frações
├── App.tsx                         # Configuração de rotas
└── main.tsx                        # Entry point
```

Os assuntos futuros devem seguir o mesmo padrão, por exemplo `components/exercises/fisica/mecanica`, `data/fisica/mecanica` e `pages/fisica/mecanica`.

## 5. Estratégia de Migração (Fases)
A migração deve ocorrer em lotes de 2 a 3 arquivos por vez para mitigar riscos e consolidar componentes genéricos. Os dois primeiros arquivos migrados com sucesso estabelecem o padrão visual e funcional para os próximos lotes.

### Fase 1: Fundação
* Configurar o ambiente React + Vite + TypeScript + Tailwind.
* Consolidar variáveis CSS globais baseadas no `fracoes.html`.
* Criar componentes core: `<Layout>`, `<Sidebar>`, `<MathRenderer>`.
* Configurar o React Router.

### Fase 2: Lote Piloto (Prototipação)
* Migrar os dois primeiros arquivos fornecidos, preservando seu conteúdo e padrão visual.
* Extrair funções puras (ex: `gcd`, `lcm`) para `mathUtils.ts`.
* Refatorar laboratórios visuais para usar `useRef` com estado React (`useState`/`useEffect`) quando Canvas for necessário.
* Criar componentes reutilizáveis para abas, exercícios e ferramentas pedagógicas.

### Fase 3: Padronização da Camada de Dados
* Extrair arrays de exercícios e conteúdo teórico para módulos isolados dentro das pastas disciplina/assunto em `/data`.
* Criar tipos TypeScript adequados para questões com diferentes formatos de resposta e resolução.

### Fase 4: Produção em Lote
* Converter os demais arquivos em lotes, mapeando seus dados e variações de exercícios para os componentes validados.
* Conteúdo duplicado pode ser compartilhado ou ignorado em migrações posteriores, conforme orientação do usuário.

## 6. Regras de Código (Guidelines para o Codex)
1. **Zero manipulação direta do DOM:** Substituir `document.getElementById` por `useRef` apenas quando necessário (como em Canvas) e `innerHTML` por JSX ou renderização condicional.
2. **Isolamento do KaTeX:** Nunca usar `renderMathInElement` no `body` inteiro. Usar o componente `<MathRenderer expression={latexString} />`.
3. **Imutabilidade:** Funções de cálculo matemático devem ser puras, recebendo parâmetros e retornando resultados, sem alterar variáveis externas.
4. **Preservação visual e de conteúdo:** Manter o conteúdo original e buscar equivalência visual pixel a pixel com a versão HTML. Mudanças de estrutura ou conteúdo que não sejam necessárias à migração devem ser submetidas à aprovação do usuário.
5. **Legibilidade:** Conferir contraste de texto e fundo em todas as abas e incluir conteúdo HTML legado na varredura do Tailwind quando esse conteúdo for importado como dado.
6. **Sintaxe React/JSX:** Escrever interfaces e conteúdo didático em arquivos `.tsx` usando JSX legível, com elementos aninhados de forma clara. Não gerar `React.createElement` (por exemplo, `h("p", props, ...)`) como formato padrão para conteúdo que pode ser escrito diretamente em JSX. Reservar chamadas programáticas a `createElement` para casos em que a criação dinâmica de elementos seja realmente necessária. Essa escolha mantém a hierarquia visual explícita e facilita leitura, revisão e manutenção sem alterar conteúdo, comportamento, estilos ou renderização de KaTeX.

## 7. Decisões e implementação já estabelecidas
* As páginas `old_files/migrados/fracoes.html` e `old_files/migrados/fracoes_refactor.html` compartilham o mesmo conteúdo visual; as rotas `/matematica/fracoes` e `/matematica/fracoes-refactor` reutilizam uma única página React.
* Frações está organizada em `src/components/exercises/matematica/fracoes`, `src/data/matematica/fracoes` e `src/pages/matematica/fracoes`.
* Decimais está organizado em `src/components/exercises/matematica/decimais`, `src/data/matematica/decimais` e `src/pages/matematica/decimais`.
* Razão e Proporção está organizado em `src/components/content/matematica/razao-proporcao`, `src/components/exercises/matematica/razao-proporcao`, `src/data/matematica/razao-proporcao` e `src/pages/matematica/razao-proporcao`. A teoria ensina razão, razões equivalentes, proporção, produto dos meios e extremos, variação direta/inversa, divisão proporcional, escala e taxas com resolução manual passo a passo. Os 30 exercícios são organizados em cinco níveis progressivos.
* Regra de Três simples e composta e o material de reforço formam um único módulo e uma única página em `src/components/content/matematica/regra-de-tres`, `src/components/exercises/matematica/regra-de-tres`, `src/data/matematica/regra-de-tres` e `src/pages/matematica/regra-de-tres`. A rota antiga `/matematica/regra-de-tres-reforco` redireciona para `/matematica/regra-de-tres`.
* Radiciação, Potenciação e Notação Científica têm páginas com abas próprias para teoria, exemplos, laboratório, calculadoras e exercícios, com interações implementadas em React. Os bancos de 100 exercícios de Radiciação e Potenciação ficam em arquivos TS isolados; Notação Científica gera 100 questões aleatórias por cinco níveis. Os exemplos únicos do HTML combinado de Potenciação e Radiciação estão distribuídos em abas separadas por tema, e sua rota antiga redireciona para Potenciação.
* Estatística Básica e Estatística Básica — Reforço são integradas na página `/matematica/estatistica-basica`, em módulos próprios de conteúdo, laboratório, ferramentas e dados. Os dois bancos complementares de 100 questões são preservados no mesmo conjunto e ordenados em oito níveis progressivos, de média simples a desafios integrados. A teoria deve introduzir vocabulário e organização dos dados, medidas de centro, frequências, medidas de dispersão, interpretação e resolução manual passo a passo; fórmulas devem usar `MathRenderer` para KaTeX.
* Equações de 1º e 2º Grau ficam em módulos independentes sob `src/components/exercises/matematica/<assunto>`, `src/data/matematica/<assunto>` e `src/pages/matematica/<assunto>`, acessíveis pelas rotas `/matematica/equacoes-1-grau` e `/matematica/equacoes-2-grau`. Teoria, simuladores, resolvedores e bancos de 100 exercícios foram convertidos para React/TypeScript.
* Teoria e exemplos migrados são componentes React/JSX em `src/components/content/matematica/<assunto>/Conteudo.tsx`; não são importados nem interpretados como HTML em tempo de execução. Os HTMLs originais ficam arquivados em `old_files/migrados` como referência, sem participação no build da aplicação.
* Dados de exercícios ficam isolados em TypeScript em `src/data/matematica/<assunto>/`. Bancos antes representados por strings delimitadas por `|` devem ser convertidos para registros estruturados tipados, seguindo `src/data/matematica/fracoes/exercicios.ts` (por exemplo: `id`, `level`, `title`, `expr`, `ans`, `rawAns`, `type` e `hint`). A camada de apresentação pode adaptar esses registros ao formato genérico consumido pela lista de exercícios.
* Os bancos de Potenciação e Radiciação foram convertidos para registros estruturados, preservando 100 itens em cada módulo. O banco unificado de Regra de Três preserva as 30 questões originais e as 100 questões do reforço, reorganizadas em 7 níveis progressivos. A página reúne teoria, exemplos, laboratório, resolvedor e exercícios.
* Laboratórios usam estado React e `useRef` para Canvas quando necessário. Fórmulas são renderizadas pelo componente encapsulado `<MathRenderer>`.
* Cabeçalhos das matérias migradas usam `StudyHeader`, com menu hambúrguer e painel lateral de navegação agrupado sob “Matemática ensino fundamental”. O painel fecha pelo botão, pelo fundo ou com Escape.
* A lista de exercícios permite habilitar a renderização de frações empilhadas por `formatFractions`; o recurso está ativo na página unificada de Regra de Três.
* Novos módulos de Matemática seguem `src/components/exercises/matematica/<assunto>`, `src/data/matematica/<assunto>` e `src/pages/matematica/<assunto>`, preservando conteúdo e rotas do original.
* Novos conteúdos autorais sem arquivo de origem, como Progressões Aritméticas e Geométricas, seguem a mesma arquitetura React/TypeScript, o visual das páginas existentes, KaTeX para fórmulas, laboratório e ferramentas interativas quando aplicáveis e exercícios organizados em níveis progressivos.
* Progressão Geométrica foi substituída integralmente pelo material `old_files/migrados/progressao_geometrica_completo.html`. A teoria completa de 13 lições está em JSX/React em `src/components/content/matematica/progressao-geometrica/Teoria.tsx`, com fórmulas em KaTeX, estilos de layout e cores em classes Tailwind diretamente no JSX e o `CourseHeader` compartilhado; não há CSS próprio do módulo; a paleta rosa original foi adaptada às classes Tailwind do projeto, preservando os destaques semânticos azul, âmbar e verde; a página `src/pages/matematica/progressao-geometrica/ProgressaoGeometrica.tsx` tem as abas Aprender, Laboratório, Calculadoras e Exercícios. `src/components/exercises/matematica/progressao-geometrica/Ferramentas.tsx` implementa os quatro experimentos e oito calculadoras interativas em React. O banco `src/data/matematica/progressao-geometrica/exercicios.ts` contém 100 registros estruturados em 13 níveis, incluindo respostas, dicas, erros comuns e resoluções passo a passo. Todo o conteúdo antigo de Progressão Geométrica foi substituído; a rota `/matematica/progressao-geometrica` permanece classificada na 1ª série do Ensino Médio.
* O módulo Progressão Aritmética mantém teoria em `src/components/content/matematica/progressao-aritmetica/Conteudo.tsx`, laboratório e calculadora em `src/components/exercises/matematica/progressao-aritmetica/Ferramentas.tsx`, banco em `src/data/matematica/progressao-aritmetica/exercicios.ts` e página em `src/pages/matematica/progressao-aritmetica/ProgressaoAritmetica.tsx`. A teoria de `old_files/progressao_aritmetica.html` deve permanecer completa no início do material atual, com analogia do cofrinho, termo geral, explicação de `n−1`, método de Gauss e exemplo guiado, convertida para React/KaTeX e mantendo a identidade visual do projeto; o conteúdo preexistente deve permanecer após ela.
* O menu lateral é uma árvore de navegação recolhível por disciplina, etapa e ano: `Matemática` → `Matemática ensino fundamental`/`Matemática ensino médio` → ano escolar → conteúdo. A estrutura deve aceitar futuras disciplinas, como Física e Química, como itens de primeiro nível.
* Páginas de assunto são carregadas sob demanda por rota usando `React.lazy` e `Suspense`, para manter o JavaScript inicial menor conforme cresce o catálogo. A tela de carregamento deve seguir o padrão visual geral; bibliotecas e bancos de dados próprios de um assunto devem continuar fora do carregamento inicial quando possível.
* Cálculo Algébrico está classificado no 8º ano do Ensino Fundamental; Geometria Plana, no 9º ano; Conjuntos Numéricos, na 1ª série do Ensino Médio.
* Rotas das migrações deste lote: `/matematica/calculo-algebrico`, `/matematica/geometria-plana` e `/matematica/conjuntos-numericos`.
* Probabilidade, Geometria Analítica e Matemática Financeira seguem a mesma modularização em conteúdo React, laboratório/ferramentas React e banco tipado de exercícios. Suas rotas são `/matematica/probabilidade`, `/matematica/geometria-analitica` e `/matematica/matematica-financeira`.
* Classificação escolar no menu: Probabilidade — 2ª série do Ensino Médio; Geometria Analítica — 3ª série; Matemática Financeira — 1ª série. A classificação serve para organizar os materiais recebidos e pode ser ajustada quando o currículo da plataforma especificar outra série.
* Função do 1º Grau e Função do 2º Grau ficam na 1ª série do Ensino Médio; Matrizes e Sistemas fica na 2ª série. As rotas são `/matematica/funcao-primeiro-grau`, `/matematica/funcao-segundo-grau` e `/matematica/matrizes-sistemas`.
* Esses módulos têm teoria e exemplos em React, laboratórios/calculadoras interativas e bancos tipados preservando os 30, 30 e 100 exercícios originais, incluindo resoluções.
* Trigonometria está organizada em `src/components/content/matematica/trigonometria`, `src/components/exercises/matematica/trigonometria`, `src/data/matematica/trigonometria` e `src/pages/matematica/trigonometria`; contém teoria, simulador angular, resolvedor de Pitágoras/razões trigonométricas e 100 exercícios em cinco níveis. Foi classificada na 2ª série do Ensino Médio.
* Estatística e Probabilidade Avançada está organizada em `src/components/content/matematica/estatistica-probabilidade-avancada`, `src/components/exercises/matematica/estatistica-probabilidade-avancada`, `src/data/matematica/estatistica-probabilidade-avancada` e `src/pages/matematica/estatistica-probabilidade-avancada`; preserva Bayes, binomial, curva normal, escore Z, esperança, laboratórios, calculadoras e 100 exercícios. Foi classificada na 3ª série do Ensino Médio.
* Arquivos com conteúdo já representado por um módulo existente podem ser arquivados como duplicados no registro de migração sem criar páginas ou bancos redundantes.
* Análise Combinatória e Exponencial e Logaritmo seguem a estrutura `src/components/content/matematica/<assunto>`, `src/components/exercises/matematica/<assunto>`, `src/data/matematica/<assunto>` e `src/pages/matematica/<assunto>`; ambas foram classificadas na 2ª série do Ensino Médio. Seus laboratórios e calculadoras são interativos em React e cada banco contém 100 exercícios estruturados.
* Números Complexos segue a mesma estrutura modular, com teoria, plano de Argand-Gauss interativo, ferramentas de divisão e potências de i e 100 exercícios; foi classificado na 3ª série do Ensino Médio.
* Multiplicação e Divisão segue a estrutura `src/components/content/matematica/multiplicacao-divisao`, `src/components/exercises/matematica/multiplicacao-divisao`, `src/data/matematica/multiplicacao-divisao` e `src/pages/matematica/multiplicacao-divisao`. O módulo tem teoria, laboratório visual React para agrupamento e partilha, calculadoras de multiplicação/divisão e banco tipado de 80 exercícios com resoluções; foi classificado no 5º ano do Ensino Fundamental.
* Introdução à Álgebra segue a estrutura `src/components/content/matematica/introducao-algebra`, `src/components/exercises/matematica/introducao-algebra`, `src/data/matematica/introducao-algebra` e `src/pages/matematica/introducao-algebra`, com rota `/matematica/introducao-algebra`. A teoria original de 14 lições, seus testes rápidos e recursos visuais foram convertidos para React; quatro laboratórios e cinco calculadoras são interativos; os 118 exercícios originais estão estruturados em registros TypeScript JSON-like, agrupados nos 14 níveis originais. O módulo reutiliza `StudyHeader`, `MathText`/`MathRenderer` para KaTeX e classes Tailwind, sem CSS próprio. Foi classificado no 6º ano do Ensino Fundamental e permanece separado de Cálculo Algébrico, que cobre monômios e polinômios em nível posterior.
* Geometria Básica segue a estrutura `src/components/content/matematica/geometria-basica`, `src/components/exercises/matematica/geometria-basica`, `src/data/matematica/geometria-basica` e `src/pages/matematica/geometria-basica`, na rota `/matematica/geometria-basica`. As 15 lições (0 a 14), 30 testes rápidos, cinco laboratórios e cinco calculadoras foram convertidos para React/JSX; os 131 exercícios originais em 15 níveis estão em registros TypeScript estruturados, incluindo ilustrações SVG representadas como dados. Fórmulas e texto matemático usam `MathText`/KaTeX; cores, fundo e componentes usam Tailwind sem CSS próprio. O cabeçalho usa `StudyHeader`. Foi classificada no 7º ano do Ensino Fundamental, como base para os assuntos do 8º ano, conforme indicação do material de origem.
* Classificação atual no menu do Ensino Fundamental: 5º ano — Multiplicação e Divisão; 6º ano — Frações, Decimais e Introdução à Álgebra; 7º ano — Razão e Proporção, Regra de Três, Equações de 1º Grau, Estatística Básica e Geometria Básica; 8º ano — Potenciação, Notação Científica, Cálculo Algébrico e Teorema de Pitágoras; 9º ano — Radiciação, Geometria Plana e Equações de 2º Grau. A classificação agrupa os materiais migrados pelo nível escolar apropriado e pode receber ajustes conforme o currículo definido pelo projeto.
* Classificação atual no menu do Ensino Médio: 1º ano — Conjuntos Numéricos, Matemática Financeira, Funções de 1º e 2º Grau e Progressões Aritmética e Geométrica; 2º ano — Probabilidade, Trigonometria, Matrizes e Sistemas, Análise Combinatória e Exponencial e Logaritmo; 3º ano — Geometria Analítica, Estatística e Probabilidade Avançada e Números Complexos.
* A versão de reforço completo de Radiciação, `old_files/migrados/radiciacao_reforco_completo.html`, foi incorporada à página existente `/matematica/radiciacao`. As seis lições e os 12 testes rápidos usam JSX/React, `MathText`/KaTeX e Tailwind; os três experimentos são interativos; as calculadoras de raiz e operações com radicais foram integradas junto às ferramentas já existentes. O gerador de exercícios do próprio material produziu 71 registros em cinco níveis, embora a introdução do HTML informe 70; os registros estão em `src/data/matematica/radiciacao/exercicios-reforco.ts`, separados do banco anterior de 100 exercícios. A página usa `StudyHeader` e não adiciona CSS próprio.
* Teorema de Pitágoras segue a estrutura modular `src/components/content/matematica/pitagoras`, `src/components/exercises/matematica/pitagoras`, `src/data/matematica/pitagoras` e `src/pages/matematica/pitagoras`, na rota `/matematica/pitagoras`. As nove lições, 18 testes rápidos, quatro laboratórios e quatro calculadoras foram convertidos para React/JSX com KaTeX e Tailwind; os 100 exercícios em oito níveis estão em registros TypeScript JSON-like, com os sete diagramas convertidos para árvores SVG tipadas. A página reutiliza `StudyHeader`, não adiciona CSS próprio e está classificada no 8º ano do Ensino Fundamental conforme o material de origem.

