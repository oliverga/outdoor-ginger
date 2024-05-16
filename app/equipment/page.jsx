import Hero from "@/components/generel/Hero";
import { client } from "@/lib/sanity/client";
import ProductCard from "@/components/equipment/ProductCard";
import SponsorBanner from "@/components/generel/SponsorBanner";
import MemberBanner from "@/components/generel/MemberBanner";

const productQuery =
  '*[_type == "product"]{title, slug, description, mainContent, price, memberPrice, images, tags, category, _id}';

const products = await client.fetch(productQuery, {
  next: {
    revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
  },
});

const categoryQuery = '*[_type == "category"]{title, slug, description, _id}';

const categories = await client.fetch(categoryQuery, {
  next: {
    revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
  },
});

const productsByCategory = products.reduce((acc, product) => {
  const categoryId = product.category._ref;
  if (!acc[categoryId]) {
    acc[categoryId] = [];
  }
  acc[categoryId].push(product);
  return acc;
}, {});

const categoriesWithProducts = categories.map((category) => ({
  ...category,
  products: productsByCategory[category._id] || [],
}));

export default function Page() {
  return (
    <main>
      <Hero
        title="Equipment"
        imageSrc="/equipmenthero.webp"
        height="h-96 md:h-[40vh]"
      >
        <div id="left">
          <p className="text-2xl font-medium opacity-70 font-display text-ogBG-base">
            Reliable gear for outdoor adventures
          </p>
        </div>
      </Hero>
      <div className="min-h-screen max-w-5xl mx-auto px-8 pb-24">
        <div className="flex flex-wrap justify-center gap-12  -mt-6 md:mt-0">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
      <MemberBanner
        title="25% Discount for members"
        description="Join 'FREEDOM ACHIEVERS' to get access to exclusive content,
        discounts and more!"
        buttonText="Become a member"
      />
      <SponsorBanner />
    </main>
  );
}
