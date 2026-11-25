import { useEffect, useState } from "react"
import { DotLottieReact, type DotLottie } from "@lottiefiles/dotlottie-react"

import { useInView } from "@/hooks/useInView"

type Props = {
  src: string
  className?: string
}

// Plays a .lottie animation once, when it scrolls into view. It doesn't loop,
// so it stops and stays on the last frame.
function LottieOnScroll({ src, className = "" }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null)

  useEffect(() => {
    if (!inView || !dotLottie) return

    const start = () => {
      // People who turned on "reduce motion" see the final frame straight away.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        dotLottie.setFrame(dotLottie.totalFrames - 1)
      } else {
        dotLottie.play()
      }
    }

    // The file may still be loading when the element scrolls into view.
    if (dotLottie.isLoaded) {
      start()
      return
    }
    dotLottie.addEventListener("load", start)
    return () => dotLottie.removeEventListener("load", start)
  }, [inView, dotLottie])

  return (
    <div ref={ref} aria-hidden className={className}>
      <DotLottieReact
        src={src}
        autoplay={false}
        loop={false}
        dotLottieRefCallback={setDotLottie}
        className="size-full"
      />
    </div>
  )
}

export default LottieOnScroll
