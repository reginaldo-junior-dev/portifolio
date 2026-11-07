import { content } from '../../content';

interface SectionLabelProps {
  number: string;
  label: string;
}

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
