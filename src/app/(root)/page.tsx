import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Who from "@/components/Who"
import Why from "@/components/Why"
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Qa from "@/components/QA";
import News from "@/components/News";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Who/>
        <Why/>
        <Work/>
        <Testimonials/>
        <Qa/>
        <News/>
        <Footer/>
    </div>
  )
}
export default page