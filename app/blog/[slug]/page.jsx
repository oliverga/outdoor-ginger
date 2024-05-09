import { client, urlFor } from "@/lib/sanity/client";
import { PortableText } from "next-sanity";
import Image from "next/image";

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
    (author) => author._id === post[0].author._ref,
  );

  return (
    <main>
      <div className="h-[50vh] overflow-hidden ">
        <Image
          src={urlFor(post[0].mainImage).url()}
          alt=""
          width={1920}
          height={1000}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className=" pt-[5rem] rounded-t-[3rem] -translate-y-[3rem] bg-ogBG-base">
        <article className="prose md:prose-lg prose-neutral mx-auto p-8">
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

          <PortableText value={post[0].content} />
        </article>
      </div>
    </main>
  );
}
