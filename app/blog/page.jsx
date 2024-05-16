import Hero from "@/components/generel/Hero";
import { client, urlFor } from "@/lib/sanity/client";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import NewsletterBanner from "@/components/generel/NewsletterBanner";
import Globe from "@/components/generel/Globe";

const postQuery =
	'*[_type == "post"]{title, slug, author, publishedAt, mainImage, content}';

const posts = await client.fetch(postQuery, {
	next: {
		revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
	},
});

export default async function Page() {
	return (
		<main>
			<Hero
				title="Campfire Chronicles"
				imageSrc="/bloghero.webp"
				height="h-96 md:h-[50vh]"
			></Hero>
			<Globe />
			<section className="pb-32 max-w-5xl mx-auto px-8">
				<div className="flex flex-col md:grid grid-cols-3 gap-6">
					<div className=" col-span-1 flex flex-col gap-6 -mt-6 md:mt-0">
						{posts.slice(0, Math.ceil(posts.length / 2)).map((post) => {
							return <Article post={post} key={post.slug.current} />;
						})}
					</div>
					<div className="col-span-2 flex flex-col gap-6">
						{posts.slice(Math.ceil(posts.length / 2)).map((post) => {
							return <Article post={post} key={post.slug.current} />;
						})}
					</div>
				</div>
			</section>
			<NewsletterBanner />
		</main>
	);
}

function Article({ post }) {
	return (
		<div className="@container">
			<article
				key={post.slug.current}
				className="mx-auto border rounded-xl overflow-hidden w-full shadow-sm"
			>
				<Link href={`/blog/${post.slug.current}`}>
					{post.mainImage && (
						<div className="overflow-hidden">
							<Image
								src={urlFor(post.mainImage).url()}
								alt=""
								width={800}
								height={400}
								className="aspect-video @xl:aspect-[16/7] object-cover object-center w-full hover:scale-[102%] transition-all duration-500"
							/>
						</div>
					)}
					<div className="m-4 space-y-2">
						<h2 className=" font-medium text-xl">{post.title}</h2>
						<p className="text-xs text-ogLabel-faint">
							{format(new Date(post.publishedAt), "PPP")}
						</p>
					</div>
				</Link>
			</article>
		</div>
	);
}
