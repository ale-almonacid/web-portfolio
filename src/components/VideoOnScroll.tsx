import { useEffect, useRef } from "react"

import { useInView } from "@/hooks/useInView"

type Props = {
  src: string
  className?: string
}

// Plays a short muted video once, when it scrolls into view. Without `loop`,
// a video stops on its last frame when it ends, so it stays there.
function VideoOnScroll({ src, className = "" }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!inView || !video) return

    // People who turned on "reduce motion" see the final frame straight away.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const showLastFrame = () => {
        video.currentTime = video.duration
      }
      if (video.readyState >= 1) showLastFrame()
      else video.addEventListener("loadedmetadata", showLastFrame, { once: true })
      return
    }

    // play() returns a promise that rejects if the browser blocks playback;
    // the video then just keeps showing its first frame.
    video.play().catch(() => {})
  }, [inView])

  return (
    <div ref={ref} aria-hidden className={className}>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        className="size-full"
      />
    </div>
  )
}

export default VideoOnScroll
