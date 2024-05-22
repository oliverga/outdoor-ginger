import { client, urlFor } from "@/lib/sanity/client";
import UpcomingEvents from "@/components/generel/UpcomingEvents";
import SupportBanner from "@/components/generel/SupportBanner";
import { Button } from "@/components/ui/button";
import Hero from "@/components/generel/Hero";
import Image from "next/image";
import Link from "next/link";
import MembershipCarousel from "@/components/generel/MembershipCarousel";
import MembershipAccordion from "@/components/generel/MembershipAccordion";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import NewsletterBanner from "@/components/generel/NewsletterBanner";

import ExclusivePerks from "@/components/generel/ExclusivePerks";

const whatPeopleSayQuery = '*[_type == "whatPeopleSay"]{Sponsor_Name, content}';

const whatPeopleSay = await client.fetch(whatPeopleSayQuery, {
  next: {
    revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
  },
});
console.log(whatPeopleSay);

export default function Page() {
  return (
    <main>
      <Hero title="Membership" imageSrc="/membershiphero.webp" height="h-[70vh] md:h-[100vh] max-h-[1000px]">
        <div id="right" className="mt-72 md:mt-0 w-dvw md:left-auto px-6 md:top-1/3 top-72 md:px-0 md:w-80 absolute left-1/2 transform -translate-x-1/2 z-40">
          <Card className="rounded-2xl z-50">
            <CardHeader>
              <CardTitle className="font-normal mb-2">Become a Member</CardTitle>
              <CardDescription className="font-light">
                Join our community of explorers <br></br> and get exclusive benefits.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <p className="text-3xl font-semibold">
                10 € <span className="text-sm font-light text-ogLabel-muted ">/ Month </span>
              </p>
              <Link href="/signup">
                <Button size="default" className="bg-ogPrimary hover:bg-ogPrimary-dark text-base text-ogBG-base">
                  Subscribe
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </Hero>

      <section className="mb-10 md:py-10  rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6 md:px-0 ">
          <div className="flex flex-col md:w-1/2 gap-8 mt-56 md:mt-0">
            <h2 className="font-bold text-4xl uppercase font-display ">Join the Adventure with Outdoor Ginger!</h2>
            <h3 className="font-semibold text-xl md:w-2/3">Become an Exclusive Member of the Ultimate Wilderness Experience</h3>
            <p>Dive into the wild like never before with Outdoor Ginger! As an exclusive member, you&apos;ll gain access to a world of adventure, exploration, and untamed beauty that only the true wilderness can offer.</p>
          </div>
        </div>
      </section>
      <ExclusivePerks />
      <MembershipCarousel />
      <UpcomingEvents />
      <div className="bg-mobileFaQ-image md:bg-FAQ-image bg-center bg-cover h-[500px] md:h-[500px]">
        <div className="my-10 md:my-32 max-w-7xl mx-auto px-6 md:px-0 text-center md:w-1/2">
          <div className="flex flex-col items-center justify-center pt-20">
            <p className="text-2xl md:text-2xl font-bold text-center text-balance text-ogPrimary-lightest pb-10">
              Don&apos;t miss out on this opportunity to elevate your knowledge and network with like-minded professionals. Subscribe now and become part of our growing community!
            </p>
            <Link href="/signup">
              <Button size="default" className="bg-ogPrimary hover:bg-ogPrimary-dark text-base text-ogBG-base">
                Subscribe
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* <SupportBanner /> */}

      <MembershipAccordion />
      {/* <NewsletterBanner title="Campfire Chronicles" /> */}
    </main>
  );
}
