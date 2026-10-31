import { content } from '../content';
import { Container } from './ui/Container';
import { ExternalLink } from './ui/ExternalLink';

const { footer, links } = content;

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-4 py-8 text-small text-text-subtle md:flex-row md:items-center md:justify-between">
        <p>{footer.copyright(new Date().getFullYear())}</p>
        <ul aria-label={footer.socialLabel} className="flex gap-6">
          <li>
            <ExternalLink href={links.github.href}>{links.github.label}</ExternalLink>
          </li>
          <li>
            <ExternalLink href={links.linkedin.href}>{links.linkedin.label}</ExternalLink>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
