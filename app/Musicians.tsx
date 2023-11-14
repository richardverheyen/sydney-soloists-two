const persons = [
  { 
    name: 'Frank Celata', 
    instrument: 'Clarinet' ,
    image: 'https://www.sydneymozartsociety.com.au/media/42298/5_ss_frank_celata.jpg'
  },
  { 
    name: 'Tobias Breider', 
    instrument: 'Violin' ,
    image: 'https://www.sydneymozartsociety.com.au/media/42318/5_ss_tobias_brieder.jpg'
  },
  // { 
  //   name: 'Daniel Herscovitch', 
  //   instrument: 'Piano' ,
  //   image: 'https://www.sydneymozartsociety.com.au/media/46777/5_ss_daniel_h_biography.jpg'
  // },
  { 
    name: 'Andrew Haveron', 
    instrument: 'Violin' ,
    image: 'https://www.sydneymozartsociety.com.au/media/42308/5_ss_andrew_haveron.jpg'
  },
  { 
    name: 'Umberto Clerici', 
    instrument: 'Cello' ,
    image: 'https://www.sydneymozartsociety.com.au/media/42313/5_ss_umberto_clerici.jpg'
  },
  { 
    name: 'Robert Johnson', 
    instrument: 'Horn' ,
    image: 'https://www.sydneymozartsociety.com.au/media/46772/robert-johnson-photo-credit-keith-saunders.jpg'
  },
  { 
    name: 'Frank Celata', 
    instrument: 'Clarinet' ,
    image: 'https://www.sydneymozartsociety.com.au/media/42298/5_ss_frank_celata.jpg'
  },
]

export default function Musicians() {
  return (
    <div id="about-us" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {
            persons.map(p => Person({person: p}))
          }
        </ul>
      </div>
    </div>
  )
}

function Person({person}: any) {
  return (
    <li className="flex flex-col items-center py-10 px-8 rounded-2xl bg-gray-800 hover:bg-violet-700 cursor-pointer">
      <div className="relative w-56 h-56 rounded-full overflow-hidden bg-white">
        <img className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2" src={person.image} alt="" />
      </div>
      <h3 className="text-center text-base text-white leading-7 tracking-tight font-semibold mt-6">{person.name}</h3>
      <p className="text-center text-sm leading-6 text-gray-400">{person.instrument}</p>
      <ul className="grid grid-cols-2 gap-6 mt-6 text-gray-400">
        <li className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        </li>

        <li className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
        </li>
      </ul>
    </li>
  )
}