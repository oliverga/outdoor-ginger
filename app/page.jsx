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
      <Hero
        title="Outdoor Ginger"
        imageSrc="/forsidehero.webp"
        bgPos="bottom"
        object="object-bottom"
      >
        <div
          id="left"
          className="hidden md:flex flex-col gap-4 w-full mt-4 text-lg"
        >
          <p className="text-ogBG-base max-w-[80%] opacity-80">
            August Vallat is an outdoor influencer who takes it to the next
            level.
          </p>
          <p className="text-ogBG-base opacity-80">
            Join him on his next adventure!
          </p>
          <Link href="/membership">
            <Button size="md" variant="primary" className="capitalize ">
              Become a member
            </Button>
          </Link>
        </div>

        <div
          id="right"
          className="w-[110%] md:w-full mb-8 md:mb-0 flex flex-col gap-6 md:gap-32 p-8 md:p-12"
        >
          <div className="flex gap-2 items-center  bg-neutral-100 bg-opacity-75 px-2 py-2 rounded-full w-max">
            <Image
              src="/profile.webp"
              alt="August Vallant"
              width={500}
              height={500}
              className="rounded-full aspect-square w-8 h-8 md:w-11 md:h-11"
            />
            <div className="pr-2 md:pr-4 uppercase">
              <p className="text-[10px] md:text-base font-semibold text-ogPrimary opacity-80">
                August Vallat
              </p>
              <p className="text-[9px] md:text-[13px] font-normal text-ogPrimary opacity-60">
                Adventure Influencer
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center  bg-neutral-100 bg-opacity-75 px-4 py-3 rounded-full w-fit pr-6 place-self-end">
            <div className="bg-ogPrimary rounded-full p-1 md:p-2 opacity-80">
              <Image
                src="/icons/instagramWhite.svg"
                alt="Instagram"
                width={500}
                height={500}
                className="aspect-square w-5 h-5 md:w-7 md:h-7"
              />
            </div>
            <div className=" uppercase ">
              <AnimatedCount
                finalCount={333000}
                duration={3}
                className="text-base md:text-[1.4rem] opacity-80 "
              />
              <p className="text-[9px] md:text-[13px] font-normal text-ogPrimary opacity-60 ">
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
