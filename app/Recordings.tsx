"use client"
import ReactPlayer from "react-player"

const features = [
  {
    url: "https://soundcloud.com/sydney-symphony/beethoven-symphony-no9-choral-4-allegro-assai-choral-finale-on-schillers-ode-to-joy"
  },
  {
    url: "https://soundcloud.com/sydney-symphony/dvorak-symphony-no9-new-world-4th-movement-allegro-con-fuoco"
  },
  {
    url: "https://soundcloud.com/sydney-symphony/dvorak-symphony-no9-new-world-2nd-movement-largo"
  },
  {
    url: "https://soundcloud.com/sydney-symphony/sets/verdis-requiem"
  },
]

export default function Example() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tightsm:text-4xl">
            Past recordings of our work together
          </p>
          <p className="mt-6 text-lg leading-8">
            For over 25 years the Sydney Soloists have been playing beautiful arrangements for the Australian public.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4 lg:gap-y-8">
            {features.map((feature) => (
              <div key={feature.url} className='flex flex-col items-center'>
                <ReactPlayer
                  className="!w-full !h-32"
                  url={feature.url}
                />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}