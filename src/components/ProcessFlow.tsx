import type { ReactNode } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

import { useInView } from "@/hooks/useInView"

export type ProcessStep = {
  icon: string
  badge: string
  title: string
  description: ReactNode
}

type Props = { steps: ProcessStep[] }

function ProcessFlow({ steps }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div className="w-full lg:py-16">
      {/* Padding lives on the outer div, so the arrow below is positioned
          against this inner box and stays aligned with the icons. */}
      <div ref={ref} className="relative">
        {/* Horizontal arrow behind the steps (lg and up). It starts just after
            the first icon and ends just before the last one, at the icons'
            vertical centre. */}
        <div
          aria-hidden
          className="absolute top-10 right-[calc(100%/6+3.5rem)] left-[calc(100%/6+3.5rem)] hidden lg:block"
        >
          <div
            className={`h-0.5 origin-left bg-border transition-transform duration-1000 ease-out motion-reduce:transition-none ${
              inView ? "scale-x-100" : "scale-x-0"
            }`}
          />
          <ChevronRight
            className={`absolute -top-[11px] -right-2.5 size-6 text-border transition-opacity duration-300 motion-reduce:transition-none ${
              inView ? "opacity-100 delay-900" : "opacity-0"
            }`}
            strokeWidth={1.5}
          />
        </div>

        <ol className="relative mx-auto grid max-w-58 gap-15 lg:max-w-none lg:grid-cols-3 lg:gap-6">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative flex flex-col items-center text-center"
            >
              <img src={step.icon} alt="" className="h-16 w-auto lg:h-20" />

              <span className="mt-3 rounded-sm bg-[#0947F1]/10 px-2 py-[3px] text-xs text-[#082A88] dark:bg-sky-accent/20 dark:text-sky-accent">
                {step.badge}
              </span>

              <h3 className="mt-1 text-md lg:text-xl text-foreground">{step.title}</h3>

              <p className=" max-w-xs text-xs/5 text-muted-foreground lg:text-[16px]/6.5">
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <VerticalConnector withArrowhead={i === steps.length - 2} />
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

// Vertical line in the gap below a step (below lg). Each segment grows from top
// to bottom when it scrolls into view; the last one ends in an arrowhead.
function VerticalConnector({ withArrowhead }: { withArrowhead: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>(1)

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute top-full left-1/2 mt-3 h-8 -translate-x-1/2 lg:hidden"
    >
      <div
        className={`h-full w-0.5 origin-top bg-border transition-transform duration-700 ease-out motion-reduce:transition-none ${
          inView ? "scale-y-100" : "scale-y-0"
        }`}
      />
      {withArrowhead && (
        <ChevronDown
          className={`absolute -bottom-2.5 left-1/2 size-6 -translate-x-1/2 text-border transition-opacity duration-300 motion-reduce:transition-none ${
            inView ? "opacity-100 delay-600" : "opacity-0"
          }`}
          strokeWidth={1.5}
        />
      )}
    </div>
  )
}

export default ProcessFlow
