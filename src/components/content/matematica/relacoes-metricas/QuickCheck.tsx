import { useState } from "react";
import { MathText } from "../../../Math/MathRenderer";

const checks = [
  ["Uma foto de \\(10\\text{ cm}\\) por \\(15\\text{ cm}\\) é ampliada e o lado menor passa a medir \\(30\\text{ cm}\\). Quanto mede o lado maior, em cm?", "45"],
  ["Resolva a proporção \\(\\dfrac{5}{x} = \\dfrac{10}{14}\\). Quanto vale \\(x\\)?", "7"],
  ["Dois quadrados têm lados \\(3\\text{ cm}\\) e \\(12\\text{ cm}\\). Quantas vezes a área do maior é maior que a do menor?", "16"],
  ["Em um mapa com escala \\(1 : 50\\,000\\), uma estrada mede \\(4\\text{ cm}\\). Quantos quilômetros ela tem na realidade?", "2"],
  ["Dois triângulos são semelhantes. O primeiro tem lados \\(6\\), \\(8\\) e \\(10\\). No segundo, o lado correspondente ao 6 mede 9. Quanto mede o lado correspondente ao 10?", "15"],
  ["Dois triângulos têm ângulos de \\(40^\\circ\\) e \\(75^\\circ\\). Quanto mede o terceiro ângulo de cada um, em graus?", "65"],
  ["Retas paralelas cortam duas transversais. Em uma, \\(AB = 4\\) e \\(BC = 6\\). Na outra, \\(DE = 6\\). Quanto vale \\(EF\\)?", "9"],
  ["Em um triângulo \\(ABC\\), \\(DE \\parallel BC\\) com \\(AD = 3\\), \\(DB = 6\\) e \\(AE = 2\\). Quanto mede \\(EC\\)?", "4"],
  ["No mesmo instante, uma vara de \\(1{,}5\\text{ m}\\) tem sombra de \\(2{,}5\\text{ m}\\) e um poste tem sombra de \\(10\\text{ m}\\). Qual é a altura do poste, em metros?", "6"],
  ["Na planta de uma casa (escala \\(1 : 200\\)), uma sala tem \\(5\\text{ cm}\\) de comprimento. Quantos metros ela tem na realidade?", "10"],
  ["Na hipotenusa \\(BC = 13\\), a projeção do cateto \\(c\\) mede \\(m = 4\\). Quanto mede a outra projeção \\(n\\)?", "9"],
  ["O triângulo \\(ABC\\) é retângulo em \\(A\\), com \\(AB = 6\\), \\(AC = 8\\) e \\(BC = 10\\). Como \\(\\triangle ABC \\sim \\triangle HBA\\) (BC ↔ BA e AC ↔ HA), vale \\(\\dfrac{AC}{HA} = \\dfrac{BC}{BA}\\). Quanto mede a altura \\(HA\\)?", "4,8"],
  ["Em um triângulo retângulo, as projeções dos catetos sobre a hipotenusa medem \\(m = 4\\) e \\(n = 9\\). Quanto mede a altura \\(h\\)?", "6"],
  ["Um triângulo retângulo tem hipotenusa \\(a = 10\\) e cateto \\(c = 6\\). Pela relação \\(c^2 = a \\cdot m\\), quanto mede a projeção \\(m\\)?", "3,6"],
  ["Os catetos de um triângulo retângulo medem \\(9\\text{ cm}\\) e \\(12\\text{ cm}\\). Quanto mede a altura relativa à hipotenusa, em cm?", "7,2"],
  ["Qual é a média geométrica de \\(5\\) e \\(20\\)?", "10"],
  ["Dois triângulos semelhantes têm razão de semelhança \\(3\\). O menor tem área \\(8\\text{ cm}^2\\). Qual é a área do maior, em cm²?", "72"],
  ["Um triângulo semelhante ao \\(3\\text{-}4\\text{-}5\\) tem hipotenusa \\(20\\). Quanto mede o cateto oposto a \\(\\theta\\) (o de medida \\(3\\) no triângulo original)?", "12"],
] as const;

export function RelacoesMetricasQuickCheck({ index }: { index: number }) {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [question, answer] = checks[index];
  const check = () => setFeedback(value.replace(",", ".").trim() === answer.replace(",", ".") ? "✓ Certo! Pode seguir." : "✗ Ainda não. Releia a lição e tente de novo.");
  return <div className="mt-5 rounded-2xl border border-dashed border-sky-300 bg-sky-50 p-4">
    <div className="text-[11px] font-black uppercase tracking-widest text-sky-700">✋ Teste rápido</div>
    <p className="mt-2 text-slate-700"><MathText>{question}</MathText></p>
    <div className="mt-3 flex flex-wrap items-center gap-2">
      <input value={value} onChange={e=>setValue(e.target.value)} onKeyDown={e=>e.key==="Enter"&&check()} placeholder="Sua resposta" className="w-36 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm" />
      <button onClick={check} className="rounded-lg bg-sky-600 px-3 py-1.5 text-sm font-bold text-white">Conferir</button>
      <button onClick={()=>setShow(true)} className="text-xs text-slate-600 underline">ver resposta</button>
      <span className="text-sm font-bold text-emerald-700">{show ? `Resposta: ${answer}` : feedback}</span>
    </div>
  </div>;
}
