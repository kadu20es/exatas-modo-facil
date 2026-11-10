import React, { ReactNode } from "react";

// Tipagem para cada item do grid de estatísticas
interface StatItem {
  value: string | ReactNode; // Permite strings numéricas, textos ou ícones/emojis
  label: string;
}

// Tipagem para as propriedades do CourseHeader
interface CourseHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  stats?: StatItem[];
  bgClass?: string;
  accent?: "sky" | "pink";
}

export default function CourseHeader({
  eyebrow,
  title,
  description,
  stats = [],
  bgClass = "bg-gradient-to-br from-sky-950 via-sky-800 to-blue-950",
  accent = "sky",
}: CourseHeaderProps) {
  const accentClasses = accent === "pink"
    ? { eyebrow: "text-pink-200", description: "text-pink-100/90", statLabel: "text-pink-200" }
    : { eyebrow: "text-sky-300", description: "text-sky-100/90", statLabel: "text-sky-200" };
  return (
    <section
      className={`rounded-3xl p-7 sm:p-10 text-white shadow-xl ${bgClass}`}
    >
      {eyebrow && (
        <span className={`text-xs uppercase tracking-widest font-bold ${accentClasses.eyebrow} opacity-90`}>
          {eyebrow}
        </span>
      )}

      <h1 className='text-3xl sm:text-5xl font-black mt-2'>{title}</h1>

      {description && (
        <p className={`mt-4 max-w-3xl ${accentClasses.description} leading-7`}>
          {description}
        </p>
      )}

      {stats.length > 0 && (
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-white/10 rounded-2xl p-4 backdrop-blur-sm'
            >
              <b className='text-2xl flex items-center gap-2'>{stat.value}</b>
              <div className={`text-xs ${accentClasses.statLabel} mt-1`}>{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
