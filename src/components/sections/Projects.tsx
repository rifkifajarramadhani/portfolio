import { SiGithub } from '@icons-pack/react-simple-icons'
import PROJECTS from '@/data/projects'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { withBase } from '@/lib/with-base'
import { cn } from '@/lib/utils'

const ExternalIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
)

function ProjectLinks({ repoUrl, liveLink }: { repoUrl: string; liveLink: string }) {
  return (
    <div className="flex items-center gap-4 text-text-secondary">
      {repoUrl && repoUrl !== '#' && (
        <a href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label="Repository" className="transition-colors hover:text-accent-1">
          <SiGithub className="h-5 w-5" title="" />
        </a>
      )}
      {liveLink && (
        <a href={liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live site" className="transition-colors hover:text-accent-1">
          <ExternalIcon />
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured)
  const others = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="work" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <SectionHeading num="04" title="Some Things I've Built" />
      </Reveal>

      <div className="flex flex-col gap-20">
        {featured.map((project, id) => (
          <Reveal key={project.name}>
            <div className="grid items-center gap-6 md:grid-cols-12">
              <div className={cn('md:col-span-7', id % 2 === 1 && 'md:order-2')}>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-lg border border-white/10">
                  <img
                    src={withBase(project.previewImage)}
                    alt={project.name}
                    loading="lazy"
                    className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              </div>
              <div className={cn('md:col-span-5', id % 2 === 1 && 'md:order-1 md:text-left')}>
                <p className="mb-2 font-mono text-sm text-accent-1">Featured Project</p>
                <h3 className="mb-4 text-2xl font-semibold text-text-primary">{project.name}</h3>
                <div className="rounded-lg border border-white/5 bg-secondary-bg/60 p-5 text-sm leading-relaxed text-text-secondary backdrop-blur-sm">
                  {project.description}
                </div>
                {project.tags && (
                  <ul className="mt-4 flex flex-wrap gap-3 font-mono text-xs text-text-secondary/80">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-4">
                  <ProjectLinks repoUrl={project.repoUrl} liveLink={project.liveLink} />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-24 grid gap-6 sm:grid-cols-2">
          {others.map((project, id) => (
            <Reveal key={project.name} delay={0.05 * id}>
              <div className="group flex h-full flex-col rounded-lg border border-white/5 bg-secondary-bg/40 p-6 backdrop-blur-sm transition-colors hover:border-accent-1/40">
                <div className="mb-4 flex items-center justify-between">
                  <svg className="h-9 w-9 text-accent-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 7 12 3l10 4-10 4L2 7Z" /><path d="m2 12 10 4 10-4M2 17l10 4 10-4" />
                  </svg>
                  <ProjectLinks repoUrl={project.repoUrl} liveLink={project.liveLink} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary transition-colors group-hover:text-accent-1">
                  {project.name}
                </h3>
                <p className="line-clamp-4 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  )
}
