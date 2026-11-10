export type IntroAlgebraExercise = { id:number; level:number; kind:'num'|'mc'; question:string; answer:string; options?:string[]; hint:string; steps:string[]; common?:{value:string;message:string}[] };
export type IntroAlgebraLevel = {level:number;name:string;description:string;reminder:string;lesson:string};

export const exerciseLevels: IntroAlgebraLevel[] = [
  {
    "level": 1,
    "name": "Letras, termos e coeficientes",
    "description": "Entenda o que é uma letra, um termo, um coeficiente e um termo independente.",
    "reminder": "Termo = parte separada por + ou −. Coeficiente = número que multiplica a letra (\\(x\\) tem coeficiente 1).",
    "lesson": "l4"
  },
  {
    "level": 2,
    "name": "Traduzindo frases para a álgebra",
    "description": "Escolha a expressão que corresponde à frase.",
    "reminder": "dobro \\(2n\\) · triplo \\(3n\\) · metade \\(\\tfrac{n}{2}\\) · sucessor \\(n+1\\) · antecessor \\(n-1\\) · quadrado \\(n^2\\).",
    "lesson": "l3"
  },
  {
    "level": 3,
    "name": "Traduções com mais atenção (e ao contrário)",
    "description": "Parênteses, ordem e situações do dia a dia.",
    "reminder": "“O dobro da soma” usa parênteses: \\(2(x+3)\\). “A soma do dobro” não: \\(2x+3\\).",
    "lesson": "l3"
  },
  {
    "level": 4,
    "name": "Valor numérico — um passo",
    "description": "Troque a letra pelo número e faça uma conta.",
    "reminder": "\\(3x\\) significa \\(3 \\cdot x\\), e não “3 e x juntos”.",
    "lesson": "l5"
  },
  {
    "level": 5,
    "name": "Valor numérico — duas operações",
    "description": "Respeite a ordem: multiplicação antes de soma e subtração.",
    "reminder": "Ordem: parênteses → potências → × e ÷ → + e −.",
    "lesson": "l5"
  },
  {
    "level": 6,
    "name": "Parênteses e potências",
    "description": "Cuidado com \\(x^2\\), \\(2x^2\\) e \\((2x)^2\\).",
    "reminder": "\\(x^2 = x \\cdot x\\). Em \\(2x^2\\) o expoente é só do \\(x\\); em \\((2x)^2\\) é de tudo.",
    "lesson": "l5"
  },
  {
    "level": 7,
    "name": "Valor numérico com duas letras",
    "description": "Cada letra recebe o seu valor.",
    "reminder": "Troque cada letra pelo valor dela e resolva na ordem certa.",
    "lesson": "l5"
  },
  {
    "level": 8,
    "name": "Decimais e frações",
    "description": "As mesmas contas, agora com números decimais e frações.",
    "reminder": "\\(0{,}5 = \\tfrac{1}{2}\\). Em potência, use o decimal entre parênteses: \\((0{,}5)^2\\).",
    "lesson": "l5"
  },
  {
    "level": 9,
    "name": "Tabelas, sequências e regras",
    "description": "Descubra e use a regra geral de um padrão.",
    "reminder": "Cresce \\(c\\) por passo ⇒ regra \\(c \\cdot n + k\\), com \\(k = (1^\\circ\\ \\text{termo}) - c\\).",
    "lesson": "l6"
  },
  {
    "level": 10,
    "name": "Fórmulas do dia a dia",
    "description": "Perímetro, área, custo, distância e média.",
    "reminder": "Troque as letras da fórmula pelos valores do problema e calcule.",
    "lesson": "l9"
  },
  {
    "level": 11,
    "name": "Problemas: interprete e calcule",
    "description": "Sem a expressão pronta: você monta e depois calcula o valor numérico.",
    "reminder": "Dê uma letra ao que muda, escreva a expressão, substitua e responda com a unidade.",
    "lesson": "l10"
  },
  {
    "level": 12,
    "name": "Igualdades: descubra o valor desconhecido",
    "description": "Desfaça as operações nos dois lados da balança.",
    "reminder": "Desfaça a operação com a inversa: soma ↔ subtração, vezes ↔ divisão. Confira no final.",
    "lesson": "l7"
  },
  {
    "level": 13,
    "name": "Problemas: interprete e monte a igualdade",
    "description": "Leia a história, escreva a igualdade e descubra o valor desconhecido.",
    "reminder": "Se o problema dá o resultado e pergunta o valor da letra, monte uma igualdade.",
    "lesson": "l10"
  },
  {
    "level": 14,
    "name": "Desafios finais",
    "description": "Equivalência, padrões, comparações e problemas que misturam tudo.",
    "reminder": "Quando travar: faça uma tabela de valores ou teste com números pequenos.",
    "lesson": "l8"
  }
];

export const exercisesData: IntroAlgebraExercise[] = [
  {
    "id": 1,
    "level": 1,
    "kind": "num",
    "question": "Na expressão \\(3x + 5\\), quantos termos existem?",
    "answer": "2",
    "hint": "Termos são as partes separadas por + ou −. Conte os pedaços.",
    "steps": [
      "Termos são as partes separadas por \\(+\\) ou \\(-\\).",
      "Em \\(3x + 5\\) temos o termo \\(3x\\) e o termo \\(5\\): são 2 termos."
    ],
    "common": []
  },
  {
    "id": 2,
    "level": 1,
    "kind": "num",
    "question": "Na expressão \\(7y\\), qual é o coeficiente (o número que multiplica a letra)?",
    "answer": "7",
    "hint": "O coeficiente é o número que aparece junto da letra.",
    "steps": [
      "\\(7y\\) significa \\(7 \\cdot y\\).",
      "O número que multiplica a letra é o 7, o coeficiente."
    ],
    "common": []
  },
  {
    "id": 3,
    "level": 1,
    "kind": "num",
    "question": "Em \\(4a + 2b + 9\\), qual é o termo independente (o termo que não tem letra)?",
    "answer": "9",
    "hint": "É o termo sem letra.",
    "steps": [
      "Os termos são \\(4a\\), \\(2b\\) e \\(9\\).",
      "Só o \\(9\\) não tem letra: é o termo independente."
    ],
    "common": []
  },
  {
    "id": 4,
    "level": 1,
    "kind": "mc",
    "question": "Em \\(5x\\), a letra \\(x\\) representa:",
    "answer": "um número (desconhecido ou que pode variar)",
    "options": [
      "um número (desconhecido ou que pode variar)",
      "a letra X maiúscula",
      "sempre o número 10",
      "o resultado de 5 + 5"
    ],
    "hint": "Na álgebra, as letras ficam no lugar de números.",
    "steps": [
      "Em álgebra, uma letra representa um número.",
      "Esse número pode ser desconhecido (incógnita) ou pode mudar (variável). \\(5x\\) significa \\(5\\) vezes esse número."
    ],
    "common": []
  },
  {
    "id": 5,
    "level": 1,
    "kind": "num",
    "question": "Quantas letras diferentes aparecem em \\(3a + 2b - c\\)?",
    "answer": "3",
    "hint": "Conte letras distintas.",
    "steps": [
      "As letras que aparecem são \\(a\\), \\(b\\) e \\(c\\).",
      "São 3 letras diferentes."
    ],
    "common": []
  },
  {
    "id": 6,
    "level": 1,
    "kind": "num",
    "question": "Qual é o coeficiente de \\(x\\) em \\(x + 8\\)?",
    "answer": "1",
    "hint": "Quando não aparece número na frente da letra, ele existe escondido.",
    "steps": [
      "Quando não aparece número na frente da letra, ele é o 1 escondido: \\(x = 1 \\cdot x\\).",
      "Então o coeficiente é 1."
    ],
    "common": []
  },
  {
    "id": 7,
    "level": 1,
    "kind": "mc",
    "question": "O que significa \\(6n\\)?",
    "answer": "6 vezes n (6 · n)",
    "options": [
      "6 vezes n (6 · n)",
      "6 mais n",
      "o número 6 seguido do n",
      "6 elevado a n"
    ],
    "hint": "Entre número e letra o sinal de vezes fica escondido.",
    "steps": [
      "Entre um número e uma letra, o sinal de vezes não é escrito.",
      "Então \\(6n = 6 \\cdot n\\): 6 vezes n."
    ],
    "common": []
  },
  {
    "id": 8,
    "level": 1,
    "kind": "num",
    "question": "Em \\(2x + 3y + 4\\), quantos termos têm letra?",
    "answer": "2",
    "hint": "Veja quais termos têm letra e quais são só números.",
    "steps": [
      "Os termos são \\(2x\\), \\(3y\\) e \\(4\\).",
      "\\(2x\\) e \\(3y\\) têm letra; \\(4\\) não tem. Resposta: 2."
    ],
    "common": []
  },
  {
    "id": 9,
    "level": 2,
    "kind": "mc",
    "question": "Qual expressão representa o dobro de um número \\(n\\)?",
    "answer": "\\(2n\\)",
    "options": [
      "\\(n + 2\\)",
      "\\(2n\\)",
      "\\(n^2\\)",
      "\\(\\dfrac{n}{2}\\)"
    ],
    "hint": "Traduza a frase palavra por palavra e teste com um número.",
    "steps": [
      "“Dobro” significa vezes 2.",
      "O dobro de \\(n\\) é \\(2 \\cdot n = 2n\\). Teste: se \\(n = 5\\), o dobro é 10 e \\(2 \\cdot 5 = 10\\) ✓."
    ],
    "common": []
  },
  {
    "id": 10,
    "level": 2,
    "kind": "mc",
    "question": "Qual expressão representa a metade de um número \\(y\\)?",
    "answer": "\\(\\dfrac{y}{2}\\)",
    "options": [
      "\\(2y\\)",
      "\\(y - 2\\)",
      "\\(\\dfrac{y}{2}\\)",
      "\\(y + 2\\)"
    ],
    "hint": "Traduza a frase palavra por palavra e teste com um número.",
    "steps": [
      "“Metade” significa dividir por 2.",
      "A metade de \\(y\\) é \\(y \\div 2 = \\dfrac{y}{2}\\). Teste: se \\(y = 10\\), metade é 5."
    ],
    "common": []
  },
  {
    "id": 11,
    "level": 2,
    "kind": "mc",
    "question": "Qual expressão representa o sucessor de um número \\(n\\)?",
    "answer": "\\(n + 1\\)",
    "options": [
      "\\(n + 1\\)",
      "\\(n - 1\\)",
      "\\(2n\\)",
      "\\(n^2\\)"
    ],
    "hint": "Traduza a frase palavra por palavra e teste com um número.",
    "steps": [
      "O sucessor é o próximo número: soma 1.",
      "Sucessor de \\(n\\): \\(n + 1\\). Teste: sucessor de 7 é 8."
    ],
    "common": []
  },
  {
    "id": 12,
    "level": 2,
    "kind": "mc",
    "question": "Qual expressão representa o antecessor de um número \\(n\\)?",
    "answer": "\\(n - 1\\)",
    "options": [
      "\\(n + 1\\)",
      "\\(n - 1\\)",
      "\\(n - 2\\)",
      "\\(\\dfrac{n}{2}\\)"
    ],
    "hint": "Traduza a frase palavra por palavra e teste com um número.",
    "steps": [
      "O antecessor é o número anterior: tira 1.",
      "Antecessor de \\(n\\): \\(n - 1\\). Teste: antecessor de 7 é 6."
    ],
    "common": []
  },
  {
    "id": 13,
    "level": 2,
    "kind": "mc",
    "question": "Qual expressão representa o quadrado de um número \\(a\\)?",
    "answer": "\\(a^2\\)",
    "options": [
      "\\(2a\\)",
      "\\(a + 2\\)",
      "\\(a^2\\)",
      "\\(\\dfrac{a}{2}\\)"
    ],
    "hint": "Traduza a frase palavra por palavra e teste com um número.",
    "steps": [
      "Quadrado é o número vezes ele mesmo.",
      "\\(a \\cdot a = a^2\\). Teste: o quadrado de 5 é 25 e \\(5^2 = 25\\) ✓ (e não \\(2 \\cdot 5 = 10\\))."
    ],
    "common": []
  },
  {
    "id": 14,
    "level": 2,
    "kind": "mc",
    "question": "Qual expressão representa o triplo de \\(x\\), mais 5?",
    "answer": "\\(3x + 5\\)",
    "options": [
      "\\(3(x + 5)\\)",
      "\\(3x + 5\\)",
      "\\(x + 15\\)",
      "\\(5x + 3\\)"
    ],
    "hint": "Traduza a frase palavra por palavra e teste com um número.",
    "steps": [
      "“O triplo de \\(x\\)” é \\(3x\\).",
      "“Mais 5” soma 5 depois: \\(3x + 5\\). Teste: \\(x = 2\\): triplo é 6, mais 5 dá 11, e \\(3 \\cdot 2 + 5 = 11\\) ✓."
    ],
    "common": []
  },
  {
    "id": 15,
    "level": 2,
    "kind": "mc",
    "question": "Qual expressão representa a soma de \\(x\\) e \\(y\\)?",
    "answer": "\\(x + y\\)",
    "options": [
      "\\(xy\\)",
      "\\(x - y\\)",
      "\\(x + y\\)",
      "\\(\\dfrac{x}{y}\\)"
    ],
    "hint": "Traduza a frase palavra por palavra e teste com um número.",
    "steps": [
      "“Soma” é a operação de adicionar.",
      "A soma de \\(x\\) e \\(y\\) é \\(x + y\\)."
    ],
    "common": []
  },
  {
    "id": 16,
    "level": 2,
    "kind": "mc",
    "question": "Qual expressão representa a diferença entre \\(a\\) e 7, nessa ordem?",
    "answer": "\\(a - 7\\)",
    "options": [
      "\\(7 - a\\)",
      "\\(a - 7\\)",
      "\\(a + 7\\)",
      "\\(7a\\)"
    ],
    "hint": "Traduza a frase palavra por palavra e teste com um número.",
    "steps": [
      "“Diferença” é subtração e a frase manda a ordem: primeiro \\(a\\), depois 7.",
      "Resposta: \\(a - 7\\). Teste: \\(a = 10\\): \\(10 - 7 = 3\\)."
    ],
    "common": []
  },
  {
    "id": 17,
    "level": 3,
    "kind": "mc",
    "question": "Qual expressão representa o dobro da soma de \\(x\\) e 3?",
    "answer": "\\(2(x + 3)\\)",
    "options": [
      "\\(2x + 3\\)",
      "\\(2(x + 3)\\)",
      "\\(x + 6\\)",
      "\\(2 + x + 3\\)"
    ],
    "hint": "Traduza a frase palavra por palavra e teste com um número.",
    "steps": [
      "“A soma de \\(x\\) e 3” é \\(x + 3\\), e tudo é dobrado.",
      "Parênteses mostram o que é dobrado: \\(2(x + 3)\\). Teste: \\(x = 1\\): soma 4, dobro 8, e \\(2(1 + 3) = 8\\) ✓ (já \\(2 \\cdot 1 + 3 = 5\\) ✗)."
    ],
    "common": []
  },
  {
    "id": 18,
    "level": 3,
    "kind": "mc",
    "question": "Qual expressão representa a soma do dobro de \\(x\\) com 3?",
    "answer": "\\(2x + 3\\)",
    "options": [
      "\\(2x + 3\\)",
      "\\(2(x + 3)\\)",
      "\\(3x + 2\\)",
      "\\(x + 5\\)"
    ],
    "hint": "Traduza a frase palavra por palavra e teste com um número.",
    "steps": [
      "Primeiro o dobro de \\(x\\): \\(2x\\). Depois soma 3.",
      "\\(2x + 3\\). Só o \\(x\\) é dobrado."
    ],
    "common": []
  },
  {
    "id": 19,
    "level": 3,
    "kind": "mc",
    "question": "Qual expressão representa cinco a mais que o triplo de \\(n\\)?",
    "answer": "\\(3n + 5\\)",
    "options": [
      "\\(3(n + 5)\\)",
      "\\(5n + 3\\)",
      "\\(3n + 5\\)",
      "\\(n + 8\\)"
    ],
    "hint": "Traduza a frase palavra por palavra e teste com um número.",
    "steps": [
      "“O triplo de \\(n\\)” é \\(3n\\).",
      "“Cinco a mais” soma 5: \\(3n + 5\\)."
    ],
    "common": []
  },
  {
    "id": 20,
    "level": 3,
    "kind": "mc",
    "question": "Qual frase corresponde a \\(n - 4\\)?",
    "answer": "n menos 4 (4 a menos que n)",
    "options": [
      "4 menos n",
      "n dividido por 4",
      "n menos 4 (4 a menos que n)",
      "o quádruplo de n"
    ],
    "hint": "Leia da esquerda para a direita.",
    "steps": [
      "\\(n - 4\\) lê-se “n menos 4”.",
      "É o mesmo que “4 a menos que \\(n\\)”. Não confunda com “4 menos \\(n\\)”, que seria \\(4 - n\\)."
    ],
    "common": []
  },
  {
    "id": 21,
    "level": 3,
    "kind": "mc",
    "question": "Qual frase corresponde a \\(2(n + 1)\\)?",
    "answer": "o dobro do sucessor de n",
    "options": [
      "o dobro do sucessor de n",
      "o sucessor do dobro de n",
      "n mais 2",
      "o dobro de n"
    ],
    "hint": "O que está dentro do parêntese é feito primeiro.",
    "steps": [
      "Dentro do parêntese: \\(n + 1\\), o sucessor de \\(n\\).",
      "Fora: vezes 2. Então é o dobro do sucessor de \\(n\\)."
    ],
    "common": []
  },
  {
    "id": 22,
    "level": 3,
    "kind": "mc",
    "question": "Um número par pode ser escrito como (com \\(n\\) natural):",
    "answer": "\\(2n\\)",
    "options": [
      "\\(2n + 1\\)",
      "\\(2n\\)",
      "\\(n + 2\\)",
      "\\(\\dfrac{n}{2}\\)"
    ],
    "hint": "Par é múltiplo de 2.",
    "steps": [
      "Número par é múltiplo de 2: 0, 2, 4, 6, …",
      "Isso é \\(2 \\cdot n = 2n\\) (com \\(n\\) = 0, 1, 2, 3…). Já \\(2n + 1\\) dá os ímpares."
    ],
    "common": []
  },
  {
    "id": 23,
    "level": 3,
    "kind": "mc",
    "question": "Qual expressão representa o perímetro de um quadrado de lado \\(\\ell\\)?",
    "answer": "\\(4\\ell\\)",
    "options": [
      "\\(\\ell^2\\)",
      "\\(4\\ell\\)",
      "\\(2\\ell\\)",
      "\\(\\ell + 4\\)"
    ],
    "hint": "O perímetro é a soma dos 4 lados.",
    "steps": [
      "Perímetro é a soma dos lados. O quadrado tem 4 lados iguais.",
      "\\(\\ell + \\ell + \\ell + \\ell = 4\\ell\\). (\\(\\ell^2\\) seria a área.)"
    ],
    "common": []
  },
  {
    "id": 24,
    "level": 3,
    "kind": "mc",
    "question": "Ana tem \\(a\\) reais. Bia tem o dobro do que Ana tem, mais 3 reais. Quantos reais tem Bia?",
    "answer": "\\(2a + 3\\)",
    "options": [
      "\\(2(a + 3)\\)",
      "\\(2a + 3\\)",
      "\\(a + 6\\)",
      "\\(3a + 2\\)"
    ],
    "hint": "Primeiro o dobro de a; depois “mais 3”.",
    "steps": [
      "O dobro do que Ana tem: \\(2a\\).",
      "“Mais 3 reais”: \\(2a + 3\\). (Não é \\(2(a + 3)\\), porque o 3 não é dobrado.)"
    ],
    "common": []
  },
  {
    "id": 25,
    "level": 4,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(3x\\) para \\(x = 4\\).",
    "answer": "12",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(3x\\), com \\(x = 4\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(3 \\cdot 4\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(12\\)."
    ],
    "common": [
      {
        "value": "34",
        "message": "3x significa 3 · x (3 vezes 4), e não o número 34."
      }
    ]
  },
  {
    "id": 26,
    "level": 4,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(x + 9\\) para \\(x = 6\\).",
    "answer": "15",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(x + 9\\), com \\(x = 6\\).",
      "Troque a letra pelo valor dela: \\(6 + 9\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(15\\)."
    ],
    "common": []
  },
  {
    "id": 27,
    "level": 4,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(x - 2\\) para \\(x = 10\\).",
    "answer": "8",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(x - 2\\), com \\(x = 10\\).",
      "Troque a letra pelo valor dela: \\(10 - 2\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(8\\)."
    ],
    "common": []
  },
  {
    "id": 28,
    "level": 4,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(5y\\) para \\(y = 7\\).",
    "answer": "35",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(5y\\), com \\(y = 7\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(5 \\cdot 7\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(35\\)."
    ],
    "common": [
      {
        "value": "57",
        "message": "5y significa 5 · y, e não o número 57."
      }
    ]
  },
  {
    "id": 29,
    "level": 4,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(\\frac{a}{2}\\) para \\(a = 14\\).",
    "answer": "7",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(\\frac{a}{2}\\), com \\(a = 14\\).",
      "Troque a letra pelo valor dela: \\(14 \\div 2\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(7\\)."
    ],
    "common": []
  },
  {
    "id": 30,
    "level": 4,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(10 - n\\) para \\(n = 3\\).",
    "answer": "7",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(10 - n\\), com \\(n = 3\\).",
      "Troque a letra pelo valor dela: \\(10 - 3\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(7\\)."
    ],
    "common": []
  },
  {
    "id": 31,
    "level": 4,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(x^{2}\\) para \\(x = 6\\).",
    "answer": "36",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(x^{2}\\), com \\(x = 6\\).",
      "Troque a letra pelo valor dela: \\(6^{2}\\).",
      "Resolva as potências: \\(36\\)."
    ],
    "common": [
      {
        "value": "12",
        "message": "x² é x · x (6 · 6), e não 2 · x."
      }
    ]
  },
  {
    "id": 32,
    "level": 4,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(x^{3}\\) para \\(x = 2\\).",
    "answer": "8",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(x^{3}\\), com \\(x = 2\\).",
      "Troque a letra pelo valor dela: \\(2^{3}\\).",
      "Resolva as potências: \\(8\\)."
    ],
    "common": [
      {
        "value": "6",
        "message": "x³ é x · x · x (2 · 2 · 2), e não 3 · x."
      }
    ]
  },
  {
    "id": 33,
    "level": 5,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(2x + 3\\) para \\(x = 5\\).",
    "answer": "13",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(2x + 3\\), com \\(x = 5\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(2 \\cdot 5 + 3\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(10 + 3\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(13\\)."
    ],
    "common": [
      {
        "value": "25",
        "message": "Faça a multiplicação antes da soma: 2 · 5 primeiro."
      }
    ]
  },
  {
    "id": 34,
    "level": 5,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(5x - 4\\) para \\(x = 3\\).",
    "answer": "11",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(5x - 4\\), com \\(x = 3\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(5 \\cdot 3 - 4\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(15 - 4\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(11\\)."
    ],
    "common": [
      {
        "value": "3",
        "message": "Faça a multiplicação 5 · 3 antes de subtrair."
      }
    ]
  },
  {
    "id": 35,
    "level": 5,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(\\frac{x}{2} + 1\\) para \\(x = 10\\).",
    "answer": "6",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(\\frac{x}{2} + 1\\), com \\(x = 10\\).",
      "Troque a letra pelo valor dela: \\(10 \\div 2 + 1\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(5 + 1\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(6\\)."
    ],
    "common": []
  },
  {
    "id": 36,
    "level": 5,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(3n + 7\\) para \\(n = 4\\).",
    "answer": "19",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(3n + 7\\), com \\(n = 4\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(3 \\cdot 4 + 7\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(12 + 7\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(19\\)."
    ],
    "common": []
  },
  {
    "id": 37,
    "level": 5,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(20 - 2x\\) para \\(x = 6\\).",
    "answer": "8",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(20 - 2x\\), com \\(x = 6\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(20 - 2 \\cdot 6\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(20 - 12\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(8\\)."
    ],
    "common": [
      {
        "value": "108",
        "message": "Faça a multiplicação 2 · 6 antes de subtrair de 20."
      }
    ]
  },
  {
    "id": 38,
    "level": 5,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(x^{2} + 1\\) para \\(x = 5\\).",
    "answer": "26",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(x^{2} + 1\\), com \\(x = 5\\).",
      "Troque a letra pelo valor dela: \\(5^{2} + 1\\).",
      "Resolva as potências: \\(25 + 1\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(26\\)."
    ],
    "common": []
  },
  {
    "id": 39,
    "level": 5,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(100 - 8x\\) para \\(x = 9\\).",
    "answer": "28",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(100 - 8x\\), com \\(x = 9\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(100 - 8 \\cdot 9\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(100 - 72\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(28\\)."
    ],
    "common": []
  },
  {
    "id": 40,
    "level": 5,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(10 + 3x\\) para \\(x = 0\\).",
    "answer": "10",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −. Quando x vale 0, o termo 3x vale 0.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(10 + 3x\\), com \\(x = 0\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(10 + 3 \\cdot 0\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(10 + 0\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(10\\)."
    ],
    "common": []
  },
  {
    "id": 41,
    "level": 6,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(2\\left(x + 3\\right)\\) para \\(x = 4\\).",
    "answer": "14",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(2\\left(x + 3\\right)\\), com \\(x = 4\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(2 \\cdot \\left(4 + 3\\right)\\).",
      "Primeiro os parênteses (dentro deles: as somas e subtrações (da esquerda para a direita)): \\(2 \\cdot 7\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(14\\)."
    ],
    "common": [
      {
        "value": "11",
        "message": "O 2 multiplica TUDO que está nos parênteses; resolva (4 + 3) primeiro."
      }
    ]
  },
  {
    "id": 42,
    "level": 6,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(3\\left(x - 1\\right)\\) para \\(x = 6\\).",
    "answer": "15",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(3\\left(x - 1\\right)\\), com \\(x = 6\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(3 \\cdot \\left(6 - 1\\right)\\).",
      "Primeiro os parênteses (dentro deles: as somas e subtrações (da esquerda para a direita)): \\(3 \\cdot 5\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(15\\)."
    ],
    "common": [
      {
        "value": "17",
        "message": "Resolva primeiro o parêntese: (6 − 1)."
      }
    ]
  },
  {
    "id": 43,
    "level": 6,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(\\left(x + 2\\right)^{2}\\) para \\(x = 3\\).",
    "answer": "25",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(\\left(x + 2\\right)^{2}\\), com \\(x = 3\\).",
      "Troque a letra pelo valor dela: \\(\\left(3 + 2\\right)^{2}\\).",
      "Primeiro os parênteses (dentro deles: as somas e subtrações (da esquerda para a direita)): \\(5^{2}\\).",
      "Resolva as potências: \\(25\\)."
    ],
    "common": [
      {
        "value": "11",
        "message": "O expoente vale para o parêntese todo: (3 + 2)²."
      }
    ]
  },
  {
    "id": 44,
    "level": 6,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(x^{2} + 2x\\) para \\(x = 4\\).",
    "answer": "24",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(x^{2} + 2x\\), com \\(x = 4\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(4^{2} + 2 \\cdot 4\\).",
      "Resolva as potências: \\(16 + 2 \\cdot 4\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(16 + 8\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(24\\)."
    ],
    "common": []
  },
  {
    "id": 45,
    "level": 6,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(5\\left(2x + 1\\right)\\) para \\(x = 3\\).",
    "answer": "35",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(5\\left(2x + 1\\right)\\), com \\(x = 3\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(5 \\cdot \\left(2 \\cdot 3 + 1\\right)\\).",
      "Primeiro os parênteses (dentro deles: as multiplicações e divisões (da esquerda para a direita)): \\(5 \\cdot \\left(6 + 1\\right)\\).",
      "Primeiro os parênteses (dentro deles: as somas e subtrações (da esquerda para a direita)): \\(5 \\cdot 7\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(35\\)."
    ],
    "common": []
  },
  {
    "id": 46,
    "level": 6,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(\\frac{x + 4}{2}\\) para \\(x = 8\\).",
    "answer": "6",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(\\frac{x + 4}{2}\\), com \\(x = 8\\).",
      "Troque a letra pelo valor dela: \\(\\left(8 + 4\\right) \\div 2\\).",
      "Primeiro os parênteses (dentro deles: as somas e subtrações (da esquerda para a direita)): \\(12 \\div 2\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(6\\)."
    ],
    "common": []
  },
  {
    "id": 47,
    "level": 6,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(2x^{2}\\) para \\(x = 3\\).",
    "answer": "18",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(2x^{2}\\), com \\(x = 3\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(2 \\cdot 3^{2}\\).",
      "Resolva as potências: \\(2 \\cdot 9\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(18\\)."
    ],
    "common": [
      {
        "value": "36",
        "message": "Em 2x² o expoente 2 é só do x: 2 · 3², e não (2 · 3)²."
      }
    ]
  },
  {
    "id": 48,
    "level": 6,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(\\left(3x\\right)^{2}\\) para \\(x = 2\\).",
    "answer": "36",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(\\left(3x\\right)^{2}\\), com \\(x = 2\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(\\left(3 \\cdot 2\\right)^{2}\\).",
      "Primeiro os parênteses (dentro deles: as multiplicações e divisões (da esquerda para a direita)): \\(6^{2}\\).",
      "Resolva as potências: \\(36\\)."
    ],
    "common": [
      {
        "value": "12",
        "message": "Em (3x)² o expoente vale para o 3 e para o x: (3 · 2)²."
      }
    ]
  },
  {
    "id": 49,
    "level": 7,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(a + b\\) para \\(a = 3\\) e \\(b = 5\\).",
    "answer": "8",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(a + b\\), com \\(a = 3\\) e \\(b = 5\\).",
      "Troque cada letra pelo valor dela: \\(3 + 5\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(8\\)."
    ],
    "common": []
  },
  {
    "id": 50,
    "level": 7,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(2a + b\\) para \\(a = 4\\) e \\(b = 3\\).",
    "answer": "11",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(2a + b\\), com \\(a = 4\\) e \\(b = 3\\).",
      "Troque cada letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(2 \\cdot 4 + 3\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(8 + 3\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(11\\)."
    ],
    "common": []
  },
  {
    "id": 51,
    "level": 7,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(3x + 2y\\) para \\(x = 2\\) e \\(y = 5\\).",
    "answer": "16",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(3x + 2y\\), com \\(x = 2\\) e \\(y = 5\\).",
      "Troque cada letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(3 \\cdot 2 + 2 \\cdot 5\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(6 + 10\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(16\\)."
    ],
    "common": []
  },
  {
    "id": 52,
    "level": 7,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(ab\\) para \\(a = 6\\) e \\(b = 7\\).",
    "answer": "42",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(ab\\), com \\(a = 6\\) e \\(b = 7\\).",
      "Troque cada letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(6 \\cdot 7\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(42\\)."
    ],
    "common": [
      {
        "value": "67",
        "message": "ab significa a · b (6 vezes 7), e não o número 67."
      }
    ]
  },
  {
    "id": 53,
    "level": 7,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(a^{2} + b^{2}\\) para \\(a = 3\\) e \\(b = 4\\).",
    "answer": "25",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(a^{2} + b^{2}\\), com \\(a = 3\\) e \\(b = 4\\).",
      "Troque cada letra pelo valor dela: \\(3^{2} + 4^{2}\\).",
      "Resolva as potências: \\(9 + 16\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(25\\)."
    ],
    "common": [
      {
        "value": "14",
        "message": "Calcule cada potência: 3² e 4², depois some."
      }
    ]
  },
  {
    "id": 54,
    "level": 7,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(2\\left(a + b\\right)\\) para \\(a = 5\\) e \\(b = 3\\).",
    "answer": "16",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(2\\left(a + b\\right)\\), com \\(a = 5\\) e \\(b = 3\\).",
      "Troque cada letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(2 \\cdot \\left(5 + 3\\right)\\).",
      "Primeiro os parênteses (dentro deles: as somas e subtrações (da esquerda para a direita)): \\(2 \\cdot 8\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(16\\)."
    ],
    "common": []
  },
  {
    "id": 55,
    "level": 7,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(xy + x\\) para \\(x = 4\\) e \\(y = 3\\).",
    "answer": "16",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(xy + x\\), com \\(x = 4\\) e \\(y = 3\\).",
      "Troque cada letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(4 \\cdot 3 + 4\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(12 + 4\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(16\\)."
    ],
    "common": []
  },
  {
    "id": 56,
    "level": 7,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(\\left(a + b\\right)\\left(a - b\\right)\\) para \\(a = 7\\) e \\(b = 3\\).",
    "answer": "40",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(\\left(a + b\\right)\\left(a - b\\right)\\), com \\(a = 7\\) e \\(b = 3\\).",
      "Troque cada letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(\\left(7 + 3\\right) \\cdot \\left(7 - 3\\right)\\).",
      "Primeiro os parênteses (dentro deles: as somas e subtrações (da esquerda para a direita)): \\(10 \\cdot 4\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(40\\)."
    ],
    "common": []
  },
  {
    "id": 57,
    "level": 8,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(2x + 1\\) para \\(x = 0{,}5\\).",
    "answer": "2",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(2x + 1\\), com \\(x = 0{,}5\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(2 \\cdot \\left(0{,}5\\right) + 1\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(1 + 1\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(2\\)."
    ],
    "common": []
  },
  {
    "id": 58,
    "level": 8,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(4x\\) para \\(x = 2{,}5\\).",
    "answer": "10",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(4x\\), com \\(x = 2{,}5\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(4 \\cdot \\left(2{,}5\\right)\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(10\\)."
    ],
    "common": []
  },
  {
    "id": 59,
    "level": 8,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(3x\\) para \\(x = 0{,}2\\).",
    "answer": "0,6",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(3x\\), com \\(x = 0{,}2\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(3 \\cdot \\left(0{,}2\\right)\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(0{,}6\\)."
    ],
    "common": []
  },
  {
    "id": 60,
    "level": 8,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(10x - 3\\) para \\(x = 1{,}5\\).",
    "answer": "12",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(10x - 3\\), com \\(x = 1{,}5\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(10 \\cdot \\left(1{,}5\\right) - 3\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(15 - 3\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(12\\)."
    ],
    "common": []
  },
  {
    "id": 61,
    "level": 8,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(x^{2}\\) para \\(x = 0{,}5\\).",
    "answer": "0,25",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(x^{2}\\), com \\(x = 0{,}5\\).",
      "Troque a letra pelo valor dela: \\(\\left(0{,}5\\right)^{2}\\).",
      "Resolva as potências: \\(0{,}25\\)."
    ],
    "common": [
      {
        "value": "1",
        "message": "Atenção: 0,5² é 0,5 · 0,5, e não 1."
      }
    ]
  },
  {
    "id": 62,
    "level": 8,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(2x + 3y\\) para \\(x = \\frac{1}{2}\\) e \\(y = \\frac{1}{3}\\).",
    "answer": "2",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −. Multiplique: 2 · (1/2) = 1 e 3 · (1/3) = 1.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(2x + 3y\\), com \\(x = \\frac{1}{2}\\) e \\(y = \\frac{1}{3}\\).",
      "Troque cada letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(2 \\cdot \\left(\\frac{1}{2}\\right) + 3 \\cdot \\left(\\frac{1}{3}\\right)\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(1 + 1\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(2\\)."
    ],
    "common": []
  },
  {
    "id": 63,
    "level": 8,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(\\frac{x}{2} + 1\\) para \\(x = 5\\).",
    "answer": "3,5",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(\\frac{x}{2} + 1\\), com \\(x = 5\\).",
      "Troque a letra pelo valor dela: \\(5 \\div 2 + 1\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(2{,}5 + 1\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(3{,}5\\)."
    ],
    "common": []
  },
  {
    "id": 64,
    "level": 9,
    "kind": "num",
    "question": "Uma tabela mostra o valor de \\(2n + 1\\): para \\(n = 1\\) dá 3, para \\(n = 2\\) dá 5, para \\(n = 3\\) dá 7. Qual é o valor para \\(n = 10\\)?",
    "answer": "21",
    "hint": "Troque n por 10.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(2n + 1\\), com \\(n = 10\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(2 \\cdot 10 + 1\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(20 + 1\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(21\\)."
    ],
    "common": []
  },
  {
    "id": 65,
    "level": 9,
    "kind": "num",
    "question": "Os números 3, 6, 9, 12, … seguem a regra \\(3n\\) (\\(n\\) é a posição). Qual é o 20º termo?",
    "answer": "60",
    "hint": "Troque n por 20.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(3n\\), com \\(n = 20\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(3 \\cdot 20\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(60\\)."
    ],
    "common": []
  },
  {
    "id": 66,
    "level": 9,
    "kind": "num",
    "question": "A sequência 5, 7, 9, 11, … segue a regra \\(2n + 3\\). Qual é o 15º termo?",
    "answer": "33",
    "hint": "Troque n por 15.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(2n + 3\\), com \\(n = 15\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(2 \\cdot 15 + 3\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(30 + 3\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(33\\)."
    ],
    "common": []
  },
  {
    "id": 67,
    "level": 9,
    "kind": "mc",
    "question": "Qual regra gera os números 4, 8, 12, 16, …?",
    "answer": "\\(4n\\)",
    "options": [
      "\\(n + 4\\)",
      "\\(4n\\)",
      "\\(n^2\\)",
      "\\(2n + 2\\)"
    ],
    "hint": "Teste cada regra com n = 1, 2 e 3.",
    "steps": [
      "Teste com \\(n = 1, 2, 3\\): a regra deve dar 4, 8, 12.",
      "\\(4n\\): \\(4 \\cdot 1 = 4\\), \\(4 \\cdot 2 = 8\\), \\(4 \\cdot 3 = 12\\) ✓. As outras falham: \\(n + 4\\) dá 5 para \\(n = 1\\); \\(n^2\\) dá 1."
    ],
    "common": []
  },
  {
    "id": 68,
    "level": 9,
    "kind": "mc",
    "question": "Qual regra gera os números 3, 5, 7, 9, …?",
    "answer": "\\(2n + 1\\)",
    "options": [
      "\\(3n\\)",
      "\\(n + 2\\)",
      "\\(2n + 1\\)",
      "\\(n^2 + 2\\)"
    ],
    "hint": "A sequência cresce de 2 em 2.",
    "steps": [
      "A sequência cresce de 2 em 2, então a regra começa com \\(2n\\).",
      "Com \\(n = 1\\), \\(2n = 2\\), mas o 1º termo é 3: falta 1. Regra: \\(2n + 1\\) (\\(n = 2 \\to 5\\) ✓, \\(n = 3 \\to 7\\) ✓)."
    ],
    "common": []
  },
  {
    "id": 69,
    "level": 9,
    "kind": "num",
    "question": "A regra \\(5n - 2\\) gera uma sequência. Qual é o 4º termo?",
    "answer": "18",
    "hint": "Troque n por 4.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(5n - 2\\), com \\(n = 4\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(5 \\cdot 4 - 2\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(20 - 2\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(18\\)."
    ],
    "common": []
  },
  {
    "id": 70,
    "level": 9,
    "kind": "num",
    "question": "Com palitos, 1 triângulo usa 3 palitos, 2 triângulos em fila usam 5 e 3 triângulos usam 7. A regra é \\(2n + 1\\). Quantos palitos são necessários para 30 triângulos?",
    "answer": "61",
    "hint": "Troque n por 30.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(2n + 1\\), com \\(n = 30\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(2 \\cdot 30 + 1\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(60 + 1\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(61\\)."
    ],
    "common": []
  },
  {
    "id": 71,
    "level": 9,
    "kind": "num",
    "question": "Descubra a regra da sequência 6, 11, 16, 21, … e use-a para achar o 12º termo.",
    "answer": "61",
    "hint": "Veja quanto cresce a cada passo; depois ajuste o que falta.",
    "steps": [
      "A sequência cresce de 5 em 5, então a regra começa com \\(5n\\).",
      "Com \\(n = 1\\), \\(5n = 5\\), mas o 1º termo é 6: falta 1. Regra: \\(5n + 1\\) (confira: \\(n = 2 \\to 11\\) ✓).",
      "Escreva a expressão e os valores das letras: \\(5n + 1\\), com \\(n = 12\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(5 \\cdot 12 + 1\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(60 + 1\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(61\\)."
    ],
    "common": []
  },
  {
    "id": 72,
    "level": 10,
    "kind": "num",
    "question": "O perímetro \\(P\\) de um quadrado de lado \\(a\\) é \\(P = 4a\\). Qual é o perímetro (em cm) de um quadrado de lado \\(9\\) cm?",
    "answer": "36",
    "hint": "Troque as letras da fórmula pelos valores e calcule na ordem certa.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(4a\\), com \\(a = 9\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(4 \\cdot 9\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(36\\)."
    ],
    "common": []
  },
  {
    "id": 73,
    "level": 10,
    "kind": "num",
    "question": "O perímetro de um retângulo é \\(P = 2(b + h)\\). Qual é o perímetro (em m) de um retângulo com base \\(8\\) m e altura \\(5\\) m?",
    "answer": "26",
    "hint": "Troque as letras da fórmula pelos valores e calcule na ordem certa.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(2\\left(b + h\\right)\\), com \\(b = 8\\) e \\(h = 5\\).",
      "Troque cada letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(2 \\cdot \\left(8 + 5\\right)\\).",
      "Primeiro os parênteses (dentro deles: as somas e subtrações (da esquerda para a direita)): \\(2 \\cdot 13\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(26\\)."
    ],
    "common": []
  },
  {
    "id": 74,
    "level": 10,
    "kind": "num",
    "question": "A área de um retângulo é \\(A = b \\cdot h\\). Qual é a área (em m²) de um retângulo com base \\(12\\) m e altura \\(7\\) m?",
    "answer": "84",
    "hint": "Troque as letras da fórmula pelos valores e calcule na ordem certa.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(bh\\), com \\(b = 12\\) e \\(h = 7\\).",
      "Troque cada letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(12 \\cdot 7\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(84\\)."
    ],
    "common": []
  },
  {
    "id": 75,
    "level": 10,
    "kind": "num",
    "question": "A área de um quadrado de lado \\(a\\) é \\(A = a^2\\). Qual é a área (em cm²) de um quadrado de lado \\(11\\) cm?",
    "answer": "121",
    "hint": "Troque as letras da fórmula pelos valores e calcule na ordem certa.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(a^{2}\\), com \\(a = 11\\).",
      "Troque a letra pelo valor dela: \\(11^{2}\\).",
      "Resolva as potências: \\(121\\)."
    ],
    "common": []
  },
  {
    "id": 76,
    "level": 10,
    "kind": "num",
    "question": "Uma loja de festas cobra R$ 10 de entrega mais R$ 3 por balão: \\(C = 10 + 3n\\). Quanto custa uma encomenda com \\(8\\) balões (em reais)?",
    "answer": "34",
    "hint": "Troque as letras da fórmula pelos valores e calcule na ordem certa.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(10 + 3n\\), com \\(n = 8\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(10 + 3 \\cdot 8\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(10 + 24\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(34\\)."
    ],
    "common": []
  },
  {
    "id": 77,
    "level": 10,
    "kind": "num",
    "question": "A distância percorrida é \\(d = v \\cdot t\\), com velocidade \\(v\\) e tempo \\(t\\). Qual é a distância (em km) de um carro a \\(60\\) km/h durante \\(3\\) horas?",
    "answer": "180",
    "hint": "Troque as letras da fórmula pelos valores e calcule na ordem certa.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(vt\\), com \\(t = 3\\) e \\(v = 60\\).",
      "Troque cada letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(60 \\cdot 3\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(180\\)."
    ],
    "common": []
  },
  {
    "id": 78,
    "level": 10,
    "kind": "num",
    "question": "A média de duas notas é \\(M = \\dfrac{a + b}{2}\\). Qual é a média de quem tirou \\(7\\) e \\(9\\)?",
    "answer": "8",
    "hint": "Troque as letras da fórmula pelos valores e calcule na ordem certa.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(\\frac{a + b}{2}\\), com \\(a = 7\\) e \\(b = 9\\).",
      "Troque cada letra pelo valor dela: \\(\\left(7 + 9\\right) \\div 2\\).",
      "Primeiro os parênteses (dentro deles: as somas e subtrações (da esquerda para a direita)): \\(16 \\div 2\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(8\\)."
    ],
    "common": []
  },
  {
    "id": 79,
    "level": 10,
    "kind": "num",
    "question": "A área de um triângulo é \\(A = \\dfrac{b \\cdot h}{2}\\). Qual é a área (em cm²) de um triângulo com base \\(10\\) cm e altura \\(6\\) cm?",
    "answer": "30",
    "hint": "Troque as letras da fórmula pelos valores e calcule na ordem certa.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(\\frac{bh}{2}\\), com \\(b = 10\\) e \\(h = 6\\).",
      "Troque cada letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(10 \\cdot 6 \\div 2\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(60 \\div 2\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(30\\)."
    ],
    "common": []
  },
  {
    "id": 80,
    "level": 11,
    "kind": "num",
    "question": "Cada caderno custa R$ 8. Quanto se paga por 6 cadernos?",
    "answer": "48",
    "hint": "Dê uma letra ao que muda, escreva a expressão e só depois troque a letra pelo número.",
    "steps": [
      "O que muda? O número de cadernos. Vamos chamar de \\(n\\).",
      "Escreva a expressão: cada caderno custa 8, então o preço é 8 vezes a quantidade: \\(8n\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(8 \\cdot 6\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(48\\).",
      "Responda com a unidade: Seis cadernos custam R$ 48."
    ],
    "common": []
  },
  {
    "id": 81,
    "level": 11,
    "kind": "num",
    "question": "Pedro tem 12 anos. Sua irmã tem 5 anos a mais que ele. Quantos anos tem a irmã?",
    "answer": "17",
    "hint": "Dê uma letra ao que muda, escreva a expressão e só depois troque a letra pelo número.",
    "steps": [
      "O que muda? A idade de Pedro. Vamos chamar de \\(x\\).",
      "Escreva a expressão: “5 anos a mais” significa somar 5: \\(x + 5\\).",
      "Troque a letra pelo valor dela: \\(12 + 5\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(17\\).",
      "Responda com a unidade: A irmã tem 17 anos."
    ],
    "common": []
  },
  {
    "id": 82,
    "level": 11,
    "kind": "num",
    "question": "Uma fábrica produz 120 peças por dia. Quantas peças produz em 15 dias?",
    "answer": "1800",
    "hint": "Dê uma letra ao que muda, escreva a expressão e só depois troque a letra pelo número.",
    "steps": [
      "O que muda? O número de dias. Vamos chamar de \\(d\\).",
      "Escreva a expressão: são 120 peças em cada dia: \\(120d\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(120 \\cdot 15\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(1800\\).",
      "Responda com a unidade: Em 15 dias a fábrica produz 1.800 peças."
    ],
    "common": []
  },
  {
    "id": 83,
    "level": 11,
    "kind": "num",
    "question": "Um terreno quadrado tem 15 m de lado. Quantos metros de arame são necessários para dar uma volta completa em torno dele?",
    "answer": "60",
    "hint": "Dê uma letra ao que muda, escreva a expressão e só depois troque a letra pelo número.",
    "steps": [
      "O que muda? O lado do quadrado. Vamos chamar de \\(a\\).",
      "Escreva a expressão: dar uma volta é somar os 4 lados (o perímetro): \\(4a\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(4 \\cdot 15\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(60\\).",
      "Responda com a unidade: São necessários 60 metros de arame."
    ],
    "common": []
  },
  {
    "id": 84,
    "level": 11,
    "kind": "num",
    "question": "Uma lanchonete cobra R$ 6 por sanduíche e R$ 4 pelo suco (um suco por pedido). Quanto custa um pedido com 3 sanduíches e 1 suco?",
    "answer": "22",
    "hint": "Dê uma letra ao que muda, escreva a expressão e só depois troque a letra pelo número.",
    "steps": [
      "O que muda? O número de sanduíches. Vamos chamar de \\(s\\).",
      "Escreva a expressão: cada sanduíche custa 6 e o suco soma 4: \\(6s + 4\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(6 \\cdot 3 + 4\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(18 + 4\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(22\\).",
      "Responda com a unidade: O pedido custa R$ 22."
    ],
    "common": []
  },
  {
    "id": 85,
    "level": 11,
    "kind": "num",
    "question": "Um aplicativo de transporte cobra R$ 5 de taxa fixa mais R$ 2 por quilômetro. Quanto custa uma corrida de 10 km?",
    "answer": "25",
    "hint": "Dê uma letra ao que muda, escreva a expressão e só depois troque a letra pelo número.",
    "steps": [
      "O que muda? Os quilômetros rodados. Vamos chamar de \\(k\\).",
      "Escreva a expressão: taxa fixa 5 mais 2 vezes os quilômetros: \\(5 + 2k\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(5 + 2 \\cdot 10\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(5 + 20\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(25\\).",
      "Responda com a unidade: A corrida custa R$ 25."
    ],
    "common": []
  },
  {
    "id": 86,
    "level": 11,
    "kind": "num",
    "question": "Marcos tinha R$ 50 e comprou 4 revistas de R$ 7 cada. Quantos reais sobraram?",
    "answer": "22",
    "hint": "Dê uma letra ao que muda, escreva a expressão e só depois troque a letra pelo número.",
    "steps": [
      "O que muda? O número de revistas. Vamos chamar de \\(r\\).",
      "Escreva a expressão: sobra o que tinha (50) menos o gasto (7 por revista): \\(50 - 7r\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(50 - 7 \\cdot 4\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(50 - 28\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(22\\).",
      "Responda com a unidade: Sobraram R$ 22."
    ],
    "common": []
  },
  {
    "id": 87,
    "level": 11,
    "kind": "num",
    "question": "João tem 20 reais. Maria tem o dobro do que João tem, mais 3 reais. Quantos reais tem Maria?",
    "answer": "43",
    "hint": "Dê uma letra ao que muda, escreva a expressão e só depois troque a letra pelo número.",
    "steps": [
      "O que muda? O dinheiro de João. Vamos chamar de \\(j\\).",
      "Escreva a expressão: o dobro de \\(j\\) é \\(2j\\), e soma-se 3: \\(2j + 3\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(2 \\cdot 20 + 3\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(40 + 3\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(43\\).",
      "Responda com a unidade: Maria tem R$ 43."
    ],
    "common": []
  },
  {
    "id": 88,
    "level": 11,
    "kind": "num",
    "question": "Um plano de celular custa R$ 30 por mês, mais R$ 0,50 por cada GB extra. Quanto se paga em um mês com 8 GB extras?",
    "answer": "34",
    "hint": "Dê uma letra ao que muda, escreva a expressão e só depois troque a letra pelo número.",
    "steps": [
      "O que muda? A quantidade de GB extras. Vamos chamar de \\(g\\).",
      "Escreva a expressão: valor fixo 30 mais 0,50 por GB extra: \\(30 + 0{,}5g\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(30 + 0{,}5 \\cdot 8\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(30 + 4\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(34\\).",
      "Responda com a unidade: Paga-se R$ 34 no mês."
    ],
    "common": []
  },
  {
    "id": 89,
    "level": 11,
    "kind": "num",
    "question": "Camila já tinha lido 40 páginas de um livro e lê 15 páginas por dia. Quantas páginas terá lido ao todo depois de 8 dias de leitura?",
    "answer": "160",
    "hint": "Dê uma letra ao que muda, escreva a expressão e só depois troque a letra pelo número.",
    "steps": [
      "O que muda? O número de dias de leitura. Vamos chamar de \\(d\\).",
      "Escreva a expressão: as 40 que já leu mais 15 por dia: \\(40 + 15d\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(40 + 15 \\cdot 8\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(40 + 120\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(160\\).",
      "Responda com a unidade: Camila terá lido 160 páginas."
    ],
    "common": []
  },
  {
    "id": 90,
    "level": 11,
    "kind": "num",
    "question": "Em um sítio há galinhas (2 pés cada) e coelhos (4 pés cada). Com 7 galinhas e 5 coelhos, quantos pés há ao todo?",
    "answer": "34",
    "hint": "São duas letras: uma para as galinhas e outra para os coelhos.",
    "steps": [
      "O que muda? O número de galinhas e o de coelhos. Vamos chamar de \\(g\\) (galinhas) e \\(c\\) (coelhos).",
      "Escreva a expressão: cada galinha tem 2 pés e cada coelho 4: \\(2g + 4c\\).",
      "Troque cada letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(2 \\cdot 7 + 4 \\cdot 5\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(14 + 20\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(34\\).",
      "Responda com a unidade: Há 34 pés ao todo."
    ],
    "common": []
  },
  {
    "id": 91,
    "level": 12,
    "kind": "num",
    "question": "Descubra o valor de \\(x\\) que torna verdadeira a igualdade \\(x + 7 = 15\\).",
    "answer": "8",
    "hint": "Desfaça cada operação feita com o x usando a operação inversa, nos dois lados. Depois confira.",
    "steps": [
      "Lembre: a igualdade é uma balança; o que fizer de um lado, faça do outro. Aqui o \\(x\\) está somando 7. Para desfazer, subtraia 7 dos dois lados: \\(x + 7 - 7 = 15 - 7\\).",
      "Resolva: \\(x = 15 - 7 = 8\\).",
      "Conferência: troque \\(x\\) por \\(8\\) na igualdade: \\(8 + 7 = 15\\) ✓."
    ],
    "common": [
      {
        "value": "22",
        "message": "Para desfazer a soma, subtraia (não some de novo)."
      }
    ]
  },
  {
    "id": 92,
    "level": 12,
    "kind": "num",
    "question": "Descubra o valor de \\(x\\) que torna verdadeira a igualdade \\(x - 6 = 9\\).",
    "answer": "15",
    "hint": "Desfaça cada operação feita com o x usando a operação inversa, nos dois lados. Depois confira.",
    "steps": [
      "Lembre: a igualdade é uma balança; o que fizer de um lado, faça do outro. Aqui o \\(x\\) está subtraindo 6. Para desfazer, some 6 dos dois lados: \\(x - 6 + 6 = 9 + 6\\).",
      "Resolva: \\(x = 9 + 6 = 15\\).",
      "Conferência: troque \\(x\\) por \\(15\\) na igualdade: \\(15 - 6 = 9\\) ✓."
    ],
    "common": [
      {
        "value": "3",
        "message": "Para desfazer a subtração, some."
      }
    ]
  },
  {
    "id": 93,
    "level": 12,
    "kind": "num",
    "question": "Descubra o valor de \\(x\\) que torna verdadeira a igualdade \\(4x = 28\\).",
    "answer": "7",
    "hint": "Desfaça cada operação feita com o x usando a operação inversa, nos dois lados. Depois confira.",
    "steps": [
      "Lembre: a igualdade é uma balança; o que fizer de um lado, faça do outro. \\(4x\\) significa \\(4 \\cdot x\\): o \\(x\\) está multiplicado por 4. Para desfazer, divida por 4 os dois lados: \\(\\dfrac{4x}{4} = \\dfrac{28}{4}\\).",
      "Resolva: \\(x = 28 \\div 4 = 7\\).",
      "Conferência: troque \\(x\\) por \\(7\\) na igualdade: \\(4 \\cdot 7 = 28\\) ✓."
    ],
    "common": [
      {
        "value": "112",
        "message": "Para desfazer a multiplicação, divida."
      }
    ]
  },
  {
    "id": 94,
    "level": 12,
    "kind": "num",
    "question": "Descubra o valor de \\(x\\) que torna verdadeira a igualdade \\(\\frac{x}{3} = 5\\).",
    "answer": "15",
    "hint": "Desfaça cada operação feita com o x usando a operação inversa, nos dois lados. Depois confira.",
    "steps": [
      "Lembre: a igualdade é uma balança; o que fizer de um lado, faça do outro. Aqui o \\(x\\) está dividido por 3. Para desfazer, multiplique por 3 os dois lados: \\(\\dfrac{x}{3} \\cdot 3 = 5 \\cdot 3\\).",
      "Resolva: \\(x = 5 \\cdot 3 = 15\\).",
      "Conferência: troque \\(x\\) por \\(15\\) na igualdade: \\(15 \\div 3 = 5\\) ✓."
    ],
    "common": [
      {
        "value": "5/3",
        "message": "Para desfazer a divisão, multiplique."
      }
    ]
  },
  {
    "id": 95,
    "level": 12,
    "kind": "num",
    "question": "Descubra o valor de \\(x\\) que torna verdadeira a igualdade \\(12 = x + 5\\).",
    "answer": "7",
    "hint": "Desfaça cada operação feita com o x usando a operação inversa, nos dois lados. Depois confira.",
    "steps": [
      "Lembre: a igualdade é uma balança; o que fizer de um lado, faça do outro. Aqui o \\(x\\) está somando 5. Para desfazer, subtraia 5 dos dois lados: \\(x + 5 - 5 = 12 - 5\\).",
      "Resolva: \\(x = 12 - 5 = 7\\).",
      "Conferência: troque \\(x\\) por \\(7\\) na igualdade: \\(7 + 5 = 12\\) ✓."
    ],
    "common": [
      {
        "value": "17",
        "message": "Para desfazer a soma, subtraia (não some de novo)."
      }
    ]
  },
  {
    "id": 96,
    "level": 12,
    "kind": "num",
    "question": "Descubra o valor de \\(x\\) que torna verdadeira a igualdade \\(10 - x = 4\\).",
    "answer": "6",
    "hint": "Desfaça cada operação feita com o x usando a operação inversa, nos dois lados. Depois confira.",
    "steps": [
      "Aqui o \\(x\\) está sendo subtraído de 10. Pergunte: “10 menos quanto dá 4?” A resposta é a diferença: \\(x = 10 - 4 = 6\\).",
      "Conferência: troque \\(x\\) por \\(6\\) na igualdade: \\(10 - 6 = 4\\) ✓."
    ],
    "common": []
  },
  {
    "id": 97,
    "level": 12,
    "kind": "num",
    "question": "Descubra o valor de \\(x\\) que torna verdadeira a igualdade \\(\\frac{12}{x} = 3\\).",
    "answer": "4",
    "hint": "Desfaça cada operação feita com o x usando a operação inversa, nos dois lados. Depois confira.",
    "steps": [
      "Aqui 12 está sendo dividido pelo \\(x\\). Pergunte: “12 dividido por quanto dá 3?” Então \\(x = 12 \\div 3 = 4\\).",
      "Conferência: troque \\(x\\) por \\(4\\) na igualdade: \\(12 \\div 4 = 3\\) ✓."
    ],
    "common": []
  },
  {
    "id": 98,
    "level": 12,
    "kind": "num",
    "question": "Descubra o valor de \\(x\\) que torna verdadeira a igualdade \\(2x + 3 = 11\\).",
    "answer": "4",
    "hint": "Desfaça cada operação feita com o x usando a operação inversa, nos dois lados. Depois confira.",
    "steps": [
      "Desfaça na ordem contrária. Primeiro a soma: subtraia 3 dos dois lados: \\(2x + 3 - 3 = 11 - 3\\), ou seja, \\(2x = 8\\).",
      "Agora a multiplicação: divida por 2 os dois lados: \\(x = 8 \\div 2 = 4\\).",
      "Conferência: troque \\(x\\) por \\(4\\) na igualdade: \\(2 \\cdot 4 + 3 = 11\\) ✓."
    ],
    "common": [
      {
        "value": "5,5",
        "message": "Primeiro tire o que está somando (subtraia dos dois lados), depois divida."
      }
    ]
  },
  {
    "id": 99,
    "level": 12,
    "kind": "num",
    "question": "Descubra o valor de \\(x\\) que torna verdadeira a igualdade \\(5x - 4 = 21\\).",
    "answer": "5",
    "hint": "Desfaça cada operação feita com o x usando a operação inversa, nos dois lados. Depois confira.",
    "steps": [
      "Desfaça na ordem contrária. Primeiro a subtração: some 4 dos dois lados: \\(5x - 4 + 4 = 21 + 4\\), ou seja, \\(5x = 25\\).",
      "Agora a multiplicação: divida por 5 os dois lados: \\(x = 25 \\div 5 = 5\\).",
      "Conferência: troque \\(x\\) por \\(5\\) na igualdade: \\(5 \\cdot 5 - 4 = 21\\) ✓."
    ],
    "common": []
  },
  {
    "id": 100,
    "level": 12,
    "kind": "num",
    "question": "Descubra o valor de \\(x\\) que torna verdadeira a igualdade \\(\\frac{x}{2} + 1 = 6\\).",
    "answer": "10",
    "hint": "Desfaça cada operação feita com o x usando a operação inversa, nos dois lados. Depois confira.",
    "steps": [
      "Desfaça na ordem contrária. Primeiro a soma: subtraia 1 dos dois lados: \\(\\dfrac{x}{2} + 1 - 1 = 6 - 1\\), ou seja, \\(\\dfrac{x}{2} = 5\\).",
      "Agora a divisão: multiplique por 2 os dois lados: \\(x = 5 \\cdot 2 = 10\\).",
      "Conferência: troque \\(x\\) por \\(10\\) na igualdade: \\(10 \\div 2 + 1 = 6\\) ✓."
    ],
    "common": []
  },
  {
    "id": 101,
    "level": 13,
    "kind": "num",
    "question": "Pensei em um número, somei 9 e obtive 21. Que número pensei?",
    "answer": "12",
    "hint": "Dê uma letra ao que você não sabe, escreva a igualdade da história e desfaça as operações. Depois confira na história.",
    "steps": [
      "O que não sei? O número em que pensei. Vamos chamar de \\(x\\).",
      "Monte a igualdade: o número mais 9 resulta em 21: \\(x + 9 = 21\\).",
      "Lembre: a igualdade é uma balança; o que fizer de um lado, faça do outro. Aqui o \\(x\\) está somando 9. Para desfazer, subtraia 9 dos dois lados: \\(x + 9 - 9 = 21 - 9\\).",
      "Resolva: \\(x = 21 - 9 = 12\\).",
      "Conferência: troque \\(x\\) por \\(12\\) na igualdade: \\(12 + 9 = 21\\) ✓.",
      "Responda: Pensei no número 12."
    ],
    "common": []
  },
  {
    "id": 102,
    "level": 13,
    "kind": "num",
    "question": "Lucas tinha algum dinheiro, gastou R$ 15 e ficou com R$ 28. Quanto ele tinha antes?",
    "answer": "43",
    "hint": "Dê uma letra ao que você não sabe, escreva a igualdade da história e desfaça as operações. Depois confira na história.",
    "steps": [
      "O que não sei? O dinheiro que Lucas tinha. Vamos chamar de \\(x\\).",
      "Monte a igualdade: o que tinha menos 15 resulta em 28: \\(x - 15 = 28\\).",
      "Lembre: a igualdade é uma balança; o que fizer de um lado, faça do outro. Aqui o \\(x\\) está subtraindo 15. Para desfazer, some 15 dos dois lados: \\(x - 15 + 15 = 28 + 15\\).",
      "Resolva: \\(x = 28 + 15 = 43\\).",
      "Conferência: troque \\(x\\) por \\(43\\) na igualdade: \\(43 - 15 = 28\\) ✓.",
      "Responda: Lucas tinha R$ 43."
    ],
    "common": []
  },
  {
    "id": 103,
    "level": 13,
    "kind": "num",
    "question": "Camila comprou 3 canetas iguais e pagou R$ 18. Quanto custa cada caneta?",
    "answer": "6",
    "hint": "Dê uma letra ao que você não sabe, escreva a igualdade da história e desfaça as operações. Depois confira na história.",
    "steps": [
      "O que não sei? O preço de uma caneta. Vamos chamar de \\(x\\).",
      "Monte a igualdade: 3 canetas custam 18: \\(3x = 18\\).",
      "Lembre: a igualdade é uma balança; o que fizer de um lado, faça do outro. \\(3x\\) significa \\(3 \\cdot x\\): o \\(x\\) está multiplicado por 3. Para desfazer, divida por 3 os dois lados: \\(\\dfrac{3x}{3} = \\dfrac{18}{3}\\).",
      "Resolva: \\(x = 18 \\div 3 = 6\\).",
      "Conferência: troque \\(x\\) por \\(6\\) na igualdade: \\(3 \\cdot 6 = 18\\) ✓.",
      "Responda: Cada caneta custa R$ 6."
    ],
    "common": []
  },
  {
    "id": 104,
    "level": 13,
    "kind": "num",
    "question": "Pensei em um número, multipliquei por 4 e obtive 36. Que número pensei?",
    "answer": "9",
    "hint": "Dê uma letra ao que você não sabe, escreva a igualdade da história e desfaça as operações. Depois confira na história.",
    "steps": [
      "O que não sei? O número em que pensei. Vamos chamar de \\(x\\).",
      "Monte a igualdade: quatro vezes o número resulta em 36: \\(4x = 36\\).",
      "Lembre: a igualdade é uma balança; o que fizer de um lado, faça do outro. \\(4x\\) significa \\(4 \\cdot x\\): o \\(x\\) está multiplicado por 4. Para desfazer, divida por 4 os dois lados: \\(\\dfrac{4x}{4} = \\dfrac{36}{4}\\).",
      "Resolva: \\(x = 36 \\div 4 = 9\\).",
      "Conferência: troque \\(x\\) por \\(9\\) na igualdade: \\(4 \\cdot 9 = 36\\) ✓.",
      "Responda: Pensei no número 9."
    ],
    "common": []
  },
  {
    "id": 105,
    "level": 13,
    "kind": "num",
    "question": "Pedro tem 19 anos, que são 7 anos a mais do que a idade de sua prima. Quantos anos tem a prima?",
    "answer": "12",
    "hint": "Dê uma letra ao que você não sabe, escreva a igualdade da história e desfaça as operações. Depois confira na história.",
    "steps": [
      "O que não sei? A idade da prima. Vamos chamar de \\(x\\).",
      "Monte a igualdade: a idade da prima mais 7 é 19: \\(x + 7 = 19\\).",
      "Lembre: a igualdade é uma balança; o que fizer de um lado, faça do outro. Aqui o \\(x\\) está somando 7. Para desfazer, subtraia 7 dos dois lados: \\(x + 7 - 7 = 19 - 7\\).",
      "Resolva: \\(x = 19 - 7 = 12\\).",
      "Conferência: troque \\(x\\) por \\(12\\) na igualdade: \\(12 + 7 = 19\\) ✓.",
      "Responda: A prima tem 12 anos."
    ],
    "common": []
  },
  {
    "id": 106,
    "level": 13,
    "kind": "num",
    "question": "Uma escola dividiu 60 livros igualmente entre algumas salas. Cada sala recebeu 12 livros. Quantas salas há?",
    "answer": "5",
    "hint": "Dê uma letra ao que você não sabe, escreva a igualdade da história e desfaça as operações. Depois confira na história.",
    "steps": [
      "O que não sei? O número de salas. Vamos chamar de \\(s\\).",
      "Monte a igualdade: 60 livros divididos entre as salas dá 12 para cada: \\(\\frac{60}{s} = 12\\).",
      "Aqui 60 está sendo dividido pelo \\(s\\). Pergunte: “60 dividido por quanto dá 12?” Então \\(s = 60 \\div 12 = 5\\).",
      "Conferência: troque \\(s\\) por \\(5\\) na igualdade: \\(60 \\div 5 = 12\\) ✓.",
      "Responda: Há 5 salas."
    ],
    "common": []
  },
  {
    "id": 107,
    "level": 13,
    "kind": "num",
    "question": "O dobro de um número, mais 5, resulta em 19. Qual é o número?",
    "answer": "7",
    "hint": "Dê uma letra ao que você não sabe, escreva a igualdade da história e desfaça as operações. Depois confira na história.",
    "steps": [
      "O que não sei? O número desconhecido. Vamos chamar de \\(x\\).",
      "Monte a igualdade: o dobro do número mais 5 resulta em 19: \\(2x + 5 = 19\\).",
      "Desfaça na ordem contrária. Primeiro a soma: subtraia 5 dos dois lados: \\(2x + 5 - 5 = 19 - 5\\), ou seja, \\(2x = 14\\).",
      "Agora a multiplicação: divida por 2 os dois lados: \\(x = 14 \\div 2 = 7\\).",
      "Conferência: troque \\(x\\) por \\(7\\) na igualdade: \\(2 \\cdot 7 + 5 = 19\\) ✓.",
      "Responda: O número é 7."
    ],
    "common": []
  },
  {
    "id": 108,
    "level": 13,
    "kind": "num",
    "question": "Um táxi cobra R$ 5 fixos mais R$ 2 por quilômetro. Rita pagou R$ 31. Quantos quilômetros ela rodou?",
    "answer": "13",
    "hint": "Dê uma letra ao que você não sabe, escreva a igualdade da história e desfaça as operações. Depois confira na história.",
    "steps": [
      "O que não sei? Os quilômetros rodados. Vamos chamar de \\(k\\).",
      "Monte a igualdade: dois reais por km, mais 5 fixos, deu 31: \\(2k + 5 = 31\\).",
      "Desfaça na ordem contrária. Primeiro a soma: subtraia 5 dos dois lados: \\(2k + 5 - 5 = 31 - 5\\), ou seja, \\(2k = 26\\).",
      "Agora a multiplicação: divida por 2 os dois lados: \\(k = 26 \\div 2 = 13\\).",
      "Conferência: troque \\(k\\) por \\(13\\) na igualdade: \\(2 \\cdot 13 + 5 = 31\\) ✓.",
      "Responda: Rita rodou 13 km."
    ],
    "common": []
  },
  {
    "id": 109,
    "level": 13,
    "kind": "num",
    "question": "Mariana comprou 5 caixas de ovos iguais e mais 4 ovos soltos, ao todo 34 ovos. Quantos ovos há em cada caixa?",
    "answer": "6",
    "hint": "Dê uma letra ao que você não sabe, escreva a igualdade da história e desfaça as operações. Depois confira na história.",
    "steps": [
      "O que não sei? O número de ovos em uma caixa. Vamos chamar de \\(c\\).",
      "Monte a igualdade: 5 caixas mais 4 ovos soltos dão 34: \\(5c + 4 = 34\\).",
      "Desfaça na ordem contrária. Primeiro a soma: subtraia 4 dos dois lados: \\(5c + 4 - 4 = 34 - 4\\), ou seja, \\(5c = 30\\).",
      "Agora a multiplicação: divida por 5 os dois lados: \\(c = 30 \\div 5 = 6\\).",
      "Conferência: troque \\(c\\) por \\(6\\) na igualdade: \\(5 \\cdot 6 + 4 = 34\\) ✓.",
      "Responda: Cada caixa tem 6 ovos."
    ],
    "common": []
  },
  {
    "id": 110,
    "level": 14,
    "kind": "num",
    "question": "As expressões \\(x + x\\) e \\(2x\\) são equivalentes. Calcule o valor numérico das duas para \\(x = 7\\). Qual é esse valor?",
    "answer": "14",
    "hint": "Calcule x + x com x = 7 e confira com 2x.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(x + x\\), com \\(x = 7\\).",
      "Troque a letra pelo valor dela: \\(7 + 7\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(14\\).",
      "Agora a outra expressão: Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(2 \\cdot 7\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(14\\)."
    ],
    "common": []
  },
  {
    "id": 111,
    "level": 14,
    "kind": "mc",
    "question": "Qual expressão é equivalente a \\(3x + 2x\\)?",
    "answer": "\\(5x\\)",
    "options": [
      "\\(6x\\)",
      "\\(5x\\)",
      "\\(5x^2\\)",
      "\\(x + 5\\)"
    ],
    "hint": "Termos semelhantes: some os coeficientes.",
    "steps": [
      "\\(3x\\) e \\(2x\\) têm a mesma parte literal (\\(x\\)): são termos semelhantes.",
      "Some os coeficientes: \\(3 + 2 = 5\\). Resultado: \\(5x\\). Teste com \\(x = 2\\): \\(3 \\cdot 2 + 2 \\cdot 2 = 10\\) e \\(5 \\cdot 2 = 10\\) ✓."
    ],
    "common": []
  },
  {
    "id": 112,
    "level": 14,
    "kind": "mc",
    "question": "Qual expressão é equivalente a \\(2(x + 4)\\)?",
    "answer": "\\(2x + 8\\)",
    "options": [
      "\\(2x + 4\\)",
      "\\(x + 8\\)",
      "\\(2x + 8\\)",
      "\\(8x\\)"
    ],
    "hint": "O 2 multiplica todos os termos do parêntese.",
    "steps": [
      "O 2 multiplica o \\(x\\) e o 4: \\(2 \\cdot x + 2 \\cdot 4\\).",
      "Resultado: \\(2x + 8\\). Teste com \\(x = 3\\): \\(2(3 + 4) = 14\\) e \\(2 \\cdot 3 + 8 = 14\\) ✓."
    ],
    "common": []
  },
  {
    "id": 113,
    "level": 14,
    "kind": "mc",
    "question": "Verdadeiro ou falso? “\\(3x\\) é sempre igual a \\(x + 3\\), para qualquer valor de \\(x\\)”.",
    "answer": "Falso: com x = 2, 3x vale 6 e x + 3 vale 5",
    "options": [
      "Verdadeiro, para qualquer valor de x",
      "Falso: com x = 2, 3x vale 6 e x + 3 vale 5",
      "Verdadeiro, mas só quando x é par",
      "Falso: 3x é sempre maior que x + 3"
    ],
    "hint": "Teste com alguns valores de x.",
    "steps": [
      "Para provar que duas expressões não são equivalentes, basta um valor em que deem resultados diferentes.",
      "Com \\(x = 2\\): \\(3x = 6\\) e \\(x + 3 = 5\\). São diferentes, então a afirmação é falsa. (Com \\(x = 1{,}5\\) elas até coincidem, mas isso não basta: a igualdade precisa valer para todos.)"
    ],
    "common": []
  },
  {
    "id": 114,
    "level": 14,
    "kind": "num",
    "question": "Com palitos formamos quadrados em fila: 1 quadrado usa 4 palitos, 2 quadrados usam 7 e 3 quadrados usam 10. Quantos palitos são necessários para 20 quadrados?",
    "answer": "61",
    "hint": "Ache a regra (cresce de 3 em 3) e troque n por 20.",
    "steps": [
      "Cada quadrado novo usa 3 palitos a mais: a regra começa com \\(3n\\).",
      "Com \\(n = 1\\), \\(3n = 3\\), mas são 4 palitos: falta 1. Regra: \\(3n + 1\\).",
      "Escreva a expressão e os valores das letras: \\(3n + 1\\), com \\(n = 20\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(3 \\cdot 20 + 1\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(60 + 1\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(61\\)."
    ],
    "common": []
  },
  {
    "id": 115,
    "level": 14,
    "kind": "num",
    "question": "Calcule o valor numérico de \\(2x^{2} - 3x + 1\\) para \\(x = 3\\).",
    "answer": "10",
    "hint": "Troque cada letra pelo valor dela, mostre o “vezes” escondido e resolva na ordem: parênteses → potências → × e ÷ → + e −. Calcule 2x² e 3x separadamente e só depois some e subtraia.",
    "steps": [
      "Escreva a expressão e os valores das letras: \\(2x^{2} - 3x + 1\\), com \\(x = 3\\).",
      "Troque a letra pelo valor dela e mostre o sinal de vezes que estava escondido: \\(2 \\cdot 3^{2} - 3 \\cdot 3 + 1\\).",
      "Resolva as potências: \\(2 \\cdot 9 - 3 \\cdot 3 + 1\\).",
      "Resolva as multiplicações e divisões (da esquerda para a direita): \\(18 - 9 + 1\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(9 + 1\\).",
      "Resolva as somas e subtrações (da esquerda para a direita): \\(10\\)."
    ],
    "common": []
  },
  {
    "id": 116,
    "level": 14,
    "kind": "num",
    "question": "A soma de um número com o seu triplo é 48. Qual é o número?",
    "answer": "12",
    "hint": "Se o número é x, o triplo é 3x. Junte os termos semelhantes.",
    "steps": [
      "Chame o número de \\(x\\). O triplo dele é \\(3x\\).",
      "A soma é \\(x + 3x = 48\\). Juntando os termos semelhantes (\\(1x + 3x = 4x\\)): \\(4x = 48\\).",
      "Divida por 4: \\(x = 48 \\div 4 = 12\\).",
      "Confira: \\(12 + 3 \\cdot 12 = 12 + 36 = 48\\) ✓."
    ],
    "common": []
  },
  {
    "id": 117,
    "level": 14,
    "kind": "num",
    "question": "Plano A: R$ 20 fixos mais R$ 2 por GB. Plano B: R$ 10 fixos mais R$ 4 por GB. Com quantos GB os dois planos custam o mesmo valor?",
    "answer": "5",
    "hint": "Monte uma tabela com o custo dos dois planos para 1, 2, 3, 4, 5… GB.",
    "steps": [
      "Plano A: \\(20 + 2g\\). Plano B: \\(10 + 4g\\).",
      "Vamos montar uma tabela de valores (valor numérico de cada expressão):\n\\(g = 1\\): A = 22, B = 14\n\\(g = 2\\): A = 24, B = 18\n\\(g = 3\\): A = 26, B = 22\n\\(g = 4\\): A = 28, B = 26\n\\(g = 5\\): A = 30, B = 30 ✓",
      "Com 5 GB os dois custam R$ 30. (Pela igualdade: \\(20 + 2g = 10 + 4g\\) ⇒ \\(10 = 2g\\) ⇒ \\(g = 5\\).)"
    ],
    "common": []
  },
  {
    "id": 118,
    "level": 14,
    "kind": "num",
    "question": "Ana tem 29 anos, que é o triplo da idade de Bia, mais 2 anos. Quantos anos tem Bia?",
    "answer": "9",
    "hint": "Chame a idade de Bia de b. Monte a igualdade 3b + 2 = 29.",
    "steps": [
      "Idade de Bia: \\(b\\). O triplo dela mais 2: \\(3b + 2\\).",
      "Ana tem 29: \\(3b + 2 = 29\\).",
      "Desfaça na ordem contrária. Primeiro a soma: subtraia 2 dos dois lados: \\(3b + 2 - 2 = 29 - 2\\), ou seja, \\(3b = 27\\).",
      "Agora a multiplicação: divida por 3 os dois lados: \\(b = 27 \\div 3 = 9\\).",
      "Conferência: troque \\(b\\) por \\(9\\) na igualdade: \\(3 \\cdot 9 + 2 = 29\\) ✓.",
      "Resposta: Bia tem 9 anos."
    ],
    "common": []
  }
];
