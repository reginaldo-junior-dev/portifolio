import { content } from '../content';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { TextLink } from './ui/TextLink';

const { hero, resume, links } = content;

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="pt-24 pb-16 lg:pt-32 lg:pb-20">
      <Container className="grid grid-cols-4 gap-6 lg:grid-cols-12">
        <div className="col-span-4 lg:col-start-9 lg:row-start-1">
          <img
            src={hero.photo.src}
            alt={hero.photo.alt}
            width={hero.photo.width}
            height={hero.photo.height}
            loading="eager"
            fetchPriority="high"
            className="aspect-4/5 w-24 rounded-lg border border-border object-cover lg:w-full"
          />
        </div>

        <div className="col-span-4 lg:col-span-7 lg:col-start-1 lg:row-start-1">
          <p className="font-mono text-label text-text-muted uppercase">{hero.label}</p>
          <h1 id="inicio-titulo" className="mt-3 text-display text-text">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-prose text-lead text-text-muted">{hero.lead}</p>
          <p className="mt-3 text-small text-text-muted">{hero.availability}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={links.github.href} variant="secondary" icon="github" external>
              {links.github.label}
            </Button>
            <Button href={links.linkedin.href} variant="secondary" icon="linkedin" external>
              {links.linkedin.label}
            </Button>
            <TextLink href={resume.href} icon="download" download>
              {resume.label}
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
