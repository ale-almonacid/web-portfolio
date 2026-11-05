import { NavLink } from "react-router"
import type { Project } from "@/data/projects"

type Props = { project: Project }

function ProjectCardDesktop({ project }: Props) {
  return (
    <div className="bg-cover bg-center mx-auto w-full max-w-[1632px]" style={project.bgImage ? { backgroundImage: `url(${project.bgImage})` } : undefined}>

     <article
      className="grid grid-cols-[1.8fr_3fr] gap-10 py-20 px-36  mx-auto"
      
    >

        <div className="flex flex-col p-6 gap-8 bg-white rounded-md">
        <div>

        <h3 className="text-2xl tracking-[-.03em]">{project.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
        </div>

        <p className="text-sm text-foreground">{project.summary}</p>

        <div className="flex flex-col gap-5 ">

            <div className="flex flex-col gap-2 pb-1 border-b border-border">

                <p className="text-[9pt] tracking-[.25em] uppercase text-muted-foreground">Timeline</p>
                <p className="text-sm text-foreground">
                {project.timeline} 
                </p>

            </div>

            <div className="flex flex-col gap-2 pb-1 border-b border-border">

                <p className="text-[9pt] tracking-[.25em] uppercase text-muted-foreground">Role</p>
                <p className="text-sm text-foreground">
                {project.role} 
                </p>

            </div>


            <div className="flex flex-col gap-2 pb-1 border-b border-border">

                <p className="text-[9pt] tracking-[.25em] uppercase text-muted-foreground">Tech stack</p>
                <p className="text-sm text-foreground">
                {project.tools.join(" · ")}
                </p>

            </div>

        </div>
       
       
        <NavLink
          to={`/projects/${project.slug}`}
          className="w-full text-center rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          View case study
        </NavLink>


      </div>
      {/* image: an img tag with src={project.image} alt={project.title} className="rounded-lg object-cover" */}
    </article>
    </div>
  )
}

export default ProjectCardDesktop