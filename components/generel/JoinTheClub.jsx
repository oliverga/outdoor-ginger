import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { IconArticle, IconCalendar, IconTag } from "@tabler/icons-react";

export default function JoinTheClub() {
  return (
    <section className="px-8">
      <div className="my-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl text-center md:text-left flex flex-col gap-8 items-left ">
          <h2 className="text-4xl md:text-5xl font-display font-semibold uppercase text-center md:text-left ">
            Become a Member
          </h2>
          <p className="leading-normal text-ogLabel-base text-lg text-left">
            Reignite your energy, embrace your true self, and discover peace
            with our exclusive membership. Enjoy a range of perks, including
            discounts and unique offers crafted for the adventurous spirit.
          </p>
          <Link href="/signup">
            <Button variant="primary" size="lg" className="">
              Sign up now
            </Button>
          </Link>
        </div>
        <div className="flex p-8 flex-wrap justify-around gap-6 my-6 max-w-sm ">
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
      <div className="pb-12 py-0 md:py-12 md:pb-32 w-full max-w-7xl  mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
          <div className="rounded-lg bg-ogBG-base border p-6 shadow-md">
            <IconArticle className="h-8 w-8 text-ogLabel-base" />
            <h3 className="mt-4 text-xl font-semibold">Exclusive Articles</h3>
            <p className="mt-2 ">
              Get access to exclusive articles, tutorials, and interviews.
            </p>
          </div>
          <div className="rounded-lg bg-ogBG-base border p-6 shadow-md">
            <IconTag className="h-8 w-8 text-ogLabel-base" />
            <h3 className="mt-4 text-xl font-semibold">Gear Discounts</h3>
            <p className="mt-2 ">
              Enjoy exclusive discounts on the latest outdoor gear and
              equipment.
            </p>
          </div>
          <div className="rounded-lg bg-ogBG-base border p-6 shadow-md">
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
