import { content } from '../content';
import type { Project } from '../types';
import { Button } from './ui/Button';
import { ExternalLink } from './ui/ExternalLink';

const { projects: labels } = content;

interface ProjectLinksProps {
  links: Project['links'];
  className?: string;
}

export function ProjectLinks({ links, className = '' }: ProjectLinksProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.deploy && (
        <Button href={links.deploy} variant="secondary" external>
          {labels.deployLabel}
        </Button>
      )}
      {links.repositories.map((repository) => (
        <ExternalLink key={repository.href} href={repository.href}>
          {repository.label}
        </ExternalLink>
      ))}
      {links.swagger && <ExternalLink href={links.swagger}>{labels.swaggerLabel}</ExternalLink>}
    </div>
  );
}
