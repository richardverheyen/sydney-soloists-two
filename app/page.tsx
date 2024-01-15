import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Musicians from "./Musicians";
import Testimonials from "./Testimonials";
import Recordings from "./Recordings";
import Contact from "./Contact";
import Footer from "./Footer";

const IndexPage = () =>  {
  return (
    <main className="">
      <Header />
      <Hero />
      <About />
      <Musicians />
      <Recordings />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

export default IndexPage
