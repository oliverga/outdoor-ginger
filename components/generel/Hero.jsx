import React from "react";
import Image from "next/image";

function Hero({ title, imageSrc, height, children }) {
  const leftSideChildren = React.Children.toArray(children).filter((child) => child.props.id === "left");
  const rightSideChildren = React.Children.toArray(children).filter((child) => child.props.id === "right");
  return (
    <section className="relative mb-12">
      <div style={{ height: height }} className="overflow-hidden grid grid-cols-2 max-w-5xl mx-auto pb-24">
        <div className="place-self-end z-20 w-full">
          <h1 className="text-4xl md:text-7xl font-bold text-ogBG-base uppercase">{title}</h1>
          {leftSideChildren}
        </div>
        <div className="z-20 place-self-center">{rightSideChildren}</div>
      </div>
      <div className=" rounded-t-[3rem] bg-ogBG-base col-span-2 h-12 z-50 absolute bottom-0 left-0 w-full"></div>
      <Image src={imageSrc} alt="" width={1920} height={1000} className="object-cover object-center w-full h-full absolute top-0 left-0 z-10" />
    </section>
  );
}

export default Hero;
