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
        DevSecTool is a desktop web application commissioned by a <span className="font-semibold">large German bank</span> to improve the workflow of its cybersecurity experts. As the founding designer of the project, I owned the <span className="font-semibold ">end-to-end UX process</span>, from initial concept and design system development to final handoff. I collaborated with the bank’s stakeholders to gather requirements and feedback, worked closely with an <span className="font-semibold">Information security specialist</span> during the conceptual phase, and partnered with both front-end and back-end engineers throughout development, handoff and QA.
      </ProjectHero>

      {/* Footer */}
      <Footer></Footer>
      
      
    </div>
  )
}

export default BetterLifePage