import { content } from '../content';
import { useInView } from '../hooks/useInView';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { ExternalLink } from './ui/ExternalLink';
import { SectionLabel } from './ui/SectionLabel';
import { TextLink } from './ui/TextLink';

const { contact, resume } = content;

export function Contact() {
  const ref = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      data-reveal
      id="contato"
      aria-labelledby="contato-titulo"
      className="pb-24 lg:pb-32"
    >
      <Container>
        <SectionLabel number={contact.number} label={contact.label} />
        <h2 id="contato-titulo" className="mt-3 text-h2 text-text">
          {contact.title}
        </h2>
        <p className="mt-6 max-w-prose text-body text-text-muted">{contact.intro}</p>

        <dl className="mt-8 border-b border-border lg:mt-12">
          {contact.items.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-4 gap-x-6 gap-y-1 border-t border-border py-2 lg:grid-cols-12 lg:items-center"
            >
              <dt className="col-span-4 pt-2 font-mono text-label text-text-muted uppercase lg:col-span-3 lg:pt-0">
                {item.label}
              </dt>
              <dd className="col-span-4 min-w-0 break-all text-body lg:col-span-9">
                {item.external ? (
                  <ExternalLink href={item.href}>{item.value}</ExternalLink>
                ) : (
                  <TextLink href={item.href}>{item.value}</TextLink>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8">
          <Button href={resume.href} icon="download" download>
            {resume.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
