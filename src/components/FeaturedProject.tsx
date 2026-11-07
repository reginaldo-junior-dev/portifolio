import { content } from '../content';
import type { Project } from '../types';
import { ProjectLinks } from './ProjectLinks';
import { ProjectTags } from './ProjectTags';

const { projects: labels } = content;

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const titleId = `projeto-${project.id}-titulo`;
  const [image] = project.images;

  return (
    <article
      aria-labelledby={titleId}
      className="rounded-lg border border-border bg-surface p-6 transition-colors duration-150 ease-out hover:border-border-strong lg:grid lg:grid-cols-12 lg:grid-rows-[auto_auto_1fr] lg:items-start lg:gap-x-10 lg:p-10"
    >
      {image && (
        <div className="overflow-hidden rounded-md border border-border bg-surface lg:col-span-7 lg:col-start-1 lg:row-start-1">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full"
          />
        </div>
      )}

      <div className="mt-6 lg:col-span-5 lg:col-start-8 lg:row-span-3 lg:row-start-1 lg:mt-0">
        <p className="font-mono text-label text-text-muted uppercase">
          <span aria-hidden="true" className="mr-2 inline-block size-2 bg-accent align-middle" />
          {labels.featuredLabel}
          <span aria-hidden="true"> {content.separators.inline} </span>
          {project.type}
        </p>
        <h3 id={titleId} className="mt-3 text-h3-featured text-text">
          {project.name}
        </h3>
        <p className="mt-4 max-w-prose text-body text-text-muted">{project.description}</p>
        {project.authorship && (
          <p className="mt-3 text-small text-text-muted">{project.authorship}</p>
        )}
      </div>

      <div className="lg:col-span-7 lg:col-start-1 lg:row-start-2">
        <ProjectTags tags={project.tags} />
      </div>

      <ProjectLinks
        links={project.links}
        className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-start-3"
      />
    </article>
  );
}
