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
                50 kr <span className="text-sm font-light text-ogLabel-muted ">/ Month </span>
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
      <section className="px-6 md:px-0 mt-52 max-w-5xl mx-auto">
        <div>
          <h2 className="text-3xl ">Membership Benefits</h2>
          <p>
            Unlock the secrets of the wilderness and master your mindset with our exclusive one-on-one masterclass. With over 500 nights spent in nature, I bring unparalleled outdoor expertise and powerful mental resilience training. As one of the toughest and most experienced
            guides, I am dedicated to supporting individuals from all backgrounds in overcoming mental barriers and embracing outdoor challenges.
          </p>
        </div>
        <div>
          <h3>Personalized Coaching: Gain direct access to me for one-on-one sessions, tailored to your specific needs and goals.</h3>
          <h3>Exclusive Content: Enjoy access to members-only posts, videos, and articles packed with expert advice, tips, and insights. </h3>
          <h3> Community Support: Join a vibrant community of like-minded individuals, share experiences, and receive support and motivation.</h3>
          <h3> Live Q&A Sessions: Participate in live sessions where you can ask questions and get real-time advice. </h3>
          <h3>Special Offers: Receive early access to events, workshops, and special discounts on gear and courses.</h3>
        </div>
        <div>
          <h3>Exclusive posts</h3>

          <h3>Join today and transform your approach to nature and life with expert guidance and a supportive community!</h3>
        </div>
      </section>
      <div className="px-6 md:px-0 mt-52 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <Accordion type="single" collapsible className="md:w-1/2 mb-10">
            <AccordionItem value="item-1" defaultOpen={true}>
              <AccordionTrigger className="text-lg">What is a membership?</AccordionTrigger>
              <AccordionContent className="text-ogLabel-muted text-sm">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">{"What's in it for me?"}</AccordionTrigger>
              <AccordionContent className="text-ogLabel-muted text-sm">Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">What does it cost?</AccordionTrigger>
              <AccordionContent className="text-ogLabel-muted text-sm">Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
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
