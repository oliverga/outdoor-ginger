import Image from "next/image";

function Hero({ title, height, imageSrc, children }) {
  return (
    <div className="relative pt-32 w-screen" style={{ height: height, position: "relative" }}>
      <Image src={imageSrc} alt="Mountain View" layout="fill" objectFit="cover" quality={100} className="absolute z-0" />
      <div className="max-w-7xl mx-auto py-4 relative z-10 flex flex-col justify-between h-full">
        <div className="flex justify-end pt-16 pr-44"></div>
        <h1 className="text-4xl md:text-7xl pl-28 pb-12 font-bold text-ogBG-base uppercase z-50">{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default Hero;
