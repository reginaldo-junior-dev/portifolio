import { content } from '../../content';
import { Icon } from './Icon';
import { TextLink } from './TextLink';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <TextLink href={href} target="_blank" rel="noopener noreferrer" className={className}>
      <span className="inline-flex items-center gap-1">
        {children}
        <Icon name="external" size={14} />
      </span>
      <span className="sr-only">{content.a11y.opensInNewTab}</span>
    </TextLink>
  );
}
