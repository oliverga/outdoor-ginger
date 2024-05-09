import Image from "next/image";

function Hero({ title, imageSrc, children }) {
  return (
    <section>
      <div className="h-[90vh] overflow-hidden grid grid-cols-2">
        <Image src={imageSrc} alt="" width={1920} height={1000} className="object-cover object-center w-full h-full z-10 row-start-1 col-start-1 col-span-2" />
        <div className="place-self-end col-start-1 row-start-1 z-20">
          <h1 className="text-4xl md:text-7xl font-bold text-ogBG-base uppercase mb-20">{title}</h1>
          <div className="h-20">{children}</div>
        </div>
        <div className="pt-[5rem] rounded-t-[3rem] -translate-y-[3rem] bg-ogBG-base z-30 col-span-2"></div>
      </div>
    </section>
  );
}

export default Hero;
