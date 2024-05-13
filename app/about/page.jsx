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
      <Hero title="About August" imageSrc="/aboutMe.png" height="80vh">
        <div id="left" className="md:mt-8 w-full">
          <p className="text-ogLabel-faint font-extralight md:text-2xl italic">Anything is possible if you dare to be curious</p>
        </div>
      </Hero>
      <section className="px-6 md:px-0 pb-32 max-w-5xl mx-auto">
        <div className="flex flex-row space-between items-center">
          <div className="w-1/2">
            <h2 className="font-display text-3xl uppercase font-bold mb-6">august</h2>
            <p className="">
              August, known as the outdoorginger, embarked on his journey with the wind in his hair and the thrill of adventure in his heart. From a young age, he embraced the call of the wild, navigating the trails and conquering the great outdoors. With each expedition, he
              honed his skills and forged a path of his own, earning accolades and admiration along the way. Now, as a seasoned explorer, August stands ready to inspire and ignite the spirit of adventure in all who dare to follow.
            </p>
          </div>
          <div className="mt-6 self-end">
            <Image src="/aboutMe1.png" alt="" width={400} height={200} className="" />
          </div>
        </div>

        <div>
          <div></div>
        </div>
      </section>
      <OrangeBanner h2="Beyond" />
      <div className="px-6 md:px-0 pb-32 max-w-5xl mx-auto">
        <div>
          <h2 className="font-display text-3xl uppercase font-bold mb-6">Freedom Achievers</h2>
          <p>
            August&apos;s story isn&apos;t just about the destinations he&apos;s reached; it&apos;s about the lessons learned along the way. Through the trials and triumphs of life on the road, he&apos;s discovered a profound sense of self-reliance and resilience, forging a path
            that defies convention and embraces the unknown.
          </p>

          <Link href="https://freedomachievers.org/" target="_blank">
            <Button variant="primary" size="lg" className="bg-ogPrimary text-base hover:bg-ogPrimary-dark gap-1">
              Join
            </Button>
          </Link>
        </div>
        <div></div>
      </div>
      <SponsorBanner type="static" />
      <section className="px-6 md:px-0 pb-32 max-w-5xl mx-auto my-10">
        <h2 className="font-display text-3xl uppercase font-bold mb-6">Testimonials</h2>
        {testimonials.map((testimonial, index) => (
          <div className="prose md:prose-lg prose-h3:italic prose-p:italic prose-p:text-ogLabel-muted w-auto prose-h3:font-light prose-p:font-light prose-p:text-sm prose-h3:text-sm" key={index}>
            <PortableText value={testimonial.content} />

            <h3>{testimonial.Sponsor_Name}</h3>
            <div className="bg-ogLabel-link h-0.5 w-28 mb-4"></div>
          </div>
        ))}
      </section>
      <ConnectBanner />
    </main>
  );
}
