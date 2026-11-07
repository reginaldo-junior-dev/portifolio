import { content } from '../content';
import type { Project } from '../types';
import { Tag } from './ui/Tag';

const { projects: labels } = content;

interface ProjectTagsProps {
  tags: Project['tags'];
}

export function ProjectTags({ tags }: ProjectTagsProps) {
  const hasFrontend = tags.frontend.length > 0;
  const groups = [
    { label: hasFrontend ? labels.backendLabel : labels.technologiesLabel, tags: tags.backend },
    { label: labels.frontendLabel, tags: tags.frontend },
  ].filter((group) => group.tags.length > 0);

  return (
    <>
      {groups.map((group) => (
        <div key={group.label} className="mt-6">
          <h4 className="font-mono text-label text-text-muted uppercase">{group.label}</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {group.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
