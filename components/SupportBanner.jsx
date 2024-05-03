import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function SupportBanner() {
  return (
    <section className="h-[50vh] bg-ogPrimary-lightest text-ogPrimary flex flex-col md:flex-row items-center justify-evenly text-center px-4 py-6">
      <div className=" space-y-8 md:text-left">
        <h1 className="text-6xl md:text-8xl font-bold">Support August</h1>
        <p className="text-lg max-w-md text-ogPrimary-light">
          I&apos;m dedicated to inspiring others to get out and explore nature
          and your support makes it happen.
        </p>
        <p className="text-lg text-ogPrimary-light">
          All donations are appreciated 🫶
        </p>
      </div>
      <div className="flex md:flex-col gap-4">
        <Link href="https://buymeacoffee.com/outdoorginger">
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
        <Link href="https://www.gofundme.com/f/outdoorginger">
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
    </section>
  );
}

export default SupportBanner;
