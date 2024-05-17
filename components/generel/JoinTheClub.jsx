import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { IconArticle, IconCalendar, IconTag } from "@tabler/icons-react";

export default function JoinTheClub() {
  return (
    <section>
      <div className="px-8 my-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 ">
        <div className="max-w-xl mx-auto text-center md:text-left flex flex-col gap-4 items-left ">
          <h2 className="text-4xl md:text-5xl font-display font-semibold uppercase text-center md:text-left">
            Join the club
          </h2>
          <p>
            Rediscover your vitality, embrace your essence, and find tranquility
            with our exclusive membership. Dive into a world of perks, tailored
            goods, and special offers designed for the discerning adventurer.
          </p>
          <Link href="/membership">
            <Button variant="primary" size="md" className="mt-4 capitalize">
              Become A Member
            </Button>
          </Link>
        </div>
        <div className="flex md:flex-wrap md:justify-around gap-6 my-6">
          <div className="flex flex-col gap-1 items-center">
            <div className="aspect-square w-28 md:w-32 h-28 md:h-32 bg-ogPrimary p-6 rounded-full">
              <Image
                src="/icons/health.svg"
                alt="Join the club"
                width={500}
                height={500}
                className="w-full h-full object-center"
              />
            </div>
            <h3 className="font-display capitalize text-xl text-ogPrimary-darker">
              health
            </h3>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="aspect-square w-28 md:w-32 h-28 md:h-32 bg-ogPrimary p-6 rounded-full">
              <Image
                src="/icons/deStress.svg"
                alt="Join the club"
                width={500}
                height={500}
                className="w-full h-full object-center"
              />
            </div>
            <h3 className="font-display capitalize text-xl text-ogPrimary-darker">
              De-Stress
            </h3>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="aspect-square w-28 md:w-32 h-28 md:h-32 bg-ogPrimary p-6 rounded-full">
              <Image
                src="/icons/simplicity.svg"
                alt="Join the club"
                width={500}
                height={500}
                className="w-full h-full object-center"
              />
            </div>
            <h3 className="font-display capitalize text-xl text-ogPrimary-darker">
              Simplicity
            </h3>
          </div>
        </div>
      </div>
      <div className=" py-12 md:py-0 md:pb-12 w-full max-w-5xl mx-auto px-8 ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
          <div className="rounded-lg bg-ogBG-base border p-6 shadow-lg">
            <IconArticle className="h-8 w-8 text-ogLabel-base" />
            <h3 className="mt-4 text-xl font-semibold">Exclusive Articles</h3>
            <p className="mt-2 ">
              Get behind-the-scenes footage, tutorials, and interviews with our
              top outdoor influencer.
            </p>
          </div>
          <div className="rounded-lg bg-ogBG-base border p-6 shadow-lg">
            <IconTag className="h-8 w-8 text-ogLabel-base" />
            <h3 className="mt-4 text-xl font-semibold">Gear Discounts</h3>
            <p className="mt-2 ">
              Enjoy exclusive discounts on the latest outdoor gear and
              equipment.
            </p>
          </div>
          <div className="rounded-lg bg-ogBG-base border p-6 shadow-lg">
            <IconCalendar className="h-8 w-8 text-ogLabel-base" />
            <h3 className="mt-4 text-xl font-semibold">Field Trips</h3>
            <p className="mt-2 ">
              Join us for a fun and exciting adventure in the great outdoors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
