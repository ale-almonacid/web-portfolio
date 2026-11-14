import { NavLink, useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import NotFoundImage from "@/assets/not-found/not-found.png"

function NotFoundPage() {
  const navigate = useNavigate()
  return (
     <div id="Page container" className="max-w-6xl mx-auto flex flex-col items-center justify-center px-[5vw] py-16 text-center md:min-h-svh">
      
    
      <div
        aria-hidden="true"
        className="aspect-[2/3] w-48 lg:w-60 rounded-2xl border border-border bg-muted bg-cover bg-center"
        style={{ backgroundImage: `url(${NotFoundImage})` }}
      />

      <h1 className="mt-12 text-3xl font-regular tracking-[-.04em] text-foreground md:text-4xl">
        Page not found
      </h1>

      <p className="mt-3 max-w-md text-muted-foreground">
        We can't find the page you're looking for. It may have moved, or the link you followed may be broken.
      </p>

      <div className="mt-8 flex gap-3">
        <Button size="lg" nativeButton={false} render={<NavLink to="/" />}>
          Back to home
        </Button>
        <Button size="lg" variant="outline" onClick={() => navigate(-1)}>
          Go back
        </Button>
      </div>
    
      </div>
  )
}

export default NotFoundPage