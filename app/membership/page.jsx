import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SupportBanner from "@/components/generel/SupportBanner";
import { Button } from "@/components/ui/button";
import Hero from "@/components/generel/Hero";
import Image from "next/image";
import Link from "next/link";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="relative">
      <Hero title="Membership" imageSrc="/membershiphero.webp" height="h-[70vh] md:h-[90vh]">
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
      <section className="px-6 md:px-0 mt-52 md:mt-0 max-w-5xl mx-auto">
        <div className="py-10 leading-relaxed flex flex-col md:flex-row gap-2 justify-between">
          <div className="pb-6 self-center md:w-1/2">
            <h2 className="text-lg font-bold pb-2 ">Unlock the secrets of the wilderness and master your mindset with our exclusive one-on-one masterclass.</h2>
            <p className="text-sm">
              With over 500 nights spent in nature, I bring unparalleled outdoor expertise and powerful mental resilience training. As one of the toughest and most experienced guides, I am dedicated to supporting individuals from all backgrounds in overcoming mental barriers and
              embracing outdoor challenges.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl md:pb-10 font-display font-bold leading-7 uppercase ">
            Membership <br /> Benefits
          </h2>
          <div className="my-4 md:my-16 flex flex-col md:flex-row gap-2 justify-between">
            <div className="pb-6 self-center md:w-1/2">
              <ul className="list-inside space-y-5">
                <li>
                  <p className="font-semibold pb-1 text-ogLabel-base">Personalized Coaching:</p>
                  <p className="text-sm font-normal"> Gain direct access to me for one-on-one sessions, tailored to your specific needs and goals.</p>
                </li>
                <li>
                  <p className="font-semibold pb-1 text-ogLabel-base">Exclusive Content:</p>
                  <p className="text-sm font-normal"> Enjoy access to members-only posts, videos, and articles packed with expert advice, tips, and insights. </p>
                </li>
                <li>
                  <p className="font-semibold pb-1 text-ogLabel-base">Community Support:</p>
                  <p className="text-sm font-normal"> Join a vibrant community of like-minded individuals, share experiences, and receive support and motivation.</p>
                </li>
                <li>
                  <p className="font-semibold pb-1 text-ogLabel-base">Live Q&A Sessions: </p>
                  <p className="text-sm font-normal">Participate in live sessions where you can ask questions and get real-time advice. </p>
                </li>
                <li>
                  <p className="font-semibold pb-1 text-ogLabel-base">Special Offers:</p>
                  <p className="text-sm font-normal"> Receive early access to events, workshops, and special discounts on gear and courses.</p>
                </li>
              </ul>
            </div>
            <div>
              <Image src="/explorerAugust.png" width={1000} height={1000} alt="" className="w-96 self-center rounded-full" />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-banner-image bg-center bg-cover  h-[50vh] justify-start">
        <div className="px-6 md:px-0 my-8 py-10 pt-20 max-w-5xl mx-auto text-ogBG-base">
          <div className="md:flex md:flex-col pb-2 ">
            <h3 className="text-4xl md.text-5xl font-display uppercase font-bold mb-4">
              Exclusive <br /> posts
            </h3>
            <p className="text-sm font-normal text-ogBG-base text-balance md:w-1/2">Join today and transform your approach to nature and life with expert guidance and a supportive community!</p>
          </div>
        </div>
      </div>

      <section className="px-6 md:px-0 mt-64 max-w-5xl mx-auto">
        <article className="my-36">
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase">Testimonials</h2>
          <Image src="/augustIntotheWild.png" width={1000} height={1000} alt="" />
        </article>
      </section>

      <div className="px-6 md:px-0 mt-52 max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl font-bold uppercase">FAQ</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <Accordion type="single" collapsible className="md:w-1/2 mb-10">
            <AccordionItem value="item-1" defaultOpen={true}>
              <AccordionTrigger className="text-lg">{"What's a membership?"}</AccordionTrigger>
              <AccordionContent className="text-ogLabel-muted text-sm">A membership is when you join a group or club and get special benefits or access to things because you are part of it.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">{"What's in it for me?"}</AccordionTrigger>
              <AccordionContent className="text-ogLabel-muted text-sm">
                With a membership, you get special perks, such as discounts, exclusive access to events, resources, or services, and the chance to connect with others who share your interests. And it&apos;s safe to say that outdoor ginger have something that all of us could learn
                from!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">What does it cost?</AccordionTrigger>
              <AccordionContent className="text-ogLabel-muted text-sm">The membership costs 10€ a month</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">How did August start camping?</AccordionTrigger>
              <AccordionContent className="text-ogLabel-muted text-sm">
                I started camping without any guidance because my parents aren&apos;t into nature or wilderness experiences. My motivation came from within. My family, being city folks, didn&apos;t like it, and my brother wasn&apos;t interested in hiking. None of my friends
                wanted to join me either, as they were more into football and tennis. After many rejections, I began going on hikes alone and discovered that solo trips in the woods were the best. Now, I choose to camp in the mountains because I find them the most beautiful.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="md:w-1/2 md:flex md:justify-end">
            <Image src="/membershipvideo.png" width={400} height={200} alt="Your Description" className="" />
          </div>
        </div>
      </div>
      <SupportBanner />
    </main>
  );
}
