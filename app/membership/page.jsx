import SupportBanner from "@/components/SupportBanner";
import Hero from "@/components/generel/Hero";

export default function Page() {
  return (
    <main>
      <Hero title="Membership" imageSrc="/membershiphero.webp"></Hero>
      <div className=" pt-[5rem] rounded-t-[3rem] -translate-y-[3rem] bg-ogBG-base"></div>
      <div className="pt-64 pb-32 max-w-7xl mx-auto"></div>
      <SupportBanner />
    </main>
  );
}
