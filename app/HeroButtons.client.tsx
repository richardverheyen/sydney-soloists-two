"use client";

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

  export default function HeroButtons() {
    return <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
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
  }
