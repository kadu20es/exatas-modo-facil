# Exatas de A a Z

Plataforma de aprendizagem interativa de Matemática, feita com React, TypeScript e Vite. Os conteúdos são organizados por assunto e incluem teoria, exemplos, laboratórios, ferramentas de cálculo e exercícios progressivos. As fórmulas matemáticas são renderizadas com KaTeX.

## Tecnologias

- React e TypeScript
- Vite
- Tailwind CSS 4
- React Router
- KaTeX

## Requisitos

- Node.js compatível com as versões declaradas em `package.json`
- npm

## Instalação e desenvolvimento

Na raiz do projeto, instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm ci
npm run dev
```

O Vite exibirá o endereço local para abrir no navegador. O comando `dev` usa `vite --host`, portanto o servidor de desenvolvimento também pode escutar nas interfaces de rede disponíveis. Use-o em uma rede confiável e encerre-o com `Ctrl+C` quando terminar.

## Build de produção

Gere os arquivos estáticos com:

```bash
npm run build
```

O resultado será gravado em `dist/`. Para conferir a build localmente:

```bash
npm run preview
```

Também há um servidor Node simples para servir a pasta `dist`:

```bash
npm run preview:lan
```

Esse servidor escuta em todas as interfaces de rede e usa a porta `4173` por padrão. É destinado a uso local ou atrás de um proxy reverso configurado pelo administrador. Não exponha diretamente à Internet sem revisar a configuração de rede e segurança. A porta pode ser alterada pela variável `PORT`.

## Deploy

O deploy atual é composto por arquivos estáticos em `dist/`. Em uma instalação que já tenha um servidor configurado:

1. Execute `npm run build` no computador de desenvolvimento.
2. Copie o **conteúdo** de `dist/` para a pasta de build usada pelo serviço no servidor, preservando a estrutura `index.html` e `assets/`.
3. Se houver um proxy reverso, mantenha-o encaminhando as requisições ao servidor estático configurado para a aplicação.
4. Abra a página no navegador e faça uma recarga forçada se ainda aparecer conteúdo em cache.

O caminho da pasta publicada, o nome do serviço, o domínio e a configuração de TLS dependem de cada servidor e não são definidos por este repositório. Não é necessário publicar `src/` nem `node_modules/` para servir a build estática.

## Organização do código

```text
src/
├── components/
│   ├── UI/                 # Navegação, cabeçalhos e componentes compartilhados
│   ├── Math/               # Renderização de fórmulas
│   ├── content/            # Teoria e exemplos React por disciplina e assunto
│   └── exercises/          # Laboratórios e ferramentas interativas
├── data/                   # Bancos estruturados de exercícios e níveis
├── pages/                  # Páginas associadas às rotas
├── utils/                  # Funções compartilhadas
├── App.tsx                 # Rotas da aplicação
└── main.tsx                # Inicialização React

old_files/migrados/         # Materiais HTML de origem arquivados
scripts/                    # Servidor estático e arquivos auxiliares
registro-migracao.md        # Registro dos materiais migrados
specs.md                    # Especificações e decisões do projeto
```

As páginas são carregadas sob demanda por rota. Ao adicionar um conteúdo, mantenha a divisão entre página, componentes React e dados do assunto, seguindo os módulos existentes. Escreva teoria e interfaces em JSX/TSX, mantenha os exercícios como dados estruturados e use o componente matemático do projeto para fórmulas KaTeX. Evite manipulação imperativa do DOM e CSS específico de um módulo quando as classes Tailwind existentes forem suficientes.

## Segurança e dados

- Este repositório não deve conter senhas, tokens, chaves privadas, arquivos de certificado ou credenciais de provedores.
- Não inclua endereços IP privados, nomes de usuário do servidor ou detalhes de acesso em documentação pública, commits ou capturas de tela.
- Se uma integração futura precisar de segredos, use variáveis de ambiente no ambiente de execução e mantenha arquivos locais com credenciais fora do controle de versão.
- O projeto atual é uma aplicação frontend; progresso de exercícios pode ser armazenado no navegador conforme cada módulo. Não há API ou banco de dados backend configurado neste repositório.

## Registro e especificações

Consulte [`specs.md`](specs.md) para as decisões de arquitetura e [`registro-migracao.md`](registro-migracao.md) para o histórico dos materiais recebidos e migrados.
