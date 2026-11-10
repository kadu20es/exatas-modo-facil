export type LinearExercise = { id:number; level:number; title:string; question:string; answer:string; accept:string[]; tolerance:number; steps:Array<[string,string]> };
const rand=(min:number,max:number)=>Math.floor(Math.random()*(max-min+1))+min;
const gcd=(a:number,b:number):number=>b?gcd(b,a%b):Math.abs(a)||1;
const frac=(n:number,d:number)=>{if(d<0){n=-n;d=-d;}const g=gcd(n,d);n/=g;d/=g;return d===1?String(n):`${n}/${d}`;};
const addTerm=(coefficient:number,variable='x',first=false)=>{if(coefficient===0)return '';const sign=coefficient<0?' − ':' + ';const abs=Math.abs(coefficient);const value=variable?(abs===1?'':String(abs))+variable:String(abs);return `${first&&coefficient<0?'−':first?'':sign}${value}`;};
const equation=(a:number,b:number,c:number,d:number)=>{const left=(addTerm(a,'x',true)+addTerm(b,'',a===0)).trim()||'0';const right=(addTerm(c,'x',true)+addTerm(d,'',c===0)).trim()||'0';return `${left} = ${right}`;};
const items:LinearExercise[]=[];
const push=(level:number,title:string,eq:string,answer:number,steps:string[])=>{const exact=frac(Math.round(answer*1000000),1000000);items.push({id:items.length+1,level,title,question:`Resolva a equação \\(${eq}\\). Informe o valor de x.`,answer:exact,accept:[exact,String(Number(answer.toFixed(6)))],tolerance:0.00001,steps:steps.map((s,i)=>[String(i+1),s])});};

// 20 questões em cada um dos cinco níveis do banco original.
for(let i=0;i<20;i++){
  if(i%2===0){const b=rand(2,20)*(Math.random()>.5?1:-1),c=rand(5,30)*(Math.random()>.5?1:-1);push(1,'Básico (Soma/Subtração)',equation(1,b,0,c),c-b,[`Aplique a operação inversa para remover ${b>0?'+':''}${b} dos dois lados.`,`x = ${c} ${b>0?'−':'+'} ${Math.abs(b)} = ${c-b}.`]);}
  else{const a=rand(2,10)*(Math.random()>.5?1:-1),answer=rand(2,12)*(Math.random()>.5?1:-1),d=a*answer;push(1,'Básico (Multiplicação/Divisão)',equation(a,0,0,d),answer,[`${a} está multiplicando x. Divida os dois lados por ${a}.`,`x = ${d} ÷ ${a} = ${answer}.`]);}
}
for(let i=0;i<20;i++){const a=rand(2,9),answer=rand(-10,10),b=rand(-15,15)||5,c=a*answer+b;push(2,'Equação em duas etapas',equation(a,b,0,c),answer,[`Remova o termo independente ${b} usando a operação inversa.`,`${a}x = ${c} ${b>0?'−':'+'} ${Math.abs(b)} = ${c-b}.`,`Divida por ${a}: x = ${answer}.`]);}
for(let i=0;i<20;i++){let a=rand(2,8),c=rand(1,7);if(a===c)a++;const answer=rand(-8,8),b=rand(-12,12),d=(a*answer+b)-(c*answer);push(3,'Variável nos dois lados',equation(a,b,c,d),answer,[`Agrupe as incógnitas: subtraia ${c}x de ambos os lados.`,`(${a} − ${c})x + (${b}) = ${d}.`,`Isole x: ${a-c}x = ${d-b}, então x = ${answer}.`]);}
for(let i=0;i<20;i++){const a=rand(2,5),k=rand(-6,6)||2,answer=rand(-5,5),c=a*(answer+k),b=a*k;const eq=`${a}(x ${k>0?'+':'−'} ${Math.abs(k)}) = ${c}`;push(4,'Propriedade distributiva',eq,answer,[`Aplique a distributiva: ${a}x ${b>0?'+':'−'} ${Math.abs(b)} = ${c}.`,`Use a operação inversa para isolar ${a}x.`,`Divida por ${a}: x = ${answer}.`]);}
for(let i=0;i<20;i++){const den=rand(2,5),answer=rand(-10,10)*den,b=rand(-10,10),c=answer/den+b;const eq=`\\frac{x}{${den}} ${b>0?'+':'−'} ${Math.abs(b)} = ${c}`;push(5,'Equação com frações',eq,answer,[`Remova o termo independente ${b} dos dois lados.`,`\\frac{x}{${den}} = ${c-b}.`,`Multiplique ambos os lados por ${den}: x = ${answer}.`]);}

export const exercisesData=items;
