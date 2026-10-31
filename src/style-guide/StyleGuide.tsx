import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Container } from '../components/ui/Container';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Button } from '../components/ui/Button';
import { TextLink } from '../components/ui/TextLink';
import { ExternalLink } from '../components/ui/ExternalLink';
import { Tag } from '../components/ui/Tag';
import { content } from '../content';
import { styleGuide as sg } from './content';

interface BlockProps {
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
}

function Block({ number, label, title, children }: BlockProps) {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <SectionLabel number={number} label={label} />
      <h2 className="mt-3 text-h2">{title}</h2>
      <div className="mt-8 lg:mt-12">{children}</div>
    </section>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 font-mono text-label text-text-muted uppercase">{children}</h3>;
}

const typeClasses = {
  display: 'text-display',
  h2: 'text-h2',
  h3Featured: 'text-h3-featured',
  h3: 'text-h3',
  lead: 'text-lead text-text-muted',
  body: 'text-body text-text-muted',
  small: 'text-small text-text-subtle',
  label: 'font-mono text-label uppercase text-text-muted',
  tag: 'font-mono text-tag text-text-muted',
  data: 'font-mono text-data',
} as const;

function TagGroup({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div>
      <p className="mb-2 font-mono text-label text-text-subtle uppercase">{title}</p>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeaturedCardExample() {
  const { card } = sg;
  return (
    <article className="grid gap-6 rounded-lg border border-border bg-surface p-6 transition-colors duration-150 ease-out hover:border-border-strong lg:grid-cols-12 lg:gap-x-6 lg:gap-y-8 lg:p-10">
      <div className="lg:col-span-5 lg:row-start-1">
        <p className="font-mono text-label text-text-muted uppercase">
          <span aria-hidden="true" className="text-accent">
            ■{' '}
          </span>
          {card.projectLabel}
        </p>
        <h3 className="mt-3 text-h3-featured">{card.name}</h3>
        <p className="mt-3 max-w-prose text-text-muted">{card.description}</p>
      </div>

      <figure className="aspect-16/10 overflow-hidden rounded-md border border-border bg-surface lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
        <img
          src={card.image.src}
          alt={card.image.alt}
          className="h-full w-full object-cover object-top"
        />
      </figure>

      <div className="flex flex-col gap-8 lg:col-span-5 lg:row-start-2">
        <div>
          <h4 className="mb-4 font-mono text-label text-text-muted uppercase">
            {card.decisionsTitle}
          </h4>
          <ol className="flex flex-col gap-4">
            {card.decisions.map((decision, index) => (
              <li key={decision.title} className="grid grid-cols-[auto_1fr] gap-x-4">
                <span className="font-mono text-data text-text-subtle">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-medium text-text">
                    {decision.data && (
                      <span className="font-mono text-data-lg">{decision.data} </span>
                    )}
                    {decision.title}
                  </p>
                  <p className="text-small text-text-muted">{decision.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-4">
          <TagGroup title={card.backendTitle} tags={card.backend} />
          <TagGroup title={card.frontendTitle} tags={card.frontend} />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button href={card.deploy.href} variant="secondary" external>
            {card.deploy.label}
          </Button>
          {card.repos.map((repo) => (
            <ExternalLink key={repo.href} href={repo.href}>
              {repo.label}
            </ExternalLink>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function StyleGuide() {
  const { colors, typography, components } = sg;

  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="pt-16 focus:outline-none">
        <Container>
          <div className="py-24 lg:py-32">
            <h1 className="text-display">{sg.title}</h1>
            <p className="mt-6 max-w-prose text-lead text-text-muted">{sg.intro}</p>
            <p className="mt-3 text-small text-text-subtle">{sg.statesHint}</p>
          </div>

          <Block number={colors.number} label={colors.label} title={colors.title}>
            <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {colors.items.map((color) => (
                <li key={color.token}>
                  <div
                    className="h-16 rounded-lg border border-border"
                    style={{ backgroundColor: `var(--color-${color.token})` }}
                  />
                  <p className="mt-3 font-mono text-data">--{color.token}</p>
                  <p className="font-mono text-tag text-text-muted">{color.hex}</p>
                  <p className="mt-1 text-small text-text-subtle">{color.usage}</p>
                </li>
              ))}
            </ul>
          </Block>

          <Block number={typography.number} label={typography.label} title={typography.title}>
            <dl className="flex flex-col">
              {(Object.keys(typeClasses) as (keyof typeof typeClasses)[]).map((key) => (
                <div
                  key={key}
                  className="grid gap-2 border-b border-border py-6 first:pt-0 lg:grid-cols-12 lg:gap-6"
                >
                  <dt className="font-mono text-tag text-text-subtle lg:col-span-3">
                    {typography.names[key]}
                  </dt>
                  <dd className={`max-w-prose lg:col-span-9 ${typeClasses[key]}`}>
                    {typography.samples[key]}
                  </dd>
                </div>
              ))}
            </dl>
          </Block>

          <Block number={components.number} label={components.label} title={components.title}>
            <div className="flex flex-col gap-12">
              <div>
                <SubTitle>{components.buttonsTitle}</SubTitle>
                <div className="flex flex-wrap items-center gap-3">
                  <Button href="#projetos" icon="arrow-right">
                    {components.primary}
                  </Button>
                  <Button
                    href={content.links.github.href}
                    variant="secondary"
                    icon="github"
                    external
                  >
                    {components.secondary}
                  </Button>
                  <TextLink href="#conteudo" icon="download">
                    {components.download}
                  </TextLink>
                </div>
              </div>

              <div>
                <SubTitle>{components.textLinksTitle}</SubTitle>
                <div className="flex flex-wrap gap-6">
                  {components.textLinks.map((label) => (
                    <ExternalLink key={label} href={content.links.github.href}>
                      {label}
                    </ExternalLink>
                  ))}
                </div>
              </div>

              <div>
                <SubTitle>{components.tagsTitle}</SubTitle>
                <ul className="flex flex-wrap gap-2">
                  {components.tags.map((tag) => (
                    <li key={tag}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Block>

          <Block number={sg.card.number} label={sg.card.label} title={sg.card.title}>
            <FeaturedCardExample />
          </Block>
        </Container>
      </main>
      <Footer />
    </>
  );
}
