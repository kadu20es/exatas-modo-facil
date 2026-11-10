import { useEffect, useRef } from 'react';
export function MiniFractionVisual() {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const ctx = canvas.current?.getContext('2d'); if (!ctx) return;
    const cx = 105, cy = 105, radius = 88, numerator = 3, denominator = 4;
    for (let i = 0; i < denominator; i++) {
      const start = -Math.PI / 2 + i * 2 * Math.PI / denominator;
      const end = -Math.PI / 2 + (i + 1) * 2 * Math.PI / denominator;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, radius, start, end); ctx.closePath();
      ctx.fillStyle = i < numerator ? '#6366f1' : '#f8fafc'; ctx.fill(); ctx.strokeStyle = '#64748b'; ctx.lineWidth = 2; ctx.stroke();
    }
  }, []);
  return <canvas ref={canvas} width={210} height={210} aria-label="Representação visual de três quartos" />;
}
