import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-cream">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <iframe
          className="absolute opacity-20 inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          src="https://www.youtube.com/embed/CYjmnWrJa6s?si=ucFPcp2zTlPlyJ34?mute=1&amp;autoplay=1&amp;controls=0&amp;start=144"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <div className="lg:flex">
          <HeroLeft />
          <div className="m-auto w-[260px]"></div>
        </div>
      </div>
    </div>
  );
};

const HeroLeft = () => {
  return (
    <section className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
      {/* <div className="hidden sm:mb-8 lg:flex">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Currently in Pre-Alpha testing phase.{" "}
          <a href="#" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div> */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          The Sydney Soloists
        </h1>
        <p className="mt-6 text-lg leading-8">
          playing masterpieces from the chamber music literature of the 18th,
          19th and 20th&nbsp;century
        </p>
        <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
          <a
            href="#recordings"
            className="rounded-md text-white bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get in touch
          </a>
          <a href="#" className="text-sm font-semibold leading-6">
            Listen to our work <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
