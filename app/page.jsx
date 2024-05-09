import NewsletterBanner from "@/components/NewsletterBanner";
import SupportBanner from "@/components/SupportBanner";
import Hero from "@/components/generel/Hero";

export default function Home() {
	return (
		<main>
			<Hero></Hero>
			<SupportBanner />
			<NewsletterBanner />
		</main>
	);
}
