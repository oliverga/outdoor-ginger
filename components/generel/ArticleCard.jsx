import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity/client";
import { format } from "date-fns";

export default function ArticleCard({ post }) {
  return (
    <article className="focus:outline-none ">
      <Link
        href={`/blog/${post.slug.current}`}
        className="flex gap-3 border rounded-xl overflow-hidden shadow max-w-md w-full focus:outline-none"
      >
        <div className="  w-full max-w-[100px]  aspect-square overflow-hidden ">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            width={400}
            height={400}
            className=" object-cover object-center w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 py-4 px-2 pr-3">
          <h2 className="font-medium">
            {post.title.length > 40
              ? post.title.slice(0, 40) + "..."
              : post.title}
          </h2>
          <p className="text-sm text-ogLabel-faint">
            {format(new Date(post.publishedAt), "PPP")}
          </p>
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
