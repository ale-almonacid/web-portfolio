import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import ProjectHero from "@/components/ProjectHero"
import { projects } from "@/data/projects"

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
       

      {/* Footer */}
      <Footer></Footer>
      
      
    </div>
  )
}

export default ItinotePage