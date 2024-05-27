import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function ConnectBanner() {
  return (
    <section className="bg-ogPrimary-lightest text-ogPrimary flex flex-col justify-items-start px-8 md:px-0 py-10">
      <div>
        <div className="bg-ogPrimary-lightest text-ogPrimary md:px-0 md:my-20 md:max-w-7xl md:mx-auto">
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl md:text-7xl font-bold leading-7 text-left font-display uppercase mb-5">
              Connect <br /> and Embark on <br />
              the Journey
            </h2>
            <Link target="blank" href="mailto:contact@outdoorginger.com">
              <Button size="lg" variant="primary" className="text-lg">
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
