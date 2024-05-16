import Hero from "@/components/generel/Hero";
import { client } from "@/lib/sanity/client";

import NewsletterBanner from "@/components/generel/NewsletterBanner";
import Globe from "@/components/generel/Globe";
import BlogOverview from "@/components/generel/BlogOverview";

const postQuery =
	'*[_type == "post"]{title, slug, author, publishedAt, mainImage, content, Latitude, Longitude}';

const posts = await client.fetch(postQuery, {
	next: {
		revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
	},
});

export default function Page() {
	return (
		<main>
			<Hero
				title="Campfire Chronicles"
				imageSrc="/bloghero.webp"
				height="h-96 md:h-[50vh]"
			></Hero>
			<Globe posts={posts} />
			<BlogOverview posts={posts} />
			<NewsletterBanner />
		</main>
	);
}
