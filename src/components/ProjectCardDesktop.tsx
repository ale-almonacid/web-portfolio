import { NavLink } from "react-router"
import type { Project } from "@/data/projects"

type Props = { project: Project }

function ProjectCardDesktop({ project }: Props) {
  return (
     <article className="grid grid-cols-2 gap-10 rounded-xl bg-card p-10">
      <div className="flex flex-col">
        {project.tag && <p className="text-xs text-muted-foreground">{project.tag}</p>}
        <h3 className="text-3xl">{project.title}</h3>
        <p className="mt-1 text-brand">{project.subtitle}</p>
        <p className="mt-4 text-sm text-muted-foreground">{project.summary}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          {project.timeline} · {project.role}
        </p>
        <p className="text-sm text-muted-foreground">{project.tools.join(" · ")}</p>
        <NavLink
          to={`/projects/${project.slug}`}
          className="mt-auto self-start rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          View case study
        </NavLink>
      </div>
      {/* image: an img tag with src={project.image} alt={project.title} className="rounded-lg object-cover" */}
    </article>
  )
}

export default ProjectCardDesktop