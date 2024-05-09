import Image from "next/image";

function Hero({ title, imageSrc, children }) {
  return (
    <div className="h-[100vh] overflow-hidden">
      <Image src={imageSrc} alt="" width={1920} height={1000} className="object-cover object-center w-full h-full z-30" />
      <div>
        <h1 className="text-4xl md:text-7xl pl-28 pb-12 font-bold text-ogBG-base uppercase z-60">{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default Hero;
