import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import ProjectHero from "@/components/ProjectHero"
import { projects } from "@/data/projects"
import CardCTA from "@/components/CardCTA"
import NextProjectCard from "@/components/NextProjectCard"

function BetterLifePage() {

  const project = projects.find((p) => p.slug === "better-life")
   if (!project) return null

  return (
    <div id="Page container">
      <Navbar/>
      
        {/* Hero */}
       <ProjectHero project={project}>
        BetterLife is a cross-platform modular health habit tracker built with Flutter. As the founding product designer, I work closely with the developer-founder to <span className="font-semibold">shape the product direction</span>, define features, and lead UX/UI and brand development. Working within an AI-assisted workflow, <span className="font-semibold">I audit AI-generated prototypes</span>, identify usability issues and inconsistencies, eliminate generic or unnecessary design elements, and refine the experience through considered design decisions and <span className="font-semibold">feedback from early testers</span>.
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

export default BetterLifePage