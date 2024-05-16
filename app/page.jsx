import NewsletterBanner from "@/components/generel/NewsletterBanner";
import SupportBanner from "@/components/generel/SupportBanner";
import LatestYT from "@/components/generel/LatestYT";
import Hero from "@/components/generel/Hero";
import SponsorBanner from "@/components/generel/SponsorBanner";
import AboutBlock from "@/components/generel/AboutBlock";
import JoinTheClub from "@/components/generel/JoinTheClub";
import SocialFollowers from "@/components/generel/SocialFollowers";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AnimatedCount from "@/components/generel/AnimatedCount";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero title="Outdoor Ginger" imageSrc="/forsidehero.webp" bgPos="bottom">
        <div id="left" className="mt-4 -mb-6">
          <div className="hidden md:block font-light w-144 mb-8 mt-4">
            <p className="text-ogBG-base">
              August Vallat is an outdoor influencer who takes it to the next
              level.
            </p>
            <p className="text-ogBG-base mt-2">
              Join him on his next adventure!
            </p>
          </div>
          <Link href="/membership">
            <Button size="md" variant="primary" className="capitalize md:mb-12">
              Become a member
            </Button>
          </Link>
        </div>
        <div
          id="right"
          className="absolute left-44 top-32 md:left-[1050px] md:top-[350px]"
        >
          <div className="flex gap-2 items-center mb-16 md:mb-40 bg-[#F5F5F5]/75 px-1 py-1 rounded-full w-max">
            <Image
              src="/profile.webp"
              alt="August Vallant"
              width={500}
              height={500}
              className="rounded-full aspect-square w-8 h-8 md:w-11 md:h-11"
            />
            <div className="pr-2 md:pr-4 uppercase">
              <p className="text-[10px] md:text-[1rem] font-semibold text-ogPrimary">
                August Vallat
              </p>
              <p className="text-[9px] md:text-[13px] font-light text-ogPrimary-light">
                Adventure Influencer
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center ml-24 md:ml-64 bg-[#F5F5F5]/75 px-1 py-1 rounded-full w-max">
            <div className="bg-ogPrimary rounded-full p-[5px] md:p-[6px]">
              <Image
                src="/icons/instagramWhite.svg"
                alt="August Vallant"
                width={500}
                height={500}
                className="aspect-square w-5 h-5 md:w-7 md:h-7"
              />
            </div>
            <div className="pr-2 uppercase">
              <AnimatedCount
                finalCount={333000}
                duration={3}
                className="text-base md:text-[1.4rem]"
              />
              <p className="-mt-1 md:-mt-2 text-[7px] md:text-[0.6rem] font-light text-ogPrimary">
                Followers
              </p>
            </div>
          </div>
        </div>
      </Hero>
      <div className="space-y-32">
        <div>
          <AboutBlock />
        </div>
        <div>
          <LatestYT />
        </div>
        <div>
          <JoinTheClub />
        </div>
        <div>
          <SocialFollowers />
          <SponsorBanner />
          <SupportBanner type="original" />
          <NewsletterBanner />
        </div>
      </div>
    </main>
  );
}
