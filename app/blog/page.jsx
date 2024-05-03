import { client } from "@/lib/sanity/client";
import { PortableText } from "next-sanity";
import { format } from "date-fns";

const postQuery =
  '*[_type == "post"]{title, slug, author, publishedAt, mainImage, content}';

const posts = await client.fetch(postQuery, {
  next: {
    revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
  },
});

const authorQuery = '*[_type == "author"]{_id, name, image, instagram}';

const authors = await client.fetch(authorQuery);

export default function Page() {
  return (
    <main>
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
            className="prose md:prose-lg prose-neutral mx-auto mt-20 mb-48 px-6 border-b pb-32"
          >
            <h2>{post.title}</h2>

            <p>By {postAuthor.name}</p>
            <p className="text-base">
              {format(new Date(post.publishedAt), "PPP")}
            </p>

            <PortableText value={post.content} />
          </article>
        );
      })}
    </main>
  );
}
