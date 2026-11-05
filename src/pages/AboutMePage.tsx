import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


function AboutMePage() {
  return (
    <div id="Page container" className="">
      <Navbar/>
      

      {/* Hero */}
        <section id="hero" className="flex flex-col justify-between pt-20 pb-5 mx-auto px-[5vw] xl:px-36 max-w-[1920px]">

            <div className="pb-24">
          <h1 className="max-w-2xl text-4xl leading-tight font-normal text-foreground tracking-[-.04em]">
            Hi! I’m Alejandra,
            5+ experienced Product Designer based in Berlin, Germany. Becoming Design Engineer 
          </h1>
          
          
          

            </div>

          
        </section>

       {/* Footer */}
      <Footer></Footer>
      </div>
  )
}

export default AboutMePage