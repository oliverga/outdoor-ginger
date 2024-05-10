import NewsletterBanner from "@/components/NewsletterBanner";
import SupportBanner from "@/components/SupportBanner";
import LatestYT from "@/components/generel/LatestYT";
import Hero from "@/components/generel/Hero";

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
			<SupportBanner />
			<NewsletterBanner />
		</main>
	);
}
