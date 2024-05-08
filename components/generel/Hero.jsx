import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
function Hero({ title, height, imageSrc }) {
  return (
    <div className="relative pt-32 w-screen" style={{ height: height, position: "relative" }}>
      <Image src={imageSrc} alt="Mountain View" layout="fill" objectFit="cover" quality={100} className="absolute z-0" />
      <div className="max-w-7xl mx-auto py-4 relative z-10 flex flex-col justify-between h-full">
        <div className="flex justify-end pt-16 pr-44">
          <Card shadow="lg" className="w-96 flex flex-col space-between p-6 rounded-lg">
            <h4 className="font-normal mb-2 text-4xl">Become a member</h4>
            <p className="mb-8 text-base font-light text-ogLabel-muted">
              Join our community of explorers <br></br> and get exclusive benefits.
            </p>
            <div className="flex justify-between">
              <p className="font-semibold text-4xl">
                50 kr <span className="text-sm font-light text-ogLabel-muted">/ Month</span>
              </p>
              <Button size="sm" className="bg-ogPrimary hover:bg-ogPrimary-dark gap-1 ">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
        <h1 className="text-4xl md:text-7xl pl-28 pb-12 font-bold text-ogBG-base uppercase z-50">{title}</h1>
      </div>
    </div>
  );
}

export default Hero;
