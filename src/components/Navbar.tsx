import { NavLink } from "react-router"

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm sm:text-base rounded-sm text-foreground px-2 md:px-3 py-1.5 transition-colors ${
    isActive ? "bg-secondary" : "hover:bg-secondary/60"
  }`

function Navbar() {
  return (
    <div className="flex flex-row justify-between py-4 items-center mx-auto  sticky top-0 z-50 bg-background backdrop-blur-sm px-[5vw] xl:px-36 max-w-[1920px]">
        <header className="text-foreground items-center text-sm sm:text-base">Alejandra Almonacid</header>
        <div className="flex flex-row gap-1 md:gap-2">
           <NavLink to="/" end  className={linkClass}>Portfolio</NavLink>
           <NavLink to="/about-me" end className={linkClass}>About me</NavLink>
        </div>

    </div>
  )
}

export default Navbar