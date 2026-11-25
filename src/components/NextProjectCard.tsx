import { Link } from "react-router"
import { ArrowRight } from "lucide-react"

import { projects } from "@/data/projects"

type Props = { currentSlug: string }

function NextProjectCard({ currentSlug }: Props) {
  // The project after the current one in projects.ts. After the last project
  // it wraps around to the first, so there is always a next project.
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <Link
      to={`/projects/${next.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-card text-card-foreground"
    >
      <div className="p-8 transition-colors group-hover:bg-secondary">
        <p className="text-sm text-muted-foreground">More of My Work</p>
        <h3 className="mt-1 flex items-center gap-4 text-2xl tracking-[-.03em] md:text-3xl">
          Check my next project
          <ArrowRight className="size-6 shrink-0 transition-transform group-hover:translate-x-1" />
        </h3>
        <span className="sr-only">: {next.title}</span>
      </div>

      {next.ovImage && (
        <div className="relative min-h-56 flex-1 overflow-hidden">
          <img
            src={next.ovImage}
            alt=""
            className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}
    </Link>
  )
}

export default NextProjectCard
