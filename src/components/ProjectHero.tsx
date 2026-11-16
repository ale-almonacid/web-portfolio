import type { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Clock5 } from "lucide-react"
import { UserPen } from "lucide-react"
import { ArrowLeft } from "lucide-react"

import type { Project } from "@/data/projects"

//tech stack
import ToolTile from "@/components/ToolTile"


import Tag from "@/components/Tag"
import { Link } from "react-router"

type Props = { project: Project, children: ReactNode }

function ProjectHero({ project, children }: Props) {
  const toolCols =
    project.toolsDetails.length > 4
      ? "grid-cols-[repeat(3,5rem)]"
      : "grid-cols-[repeat(2,5rem)]"

  const toolColsMobile =
    project.toolsDetails.length > 4
      ? "grid-cols-[repeat(3,5rem)]"
      : "grid-cols-[repeat(4,5rem)]"

  return (
    <section className="flex flex-col gap-10">

        {/* mobile */}
       <div id="mobile-wrapper" className="flex flex-col gap-8 lg:hidden">
        {/* Header */}
      <div
        id="header"
        className="mx-auto flex w-full max-w-[1920px] flex-row items-end justify-between px-[5vw] pt-5 xl:px-36"
      >
        <div className="flex flex-col gap-5">
          <Button
            variant="outline"
            size="sm"
            className="self-start"
            nativeButton={false}
            render={<Link to="/" />}
          >
            <ArrowLeft data-icon="inline-start" />
            All Projects
          </Button>
          <div className="flex flex-col gap-1">
            <h1 className="max-w-2xl text-xl leading-tight font-medium tracking-[-.04em] text-foreground md:text-3xl md:font-normal">
              {project.title}
            </h1>
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
            <div className="flex flex-wrap gap-[4px] pt-1">
              {project.tags?.map((t) => (
                <Tag key={t} name={t} />
              ))}
            </div>
          </div>
        </div>

      </div>

       {/* image */}
      <div
        id="image"
        className="mx-auto h-[300px] w-full max-w-[1632px] bg-cover bg-center"
        style={
          project.bgImage
            ? { backgroundImage: `url(${project.bgImage})` }
            : undefined
        }
      ></div>

      {/* role container */}
      <div
          id="role-container"
          className="flex flex-row items-center gap-2 border-y-[1px] mx-[5vw] py-4"
        >
          <div className="flex  flex-col gap-1 w-full items-center">
            <div className="flex flex-row gap-1.5 items-center">

            <UserPen size="14px"></UserPen>
            <p className="text-[14px] tracking-[0.25em] text-foreground uppercase">
              Role
            </p>
            </div>
            <p className="text-[12px] text-muted-foreground text-center">{project.role}</p>
          </div>

          <Separator orientation="vertical"></Separator>

          <div className="flex  flex-col gap-1 w-full items-center">

            <div className="flex flex-row gap-1.5 items-center">

            <Clock5 size="13px"></Clock5>
            <p className="text-[14px] tracking-[0.25em] text-foreground uppercase">
              Timeline
            </p>
            </div>
            <p className="text-[12px] text-muted-foreground text-center">
              {project.timeline}
            </p>
          </div>
        </div>

        {/* info box */}
      <div
        id="info-box"
        className="mx-auto flex w-full max-w-[1920px] flex-col justify-between items-center gap-10 px-[5vw] pb-12 xl:px-36"
      >
        <div className=" flex flex-col gap-3">
          <h2 className="text-xl">Overview</h2>
          <p id="overview-text" className="text-sm/6 text-muted-foreground">
            {children}
          </p>
        </div>

        <div
          id="tech-stack"
          className={`grid w-full shrink-0 ${toolColsMobile} justify-between gap-y-6 px-4 md:w-auto md:justify-start md:gap-x-6`}
        >
          {project.toolsDetails.map((t) => (
            <ToolTile key={t} name={t} />
          ))}
        </div>
      </div>

       </div>
       
       
       
       
       
       {/* desktop */}
       <div id="desktop-wrapper" className="hidden lg:flex flex-col gap-10">

      {/* Header */}
      <div
        id="header"
        className="mx-auto flex w-full max-w-[1920px] flex-row items-end justify-between px-[5vw] pt-10 xl:px-36"
      >
        <div className="flex flex-col gap-5">
          <Button
            variant="outline"
            size="sm"
            className="self-start"
            nativeButton={false}
            render={<Link to="/" />}
          >
            <ArrowLeft data-icon="inline-start" />
            All Projects
          </Button>
          <div className="flex flex-col gap-1">
            <h1 className="max-w-2xl text-3xl leading-tight font-normal tracking-[-.04em] text-foreground md:text-3xl">
              {project.title}
            </h1>
            <p className="text-muted-foreground">{project.subtitle}</p>
            <div className="flex flex-wrap gap-2 pt-1.5">
              {project.tags?.map((t) => (
                <Tag key={t} name={t} />
              ))}
            </div>
          </div>
        </div>

        <div
          id="role-container"
          className="flex flex-row items-center gap-2 border-y-[1px] px-1 py-4"
        >
          <div className="flex min-w-[180px] flex-col gap-1 px-4">
            <UserPen size={"18px"}></UserPen>
            <p className="text-sm tracking-[0.25em] text-foreground uppercase">
              Role
            </p>
            <p className="text-[12px] text-muted-foreground">{project.role}</p>
          </div>

          <Separator orientation="vertical"></Separator>

          <div className="flex min-w-[180px] flex-col gap-1 px-4">
            <Clock5 size={"18px"}></Clock5>
            <p className="text-sm tracking-[0.25em] text-foreground uppercase">
              Timeline
            </p>
            <p className="text-[12px] text-muted-foreground">
              {project.timeline}
            </p>
          </div>
        </div>
      </div>
      {/* image */}
      <div
        id="image"
        className="mx-auto aspect-[16/7] w-full max-w-[1632px] bg-cover bg-center"
        style={
          project.bgImage
            ? { backgroundImage: `url(${project.bgImage})` }
            : undefined
        }
      ></div>

      {/* info box */}
      <div
        id="info-box"
        className="mx-auto flex w-full max-w-[1920px] flex-row justify-between items-center gap-16 px-[5vw] pb-18 xl:px-36"
      >
        <div className="max-w-[70%] flex flex-col gap-3">
          <h2 className="text-xl">Overview</h2>
          <p id="overview-text" className="text-[16px]/6.5 text-muted-foreground">
            {children}
          </p>
        </div>

        <div
          id="tech-stack"
          className={`grid shrink-0 ${toolCols} gap-x-10 gap-y-6 px-4`}
        >
          {project.toolsDetails.map((t) => (
            <ToolTile key={t} name={t} />
          ))}
        </div>
      </div>

        </div> 
    </section>
  )
}

export default ProjectHero
