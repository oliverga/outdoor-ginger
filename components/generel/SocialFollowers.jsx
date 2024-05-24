import Image from "next/image";
import AnimatedCount from "./AnimatedCount";
import Link from "next/link";

export default function SocialFollowers() {
  return (
    <article className="flex flex-col items-center -mt-28 md:-mt-40">
      <Image
        src="/threePhones.png"
        alt="Screenshots of social media"
        width={900}
        height={900}
        className="object-contain w-96 md:w-[700px] -mb-32 md:-mb-44 z-10 drop-shadow-lg pointer-events-none"
      />
      <div className="flex justify-center px-8 bg-ogPrimary-lightest w-full h-full pt-24 pb-20">
        <div className="flex gap-4 justify-around w-full max-w-5xl">
          <Link
            href="https://www.youtube.com/@OutdoorGinger"
            target="_blank"
            className="flex items-center gap-3 md:gap-4"
          >
            <div className="aspect-square h-8 md:h-16">
              <Image
                src="/icons/youtube.svg"
                alt="YouTube logo"
                width={250}
                height={250}
                className="object-contain h-full w-full"
              />
            </div>
            <AnimatedCount
              finalCount={12000}
              duration={1}
              className="text-xl md:text-3xl"
            />
          </Link>
          <Link
            href="https://www.instagram.com/outdoorgingerchannel/"
            target="_blank"
            className="flex items-center gap-3 md:gap-4"
          >
            <div className="aspect-square h-8 md:h-16">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram logo"
                width={250}
                height={250}
                className="object-contain h-full w-full"
              />
            </div>
            <AnimatedCount
              finalCount={333000}
              duration={3}
              className="text-xl md:text-3xl"
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@outdoorginger"
            target="_blank"
            className="flex items-center gap-3 md:gap-4"
          >
            <div className="aspect-square h-8 md:h-16">
              <Image
                src="/icons/tiktok.svg"
                alt="TikTok logo"
                width={250}
                height={250}
                className="object-contain h-full w-full"
              />
            </div>
            <AnimatedCount
              finalCount={24000}
              duration={1}
              className="text-xl md:text-3xl"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
