
import Linkedin from "@/assets/linkedin.svg"
import Github from "@/assets/github.svg"
import Behance from "@/assets/behance.svg"

import { NavLink } from "react-router"
import { ArrowUpRight } from "lucide-react"

import Navbar from "@/components/Navbar"
import CardCTA from "@/components/CardCTA"
import { projects } from "@/data/projects"
import ProjectCardDesktop from "@/components/ProjectCardDesktop"

function HomePage() {
  return (
     <div id="Page container" className="">
     
      <Navbar/>
      {/* Hero */}
        <section id="hero" className="flex flex-col justify-between pt-20 pb-5 px-36 mx-auto max-w-[1920px]">

            <div className="pb-24">
          <h1 className="max-w-2xl text-4xl leading-tight font-normal text-foreground tracking-[-.04em]">
            Product Designer · Design Engineer building products with purpose
            and sweat over <span className="text-brand">details</span>
          </h1>
          <NavLink
            to="/about-me"
            className="mt-4 inline-flex items-center gap-1  text-brand hover:underline"
          >
            More about me <ArrowUpRight className="size-4" />
          </NavLink>

            </div>

          <p className="text-brand tracking-[0.25em] uppercase">Selected Work</p>
        </section>

        {/* project section */}
        <section>
            <div className=" flex flex-col gap-8">
  {projects.map((project) => (
    <ProjectCardDesktop key={project.slug} project={project} />
  ))}
</div>
        </section>



        {/* cta-section */}
      <section id="cta-section" className="mx-auto py-28 px-36 max-w-[1920px]">

        <div className="grid gap-10 md:grid-cols-2 px-24">
        <CardCTA
    eyebrow="View About Me"
    title="Read my story"
    description="Hi! Colombian product designer in Berlin, trained in Milan. 5+ years designing fintech and mobile products at startups, now also building them in React."
    tags="Product design · Design systems · Front-end (React)"
    to="/about-me"
  />
    <CardCTA
    eyebrow="View Me After Work"
    title="Outside of the screen"
    description="..."
    to="/about-me#outside"
  />
</div>

      </section>


      {/* Footer */}
      <footer className="  mx-auto max-w-[1920px]">

        <div className="flex items-end justify-between mx-36 py-10 px-8 border-t border-border">

        <div>
          <p className="text-foreground">Alejandra Almonacid</p>
          <a
            href="mailto:alejandraalmonacidayala@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            alejandraalmonacidayala@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-3 text-foreground">
            <a href="https://www.linkedin.com/in/alejandraalmonacid/" aria-label="LinkedIn" target="_blank">
              <img src={Linkedin} alt="" />
            </a>
            <a href="https://github.com/ale-almonacid" aria-label="GitHub" target="_blank">
              <img src={Github} alt="" />
            </a>
            <a href="https://www.behance.net/alejandraalmonacid" aria-label="Behance" target="_blank" className="font-bold">
              <img src={Behance} alt="" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">©2026</p>
        </div>

        </div>

      </footer>
    </div>
  )
}

export default HomePage