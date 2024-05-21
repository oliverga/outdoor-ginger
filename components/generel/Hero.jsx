import React from "react";
import Image from "next/image";

function Hero({
  title,
  imageSrc,
  height = "h-96 md:h-[80vh]",
  bgPos = "bg-center",
  bg,
  children,
}) {
  const leftSideChildren = React.Children.toArray(children).filter(
    (child) => child.props.id === "left",
  );
  const rightSideChildren = React.Children.toArray(children).filter(
    (child) => child.props.id === "right",
  );
  return (
    <section className={`relative mb-6 ${bg} ${bgPos} bg-cover px-8 md:px-8 `}>
      <div
        className={`overflow-hidden grid grid-cols-2 max-w-7xl mx-auto pb-20 md:pb-32 ${height}`}
      >
        <div className="place-self-end z-30 w-full flex flex-col justify-end h-fit">
          <h1 className="text-4xl md:text-7xl font-bold text-ogBG-base uppercase m-0">
            {title}
          </h1>
          {leftSideChildren}
        </div>
        <div className="z-40 place-self-end w-full">{rightSideChildren}</div>
      </div>
      <div className="rounded-t-[3rem] bg-ogBG-base col-span-2 h-12 z-30 absolute bottom-0 left-0 w-full"></div>
      <div className=" bg-gradient-to-tr from-ogLabel-base to-transparent  w-full h-full absolute top-0 left-0 z-20 opacity-75"></div>
      {!bg && (
        <Image
          src={imageSrc}
          alt=""
          width={920}
          height={500}
          className={`object-cover ${bgPos} w-full h-full absolute top-0 left-0 z-10 outline`}
          placeholder="blur"
          blurDataURL={`${imageSrc}?blur=50`}
        />
      )}
    </section>
  );
}

export default Hero;
