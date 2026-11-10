export const geometricProgressionLevels = [
  {
    "level": 1,
    "name": "Reconhecendo uma P.G.",
    "description": "Dada uma sequência, decida se ela é ou não uma P.G.",
    "reminder": "Divida cada termo pelo anterior. Se o resultado for sempre o mesmo, é P.G.",
    "lesson": "l2"
  },
  {
    "level": 2,
    "name": "Calculando a razão",
    "description": "Descubra a razão \\(q\\) dividindo um termo pelo anterior.",
    "reminder": "\\(q = a_2 \\div a_1\\) (o da frente dividido pelo de trás).",
    "lesson": "l2"
  },
  {
    "level": 3,
    "name": "Continuando a sequência",
    "description": "Ainda sem fórmula: ache a razão e multiplique para continuar a P.G.",
    "reminder": "Cada termo é o anterior vezes \\(q\\).",
    "lesson": "l2"
  },
  {
    "level": 4,
    "name": "Termo geral — primeiros passos",
    "description": "Use \\(a_n = a_1 \\cdot q^{n-1}\\) com razão inteira positiva.",
    "reminder": "\\(a_n = a_1 \\cdot q^{\\,n-1}\\). Potência primeiro, depois multiplica.",
    "lesson": "l4"
  },
  {
    "level": 5,
    "name": "Termo geral — negativos e frações",
    "description": "A mesma fórmula, agora com razão negativa, fracionária ou primeiro termo negativo.",
    "reminder": "Razão negativa e fração entre parênteses. Expoente par → positivo; ímpar → negativo.",
    "lesson": "l4"
  },
  {
    "level": 6,
    "name": "Descobrindo a posição n",
    "description": "Que lugar um certo valor ocupa na P.G.?",
    "reminder": "Isole a potência (\\(a_n \\div a_1\\)), descubra o expoente e some 1.",
    "lesson": "l5"
  },
  {
    "level": 7,
    "name": "Descobrindo a₁ ou q",
    "description": "Isole o primeiro termo ou a razão na fórmula.",
    "reminder": "\\(a_1\\): divida por \\(q^{n-1}\\). \\(q\\): divida por \\(a_1\\) e extraia a raiz de índice \\(n-1\\).",
    "lesson": "l5"
  },
  {
    "level": 8,
    "name": "Interpolação geométrica",
    "description": "Inserir termos entre dois números dados.",
    "reminder": "Inserir \\(m\\) meios ⇒ \\(n = m + 2\\) termos, com \\(a_1 = A\\) e \\(a_n = B\\).",
    "lesson": "l6"
  },
  {
    "level": 9,
    "name": "Propriedades e termo médio",
    "description": "Use \\(b^2 = a \\cdot c\\) para achar valores desconhecidos.",
    "reminder": "Três termos seguidos \\(a, b, c\\): \\(b^2 = a \\cdot c\\).",
    "lesson": "l6"
  },
  {
    "level": 10,
    "name": "Soma dos n primeiros termos",
    "description": "Some sem listar os termos.",
    "reminder": "\\(S_n = \\dfrac{a_1 (q^n - 1)}{q - 1}\\). Se \\(q = 1\\): \\(S_n = n \\cdot a_1\\).",
    "lesson": "l7"
  },
  {
    "level": 11,
    "name": "Soma infinita e dízimas",
    "description": "Some infinitos termos quando \\(|q| < 1\\) e converta dízimas em frações.",
    "reminder": "\\(S = \\dfrac{a_1}{1 - q}\\) só quando \\(-1 < q < 1\\).",
    "lesson": "l8"
  },
  {
    "level": 12,
    "name": "Problemas do dia a dia",
    "description": "Traduza a história para \\(a_1\\), \\(q\\) e \\(n\\) e resolva.",
    "reminder": "Aumento de \\(i\\%\\) ⇒ \\(q = 1 + i\\). O valor inicial é \\(a_1\\); depois de \\(t\\) períodos é \\(a_{t+1}\\).",
    "lesson": "l9"
  },
  {
    "level": 13,
    "name": "Desafios finais",
    "description": "Problemas que combinam várias ideias do curso.",
    "reminder": "Escreva os dados, ache primeiro a razão e depois o que for pedido.",
    "lesson": "l10"
  }
] as const;

export const geometricProgressionExercises = [
  {
    "id": 1,
    "level": 1,
    "title": "Reconhecendo uma P.G.",
    "kind": "yn",
    "question": "A sequência \\((2,\\;6,\\;18,\\;54)\\) é uma P.G.?",
    "answer": "sim",
    "answerText": "Sim",
    "hint": "Divida o 2º termo pelo 1º, o 3º pelo 2º, e assim por diante. Os resultados são todos iguais?",
    "steps": [
      "A razão é o termo da frente dividido pelo termo de trás. Calcule em pelo menos dois pares seguidos.",
      "Divisões: \\(6 \\div 2 = 3;\\quad 18 \\div 6 = 3;\\quad 54 \\div 18 = 3\\).",
      "Todas deram \\(3\\): é uma P.G. de razão \\(q = 3\\) ✓."
    ]
  },
  {
    "id": 2,
    "level": 1,
    "title": "Reconhecendo uma P.G.",
    "kind": "yn",
    "question": "A sequência \\((5,\\;10,\\;15,\\;20)\\) é uma P.G.?",
    "answer": "não",
    "answerText": "Não",
    "hint": "Divida o 2º termo pelo 1º, o 3º pelo 2º, e assim por diante. Os resultados são todos iguais?",
    "steps": [
      "A razão é o termo da frente dividido pelo termo de trás. Calcule em pelo menos dois pares seguidos.",
      "Divisões: \\(10 \\div 5 = 2;\\quad 15 \\div 10 = \\frac{3}{2};\\quad 20 \\div 15 = \\frac{4}{3}\\).",
      "As divisões deram resultados diferentes, então não é uma P.G.",
      "Curiosidade: subtraindo termos vizinhos dá sempre \\(5\\) — é uma P.A. de razão \\(5\\), e não uma P.G."
    ]
  },
  {
    "id": 3,
    "level": 1,
    "title": "Reconhecendo uma P.G.",
    "kind": "yn",
    "question": "A sequência \\((3,\\;12,\\;48,\\;192)\\) é uma P.G.?",
    "answer": "sim",
    "answerText": "Sim",
    "hint": "Divida o 2º termo pelo 1º, o 3º pelo 2º, e assim por diante. Os resultados são todos iguais?",
    "steps": [
      "A razão é o termo da frente dividido pelo termo de trás. Calcule em pelo menos dois pares seguidos.",
      "Divisões: \\(12 \\div 3 = 4;\\quad 48 \\div 12 = 4;\\quad 192 \\div 48 = 4\\).",
      "Todas deram \\(4\\): é uma P.G. de razão \\(q = 4\\) ✓."
    ]
  },
  {
    "id": 4,
    "level": 1,
    "title": "Reconhecendo uma P.G.",
    "kind": "yn",
    "question": "A sequência \\((1,\\;2,\\;3,\\;4)\\) é uma P.G.?",
    "answer": "não",
    "answerText": "Não",
    "hint": "Divida o 2º termo pelo 1º, o 3º pelo 2º, e assim por diante. Os resultados são todos iguais?",
    "steps": [
      "A razão é o termo da frente dividido pelo termo de trás. Calcule em pelo menos dois pares seguidos.",
      "Divisões: \\(2 \\div 1 = 2;\\quad 3 \\div 2 = \\frac{3}{2};\\quad 4 \\div 3 = \\frac{4}{3}\\).",
      "As divisões deram resultados diferentes, então não é uma P.G.",
      "Curiosidade: subtraindo termos vizinhos dá sempre \\(1\\) — é uma P.A. de razão \\(1\\), e não uma P.G."
    ]
  },
  {
    "id": 5,
    "level": 1,
    "title": "Reconhecendo uma P.G.",
    "kind": "yn",
    "question": "A sequência \\((81,\\;27,\\;9,\\;3)\\) é uma P.G.?",
    "answer": "sim",
    "answerText": "Sim",
    "hint": "Divida o 2º termo pelo 1º, o 3º pelo 2º, e assim por diante. Os resultados são todos iguais?",
    "steps": [
      "A razão é o termo da frente dividido pelo termo de trás. Calcule em pelo menos dois pares seguidos.",
      "Divisões: \\(27 \\div 81 = \\frac{1}{3};\\quad 9 \\div 27 = \\frac{1}{3};\\quad 3 \\div 9 = \\frac{1}{3}\\).",
      "Todas deram \\(\\frac{1}{3}\\): é uma P.G. de razão \\(q = \\frac{1}{3}\\) ✓."
    ]
  },
  {
    "id": 6,
    "level": 1,
    "title": "Reconhecendo uma P.G.",
    "kind": "yn",
    "question": "A sequência \\((7,\\;7,\\;7,\\;7)\\) é uma P.G.?",
    "answer": "sim",
    "answerText": "Sim",
    "hint": "Divida o 2º termo pelo 1º, o 3º pelo 2º, e assim por diante. Os resultados são todos iguais?",
    "steps": [
      "A razão é o termo da frente dividido pelo termo de trás. Calcule em pelo menos dois pares seguidos.",
      "Divisões: \\(7 \\div 7 = 1;\\quad 7 \\div 7 = 1;\\quad 7 \\div 7 = 1\\).",
      "Todas deram \\(1\\): é uma P.G. de razão \\(q = 1\\) ✓."
    ]
  },
  {
    "id": 7,
    "level": 1,
    "title": "Reconhecendo uma P.G.",
    "kind": "yn",
    "question": "A sequência \\((1,\\;2,\\;4,\\;7)\\) é uma P.G.?",
    "answer": "não",
    "answerText": "Não",
    "hint": "Divida o 2º termo pelo 1º, o 3º pelo 2º, e assim por diante. Os resultados são todos iguais?",
    "steps": [
      "A razão é o termo da frente dividido pelo termo de trás. Calcule em pelo menos dois pares seguidos.",
      "Divisões: \\(2 \\div 1 = 2;\\quad 4 \\div 2 = 2;\\quad 7 \\div 4 = \\frac{7}{4}\\).",
      "As divisões deram resultados diferentes, então não é uma P.G."
    ]
  },
  {
    "id": 8,
    "level": 1,
    "title": "Reconhecendo uma P.G.",
    "kind": "yn",
    "question": "A sequência \\((2,\\;-6,\\;18,\\;-54)\\) é uma P.G.?",
    "answer": "sim",
    "answerText": "Sim",
    "hint": "Divida o 2º termo pelo 1º, o 3º pelo 2º, e assim por diante. Os resultados são todos iguais?",
    "steps": [
      "A razão é o termo da frente dividido pelo termo de trás. Calcule em pelo menos dois pares seguidos.",
      "Divisões: \\(-6 \\div 2 = -3;\\quad 18 \\div \\left(-6\\right) = -3;\\quad -54 \\div 18 = -3\\).",
      "Todas deram \\(-3\\): é uma P.G. de razão \\(q = -3\\) ✓."
    ]
  },
  {
    "id": 9,
    "level": 2,
    "title": "Calculando a razão",
    "kind": "num",
    "question": "Qual é a razão \\(q\\) da P.G. \\((2,\\;6,\\;18,\\;\\ldots)\\)?",
    "answer": "3",
    "hint": "Divida o segundo termo pelo primeiro (o da frente ÷ o de trás).",
    "steps": [
      "A razão é o termo da frente dividido pelo termo de trás. Calcule em pelo menos dois pares seguidos.",
      "Divisões: \\(6 \\div 2 = 3;\\quad 18 \\div 6 = 3\\).",
      "Todas deram \\(3\\): é uma P.G. de razão \\(q = 3\\) ✓."
    ]
  },
  {
    "id": 10,
    "level": 2,
    "title": "Calculando a razão",
    "kind": "num",
    "question": "Qual é a razão \\(q\\) da P.G. \\((3,\\;12,\\;48,\\;\\ldots)\\)?",
    "answer": "4",
    "hint": "Divida o segundo termo pelo primeiro (o da frente ÷ o de trás).",
    "steps": [
      "A razão é o termo da frente dividido pelo termo de trás. Calcule em pelo menos dois pares seguidos.",
      "Divisões: \\(12 \\div 3 = 4;\\quad 48 \\div 12 = 4\\).",
      "Todas deram \\(4\\): é uma P.G. de razão \\(q = 4\\) ✓."
    ]
  },
  {
    "id": 11,
    "level": 2,
    "title": "Calculando a razão",
    "kind": "num",
    "question": "Qual é a razão \\(q\\) da P.G. \\((1,\\;5,\\;25,\\;\\ldots)\\)?",
    "answer": "5",
    "hint": "Divida o segundo termo pelo primeiro (o da frente ÷ o de trás).",
    "steps": [
      "A razão é o termo da frente dividido pelo termo de trás. Calcule em pelo menos dois pares seguidos.",
      "Divisões: \\(5 \\div 1 = 5;\\quad 25 \\div 5 = 5\\).",
      "Todas deram \\(5\\): é uma P.G. de razão \\(q = 5\\) ✓."
    ]
  },
  {
    "id": 12,
    "level": 2,
    "title": "Calculando a razão",
    "kind": "num",
    "question": "Qual é a razão \\(q\\) da P.G. \\((4,\\;8,\\;16,\\;\\ldots)\\)?",
    "answer": "2",
    "hint": "Divida o segundo termo pelo primeiro (o da frente ÷ o de trás).",
    "steps": [
      "A razão é o termo da frente dividido pelo termo de trás. Calcule em pelo menos dois pares seguidos.",
      "Divisões: \\(8 \\div 4 = 2;\\quad 16 \\div 8 = 2\\).",
      "Todas deram \\(2\\): é uma P.G. de razão \\(q = 2\\) ✓."
    ]
  },
  {
    "id": 13,
    "level": 2,
    "title": "Calculando a razão",
    "kind": "num",
    "question": "Qual é a razão \\(q\\) da P.G. \\((5,\\;50,\\;500,\\;\\ldots)\\)?",
    "answer": "10",
    "hint": "Divida o segundo termo pelo primeiro (o da frente ÷ o de trás).",
    "steps": [
      "A razão é o termo da frente dividido pelo termo de trás. Calcule em pelo menos dois pares seguidos.",
      "Divisões: \\(50 \\div 5 = 10;\\quad 500 \\div 50 = 10\\).",
      "Todas deram \\(10\\): é uma P.G. de razão \\(q = 10\\) ✓."
    ]
  },
  {
    "id": 14,
    "level": 2,
    "title": "Calculando a razão",
    "kind": "num",
    "question": "Qual é a razão \\(q\\) da P.G. \\((7,\\;14,\\;28,\\;\\ldots)\\)?",
    "answer": "2",
    "hint": "Divida o segundo termo pelo primeiro (o da frente ÷ o de trás).",
    "steps": [
      "A razão é o termo da frente dividido pelo termo de trás. Calcule em pelo menos dois pares seguidos.",
      "Divisões: \\(14 \\div 7 = 2;\\quad 28 \\div 14 = 2\\).",
      "Todas deram \\(2\\): é uma P.G. de razão \\(q = 2\\) ✓."
    ]
  },
  {
    "id": 15,
    "level": 2,
    "title": "Calculando a razão",
    "kind": "num",
    "question": "Qual é a razão \\(q\\) da P.G. \\((10,\\;30,\\;90,\\;\\ldots)\\)?",
    "answer": "3",
    "hint": "Divida o segundo termo pelo primeiro (o da frente ÷ o de trás).",
    "steps": [
      "A razão é o termo da frente dividido pelo termo de trás. Calcule em pelo menos dois pares seguidos.",
      "Divisões: \\(30 \\div 10 = 3;\\quad 90 \\div 30 = 3\\).",
      "Todas deram \\(3\\): é uma P.G. de razão \\(q = 3\\) ✓."
    ]
  },
  {
    "id": 16,
    "level": 2,
    "title": "Calculando a razão",
    "kind": "num",
    "question": "Qual é a razão \\(q\\) da P.G. \\((6,\\;36,\\;216,\\;\\ldots)\\)?",
    "answer": "6",
    "hint": "Divida o segundo termo pelo primeiro (o da frente ÷ o de trás).",
    "steps": [
      "A razão é o termo da frente dividido pelo termo de trás. Calcule em pelo menos dois pares seguidos.",
      "Divisões: \\(36 \\div 6 = 6;\\quad 216 \\div 36 = 6\\).",
      "Todas deram \\(6\\): é uma P.G. de razão \\(q = 6\\) ✓."
    ]
  },
  {
    "id": 17,
    "level": 3,
    "title": "Continuando a sequência",
    "kind": "num",
    "question": "Complete a P.G. \\((2,\\;4,\\;8,\\;?)\\). Qual é o número que falta?",
    "answer": "16",
    "hint": "Ache a razão e multiplique o último termo por ela.",
    "steps": [
      "Descubra a razão dividindo o 2º termo pelo 1º: \\(4 \\div 2 = 2\\).",
      "Confirme com o próximo par: \\(8 \\div 4 = 2\\) ✓.",
      "Multiplique o último termo pela razão: \\(8 \\cdot 2 = 16\\)."
    ]
  },
  {
    "id": 18,
    "level": 3,
    "title": "Continuando a sequência",
    "kind": "num",
    "question": "Complete a P.G. \\((3,\\;9,\\;27,\\;?)\\). Qual é o número que falta?",
    "answer": "81",
    "hint": "Ache a razão e multiplique o último termo por ela.",
    "steps": [
      "Descubra a razão dividindo o 2º termo pelo 1º: \\(9 \\div 3 = 3\\).",
      "Confirme com o próximo par: \\(27 \\div 9 = 3\\) ✓.",
      "Multiplique o último termo pela razão: \\(27 \\cdot 3 = 81\\)."
    ]
  },
  {
    "id": 19,
    "level": 3,
    "title": "Continuando a sequência",
    "kind": "num",
    "question": "Complete a P.G. \\((5,\\;10,\\;20,\\;?)\\). Qual é o número que falta?",
    "answer": "40",
    "hint": "Ache a razão e multiplique o último termo por ela.",
    "steps": [
      "Descubra a razão dividindo o 2º termo pelo 1º: \\(10 \\div 5 = 2\\).",
      "Confirme com o próximo par: \\(20 \\div 10 = 2\\) ✓.",
      "Multiplique o último termo pela razão: \\(20 \\cdot 2 = 40\\)."
    ]
  },
  {
    "id": 20,
    "level": 3,
    "title": "Continuando a sequência",
    "kind": "num",
    "question": "Complete a P.G. \\((2,\\;6,\\;18,\\;?)\\). Qual é o número que falta?",
    "answer": "54",
    "hint": "Ache a razão e multiplique o último termo por ela.",
    "steps": [
      "Descubra a razão dividindo o 2º termo pelo 1º: \\(6 \\div 2 = 3\\).",
      "Confirme com o próximo par: \\(18 \\div 6 = 3\\) ✓.",
      "Multiplique o último termo pela razão: \\(18 \\cdot 3 = 54\\)."
    ]
  },
  {
    "id": 21,
    "level": 3,
    "title": "Continuando a sequência",
    "kind": "num",
    "question": "Complete a P.G. \\((1,\\;10,\\;100,\\;?)\\). Qual é o número que falta?",
    "answer": "1000",
    "hint": "Ache a razão e multiplique o último termo por ela.",
    "steps": [
      "Descubra a razão dividindo o 2º termo pelo 1º: \\(10 \\div 1 = 10\\).",
      "Confirme com o próximo par: \\(100 \\div 10 = 10\\) ✓.",
      "Multiplique o último termo pela razão: \\(100 \\cdot 10 = 1000\\)."
    ]
  },
  {
    "id": 22,
    "level": 3,
    "title": "Continuando a sequência",
    "kind": "num",
    "question": "Uma P.G. tem \\(a_1 = 2\\) e \\(q = 3\\). Escrevendo os termos um a um, qual é o \\(a_{5}\\)?",
    "answer": "162",
    "hint": "Multiplique por q de termo em termo, até chegar na posição pedida.",
    "steps": [
      "Comece com \\(a_1 = 2\\).",
      "\\(a_{2} = a_{1} \\cdot q = 2 \\cdot 3 = 6\\).",
      "\\(a_{3} = a_{2} \\cdot q = 6 \\cdot 3 = 18\\).",
      "\\(a_{4} = a_{3} \\cdot q = 18 \\cdot 3 = 54\\).",
      "\\(a_{5} = a_{4} \\cdot q = 54 \\cdot 3 = 162\\)."
    ]
  },
  {
    "id": 23,
    "level": 3,
    "title": "Continuando a sequência",
    "kind": "num",
    "question": "Uma P.G. tem \\(a_1 = 5\\) e \\(q = 2\\). Escrevendo os termos um a um, qual é o \\(a_{5}\\)?",
    "answer": "80",
    "hint": "Multiplique por q de termo em termo, até chegar na posição pedida.",
    "steps": [
      "Comece com \\(a_1 = 5\\).",
      "\\(a_{2} = a_{1} \\cdot q = 5 \\cdot 2 = 10\\).",
      "\\(a_{3} = a_{2} \\cdot q = 10 \\cdot 2 = 20\\).",
      "\\(a_{4} = a_{3} \\cdot q = 20 \\cdot 2 = 40\\).",
      "\\(a_{5} = a_{4} \\cdot q = 40 \\cdot 2 = 80\\)."
    ]
  },
  {
    "id": 24,
    "level": 3,
    "title": "Continuando a sequência",
    "kind": "num",
    "question": "Uma P.G. tem \\(a_1 = 1\\) e \\(q = 4\\). Escrevendo os termos um a um, qual é o \\(a_{4}\\)?",
    "answer": "64",
    "hint": "Multiplique por q de termo em termo, até chegar na posição pedida.",
    "steps": [
      "Comece com \\(a_1 = 1\\).",
      "\\(a_{2} = a_{1} \\cdot q = 1 \\cdot 4 = 4\\).",
      "\\(a_{3} = a_{2} \\cdot q = 4 \\cdot 4 = 16\\).",
      "\\(a_{4} = a_{3} \\cdot q = 16 \\cdot 4 = 64\\)."
    ]
  },
  {
    "id": 25,
    "level": 4,
    "title": "Termo geral — primeiros passos",
    "kind": "num",
    "question": "Qual é o \\(a_{4}\\) da P.G. com \\(a_1 = 2\\) e \\(q = 3\\)?",
    "answer": "54",
    "hint": "Use \\(a_n = a_1 \\cdot q^{\\,n-1}\\). O expoente é \\(n - 1 = 3\\). Calcule a potência antes de multiplicar.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 2\\), \\(q = 3\\) e \\(n = 4\\). Queremos \\(a_{4}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{4} = 2 \\cdot 3^{\\,4-1}\\).",
      "Calcule o expoente: \\(4 - 1 = 3\\). Fica \\(a_{4} = 2 \\cdot 3^{3}\\).",
      "Calcule a potência multiplicando um a um: \\(3^{3} = 3 \\cdot 3 \\cdot 3 = 27\\).",
      "Multiplique pelo primeiro termo: \\(a_{4} = 2 \\cdot 27 = 54\\).",
      "Conferência: listando os termos, \\(2,\\;6,\\;18,\\;54\\). O 4º termo é \\(54\\) ✓."
    ],
    "common": [
      {
        "value": "162",
        "message": "Você usou o expoente n; o correto é n − 1 (para chegar ao termo n você dá n − 1 saltos)."
      }
    ]
  },
  {
    "id": 26,
    "level": 4,
    "title": "Termo geral — primeiros passos",
    "kind": "num",
    "question": "Qual é o \\(a_{5}\\) da P.G. com \\(a_1 = 3\\) e \\(q = 2\\)?",
    "answer": "48",
    "hint": "Use \\(a_n = a_1 \\cdot q^{\\,n-1}\\). O expoente é \\(n - 1 = 4\\). Calcule a potência antes de multiplicar.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 3\\), \\(q = 2\\) e \\(n = 5\\). Queremos \\(a_{5}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{5} = 3 \\cdot 2^{\\,5-1}\\).",
      "Calcule o expoente: \\(5 - 1 = 4\\). Fica \\(a_{5} = 3 \\cdot 2^{4}\\).",
      "Calcule a potência multiplicando um a um: \\(2^{4} = 2 \\cdot 2 \\cdot 2 \\cdot 2 = 16\\).",
      "Multiplique pelo primeiro termo: \\(a_{5} = 3 \\cdot 16 = 48\\).",
      "Conferência: listando os termos, \\(3,\\;6,\\;12,\\;24,\\;48\\). O 5º termo é \\(48\\) ✓."
    ],
    "common": [
      {
        "value": "96",
        "message": "Você usou o expoente n; o correto é n − 1 (para chegar ao termo n você dá n − 1 saltos)."
      }
    ]
  },
  {
    "id": 27,
    "level": 4,
    "title": "Termo geral — primeiros passos",
    "kind": "num",
    "question": "Qual é o \\(a_{4}\\) da P.G. com \\(a_1 = 1\\) e \\(q = 5\\)?",
    "answer": "125",
    "hint": "Use \\(a_n = a_1 \\cdot q^{\\,n-1}\\). O expoente é \\(n - 1 = 3\\). Calcule a potência antes de multiplicar.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 1\\), \\(q = 5\\) e \\(n = 4\\). Queremos \\(a_{4}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{4} = 1 \\cdot 5^{\\,4-1}\\).",
      "Calcule o expoente: \\(4 - 1 = 3\\). Fica \\(a_{4} = 1 \\cdot 5^{3}\\).",
      "Calcule a potência multiplicando um a um: \\(5^{3} = 5 \\cdot 5 \\cdot 5 = 125\\).",
      "Multiplique pelo primeiro termo: \\(a_{4} = 1 \\cdot 125 = 125\\).",
      "Conferência: listando os termos, \\(1,\\;5,\\;25,\\;125\\). O 4º termo é \\(125\\) ✓."
    ],
    "common": [
      {
        "value": "625",
        "message": "Você usou o expoente n; o correto é n − 1 (para chegar ao termo n você dá n − 1 saltos)."
      }
    ]
  },
  {
    "id": 28,
    "level": 4,
    "title": "Termo geral — primeiros passos",
    "kind": "num",
    "question": "Qual é o \\(a_{6}\\) da P.G. com \\(a_1 = 4\\) e \\(q = 2\\)?",
    "answer": "128",
    "hint": "Use \\(a_n = a_1 \\cdot q^{\\,n-1}\\). O expoente é \\(n - 1 = 5\\). Calcule a potência antes de multiplicar.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 4\\), \\(q = 2\\) e \\(n = 6\\). Queremos \\(a_{6}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{6} = 4 \\cdot 2^{\\,6-1}\\).",
      "Calcule o expoente: \\(6 - 1 = 5\\). Fica \\(a_{6} = 4 \\cdot 2^{5}\\).",
      "Calcule a potência multiplicando um a um: \\(2^{5} = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32\\).",
      "Multiplique pelo primeiro termo: \\(a_{6} = 4 \\cdot 32 = 128\\).",
      "Conferência: listando os termos, \\(4,\\;8,\\;16,\\;32,\\;64,\\;128\\). O 6º termo é \\(128\\) ✓."
    ],
    "common": [
      {
        "value": "256",
        "message": "Você usou o expoente n; o correto é n − 1 (para chegar ao termo n você dá n − 1 saltos)."
      }
    ]
  },
  {
    "id": 29,
    "level": 4,
    "title": "Termo geral — primeiros passos",
    "kind": "num",
    "question": "Qual é o \\(a_{3}\\) da P.G. com \\(a_1 = 5\\) e \\(q = 3\\)?",
    "answer": "45",
    "hint": "Use \\(a_n = a_1 \\cdot q^{\\,n-1}\\). O expoente é \\(n - 1 = 2\\). Calcule a potência antes de multiplicar.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 5\\), \\(q = 3\\) e \\(n = 3\\). Queremos \\(a_{3}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{3} = 5 \\cdot 3^{\\,3-1}\\).",
      "Calcule o expoente: \\(3 - 1 = 2\\). Fica \\(a_{3} = 5 \\cdot 3^{2}\\).",
      "Calcule a potência multiplicando um a um: \\(3^{2} = 3 \\cdot 3 = 9\\).",
      "Multiplique pelo primeiro termo: \\(a_{3} = 5 \\cdot 9 = 45\\).",
      "Conferência: listando os termos, \\(5,\\;15,\\;45\\). O 3º termo é \\(45\\) ✓."
    ],
    "common": [
      {
        "value": "135",
        "message": "Você usou o expoente n; o correto é n − 1 (para chegar ao termo n você dá n − 1 saltos)."
      }
    ]
  },
  {
    "id": 30,
    "level": 4,
    "title": "Termo geral — primeiros passos",
    "kind": "num",
    "question": "Qual é o \\(a_{5}\\) da P.G. com \\(a_1 = 2\\) e \\(q = 4\\)?",
    "answer": "512",
    "hint": "Use \\(a_n = a_1 \\cdot q^{\\,n-1}\\). O expoente é \\(n - 1 = 4\\). Calcule a potência antes de multiplicar.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 2\\), \\(q = 4\\) e \\(n = 5\\). Queremos \\(a_{5}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{5} = 2 \\cdot 4^{\\,5-1}\\).",
      "Calcule o expoente: \\(5 - 1 = 4\\). Fica \\(a_{5} = 2 \\cdot 4^{4}\\).",
      "Calcule a potência multiplicando um a um: \\(4^{4} = 4 \\cdot 4 \\cdot 4 \\cdot 4 = 256\\).",
      "Multiplique pelo primeiro termo: \\(a_{5} = 2 \\cdot 256 = 512\\).",
      "Conferência: listando os termos, \\(2,\\;8,\\;32,\\;128,\\;512\\). O 5º termo é \\(512\\) ✓."
    ],
    "common": [
      {
        "value": "2048",
        "message": "Você usou o expoente n; o correto é n − 1 (para chegar ao termo n você dá n − 1 saltos)."
      }
    ]
  },
  {
    "id": 31,
    "level": 4,
    "title": "Termo geral — primeiros passos",
    "kind": "num",
    "question": "Qual é o \\(a_{4}\\) da P.G. com \\(a_1 = 7\\) e \\(q = 2\\)?",
    "answer": "56",
    "hint": "Use \\(a_n = a_1 \\cdot q^{\\,n-1}\\). O expoente é \\(n - 1 = 3\\). Calcule a potência antes de multiplicar.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 7\\), \\(q = 2\\) e \\(n = 4\\). Queremos \\(a_{4}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{4} = 7 \\cdot 2^{\\,4-1}\\).",
      "Calcule o expoente: \\(4 - 1 = 3\\). Fica \\(a_{4} = 7 \\cdot 2^{3}\\).",
      "Calcule a potência multiplicando um a um: \\(2^{3} = 2 \\cdot 2 \\cdot 2 = 8\\).",
      "Multiplique pelo primeiro termo: \\(a_{4} = 7 \\cdot 8 = 56\\).",
      "Conferência: listando os termos, \\(7,\\;14,\\;28,\\;56\\). O 4º termo é \\(56\\) ✓."
    ],
    "common": [
      {
        "value": "112",
        "message": "Você usou o expoente n; o correto é n − 1 (para chegar ao termo n você dá n − 1 saltos)."
      }
    ]
  },
  {
    "id": 32,
    "level": 4,
    "title": "Termo geral — primeiros passos",
    "kind": "num",
    "question": "Qual é o \\(a_{7}\\) da P.G. com \\(a_1 = 1\\) e \\(q = 3\\)?",
    "answer": "729",
    "hint": "Use \\(a_n = a_1 \\cdot q^{\\,n-1}\\). O expoente é \\(n - 1 = 6\\). Calcule a potência antes de multiplicar.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 1\\), \\(q = 3\\) e \\(n = 7\\). Queremos \\(a_{7}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{7} = 1 \\cdot 3^{\\,7-1}\\).",
      "Calcule o expoente: \\(7 - 1 = 6\\). Fica \\(a_{7} = 1 \\cdot 3^{6}\\).",
      "Calcule a potência multiplicando um a um: \\(3^{6} = 3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 = 729\\).",
      "Multiplique pelo primeiro termo: \\(a_{7} = 1 \\cdot 729 = 729\\).",
      "Conferência: listando os termos, \\(1,\\;3,\\;9,\\;27,\\;81,\\;243,\\;729\\). O 7º termo é \\(729\\) ✓."
    ],
    "common": [
      {
        "value": "2187",
        "message": "Você usou o expoente n; o correto é n − 1 (para chegar ao termo n você dá n − 1 saltos)."
      }
    ]
  },
  {
    "id": 33,
    "level": 5,
    "title": "Termo geral — negativos e frações",
    "kind": "num",
    "question": "Qual é o \\(a_{5}\\) da P.G. com \\(a_1 = 3\\) e \\(q = -2\\)?",
    "answer": "48",
    "hint": "Use \\(a_n = a_1 \\cdot q^{\\,n-1}\\). O expoente é \\(n - 1 = 4\\). Calcule a potência antes de multiplicar.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 3\\), \\(q = -2\\) e \\(n = 5\\). Queremos \\(a_{5}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{5} = 3 \\cdot \\left(-2\\right)^{\\,5-1}\\).",
      "Calcule o expoente: \\(5 - 1 = 4\\). Fica \\(a_{5} = 3 \\cdot \\left(-2\\right)^{4}\\).",
      "Calcule a potência multiplicando um a um: \\(\\left(-2\\right)^{4} = \\left(-2\\right) \\cdot \\left(-2\\right) \\cdot \\left(-2\\right) \\cdot \\left(-2\\right) = 16\\). Como o expoente é par, o resultado fica positivo.",
      "Multiplique pelo primeiro termo: \\(a_{5} = 3 \\cdot 16 = 48\\).",
      "Conferência: listando os termos, \\(3,\\;-6,\\;12,\\;-24,\\;48\\). O 5º termo é \\(48\\) ✓."
    ],
    "common": [
      {
        "value": "-96",
        "message": "Você usou o expoente n; o correto é n − 1 (para chegar ao termo n você dá n − 1 saltos)."
      }
    ]
  },
  {
    "id": 34,
    "level": 5,
    "title": "Termo geral — negativos e frações",
    "kind": "num",
    "question": "Qual é o \\(a_{4}\\) da P.G. com \\(a_1 = 2\\) e \\(q = -3\\)?",
    "answer": "-54",
    "hint": "Use \\(a_n = a_1 \\cdot q^{\\,n-1}\\). O expoente é \\(n - 1 = 3\\). Calcule a potência antes de multiplicar.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 2\\), \\(q = -3\\) e \\(n = 4\\). Queremos \\(a_{4}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{4} = 2 \\cdot \\left(-3\\right)^{\\,4-1}\\).",
      "Calcule o expoente: \\(4 - 1 = 3\\). Fica \\(a_{4} = 2 \\cdot \\left(-3\\right)^{3}\\).",
      "Calcule a potência multiplicando um a um: \\(\\left(-3\\right)^{3} = \\left(-3\\right) \\cdot \\left(-3\\right) \\cdot \\left(-3\\right) = -27\\). Como o expoente é ímpar, o resultado fica negativo.",
      "Multiplique pelo primeiro termo: \\(a_{4} = 2 \\cdot \\left(-27\\right) = -54\\).",
      "Conferência: listando os termos, \\(2,\\;-6,\\;18,\\;-54\\). O 4º termo é \\(-54\\) ✓."
    ],
    "common": [
      {
        "value": "162",
        "message": "Você usou o expoente n; o correto é n − 1 (para chegar ao termo n você dá n − 1 saltos)."
      }
    ]
  },
  {
    "id": 35,
    "level": 5,
    "title": "Termo geral — negativos e frações",
    "kind": "num",
    "question": "Qual é o \\(a_{4}\\) da P.G. com \\(a_1 = -5\\) e \\(q = 2\\)?",
    "answer": "-40",
    "hint": "Use \\(a_n = a_1 \\cdot q^{\\,n-1}\\). O expoente é \\(n - 1 = 3\\). Calcule a potência antes de multiplicar.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = -5\\), \\(q = 2\\) e \\(n = 4\\). Queremos \\(a_{4}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{4} = -5 \\cdot 2^{\\,4-1}\\).",
      "Calcule o expoente: \\(4 - 1 = 3\\). Fica \\(a_{4} = -5 \\cdot 2^{3}\\).",
      "Calcule a potência multiplicando um a um: \\(2^{3} = 2 \\cdot 2 \\cdot 2 = 8\\).",
      "Multiplique pelo primeiro termo: \\(a_{4} = -5 \\cdot 8 = -40\\).",
      "Conferência: listando os termos, \\(-5,\\;-10,\\;-20,\\;-40\\). O 4º termo é \\(-40\\) ✓."
    ],
    "common": [
      {
        "value": "-80",
        "message": "Você usou o expoente n; o correto é n − 1 (para chegar ao termo n você dá n − 1 saltos)."
      }
    ]
  },
  {
    "id": 36,
    "level": 5,
    "title": "Termo geral — negativos e frações",
    "kind": "num",
    "question": "Qual é o \\(a_{3}\\) da P.G. com \\(a_1 = -2\\) e \\(q = -3\\)?",
    "answer": "-18",
    "hint": "Use \\(a_n = a_1 \\cdot q^{\\,n-1}\\). O expoente é \\(n - 1 = 2\\). Calcule a potência antes de multiplicar.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = -2\\), \\(q = -3\\) e \\(n = 3\\). Queremos \\(a_{3}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{3} = -2 \\cdot \\left(-3\\right)^{\\,3-1}\\).",
      "Calcule o expoente: \\(3 - 1 = 2\\). Fica \\(a_{3} = -2 \\cdot \\left(-3\\right)^{2}\\).",
      "Calcule a potência multiplicando um a um: \\(\\left(-3\\right)^{2} = \\left(-3\\right) \\cdot \\left(-3\\right) = 9\\). Como o expoente é par, o resultado fica positivo.",
      "Multiplique pelo primeiro termo: \\(a_{3} = -2 \\cdot 9 = -18\\).",
      "Conferência: listando os termos, \\(-2,\\;6,\\;-18\\). O 3º termo é \\(-18\\) ✓."
    ],
    "common": [
      {
        "value": "54",
        "message": "Você usou o expoente n; o correto é n − 1 (para chegar ao termo n você dá n − 1 saltos)."
      }
    ]
  },
  {
    "id": 37,
    "level": 5,
    "title": "Termo geral — negativos e frações",
    "kind": "num",
    "question": "Qual é o \\(a_{5}\\) da P.G. com \\(a_1 = 64\\) e \\(q = \\frac{1}{2}\\)?",
    "answer": "4",
    "hint": "Use \\(a_n = a_1 \\cdot q^{\\,n-1}\\). O expoente é \\(n - 1 = 4\\). Calcule a potência antes de multiplicar.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 64\\), \\(q = \\frac{1}{2}\\) e \\(n = 5\\). Queremos \\(a_{5}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{5} = 64 \\cdot \\left(\\frac{1}{2}\\right)^{\\,5-1}\\).",
      "Calcule o expoente: \\(5 - 1 = 4\\). Fica \\(a_{5} = 64 \\cdot \\left(\\frac{1}{2}\\right)^{4}\\).",
      "Calcule a potência multiplicando um a um: \\(\\left(\\frac{1}{2}\\right)^{4} = \\left(\\frac{1}{2}\\right) \\cdot \\left(\\frac{1}{2}\\right) \\cdot \\left(\\frac{1}{2}\\right) \\cdot \\left(\\frac{1}{2}\\right) = \\frac{1}{16}\\).",
      "Multiplique pelo primeiro termo: \\(a_{5} = 64 \\cdot \\left(\\frac{1}{16}\\right) = 4\\).",
      "Conferência: listando os termos, \\(64,\\;32,\\;16,\\;8,\\;4\\). O 5º termo é \\(4\\) ✓."
    ],
    "common": [
      {
        "value": "2",
        "message": "Você usou o expoente n; o correto é n − 1 (para chegar ao termo n você dá n − 1 saltos)."
      }
    ]
  },
  {
    "id": 38,
    "level": 5,
    "title": "Termo geral — negativos e frações",
    "kind": "num",
    "question": "Qual é o \\(a_{4}\\) da P.G. com \\(a_1 = 81\\) e \\(q = \\frac{1}{3}\\)?",
    "answer": "3",
    "hint": "Use \\(a_n = a_1 \\cdot q^{\\,n-1}\\). O expoente é \\(n - 1 = 3\\). Calcule a potência antes de multiplicar.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 81\\), \\(q = \\frac{1}{3}\\) e \\(n = 4\\). Queremos \\(a_{4}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{4} = 81 \\cdot \\left(\\frac{1}{3}\\right)^{\\,4-1}\\).",
      "Calcule o expoente: \\(4 - 1 = 3\\). Fica \\(a_{4} = 81 \\cdot \\left(\\frac{1}{3}\\right)^{3}\\).",
      "Calcule a potência multiplicando um a um: \\(\\left(\\frac{1}{3}\\right)^{3} = \\left(\\frac{1}{3}\\right) \\cdot \\left(\\frac{1}{3}\\right) \\cdot \\left(\\frac{1}{3}\\right) = \\frac{1}{27}\\).",
      "Multiplique pelo primeiro termo: \\(a_{4} = 81 \\cdot \\left(\\frac{1}{27}\\right) = 3\\).",
      "Conferência: listando os termos, \\(81,\\;27,\\;9,\\;3\\). O 4º termo é \\(3\\) ✓."
    ],
    "common": [
      {
        "value": "1",
        "message": "Você usou o expoente n; o correto é n − 1 (para chegar ao termo n você dá n − 1 saltos)."
      }
    ]
  },
  {
    "id": 39,
    "level": 5,
    "title": "Termo geral — negativos e frações",
    "kind": "num",
    "question": "Qual é o \\(a_{4}\\) da P.G. com \\(a_1 = 16\\) e \\(q = -\\frac{1}{2}\\)?",
    "answer": "-2",
    "hint": "Use \\(a_n = a_1 \\cdot q^{\\,n-1}\\). O expoente é \\(n - 1 = 3\\). Calcule a potência antes de multiplicar.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 16\\), \\(q = -\\frac{1}{2}\\) e \\(n = 4\\). Queremos \\(a_{4}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{4} = 16 \\cdot \\left(-\\frac{1}{2}\\right)^{\\,4-1}\\).",
      "Calcule o expoente: \\(4 - 1 = 3\\). Fica \\(a_{4} = 16 \\cdot \\left(-\\frac{1}{2}\\right)^{3}\\).",
      "Calcule a potência multiplicando um a um: \\(\\left(-\\frac{1}{2}\\right)^{3} = \\left(-\\frac{1}{2}\\right) \\cdot \\left(-\\frac{1}{2}\\right) \\cdot \\left(-\\frac{1}{2}\\right) = -\\frac{1}{8}\\). Como o expoente é ímpar, o resultado fica negativo.",
      "Multiplique pelo primeiro termo: \\(a_{4} = 16 \\cdot \\left(-\\frac{1}{8}\\right) = -2\\).",
      "Conferência: listando os termos, \\(16,\\;-8,\\;4,\\;-2\\). O 4º termo é \\(-2\\) ✓."
    ],
    "common": [
      {
        "value": "1",
        "message": "Você usou o expoente n; o correto é n − 1 (para chegar ao termo n você dá n − 1 saltos)."
      }
    ]
  },
  {
    "id": 40,
    "level": 5,
    "title": "Termo geral — negativos e frações",
    "kind": "num",
    "question": "Qual é o \\(a_{3}\\) da P.G. com \\(a_1 = 8\\) e \\(q = \\frac{3}{2}\\)?",
    "answer": "18",
    "hint": "Use \\(a_n = a_1 \\cdot q^{\\,n-1}\\). O expoente é \\(n - 1 = 2\\). Calcule a potência antes de multiplicar.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 8\\), \\(q = \\frac{3}{2}\\) e \\(n = 3\\). Queremos \\(a_{3}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{3} = 8 \\cdot \\left(\\frac{3}{2}\\right)^{\\,3-1}\\).",
      "Calcule o expoente: \\(3 - 1 = 2\\). Fica \\(a_{3} = 8 \\cdot \\left(\\frac{3}{2}\\right)^{2}\\).",
      "Calcule a potência multiplicando um a um: \\(\\left(\\frac{3}{2}\\right)^{2} = \\left(\\frac{3}{2}\\right) \\cdot \\left(\\frac{3}{2}\\right) = \\frac{9}{4}\\).",
      "Multiplique pelo primeiro termo: \\(a_{3} = 8 \\cdot \\left(\\frac{9}{4}\\right) = 18\\).",
      "Conferência: listando os termos, \\(8,\\;12,\\;18\\). O 3º termo é \\(18\\) ✓."
    ],
    "common": [
      {
        "value": "27",
        "message": "Você usou o expoente n; o correto é n − 1 (para chegar ao termo n você dá n − 1 saltos)."
      }
    ]
  },
  {
    "id": 41,
    "level": 6,
    "title": "Descobrindo a posição n",
    "kind": "num",
    "question": "Em uma P.G. com \\(a_1 = 2\\) e \\(q = 3\\), qual é a posição \\(n\\) do termo que vale \\(162\\)?",
    "answer": "5",
    "hint": "Divida \\(162\\) por \\(2\\) e descubra a qual expoente \\(3\\) deve ser elevado. Depois some 1.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 2\\), \\(q = 3\\), \\(a_n = 162\\)): \\(162 = 2 \\cdot 3^{\\,n-1}\\).",
      "Isole a potência dividindo os dois lados por \\(2\\): \\(162 \\div 2 = 3^{\\,n-1}\\), ou seja, \\(81 = 3^{\\,n-1}\\).",
      "Descubra a qual expoente \\(3\\) precisa ser elevado para dar \\(81\\). Vá listando as potências: \\(3^{1} = 3;\\quad 3^{2} = 9;\\quad 3^{3} = 27;\\quad 3^{4} = 81\\). Achamos: \\(3^{4} = 81\\) ✓.",
      "Portanto \\(n - 1 = 4\\).",
      "Some 1 para achar a posição: \\(n = 4 + 1 = 5\\). (Não esqueça este passo!)"
    ],
    "common": [
      {
        "value": "4",
        "message": "Você achou o expoente (n − 1). A posição é esse valor mais 1."
      }
    ]
  },
  {
    "id": 42,
    "level": 6,
    "title": "Descobrindo a posição n",
    "kind": "num",
    "question": "Em uma P.G. com \\(a_1 = 3\\) e \\(q = 2\\), qual é a posição \\(n\\) do termo que vale \\(96\\)?",
    "answer": "6",
    "hint": "Divida \\(96\\) por \\(3\\) e descubra a qual expoente \\(2\\) deve ser elevado. Depois some 1.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 3\\), \\(q = 2\\), \\(a_n = 96\\)): \\(96 = 3 \\cdot 2^{\\,n-1}\\).",
      "Isole a potência dividindo os dois lados por \\(3\\): \\(96 \\div 3 = 2^{\\,n-1}\\), ou seja, \\(32 = 2^{\\,n-1}\\).",
      "Descubra a qual expoente \\(2\\) precisa ser elevado para dar \\(32\\). Vá listando as potências: \\(2^{1} = 2;\\quad 2^{2} = 4;\\quad 2^{3} = 8;\\quad 2^{4} = 16;\\quad 2^{5} = 32\\). Achamos: \\(2^{5} = 32\\) ✓.",
      "Portanto \\(n - 1 = 5\\).",
      "Some 1 para achar a posição: \\(n = 5 + 1 = 6\\). (Não esqueça este passo!)"
    ],
    "common": [
      {
        "value": "5",
        "message": "Você achou o expoente (n − 1). A posição é esse valor mais 1."
      }
    ]
  },
  {
    "id": 43,
    "level": 6,
    "title": "Descobrindo a posição n",
    "kind": "num",
    "question": "Em uma P.G. com \\(a_1 = 4\\) e \\(q = 3\\), qual é a posição \\(n\\) do termo que vale \\(2916\\)?",
    "answer": "7",
    "hint": "Divida \\(2916\\) por \\(4\\) e descubra a qual expoente \\(3\\) deve ser elevado. Depois some 1.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 4\\), \\(q = 3\\), \\(a_n = 2916\\)): \\(2916 = 4 \\cdot 3^{\\,n-1}\\).",
      "Isole a potência dividindo os dois lados por \\(4\\): \\(2916 \\div 4 = 3^{\\,n-1}\\), ou seja, \\(729 = 3^{\\,n-1}\\).",
      "Descubra a qual expoente \\(3\\) precisa ser elevado para dar \\(729\\). Vá listando as potências: \\(3^{1} = 3;\\quad 3^{2} = 9;\\quad 3^{3} = 27;\\quad 3^{4} = 81;\\quad 3^{5} = 243;\\quad 3^{6} = 729\\). Achamos: \\(3^{6} = 729\\) ✓.",
      "Portanto \\(n - 1 = 6\\).",
      "Some 1 para achar a posição: \\(n = 6 + 1 = 7\\). (Não esqueça este passo!)"
    ],
    "common": [
      {
        "value": "6",
        "message": "Você achou o expoente (n − 1). A posição é esse valor mais 1."
      }
    ]
  },
  {
    "id": 44,
    "level": 6,
    "title": "Descobrindo a posição n",
    "kind": "num",
    "question": "Em uma P.G. com \\(a_1 = 5\\) e \\(q = 2\\), qual é a posição \\(n\\) do termo que vale \\(80\\)?",
    "answer": "5",
    "hint": "Divida \\(80\\) por \\(5\\) e descubra a qual expoente \\(2\\) deve ser elevado. Depois some 1.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 5\\), \\(q = 2\\), \\(a_n = 80\\)): \\(80 = 5 \\cdot 2^{\\,n-1}\\).",
      "Isole a potência dividindo os dois lados por \\(5\\): \\(80 \\div 5 = 2^{\\,n-1}\\), ou seja, \\(16 = 2^{\\,n-1}\\).",
      "Descubra a qual expoente \\(2\\) precisa ser elevado para dar \\(16\\). Vá listando as potências: \\(2^{1} = 2;\\quad 2^{2} = 4;\\quad 2^{3} = 8;\\quad 2^{4} = 16\\). Achamos: \\(2^{4} = 16\\) ✓.",
      "Portanto \\(n - 1 = 4\\).",
      "Some 1 para achar a posição: \\(n = 4 + 1 = 5\\). (Não esqueça este passo!)"
    ],
    "common": [
      {
        "value": "4",
        "message": "Você achou o expoente (n − 1). A posição é esse valor mais 1."
      }
    ]
  },
  {
    "id": 45,
    "level": 6,
    "title": "Descobrindo a posição n",
    "kind": "num",
    "question": "Em uma P.G. com \\(a_1 = 1\\) e \\(q = 5\\), qual é a posição \\(n\\) do termo que vale \\(625\\)?",
    "answer": "5",
    "hint": "Divida \\(625\\) por \\(1\\) e descubra a qual expoente \\(5\\) deve ser elevado. Depois some 1.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 1\\), \\(q = 5\\), \\(a_n = 625\\)): \\(625 = 1 \\cdot 5^{\\,n-1}\\).",
      "Isole a potência dividindo os dois lados por \\(1\\): \\(625 \\div 1 = 5^{\\,n-1}\\), ou seja, \\(625 = 5^{\\,n-1}\\).",
      "Descubra a qual expoente \\(5\\) precisa ser elevado para dar \\(625\\). Vá listando as potências: \\(5^{1} = 5;\\quad 5^{2} = 25;\\quad 5^{3} = 125;\\quad 5^{4} = 625\\). Achamos: \\(5^{4} = 625\\) ✓.",
      "Portanto \\(n - 1 = 4\\).",
      "Some 1 para achar a posição: \\(n = 4 + 1 = 5\\). (Não esqueça este passo!)"
    ],
    "common": [
      {
        "value": "4",
        "message": "Você achou o expoente (n − 1). A posição é esse valor mais 1."
      }
    ]
  },
  {
    "id": 46,
    "level": 6,
    "title": "Descobrindo a posição n",
    "kind": "num",
    "question": "Em uma P.G. com \\(a_1 = 6\\) e \\(q = 4\\), qual é a posição \\(n\\) do termo que vale \\(6144\\)?",
    "answer": "6",
    "hint": "Divida \\(6144\\) por \\(6\\) e descubra a qual expoente \\(4\\) deve ser elevado. Depois some 1.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 6\\), \\(q = 4\\), \\(a_n = 6144\\)): \\(6144 = 6 \\cdot 4^{\\,n-1}\\).",
      "Isole a potência dividindo os dois lados por \\(6\\): \\(6144 \\div 6 = 4^{\\,n-1}\\), ou seja, \\(1024 = 4^{\\,n-1}\\).",
      "Descubra a qual expoente \\(4\\) precisa ser elevado para dar \\(1024\\). Vá listando as potências: \\(4^{1} = 4;\\quad 4^{2} = 16;\\quad 4^{3} = 64;\\quad 4^{4} = 256;\\quad 4^{5} = 1024\\). Achamos: \\(4^{5} = 1024\\) ✓.",
      "Portanto \\(n - 1 = 5\\).",
      "Some 1 para achar a posição: \\(n = 5 + 1 = 6\\). (Não esqueça este passo!)"
    ],
    "common": [
      {
        "value": "5",
        "message": "Você achou o expoente (n − 1). A posição é esse valor mais 1."
      }
    ]
  },
  {
    "id": 47,
    "level": 6,
    "title": "Descobrindo a posição n",
    "kind": "num",
    "question": "Em uma P.G. com \\(a_1 = 3\\) e \\(q = -2\\), qual é a posição \\(n\\) do termo que vale \\(-96\\)?",
    "answer": "6",
    "hint": "Divida \\(-96\\) por \\(3\\) e descubra a qual expoente \\(\\left(-2\\right)\\) deve ser elevado. Depois some 1.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 3\\), \\(q = -2\\), \\(a_n = -96\\)): \\(-96 = 3 \\cdot \\left(-2\\right)^{\\,n-1}\\).",
      "Isole a potência dividindo os dois lados por \\(3\\): \\(-96 \\div 3 = \\left(-2\\right)^{\\,n-1}\\), ou seja, \\(-32 = \\left(-2\\right)^{\\,n-1}\\).",
      "Descubra a qual expoente \\(\\left(-2\\right)\\) precisa ser elevado para dar \\(-32\\). Vá listando as potências: \\(\\left(-2\\right)^{1} = -2;\\quad \\left(-2\\right)^{2} = 4;\\quad \\left(-2\\right)^{3} = -8;\\quad \\left(-2\\right)^{4} = 16;\\quad \\left(-2\\right)^{5} = -32\\). Achamos: \\(\\left(-2\\right)^{5} = -32\\) ✓.",
      "Portanto \\(n - 1 = 5\\).",
      "Some 1 para achar a posição: \\(n = 5 + 1 = 6\\). (Não esqueça este passo!)"
    ],
    "common": [
      {
        "value": "5",
        "message": "Você achou o expoente (n − 1). A posição é esse valor mais 1."
      }
    ]
  },
  {
    "id": 48,
    "level": 6,
    "title": "Descobrindo a posição n",
    "kind": "num",
    "question": "Em uma P.G. com \\(a_1 = 80\\) e \\(q = \\frac{1}{2}\\), qual é a posição \\(n\\) do termo que vale \\(5\\)?",
    "answer": "5",
    "hint": "Divida \\(5\\) por \\(80\\) e descubra a qual expoente \\(\\left(\\frac{1}{2}\\right)\\) deve ser elevado. Depois some 1.",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 80\\), \\(q = \\frac{1}{2}\\), \\(a_n = 5\\)): \\(5 = 80 \\cdot \\left(\\frac{1}{2}\\right)^{\\,n-1}\\).",
      "Isole a potência dividindo os dois lados por \\(80\\): \\(5 \\div 80 = \\left(\\frac{1}{2}\\right)^{\\,n-1}\\), ou seja, \\(\\frac{1}{16} = \\left(\\frac{1}{2}\\right)^{\\,n-1}\\).",
      "Descubra a qual expoente \\(\\left(\\frac{1}{2}\\right)\\) precisa ser elevado para dar \\(\\frac{1}{16}\\). Vá listando as potências: \\(\\left(\\frac{1}{2}\\right)^{1} = \\frac{1}{2};\\quad \\left(\\frac{1}{2}\\right)^{2} = \\frac{1}{4};\\quad \\left(\\frac{1}{2}\\right)^{3} = \\frac{1}{8};\\quad \\left(\\frac{1}{2}\\right)^{4} = \\frac{1}{16}\\). Achamos: \\(\\left(\\frac{1}{2}\\right)^{4} = \\frac{1}{16}\\) ✓.",
      "Portanto \\(n - 1 = 4\\).",
      "Some 1 para achar a posição: \\(n = 4 + 1 = 5\\). (Não esqueça este passo!)"
    ],
    "common": [
      {
        "value": "4",
        "message": "Você achou o expoente (n − 1). A posição é esse valor mais 1."
      }
    ]
  },
  {
    "id": 49,
    "level": 7,
    "title": "Descobrindo a₁ ou q",
    "kind": "num",
    "question": "Em uma P.G. de razão \\(q = 2\\), o 4º termo vale \\(40\\). Qual é o primeiro termo \\(a_1\\)?",
    "answer": "5",
    "hint": "Calcule \\(q^{n-1}\\) e depois divida \\(40\\) por esse valor (o \\(a_1\\) está multiplicando a potência).",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua o que você sabe (\\(q = 2\\), \\(n = 4\\), \\(a_{4} = 40\\)): \\(40 = a_1 \\cdot 2^{\\,4-1}\\).",
      "Calcule o expoente: \\(4 - 1 = 3\\). Fica \\(40 = a_1 \\cdot 2^{3}\\).",
      "Calcule a potência multiplicando um a um: \\(2^{3} = 2 \\cdot 2 \\cdot 2 = 8\\).",
      "Então \\(40 = a_1 \\cdot 8\\).",
      "O \\(a_1\\) está multiplicando, então passa dividindo para o outro lado: \\(a_1 = \\dfrac{40}{8} = 5\\).",
      "Conferência: \\(5 \\cdot 8 = 40\\) ✓."
    ],
    "common": [
      {
        "value": "320",
        "message": "Você multiplicou. Como a1 multiplica a potência, ele passa dividindo."
      }
    ]
  },
  {
    "id": 50,
    "level": 7,
    "title": "Descobrindo a₁ ou q",
    "kind": "num",
    "question": "Em uma P.G. de razão \\(q = 3\\), o 3º termo vale \\(90\\). Qual é o primeiro termo \\(a_1\\)?",
    "answer": "10",
    "hint": "Calcule \\(q^{n-1}\\) e depois divida \\(90\\) por esse valor (o \\(a_1\\) está multiplicando a potência).",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua o que você sabe (\\(q = 3\\), \\(n = 3\\), \\(a_{3} = 90\\)): \\(90 = a_1 \\cdot 3^{\\,3-1}\\).",
      "Calcule o expoente: \\(3 - 1 = 2\\). Fica \\(90 = a_1 \\cdot 3^{2}\\).",
      "Calcule a potência multiplicando um a um: \\(3^{2} = 3 \\cdot 3 = 9\\).",
      "Então \\(90 = a_1 \\cdot 9\\).",
      "O \\(a_1\\) está multiplicando, então passa dividindo para o outro lado: \\(a_1 = \\dfrac{90}{9} = 10\\).",
      "Conferência: \\(10 \\cdot 9 = 90\\) ✓."
    ],
    "common": [
      {
        "value": "810",
        "message": "Você multiplicou. Como a1 multiplica a potência, ele passa dividindo."
      }
    ]
  },
  {
    "id": 51,
    "level": 7,
    "title": "Descobrindo a₁ ou q",
    "kind": "num",
    "question": "Em uma P.G. de razão \\(q = 2\\), o 5º termo vale \\(48\\). Qual é o primeiro termo \\(a_1\\)?",
    "answer": "3",
    "hint": "Calcule \\(q^{n-1}\\) e depois divida \\(48\\) por esse valor (o \\(a_1\\) está multiplicando a potência).",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua o que você sabe (\\(q = 2\\), \\(n = 5\\), \\(a_{5} = 48\\)): \\(48 = a_1 \\cdot 2^{\\,5-1}\\).",
      "Calcule o expoente: \\(5 - 1 = 4\\). Fica \\(48 = a_1 \\cdot 2^{4}\\).",
      "Calcule a potência multiplicando um a um: \\(2^{4} = 2 \\cdot 2 \\cdot 2 \\cdot 2 = 16\\).",
      "Então \\(48 = a_1 \\cdot 16\\).",
      "O \\(a_1\\) está multiplicando, então passa dividindo para o outro lado: \\(a_1 = \\dfrac{48}{16} = 3\\).",
      "Conferência: \\(3 \\cdot 16 = 48\\) ✓."
    ],
    "common": [
      {
        "value": "768",
        "message": "Você multiplicou. Como a1 multiplica a potência, ele passa dividindo."
      }
    ]
  },
  {
    "id": 52,
    "level": 7,
    "title": "Descobrindo a₁ ou q",
    "kind": "num",
    "question": "Em uma P.G. de razão \\(q = -2\\), o 4º termo vale \\(-56\\). Qual é o primeiro termo \\(a_1\\)?",
    "answer": "7",
    "hint": "Calcule \\(q^{n-1}\\) e depois divida \\(-56\\) por esse valor (o \\(a_1\\) está multiplicando a potência).",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua o que você sabe (\\(q = -2\\), \\(n = 4\\), \\(a_{4} = -56\\)): \\(-56 = a_1 \\cdot \\left(-2\\right)^{\\,4-1}\\).",
      "Calcule o expoente: \\(4 - 1 = 3\\). Fica \\(-56 = a_1 \\cdot \\left(-2\\right)^{3}\\).",
      "Calcule a potência multiplicando um a um: \\(\\left(-2\\right)^{3} = \\left(-2\\right) \\cdot \\left(-2\\right) \\cdot \\left(-2\\right) = -8\\). Como o expoente é ímpar, o resultado fica negativo.",
      "Então \\(-56 = a_1 \\cdot \\left(-8\\right)\\).",
      "O \\(a_1\\) está multiplicando, então passa dividindo para o outro lado: \\(a_1 = \\dfrac{-56}{\\left(-8\\right)} = 7\\).",
      "Conferência: \\(7 \\cdot \\left(-8\\right) = -56\\) ✓."
    ],
    "common": [
      {
        "value": "448",
        "message": "Você multiplicou. Como a1 multiplica a potência, ele passa dividindo."
      }
    ]
  },
  {
    "id": 53,
    "level": 7,
    "title": "Descobrindo a₁ ou q",
    "kind": "num",
    "question": "Em uma P.G. temos \\(a_1 = 2\\) e \\(a_{4} = 54\\). Qual é a razão \\(q\\)?",
    "answer": "3",
    "hint": "Divida \\(a_{4}\\) por \\(a_1\\) para obter \\(q^{3}\\). Depois pergunte: qual número elevado a 3 dá esse valor?",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 2\\), \\(n = 4\\), \\(a_{4} = 54\\)): \\(54 = 2 \\cdot q^{\\,4-1} = 2 \\cdot q^{3}\\).",
      "Isole a potência dividindo os dois lados por \\(2\\): \\(q^{3} = 27\\).",
      "Pergunte: “qual número elevado a 3 dá 27?” Teste: \\(2^{3} = 8;\\quad 3^{3} = 27\\) ✓.",
      "Como o expoente 3 é ímpar, só existe uma resposta: \\(q = 3\\).",
      "Conferência: \\(2 \\cdot 3^{3} = 2 \\cdot 27 = 54\\) ✓."
    ]
  },
  {
    "id": 54,
    "level": 7,
    "title": "Descobrindo a₁ ou q",
    "kind": "num",
    "question": "Em uma P.G. de razão positiva temos \\(a_1 = 3\\) e \\(a_{5} = 48\\). Qual é a razão \\(q\\)?",
    "answer": "2",
    "hint": "Divida \\(a_{5}\\) por \\(a_1\\) para obter \\(q^{4}\\). Depois pergunte: qual número elevado a 4 dá esse valor?",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 3\\), \\(n = 5\\), \\(a_{5} = 48\\)): \\(48 = 3 \\cdot q^{\\,5-1} = 3 \\cdot q^{4}\\).",
      "Isole a potência dividindo os dois lados por \\(3\\): \\(q^{4} = 16\\).",
      "Pergunte: “qual número elevado a 4 dá 16?” Teste: \\(2^{4} = 16\\) ✓.",
      "Como o expoente 4 é par, há duas respostas possíveis: \\(q = 2\\) ou \\(q = -2\\). Se o enunciado disser “termos positivos” ou “razão positiva”, fique com \\(q = 2\\).",
      "Conferência: \\(3 \\cdot 2^{4} = 3 \\cdot 16 = 48\\) ✓."
    ]
  },
  {
    "id": 55,
    "level": 7,
    "title": "Descobrindo a₁ ou q",
    "kind": "num",
    "question": "Em uma P.G. temos \\(a_1 = 2\\) e \\(a_{4} = -54\\). Qual é a razão \\(q\\)?",
    "answer": "-3",
    "hint": "Divida \\(a_{4}\\) por \\(a_1\\) para obter \\(q^{3}\\). Depois pergunte: qual número elevado a 3 dá esse valor?",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 2\\), \\(n = 4\\), \\(a_{4} = -54\\)): \\(-54 = 2 \\cdot q^{\\,4-1} = 2 \\cdot q^{3}\\).",
      "Isole a potência dividindo os dois lados por \\(2\\): \\(q^{3} = -27\\).",
      "Pergunte: “qual número elevado a 3 dá \\(-27\\)?” (é a raiz de índice 3). A resposta é \\(-3\\), pois \\(\\left(-3\\right)^{3} = -27\\) ✓.",
      "Como o expoente 3 é ímpar, só existe uma resposta: \\(q = -3\\).",
      "Conferência: \\(2 \\cdot \\left(-3\\right)^{3} = 2 \\cdot \\left(-27\\right) = -54\\) ✓."
    ]
  },
  {
    "id": 56,
    "level": 7,
    "title": "Descobrindo a₁ ou q",
    "kind": "num",
    "question": "Em uma P.G. de razão positiva temos \\(a_1 = 5\\) e \\(a_{3} = 80\\). Qual é a razão \\(q\\)?",
    "answer": "4",
    "hint": "Divida \\(a_{3}\\) por \\(a_1\\) para obter \\(q^{2}\\). Depois pergunte: qual número elevado a 2 dá esse valor?",
    "steps": [
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 5\\), \\(n = 3\\), \\(a_{3} = 80\\)): \\(80 = 5 \\cdot q^{\\,3-1} = 5 \\cdot q^{2}\\).",
      "Isole a potência dividindo os dois lados por \\(5\\): \\(q^{2} = 16\\).",
      "Pergunte: “qual número elevado a 2 dá 16?” Teste: \\(2^{2} = 4;\\quad 3^{2} = 9;\\quad 4^{2} = 16\\) ✓.",
      "Como o expoente 2 é par, há duas respostas possíveis: \\(q = 4\\) ou \\(q = -4\\). Se o enunciado disser “termos positivos” ou “razão positiva”, fique com \\(q = 4\\).",
      "Conferência: \\(5 \\cdot 4^{2} = 5 \\cdot 16 = 80\\) ✓."
    ]
  },
  {
    "id": 57,
    "level": 8,
    "title": "Interpolação geométrica",
    "kind": "num",
    "question": "Insira \\(3\\) meios geométricos entre \\(2\\) e \\(162\\) (razão positiva). Qual é a razão?",
    "answer": "3",
    "hint": "Com \\(3\\) meios a P.G. tem \\(5\\) termos. Use \\(a_5 = a_1 \\cdot q^{4}\\) para achar \\(q\\).",
    "steps": [
      "Inserir \\(3\\) meios geométricos entre \\(2\\) e \\(162\\) significa que a P.G. terá \\(n = 3 + 2 = 5\\) termos, com \\(a_1 = 2\\) e \\(a_{5} = 162\\).",
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 2\\), \\(n = 5\\), \\(a_{5} = 162\\)): \\(162 = 2 \\cdot q^{\\,5-1} = 2 \\cdot q^{4}\\).",
      "Isole a potência dividindo os dois lados por \\(2\\): \\(q^{4} = 81\\).",
      "Pergunte: “qual número elevado a 4 dá 81?” Teste: \\(2^{4} = 16;\\quad 3^{4} = 81\\) ✓.",
      "Como o expoente 4 é par, há duas respostas possíveis: \\(q = 3\\) ou \\(q = -3\\). Se o enunciado disser “termos positivos” ou “razão positiva”, fique com \\(q = 3\\).",
      "Conferência: \\(2 \\cdot 3^{4} = 2 \\cdot 81 = 162\\) ✓."
    ]
  },
  {
    "id": 58,
    "level": 8,
    "title": "Interpolação geométrica",
    "kind": "num",
    "question": "Insira \\(5\\) meios geométricos entre \\(1\\) e \\(64\\) (razão positiva). Qual é a razão?",
    "answer": "2",
    "hint": "Com \\(5\\) meios a P.G. tem \\(7\\) termos. Use \\(a_7 = a_1 \\cdot q^{6}\\) para achar \\(q\\).",
    "steps": [
      "Inserir \\(5\\) meios geométricos entre \\(1\\) e \\(64\\) significa que a P.G. terá \\(n = 5 + 2 = 7\\) termos, com \\(a_1 = 1\\) e \\(a_{7} = 64\\).",
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 1\\), \\(n = 7\\), \\(a_{7} = 64\\)): \\(64 = 1 \\cdot q^{\\,7-1} = 1 \\cdot q^{6}\\).",
      "Isole a potência dividindo os dois lados por \\(1\\): \\(q^{6} = 64\\).",
      "Pergunte: “qual número elevado a 6 dá 64?” Teste: \\(2^{6} = 64\\) ✓.",
      "Como o expoente 6 é par, há duas respostas possíveis: \\(q = 2\\) ou \\(q = -2\\). Se o enunciado disser “termos positivos” ou “razão positiva”, fique com \\(q = 2\\).",
      "Conferência: \\(1 \\cdot 2^{6} = 1 \\cdot 64 = 64\\) ✓."
    ]
  },
  {
    "id": 59,
    "level": 8,
    "title": "Interpolação geométrica",
    "kind": "num",
    "question": "Insira \\(3\\) meios geométricos entre \\(3\\) e \\(48\\) (razão positiva). Qual é o último meio geométrico (o termo anterior a 48)?",
    "answer": "24",
    "hint": "Com \\(3\\) meios a P.G. tem \\(5\\) termos. Use \\(a_5 = a_1 \\cdot q^{4}\\) para achar \\(q\\).",
    "steps": [
      "Inserir \\(3\\) meios geométricos entre \\(3\\) e \\(48\\) significa que a P.G. terá \\(n = 3 + 2 = 5\\) termos, com \\(a_1 = 3\\) e \\(a_{5} = 48\\).",
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 3\\), \\(n = 5\\), \\(a_{5} = 48\\)): \\(48 = 3 \\cdot q^{\\,5-1} = 3 \\cdot q^{4}\\).",
      "Isole a potência dividindo os dois lados por \\(3\\): \\(q^{4} = 16\\).",
      "Pergunte: “qual número elevado a 4 dá 16?” Teste: \\(2^{4} = 16\\) ✓.",
      "Como o expoente 4 é par, há duas respostas possíveis: \\(q = 2\\) ou \\(q = -2\\). Se o enunciado disser “termos positivos” ou “razão positiva”, fique com \\(q = 2\\).",
      "Conferência: \\(3 \\cdot 2^{4} = 3 \\cdot 16 = 48\\) ✓.",
      "A P.G. completa é \\((3,\\;6,\\;12,\\;24,\\;48)\\). O último meio geométrico é \\(24\\)."
    ]
  },
  {
    "id": 60,
    "level": 8,
    "title": "Interpolação geométrica",
    "kind": "num",
    "question": "Insira \\(3\\) meios geométricos entre \\(5\\) e \\(1280\\) (razão positiva). Qual é o 3º meio geométrico inserido?",
    "answer": "320",
    "hint": "Com \\(3\\) meios a P.G. tem \\(5\\) termos. Use \\(a_5 = a_1 \\cdot q^{4}\\) para achar \\(q\\).",
    "steps": [
      "Inserir \\(3\\) meios geométricos entre \\(5\\) e \\(1280\\) significa que a P.G. terá \\(n = 3 + 2 = 5\\) termos, com \\(a_1 = 5\\) e \\(a_{5} = 1280\\).",
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 5\\), \\(n = 5\\), \\(a_{5} = 1280\\)): \\(1280 = 5 \\cdot q^{\\,5-1} = 5 \\cdot q^{4}\\).",
      "Isole a potência dividindo os dois lados por \\(5\\): \\(q^{4} = 256\\).",
      "Pergunte: “qual número elevado a 4 dá 256?” Teste: \\(2^{4} = 16;\\quad 3^{4} = 81;\\quad 4^{4} = 256\\) ✓.",
      "Como o expoente 4 é par, há duas respostas possíveis: \\(q = 4\\) ou \\(q = -4\\). Se o enunciado disser “termos positivos” ou “razão positiva”, fique com \\(q = 4\\).",
      "Conferência: \\(5 \\cdot 4^{4} = 5 \\cdot 256 = 1280\\) ✓.",
      "A P.G. completa é \\((5,\\;20,\\;80,\\;320,\\;1280)\\). O 3º meio é o 4º termo da lista: \\(320\\)."
    ]
  },
  {
    "id": 61,
    "level": 8,
    "title": "Interpolação geométrica",
    "kind": "num",
    "question": "Insira \\(2\\) meios geométricos entre \\(2\\) e \\(54\\). Qual é a razão?",
    "answer": "3",
    "hint": "Com \\(2\\) meios a P.G. tem \\(4\\) termos. Use \\(a_4 = a_1 \\cdot q^{3}\\) para achar \\(q\\).",
    "steps": [
      "Inserir \\(2\\) meios geométricos entre \\(2\\) e \\(54\\) significa que a P.G. terá \\(n = 2 + 2 = 4\\) termos, com \\(a_1 = 2\\) e \\(a_{4} = 54\\).",
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 2\\), \\(n = 4\\), \\(a_{4} = 54\\)): \\(54 = 2 \\cdot q^{\\,4-1} = 2 \\cdot q^{3}\\).",
      "Isole a potência dividindo os dois lados por \\(2\\): \\(q^{3} = 27\\).",
      "Pergunte: “qual número elevado a 3 dá 27?” Teste: \\(2^{3} = 8;\\quad 3^{3} = 27\\) ✓.",
      "Como o expoente 3 é ímpar, só existe uma resposta: \\(q = 3\\).",
      "Conferência: \\(2 \\cdot 3^{3} = 2 \\cdot 27 = 54\\) ✓."
    ]
  },
  {
    "id": 62,
    "level": 8,
    "title": "Interpolação geométrica",
    "kind": "num",
    "question": "Insira \\(2\\) meios geométricos entre \\(4\\) e \\(-108\\). Qual é a soma dos dois meios geométricos?",
    "answer": "24",
    "hint": "Com \\(2\\) meios a P.G. tem \\(4\\) termos. Use \\(a_4 = a_1 \\cdot q^{3}\\) para achar \\(q\\).",
    "steps": [
      "Inserir \\(2\\) meios geométricos entre \\(4\\) e \\(-108\\) significa que a P.G. terá \\(n = 2 + 2 = 4\\) termos, com \\(a_1 = 4\\) e \\(a_{4} = -108\\).",
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Substitua os dados (\\(a_1 = 4\\), \\(n = 4\\), \\(a_{4} = -108\\)): \\(-108 = 4 \\cdot q^{\\,4-1} = 4 \\cdot q^{3}\\).",
      "Isole a potência dividindo os dois lados por \\(4\\): \\(q^{3} = -27\\).",
      "Pergunte: “qual número elevado a 3 dá \\(-27\\)?” (é a raiz de índice 3). A resposta é \\(-3\\), pois \\(\\left(-3\\right)^{3} = -27\\) ✓.",
      "Como o expoente 3 é ímpar, só existe uma resposta: \\(q = -3\\).",
      "Conferência: \\(4 \\cdot \\left(-3\\right)^{3} = 4 \\cdot \\left(-27\\right) = -108\\) ✓.",
      "A P.G. completa é \\((4,\\;-12,\\;36,\\;-108)\\). Os meios são \\(-12\\) e \\(36\\), e a soma é \\(24\\)."
    ]
  },
  {
    "id": 63,
    "level": 9,
    "title": "Propriedades e termo médio",
    "kind": "num",
    "question": "Para que valor de \\(x\\) a sequência \\((x,\\;6,\\;18)\\) é uma P.G.?",
    "answer": "2",
    "hint": "Use b² = a·c com b = 6.",
    "steps": [
      "Em três termos seguidos de uma P.G., o quadrado do termo do meio é igual ao produto dos extremos: \\(b^2 = a \\cdot c\\).",
      "Aqui \\(a = x\\), \\(b = 6\\), \\(c = 18\\): \\(6^2 = x \\cdot 18\\).",
      "\\(36 = 18x\\).",
      "\\(x = 36 \\div 18 = 2\\).",
      "Conferência: \\((2,\\;6,\\;18)\\) tem razão 3 (\\(6 \\div 2 = 3\\) e \\(18 \\div 6 = 3\\)) ✓."
    ]
  },
  {
    "id": 64,
    "level": 9,
    "title": "Propriedades e termo médio",
    "kind": "num",
    "question": "Os números \\((4,\\;x,\\;16)\\) formam uma P.G. de termos positivos. Qual é \\(x\\)?",
    "answer": "8",
    "hint": "x² = 4 · 16. Lembre que são termos positivos.",
    "steps": [
      "Use \\(b^2 = a \\cdot c\\): \\(x^2 = 4 \\cdot 16\\).",
      "\\(x^2 = 64\\), então \\(x = \\pm 8\\).",
      "Como os termos são positivos, \\(x = 8\\).",
      "Conferência: \\((4,\\;8,\\;16)\\) tem razão 2 ✓."
    ]
  },
  {
    "id": 65,
    "level": 9,
    "title": "Propriedades e termo médio",
    "kind": "num",
    "question": "Os números \\((2,\\;x,\\;50)\\) formam uma P.G. de termos positivos. Qual é \\(x\\)?",
    "answer": "10",
    "hint": "x² = 2 · 50.",
    "steps": [
      "Use \\(b^2 = a \\cdot c\\): \\(x^2 = 2 \\cdot 50 = 100\\).",
      "\\(x = \\pm 10\\); como os termos são positivos, \\(x = 10\\).",
      "Conferência: \\((2,\\;10,\\;50)\\) tem razão 5 ✓."
    ]
  },
  {
    "id": 66,
    "level": 9,
    "title": "Propriedades e termo médio",
    "kind": "num",
    "question": "Em uma P.G. de termos positivos, \\(a_2 = 6\\) e \\(a_4 = 24\\). Qual é o \\(a_3\\)?",
    "answer": "12",
    "hint": "a₂, a₃ e a₄ são três termos seguidos.",
    "steps": [
      "\\(a_2, a_3, a_4\\) são três termos seguidos, então \\(a_3^2 = a_2 \\cdot a_4\\).",
      "\\(a_3^2 = 6 \\cdot 24 = 144\\).",
      "\\(a_3 = 12\\) (positivo).",
      "Conferência: \\((6,\\;12,\\;24)\\) tem razão 2 ✓."
    ]
  },
  {
    "id": 67,
    "level": 9,
    "title": "Propriedades e termo médio",
    "kind": "num",
    "question": "Para que valor de \\(x\\) a sequência \\((x,\\;x+4,\\;x+16)\\) é uma P.G.?",
    "answer": "2",
    "hint": "Desenvolva (x+4)² = x² + 8x + 16 e corte o x² dos dois lados.",
    "steps": [
      "Use \\(b^2 = a \\cdot c\\): \\((x+4)^2 = x \\cdot (x+16)\\).",
      "Desenvolva: \\(x^2 + 8x + 16 = x^2 + 16x\\).",
      "Corte \\(x^2\\) dos dois lados: \\(8x + 16 = 16x\\), então \\(16 = 8x\\).",
      "\\(x = 2\\).",
      "Conferência: \\((2,\\;6,\\;18)\\) é P.G. de razão 3 ✓."
    ]
  },
  {
    "id": 68,
    "level": 9,
    "title": "Propriedades e termo médio",
    "kind": "num",
    "question": "Para que valor de \\(x\\) a sequência \\((x+3,\\;x+5,\\;x+11)\\) é uma P.G.?",
    "answer": "-2",
    "hint": "Desenvolva (x+5)² e o produto (x+3)(x+11); o x² cancela.",
    "steps": [
      "Use \\(b^2 = a \\cdot c\\): \\((x+5)^2 = (x+3)(x+11)\\).",
      "Desenvolva os dois lados: \\(x^2 + 10x + 25 = x^2 + 14x + 33\\).",
      "Corte \\(x^2\\): \\(10x + 25 = 14x + 33\\), então \\(-8 = 4x\\).",
      "\\(x = -2\\).",
      "Conferência: \\((1,\\;3,\\;9)\\) é P.G. de razão 3 ✓."
    ]
  },
  {
    "id": 69,
    "level": 10,
    "title": "Soma dos n primeiros termos",
    "kind": "num",
    "question": "Calcule a soma dos 4 primeiros termos da P.G. com \\(a_1 = 3\\) e \\(q = 2\\).",
    "answer": "45",
    "hint": "Use \\(S_n = \\dfrac{a_1(q^n - 1)}{q - 1}\\) com \\(n = 4\\). Potência primeiro!",
    "steps": [
      "Escreva a fórmula da soma dos \\(n\\) primeiros termos: \\(S_n = \\dfrac{a_1 \\cdot (q^n - 1)}{q - 1}\\).",
      "Anote os dados: \\(a_1 = 3\\), \\(q = 2\\) e \\(n = 4\\) (quantidade de termos somados).",
      "Substitua: \\(S_{4} = \\dfrac{3 \\cdot \\left(2^{4} - 1\\right)}{2 - 1}\\).",
      "Calcule a potência multiplicando um a um: \\(2^{4} = 2 \\cdot 2 \\cdot 2 \\cdot 2 = 16\\).",
      "Resolva o parêntese de cima e a conta de baixo: \\(16 - 1 = 15\\) e \\(2 - 1 = 1\\). Fica \\(S_{4} = \\dfrac{3 \\cdot 15}{1}\\).",
      "Multiplique em cima: \\(3 \\cdot 15 = 45\\). Fica \\(S_{4} = \\dfrac{45}{1}\\).",
      "Divida: \\(S_{4} = 45\\).",
      "Conferência: somando os termos à mão, \\(3 + 6 + 12 + 24 = 45\\) ✓."
    ],
    "common": [
      {
        "value": "45",
        "message": "Faltou dividir por (q − 1)."
      }
    ]
  },
  {
    "id": 70,
    "level": 10,
    "title": "Soma dos n primeiros termos",
    "kind": "num",
    "question": "Calcule a soma dos 5 primeiros termos da P.G. com \\(a_1 = 2\\) e \\(q = 3\\).",
    "answer": "242",
    "hint": "Use \\(S_n = \\dfrac{a_1(q^n - 1)}{q - 1}\\) com \\(n = 5\\). Potência primeiro!",
    "steps": [
      "Escreva a fórmula da soma dos \\(n\\) primeiros termos: \\(S_n = \\dfrac{a_1 \\cdot (q^n - 1)}{q - 1}\\).",
      "Anote os dados: \\(a_1 = 2\\), \\(q = 3\\) e \\(n = 5\\) (quantidade de termos somados).",
      "Substitua: \\(S_{5} = \\dfrac{2 \\cdot \\left(3^{5} - 1\\right)}{3 - 1}\\).",
      "Calcule a potência multiplicando um a um: \\(3^{5} = 3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 = 243\\).",
      "Resolva o parêntese de cima e a conta de baixo: \\(243 - 1 = 242\\) e \\(3 - 1 = 2\\). Fica \\(S_{5} = \\dfrac{2 \\cdot 242}{2}\\).",
      "Multiplique em cima: \\(2 \\cdot 242 = 484\\). Fica \\(S_{5} = \\dfrac{484}{2}\\).",
      "Divida: \\(S_{5} = 242\\).",
      "Conferência: somando os termos à mão, \\(2 + 6 + 18 + 54 + 162 = 242\\) ✓."
    ],
    "common": [
      {
        "value": "484",
        "message": "Faltou dividir por (q − 1)."
      }
    ]
  },
  {
    "id": 71,
    "level": 10,
    "title": "Soma dos n primeiros termos",
    "kind": "num",
    "question": "Calcule a soma dos 7 primeiros termos da P.G. com \\(a_1 = 1\\) e \\(q = 2\\).",
    "answer": "127",
    "hint": "Use \\(S_n = \\dfrac{a_1(q^n - 1)}{q - 1}\\) com \\(n = 7\\). Potência primeiro!",
    "steps": [
      "Escreva a fórmula da soma dos \\(n\\) primeiros termos: \\(S_n = \\dfrac{a_1 \\cdot (q^n - 1)}{q - 1}\\).",
      "Anote os dados: \\(a_1 = 1\\), \\(q = 2\\) e \\(n = 7\\) (quantidade de termos somados).",
      "Substitua: \\(S_{7} = \\dfrac{1 \\cdot \\left(2^{7} - 1\\right)}{2 - 1}\\).",
      "Calcule a potência multiplicando um a um: \\(2^{7} = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 128\\).",
      "Resolva o parêntese de cima e a conta de baixo: \\(128 - 1 = 127\\) e \\(2 - 1 = 1\\). Fica \\(S_{7} = \\dfrac{1 \\cdot 127}{1}\\).",
      "Multiplique em cima: \\(1 \\cdot 127 = 127\\). Fica \\(S_{7} = \\dfrac{127}{1}\\).",
      "Divida: \\(S_{7} = 127\\).",
      "Conferência: somando os termos à mão, \\(1 + 2 + 4 + 8 + 16 + 32 + 64 = 127\\) ✓."
    ],
    "common": [
      {
        "value": "127",
        "message": "Faltou dividir por (q − 1)."
      }
    ]
  },
  {
    "id": 72,
    "level": 10,
    "title": "Soma dos n primeiros termos",
    "kind": "num",
    "question": "Calcule a soma dos 6 primeiros termos da P.G. com \\(a_1 = 5\\) e \\(q = 2\\).",
    "answer": "315",
    "hint": "Use \\(S_n = \\dfrac{a_1(q^n - 1)}{q - 1}\\) com \\(n = 6\\). Potência primeiro!",
    "steps": [
      "Escreva a fórmula da soma dos \\(n\\) primeiros termos: \\(S_n = \\dfrac{a_1 \\cdot (q^n - 1)}{q - 1}\\).",
      "Anote os dados: \\(a_1 = 5\\), \\(q = 2\\) e \\(n = 6\\) (quantidade de termos somados).",
      "Substitua: \\(S_{6} = \\dfrac{5 \\cdot \\left(2^{6} - 1\\right)}{2 - 1}\\).",
      "Calcule a potência multiplicando um a um: \\(2^{6} = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 64\\).",
      "Resolva o parêntese de cima e a conta de baixo: \\(64 - 1 = 63\\) e \\(2 - 1 = 1\\). Fica \\(S_{6} = \\dfrac{5 \\cdot 63}{1}\\).",
      "Multiplique em cima: \\(5 \\cdot 63 = 315\\). Fica \\(S_{6} = \\dfrac{315}{1}\\).",
      "Divida: \\(S_{6} = 315\\).",
      "Conferência: somando os termos à mão, \\(5 + 10 + 20 + 40 + 80 + 160 = 315\\) ✓."
    ],
    "common": [
      {
        "value": "315",
        "message": "Faltou dividir por (q − 1)."
      }
    ]
  },
  {
    "id": 73,
    "level": 10,
    "title": "Soma dos n primeiros termos",
    "kind": "num",
    "question": "Calcule a soma dos 4 primeiros termos da P.G. com \\(a_1 = 4\\) e \\(q = 3\\).",
    "answer": "160",
    "hint": "Use \\(S_n = \\dfrac{a_1(q^n - 1)}{q - 1}\\) com \\(n = 4\\). Potência primeiro!",
    "steps": [
      "Escreva a fórmula da soma dos \\(n\\) primeiros termos: \\(S_n = \\dfrac{a_1 \\cdot (q^n - 1)}{q - 1}\\).",
      "Anote os dados: \\(a_1 = 4\\), \\(q = 3\\) e \\(n = 4\\) (quantidade de termos somados).",
      "Substitua: \\(S_{4} = \\dfrac{4 \\cdot \\left(3^{4} - 1\\right)}{3 - 1}\\).",
      "Calcule a potência multiplicando um a um: \\(3^{4} = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 81\\).",
      "Resolva o parêntese de cima e a conta de baixo: \\(81 - 1 = 80\\) e \\(3 - 1 = 2\\). Fica \\(S_{4} = \\dfrac{4 \\cdot 80}{2}\\).",
      "Multiplique em cima: \\(4 \\cdot 80 = 320\\). Fica \\(S_{4} = \\dfrac{320}{2}\\).",
      "Divida: \\(S_{4} = 160\\).",
      "Conferência: somando os termos à mão, \\(4 + 12 + 36 + 108 = 160\\) ✓."
    ],
    "common": [
      {
        "value": "320",
        "message": "Faltou dividir por (q − 1)."
      }
    ]
  },
  {
    "id": 74,
    "level": 10,
    "title": "Soma dos n primeiros termos",
    "kind": "num",
    "question": "Calcule a soma dos 5 primeiros termos da P.G. com \\(a_1 = 3\\) e \\(q = 4\\).",
    "answer": "1023",
    "hint": "Use \\(S_n = \\dfrac{a_1(q^n - 1)}{q - 1}\\) com \\(n = 5\\). Potência primeiro!",
    "steps": [
      "Escreva a fórmula da soma dos \\(n\\) primeiros termos: \\(S_n = \\dfrac{a_1 \\cdot (q^n - 1)}{q - 1}\\).",
      "Anote os dados: \\(a_1 = 3\\), \\(q = 4\\) e \\(n = 5\\) (quantidade de termos somados).",
      "Substitua: \\(S_{5} = \\dfrac{3 \\cdot \\left(4^{5} - 1\\right)}{4 - 1}\\).",
      "Calcule a potência multiplicando um a um: \\(4^{5} = 4 \\cdot 4 \\cdot 4 \\cdot 4 \\cdot 4 = 1024\\).",
      "Resolva o parêntese de cima e a conta de baixo: \\(1024 - 1 = 1023\\) e \\(4 - 1 = 3\\). Fica \\(S_{5} = \\dfrac{3 \\cdot 1023}{3}\\).",
      "Multiplique em cima: \\(3 \\cdot 1023 = 3069\\). Fica \\(S_{5} = \\dfrac{3069}{3}\\).",
      "Divida: \\(S_{5} = 1023\\).",
      "Conferência: somando os termos à mão, \\(3 + 12 + 48 + 192 + 768 = 1023\\) ✓."
    ],
    "common": [
      {
        "value": "3069",
        "message": "Faltou dividir por (q − 1)."
      }
    ]
  },
  {
    "id": 75,
    "level": 10,
    "title": "Soma dos n primeiros termos",
    "kind": "num",
    "question": "Calcule a soma dos 10 primeiros termos da P.G. com \\(a_1 = 6\\) e \\(q = 1\\).",
    "answer": "60",
    "hint": "Quando q = 1 todos os termos são iguais: S = n · a₁.",
    "steps": [
      "Quando \\(q = 1\\), todos os termos são iguais a \\(a_1\\). A fórmula comum daria divisão por zero, então usamos: \\(S_n = n \\cdot a_1\\).",
      "Substitua: \\(S_{10} = 10 \\cdot 6 = 60\\)."
    ]
  },
  {
    "id": 76,
    "level": 10,
    "title": "Soma dos n primeiros termos",
    "kind": "num",
    "question": "Calcule a soma dos 5 primeiros termos da P.G. com \\(a_1 = 1\\) e \\(q = -2\\).",
    "answer": "11",
    "hint": "Use \\(S_n = \\dfrac{a_1(q^n - 1)}{q - 1}\\) com \\(n = 5\\). Potência primeiro!",
    "steps": [
      "Escreva a fórmula da soma dos \\(n\\) primeiros termos: \\(S_n = \\dfrac{a_1 \\cdot (q^n - 1)}{q - 1}\\).",
      "Anote os dados: \\(a_1 = 1\\), \\(q = -2\\) e \\(n = 5\\) (quantidade de termos somados).",
      "Substitua: \\(S_{5} = \\dfrac{1 \\cdot \\left(\\left(-2\\right)^{5} - 1\\right)}{\\left(-2\\right) - 1}\\).",
      "Calcule a potência multiplicando um a um: \\(\\left(-2\\right)^{5} = \\left(-2\\right) \\cdot \\left(-2\\right) \\cdot \\left(-2\\right) \\cdot \\left(-2\\right) \\cdot \\left(-2\\right) = -32\\). Como o expoente é ímpar, o resultado fica negativo.",
      "Resolva o parêntese de cima e a conta de baixo: \\(\\left(-32\\right) - 1 = -33\\) e \\(\\left(-2\\right) - 1 = -3\\). Fica \\(S_{5} = \\dfrac{1 \\cdot \\left(-33\\right)}{\\left(-3\\right)}\\).",
      "Multiplique em cima: \\(1 \\cdot \\left(-33\\right) = -33\\). Fica \\(S_{5} = \\dfrac{-33}{\\left(-3\\right)}\\).",
      "Divida: \\(S_{5} = 11\\).",
      "Conferência: somando os termos à mão, \\(1 - 2 + 4 - 8 + 16 = 11\\) ✓."
    ],
    "common": [
      {
        "value": "-33",
        "message": "Faltou dividir por (q − 1)."
      }
    ]
  },
  {
    "id": 77,
    "level": 11,
    "title": "Soma infinita e dízimas",
    "kind": "num",
    "question": "Calcule a soma de todos os termos (infinitos) da P.G. com \\(a_1 = 4\\) e \\(q = \\frac{1}{2}\\).",
    "answer": "8",
    "hint": "Confira que \\(-1 < q < 1\\) e use \\(S = \\dfrac{a_1}{1-q}\\).",
    "steps": [
      "A fórmula da soma infinita é \\(S = \\dfrac{a_1}{1 - q}\\), mas ela só vale quando \\(-1 < q < 1\\).",
      "Aqui \\(q = \\frac{1}{2}\\), que está entre −1 e 1 ✓. Pode usar a fórmula.",
      "Substitua: \\(S = \\dfrac{4}{1 - \\left(\\frac{1}{2}\\right)}\\).",
      "Calcule o denominador: \\(1 - \\left(\\frac{1}{2}\\right) = \\frac{1}{2}\\). Fica \\(S = \\dfrac{4}{\\frac{1}{2}}\\).",
      "Divida (dividir por fração é multiplicar pelo inverso): \\(S = 8\\)."
    ]
  },
  {
    "id": 78,
    "level": 11,
    "title": "Soma infinita e dízimas",
    "kind": "num",
    "question": "Calcule a soma de todos os termos (infinitos) da P.G. com \\(a_1 = 9\\) e \\(q = \\frac{1}{3}\\).",
    "answer": "27/2",
    "hint": "Confira que \\(-1 < q < 1\\) e use \\(S = \\dfrac{a_1}{1-q}\\).",
    "steps": [
      "A fórmula da soma infinita é \\(S = \\dfrac{a_1}{1 - q}\\), mas ela só vale quando \\(-1 < q < 1\\).",
      "Aqui \\(q = \\frac{1}{3}\\), que está entre −1 e 1 ✓. Pode usar a fórmula.",
      "Substitua: \\(S = \\dfrac{9}{1 - \\left(\\frac{1}{3}\\right)}\\).",
      "Calcule o denominador: \\(1 - \\left(\\frac{1}{3}\\right) = \\frac{2}{3}\\). Fica \\(S = \\dfrac{9}{\\frac{2}{3}}\\).",
      "Divida (dividir por fração é multiplicar pelo inverso): \\(S = \\frac{27}{2}\\)."
    ]
  },
  {
    "id": 79,
    "level": 11,
    "title": "Soma infinita e dízimas",
    "kind": "num",
    "question": "Calcule a soma de todos os termos (infinitos) da P.G. com \\(a_1 = 12\\) e \\(q = \\frac{2}{3}\\).",
    "answer": "36",
    "hint": "Confira que \\(-1 < q < 1\\) e use \\(S = \\dfrac{a_1}{1-q}\\).",
    "steps": [
      "A fórmula da soma infinita é \\(S = \\dfrac{a_1}{1 - q}\\), mas ela só vale quando \\(-1 < q < 1\\).",
      "Aqui \\(q = \\frac{2}{3}\\), que está entre −1 e 1 ✓. Pode usar a fórmula.",
      "Substitua: \\(S = \\dfrac{12}{1 - \\left(\\frac{2}{3}\\right)}\\).",
      "Calcule o denominador: \\(1 - \\left(\\frac{2}{3}\\right) = \\frac{1}{3}\\). Fica \\(S = \\dfrac{12}{\\frac{1}{3}}\\).",
      "Divida (dividir por fração é multiplicar pelo inverso): \\(S = 36\\)."
    ]
  },
  {
    "id": 80,
    "level": 11,
    "title": "Soma infinita e dízimas",
    "kind": "num",
    "question": "Calcule a soma de todos os termos (infinitos) da P.G. com \\(a_1 = 6\\) e \\(q = -\\frac{1}{2}\\).",
    "answer": "4",
    "hint": "Confira que \\(-1 < q < 1\\) e use \\(S = \\dfrac{a_1}{1-q}\\).",
    "steps": [
      "A fórmula da soma infinita é \\(S = \\dfrac{a_1}{1 - q}\\), mas ela só vale quando \\(-1 < q < 1\\).",
      "Aqui \\(q = -\\frac{1}{2}\\), que está entre −1 e 1 ✓. Pode usar a fórmula.",
      "Substitua: \\(S = \\dfrac{6}{1 - \\left(-\\frac{1}{2}\\right)}\\).",
      "Calcule o denominador: \\(1 - \\left(-\\frac{1}{2}\\right) = \\frac{3}{2}\\). Fica \\(S = \\dfrac{6}{\\frac{3}{2}}\\).",
      "Divida (dividir por fração é multiplicar pelo inverso): \\(S = 4\\)."
    ]
  },
  {
    "id": 81,
    "level": 11,
    "title": "Soma infinita e dízimas",
    "kind": "num",
    "question": "Escreva a dízima periódica \\(0{,}333\\ldots\\) como fração. (Digite no formato 1/3.)",
    "answer": "1/3",
    "hint": "Escreva a dízima como soma de uma P.G. infinita (primeiro termo = parte que se repete, razão = 1/10 ou 1/100) e use \\(S = \\dfrac{a_1}{1-q}\\).",
    "steps": [
      "A dízima \\(0{,}333\\ldots\\) é a soma infinita \\(0{,}3 + 0{,}03 + 0{,}003 + \\ldots\\), uma P.G. com \\(a_1 = \\frac{3}{10}\\) e \\(q = \\frac{1}{10}\\).",
      "A fórmula da soma infinita é \\(S = \\dfrac{a_1}{1 - q}\\), mas ela só vale quando \\(-1 < q < 1\\).",
      "Aqui \\(q = \\frac{1}{10}\\), que está entre −1 e 1 ✓. Pode usar a fórmula.",
      "Substitua: \\(S = \\dfrac{\\frac{3}{10}}{1 - \\left(\\frac{1}{10}\\right)}\\).",
      "Calcule o denominador: \\(1 - \\left(\\frac{1}{10}\\right) = \\frac{9}{10}\\). Fica \\(S = \\dfrac{\\frac{3}{10}}{\\frac{9}{10}}\\).",
      "Divida (dividir por fração é multiplicar pelo inverso): \\(S = \\frac{1}{3}\\)."
    ]
  },
  {
    "id": 82,
    "level": 11,
    "title": "Soma infinita e dízimas",
    "kind": "num",
    "question": "Escreva a dízima periódica \\(0{,}5454\\ldots\\) como fração. (Digite no formato 1/3.)",
    "answer": "6/11",
    "hint": "Escreva a dízima como soma de uma P.G. infinita (primeiro termo = parte que se repete, razão = 1/10 ou 1/100) e use \\(S = \\dfrac{a_1}{1-q}\\).",
    "steps": [
      "A dízima \\(0{,}5454\\ldots\\) é a soma infinita \\(0{,}54 + 0{,}0054 + 0{,}000054 + \\ldots\\), uma P.G. com \\(a_1 = \\frac{27}{50}\\) e \\(q = \\frac{1}{100}\\).",
      "A fórmula da soma infinita é \\(S = \\dfrac{a_1}{1 - q}\\), mas ela só vale quando \\(-1 < q < 1\\).",
      "Aqui \\(q = \\frac{1}{100}\\), que está entre −1 e 1 ✓. Pode usar a fórmula.",
      "Substitua: \\(S = \\dfrac{\\frac{27}{50}}{1 - \\left(\\frac{1}{100}\\right)}\\).",
      "Calcule o denominador: \\(1 - \\left(\\frac{1}{100}\\right) = \\frac{99}{100}\\). Fica \\(S = \\dfrac{\\frac{27}{50}}{\\frac{99}{100}}\\).",
      "Divida (dividir por fração é multiplicar pelo inverso): \\(S = \\frac{6}{11}\\)."
    ]
  },
  {
    "id": 83,
    "level": 11,
    "title": "Soma infinita e dízimas",
    "kind": "yn",
    "question": "A soma infinita da P.G. \\((3,\\;6,\\;12,\\;24,\\;\\ldots)\\) tem valor finito?",
    "answer": "não",
    "answerText": "Não",
    "hint": "Calcule a razão e compare com o intervalo −1 < q < 1.",
    "steps": [
      "A razão é \\(q = 6 \\div 3 = 2\\).",
      "A soma infinita só existe (é finita) quando \\(-1 < q < 1\\). Como \\(q = 2\\) não está nesse intervalo, os termos só crescem e a soma diverge. Resposta: não."
    ]
  },
  {
    "id": 84,
    "level": 12,
    "title": "Problemas do dia a dia",
    "kind": "num",
    "question": "Uma cultura tem 5 bactérias no início e o número de bactérias dobra a cada hora. Quantas bactérias haverá depois de 6 horas?",
    "answer": "320",
    "hint": "Atenção: a hora 0 é o primeiro termo. Depois de 6 horas você está no 7º termo.",
    "steps": [
      "Traduzindo: no início (hora 0) há 5 bactérias ⇒ \\(a_1 = 5\\). Dobra a cada hora ⇒ \\(q = 2\\). A hora 6 é o 7º termo (hora 0 = \\(a_1\\), hora 1 = \\(a_2\\), … hora 6 = \\(a_7\\)) ⇒ \\(n = 7\\).",
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 5\\), \\(q = 2\\) e \\(n = 7\\). Queremos \\(a_{7}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{7} = 5 \\cdot 2^{\\,7-1}\\).",
      "Calcule o expoente: \\(7 - 1 = 6\\). Fica \\(a_{7} = 5 \\cdot 2^{6}\\).",
      "Calcule a potência multiplicando um a um: \\(2^{6} = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 64\\).",
      "Multiplique pelo primeiro termo: \\(a_{7} = 5 \\cdot 64 = 320\\).",
      "Conferência: listando os termos, \\(5,\\;10,\\;20,\\;40,\\;80,\\;160,\\;320\\). O 7º termo é \\(320\\) ✓."
    ]
  },
  {
    "id": 85,
    "level": 12,
    "title": "Problemas do dia a dia",
    "kind": "num",
    "question": "Uma folha de papel tem 0,1 mm de espessura. Dobrando-a ao meio 10 vezes seguidas, qual será a espessura, em mm? (Cada dobra dobra a espessura.)",
    "answer": "512/5",
    "hint": "Sem dobra é o 1º termo; 10 dobras levam ao 11º termo. Você pode digitar 102,4.",
    "steps": [
      "Traduzindo: sem dobras a espessura é \\(0{,}1\\) ⇒ \\(a_1 = \\tfrac{1}{10}\\). Cada dobra multiplica por 2 ⇒ \\(q = 2\\). Depois de 10 dobras estamos no 11º termo ⇒ \\(n = 11\\).",
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = \\frac{1}{10}\\), \\(q = 2\\) e \\(n = 11\\). Queremos \\(a_{11}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{11} = \\frac{1}{10} \\cdot 2^{\\,11-1}\\).",
      "Calcule o expoente: \\(11 - 1 = 10\\). Fica \\(a_{11} = \\frac{1}{10} \\cdot 2^{10}\\).",
      "Calcule a potência (multiplicando de um em um): \\(2^{10} = 1024\\).",
      "Multiplique pelo primeiro termo: \\(a_{11} = \\frac{1}{10} \\cdot 1024 = \\frac{512}{5}\\)."
    ]
  },
  {
    "id": 86,
    "level": 12,
    "title": "Problemas do dia a dia",
    "kind": "num",
    "question": "Aplicam-se R$ 1.000 a juros compostos de 10% ao mês. Qual será o montante (em reais) depois de 3 meses?",
    "answer": "1331",
    "hint": "q = 1 + taxa. O mês 0 é o 1º termo.",
    "steps": [
      "Traduzindo: aumenta 10% ⇒ \\(q = 1 + 0{,}10 = 1{,}1 = \\tfrac{11}{10}\\). Hoje (mês 0) é \\(a_1 = 1000\\). Mês 3 é o 4º termo ⇒ \\(n = 4\\).",
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 1000\\), \\(q = \\frac{11}{10}\\) e \\(n = 4\\). Queremos \\(a_{4}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{4} = 1000 \\cdot \\left(\\frac{11}{10}\\right)^{\\,4-1}\\).",
      "Calcule o expoente: \\(4 - 1 = 3\\). Fica \\(a_{4} = 1000 \\cdot \\left(\\frac{11}{10}\\right)^{3}\\).",
      "Calcule a potência multiplicando um a um: \\(\\left(\\frac{11}{10}\\right)^{3} = \\left(\\frac{11}{10}\\right) \\cdot \\left(\\frac{11}{10}\\right) \\cdot \\left(\\frac{11}{10}\\right) = \\frac{1331}{1000}\\).",
      "Multiplique pelo primeiro termo: \\(a_{4} = 1000 \\cdot \\left(\\frac{1331}{1000}\\right) = 1331\\).",
      "Conferência: listando os termos, \\(1000,\\;1100,\\;1210,\\;1331\\). O 4º termo é \\(1331\\) ✓."
    ]
  },
  {
    "id": 87,
    "level": 12,
    "title": "Problemas do dia a dia",
    "kind": "num",
    "question": "Um carro vale R$ 40.000 e perde 10% do valor a cada ano. Quanto ele valerá (em reais) depois de 2 anos?",
    "answer": "32400",
    "hint": "Queda de 10% ⇒ q = 0,9.",
    "steps": [
      "Traduzindo: perde 10% ⇒ \\(q = 1 - 0{,}10 = 0{,}9 = \\tfrac{9}{10}\\). Valor atual: \\(a_1 = 40000\\). Depois de 2 anos é o 3º termo ⇒ \\(n = 3\\).",
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 40\\,000\\), \\(q = \\frac{9}{10}\\) e \\(n = 3\\). Queremos \\(a_{3}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{3} = 40\\,000 \\cdot \\left(\\frac{9}{10}\\right)^{\\,3-1}\\).",
      "Calcule o expoente: \\(3 - 1 = 2\\). Fica \\(a_{3} = 40\\,000 \\cdot \\left(\\frac{9}{10}\\right)^{2}\\).",
      "Calcule a potência multiplicando um a um: \\(\\left(\\frac{9}{10}\\right)^{2} = \\left(\\frac{9}{10}\\right) \\cdot \\left(\\frac{9}{10}\\right) = \\frac{81}{100}\\).",
      "Multiplique pelo primeiro termo: \\(a_{3} = 40\\,000 \\cdot \\left(\\frac{81}{100}\\right) = 32\\,400\\).",
      "Conferência: listando os termos, \\(40\\,000,\\;36\\,000,\\;32\\,400\\). O 3º termo é \\(32\\,400\\) ✓."
    ]
  },
  {
    "id": 88,
    "level": 12,
    "title": "Problemas do dia a dia",
    "kind": "num",
    "question": "Uma pessoa conta um boato para 3 pessoas (1ª rodada). Cada uma delas conta para outras 3 pessoas que ainda não sabiam (2ª rodada), e assim por diante. Quantas pessoas ouvem o boato pela primeira vez na 4ª rodada?",
    "answer": "81",
    "hint": "1ª rodada = a₁. Cada rodada multiplica por 3.",
    "steps": [
      "Traduzindo: 1ª rodada: 3 pessoas ⇒ \\(a_1 = 3\\). Cada rodada triplica ⇒ \\(q = 3\\). A 4ª rodada é o 4º termo ⇒ \\(n = 4\\).",
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 3\\), \\(q = 3\\) e \\(n = 4\\). Queremos \\(a_{4}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{4} = 3 \\cdot 3^{\\,4-1}\\).",
      "Calcule o expoente: \\(4 - 1 = 3\\). Fica \\(a_{4} = 3 \\cdot 3^{3}\\).",
      "Calcule a potência multiplicando um a um: \\(3^{3} = 3 \\cdot 3 \\cdot 3 = 27\\).",
      "Multiplique pelo primeiro termo: \\(a_{4} = 3 \\cdot 27 = 81\\).",
      "Conferência: listando os termos, \\(3,\\;9,\\;27,\\;81\\). O 4º termo é \\(81\\) ✓."
    ]
  },
  {
    "id": 89,
    "level": 12,
    "title": "Problemas do dia a dia",
    "kind": "num",
    "question": "No mesmo boato (3 pessoas na 1ª rodada, triplicando a cada rodada), quantas pessoas já souberam dele ao todo ao final da 4ª rodada? (Não conte quem começou o boato.)",
    "answer": "120",
    "hint": "Soma das quatro primeiras rodadas: 3 + 9 + 27 + 81.",
    "steps": [
      "Traduzindo: queremos somar as pessoas das 4 primeiras rodadas: \\(a_1 = 3\\), \\(q = 3\\), \\(n = 4\\). Use a soma dos \\(n\\) primeiros termos.",
      "Escreva a fórmula da soma dos \\(n\\) primeiros termos: \\(S_n = \\dfrac{a_1 \\cdot (q^n - 1)}{q - 1}\\).",
      "Anote os dados: \\(a_1 = 3\\), \\(q = 3\\) e \\(n = 4\\) (quantidade de termos somados).",
      "Substitua: \\(S_{4} = \\dfrac{3 \\cdot \\left(3^{4} - 1\\right)}{3 - 1}\\).",
      "Calcule a potência multiplicando um a um: \\(3^{4} = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 81\\).",
      "Resolva o parêntese de cima e a conta de baixo: \\(81 - 1 = 80\\) e \\(3 - 1 = 2\\). Fica \\(S_{4} = \\dfrac{3 \\cdot 80}{2}\\).",
      "Multiplique em cima: \\(3 \\cdot 80 = 240\\). Fica \\(S_{4} = \\dfrac{240}{2}\\).",
      "Divida: \\(S_{4} = 120\\).",
      "Conferência: somando os termos à mão, \\(3 + 9 + 27 + 81 = 120\\) ✓."
    ]
  },
  {
    "id": 90,
    "level": 12,
    "title": "Problemas do dia a dia",
    "kind": "num",
    "question": "Uma bola é solta de 8 m de altura. Cada vez que quica, ela volta a \\(\\tfrac{1}{2}\\) da altura anterior. Qual é a altura (em metros) que ela atinge depois do 3º quique?",
    "answer": "1",
    "hint": "A altura inicial é o 1º termo, então o 3º quique leva ao 4º termo.",
    "steps": [
      "Traduzindo: altura inicial \\(a_1 = 8\\); cada quique multiplica por \\(q = \\tfrac{1}{2}\\). Depois do 1º quique é \\(a_2\\), do 2º é \\(a_3\\), do 3º é \\(a_4\\) ⇒ \\(n = 4\\).",
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 8\\), \\(q = \\frac{1}{2}\\) e \\(n = 4\\). Queremos \\(a_{4}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{4} = 8 \\cdot \\left(\\frac{1}{2}\\right)^{\\,4-1}\\).",
      "Calcule o expoente: \\(4 - 1 = 3\\). Fica \\(a_{4} = 8 \\cdot \\left(\\frac{1}{2}\\right)^{3}\\).",
      "Calcule a potência multiplicando um a um: \\(\\left(\\frac{1}{2}\\right)^{3} = \\left(\\frac{1}{2}\\right) \\cdot \\left(\\frac{1}{2}\\right) \\cdot \\left(\\frac{1}{2}\\right) = \\frac{1}{8}\\).",
      "Multiplique pelo primeiro termo: \\(a_{4} = 8 \\cdot \\left(\\frac{1}{8}\\right) = 1\\).",
      "Conferência: listando os termos, \\(8,\\;4,\\;2,\\;1\\). O 4º termo é \\(1\\) ✓."
    ]
  },
  {
    "id": 91,
    "level": 12,
    "title": "Problemas do dia a dia",
    "kind": "num",
    "question": "Um tanque tem 500 litros de água e perde 20% da água que tem a cada hora. Quantos litros restam depois de 3 horas?",
    "answer": "256",
    "hint": "q = 0,8 = 4/5. Depois de 3 horas, n = 4.",
    "steps": [
      "Traduzindo: perde 20% ⇒ \\(q = 1 - 0{,}20 = 0{,}8 = \\tfrac{4}{5}\\). Início: \\(a_1 = 500\\). Depois de 3 horas é o 4º termo ⇒ \\(n = 4\\).",
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 500\\), \\(q = \\frac{4}{5}\\) e \\(n = 4\\). Queremos \\(a_{4}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{4} = 500 \\cdot \\left(\\frac{4}{5}\\right)^{\\,4-1}\\).",
      "Calcule o expoente: \\(4 - 1 = 3\\). Fica \\(a_{4} = 500 \\cdot \\left(\\frac{4}{5}\\right)^{3}\\).",
      "Calcule a potência multiplicando um a um: \\(\\left(\\frac{4}{5}\\right)^{3} = \\left(\\frac{4}{5}\\right) \\cdot \\left(\\frac{4}{5}\\right) \\cdot \\left(\\frac{4}{5}\\right) = \\frac{64}{125}\\).",
      "Multiplique pelo primeiro termo: \\(a_{4} = 500 \\cdot \\left(\\frac{64}{125}\\right) = 256\\).",
      "Conferência: listando os termos, \\(500,\\;400,\\;320,\\;256\\). O 4º termo é \\(256\\) ✓."
    ]
  },
  {
    "id": 92,
    "level": 12,
    "title": "Problemas do dia a dia",
    "kind": "num",
    "question": "(Lenda do xadrez) Na 1ª casa do tabuleiro coloca-se 1 grão de trigo, na 2ª casa 2 grãos, na 3ª casa 4 grãos, e assim por diante, dobrando a cada casa. Quantos grãos há ao todo nas 10 primeiras casas?",
    "answer": "1023",
    "hint": "É uma soma dos 10 primeiros termos de (1, 2, 4, 8, …).",
    "steps": [
      "Traduzindo: \\(a_1 = 1\\), \\(q = 2\\), e somamos \\(n = 10\\) casas.",
      "Escreva a fórmula da soma dos \\(n\\) primeiros termos: \\(S_n = \\dfrac{a_1 \\cdot (q^n - 1)}{q - 1}\\).",
      "Anote os dados: \\(a_1 = 1\\), \\(q = 2\\) e \\(n = 10\\) (quantidade de termos somados).",
      "Substitua: \\(S_{10} = \\dfrac{1 \\cdot \\left(2^{10} - 1\\right)}{2 - 1}\\).",
      "Calcule a potência (multiplicando de um em um): \\(2^{10} = 1024\\).",
      "Resolva o parêntese de cima e a conta de baixo: \\(1024 - 1 = 1023\\) e \\(2 - 1 = 1\\). Fica \\(S_{10} = \\dfrac{1 \\cdot 1023}{1}\\).",
      "Multiplique em cima: \\(1 \\cdot 1023 = 1023\\). Fica \\(S_{10} = \\dfrac{1023}{1}\\).",
      "Divida: \\(S_{10} = 1023\\)."
    ]
  },
  {
    "id": 93,
    "level": 12,
    "title": "Problemas do dia a dia",
    "kind": "num",
    "question": "Um funcionário recebe 1 centavo no 1º dia, 2 centavos no 2º, 4 centavos no 3º, dobrando a cada dia. Quantos centavos ele recebe no 15º dia?",
    "answer": "16384",
    "hint": "Termo geral com n = 15.",
    "steps": [
      "Traduzindo: \\(a_1 = 1\\), \\(q = 2\\), \\(n = 15\\) (queremos o valor do 15º dia, não a soma).",
      "Escreva a fórmula do termo geral: \\(a_n = a_1 \\cdot q^{\\,n-1}\\).",
      "Anote os dados: \\(a_1 = 1\\), \\(q = 2\\) e \\(n = 15\\). Queremos \\(a_{15}\\).",
      "Substitua na fórmula (use parênteses em negativos e frações): \\(a_{15} = 1 \\cdot 2^{\\,15-1}\\).",
      "Calcule o expoente: \\(15 - 1 = 14\\). Fica \\(a_{15} = 1 \\cdot 2^{14}\\).",
      "Calcule a potência (multiplicando de um em um): \\(2^{14} = 16\\,384\\).",
      "Multiplique pelo primeiro termo: \\(a_{15} = 1 \\cdot 16\\,384 = 16\\,384\\)."
    ]
  },
  {
    "id": 94,
    "level": 13,
    "title": "Desafios finais",
    "kind": "num",
    "question": "Em uma P.G., \\(a_3 = 12\\) e \\(a_6 = 96\\). Qual é o primeiro termo \\(a_1\\)?",
    "answer": "3",
    "hint": "Use a_n = a_m · q^(n−m) para achar q primeiro.",
    "steps": [
      "De \\(a_3\\) até \\(a_6\\) são \\(6 - 3 = 3\\) saltos: \\(a_6 = a_3 \\cdot q^{3}\\).",
      "\\(96 = 12 \\cdot q^3\\), então \\(q^3 = 96 \\div 12 = 8\\), logo \\(q = 2\\).",
      "Agora use \\(a_3 = a_1 \\cdot q^{2}\\): \\(12 = a_1 \\cdot 2^2 = a_1 \\cdot 4\\).",
      "\\(a_1 = 12 \\div 4 = 3\\).",
      "Conferência: \\((3,\\;6,\\;12,\\;24,\\;48,\\;96)\\): o 3º é 12 e o 6º é 96 ✓."
    ]
  },
  {
    "id": 95,
    "level": 13,
    "title": "Desafios finais",
    "kind": "num",
    "question": "A soma dos 3 primeiros termos de uma P.G. de razão \\(q = 2\\) é \\(21\\). Qual é o primeiro termo?",
    "answer": "3",
    "hint": "Escreva S₃ em função de a₁ e iguale a 21.",
    "steps": [
      "Use \\(S_3 = \\dfrac{a_1(q^3 - 1)}{q - 1}\\) com \\(q = 2\\): \\(S_3 = \\dfrac{a_1(2^3 - 1)}{2 - 1}\\).",
      "\\(2^3 = 8\\), então \\(S_3 = \\dfrac{a_1 \\cdot 7}{1} = 7a_1\\).",
      "\\(7a_1 = 21\\), logo \\(a_1 = 3\\).",
      "Conferência: \\(3 + 6 + 12 = 21\\) ✓."
    ]
  },
  {
    "id": 96,
    "level": 13,
    "title": "Desafios finais",
    "kind": "num",
    "question": "Quantos termos da P.G. \\((1,\\;2,\\;4,\\;8,\\;\\ldots)\\) é preciso somar, a partir do primeiro, para obter \\(1023\\)?",
    "answer": "10",
    "hint": "Chegue em 2ⁿ = 1024 e use a tabela de potências de 2.",
    "steps": [
      "Dados: \\(a_1 = 1\\), \\(q = 2\\), \\(S_n = 1023\\). Use \\(S_n = \\dfrac{a_1(q^n - 1)}{q - 1}\\).",
      "\\(1023 = \\dfrac{1 \\cdot (2^n - 1)}{2 - 1} = 2^n - 1\\).",
      "Então \\(2^n = 1024\\).",
      "Lista das potências de 2: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 — a 10ª é 1024. Logo \\(n = 10\\)."
    ]
  },
  {
    "id": 97,
    "level": 13,
    "title": "Desafios finais",
    "kind": "num",
    "question": "Três números em P.G. têm soma \\(14\\) e produto \\(64\\). Qual é o maior deles?",
    "answer": "8",
    "hint": "Use x/q, x, x·q. O produto vira x³.",
    "steps": [
      "Escreva os números como \\(\\dfrac{x}{q},\\; x,\\; x \\cdot q\\). O produto é \\(x^3\\).",
      "\\(x^3 = 64\\), então \\(x = 4\\).",
      "Soma: \\(\\dfrac{4}{q} + 4 + 4q = 14\\), ou seja, \\(\\dfrac{4}{q} + 4q = 10\\).",
      "Multiplique tudo por \\(q\\): \\(4 + 4q^2 = 10q\\), que vira \\(2q^2 - 5q + 2 = 0\\).",
      "Bhaskara: \\(\\Delta = 25 - 16 = 9\\); \\(q = \\dfrac{5 \\pm 3}{4}\\), então \\(q = 2\\) ou \\(q = \\tfrac{1}{2}\\).",
      "Com \\(q = 2\\): \\((2,\\;4,\\;8)\\). Com \\(q = \\tfrac{1}{2}\\): \\((8,\\;4,\\;2)\\). Os mesmos números! O maior é 8.",
      "Conferência: \\(2 + 4 + 8 = 14\\) e \\(2 \\cdot 4 \\cdot 8 = 64\\) ✓."
    ]
  },
  {
    "id": 98,
    "level": 13,
    "title": "Desafios finais",
    "kind": "num",
    "question": "A soma de todos os termos de uma P.G. infinita é \\(12\\) e seu primeiro termo é \\(6\\). Qual é a razão?",
    "answer": "1/2",
    "hint": "Isole (1 − q) na fórmula da soma infinita. Digite 1/2.",
    "steps": [
      "Use \\(S = \\dfrac{a_1}{1 - q}\\): \\(12 = \\dfrac{6}{1 - q}\\).",
      "Passe \\((1 - q)\\) multiplicando: \\(12(1 - q) = 6\\).",
      "\\(1 - q = 6 \\div 12 = \\tfrac{1}{2}\\).",
      "\\(q = 1 - \\tfrac{1}{2} = \\tfrac{1}{2}\\) (está entre −1 e 1 ✓)."
    ]
  },
  {
    "id": 99,
    "level": 13,
    "title": "Desafios finais",
    "kind": "num",
    "question": "Uma P.G. tem \\(a_1 = 2\\), último termo \\(a_n = 1458\\) e soma dos termos \\(S_n = 2186\\). Quantos termos ela tem?",
    "answer": "7",
    "hint": "Primeiro ache q com S = (aₙ·q − a₁)/(q − 1); depois use o termo geral.",
    "steps": [
      "Use a variante da soma que usa o último termo: \\(S_n = \\dfrac{a_n \\cdot q - a_1}{q - 1}\\). Fica \\(2186 = \\dfrac{1458q - 2}{q - 1}\\).",
      "Multiplique em cruz: \\(2186(q - 1) = 1458q - 2\\), isto é, \\(2186q - 2186 = 1458q - 2\\).",
      "\\(2186q - 1458q = 2186 - 2\\), então \\(728q = 2184\\) e \\(q = 3\\).",
      "Agora ache \\(n\\): \\(1458 = 2 \\cdot 3^{n-1}\\) ⇒ \\(729 = 3^{n-1}\\).",
      "Potências de 3: 3, 9, 27, 81, 243, 729 — o 729 é \\(3^6\\). Então \\(n - 1 = 6\\) e \\(n = 7\\).",
      "Conferência: \\(2 + 6 + 18 + 54 + 162 + 486 + 1458 = 2186\\) ✓."
    ]
  },
  {
    "id": 100,
    "level": 13,
    "title": "Desafios finais",
    "kind": "num",
    "question": "Em uma P.G. de termos positivos, \\(a_2 = 6\\) e \\(a_5 = 162\\). Calcule a soma dos 5 primeiros termos.",
    "answer": "242",
    "hint": "Ache q (a₅ = a₂·q³), depois a₁ e então some.",
    "steps": [
      "De \\(a_2\\) até \\(a_5\\) são 3 saltos: \\(162 = 6 \\cdot q^3\\), então \\(q^3 = 27\\) e \\(q = 3\\).",
      "Ache \\(a_1\\): \\(a_2 = a_1 \\cdot q\\), então \\(6 = a_1 \\cdot 3\\) e \\(a_1 = 2\\).",
      "Some os 5 primeiros termos: \\(S_5 = \\dfrac{2 \\cdot (3^5 - 1)}{3 - 1} = \\dfrac{2 \\cdot 242}{2} = 242\\).",
      "Conferência: \\(2 + 6 + 18 + 54 + 162 = 242\\) ✓."
    ]
  }
] as const;
