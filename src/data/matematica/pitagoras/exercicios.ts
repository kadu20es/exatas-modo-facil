export const pitagorasLevels = [
  {
    level: 1,
    name: "Identificar e entender o teorema",
    description:
      "Reconhecer catetos e hipotenusa, ler a fórmula e ver os quadrados sobre os lados.",
    reminder:
      "a² + b² = c², onde c é a hipotenusa (o lado oposto ao ângulo reto, o maior).",
    lesson: "l1",
  },
  {
    level: 2,
    name: "Calcular a hipotenusa",
    description: "Somar os quadrados dos catetos e tirar a raiz.",
    reminder: "Hipotenusa: c = √(a² + b²). Some primeiro, tire a raiz depois.",
    lesson: "l2",
  },
  {
    level: 3,
    name: "Calcular um cateto",
    description:
      "Subtrair o quadrado do cateto conhecido do quadrado da hipotenusa.",
    reminder: "Cateto: a = √(c² − b²). Procurou cateto: subtraia.",
    lesson: "l3",
  },
  {
    level: 4,
    name: "Ternos pitagóricos e recíproca",
    description:
      "Reconhecer 3-4-5, 5-12-13 e múltiplos; classificar triângulos pelos lados.",
    reminder:
      "a² + b² = c² retângulo; > acutângulo; < obtusângulo (c é o maior lado).",
    lesson: "l4",
  },
  {
    level: 5,
    name: "Diagonais e alturas",
    description:
      "Diagonal do quadrado e do retângulo, altura do triângulo equilátero e isósceles, trapézios e caixas.",
    reminder:
      "Diagonal do quadrado = ℓ√2. Altura do equilátero = ℓ√3/2. Procure o triângulo retângulo escondido.",
    lesson: "l5",
  },
  {
    level: 6,
    name: "Distância no plano cartesiano",
    description:
      "Calcular a distância entre dois pontos com o triângulo escondido.",
    reminder:
      "d = √((x₂−x₁)² + (y₂−y₁)²). Catetos = diferenças das coordenadas.",
    lesson: "l6",
  },
  {
    level: 7,
    name: "Problemas de aplicação",
    description: "Escadas, rampas, cabos, caminhos, telhados e navegação.",
    reminder:
      "Desenhe, ache o triângulo retângulo, escolha soma ou subtração, cuide das unidades.",
    lesson: "l7",
  },
  {
    level: 8,
    name: "Desafios de interpretação",
    description:
      "Problemas com mais de um passo, equações simples e figuras compostas.",
    reminder:
      "Divida em triângulos retângulos menores e use o teorema um passo de cada vez.",
    lesson: "l8",
  },
] as const;

export const pitagorasExercises = [
  {
    id: 1,
    level: 1,
    title: "Nível 1",
    question: "Em um triângulo retângulo, a hipotenusa é:",
    answer: "o lado oposto ao ângulo reto (e o maior)",
    options: [
      "o lado oposto ao ângulo reto (e o maior)",
      "qualquer um dos catetos",
      "o menor lado",
      "o lado de baixo, sempre",
    ],
    hint: "Procure o cantinho de quadrado: a hipotenusa fica do outro lado.",
    common: [],
    steps: [
      "O ângulo reto forma-se entre os catetos.",
      "A hipotenusa é o lado que fica de frente para o ângulo reto, e é sempre o maior lado.",
      "A posição do desenho não importa: gire o triângulo e ela continua oposta ao ângulo reto.",
    ],
  },
  {
    id: 2,
    level: 1,
    title: "Nível 1",
    question: "Qual é a medida da hipotenusa no triângulo da figura?",
    answer: "5",
    options: ["3", "4", "5", "Não dá para saber"],
    hint: "A hipotenusa é o maior lado.",
    common: [],
    steps: [
      "O ângulo reto está no canto esquerdo embaixo; o lado oposto é o inclinado.",
      "Ele mede 5, e é o maior lado (3 e 4 são os catetos).",
    ],
    figure: {
      tag: "svg",
      attrs: {
        viewBox: "0 0 303.33333333333337 186",
        style: "width:303.33333333333337px;max-width:100%;height:auto",
        role: "img",
        "aria-label": "Triângulo retângulo",
      },
      children: [
        {
          tag: "polygon",
          attrs: {
            points: "40,20 40,150 213.33333333333334,150",
            fill: "#e0e7ff",
            stroke: "#4f46e5",
            "stroke-width": "3",
            "stroke-linejoin": "round",
          },
          children: [],
        },
        {
          tag: "polyline",
          attrs: {
            points: "40,136 54,136 54,150",
            fill: "none",
            stroke: "#ec4899",
            "stroke-width": "2",
          },
          children: [],
        },
        {
          tag: "text",
          attrs: {
            x: "126.66666666666667",
            y: "172",
            "text-anchor": "middle",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["4"],
        },
        {
          tag: "text",
          attrs: {
            x: "32",
            y: "90",
            "text-anchor": "end",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["3"],
        },
        {
          tag: "text",
          attrs: {
            x: "138.66666666666669",
            y: "79",
            "text-anchor": "start",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["5"],
        },
      ],
    },
  },
  {
    id: 3,
    level: 1,
    title: "Nível 1",
    question:
      "Um quadrado é desenhado sobre um cateto que mede 3 cm. Qual é a área desse quadrado, em cm²?",
    answer: "9",
    hint: "Elevar ao quadrado é multiplicar por si mesmo.",
    common: [
      {
        value: "6",
        message: "Você dobrou o lado. Área do quadrado = lado · lado.",
      },
    ],
    steps: [
      "Área do quadrado = lado · lado.",
      "\\(3^2 = 3 \\cdot 3 = 9\\).",
      "Resposta: \\(9\\text{ cm}^{2}\\).",
    ],
  },
  {
    id: 4,
    level: 1,
    title: "Nível 1",
    question:
      "Os quadrados desenhados sobre os catetos têm áreas de 9 cm² e 16 cm². Qual é a área do quadrado sobre a hipotenusa, em cm²?",
    answer: "25",
    hint: "Some as duas áreas.",
    common: [],
    steps: [
      "O teorema diz: área sobre a hipotenusa = soma das áreas sobre os catetos.",
      "\\(9 + 16 = 25\\).",
      "Resposta: \\(25\\text{ cm}^{2}\\).",
    ],
  },
  {
    id: 5,
    level: 1,
    title: "Nível 1",
    question:
      "Os quadrados sobre os catetos têm áreas de 36 cm² e 64 cm². Quanto mede a hipotenusa, em cm?",
    answer: "10",
    hint: "Some as áreas e depois tire a raiz.",
    common: [
      {
        value: "100",
        message:
          "100 é a área do quadrado da hipotenusa. A medida do lado é a raiz.",
      },
    ],
    steps: [
      "Área sobre a hipotenusa: \\(36 + 64 = 100\\).",
      "Lado do quadrado de área 100: \\(\\sqrt{100} = 10\\).",
      "Resposta: \\(10\\text{ cm}\\).",
    ],
  },
  {
    id: 6,
    level: 1,
    title: "Nível 1",
    question:
      "Para um triângulo retângulo com catetos a e b e hipotenusa c, qual escrita do Teorema de Pitágoras está correta?",
    answer: "\\(a^2 + b^2 = c^2\\)",
    options: [
      "\\(a^2 + b^2 = c^2\\)",
      "\\(a + b = c\\)",
      "\\(a^2 + c^2 = b^2\\)",
      "\\(c^2 = a + b\\)",
    ],
    hint: "A hipotenusa fica sozinha de um lado; os catetos, ao quadrado, do outro.",
    common: [],
    steps: [
      "O quadrado da hipotenusa é igual à soma dos quadrados dos catetos: \\(c^2 = a^2 + b^2\\).",
      "Somar os lados sem elevar ao quadrado (\\(a + b = c\\)) é um erro comum.",
    ],
  },
  {
    id: 7,
    level: 1,
    title: "Nível 1",
    question: "Calcule \\(6^2 + 8^2\\).",
    answer: "100",
    hint: "6 · 6 e 8 · 8.",
    common: [],
    steps: [
      "\\(6^2 = 36\\) e \\(8^2 = 64\\).",
      "\\(36 + 64 = 100\\).",
      "Como \\(10^2 = 100\\), o triângulo 6-8-10 satisfaz o teorema.",
    ],
  },
  {
    id: 8,
    level: 1,
    title: "Nível 1",
    question:
      "Um triângulo tem lados 4, 5 e 6. Sabendo que \\(4^2 + 5^2 = 41\\) e \\(6^2 = 36\\), o que podemos concluir?",
    answer: "Não é retângulo",
    options: ["Não é retângulo", "É retângulo", "Não existe", "É equilátero"],
    hint: "Compare 41 com 36.",
    common: [],
    steps: [
      "Para ser retângulo, precisaria valer \\(4^2 + 5^2 = 6^2\\).",
      "Mas \\(41 \\ne 36\\), então não é retângulo.",
    ],
  },
  {
    id: 9,
    level: 1,
    title: "Nível 1",
    question:
      "Os catetos de um triângulo retângulo medem 3 e 4. Qual afirmação está correta?",
    answer: "A hipotenusa mede 5, não 7",
    options: [
      "A hipotenusa mede 5, não 7",
      "A hipotenusa mede 7 (3 + 4)",
      "A hipotenusa mede 12 (3 · 4)",
      "A hipotenusa mede 1 (4 − 3)",
    ],
    hint: "Eleve ao quadrado, some e tire a raiz.",
    common: [],
    steps: [
      "\\(3^2 + 4^2 = 9 + 16 = 25\\), e \\(\\sqrt{25} = 5\\).",
      "A hipotenusa nunca é a soma dos catetos: 7 seria grande demais (lembra da desigualdade triangular?).",
    ],
  },
  {
    id: 10,
    level: 1,
    title: "Nível 1",
    question:
      "Os catetos de um triângulo retângulo medem 5 e 12. Quanto vale c² (o quadrado da hipotenusa)?",
    answer: "169",
    hint: "5² = 25 e 12² = 144.",
    common: [
      {
        value: "17",
        message: "Você somou os catetos. Primeiro eleve ao quadrado.",
      },
    ],
    steps: [
      "\\(5^2 + 12^2 = 25 + 144 = 169\\).",
      "Então \\(c^2 = 169\\) (e \\(c = 13\\)).",
    ],
  },
  {
    id: 11,
    level: 1,
    title: "Nível 1",
    question:
      "Um quadrado de área 25 cm² está sobre a hipotenusa e um de área 9 cm² está sobre um dos catetos. Qual é a área do quadrado sobre o outro cateto, em cm²?",
    answer: "16",
    hint: "O todo (25) é a soma das duas partes.",
    common: [],
    steps: [
      "Área da hipotenusa = soma das áreas dos catetos.",
      "\\(25 = 9 + x\\) ⇒ \\(x = 25 - 9 = 16\\).",
    ],
  },
  {
    id: 12,
    level: 1,
    title: "Nível 1",
    question: "O Teorema de Pitágoras vale para:",
    answer: "triângulos retângulos",
    options: [
      "triângulos retângulos",
      "qualquer triângulo",
      "só triângulos isósceles",
      "só triângulos equiláteros",
    ],
    hint: "Precisa existir um ângulo reto.",
    common: [],
    steps: [
      "O teorema fala de catetos e hipotenusa, que só existem em triângulos que têm ângulo reto.",
      "Em outros triângulos, \\(a^2 + b^2\\) não dá \\(c^2\\).",
    ],
  },
  {
    id: 13,
    level: 2,
    title: "Nível 2",
    question: "Os catetos medem 3 cm e 4 cm. Quanto mede a hipotenusa, em cm?",
    answer: "5",
    hint: "9 + 16 e depois a raiz.",
    common: [
      {
        value: "7",
        message:
          "Você somou os catetos. Eleve ao quadrado, some e tire a raiz.",
      },
      {
        value: "25",
        message: "25 é c². Falta tirar a raiz.",
      },
    ],
    steps: [
      "Escreva: \\(c^2 = a^2 + b^2\\).",
      "\\(c^2 = 3^2 + 4^2 = 9 + 16 = 25\\).",
      "\\(c = \\sqrt{25} = 5\\).",
    ],
    figure: {
      tag: "svg",
      attrs: {
        viewBox: "0 0 303.33333333333337 186",
        style: "width:303.33333333333337px;max-width:100%;height:auto",
        role: "img",
        "aria-label": "Triângulo retângulo",
      },
      children: [
        {
          tag: "polygon",
          attrs: {
            points: "40,20 40,150 213.33333333333334,150",
            fill: "#e0e7ff",
            stroke: "#4f46e5",
            "stroke-width": "3",
            "stroke-linejoin": "round",
          },
          children: [],
        },
        {
          tag: "polyline",
          attrs: {
            points: "40,136 54,136 54,150",
            fill: "none",
            stroke: "#ec4899",
            "stroke-width": "2",
          },
          children: [],
        },
        {
          tag: "text",
          attrs: {
            x: "126.66666666666667",
            y: "172",
            "text-anchor": "middle",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["4 cm"],
        },
        {
          tag: "text",
          attrs: {
            x: "32",
            y: "90",
            "text-anchor": "end",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["3 cm"],
        },
        {
          tag: "text",
          attrs: {
            x: "138.66666666666669",
            y: "79",
            "text-anchor": "start",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["c"],
        },
      ],
    },
  },
  {
    id: 14,
    level: 2,
    title: "Nível 2",
    question:
      "Os catetos medem 6 m e 8 m. Quanto mede a hipotenusa, em metros?",
    answer: "10",
    hint: "6² + 8² = 100.",
    common: [
      {
        value: "14",
        message: "Você somou os catetos.",
      },
      {
        value: "100",
        message: "100 é c²; falta a raiz.",
      },
    ],
    steps: [
      "\\(c^2 = 6^2 + 8^2 = 36 + 64 = 100\\).",
      "\\(c = \\sqrt{100} = 10\\).",
    ],
    figure: {
      tag: "svg",
      attrs: {
        viewBox: "0 0 303.33333333333337 186",
        style: "width:303.33333333333337px;max-width:100%;height:auto",
        role: "img",
        "aria-label": "Triângulo retângulo",
      },
      children: [
        {
          tag: "polygon",
          attrs: {
            points: "40,20 40,150 213.33333333333334,150",
            fill: "#e0e7ff",
            stroke: "#4f46e5",
            "stroke-width": "3",
            "stroke-linejoin": "round",
          },
          children: [],
        },
        {
          tag: "polyline",
          attrs: {
            points: "40,136 54,136 54,150",
            fill: "none",
            stroke: "#ec4899",
            "stroke-width": "2",
          },
          children: [],
        },
        {
          tag: "text",
          attrs: {
            x: "126.66666666666667",
            y: "172",
            "text-anchor": "middle",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["8 m"],
        },
        {
          tag: "text",
          attrs: {
            x: "32",
            y: "90",
            "text-anchor": "end",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["6 m"],
        },
        {
          tag: "text",
          attrs: {
            x: "138.66666666666669",
            y: "79",
            "text-anchor": "start",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["c"],
        },
      ],
    },
  },
  {
    id: 15,
    level: 2,
    title: "Nível 2",
    question: "Os catetos medem 5 cm e 12 cm. Quanto mede a hipotenusa, em cm?",
    answer: "13",
    hint: "13 · 13 = 169.",
    common: [],
    steps: ["\\(c^2 = 25 + 144 = 169\\).", "\\(c = \\sqrt{169} = 13\\)."],
  },
  {
    id: 16,
    level: 2,
    title: "Nível 2",
    question: "Os catetos medem 9 cm e 12 cm. Quanto mede a hipotenusa, em cm?",
    answer: "15",
    hint: "15 · 15 = 225.",
    common: [],
    steps: ["\\(c^2 = 81 + 144 = 225\\).", "\\(c = \\sqrt{225} = 15\\)."],
  },
  {
    id: 17,
    level: 2,
    title: "Nível 2",
    question: "Os catetos medem 8 cm e 15 cm. Quanto mede a hipotenusa, em cm?",
    answer: "17",
    hint: "17 · 17 = 289.",
    common: [],
    steps: ["\\(c^2 = 64 + 225 = 289\\).", "\\(c = \\sqrt{289} = 17\\)."],
  },
  {
    id: 18,
    level: 2,
    title: "Nível 2",
    question:
      "Os catetos medem 1,5 m e 2 m. Quanto mede a hipotenusa, em metros?",
    answer: "2,5",
    hint: "1,5 · 1,5 = 2,25.",
    common: [
      {
        value: "6,25",
        message: "6,25 é c². Falta tirar a raiz.",
      },
    ],
    steps: [
      "\\(c^2 = 1{,}5^2 + 2^2 = 2{,}25 + 4 = 6{,}25\\).",
      "\\(c = \\sqrt{6{,}25} = 2{,}5\\).",
    ],
  },
  {
    id: 19,
    level: 2,
    title: "Nível 2",
    question: "Os catetos medem 7 cm e 24 cm. Quanto mede a hipotenusa, em cm?",
    answer: "25",
    hint: "25 · 25 = 625.",
    common: [],
    steps: ["\\(c^2 = 49 + 576 = 625\\).", "\\(c = 25\\)."],
  },
  {
    id: 20,
    level: 2,
    title: "Nível 2",
    question:
      "Os catetos medem 20 cm e 21 cm. Quanto mede a hipotenusa, em cm?",
    answer: "29",
    hint: "29 · 29 = 841.",
    common: [],
    steps: ["\\(c^2 = 400 + 441 = 841\\).", "\\(c = \\sqrt{841} = 29\\)."],
  },
  {
    id: 21,
    level: 2,
    title: "Nível 2",
    question:
      "Os catetos de um triângulo retângulo medem 1 cm e 1 cm. Quanto vale c²?",
    answer: "2",
    hint: "1 + 1.",
    common: [],
    steps: [
      "\\(c^2 = 1^2 + 1^2 = 2\\).",
      "Logo \\(c = \\sqrt{2} \\approx 1{,}41\\) (não é número inteiro).",
    ],
  },
  {
    id: 22,
    level: 2,
    title: "Nível 2",
    question:
      "Os catetos medem 2 cm e 3 cm. Aproxime a hipotenusa com duas casas decimais, em cm.",
    answer: "3,61",
    hint: "√13 está entre 3 e 4; teste 3,6.",
    common: [],
    steps: [
      "\\(c^2 = 4 + 9 = 13\\).",
      "\\(c = \\sqrt{13}\\); \\(3{,}6^2 = 12{,}96\\) e \\(3{,}61^2 = 13{,}0321\\).",
      "\\(c \\approx 3{,}61\\text{ cm}\\).",
    ],
  },
  {
    id: 23,
    level: 2,
    title: "Nível 2",
    question:
      "Os catetos medem 4 cm e 6 cm. A hipotenusa é \\(a\\sqrt{13}\\). Quanto vale a?",
    answer: "2",
    hint: "52 = 4 · 13.",
    common: [],
    steps: [
      "\\(c^2 = 16 + 36 = 52\\).",
      "\\(52 = 4 \\cdot 13\\) ⇒ \\(\\sqrt{52} = 2\\sqrt{13}\\).",
    ],
  },
  {
    id: 24,
    level: 2,
    title: "Nível 2",
    question:
      "Um barco navega 8 km para o leste e depois 15 km para o norte. A que distância, em linha reta, ele está do ponto de partida, em km?",
    answer: "17",
    hint: "Leste e norte formam ângulo reto.",
    common: [],
    steps: [
      "Os dois trechos formam um ângulo reto: são catetos.",
      "\\(d^2 = 8^2 + 15^2 = 64 + 225 = 289\\).",
      "\\(d = 17\\text{ km}\\).",
    ],
    figure: {
      tag: "svg",
      attrs: {
        viewBox: "0 0 199.33333333333331 186",
        style: "width:199.33333333333331px;max-width:100%;height:auto",
        role: "img",
        "aria-label": "Triângulo retângulo",
      },
      children: [
        {
          tag: "polygon",
          attrs: {
            points: "40,20 40,150 109.33333333333333,150",
            fill: "#e0e7ff",
            stroke: "#4f46e5",
            "stroke-width": "3",
            "stroke-linejoin": "round",
          },
          children: [],
        },
        {
          tag: "polyline",
          attrs: {
            points: "40,136 54,136 54,150",
            fill: "none",
            stroke: "#ec4899",
            "stroke-width": "2",
          },
          children: [],
        },
        {
          tag: "text",
          attrs: {
            x: "74.66666666666666",
            y: "172",
            "text-anchor": "middle",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["8 km"],
        },
        {
          tag: "text",
          attrs: {
            x: "32",
            y: "90",
            "text-anchor": "end",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["15 km"],
        },
        {
          tag: "text",
          attrs: {
            x: "86.66666666666666",
            y: "79",
            "text-anchor": "start",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["d"],
        },
      ],
    },
  },
  {
    id: 25,
    level: 2,
    title: "Nível 2",
    question:
      "Um campo retangular mede 40 m por 30 m. Quantos metros a pessoa economiza ao cortar pela diagonal em vez de andar pelos dois lados (40 + 30)?",
    answer: "20",
    hint: "Calcule a diagonal e compare com 70.",
    common: [
      {
        value: "50",
        message: "50 é a diagonal. Falta comparar com o caminho de 70 m.",
      },
    ],
    steps: [
      "Diagonal: \\(d^2 = 40^2 + 30^2 = 1600 + 900 = 2500\\) ⇒ \\(d = 50\\text{ m}\\).",
      "Pelos lados: \\(40 + 30 = 70\\text{ m}\\).",
      "Economia: \\(70 - 50 = 20\\text{ m}\\).",
    ],
  },
  {
    id: 26,
    level: 2,
    title: "Nível 2",
    question:
      "Os catetos medem 0,3 m e 0,4 m. Quanto mede a hipotenusa, em metros?",
    answer: "0,5",
    hint: "0,3² = 0,09 (duas casas decimais).",
    common: [
      {
        value: "0,25",
        message: "0,25 é c². Falta tirar a raiz.",
      },
      {
        value: "0,7",
        message: "Você somou os catetos.",
      },
    ],
    steps: [
      "\\(c^2 = 0{,}3^2 + 0{,}4^2 = 0{,}09 + 0{,}16 = 0{,}25\\).",
      "\\(c = \\sqrt{0{,}25} = 0{,}5\\).",
    ],
  },
  {
    id: 27,
    level: 3,
    title: "Nível 3",
    question:
      "Em um triângulo retângulo, a hipotenusa mede 10 cm e um cateto mede 6 cm. Quanto mede o outro cateto, em cm?",
    answer: "8",
    hint: "Cateto: subtraia.",
    common: [
      {
        value: "16",
        message:
          "Você somou 10 + 6. Para achar um cateto, subtraia os quadrados.",
      },
      {
        value: "64",
        message: "64 é o quadrado do cateto. Falta a raiz.",
      },
    ],
    steps: [
      "\\(a^2 + b^2 = c^2\\) ⇒ \\(x^2 + 6^2 = 10^2\\).",
      "\\(x^2 = 100 - 36 = 64\\).",
      "\\(x = \\sqrt{64} = 8\\).",
    ],
    figure: {
      tag: "svg",
      attrs: {
        viewBox: "0 0 303.33333333333337 186",
        style: "width:303.33333333333337px;max-width:100%;height:auto",
        role: "img",
        "aria-label": "Triângulo retângulo",
      },
      children: [
        {
          tag: "polygon",
          attrs: {
            points: "40,20 40,150 213.33333333333334,150",
            fill: "#e0e7ff",
            stroke: "#4f46e5",
            "stroke-width": "3",
            "stroke-linejoin": "round",
          },
          children: [],
        },
        {
          tag: "polyline",
          attrs: {
            points: "40,136 54,136 54,150",
            fill: "none",
            stroke: "#ec4899",
            "stroke-width": "2",
          },
          children: [],
        },
        {
          tag: "text",
          attrs: {
            x: "126.66666666666667",
            y: "172",
            "text-anchor": "middle",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["x"],
        },
        {
          tag: "text",
          attrs: {
            x: "32",
            y: "90",
            "text-anchor": "end",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["6"],
        },
        {
          tag: "text",
          attrs: {
            x: "138.66666666666669",
            y: "79",
            "text-anchor": "start",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["10"],
        },
      ],
    },
  },
  {
    id: 28,
    level: 3,
    title: "Nível 3",
    question:
      "A hipotenusa mede 13 cm e um cateto mede 5 cm. Quanto mede o outro cateto, em cm?",
    answer: "12",
    hint: "169 − 25.",
    common: [],
    steps: ["\\(x^2 = 13^2 - 5^2 = 169 - 25 = 144\\).", "\\(x = 12\\)."],
  },
  {
    id: 29,
    level: 3,
    title: "Nível 3",
    question:
      "A hipotenusa mede 5 cm e um cateto mede 4 cm. Quanto mede o outro cateto, em cm?",
    answer: "3",
    hint: "25 − 16.",
    common: [],
    steps: ["\\(x^2 = 25 - 16 = 9\\).", "\\(x = 3\\)."],
  },
  {
    id: 30,
    level: 3,
    title: "Nível 3",
    question:
      "A hipotenusa mede 17 cm e um cateto mede 8 cm. Quanto mede o outro cateto, em cm?",
    answer: "15",
    hint: "17² = 289.",
    common: [],
    steps: ["\\(x^2 = 289 - 64 = 225\\).", "\\(x = 15\\)."],
  },
  {
    id: 31,
    level: 3,
    title: "Nível 3",
    question:
      "A hipotenusa mede 25 cm e um cateto mede 7 cm. Quanto mede o outro cateto, em cm?",
    answer: "24",
    hint: "25² = 625.",
    common: [],
    steps: ["\\(x^2 = 625 - 49 = 576\\).", "\\(x = 24\\)."],
  },
  {
    id: 32,
    level: 3,
    title: "Nível 3",
    question:
      "A hipotenusa mede 15 cm e um cateto mede 9 cm. Quanto mede o outro cateto, em cm?",
    answer: "12",
    hint: "15² = 225.",
    common: [],
    steps: ["\\(x^2 = 225 - 81 = 144\\).", "\\(x = 12\\)."],
  },
  {
    id: 33,
    level: 3,
    title: "Nível 3",
    question:
      "A hipotenusa mede 26 cm e um cateto mede 10 cm. Quanto mede o outro cateto, em cm?",
    answer: "24",
    hint: "26² = 676.",
    common: [],
    steps: ["\\(x^2 = 676 - 100 = 576\\).", "\\(x = 24\\)."],
  },
  {
    id: 34,
    level: 3,
    title: "Nível 3",
    question:
      "A hipotenusa mede 2,5 m e um cateto mede 1,5 m. Quanto mede o outro cateto, em metros?",
    answer: "2",
    hint: "2,5² = 6,25.",
    common: [],
    steps: [
      "\\(x^2 = 2{,}5^2 - 1{,}5^2 = 6{,}25 - 2{,}25 = 4\\).",
      "\\(x = 2\\).",
    ],
  },
  {
    id: 35,
    level: 3,
    title: "Nível 3",
    question:
      "A hipotenusa mede 6 cm e um cateto mede 4 cm. O outro cateto é \\(a\\sqrt{5}\\). Quanto vale a?",
    answer: "2",
    hint: "20 = 4 · 5.",
    common: [],
    steps: ["\\(x^2 = 36 - 16 = 20\\).", "\\(\\sqrt{20} = 2\\sqrt{5}\\)."],
  },
  {
    id: 36,
    level: 3,
    title: "Nível 3",
    question:
      "Uma escada de 5 m está apoiada em uma parede, com o pé a 3 m da parede. A que altura da parede ela toca, em metros?",
    answer: "4",
    hint: "A escada é o lado oposto ao ângulo reto.",
    common: [
      {
        value: "8",
        message: "Você somou 5 + 3. A escada é a hipotenusa: subtraia.",
      },
    ],
    steps: [
      "A escada é a hipotenusa (5 m); a distância ao pé é um cateto (3 m).",
      "\\(h^2 = 5^2 - 3^2 = 25 - 9 = 16\\).",
      "\\(h = 4\\text{ m}\\).",
    ],
    figure: {
      tag: "svg",
      attrs: {
        viewBox: "0 0 227.5 186",
        style: "width:227.5px;max-width:100%;height:auto",
        role: "img",
        "aria-label": "Triângulo retângulo",
      },
      children: [
        {
          tag: "polygon",
          attrs: {
            points: "40,20 40,150 137.5,150",
            fill: "#e0e7ff",
            stroke: "#4f46e5",
            "stroke-width": "3",
            "stroke-linejoin": "round",
          },
          children: [],
        },
        {
          tag: "polyline",
          attrs: {
            points: "40,136 54,136 54,150",
            fill: "none",
            stroke: "#ec4899",
            "stroke-width": "2",
          },
          children: [],
        },
        {
          tag: "text",
          attrs: {
            x: "88.75",
            y: "172",
            "text-anchor": "middle",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["3 m"],
        },
        {
          tag: "text",
          attrs: {
            x: "32",
            y: "90",
            "text-anchor": "end",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["h"],
        },
        {
          tag: "text",
          attrs: {
            x: "100.75",
            y: "79",
            "text-anchor": "start",
            "font-size": "15",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["5 m"],
        },
      ],
    },
  },
  {
    id: 37,
    level: 3,
    title: "Nível 3",
    question:
      "Um cabo de 13 m prende o topo de um poste ao chão, a 5 m do pé do poste. Qual é a altura do poste, em metros?",
    answer: "12",
    hint: "O cabo é a hipotenusa.",
    common: [],
    steps: [
      "Cabo = hipotenusa (13 m). Distância ao pé = cateto (5 m).",
      "\\(h^2 = 169 - 25 = 144\\) ⇒ \\(h = 12\\text{ m}\\).",
    ],
  },
  {
    id: 38,
    level: 3,
    title: "Nível 3",
    question:
      "A diagonal de uma tela retangular mede 65 cm e a largura mede 56 cm. Quanto mede a altura, em cm?",
    answer: "33",
    hint: "65² = 4225 e 56² = 3136.",
    common: [],
    steps: [
      "A diagonal é a hipotenusa.",
      "\\(h^2 = 65^2 - 56^2 = 4225 - 3136 = 1089\\).",
      "\\(h = \\sqrt{1089} = 33\\text{ cm}\\) (33 · 33 = 1089).",
    ],
  },
  {
    id: 39,
    level: 3,
    title: "Nível 3",
    question:
      "Uma rampa de 5 m de comprimento sobe 1,4 m. Qual é a distância horizontal que ela ocupa no chão, em metros?",
    answer: "4,8",
    hint: "1,4² = 1,96.",
    common: [],
    steps: [
      "Rampa = hipotenusa (5 m); altura = cateto (1,4 m).",
      "\\(x^2 = 25 - 1{,}96 = 23{,}04\\).",
      "\\(x = \\sqrt{23{,}04} = 4{,}8\\text{ m}\\) (4,8 · 4,8 = 23,04).",
    ],
  },
  {
    id: 40,
    level: 3,
    title: "Nível 3",
    question:
      "A hipotenusa mede 41 cm e um cateto mede 9 cm. Quanto mede o outro cateto, em cm?",
    answer: "40",
    hint: "41² = 1681.",
    common: [],
    steps: ["\\(x^2 = 1681 - 81 = 1600\\).", "\\(x = 40\\)."],
  },
  {
    id: 41,
    level: 4,
    title: "Nível 4",
    question: "Qual das ternas de medidas é um terno pitagórico?",
    answer: "5, 12, 13",
    options: ["5, 12, 13", "4, 5, 6", "6, 7, 8", "2, 3, 4"],
    hint: "Teste a² + b² = c² com o maior como c.",
    common: [],
    steps: [
      "\\(5^2 + 12^2 = 25 + 144 = 169 = 13^2\\) ✓.",
      "As outras não fecham: \\(4^2 + 5^2 = 41 \\ne 36\\), \\(6^2 + 7^2 = 85 \\ne 64\\), \\(2^2 + 3^2 = 13 \\ne 16\\).",
    ],
  },
  {
    id: 42,
    level: 4,
    title: "Nível 4",
    question:
      "O triângulo 6, 8, 10 é o triângulo 3, 4, 5 multiplicado por qual número?",
    answer: "2",
    hint: "3 · ? = 6.",
    common: [],
    steps: [
      "\\(3 \\cdot 2 = 6\\), \\(4 \\cdot 2 = 8\\), \\(5 \\cdot 2 = 10\\).",
      "Multiplicador: 2.",
    ],
  },
  {
    id: 43,
    level: 4,
    title: "Nível 4",
    question:
      "Um triângulo retângulo tem catetos 30 e 40. Sem fazer a conta grande, qual é a hipotenusa? (Pense no 3-4-5.)",
    answer: "50",
    hint: "3-4-5 vezes 10.",
    common: [],
    steps: [
      "30 e 40 são 3 e 4 multiplicados por 10.",
      "A hipotenusa é 5 · 10 = 50.",
    ],
  },
  {
    id: 44,
    level: 4,
    title: "Nível 4",
    question:
      "Um triângulo é semelhante ao 5-12-13, com os catetos multiplicados por 3 (15 e 36). Quanto mede a hipotenusa?",
    answer: "39",
    hint: "13 · 3.",
    common: [],
    steps: [
      "O multiplicador é 3.",
      "Hipotenusa: \\(13 \\cdot 3 = 39\\).",
      "Conferência: \\(15^2 + 36^2 = 225 + 1296 = 1521 = 39^2\\) ✓.",
    ],
  },
  {
    id: 45,
    level: 4,
    title: "Nível 4",
    question: "O triângulo de lados 7, 24 e 25 é:",
    answer: "retângulo",
    options: ["retângulo", "acutângulo", "obtusângulo", "não existe"],
    hint: "Compare 7² + 24² com 25².",
    common: [],
    steps: [
      "\\(7^2 + 24^2 = 49 + 576 = 625\\) e \\(25^2 = 625\\).",
      "Deu igual: pela recíproca, é retângulo.",
    ],
  },
  {
    id: 46,
    level: 4,
    title: "Nível 4",
    question: "O triângulo de lados 4, 5 e 6 é:",
    answer: "acutângulo (todos os ângulos agudos)",
    options: [
      "acutângulo (todos os ângulos agudos)",
      "retângulo",
      "obtusângulo",
      "não existe",
    ],
    hint: "Se a² + b² > c², o triângulo é acutângulo.",
    common: [],
    steps: [
      "\\(4^2 + 5^2 = 41\\) e \\(6^2 = 36\\).",
      "Como \\(41 > 36\\), o ângulo oposto ao maior lado é agudo: acutângulo.",
    ],
  },
  {
    id: 47,
    level: 4,
    title: "Nível 4",
    question: "O triângulo de lados 4, 5 e 7 é:",
    answer: "obtusângulo",
    options: ["obtusângulo", "retângulo", "acutângulo", "equilátero"],
    hint: "Se a² + b² < c², o triângulo é obtusângulo.",
    common: [],
    steps: [
      "\\(4^2 + 5^2 = 41\\) e \\(7^2 = 49\\).",
      "Como \\(41 < 49\\), o ângulo oposto ao lado 7 é obtuso.",
    ],
  },
  {
    id: 48,
    level: 4,
    title: "Nível 4",
    question: "Qual destas medidas não pode ser de um triângulo retângulo?",
    answer: "9, 12, 16",
    options: ["9, 12, 16", "9, 12, 15", "8, 15, 17", "20, 21, 29"],
    hint: "Teste cada uma com a² + b² = c².",
    common: [],
    steps: [
      "\\(9^2 + 12^2 = 225\\) e \\(16^2 = 256\\): não é igual.",
      "As outras satisfazem o teorema.",
    ],
  },
  {
    id: 49,
    level: 4,
    title: "Nível 4",
    question:
      "Para fazer um canto reto (“esquadrar”), um pedreiro marca 60 cm em uma linha e 80 cm na outra. A distância entre as marcas, para o canto estar reto, deve ser quantos centímetros?",
    answer: "100",
    hint: "3-4-5 vezes 20.",
    common: [],
    steps: [
      "\\(60^2 + 80^2 = 3600 + 6400 = 10\\,000\\).",
      "\\(\\sqrt{10\\,000} = 100\\) (é o 3-4-5 vezes 20).",
    ],
  },
  {
    id: 50,
    level: 4,
    title: "Nível 4",
    question:
      "Um marceneiro mede 90 cm em um lado e 120 cm no outro de um móvel. Para o canto ser reto, a diagonal deve medir quantos metros?",
    answer: "1,5",
    hint: "3-4-5 vezes 30.",
    common: [],
    steps: [
      "90 e 120 são 3 e 4 vezes 30.",
      "Diagonal: \\(5 \\cdot 30 = 150\\text{ cm} = 1{,}5\\text{ m}\\).",
    ],
  },
  {
    id: 51,
    level: 4,
    title: "Nível 4",
    question: "O triângulo de lados 8, 10 e 12 é:",
    answer: "acutângulo",
    options: ["acutângulo", "retângulo", "obtusângulo", "não existe"],
    hint: "Compare 64 + 100 com 144.",
    common: [],
    steps: [
      "\\(8^2 + 10^2 = 164\\) e \\(12^2 = 144\\).",
      "\\(164 > 144\\): acutângulo.",
    ],
  },
  {
    id: 52,
    level: 4,
    title: "Nível 4",
    question:
      "Curiosidade: com m = 4 e n = 1, os números \\(m^2 - n^2\\), \\(2mn\\) e \\(m^2 + n^2\\) formam um terno pitagórico. Qual é o maior deles?",
    answer: "17",
    hint: "Calcule 4² + 1².",
    common: [],
    steps: [
      "\\(m^2 - n^2 = 16 - 1 = 15\\); \\(2mn = 8\\); \\(m^2 + n^2 = 17\\).",
      "Terno 8-15-17; o maior é 17.",
    ],
  },
  {
    id: 53,
    level: 5,
    title: "Nível 5",
    question:
      "Um quadrado tem lado 6 cm. Use \\(\\sqrt{2} \\approx 1{,}41\\) e calcule a diagonal, em cm.",
    answer: "8,46",
    hint: "d = ℓ√2.",
    common: [],
    steps: [
      "A diagonal divide o quadrado em dois triângulos retângulos: \\(d^2 = 6^2 + 6^2 = 72\\).",
      "\\(d = 6\\sqrt{2} \\approx 6 \\cdot 1{,}41 = 8{,}46\\).",
    ],
  },
  {
    id: 54,
    level: 5,
    title: "Nível 5",
    question:
      "A diagonal de um quadrado de lado 10 m, usando \\(\\sqrt{2} \\approx 1{,}41\\), mede quantos metros?",
    answer: "14,1",
    hint: "d = ℓ√2.",
    common: [],
    steps: ["\\(d = 10\\sqrt{2} \\approx 10 \\cdot 1{,}41 = 14{,}1\\)."],
  },
  {
    id: 55,
    level: 5,
    title: "Nível 5",
    question:
      "Um retângulo mede 12 cm por 5 cm. Quanto mede a diagonal, em cm?",
    answer: "13",
    hint: "A diagonal é a hipotenusa.",
    common: [],
    steps: ["\\(d^2 = 12^2 + 5^2 = 144 + 25 = 169\\).", "\\(d = 13\\)."],
  },
  {
    id: 56,
    level: 5,
    title: "Nível 5",
    question:
      "Um terreno retangular mede 40 m por 30 m. Quanto mede a diagonal, em metros?",
    answer: "50",
    hint: "3-4-5 vezes 10.",
    common: [],
    steps: ["\\(d^2 = 1600 + 900 = 2500\\).", "\\(d = 50\\)."],
  },
  {
    id: 57,
    level: 5,
    title: "Nível 5",
    question:
      "Uma TV tem 48 cm de largura e 36 cm de altura. Qual é a diagonal da tela, em cm?",
    answer: "60",
    hint: "3-4-5 vezes 12.",
    common: [],
    steps: [
      "48 e 36 são 4 e 3 vezes 12.",
      "Diagonal: \\(5 \\cdot 12 = 60\\text{ cm}\\).",
      "Conferência: \\(48^2 + 36^2 = 2304 + 1296 = 3600 = 60^2\\) ✓.",
    ],
  },
  {
    id: 58,
    level: 5,
    title: "Nível 5",
    question:
      "A altura de um triângulo equilátero de lado 6 cm é \\(a\\sqrt{3}\\). Quanto vale a?",
    answer: "3",
    hint: "h = ℓ√3/2, com ℓ = 6.",
    common: [],
    steps: [
      "Corte ao meio: base \\(3\\), hipotenusa \\(6\\).",
      "\\(h^2 = 6^2 - 3^2 = 36 - 9 = 27\\).",
      "\\(\\sqrt{27} = 3\\sqrt{3}\\).",
    ],
  },
  {
    id: 59,
    level: 5,
    title: "Nível 5",
    question:
      "Use \\(\\sqrt{3} \\approx 1{,}73\\) e calcule a altura de um triângulo equilátero de lado 10 cm, em cm.",
    answer: "8,65",
    hint: "10/2 = 5.",
    common: [],
    steps: [
      "\\(h = \\dfrac{10\\sqrt{3}}{2} = 5\\sqrt{3}\\).",
      "\\(5 \\cdot 1{,}73 = 8{,}65\\text{ cm}\\).",
    ],
  },
  {
    id: 60,
    level: 5,
    title: "Nível 5",
    question:
      "Um triângulo isósceles tem base 10 cm e lados iguais de 13 cm. Qual é a altura relativa à base, em cm?",
    answer: "12",
    hint: "Metade da base = 5.",
    common: [
      {
        value: "13",
        message:
          "Esse é o lado. A altura é cateto do triângulo retângulo formado.",
      },
    ],
    steps: [
      "A altura divide a base ao meio: cateto de 5 cm.",
      "\\(h^2 = 13^2 - 5^2 = 169 - 25 = 144\\) ⇒ \\(h = 12\\).",
    ],
  },
  {
    id: 61,
    level: 5,
    title: "Nível 5",
    question:
      "Um triângulo isósceles tem base 16 cm e lados iguais de 10 cm. Qual é a altura, em cm?",
    answer: "6",
    hint: "Metade da base = 8.",
    common: [],
    steps: [
      "Metade da base: 8 cm.",
      "\\(h^2 = 100 - 64 = 36\\) ⇒ \\(h = 6\\).",
    ],
  },
  {
    id: 62,
    level: 5,
    title: "Nível 5",
    question:
      "Um trapézio isósceles tem bases de 14 cm e 8 cm e lados oblíquos de 5 cm. Qual é a altura, em cm?",
    answer: "4",
    hint: "(14 − 8) ÷ 2 = 3.",
    common: [],
    steps: [
      "A diferença das bases é 14 − 8 = 6; cada ponta sobra 3 cm.",
      "\\(h^2 = 5^2 - 3^2 = 16\\) ⇒ \\(h = 4\\).",
    ],
  },
  {
    id: 63,
    level: 5,
    title: "Nível 5",
    question:
      "Qual é a área do trapézio da questão anterior (bases 14 e 8, altura 4), em cm²?",
    answer: "44",
    hint: "A = (B + b) · h ÷ 2.",
    common: [],
    steps: ["\\(A = \\dfrac{(14 + 8) \\cdot 4}{2} = \\dfrac{88}{2} = 44\\)."],
  },
  {
    id: 64,
    level: 5,
    title: "Nível 5",
    question:
      "Uma caixa tem 3 cm de largura, 4 cm de comprimento e 12 cm de altura. Qual é a maior distância entre dois cantos da caixa (a diagonal), em cm?",
    answer: "13",
    hint: "Dois passos: primeiro a base, depois a altura.",
    common: [],
    steps: [
      "Diagonal da base: \\(\\sqrt{3^2 + 4^2} = 5\\).",
      "Agora com a altura: \\(\\sqrt{5^2 + 12^2} = \\sqrt{169} = 13\\).",
    ],
  },
  {
    id: 65,
    level: 5,
    title: "Nível 5",
    question:
      "Um losango tem diagonais de 6 cm e 8 cm. Quanto mede cada lado, em cm?",
    answer: "5",
    hint: "Metade de cada diagonal.",
    common: [],
    steps: [
      "As diagonais se cruzam ao meio em ângulo reto: catetos de 3 e 4.",
      "\\(\\ell = \\sqrt{3^2 + 4^2} = 5\\).",
    ],
  },
  {
    id: 66,
    level: 6,
    title: "Nível 6",
    question: "Qual é a distância entre A(0, 0) e B(3, 4)?",
    answer: "5",
    hint: "Ande 3 na horizontal e 4 na vertical.",
    common: [],
    steps: [
      "Catetos: \\(|3 - 0| = 3\\) e \\(|4 - 0| = 4\\).",
      "\\(d = \\sqrt{3^2 + 4^2} = 5\\).",
    ],
    figure: {
      tag: "svg",
      attrs: {
        viewBox: "0 0 212 212",
        style: "width:212px;max-width:100%;height:auto",
        role: "img",
        "aria-label": "Plano cartesiano",
      },
      children: [
        {
          tag: "line",
          attrs: {
            x1: "22",
            y1: "190",
            x2: "22",
            y2: "22",
            stroke: "#e2e8f0",
            "stroke-width": "1",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "line",
          attrs: {
            x1: "50",
            y1: "190",
            x2: "50",
            y2: "22",
            stroke: "#e2e8f0",
            "stroke-width": "1",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "line",
          attrs: {
            x1: "78",
            y1: "190",
            x2: "78",
            y2: "22",
            stroke: "#e2e8f0",
            "stroke-width": "1",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "line",
          attrs: {
            x1: "106",
            y1: "190",
            x2: "106",
            y2: "22",
            stroke: "#e2e8f0",
            "stroke-width": "1",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "line",
          attrs: {
            x1: "134",
            y1: "190",
            x2: "134",
            y2: "22",
            stroke: "#e2e8f0",
            "stroke-width": "1",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "line",
          attrs: {
            x1: "162",
            y1: "190",
            x2: "162",
            y2: "22",
            stroke: "#e2e8f0",
            "stroke-width": "1",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "line",
          attrs: {
            x1: "190",
            y1: "190",
            x2: "190",
            y2: "22",
            stroke: "#e2e8f0",
            "stroke-width": "1",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "line",
          attrs: {
            x1: "22",
            y1: "190",
            x2: "190",
            y2: "190",
            stroke: "#e2e8f0",
            "stroke-width": "1",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "line",
          attrs: {
            x1: "22",
            y1: "162",
            x2: "190",
            y2: "162",
            stroke: "#e2e8f0",
            "stroke-width": "1",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "line",
          attrs: {
            x1: "22",
            y1: "134",
            x2: "190",
            y2: "134",
            stroke: "#e2e8f0",
            "stroke-width": "1",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "line",
          attrs: {
            x1: "22",
            y1: "106",
            x2: "190",
            y2: "106",
            stroke: "#e2e8f0",
            "stroke-width": "1",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "line",
          attrs: {
            x1: "22",
            y1: "78",
            x2: "190",
            y2: "78",
            stroke: "#e2e8f0",
            "stroke-width": "1",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "line",
          attrs: {
            x1: "22",
            y1: "50",
            x2: "190",
            y2: "50",
            stroke: "#e2e8f0",
            "stroke-width": "1",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "line",
          attrs: {
            x1: "22",
            y1: "22",
            x2: "190",
            y2: "22",
            stroke: "#e2e8f0",
            "stroke-width": "1",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "line",
          attrs: {
            x1: "22",
            y1: "162",
            x2: "198",
            y2: "162",
            stroke: "#1e293b",
            "stroke-width": "2",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "line",
          attrs: {
            x1: "50",
            y1: "190",
            x2: "50",
            y2: "14",
            stroke: "#1e293b",
            "stroke-width": "2",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "text",
          attrs: {
            x: "202",
            y: "176",
            "text-anchor": "middle",
            "font-size": "13",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["x"],
        },
        {
          tag: "text",
          attrs: {
            x: "62",
            y: "14",
            "text-anchor": "start",
            "font-size": "13",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["y"],
        },
        {
          tag: "text",
          attrs: {
            x: "22",
            y: "176",
            "text-anchor": "middle",
            "font-size": "10",
            "font-weight": "700",
            fill: "#64748b",
          },
          children: ["-1"],
        },
        {
          tag: "text",
          attrs: {
            x: "78",
            y: "176",
            "text-anchor": "middle",
            "font-size": "10",
            "font-weight": "700",
            fill: "#64748b",
          },
          children: ["1"],
        },
        {
          tag: "text",
          attrs: {
            x: "106",
            y: "176",
            "text-anchor": "middle",
            "font-size": "10",
            "font-weight": "700",
            fill: "#64748b",
          },
          children: ["2"],
        },
        {
          tag: "text",
          attrs: {
            x: "134",
            y: "176",
            "text-anchor": "middle",
            "font-size": "10",
            "font-weight": "700",
            fill: "#64748b",
          },
          children: ["3"],
        },
        {
          tag: "text",
          attrs: {
            x: "162",
            y: "176",
            "text-anchor": "middle",
            "font-size": "10",
            "font-weight": "700",
            fill: "#64748b",
          },
          children: ["4"],
        },
        {
          tag: "text",
          attrs: {
            x: "190",
            y: "176",
            "text-anchor": "middle",
            "font-size": "10",
            "font-weight": "700",
            fill: "#64748b",
          },
          children: ["5"],
        },
        {
          tag: "text",
          attrs: {
            x: "44",
            y: "194",
            "text-anchor": "end",
            "font-size": "10",
            "font-weight": "700",
            fill: "#64748b",
          },
          children: ["-1"],
        },
        {
          tag: "text",
          attrs: {
            x: "44",
            y: "138",
            "text-anchor": "end",
            "font-size": "10",
            "font-weight": "700",
            fill: "#64748b",
          },
          children: ["1"],
        },
        {
          tag: "text",
          attrs: {
            x: "44",
            y: "110",
            "text-anchor": "end",
            "font-size": "10",
            "font-weight": "700",
            fill: "#64748b",
          },
          children: ["2"],
        },
        {
          tag: "text",
          attrs: {
            x: "44",
            y: "82",
            "text-anchor": "end",
            "font-size": "10",
            "font-weight": "700",
            fill: "#64748b",
          },
          children: ["3"],
        },
        {
          tag: "text",
          attrs: {
            x: "44",
            y: "54",
            "text-anchor": "end",
            "font-size": "10",
            "font-weight": "700",
            fill: "#64748b",
          },
          children: ["4"],
        },
        {
          tag: "text",
          attrs: {
            x: "44",
            y: "26",
            "text-anchor": "end",
            "font-size": "10",
            "font-weight": "700",
            fill: "#64748b",
          },
          children: ["5"],
        },
        {
          tag: "line",
          attrs: {
            x1: "50",
            y1: "162",
            x2: "134",
            y2: "50",
            stroke: "#4f46e5",
            "stroke-width": "3",
            "stroke-linecap": "round",
          },
          children: [],
        },
        {
          tag: "circle",
          attrs: {
            cx: "50",
            cy: "162",
            r: "5",
            fill: "#ec4899",
          },
          children: [],
        },
        {
          tag: "text",
          attrs: {
            x: "60",
            y: "154",
            "text-anchor": "start",
            "font-size": "14",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["A"],
        },
        {
          tag: "circle",
          attrs: {
            cx: "134",
            cy: "50",
            r: "5",
            fill: "#ec4899",
          },
          children: [],
        },
        {
          tag: "text",
          attrs: {
            x: "144",
            y: "42",
            "text-anchor": "start",
            "font-size": "14",
            "font-weight": "700",
            fill: "#1e293b",
          },
          children: ["B"],
        },
      ],
    },
  },
  {
    id: 67,
    level: 6,
    title: "Nível 6",
    question: "Qual é a distância entre A(1, 1) e B(7, 9)?",
    answer: "10",
    hint: "6 e 8.",
    common: [],
    steps: [
      "\\(\\Delta x = 7 - 1 = 6\\) e \\(\\Delta y = 9 - 1 = 8\\).",
      "\\(d = \\sqrt{36 + 64} = 10\\).",
    ],
  },
  {
    id: 68,
    level: 6,
    title: "Nível 6",
    question: "Qual é a distância entre A(−2, 1) e B(4, 9)?",
    answer: "10",
    hint: "4 − (−2) = 6.",
    common: [
      {
        value: "14",
        message:
          "Você somou as diferenças. Eleve ao quadrado, some e tire a raiz.",
      },
    ],
    steps: [
      "\\(\\Delta x = 4 - (-2) = 6\\) e \\(\\Delta y = 9 - 1 = 8\\).",
      "\\(d = \\sqrt{36 + 64} = 10\\).",
    ],
  },
  {
    id: 69,
    level: 6,
    title: "Nível 6",
    question: "Qual é a distância entre P(−3, −1) e Q(2, 11)?",
    answer: "13",
    hint: "Cuidado com os sinais ao subtrair.",
    common: [],
    steps: [
      "\\(\\Delta x = 2 - (-3) = 5\\) e \\(\\Delta y = 11 - (-1) = 12\\).",
      "\\(d = \\sqrt{25 + 144} = 13\\).",
    ],
  },
  {
    id: 70,
    level: 6,
    title: "Nível 6",
    question: "Qual é a distância da origem O(0, 0) até P(5, 12)?",
    answer: "13",
    hint: "Catetos 5 e 12.",
    common: [],
    steps: ["\\(d = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13\\)."],
  },
  {
    id: 71,
    level: 6,
    title: "Nível 6",
    question:
      "Aproxime a distância entre A(1, 2) e B(4, 4) com duas casas decimais.",
    answer: "3,61",
    hint: "Catetos 3 e 2.",
    common: [],
    steps: [
      "\\(\\Delta x = 3\\), \\(\\Delta y = 2\\).",
      "\\(d = \\sqrt{9 + 4} = \\sqrt{13} \\approx 3{,}61\\).",
    ],
  },
  {
    id: 72,
    level: 6,
    title: "Nível 6",
    question:
      "A distância entre P(−3, −1) e Q(2, −6) é \\(a\\sqrt{2}\\). Quanto vale a?",
    answer: "5",
    hint: "(−5)² = 25, não −25.",
    common: [],
    steps: [
      "\\(\\Delta x = 2 - (-3) = 5\\) e \\(\\Delta y = -6 - (-1) = -5\\).",
      "\\(d^2 = 25 + 25 = 50\\).",
      "\\(\\sqrt{50} = 5\\sqrt{2}\\).",
    ],
  },
  {
    id: 73,
    level: 6,
    title: "Nível 6",
    question:
      "Qual é o perímetro do triângulo de vértices A(0, 0), B(3, 0) e C(3, 4)?",
    answer: "12",
    hint: "Dois lados são retos; o terceiro precisa do teorema.",
    common: [],
    steps: [
      "\\(AB = 3\\) (horizontal), \\(BC = 4\\) (vertical).",
      "\\(AC = \\sqrt{9 + 16} = 5\\).",
      "\\(3 + 4 + 5 = 12\\).",
    ],
  },
  {
    id: 74,
    level: 6,
    title: "Nível 6",
    question:
      "O triângulo de vértices A(0, 0), B(2, 1) e C(−1, 2) é retângulo?",
    answer: "Sim: AB² + AC² = BC²",
    options: [
      "Sim: AB² + AC² = BC²",
      "Não: os lados não satisfazem o teorema",
      "Sim: todo triângulo no plano é retângulo",
      "Não dá para saber",
    ],
    hint: "Calcule o quadrado de cada lado.",
    common: [],
    steps: [
      "\\(AB^2 = 4 + 1 = 5\\), \\(AC^2 = 1 + 4 = 5\\), \\(BC^2 = 3^2 + 1^2 = 10\\).",
      "\\(5 + 5 = 10\\): vale o teorema, o ângulo reto está em A.",
    ],
  },
  {
    id: 75,
    level: 6,
    title: "Nível 6",
    question: "Qual é a distância entre A(−4, 3) e a origem?",
    answer: "5",
    hint: "(−4)² = 16.",
    common: [],
    steps: ["\\(d = \\sqrt{(-4)^2 + 3^2} = \\sqrt{25} = 5\\)."],
  },
  {
    id: 76,
    level: 6,
    title: "Nível 6",
    question:
      "No mapa, uma casa em (2, 1) e uma escola em (8, 9). Cada unidade vale 100 m. Qual é a distância em linha reta, em metros?",
    answer: "1000",
    hint: "Primeiro em unidades; depois converta.",
    common: [],
    steps: [
      "\\(\\Delta x = 6\\), \\(\\Delta y = 8\\) ⇒ \\(d = 10\\) unidades.",
      "\\(10 \\cdot 100 = 1000\\text{ m}\\).",
    ],
  },
  {
    id: 77,
    level: 6,
    title: "Nível 6",
    question: "Qual é a distância entre (−2, −2) e (6, 4)?",
    answer: "10",
    hint: "6 − (−2) = 8.",
    common: [],
    steps: [
      "\\(\\Delta x = 8\\), \\(\\Delta y = 6\\).",
      "\\(d = \\sqrt{64 + 36} = 10\\).",
    ],
  },
  {
    id: 78,
    level: 7,
    title: "Nível 7",
    question:
      "Uma escada de 10 m está apoiada em uma parede com o pé a 6 m dela. A que altura da parede ela toca, em metros?",
    answer: "8",
    hint: "6-8-10.",
    common: [],
    steps: ["Escada = hipotenusa.", "\\(h^2 = 100 - 36 = 64\\) ⇒ \\(h = 8\\)."],
  },
  {
    id: 79,
    level: 7,
    title: "Nível 7",
    question:
      "Uma escada de 2,5 m toca a parede a 2 m de altura. A que distância da parede está o pé da escada, em metros?",
    answer: "1,5",
    hint: "Escada = hipotenusa.",
    common: [],
    steps: [
      "\\(d^2 = 2{,}5^2 - 2^2 = 6{,}25 - 4 = 2{,}25\\).",
      "\\(d = 1{,}5\\).",
    ],
  },
  {
    id: 80,
    level: 7,
    title: "Nível 7",
    question:
      "Uma rampa de 10 m de comprimento ocupa 9,6 m no chão (distância horizontal). Qual é a altura que ela atinge, em metros?",
    answer: "2,8",
    hint: "9,6² = 92,16.",
    common: [],
    steps: [
      "\\(h^2 = 100 - 92{,}16 = 7{,}84\\).",
      "\\(h = \\sqrt{7{,}84} = 2{,}8\\text{ m}\\) (2,8 · 2,8 = 7,84).",
    ],
  },
  {
    id: 81,
    level: 7,
    title: "Nível 7",
    question:
      "O fio de uma pipa está esticado com 25 m e o menino está a 20 m do ponto do chão logo abaixo da pipa. Que altura a pipa tem, em metros?",
    answer: "15",
    hint: "3-4-5 vezes 5.",
    common: [],
    steps: [
      "Fio = hipotenusa (25), distância = cateto (20).",
      "\\(h^2 = 625 - 400 = 225\\) ⇒ \\(h = 15\\).",
    ],
  },
  {
    id: 82,
    level: 7,
    title: "Nível 7",
    question:
      "Um poste de 6 m tem um cabo preso no topo e no chão, a 8 m da base. Quantos metros mede o cabo?",
    answer: "10",
    hint: "6-8-10.",
    common: [],
    steps: ["\\(c^2 = 36 + 64 = 100\\) ⇒ \\(c = 10\\text{ m}\\)."],
  },
  {
    id: 83,
    level: 7,
    title: "Nível 7",
    question:
      "Para ir de A até C, uma pessoa anda 50 m para leste e 120 m para norte. Cortando em linha reta, quantos metros ela economiza?",
    answer: "40",
    hint: "5-12-13 vezes 10.",
    common: [
      {
        value: "130",
        message: "130 é a diagonal. Falta compará-la com 170.",
      },
    ],
    steps: [
      "Pelo contorno: \\(50 + 120 = 170\\text{ m}\\).",
      "Em linha reta: \\(d^2 = 2500 + 14\\,400 = 16\\,900\\) ⇒ \\(d = 130\\text{ m}\\).",
      "Economia: \\(170 - 130 = 40\\text{ m}\\).",
    ],
  },
  {
    id: 84,
    level: 7,
    title: "Nível 7",
    question:
      "Um telhado tem 12 m de largura e o ponto mais alto fica 2,5 m acima do centro. Quanto mede cada água (a parte inclinada) do telhado, em metros?",
    answer: "6,5",
    hint: "6,5 · 6,5 = 42,25.",
    common: [],
    steps: [
      "Metade da largura: 6 m (cateto). Altura: 2,5 m (cateto).",
      "\\(c^2 = 36 + 6{,}25 = 42{,}25\\) ⇒ \\(c = 6{,}5\\text{ m}\\).",
    ],
  },
  {
    id: 85,
    level: 7,
    title: "Nível 7",
    question:
      "Um escorregador sobe 1,5 m de altura e seu pé está a 2 m de distância horizontal da base. Quanto mede o escorregador, em metros?",
    answer: "2,5",
    hint: "1,5² = 2,25.",
    common: [],
    steps: ["\\(c^2 = 2{,}25 + 4 = 6{,}25\\) ⇒ \\(c = 2{,}5\\text{ m}\\)."],
  },
  {
    id: 86,
    level: 7,
    title: "Nível 7",
    question:
      "Uma escada de 2,5 m tem o pé a 70 cm da parede. A que altura da parede ela toca, em metros? (Converta antes: 70 cm = 0,7 m.)",
    answer: "2,4",
    hint: "Primeiro as unidades.",
    common: [
      {
        value: "1,8",
        message: "Confira as unidades: 70 cm = 0,7 m, não 0,07 nem 7.",
      },
    ],
    steps: [
      "\\(h^2 = 2{,}5^2 - 0{,}7^2 = 6{,}25 - 0{,}49 = 5{,}76\\).",
      "\\(h = 2{,}4\\text{ m}\\) (2,4 · 2,4 = 5,76).",
    ],
  },
  {
    id: 87,
    level: 7,
    title: "Nível 7",
    question:
      "Uma tela de tablet mede 12 cm por 16 cm. Quanto mede a diagonal, em cm?",
    answer: "20",
    hint: "12 = 3 · 4 e 16 = 4 · 4.",
    common: [],
    steps: ["3-4-5 vezes 4.", "\\(d = 5 \\cdot 4 = 20\\text{ cm}\\)."],
  },
  {
    id: 88,
    level: 7,
    title: "Nível 7",
    question:
      "Dois carros saem do mesmo ponto: um anda 30 km para o leste e outro 40 km para o norte. Qual é a distância entre eles, em km?",
    answer: "50",
    hint: "3-4-5 vezes 10.",
    common: [],
    steps: [
      "Leste e norte formam ângulo reto.",
      "\\(d = \\sqrt{900 + 1600} = 50\\text{ km}\\).",
    ],
  },
  {
    id: 89,
    level: 7,
    title: "Nível 7",
    question:
      "Um campo retangular mede 90 m por 120 m. Quantos metros tem a diagonal?",
    answer: "150",
    hint: "3-4-5 vezes 30.",
    common: [],
    steps: [
      "3-4-5 vezes 30.",
      "\\(90^2 + 120^2 = 8100 + 14\\,400 = 22\\,500\\) ⇒ \\(d = 150\\).",
    ],
  },
  {
    id: 90,
    level: 7,
    title: "Nível 7",
    question:
      "Uma árvore quebrou a 3 m do chão e o topo tocou o chão a 4 m do pé. Qual era a altura total da árvore, em metros?",
    answer: "8",
    hint: "Altura = parte em pé + parte caída.",
    common: [
      {
        value: "5",
        message:
          "Esse é o pedaço que caiu. Some também a parte que ficou em pé (3 m).",
      },
    ],
    steps: [
      "Parte que caiu = hipotenusa: \\(3^2 + 4^2 = 25\\) ⇒ 5 m.",
      "Altura original: \\(3 + 5 = 8\\text{ m}\\).",
    ],
  },
  {
    id: 91,
    level: 8,
    title: "Nível 8",
    question:
      "Os catetos de um triângulo retângulo medem x e x + 7, e a hipotenusa mede 13. Quanto vale x? (Teste valores inteiros.)",
    answer: "5",
    hint: "Teste x = 3, 4, 5…",
    common: [],
    steps: [
      "Equação: \\(x^2 + (x + 7)^2 = 13^2 = 169\\).",
      "Teste \\(x = 5\\): \\(25 + 144 = 169\\) ✓.",
      "Catetos 5 e 12, hipotenusa 13.",
    ],
  },
  {
    id: 92,
    level: 8,
    title: "Nível 8",
    question:
      "Uma escada de 13 m toca a parede a 12 m de altura. O topo desce 7 m. Quantos metros o pé da escada se afasta (em relação à posição inicial)?",
    answer: "7",
    hint: "Calcule a distância do pé nas duas situações.",
    common: [],
    steps: [
      "Antes: pé a \\(\\sqrt{169 - 144} = 5\\text{ m}\\).",
      "Depois: altura \\(12 - 7 = 5\\) ⇒ pé a \\(\\sqrt{169 - 25} = 12\\text{ m}\\).",
      "Afastou-se: \\(12 - 5 = 7\\text{ m}\\).",
    ],
  },
  {
    id: 93,
    level: 8,
    title: "Nível 8",
    question:
      "Um triângulo retângulo tem hipotenusa 13 cm e um cateto 5 cm. Qual é a sua área, em cm²?",
    answer: "30",
    hint: "Ache o cateto que falta primeiro.",
    common: [],
    steps: [
      "Outro cateto: \\(\\sqrt{169 - 25} = 12\\).",
      "Área: \\(\\dfrac{5 \\cdot 12}{2} = 30\\).",
    ],
  },
  {
    id: 94,
    level: 8,
    title: "Nível 8",
    question:
      "Um triângulo isósceles tem lados de 13 cm, 13 cm e base 10 cm. Qual é a sua área, em cm²?",
    answer: "60",
    hint: "Ache a altura com o teorema.",
    common: [],
    steps: [
      "Altura: \\(\\sqrt{13^2 - 5^2} = 12\\).",
      "Área: \\(\\dfrac{10 \\cdot 12}{2} = 60\\).",
    ],
  },
  {
    id: 95,
    level: 8,
    title: "Nível 8",
    question:
      "Em um desenho em espiral, o primeiro triângulo retângulo tem catetos 3 e 4. Sua hipotenusa vira cateto do segundo triângulo, cujo outro cateto mede 12. Quanto mede a hipotenusa do segundo triângulo?",
    answer: "13",
    hint: "Resolva em dois passos.",
    common: [],
    steps: [
      "1º: \\(\\sqrt{9 + 16} = 5\\).",
      "2º: catetos 5 e 12: \\(\\sqrt{25 + 144} = 13\\).",
    ],
  },
  {
    id: 96,
    level: 8,
    title: "Nível 8",
    question:
      "Um triângulo retângulo isósceles tem hipotenusa 10 cm. Use \\(\\sqrt{2} \\approx 1{,}41\\) e calcule o valor aproximado de cada cateto, em cm.",
    answer: "7,05",
    hint: "2x² = 100.",
    common: [],
    steps: [
      "Catetos iguais \\(x\\): \\(x^2 + x^2 = 100\\) ⇒ \\(x^2 = 50\\).",
      "\\(x = \\sqrt{50} = 5\\sqrt{2} \\approx 5 \\cdot 1{,}41 = 7{,}05\\).",
    ],
  },
  {
    id: 97,
    level: 8,
    title: "Nível 8",
    question:
      "Um triângulo retângulo tem um cateto de 9 cm e hipotenusa de 15 cm. Qual é o seu perímetro, em cm?",
    answer: "36",
    hint: "Primeiro o cateto que falta.",
    common: [],
    steps: [
      "Outro cateto: \\(\\sqrt{225 - 81} = 12\\).",
      "Perímetro: \\(9 + 12 + 15 = 36\\).",
    ],
  },
  {
    id: 98,
    level: 8,
    title: "Nível 8",
    question:
      "A diagonal de um quadrado mede \\(8\\sqrt{2}\\text{ cm}\\). Quanto mede o lado, em cm?",
    answer: "8",
    hint: "d = ℓ√2.",
    common: [],
    steps: [
      "Diagonal = lado · √2.",
      "\\(\\ell \\cdot \\sqrt{2} = 8\\sqrt{2}\\) ⇒ \\(\\ell = 8\\).",
    ],
  },
  {
    id: 99,
    level: 8,
    title: "Nível 8",
    question:
      "A cidade B fica 30 km a leste de A, e C fica 40 km ao norte de B. Um ônibus vai de A a C passando por B; outro vai direto. Quantos km o direto encurta?",
    answer: "20",
    hint: "3-4-5 vezes 10.",
    common: [],
    steps: [
      "Passando por B: \\(30 + 40 = 70\\).",
      "Direto: \\(\\sqrt{900 + 1600} = 50\\).",
      "\\(70 - 50 = 20\\text{ km}\\).",
    ],
  },
  {
    id: 100,
    level: 8,
    title: "Nível 8",
    question:
      "Um triângulo retângulo tem lados inteiros e perímetro 24 cm. Quanto mede a hipotenusa, em cm? (Pense nos ternos conhecidos.)",
    answer: "10",
    hint: "Qual múltiplo do 3-4-5 dá perímetro 24?",
    common: [],
    steps: [
      "Teste ternos: 3-4-5 tem perímetro 12; o dobro, 6-8-10, tem perímetro 24.",
      "Hipotenusa: 10 cm.",
    ],
  },
] as const;

export const pitagorasQuickChecks = {
  "0": {
    q: "Quantos ângulos retos tem um triângulo retângulo?",
    a: "1",
  },
  "1": {
    q: "Um triângulo retângulo tem lados de \\(5\\), \\(12\\) e \\(13\\) cm. Quanto mede a hipotenusa, em cm?",
    a: "13",
  },
  "2": {
    q: "Em um triângulo retângulo os catetos medem \\(6\\) e \\(8\\). Quanto vale \\(a^2 + b^2\\)?",
    a: "100",
  },
  "3": {
    q: "O quadrado sobre a hipotenusa tem área \\(169\\text{ cm}^2\\) e o quadrado sobre um dos catetos tem área \\(25\\text{ cm}^2\\). Qual é a área do quadrado sobre o outro cateto, em \\(\\text{cm}^2\\)?",
    a: "144",
  },
  "4": {
    q: "Os catetos de um triângulo retângulo medem \\(8\\) cm e \\(15\\) cm. Quanto mede a hipotenusa, em cm?",
    a: "17",
  },
  "5": {
    q: "Uma tela retangular tem \\(24\\) cm de largura e \\(7\\) cm de altura. Quanto mede a diagonal, em cm?",
    a: "25",
  },
  "6": {
    q: "A hipotenusa de um triângulo retângulo mede \\(17\\) cm e um cateto mede \\(15\\) cm. Quanto mede o outro cateto, em cm?",
    a: "8",
  },
  "7": {
    q: "Um cabo de \\(25\\) m liga o topo de um poste ao chão, a \\(7\\) m da base do poste. Qual é a altura do poste, em metros?",
    a: "24",
  },
  "8": {
    q: "Para que \\((k,\\ 24,\\ 25)\\) seja um terno pitagórico (com \\(25\\) a hipotenusa), qual deve ser o valor de \\(k\\)?",
    a: "7",
  },
  "9": {
    q: "Entre os trios \\((5,12,13)\\), \\((4,5,6)\\), \\((9,12,15)\\) e \\((7,8,10)\\), quantos formam triângulos retângulos?",
    a: "2",
  },
  "10": {
    q: "Um retângulo mede \\(9\\text{ cm}\\) por \\(12\\text{ cm}\\). Quanto mede a diagonal, em cm?",
    a: "15",
  },
  "11": {
    q: "Um triângulo equilátero tem lado \\(10\\text{ cm}\\). Use \\(\\sqrt3 \\approx 1{,}73\\) e calcule a altura \\(h = \\dfrac{\\ell\\sqrt3}{2}\\), em cm.",
    a: "8,65",
  },
  "12": {
    q: "Qual é a distância entre \\(A(-1, 2)\\) e \\(B(4, 14)\\)?",
    a: "13",
  },
  "13": {
    q: "Qual é a distância entre \\(P(3, -2)\\) e \\(Q(-1, 1)\\)?",
    a: "5",
  },
  "14": {
    q: "Uma escada de \\(10\\text{ m}\\) está apoiada na parede com o pé a \\(6\\text{ m}\\) dela. A que altura da parede ela toca, em metros?",
    a: "8",
  },
  "15": {
    q: "Um barco anda \\(15\\text{ km}\\) a leste e depois \\(20\\text{ km}\\) ao norte. Qual a distância, em km, em linha reta até o ponto de partida?",
    a: "25",
  },
  "16": {
    q: "Um triângulo retângulo tem catetos \\(x\\) e \\(x+1\\) e hipotenusa \\(5\\). Quanto vale \\(x\\)?",
    a: "3",
  },
  "17": {
    q: "Um triângulo isósceles tem base \\(16\\text{ cm}\\) e lados iguais de \\(17\\text{ cm}\\). Qual é a área, em cm²?",
    a: "120",
  },
} as const;
