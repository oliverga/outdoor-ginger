import Hero from "@/components/generel/Hero";
import { client, urlFor } from "@/lib/sanity/client";
import Paywall from "@/components/generel/PayWall";
import ArticleCard from "@/components/generel/ArticleCard";

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

	const postsQuery =
		'*[_type == "post"]{title, slug, author, publishedAt, mainImage, content}';

	const posts = await client.fetch(postsQuery, {
		next: {
			revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
		},
	});

	let currentPostSlug = post[0].slug.current;

	return (
		<main>
			<Hero imageSrc={imgUrl} height="h-96 md:h-[40vh]"></Hero>
			<div className="md:relative md:grid grid-cols-blogLayout max-w-5xl mx-auto">
				<article className="row-span-2 prose md:prose-lg prose-neutral mx-auto px-8 pb-12 md:pb-24">
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

					<Paywall post={post} />
				</article>
				<div className="col-start-2 flex flex-col gap-4 px-8 md:px-0 mb-12 max-w-[650px] md:max-w-[730px] mx-auto md:mt-108">
					{posts
						.filter((post) => post.slug.current !== currentPostSlug)
						.slice(-2)
						.map((post) => {
							return <ArticleCard post={post} key={post.slug.current} />;
						})}
				</div>
				<div className="hidden md:block absolute right-[-485px] top-32 bg-ogPrimary w-[800px] pl-10 pb-10 pt-32 rounded-3xl">
					<h2 className="capitalize text-5xl font-display font-semibold text-ogPrimary-lightest">
						Training in <br /> the Pyranees
					</h2>
				</div>
			</div>
		</main>
	);
}
