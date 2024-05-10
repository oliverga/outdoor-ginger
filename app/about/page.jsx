import Hero from "@/components/generel/Hero";

export default function Page() {
  return (
    <main className="">
      <Hero title="About August" imageSrc="/aboutMe.png" height="80vh">
        <div id="left" className="mt-8 w-full">
          <p className="text-ogLabel-faint font-extralight text-2xl italic">Anything is possible if you dare to be curious</p>
        </div>
      </Hero>
      <section className="px-6 md:px-0 py-32 max-w-5xl mx-auto">
        <div>
          <h2 className="font-display">AUGUST</h2>
        </div>
      </section>
    </main>
  );
}
