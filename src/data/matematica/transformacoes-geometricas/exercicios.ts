export const transformacoesGeometricasLevels = [
  {
    "level": 1,
    "name": "Plano cartesiano e imagem",
    "description": "Quadrantes, coordenadas dos vértices, medidas no plano e a ideia de figura original e imagem.",
    "reminder": "Par ordenado (x, y): primeiro horizontal, depois vertical. A imagem de A é A′.",
    "lesson": "l1"
  },
  {
    "level": 2,
    "name": "Translação",
    "description": "Aplicar o vetor (a, b), achar o vetor e resolver problemas de deslocamento.",
    "reminder": "Translação: (x, y) → (x + a, y + b). Vetor = imagem − original.",
    "lesson": "l2"
  },
  {
    "level": 3,
    "name": "Reflexão",
    "description": "Espelhos nos eixos, em y = x, y = −x, x = k e y = k.",
    "reminder": "Eixo x: (x, −y) · eixo y: (−x, y) · y = x: (y, x) · x = k: (2k − x, y) · y = k: (x, 2k − y).",
    "lesson": "l3"
  },
  {
    "level": 4,
    "name": "Rotação",
    "description": "Giros de 90°, 180° e 270° (anti-horário é positivo), com centro na origem ou em outro ponto.",
    "reminder": "90°: (−y, x) · 180°: (−x, −y) · 270°: (y, −x). Outro centro: vetor até o centro, gira, soma de volta.",
    "lesson": "l4"
  },
  {
    "level": 5,
    "name": "Homotetia",
    "description": "Ampliar e reduzir com razão k, achar k, perímetro × |k| e área × k².",
    "reminder": "Centro O: (x, y) → (kx, ky). Centro C: P′ = C + k·(P − C). Área × k².",
    "lesson": "l5"
  },
  {
    "level": 6,
    "name": "Identificando a transformação",
    "description": "Descobrir qual transformação foi aplicada, olhando as regras e as coordenadas.",
    "reminder": "Soma constante: translação · sinal trocado: reflexão ou giro de 180° · x e y trocados: reflexão em y = x ou giro · múltiplo: homotetia.",
    "lesson": "l6"
  },
  {
    "level": 7,
    "name": "Composições",
    "description": "Aplicar duas transformações em sequência (a ordem importa!).",
    "reminder": "Aplique uma de cada vez, anotando A → A′ → A″. A ordem pode mudar o resultado.",
    "lesson": "l6"
  },
  {
    "level": 8,
    "name": "Problemas combinados e desafios",
    "description": "Robôs, mapas, mosaicos, zoom e a ponte para a trigonometria.",
    "reminder": "Desenhe, anote as coordenadas, escolha a regra, confira com a figura.",
    "lesson": "l7"
  }
] as const;

export const transformacoesGeometricasExercises = [
  {
    "id": 1,
    "level": 1,
    "title": "Nível 1",
    "question": "Em qual quadrante está o ponto \\((-3,\\ 4)\\)?",
    "answer": "2º quadrante",
    "hint": "Esquerda = x negativo; cima = y positivo.",
    "steps": [
      "x negativo (esquerda) e y positivo (cima): 2º quadrante."
    ],
    "common": [],
    "options": [
      "2º quadrante",
      "1º quadrante",
      "3º quadrante",
      "4º quadrante"
    ]
  },
  {
    "id": 2,
    "level": 1,
    "title": "Nível 1",
    "question": "O triângulo ABC tem A(1, 1), B(5, 1) e C(1, 4). Quanto mede o lado AB?",
    "answer": "4",
    "hint": "Subtraia os x.",
    "steps": [
      "A e B têm o mesmo y (1): o segmento é horizontal.",
      "\\(AB = 5 - 1 = 4\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 268 240",
        "style": "width:268px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Triângulo ABC"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "218",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "218",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "218",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "218",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "218",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "190",
            "y1": "218",
            "x2": "190",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "218",
            "y1": "218",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "246",
            "y1": "218",
            "x2": "246",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "246",
            "y2": "218",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "246",
            "y2": "190",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "246",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "246",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "246",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "246",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "246",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "246",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "246",
            "y2": "162",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "218",
            "x2": "78",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "246,162 239,158 239,166",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "78,22 74,29 82,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "244",
            "y": "153",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "87",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "162",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "190",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "218",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "246",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "6"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "222",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "194",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "138",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "110",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "175",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "106,134 218,134 106,50",
            "fill": "#e0e7ff",
            "fill-opacity": "0.85",
            "stroke": "#4f46e5",
            "stroke-width": "2.5",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "106",
            "cy": "134",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "218",
            "cy": "134",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "106",
            "cy": "50",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "95.6",
            "y": "145.8",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "A"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "230.2",
            "y": "142.6",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "B"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "98.8",
            "y": "43.2",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "C"
          ]
        }
      ]
    }
  },
  {
    "id": 3,
    "level": 1,
    "title": "Nível 1",
    "question": "No mesmo triângulo A(1, 1), B(5, 1), C(1, 4), qual é a área? (cateto horizontal AB e cateto vertical AC)",
    "answer": "6",
    "hint": "Triângulo retângulo em A.",
    "steps": [
      "\\(AB = 4\\) e \\(AC = 4 - 1 = 3\\).",
      "\\(\\dfrac{4 \\cdot 3}{2} = 6\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 268 240",
        "style": "width:268px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Triângulo ABC"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "218",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "218",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "218",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "218",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "218",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "190",
            "y1": "218",
            "x2": "190",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "218",
            "y1": "218",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "246",
            "y1": "218",
            "x2": "246",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "246",
            "y2": "218",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "246",
            "y2": "190",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "246",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "246",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "246",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "246",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "246",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "246",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "246",
            "y2": "162",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "218",
            "x2": "78",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "246,162 239,158 239,166",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "78,22 74,29 82,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "244",
            "y": "153",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "87",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "162",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "190",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "218",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "246",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "6"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "222",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "194",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "138",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "110",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "175",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "106,134 218,134 106,50",
            "fill": "#e0e7ff",
            "fill-opacity": "0.85",
            "stroke": "#4f46e5",
            "stroke-width": "2.5",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "106",
            "cy": "134",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "218",
            "cy": "134",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "106",
            "cy": "50",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "95.6",
            "y": "145.8",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "A"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "230.2",
            "y": "142.6",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "B"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "98.8",
            "y": "43.2",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "C"
          ]
        }
      ]
    }
  },
  {
    "id": 4,
    "level": 1,
    "title": "Nível 1",
    "question": "Em uma transformação geométrica, o ponto A vira o ponto A′. Como chamamos A′?",
    "answer": "a imagem de A",
    "hint": "Nome da figura depois da transformação.",
    "steps": [
      "A figura de partida é a original e a figura obtida é a imagem; seus pontos levam o símbolo ′."
    ],
    "common": [],
    "options": [
      "a imagem de A",
      "o centro de A",
      "o vetor de A",
      "a razão de A"
    ]
  },
  {
    "id": 5,
    "level": 1,
    "title": "Nível 1",
    "question": "Qual é a distância do ponto \\((-4,\\ 3)\\) ao eixo y?",
    "answer": "4",
    "hint": "Eixo y é vertical: olhe a coordenada x.",
    "steps": [
      "A distância ao eixo y é o valor absoluto de x: \\(|-4| = 4\\)."
    ],
    "common": [
      {
        "value": "3/1",
        "message": "3 é a distância ao eixo x. A distância ao eixo y é |x|."
      }
    ]
  },
  {
    "id": 6,
    "level": 1,
    "title": "Nível 1",
    "question": "Qual dos pontos está sobre o eixo x?",
    "answer": "\\((5,\\ 0)\\)",
    "hint": "Altura zero.",
    "steps": [
      "No eixo x, y = 0: \\((5,\\ 0)\\)."
    ],
    "common": [],
    "options": [
      "\\((5,\\ 0)\\)",
      "\\((0,\\ 5)\\)",
      "\\((5,\\ 5)\\)",
      "\\((-5,\\ 1)\\)"
    ]
  },
  {
    "id": 7,
    "level": 1,
    "title": "Nível 1",
    "question": "Um retângulo tem vértices (1, 1), (6, 1), (6, 4) e (1, 4). Qual é o perímetro?",
    "answer": "16",
    "hint": "Base 5 e altura 3.",
    "steps": [
      "Base: \\(6 - 1 = 5\\); altura: \\(4 - 1 = 3\\).",
      "\\(2(5 + 3) = 16\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 296 240",
        "style": "width:296px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Retângulo"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "218",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "218",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "218",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "218",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "218",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "190",
            "y1": "218",
            "x2": "190",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "218",
            "y1": "218",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "246",
            "y1": "218",
            "x2": "246",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "274",
            "y1": "218",
            "x2": "274",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "274",
            "y2": "218",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "274",
            "y2": "190",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "274",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "274",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "274",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "274",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "274",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "274",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "274",
            "y2": "162",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "218",
            "x2": "78",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "274,162 267,158 267,166",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "78,22 74,29 82,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "272",
            "y": "153",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "87",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "162",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "190",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "218",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "246",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "6"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "274",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "7"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "222",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "194",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "138",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "110",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "175",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "106,134 246,134 246,50 106,50",
            "fill": "#e0e7ff",
            "fill-opacity": "0.85",
            "stroke": "#4f46e5",
            "stroke-width": "2.5",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "106",
            "cy": "134",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "246",
            "cy": "134",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "246",
            "cy": "50",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "106",
            "cy": "50",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        }
      ]
    }
  },
  {
    "id": 8,
    "level": 1,
    "title": "Nível 1",
    "question": "Três vértices de um retângulo são A(2, 1), B(7, 1) e C(7, 5). O quarto vértice é D(2, y). Quanto vale y?",
    "answer": "5",
    "hint": "D tem o mesmo y que C.",
    "steps": [
      "D fica acima de A e à esquerda de C: mesmo y de C.",
      "\\(D = (2,\\ 5)\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 324 268",
        "style": "width:324px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Três vértices"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "246",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "246",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "246",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "246",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "246",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "246",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "190",
            "y1": "246",
            "x2": "190",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "218",
            "y1": "246",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "246",
            "y1": "246",
            "x2": "246",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "274",
            "y1": "246",
            "x2": "274",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "302",
            "y1": "246",
            "x2": "302",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "246",
            "x2": "302",
            "y2": "246",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "302",
            "y2": "218",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "302",
            "y2": "190",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "302",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "302",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "302",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "302",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "302",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "302",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "302",
            "y2": "190",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "246",
            "x2": "78",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "302,190 295,186 295,194",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "78,22 74,29 82,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "300",
            "y": "181",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "87",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "162",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "190",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "218",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "246",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "6"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "274",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "7"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "302",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "8"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "250",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "222",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "166",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "138",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "110",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "6"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "203",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "polyline",
          "attrs": {
            "points": "134,162 274,162 274,50",
            "fill": "none",
            "stroke": "#4f46e5",
            "stroke-width": "2.5",
            "stroke-linejoin": "round",
            "stroke-linecap": "round"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "134",
            "cy": "162",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "274",
            "cy": "162",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "274",
            "cy": "50",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "121.9",
            "y": "170.8",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "A"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "284.2",
            "y": "174.1",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "B"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "280.9",
            "y": "43.0",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "C"
          ]
        }
      ]
    }
  },
  {
    "id": 9,
    "level": 1,
    "title": "Nível 1",
    "question": "Um ponto está no 3º quadrante. Os sinais de x e y são:",
    "answer": "x negativo e y negativo",
    "hint": "Esquerda e para baixo.",
    "steps": [
      "3º quadrante: esquerda e embaixo: os dois negativos."
    ],
    "common": [],
    "options": [
      "x negativo e y negativo",
      "x positivo e y negativo",
      "x negativo e y positivo",
      "x positivo e y positivo"
    ]
  },
  {
    "id": 10,
    "level": 1,
    "title": "Nível 1",
    "question": "Qual é a soma das coordenadas do ponto \\((-3,\\ -5)\\)?",
    "answer": "-8",
    "hint": "Soma de dois negativos.",
    "steps": [
      "\\(-3 + (-5) = -8\\)."
    ],
    "common": []
  },
  {
    "id": 11,
    "level": 1,
    "title": "Nível 1",
    "question": "Um triângulo tem vértices (0, 0), (6, 0) e (0, 8). Quanto mede o lado inclinado (hipotenusa)?",
    "answer": "10",
    "hint": "Pitágoras.",
    "steps": [
      "Catetos 6 e 8 (Pitágoras): \\(\\sqrt{36 + 64} = \\sqrt{100} = 10\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 296 352",
        "style": "width:296px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Triângulo retângulo"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "330",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "330",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "330",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "330",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "330",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "330",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "190",
            "y1": "330",
            "x2": "190",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "218",
            "y1": "330",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "246",
            "y1": "330",
            "x2": "246",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "274",
            "y1": "330",
            "x2": "274",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "330",
            "x2": "274",
            "y2": "330",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "302",
            "x2": "274",
            "y2": "302",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "274",
            "x2": "274",
            "y2": "274",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "246",
            "x2": "274",
            "y2": "246",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "274",
            "y2": "218",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "274",
            "y2": "190",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "274",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "274",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "274",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "274",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "274",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "274",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "274",
            "x2": "274",
            "y2": "274",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "330",
            "x2": "78",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "274,274 267,270 267,278",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "78,22 74,29 82,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "272",
            "y": "265",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "87",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "288",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "288",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "288",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134",
            "y": "288",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "162",
            "y": "288",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "190",
            "y": "288",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "218",
            "y": "288",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "246",
            "y": "288",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "6"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "274",
            "y": "288",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "7"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "334",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "306",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "250",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "222",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "194",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "166",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "138",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "110",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "6"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "7"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "8"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "9"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "287",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "78,274 246,274 78,50",
            "fill": "#e0e7ff",
            "fill-opacity": "0.85",
            "stroke": "#4f46e5",
            "stroke-width": "2.5",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "78",
            "cy": "274",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "246",
            "cy": "274",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "78",
            "cy": "50",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        }
      ]
    }
  },
  {
    "id": 12,
    "level": 1,
    "title": "Nível 1",
    "question": "Qual é a coordenada x do ponto médio do segmento de A(2, 3) a B(8, 3)?",
    "answer": "5",
    "hint": "Média de 2 e 8.",
    "steps": [
      "Ponto médio: média das coordenadas: \\(\\dfrac{2 + 8}{2} = 5\\)."
    ],
    "common": []
  },
  {
    "id": 13,
    "level": 1,
    "title": "Nível 1",
    "question": "Qual par ordenado indica o ponto 3 unidades à esquerda e 2 para cima da origem?",
    "answer": "\\((-3,\\ 2)\\)",
    "hint": "Primeiro x, depois y.",
    "steps": [
      "Esquerda: x = −3; cima: y = 2: \\((-3,\\ 2)\\). Primeiro a horizontal, depois a vertical."
    ],
    "common": [],
    "options": [
      "\\((-3,\\ 2)\\)",
      "\\((3,\\ -2)\\)",
      "\\((2,\\ -3)\\)",
      "\\((-2,\\ 3)\\)"
    ]
  },
  {
    "id": 14,
    "level": 2,
    "title": "Nível 2",
    "question": "O ponto \\((2,\\ 3)\\) sofre uma translação pelo vetor \\((4,\\ 1)\\). Qual é a coordenada x da imagem?",
    "answer": "6",
    "hint": "Some a ao x e b ao y.",
    "steps": [
      "Regra: \\((x,\\ y) \\to (x + a,\\ y + b)\\) com \\((a,\\ b) = (4,\\ 1)\\).",
      "\\(x' = 2 +4 = 6\\) e \\(y' = 3 +1 = 4\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 296 240",
        "style": "width:296px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Ponto e imagem"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "218",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "218",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "218",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "218",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "218",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "190",
            "y1": "218",
            "x2": "190",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "218",
            "y1": "218",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "246",
            "y1": "218",
            "x2": "246",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "274",
            "y1": "218",
            "x2": "274",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "274",
            "y2": "218",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "274",
            "y2": "190",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "274",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "274",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "274",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "274",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "274",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "274",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "274",
            "y2": "162",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "218",
            "x2": "78",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "274,162 267,158 267,166",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "78,22 74,29 82,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "272",
            "y": "153",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "87",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "162",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "190",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "218",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "246",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "6"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "274",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "7"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "222",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "194",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "138",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "110",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "175",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "134",
            "cy": "78",
            "r": "5",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134.0",
            "y": "82.0",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "P"
          ]
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "246",
            "cy": "50",
            "r": "5",
            "fill": "#ec4899"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "246.0",
            "y": "54.0",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#ec4899",
            "text-anchor": "middle"
          },
          "children": [
            "P'"
          ]
        }
      ]
    }
  },
  {
    "id": 15,
    "level": 2,
    "title": "Nível 2",
    "question": "O ponto \\((2,\\ 3)\\) sofre uma translação pelo vetor \\((4,\\ 1)\\). Qual é a coordenada y da imagem?",
    "answer": "4",
    "hint": "Some a ao x e b ao y.",
    "steps": [
      "Regra: \\((x,\\ y) \\to (x + a,\\ y + b)\\) com \\((a,\\ b) = (4,\\ 1)\\).",
      "\\(x' = 2 +4 = 6\\) e \\(y' = 3 +1 = 4\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 296 240",
        "style": "width:296px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Ponto e imagem"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "218",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "218",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "218",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "218",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "218",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "190",
            "y1": "218",
            "x2": "190",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "218",
            "y1": "218",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "246",
            "y1": "218",
            "x2": "246",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "274",
            "y1": "218",
            "x2": "274",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "274",
            "y2": "218",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "274",
            "y2": "190",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "274",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "274",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "274",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "274",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "274",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "274",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "274",
            "y2": "162",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "218",
            "x2": "78",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "274,162 267,158 267,166",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "78,22 74,29 82,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "272",
            "y": "153",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "87",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "162",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "190",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "218",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "246",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "6"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "274",
            "y": "176",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "7"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "222",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "194",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "138",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "110",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "175",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "134",
            "cy": "78",
            "r": "5",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134.0",
            "y": "82.0",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "P"
          ]
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "246",
            "cy": "50",
            "r": "5",
            "fill": "#ec4899"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "246.0",
            "y": "54.0",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#ec4899",
            "text-anchor": "middle"
          },
          "children": [
            "P'"
          ]
        }
      ]
    }
  },
  {
    "id": 16,
    "level": 2,
    "title": "Nível 2",
    "question": "O ponto \\((-1,\\ 5)\\) sofre uma translação pelo vetor \\((3,\\ -2)\\). Qual é a coordenada x da imagem?",
    "answer": "2",
    "hint": "Some a ao x e b ao y.",
    "steps": [
      "Regra: \\((x,\\ y) \\to (x + a,\\ y + b)\\) com \\((a,\\ b) = (3,\\ -2)\\).",
      "\\(x' = -1 +3 = 2\\) e \\(y' = 5 -2 = 3\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 184 268",
        "style": "width:184px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Ponto e imagem"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "246",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "246",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "246",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "246",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "246",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "246",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "246",
            "x2": "162",
            "y2": "246",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "162",
            "y2": "218",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "162",
            "y2": "190",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "162",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "162",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "162",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "162",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "162",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "162",
            "y2": "190",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "246",
            "x2": "78",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "162,190 155,186 155,194",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "78,22 74,29 82,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "160",
            "y": "181",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "87",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "162",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "250",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "222",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "166",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "138",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "110",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "6"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "203",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "50",
            "cy": "50",
            "r": "5",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50.0",
            "y": "54.0",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "P"
          ]
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "134",
            "cy": "106",
            "r": "5",
            "fill": "#ec4899"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134.0",
            "y": "110.0",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#ec4899",
            "text-anchor": "middle"
          },
          "children": [
            "P'"
          ]
        }
      ]
    }
  },
  {
    "id": 17,
    "level": 2,
    "title": "Nível 2",
    "question": "O ponto \\((-1,\\ 5)\\) sofre uma translação pelo vetor \\((3,\\ -2)\\). Qual é a coordenada y da imagem?",
    "answer": "3",
    "hint": "Some a ao x e b ao y.",
    "steps": [
      "Regra: \\((x,\\ y) \\to (x + a,\\ y + b)\\) com \\((a,\\ b) = (3,\\ -2)\\).",
      "\\(x' = -1 +3 = 2\\) e \\(y' = 5 -2 = 3\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 184 268",
        "style": "width:184px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Ponto e imagem"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "246",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "246",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "246",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "246",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "246",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "246",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "246",
            "x2": "162",
            "y2": "246",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "162",
            "y2": "218",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "162",
            "y2": "190",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "162",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "162",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "162",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "162",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "162",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "162",
            "y2": "190",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "246",
            "x2": "78",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "162,190 155,186 155,194",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "78,22 74,29 82,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "160",
            "y": "181",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "87",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "162",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "250",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "222",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "166",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "138",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "110",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "6"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "203",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "50",
            "cy": "50",
            "r": "5",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50.0",
            "y": "54.0",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "P"
          ]
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "134",
            "cy": "106",
            "r": "5",
            "fill": "#ec4899"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134.0",
            "y": "110.0",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#ec4899",
            "text-anchor": "middle"
          },
          "children": [
            "P'"
          ]
        }
      ]
    }
  },
  {
    "id": 18,
    "level": 2,
    "title": "Nível 2",
    "question": "O ponto \\((0,\\ -4)\\) sofre uma translação pelo vetor \\((-3,\\ 6)\\). Qual é a coordenada x da imagem?",
    "answer": "-3",
    "hint": "Some a ao x e b ao y.",
    "steps": [
      "Regra: \\((x,\\ y) \\to (x + a,\\ y + b)\\) com \\((a,\\ b) = (-3,\\ 6)\\).",
      "\\(x' = 0 -3 = -3\\) e \\(y' = -4 +6 = 2\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 240 268",
        "style": "width:240px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Ponto e imagem"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "246",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "246",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "246",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "246",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "246",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "246",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "190",
            "y1": "246",
            "x2": "190",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "218",
            "y1": "246",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "246",
            "x2": "218",
            "y2": "246",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "218",
            "y2": "218",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "218",
            "y2": "190",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "218",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "218",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "218",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "218",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "218",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "218",
            "y2": "106",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "246",
            "x2": "134",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "218,106 211,102 211,110",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "134,22 130,29 138,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "216",
            "y": "97",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "143",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "78",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "162",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "190",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "218",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "250",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "222",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "194",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "166",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "138",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "119",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "134",
            "cy": "218",
            "r": "5",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134.0",
            "y": "222.0",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "P"
          ]
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "50",
            "cy": "50",
            "r": "5",
            "fill": "#ec4899"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50.0",
            "y": "54.0",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#ec4899",
            "text-anchor": "middle"
          },
          "children": [
            "P'"
          ]
        }
      ]
    }
  },
  {
    "id": 19,
    "level": 2,
    "title": "Nível 2",
    "question": "O ponto \\((0,\\ -4)\\) sofre uma translação pelo vetor \\((-3,\\ 6)\\). Qual é a coordenada y da imagem?",
    "answer": "2",
    "hint": "Some a ao x e b ao y.",
    "steps": [
      "Regra: \\((x,\\ y) \\to (x + a,\\ y + b)\\) com \\((a,\\ b) = (-3,\\ 6)\\).",
      "\\(x' = 0 -3 = -3\\) e \\(y' = -4 +6 = 2\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 240 268",
        "style": "width:240px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Ponto e imagem"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "246",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "246",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "246",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "246",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "246",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "246",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "190",
            "y1": "246",
            "x2": "190",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "218",
            "y1": "246",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "246",
            "x2": "218",
            "y2": "246",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "218",
            "y2": "218",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "218",
            "y2": "190",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "218",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "218",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "218",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "218",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "218",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "218",
            "y2": "106",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "246",
            "x2": "134",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "218,106 211,102 211,110",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "134,22 130,29 138,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "216",
            "y": "97",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "143",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "78",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "162",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "190",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "218",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "250",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "222",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "194",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "166",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "138",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "128",
            "y": "119",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "134",
            "cy": "218",
            "r": "5",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134.0",
            "y": "222.0",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "P"
          ]
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "50",
            "cy": "50",
            "r": "5",
            "fill": "#ec4899"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50.0",
            "y": "54.0",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#ec4899",
            "text-anchor": "middle"
          },
          "children": [
            "P'"
          ]
        }
      ]
    }
  },
  {
    "id": 20,
    "level": 2,
    "title": "Nível 2",
    "question": "O ponto A(1, 2) foi levado a A′(6, 5) por uma translação. Qual é o valor de a do vetor (a, b)?",
    "answer": "5",
    "hint": "Subtraia os x.",
    "steps": [
      "Vetor = imagem − original.",
      "\\(a = 6 - 1 = 5\\) e \\(b = 5 - 2 = 3\\)."
    ],
    "common": []
  },
  {
    "id": 21,
    "level": 2,
    "title": "Nível 2",
    "question": "Com o mesmo A(1, 2) → A′(6, 5), qual é o valor de b?",
    "answer": "3",
    "hint": "Subtraia os y.",
    "steps": [
      "\\(b = 5 - 2 = 3\\)."
    ],
    "common": []
  },
  {
    "id": 22,
    "level": 2,
    "title": "Nível 2",
    "question": "O ponto B(4, −1) foi levado a B′(−2, 3). Qual é o valor de a?",
    "answer": "-6",
    "hint": "imagem − original.",
    "steps": [
      "\\(a = -2 - 4 = -6\\) (6 para a esquerda).",
      "E \\(b = 3 - (-1) = 4\\)."
    ],
    "common": []
  },
  {
    "id": 23,
    "level": 2,
    "title": "Nível 2",
    "question": "Com B(4, −1) → B′(−2, 3), qual é o valor de b?",
    "answer": "4",
    "hint": "Cuidado com o sinal.",
    "steps": [
      "\\(b = 3 - (-1) = 3 + 1 = 4\\)."
    ],
    "common": []
  },
  {
    "id": 24,
    "level": 2,
    "title": "Nível 2",
    "question": "Uma translação não muda:",
    "answer": "as distâncias e os ângulos da figura",
    "hint": "É só um deslize.",
    "steps": [
      "Translação é só um deslize: tamanho, forma e orientação ficam iguais; mudam as coordenadas."
    ],
    "common": [],
    "options": [
      "as distâncias e os ângulos da figura",
      "a posição da figura",
      "as coordenadas dos pontos",
      "o sentido da figura (ela vira de ponta-cabeça)"
    ]
  },
  {
    "id": 25,
    "level": 2,
    "title": "Nível 2",
    "question": "O triângulo A(1, 1), B(4, 1), C(2, 3) sofre translação pelo vetor (3, 2). Qual é a coordenada x de C′?",
    "answer": "5",
    "hint": "x de C é 2.",
    "steps": [
      "\\(2 + 3 = 5\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 324 268",
        "style": "width:324px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Triângulo e imagem"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "246",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "246",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "246",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "246",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "246",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "246",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "190",
            "y1": "246",
            "x2": "190",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "218",
            "y1": "246",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "246",
            "y1": "246",
            "x2": "246",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "274",
            "y1": "246",
            "x2": "274",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "302",
            "y1": "246",
            "x2": "302",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "246",
            "x2": "302",
            "y2": "246",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "302",
            "y2": "218",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "302",
            "y2": "190",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "302",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "302",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "302",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "302",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "302",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "302",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "302",
            "y2": "190",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "246",
            "x2": "78",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "302,190 295,186 295,194",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "78,22 74,29 82,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "300",
            "y": "181",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "87",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "162",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "190",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "218",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "246",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "6"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "274",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "7"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "302",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "8"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "250",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "222",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "166",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "138",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "110",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "6"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "203",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "106,162 190,162 134,106",
            "fill": "#e0e7ff",
            "fill-opacity": "0.85",
            "stroke": "#4f46e5",
            "stroke-width": "2.5",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "106",
            "cy": "162",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "190",
            "cy": "162",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "134",
            "cy": "106",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "94.4",
            "y": "171.8",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "A"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "202.1",
            "y": "170.8",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "B"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "130.8",
            "y": "97.4",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "C"
          ]
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "190,106 274,106 218,50",
            "fill": "#fce7f3",
            "fill-opacity": "0.85",
            "stroke": "#ec4899",
            "stroke-width": "2.5",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "190",
            "cy": "106",
            "r": "3.6",
            "fill": "#ec4899"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "274",
            "cy": "106",
            "r": "3.6",
            "fill": "#ec4899"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "218",
            "cy": "50",
            "r": "3.6",
            "fill": "#ec4899"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "178.4",
            "y": "115.8",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#ec4899",
            "text-anchor": "middle"
          },
          "children": [
            "A'"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "286.1",
            "y": "114.8",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#ec4899",
            "text-anchor": "middle"
          },
          "children": [
            "B'"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "214.8",
            "y": "41.4",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#ec4899",
            "text-anchor": "middle"
          },
          "children": [
            "C'"
          ]
        }
      ]
    }
  },
  {
    "id": 26,
    "level": 2,
    "title": "Nível 2",
    "question": "Um robô está em (2, 3). Ele anda 5 para a direita e 4 para baixo. Qual é a nova coordenada y?",
    "answer": "-1",
    "hint": "Baixo é negativo.",
    "steps": [
      "Vetor: \\((5,\\ -4)\\).",
      "\\(y = 3 + (-4) = -1\\)."
    ],
    "common": [
      {
        "value": "7/1",
        "message": "Para baixo diminui y: 3 − 4."
      }
    ]
  },
  {
    "id": 27,
    "level": 2,
    "title": "Nível 2",
    "question": "Uma peça de um jogo está em (−3, 2) e precisa chegar a (5, 2) só com deslocamento horizontal. Quantas casas ela anda para a direita?",
    "answer": "8",
    "hint": "5 − (−3).",
    "steps": [
      "\\(5 - (-3) = 8\\)."
    ],
    "common": []
  },
  {
    "id": 28,
    "level": 2,
    "title": "Nível 2",
    "question": "Uma translação pelo vetor (3, −2) foi feita. Qual vetor desfaz essa translação?",
    "answer": "\\((-3,\\ 2)\\)",
    "hint": "Ande ao contrário.",
    "steps": [
      "Para voltar, inverta os dois sinais: \\((-3,\\ 2)\\)."
    ],
    "common": [],
    "options": [
      "\\((-3,\\ 2)\\)",
      "\\((3,\\ -2)\\)",
      "\\((-3,\\ -2)\\)",
      "\\((2,\\ -3)\\)"
    ]
  },
  {
    "id": 29,
    "level": 2,
    "title": "Nível 2",
    "question": "O ponto (3, 4) sofre translação pelo vetor (−5, −2). Qual é a soma das coordenadas da imagem?",
    "answer": "0",
    "hint": "Ache a imagem primeiro.",
    "steps": [
      "Imagem: \\((3 - 5,\\ 4 - 2) = (-2,\\ 2)\\).",
      "Soma: \\(-2 + 2 = 0\\)."
    ],
    "common": []
  },
  {
    "id": 30,
    "level": 2,
    "title": "Nível 2",
    "question": "O retângulo de vértices (0, 0), (4, 0), (4, 3) e (0, 3) é transladado pelo vetor (2, 5). Qual é a área da imagem?",
    "answer": "12",
    "hint": "Translação preserva tamanho.",
    "steps": [
      "Translação não muda o tamanho: \\(4 \\cdot 3 = 12\\)."
    ],
    "common": [
      {
        "value": "34/1",
        "message": "A translação não muda a área."
      }
    ]
  },
  {
    "id": 31,
    "level": 2,
    "title": "Nível 2",
    "question": "O ponto (a, 4) sofre translação pelo vetor (−2, 3) e vai para (5, 7). Quanto vale a?",
    "answer": "7",
    "hint": "Resolva a + (−2) = 5.",
    "steps": [
      "\\(a + (-2) = 5\\) ⇒ \\(a = 7\\).",
      "Conferindo o y: \\(4 + 3 = 7\\) ✓."
    ],
    "common": []
  },
  {
    "id": 32,
    "level": 2,
    "title": "Nível 2",
    "question": "Um carro no mapa está em (−4, −1) e segue o vetor (6, 3). Qual é a coordenada x final?",
    "answer": "2",
    "hint": "Some.",
    "steps": [
      "\\(-4 + 6 = 2\\)."
    ],
    "common": []
  },
  {
    "id": 33,
    "level": 3,
    "title": "Nível 3",
    "question": "O ponto \\((3,\\ 5)\\) é refletido no eixo x. Qual é a coordenada y da imagem?",
    "answer": "-5",
    "hint": "Eixo x: só o y troca de sinal.",
    "steps": [
      "Regra: \\((x,\\ y) \\to (x,\\ -y)\\).",
      "Imagem: \\((3,\\ -5)\\)."
    ],
    "common": []
  },
  {
    "id": 34,
    "level": 3,
    "title": "Nível 3",
    "question": "O ponto \\((-4,\\ 2)\\) é refletido no eixo y. Qual é a coordenada x da imagem?",
    "answer": "4",
    "hint": "Eixo y: só o x troca de sinal.",
    "steps": [
      "Regra: \\((x,\\ y) \\to (-x,\\ y)\\).",
      "Imagem: \\((4,\\ 2)\\)."
    ],
    "common": []
  },
  {
    "id": 35,
    "level": 3,
    "title": "Nível 3",
    "question": "O ponto \\((2,\\ 7)\\) é refletido na reta y = x. Qual é a coordenada x da imagem?",
    "answer": "7",
    "hint": "Troque x e y.",
    "steps": [
      "Regra: \\((x,\\ y) \\to (y,\\ x)\\).",
      "Imagem: \\((7,\\ 2)\\)."
    ],
    "common": []
  },
  {
    "id": 36,
    "level": 3,
    "title": "Nível 3",
    "question": "O ponto \\((6,\\ -1)\\) é refletido na reta y = −x. Qual é a coordenada x da imagem?",
    "answer": "1",
    "hint": "Troque e mude os sinais.",
    "steps": [
      "Regra: \\((x,\\ y) \\to (-y,\\ -x)\\).",
      "Imagem: \\((1,\\ -6)\\)."
    ],
    "common": []
  },
  {
    "id": 37,
    "level": 3,
    "title": "Nível 3",
    "question": "O ponto \\((1,\\ 4)\\) é refletido na reta vertical x = 3. Qual é a coordenada x da imagem?",
    "answer": "5",
    "hint": "x′ = 2·3 − 1.",
    "steps": [
      "Regra: \\((x,\\ y) \\to (2k - x,\\ y),\\ k = 3\\).",
      "Imagem: \\((5,\\ 4)\\)."
    ],
    "common": []
  },
  {
    "id": 38,
    "level": 3,
    "title": "Nível 3",
    "question": "O ponto \\((5,\\ 2)\\) é refletido na reta vertical x = 3. Qual é a coordenada x da imagem?",
    "answer": "1",
    "hint": "x′ = 6 − 5.",
    "steps": [
      "Regra: \\((x,\\ y) \\to (6 - x,\\ y)\\).",
      "Imagem: \\((1,\\ 2)\\)."
    ],
    "common": []
  },
  {
    "id": 39,
    "level": 3,
    "title": "Nível 3",
    "question": "O ponto \\((2,\\ 1)\\) é refletido na reta horizontal y = 4. Qual é a coordenada y da imagem?",
    "answer": "7",
    "hint": "y′ = 2·4 − 1.",
    "steps": [
      "Regra: \\((x,\\ y) \\to (x,\\ 8 - y)\\).",
      "Imagem: \\((2,\\ 7)\\)."
    ],
    "common": []
  },
  {
    "id": 40,
    "level": 3,
    "title": "Nível 3",
    "question": "O ponto \\((-3,\\ -2)\\) é refletido no eixo x. Qual é a coordenada y da imagem?",
    "answer": "2",
    "hint": "Oposto de −2.",
    "steps": [
      "Regra: \\((x,\\ y) \\to (x,\\ -y)\\).",
      "Imagem: \\((-3,\\ 2)\\)."
    ],
    "common": []
  },
  {
    "id": 41,
    "level": 3,
    "title": "Nível 3",
    "question": "Qual é a distância do ponto \\((5,\\ 2)\\) à reta x = 3?",
    "answer": "2",
    "hint": "Subtraia 3 do x.",
    "steps": [
      "\\(|5 - 3| = 2\\). (A imagem \\((1,\\ 2)\\) fica também a 2 do outro lado.)"
    ],
    "common": []
  },
  {
    "id": 42,
    "level": 3,
    "title": "Nível 3",
    "question": "O ponto \\((4,\\ -3)\\) é refletido no eixo y. Qual é a soma das coordenadas da imagem?",
    "answer": "-7",
    "hint": "Imagem primeiro.",
    "steps": [
      "Imagem: \\((-4,\\ -3)\\).",
      "\\(-4 + (-3) = -7\\)."
    ],
    "common": []
  },
  {
    "id": 43,
    "level": 3,
    "title": "Nível 3",
    "question": "Quais pontos não saem do lugar numa reflexão?",
    "answer": "os pontos sobre o espelho",
    "hint": "Distância zero ao espelho.",
    "steps": [
      "Um ponto sobre o espelho está a distância 0 dele: a imagem é o próprio ponto."
    ],
    "common": [],
    "options": [
      "os pontos sobre o espelho",
      "os pontos do 1º quadrante",
      "os pontos da origem para fora",
      "nenhum ponto"
    ]
  },
  {
    "id": 44,
    "level": 3,
    "title": "Nível 3",
    "question": "Uma reflexão muda:",
    "answer": "o sentido de leitura: a figura fica “ao contrário” (orientação)",
    "hint": "Pense na letra no espelho.",
    "steps": [
      "Reflexão preserva distâncias, ângulos e área, mas inverte a orientação (uma letra F fica espelhada)."
    ],
    "common": [],
    "options": [
      "o sentido de leitura: a figura fica “ao contrário” (orientação)",
      "o comprimento dos lados",
      "a medida dos ângulos",
      "a área"
    ]
  },
  {
    "id": 45,
    "level": 3,
    "title": "Nível 3",
    "question": "O triângulo A(1, 1), B(4, 1), C(2, 3) é refletido no eixo y. Qual é a coordenada x de B′?",
    "answer": "-4",
    "hint": "Oposto de 4.",
    "steps": [
      "\\(B' = (-4,\\ 1)\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 324 212",
        "style": "width:324px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Triângulo e reflexão no eixo y"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "190",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "190",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "190",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "190",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "190",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "190",
            "y1": "190",
            "x2": "190",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "218",
            "y1": "190",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "246",
            "y1": "190",
            "x2": "246",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "274",
            "y1": "190",
            "x2": "274",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "302",
            "y1": "190",
            "x2": "302",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "302",
            "y2": "190",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "302",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "302",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "302",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "302",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "302",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "302",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "302",
            "y2": "134",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "190",
            "x2": "162",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "302,134 295,130 295,138",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "162,22 158,29 166,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "300",
            "y": "125",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "171",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "78",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "190",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "218",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "246",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "274",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "302",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "156",
            "y": "194",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "156",
            "y": "166",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "156",
            "y": "110",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "156",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "156",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "156",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "156",
            "y": "147",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "190,106 274,106 218,50",
            "fill": "#e0e7ff",
            "fill-opacity": "0.85",
            "stroke": "#4f46e5",
            "stroke-width": "2.5",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "190",
            "cy": "106",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "274",
            "cy": "106",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "218",
            "cy": "50",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "178.4",
            "y": "115.8",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "A"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "286.1",
            "y": "114.8",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "B"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "214.8",
            "y": "41.4",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "C"
          ]
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "134,106 50,106 106,50",
            "fill": "#fce7f3",
            "fill-opacity": "0.85",
            "stroke": "#ec4899",
            "stroke-width": "2.5",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "134",
            "cy": "106",
            "r": "3.6",
            "fill": "#ec4899"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "50",
            "cy": "106",
            "r": "3.6",
            "fill": "#ec4899"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "106",
            "cy": "50",
            "r": "3.6",
            "fill": "#ec4899"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "145.6",
            "y": "115.8",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#ec4899",
            "text-anchor": "middle"
          },
          "children": [
            "A'"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "37.9",
            "y": "114.8",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#ec4899",
            "text-anchor": "middle"
          },
          "children": [
            "B'"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "109.2",
            "y": "41.4",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#ec4899",
            "text-anchor": "middle"
          },
          "children": [
            "C'"
          ]
        }
      ]
    }
  },
  {
    "id": 46,
    "level": 3,
    "title": "Nível 3",
    "question": "O ponto \\((7,\\ -2)\\) é refletido na reta y = −2. Qual é a coordenada y da imagem?",
    "answer": "-2",
    "hint": "O ponto está sobre a reta?",
    "steps": [
      "O ponto está sobre o espelho: \\(y = -2\\).",
      "Pela regra: \\(2 \\cdot (-2) - (-2) = -4 + 2 = -2\\)."
    ],
    "common": []
  },
  {
    "id": 47,
    "level": 3,
    "title": "Nível 3",
    "question": "O ponto A(2, 5) foi levado a A′(2, −5). Qual é o espelho?",
    "answer": "o eixo x",
    "hint": "Quem mudou de sinal?",
    "steps": [
      "O x não mudou e o y trocou de sinal: reflexão no eixo x."
    ],
    "common": [],
    "options": [
      "o eixo x",
      "o eixo y",
      "a reta y = x",
      "a reta x = 2"
    ]
  },
  {
    "id": 48,
    "level": 3,
    "title": "Nível 3",
    "question": "O ponto A(3, 1) foi levado a A′(1, 3). Qual é o espelho?",
    "answer": "a reta y = x",
    "hint": "Eles trocaram.",
    "steps": [
      "x e y trocaram de lugar: reflexão em y = x."
    ],
    "common": [],
    "options": [
      "a reta y = x",
      "o eixo x",
      "o eixo y",
      "a reta y = −x"
    ]
  },
  {
    "id": 49,
    "level": 3,
    "title": "Nível 3",
    "question": "O ponto A(1, 2) foi refletido em uma reta vertical x = k e virou A′(7, 2). Quanto vale k?",
    "answer": "4",
    "hint": "Ponto médio.",
    "steps": [
      "O espelho passa no meio: \\(k = \\dfrac{1 + 7}{2} = 4\\)."
    ],
    "common": []
  },
  {
    "id": 50,
    "level": 4,
    "title": "Nível 4",
    "question": "O ponto \\((3,\\ 1)\\) gira 90° no sentido anti-horário em torno da origem. Qual é a coordenada x da imagem?",
    "answer": "-1",
    "hint": "x′ = −y.",
    "steps": [
      "Regra de 90°: \\((x,\\ y) \\to (-y,\\ x)\\).",
      "Imagem: \\((-1,\\ 3)\\)."
    ],
    "common": []
  },
  {
    "id": 51,
    "level": 4,
    "title": "Nível 4",
    "question": "O ponto \\((3,\\ 1)\\) gira 90° no sentido anti-horário em torno da origem. Qual é a coordenada y da imagem?",
    "answer": "3",
    "hint": "y′ = x.",
    "steps": [
      "Regra de 90°: \\((x,\\ y) \\to (-y,\\ x)\\).",
      "Imagem: \\((-1,\\ 3)\\)."
    ],
    "common": []
  },
  {
    "id": 52,
    "level": 4,
    "title": "Nível 4",
    "question": "O ponto \\((2,\\ -5)\\) gira 180° em torno da origem. Qual é a coordenada x da imagem?",
    "answer": "-2",
    "hint": "Os dois trocam de sinal.",
    "steps": [
      "Regra de 180°: \\((x,\\ y) \\to (-x,\\ -y)\\).",
      "Imagem: \\((-2,\\ 5)\\)."
    ],
    "common": []
  },
  {
    "id": 53,
    "level": 4,
    "title": "Nível 4",
    "question": "O ponto \\((2,\\ -5)\\) gira 180° em torno da origem. Qual é a coordenada y da imagem?",
    "answer": "5",
    "hint": "Oposto de −5.",
    "steps": [
      "Regra de 180°: \\((x,\\ y) \\to (-x,\\ -y)\\).",
      "Imagem: \\((-2,\\ 5)\\)."
    ],
    "common": []
  },
  {
    "id": 54,
    "level": 4,
    "title": "Nível 4",
    "question": "O ponto \\((4,\\ 2)\\) gira 270° no sentido anti-horário em torno da origem. Qual é a coordenada x da imagem?",
    "answer": "2",
    "hint": "x′ = y.",
    "steps": [
      "Regra de 270°: \\((x,\\ y) \\to (y,\\ -x)\\).",
      "Imagem: \\((2,\\ -4)\\)."
    ],
    "common": []
  },
  {
    "id": 55,
    "level": 4,
    "title": "Nível 4",
    "question": "O ponto \\((4,\\ 2)\\) gira 270° no sentido anti-horário em torno da origem. Qual é a coordenada y da imagem?",
    "answer": "-4",
    "hint": "y′ = −x.",
    "steps": [
      "Regra de 270°: \\((x,\\ y) \\to (y,\\ -x)\\).",
      "Imagem: \\((2,\\ -4)\\)."
    ],
    "common": []
  },
  {
    "id": 56,
    "level": 4,
    "title": "Nível 4",
    "question": "O ponto \\((-3,\\ 1)\\) gira 90° anti-horário em torno da origem. Qual é a coordenada y da imagem?",
    "answer": "-3",
    "hint": "y′ = x.",
    "steps": [
      "Regra de 90°: \\((x,\\ y) \\to (-y,\\ x)\\).",
      "Imagem: \\((-1,\\ -3)\\)."
    ],
    "common": []
  },
  {
    "id": 57,
    "level": 4,
    "title": "Nível 4",
    "question": "O ponto \\((1,\\ 6)\\) gira −90° (isto é, 90° no sentido horário) em torno da origem. Qual é a coordenada x da imagem?",
    "answer": "6",
    "hint": "−90° = 270°.",
    "steps": [
      "−90° equivale a 270° anti-horário: \\((x,\\ y) \\to (y,\\ -x)\\).",
      "Imagem: \\((6,\\ -1)\\)."
    ],
    "common": []
  },
  {
    "id": 58,
    "level": 4,
    "title": "Nível 4",
    "question": "O ponto P(4, 1) gira 90° anti-horário em torno do centro C(1, 1). Qual é a coordenada y de P′?",
    "answer": "4",
    "hint": "Vetor, gira, soma de volta.",
    "steps": [
      "Vetor do centro até P: \\((4 - 1,\\ 1 - 1) = (3,\\ 0)\\).",
      "Gira 90°: \\((3,\\ 0) \\to (0,\\ 3)\\).",
      "Soma o centro: \\((1 + 0,\\ 1 + 3) = (1,\\ 4)\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 240 184",
        "style": "width:240px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Ponto P e centro C"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "162",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "162",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "162",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "162",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "162",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "190",
            "y1": "162",
            "x2": "190",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "218",
            "y1": "162",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "218",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "218",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "218",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "218",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "218",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "218",
            "y2": "106",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "162",
            "x2": "78",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "218,106 211,102 211,110",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "78,22 74,29 82,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "216",
            "y": "97",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "87",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "162",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "190",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "218",
            "y": "120",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "166",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "138",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "119",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "106",
            "cy": "78",
            "r": "5",
            "fill": "#16a34a"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106.0",
            "y": "82.0",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#16a34a",
            "text-anchor": "middle"
          },
          "children": [
            "C"
          ]
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "190",
            "cy": "78",
            "r": "5",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "190.0",
            "y": "82.0",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "P"
          ]
        }
      ]
    }
  },
  {
    "id": 59,
    "level": 4,
    "title": "Nível 4",
    "question": "O ponto P(5, 3) gira 180° em torno do centro C(2, 3). Qual é a coordenada x de P′?",
    "answer": "-1",
    "hint": "O ponto vai para o outro lado do centro.",
    "steps": [
      "Vetor: \\((3,\\ 0)\\) → gira 180°: \\((-3,\\ 0)\\).",
      "Soma o centro: \\((2 - 3,\\ 3 + 0) = (-1,\\ 3)\\)."
    ],
    "common": []
  },
  {
    "id": 60,
    "level": 4,
    "title": "Nível 4",
    "question": "O ponto P(−1, 5) gira 270° anti-horário em torno do centro C(−1, 2). Qual é a coordenada x de P′?",
    "answer": "2",
    "hint": "Mesmo método.",
    "steps": [
      "Vetor: \\((0,\\ 3)\\). Gira 270°: \\((u,\\ w) \\to (w,\\ -u) = (3,\\ 0)\\).",
      "Soma o centro: \\((-1 + 3,\\ 2 + 0) = (2,\\ 2)\\)."
    ],
    "common": []
  },
  {
    "id": 61,
    "level": 4,
    "title": "Nível 4",
    "question": "Girar uma figura 360° em torno de um ponto:",
    "answer": "a figura volta exatamente ao mesmo lugar",
    "hint": "Uma volta inteira.",
    "steps": [
      "Uma volta completa leva cada ponto de volta ao início."
    ],
    "common": [],
    "options": [
      "a figura volta exatamente ao mesmo lugar",
      "a figura fica espelhada",
      "a figura dobra de tamanho",
      "a figura vai para o 3º quadrante"
    ]
  },
  {
    "id": 62,
    "level": 4,
    "title": "Nível 4",
    "question": "Uma rotação de 90° anti-horário foi feita. Quantos graus (anti-horários) devo girar depois para voltar à posição original?",
    "answer": "270",
    "hint": "Complete a volta.",
    "steps": [
      "\\(360 - 90 = 270\\)."
    ],
    "common": []
  },
  {
    "id": 63,
    "level": 4,
    "title": "Nível 4",
    "question": "Quantas vezes uma figura coincide com ela mesma em uma volta completa (ordem de simetria de rotação) no caso de um quadrado?",
    "answer": "4",
    "hint": "360° ÷ 90°.",
    "steps": [
      "Gira 90°, 180°, 270°, 360°: coincide 4 vezes."
    ],
    "common": []
  },
  {
    "id": 64,
    "level": 4,
    "title": "Nível 4",
    "question": "O ponto \\((3,\\ 4)\\) gira 180° em torno da origem. A que distância da origem está a imagem?",
    "answer": "5",
    "hint": "Pitágoras.",
    "steps": [
      "Imagem: \\((-3,\\ -4)\\).",
      "Distância: \\(\\sqrt{9 + 16} = 5\\). Rotação não muda a distância ao centro."
    ],
    "common": [
      {
        "value": "7/1",
        "message": "A distância é a hipotenusa: raiz de 3² + 4²."
      }
    ]
  },
  {
    "id": 65,
    "level": 5,
    "title": "Nível 5",
    "question": "Homotetia de centro na origem e razão k = 3 aplicada ao ponto \\((2,\\ 3)\\). Qual é a coordenada x da imagem?",
    "answer": "6",
    "hint": "Multiplique x por 3.",
    "steps": [
      "Centro na origem: \\((x,\\ y) \\to (kx,\\ ky)\\) com \\(k = 3\\).",
      "Imagem: \\((6,\\ 9)\\)."
    ],
    "common": []
  },
  {
    "id": 66,
    "level": 5,
    "title": "Nível 5",
    "question": "Homotetia de centro na origem e razão k = 3 aplicada ao ponto \\((2,\\ 3)\\). Qual é a coordenada y da imagem?",
    "answer": "9",
    "hint": "Multiplique y por 3.",
    "steps": [
      "Centro na origem: \\((x,\\ y) \\to (kx,\\ ky)\\) com \\(k = 3\\).",
      "Imagem: \\((6,\\ 9)\\)."
    ],
    "common": []
  },
  {
    "id": 67,
    "level": 5,
    "title": "Nível 5",
    "question": "Homotetia de centro na origem e razão k = 0,5 aplicada ao ponto \\((4,\\ -2)\\). Qual é a coordenada y da imagem?",
    "answer": "-1",
    "hint": "Metade de −2.",
    "steps": [
      "Centro na origem: \\((x,\\ y) \\to (kx,\\ ky)\\) com \\(k = 0.5\\).",
      "Imagem: \\((2,\\ -1)\\)."
    ],
    "common": []
  },
  {
    "id": 68,
    "level": 5,
    "title": "Nível 5",
    "question": "Homotetia de centro na origem e razão k = −2 aplicada ao ponto \\((-3,\\ 6)\\). Qual é a coordenada x da imagem?",
    "answer": "6",
    "hint": "k negativo troca o sinal.",
    "steps": [
      "Centro na origem: \\((x,\\ y) \\to (kx,\\ ky)\\) com \\(k = -2\\).",
      "Imagem: \\((6,\\ -12)\\)."
    ],
    "common": []
  },
  {
    "id": 69,
    "level": 5,
    "title": "Nível 5",
    "question": "Homotetia de centro na origem e razão k = −2 aplicada ao ponto \\((-3,\\ 6)\\). Qual é a coordenada y da imagem?",
    "answer": "-12",
    "hint": "−2 · 6.",
    "steps": [
      "Centro na origem: \\((x,\\ y) \\to (kx,\\ ky)\\) com \\(k = -2\\).",
      "Imagem: \\((6,\\ -12)\\)."
    ],
    "common": []
  },
  {
    "id": 70,
    "level": 5,
    "title": "Nível 5",
    "question": "Homotetia de centro C(1, 1) e razão k = 3 aplicada ao ponto \\((2,\\ 1)\\). Qual é a coordenada x da imagem?",
    "answer": "4",
    "hint": "Vetor do centro até P: (1, 0).",
    "steps": [
      "Vetor do centro até P: \\((1,\\ 0)\\). Multiplique por \\(k = 3\\): \\((3,\\ 0)\\).",
      "Some o centro: \\((4,\\ 1)\\)."
    ],
    "common": []
  },
  {
    "id": 71,
    "level": 5,
    "title": "Nível 5",
    "question": "Homotetia de centro C(2, 3) e razão k = 2 aplicada ao ponto \\((5,\\ 7)\\). Qual é a coordenada y da imagem?",
    "answer": "11",
    "hint": "Vetor (3, 4).",
    "steps": [
      "Vetor do centro até P: \\((3,\\ 4)\\). Multiplique por \\(k = 2\\): \\((6,\\ 8)\\).",
      "Some o centro: \\((8,\\ 11)\\)."
    ],
    "common": []
  },
  {
    "id": 72,
    "level": 5,
    "title": "Nível 5",
    "question": "Homotetia de centro C(1, 2) e razão k = −1 aplicada ao ponto \\((-1,\\ 4)\\). Qual é a coordenada x da imagem?",
    "answer": "3",
    "hint": "Vetor (−2, 2).",
    "steps": [
      "Vetor do centro até P: \\((-2,\\ 2)\\). Multiplique por \\(k = -1\\): \\((2,\\ -2)\\).",
      "Some o centro: \\((3,\\ 0)\\)."
    ],
    "common": []
  },
  {
    "id": 73,
    "level": 5,
    "title": "Nível 5",
    "question": "Um triângulo de lados 3, 4 e 5 sofre uma homotetia de razão 3. Qual é o perímetro da imagem?",
    "answer": "36",
    "hint": "Perímetro × k.",
    "steps": [
      "Original: \\(3 + 4 + 5 = 12\\).",
      "\\(12 \\cdot 3 = 36\\)."
    ],
    "common": [
      {
        "value": "108/1",
        "message": "O perímetro é multiplicado por k, não por k²."
      }
    ]
  },
  {
    "id": 74,
    "level": 5,
    "title": "Nível 5",
    "question": "Um triângulo de área 6 sofre uma homotetia de razão 2. Qual é a área da imagem?",
    "answer": "24",
    "hint": "Área × k².",
    "steps": [
      "\\(k^2 = 4\\) ⇒ \\(6 \\cdot 4 = 24\\)."
    ],
    "common": [
      {
        "value": "12/1",
        "message": "A área é multiplicada por k² = 4."
      }
    ]
  },
  {
    "id": 75,
    "level": 5,
    "title": "Nível 5",
    "question": "Em uma homotetia de centro na origem, A(2, 4) foi levado a A′(6, 12). Qual é a razão k?",
    "answer": "3",
    "hint": "x′ ÷ x.",
    "steps": [
      "\\(k = \\dfrac{6}{2} = 3\\) e \\(\\dfrac{12}{4} = 3\\) ✓."
    ],
    "common": []
  },
  {
    "id": 76,
    "level": 5,
    "title": "Nível 5",
    "question": "Em uma homotetia de centro na origem, A(4, 6) foi levado a A′(2, 3). Qual é a razão k?",
    "answer": "1/2",
    "hint": "x′ ÷ x.",
    "steps": [
      "\\(k = \\dfrac{2}{4} = \\dfrac12\\). (Redução.)"
    ],
    "common": [],
    "answerText": "\\(\\dfrac{1}{2}\\)"
  },
  {
    "id": 77,
    "level": 5,
    "title": "Nível 5",
    "question": "Em uma homotetia de centro na origem, A(2, −3) foi levado a A′(−4, 6). Qual é a razão k?",
    "answer": "-2",
    "hint": "Os sinais trocaram.",
    "steps": [
      "\\(k = \\dfrac{-4}{2} = -2\\) e \\(\\dfrac{6}{-3} = -2\\) ✓."
    ],
    "common": []
  },
  {
    "id": 78,
    "level": 5,
    "title": "Nível 5",
    "question": "Uma homotetia com k = 1:",
    "answer": "deixa a figura exatamente igual",
    "hint": "Multiplicar por 1.",
    "steps": [
      "k = 1: cada ponto fica no mesmo lugar."
    ],
    "common": [],
    "options": [
      "deixa a figura exatamente igual",
      "dobra a figura",
      "espelha a figura",
      "gira a figura 90°"
    ]
  },
  {
    "id": 79,
    "level": 5,
    "title": "Nível 5",
    "question": "Uma homotetia (de razão qualquer, diferente de 0) preserva:",
    "answer": "a medida dos ângulos",
    "hint": "A forma não muda.",
    "steps": [
      "Ângulos ficam iguais (figuras semelhantes). Lados e perímetro × |k|, área × k²."
    ],
    "common": [],
    "options": [
      "a medida dos ângulos",
      "o comprimento dos lados",
      "o perímetro",
      "a área"
    ]
  },
  {
    "id": 80,
    "level": 5,
    "title": "Nível 5",
    "question": "Uma figura de área 20 sofre uma homotetia de razão 0,5. Qual é a área da imagem?",
    "answer": "5",
    "hint": "Área × k².",
    "steps": [
      "\\(k^2 = 0{,}25\\) ⇒ \\(20 \\cdot 0{,}25 = 5\\)."
    ],
    "common": []
  },
  {
    "id": 81,
    "level": 5,
    "title": "Nível 5",
    "question": "Em uma homotetia de razão k = −3, o segmento AB mede 2. Quanto mede A′B′?",
    "answer": "6",
    "hint": "Use o valor absoluto de k.",
    "steps": [
      "\\(|k| = 3\\) ⇒ \\(2 \\cdot 3 = 6\\)."
    ],
    "common": [
      {
        "value": "-6/1",
        "message": "Comprimento nunca é negativo: use |k|."
      }
    ]
  },
  {
    "id": 82,
    "level": 6,
    "title": "Nível 6",
    "question": "A regra \\((x,\\ y) \\to (x + 3,\\ y - 1)\\) descreve:",
    "answer": "uma translação",
    "hint": "Compare as coordenadas.",
    "steps": [
      "Somar constantes às coordenadas: translação pelo vetor \\((3,\\ -1)\\)."
    ],
    "common": [],
    "options": [
      "uma translação",
      "uma reflexão",
      "uma rotação",
      "uma homotetia"
    ]
  },
  {
    "id": 83,
    "level": 6,
    "title": "Nível 6",
    "question": "A regra \\((x,\\ y) \\to (x,\\ -y)\\) descreve:",
    "answer": "uma reflexão no eixo x",
    "hint": "Compare as coordenadas.",
    "steps": [
      "Só o y troca de sinal: reflexão no eixo x."
    ],
    "common": [],
    "options": [
      "uma reflexão no eixo x",
      "uma reflexão no eixo y",
      "uma rotação de 90°",
      "uma translação"
    ]
  },
  {
    "id": 84,
    "level": 6,
    "title": "Nível 6",
    "question": "A regra \\((x,\\ y) \\to (-y,\\ x)\\) descreve:",
    "answer": "uma rotação de 90° anti-horária em torno da origem",
    "hint": "Compare as coordenadas.",
    "steps": [
      "É exatamente a regra de 90°."
    ],
    "common": [],
    "options": [
      "uma rotação de 90° anti-horária em torno da origem",
      "uma reflexão no eixo y",
      "uma rotação de 270°",
      "uma homotetia"
    ]
  },
  {
    "id": 85,
    "level": 6,
    "title": "Nível 6",
    "question": "A regra \\((x,\\ y) \\to (2x,\\ 2y)\\) descreve:",
    "answer": "uma homotetia de centro na origem e k = 2",
    "hint": "Compare as coordenadas.",
    "steps": [
      "Multiplicar as duas coordenadas por 2: homotetia, k = 2 (amplia)."
    ],
    "common": [],
    "options": [
      "uma homotetia de centro na origem e k = 2",
      "uma translação",
      "uma reflexão",
      "uma rotação de 180°"
    ]
  },
  {
    "id": 86,
    "level": 6,
    "title": "Nível 6",
    "question": "A regra \\((x,\\ y) \\to (-x,\\ -y)\\) descreve:",
    "answer": "uma rotação de 180° em torno da origem",
    "hint": "Compare as coordenadas.",
    "steps": [
      "As duas coordenadas trocam de sinal: giro de 180° (ou homotetia com k = −1)."
    ],
    "common": [],
    "options": [
      "uma rotação de 180° em torno da origem",
      "uma reflexão no eixo x",
      "uma translação",
      "uma homotetia com k = 2"
    ]
  },
  {
    "id": 87,
    "level": 6,
    "title": "Nível 6",
    "question": "A regra \\((x,\\ y) \\to (y,\\ x)\\) descreve:",
    "answer": "uma reflexão na reta y = x",
    "hint": "Compare as coordenadas.",
    "steps": [
      "x e y trocam de lugar: reflexão em y = x."
    ],
    "common": [],
    "options": [
      "uma reflexão na reta y = x",
      "uma translação",
      "uma rotação de 180°",
      "uma homotetia"
    ]
  },
  {
    "id": 88,
    "level": 6,
    "title": "Nível 6",
    "question": "Uma figura foi movida para outro lugar, ficou do mesmo tamanho e não ficou espelhada nem girada. Foi:",
    "answer": "uma translação",
    "hint": "Compare as coordenadas.",
    "steps": [
      "Só mudou de posição: translação."
    ],
    "common": [],
    "options": [
      "uma translação",
      "uma reflexão",
      "uma homotetia",
      "uma rotação"
    ]
  },
  {
    "id": 89,
    "level": 6,
    "title": "Nível 6",
    "question": "A figura ficou do mesmo tamanho, mas “do lado oposto”, como num espelho. Foi:",
    "answer": "uma reflexão",
    "hint": "Compare as coordenadas.",
    "steps": [
      "Efeito de espelho: reflexão."
    ],
    "common": [],
    "options": [
      "uma reflexão",
      "uma translação",
      "uma homotetia",
      "uma rotação de 360°"
    ]
  },
  {
    "id": 90,
    "level": 6,
    "title": "Nível 6",
    "question": "A figura ficou com a mesma forma, mas maior. Foi:",
    "answer": "uma homotetia com k > 1",
    "hint": "Compare as coordenadas.",
    "steps": [
      "Só a homotetia muda o tamanho."
    ],
    "common": [],
    "options": [
      "uma homotetia com k > 1",
      "uma translação",
      "uma reflexão",
      "uma rotação"
    ]
  },
  {
    "id": 91,
    "level": 6,
    "title": "Nível 6",
    "question": "Quais transformações preservam o tamanho da figura (são isometrias)?",
    "answer": "translação, reflexão e rotação",
    "hint": "Qual não muda o tamanho?",
    "steps": [
      "Translação, reflexão e rotação preservam distâncias; a homotetia muda o tamanho."
    ],
    "common": [],
    "options": [
      "translação, reflexão e rotação",
      "translação e homotetia",
      "reflexão e homotetia",
      "só a rotação"
    ]
  },
  {
    "id": 92,
    "level": 6,
    "title": "Nível 6",
    "question": "Os pontos A(2, 1) e B(5, 3) foram levados a A′(2, −1) e B′(5, −3). A transformação é:",
    "answer": "reflexão no eixo x",
    "hint": "Compare os x e os y.",
    "steps": [
      "Os x ficaram iguais e os y trocaram de sinal."
    ],
    "common": [],
    "options": [
      "reflexão no eixo x",
      "reflexão no eixo y",
      "rotação de 180°",
      "translação"
    ]
  },
  {
    "id": 93,
    "level": 6,
    "title": "Nível 6",
    "question": "O ponto A(1, 2) foi levado a A′(−2, 1). A transformação pode ser:",
    "answer": "rotação de 90° anti-horária",
    "hint": "Teste a regra (−y, x).",
    "steps": [
      "Regra de 90°: \\((1,\\ 2) \\to (-2,\\ 1)\\) ✓."
    ],
    "common": [],
    "options": [
      "rotação de 90° anti-horária",
      "rotação de 180°",
      "reflexão no eixo x",
      "translação"
    ]
  },
  {
    "id": 94,
    "level": 6,
    "title": "Nível 6",
    "question": "Uma homotetia de centro na origem leva A(1, 2) a A′(3, 6). Qual é a razão k?",
    "answer": "3",
    "hint": "Divida.",
    "steps": [
      "\\(k = \\dfrac{3}{1} = 3\\) e \\(\\dfrac{6}{2} = 3\\)."
    ],
    "common": []
  },
  {
    "id": 95,
    "level": 6,
    "title": "Nível 6",
    "question": "Uma translação leva A(1, 2) a A′(4, 6). Qual é a soma a + b do vetor?",
    "answer": "7",
    "hint": "Imagem − original.",
    "steps": [
      "\\(a = 3\\) e \\(b = 4\\).",
      "\\(3 + 4 = 7\\)."
    ],
    "common": []
  },
  {
    "id": 96,
    "level": 6,
    "title": "Nível 6",
    "question": "A(0, 0) e B(3, 4) sofrem uma rotação de 90° em torno da origem. Quanto mede A′B′?",
    "answer": "5",
    "hint": "Rotação não muda distância.",
    "steps": [
      "A rotação preserva distâncias: \\(A'B' = AB = \\sqrt{9 + 16} = 5\\)."
    ],
    "common": []
  },
  {
    "id": 97,
    "level": 6,
    "title": "Nível 6",
    "question": "Qual das transformações inverte a orientação da figura?",
    "answer": "a reflexão",
    "hint": "Espelho.",
    "steps": [
      "Só a reflexão vira a figura “do avesso” (e a homotetia com k < 0 equivale a uma ampliação seguida de um giro de 180°, que mantém a orientação)."
    ],
    "common": [],
    "options": [
      "a reflexão",
      "a translação",
      "a rotação",
      "a homotetia com k > 0"
    ]
  },
  {
    "id": 98,
    "level": 7,
    "title": "Nível 7",
    "question": "O ponto \\((1,\\ 4)\\) sofre primeiro uma translação pelo vetor (2, 3) e depois uma reflexão no eixo x. Qual é a coordenada y final?",
    "answer": "-7",
    "hint": "Uma de cada vez.",
    "steps": [
      "1ª: \\((1 + 2,\\ 4 + 3) = (3,\\ 7)\\).",
      "2ª: eixo x: \\((3,\\ -7)\\)."
    ],
    "common": []
  },
  {
    "id": 99,
    "level": 7,
    "title": "Nível 7",
    "question": "Agora a ordem contrária: primeiro a reflexão no eixo x e depois a translação pelo vetor (2, 3), no ponto \\((1,\\ 4)\\). Qual é a coordenada y final?",
    "answer": "-1",
    "hint": "Primeiro o espelho.",
    "steps": [
      "1ª: reflexão no eixo x: \\((1,\\ -4)\\).",
      "2ª: translação: \\((1 + 2,\\ -4 + 3) = (3,\\ -1)\\).",
      "Compare com o exercício anterior (\\(-7\\)): a ordem importa!"
    ],
    "common": []
  },
  {
    "id": 100,
    "level": 7,
    "title": "Nível 7",
    "question": "O ponto \\((2,\\ 5)\\) gira 90° e depois gira mais 90° (anti-horário, em torno da origem). Qual é a coordenada x final?",
    "answer": "-2",
    "hint": "Dois de 90° = 180°.",
    "steps": [
      "1º giro: \\((-5,\\ 2)\\).",
      "2º giro: \\((-2,\\ -5)\\).",
      "Dois giros de 90° = um giro de 180°."
    ],
    "common": []
  },
  {
    "id": 101,
    "level": 7,
    "title": "Nível 7",
    "question": "O ponto \\((3,\\ 1)\\) gira 90° anti-horário em torno da origem e, em seguida, é refletido no eixo x. Qual é a coordenada y final?",
    "answer": "-3",
    "hint": "Gire, depois espelhe.",
    "steps": [
      "Giro: \\((-1,\\ 3)\\).",
      "Reflexão no eixo x: \\((-1,\\ -3)\\)."
    ],
    "common": []
  },
  {
    "id": 102,
    "level": 7,
    "title": "Nível 7",
    "question": "O ponto \\((4,\\ -2)\\) é refletido no eixo y e depois no eixo x. Qual é a coordenada y final?",
    "answer": "2",
    "hint": "Duas reflexões seguidas.",
    "steps": [
      "Eixo y: \\((-4,\\ -2)\\).",
      "Eixo x: \\((-4,\\ 2)\\).",
      "Duas reflexões em eixos perpendiculares = rotação de 180°."
    ],
    "common": []
  },
  {
    "id": 103,
    "level": 7,
    "title": "Nível 7",
    "question": "Uma translação pelo vetor (4, 0) é seguida de outra pelo vetor (−1, 3). Em que coordenada x o ponto \\((1,\\ 1)\\) termina?",
    "answer": "4",
    "hint": "Some os vetores.",
    "steps": [
      "Soma dos vetores: \\((4 - 1,\\ 0 + 3) = (3,\\ 3)\\).",
      "\\(1 + 3 = 4\\)."
    ],
    "common": []
  },
  {
    "id": 104,
    "level": 7,
    "title": "Nível 7",
    "question": "O ponto \\((3,\\ 2)\\) sofre uma homotetia de centro na origem e k = 2 e depois uma translação pelo vetor (1, −1). Qual é a coordenada x final?",
    "answer": "7",
    "hint": "Primeiro k = 2.",
    "steps": [
      "Homotetia: \\((6,\\ 4)\\).",
      "Translação: \\((7,\\ 3)\\)."
    ],
    "common": []
  },
  {
    "id": 105,
    "level": 7,
    "title": "Nível 7",
    "question": "O ponto \\((3,\\ 2)\\) sofre primeiro uma translação pelo vetor (1, −1) e depois uma homotetia de centro na origem e k = 2. Qual é a coordenada x final?",
    "answer": "8",
    "hint": "Ordem contrária.",
    "steps": [
      "Translação: \\((4,\\ 1)\\).",
      "Homotetia: \\((8,\\ 2)\\).",
      "Diferente do exercício anterior (\\(7\\))."
    ],
    "common": []
  },
  {
    "id": 106,
    "level": 7,
    "title": "Nível 7",
    "question": "O ponto \\((0,\\ 2)\\) é refletido na reta x = 1 e depois na reta x = 4. Qual é a coordenada x final?",
    "answer": "6",
    "hint": "Reflita duas vezes.",
    "steps": [
      "Em x = 1: \\(2 \\cdot 1 - 0 = 2\\), ponto \\((2,\\ 2)\\).",
      "Em x = 4: \\(2 \\cdot 4 - 2 = 6\\).",
      "Duas reflexões em retas paralelas = translação de \\(2 \\cdot 3 = 6\\)."
    ],
    "common": []
  },
  {
    "id": 107,
    "level": 7,
    "title": "Nível 7",
    "question": "O ponto \\((2,\\ 3)\\) é refletido na reta y = x e depois no eixo x. Qual é a coordenada y final?",
    "answer": "-2",
    "hint": "Troque x e y, depois mude o sinal do y.",
    "steps": [
      "y = x: \\((3,\\ 2)\\).",
      "Eixo x: \\((3,\\ -2)\\)."
    ],
    "common": []
  },
  {
    "id": 108,
    "level": 7,
    "title": "Nível 7",
    "question": "Duas reflexões seguidas em retas que se cortam equivalem a:",
    "answer": "uma rotação",
    "hint": "Pense nos eixos x e y.",
    "steps": [
      "Em eixos paralelos o resultado é uma translação; em eixos que se cortam, uma rotação em torno do ponto de encontro."
    ],
    "common": [],
    "options": [
      "uma rotação",
      "uma translação",
      "uma homotetia",
      "nenhuma transformação"
    ]
  },
  {
    "id": 109,
    "level": 7,
    "title": "Nível 7",
    "question": "A ordem em que aplicamos duas transformações:",
    "answer": "pode mudar o resultado",
    "hint": "Compare os exercícios.",
    "steps": [
      "Os exercícios de translação + reflexão mostram resultados diferentes conforme a ordem."
    ],
    "common": [],
    "options": [
      "pode mudar o resultado",
      "nunca muda o resultado",
      "só importa para homotetias",
      "só importa para translações"
    ]
  },
  {
    "id": 110,
    "level": 7,
    "title": "Nível 7",
    "question": "O ponto \\((1,\\ 0)\\) gira 180° e depois mais 90° (anti-horário, em torno da origem). Qual é a coordenada y final?",
    "answer": "-1",
    "hint": "Dois giros.",
    "steps": [
      "180°: \\((-1,\\ 0)\\).",
      "90°: \\((0,\\ -1)\\).",
      "Total de 270°: \\((1,\\ 0) \\to (0,\\ -1)\\) ✓."
    ],
    "common": []
  },
  {
    "id": 111,
    "level": 7,
    "title": "Nível 7",
    "question": "Um ponto P sofreu uma translação pelo vetor (3, −2) e depois uma reflexão no eixo y, chegando a (−5, 1). Qual é a soma das coordenadas de P?",
    "answer": "5",
    "hint": "Trabalhe de trás para frente.",
    "steps": [
      "Desfaça a reflexão: \\((5,\\ 1)\\).",
      "Desfaça a translação: \\((5 - 3,\\ 1 + 2) = (2,\\ 3)\\).",
      "\\(2 + 3 = 5\\)."
    ],
    "common": []
  },
  {
    "id": 112,
    "level": 7,
    "title": "Nível 7",
    "question": "Um retângulo de área 6 sofre uma translação e depois uma rotação de 90°. Qual é a área da imagem final?",
    "answer": "6",
    "hint": "Isometrias preservam área.",
    "steps": [
      "Translação e rotação não mudam o tamanho: a área continua \\(6\\)."
    ],
    "common": []
  },
  {
    "id": 113,
    "level": 8,
    "title": "Nível 8",
    "question": "Um robô começa em (0, 0), anda 4 para a direita e 3 para cima, e depois gira 90° anti-horário em torno da origem. Qual é a coordenada x final?",
    "answer": "-3",
    "hint": "Primeiro ande, depois gire.",
    "steps": [
      "Translação: \\((4,\\ 3)\\).",
      "Giro de 90°: \\((x,\\ y) \\to (-y,\\ x) = (-3,\\ 4)\\)."
    ],
    "common": []
  },
  {
    "id": 114,
    "level": 8,
    "title": "Nível 8",
    "question": "Um triângulo tem vértices A(1, 1), B(4, 1) e C(1, 5). Uma homotetia de razão 2 e centro em A leva o triângulo a A′B′C′. Qual é o perímetro de A′B′C′?",
    "answer": "24",
    "hint": "Perímetro × k.",
    "steps": [
      "Lados: \\(AB = 3\\), \\(AC = 4\\), \\(BC = 5\\). Perímetro \\(12\\).",
      "\\(12 \\cdot 2 = 24\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 240 268",
        "style": "width:240px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Triângulo ABC"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "246",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "246",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "246",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "246",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "246",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "246",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "190",
            "y1": "246",
            "x2": "190",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "218",
            "y1": "246",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "246",
            "x2": "218",
            "y2": "246",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "218",
            "x2": "218",
            "y2": "218",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "218",
            "y2": "190",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "218",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "218",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "218",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "218",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "218",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "218",
            "y2": "190",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "246",
            "x2": "78",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "218,190 211,186 211,194",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "78,22 74,29 82,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "216",
            "y": "181",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "87",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "162",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "190",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "218",
            "y": "204",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "250",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "222",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "166",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "138",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "110",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "6"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "203",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "106,162 190,162 106,50",
            "fill": "#e0e7ff",
            "fill-opacity": "0.85",
            "stroke": "#4f46e5",
            "stroke-width": "2.5",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "106",
            "cy": "162",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "190",
            "cy": "162",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "106",
            "cy": "50",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "98.2",
            "y": "176.4",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "A"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "200.8",
            "y": "173.2",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "B"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "101.4",
            "y": "41.8",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "C"
          ]
        }
      ]
    }
  },
  {
    "id": 115,
    "level": 8,
    "title": "Nível 8",
    "question": "O triângulo de vértices (0, 0), (4, 0) e (0, 3) sofre uma homotetia de razão −2 com centro na origem. Qual é a área da imagem?",
    "answer": "24",
    "hint": "k² é sempre positivo.",
    "steps": [
      "Área original: \\(\\dfrac{4 \\cdot 3}{2} = 6\\).",
      "\\(k^2 = (-2)^2 = 4\\) ⇒ \\(6 \\cdot 4 = 24\\)."
    ],
    "common": [
      {
        "value": "12/1",
        "message": "A área é multiplicada por k² = 4."
      }
    ]
  },
  {
    "id": 116,
    "level": 8,
    "title": "Nível 8",
    "question": "O ponto P(1, 5) é refletido na reta x = 4 e a imagem é transladada pelo vetor (−2, 0). Qual é a coordenada x final?",
    "answer": "5",
    "hint": "Uma de cada vez.",
    "steps": [
      "Reflexão: \\(2 \\cdot 4 - 1 = 7\\), ponto \\((7,\\ 5)\\).",
      "Translação: \\(7 - 2 = 5\\)."
    ],
    "common": []
  },
  {
    "id": 117,
    "level": 8,
    "title": "Nível 8",
    "question": "Ponte para a trigonometria. O ponto (1, 0) é girado 270° anti-horário em torno da origem. Qual é a coordenada y da imagem?",
    "answer": "-1",
    "hint": "Regra de 270°.",
    "steps": [
      "270°: \\((x,\\ y) \\to (y,\\ -x)\\) ⇒ \\((1,\\ 0) \\to (0,\\ -1)\\).",
      "Esse ponto é \\((\\cos 270^\\circ,\\ \\sin 270^\\circ)\\): você vai reencontrá-lo na trigonometria."
    ],
    "common": []
  },
  {
    "id": 118,
    "level": 8,
    "title": "Nível 8",
    "question": "O ponto P(3, 4) gira 90° anti-horário em torno da origem e vira P′. Qual é a soma das coordenadas de P′?",
    "answer": "-1",
    "hint": "Imagem primeiro.",
    "steps": [
      "Imagem: \\((-4,\\ 3)\\).",
      "\\(-4 + 3 = -1\\). (E \\(OP' = OP = 5\\).)"
    ],
    "common": []
  },
  {
    "id": 119,
    "level": 8,
    "title": "Nível 8",
    "question": "Um quadrado tem vértices (1, 1), (3, 1), (3, 3) e (1, 3). Ele gira 90° anti-horário em torno do seu centro (2, 2). O vértice (1, 1) vai para um vértice de coordenada x igual a:",
    "answer": "3",
    "hint": "O quadrado coincide com ele mesmo.",
    "steps": [
      "Vetor do centro até (1, 1): \\((-1,\\ -1)\\).",
      "Gira 90° com a regra \\((u,\\ w) \\to (-w,\\ u)\\): \\((1,\\ -1)\\).",
      "Soma o centro: \\((2 + 1,\\ 2 - 1) = (3,\\ 1)\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 212 212",
        "style": "width:212px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Quadrado com centro (2, 2)"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "190",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "190",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "190",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "190",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "190",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "190",
            "y1": "190",
            "x2": "190",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "190",
            "y2": "190",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "190",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "190",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "190",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "190",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "190",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "190",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "190",
            "y2": "134",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "190",
            "x2": "78",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "190,134 183,130 183,138",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "78,22 74,29 82,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "188",
            "y": "125",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "87",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "162",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "190",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "194",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "166",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "110",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "147",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "106,106 162,106 162,50 106,50",
            "fill": "#e0e7ff",
            "fill-opacity": "0.85",
            "stroke": "#4f46e5",
            "stroke-width": "2.5",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "106",
            "cy": "106",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "162",
            "cy": "106",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "162",
            "cy": "50",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "106",
            "cy": "50",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "134",
            "cy": "78",
            "r": "5",
            "fill": "#16a34a"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134.0",
            "y": "82.0",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#16a34a",
            "text-anchor": "middle"
          },
          "children": [
            "centro"
          ]
        }
      ]
    }
  },
  {
    "id": 120,
    "level": 8,
    "title": "Nível 8",
    "question": "Homotetia de centro A(2, 2) e razão 3. O ponto B(3, 2) vai para B′. Qual é a distância AB′?",
    "answer": "3",
    "hint": "Distância × 3.",
    "steps": [
      "Vetor \\((1,\\ 0)\\) × 3 = \\((3,\\ 0)\\) ⇒ \\(B' = (5,\\ 2)\\).",
      "\\(AB' = 3 \\cdot AB = 3 \\cdot 1 = 3\\)."
    ],
    "common": []
  },
  {
    "id": 121,
    "level": 8,
    "title": "Nível 8",
    "question": "Um mosaico repete um ladrilho por translações de vetor (4, 0). Se o 1º ladrilho tem um canto em (1, 1), qual é a coordenada x desse canto no 5º ladrilho?",
    "answer": "17",
    "hint": "Quantas translações?",
    "steps": [
      "Do 1º ao 5º há 4 translações: \\(1 + 4 \\cdot 4 = 17\\)."
    ],
    "common": [
      {
        "value": "21/1",
        "message": "O 5º ladrilho vem depois de 4 translações, não 5."
      }
    ]
  },
  {
    "id": 122,
    "level": 8,
    "title": "Nível 8",
    "question": "Uma imagem de 20 por 15 pixels recebe um zoom de 3× (homotetia de razão 3). Quantos pixels tem a imagem ampliada?",
    "answer": "2700",
    "hint": "Área × k².",
    "steps": [
      "Lados: \\(60 \\times 45\\).",
      "\\(60 \\cdot 45 = 2\\,700\\) (= \\(300 \\cdot 9\\))."
    ],
    "common": [
      {
        "value": "900/1",
        "message": "900 seria 3 × 300. Cada lado triplica, então a área vezes 9."
      }
    ]
  },
  {
    "id": 123,
    "level": 8,
    "title": "Nível 8",
    "question": "Desafio. O ponto P(a, b) girado 90° anti-horário em torno da origem vai para (−2, 5). Quanto vale a · b?",
    "answer": "10",
    "hint": "Use a regra (−y, x) ao contrário.",
    "steps": [
      "\\((-b,\\ a) = (-2,\\ 5)\\) ⇒ \\(b = 2\\) e \\(a = 5\\).",
      "\\(a \\cdot b = 10\\)."
    ],
    "common": []
  },
  {
    "id": 124,
    "level": 8,
    "title": "Nível 8",
    "question": "Desafio. Uma homotetia de centro na origem leva A(1, 2) a A′(3, 6). Se B(4, 6) está a 5 de A, quanto mede A′B′?",
    "answer": "15",
    "hint": "k = 3.",
    "steps": [
      "\\(k = 3\\).",
      "\\(A'B' = 3 \\cdot AB = 3 \\cdot 5 = 15\\)."
    ],
    "common": []
  },
  {
    "id": 125,
    "level": 8,
    "title": "Nível 8",
    "question": "Uma peça em (2, 1) é refletida no eixo y, depois transladada pelo vetor (0, 4) e por fim girada 180° em torno da origem. Qual é a coordenada y final?",
    "answer": "-5",
    "hint": "Três passos.",
    "steps": [
      "Eixo y: \\((-2,\\ 1)\\).",
      "Translação: \\((-2,\\ 5)\\).",
      "Giro de 180°: \\((2,\\ -5)\\)."
    ],
    "common": []
  },
  {
    "id": 126,
    "level": 8,
    "title": "Nível 8",
    "question": "O triângulo A(1, 1), B(4, 1), C(2, 3) é transladado pelo vetor (−3, 2) e depois refletido no eixo y. Qual é a coordenada x de B″?",
    "answer": "-1",
    "hint": "B′ primeiro.",
    "steps": [
      "Translação: \\(B' = (4 - 3,\\ 1 + 2) = (1,\\ 3)\\).",
      "Eixo y: \\(B'' = (-1,\\ 3)\\)."
    ],
    "common": [],
    "figure": {
      "tag": "svg",
      "attrs": {
        "viewBox": "0 0 240 212",
        "style": "width:240px;max-width:100%;height:auto",
        "role": "img",
        "aria-label": "Triângulo ABC"
      },
      "children": [
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "22",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "50",
            "y1": "190",
            "x2": "50",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "190",
            "x2": "78",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "106",
            "y1": "190",
            "x2": "106",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "134",
            "y1": "190",
            "x2": "134",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "162",
            "y1": "190",
            "x2": "162",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "190",
            "y1": "190",
            "x2": "190",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "218",
            "y1": "190",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "190",
            "x2": "218",
            "y2": "190",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "162",
            "x2": "218",
            "y2": "162",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "218",
            "y2": "134",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "106",
            "x2": "218",
            "y2": "106",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "78",
            "x2": "218",
            "y2": "78",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "50",
            "x2": "218",
            "y2": "50",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "22",
            "x2": "218",
            "y2": "22",
            "stroke": "#e2e8f0",
            "stroke-width": "1"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "22",
            "y1": "134",
            "x2": "218",
            "y2": "134",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "line",
          "attrs": {
            "x1": "78",
            "y1": "190",
            "x2": "78",
            "y2": "22",
            "stroke": "#475569",
            "stroke-width": "2"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "218,134 211,130 211,138",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "78,22 74,29 82,29",
            "fill": "#475569"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "216",
            "y": "125",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569",
            "text-anchor": "end"
          },
          "children": [
            "x"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "87",
            "y": "32",
            "font-size": "13",
            "font-weight": "700",
            "fill": "#475569"
          },
          "children": [
            "y"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "22",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "50",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "106",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "134",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "162",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "190",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "218",
            "y": "148",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "middle"
          },
          "children": [
            "5"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "194",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "166",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "-1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "110",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "1"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "82",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "2"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "54",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "3"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "26",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "4"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "72",
            "y": "147",
            "font-size": "11",
            "fill": "#64748b",
            "text-anchor": "end"
          },
          "children": [
            "0"
          ]
        },
        {
          "tag": "polygon",
          "attrs": {
            "points": "106,106 190,106 134,50",
            "fill": "#e0e7ff",
            "fill-opacity": "0.85",
            "stroke": "#4f46e5",
            "stroke-width": "2.5",
            "stroke-linejoin": "round"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "106",
            "cy": "106",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "190",
            "cy": "106",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "circle",
          "attrs": {
            "cx": "134",
            "cy": "50",
            "r": "3.6",
            "fill": "#4f46e5"
          },
          "children": []
        },
        {
          "tag": "text",
          "attrs": {
            "x": "94.4",
            "y": "115.8",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "A"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "202.1",
            "y": "114.8",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "B"
          ]
        },
        {
          "tag": "text",
          "attrs": {
            "x": "130.8",
            "y": "41.4",
            "font-size": "14",
            "font-weight": "700",
            "fill": "#4f46e5",
            "text-anchor": "middle"
          },
          "children": [
            "C"
          ]
        }
      ]
    }
  }
] as const;

export const transformacoesGeometricasQuickChecks = {
  "0": {
    "q": "Um triângulo de lados \\(3\\), \\(4\\) e \\(5\\) sofre uma reflexão (uma isometria). Qual é o perímetro da imagem?",
    "a": "12"
  },
  "1": {
    "q": "Uma homotetia de razão \\(2\\) amplia um quadrado de lado \\(3\\). Quanto mede o lado da imagem?",
    "a": "6"
  },
  "2": {
    "q": "O ponto \\((-3,\\,4)\\) está em qual quadrante? (Responda com o número 1, 2, 3 ou 4.)",
    "a": "2"
  },
  "3": {
    "q": "No triângulo \\(A(1,1)\\), \\(B(4,1)\\), \\(C(2,3)\\), quanto mede o lado \\(AB\\)?",
    "a": "3"
  },
  "4": {
    "q": "O ponto \\(P(2,\\,5)\\) é transladado pelo vetor \\((3,\\,-4)\\). Qual é a soma das coordenadas de \\(P'\\)?",
    "a": "6"
  },
  "5": {
    "q": "\\(A(1,\\,1)\\) foi transladado para \\(A'(5,\\,3)\\). Se o vetor é \\((a,\\,b)\\), quanto vale \\(a + b\\)?",
    "a": "6"
  },
  "6": {
    "q": "O ponto \\(P(3,\\,-5)\\) é refletido no eixo x. Qual é a ordenada de \\(P'\\)?",
    "a": "5"
  },
  "7": {
    "q": "O ponto \\((1,\\,2)\\) é refletido na reta vertical \\(x = 4\\). Qual é a abscissa da imagem?",
    "a": "7"
  },
  "8": {
    "q": "O ponto \\((3,\\,1)\\) gira \\(90^\\circ\\) (anti-horário) em torno da origem. Qual é a ordenada da imagem?",
    "a": "3"
  },
  "9": {
    "q": "O ponto \\((-4,\\,2)\\) gira \\(180^\\circ\\) em torno da origem. Qual é a abscissa da imagem?",
    "a": "4"
  },
  "10": {
    "q": "Uma homotetia tem centro na origem e razão \\(k = 3\\). Qual é a abscissa (o \\(x\\)) da imagem do ponto \\(P(2,3)\\)?",
    "a": "6"
  },
  "11": {
    "q": "Um triângulo tem área \\(6\\ \\text{cm}^2\\). Ele é ampliado por uma homotetia de razão \\(k = 3\\). Qual é a área da imagem, em \\(\\text{cm}^2\\)?",
    "a": "54"
  },
  "12": {
    "q": "Homotetia de centro \\(C(1,1)\\) e razão \\(k = 2\\). Qual é a ordenada (o \\(y\\)) da imagem do ponto \\(P(4,3)\\)? (Use \\(y' = q + k(y-q)\\).)",
    "a": "5"
  },
  "13": {
    "q": "O ponto \\(A(2,3)\\) é refletido no eixo \\(x\\) e depois transladado com vetor \\((4,1)\\). Qual é a ordenada (o \\(y\\)) do ponto final?",
    "a": "-2"
  },
  "14": {
    "q": "Uma figura é refletida na reta \\(x = 1\\) e depois na reta \\(x = 5\\). Ela equivale a uma translação de quantas unidades?",
    "a": "8"
  },
  "15": {
    "q": "Um retângulo de \\(6\\ \\text{cm}\\) por \\(4\\ \\text{cm}\\) é ampliado com razão \\(k = 1{,}5\\). Qual é a área da imagem, em \\(\\text{cm}^2\\)?",
    "a": "54"
  },
  "16": {
    "q": "O ponto \\(P(3,2)\\) é refletido na reta \\(y = x\\) e depois transladado com vetor \\((-1,4)\\). Qual é a ordenada (o \\(y\\)) do ponto final?",
    "a": "7"
  },
  "17": {
    "q": "Girando o ponto \\((1,0)\\) de \\(270^\\circ\\) no sentido anti-horário em torno da origem, qual é a ordenada (o \\(y\\)) do ponto obtido?",
    "a": "-1"
  }
} as const;
