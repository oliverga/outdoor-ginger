import ProductInteraction from "@/components/equipment/ProductInteraction";
import Hero from "@/components/generel/Hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { client, urlFor } from "@/lib/sanity/client";
import { PortableText } from "next-sanity";
import Image from "next/image";

export async function generateStaticParams() {
  const slugQuery = '*["_type" == "product"]{slug}';

  const products = await client.fetch(slugQuery, {
    next: {
      revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
    },
  });

  return products.map((product) => ({
    params: { slug: product.slug.current },
  }));
}

export default async function Page({ params }) {
  const productQuery =
    '*[_type == "product" && slug.current == $slug]{title, slug, description, body, price, memberPrice, images, tags, category, _id, materials, weight}';

  const productFetch = await client.fetch(productQuery, { slug: params.slug });
  const product = productFetch[0];

  const image = urlFor(product.images[0]).url();

  console.log(product.materials);

  return (
    <main className="min-h-screen">
      <Hero imageSrc={image} height="h-48 md:h-[30vh]" bg="bg-equipment" />
      <section className="container mx-auto max-w-5xl md:grid grid-cols-2 prose pb-24">
        <div className="md:px-8 pb-8 -mt-6 md:mt-0">
          <Image
            src={image}
            alt={product.title}
            width={500}
            height={500}
            className="object-cover outline w-full rounded-xl m-0"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="mb-0 font-bold">{product.title}</h1>
          <ProductInteraction product={product} />
          <PortableText value={product.body} />
          <Accordion type="multiple" collapsible className="w-full my-4">
            {product.materials && (
              <AccordionItem value="item-1" defaultOpen={true} className="">
                <AccordionTrigger className="text-base py-0">
                  Materials
                </AccordionTrigger>
                <AccordionContent className="text-ogLabel-muted text-sm">
                  <div className="prose prose-neutral prose-sm prose-strong:font-medium prose-p:text-sm">
                    <PortableText value={product.materials} />
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}
            {product.weight && (
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base py-0">
                  Weight
                </AccordionTrigger>
                <AccordionContent className="text-ogLabel-muted text-sm">
                  {product.weight}
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
