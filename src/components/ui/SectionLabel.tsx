import { content } from '../../content';

interface SectionLabelProps {
  number: string;
  label: string;
}

// Rótulo acima do H2: `01 — SOBRE`, com o número na cor de destaque.
export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <p className="font-mono text-label uppercase">
      <span className="text-accent">{number}</span>
      <span className="text-text-muted">
        {' '}
        {content.separators.section} {label}
      </span>
    </p>
  );
}
