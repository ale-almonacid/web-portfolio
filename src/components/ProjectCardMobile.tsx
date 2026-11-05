import { NavLink } from "react-router"
import type { Project } from "@/data/projects"
import Tag from "@/components/Tag"

type Props = { project: Project }

function ProjectCardMobile({ project }: Props) {
  return (

    <article 
    >
        <div id="container-image" className="bg-cover bg-center mx-auto w-full h-[619px]" style={project.bgImage ? { backgroundImage: `url(${project.bgImage})` } : undefined}
      >
        <div id="header" className="flex flex-col gap-0.5 px-[5vw] py-4">

            <div className="flex flex-row justify-between items-start">

                <div className="flex flex-col gap-1">
                <h3 className="text-xl tracking-[-.03em]">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>


                <NavLink
                to={`/projects/${project.slug}`}
                className="text-left text-nowrap 
                rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
                >
                Case study
                </NavLink>

            </div>

        
            <div className="flex flex-wrap gap-2 pt-2.5">
            {project.tags?.map((t) => <Tag key={t} name={t} />)}
            </div>

        
        </div>

        <img id="screens" src="" alt="" />
        </div>


        <div id="container-metadata" className="flex flex-col gap-1 pt-3 pb-10 px-[5vw]">
            <div className="flex flex-row">

                <div className="flex flex-row">
                <p className="text-sm text-foreground">
                {project.timeline} 
                </p>
                </div>

                <div className="flex flex-row">
                <p className="text-sm text-foreground">
                {project.role} 
                </p>
                </div>

                <button>Tech Stack</button>
                
            </div>

            <p className="text-sm text-foreground">{project.summary}</p>

        </div>

      
    </article>
    
  )
}

export default ProjectCardMobile