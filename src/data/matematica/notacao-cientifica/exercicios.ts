type SciExercise = { id:number; level:number; title:string; question:string; answer:string; steps:Array<[string,string]>; tolerance:number };
const random = () => Math.random();
const round = (n:number) => Number(n.toPrecision(10));
const inline = (s:string) => String.raw`\(${s}\)`;
const items:SciExercise[] = [];
const add = (level:number,title:string,question:string,answer:number,hint:string,steps:Array<[string,string]>) => items.push({id:items.length+1,level,title,question,answer:String(answer),steps,tolerance:Math.abs(answer)*0.0001});

for (let i=0;i<20;i++) {
  let m=Math.floor(random()*89+10)/10; if(m===10)m=9.9;
  const e=Math.floor(random()*5)+3, num=round(m*10**e);
  add(1,'Converter para Notação Científica',`${num} = ?`,num,'Ex: 3.5*10^4', [['1',`O número é ${num}. A vírgula está oculta no final.`],['2',`A mantissa deve ficar entre 1 e 10, então será ${m}.`],['3',`A vírgula anda ${e} casas para a esquerda. O expoente é positivo: ${e}.`]]);
}
for(let i=0;i<20;i++){
  const m=Math.floor(random()*89+10)/10,e=-(Math.floor(random()*4)+2),num=round(m*10**e),display=num.toFixed(Math.abs(e)+1);
  add(2,'Converter Decimal para Notação',`${display} = ?`,num,'Ex: 4.2*10^-3',[['1',`O número é ${display}.`],['2',`A mantissa deve ficar entre 1 e 10, então será ${m}.`],['3',`A vírgula anda ${Math.abs(e)} casas para a direita. O expoente é ${e}.`]]);
}
for(let i=0;i<20;i++){
  const m=Math.floor(random()*89+10)/10;let e=Math.floor(random()*7)-3;if(e===0)e=2;
  const num=round(m*10**e);
  add(3,'Tirar da Notação Científica',inline(`${m} \\times 10^{${e}}`)+' = ?',num,e>0?'Ex: 4500':'Ex: 0.045',[['1',`A expressão é ${inline(`${m} \\times 10^{${e}}`)}.`],['2',`Como o expoente é ${e}, movemos a vírgula ${Math.abs(e)} casas para ${e>0?'a direita':'a esquerda'}.`],['3',`Completamos as casas vazias com zero, obtendo ${num}.`]]);
}
for(let i=0;i<20;i++){
  const mult=i%2===0,m1=Math.floor(random()*50+10)/10,e1=Math.floor(random()*8)-4,m2=Math.floor(random()*40+10)/10,e2=Math.floor(random()*8)-4;
  const v1=m1*10**e1,v2=m2*10**e2,result=round(mult?v1*v2:v1/v2),fm=mult?m1*m2:m1/m2,fe=mult?e1+e2:e1-e2;
  const expression=mult?`(${m1} \\times 10^{${e1}}) \\times (${m2} \\times 10^{${e2}})`:`\\frac{${m1} \\times 10^{${e1}}}{${m2} \\times 10^{${e2}}}`;
  const answerSteps:Array<[string,string]>=[['1',`${mult?'Multiplique':'Divida'} as mantissas: ${m1} ${mult?'×':'÷'} ${m2} = ${fm.toFixed(2)}.`],['2',`${mult?'Some':'Subtraia'} os expoentes: ${e1} ${mult?'+':'−'} (${e2}) = ${fe}.`]];
  add(4,mult?'Multiplicação':'Divisão',inline(expression)+' = ?',result,'Ex: 2.5*10^4',answerSteps);
}
for(let i=0;i<20;i++){
  const addOp=i%2===0,baseE=Math.floor(random()*5)+3,e1=baseE,e2=baseE-1,m1=Math.floor(random()*50+20)/10,m2=Math.floor(random()*50+20)/10;
  const v1=m1*10**e1,v2=m2*10**e2,result=round(addOp?v1+v2:v1-v2),m2Adjusted=m2/10,combined=addOp?m1+m2Adjusted:m1-m2Adjusted;
  const expression=`(${m1} \\times 10^{${e1}}) ${addOp?'+':'-'} (${m2} \\times 10^{${e2}})`;
  add(5,addOp?'Adição':'Subtração',inline(expression)+' = ?',result,'Ex: 4.5*10^5',[['1',`Iguale os expoentes usando o maior: ${e1}.`],['2',`Ajuste a segunda mantissa: ${m2} ÷ 10 = ${m2Adjusted}.`],['3',`Opere as mantissas: ${m1} ${addOp?'+':'−'} ${m2Adjusted} = ${combined.toFixed(2)}.`],['4',`Resultado: ${combined.toFixed(2)} × 10^${e1}.`]]);
}
for (const exercise of items) {
  const value=Number(exercise.answer);
  if(value===0) continue;
  const exponent=Math.floor(Math.log10(Math.abs(value)));
  const mantissa=Number((value/10**exponent).toPrecision(6));
  exercise.steps.push([String(exercise.steps.length+1),`Conferência: formato padrão ${value}; notação científica ${inline(`${mantissa} \\times 10^{${exponent}}`)}.`]);
}
export const scientificExercises = items;
