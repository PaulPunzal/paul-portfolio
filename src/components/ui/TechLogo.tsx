import type { SimpleIcon } from "simple-icons";

interface TechLogoProps {
  icon?: SimpleIcon;
  label: string;
  className?: string;
}

export default function TechLogo({ icon, label, className = "" }: TechLogoProps) {
  if (!icon) {
    const initials = label
      .split(/[\s./]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();

    return (
      <span
        className={`inline-flex items-center justify-center rounded-[4px] bg-[rgb(var(--ink)/10%)] border border-[rgb(var(--ink)/12%)] font-mono font-bold text-[rgb(var(--ink)/55%)] leading-none ${className}`}
        style={{ fontSize: "7px" }}
        aria-hidden="true"
      >
        {initials}
      </span>
    );
  }

  return (
    <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}