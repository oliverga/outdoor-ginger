import NewsletterBanner from "@/components/NewsletterBanner";
import SupportBanner from "@/components/SupportBanner";
import LatestYT from "@/components/generel/LatestYT";
import Hero from "@/components/generel/Hero";
import SponsorBanner from "@/components/generel/SponsorBanner";
import AboutBlock from "@/components/generel/AboutBlock";
import JoinTheClub from "@/components/generel/JoinTheClub";

export default function Home() {
  return (
    <main>
      <Hero
        title="Outdoor Ginger"
        imageSrc="/forsidehero.webp"
        height="80lvh"
        bgPos="bottom"
      />
      <AboutBlock />
      <LatestYT />
      <JoinTheClub />
      <SponsorBanner />
      <SupportBanner />
      <NewsletterBanner />
    </main>
  );
}
