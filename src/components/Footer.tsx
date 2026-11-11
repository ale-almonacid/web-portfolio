import LinkedinIcon from "@/assets/linkedin.svg?react"
import GithubIcon from "@/assets/github.svg?react"
import BehanceIcon from "@/assets/behance.svg?react"   

function Footer() {
  return (
    <footer className=" mx-auto max-w-[1920px]">

        <div className="flex flex-col gap-6 justify-between py-10 px-8 border-t border-border mx-[5vw] md:flex-row xl:mx-36">

        <div>
          <p className="text-foreground">Alejandra Almonacid</p>
          <a
            href="mailto:alejandraalmonacidayala@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            alejandraalmonacidayala@gmail.com
          </a>
        </div>
        <div className="flex flex-row justify-between md:flex-col items-end gap-2">
          <div className="flex items-center gap-3.5 text-foreground">
            <a href="https://www.linkedin.com/in/alejandraalmonacid/" aria-label="LinkedIn" target="_blank">
              <LinkedinIcon className="text-foreground" aria-hidden />

            </a>
            <a href="https://github.com/ale-almonacid" aria-label="GitHub" target="_blank">
              <GithubIcon className="text-foreground" aria-hidden />

            </a>
            <a href="https://www.behance.net/alejandraalmonacid" aria-label="Behance" target="_blank" className="font-bold">
              <BehanceIcon className="text-foreground" aria-hidden />

            </a>
          </div>
          <p className="text-sm text-muted-foreground">©2026</p>
        </div>

        </div>

      </footer>
  )
}

export default Footer