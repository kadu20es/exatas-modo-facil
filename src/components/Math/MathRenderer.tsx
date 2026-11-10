import katex from 'katex';
import type { ReactNode } from 'react';

export function MathRenderer({ expression, display = false }: { expression: string; display?: boolean }) {
  const rendered = katex.renderToString(expression, { displayMode: display, throwOnError: false, strict: 'ignore' });
  return <span className={display ? 'block overflow-x-auto' : 'inline-block'} dangerouslySetInnerHTML={{ __html: rendered }} />;
}

export function MathText({ children, formatFractions = false }: { children: string; formatFractions?: boolean }): ReactNode {
  const parts = children.split(/(\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)|\$\$[\s\S]*?\$\$|\$(?:\\.|[^$])+\$)/g);
  return <>{parts.map((part, index) => {
    if (part.startsWith('\\[') && part.endsWith('\\]')) return <MathRenderer key={index} expression={part.slice(2, -2)} display />;
    if (part.startsWith('\\(') && part.endsWith('\\)')) return <MathRenderer key={index} expression={part.slice(2, -2)} />;
    if (part.startsWith('$$') && part.endsWith('$$')) return <MathRenderer key={index} expression={part.slice(2, -2)} display />;
    if (part.startsWith('$') && part.endsWith('$')) return <MathRenderer key={index} expression={part.slice(1, -1)} />;
    if (formatFractions) {
      const fractionPattern = /(-?\d+)\s*\/\s*(\d+|x)\b/gi;
      const rendered: ReactNode[] = [];
      let cursor = 0, match: RegExpExecArray | null;
      while ((match = fractionPattern.exec(part)) !== null) {
        if (match.index > cursor) rendered.push(part.slice(cursor, match.index));
        rendered.push(<MathRenderer key={`${index}-${match.index}`} expression={`\\frac{${match[1]}}{${match[2]}}`} />);
        cursor = match.index + match[0].length;
      }
      if (cursor > 0) {
        if (cursor < part.length) rendered.push(part.slice(cursor));
        return <span key={index}>{rendered}</span>;
      }
    }
    return part;
  })}</>;
}
