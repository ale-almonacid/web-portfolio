import Navbar from "@/components/Navbar"

import Linkedin from "@/assets/linkedin.svg"
import Github from "@/assets/github.svg"
import Behance from "@/assets/behance.svg"

function AboutMePage() {
  return (
    <div id="Page container" className="">
      <Navbar/>
      

      {/* Hero */}
        <section id="hero" className="flex flex-col justify-between pt-20 pb-5 px-36 mx-auto max-w-[1920px]">

            <div className="pb-24">
          <h1 className="max-w-2xl text-4xl leading-tight font-normal text-foreground tracking-[-.04em]">
            Hi! I’m Alejandra,
            5+ experienced Product Designer based in Berlin, Germany. Becoming Design Engineer 
          </h1>
          
          
          

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

export default AboutMePage