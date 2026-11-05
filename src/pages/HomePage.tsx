import { NavLink } from "react-router"
import { ArrowUpRight } from "lucide-react"

import Navbar from "@/components/Navbar"
import CardCTA from "@/components/CardCTA"
import Footer from "@/components/Footer"
import { projects } from "@/data/projects"
import ProjectCardDesktop from "@/components/ProjectCardDesktop"
import ProjectCardMobile from "@/components/ProjectCardMobile"



function HomePage() {
  return (
     <div id="Page container" className="">
     
      <Navbar/>
      {/* Hero */}
        <section id="hero" className="flex flex-col justify-between pt-20 pb-5  mx-auto px-[5vw] xl:px-36 max-w-[1920px]">

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
                <div key={project.slug}>
                    <div className="hidden xl:block"><ProjectCardDesktop project={project} /></div>
                    <div className="xl:hidden"><ProjectCardMobile project={project} /></div>
                </div>
                ))}
            {/* {projects.map((project) => (
                <ProjectCardDesktop key={project.slug} project={project} />
            ))} */}
            </div>
        </section>



        {/* cta-section */}
      <section id="cta-section" className="mx-auto py-28 px-[5vw] lx:px-36 max-w-[1920px]">

        <div className="grid gap-10 md:grid-cols-2 px-[5vw] xl:px-24">
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

      <Footer></Footer>
      
    </div>
  )
}

export default HomePage