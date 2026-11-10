export const radiciacaoReforcoLevels = [
  {
    level: 1,
    name: "Raiz quadrada exata",
    description:
      "Quadrados perfeitos, raízes de frações e decimais, fatoração e raiz cúbica.",
    reminder:
      "A raiz quadrada de n é o número positivo que, multiplicado por ele mesmo, dá n.",
    lesson: "l1",
  },
  {
    level: 2,
    name: "Raiz não exata e estimativa",
    description:
      "Localizar a raiz entre dois inteiros, aproximar por tentativa e comparar raízes.",
    reminder:
      "Se 16 < 20 < 25, então 4 < √20 < 5. Teste com decimais para chegar mais perto.",
    lesson: "l2",
  },
  {
    level: 3,
    name: "Propriedades e simplificação",
    description:
      "Separar quadrados perfeitos, simplificar radicais e evitar o erro √(a+b).",
    reminder: "√(a·b) = √a · √b. Já √(a+b) NÃO é √a + √b.",
    lesson: "l3",
  },
  {
    level: 4,
    name: "Operações com radicais",
    description:
      "Somar, subtrair, multiplicar, dividir e racionalizar radicais.",
    reminder:
      "Só se somam radicais semelhantes. Na multiplicação, multiplique fora com fora e dentro com dentro.",
    lesson: "l4",
  },
  {
    level: 5,
    name: "Problemas e desafios",
    description:
      "Situações do dia a dia: lado de quadrado, perímetro, área e pré-visão de Pitágoras.",
    reminder:
      "Leia, desenhe, monte x² = área, tire a raiz, cuide da unidade e confira.",
    lesson: "l5",
  },
] as const;

export const radiciacaoReforcoExercises = [
  {
    id: 1,
    level: 1,
    title: "Nível 1",
    question: "Quanto vale \\(\\sqrt{49}\\)?",
    answer: "7",
    options: ["7", "24,5", "14", "98"],
    hint: "Procure na tabela de quadrados perfeitos: 7 · 7 = ?",
    common: [],
    steps: [
      "Pergunta: que número, multiplicado por ele mesmo, dá 49?",
      "\\(7 \\cdot 7 = 49\\), então \\(\\sqrt{49} = 7\\).",
      "Cuidado: 24,5 é a metade de 49. Raiz não é dividir por 2.",
    ],
  },
  {
    id: 2,
    level: 1,
    title: "Nível 1",
    question: "Calcule \\(\\sqrt{81}\\).",
    answer: "9",
    hint: "Pense na tabuada do 9.",
    common: [
      {
        value: "40,5",
        message: "Você dividiu 81 por 2. Raiz quadrada não é metade.",
      },
    ],
    steps: [
      "Que número vezes ele mesmo dá 81?",
      "\\(9 \\cdot 9 = 81\\).",
      "\\(\\sqrt{81} = 9\\).",
    ],
  },
  {
    id: 3,
    level: 1,
    title: "Nível 1",
    question: "Calcule \\(\\sqrt{144}\\).",
    answer: "12",
    hint: "10 · 10 = 100, então a resposta é um pouco maior que 10.",
    common: [
      {
        value: "72",
        message:
          "Você dividiu por 2. Procure o número que multiplicado por ele mesmo dá 144.",
      },
    ],
    steps: ["\\(12 \\cdot 12 = 144\\).", "\\(\\sqrt{144} = 12\\)."],
  },
  {
    id: 4,
    level: 1,
    title: "Nível 1",
    question: "Um quadrado tem área de 64 m². Quanto mede o lado, em metros?",
    answer: "8",
    hint: "Qual número ao quadrado dá 64?",
    common: [],
    steps: [
      "Área do quadrado: \\(\\ell^2 = 64\\).",
      "O lado é a raiz da área: \\(\\ell = \\sqrt{64} = 8\\).",
      "Resposta: \\(8\\text{ m}\\).",
    ],
  },
  {
    id: 5,
    level: 1,
    title: "Nível 1",
    question:
      "Calcule \\(\\sqrt{\\dfrac{9}{16}}\\). (Dê a resposta como fração ou decimal.)",
    answer: "0,75",
    hint: "Tire a raiz do numerador e do denominador separadamente.",
    common: [
      {
        value: "0,5625",
        message: "Você esqueceu de tirar a raiz de cima e de baixo.",
      },
    ],
    steps: [
      "Raiz da fração = raiz de cima ÷ raiz de baixo.",
      "\\(\\dfrac{\\sqrt9}{\\sqrt{16}} = \\dfrac34\\).",
      "Em decimal: \\(0{,}75\\).",
    ],
  },
  {
    id: 6,
    level: 1,
    title: "Nível 1",
    question: "Calcule \\(\\sqrt{0{,}49}\\).",
    answer: "0,7",
    hint: "Quanto é 7 · 7? E onde fica a vírgula?",
    common: [
      {
        value: "0,07",
        message: "Cuidado com a vírgula: 0,07 · 0,07 = 0,0049, não 0,49.",
      },
    ],
    steps: [
      "Pense em \\(49/100\\): \\(\\sqrt{49}/\\sqrt{100} = 7/10\\).",
      "\\(7/10 = 0{,}7\\).",
      "Teste: \\(0{,}7 \\cdot 0{,}7 = 0{,}49\\) ✓.",
    ],
  },
  {
    id: 7,
    level: 1,
    title: "Nível 1",
    question: "Calcule \\(\\sqrt{1{,}44}\\).",
    answer: "1,2",
    hint: "12 · 12 = 144. Duas casas decimais no resultado dão uma casa na raiz.",
    common: [],
    steps: [
      "Teste: \\(1{,}2 \\cdot 1{,}2 = 1{,}44\\).",
      "\\(\\sqrt{1{,}44} = 1{,}2\\).",
    ],
  },
  {
    id: 8,
    level: 1,
    title: "Nível 1",
    question: "Calcule a raiz cúbica \\(\\sqrt[3]{27}\\).",
    answer: "3",
    hint: "Tente 2, 3, 4…",
    common: [
      {
        value: "9",
        message:
          "Raiz cúbica pede um número que multiplicado três vezes dá 27: 3 · 3 · 3.",
      },
    ],
    steps: [
      "Que número multiplicado 3 vezes por ele mesmo dá 27?",
      "\\(3 \\cdot 3 \\cdot 3 = 27\\).",
      "\\(\\sqrt[3]{27} = 3\\).",
    ],
  },
  {
    id: 9,
    level: 1,
    title: "Nível 1",
    question: "Calcule \\(\\sqrt[3]{125}\\).",
    answer: "5",
    hint: "5 · 5 = 25 e depois · 5.",
    common: [
      {
        value: "25",
        message: "25 é 5 ao quadrado. Para o cubo, 5 · 5 · 5 = 125.",
      },
    ],
    steps: ["\\(5 \\cdot 5 \\cdot 5 = 125\\).", "\\(\\sqrt[3]{125} = 5\\)."],
  },
  {
    id: 10,
    level: 1,
    title: "Nível 1",
    question: "Calcule \\(\\sqrt{400}\\).",
    answer: "20",
    hint: "Separe 400 = 4 · 100.",
    common: [
      {
        value: "200",
        message: "Você dividiu por 2. Pense: 20 · 20 = ?",
      },
    ],
    steps: ["\\(\\sqrt{400} = \\sqrt{4 \\cdot 100} = 2 \\cdot 10 = 20.\\)"],
  },
  {
    id: 11,
    level: 1,
    title: "Nível 1",
    question:
      "Use a fatoração em primos para calcular \\(\\sqrt{1225}\\). (Dica: 1225 = 5 · 5 · 7 · 7.)",
    answer: "35",
    hint: "Cada par de fatores iguais vira um fator fora da raiz.",
    common: [],
    steps: [
      "\\(1225 = 5 \\cdot 5 \\cdot 7 \\cdot 7 = 5^2 \\cdot 7^2\\).",
      "Cada par de fatores iguais sai da raiz como um só: sai \\(5\\) e sai \\(7\\).",
      "\\(5 \\cdot 7 = 35\\).",
      "Conferência: \\(35 \\cdot 35 = 1225\\) ✓.",
    ],
  },
  {
    id: 12,
    level: 1,
    title: "Nível 1",
    question: "Qual afirmação é verdadeira?",
    answer: "\\(\\sqrt{25} = 5\\)",
    options: [
      "\\(\\sqrt{25} = 5\\)",
      "\\(\\sqrt{25} = 12{,}5\\)",
      "\\(\\sqrt{-25} = 5\\)",
      "\\(\\sqrt{25} = -5\\)",
    ],
    hint: "A raiz quadrada é sempre positiva (ou zero).",
    common: [],
    steps: [
      "\\(5 \\cdot 5 = 25\\), e a raiz quadrada indica o valor positivo: \\(\\sqrt{25} = 5\\).",
      "Não existe raiz quadrada real de número negativo, pois nenhum número ao quadrado dá negativo.",
    ],
  },
  {
    id: 13,
    level: 1,
    title: "Nível 1",
    question: "Calcule \\(\\sqrt{100} - \\sqrt{49} + \\sqrt{9}\\).",
    answer: "6",
    hint: "Primeiro cada raiz, depois as contas.",
    common: [
      {
        value: "14",
        message: "Você somou tudo. Tem subtração no meio: 10 − 7 + 3.",
      },
    ],
    steps: [
      "Calcule cada raiz: \\(10 - 7 + 3\\).",
      "\\(10 - 7 = 3\\) e \\(3 + 3 = 6\\).",
    ],
  },
  {
    id: 14,
    level: 1,
    title: "Nível 1",
    question:
      "Um terreno quadrado tem 2 025 m² de área e será cercado com muro. Quantos metros de muro serão necessários?",
    answer: "180",
    hint: "45 · 45 = 2025. Depois some os 4 lados.",
    common: [
      {
        value: "45",
        message: "Esse é o lado. O muro percorre os 4 lados.",
      },
    ],
    steps: [
      "Lado: \\(\\ell = \\sqrt{2025}\\). Fatorando, \\(2025 = 3^4 \\cdot 5^2 = 45^2\\), então \\(\\ell = 45\\text{ m}\\).",
      "Muro = perímetro: \\(4 \\cdot 45 = 180\\text{ m}\\).",
    ],
  },
  {
    id: 15,
    level: 2,
    title: "Nível 2",
    question:
      "A raiz \\(\\sqrt{20}\\) fica entre quais números inteiros consecutivos?",
    answer: "4 e 5",
    options: ["3 e 4", "4 e 5", "5 e 6", "9 e 10"],
    hint: "Procure os quadrados perfeitos logo abaixo e logo acima de 20.",
    common: [],
    steps: [
      "Quadrados perfeitos vizinhos: \\(4^2 = 16\\) e \\(5^2 = 25\\).",
      "Como \\(16 < 20 < 25\\), então \\(4 < \\sqrt{20} < 5\\).",
    ],
  },
  {
    id: 16,
    level: 2,
    title: "Nível 2",
    question: "Qual é o menor número inteiro maior que \\(\\sqrt{50}\\)?",
    answer: "8",
    hint: "7² = 49 e 8² = 64.",
    common: [
      {
        value: "7",
        message:
          "7 é o inteiro logo abaixo. Como √50 ≈ 7,07, o próximo inteiro acima é 8.",
      },
    ],
    steps: [
      "\\(7^2 = 49\\) e \\(8^2 = 64\\).",
      "\\(49 < 50 < 64\\), logo \\(7 < \\sqrt{50} < 8\\).",
      "O menor inteiro maior que √50 é \\(8\\).",
    ],
  },
  {
    id: 17,
    level: 2,
    title: "Nível 2",
    question: "Qual é o maior número inteiro menor que \\(\\sqrt{115}\\)?",
    answer: "10",
    hint: "Compare 115 com 100 e 121.",
    common: [],
    steps: [
      "\\(10^2 = 100\\) e \\(11^2 = 121\\).",
      "\\(100 < 115 < 121\\) ⇒ \\(10 < \\sqrt{115} < 11\\).",
      "Resposta: 10.",
    ],
  },
  {
    id: 18,
    level: 2,
    title: "Nível 2",
    question: "De qual inteiro \\(\\sqrt{30}\\) está mais perto?",
    answer: "5",
    options: ["4", "5", "6", "7"],
    hint: "Compare 30 com 25 e 36; ou teste 5,5².",
    common: [],
    steps: [
      "\\(5^2 = 25\\) e \\(6^2 = 36\\). Como 30 está entre 25 e 36, \\(5 < \\sqrt{30} < 6\\).",
      "Teste \\(5{,}5^2 = 30{,}25\\): passou um pouquinho, então \\(\\sqrt{30} \\approx 5{,}48\\), pouco abaixo de 5,5.",
      "Está mais perto de 5 (distância 0,48) do que de 6 (0,52).",
    ],
  },
  {
    id: 19,
    level: 2,
    title: "Nível 2",
    question:
      "Sabendo que \\(1{,}4^2 = 1{,}96\\), calcule \\(1{,}41^2\\). Isso mostra que \\(\\sqrt{2}\\) é quase 1,41.",
    answer: "1,9881",
    hint: "141 · 141 = 19 881. Quantas casas decimais ficam?",
    common: [],
    steps: [
      "\\(1{,}41 \\cdot 1{,}41\\): faça \\(141 \\cdot 141 = 19\\,881\\).",
      "Duas casas + duas casas = quatro casas decimais: \\(1{,}9881\\).",
      "Muito perto de 2 ✓.",
    ],
  },
  {
    id: 20,
    level: 2,
    title: "Nível 2",
    question:
      "Aproxime \\(\\sqrt{20}\\) com uma casa decimal (use tentativas: 4,4² = 19,36 e 4,5² = 20,25).",
    answer: "4,5",
    hint: "Veja qual dos dois quadrados fica mais perto de 20.",
    common: [
      {
        value: "4,4",
        message:
          "Compare as distâncias: 20 − 19,36 = 0,64 e 20,25 − 20 = 0,25. O 20 está mais perto de 20,25.",
      },
    ],
    steps: [
      "\\(4{,}4^2 = 19{,}36\\) (falta 0,64) e \\(4{,}5^2 = 20{,}25\\) (passa 0,25).",
      "O 20 está mais perto de 20,25, então \\(\\sqrt{20} \\approx 4{,}5\\).",
      "(Mais exato: 4,47…)",
    ],
  },
  {
    id: 21,
    level: 2,
    title: "Nível 2",
    question:
      "Use a calculadora ou tentativas e aproxime \\(\\sqrt{10}\\) com duas casas decimais.",
    answer: "3,16",
    hint: "Está entre 3 e 4; depois entre 3,1 e 3,2…",
    common: [],
    steps: [
      "\\(3{,}1^2 = 9{,}61\\) e \\(3{,}2^2 = 10{,}24\\).",
      "\\(3{,}16^2 = 9{,}9856\\) e \\(3{,}17^2 = 10{,}0489\\).",
      "O 10 está mais perto de 9,9856: \\(\\sqrt{10} \\approx 3{,}16\\).",
    ],
  },
  {
    id: 22,
    level: 2,
    title: "Nível 2",
    question: "Aproxime \\(\\sqrt{7}\\) com duas casas decimais.",
    answer: "2,65",
    hint: "Teste 2,6² e 2,7².",
    common: [],
    steps: [
      "\\(2^2 = 4\\) e \\(3^2 = 9\\): está entre 2 e 3.",
      "\\(2{,}6^2 = 6{,}76\\) e \\(2{,}7^2 = 7{,}29\\): entre 2,6 e 2,7.",
      "\\(2{,}64^2 = 6{,}9696\\) e \\(2{,}65^2 = 7{,}0225\\): mais perto de 2,65.",
      "\\(\\sqrt{7} \\approx 2{,}65\\).",
    ],
  },
  {
    id: 23,
    level: 2,
    title: "Nível 2",
    question: "Qual afirmação é verdadeira?",
    answer: "4,5 é maior que \\(\\sqrt{20}\\)",
    options: [
      "\\(\\sqrt{20}\\) é maior que 4,5",
      "4,5 é maior que \\(\\sqrt{20}\\)",
      "\\(\\sqrt{20}\\) = 4,5 exatamente",
      "Não dá para comparar",
    ],
    hint: "Compare os quadrados: 4,5² = ?",
    common: [],
    steps: [
      "Eleve os dois ao quadrado (ambos positivos): \\(\\sqrt{20}^2 = 20\\) e \\(4{,}5^2 = 20{,}25\\).",
      "Como \\(20 < 20{,}25\\), temos \\(\\sqrt{20} < 4{,}5\\).",
    ],
  },
  {
    id: 24,
    level: 2,
    title: "Nível 2",
    question:
      "Qual é a ordem crescente de \\(\\sqrt{10}\\), 3 e \\(\\sqrt{8}\\)?",
    answer: "\\(\\sqrt{8}\\), 3, \\(\\sqrt{10}\\)",
    options: [
      "\\(\\sqrt{8}\\), 3, \\(\\sqrt{10}\\)",
      "3, \\(\\sqrt{8}\\), \\(\\sqrt{10}\\)",
      "\\(\\sqrt{10}\\), 3, \\(\\sqrt{8}\\)",
      "\\(\\sqrt{8}\\), \\(\\sqrt{10}\\), 3",
    ],
    hint: "Escreva o 3 como √9.",
    common: [],
    steps: [
      "Escreva 3 como \\(\\sqrt{9}\\).",
      "Agora compare os radicandos: 8 < 9 < 10.",
      "Ordem: \\(\\sqrt{8} < 3 < \\sqrt{10}\\).",
    ],
  },
  {
    id: 25,
    level: 2,
    title: "Nível 2",
    question:
      "Um quadrado tem área de 50 m². Quanto mede o lado, aproximadamente, com duas casas decimais?",
    answer: "7,07",
    hint: "Está logo acima de 7.",
    common: [],
    steps: [
      "\\(\\ell = \\sqrt{50}\\).",
      "\\(7^2 = 49\\) e \\(8^2 = 64\\): entre 7 e 8.",
      "\\(7{,}07^2 = 49{,}9849\\) ✓ (bem perto de 50).",
      "Resposta: \\(7{,}07\\text{ m}\\).",
    ],
  },
  {
    id: 26,
    level: 2,
    title: "Nível 2",
    question:
      "Um quadrado tem área de 2 m². Use \\(\\sqrt{2} \\approx 1{,}41\\) e calcule o perímetro aproximado, em metros.",
    answer: "5,64",
    hint: "4 lados.",
    common: [],
    steps: [
      "Lado: \\(\\sqrt{2} \\approx 1{,}41\\).",
      "Perímetro: \\(4 \\cdot 1{,}41 = 5{,}64\\).",
    ],
  },
  {
    id: 27,
    level: 2,
    title: "Nível 2",
    question:
      "Quantos números inteiros existem estritamente entre \\(\\sqrt{10}\\) e \\(\\sqrt{50}\\)?",
    answer: "4",
    hint: "Localize as duas raízes na reta numérica.",
    common: [
      {
        value: "5",
        message:
          "Cuidado: 3 e 8 não entram. √10 ≈ 3,16 e √50 ≈ 7,07, então os inteiros são 4, 5, 6 e 7.",
      },
    ],
    steps: [
      "\\(\\sqrt{10} \\approx 3{,}16\\) (entre 3 e 4) e \\(\\sqrt{50} \\approx 7{,}07\\) (entre 7 e 8).",
      "Inteiros entre eles: 4, 5, 6 e 7.",
      "Total: 4.",
    ],
  },
  {
    id: 28,
    level: 2,
    title: "Nível 2",
    question:
      "Uma toalha quadrada tem 3 m² de área e vai receber renda em todo o contorno. Use \\(\\sqrt{3} \\approx 1{,}73\\) e calcule quantos metros de renda, aproximadamente.",
    answer: "6,92",
    hint: "Perímetro de quadrado = 4 · lado.",
    common: [],
    steps: [
      "Lado: \\(\\sqrt{3} \\approx 1{,}73\\text{ m}\\).",
      "Contorno = perímetro: \\(4 \\cdot 1{,}73 = 6{,}92\\text{ m}\\).",
    ],
  },
  {
    id: 29,
    level: 3,
    title: "Nível 3",
    question: "Calcule \\(\\sqrt{4 \\cdot 25}\\).",
    answer: "10",
    hint: "Separe em √4 · √25.",
    common: [
      {
        value: "100",
        message: "100 é o que está dentro da raiz. Falta tirar a raiz: 2 · 5.",
      },
    ],
    steps: [
      "\\(\\sqrt{4 \\cdot 25} = \\sqrt{4} \\cdot \\sqrt{25} = 2 \\cdot 5 = 10.\\)",
    ],
  },
  {
    id: 30,
    level: 3,
    title: "Nível 3",
    question:
      "Simplifique \\(\\sqrt{12}\\) na forma \\(a\\sqrt3\\). Quanto vale a?",
    answer: "2",
    hint: "Qual quadrado perfeito divide 12?",
    common: [],
    steps: [
      "\\(12 = 4 \\cdot 3\\) (4 é quadrado perfeito).",
      "\\(\\sqrt{12} = \\sqrt{4} \\cdot \\sqrt{3} = 2\\sqrt{3}\\).",
      "a = 2.",
    ],
  },
  {
    id: 31,
    level: 3,
    title: "Nível 3",
    question:
      "Simplifique \\(\\sqrt{50}\\) na forma \\(a\\sqrt2\\). Quanto vale a?",
    answer: "5",
    hint: "25 é quadrado perfeito.",
    common: [],
    steps: [
      "\\(50 = 25 \\cdot 2\\).",
      "\\(\\sqrt{50} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}\\).",
    ],
  },
  {
    id: 32,
    level: 3,
    title: "Nível 3",
    question:
      "Simplifique \\(\\sqrt{75}\\) na forma \\(a\\sqrt3\\). Quanto vale a?",
    answer: "5",
    hint: "75 = 25 · 3.",
    common: [],
    steps: ["\\(75 = 25 \\cdot 3\\).", "\\(\\sqrt{75} = 5\\sqrt{3}\\)."],
  },
  {
    id: 33,
    level: 3,
    title: "Nível 3",
    question:
      "Simplifique \\(\\sqrt{72}\\) na forma \\(a\\sqrt2\\). Quanto vale a?",
    answer: "6",
    hint: "72 = 36 · 2.",
    common: [
      {
        value: "36",
        message:
          "36 é o quadrado perfeito que sai de dentro; ele fica √36 = 6.",
      },
      {
        value: "3",
        message:
          "Você usou 9 · 8. Mas √8 ainda dá para simplificar: 3 · 2√2 = 6√2.",
      },
    ],
    steps: [
      "\\(72 = 36 \\cdot 2\\) (o maior quadrado perfeito que divide 72).",
      "\\(\\sqrt{72} = 6\\sqrt{2}\\).",
      "Pelos primos: \\(72 = 2^3 \\cdot 3^2 = 2 \\cdot 2^2 \\cdot 3^2\\); saem 2 e 3, sobra um 2 dentro: \\(2 \\cdot 3 \\cdot \\sqrt{2}\\).",
    ],
  },
  {
    id: 34,
    level: 3,
    title: "Nível 3",
    question:
      "Simplifique \\(\\sqrt{200}\\) na forma \\(a\\sqrt2\\). Quanto vale a?",
    answer: "10",
    hint: "200 = 100 · 2.",
    common: [],
    steps: ["\\(200 = 100 \\cdot 2\\).", "\\(\\sqrt{200} = 10\\sqrt{2}\\)."],
  },
  {
    id: 35,
    level: 3,
    title: "Nível 3",
    question: "Qual é a forma simplificada de \\(\\sqrt{48}\\)?",
    answer: "\\(4\\sqrt{3}\\)",
    options: [
      "\\(4\\sqrt{3}\\)",
      "\\(2\\sqrt{12}\\)",
      "\\(6\\sqrt{8}\\)",
      "\\(12\\sqrt{4}\\)",
    ],
    hint: "Procure o maior quadrado perfeito que divide 48.",
    common: [],
    steps: [
      "\\(48 = 16 \\cdot 3\\) (16 é o maior quadrado perfeito que divide 48).",
      "\\(\\sqrt{48} = 4\\sqrt{3}\\).",
      "As outras ainda podem ser simplificadas (ou estão erradas).",
    ],
  },
  {
    id: 36,
    level: 3,
    title: "Nível 3",
    question: "Qual é a forma simplificada de \\(\\sqrt{45}\\)?",
    answer: "\\(3\\sqrt{5}\\)",
    options: [
      "\\(3\\sqrt{5}\\)",
      "\\(5\\sqrt{3}\\)",
      "\\(9\\sqrt{5}\\)",
      "\\(15\\sqrt{3}\\)",
    ],
    hint: "45 = 9 · 5.",
    common: [],
    steps: ["\\(45 = 9 \\cdot 5\\).", "\\(\\sqrt{45} = 3\\sqrt{5}\\)."],
  },
  {
    id: 37,
    level: 3,
    title: "Nível 3",
    question:
      "Se \\(3\\sqrt2 = \\sqrt{n}\\) (o 3 entra na raiz), qual é o valor de n?",
    answer: "18",
    hint: "3 = √9.",
    common: [],
    steps: [
      "\\(3 = \\sqrt{9}\\).",
      "\\(3\\sqrt{2} = \\sqrt{9} \\cdot \\sqrt{2} = \\sqrt{18}\\).",
    ],
  },
  {
    id: 38,
    level: 3,
    title: "Nível 3",
    question: "Se \\(2\\sqrt5 = \\sqrt{n}\\), qual é o valor de n?",
    answer: "20",
    hint: "2 = √4.",
    common: [],
    steps: [
      "\\(2 = \\sqrt{4}\\).",
      "\\(\\sqrt{4} \\cdot \\sqrt{5} = \\sqrt{20}\\).",
    ],
  },
  {
    id: 39,
    level: 3,
    title: "Nível 3",
    question:
      "Simplifique \\(\\sqrt{98}\\) na forma \\(a\\sqrt2\\). Quanto vale a?",
    answer: "7",
    hint: "49 · 2 = 98.",
    common: [],
    steps: ["\\(98 = 49 \\cdot 2\\).", "\\(\\sqrt{98} = 7\\sqrt{2}\\)."],
  },
  {
    id: 40,
    level: 3,
    title: "Nível 3",
    question: "Calcule \\(\\sqrt{9 + 16}\\).",
    answer: "5",
    hint: "Resolva dentro da raiz antes de tirar a raiz.",
    common: [
      {
        value: "7",
        message:
          "Você fez √9 + √16. Mas a raiz da soma não é a soma das raízes. Primeiro 9 + 16 = 25.",
      },
    ],
    steps: [
      "Faça a conta dentro da raiz primeiro: \\(9 + 16 = 25\\).",
      "\\(\\sqrt{25} = 5\\).",
      "Note: \\(\\sqrt{9} + \\sqrt{16} = 7 \\ne 5\\). Raiz da soma ≠ soma das raízes.",
    ],
  },
  {
    id: 41,
    level: 3,
    title: "Nível 3",
    question:
      "Use \\(\\sqrt{2} \\approx 1{,}41\\) e a simplificação \\(\\sqrt{50} = 5\\sqrt{2}\\) para calcular \\(\\sqrt{50}\\) aproximadamente.",
    answer: "7,05",
    hint: "Multiplique 5 por 1,41.",
    common: [],
    steps: [
      "\\(\\sqrt{50} = 5\\sqrt{2} \\approx 5 \\cdot 1{,}41 = 7{,}05\\).",
      "(Calculadora: 7,07. A diferença vem de arredondar √2.)",
    ],
  },
  {
    id: 42,
    level: 3,
    title: "Nível 3",
    question: "Qual simplificação está correta?",
    answer: "\\(\\sqrt{20} = 2\\sqrt{5}\\)",
    options: [
      "\\(\\sqrt{20} = 2\\sqrt{5}\\)",
      "\\(\\sqrt{20} = 4\\sqrt{5}\\)",
      "\\(\\sqrt{20} = 5\\sqrt{2}\\)",
      "\\(\\sqrt{20} = 10\\)",
    ],
    hint: "Teste elevando ao quadrado: o resultado precisa voltar a 20.",
    common: [],
    steps: [
      "\\(20 = 4 \\cdot 5\\) ⇒ \\(\\sqrt{20} = 2\\sqrt{5}\\).",
      "Teste a errada: \\((4\\sqrt{5})^2 = 16 \\cdot 5 = 80 \\ne 20\\).",
    ],
  },
  {
    id: 43,
    level: 4,
    title: "Nível 4",
    question:
      "Calcule \\(3\\sqrt{2} + 5\\sqrt{2} = a\\sqrt{2}\\). Quanto vale a?",
    answer: "8",
    hint: "É como 3x + 5x.",
    common: [],
    steps: [
      "Radicais semelhantes (mesmo √2): some os números de fora.",
      "\\(3 + 5 = 8\\) ⇒ \\(8\\sqrt{2}\\).",
    ],
  },
  {
    id: 44,
    level: 4,
    title: "Nível 4",
    question:
      "Calcule \\(7\\sqrt{3} - 2\\sqrt{3} = a\\sqrt{3}\\). Quanto vale a?",
    answer: "5",
    hint: "É como 7x − 2x.",
    common: [],
    steps: ["\\(7 - 2 = 5\\) ⇒ \\(5\\sqrt{3}\\)."],
  },
  {
    id: 45,
    level: 4,
    title: "Nível 4",
    question:
      "Qual conta pode ser feita diretamente, somando os números de fora?",
    answer: "\\(2\\sqrt{5} + 3\\sqrt{5}\\)",
    options: [
      "\\(2\\sqrt{5} + 3\\sqrt{5}\\)",
      "\\(\\sqrt{2} + \\sqrt{3}\\)",
      "\\(4\\sqrt{2} + 4\\sqrt{3}\\)",
      "\\(\\sqrt{5} + \\sqrt{7}\\)",
    ],
    hint: "É como termos semelhantes na álgebra: 2x + 3x pode, x + y não.",
    common: [],
    steps: [
      "Só dá para juntar radicais semelhantes (mesmo radicando).",
      "\\(2\\sqrt{5} + 3\\sqrt{5} = 5\\sqrt{5}\\).",
      "Nas outras, os radicandos são diferentes.",
    ],
  },
  {
    id: 46,
    level: 4,
    title: "Nível 4",
    question:
      "Calcule \\(\\sqrt{18} + \\sqrt{8} = a\\sqrt{2}\\). Quanto vale a?",
    answer: "5",
    hint: "Simplifique cada raiz antes de somar.",
    common: [
      {
        value: "26",
        message: "Não junte os números de dentro! Simplifique primeiro.",
      },
    ],
    steps: [
      "\\(\\sqrt{18} = 3\\sqrt{2}\\) e \\(\\sqrt{8} = 2\\sqrt{2}\\).",
      "\\(3\\sqrt{2} + 2\\sqrt{2} = 5\\sqrt{2}\\).",
    ],
  },
  {
    id: 47,
    level: 4,
    title: "Nível 4",
    question:
      "Calcule \\(\\sqrt{75} - \\sqrt{12} = a\\sqrt{3}\\). Quanto vale a?",
    answer: "3",
    hint: "75 = 25 · 3 e 12 = 4 · 3.",
    common: [],
    steps: [
      "\\(\\sqrt{75} = 5\\sqrt{3}\\) e \\(\\sqrt{12} = 2\\sqrt{3}\\).",
      "\\(5\\sqrt{3} - 2\\sqrt{3} = 3\\sqrt{3}\\).",
    ],
  },
  {
    id: 48,
    level: 4,
    title: "Nível 4",
    question: "Calcule \\(\\sqrt{2} \\cdot \\sqrt{8}\\).",
    answer: "4",
    hint: "Multiplique os radicandos: 2 · 8.",
    common: [],
    steps: [
      "\\(\\sqrt{2} \\cdot \\sqrt{8} = \\sqrt{2 \\cdot 8} = \\sqrt{16} = 4\\).",
    ],
  },
  {
    id: 49,
    level: 4,
    title: "Nível 4",
    question:
      "Calcule \\(3\\sqrt{2} \\cdot 4\\sqrt{3} = a\\sqrt{6}\\). Quanto vale a?",
    answer: "12",
    hint: "Multiplique 3 · 4 e √2 · √3 separadamente.",
    common: [],
    steps: [
      "Fora com fora: \\(3 \\cdot 4 = 12\\). Dentro com dentro: \\(\\sqrt{2} \\cdot \\sqrt{3} = \\sqrt{6}\\).",
      "\\(12\\sqrt{6}\\).",
    ],
  },
  {
    id: 50,
    level: 4,
    title: "Nível 4",
    question: "Calcule \\((\\sqrt{5})^2\\).",
    answer: "5",
    hint: "√5 · √5 = √25.",
    common: [
      {
        value: "25",
        message: "Elevar ao quadrado e tirar a raiz se cancelam: (√5)² = 5.",
      },
    ],
    steps: [
      'Elevar ao quadrado "desfaz" a raiz: \\((\\sqrt{5})^2 = \\sqrt{5} \\cdot \\sqrt{5} = \\sqrt{25} = 5\\).',
    ],
  },
  {
    id: 51,
    level: 4,
    title: "Nível 4",
    question: "Calcule \\((2\\sqrt{3})^2\\).",
    answer: "12",
    hint: "O quadrado vale para o 2 e para a √3.",
    common: [
      {
        value: "6",
        message: "Os dois fatores (2 e √3) são elevados ao quadrado: 2² · 3.",
      },
    ],
    steps: [
      "\\((2\\sqrt{3})^2 = 2^2 \\cdot (\\sqrt{3})^2 = 4 \\cdot 3 = 12\\).",
    ],
  },
  {
    id: 52,
    level: 4,
    title: "Nível 4",
    question: "Calcule \\(\\dfrac{\\sqrt{50}}{\\sqrt{2}}\\).",
    answer: "5",
    hint: "Divida os radicandos: 50 ÷ 2.",
    common: [],
    steps: [
      "\\(\\dfrac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{\\dfrac{50}{2}} = \\sqrt{25} = 5\\).",
    ],
  },
  {
    id: 53,
    level: 4,
    title: "Nível 4",
    question:
      "Racionalize \\(\\dfrac{6}{\\sqrt{3}}\\) e escreva na forma \\(a\\sqrt{3}\\). Quanto vale a?",
    answer: "2",
    hint: "Multiplique numerador e denominador por √3.",
    common: [],
    steps: [
      "Multiplique cima e baixo por √3: \\(\\dfrac{6 \\cdot \\sqrt{3}}{\\sqrt{3} \\cdot \\sqrt{3}} = \\dfrac{6\\sqrt{3}}{3}\\).",
      "\\(6 \\div 3 = 2\\) ⇒ \\(2\\sqrt{3}\\).",
    ],
  },
  {
    id: 54,
    level: 4,
    title: "Nível 4",
    question: "Calcule \\(\\sqrt{6^2 + 8^2}\\).",
    answer: "10",
    hint: "Faça as potências, some, e só depois tire a raiz.",
    common: [
      {
        value: "14",
        message: "Você fez 6 + 8. A conta dentro da raiz é 36 + 64.",
      },
    ],
    steps: ["\\(6^2 + 8^2 = 36 + 64 = 100\\).", "\\(\\sqrt{100} = 10\\)."],
  },
  {
    id: 55,
    level: 4,
    title: "Nível 4",
    question: "Calcule \\((\\sqrt{8} + \\sqrt{2})^2\\).",
    answer: "18",
    hint: "Simplifique √8 primeiro; some; depois eleve ao quadrado.",
    common: [],
    steps: [
      "Simplifique: \\(\\sqrt{8} = 2\\sqrt{2}\\).",
      "Some: \\(2\\sqrt{2} + \\sqrt{2} = 3\\sqrt{2}\\).",
      "Eleve ao quadrado: \\((3\\sqrt{2})^2 = 9 \\cdot 2 = 18\\).",
    ],
  },
  {
    id: 56,
    level: 5,
    title: "Nível 5",
    question: "Um quadrado tem área de 81 cm². Quanto mede o lado, em cm?",
    answer: "9",
    hint: "O lado é a raiz da área.",
    common: [],
    steps: [
      "\\(\\ell^2 = 81\\).",
      "\\(\\ell = \\sqrt{81} = 9\\).",
      "Resposta: \\(9\\text{ cm}\\).",
    ],
  },
  {
    id: 57,
    level: 5,
    title: "Nível 5",
    question: "Um quadrado tem área de 144 m². Qual é o perímetro, em metros?",
    answer: "48",
    hint: "Primeiro o lado.",
    common: [
      {
        value: "12",
        message: "Esse é o lado. Perímetro = 4 lados.",
      },
    ],
    steps: [
      "Lado: \\(\\sqrt{144} = 12\\).",
      "Perímetro: \\(4 \\cdot 12 = 48\\).",
    ],
  },
  {
    id: 58,
    level: 5,
    title: "Nível 5",
    question:
      "Um terreno quadrado de 2 500 m² será cercado com 3 voltas de arame. Quantos metros de arame são necessários?",
    answer: "600",
    hint: "Lado, perímetro e depois as voltas.",
    common: [
      {
        value: "200",
        message:
          "Esse é o perímetro (uma volta). Faltou multiplicar pelas 3 voltas.",
      },
    ],
    steps: [
      "Lado: \\(\\sqrt{2500} = 50\\).",
      "Perímetro: \\(4 \\cdot 50 = 200\\text{ m}\\).",
      "3 voltas: \\(3 \\cdot 200 = 600\\text{ m}\\).",
    ],
  },
  {
    id: 59,
    level: 5,
    title: "Nível 5",
    question: "Qual é o número positivo que, elevado ao quadrado, dá 2,25?",
    answer: "1,5",
    hint: "15 · 15 = 225.",
    common: [],
    steps: [
      "Procuramos \\(x^2 = 2{,}25\\).",
      "\\(x = \\sqrt{2{,}25} = 1{,}5\\).",
      "Teste: \\(1{,}5 \\cdot 1{,}5 = 2{,}25\\) ✓.",
    ],
  },
  {
    id: 60,
    level: 5,
    title: "Nível 5",
    question: "Resolva \\(x^2 = 169\\) com \\(x\\) positivo.",
    answer: "13",
    hint: "Raiz dos dois lados.",
    common: [],
    steps: [
      "Para desfazer o quadrado, tire a raiz: \\(x = \\sqrt{169}\\).",
      "\\(13 \\cdot 13 = 169\\) ⇒ \\(x = 13\\).",
    ],
  },
  {
    id: 61,
    level: 5,
    title: "Nível 5",
    question:
      "Dois quadrados têm áreas de 9 cm² e 16 cm². Um terceiro quadrado tem área igual à soma das duas. Quanto mede o lado do terceiro, em cm?",
    answer: "5",
    hint: "Some as áreas primeiro.",
    common: [
      {
        value: "7",
        message:
          "Você somou os lados (3 + 4). Some as áreas (9 + 16 = 25) e tire a raiz.",
      },
    ],
    steps: [
      "Área do terceiro: \\(9 + 16 = 25\\).",
      "Lado: \\(\\sqrt{25} = 5\\).",
      "Note: os lados são 3 e 4, e o novo lado é 5 — não 3 + 4 = 7. (Você vai reencontrar isso no Teorema de Pitágoras.)",
    ],
  },
  {
    id: 62,
    level: 5,
    title: "Nível 5",
    question:
      "Um retângulo de 8 m por 2 m será transformado em um quadrado de mesma área. Quanto mede o lado do quadrado, em metros?",
    answer: "4",
    hint: "Calcule a área primeiro.",
    common: [],
    steps: [
      "Área do retângulo: \\(8 \\cdot 2 = 16\\).",
      "Lado do quadrado: \\(\\sqrt{16} = 4\\).",
    ],
  },
  {
    id: 63,
    level: 5,
    title: "Nível 5",
    question: "Um quadrado tem perímetro de 36 cm. Qual é a sua área, em cm²?",
    answer: "81",
    hint: "Ache o lado primeiro.",
    common: [
      {
        value: "9",
        message: "Esse é o lado. Área = lado · lado.",
      },
    ],
    steps: ["Lado: \\(36 \\div 4 = 9\\).", "Área: \\(9 \\cdot 9 = 81\\)."],
  },
  {
    id: 64,
    level: 5,
    title: "Nível 5",
    question:
      "Um quadrado tem área de 75 cm². Escreva o lado na forma \\(a\\sqrt{3}\\). Quanto vale a?",
    answer: "5",
    hint: "Simplifique √75.",
    common: [],
    steps: [
      "\\(\\ell = \\sqrt{75}\\).",
      "\\(75 = 25 \\cdot 3\\) ⇒ \\(\\sqrt{75} = 5\\sqrt{3}\\).",
    ],
  },
  {
    id: 65,
    level: 5,
    title: "Nível 5",
    question:
      "Um círculo tem área de 78,5 m². Usando π = 3,14, quanto mede o raio, em metros?",
    answer: "5",
    hint: "Divida a área por 3,14 e tire a raiz.",
    common: [],
    steps: [
      "Área: \\(\\pi r^2 = 78{,}5\\).",
      "\\(r^2 = 78{,}5 \\div 3{,}14 = 25\\).",
      "\\(r = \\sqrt{25} = 5\\).",
    ],
  },
  {
    id: 66,
    level: 5,
    title: "Nível 5",
    question:
      "Um piso quadrado tem 11,56 m². Quanto mede cada lado, em metros?",
    answer: "3,4",
    hint: "34 · 34 = 1156.",
    common: [],
    steps: [
      "\\(\\ell = \\sqrt{11{,}56}\\). Pense em \\(1156\\) = \\(34 \\cdot 34\\).",
      "\\(3{,}4 \\cdot 3{,}4 = 11{,}56\\) ✓.",
      "Lado: \\(3{,}4\\text{ m}\\).",
    ],
  },
  {
    id: 67,
    level: 5,
    title: "Nível 5",
    question:
      "Um quadrado tem área de 20 cm². Aproxime o lado com duas casas decimais.",
    answer: "4,47",
    hint: "Está perto de 4,5; teste 4,47.",
    common: [],
    steps: [
      "\\(4^2 = 16 < 20 < 25 = 5^2\\).",
      "\\(4{,}47^2 = 19{,}9809\\) e \\(4{,}48^2 = 20{,}0704\\).",
      "\\(\\sqrt{20} \\approx 4{,}47\\).",
    ],
  },
  {
    id: 68,
    level: 5,
    title: "Nível 5",
    question:
      "Em um parque de diversões, o tempo de queda é dado por \\(t = \\sqrt{\\dfrac{h}{5}}\\) (t em segundos, h em metros). Quanto tempo leva uma queda de 80 m?",
    answer: "4",
    hint: "Divida 80 por 5 e tire a raiz.",
    common: [
      {
        value: "16",
        message: "16 é o valor dentro da raiz (80 ÷ 5). Falta tirar a raiz.",
      },
    ],
    steps: [
      "Substitua: \\(t = \\sqrt{\\dfrac{80}{5}} = \\sqrt{16}\\).",
      "\\(t = 4\\text{ s}\\).",
    ],
  },
  {
    id: 69,
    level: 5,
    title: "Nível 5",
    question:
      "Dois quadrados têm áreas de 50 cm² e 18 cm². Use \\(\\sqrt{2} \\approx 1{,}41\\) e calcule quanto o lado do maior excede o lado do menor, em cm.",
    answer: "2,82",
    hint: "Simplifique as duas raízes e subtraia.",
    common: [],
    steps: [
      "Lados: \\(\\sqrt{50} = 5\\sqrt{2}\\) e \\(\\sqrt{18} = 3\\sqrt{2}\\).",
      "Diferença: \\(5\\sqrt{2} - 3\\sqrt{2} = 2\\sqrt{2}\\).",
      "\\(2 \\cdot 1{,}41 = 2{,}82\\text{ cm}\\).",
    ],
  },
  {
    id: 70,
    level: 5,
    title: "Nível 5",
    question: "Qual equação representa “um quadrado tem área 49 m² e lado ℓ”?",
    answer: "\\(\\ell^2 = 49\\)",
    options: [
      "\\(\\ell^2 = 49\\)",
      "\\(2\\ell = 49\\)",
      "\\(\\ell = 49^2\\)",
      "\\(4\\ell = 49\\)",
    ],
    hint: "Área do quadrado: lado vezes lado.",
    common: [],
    steps: [
      "Área do quadrado = lado · lado = \\(\\ell^2\\).",
      "Logo \\(\\ell^2 = 49\\) e \\(\\ell = 7\\).",
    ],
  },
  {
    id: 71,
    level: 5,
    title: "Nível 5",
    question: "Qual das contas abaixo está errada?",
    answer: "\\(\\sqrt{25} = \\sqrt{9} + \\sqrt{16}\\)",
    options: [
      "\\(\\sqrt{4} \\cdot \\sqrt{9} = 6\\)",
      "\\(\\sqrt{25} = \\sqrt{9} + \\sqrt{16}\\)",
      "\\((\\sqrt{7})^2 = 7\\)",
      "\\(\\sqrt{49} = 7\\)",
    ],
    hint: "Calcule os dois lados da igualdade com números.",
    common: [],
    steps: [
      "\\(\\sqrt{9 + 16} = \\sqrt{25} = 5\\), mas \\(\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7\\).",
      "Logo a segunda conta é a errada. Raiz da soma ≠ soma das raízes.",
    ],
  },
] as const;
