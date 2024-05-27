"use client";

import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity/client";
import { IconHeartHandshake } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Donation() {
  const [donationProgress, setDonationProgress] = useState("0%");

  useEffect(() => {
    const fetchDonationProgress = async () => {
      const data = await client.fetch(`*[_type == "donation"]{procent}`);
      let dataString = data[0].procent.toString() + "%";
      setDonationProgress(dataString);
      console.log(dataString);
    };
    fetchDonationProgress();
  }, []);

  return (
    <div className="md:hidden fixed z-60 bottom-0 w-full flex justify-between items-end drop-shadow-up">
      <div className="w-full grid grid-cols-1 grid-rows-1 items-end">
        <div className="grid grid-cols-1 grid-rows-1 col-start-1 row-start-1col-start-1 row-start-1 relative z-10">
          <motion.div
            className={`bg-ogPrimary h-3  rounded-r-full col-start-1 row-start-1 relative z-10`}
            initial={{ width: "0" }}
            animate={{ width: donationProgress }}
            transition={{ type: "spring", bounce: 0.3, duration: 2 }}
          ></motion.div>
          <div className="bg-ogBG-sub h-3 w-full col-start-1 row-start-1" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", bounce: 0.3, duration: 2 }}
          className="rounded-b-none bg-ogBG-base p-4 pb-5 rounded-lg text-ogLabel-muted col-start-1 row-start-1 w-max mb-1 ml-12 pointer-events-none"
        >
          {donationProgress} Funded
        </motion.div>
      </div>
      <Link href="https://www.gofundme.com/f/outdoorginger" target="_blank">
        <Button
          variant="primary"
          size="lg"
          className="gap-1 rounded-r-none rounded-bl-none pr-3 pl-5"
        >
          Donate
          <IconHeartHandshake size={20} className="stroke-[1.5px]" />
        </Button>
      </Link>
    </div>
  );
}
