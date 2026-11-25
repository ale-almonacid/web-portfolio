import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import ProjectHero from "@/components/ProjectHero"
import { projects } from "@/data/projects"
import { Separator } from "@/components/ui/separator"
import CardCTA from "@/components/CardCTA"
import NextProjectCard from "@/components/NextProjectCard"
import ProcessFlow, { type ProcessStep } from "@/components/ProcessFlow"
import LottieOnScroll from "@/components/LottieOnScroll"

//icons
import { Swords } from 'lucide-react'
import ArrowLong from "@/assets/devsectool-assets/Arrow 2.svg?react"


//images
import PrimaryUserIcon from "@/assets/devsectool-assets/primary-user.svg"
import DeliverablesIcon from "@/assets/devsectool-assets/deliverables.svg"
import SecondaryUserIcon from "@/assets/devsectool-assets/secondary-user.svg"
import DesSolution1 from "@/assets/devsectool-assets/04-1.png"
import Illustration1 from "@/assets/devsectool-assets/illustration1.lottie?url"
import Visuals1 from "@/assets/devsectool-assets/visuals1.png"
import DesSolution2 from "@/assets/devsectool-assets/04-2.png"
import DesSolution3 from "@/assets/devsectool-assets/04-3.png"
import DesSystem from "@/assets/devsectool-assets/design-system.png"
import FinalVisuals1 from "@/assets/devsectool-assets/visuals06.png"
import FinalVisuals2 from "@/assets/devsectool-assets/visuals06-2.png"
import FinalVisuals3 from "@/assets/devsectool-assets/visuals06-3.png"


const workflowSteps: ProcessStep[] = [
  {
    icon: PrimaryUserIcon,
    badge: "Primary user",
    title: "Security Officers",
    description: "Decide which security requirements must be implemented",
  },
  {
    icon: DeliverablesIcon,
    badge: "Deliverables",
    title: "Requirements files",
    description: (
      <>
        Long lists spread across <span className="font-semibold">multiple</span> spreadsheets and documents.
      </>
    ),
  },
  {
    icon: SecondaryUserIcon,
    badge: "Secondary user",
    title: "Implementation Team",
    description: "Developers who implement the requirements and report back when done.",
  },
]

function DevSecToolPage() {

  const project = projects.find((p) => p.slug === "devsectool")
   if (!project) return null

  return (
    <div id="Page container">
      <Navbar/>

      {/* Hero */}
      <ProjectHero project={project}>
        DevSecTool is a desktop web application commissioned by a <span className="font-semibold">large German bank</span> to improve the workflow of its cybersecurity experts. As the founding designer of the project, I owned the <span className="font-semibold ">end-to-end UX process</span>, from initial concept and design system development to final handoff. I collaborated with the bank’s stakeholders to gather requirements and feedback, worked closely with an <span className="font-semibold">Information security specialist</span> during the conceptual phase, and partnered with both front-end and back-end engineers throughout development, handoff and QA.
      </ProjectHero>


      {/* section 01 */}
      <section id="01" className="mx-auto flex w-full flex-col max-w-[1920px]   justify-between px-[5vw] xl:px-36">

        <Separator></Separator>

        <div id="content-wrapper" className=" flex flex-col gap-12 pt-16 pb-22 items-center">

        <div className="flex flex-col gap-1">

          <p className="text-5xl text-secondary pb-2">01.</p>
          <h2 className="text-xl">Background</h2>
          <h3 className="text-sm font-medium lg:text-base">A product meant for information security officers in the banking sector.</h3>
          <p className="text-sm/6 text-muted-foreground lg:text-[16px]/6.5">Every digital product a bank builds must follow security requirements from standards like ISO 27001, regulators and internal policies. To achieve this, the usual workflow is the following: security officers decide which requirements apply, developers implement them, and officers check that everything is in place, often before an audit or certification.</p>
        </div>
    
        <ProcessFlow steps={workflowSteps}/>

        <div id="CTA-challenge" className="dark p-4 bg-bluegray-900 rounded-md flex flex-col gap-2">
          <Swords className="text-sky-accent"></Swords>

          <div className="flex flex-col gap-1">

          <div className="fle flex-col gap-1">
          <h2 className="text-xl text-foreground">My challenge</h2>
          <h3 className="text-sm font-medium text-foreground lg:text-base">Understanding users in a technical, unfamiliar field (information security)</h3>
          </div>
          <p className="text-sm/6 text-muted-foreground lg:text-[16px]/6.5">Before joining, I had no background in information security. I learned the workflow from our security specialist and the bank's stakeholders in feedback meetings, to identify the users, their needs, workflows and constraints.</p>
          </div>

        </div>
        

        </div>



      </section>

      {/* section 02-03 */}
      <section id="02-03" className="mx-auto flex w-full flex-col max-w-[1920px] items-center justify-between px-[5vw] xl:px-36 ">

        <Separator></Separator>

        <div id="columns-wrapper" className="flex w-full flex-col gap-10 pt-20 pb-28 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-start lg:gap-16">

        <div className="flex flex-col gap-2">

        <p className="text-5xl text-secondary pb-2">02.</p>
        <h2 className="text-xl">Pain points definition (problem)</h2>
        <ol className="list-decimal pl-6 text-sm/6 text-muted-foreground lg:text-[16px]/6.5 marker:font-semibold">
          <li><span className="font-semibold">Decentralised documentation.</span> Requirements were spread across thousands of files.</li>
          <li><span className="font-semibold">Repetitive work.</span> Similar products meant a lot of copy-pasting of the same requirements.</li>
          <li><span className="font-semibold">No traceability.</span> Hard to see what was done, who owned it and what was open.</li>
          <li><span className="font-semibold">Cyclic work.</span> Standards like ISO 27001 and regulations are updated every year or half year, so the whole process had to be done again each time.</li>
        </ol>
        </div>


        <div className="flex items-center justify-center lg:self-stretch">
          <ArrowLong className="shrink-0 rotate-90 lg:rotate-0"></ArrowLong>
        </div>

        <div className="flex flex-col gap-2">
        <p className="text-5xl text-secondary pb-2">03.</p>
        <h2 className="text-xl">Scope definition (solution)</h2>
        <ol className="list-decimal pl-6 text-sm/6 text-muted-foreground lg:text-[16px]/6.5 marker:font-semibold">
          <li><span className="font-semibold">One platform.</span> All requirements, owners and progress in one place.</li>
          <li><span className="font-semibold">Reusable templates.</span> Set up requirements once and reuse them across similar products.</li>
          <li><span className="font-semibold">Implementation status.</span> Developers update progress, and officers see at a glance what's done.</li>
          <li><span className="font-semibold">Data dependencies.</span> Requirements stay linked to their source, so when a regulation changes, it's clear what needs to be updated.</li>
        </ol>
        </div>

        </div>

        
    

      </section>

      {/* section 04 */}
      <section id="04" className="mx-auto flex flex-col pb-16 items-center">

        <div className="mx-auto flex flex-col w-full max-w-[1920px]   justify-between px-[5vw] xl:px-36">

        <Separator></Separator>

        </div>


        <div id="content-wrapper" className=" w-full max-w-[1920px] justify-between px-[5vw] xl:px-36 pt-16 pb-6">

        <div className="flex flex-col gap-1">

          <p className="text-5xl text-secondary pb-2">04.</p>
          <h2 className="text-xl">Design decisions</h2>
          <p className="text-sm/6 text-muted-foreground lg:text-[16px]/6.5">As the founding product designer, my role was also deeply conceptual. I had to understand what security officers actually do, what they need, and the patterns they already rely on. Here are a few of the design decisions that came out of that.</p>
        </div>


        

        </div>

        <div id="columns1" className="flex flex-col gap-8 items-center py-12 lg:flex-row lg:gap-0 mx-auto w-full max-w-[1632px] bg-cover bg-center">
        <img src={DesSolution1} alt="" className="w-full lg:w-[45%] lg:rounded-r-[24px] lg:border lg:border-border/40 "/>

        <div className="px-[5vw] xl:px-36 flex flex-col gap-1 ">
          <h3 className="text-sm font-medium lg:text-base">Information structure</h3>
          <p className="text-sm/6 text-muted-foreground lg:text-[16px]/6.5">Instead of keeping the requirements as plain text, the information was structured as connected objects to preserve their dependencies. My contribution was suggesting a collapsible tree as the best way to show the relations between objects and give a quick overview, plus distinct icons for each object type, for easier recognition at a glance.</p>

           <LottieOnScroll src={Illustration1} className="lg:mt-10 aspect-[657/502] w-full lg:w-4/5" />
          
        </div>


        </div>

        <div id="columns2" className="flex flex-col-reverse gap-8 items-center py-12 lg:flex-row lg:gap-0 mx-auto w-full max-w-[1632px] bg-cover bg-center">

        <div className="px-[5vw] xl:px-36 flex flex-col gap-1 ">
          <h3 className="text-sm font-medium lg:text-base">Template reusability</h3>
          <p className="text-sm/6 text-muted-foreground lg:text-[16px]/6.5">After long discussions with the information security officers I worked with, I understood how important reusability was for this product. The same recommendations apply to many products and assets, and officers already had their own templates. So we added a template builder: every product or asset in the platform is built from a template, like a master component in Figma with its instances.</p>

           <img src={Visuals1} alt="" className="w-full pt-10 lg:w-4/5" />
          
        </div>

        <img src={DesSolution2} alt="" className="w-full lg:w-[45%] lg:rounded-l-[24px] lg:border lg:border-border/40"/>

        </div>

        <div id="columns3" className="flex flex-col gap-8 items-center py-12 lg:flex-row lg:gap-0 mx-auto w-full max-w-[1632px] bg-cover bg-center">
        <img src={DesSolution3} alt="" className="w-full lg:w-[45%] lg:rounded-r-[24px] lg:border lg:border-border/40"/>

        <div className="px-[5vw] xl:px-36 flex flex-col gap-1 ">
          <h3 className="text-sm font-medium lg:text-base">Control & Traceability</h3>
          <p className="text-sm/6 text-muted-foreground lg:text-[16px]/6.5">Thanks to the tree structure and the template logic, officers no longer copy and paste the same paragraphs for every similar asset. Instead, they review the template base and switch off what doesn't apply, one requirement at a time or a whole chapter at once by toggling its parent object. My contribution here was the on/off toggle mechanism.</p>

           <img src={Visuals1} alt="" className="w-full pt-10 lg:w-4/5" />
          
        </div>


        </div>


      </section>

       {/* section 05 */}
       <section id="05" className="mx-auto flex w-full flex-col max-w-[1920px]   justify-between px-[5vw] xl:px-36">

        <Separator></Separator>

        <div id="content-wrapper" className=" flex flex-col gap-12 pt-16 pb-22 items-center">

        <div className="flex flex-col gap-1">

          <p className="text-5xl text-secondary pb-2">05.</p>
          <h2 className="text-xl">Design system</h2>
          <p className="text-sm/6 text-muted-foreground lg:text-[16px]/6.5">The design system started from Ant Design, which at the time felt quite angular and rigid. My mission was to use it as a reference and give it our own style. I built it in 2022 and kept evolving it until the end of the project. It grew into a library of 100+ core components and 330+ component sets, with 65 color styles, 11 text styles and 460+ icons, covering everything from buttons and tables to product-specific patterns like the security catalog. I handed designs off to developers through Zeplin.</p>
        </div>
    
        <img src={DesSystem}  alt="" />
        
        </div>



      </section>

         {/* section 06 */}
       <section id="06" className="mx-auto flex w-full flex-col max-w-[1920px]   justify-between px-[5vw] xl:px-36">

        <Separator></Separator>

        <div id="content-wrapper" className=" flex flex-col gap-12 pt-16 pb-22 items-center">

        <div className="flex flex-col gap-1">

          <p className="text-5xl text-secondary pb-2">06.</p>
          <h2 className="text-xl">Outcome</h2>
          <p className="text-sm/6 text-muted-foreground lg:text-[16px]/6.5">Over four years, I designed the product end to end, from the first concepts to a full web platform covering workspaces, compliance, gap analysis, risk assessment and administration, all built on a design system of 100+ core components.</p>
        </div>

        <div id="bento" className="grid w-full grid-cols-2 gap-[4vw] md:gap-6">
          <img src={FinalVisuals1} alt="" className="col-span-2 w-full rounded-sm lg:rounded-lg" />
          <img src={FinalVisuals2} alt="" className="w-full rounded-sm lg:rounded-lg" />
          <img src={FinalVisuals3} alt="" className="w-full rounded-sm lg:rounded-lg" />
        </div>

        <div className="w-full flex flex-col gap-4">
        <p className="text-sm/6 text-muted-foreground lg:text-[16px]/6.5">Note: The bank's contract ended in 2025 and the source code was handed over to them, so the product is no longer in active development.</p>
        <h3 className="text-xl">Thanks for reading!</h3>
        </div>
        
        </div>



      </section>
      
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

export default DevSecToolPage