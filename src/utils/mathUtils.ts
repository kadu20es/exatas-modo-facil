export type Fraction = { n: number; d: number };
export const gcd = (a: number, b: number): number => {
  a = Math.abs(a); b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a || 1;
};
export const lcm = (a: number, b: number): number => Math.abs((a / gcd(a, b)) * b);
export const fraction = (n: number, d: number): Fraction => {
  if (d === 0) return { n, d };
  if (d < 0) { n = -n; d = -d; }
  const divisor = gcd(n, d);
  return { n: n / divisor, d: d / divisor };
};
export const add = (a: Fraction, b: Fraction) => fraction(a.n * b.d + b.n * a.d, a.d * b.d);
export const subtract = (a: Fraction, b: Fraction) => fraction(a.n * b.d - b.n * a.d, a.d * b.d);
export const multiply = (a: Fraction, b: Fraction) => fraction(a.n * b.n, a.d * b.d);
export const divide = (a: Fraction, b: Fraction) => fraction(a.n * b.d, a.d * b.n);
export const fractionLatex = (x: Fraction) => x.d === 1 ? String(x.n) : `\\frac{${x.n}}{${x.d}}`;
export const parseAnswer = (input: string): Fraction | string | null => {
  const value = input.trim().replace(/,/g, '.');
  if (!value) return null;
  if (['>', '<', '='].includes(value)) return value;
  const ratio = value.match(/^(-?\d+)\s*\/\s*(\d+)$/);
  if (ratio && Number(ratio[2]) !== 0) return fraction(Number(ratio[1]), Number(ratio[2]));
  const decimal = Number(value);
  return Number.isFinite(decimal) ? fraction(Math.round(decimal * 1_000_000), 1_000_000) : null;
};
