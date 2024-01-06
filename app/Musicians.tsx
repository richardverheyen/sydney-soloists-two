const persons = [
  { 
    name: 'Andrew Haveron', 
    firstName: 'Andrew', 
    instrument: 'Violin' ,
    image: 'https://www.sydneymozartsociety.com.au/media/42308/5_ss_andrew_haveron.jpg'
  },
  { 
    name: 'Anicka Skalova', 
    firstName: 'Anicka', 
    instrument: 'Violin' ,
    image: 'https://www.sydneysymphony.com/uploads/images/New-Musician-Headshots-230321/_1200x630_crop_center-center_82_none/2023-Anna-Skalova-Listing.jpg?mtime=1679369722'
  },
  { 
    name: 'Tobias Breider', 
    firstName: 'Tobias', 
    instrument: 'Viola' ,
    image: 'https://www.sydneymozartsociety.com.au/media/42318/5_ss_tobias_brieder.jpg'
  },
  { 
    name: 'Kees Boersma', 
    firstName: 'Kees', 
    instrument: 'Double Bass' ,
    image: 'https://www.sydneysymphony.com/uploads/images/New-Musician-Headshots-230321/_heroSmall/2023-Kees-Boersma-Detail.jpg'
  },
  { 
    name: 'Emma Scholl', 
    firstName: 'Emma', 
    instrument: 'Flute' ,
    image: 'https://www.sydneysymphony.com/uploads/images/New-Musician-Headshots-230321/_heroSmall/2023-Emma-Sholl-Detail.jpg'
  },
  { 
    name: 'Diana Doherty', 
    firstName: 'Diana', 
    instrument: 'Oboe' ,
    image: 'https://www.sydneysymphony.com/uploads/images/New-Musician-Headshots-230321/_1200x630_crop_center-center_82_none/2023-Diana-Doherty-Listing.jpg?mtime=1679369734'
  },
  { 
    name: 'Frank Celata', 
    firstName: 'Frank', 
    instrument: 'Clarinet' ,
    image: 'https://www.sydneymozartsociety.com.au/media/42298/5_ss_frank_celata.jpg'
  },
  { 
    name: 'Matthew Wilkie', 
    firstName: 'Matthew', 
    instrument: 'Bassoon' ,
    image: 'https://www.sydneysymphony.com/uploads/images/New-Musician-Headshots-230321/_1200x630_crop_center-center_82_none/2023-Matthew-Wilkie-Listing.jpg?mtime=1679369759'
  },
  { 
    name: 'Christina Leonard', 
    firstName: 'Christina', 
    instrument: 'Saxophone' ,
    image: 'https://www.christinaleonard.com.au/resources/images/christina_06.jpg'
  },
  { 
    name: 'Sam Jacobs', 
    firstName: 'Sam', 
    instrument: 'French Horn' ,
    image: 'https://media.rnztools.nz/rnz/image/upload/s--i0S93cPf--/c_crop,f_auto,h_1194,q_auto,w_1908,x_0,y_193/v1643279784/4OT43MA_image_crop_13266'
  },
  { 
    name: 'Andrea Lam', 
    firstName: 'Andrea', 
    instrument: 'Piano' ,
    image: 'https://limelight-arts.com.au/wp-content/uploads/2022/05/DC6405_7593warm_Andrea-Lam_foto-Keith-Saunders-med-scaled-e1653440998964.jpg'
  },
]

export default function Musicians() {
  return (
    <div className="relative overflow-hidden">
      <img
          src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover opacity-20 absolute h-full w-auto md:h-auto md:w-full"
        />
        {/*  px-6 sm:px-0 lg:px-8 max-w-2xl lg:max-w-7xl mx-auto relative */}
      <div className="py-16">
        <h2 className="font-bold tracking-tight text-3xl sm:text-5xl px-6 md:px-0 lg:px-8 max-w-2xl lg:max-w-7xl mx-auto">Our Musicians</h2>
        <ul className="carousel carousel-start space-x-12 mt-8 w-full">
          {
            persons.map(p => Person({person: p}))
          }
        </ul>
      </div>
    </div>
  );
}

function Person({person}: any) {
  return (
    <li className="carousel-item flex flex-col items-start cursor-pointer first:pl-6 last:pr-6 lg:first:pl-8 lg:last:pr-8">
      <div className="relative w-52 sm:w-64 md:w-[30rem] h-56 overflow-hidden bg-white">
        <img className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2" src={person.image} alt="" />
      </div>
      <h3 className="text-2xl text-white leading-7 tracking-tight font-semibold mt-6">{person.name}</h3>
      <p className="text-sm leading-6 text-gray-400">{person.instrument}</p>
      <a href="#" className="text-sm font-semibold leading-6 text-indigo-600">
        Meet {person.firstName} <span aria-hidden="true">→</span>
      </a>
    </li>
  )
}