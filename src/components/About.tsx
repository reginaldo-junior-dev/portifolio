import { content } from '../content';
import { useInView } from '../hooks/useInView';
import { Container } from './ui/Container';
import { SectionLabel } from './ui/SectionLabel';

const { about } = content;

export function About() {
  const [opening, ...rest] = about.paragraphs;
  const ref = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      data-reveal
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="pb-24 lg:pb-32"
    >
      <Container className="grid grid-cols-4 gap-6 lg:grid-cols-12">
        <div className="col-span-4 lg:col-span-7">
          <SectionLabel number={about.number} label={about.label} />
          <h2 id="sobre-titulo" className="mt-3 text-h2 text-text">
            {about.title}
          </h2>

          <div className="mt-8 max-w-prose space-y-4 lg:mt-12">
            <p className="text-lead text-text-muted">{opening}</p>
            {rest.map((paragraph) => (
              <p key={paragraph} className="text-body text-text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
