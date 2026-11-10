import { useEffect, useRef } from 'react';
export function DecimalIntroVisual() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => { const c=ref.current,ctx=c?.getContext('2d'); if(!c||!ctx)return; ctx.strokeStyle='#64748b';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(20,45);ctx.lineTo(240,45);ctx.stroke(); for(let i=0;i<=4;i++){const x=20+i*55;ctx.beginPath();ctx.moveTo(x,38);ctx.lineTo(x,52);ctx.stroke();ctx.fillStyle='#243044';ctx.font='13px sans-serif';ctx.textAlign='center';ctx.fillText(String(i),x,70);}const x=20+3*55+.45*55;ctx.fillStyle='#6366f1';ctx.beginPath();ctx.arc(x,45,6,0,7);ctx.fill();ctx.font='bold 12px sans-serif';ctx.fillText('3,45',x,25);},[]);
  return <canvas ref={ref} width={260} height={90} aria-label="Reta numérica marcando 3,45" />;
}
export function RatioIntroVisual() {
  const ref=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{const c=ref.current,ctx=c?.getContext('2d');if(!c||!ctx)return;const cell=24;for(let i=0;i<3;i++){ctx.fillStyle='#6366f1';ctx.fillRect(10+i*(cell+4),15,cell,cell);ctx.strokeStyle='#4338ca';ctx.strokeRect(10+i*(cell+4),15,cell,cell);}for(let i=0;i<2;i++){ctx.fillStyle='#f59e0b';ctx.fillRect(10+i*(cell+4),55,cell,cell);ctx.strokeStyle='#b45309';ctx.strokeRect(10+i*(cell+4),55,cell,cell);}ctx.fillStyle='#243044';ctx.font='bold 13px sans-serif';ctx.fillText('3 : 2',180,45);},[]);
  return <canvas ref={ref} width={260} height={90} aria-label="Representação da razão três para dois" />;
}
