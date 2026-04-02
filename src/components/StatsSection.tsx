"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Performance", value: 100 },
  { label: "Acessibilidade", value: 95 },
  { label: "Boas Práticas", value: 100 },
  { label: "SEO", value: 98 },
];

function ProgressCircle({
  value,
  label,
  animate,
}: {
  value: number;
  label: string;
  animate: boolean;
}) {
  const radius = 50;
  const strokeWidth = 7;
  const size = (radius + strokeWidth) * 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference * (1 - value / 100);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Track */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={strokeWidth}
          />
          {/* Progress arc */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke="#5dd62c"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={animate ? dashoffset : circumference}
            transform={`rotate(-90 ${cx} ${cy})`}
            style={{
              transition: animate
                ? "stroke-dashoffset 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
                : "none",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-3xl font-bold text-[#f8f8f8]">
            {value}
          </span>
        </div>
      </div>
      <span className="text-sm font-medium text-[rgba(248,248,248,0.6)]">
        {label}
      </span>
    </div>
  );
}

export default function StatsSection() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24">
      <div className="mb-16 text-center">
        <span className="badge-accent">Performance Real</span>
        <h2 className="mt-4 font-display text-3xl font-bold text-[#f8f8f8] md:text-4xl">
          Sites com Pontuação Máxima
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[rgba(248,248,248,0.6)]">
          Todos os projetos são desenvolvidos com foco em alta performance,
          acessibilidade e boas práticas técnicas.
        </p>
        <p className="mt-2 text-xs font-medium uppercase tracking-wider text-[rgba(248,248,248,0.35)]">
          Pontuação medida pelo Google Lighthouse
        </p>
      </div>

      <div
        ref={ref}
        className="flex flex-wrap justify-center gap-10 md:gap-20"
      >
        {stats.map((stat) => (
          <ProgressCircle key={stat.label} animate={animated} {...stat} />
        ))}
      </div>
    </section>
  );
}
