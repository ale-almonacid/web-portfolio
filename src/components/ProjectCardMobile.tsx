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
        <div id="container-bgimage"
  className={`mx-auto h-[619px] flex flex-col w-full bg-cover bg-center ${project.darkBg ? "dark" : ""}`}
  style={project.bgImageMobile ? { backgroundImage: `url(${project.bgImageMobile})` } : undefined}
      >
        <div id="header" className="flex flex-col gap-0.5 px-[5vw] py-4">

            <div className="flex flex-row gap-2 justify-between items-start">

                <div className="flex flex-col gap-0.5">
                <h3 className="text-xl text-foreground tracking-[-.03em]">{project.title}</h3>
                <p className="text-sm text-foreground/90">{project.subtitle}</p>
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


        <div id="ui-image-container" className="pt-5 flex-1 min-h-0 overflow-hidden pl-[10vw] md:px-[10vw]">
        <img id="screens" className="block ml-auto h-full w-auto max-w-none md:mx-auto md:max-w-full md:object-contain" src={project.uiImageMobile} alt="" />
        </div>

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
                    <UserPen size={"17px"}></UserPen>
                <p className="text-sm text-foreground font-medium
">
                {project.roleMobile} 
                </p>
                </div>
                </div>

                <Button variant="outline" size={"sm"}>Tech Stack</Button>
                
                
            </div>

            <p className="text-sm text-foreground">{project.summary}</p>

        </div>

      
    </article>
    
  )
}

export default ProjectCardMobile