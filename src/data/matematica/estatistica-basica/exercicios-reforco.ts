import type { StatisticsExercise } from './exercicios';

// Banco original de reforço: 100 itens com resposta e pista preservadas.
export const exercisesData: StatisticsExercise[] = [
  {
    "id": 101,
    "level": 5,
    "title": "Moda Simples",
    "question": "Qual a moda de: \\{2, 3, 3, 5\\}?",
    "answer": "3",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "A moda é o valor que aparece com maior frequência."
      ],
      [
        "2",
        "No problema: Identifique o número que mais se repete."
      ]
    ]
  },
  {
    "id": 102,
    "level": 5,
    "title": "Moda Simples",
    "question": "Qual a moda de: \\{7, 8, 8, 9, 8\\}?",
    "answer": "8",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "A moda é o valor que aparece com maior frequência."
      ],
      [
        "2",
        "No problema: Identifique o número que mais se repete."
      ]
    ]
  },
  {
    "id": 103,
    "level": 5,
    "title": "Moda Bimodal",
    "question": "O conjunto \\{1, 1, 2, 2, 5\\} tem duas modas. Qual a soma delas?",
    "answer": "3",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "A moda é o valor que aparece com maior frequência."
      ],
      [
        "2",
        "No problema: Ache as duas modas e some (1+2)."
      ]
    ]
  },
  {
    "id": 104,
    "level": 5,
    "title": "Amodal",
    "question": "O conjunto \\{4, 5, 6\\} tem moda? (Digite 0 para não)",
    "answer": "0",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "A moda é o valor que aparece com maior frequência."
      ],
      [
        "2",
        "No problema: Nenhum repete, é amodal."
      ]
    ]
  },
  {
    "id": 105,
    "level": 5,
    "title": "Mediana Ímpar",
    "question": "Qual a mediana de: \\{1, 3, 5\\}?",
    "answer": "3",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Organize os valores em ordem crescente."
      ],
      [
        "2",
        "Se a quantidade for par, faça a média dos dois valores centrais."
      ],
      [
        "3",
        "No problema: Já está em ordem, pegue o do meio."
      ]
    ]
  },
  {
    "id": 106,
    "level": 5,
    "title": "Mediana Ímpar",
    "question": "Qual a mediana de: \\{9, 2, 7\\}?",
    "answer": "7",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Organize os valores em ordem crescente."
      ],
      [
        "2",
        "Se a quantidade for par, faça a média dos dois valores centrais."
      ],
      [
        "3",
        "No problema: Coloque em ordem: 2, 7, 9. O do meio é 7."
      ]
    ]
  },
  {
    "id": 107,
    "level": 5,
    "title": "Mediana Ímpar",
    "question": "Qual a mediana de: \\{10, 5, 12, 1, 8\\}?",
    "answer": "8",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Organize os valores em ordem crescente."
      ],
      [
        "2",
        "Se a quantidade for par, faça a média dos dois valores centrais."
      ],
      [
        "3",
        "No problema: Ordem: 1, 5, 8, 10, 12."
      ]
    ]
  },
  {
    "id": 108,
    "level": 5,
    "title": "Mediana Par",
    "question": "Qual a mediana de: \\{2, 4, 6, 8\\}?",
    "answer": "5",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Organize os valores em ordem crescente."
      ],
      [
        "2",
        "Se a quantidade for par, faça a média dos dois valores centrais."
      ],
      [
        "3",
        "No problema: Os do meio são 4 e 6. Média deles = 5."
      ]
    ]
  },
  {
    "id": 109,
    "level": 5,
    "title": "Mediana Par",
    "question": "Qual a mediana de: \\{1, 10, 3, 8\\}?",
    "answer": "5.5",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Organize os valores em ordem crescente."
      ],
      [
        "2",
        "Se a quantidade for par, faça a média dos dois valores centrais."
      ],
      [
        "3",
        "No problema: Ordem: 1, 3, 8, 10. Média de 3 e 8 é 5.5."
      ]
    ]
  },
  {
    "id": 110,
    "level": 5,
    "title": "Mediana Par",
    "question": "Qual a mediana de: \\{4, 4, 6, 10\\}?",
    "answer": "5",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Organize os valores em ordem crescente."
      ],
      [
        "2",
        "Se a quantidade for par, faça a média dos dois valores centrais."
      ],
      [
        "3",
        "No problema: Meio: 4 e 6. Média = 5."
      ]
    ]
  },
  {
    "id": 111,
    "level": 5,
    "title": "Moda Letras",
    "question": "Um dado deu: 2, 2, 3, 4. Qual a moda?",
    "answer": "2",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "A moda é o valor que aparece com maior frequência."
      ],
      [
        "2",
        "No problema: O 2 saiu mais vezes."
      ]
    ]
  },
  {
    "id": 112,
    "level": 5,
    "title": "Mediana Zero",
    "question": "Qual a mediana de: \\{0, 0, 1, 5, 6\\}?",
    "answer": "1",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Organize os valores em ordem crescente."
      ],
      [
        "2",
        "Se a quantidade for par, faça a média dos dois valores centrais."
      ],
      [
        "3",
        "No problema: O do meio é 1."
      ]
    ]
  },
  {
    "id": 113,
    "level": 5,
    "title": "Mediana Negativa",
    "question": "Qual a mediana de: \\{-5, -2, 0, 4, 8\\}?",
    "answer": "0",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Organize os valores em ordem crescente."
      ],
      [
        "2",
        "Se a quantidade for par, faça a média dos dois valores centrais."
      ],
      [
        "3",
        "No problema: O do meio é 0."
      ]
    ]
  },
  {
    "id": 114,
    "level": 5,
    "title": "Moda vs Mediana",
    "question": "Conjunto: \\{2, 2, 5\\}. Qual a soma da moda com a mediana?",
    "answer": "4",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: Moda=2, Mediana=2. Soma=4."
      ]
    ]
  },
  {
    "id": 115,
    "level": 5,
    "title": "Múltiplos no meio",
    "question": "Qual a mediana de: \\{5, 5, 5, 5\\}?",
    "answer": "5",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Organize os valores em ordem crescente."
      ],
      [
        "2",
        "Se a quantidade for par, faça a média dos dois valores centrais."
      ],
      [
        "3",
        "No problema: Todos são iguais."
      ]
    ]
  },
  {
    "id": 116,
    "level": 6,
    "title": "Média Básica",
    "question": "Média de \\{2, 4\\}",
    "answer": "3",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Some todos os valores e divida pela quantidade."
      ],
      [
        "2",
        "No problema: Soma (6) dividido por 2."
      ]
    ]
  },
  {
    "id": 117,
    "level": 6,
    "title": "Média Básica",
    "question": "Média de \\{1, 3, 5\\}",
    "answer": "3",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Some todos os valores e divida pela quantidade."
      ],
      [
        "2",
        "No problema: Soma (9) dividido por 3."
      ]
    ]
  },
  {
    "id": 118,
    "level": 6,
    "title": "Média Básica",
    "question": "Média de \\{10, 20, 30\\}",
    "answer": "20",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Some todos os valores e divida pela quantidade."
      ],
      [
        "2",
        "No problema: Soma (60) div 3."
      ]
    ]
  },
  {
    "id": 119,
    "level": 6,
    "title": "Média Básica",
    "question": "Média de \\{2, 2, 2, 2\\}",
    "answer": "2",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Some todos os valores e divida pela quantidade."
      ],
      [
        "2",
        "No problema: Se são iguais, a média é o próprio número."
      ]
    ]
  },
  {
    "id": 120,
    "level": 6,
    "title": "Média Básica",
    "question": "Média de \\{0, 10\\}",
    "answer": "5",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Some todos os valores e divida pela quantidade."
      ],
      [
        "2",
        "No problema: 10/2 = 5."
      ]
    ]
  },
  {
    "id": 121,
    "level": 6,
    "title": "Média com Negativos",
    "question": "Média de \\{-2, 0, 2\\}",
    "answer": "0",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Some todos os valores e divida pela quantidade."
      ],
      [
        "2",
        "No problema: Soma = 0. Média = 0."
      ]
    ]
  },
  {
    "id": 122,
    "level": 6,
    "title": "Média Decimal",
    "question": "Média de \\{1.5, 2.5\\}",
    "answer": "2",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Some todos os valores e divida pela quantidade."
      ],
      [
        "2",
        "No problema: Soma = 4. Div 2 = 2."
      ]
    ]
  },
  {
    "id": 123,
    "level": 6,
    "title": "Média Notas",
    "question": "Notas: 6, 7, 8 e 9. Qual a média?",
    "answer": "7.5",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Some todos os valores e divida pela quantidade."
      ],
      [
        "2",
        "No problema: Soma 30. 30/4 = 7.5."
      ]
    ]
  },
  {
    "id": 124,
    "level": 6,
    "title": "Incógnita",
    "question": "A média de \\{2, x\\} é 5. Qual o valor de x?",
    "answer": "8",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Monte a equação da média e isole a incógnita."
      ],
      [
        "2",
        "No problema: Soma tem que ser 10. 10 - 2 = 8."
      ]
    ]
  },
  {
    "id": 125,
    "level": 6,
    "title": "Incógnita",
    "question": "A média de \\{4, 6, x\\} é 6. Qual o valor de x?",
    "answer": "8",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Monte a equação da média e isole a incógnita."
      ],
      [
        "2",
        "No problema: Soma = 18. 4+6=10. x=8."
      ]
    ]
  },
  {
    "id": 126,
    "level": 6,
    "title": "Incógnita",
    "question": "A média de 4 números é 10. A soma deles é?",
    "answer": "40",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Monte a equação da média e isole a incógnita."
      ],
      [
        "2",
        "No problema: Média = Soma / N. Logo Soma = Média * N."
      ]
    ]
  },
  {
    "id": 127,
    "level": 6,
    "title": "Retirando elemento",
    "question": "Soma de 3 números é 30 (média 10). Tira-se um 0. Qual a nova média dos 2 que sobraram?",
    "answer": "15",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Monte a equação da média e isole a incógnita."
      ],
      [
        "2",
        "No problema: Soma continua 30, mas dividimos por 2."
      ]
    ]
  },
  {
    "id": 128,
    "level": 6,
    "title": "Comparação",
    "question": "A média de \\{2, 8\\} é igual a moda de \\{5, 5, 9\\}? (1 para sim, 0 para não)",
    "answer": "1",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: Média=5. Moda=5."
      ]
    ]
  },
  {
    "id": 129,
    "level": 6,
    "title": "Propriedade Média",
    "question": "A média de 5 números é 20. Se somar 2 a todos, qual a nova média?",
    "answer": "22",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Use a propriedade estatística indicada no enunciado."
      ],
      [
        "2",
        "No problema: Se somar K a todos, a média sobe K."
      ]
    ]
  },
  {
    "id": 130,
    "level": 6,
    "title": "Propriedade Média",
    "question": "A média de 10 números é 5. Se multiplicar todos por 3, qual a nova média?",
    "answer": "15",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Use a propriedade estatística indicada no enunciado."
      ],
      [
        "2",
        "No problema: Se multiplicar todos por K, a média multiplica por K."
      ]
    ]
  },
  {
    "id": 131,
    "level": 6,
    "title": "Outliers",
    "question": "Média de \\{1, 1, 1, 1, 96\\}",
    "answer": "20",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Some todos os valores e divida pela quantidade."
      ],
      [
        "2",
        "No problema: Soma = 100. 100/5 = 20."
      ]
    ]
  },
  {
    "id": 132,
    "level": 6,
    "title": "Idades",
    "question": "Idades: 10, 12, 14. Média daqui a 5 anos?",
    "answer": "17",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Use a propriedade estatística indicada no enunciado."
      ],
      [
        "2",
        "No problema: Média atual = 12. Daqui a 5 anos = 12+5."
      ]
    ]
  },
  {
    "id": 133,
    "level": 6,
    "title": "Soma Total",
    "question": "A média de 20 alunos é 6. Qual a soma de todas as notas?",
    "answer": "120",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Monte a equação da média e isole a incógnita."
      ],
      [
        "2",
        "No problema: 20 * 6 = 120."
      ]
    ]
  },
  {
    "id": 134,
    "level": 6,
    "title": "Médias combinadas",
    "question": "Turma A (10 alunos, média 6). Turma B (10 alunos, média 8). Média geral?",
    "answer": "7",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Monte a equação da média e isole a incógnita."
      ],
      [
        "2",
        "No problema: Soma total = 60 + 80 = 140. 140/20 = 7."
      ]
    ]
  },
  {
    "id": 135,
    "level": 6,
    "title": "Médias desiguais",
    "question": "Turma A (20 al, média 5). Turma B (10 al, média 8). Média geral?",
    "answer": "6",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Monte a equação da média e isole a incógnita."
      ],
      [
        "2",
        "No problema: Soma = 100 + 80 = 180. 180/30 = 6."
      ]
    ]
  },
  {
    "id": 136,
    "level": 7,
    "title": "Média Ponderada",
    "question": "Valor 5 (peso 2), Valor 10 (peso 3). Média?",
    "answer": "8",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Multiplique cada valor pelo seu peso ou frequência."
      ],
      [
        "2",
        "Some os produtos e divida pela soma dos pesos."
      ],
      [
        "3",
        "No problema: ((5*2) + (10*3)) / 5 = 40 / 5 = 8."
      ]
    ]
  },
  {
    "id": 137,
    "level": 7,
    "title": "Média Ponderada",
    "question": "Valor 2 (peso 1), Valor 8 (peso 1). Média?",
    "answer": "5",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Multiplique cada valor pelo seu peso ou frequência."
      ],
      [
        "2",
        "Some os produtos e divida pela soma dos pesos."
      ],
      [
        "3",
        "No problema: Se os pesos são iguais, é igual à média simples."
      ]
    ]
  },
  {
    "id": 138,
    "level": 7,
    "title": "Nota Escola",
    "question": "Trabalho (Peso 1) = 6. Prova (Peso 2) = 9. Média final?",
    "answer": "8",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Multiplique cada valor pelo seu peso ou frequência."
      ],
      [
        "2",
        "Some os produtos e divida pela soma dos pesos."
      ],
      [
        "3",
        "No problema: (6+18)/3 = 24/3 = 8."
      ]
    ]
  },
  {
    "id": 139,
    "level": 7,
    "title": "Nota Escola",
    "question": "Teste (P1)=5, Prova (P2)=8, Exame (P2)=9. Média?",
    "answer": "7.8",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Multiplique cada valor pelo seu peso ou frequência."
      ],
      [
        "2",
        "Some os produtos e divida pela soma dos pesos."
      ],
      [
        "3",
        "No problema: (5+16+18)/5 = 39/5 = 7.8."
      ]
    ]
  },
  {
    "id": 140,
    "level": 7,
    "title": "Frequência",
    "question": "Número 2 aparece 3 vezes. Número 4 aparece 2 vezes. Média?",
    "answer": "2.8",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Multiplique cada valor pelo seu peso ou frequência."
      ],
      [
        "2",
        "Some os produtos e divida pela soma dos pesos."
      ],
      [
        "3",
        "No problema: (6+8)/5 = 14/5 = 2.8."
      ]
    ]
  },
  {
    "id": 141,
    "level": 7,
    "title": "Frequência",
    "question": "Salário 1000 (4 funcionários). Salário 2000 (1 func). Média?",
    "answer": "1200",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Multiplique cada valor pelo seu peso ou frequência."
      ],
      [
        "2",
        "Some os produtos e divida pela soma dos pesos."
      ],
      [
        "3",
        "No problema: 6000 / 5 = 1200."
      ]
    ]
  },
  {
    "id": 142,
    "level": 7,
    "title": "Pesos Fracionários",
    "question": "Nota 10 (peso 0.4) e Nota 5 (peso 0.6). Média?",
    "answer": "7",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Multiplique cada valor pelo seu peso ou frequência."
      ],
      [
        "2",
        "Some os produtos e divida pela soma dos pesos."
      ],
      [
        "3",
        "No problema: Soma dos pesos = 1.0. Logo: 4 + 3 = 7."
      ]
    ]
  },
  {
    "id": 143,
    "level": 7,
    "title": "Pesos 100%",
    "question": "N1 vale 30% (Nota 8). N2 vale 70% (Nota 6). Média?",
    "answer": "6.6",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Multiplique cada valor pelo seu peso ou frequência."
      ],
      [
        "2",
        "Some os produtos e divida pela soma dos pesos."
      ],
      [
        "3",
        "No problema: 0.3*8 + 0.7*6 = 2.4 + 4.2 = 6.6."
      ]
    ]
  },
  {
    "id": 144,
    "level": 7,
    "title": "Incógnita Ponderada",
    "question": "N1=5 (P1). N2=x (P2). Média Final=7. Qual o x?",
    "answer": "8",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Multiplique cada valor pelo seu peso ou frequência."
      ],
      [
        "2",
        "Some os produtos e divida pela soma dos pesos."
      ],
      [
        "3",
        "No problema: (5+2x)/3 = 7 -> 5+2x=21 -> 2x=16."
      ]
    ]
  },
  {
    "id": 145,
    "level": 7,
    "title": "Frequência Simples",
    "question": "Dois notas 6, uma nota 9. Média?",
    "answer": "7",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Multiplique cada valor pelo seu peso ou frequência."
      ],
      [
        "2",
        "Some os produtos e divida pela soma dos pesos."
      ],
      [
        "3",
        "No problema: 21/3 = 7."
      ]
    ]
  },
  {
    "id": 146,
    "level": 7,
    "title": "Frequência Simples",
    "question": "Três notas 4, duas notas 9. Média?",
    "answer": "6",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Multiplique cada valor pelo seu peso ou frequência."
      ],
      [
        "2",
        "Some os produtos e divida pela soma dos pesos."
      ],
      [
        "3",
        "No problema: 30/5 = 6."
      ]
    ]
  },
  {
    "id": 147,
    "level": 7,
    "title": "Moedas",
    "question": "3 moedas de 50 cent e 2 de 1 real(100). Valor médio (em centavos)?",
    "answer": "70",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Multiplique cada valor pelo seu peso ou frequência."
      ],
      [
        "2",
        "Some os produtos e divida pela soma dos pesos."
      ],
      [
        "3",
        "No problema: (150+200)/5 = 350/5 = 70."
      ]
    ]
  },
  {
    "id": 148,
    "level": 7,
    "title": "Bimestre",
    "question": "Bim 1,2,3,4 (Pesos 1,1,2,2). Notas: 5, 5, 8, 8. Média?",
    "answer": "7",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Multiplique cada valor pelo seu peso ou frequência."
      ],
      [
        "2",
        "Some os produtos e divida pela soma dos pesos."
      ],
      [
        "3",
        "No problema: (5+5+16+16)/6 = 42/6 = 7."
      ]
    ]
  },
  {
    "id": 149,
    "level": 7,
    "title": "Peso Oculto",
    "question": "Turma de meninos (média 6). Turma meninas (média 8). Média 7. Proporção é 1 para 1? (1=sim, 0=não)",
    "answer": "1",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Multiplique cada valor pelo seu peso ou frequência."
      ],
      [
        "2",
        "Some os produtos e divida pela soma dos pesos."
      ],
      [
        "3",
        "No problema: Se a média geral é a média aritmética exata das duas, os pesos são iguais."
      ]
    ]
  },
  {
    "id": 150,
    "level": 7,
    "title": "Concurso",
    "question": "Português (P2) = 7, Mat (P3) = 8, Info (P1) = 6. Média?",
    "answer": "7.33",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Multiplique cada valor pelo seu peso ou frequência."
      ],
      [
        "2",
        "Some os produtos e divida pela soma dos pesos."
      ],
      [
        "3",
        "No problema: (14+24+6)/6 = 44/6 = 7.333... (use 7.33)."
      ]
    ]
  },
  {
    "id": 151,
    "level": 8,
    "title": "Amplitude",
    "question": "Qual a amplitude de: \\{1, 5, 10, 20\\}?",
    "answer": "19",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Amplitude é a diferença entre o maior e o menor valor."
      ],
      [
        "2",
        "No problema: Maior (20) - Menor (1)."
      ]
    ]
  },
  {
    "id": 152,
    "level": 8,
    "title": "Amplitude",
    "question": "Qual a amplitude de: \\{-5, 0, 5\\}?",
    "answer": "10",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Amplitude é a diferença entre o maior e o menor valor."
      ],
      [
        "2",
        "No problema: 5 - (-5) = 10."
      ]
    ]
  },
  {
    "id": 153,
    "level": 8,
    "title": "Distância à média",
    "question": "Conjunto \\{2, 6\\}. Média = 4. Qual o quadrado da diferença do 6 para a média?",
    "answer": "4",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Calcule a média, os desvios, os quadrados dos desvios e a média desses quadrados."
      ],
      [
        "2",
        "No problema: Diferença = 2. Quadrado = 4."
      ]
    ]
  },
  {
    "id": 154,
    "level": 8,
    "title": "Variância Exata",
    "question": "Qual a Variância (populacional) de \\{2, 6\\}?",
    "answer": "4",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Calcule a média, os desvios, os quadrados dos desvios e a média desses quadrados."
      ],
      [
        "2",
        "No problema: Média=4. Sq: 4, 4. Soma=8. Var = 8/2 = 4."
      ]
    ]
  },
  {
    "id": 155,
    "level": 8,
    "title": "Desvio Padrão",
    "question": "Se a Variância é 4, qual o Desvio Padrão?",
    "answer": "2",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Calcule a média, os desvios, os quadrados dos desvios e a média desses quadrados."
      ],
      [
        "2",
        "No problema: Raiz quadrada da Variância."
      ]
    ]
  },
  {
    "id": 156,
    "level": 8,
    "title": "Desvio Padrão",
    "question": "Se a Variância é 25, qual o DP?",
    "answer": "5",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Calcule a média, os desvios, os quadrados dos desvios e a média desses quadrados."
      ],
      [
        "2",
        "No problema: Raiz de 25."
      ]
    ]
  },
  {
    "id": 157,
    "level": 8,
    "title": "Variância Exata",
    "question": "Qual a Variância de \\{3, 3, 3\\}?",
    "answer": "0",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Calcule a média, os desvios, os quadrados dos desvios e a média desses quadrados."
      ],
      [
        "2",
        "No problema: Se os dados são idênticos, não há dispersão."
      ]
    ]
  },
  {
    "id": 158,
    "level": 8,
    "title": "Variância Exata",
    "question": "Qual a Variância de \\{1, 3, 5\\}?",
    "answer": "2.67",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Calcule a média, os desvios, os quadrados dos desvios e a média desses quadrados."
      ],
      [
        "2",
        "No problema: Média=3. Sq: 4, 0, 4. Soma=8. Var=8/3 = 2.666... (use 2.67)."
      ]
    ]
  },
  {
    "id": 159,
    "level": 8,
    "title": "Variância Exata",
    "question": "Qual a Variância de \\{2, 4, 6, 8\\}?",
    "answer": "5",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Calcule a média, os desvios, os quadrados dos desvios e a média desses quadrados."
      ],
      [
        "2",
        "No problema: Média=5. Sq: 9, 1, 1, 9. Soma=20. Var=20/4=5."
      ]
    ]
  },
  {
    "id": 160,
    "level": 8,
    "title": "Variância Exata",
    "question": "Qual a Variância de \\{10, 10, 20, 20\\}?",
    "answer": "25",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Calcule a média, os desvios, os quadrados dos desvios e a média desses quadrados."
      ],
      [
        "2",
        "No problema: Média=15. Sq: 25, 25, 25, 25. Soma=100. Var=100/4=25."
      ]
    ]
  },
  {
    "id": 161,
    "level": 8,
    "title": "DP Exato",
    "question": "Qual o DP de \\{10, 10, 20, 20\\}?",
    "answer": "5",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Calcule a média, os desvios, os quadrados dos desvios e a média desses quadrados."
      ],
      [
        "2",
        "No problema: Raiz da Variância (25) = 5."
      ]
    ]
  },
  {
    "id": 162,
    "level": 8,
    "title": "Variância Exata",
    "question": "Qual a Variância de \\{-1, 1\\}?",
    "answer": "1",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Calcule a média, os desvios, os quadrados dos desvios e a média desses quadrados."
      ],
      [
        "2",
        "No problema: Média=0. Sq: 1, 1. Soma=2. Var=2/2=1."
      ]
    ]
  },
  {
    "id": 163,
    "level": 8,
    "title": "DP Propriedade",
    "question": "Variância de notas foi 4. O professor somou 2 pontos para todos. Qual a nova Variância?",
    "answer": "4",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Use a propriedade estatística indicada no enunciado."
      ],
      [
        "2",
        "No problema: Somar constantes não altera a dispersão."
      ]
    ]
  },
  {
    "id": 164,
    "level": 8,
    "title": "DP Propriedade",
    "question": "O DP de um conjunto é 3. Multiplicou-se todos os dados por 2. Qual o novo DP?",
    "answer": "6",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Use a propriedade estatística indicada no enunciado."
      ],
      [
        "2",
        "No problema: Ao multiplicar por K, o DP multiplica por K."
      ]
    ]
  },
  {
    "id": 165,
    "level": 8,
    "title": "Variância Propriedade",
    "question": "A Variância é 5. Multiplicou-se tudo por 2. Qual a nova variância?",
    "answer": "20",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Use a propriedade estatística indicada no enunciado."
      ],
      [
        "2",
        "No problema: A Variância multiplica por K^2 (2^2 = 4). 5*4=20."
      ]
    ]
  },
  {
    "id": 166,
    "level": 8,
    "title": "DP Negativo?",
    "question": "O Desvio Padrão pode ser negativo? (1 para sim, 0 para não)",
    "answer": "0",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Calcule a média, os desvios, os quadrados dos desvios e a média desses quadrados."
      ],
      [
        "2",
        "No problema: Soma de quadrados é positiva. DP é sempre >= 0."
      ]
    ]
  },
  {
    "id": 167,
    "level": 8,
    "title": "Dispersão Máxima",
    "question": "Em uma prova de 0 a 10 (apenas 2 alunos), qual a maior variância possível?",
    "answer": "25",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Calcule a média, os desvios, os quadrados dos desvios e a média desses quadrados."
      ],
      [
        "2",
        "No problema: Maior distância da média. Notas 0 e 10. Média=5. Sq=25,25. Var=25."
      ]
    ]
  },
  {
    "id": 168,
    "level": 8,
    "title": "Variância de 2 valores",
    "question": "Se temos x e y, e Amplitude é 10. Qual o DP?",
    "answer": "5",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Calcule a média, os desvios, os quadrados dos desvios e a média desses quadrados."
      ],
      [
        "2",
        "No problema: Eles estão a dist 5 da média. DP = 5."
      ]
    ]
  },
  {
    "id": 169,
    "level": 8,
    "title": "Soma dos Desvios",
    "question": "Qual a soma simples das diferenças (x - média) em qualquer conjunto?",
    "answer": "0",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Calcule a média, os desvios, os quadrados dos desvios e a média desses quadrados."
      ],
      [
        "2",
        "No problema: A média balanceia perfeitamente os desvios, a soma SEM quadrados é sempre 0."
      ]
    ]
  },
  {
    "id": 170,
    "level": 8,
    "title": "Variância Decimal",
    "question": "Qual a Variância de \\{0, 1, 2, 3, 4\\}?",
    "answer": "2",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Calcule a média, os desvios, os quadrados dos desvios e a média desses quadrados."
      ],
      [
        "2",
        "No problema: Média=2. Sq: 4, 1, 0, 1, 4. Soma=10. Var=10/5=2."
      ]
    ]
  },
  {
    "id": 171,
    "level": 9,
    "title": "Tabela Moda",
    "question": "Valores (e Frequência): 2(5x), 3(8x), 4(2x). Moda?",
    "answer": "3",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Interprete a tabela ou o gráfico e considere as frequências."
      ],
      [
        "2",
        "Quando houver média ponderada, multiplique cada valor por sua frequência."
      ],
      [
        "3",
        "No problema: O 3 tem maior frequência (8)."
      ]
    ]
  },
  {
    "id": 172,
    "level": 9,
    "title": "Tabela Mediana",
    "question": "Mesma Tabela: 2(5x), 3(8x), 4(2x). Total=15. Mediana?",
    "answer": "3",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Interprete a tabela ou o gráfico e considere as frequências."
      ],
      [
        "2",
        "Quando houver média ponderada, multiplique cada valor por sua frequência."
      ],
      [
        "3",
        "No problema: Posição 8 da fila. Os 5 primeiros são '2'. Do 6º ao 13º é '3'."
      ]
    ]
  },
  {
    "id": 173,
    "level": 9,
    "title": "Tabela Média",
    "question": "Mesma Tabela: Média?",
    "answer": "2.8",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Interprete a tabela ou o gráfico e considere as frequências."
      ],
      [
        "2",
        "Quando houver média ponderada, multiplique cada valor por sua frequência."
      ],
      [
        "3",
        "No problema: (10 + 24 + 8) / 15 = 42 / 15 = 2.8."
      ]
    ]
  },
  {
    "id": 174,
    "level": 9,
    "title": "Gráfico Barras",
    "question": "3 barras: A=10, B=20, C=30. Média?",
    "answer": "20",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Interprete a tabela ou o gráfico e considere as frequências."
      ],
      [
        "2",
        "Quando houver média ponderada, multiplique cada valor por sua frequência."
      ],
      [
        "3",
        "No problema: (10+20+30)/3 = 20."
      ]
    ]
  },
  {
    "id": 175,
    "level": 9,
    "title": "Total Frequência",
    "question": "Quantos dados existem se a tabela tem Freq: 2, 4, 4?",
    "answer": "10",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Interprete a tabela ou o gráfico e considere as frequências."
      ],
      [
        "2",
        "Quando houver média ponderada, multiplique cada valor por sua frequência."
      ],
      [
        "3",
        "No problema: Soma das frequências."
      ]
    ]
  },
  {
    "id": 176,
    "level": 9,
    "title": "Ponto Médio Classe",
    "question": "Classe de alturas: [1.60, 1.70). Ponto médio?",
    "answer": "1.65",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Interprete a tabela ou o gráfico e considere as frequências."
      ],
      [
        "2",
        "Quando houver média ponderada, multiplique cada valor por sua frequência."
      ],
      [
        "3",
        "No problema: (1.60+1.70)/2."
      ]
    ]
  },
  {
    "id": 177,
    "level": 9,
    "title": "Média Agrupada",
    "question": "Classe [0,2) tem Freq=3. Ponto médio é 1. Produto Freq*Meio?",
    "answer": "3",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Interprete a tabela ou o gráfico e considere as frequências."
      ],
      [
        "2",
        "Quando houver média ponderada, multiplique cada valor por sua frequência."
      ],
      [
        "3",
        "No problema: 1 * 3 = 3."
      ]
    ]
  },
  {
    "id": 178,
    "level": 9,
    "title": "Média Agrupada Geral",
    "question": "Classe [0,2) com f=2; Classe [2,4) com f=2. Média?",
    "answer": "2",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Interprete a tabela ou o gráfico e considere as frequências."
      ],
      [
        "2",
        "Quando houver média ponderada, multiplique cada valor por sua frequência."
      ],
      [
        "3",
        "No problema: Meios: 1 e 3. Ponderada: (2*1 + 2*3)/4 = 8/4 = 2."
      ]
    ]
  },
  {
    "id": 179,
    "level": 9,
    "title": "Tabela Mediana Par",
    "question": "Freq: 1(2x), 2(2x). N=4. Mediana?",
    "answer": "1.5",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Interprete a tabela ou o gráfico e considere as frequências."
      ],
      [
        "2",
        "Quando houver média ponderada, multiplique cada valor por sua frequência."
      ],
      [
        "3",
        "No problema: Fila: 1, 1, 2, 2. Meio: (1+2)/2."
      ]
    ]
  },
  {
    "id": 180,
    "level": 9,
    "title": "Gráfico Setores (Pizza)",
    "question": "Se a fatia de 90 graus vale 10 pessoas, o total (360 graus) é?",
    "answer": "40",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Interprete a tabela ou o gráfico e considere as frequências."
      ],
      [
        "2",
        "Quando houver média ponderada, multiplique cada valor por sua frequência."
      ],
      [
        "3",
        "No problema: 90 é um quarto. 10 * 4 = 40."
      ]
    ]
  },
  {
    "id": 181,
    "level": 9,
    "title": "Moda em Classes",
    "question": "Qual classe é modal? [0,2)f=5, [2,4)f=10, [4,6)f=1. Digite o ponto médio dela.",
    "answer": "3",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Interprete a tabela ou o gráfico e considere as frequências."
      ],
      [
        "2",
        "Quando houver média ponderada, multiplique cada valor por sua frequência."
      ],
      [
        "3",
        "No problema: Classe 2-4 tem f=10. Meio é 3."
      ]
    ]
  },
  {
    "id": 182,
    "level": 9,
    "title": "Variância Tabela",
    "question": "Val(Freq): 0(1), 4(1). Média=2. Variância?",
    "answer": "4",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Interprete a tabela ou o gráfico e considere as frequências."
      ],
      [
        "2",
        "Quando houver média ponderada, multiplique cada valor por sua frequência."
      ],
      [
        "3",
        "No problema: Sq: (0-2)^2=4, (4-2)^2=4. Soma=8. 8/2=4."
      ]
    ]
  },
  {
    "id": 183,
    "level": 9,
    "title": "Frequência Relativa",
    "question": "Freq Absoluta de 'A' = 10, Total = 50. Qual a freq relativa (em %)?",
    "answer": "20",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Interprete a tabela ou o gráfico e considere as frequências."
      ],
      [
        "2",
        "Quando houver média ponderada, multiplique cada valor por sua frequência."
      ],
      [
        "3",
        "No problema: 10/50 = 0.20 = 20%."
      ]
    ]
  },
  {
    "id": 184,
    "level": 9,
    "title": "Mediana vs Média Assimetrica",
    "question": "Em Salários onde a maioria ganha pouco, a Média costuma ser maior que a Mediana? (1=sim)",
    "answer": "1",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Interprete a tabela ou o gráfico e considere as frequências."
      ],
      [
        "2",
        "Quando houver média ponderada, multiplique cada valor por sua frequência."
      ],
      [
        "3",
        "No problema: Os ricos puxam a média para cima."
      ]
    ]
  },
  {
    "id": 185,
    "level": 9,
    "title": "Gráfico de Linha",
    "question": "Dias (X), Vendas (Y). Valores Y: 4, 8, 12, 16. Média?",
    "answer": "10",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Interprete a tabela ou o gráfico e considere as frequências."
      ],
      [
        "2",
        "Quando houver média ponderada, multiplique cada valor por sua frequência."
      ],
      [
        "3",
        "No problema: (4+8+12+16)/4 = 40/4 = 10."
      ]
    ]
  },
  {
    "id": 186,
    "level": 10,
    "title": "Desafio Falta 1",
    "question": "A média de 4 provas é 6. Quanto tirar na 5ª prova para a média subir para 7?",
    "answer": "11",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: Soma_atual = 24. Nova soma deve ser 5*7=35. 35-24 = 11."
      ]
    ]
  },
  {
    "id": 187,
    "level": 10,
    "title": "Correção de Média",
    "question": "Média de 10 num era 5 (Soma 50). Descobriu-se que um '2' era na verdade '12' (+10). Nova média?",
    "answer": "6",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: Soma sobe 10, vai para 60. 60/10 = 6."
      ]
    ]
  },
  {
    "id": 188,
    "level": 10,
    "title": "Moda e Média",
    "question": "O conjunto \\{2, x, 6\\} tem média 4. Qual a mediana?",
    "answer": "4",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: 2+x+6 = 12 -> x=4. Conj={2,4,6}. Med=4."
      ]
    ]
  },
  {
    "id": 189,
    "level": 10,
    "title": "Descarte Pior",
    "question": "Notas: 2, 8, 8. Média descartando a pior nota?",
    "answer": "8",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: Descarta 2. Fica 8 e 8. Média 8."
      ]
    ]
  },
  {
    "id": 190,
    "level": 10,
    "title": "Variância Escalar",
    "question": "As notas 10, 10, 10 têm variância zero. E as notas 0, 0, 0?",
    "answer": "0",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: Constantes tem variância nula."
      ]
    ]
  },
  {
    "id": 191,
    "level": 10,
    "title": "Interpolação",
    "question": "Mediana de 100 pessoas está entre a 50ª (nota 4) e a 51ª (nota 5).",
    "answer": "4.5",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: (4+5)/2."
      ]
    ]
  },
  {
    "id": 192,
    "level": 10,
    "title": "Erro Mediana",
    "question": "O aluno A diz que mediana de 5, 2, 8 é 2. Qual o valor correto?",
    "answer": "5",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: Coloque em ordem: 2, 5, 8."
      ]
    ]
  },
  {
    "id": 193,
    "level": 10,
    "title": "Aprovação",
    "question": "Média=(2*P1 + 3*P2)/5. P1=5. Quer média 6. Qual P2 mínimo?",
    "answer": "6.67",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: 10 + 3*P2 = 30 -> 3*P2=20 -> P2=6.666..."
      ]
    ]
  },
  {
    "id": 194,
    "level": 10,
    "title": "Qual é maior?",
    "question": "Em \\{1, 2, 99\\}, qual é maior: média (digite 1) ou mediana (digite 2)?",
    "answer": "1",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: Média=34, Med=2."
      ]
    ]
  },
  {
    "id": 195,
    "level": 10,
    "title": "Variância Transformada",
    "question": "Se Var(X) = 10. Var(2X) = ?",
    "answer": "40",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: Multiplica por 2^2=4. 10*4=40."
      ]
    ]
  },
  {
    "id": 196,
    "level": 10,
    "title": "Desvio Padrão Transformado",
    "question": "Se DP(X) = 10. DP(2X) = ?",
    "answer": "20",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: Multiplica pelo modulo. 10*2=20."
      ]
    ]
  },
  {
    "id": 197,
    "level": 10,
    "title": "Efeito Constante",
    "question": "Soma 5 em tudo. O DP muda? (0=não, 1=sim)",
    "answer": "0",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: Dispersão é inalterada por translação."
      ]
    ]
  },
  {
    "id": 198,
    "level": 10,
    "title": "Pesos Equivalentes",
    "question": "Média de A(peso 2) e B(peso 2) é o mesmo que média simples de A e B? (1=sim, 0=não)",
    "answer": "1",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: Proporções iguais = média simples."
      ]
    ]
  },
  {
    "id": 199,
    "level": 10,
    "title": "Mediana Robusta",
    "question": "Dado \\{1, 2, 3\\}, Med=2. Se o 3 virar 3000, Mediana muda? (0=não, 1=sim)",
    "answer": "0",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: A mediana é resistente a outliers no extremo."
      ]
    ]
  },
  {
    "id": 200,
    "level": 10,
    "title": "Balanço Final",
    "question": "Um conjunto de 10 num tem média 0. O que podemos afirmar da soma?",
    "answer": "0",
    "tolerance": 0.02,
    "steps": [
      [
        "1",
        "Resolva cada medida solicitada e combine os resultados conforme o enunciado."
      ],
      [
        "2",
        "No problema: Média 0 só ocorre se a soma for 0."
      ]
    ]
  }
];
