export type ReinforcementExercise = { id: number; level: number; title: string; text: string; ans: number; steps: string[] };
const mathInline = (latex: string) => String.raw`\(${latex}\)`;

        const E: ReinforcementExercise[] = [];
        let exId = 1;
        function rand(min: number, max: number) { return Math.floor(Math.random() * (max - min + 1)) + min; }

        // Helper para criar exercícios
        function pushEx(lvl: number, title: string, textHtml: string, ansVal: number, stepsHtml: string[]) {
            E.push({ id: exId++, level: lvl, title, text: textHtml, ans: ansVal, steps: stepsHtml });
        }

        // Nível 1 (1-20): Simples Direta (Matemática pura) - A1/A2 = B1/x
        for (let i = 0; i < 20; i++) {
            let a1 = rand(2, 15);
            let k = rand(2, 8); // Fator de proporção para dar inteiro
            let a2 = a1 * k;
            let b1 = rand(5, 30);
            let ans = b1 * k;

            let text = `Resolva a proporção direta para achar o valor de x:\n ${mathInline(`\\frac{${a1}}{${a2}} = \\frac{${b1}}{x}`)}`;
            let steps = [
                `Como é uma proporção direta (frações iguais), multiplicamos cruzado.`,
                `\( ${a1} \\cdot x = ${a2} \\cdot ${b1} \)`,
                `\( ${a1}x = ${a2 * b1} \)`,
                `\( x = \\frac{${a2 * b1}}{${a1}} = ${ans} \)`
            ];
            pushEx(1, "Proporção Direta", text, ans, steps);
        }

        // Nível 2 (21-40): Simples Inversa (Matemática pura) - A1*B1 = A2*x
        for (let i = 0; i < 20; i++) {
            let k = rand(2, 6);
            let a2 = rand(2, 10);
            let a1 = a2 * k; // A1 é múltiplo de A2
            let ans = rand(5, 20); // Valor de x
            let b1 = (a2 * ans) / a1;

            // Garantir que B1 é inteiro recalculando.
            ans = rand(2, 10) * a1;
            b1 = (a2 * ans) / a1;

            let text = `Estas grandezas são INVERSAMENTE proporcionais. Ache o x:\n Grandeza A: ${a1} \(\\to\) ${a2}\n Grandeza B: ${b1} \(\\to\) x`;
            let steps = [
                `Por serem inversas, se montarmos as frações, invertemos a primeira: \( \\frac{${a2}}{${a1}} = \\frac{${b1}}{x} \).`,
                `Multiplicando cruzado: \( ${a2} \\cdot x = ${a1} \\cdot ${b1} \)`,
                `\( ${a2}x = ${a1 * b1} \)`,
                `\( x = \\frac{${a1 * b1}}{${a2}} = ${ans} \)`
            ];
            pushEx(2, "Proporção Inversa", text, ans, steps);
        }

        // Nível 3 (41-60): Problemas de Direta (Texto)
        const wordsDir = [
            { n1: "kg de maçã", n2: "custam R$" }, { n1: "litros de tinta", n2: "pintam m²" },
            { n1: "máquinas", n2: "produzem peças" }, { n1: "horas trabalhadas", n2: "rendem R$" }
        ];
        for (let i = 0; i < 20; i++) {
            let template = wordsDir[rand(0, wordsDir.length - 1)];
            let a1 = rand(2, 10);
            let k = rand(2, 6);
            let a2 = a1 * k;
            let b1 = rand(15, 80);
            let ans = b1 * k;

            let text = `Se ${a1} ${template.n1} ${template.n2} ${b1}, então ${a2} ${template.n1} ${template.n2} quanto?`;
            let steps = [
                `Análise: Se aumentamos os ${template.n1}, o(a) ${template.n2} também aumenta. Proporção Direta. (Setas ↓ ↓)`,
                `Montamos: \( \\frac{${a1}}{${a2}} = \\frac{${b1}}{x} \)`,
                `Multiplica cruzado: \( ${a1}x = ${a2} \\cdot ${b1} \)`,
                `\( ${a1}x = ${a2 * b1} \\implies x = ${ans} \)`
            ];
            pushEx(3, "Problema Prático (Direta)", text, ans, steps);
        }

        // Nível 4 (61-80): Problemas de Inversa (Texto)
        const wordsInv = [
            { n1: "operários", n2: "levam", n3: "dias para terminar" },
            { n1: "torneiras iguais", n2: "enchem um tanque em", n3: "horas" },
            { n1: "km/h de velocidade", n2: "gastam", n3: "horas na viagem" }
        ];
        for (let i = 0; i < 20; i++) {
            let template = wordsInv[rand(0, wordsInv.length - 1)];
            let k = rand(2, 5);
            let a2 = rand(2, 8);
            let a1 = a2 * k;
            let ans = rand(2, 10); // dias/horas novos
            let b1 = ans * k; // dias/horas antigos (vai demorar mais se a1 for menor, espera, a1 é maior, entao b1 é menor. Ops.)

            // refazer lógica p/ garantir inteiros coerentes
            // a1 * b1 = a2 * x
            a1 = rand(2, 12);
            b1 = rand(10, 40); // tempo inicial
            let total = a1 * b1;
            let divs = [];
            for (let d = 2; d <= total; d++) if (total % d === 0 && d !== a1) divs.push(d);
            a2 = divs[rand(0, Math.min(divs.length - 1, 5))] || a1 * 2; // new operarios
            ans = total / a2; // new tempo

            let text = `Se ${a1} ${template.n1} ${template.n2} ${b1} ${template.n3}, ${a2} ${template.n1} vão levar quanto tempo?`;
            let steps = [
                `Análise: Se temos MAIS ${template.n1}, levaremos MENOS tempo. Proporção Inversa. (Setas ↑ ↓)`,
                `Montamos invertendo a primeira grandeza: \( \\frac{${a2}}{${a1}} = \\frac{${b1}}{x} \)`,
                `Multiplica cruzado: \( ${a2}x = ${a1} \\cdot ${b1} \)`,
                `\( ${a2}x = ${a1 * b1} \\implies x = ${ans} \)`
            ];
            pushEx(4, "Problema Prático (Inversa)", text, ans, steps);
        }

        // Nível 5 (81-100): Composta (3 grandezas)
        // Ex clássico: Operários (Inversa com Dias), Horas/Dia (Inversa com Dias), Muros/Peças (Direta com Dias)
        for (let i = 0; i < 20; i++) {
            // Vamos usar: Maquinas(Inversa p/ dias) - Horas/dia (Inversa p/ dias) - Peças (Direta p/ dias) - Dias(X)
            // Para simplificar gerador e garantir inteiros:
            // Formula: (Maq1 * Hd1 * Dias1) / Pecas1 = (Maq2 * Hd2 * Dias2) / Pecas2
            // Dias2 = (Maq1 * Hd1 * Dias1 * Pecas2) / (Maq2 * Hd2 * Pecas1)

            let isDirProblem = i % 2 === 0;
            let text, steps, ans;

            if (isDirProblem) {
                // Pedreiros (Inv) - Dias (X) - Muros (Dir)
                let p1 = 2, d1 = 10, m1 = 1;
                let p2 = 4, m2 = 3;
                // X = (p1 * d1 * m2) / (p2 * m1) = (2 * 10 * 3) / (4 * 1) = 60 / 4 = 15

                // Randomizar mantendo inteiros
                p1 = rand(2, 6); d1 = rand(5, 15); m1 = rand(1, 3);
                p2 = p1 * rand(2, 3); // dobrou/triplicou pedreiros
                m2 = m1 * rand(2, 4); // dobrou/quadruplicou muros

                ans = (p1 * d1 * m2) / (p2 * m1);
                if (!Number.isInteger(ans)) { ans = Math.round(ans); p2 = 1; m2 = (ans * p2 * m1) / (p1 * d1); } // Correção fallback, though rare needed in real gen, just force it.
                // Forçando matemática pura para não quebrar:
                ans = rand(5, 20); p1 = rand(2, 5); d1 = rand(4, 10); m1 = rand(1, 3); m2 = rand(2, 5);
                p2 = (p1 * d1 * m2) / (ans * m1);
                if (!Number.isInteger(p2)) { p2 = p1; ans = (p1 * d1 * m2) / (p2 * m1); }
                if (!Number.isInteger(ans)) { p1 = 2; d1 = 10; m1 = 1; p2 = 4; m2 = 3; ans = 15; } // Hard fallback

                text = `(Composta) Se ${p1} pedreiros constroem ${m1} muros em ${d1} dias. Quantos dias ${p2} pedreiros levarão para construir ${m2} muros?`;
                steps = [
                    `Temos 3 colunas: Pedreiros, Muros e Dias(X).`,
                    `Analisando com a coluna Dias (X ↓):\n- Mais pedreiros = Menos dias (Inversa ↑).\n- Mais muros = Mais dias (Direta ↓).`,
                    `Equação: Isola a fração do X e inverte a dos pedreiros:\n\( \\frac{${d1}}{x} = \\frac{${p2}}{${p1}} \\cdot \\frac{${m1}}{${m2}} \)`,
                    `\( \\frac{${d1}}{x} = \\frac{${p2 * m1}}{${p1 * m2}} \implies ${p2 * m1}x = ${d1 * p1 * m2} \implies x = ${ans} \)`
                ];
            } else {
                // Maquinas (Inv) - Horas/dia (Inv) - Dias (X)
                let m1 = 4, h1 = 8, d1 = 5; // Total de maq-horas: 4*8*5 = 160
                let m2 = 8, h2 = 4; // x = 160 / (8*4) = 5

                m1 = rand(2, 6); h1 = rand(4, 10); d1 = rand(3, 12);
                let work = m1 * h1 * d1;
                let divs = [];
                for (let j = 2; j <= work; j++) if (work % j === 0) divs.push(j);
                m2 = divs[rand(1, divs.length / 2)] || 2;
                let rem = work / m2;
                let divs2 = [];
                for (let j = 2; j <= rem; j++) if (rem % j === 0) divs2.push(j);
                h2 = divs2[Math.floor(divs2.length / 2)] || 2;
                ans = work / (m2 * h2);

                text = `(Composta) Se ${m1} máquinas, funcionando ${h1} horas por dia, fazem um lote em ${d1} dias. Quantos dias ${m2} máquinas levarão funcionando ${h2} horas por dia?`;
                steps = [
                    `Temos 3 colunas: Máquinas, Horas/Dia e Dias(X).`,
                    `Analisando com a coluna Dias (X ↓):\n- Mais máquinas = Menos dias (Inversa ↑).\n- Mais horas/dia = Menos dias (Inversa ↑).`,
                    `Equação: Isola a fração do X e inverte as outras duas:\n\( \\frac{${d1}}{x} = \\frac{${m2}}{${m1}} \\cdot \\frac{${h2}}{${h1}} \)`,
                    `\( \\frac{${d1}}{x} = \\frac{${m2 * h2}}{${m1 * h1}} \implies ${m2 * h2}x = ${d1 * m1 * h1} \implies x = ${ans} \)`
                ];
            }
            pushEx(5, "Regra de Três Composta", text, ans, steps);
        }

export const reinforcementExercises = E;
