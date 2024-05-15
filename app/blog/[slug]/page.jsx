import Hero from "@/components/generel/Hero";
import { client, urlFor } from "@/lib/sanity/client";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
	const slugQuery = '*[_type == "post"]{slug}';
	const posts = await client.fetch(slugQuery, {
		next: {
			revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
		},
	});

	return posts.map((post) => ({
		params: { slug: post.slug.current },
	}));
}

export default async function Page({ params }) {
	const postQuery =
		'*[_type == "post" && slug.current == $slug]{slug, title, author, publishedAt, mainImage, content}';

	const post = await client.fetch(postQuery, {
		slug: params.slug,
	});

	const authorQuery = '*[_type == "author"]{_id, name, mainImage, instagram}';
	const authors = await client.fetch(authorQuery);

	const postAuthor = authors.find(
		(author) => author._id === post[0].author._ref
	);

	const imgUrl = urlFor(post[0].mainImage).url();
	const freeContent = post[0].content.slice(0, 3);

	return (
		<main>
			<Hero imageSrc={imgUrl} height="h-96 md:h-[40vh]"></Hero>
			<article className="prose md:prose-lg prose-neutral mx-auto px-8 pb-12 md:pb-24">
				<h1 className="text-3xl md:text-5xl font-bold">{post[0].title}</h1>
				<p>
					By{" "}
					<a
						href={`https://instagram.com/${postAuthor.instagram}`}
						target="_blank"
						rel="noopener noreferrer"
						className="underline"
					>
						{postAuthor.name}
					</a>{" "}
					on{" "}
					{new Date(post[0].publishedAt).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</p>

				<PortableText value={freeContent} />

				{post[0].content.length > freeContent.length && (
					<div className="-mt-28 relative z-10">
						<div className="h-28 bg-gradient-to-b from-transparent to-ogBG-base" />
						<div className=" bg-ogBG-base rounded-lg px-8 py-4 drop-shadow-xl">
							<p className="text-xl capitalize text-ogLabel-title">
								become a member!
							</p>
							<p>
								You&apos;ve reached the end of the free preview. To continue
								reading, please subscribe.
							</p>
							<div className="flex justify-between items-center">
								<p>
									<span className="text-2xl text-ogLabel-title font-semibold">
										9$
									</span>{" "}
									/ Month
								</p>
								<Link href="/membership">
									<Button variant="primary">Subscribe</Button>
								</Link>
							</div>
						</div>
					</div>
				)}
			</article>
		</main>
	);
}
