"use client";

import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { urlFor } from "@/lib/sanity/client";
import { usePostStore } from "@/lib/store/postStore";

export default function BlogOverview({ posts }) {
	const { post, setPost } = usePostStore();

	return (
		<section className="pb-32 max-w-5xl mx-auto px-8 md:-mt-[500px] md:relative md:z-60">
			<div className="h-28 bg-gradient-to-b from-transparent to-ogBG-base hidden md:block" />
			<div className="flex flex-col md:grid grid-cols-3 gap-6 bg-ogBG-base">
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
	);
}

function Article({ post }) {
	const { setPost } = usePostStore();
	return (
		<div
			className="@container"
			onMouseEnter={() => setPost(post)}
			onMouseLeave={() => setPost(null)}
		>
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
