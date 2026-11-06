import { NavLink } from "react-router"
import type { Project } from "@/data/projects"
import Tag from "@/components/Tag"

import { Button } from "./ui/button"
import {Clock5} from "lucide-react"
import {UserPen} from "lucide-react"
import { ArrowUpRight } from "lucide-react"

type Props = { project: Project }

function ProjectCardMobile({ project }: Props) {
  return (

    <article 
    >
        <div id="container-image" className="bg-cover bg-center mx-auto w-full h-[619px]" style={project.bgImageMobile ? { backgroundImage: `url(${project.bgImageMobile})` } : undefined}
      >
        <div id="header" className="flex flex-col gap-0.5 px-[5vw] py-4">

            <div className="flex flex-row justify-between items-start">

                <div className="flex flex-col gap-1">
                <h3 className="text-xl tracking-[-.03em]">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>


                <NavLink
                to={`/projects/${project.slug}`}
                className="flex flex-row gap-1 items-center text-left text-nowrap 
                rounded-md bg-primary px-2 py-1.5 text-sm text-primary-foreground"
                >
                Case study
                <ArrowUpRight size={"18px"}></ArrowUpRight>
                </NavLink>

            </div>

        
            <div className="flex flex-wrap gap-2 pt-2.5">
            {project.tags?.map((t) => <Tag key={t} name={t} />)}
            </div>

        
        </div>

        <img id="screens" src="" alt="" />
        </div>


        <div id="container-metadata" className="flex flex-col gap-1 pt-3 pb-10 px-[5vw]">
            <div className="flex flex-row justify-between align-middle">

                <div className="flex flex-row gap-3 items-center">

                <div className="flex flex-row gap-1 items-center
">
                    <Clock5 size={"16px"}></Clock5>
                    <p className="text-sm text-foreground font-medium
">
                    {project.timelineMobile} 
                    </p>
                </div>

                <div className="flex flex-row gap-1 items-center">
                    <UserPen size={"18px"}></UserPen>
                <p className="text-sm text-foreground font-medium
">
                {project.roleMobile} 
                </p>
                </div>
                </div>

                <Button variant={"secondary"} size={"sm"}>Tech Stack</Button>
                
                
            </div>

            <p className="text-sm text-foreground">{project.summary}</p>

        </div>

      
    </article>
    
  )
}

export default ProjectCardMobile