import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import ProjectHero from "@/components/ProjectHero"
import { projects } from "@/data/projects"

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

      {/* Footer */}
      <Footer></Footer>
      
      
    </div>
  )
}

export default BetterLifePage