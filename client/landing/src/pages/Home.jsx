import Helmet from "../components/atom/Helmet"
import Partners from "../components/molecules/Partners"
import About from "../components/organism/About"
import Blog from "../components/organism/Blog"
import CtaOne from "../components/organism/CtaOne"
import Faq from "../components/organism/Faq"
import Features from "../components/organism/Features"
import Hero from "../components/organism/Hero"
import Pricing from "../components/organism/Pricing"
import Roadmap from "../components/organism/Roadmap"
import Services from "../components/organism/Services"
import Testimonial from "../components/organism/Testimonial"

const Home = () => {
  return (
    <>
      <Helmet title={"Home"}/>
      <Hero />
      <Partners />
      <About />
      <Features />
      <Services />
      <Roadmap />
      <Pricing />
      <Blog />
      <Testimonial />
      <Faq />
      <CtaOne />
    </>
  )
}

export default Home