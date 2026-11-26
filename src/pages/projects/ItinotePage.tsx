import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import ProjectHero from "@/components/ProjectHero"
import { projects } from "@/data/projects"
import CardCTA from "@/components/CardCTA"
import NextProjectCard from "@/components/NextProjectCard"

function ItinotePage() {

   const project = projects.find((p) => p.slug === "itinote")
   if (!project) return null

  return (
    <div id="Page container">
      <Navbar/>

      {/* Hero */}
        <ProjectHero project={project}>
          Itinote is a minimalist itinerary planning app built to simplify travel planning by focusing on the essentials. I independently led the <span className="font-semibold">product definition</span>, UX/UI design, design system, and <span className="font-semibold">frontend implementation</span> in React, taking the project from Figma to a live product. Along the way, I explored design engineering by translating <span className="font-semibold">design tokens</span>, theme context, and reusable components into code, using Storybook to bridge design and development. The project has since evolved into a collaborative product, <span className="font-semibold">now live</span> with authentication, with ongoing backend development.
      </ProjectHero>

         {/* cta-section */}
      <section id="cta-section" className="mx-auto pb-24 xl:pb-28 px-[5vw] xl:px-36 max-w-[1920px]">

        <div className="grid gap-10 md:grid-cols-2 px-[5vw] xl:px-24">
        <CardCTA
    eyebrow="View About Me"
    title="Read my story"
    description="I’m a Colombian Product Designer based in Berlin, trained in Milan. 5+ years designing B2B SaaS products at startups, from first sketch to design system. Now also building them in React."
    tags="Product design · Design systems · Front-end (React)"
    to="/about-me"
  />
    <NextProjectCard currentSlug={project.slug} />
</div>

      </section>
       

      {/* Footer */}
      <Footer></Footer>
      
      
    </div>
  )
}

export default ItinotePage