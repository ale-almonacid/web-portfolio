import { NavLink } from "react-router"
import { ArrowUpRight } from "lucide-react"

type CardCTAProps = {
  eyebrow: string
  title: string
  description: string
  tags?: string
  to: string
}

function CardCTA({ eyebrow, title, description, tags, to }: CardCTAProps) {
  return (
     <NavLink
      to={to}
      className="group flex flex-col rounded-xl bg-card p-8 text-card-foreground transition-colors hover:bg-secondary justify-between"
    >
        <div>

      <p className="text-sm text-muted-foreground">{eyebrow}</p>
      <h3 className="mt-1 text-3xl tracking-[-.03em]">{title}</h3>
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {tags && (
        <p className="mt-4 text-sm font-semibold text-muted-foreground">{tags}</p>
      )}
        </div>
      <ArrowUpRight className="mt-10 size-6 self-end transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </NavLink>
  )
}

export default CardCTA