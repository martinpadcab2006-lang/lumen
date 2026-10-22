import { useId } from "react";

/** El logo de Lumen: una puerta en arco con la luz dentro. */
export const LumenMark = ({ className }: { className?: string }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <radialGradient id={`${id}-luz`} cx="42%" cy="38%" r="65%">
          <stop offset="0" stopColor="#fff3cf" />
          <stop offset=".4" stopColor="#f7c95a" />
          <stop offset="1" stopColor="#d9951c" />
        </radialGradient>
        <radialGradient id={`${id}-halo`}>
          <stop offset="0" stopColor="#f2b53a" stopOpacity=".55" />
          <stop offset="1" stopColor="#f2b53a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="56" r="26" fill={`url(#${id}-halo)`} />
      <path
        d="M 27,86 L 27,44 A 23,23 0 0 1 73,44 L 73,86"
        fill="none"
        stroke="var(--oro-claro)"
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="50" cy="56" r="11" fill={`url(#${id}-luz)`} />
    </svg>
  );
};
