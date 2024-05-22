import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function MemberAccordion() {
  return (
    <div className="my-10 py-10 md:my-32">
      <section className="px-6 md:px-0 max-w-7xl mx-auto">
        <div className="">
          <h2 className="font-display text-3xl md:text-6xl text-center font-bold uppercase pb-10">Frequently Asked Questions</h2>
          <h3 className="font-display text-2xl md:text-3xl text-center font-bold uppercase pb-10">Outdoor Ginger Membership</h3>
          <div className="flex flex-col items-center justify-center px-6 md:px-0">
            <Accordion type="single" collapsible className="md:w-1/2 ">
              <AccordionItem value="item-1" defaultOpen={true}>
                <AccordionTrigger className="text-lg md:text-xl">{"What do I get as an Outdoor Ginger member?"}</AccordionTrigger>
                <AccordionContent className="text-ogLabel-muted text-sm md:text-lg">
                  As a member, you&apos;ll receive exclusive access to behind-the-scenes content, live Q&A sessions with Ginger, adventure guides, a private community, early access to new content, and special discounts on merchandise.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg md:text-xl">{"How often is new content added for members?"}</AccordionTrigger>
                <AccordionContent className="text-ogLabel-muted text-sm md:text-lg">New content is added monthly, including videos, photos, and adventure guides. Members will also be notified of live Q&A sessions and special events in advance.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg md:text-xl">How can I participate in the live Q&A sessions?</AccordionTrigger>
                <AccordionContent className="text-ogLabel-muted text-sm md:text-lg">Members will receive notifications with the schedule for upcoming live Q&A sessions. You can join these sessions through a link provided in the member&apos;s area.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg md:text-xl">What type of exclusive adventure guides will I receive?</AccordionTrigger>
                <AccordionContent className="text-ogLabel-muted text-sm md:text-lg">
                  The exclusive adventure guides include detailed information on various outdoor activities such as hiking, camping, and survival tips. These guides are created by Ginger, drawing from his extensive experience in the wild.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg md:text-xl">Is there a community where I can interact with other members?</AccordionTrigger>
                <AccordionContent className="text-ogLabel-muted text-sm md:text-lg">Yes, there is a private community platform where members can connect, share their outdoor experiences, ask questions, and get inspired by fellow adventurers.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg md:text-xl">How can I access the special discounts on merchandise?</AccordionTrigger>
                <AccordionContent className="text-ogLabel-muted text-sm md:text-lg">
                  Members will receive exclusive discount codes that can be used on the Outdoor Ginger merchandise store. These codes can be applied during checkout to avail of the special discounts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-lg md:text-xl">Can I cancel my membership at any time?</AccordionTrigger>
                <AccordionContent className="text-ogLabel-muted text-sm md:text-lg">
                  Yes, you can cancel your membership at any time. Simply go to your account settings and follow the instructions to cancel your subscription. Your access to the member&apos;s area will remain active until the end of the billing cycle.
                </AccordionContent>
              </AccordionItem>{" "}
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-lg md:text-xl">What payment methods are accepted for the membership?</AccordionTrigger>
                <AccordionContent className="text-ogLabel-muted text-sm md:text-lg">We accept various payment methods, including credit/debit cards, PayPal, and other major online payment platforms. Details can be found on our membership sign-up page.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
