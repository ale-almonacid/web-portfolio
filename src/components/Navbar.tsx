import { NavLink } from "react-router"

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-sm px-3 py-1.5 text-foreground transition-colors ${
    isActive ? "bg-secondary" : "hover:bg-secondary/60"
  }`

function Navbar() {
  return (
    <div className="flex flex-row justify-between py-4 items-center">
        <header className="text-foreground items-center">Alejandra Almonacid</header>
        <div className="flex flex-row gap-2">
           <NavLink to="/" end className={linkClass}>Portfolio</NavLink>
           <NavLink to="/about-me" end className={linkClass}>About me</NavLink>
        </div>

    </div>
  )
}

export default Navbar