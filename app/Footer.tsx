import Image from "next/image";
import aboriginal from "../public/aboriginal.svg";
import tsi from "../public/tsi.svg";

export default function Footer() {
  return (
    <div className="relative bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div>
              <div className="relative mb-6">
                <div className="text-base font-display leading-7">
                  Sydney Soloists
                </div>
              </div>
              <div></div>
              <div className="relative mt-6">
                <div className="text-base font-semibold leading-7">Email:</div>
                <div className="mt-2 text-base leading-7">
                  contact@sydneysoloists.com.au
                </div>
              </div>
              <div className="relative mt-6">
                <div className="text-base font-semibold leading-7">Mailing Address:</div>
                <div className="mt-2 text-base leading-7">
                    1 Bennelong Point, Sydney NSW 2000
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="text-base font-semibold leading-7 flex">
                <Image src={aboriginal} alt="" className="mr-4" />
                <Image src={tsi} alt="" />
              </div>
              <div className="mt-2 text-base leading-7">
                We pay our respects to the traditional custodians of the lands
                on which we live and work, and to the traditional custodians of
                the lands and waters which we may visit upon in our work. We
                acknowledge their elders past and present.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
