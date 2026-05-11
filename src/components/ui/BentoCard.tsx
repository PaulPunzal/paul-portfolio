import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  /** CSS grid column span class e.g. "c4" (Made optional) */
  col?: string;
  /** CSS grid row span class e.g. "r3" (Made optional) */
  row?: string;
  /** If provided, wraps the card in a Next.js Link */
  href?: string;
  /** Adds green glow on hover */
  accentHover?: boolean;
  /** Additional className string */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
  /** Opens link in new tab (only used when href is set) */
  external?: boolean;
}

export default function BentoCard({
  children,
  col = "",
  row = "",
  href,
  accentHover = false,
  className = "",
  style,
  external = false,
}: BentoCardProps) {
  const classes = [
    "bento-card",
    col,
    row,
    href ? "clickable" : "",
    href && accentHover ? "accent-border" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        style={style}
      >
        {children}
      </Link>
    );
  }

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}