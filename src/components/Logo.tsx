import { useId } from "react";

interface LogoMarkProps {
  size?: number;
  className?: string;
}

/** Monograma C·D: la C y la D como paréntesis de código, el punto como el diseño. */
export const LogoMark = ({ size = 32, className = "" }: LogoMarkProps) => {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Logo de Camila Domato"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${gradientId})`} />
      <g fill="none" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28.8 24.2 A11 11 0 1 0 28.8 39.8" />
        <path d="M40 21 V43 H41 A11 11 0 0 0 41 21 Z" />
      </g>
      <circle cx="33.4" cy="32" r="2.9" fill="#fff" />
    </svg>
  );
};

export const Logo = () => (
  <a href="#" className="flex items-center gap-2.5" aria-label="Camila Domato, ir al inicio">
    <LogoMark size={32} />
    <span className="text-lg font-extrabold text-slate-900 tracking-tight">
      Camila <span className="text-violet-600">Domato</span>
    </span>
  </a>
);
