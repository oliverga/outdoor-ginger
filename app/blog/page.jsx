import { client, urlFor } from "@/lib/sanity/client";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const postQuery =
  '*[_type == "post"]{title, slug, author, publishedAt, mainImage, content}';

const posts = await client.fetch(postQuery, {
  next: {
    revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
  },
});

console.log(posts);

const authorQuery = '*[_type == "author"]{_id, name, mainImage, instagram}';

const authors = await client.fetch(authorQuery);

export default function Page() {
  return (
    <main className="pt-64 pb-32 max-w-7xl mx-auto">
      <div className="grid grid-flow-row gap-2">
        {posts.map((post) => {
          if (!post.author) {
            console.error("Post author is null:", post);
            return null; // or handle this case differently as needed
          }
          const postAuthor = authors.find(
            (author) => author._id === post.author._ref,
          );
          return (
            <article
              key={post.slug.current}
              className="mx-auto border rounded-xl overflow-hidden"
            >
              <Link href={`/blog/${post.slug.current}`}>
                {post.mainImage && (
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt=""
                    width={800}
                    height={400}
                    className="aspect-video"
                  />
                )}
                <div className="m-4 space-y-2">
                  <h2 className=" font-semibold text-lg">{post.title}</h2>
                  <p className="text-sm text-ogLabel-muted">
                    {format(new Date(post.publishedAt), "PPP")}
                  </p>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </main>
  );
}
