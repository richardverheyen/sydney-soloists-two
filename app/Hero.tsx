import HeroVideo from "./HeroVideo.client";
import HeroButtons from "./HeroButtons.client";

const Hero = () => {
  return (
    <div className="fixed top-0 w-full h-full">
      <div className="relative isolate px-6 pt-[72px] lg:px-8 overflow-hidden">
        <HeroVideo />
      
        <div className="lg:flex max-w-7xl mx-auto">
          <HeroLeft />
          <div className="m-auto w-[260px]"></div>
        </div>
      </div>
    </div>
  );
};

const HeroLeft = () => {
  return (
    <section className="mx-auto max-w-4xl h-[532px] sm:h-[612px] lg:h-[644px] flex justify-center">
      <div className="text-center lg:text-left my-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          The Sydney Soloists
        </h1>
        <p className="mt-6 text-lg leading-8">
          playing masterpieces from the chamber music literature of the 18th,
          19th and 20th&nbsp;century
        </p>
        <HeroButtons />
      </div>
    </section>
  );
};

export default Hero;
