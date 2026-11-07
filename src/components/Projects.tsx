import { content } from '../content';
import { projects } from '../data/projects';
import { useInView } from '../hooks/useInView';
import { FeaturedProject } from './FeaturedProject';
import { ProjectRow } from './ProjectRow';
import { Container } from './ui/Container';
import { SectionLabel } from './ui/SectionLabel';

const { projects: labels } = content;

const [featured, ...others] = projects;

export function Projects() {
  const ref = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      data-reveal
      id="projetos"
      aria-labelledby="projetos-titulo"
      className="pb-24 lg:pb-32"
    >
      <Container>
        <SectionLabel number={labels.number} label={labels.label} />
        <h2 id="projetos-titulo" className="mt-3 text-h2 text-text">
          {labels.title}
        </h2>

        <div className="mt-8 flex flex-col gap-6 lg:mt-12">
          {featured && <FeaturedProject project={featured} />}
          {others.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
