import { content } from '../content';
import { useInView } from '../hooks/useInView';
import { Container } from './ui/Container';
import { ExternalLink } from './ui/ExternalLink';
import { SectionLabel } from './ui/SectionLabel';

const { education } = content;
const { certifications } = education;

const rowClassName =
  'grid grid-cols-4 gap-x-6 gap-y-1 border-t border-border py-4 lg:grid-cols-12 lg:items-baseline';
const termClassName = 'col-span-4 font-mono text-label text-text-muted uppercase lg:col-span-3';
const valueClassName = 'col-span-4 lg:col-span-9';

export function Education() {
  const ref = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      data-reveal
      id="formacao"
      aria-labelledby="formacao-titulo"
      className="pb-24 lg:pb-32"
    >
      <Container>
        <SectionLabel number={education.number} label={education.label} />
        <h2 id="formacao-titulo" className="mt-3 text-h2 text-text">
          {education.title}
        </h2>

        <dl className="mt-8 border-b border-border lg:mt-12">
          {education.items.map((item) => (
            <div key={item.course} className={rowClassName}>
              <dt className={termClassName}>{item.period}</dt>
              <dd className={valueClassName}>
                <p className="text-body font-medium text-text">{item.course}</p>
                <p className="mt-1 text-small text-text-muted">{item.details}</p>
              </dd>
            </div>
          ))}
        </dl>

        {certifications.items.length > 0 && (
          <>
            <h3 className="mt-12 text-h3 text-text">{certifications.title}</h3>
            <dl className="mt-6 border-b border-border">
              {certifications.items.map((certification) => (
                <div key={certification.name} className={rowClassName}>
                  <dt className={termClassName}>{certification.year}</dt>
                  <dd className={valueClassName}>
                    <p className="text-body font-medium text-text">{certification.name}</p>
                    <p className="mt-1 text-small text-text-muted">{certification.issuer}</p>
                    {certification.href && (
                      <ExternalLink href={certification.href} className="mt-2 inline-block">
                        {certifications.validateLabel}
                      </ExternalLink>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </>
        )}
      </Container>
    </section>
  );
}
