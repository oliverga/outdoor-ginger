import { client, urlFor } from "@/lib/sanity/client";
import UpcomingEvents from "@/components/generel/UpcomingEvents";
import SupportBanner from "@/components/generel/SupportBanner";
import { Button } from "@/components/ui/button";
import Hero from "@/components/generel/Hero";
import Image from "next/image";
import Link from "next/link";
import MembershipCarousel from "@/components/generel/MembershipCarousel";
import MembershipAccordion from "@/components/generel/MembershipAccordion";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      <Hero
        // title="Membership"
        imageSrc="/membershiphero.webp"
        height="h-[70vh] md:h-[100vh] max-h-[1000px]"
      >
        <div
          id="right"
          className="mt-72 md:mt-0 w-dvw px-8 md:top-[40%] top-8 md:px-0 md:w-80 absolute left-1/2 transform -translate-x-1/2 z-40"
        >
          <Card className="rounded-2xl z-50">
            <CardHeader>
              <CardTitle className="font-semibold mb-4">
                Become a Member
              </CardTitle>
              <CardDescription className="">
                Join our community of explorers <br></br> and get exclusive
                benefits.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <p className="text-3xl font-semibold">
                10€{" "}
                <span className="text-sm text-ogLabel-muted ">/ Month </span>
              </p>
              <Link href="/signup">
                <Button
                  size="default"
                  className="bg-ogPrimary hover:bg-ogPrimary-dark text-base text-ogBG-base"
                >
                  Sign up
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </Hero>

      <section className="mb-10 md:py-10 pt-64 md:pt-0 rounded-t-[3rem] px-8">
        <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl leading-7 md:text-5xl  font-semibold uppercase text-left font-display">
              Join the Adventure with Outdoor Ginger!
            </h2>

            <p className="mt-4 leading-relaxed">
              Dive into the wild like never before with Outdoor Ginger! As an
              exclusive member, you&apos;ll gain access to a world of adventure,
              exploration, and untamed beauty that only the true wilderness can
              offer.
            </p>
          </div>

          <Image
            src="/handdrawnAugust.png"
            alt="Description of image"
            width={500}
            height={500}
            className="w-full max-w-[300px] outline"
          />
        </div>
      </section>
      <ExclusivePerks />
      <MembershipCarousel />
      <UpcomingEvents />

      {/* <SupportBanner /> */}
      <MembershipAccordion />
      <NewsletterBanner
        title="Campfire Chronicles"
        subtitle="The Outdoor Ginger Newsletter"
      />
    </main>
  );
}
