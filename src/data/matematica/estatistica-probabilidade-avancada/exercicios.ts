export const advancedStatisticsExercises = [
  {
    "id": 1,
    "level": 1,
    "title": "Probabilidade Condicional Básica",
    "question": "Numa caixa há 5 bolas azuis e 5 vermelhas. Se tirei uma bola e NÃO olhei, qual a chance de ser azul?",
    "answer": "1/2",
    "type": "basic",
    "hint": "P(A) original.",
    "steps": [
      "Use a definição de probabilidade: casos favoráveis divididos pelo total de casos possíveis.",
      "Cálculo: P(A) original."
    ]
  },
  {
    "id": 2,
    "level": 1,
    "title": "Redução de Espaço",
    "question": "Dado lançado. Sabendo que o número é ímpar (1,3,5), qual a chance de ser 5?",
    "answer": "1/3",
    "type": "cond",
    "hint": "Espaço = {1,3,5}.",
    "steps": [
      "A condição reduz o espaço amostral. Conte apenas os casos que satisfazem a informação dada.",
      "Cálculo: Espaço = {1,3,5}."
    ]
  },
  {
    "id": 3,
    "level": 1,
    "title": "Redução de Espaço",
    "question": "Cartas (52). Sabendo que é uma carta de Copas (13), qual a chance de ser o Ás de Copas?",
    "answer": "1/13",
    "type": "cond",
    "hint": "Universo reduzido a 13.",
    "steps": [
      "A condição reduz o espaço amostral. Conte apenas os casos que satisfazem a informação dada.",
      "Cálculo: Universo reduzido a 13."
    ]
  },
  {
    "id": 4,
    "level": 1,
    "title": "Regra do E (Independente)",
    "question": "Jogar 2 dados. Chance de 6 no primeiro E 6 no segundo?",
    "answer": "1/36",
    "type": "and",
    "hint": "1/6 * 1/6",
    "steps": [
      "Para eventos independentes ou sequenciais, multiplique as probabilidades correspondentes e considere se há reposição.",
      "Cálculo: 1/6 * 1/6"
    ]
  },
  {
    "id": 5,
    "level": 1,
    "title": "Regra do E (Sem Reposição)",
    "question": "Urna com 2 Brancas, 2 Pretas. Puxar 2 sem rep. Branca E Preta (ordem fixa)?",
    "answer": "1/6",
    "type": "and_no_rep",
    "hint": "(2/4) * (2/3) = 4/12",
    "steps": [
      "Sem reposição, atualize o total e as quantidades após a primeira retirada.",
      "Cálculo: (2/4) * (2/3) = 4/12"
    ]
  },
  {
    "id": 6,
    "level": 1,
    "title": "Regra do OU (Soma)",
    "question": "Probabilidade de tirar 1 (1/6) OU 2 (1/6) no dado?",
    "answer": "1/3",
    "type": "or",
    "hint": "1/6 + 1/6",
    "steps": [
      "Para eventos mutuamente exclusivos, some as probabilidades.",
      "Cálculo: 1/6 + 1/6"
    ]
  },
  {
    "id": 7,
    "level": 1,
    "title": "Regra do OU (Interseção)",
    "question": "Dado: Prob de ser Maior que 3 (4,5,6) OU ser Par (2,4,6)?",
    "answer": "2/3",
    "type": "or_int",
    "hint": "3/6 + 3/6 - 2/6 (pois 4 e 6 repetem)",
    "steps": [
      "Na união, some as probabilidades e subtraia a interseção contada duas vezes.",
      "Cálculo: 3/6 + 3/6 - 2/6 (pois 4 e 6 repetem)"
    ]
  },
  {
    "id": 8,
    "level": 1,
    "title": "Complementar",
    "question": "Em 100 parafusos, 2 defeituosos. Chance de puxar um PERFEITO?",
    "answer": "49/50",
    "type": "comp",
    "hint": "98/100 = 49/50",
    "steps": [
      "Use o evento complementar: 1 menos a probabilidade do evento contrário.",
      "Cálculo: 98/100 = 49/50"
    ]
  },
  {
    "id": 9,
    "level": 1,
    "title": "Pelo menos um",
    "question": "2 moedas. Chance de pelo menos 1 cara? (1 - chance zero caras)",
    "answer": "3/4",
    "type": "comp",
    "hint": "1 - (1/2 * 1/2)",
    "steps": [
      "Use o evento complementar: 1 menos a probabilidade do evento contrário.",
      "Cálculo: 1 - (1/2 * 1/2)"
    ]
  },
  {
    "id": 10,
    "level": 1,
    "title": "Soma 100%",
    "question": "Se a chance de chover é 0.2, e nevar é 0.1 (mutuamente excludentes). Qual a chance de sol?",
    "answer": "0.7",
    "type": "comp",
    "hint": "1 - (0.2+0.1)",
    "steps": [
      "Use o evento complementar: 1 menos a probabilidade do evento contrário.",
      "Cálculo: 1 - (0.2+0.1)"
    ]
  },
  {
    "id": 11,
    "level": 1,
    "title": "Produto Regra Geral",
    "question": "Se P(A) = 0.5, P(B dado A) = 0.4. Qual P(A e B)?",
    "answer": "0.2",
    "type": "prod",
    "hint": "0.5 * 0.4",
    "steps": [
      "A probabilidade conjunta pode ser calculada multiplicando P(A) por P(B|A).",
      "Cálculo: 0.5 * 0.4"
    ]
  },
  {
    "id": 12,
    "level": 1,
    "title": "Fórmula Condicional",
    "question": "Se P(A e B) = 0.1 e P(B) = 0.5, qual P(A dado B)?",
    "answer": "1/5",
    "type": "cond_form",
    "hint": "0.1 / 0.5 = 1/5",
    "steps": [
      "Use a definição de probabilidade condicional: P(A|B)=P(A∩B)/P(B).",
      "Cálculo: 0.1 / 0.5 = 1/5"
    ]
  },
  {
    "id": 13,
    "level": 1,
    "title": "Lógica de Independentes",
    "question": "A e B são independentes. P(A)=0.3, P(B)=0.4. P(A e B)?",
    "answer": "0.12",
    "type": "prod",
    "hint": "0.3 * 0.4",
    "steps": [
      "A probabilidade conjunta pode ser calculada multiplicando P(A) por P(B|A).",
      "Cálculo: 0.3 * 0.4"
    ]
  },
  {
    "id": 14,
    "level": 1,
    "title": "Lógica Mutuamente Exclusivos",
    "question": "A e B são mut. exclusivos. P(A)=0.3, P(B)=0.4. P(A e B)?",
    "answer": "0",
    "type": "prod",
    "hint": "Não podem ocorrer juntos.",
    "steps": [
      "A probabilidade conjunta pode ser calculada multiplicando P(A) por P(B|A).",
      "Cálculo: Não podem ocorrer juntos."
    ]
  },
  {
    "id": 15,
    "level": 1,
    "title": "Lógica Mutuamente Exclusivos",
    "question": "A e B são mut. exclusivos. P(A)=0.3, P(B)=0.4. P(A ou B)?",
    "answer": "0.7",
    "type": "or",
    "hint": "0.3 + 0.4",
    "steps": [
      "Para eventos mutuamente exclusivos, some as probabilidades.",
      "Cálculo: 0.3 + 0.4"
    ]
  },
  {
    "id": 16,
    "level": 2,
    "title": "Esperança 1",
    "question": "Um dado rende R$6 se cair 6, R$0 nos outros. Quanto você espera ganhar em média por jogada?",
    "answer": "1",
    "type": "ev",
    "hint": "6 * (1/6) + 0",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: 6 * (1/6) + 0"
    ]
  },
  {
    "id": 17,
    "level": 2,
    "title": "Esperança Moeda",
    "question": "Se der cara ganha 10. Coroa perde 10. E[X]?",
    "answer": "0",
    "type": "ev",
    "hint": "10*(0.5) - 10*(0.5)",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: 10*(0.5) - 10*(0.5)"
    ]
  },
  {
    "id": 18,
    "level": 2,
    "title": "Esperança Seguro",
    "question": "Carro roubado (p=0.01) paga 10000. Custo da seguradora esperado por carro?",
    "answer": "100",
    "type": "ev",
    "hint": "10000 * 0.01",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: 10000 * 0.01"
    ]
  },
  {
    "id": 19,
    "level": 2,
    "title": "Loteria justa?",
    "question": "Bilhete R$2. Prêmio R$100. Chance 1%. Valor esperado LÍQUIDO?",
    "answer": "-1",
    "type": "ev",
    "hint": "(100 * 0.01) - 2",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: (100 * 0.01) - 2"
    ]
  },
  {
    "id": 20,
    "level": 2,
    "title": "Jogo cassino",
    "question": "Roleta (1 a 36). Aposta em 1 número. Paga 36. Prob = 1/36. Valor esperado BRUTO?",
    "answer": "1",
    "type": "ev",
    "hint": "36 * (1/36)",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: 36 * (1/36)"
    ]
  },
  {
    "id": 21,
    "level": 2,
    "title": "Dado Viciado",
    "question": "Dado onde o 6 tem 50% de chance. Os outros dividem igual (10% cada). Qual a média E[X] (esperança)?",
    "answer": "4.5",
    "type": "ev",
    "hint": "6*0.5 + (1+2+3+4+5)*0.1 = 3 + 1.5",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: 6*0.5 + (1+2+3+4+5)*0.1 = 3 + 1.5"
    ]
  },
  {
    "id": 22,
    "level": 2,
    "title": "Múltiplos Prêmios",
    "question": "Rifa de 1000 números. 1 prêmio de R$500, 2 prêmios de R$100. E[X] bruto por bilhete?",
    "answer": "0.7",
    "type": "ev",
    "hint": "(500*1 + 100*2) / 1000",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: (500*1 + 100*2) / 1000"
    ]
  },
  {
    "id": 23,
    "level": 2,
    "title": "Lucro Variável",
    "question": "Venda: 30% chance de lucro 1000. 70% chance de prejuízo 200. E[X]?",
    "answer": "160",
    "type": "ev",
    "hint": "0.3*1000 - 0.7*200",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: 0.3*1000 - 0.7*200"
    ]
  },
  {
    "id": 24,
    "level": 2,
    "title": "Atirador",
    "question": "Acerta 20% e ganha 5 pts. Erra 80% e perde 1 pt. E[X] por tiro?",
    "answer": "0.2",
    "type": "ev",
    "hint": "5*0.2 - 1*0.8 = 1 - 0.8",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: 5*0.2 - 1*0.8 = 1 - 0.8"
    ]
  },
  {
    "id": 25,
    "level": 2,
    "title": "Propriedade Linearidade",
    "question": "Se E[X] = 5. Qual E[2X]?",
    "answer": "10",
    "type": "ev",
    "hint": "2 * E[X]",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: 2 * E[X]"
    ]
  },
  {
    "id": 26,
    "level": 2,
    "title": "Propriedade Constante",
    "question": "Se E[X] = 5. Qual E[X + 3]?",
    "answer": "8",
    "type": "ev",
    "hint": "E[X] + 3",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: E[X] + 3"
    ]
  },
  {
    "id": 27,
    "level": 2,
    "title": "Duas Variáveis",
    "question": "E[X]=2, E[Y]=3. E[X+Y]?",
    "answer": "5",
    "type": "ev",
    "hint": "2+3",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: 2+3"
    ]
  },
  {
    "id": 28,
    "level": 2,
    "title": "Portas de Monty Hall",
    "question": "3 portas. 1 prêmio. Você escolhe. E[X] de acertar sem trocar?",
    "answer": "1/3",
    "type": "ev",
    "hint": "1/3",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: 1/3"
    ]
  },
  {
    "id": 29,
    "level": 2,
    "title": "Portas de Monty Hall",
    "question": "E[X] de acertar TROCANDO de porta (Monty Hall)?",
    "answer": "2/3",
    "type": "ev",
    "hint": "2/3",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: 2/3"
    ]
  },
  {
    "id": 30,
    "level": 2,
    "title": "Falácia do Apostador",
    "question": "Moeda deu 5 caras seguidas. Qual a E[X] de cara no próximo lançamento?",
    "answer": "1/2",
    "type": "ev",
    "hint": "Independente",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: Independente"
    ]
  },
  {
    "id": 31,
    "level": 3,
    "title": "Binomial Simples",
    "question": "Jogar 3 moedas. Prob de exatamente 2 caras? (C(3,2) * (1/2)^2 * (1/2)^1)",
    "answer": "3/8",
    "type": "bin",
    "hint": "3 * 1/8",
    "steps": [
      "Aplique a distribuição binomial para contar as maneiras de obter os sucessos e fracassos indicados.",
      "Cálculo: 3 * 1/8"
    ]
  },
  {
    "id": 32,
    "level": 3,
    "title": "Binomial Simples",
    "question": "Jogar 4 moedas. Prob de 2 caras? (C(4,2) * 1/16)",
    "answer": "3/8",
    "type": "bin",
    "hint": "6/16 = 3/8",
    "steps": [
      "Aplique a distribuição binomial para contar as maneiras de obter os sucessos e fracassos indicados.",
      "Cálculo: 6/16 = 3/8"
    ]
  },
  {
    "id": 33,
    "level": 3,
    "title": "Binomial Família",
    "question": "4 filhos. Prob de 1 menino e 3 meninas? (C(4,1) * (1/2)^4)",
    "answer": "1/4",
    "type": "bin",
    "hint": "4/16 = 1/4",
    "steps": [
      "Aplique a distribuição binomial para contar as maneiras de obter os sucessos e fracassos indicados.",
      "Cálculo: 4/16 = 1/4"
    ]
  },
  {
    "id": 34,
    "level": 3,
    "title": "Chute na Prova",
    "question": "5 questões V/F (p=1/2). Prob de acertar todas?",
    "answer": "1/32",
    "type": "bin",
    "hint": "1/32",
    "steps": [
      "Aplique a distribuição binomial para contar as maneiras de obter os sucessos e fracassos indicados.",
      "Cálculo: 1/32"
    ]
  },
  {
    "id": 35,
    "level": 3,
    "title": "Chute Exato",
    "question": "5 V/F. Prob de acertar exatamente 4? (C(5,4) * 1/32)",
    "answer": "5/32",
    "type": "bin",
    "hint": "5/32",
    "steps": [
      "Aplique a distribuição binomial para contar as maneiras de obter os sucessos e fracassos indicados.",
      "Cálculo: 5/32"
    ]
  },
  {
    "id": 36,
    "level": 3,
    "title": "Chute Múltipla Escolha",
    "question": "3 questões, 5 opções (p=1/5, q=4/5). Prob de acertar todas 3?",
    "answer": "1/125",
    "type": "bin",
    "hint": "(1/5)^3",
    "steps": [
      "Aplique a distribuição binomial para contar as maneiras de obter os sucessos e fracassos indicados.",
      "Cálculo: (1/5)^3"
    ]
  },
  {
    "id": 37,
    "level": 3,
    "title": "Chute Múltipla Escolha",
    "question": "3 questões, 5 opções. Prob de ERRAR TODAS?",
    "answer": "64/125",
    "type": "bin",
    "hint": "(4/5)^3",
    "steps": [
      "Aplique a distribuição binomial para contar as maneiras de obter os sucessos e fracassos indicados.",
      "Cálculo: (4/5)^3"
    ]
  },
  {
    "id": 38,
    "level": 3,
    "title": "Atirador",
    "question": "Acerta 80% (p=4/5). Atira 2x. Prob de acertar 1 e errar 1? (C(2,1) * 4/5 * 1/5)",
    "answer": "8/25",
    "type": "bin",
    "hint": "2 * 4/25",
    "steps": [
      "Aplique a distribuição binomial para contar as maneiras de obter os sucessos e fracassos indicados.",
      "Cálculo: 2 * 4/25"
    ]
  },
  {
    "id": 39,
    "level": 3,
    "title": "Dados",
    "question": "Rolar dado 3x. Prob de cair o '6' exatamente 1 vez? (C(3,1) * (1/6)^1 * (5/6)^2)",
    "answer": "25/72",
    "type": "bin",
    "hint": "3 * (25/216)",
    "steps": [
      "Aplique a distribuição binomial para contar as maneiras de obter os sucessos e fracassos indicados.",
      "Cálculo: 3 * (25/216)"
    ]
  },
  {
    "id": 40,
    "level": 3,
    "title": "Qualidade",
    "question": "Máquina faz 10% defeito (p=0.1). Pega 2 peças. Prob das 2 serem defeituosas?",
    "answer": "0.01",
    "type": "bin",
    "hint": "(0.1)^2",
    "steps": [
      "Aplique a distribuição binomial para contar as maneiras de obter os sucessos e fracassos indicados.",
      "Cálculo: (0.1)^2"
    ]
  },
  {
    "id": 41,
    "level": 3,
    "title": "Qualidade",
    "question": "Mesma máquina (p=0.1). 2 peças. Prob de EXATAMENTE 1 defeituosa? (2 * 0.1 * 0.9)",
    "answer": "0.18",
    "type": "bin",
    "hint": "0.18",
    "steps": [
      "Aplique a distribuição binomial para contar as maneiras de obter os sucessos e fracassos indicados.",
      "Cálculo: 0.18"
    ]
  },
  {
    "id": 42,
    "level": 3,
    "title": "Sem Fórmula (Pelo Menos)",
    "question": "3 moedas. Prob de PELO MENOS 1 cara? (1 - P(0 caras))",
    "answer": "7/8",
    "type": "bin",
    "hint": "1 - 1/8",
    "steps": [
      "Aplique a distribuição binomial para contar as maneiras de obter os sucessos e fracassos indicados.",
      "Cálculo: 1 - 1/8"
    ]
  },
  {
    "id": 43,
    "level": 3,
    "title": "Pelo Menos",
    "question": "Atirador p=1/2. Atira 3x. Prob de acertar pelo menos 1?",
    "answer": "7/8",
    "type": "bin",
    "hint": "1 - 1/8",
    "steps": [
      "Aplique a distribuição binomial para contar as maneiras de obter os sucessos e fracassos indicados.",
      "Cálculo: 1 - 1/8"
    ]
  },
  {
    "id": 44,
    "level": 3,
    "title": "Média de Binomial",
    "question": "Se jogo moeda 10 vezes. Valor esperado (média) de caras? E=n*p",
    "answer": "5",
    "type": "ev",
    "hint": "10 * 0.5",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: 10 * 0.5"
    ]
  },
  {
    "id": 45,
    "level": 3,
    "title": "Média Binomial",
    "question": "Atirador (p=0.2). Atira 100x. Quantos acertos esperados?",
    "answer": "20",
    "type": "ev",
    "hint": "100 * 0.2",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: 100 * 0.2"
    ]
  },
  {
    "id": 46,
    "level": 4,
    "title": "Urnas (A/B)",
    "question": "Urna A (prob 1/2) tem 100% bolas Pretas. Urna B (prob 1/2) tem 100% bolas Brancas. Puxei Preta. Qual chance de ter vindo de A?",
    "answer": "1",
    "type": "bayes",
    "hint": "Certeza absoluta.",
    "steps": [
      "Calcule primeiro a probabilidade total da evidência e divida pelo caminho específico da causa procurada.",
      "Cálculo: Certeza absoluta."
    ]
  },
  {
    "id": 47,
    "level": 4,
    "title": "Dois caminhos",
    "question": "Urna A (1/2) tem 2 Brancas/2 Pretas. Urna B (1/2) tem 4 Brancas/0 Pretas. Qual P(Branca)?",
    "answer": "3/4",
    "type": "tree",
    "hint": "1/4 + 1/2 = 3/4",
    "steps": [
      "Multiplique as probabilidades de cada caminho e some os caminhos que levam ao evento.",
      "Cálculo: 1/4 + 1/2 = 3/4"
    ]
  },
  {
    "id": 48,
    "level": 4,
    "title": "Bayes Simples",
    "question": "Na questão anterior (P(Branca)=3/4), se puxei Branca, qual chance de vir da Urna A (caminho A = 1/4)?",
    "answer": "1/3",
    "type": "bayes",
    "hint": "(1/4) / (3/4)",
    "steps": [
      "Calcule primeiro a probabilidade total da evidência e divida pelo caminho específico da causa procurada.",
      "Cálculo: (1/4) / (3/4)"
    ]
  },
  {
    "id": 49,
    "level": 4,
    "title": "Bayes Simples 2",
    "question": "E a chance de ter vindo de B (caminho B = 1/2)?",
    "answer": "2/3",
    "type": "bayes",
    "hint": "(1/2) / (3/4)",
    "steps": [
      "Calcule primeiro a probabilidade total da evidência e divida pelo caminho específico da causa procurada.",
      "Cálculo: (1/2) / (3/4)"
    ]
  },
  {
    "id": 50,
    "level": 4,
    "title": "Fábrica Peças",
    "question": "Maq1 faz 60% com 1% erro. Maq2 faz 40% com 2% erro. Prob de DEFEITO total?",
    "answer": "0.014",
    "type": "tree",
    "hint": "0.6*0.01 + 0.4*0.02 = 0.006 + 0.008 = 0.014",
    "steps": [
      "Multiplique as probabilidades de cada caminho e some os caminhos que levam ao evento.",
      "Cálculo: 0.6*0.01 + 0.4*0.02 = 0.006 + 0.008 = 0.014"
    ]
  },
  {
    "id": 51,
    "level": 4,
    "title": "Bayes Fábrica",
    "question": "Na fábrica acima, peça tem defeito. Chance de vir da Maq1?",
    "answer": "3/7",
    "type": "bayes",
    "hint": "0.006 / 0.014",
    "steps": [
      "Calcule primeiro a probabilidade total da evidência e divida pelo caminho específico da causa procurada.",
      "Cálculo: 0.006 / 0.014"
    ]
  },
  {
    "id": 52,
    "level": 4,
    "title": "Previsão Chuva",
    "question": "Previsão diz chuva (acerta 80%). Realidade chove 10% dos dias. Prob Chove & Diz Chuva?",
    "answer": "0.08",
    "type": "tree",
    "hint": "0.1 * 0.8",
    "steps": [
      "Multiplique as probabilidades de cada caminho e some os caminhos que levam ao evento.",
      "Cálculo: 0.1 * 0.8"
    ]
  },
  {
    "id": 53,
    "level": 4,
    "title": "Falso Positivo",
    "question": "Realidade: 90% sol. Previsão erra (diz chuva) em 10% do sol. Prob Sol & Diz Chuva?",
    "answer": "0.09",
    "type": "tree",
    "hint": "0.9 * 0.1",
    "steps": [
      "Multiplique as probabilidades de cada caminho e some os caminhos que levam ao evento.",
      "Cálculo: 0.9 * 0.1"
    ]
  },
  {
    "id": 54,
    "level": 4,
    "title": "Bayes Chuva",
    "question": "Total de avisos 'Vai Chover' = 0.08 + 0.09 = 0.17. Se avisou, qual chance de chover real?",
    "answer": "8/17",
    "type": "bayes",
    "hint": "0.08 / 0.17",
    "steps": [
      "Calcule primeiro a probabilidade total da evidência e divida pelo caminho específico da causa procurada.",
      "Cálculo: 0.08 / 0.17"
    ]
  },
  {
    "id": 55,
    "level": 4,
    "title": "Bayes Doença Rara",
    "question": "1% doente. Teste acerta 100% no doente. 10% de falso positivo no sadio. Prob(Total Positivo)?",
    "answer": "0.109",
    "type": "tree",
    "hint": "0.01*1 + 0.99*0.1 = 0.01 + 0.099",
    "steps": [
      "Multiplique as probabilidades de cada caminho e some os caminhos que levam ao evento.",
      "Cálculo: 0.01*1 + 0.99*0.1 = 0.01 + 0.099"
    ]
  },
  {
    "id": 56,
    "level": 4,
    "title": "Bayes Doença Rara",
    "question": "Deu positivo. Qual chance de estar doente (1% / 10.9%)?",
    "answer": "10/109",
    "type": "bayes",
    "hint": "0.010 / 0.109",
    "steps": [
      "Calcule primeiro a probabilidade total da evidência e divida pelo caminho específico da causa procurada.",
      "Cálculo: 0.010 / 0.109"
    ]
  },
  {
    "id": 57,
    "level": 4,
    "title": "Moeda Falsa",
    "question": "Saco com 1 moeda normal e 1 de Duas Caras. Puxei 1 sem ver, deu Cara. Chance de ser a Moeda Falsa?",
    "answer": "2/3",
    "type": "bayes",
    "hint": "Normal (1/2*1/2=1/4). Falsa (1/2*1=2/4). Total = 3/4. Falsa/Total = 2/3.",
    "steps": [
      "Calcule primeiro a probabilidade total da evidência e divida pelo caminho específico da causa procurada.",
      "Cálculo: Normal (1/2*1/2=1/4). Falsa (1/2*1=2/4). Total = 3/4. Falsa/Total = 2/3."
    ]
  },
  {
    "id": 58,
    "level": 4,
    "title": "Taxi Azul e Verde",
    "question": "85% taxis Verdes, 15% Azuis. Testemunha acerta 80%. Disse Azul. Prob de ser Azul?",
    "answer": "12/29",
    "type": "bayes",
    "hint": "Azul&Acerta (0.15*0.8=0.12). Verde&Erra (0.85*0.2=0.17). Total=0.29.",
    "steps": [
      "Calcule primeiro a probabilidade total da evidência e divida pelo caminho específico da causa procurada.",
      "Cálculo: Azul&Acerta (0.15*0.8=0.12). Verde&Erra (0.85*0.2=0.17). Total=0.29."
    ]
  },
  {
    "id": 59,
    "level": 4,
    "title": "Spam",
    "question": "Email é spam (20%). Contém 'Grátis' (50% nos spams, 10% nos normais). P('Grátis') total?",
    "answer": "0.18",
    "type": "tree",
    "hint": "0.2*0.5 + 0.8*0.1 = 0.10 + 0.08",
    "steps": [
      "Multiplique as probabilidades de cada caminho e some os caminhos que levam ao evento.",
      "Cálculo: 0.2*0.5 + 0.8*0.1 = 0.10 + 0.08"
    ]
  },
  {
    "id": 60,
    "level": 4,
    "title": "Bayes Spam",
    "question": "Se tem 'Grátis', chance de ser spam?",
    "answer": "5/9",
    "type": "bayes",
    "hint": "0.10 / 0.18",
    "steps": [
      "Calcule primeiro a probabilidade total da evidência e divida pelo caminho específico da causa procurada.",
      "Cálculo: 0.10 / 0.18"
    ]
  },
  {
    "id": 61,
    "level": 5,
    "title": "Regra Empírica",
    "question": "Média 100, DP 15. Qual a chance de um valor cair entre 85 e 115?",
    "answer": "68",
    "type": "norm",
    "hint": "±1 DP = 68%",
    "steps": [
      "Use a simetria da curva normal e a regra empírica 68–95–99,7 quando indicado.",
      "Cálculo: ±1 DP = 68%"
    ]
  },
  {
    "id": 62,
    "level": 5,
    "title": "Regra Empírica",
    "question": "Média 100, DP 15. Qual a chance de cair entre 70 e 130?",
    "answer": "95",
    "type": "norm",
    "hint": "±2 DP = 95%",
    "steps": [
      "Use a simetria da curva normal e a regra empírica 68–95–99,7 quando indicado.",
      "Cálculo: ±2 DP = 95%"
    ]
  },
  {
    "id": 63,
    "level": 5,
    "title": "Regra Empírica",
    "question": "Qual a chance de estar EXATAMENTE na média ou abaixo dela (P(X <= 100))?",
    "answer": "50",
    "type": "norm",
    "hint": "A curva é simétrica, metade abaixo, metade acima.",
    "steps": [
      "Use a simetria da curva normal e a regra empírica 68–95–99,7 quando indicado.",
      "Cálculo: A curva é simétrica, metade abaixo, metade acima."
    ]
  },
  {
    "id": 64,
    "level": 5,
    "title": "Z-Score Fórmula",
    "question": "Média 50, DP 10. Valor 70. Qual o Z-score?",
    "answer": "2",
    "type": "zscore",
    "hint": "(70-50)/10",
    "steps": [
      "Use Z=(X−μ)/σ para padronizar o valor em unidades de desvio padrão.",
      "Cálculo: (70-50)/10"
    ]
  },
  {
    "id": 65,
    "level": 5,
    "title": "Z-Score Fórmula",
    "question": "Média 50, DP 10. Valor 40. Qual o Z-score?",
    "answer": "-1",
    "type": "zscore",
    "hint": "(40-50)/10",
    "steps": [
      "Use Z=(X−μ)/σ para padronizar o valor em unidades de desvio padrão.",
      "Cálculo: (40-50)/10"
    ]
  },
  {
    "id": 66,
    "level": 5,
    "title": "Metades da Curva",
    "question": "Média 100, DP 15. Chance de estar entre 100 e 115? (Metade de 68%)",
    "answer": "34",
    "type": "norm",
    "hint": "68 / 2",
    "steps": [
      "Use a simetria da curva normal e a regra empírica 68–95–99,7 quando indicado.",
      "Cálculo: 68 / 2"
    ]
  },
  {
    "id": 67,
    "level": 5,
    "title": "Cauda Maior",
    "question": "Chance de ser MAIOR que 115? (Se 50% é >100, e 34% está entre 100 e 115)",
    "answer": "16",
    "type": "norm",
    "hint": "50 - 34",
    "steps": [
      "Use a simetria da curva normal e a regra empírica 68–95–99,7 quando indicado.",
      "Cálculo: 50 - 34"
    ]
  },
  {
    "id": 68,
    "level": 5,
    "title": "Cauda Menor",
    "question": "Média 100, DP 15. Chance de ser MENOR que 70? (Se 95% está entre 70 e 130, sobram 5% nas DUAS pontas)",
    "answer": "2.5",
    "type": "norm",
    "hint": "5 / 2",
    "steps": [
      "Use a simetria da curva normal e a regra empírica 68–95–99,7 quando indicado.",
      "Cálculo: 5 / 2"
    ]
  },
  {
    "id": 69,
    "level": 5,
    "title": "Z-Score Vestibular",
    "question": "Sua nota: 800. Média Geral: 600. DP: 100. Seu Z-Score?",
    "answer": "2",
    "type": "zscore",
    "hint": "(800-600)/100",
    "steps": [
      "Use Z=(X−μ)/σ para padronizar o valor em unidades de desvio padrão.",
      "Cálculo: (800-600)/100"
    ]
  },
  {
    "id": 70,
    "level": 5,
    "title": "Revertendo Z",
    "question": "Média 20, DP 5. O valor que tem Z-Score = 3?",
    "answer": "35",
    "type": "zscore",
    "hint": "X = Média + Z*DP = 20 + 15",
    "steps": [
      "Use Z=(X−μ)/σ para padronizar o valor em unidades de desvio padrão.",
      "Cálculo: X = Média + Z*DP = 20 + 15"
    ]
  },
  {
    "id": 71,
    "level": 5,
    "title": "Distribuição Variância",
    "question": "Se o DP é 5, qual a Variância?",
    "answer": "25",
    "type": "norm",
    "hint": "DP = Raiz(Var), então Var = 5^2",
    "steps": [
      "Use a simetria da curva normal e a regra empírica 68–95–99,7 quando indicado.",
      "Cálculo: DP = Raiz(Var), então Var = 5^2"
    ]
  },
  {
    "id": 72,
    "level": 5,
    "title": "Variância Transformação",
    "question": "Variância=10. Se somar 5 em todos os dados, qual a nova Variância?",
    "answer": "10",
    "type": "prop",
    "hint": "Somar não afeta dispersão.",
    "steps": [
      "Aplique a propriedade da transformação de variáveis indicada no enunciado.",
      "Cálculo: Somar não afeta dispersão."
    ]
  },
  {
    "id": 73,
    "level": 5,
    "title": "DP Transformação",
    "question": "DP=4. Se multiplicar tudo por 3, qual o novo DP?",
    "answer": "12",
    "type": "prop",
    "hint": "DP multiplica pelo fator.",
    "steps": [
      "Aplique a propriedade da transformação de variáveis indicada no enunciado.",
      "Cálculo: DP multiplica pelo fator."
    ]
  },
  {
    "id": 74,
    "level": 5,
    "title": "Soma de Normais",
    "question": "X tem E[X]=10, Y tem E[Y]=20. E[X+Y]?",
    "answer": "30",
    "type": "ev",
    "hint": "Soma das esperanças.",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: Soma das esperanças."
    ]
  },
  {
    "id": 75,
    "level": 5,
    "title": "Aproximação Binomial->Normal",
    "question": "Moeda 100 vezes (p=0.5). Qual a Média esperada?",
    "answer": "50",
    "type": "ev",
    "hint": "100 * 0.5",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: 100 * 0.5"
    ]
  },
  {
    "id": 76,
    "level": 5,
    "title": "Aproximação DP",
    "question": "Fórmula DP Binomial: Raiz(n*p*q). Moeda 100x. DP? (Raiz de 100*0.5*0.5)",
    "answer": "5",
    "type": "norm",
    "hint": "Raiz(25)",
    "steps": [
      "Use a simetria da curva normal e a regra empírica 68–95–99,7 quando indicado.",
      "Cálculo: Raiz(25)"
    ]
  },
  {
    "id": 77,
    "level": 5,
    "title": "Erro Padrão Médio",
    "question": "Média Pop é 50, DP Pop é 20. Amostra de n=100. Qual o Erro Padrão (DP/Raiz(n))?",
    "answer": "2",
    "type": "norm",
    "hint": "20/10",
    "steps": [
      "Use a simetria da curva normal e a regra empírica 68–95–99,7 quando indicado.",
      "Cálculo: 20/10"
    ]
  },
  {
    "id": 78,
    "level": 5,
    "title": "Intervalo Confiança Aprox",
    "question": "Se Erro Padrão = 2. Margem para 95% confiança (±2 Desvios)?",
    "answer": "4",
    "type": "norm",
    "hint": "2 * 2",
    "steps": [
      "Use a simetria da curva normal e a regra empírica 68–95–99,7 quando indicado.",
      "Cálculo: 2 * 2"
    ]
  },
  {
    "id": 79,
    "level": 5,
    "title": "Simetria Normal",
    "question": "A Assimetria (Skewness) de uma Normal Perfeita é?",
    "answer": "0",
    "type": "norm",
    "hint": "Simetria perfeita = 0.",
    "steps": [
      "Use a simetria da curva normal e a regra empírica 68–95–99,7 quando indicado.",
      "Cálculo: Simetria perfeita = 0."
    ]
  },
  {
    "id": 80,
    "level": 5,
    "title": "Amplitude vs DP",
    "question": "Em uma normal, qual a distância aproximada em DPs entre o mínimo e máximo extremo praticamente possíveis? (±3DP)",
    "answer": "6",
    "type": "norm",
    "hint": "3 pra cima, 3 pra baixo = 6 DPs.",
    "steps": [
      "Use a simetria da curva normal e a regra empírica 68–95–99,7 quando indicado.",
      "Cálculo: 3 pra cima, 3 pra baixo = 6 DPs."
    ]
  },
  {
    "id": 81,
    "level": 6,
    "title": "Gêmeos Bayes",
    "question": "1/3 dos gêmeos são Idênticos (mesmo sexo). 2/3 são Fraternos (50% chance de mesmo sexo). Você teve gêmeos meninos. Chance de serem Idênticos?",
    "answer": "1/2",
    "type": "bayes",
    "hint": "Idên(1/3*1). Frat(2/3*1/2=1/3). Total meninos = 2/3. Idên/Total = 1/2.",
    "steps": [
      "Calcule primeiro a probabilidade total da evidência e divida pelo caminho específico da causa procurada.",
      "Cálculo: Idên(1/3*1). Frat(2/3*1/2=1/3). Total meninos = 2/3. Idên/Total = 1/2."
    ]
  },
  {
    "id": 82,
    "level": 6,
    "title": "Monty Hall 100 portas",
    "question": "100 portas. 1 carro. Você escolhe 1. Apresentador abre 98 portas erradas. Chance de ganhar TROCANDO?",
    "answer": "99/100",
    "type": "bayes",
    "hint": "Você tem 1/100, o resto focado na outra é 99/100.",
    "steps": [
      "Calcule primeiro a probabilidade total da evidência e divida pelo caminho específico da causa procurada.",
      "Cálculo: Você tem 1/100, o resto focado na outra é 99/100."
    ]
  },
  {
    "id": 83,
    "level": 6,
    "title": "Adivinhação Binomial",
    "question": "ENEM: 90 questões. 5 opções (chute=1/5). Quantos acertos esperados?",
    "answer": "18",
    "type": "ev",
    "hint": "90 / 5",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: 90 / 5"
    ]
  },
  {
    "id": 84,
    "level": 6,
    "title": "Loteria E[X] Negativo",
    "question": "MegaSena: Prob 1 em 50M. Prêmio 100M. Bilhete R$5. E[X] por bilhete?",
    "answer": "-3",
    "type": "ev",
    "hint": "(100M/50M) - 5 = 2 - 5",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: (100M/50M) - 5 = 2 - 5"
    ]
  },
  {
    "id": 85,
    "level": 6,
    "title": "Falha Sistema",
    "question": "3 Servidores. P(Cair) de cada = 0.1. Prob do sistema CAIR TOTALMENTE (todos 3 caem)?",
    "answer": "0.001",
    "type": "and",
    "hint": "(0.1)^3",
    "steps": [
      "Para eventos independentes ou sequenciais, multiplique as probabilidades correspondentes e considere se há reposição.",
      "Cálculo: (0.1)^3"
    ]
  },
  {
    "id": 86,
    "level": 6,
    "title": "Falha Sistema Redundante",
    "question": "Qual a Prob do sistema CONTINUAR ONLINE (pelo menos 1 servidor vivo)?",
    "answer": "0.999",
    "type": "comp",
    "hint": "1 - 0.001",
    "steps": [
      "Use o evento complementar: 1 menos a probabilidade do evento contrário.",
      "Cálculo: 1 - 0.001"
    ]
  },
  {
    "id": 87,
    "level": 6,
    "title": "Senha 4 digitos",
    "question": "Permutações de 4 dígitos usando 0 a 9. Prob de adivinhar de primeira?",
    "answer": "1/10000",
    "type": "basic",
    "hint": "10^4 = 10000. 1/10000.",
    "steps": [
      "Use a definição de probabilidade: casos favoráveis divididos pelo total de casos possíveis.",
      "Cálculo: 10^4 = 10000. 1/10000."
    ]
  },
  {
    "id": 88,
    "level": 6,
    "title": "Anagramas Probabilidade",
    "question": "Palavra BANANA. Embaralhar aleatório. Qual a chance de terminar com A? (Fixa o A no final = 5! / (2!2!) = 30. Total = 6!/(3!2!) = 60).",
    "answer": "1/2",
    "type": "basic",
    "hint": "30/60",
    "steps": [
      "Use a definição de probabilidade: casos favoráveis divididos pelo total de casos possíveis.",
      "Cálculo: 30/60"
    ]
  },
  {
    "id": 89,
    "level": 6,
    "title": "Problema dos Aniversários",
    "question": "Grupo de 3 pessoas. Prob de TODOS FIZEREM ANO EM DIAS DIFERENTES? (365/365 * 364/365 * 363/365). (Fração aprox).",
    "answer": "132132/133225",
    "type": "basic",
    "hint": "A conta brutal.",
    "steps": [
      "Use a definição de probabilidade: casos favoráveis divididos pelo total de casos possíveis.",
      "Cálculo: A conta brutal."
    ]
  },
  {
    "id": 90,
    "level": 6,
    "title": "Interseção Independente",
    "question": "A e B independentes. P(A)=1/2, P(A U B)=3/4. Qual P(B)? (P(AUB) = P(A)+P(B)-P(A)P(B))",
    "answer": "1/2",
    "type": "or_rule",
    "hint": "3/4 = 1/2 + x - 1/2x -> 1/4 = 1/2x -> x=1/2.",
    "steps": [
      "Use a fórmula da união, considerando a interseção entre os eventos.",
      "Cálculo: 3/4 = 1/2 + x - 1/2x -> 1/4 = 1/2x -> x=1/2."
    ]
  },
  {
    "id": 91,
    "level": 6,
    "title": "União Mut. Excl.",
    "question": "A e B mut. exclusivos. P(A)=0.2, P(B)=0.3. P(A U B)?",
    "answer": "0.5",
    "type": "or",
    "hint": "0.2 + 0.3",
    "steps": [
      "Para eventos mutuamente exclusivos, some as probabilidades.",
      "Cálculo: 0.2 + 0.3"
    ]
  },
  {
    "id": 92,
    "level": 6,
    "title": "Distribuição de Poisson",
    "question": "Média de 2 carros por minuto. Qual a Variância numa Poisson? (Propriedade: Var = Média)",
    "answer": "2",
    "type": "prop",
    "hint": "Média = Variância na Poisson.",
    "steps": [
      "Aplique a propriedade da transformação de variáveis indicada no enunciado.",
      "Cálculo: Média = Variância na Poisson."
    ]
  },
  {
    "id": 93,
    "level": 6,
    "title": "Markov Simplificado",
    "question": "Choveu hoje. P(Chover amanhã dado que choveu hoje) = 0.6. Qual P(Sol amanhã dado que choveu hoje)?",
    "answer": "0.4",
    "type": "comp",
    "hint": "1 - 0.6",
    "steps": [
      "Use o evento complementar: 1 menos a probabilidade do evento contrário.",
      "Cálculo: 1 - 0.6"
    ]
  },
  {
    "id": 94,
    "level": 6,
    "title": "Soma Variâncias",
    "question": "X e Y independentes. Var(X)=3, Var(Y)=4. Var(X+Y)?",
    "answer": "7",
    "type": "prop",
    "hint": "Soma as variâncias (se indep).",
    "steps": [
      "Aplique a propriedade da transformação de variáveis indicada no enunciado.",
      "Cálculo: Soma as variâncias (se indep)."
    ]
  },
  {
    "id": 95,
    "level": 6,
    "title": "Teste Qualidade Enem",
    "question": "1000 celulares. 5% bateria ruim. 2% tela ruim. 1% ambos. P(Só Bateria Ruim)?",
    "answer": "0.04",
    "type": "or",
    "hint": "0.05 - 0.01",
    "steps": [
      "Para eventos mutuamente exclusivos, some as probabilidades.",
      "Cálculo: 0.05 - 0.01"
    ]
  },
  {
    "id": 96,
    "level": 6,
    "title": "Caminhada Aleatória",
    "question": "Bêbado: 1 passo Esq (50%), 1 passo Dir (50%). Após 2 passos, chance de estar no ZERO inicial? (E-D ou D-E)",
    "answer": "1/2",
    "type": "bin",
    "hint": "2 * 0.5 * 0.5",
    "steps": [
      "Aplique a distribuição binomial para contar as maneiras de obter os sucessos e fracassos indicados.",
      "Cálculo: 2 * 0.5 * 0.5"
    ]
  },
  {
    "id": 97,
    "level": 6,
    "title": "Probabilidade Contínua",
    "question": "Sorteio número real entre 0 e 10. Qual a P(X = 5 exato)?",
    "answer": "0",
    "type": "norm",
    "hint": "Em contínua, ponto exato é 0.",
    "steps": [
      "Use a simetria da curva normal e a regra empírica 68–95–99,7 quando indicado.",
      "Cálculo: Em contínua, ponto exato é 0."
    ]
  },
  {
    "id": 98,
    "level": 6,
    "title": "Soma 100",
    "question": "P(X) = k*x para x=1,2,3,4. Qual o valor de k? (Soma prob = 1). (k+2k+3k+4k = 1)",
    "answer": "1/10",
    "type": "ev",
    "hint": "10k=1",
    "steps": [
      "Calcule o valor esperado multiplicando cada resultado por sua probabilidade e somando os produtos.",
      "Cálculo: 10k=1"
    ]
  },
  {
    "id": 99,
    "level": 6,
    "title": "Lei Grandes Números",
    "question": "Joguei moeda 1 milhão de vezes. Deu cara 50.1%. Isso fere a teoria (50%)? (1=Sim, 0=Não)",
    "answer": "0",
    "type": "norm",
    "hint": "Flutuação normal na LGN empírica.",
    "steps": [
      "Use a simetria da curva normal e a regra empírica 68–95–99,7 quando indicado.",
      "Cálculo: Flutuação normal na LGN empírica."
    ]
  },
  {
    "id": 100,
    "level": 6,
    "title": "Máximo do Bayes",
    "question": "Qual o maior valor que P(A dado B) pode assumir?",
    "answer": "1",
    "type": "bayes",
    "hint": "Certeza máxima 100%.",
    "steps": [
      "Calcule primeiro a probabilidade total da evidência e divida pelo caminho específico da causa procurada.",
      "Cálculo: Certeza máxima 100%."
    ]
  }
];
