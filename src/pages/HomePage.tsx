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
          <h1 className="max-w-2xl text-3xl md:text-4xl leading-tight font-normal text-foreground tracking-[-.04em]">
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
            
            </div>
        </section>



        {/* cta-section */}
      <section id="cta-section" className="mx-auto pt-14 pb-24 xl:py-28 px-[5vw] xl:px-36 max-w-[1920px]">

        <div className="grid gap-10 md:grid-cols-2 px-[5vw] xl:px-24">
        <CardCTA
    eyebrow="View About Me"
    title="Read my story"
    description="I’m a Colombian Product Designer based in Berlin, trained in Milan. 5+ years designing fintech and B2B products at startups, from first sketch to design system. Now also building them in React."
    tags="Product design · Design systems · Front-end (React)"
    to="/about-me"
  />
    <CardCTA
    eyebrow="Designed & coded by me"
    title="About this portfolio"
    description="This site was fully designed and coded by me, with dedicated layouts and components for mobile, desktop and large screens. Not just responsive adaptations, but carefully crafted experiences for every screen size."
    tags="Figma · React · TypeScript · Tailwind"
    to="https://github.com/ale-almonacid/web-portfolio"
  />
</div>

      </section>


      {/* Footer */}

      <Footer></Footer>
      
    </div>
  )
}

export default HomePage