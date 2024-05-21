import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

function SupportBanner({ type = "banner" }) {
  if (type == "banner") {
    return (
      <article className="h-[50vh] bg-ogPrimary-lightest text-ogPrimary flex flex-col items-center justify-evenly text-center px-4 py-12">
        <h1 className="font-display font-semibold uppercase text-4xl md:text-5xl text-center">
          Support August
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className=" space-y-4 md:text-left text-lg max-w-md text-ogLabel-base leading-relaxed">
            <p className="">
              I&apos;m dedicated to inspiring others to get out and explore
              nature and your support makes it happen.
            </p>
            <p className="">All donations are appreciated 🫶</p>
          </div>
          <div className="flex md:flex-col gap-4">
            <Link target="blank" href="https://buymeacoffee.com/outdoorginger">
              <Button
                size="lg"
                className="bg-ogPrimary text-ogPrimary-lightest hover:bg-ogPrimary-dark p-10 w-full rounded-2xl"
              >
                <Image
                  src="/buymeacoffee.svg"
                  width={64}
                  height={64}
                  alt="Buy Me a Coffee"
                  className=" w-52 pointer-events-none"
                />
              </Button>
            </Link>
            <Link
              target="blank"
              href="https://www.gofundme.com/f/outdoorginger"
            >
              <Button
                size="lg"
                className="bg-ogPrimary text-ogPrimary-lightest hover:bg-ogPrimary-dark p-10 w-full rounded-2xl"
              >
                <Image
                  src="/gofundme.svg"
                  width={64}
                  height={64}
                  alt="GoFundMe"
                  className=" w-44 pointer-events-none"
                />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    );
  } else if (type == "original") {
    return (
      <section className="px-8">
        <article className="my-32 md:my-48 max-w-7xl flex flex-col items-center justify-between  md:flex-row md:gap-8 mx-auto w-full ">
          <div className="flex flex-col items-center md:items-start gap-8 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-display font-semibold uppercase text-center md:text-left md:self-start">
              Support August
            </h2>
            <div className="space-y-8 w-full max-w-md text-left  text-lg leading-relaxed">
              <p className="text-ogLabel-base ">
                I&apos;m dedicated to inspiring others to get out and explore
                nature and your support makes it happen.
              </p>
              <p className="text-ogLabel-base ">
                All donations are appreciated 🫶
              </p>
              <div className="flex md:flex-col gap-4">
                <Link
                  target="blank"
                  href="https://buymeacoffee.com/outdoorginger"
                >
                  <Button size="xl" variant="primary">
                    <Image
                      src="/buymeacoffee.svg"
                      width={100}
                      height={100}
                      alt="Buy Me a Coffee"
                      className="w-80 max-h-12 pointer-events-none"
                    />
                  </Button>
                </Link>
                <Link
                  target="blank"
                  href="https://www.gofundme.com/f/outdoorginger"
                >
                  <Button size="xl" variant="primary">
                    <Image
                      src="/gofundme.svg"
                      width={100}
                      height={100}
                      alt="GoFundMe"
                      className="w-56 max-h-12 pointer-events-none"
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="aspect-square w-48 h-48 md:w-96 md:h-96 md:place-self-center mx-auto">
            <Image
              src="/fire.png"
              alt="August sitting by a campfire"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-full drop-shadow-lg"
            />
          </div>
        </article>
      </section>
    );
  }
}

export default SupportBanner;
