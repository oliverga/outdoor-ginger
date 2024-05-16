import { client, urlFor } from "@/lib/sanity/client";
import Hero from "@/components/generel/Hero";
import Image from "next/image";
import OrangeBanner from "@/layouts/OrangeBanner";
import SponsorBanner from "@/components/generel/SponsorBanner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ConnectBanner from "@/components/ConnectBanner";
import { PortableText } from "next-sanity";

const testimonialsQuery = '*[_type == "testimonials"]{Sponsor_Name, content}';

const testimonials = await client.fetch(testimonialsQuery, {
  next: {
    revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
  },
});
console.log(testimonials);
export default function AboutMe() {
  return (
    <main className="">
      <Hero title="About August" imageSrc="/aboutMe.png" height="h-[90vh] md:h-[100vh]">
        <div id="left" className="md:mt-2 w-full mb-8">
          <p className="text-ogLabel-faint font-extralight text-sm md:text-2xl italic w-max">Anything is possible if you dare to be curious</p>
        </div>
      </Hero>
      <section className="px-6 md:px-0 pb-8 md:py-32 md:max-w-5xl md:mx-auto">
        <div className="flex flex-col md:grid grid-cols-3 grid-rows-1">
          <div className=" col-span-1 flex flex-col mb-4">
            <h2 className="font-display text-3xl md:text-5xl uppercase font-bold mb-6">about</h2>
            <p className=" text-sm md:text-xl md:w-144">
              August, known as the outdoorginger, embarked on his journey with the wind in his hair and the thrill of adventure in his heart. From a young age, he embraced the call of the wild, navigating the trails and conquering the great outdoors. With each expedition, he
              honed his skills and forged a path of his own, earning accolades and admiration along the way. Now, as a seasoned explorer, August stands ready to inspire and ignite the spirit of adventure in all who dare to follow.
            </p>
          </div>
          <div className="md:col-span-2 flex md:self-center md:justify-end">
            <Image src="/aboutMe1.png" alt="" width={1000} height={1000} className="mt-4 md:w-1/2 self-center" />
          </div>
        </div>
      </section>
      <OrangeBanner h2="Beyond boundaries">
        <div className="flex flex-col items-center">
          <p className="text-ogBG-base mb-1 md:mb-4 text-left text-base md:text-2xl">August&apos;s Journey of Self-Discovery & Adventure</p>
          <p className="text-ogBG-base font-normal leading-5 text-sm md:text-xl text-left md:w-2/4">
            Augustt&apos;s story isnt&apos;t just about the destinations he&apos;s reached; it&apos;s about the lessons learned along the way. Through the trials and triumphs of life on the road, het&apos;s discovered a profound sense of self-reliance and resilience, forging a
            path that defies convention and embraces the unknown.
          </p>
        </div>
      </OrangeBanner>
      <div className="relative -top-36 md:-top-60">
        <div className="flex justify-center">
          <Image src="/waterSitting.png" alt="" width={1000} height={1000} className="w-80 md:w-1/3 rounded-full shadow-xl" />
        </div>
      </div>
      <div className="px-6 md:px-0  md:pb-40 md:max-w-5xl md:mx-auto">
        <div className="md:grid grid-cols-3 grid-rows-1">
          <div className="col-span-1 flex flex-col pb-4">
            <h2 className="font-display text-3xl md:text-5xl mb-8 leading-7 uppercase font-bold ">Freedom Achievers</h2>
            <div className="self-center">
              <p className="mb-6 text-sm md:text-xl">Thousands of followers was build by a strong mental mindset and dedicated discipline, that im now teaching you so you can do the potentially same</p>
              <Link href="/membership" target="_blank">
                <Button variant="primary" size="lg" className="bg-ogPrimary text-base hover:bg-ogPrimary-dark gap-1 px-10 uppercase">
                  Join now
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:col-span-2 mt-8 flex md:justify-end">
            <Image src="/freedomAugust.png" alt="" width={1000} height={1000} className="md:w-96 rounded-full" />
          </div>
        </div>
      </div>

      <SponsorBanner type="static" />
      <section className="px-6 md:px-0  max-w-5xl mx-auto my-20 md:py-28">
        <h2 className="font-display text-3xl md:text-5xl uppercase font-bold mb-6 ">Testimonials</h2>
        {testimonials.map((testimonial, index) => (
          <div className="prose md:prose-lg prose-h3:italic prose-p:italic prose-p:text-ogLabel-muted w-auto prose-h3:font-light prose-p:font-light prose-p:text-sm prose-h3:text-sm my-4" key={index}>
            <PortableText value={testimonial.content} />

            <h3>{testimonial.Sponsor_Name}</h3>
            <div className="bg-ogLabel-link h-0.5 w-28 mb-4"></div>
          </div>
        ))}
      </section>
      <article className="flex justify-end -mt-28 md:-mt-40">
        <Image src="/computerAbout.png" alt="Laptop" width={2000} height={2000} className="hidden md:block object-contain w-96 md:w-[800px] -mb-32 md:-mb-[450px] z-10 drop-shadow-lg" />
        <Image src="/threePhones.png" alt="" width={1400} height={1400} className="lg:hidden object-contain w-64 md:w-[700px] -mb-20 md:-mb-44 z-10 drop-shadow-lg" />
      </article>

      <ConnectBanner />
    </main>
  );
}
