import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function ConnectBanner() {
  return (
    <section className="bg-ogPrimary-lightest text-ogPrimary flex flex-col text-center  px-6 py-6 relative">
      <div className="absolute -top-12 right-24 transform translate-x-1/2 -translate-y-1/2">
        <Image src="/phone.png" alt="" width={64} height={64} className="w-44" />
      </div>
      <div className="">
        <h2 className="text-3xl md:text-8xl font-bold text-left font-display uppercase leading-7 pb-6">
          Connect <br></br> and embark on <br></br> the journey
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex md:flex-col">
            <Link target="blank" href="mailto:contact@outdoorginger.com">
              <Button size="default" className="bg-ogPrimary text-ogPrimary-lightest hover:bg-ogPrimary-dark font-semibold text-base uppercase rounded-xl underline">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConnectBanner;
