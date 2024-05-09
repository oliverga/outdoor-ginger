import SupportBanner from "@/components/SupportBanner";
import Hero from "@/components/generel/Hero";

export default function Page() {
  return (
    <main>
      <Hero title="Membership" height="650px" imageSrc="/membershiphero.webp"></Hero>
      <div className="pb-32 max-w-5xl mx-auto">
        <div className="flex flex-row gap-12 justify-between">
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
          <img src="/your-image.jpg" alt="Your Description" className=" justify-self-end" />
        </div>
      </div>
      <SupportBanner />
    </main>
  );
}
