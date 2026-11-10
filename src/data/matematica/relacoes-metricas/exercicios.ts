export const relacoesMetricasLevels = [
  {
    "level": 1,
    "name": "Razão e figuras semelhantes",
    "description": "Razão de semelhança, ampliação e redução, perímetro × k e área × k², escalas.",
    "reminder": "Semelhantes: ângulos iguais e lados proporcionais. Perímetro × k, área × k².",
    "lesson": "l1"
  },
  {
    "level": 2,
    "name": "Critérios de semelhança",
    "description": "AA, LAL e LLL: reconhecer quando dois triângulos são semelhantes.",
    "reminder": "AA: dois ângulos iguais. LAL: dois lados proporcionais e o ângulo entre eles igual. LLL: três lados proporcionais.",
    "lesson": "l2"
  },
  {
    "level": 3,
    "name": "Calculando lados em triângulos semelhantes",
    "description": "Montar a proporção com lados correspondentes e resolver por multiplicação cruzada.",
    "reminder": "Lados correspondentes ficam opostos a ângulos iguais. Proporção: a/b = c/x ⇒ x = b·c/a.",
    "lesson": "l2"
  },
  {
    "level": 4,
    "name": "Teorema de Tales",
    "description": "Paralelas cortando transversais e paralela a um lado do triângulo.",
    "reminder": "Paralelas determinam segmentos proporcionais: AB/BC = DE/EF e AD/AB = AE/AC = DE/BC.",
    "lesson": "l3"
  },
  {
    "level": 5,
    "name": "Aplicações: sombras e escalas",
    "description": "Alturas pela sombra, mapas, plantas, maquetes e áreas em escala.",
    "reminder": "Mesma hora: triângulos de sombra são semelhantes. Escala 1:N: real = desenho × N (converta as unidades!).",
    "lesson": "l4"
  },
  {
    "level": 6,
    "name": "Elementos e relações métricas",
    "description": "Altura, projeções, os três triângulos semelhantes e as quatro relações.",
    "reminder": "c² = a·m, b² = a·n, h² = m·n, a·h = b·c, a = m + n.",
    "lesson": "l5"
  },
  {
    "level": 7,
    "name": "Calculando com as relações métricas",
    "description": "Achar h, m, n, b e c a partir de dois dados.",
    "reminder": "Escolha a relação que tem as medidas que você conhece e a que procura.",
    "lesson": "l6"
  },
  {
    "level": 8,
    "name": "Problemas combinados e desafios",
    "description": "Pitágoras + relações métricas, média geométrica, circunferência e a ponte para a trigonometria.",
    "reminder": "Rotule a, b, c, h, m, n; use uma relação de cada vez; confira com Pitágoras.",
    "lesson": "l7"
  }
] as const;

export const relacoesMetricasExercises = [
  {
    "id": 1,
    "level": 1,
    "title": "Nível 1",
    "question": "Dois polígonos são semelhantes quando:",
    "answer": "têm ângulos correspondentes iguais e lados correspondentes proporcionais",
    "hint": "Pense em uma foto ampliada.",
    "steps": [
      "Semelhança é “mesma forma, tamanho possivelmente diferente”.",
      "Exige as duas condições: ângulos iguais e lados proporcionais."
    ],
    "common": [],
    "options": [
      "têm ângulos correspondentes iguais e lados correspondentes proporcionais",
      "têm o mesmo perímetro",
      "têm a mesma área",
      "têm o mesmo número de lados apenas"
    ]
  },
  {
    "id": 2,
    "level": 1,
    "title": "Nível 1",
    "question": "Uma foto de 10 cm por 15 cm é ampliada e o lado menor passa a medir 30 cm. Quanto mede o lado maior, em cm?",
    "answer": "45",
    "hint": "Descubra quantas vezes o lado menor foi multiplicado.",
    "steps": [
      "Razão de semelhança: \\(k = \\dfrac{30}{10} = 3\\).",
      "Lado maior: \\(15 \\cdot 3 = 45\\text{ cm}\\)."
    ],
    "common": [
      {
        "value": "35/1",
        "message": "Você somou 20 (30 − 10). Na ampliação, os lados são multiplicados pela razão."
      }
    ]
  },
  {
    "id": 3,
    "level": 1,
    "title": "Nível 1",
    "question": "Os retângulos de 4 × 6 e 6 × 9 são semelhantes. Qual é a razão de semelhança do maior para o menor? (Pode ser decimal ou fração.)",
    "answer": "3/2",
    "hint": "Divida lados correspondentes.",
    "steps": [
      "\\(\\dfrac{6}{4} = 1{,}5\\) e \\(\\dfrac{9}{6} = 1{,}5\\).",
      "As razões são iguais: \\(k = 1{,}5 = \\dfrac32\\)."
    ],
    "common": [],
    "answerText": "\\(\\dfrac{3}{2}\\)"
  },
  {
    "id": 4,
    "level": 1,
    "title": "Nível 1",
    "question": "Os retângulos de 4 × 6 e 6 × 8 são semelhantes?",
    "answer": "Não: 6/4 ≠ 8/6",
    "hint": "Calcule as duas razões.",
    "steps": [
      "\\(\\dfrac{6}{4} = 1{,}5\\) e \\(\\dfrac{8}{6} \\approx 1{,}33\\): razões diferentes.",
      "Os ângulos são iguais (todos retos), mas os lados não são proporcionais: não são semelhantes."
    ],
    "common": [],
    "answerText": "\\(\\dfrac{Não: 6}{4 ≠ 8}\\)",
    "options": [
      "Não: 6/4 ≠ 8/6",
      "Sim: todo retângulo é semelhante a outro",
      "Sim: os ângulos são todos retos",
      "Não dá para saber"
    ]
  },
  {
    "id": 5,
    "level": 1,
    "title": "Nível 1",
    "question": "Uma figura é ampliada com razão de semelhança 4. Um lado que media 7 cm passa a medir quantos centímetros?",
    "answer": "28",
    "hint": "Multiplique pela razão.",
    "steps": [
      "\\(7 \\cdot 4 = 28\\)."
    ],
    "common": []
  },
  {
    "id": 6,
    "level": 1,
    "title": "Nível 1",
    "question": "Um triângulo tem perímetro de 12 cm. Um triângulo semelhante a ele, com razão de semelhança 3, tem perímetro de quantos cm?",
    "answer": "36",
    "hint": "Perímetro × k.",
    "steps": [
      "O perímetro é multiplicado por \\(k\\): \\(12 \\cdot 3 = 36\\text{ cm}\\)."
    ],
    "common": [
      {
        "value": "108/1",
        "message": "O perímetro é multiplicado por k, não por k²."
      }
    ]
  },
  {
    "id": 7,
    "level": 1,
    "title": "Nível 1",
    "question": "Dois quadrados têm lados de 2 cm e 6 cm. Quantas vezes a área do maior é maior que a do menor?",
    "answer": "9",
    "hint": "Áreas: lado ao quadrado.",
    "steps": [
      "\\(k = \\dfrac{6}{2} = 3\\).",
      "Razão das áreas: \\(k^2 = 9\\). (Conferência: \\(36 \\div 4 = 9\\).)"
    ],
    "common": [
      {
        "value": "3/1",
        "message": "Os lados triplicam, mas a área é multiplicada por k² = 9."
      }
    ]
  },
  {
    "id": 8,
    "level": 1,
    "title": "Nível 1",
    "question": "Dois triângulos são semelhantes com razão 3. O menor tem área de 8 cm². Qual é a área do maior, em cm²?",
    "answer": "72",
    "hint": "Área × k².",
    "steps": [
      "\\(k^2 = 9\\).",
      "\\(8 \\cdot 9 = 72\\text{ cm}^2\\)."
    ],
    "common": [
      {
        "value": "24/1",
        "message": "A área é multiplicada por k², não por k."
      }
    ]
  },
  {
    "id": 9,
    "level": 1,
    "title": "Nível 1",
    "question": "Em um mapa com escala 1 : 50 000, uma estrada mede 4 cm. Quantos quilômetros ela tem na realidade?",
    "answer": "2",
    "hint": "Converta cm → m → km.",
    "steps": [
      "1 cm no mapa = 50 000 cm reais.",
      "\\(4 \\cdot 50\\,000 = 200\\,000\\text{ cm}\\).",
      "\\(200\\,000\\text{ cm} = 2\\,000\\text{ m} = 2\\text{ km}\\)."
    ],
    "common": []
  },
  {
    "id": 10,
    "level": 1,
    "title": "Nível 1",
    "question": "Na planta de uma casa (escala 1 : 200), uma parede mede 7 cm. Quantos metros ela tem na realidade?",
    "answer": "14",
    "hint": "100 cm = 1 m.",
    "steps": [
      "\\(7 \\cdot 200 = 1\\,400\\text{ cm} = 14\\text{ m}\\)."
    ],
    "common": []
  },
  {
    "id": 11,
    "level": 1,
    "title": "Nível 1",
    "question": "Uma foto de 20 cm por 30 cm (largura × altura) é reduzida para largura de 12 cm, mantendo a forma. Quanto mede a altura, em cm?",
    "answer": "18",
    "hint": "k < 1 é redução.",
    "steps": [
      "Razão: \\(k = \\dfrac{12}{20} = 0{,}6\\).",
      "\\(30 \\cdot 0{,}6 = 18\\text{ cm}\\)."
    ],
    "common": []
  },
  {
    "id": 12,
    "level": 1,
    "title": "Nível 1",
    "question": "Uma pizza tem 20 cm de diâmetro e outra, com a mesma forma, tem 40 cm. A área da maior é quantas vezes a da menor?",
    "answer": "4",
    "hint": "Círculos são semelhantes entre si.",
    "steps": [
      "\\(k = \\dfrac{40}{20} = 2\\).",
      "Razão das áreas: \\(k^2 = 4\\). (Por isso uma pizza grande rende bem mais!)"
    ],
    "common": [
      {
        "value": "2/1",
        "message": "O diâmetro dobra, mas a área é multiplicada por k² = 4."
      }
    ]
  },
  {
    "id": 13,
    "level": 1,
    "title": "Nível 1",
    "question": "Se os lados de um quadrado dobram, a área:",
    "answer": "quadruplica",
    "hint": "Área é lado · lado.",
    "steps": [
      "\\(k = 2\\) ⇒ área × \\(k^2 = 4\\).",
      "Exemplo: lado 1 → área 1; lado 2 → área 4."
    ],
    "common": [],
    "options": [
      "quadruplica",
      "dobra",
      "triplica",
      "fica igual"
    ]
  },
  {
    "id": 14,
    "level": 2,
    "title": "Nível 2",
    "question": "Dois ângulos de um triângulo medem 40° e 75°. Quanto mede o terceiro ângulo, em graus?",
    "answer": "65",
    "hint": "180 − (40 + 75).",
    "steps": [
      "A soma dos ângulos de um triângulo é 180°.",
      "\\(180 - 40 - 75 = 65\\)."
    ],
    "common": []
  },
  {
    "id": 15,
    "level": 2,
    "title": "Nível 2",
    "question": "Um triângulo tem ângulos de 50° e 60°. Outro tem ângulos de 60° e 70°. Eles são semelhantes?",
    "answer": "Sim (critério AA)",
    "hint": "Ache o terceiro ângulo de cada um.",
    "steps": [
      "Terceiros ângulos: \\(180 - 50 - 60 = 70\\) e \\(180 - 60 - 70 = 50\\).",
      "Os dois têm ângulos 50°, 60° e 70°: semelhantes por AA."
    ],
    "common": [],
    "options": [
      "Sim (critério AA)",
      "Não",
      "Só se tiverem o mesmo perímetro",
      "Não dá para saber"
    ]
  },
  {
    "id": 16,
    "level": 2,
    "title": "Nível 2",
    "question": "Os triângulos de lados 3, 4, 5 e 6, 8, 10 são semelhantes?",
    "answer": "Sim (LLL, razão 2)",
    "hint": "Divida lado maior por lado maior, etc.",
    "steps": [
      "\\(\\dfrac{6}{3} = \\dfrac{8}{4} = \\dfrac{10}{5} = 2\\).",
      "Três razões iguais: LLL, com \\(k = 2\\). (Não são congruentes: os tamanhos são diferentes.)"
    ],
    "common": [],
    "options": [
      "Sim (LLL, razão 2)",
      "Não",
      "Sim, mas só por AA",
      "São congruentes"
    ]
  },
  {
    "id": 17,
    "level": 2,
    "title": "Nível 2",
    "question": "Os triângulos de lados 2, 3, 4 e 4, 6, 9 são semelhantes?",
    "answer": "Não",
    "hint": "Compare lado menor com menor, médio com médio, maior com maior.",
    "steps": [
      "\\(\\dfrac42 = 2\\), \\(\\dfrac63 = 2\\), mas \\(\\dfrac94 = 2{,}25\\).",
      "As razões não são todas iguais: não são semelhantes."
    ],
    "common": [],
    "options": [
      "Não",
      "Sim (LLL)",
      "Sim (AA)",
      "Sim (LAL)"
    ]
  },
  {
    "id": 18,
    "level": 2,
    "title": "Nível 2",
    "question": "Um triângulo tem lados 4 e 6 com ângulo de 50° entre eles. Outro tem lados 6 e 9 com ângulo de 50° entre eles. Eles são semelhantes?",
    "answer": "Sim (LAL)",
    "hint": "LAL: dois lados proporcionais e o ângulo entre eles igual.",
    "steps": [
      "\\(\\dfrac64 = 1{,}5\\) e \\(\\dfrac96 = 1{,}5\\): lados proporcionais.",
      "O ângulo entre eles é igual (50°): critério LAL."
    ],
    "common": [],
    "options": [
      "Sim (LAL)",
      "Não",
      "Sim (LLL)",
      "Só se forem retângulos"
    ]
  },
  {
    "id": 19,
    "level": 2,
    "title": "Nível 2",
    "question": "Os triângulos de lados 6, 9, 12 e 4, 6, 8 são semelhantes. Qual é a razão de semelhança do maior para o menor? (Fração ou decimal.)",
    "answer": "3/2",
    "hint": "Lado menor com menor.",
    "steps": [
      "\\(\\dfrac{6}{4} = \\dfrac{9}{6} = \\dfrac{12}{8} = 1{,}5\\)."
    ],
    "common": [],
    "answerText": "\\(\\dfrac{3}{2}\\)"
  },
  {
    "id": 20,
    "level": 2,
    "title": "Nível 2",
    "question": "Em triângulos semelhantes, lados correspondentes são os que:",
    "answer": "ficam opostos a ângulos iguais",
    "hint": "Pense nos ângulos.",
    "steps": [
      "Lado correspondente = lado oposto ao ângulo correspondente.",
      "O menor lado corresponde ao menor, o maior ao maior."
    ],
    "common": [],
    "options": [
      "ficam opostos a ângulos iguais",
      "ficam na parte de baixo",
      "têm a mesma medida",
      "têm o mesmo nome"
    ]
  },
  {
    "id": 21,
    "level": 2,
    "title": "Nível 2",
    "question": "Um triângulo retângulo tem um ângulo agudo de 35°. Quanto mede o outro ângulo agudo, em graus?",
    "answer": "55",
    "hint": "Os dois agudos somam 90°.",
    "steps": [
      "Ângulo reto: 90°. Restam \\(180 - 90 - 35 = 55\\)°.",
      "Qualquer triângulo retângulo com um ângulo de 35° é semelhante a este (AA)."
    ],
    "common": []
  },
  {
    "id": 22,
    "level": 2,
    "title": "Nível 2",
    "question": "Todos os triângulos equiláteros são semelhantes entre si?",
    "answer": "Sim: todos têm ângulos de 60°",
    "hint": "Quanto vale cada ângulo?",
    "steps": [
      "Todo equilátero tem três ângulos de 60°.",
      "Pelo critério AA, dois equiláteros quaisquer são semelhantes (a razão é a razão dos lados)."
    ],
    "common": [],
    "options": [
      "Sim: todos têm ângulos de 60°",
      "Não: depende do lado",
      "Só os de lado 1",
      "Só se forem congruentes"
    ]
  },
  {
    "id": 23,
    "level": 2,
    "title": "Nível 2",
    "question": "Dois triângulos semelhantes com razão de semelhança 1 são:",
    "answer": "congruentes",
    "hint": "k = 1 quer dizer “mesmo tamanho”.",
    "steps": [
      "Com \\(k = 1\\), todos os lados e ângulos são iguais: os triângulos são congruentes.",
      "Congruência é o caso particular de semelhança com \\(k = 1\\)."
    ],
    "common": [],
    "options": [
      "congruentes",
      "impossíveis",
      "equiláteros",
      "obtusângulos"
    ]
  },
  {
    "id": 24,
    "level": 2,
    "title": "Nível 2",
    "question": "O triângulo de lados 5, 12 e 13 é semelhante a outro de lados 10, 24 e 26. Qual é a razão de semelhança?",
    "answer": "2",
    "hint": "10 ÷ 5.",
    "steps": [
      "\\(\\dfrac{10}{5} = \\dfrac{24}{12} = \\dfrac{26}{13} = 2\\)."
    ],
    "common": []
  },
  {
    "id": 25,
    "level": 2,
    "title": "Nível 2",
    "question": "Os triângulos de lados 5, 7, 9 e 10, 14, 19 são semelhantes?",
    "answer": "Não",
    "hint": "Confira as três razões.",
    "steps": [
      "\\(\\dfrac{10}{5} = 2\\), \\(\\dfrac{14}{7} = 2\\), mas \\(\\dfrac{19}{9} \\approx 2{,}11\\).",
      "Quase! Mas as razões precisam ser exatamente iguais."
    ],
    "common": [],
    "options": [
      "Não",
      "Sim (LLL)",
      "Sim (LAL)",
      "Sim (AA)"
    ]
  },
  {
    "id": 26,
    "level": 3,
    "title": "Nível 3",
    "question": "Os triângulos ABC e DEF são semelhantes. AB = 6 e DE = 4 são lados correspondentes; BC = 10. Quanto mede o correspondente EF?",
    "answer": "20/3",
    "hint": "Menor com menor.",
    "steps": [
      "\\(\\dfrac{DE}{AB} = \\dfrac{EF}{BC}\\) ⇒ \\(\\dfrac46 = \\dfrac{EF}{10}\\).",
      "\\(6 \\cdot EF = 40\\) ⇒ \\(EF = \\dfrac{40}{6} = \\dfrac{20}{3} \\approx 6{,}67\\)."
    ],
    "common": [
      {
        "value": "15/1",
        "message": "Confira: você inverteu a razão. DE é menor que AB, então EF é menor que BC."
      }
    ],
    "answerText": "\\(\\dfrac{20}{3}\\)"
  },
  {
    "id": 27,
    "level": 3,
    "title": "Nível 3",
    "question": "Dois triângulos são semelhantes. O primeiro tem lados 6, 8 e 10. No segundo, o lado correspondente ao 6 mede 9. Quanto mede o lado correspondente ao 10?",
    "answer": "15",
    "hint": "Ache k primeiro.",
    "steps": [
      "Razão: \\(k = \\dfrac96 = 1{,}5\\).",
      "\\(10 \\cdot 1{,}5 = 15\\)."
    ],
    "common": []
  },
  {
    "id": 28,
    "level": 3,
    "title": "Nível 3",
    "question": "Resolva a proporção \\(\\dfrac{x}{6} = \\dfrac{10}{4}\\).",
    "answer": "15",
    "hint": "Meios × extremos.",
    "steps": [
      "Multiplicação cruzada: \\(4x = 6 \\cdot 10 = 60\\).",
      "\\(x = 15\\)."
    ],
    "common": []
  },
  {
    "id": 29,
    "level": 3,
    "title": "Nível 3",
    "question": "Resolva a proporção \\(\\dfrac{5}{x} = \\dfrac{10}{14}\\).",
    "answer": "7",
    "hint": "Cruze: 5 · 14.",
    "steps": [
      "\\(10x = 5 \\cdot 14 = 70\\) ⇒ \\(x = 7\\)."
    ],
    "common": []
  },
  {
    "id": 30,
    "level": 3,
    "title": "Nível 3",
    "question": "Um triângulo retângulo tem catetos 3 e 4. Um outro, semelhante, tem o cateto correspondente ao 3 medindo 9. Quanto mede o cateto correspondente ao 4?",
    "answer": "12",
    "hint": "k = 3.",
    "steps": [
      "\\(k = \\dfrac93 = 3\\) ⇒ \\(4 \\cdot 3 = 12\\)."
    ],
    "common": []
  },
  {
    "id": 31,
    "level": 3,
    "title": "Nível 3",
    "question": "Um triângulo tem perímetro 12 cm. Um semelhante a ele tem razão de semelhança 1,5. Qual é o perímetro deste, em cm?",
    "answer": "18",
    "hint": "Perímetro × k.",
    "steps": [
      "\\(12 \\cdot 1{,}5 = 18\\)."
    ],
    "common": []
  },
  {
    "id": 32,
    "level": 3,
    "title": "Nível 3",
    "question": "Um triângulo tem lados 8, 10 e 12. Um semelhante a ele tem o menor lado medindo 4. Qual é o perímetro do segundo, em cm?",
    "answer": "15",
    "hint": "k = 0,5.",
    "steps": [
      "Razão: \\(k = \\dfrac48 = 0{,}5\\).",
      "Perímetro do 1º: \\(8 + 10 + 12 = 30\\); do 2º: \\(30 \\cdot 0{,}5 = 15\\)."
    ],
    "common": []
  },
  {
    "id": 33,
    "level": 3,
    "title": "Nível 3",
    "question": "Em triângulos semelhantes, dois lados correspondentes valem \\(x\\) e \\(x + 4\\) no 1º e no 2º, e outros dois lados correspondentes valem 3 e 5. Quanto vale \\(x\\)?",
    "answer": "6",
    "hint": "Cruze e resolva a equação do 1º grau.",
    "steps": [
      "\\(\\dfrac{x}{3} = \\dfrac{x + 4}{5}\\).",
      "\\(5x = 3(x + 4) = 3x + 12\\) ⇒ \\(2x = 12\\) ⇒ \\(x = 6\\).",
      "Conferência: \\(\\dfrac63 = 2\\) e \\(\\dfrac{10}{5} = 2\\) ✓."
    ],
    "common": []
  },
  {
    "id": 34,
    "level": 3,
    "title": "Nível 3",
    "question": "Dois triângulos semelhantes têm lados correspondentes 4 cm e 6 cm. O menor tem área 20 cm². Qual é a área do maior, em cm²?",
    "answer": "45",
    "hint": "Área × k².",
    "steps": [
      "\\(k = \\dfrac64 = 1{,}5\\) ⇒ \\(k^2 = 2{,}25\\).",
      "\\(20 \\cdot 2{,}25 = 45\\)."
    ],
    "common": [
      {
        "value": "30/1",
        "message": "A razão das áreas é k², não k. Aqui k = 1,5, então k² = 2,25."
      }
    ]
  },
  {
    "id": 35,
    "level": 3,
    "title": "Nível 3",
    "question": "O triângulo de lados 5, 12 e 13 é semelhante a outro cuja hipotenusa mede 39. Quanto mede o menor cateto do segundo, em cm?",
    "answer": "15",
    "hint": "k = 39 ÷ 13.",
    "steps": [
      "\\(k = \\dfrac{39}{13} = 3\\) ⇒ \\(5 \\cdot 3 = 15\\)."
    ],
    "common": []
  },
  {
    "id": 36,
    "level": 3,
    "title": "Nível 3",
    "question": "Um triângulo tem lados 15, 20 e 25. Um semelhante tem o menor lado 6. Quanto mede o maior lado do segundo?",
    "answer": "10",
    "hint": "k = 6 ÷ 15.",
    "steps": [
      "\\(k = \\dfrac{6}{15} = 0{,}4\\) ⇒ \\(25 \\cdot 0{,}4 = 10\\)."
    ],
    "common": []
  },
  {
    "id": 37,
    "level": 3,
    "title": "Nível 3",
    "question": "Um triângulo tem lados 7, 9 e 12. Um semelhante a ele tem perímetro 56. Quanto mede o maior lado do segundo?",
    "answer": "24",
    "hint": "k pela razão dos perímetros.",
    "steps": [
      "Perímetro do 1º: \\(7 + 9 + 12 = 28\\). Razão: \\(k = \\dfrac{56}{28} = 2\\).",
      "\\(12 \\cdot 2 = 24\\)."
    ],
    "common": []
  },
  {
    "id": 38,
    "level": 3,
    "title": "Nível 3",
    "question": "Se \\(\\dfrac{AB}{DE} = \\dfrac35\\) e \\(AB = 12\\), quanto vale DE?",
    "answer": "20",
    "hint": "Cruze.",
    "steps": [
      "\\(5 \\cdot AB = 3 \\cdot DE\\) ⇒ \\(60 = 3 \\cdot DE\\) ⇒ \\(DE = 20\\)."
    ],
    "common": []
  },
  {
    "id": 39,
    "level": 3,
    "title": "Nível 3",
    "question": "Uma figura é reduzida com razão de semelhança 0,4. Um lado que media 25 cm passa a medir quantos cm?",
    "answer": "10",
    "hint": "40% de 25.",
    "steps": [
      "\\(25 \\cdot 0{,}4 = 10\\)."
    ],
    "common": []
  },
  {
    "id": 40,
    "level": 4,
    "title": "Nível 4",
    "question": "Retas paralelas cortam duas transversais. Em uma, AB = 6 e BC = 9. Na outra, DE = 4. Quanto vale EF?",
    "answer": "6",
    "hint": "AB/BC = DE/EF.",
    "steps": [
      "Tales: \\(\\dfrac{AB}{BC} = \\dfrac{DE}{EF}\\) ⇒ \\(\\dfrac69 = \\dfrac{4}{EF}\\).",
      "\\(6 \\cdot EF = 36\\) ⇒ \\(EF = 6\\)."
    ],
    "common": []
  },
  {
    "id": 41,
    "level": 4,
    "title": "Nível 4",
    "question": "No triângulo ABC, DE é paralelo a BC. Sabendo que AD = 3, DB = 2 e AE = 6, quanto mede EC?",
    "answer": "4",
    "hint": "Parte com parte.",
    "steps": [
      "Tales: \\(\\dfrac{AD}{DB} = \\dfrac{AE}{EC}\\) ⇒ \\(\\dfrac32 = \\dfrac{6}{EC}\\).",
      "\\(3 \\cdot EC = 12\\) ⇒ \\(EC = 4\\)."
    ],
    "common": [
      {
        "value": "9/1",
        "message": "Você usou parte/todo. Aqui a proporção certa é AD/DB = AE/EC (parte/parte)."
      }
    ],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 310 185",
        "style": "width:310px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Triângulo ABC com DE paralelo a BC"
      },
      "children": [
        {
          "tag": "polygon",
          "attrs": {
            "points": "30,150 270,150 110,20",
            "fill": "#e0e7ff",
            "stroke": "#4f46e5",
            "stroke-width": "2.5",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "110,20 62,98 206,98",
            "fill": "#fbcfe8",
            "stroke": "#ec4899",
            "stroke-width": "2.5",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "110",
            "y": "12",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "A"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "20",
            "y": "164",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "B"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "280",
            "y": "164",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "C"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "102",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "D"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "218",
            "y": "102",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "E"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "68",
            "y": "61",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#d97706"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "28",
            "y": "130",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#d97706"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "176",
            "y": "57",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#059669"
          },
          "children": [
            "6"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "258",
            "y": "130",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#059669"
          },
          "children": [
            "x"
          ]
        }
      ]
    }
  },
  {
    "id": 42,
    "level": 4,
    "title": "Nível 4",
    "question": "DE é paralelo a BC. AD = 4, AB = 10 e AE = 6. Quanto mede AC?",
    "answer": "15",
    "hint": "Parte/todo dos dois lados.",
    "steps": [
      "\\(\\dfrac{AD}{AB} = \\dfrac{AE}{AC}\\) ⇒ \\(\\dfrac{4}{10} = \\dfrac{6}{AC}\\).",
      "\\(4 \\cdot AC = 60\\) ⇒ \\(AC = 15\\)."
    ],
    "common": []
  },
  {
    "id": 43,
    "level": 4,
    "title": "Nível 4",
    "question": "DE é paralelo a BC. AD = 4, DB = 6 e DE = 5. Quanto mede BC?",
    "answer": "25/2",
    "hint": "Primeiro ache AB.",
    "steps": [
      "Todo: \\(AB = 4 + 6 = 10\\).",
      "\\(\\dfrac{AD}{AB} = \\dfrac{DE}{BC}\\) ⇒ \\(\\dfrac{4}{10} = \\dfrac{5}{BC}\\).",
      "\\(4 \\cdot BC = 50\\) ⇒ \\(BC = 12{,}5\\)."
    ],
    "common": [],
    "answerText": "\\(\\dfrac{25}{2}\\)"
  },
  {
    "id": 44,
    "level": 4,
    "title": "Nível 4",
    "question": "Três retas paralelas cortam duas transversais. Em uma, os segmentos medem 2 e \\(x\\). Na outra, os correspondentes medem 4 e 6. Quanto vale \\(x\\)?",
    "answer": "3",
    "hint": "Mantenha a ordem dos segmentos.",
    "steps": [
      "\\(\\dfrac{2}{x} = \\dfrac{4}{6}\\) ⇒ \\(4x = 12\\) ⇒ \\(x = 3\\)."
    ],
    "common": []
  },
  {
    "id": 45,
    "level": 4,
    "title": "Nível 4",
    "question": "Resolva: \\(\\dfrac{x}{4} = \\dfrac{x + 2}{6}\\).",
    "answer": "4",
    "hint": "Multiplicação cruzada e depois equação do 1º grau.",
    "steps": [
      "\\(6x = 4(x + 2)\\) ⇒ \\(6x = 4x + 8\\) ⇒ \\(2x = 8\\) ⇒ \\(x = 4\\)."
    ],
    "common": []
  },
  {
    "id": 46,
    "level": 4,
    "title": "Nível 4",
    "question": "Três ruas paralelas cortam duas avenidas. Na 1ª avenida, os lotes entre as ruas medem 20 m e 30 m de frente. Na 2ª avenida, o primeiro lote mede 12 m. Quanto mede o segundo, em metros?",
    "answer": "18",
    "hint": "Tales vale para ruas paralelas.",
    "steps": [
      "\\(\\dfrac{20}{30} = \\dfrac{12}{x}\\).",
      "\\(20x = 360\\) ⇒ \\(x = 18\\text{ m}\\)."
    ],
    "common": []
  },
  {
    "id": 47,
    "level": 4,
    "title": "Nível 4",
    "question": "Um segmento de 50 cm é dividido em duas partes na razão 2 : 3. Quanto mede a maior parte, em cm?",
    "answer": "30",
    "hint": "Divida em 5 partes iguais.",
    "steps": [
      "2 + 3 = 5 partes iguais: \\(50 \\div 5 = 10\\).",
      "Maior parte: \\(3 \\cdot 10 = 30\\) cm."
    ],
    "common": []
  },
  {
    "id": 48,
    "level": 4,
    "title": "Nível 4",
    "question": "DE é paralelo a BC, com AD : DB = 2 : 3 e AB = 20. Quanto mede AD?",
    "answer": "8",
    "hint": "AD é 2 das 5 partes.",
    "steps": [
      "AB tem 2 + 3 = 5 partes: \\(20 \\div 5 = 4\\).",
      "\\(AD = 2 \\cdot 4 = 8\\)."
    ],
    "common": []
  },
  {
    "id": 49,
    "level": 4,
    "title": "Nível 4",
    "question": "DE é paralelo a BC, com AD = 6, AB = 15 e BC = 25. Quanto mede DE?",
    "answer": "10",
    "hint": "AD/AB = DE/BC.",
    "steps": [
      "\\(\\dfrac{AD}{AB} = \\dfrac{DE}{BC}\\) ⇒ \\(\\dfrac{6}{15} = \\dfrac{DE}{25}\\).",
      "\\(15 \\cdot DE = 150\\) ⇒ \\(DE = 10\\)."
    ],
    "common": []
  },
  {
    "id": 50,
    "level": 4,
    "title": "Nível 4",
    "question": "DE é paralelo a BC. AD = 3, DB = 2, AE = \\(x\\) e EC = 4. Quanto vale \\(x\\)?",
    "answer": "6",
    "hint": "AD/DB = AE/EC.",
    "steps": [
      "\\(\\dfrac{AD}{DB} = \\dfrac{AE}{EC}\\) ⇒ \\(\\dfrac32 = \\dfrac{x}{4}\\).",
      "\\(2x = 12\\) ⇒ \\(x = 6\\)."
    ],
    "common": []
  },
  {
    "id": 51,
    "level": 4,
    "title": "Nível 4",
    "question": "No triângulo ABC com DE paralelo a BC (D em AB e E em AC), qual proporção está correta?",
    "answer": "\\(\\dfrac{AD}{DB} = \\dfrac{AE}{EC}\\)",
    "hint": "Mantenha parte com parte, todo com todo.",
    "steps": [
      "Tales: partes correspondentes: \\(\\dfrac{AD}{DB} = \\dfrac{AE}{EC}\\) (parte/parte).",
      "Ou parte/todo: \\(\\dfrac{AD}{AB} = \\dfrac{AE}{AC} = \\dfrac{DE}{BC}\\). Não misture parte com todo!"
    ],
    "common": [],
    "options": [
      "\\(\\dfrac{AD}{DB} = \\dfrac{AE}{EC}\\)",
      "\\(\\dfrac{AD}{DB} = \\dfrac{AE}{AC}\\)",
      "\\(\\dfrac{AD}{AB} = \\dfrac{EC}{AE}\\)",
      "\\(\\dfrac{DE}{BC} = \\dfrac{AD}{DB}\\)"
    ],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 310 185",
        "style": "width:310px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Triângulo ABC com DE paralelo a BC"
      },
      "children": [
        {
          "tag": "polygon",
          "attrs": {
            "points": "30,150 270,150 110,20",
            "fill": "#e0e7ff",
            "stroke": "#4f46e5",
            "stroke-width": "2.5",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "110,20 78,72 174,72",
            "fill": "#fbcfe8",
            "stroke": "#ec4899",
            "stroke-width": "2.5",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "110",
            "y": "12",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "A"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "20",
            "y": "164",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "B"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "280",
            "y": "164",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "C"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "66",
            "y": "76",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "D"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "186",
            "y": "76",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "E"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "76",
            "y": "48",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#d97706"
          },
          "children": [
            "AD"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "36",
            "y": "117",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#d97706"
          },
          "children": [
            "DB"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "160",
            "y": "44",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#059669"
          },
          "children": [
            "AE"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "242",
            "y": "117",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#059669"
          },
          "children": [
            "EC"
          ]
        }
      ]
    }
  },
  {
    "id": 52,
    "level": 4,
    "title": "Nível 4",
    "question": "Três paralelas cortam uma transversal em segmentos de 5 e 10. Em outra transversal, o segmento total entre a 1ª e a 3ª paralela mede 30. Quanto mede o maior dos dois segmentos desta transversal?",
    "answer": "20",
    "hint": "Mesma razão 1 : 2.",
    "steps": [
      "Razão 5 : 10 = 1 : 2, total 3 partes: \\(30 \\div 3 = 10\\).",
      "Segmentos: 10 e 20. O maior: 20."
    ],
    "common": []
  },
  {
    "id": 53,
    "level": 4,
    "title": "Nível 4",
    "question": "DE é paralelo a BC. AD = 9, DB = 6 e DE = 12. Quanto mede BC?",
    "answer": "20",
    "hint": "Primeiro AB = AD + DB.",
    "steps": [
      "\\(AB = 15\\). \\(\\dfrac{9}{15} = \\dfrac{12}{BC}\\).",
      "\\(9 \\cdot BC = 180\\) ⇒ \\(BC = 20\\)."
    ],
    "common": []
  },
  {
    "id": 54,
    "level": 5,
    "title": "Nível 5",
    "question": "No mesmo instante, uma vara de 1,5 m projeta sombra de 2,5 m e um poste projeta sombra de 10 m. Qual é a altura do poste, em metros?",
    "answer": "6",
    "hint": "altura/sombra é igual nos dois.",
    "steps": [
      "Triângulos semelhantes: \\(\\dfrac{1{,}5}{2{,}5} = \\dfrac{h}{10}\\).",
      "\\(2{,}5h = 15\\) ⇒ \\(h = 6\\text{ m}\\)."
    ],
    "common": [
      {
        "value": "17/2",
        "message": "Você somou diferenças. Os triângulos de sombra são semelhantes: use proporção."
      }
    ]
  },
  {
    "id": 55,
    "level": 5,
    "title": "Nível 5",
    "question": "Uma vara de 2 m projeta uma sombra de 3 m. No mesmo instante, um prédio projeta sombra de 45 m. Qual é a altura do prédio, em metros?",
    "answer": "30",
    "hint": "2/3 = h/45.",
    "steps": [
      "\\(\\dfrac{2}{3} = \\dfrac{h}{45}\\) ⇒ \\(3h = 90\\) ⇒ \\(h = 30\\text{ m}\\)."
    ],
    "common": []
  },
  {
    "id": 56,
    "level": 5,
    "title": "Nível 5",
    "question": "Em um mapa com escala 1 : 100 000, a distância entre duas cidades é 3,5 cm. Qual é a distância real, em km?",
    "answer": "7/2",
    "hint": "100 000 cm = 1 km.",
    "steps": [
      "\\(3{,}5 \\cdot 100\\,000 = 350\\,000\\text{ cm}\\).",
      "\\(350\\,000\\text{ cm} = 3\\,500\\text{ m} = 3{,}5\\text{ km}\\)."
    ],
    "common": [],
    "answerText": "\\(\\dfrac{7}{2}\\)"
  },
  {
    "id": 57,
    "level": 5,
    "title": "Nível 5",
    "question": "Duas cidades estão a 12 km uma da outra. Em um mapa com escala 1 : 200 000, qual é a distância entre elas no mapa, em cm?",
    "answer": "6",
    "hint": "Converta km para cm primeiro.",
    "steps": [
      "\\(12\\text{ km} = 1\\,200\\,000\\text{ cm}\\).",
      "\\(1\\,200\\,000 \\div 200\\,000 = 6\\text{ cm}\\)."
    ],
    "common": []
  },
  {
    "id": 58,
    "level": 5,
    "title": "Nível 5",
    "question": "Uma maquete tem escala 1 : 50. Um prédio real de 12 m de altura tem quantos centímetros de altura na maquete?",
    "answer": "24",
    "hint": "Use cm nos dois.",
    "steps": [
      "\\(12\\text{ m} = 1\\,200\\text{ cm}\\).",
      "\\(1\\,200 \\div 50 = 24\\text{ cm}\\)."
    ],
    "common": []
  },
  {
    "id": 59,
    "level": 5,
    "title": "Nível 5",
    "question": "Uma pessoa de 1,6 m olha-se em um espelho no chão, a 2 m de distância dele. O espelho está a 5 m de uma árvore, e a pessoa vê o topo da árvore refletido. Qual é a altura da árvore, em metros?",
    "answer": "4",
    "hint": "Altura/distância é igual dos dois lados.",
    "steps": [
      "Triângulos semelhantes (mesmo ângulo de reflexão): \\(\\dfrac{1{,}6}{2} = \\dfrac{h}{5}\\).",
      "\\(2h = 8\\) ⇒ \\(h = 4\\text{ m}\\)."
    ],
    "common": []
  },
  {
    "id": 60,
    "level": 5,
    "title": "Nível 5",
    "question": "Para medir a largura de um rio, usam-se dois triângulos semelhantes: um com catetos 5 m e 8 m, e outro com o cateto correspondente ao 5 medindo 40 m. Quanto mede o cateto correspondente ao 8 (a largura do rio), em metros?",
    "answer": "64",
    "hint": "k = 8.",
    "steps": [
      "\\(k = \\dfrac{40}{5} = 8\\).",
      "\\(8 \\cdot 8 = 64\\text{ m}\\)."
    ],
    "common": []
  },
  {
    "id": 61,
    "level": 5,
    "title": "Nível 5",
    "question": "Na planta de um apartamento (escala 1 : 100), uma sala mede 5 cm por 4 cm. Qual é a área real da sala, em m²?",
    "answer": "20",
    "hint": "Converta cada lado antes de multiplicar.",
    "steps": [
      "Dimensões reais: \\(5 \\cdot 100 = 500\\text{ cm} = 5\\text{ m}\\) e \\(4\\text{ m}\\).",
      "Área: \\(5 \\cdot 4 = 20\\text{ m}^2\\)."
    ],
    "common": []
  },
  {
    "id": 62,
    "level": 5,
    "title": "Nível 5",
    "question": "Em um mapa com escala 1 : 1 000, um terreno tem área de 6 cm². Qual é a área real, em m²?",
    "answer": "600",
    "hint": "Área em escala: × N².",
    "steps": [
      "\\(6 \\cdot 1\\,000^2 = 6\\,000\\,000\\text{ cm}^2\\).",
      "\\(1\\text{ m}^2 = 10\\,000\\text{ cm}^2\\) ⇒ \\(6\\,000\\,000 \\div 10\\,000 = 600\\text{ m}^2\\)."
    ],
    "common": [
      {
        "value": "60/1",
        "message": "A área é multiplicada por N², não por N. Aqui N² = 1 000 000."
      }
    ]
  },
  {
    "id": 63,
    "level": 5,
    "title": "Nível 5",
    "question": "No mesmo instante, uma estaca de 1 m tem sombra de 1,5 m e uma árvore tem sombra de 12 m. Qual é a altura da árvore, em metros?",
    "answer": "8",
    "hint": "1/1,5 = h/12.",
    "steps": [
      "\\(\\dfrac{1}{1{,}5} = \\dfrac{h}{12}\\) ⇒ \\(1{,}5h = 12\\) ⇒ \\(h = 8\\text{ m}\\)."
    ],
    "common": []
  },
  {
    "id": 64,
    "level": 5,
    "title": "Nível 5",
    "question": "Duas cidades estão a 3 cm uma da outra em um mapa com escala 1 : 2 000 000. Qual é a distância real, em km?",
    "answer": "60",
    "hint": "100 000 cm = 1 km.",
    "steps": [
      "\\(3 \\cdot 2\\,000\\,000 = 6\\,000\\,000\\text{ cm}\\) = 60 000 m = 60 km."
    ],
    "common": []
  },
  {
    "id": 65,
    "level": 5,
    "title": "Nível 5",
    "question": "Um desenho foi feito em escala 1 : 5. Uma peça mede 12 cm no desenho. Quanto mede a peça real, em cm?",
    "answer": "60",
    "hint": "Real = desenho × 5.",
    "steps": [
      "\\(12 \\cdot 5 = 60\\text{ cm}\\)."
    ],
    "common": []
  },
  {
    "id": 66,
    "level": 6,
    "title": "Nível 6",
    "question": "A altura relativa à hipotenusa de um triângulo retângulo é o segmento que:",
    "answer": "sai do vértice do ângulo reto e é perpendicular à hipotenusa",
    "hint": "Olhe a figura: H é o pé da altura.",
    "steps": [
      "Ela parte do vértice do ângulo reto (A) e chega à hipotenusa (BC) formando ângulo de 90°.",
      "Não divide a hipotenusa ao meio (isso só acontece no triângulo retângulo isósceles)."
    ],
    "common": [],
    "options": [
      "sai do vértice do ângulo reto e é perpendicular à hipotenusa",
      "sai de um cateto e vai até o outro",
      "divide a hipotenusa em duas partes iguais",
      "é igual à hipotenusa"
    ],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 330 187.3846153846154",
        "style": "width:330px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Triângulo retângulo com altura relativa à hipotenusa"
      },
      "children": [
        {
          "tag": "polygon",
          "attrs": {
            "points": "30,141.3846153846154 280,141.3846153846154 106.92307692307692,26",
            "fill": "#e0e7ff",
            "stroke": "#4f46e5",
            "stroke-width": "3",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106.92307692307692",
            "y1": "26",
            "x2": "106.92307692307692",
            "y2": "141.3846153846154",
            "stroke": "#ec4899",
            "stroke-width": "2.5",
            "stroke-dasharray": "5 4"
          },
          "children": []
        },
        {
          "tag": "polyline",
          "attrs": {
            "points": "97.92307692307692,141.3846153846154 97.92307692307692,132.3846153846154 106.92307692307692,132.3846153846154",
            "fill": "none",
            "stroke": "#ec4899",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106.92307692307692",
            "y": "18",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "A"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "20",
            "y": "155.3846153846154",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "B"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "290",
            "y": "155.3846153846154",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "C"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106.92307692307692",
            "y": "157.3846153846154",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "H"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "68.46153846153845",
            "y": "159.3846153846154",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#d97706"
          },
          "children": [
            "m"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "193.46153846153845",
            "y": "159.3846153846154",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#059669"
          },
          "children": [
            "n"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "114.92307692307692",
            "y": "83.6923076923077",
            "text-anchor": "start",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#ec4899"
          },
          "children": [
            "h"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "60.46153846153845",
            "y": "79.6923076923077",
            "text-anchor": "end",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "c"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "201.46153846153845",
            "y": "79.6923076923077",
            "text-anchor": "start",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "b"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "155",
            "y": "179.3846153846154",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "a"
          ]
        }
      ]
    }
  },
  {
    "id": 67,
    "level": 6,
    "title": "Nível 6",
    "question": "Em um triângulo retângulo, a hipotenusa mede 13 e a projeção do cateto c sobre ela mede m = 4. Quanto mede a outra projeção n?",
    "answer": "9",
    "hint": "a = m + n.",
    "steps": [
      "\\(a = m + n\\) ⇒ \\(n = a - m = 13 - 4 = 9\\)."
    ],
    "common": [
      {
        "value": "17/1",
        "message": "A hipotenusa é a soma das projeções: n = a − m."
      }
    ]
  },
  {
    "id": 68,
    "level": 6,
    "title": "Nível 6",
    "question": "Qual relação métrica envolve o cateto c, a hipotenusa a e a projeção m?",
    "answer": "\\(c^2 = a \\cdot m\\)",
    "hint": "Lembre: cateto ao quadrado = hipotenusa × projeção dele.",
    "steps": [
      "O quadrado de um cateto é a hipotenusa vezes a projeção desse cateto: \\(c^2 = a \\cdot m\\).",
      "Vem da semelhança \\(\\triangle ABC \\sim \\triangle HBA\\): \\(\\dfrac{a}{c} = \\dfrac{c}{m}\\)."
    ],
    "common": [],
    "options": [
      "\\(c^2 = a \\cdot m\\)",
      "\\(c^2 = m \\cdot n\\)",
      "\\(c = a \\cdot m\\)",
      "\\(c^2 = a + m\\)"
    ]
  },
  {
    "id": 69,
    "level": 6,
    "title": "Nível 6",
    "question": "Qual das relações abaixo está correta?",
    "answer": "\\(h^2 = m \\cdot n\\)",
    "hint": "Fica h² (ao quadrado).",
    "steps": [
      "A altura ao quadrado é o produto das projeções: \\(h^2 = m \\cdot n\\) (a altura é a média geométrica de m e n)."
    ],
    "common": [],
    "options": [
      "\\(h^2 = m \\cdot n\\)",
      "\\(h = m \\cdot n\\)",
      "\\(h^2 = m + n\\)",
      "\\(h = a \\cdot m\\)"
    ]
  },
  {
    "id": 70,
    "level": 6,
    "title": "Nível 6",
    "question": "Ao traçar a altura relativa à hipotenusa, o triângulo ABC fica dividido em dois triângulos, HBA e HAC. Os três triângulos (ABC, HBA e HAC) são:",
    "answer": "semelhantes entre si",
    "hint": "Procure ângulos iguais.",
    "steps": [
      "Os três são retângulos e compartilham ângulos agudos: critério AA.",
      "Por isso valem várias proporções entre seus lados."
    ],
    "common": [],
    "options": [
      "semelhantes entre si",
      "congruentes entre si",
      "todos equiláteros",
      "sem relação"
    ]
  },
  {
    "id": 71,
    "level": 6,
    "title": "Nível 6",
    "question": "As projeções dos catetos sobre a hipotenusa medem m = 2 e n = 8. Quanto mede a hipotenusa?",
    "answer": "10",
    "hint": "Soma das projeções.",
    "steps": [
      "\\(a = m + n = 2 + 8 = 10\\)."
    ],
    "common": []
  },
  {
    "id": 72,
    "level": 6,
    "title": "Nível 6",
    "question": "Qual das afirmações é falsa?",
    "answer": "\\(a = m \\cdot n\\)",
    "hint": "Qual delas mistura soma e produto errado?",
    "steps": [
      "A hipotenusa é a soma das projeções, não o produto: \\(a = m + n\\).",
      "As outras três são relações métricas corretas."
    ],
    "common": [],
    "options": [
      "\\(a = m \\cdot n\\)",
      "\\(a \\cdot h = b \\cdot c\\)",
      "\\(b^2 = a \\cdot n\\)",
      "\\(a = m + n\\)"
    ]
  },
  {
    "id": 73,
    "level": 6,
    "title": "Nível 6",
    "question": "A projeção do cateto c sobre a hipotenusa (na notação do curso) é:",
    "answer": "m = BH",
    "hint": "c = AB tem projeção BH.",
    "steps": [
      "O cateto \\(c = AB\\) “projeta” sua sombra em \\(BH\\) (da hipotenusa). Essa projeção é \\(m\\).",
      "O cateto \\(b = AC\\) projeta \\(n = CH\\)."
    ],
    "common": [],
    "options": [
      "m = BH",
      "n = CH",
      "h = AH",
      "a = BC"
    ]
  },
  {
    "id": 74,
    "level": 6,
    "title": "Nível 6",
    "question": "Em um triângulo retângulo, a = 25 e o cateto c = 15. Pela relação \\(c^2 = a \\cdot m\\), quanto vale a projeção m?",
    "answer": "9",
    "hint": "15² = 225.",
    "steps": [
      "\\(225 = 25 \\cdot m\\) ⇒ \\(m = 9\\)."
    ],
    "common": []
  },
  {
    "id": 75,
    "level": 6,
    "title": "Nível 6",
    "question": "A relação \\(a \\cdot h = b \\cdot c\\) vem de calcular a área do triângulo de duas maneiras. O que ela diz?",
    "answer": "hipotenusa × altura = cateto × cateto",
    "hint": "Duas fórmulas para a mesma área.",
    "steps": [
      "Área com base a e altura h: \\(\\dfrac{a \\cdot h}{2}\\). Área com catetos como base e altura: \\(\\dfrac{b \\cdot c}{2}\\).",
      "Igualando: \\(a \\cdot h = b \\cdot c\\)."
    ],
    "common": [],
    "options": [
      "hipotenusa × altura = cateto × cateto",
      "hipotenusa + altura = catetos somados",
      "altura = hipotenusa ÷ 2",
      "altura = b · c"
    ]
  },
  {
    "id": 76,
    "level": 6,
    "title": "Nível 6",
    "question": "As projeções valem m = 4 e n = 9. Quanto vale a² (o quadrado da hipotenusa)?",
    "answer": "169",
    "hint": "Primeiro ache a.",
    "steps": [
      "\\(a = 4 + 9 = 13\\) ⇒ \\(a^2 = 169\\).",
      "Conferindo com Pitágoras: \\(b^2 + c^2 = a \\cdot n + a \\cdot m = a(m + n) = a^2\\) ✓."
    ],
    "common": []
  },
  {
    "id": 77,
    "level": 6,
    "title": "Nível 6",
    "question": "A média geométrica de dois números positivos x e y é \\(\\sqrt{x \\cdot y}\\). Qual é a média geométrica de 4 e 9?",
    "answer": "6",
    "hint": "Multiplique e tire a raiz.",
    "steps": [
      "\\(\\sqrt{4 \\cdot 9} = \\sqrt{36} = 6\\).",
      "É também a altura de um triângulo retângulo com projeções 4 e 9."
    ],
    "common": [
      {
        "value": "13/2",
        "message": "Esta é a média aritmética (4+9)/2. A média geométrica usa produto e raiz."
      }
    ]
  },
  {
    "id": 78,
    "level": 7,
    "title": "Nível 7",
    "question": "As projeções dos catetos sobre a hipotenusa medem 4 e 9. Quanto mede a altura relativa à hipotenusa?",
    "answer": "6",
    "hint": "h² = m · n.",
    "steps": [
      "\\(h^2 = m \\cdot n = 4 \\cdot 9 = 36\\).",
      "\\(h = 6\\)."
    ],
    "common": [
      {
        "value": "36/1",
        "message": "36 é h². Falta a raiz."
      },
      {
        "value": "13/1",
        "message": "Esta é a hipotenusa (4 + 9)."
      }
    ],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 330 187.3846153846154",
        "style": "width:330px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Triângulo retângulo com altura relativa à hipotenusa"
      },
      "children": [
        {
          "tag": "polygon",
          "attrs": {
            "points": "30,141.3846153846154 280,141.3846153846154 106.92307692307692,26",
            "fill": "#e0e7ff",
            "stroke": "#4f46e5",
            "stroke-width": "3",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106.92307692307692",
            "y1": "26",
            "x2": "106.92307692307692",
            "y2": "141.3846153846154",
            "stroke": "#ec4899",
            "stroke-width": "2.5",
            "stroke-dasharray": "5 4"
          },
          "children": []
        },
        {
          "tag": "polyline",
          "attrs": {
            "points": "97.92307692307692,141.3846153846154 97.92307692307692,132.3846153846154 106.92307692307692,132.3846153846154",
            "fill": "none",
            "stroke": "#ec4899",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106.92307692307692",
            "y": "18",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "A"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "20",
            "y": "155.3846153846154",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "B"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "290",
            "y": "155.3846153846154",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "C"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106.92307692307692",
            "y": "157.3846153846154",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#1e293b"
          },
          "children": [
            "H"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "68.46153846153845",
            "y": "159.3846153846154",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#d97706"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "193.46153846153845",
            "y": "159.3846153846154",
            "text-anchor": "middle",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#059669"
          },
          "children": [
            "9"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "114.92307692307692",
            "y": "83.6923076923077",
            "text-anchor": "start",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#ec4899"
          },
          "children": [
            "h"
          ]
        }
      ]
    }
  },
  {
    "id": 79,
    "level": 7,
    "title": "Nível 7",
    "question": "As projeções medem 9 e 16. Quanto mede a altura?",
    "answer": "12",
    "hint": "9 · 16 = 144.",
    "steps": [
      "\\(h^2 = 9 \\cdot 16 = 144\\) ⇒ \\(h = 12\\)."
    ],
    "common": []
  },
  {
    "id": 80,
    "level": 7,
    "title": "Nível 7",
    "question": "As projeções medem 2 e 8. Quanto mede a altura?",
    "answer": "4",
    "hint": "2 · 8.",
    "steps": [
      "\\(h^2 = 16\\) ⇒ \\(h = 4\\)."
    ],
    "common": []
  },
  {
    "id": 81,
    "level": 7,
    "title": "Nível 7",
    "question": "A altura mede 6 e uma projeção mede 4. Quanto mede a outra projeção?",
    "answer": "9",
    "hint": "h² = 36.",
    "steps": [
      "\\(h^2 = m \\cdot n\\) ⇒ \\(36 = 4n\\) ⇒ \\(n = 9\\)."
    ],
    "common": []
  },
  {
    "id": 82,
    "level": 7,
    "title": "Nível 7",
    "question": "A hipotenusa mede 10 e um cateto mede 6. Quanto mede a projeção desse cateto sobre a hipotenusa?",
    "answer": "18/5",
    "hint": "36 ÷ 10.",
    "steps": [
      "\\(c^2 = a \\cdot m\\) ⇒ \\(36 = 10m\\) ⇒ \\(m = 3{,}6\\)."
    ],
    "common": [],
    "answerText": "\\(\\dfrac{18}{5}\\)"
  },
  {
    "id": 83,
    "level": 7,
    "title": "Nível 7",
    "question": "Os catetos de um triângulo retângulo medem 9 cm e 12 cm. Quanto mede a altura relativa à hipotenusa, em cm?",
    "answer": "36/5",
    "hint": "Ache a e use a·h = b·c.",
    "steps": [
      "Hipotenusa: \\(a = \\sqrt{81 + 144} = 15\\).",
      "\\(a \\cdot h = b \\cdot c\\) ⇒ \\(15h = 108\\) ⇒ \\(h = 7{,}2\\text{ cm}\\)."
    ],
    "common": [],
    "answerText": "\\(\\dfrac{36}{5}\\)"
  },
  {
    "id": 84,
    "level": 7,
    "title": "Nível 7",
    "question": "Os catetos medem 6 e 8. Quanto mede a altura relativa à hipotenusa?",
    "answer": "24/5",
    "hint": "a = 10.",
    "steps": [
      "\\(a = 10\\). \\(10h = 6 \\cdot 8 = 48\\) ⇒ \\(h = 4{,}8\\)."
    ],
    "common": [],
    "answerText": "\\(\\dfrac{24}{5}\\)"
  },
  {
    "id": 85,
    "level": 7,
    "title": "Nível 7",
    "question": "A hipotenusa mede 25 e um cateto mede 15. Quanto mede a altura relativa à hipotenusa?",
    "answer": "12",
    "hint": "m = 15²/25.",
    "steps": [
      "Outro cateto: \\(\\sqrt{625 - 225} = 20\\). Ou: \\(m = \\dfrac{15^2}{25} = 9\\), \\(n = 16\\).",
      "\\(h = \\sqrt{9 \\cdot 16} = 12\\). (Confere: \\(25 \\cdot 12 = 15 \\cdot 20 = 300\\).)"
    ],
    "common": []
  },
  {
    "id": 86,
    "level": 7,
    "title": "Nível 7",
    "question": "As projeções medem 4 e 9. O cateto c vale \\(x\\sqrt{13}\\). Quanto vale x?",
    "answer": "2",
    "hint": "c² = a · m.",
    "steps": [
      "\\(a = 13\\). \\(c^2 = a \\cdot m = 13 \\cdot 4 = 52\\).",
      "\\(c = \\sqrt{52} = 2\\sqrt{13}\\)."
    ],
    "common": []
  },
  {
    "id": 87,
    "level": 7,
    "title": "Nível 7",
    "question": "Com as mesmas projeções 4 e 9, o outro cateto b vale \\(x\\sqrt{13}\\). Quanto vale x?",
    "answer": "3",
    "hint": "b² = a · n.",
    "steps": [
      "\\(b^2 = a \\cdot n = 13 \\cdot 9 = 117 = 9 \\cdot 13\\).",
      "\\(b = 3\\sqrt{13}\\)."
    ],
    "common": []
  },
  {
    "id": 88,
    "level": 7,
    "title": "Nível 7",
    "question": "A altura mede 12 e uma projeção mede 9. Quanto mede a outra projeção?",
    "answer": "16",
    "hint": "12² = 144.",
    "steps": [
      "\\(144 = 9n\\) ⇒ \\(n = 16\\)."
    ],
    "common": []
  },
  {
    "id": 89,
    "level": 7,
    "title": "Nível 7",
    "question": "A hipotenusa mede 20 e um cateto b mede 16. Quanto mede a projeção n desse cateto, em cm?",
    "answer": "64/5",
    "hint": "16² = 256.",
    "steps": [
      "\\(b^2 = a \\cdot n\\) ⇒ \\(256 = 20n\\) ⇒ \\(n = 12{,}8\\)."
    ],
    "common": [],
    "answerText": "\\(\\dfrac{64}{5}\\)"
  },
  {
    "id": 90,
    "level": 7,
    "title": "Nível 7",
    "question": "A hipotenusa mede 12 e a projeção de um cateto mede 3. Quanto mede esse cateto?",
    "answer": "6",
    "hint": "c² = a · m.",
    "steps": [
      "\\(c^2 = a \\cdot m = 12 \\cdot 3 = 36\\) ⇒ \\(c = 6\\)."
    ],
    "common": []
  },
  {
    "id": 91,
    "level": 7,
    "title": "Nível 7",
    "question": "Os catetos de um triângulo retângulo medem 5 e 12. Qual é a altura relativa à hipotenusa, com duas casas decimais?",
    "answer": "231/50",
    "hint": "a·h = b·c.",
    "steps": [
      "Hipotenusa: \\(a = 13\\).",
      "\\(13h = 5 \\cdot 12 = 60\\) ⇒ \\(h = \\dfrac{60}{13} \\approx 4{,}62\\)."
    ],
    "common": [],
    "answerText": "\\(\\dfrac{231}{50}\\)"
  },
  {
    "id": 92,
    "level": 8,
    "title": "Nível 8",
    "question": "Os catetos de um triângulo retângulo medem 8 cm e 15 cm. Qual é a altura relativa à hipotenusa, com duas casas decimais, em cm?",
    "answer": "353/50",
    "hint": "a = 17.",
    "steps": [
      "\\(a = \\sqrt{64 + 225} = 17\\).",
      "\\(17h = 8 \\cdot 15 = 120\\) ⇒ \\(h = \\dfrac{120}{17} \\approx 7{,}06\\)."
    ],
    "common": [],
    "answerText": "\\(\\dfrac{353}{50}\\)"
  },
  {
    "id": 93,
    "level": 8,
    "title": "Nível 8",
    "question": "Um terreno tem forma de triângulo retângulo com catetos de 30 m e 40 m. Qual é a menor distância do vértice do ângulo reto até o lado maior (hipotenusa), em metros?",
    "answer": "24",
    "hint": "Altura relativa à hipotenusa.",
    "steps": [
      "A menor distância de um ponto a uma reta é a perpendicular: a altura relativa à hipotenusa.",
      "\\(a = 50\\); \\(50h = 30 \\cdot 40 = 1200\\) ⇒ \\(h = 24\\text{ m}\\)."
    ],
    "common": [
      {
        "value": "50/1",
        "message": "Esta é a hipotenusa."
      }
    ]
  },
  {
    "id": 94,
    "level": 8,
    "title": "Nível 8",
    "question": "Um triângulo retângulo está inscrito em uma circunferência de raio 5, com a hipotenusa sendo um diâmetro (10). A altura divide o diâmetro em partes de 2 e 8. Quanto mede a altura?",
    "answer": "4",
    "hint": "h² = m · n.",
    "steps": [
      "\\(h^2 = m \\cdot n = 2 \\cdot 8 = 16\\) ⇒ \\(h = 4\\)."
    ],
    "common": []
  },
  {
    "id": 95,
    "level": 8,
    "title": "Nível 8",
    "question": "Em um triângulo retângulo, a altura relativa à hipotenusa mede 12 e as projeções são \\(x\\) e \\(x + 7\\). Quanto vale x? (Teste valores inteiros.)",
    "answer": "9",
    "hint": "Procure dois números com diferença 7 e produto 144.",
    "steps": [
      "\\(x(x + 7) = 12^2 = 144\\).",
      "Teste \\(x = 9\\): \\(9 \\cdot 16 = 144\\) ✓."
    ],
    "common": []
  },
  {
    "id": 96,
    "level": 8,
    "title": "Nível 8",
    "question": "Em um triângulo retângulo, a hipotenusa mede 13 e a altura relativa a ela mede 6. Quanto mede a menor projeção?",
    "answer": "4",
    "hint": "Soma 13 e produto 36.",
    "steps": [
      "\\(m + n = 13\\) e \\(m \\cdot n = 36\\).",
      "Procure dois números: 4 e 9 (\\(4 + 9 = 13\\), \\(4 \\cdot 9 = 36\\)).",
      "A menor: 4."
    ],
    "common": []
  },
  {
    "id": 97,
    "level": 8,
    "title": "Nível 8",
    "question": "Um triângulo retângulo tem catetos 9 e 12 e hipotenusa 15. Quanto mede a projeção do cateto 12 sobre a hipotenusa? (Decimal.)",
    "answer": "48/5",
    "hint": "Cateto² = hipotenusa × projeção.",
    "steps": [
      "\\(12^2 = 15 \\cdot n\\) ⇒ \\(144 = 15n\\) ⇒ \\(n = 9{,}6\\)."
    ],
    "common": [],
    "answerText": "\\(\\dfrac{48}{5}\\)"
  },
  {
    "id": 98,
    "level": 8,
    "title": "Nível 8",
    "question": "Qual é a média geométrica de 2 e 18?",
    "answer": "6",
    "hint": "Multiplique e tire a raiz.",
    "steps": [
      "\\(\\sqrt{2 \\cdot 18} = \\sqrt{36} = 6\\)."
    ],
    "common": []
  },
  {
    "id": 99,
    "level": 8,
    "title": "Nível 8",
    "question": "Em um triângulo retângulo ABC, a altura AH divide a hipotenusa em BH = 9 e HC = 16. Qual é o perímetro de ABC?",
    "answer": "60",
    "hint": "Ache a, b e c.",
    "steps": [
      "\\(a = 25\\).",
      "\\(c^2 = 25 \\cdot 9 = 225\\) ⇒ \\(c = 15\\); \\(b^2 = 25 \\cdot 16 = 400\\) ⇒ \\(b = 20\\).",
      "Perímetro: \\(25 + 15 + 20 = 60\\)."
    ],
    "common": []
  },
  {
    "id": 100,
    "level": 8,
    "title": "Nível 8",
    "question": "As projeções dos catetos têm razão 1 : 4 e a altura mede 6. Quanto mede a hipotenusa?",
    "answer": "15",
    "hint": "h² = m · n.",
    "steps": [
      "Projeções \\(m\\) e \\(4m\\): \\(m \\cdot 4m = 36\\) ⇒ \\(4m^2 = 36\\) ⇒ \\(m = 3\\).",
      "Então \\(n = 12\\) e \\(a = 3 + 12 = 15\\)."
    ],
    "common": []
  },
  {
    "id": 101,
    "level": 8,
    "title": "Nível 8",
    "question": "No triângulo retângulo ABC, AB = 12 e BC = 15 (hipotenusa). Quanto mede BH, a projeção de AB sobre a hipotenusa? (Decimal.)",
    "answer": "48/5",
    "hint": "c² = a · m.",
    "steps": [
      "\\(c^2 = a \\cdot m\\) ⇒ \\(144 = 15m\\) ⇒ \\(m = 9{,}6\\)."
    ],
    "common": [],
    "answerText": "\\(\\dfrac{48}{5}\\)"
  },
  {
    "id": 102,
    "level": 8,
    "title": "Nível 8",
    "question": "Ponte para a trigonometria: o triângulo HBA é semelhante ao triângulo ABC com razão \\(\\dfrac{c}{a}\\). Se c = 6 e a = 10, qual é a razão entre a área de HBA e a área de ABC? (Decimal.)",
    "answer": "9/25",
    "hint": "Área × k².",
    "steps": [
      "\\(k = \\dfrac{6}{10} = 0{,}6\\).",
      "Áreas: \\(k^2 = 0{,}36\\)."
    ],
    "common": [
      {
        "value": "3/5",
        "message": "Esta é a razão dos lados. A razão das áreas é o quadrado dela."
      }
    ],
    "answerText": "\\(\\dfrac{9}{25}\\)"
  },
  {
    "id": 103,
    "level": 8,
    "title": "Nível 8",
    "question": "Um triângulo retângulo tem catetos 3 e 4. Outro triângulo retângulo tem um ângulo agudo igual ao menor ângulo do primeiro e hipotenusa 20. Quanto mede o cateto oposto a esse ângulo no segundo? (Pense: cateto oposto ao menor ângulo é o menor cateto, 3.)",
    "answer": "12",
    "hint": "k = 20 ÷ 5.",
    "steps": [
      "Os triângulos são semelhantes (AA).",
      "\\(k = \\dfrac{20}{5} = 4\\).",
      "Cateto oposto: \\(3 \\cdot 4 = 12\\). Note que \\(\\dfrac{3}{5} = \\dfrac{12}{20} = 0{,}6\\): a razão não depende do tamanho — é a ideia do seno!"
    ],
    "common": []
  }
] as const;
