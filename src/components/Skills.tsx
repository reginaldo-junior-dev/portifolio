import { content } from '../content';
import { useInView } from '../hooks/useInView';
import { Container } from './ui/Container';
import { SectionLabel } from './ui/SectionLabel';

const { skills } = content;

// Habilidades (docs/spec.md 3.3; docs/design.md 6 e 9). Lista de definição em linhas:
// categoria em Rótulo mono à esquerda (3 colunas no desktop, em cima no mobile) e
// tecnologias em texto corrido à direita, com divisórias de 1px entre as linhas.
export function Skills() {
  const ref = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      data-reveal
      id="habilidades"
      aria-labelledby="habilidades-titulo"
      className="pb-24 lg:pb-32"
    >
      <Container className="grid grid-cols-4 gap-6 lg:grid-cols-12">
        <div className="col-span-4 lg:col-span-12">
          <SectionLabel number={skills.number} label={skills.label} />
          <h2 id="habilidades-titulo" className="mt-3 text-h2 text-text">
            {skills.title}
          </h2>

          <dl className="mt-8 border-b border-border lg:mt-12">
            {skills.groups.map((group) => (
              <div
                key={group.category}
                className="grid grid-cols-4 gap-x-6 gap-y-1 border-t border-border py-4 lg:grid-cols-12 lg:items-baseline"
              >
                <dt className="col-span-4 font-mono text-label text-text-muted uppercase lg:col-span-3">
                  {group.category}
                </dt>
                <dd className="col-span-4 text-body text-text lg:col-span-9">
                  {group.technologies}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
