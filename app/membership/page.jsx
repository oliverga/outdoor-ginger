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

      <section className="mb-10 md:py-10 pt-48 md:pt-0 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center ">
          <div className="md:w-1/2">
            <h2 className="font-bold text-2xl leading-6 md:text-4xl uppercase font-display ">Join the Adventure with Outdoor Ginger!</h2>
            <h3 className="font-semibold text-lg leading-6 mt-4 md:text-xl md:w-2/3">Become an Exclusive Member of the Ultimate Wilderness Experience</h3>
            <p className="mt-4">Dive into the wild like never before with Outdoor Ginger! As an exclusive member, you&apos;ll gain access to a world of adventure, exploration, and untamed beauty that only the true wilderness can offer.</p>
          </div>
          <div className="flex justify-center md:w-1/2 md:ml-auto ">
            <Image src="/handdrawnAugust.png" alt="Description of image" width={500} height={500} className="w-44 md:w-auto h-fit " />
          </div>
        </div>
      </section>
      <ExclusivePerks />
      <MembershipCarousel />
      <UpcomingEvents />

      {/* <SupportBanner /> */}
      <NewsletterBanner title="Campfire Chronicles" />
      <MembershipAccordion />
    </main>
  );
}
