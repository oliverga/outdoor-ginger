import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity/client";
import { format } from "date-fns";

export default function ArticleCard({ post }) {
	return (
		<article>
			<Link
				href={`/blog/${post.slug.current}`}
				className="flex gap-4 border rounded-xl overflow-hidden items-center shadow-md max-w-80"
			>
				<Image
					src={urlFor(post.mainImage).url()}
					alt=""
					width={800}
					height={400}
					className="aspect-square w-20 h-20"
				/>
				<div className="">
					<h2>
						{post.title.length > 23
							? post.title.slice(0, 23) + "..."
							: post.title}
					</h2>
					<p>{format(new Date(post.publishedAt), "PPP")}</p>
				</div>
			</Link>
		</article>
		// <div className="@container">
		// 	<article
		// 		key={post.slug.current}
		// 		className="mx-auto border rounded-xl overflow-hidden w-full shadow-sm"
		// 	>
		// 		<Link href={`/blog/${post.slug.current}`}>
		// 			{post.mainImage && (
		// 				<div className="overflow-hidden">
		// 					<Image
		// 						src={urlFor(post.mainImage).url()}
		// 						alt=""
		// 						width={800}
		// 						height={400}
		// 						className="aspect-video @xl:aspect-[16/7] object-cover object-center w-full hover:scale-[102%] transition-all duration-500"
		// 					/>
		// 				</div>
		// 			)}
		// 			<div className="m-4 space-y-2">
		// 				<h2 className=" font-medium text-xl">{post.title}</h2>
		// 				<p className="text-xs text-ogLabel-faint">
		// 					{format(new Date(post.publishedAt), "PPP")}
		// 				</p>
		// 			</div>
		// 		</Link>
		// 	</article>
		// </div>
	);
}
