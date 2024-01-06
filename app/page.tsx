import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Musicians from "./Musicians";
import Testimonials from "./Testimonials";
import Recordings from "./Recordings";
import Contact from "./Contact";

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
    </main>
  )
}

export default IndexPage
