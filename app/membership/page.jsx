import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SupportBanner from "@/components/SupportBanner";
import Hero from "@/components/generel/Hero";
import Image from "next/image";
export default function Page() {
  return (
    <main>
      <Hero title="Membership" imageSrc="/membershiphero.webp" height="60vh"></Hero>
      <div className="py-32 max-w-5xl mx-auto">
        <div className="flex justify-between">
          <Accordion type="single" collapsible className="w-1/2">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is a membership?</AccordionTrigger>
              <AccordionContent className="text-ogLabel-muted text-sm">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What's in it for me?</AccordionTrigger>
              <AccordionContent className="text-ogLabel-muted text-sm">Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What does it cost?</AccordionTrigger>
              <AccordionContent className="text-ogLabel-muted text-sm">Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="w-1/2 flex justify-end">
            <Image src="/membershipvideo.png" width={400} height={200} alt="Your Description" className="" />
          </div>
        </div>
      </div>
      <SupportBanner />
    </main>
  );
}
