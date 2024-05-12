import NewsletterBanner from "@/components/NewsletterBanner";
import SupportBanner from "@/components/SupportBanner";
import LatestYT from "@/components/generel/LatestYT";
import Hero from "@/components/generel/Hero";
import SponsorBanner from "@/components/generel/SponsorBanner";

export default function Home() {
	return (
		<main>
			<Hero
				title="Outdoor Ginger"
				imageSrc="/forsidehero.webp"
				height="80vh"
				bgPos="bottom"
			></Hero>
			<LatestYT />
			<SponsorBanner />
			<SponsorBanner type="static" />
			<SupportBanner />
			<NewsletterBanner />
		</main>
	);
}
