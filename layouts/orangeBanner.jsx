import Image from "next/image";

export default function OrangeBanner({ h2, children }) {
  return (
    <article className="mb-6 px-8 bg-ogPrimary py-8 md:py-0 pb-10 md:pb-20 grid grid-cols-2 grid-rows-1 overflow-y-hidden overflow-x-hidden">
      <div className="md:max-w-5xl md:mx-auto col-start-1 row-start-1 col-span-3 row-span-2 mb-24 z-20 md:flex md:flex-col md:justify-center md:items-center">
        <div>
          <h2 className="mb-2 font-display font-semibold leading-7 uppercase text-ogBG-base text-3xl md:text-5xl">
            {h2}
          </h2>
        </div>

        {children}
      </div>
      <div className="row-start-1 col-start-1 place-self-start opacity-25 rotate-180 aspect-square w-36 md:w-[1000px] -mt-20 -ml-20 md:-mt-[480px] md:-ml-[400px]">
        <Image
          src="/icons/flameWhite.svg"
          alt="background flame icon"
          width={900}
          height={900}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="row-start-1 col-start-3 opacity-25 place-self-end aspect-square w-36 md:w-[1000px] -mb-20 -mr-20 md:-mb-[480px] md:-mr-[400px]">
        <Image
          src="/icons/flameWhite.svg"
          alt="background flame icon"
          width={900}
          height={900}
          className="object-contain w-full h-full"
        />
      </div>
    </article>
  );
}
