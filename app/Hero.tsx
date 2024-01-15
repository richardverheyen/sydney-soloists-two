
"use client";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const scrollToContact = (e: any) => {
  e.preventDefault();
  const contactElement = document.getElementById("contact");
  if (contactElement) {
    window.scrollTo({
      top: contactElement.offsetTop - 60,
      behavior: 'smooth',
    });
  }
};

const scrollToRecordings = (e: any) => {
  e.preventDefault();
  const recordingsElement = document.getElementById("recordings");
  if (recordingsElement) {
    window.scrollTo({
      top: recordingsElement.offsetTop - 60,
      behavior: 'smooth',
    });
  }
};

const Hero = () => {
  let videosrc = "/orchestra-example.mp4";

  return (
    <div className="fixed top-0 w-full h-full">
      <div className="relative isolate px-6 pt-[72px] lg:px-8 overflow-hidden">
        <ReactPlayer
          url={videosrc}
          className="absolute opacity-50 -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 !min-w-full !min-h-full !h-full !w-[400%] desktop:!w-full desktop:!h-[200%] max:!w-[1440px] max:!h-[810px]"
          light={false}
          muted={true}
          loop={true}
          playing={true}
          playsinline={true}
        />
      
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
      {/* <div className="hidden sm:mb-8 lg:flex">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Currently in Pre-Alpha testing phase.{" "}
          <a href="#" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div> */}
      <div className="text-center lg:text-left my-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          The Sydney Soloists
        </h1>
        <p className="mt-6 text-lg leading-8">
          playing masterpieces from the chamber music literature of the 18th,
          19th and 20th&nbsp;century
        </p>
        <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
          <a
            href="#"
            onClick={scrollToContact} 
            className="rounded-md text-white bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get in touch
          </a>
          <a href="#" onClick={scrollToRecordings} className="text-sm font-semibold leading-6">
            Listen to our work <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
