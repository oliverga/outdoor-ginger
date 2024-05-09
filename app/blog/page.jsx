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
    <main className="pt-64 pb-32 max-w-4xl mx-auto ">
      <div className="grid grid-cols-3 gap-6 ">
        <div className=" col-span-1 flex flex-col gap-6">
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
    </main>
  );
}

function Article({ post }) {
  const postAuthor = authors.find((author) => author._id === post.author._ref);
  return (
    <article
      key={post.slug.current}
      className="mx-auto border rounded-xl overflow-hidden w-full"
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
}
