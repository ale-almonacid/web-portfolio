import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

function DevSecToolPage() {
  return (
    <div id="Page container">
      <Navbar/>
      {/* Hero */}
        <section id="hero" className="flex flex-col justify-between pt-20 pb-5  mx-auto px-[5vw] xl:px-36 max-w-[1920px]">

            <div className="pb-24">
          <h1 className="max-w-2xl text-3xl md:text-4xl leading-tight font-normal text-foreground tracking-[-.04em]">
            DevSecTool
          </h1>
            </div>

        </section>

      {/* Footer */}
      <Footer></Footer>
      
      
    </div>
  )
}

export default DevSecToolPage