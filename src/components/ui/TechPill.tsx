interface TechPillProps {
  label: string;
  highlight?: boolean;
}

export default function TechPill({ label, highlight = false }: TechPillProps) {
  return (
    <span className={`tech-pill font-mono${highlight ? " highlight" : ""}`}>
      {label}
    </span>
  );
}