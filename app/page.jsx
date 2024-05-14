import NewsletterBanner from "@/components/NewsletterBanner";
import SupportBanner from "@/components/SupportBanner";
import LatestYT from "@/components/generel/LatestYT";
import Hero from "@/components/generel/Hero";
import SponsorBanner from "@/components/generel/SponsorBanner";
import AboutBlock from "@/components/generel/AboutBlock";
import JoinTheClub from "@/components/generel/JoinTheClub";
import SocialFollowers from "@/components/generel/SocialFollowers";

export default function Home() {
  return (
    <main>
      <Hero
        title="Outdoor Ginger"
        imageSrc="/forsidehero.webp"
        height="80vh"
        bgPos="bottom"
      />
      <div className="space-y-32">
        <div>
          <AboutBlock />
        </div>
        <div>
          <LatestYT />
        </div>
        <div>
          <JoinTheClub />
        </div>
        <div>
          <SocialFollowers />
          <SponsorBanner />
          <SupportBanner />
          <NewsletterBanner />
        </div>
      </div>
    </main>
  );
}
