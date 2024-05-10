"use client";

import { client, urlFor } from "@/lib/sanity/client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const sponsorQuery = '*[_type == "sponsor"]{Sponsor_Name, Sponsor_Logo}';


export default function SponsorBanner() {
    const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(sponsorQuery);
      setSponsors(data);
    };

    fetchData();
  }, []);

	return (
		<article className="bg-ogPrimary my-4 py-4 overflow-hidden">
			<motion.div 
                className="flex gap-8 justify-center items-center"
                animate={{
                    x: [0, 110 * sponsors.length],
                    transition: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 45,
                      ease: "linear",
                    },
                  }}
            >
				{Array(4)
          .fill(sponsors)
          .flat()
          .map((sponsor, index) => {
            return (
              <div key={index} className="aspect-square h-20">
                <Image
                  src={urlFor(sponsor.Sponsor_Logo).url()}
                  alt={sponsor.Sponsor_Name}
                  width={400}
                  height={400}
                  className="object-contain w-full h-full"
                />
              </div>
            );
          })} 
			</motion.div>
		</article>
	);
}
