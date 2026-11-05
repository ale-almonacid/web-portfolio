import Linkedin from "@/assets/linkedin.svg"
import Github from "@/assets/github.svg"
import Behance from "@/assets/behance.svg"

function Footer() {
  return (
    <footer className=" mx-auto max-w-[1920px]">

        <div className="flex items-end justify-between py-10 px-8 border-t border-border mx-[5vw] xl:mx-36">

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
  )
}

export default Footer