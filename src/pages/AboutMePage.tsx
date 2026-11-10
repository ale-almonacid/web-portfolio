import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

//icons
import Linkedin from "@/assets/linkedin.svg"
import Github from "@/assets/github.svg"
import { Mail } from "lucide-react"

//image
import ProfilePicture from "@/assets/profile/profile-picture.png"

//tech stack
import ToolTile from "@/components/ToolTile"
import type { ToolName } from "@/data/tools"


const skillGroups: { title: string; cols: string; tools: ToolName[] }[] = [
  { title: "Design", cols: "grid-cols-2", tools: ["Figma", "Webflow", "LottieFiles", "Adobe CC"] },
  { title: "Front-end", cols: "grid-cols-3", tools: ["JavaScript", "TypeScript", "React", "GitHub", "HTML/CSS", "Storybook"] },
  { title: "Backend & Data", cols: "grid-cols-1", tools: ["MongoDB", "Postgres"] },
]

const skillGroupsMobile: { title: string; tools: ToolName[] }[] = [
  { title: "Design", tools: ["Figma", "Webflow", "LottieFiles", "Adobe CC"] },
  { title: "Development", tools: ["JavaScript", "TypeScript", "React", "GitHub", "HTML/CSS", "Storybook", "MongoDB", "Postgres"] },
]

function AboutMePage() {
  return (
    <div id="Page container" className="">
      <Navbar />

      {/* Hero */}
      <section
        id="hero"
        className="mx-auto flex max-w-[1920px] flex-col justify-between px-[5vw] pt-8 lg:pt-20 lg:pb-5 xl:px-36"
      >
        <div className="flex flex-col lg:flex-row gap-10  pb-18 lg:pb-24">
          <div
            id="profile-picture"
            role="img"
            aria-label="Alejandra Almonacid"
            className=" size-32 lg:size-50 shrink-0 rounded-md bg-cover bg-center"
            style={{ backgroundImage: `url(${ProfilePicture})` }}
          >
            {" "}
          </div>

          <div className="flex flex-col gap-10">
            <h1 className="max-w-2xl text-3xl leading-tight font-normal tracking-[-.04em] text-foreground md:text-4xl">
              Hi! I’m Alejandra, 5+ experienced Product Designer based in
              Berlin, Germany. Now also building what I design in React.
            </h1>

            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
              <a
                href="https://www.linkedin.com/in/alejandraalmonacid/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:underline"
              >
                <img src={Linkedin} alt="" className="size-4" />
                in/alejandraalmonacid
              </a>
              <span aria-hidden className="hidden lg:block">·</span>

              <a
                href="mailto:alejandraalmonacidayala@gmail.com"
                className="inline-flex items-center gap-1.5 hover:underline"
              >
                <Mail className="size-4.5"></Mail>
                alejandraalmonacidayala@gmail.com
              </a>
              <span aria-hidden className="hidden lg:block" >·</span>

              <a
                href="https://github.com/ale-almonacid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:underline"
              >
                <img src={Github} alt="" className="size-4.5" />
                ale-almonacid
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* tech stack */}
      <section className="mx-auto flex max-w-[1920px] flex-col justify-between px-[5vw] pt-0 lg:pt-4 pb-30 xl:px-36">


        {/* mobile */}
<div className="flex flex-col gap-8 lg:hidden">
  {skillGroupsMobile.map((group) => (
    <div key={group.title} className="flex flex-col gap-4">
      <h3 className="text-sm tracking-[0.3em] text-brand uppercase">{group.title}</h3>
      <div className="grid grid-cols-4 gap-y-6 rounded-lg bg-card pt-6 pb-4 px-2">
        {group.tools.map((t) => <ToolTile key={t} name={t} />)}
      </div>
    </div>
  ))}
</div>

 {/* desktop */}
        <div className="hidden gap-10 lg:grid lg:grid-cols-[2fr_3fr_2fr]">

       {skillGroups.map((group) => (
    <div key={group.title} className="flex flex-col gap-4">
      <h3 className="text-center text-sm tracking-[0.3em] text-brand uppercase">{group.title}</h3>
      <div className={`grid flex-1 ${group.cols} gap-x-10 gap-y-8 rounded-2xl bg-card p-10`}>
        {group.tools.map((t) => <ToolTile key={t} name={t} />)}
      </div>
    </div>
  ))}
        </div>




      </section>

      {/* Footer */}
      <Footer></Footer>
    </div>
  )
}

export default AboutMePage
