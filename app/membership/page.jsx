import SupportBanner from "@/components/SupportBanner";
import Hero from "@/components/generel/Hero";

export default function Page() {
  return (
    <main>
      <Hero
        title="Membership"
        imageSrc="/membershiphero.webp"
        height="60vh"
      ></Hero>
      <div className="pt-64 pb-32 max-w-7xl mx-auto"></div>
      <SupportBanner />
    </main>
  );
}
