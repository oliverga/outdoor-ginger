"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import Item from "./Item";

export default function ShoppingCart({ cartRef }) {
  return (
    <div className="overflow-hidden fixed -top-6 md:top-7 left-0 z-50 md:z-60 w-full px-2 md:px-0 mt-12 max-w-7xl mx-auto md:left-1/2 md:transform md:-translate-x-1/2 h-[100%] pointer-events-none ">
      <motion.div
        ref={cartRef}
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0px", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.25,
          opacity: { duration: 0.3 },
        }}
        className="md:mr-8 cart:mr-0"
      >
        <div className="bg-ogBG-base rounded-b-2xl max-h-[80lvh] md:max-h-[650px] md:max-w-96  ml-auto flex flex-col justify-between pointer-events-auto drop-shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-ogBG-base to-transparent pointer-events-none"></div>
          <div className="px-8 space-y-6 overflow-y-scroll scrollbar scrollbar-thumb-ogPrimary scrollbar-track-ogBG-base pt-24 md:pt-8 pb-8">
            <Item
              imgSrc="/knife.png"
              name="KnifeKnifeKnifeKnifeKnife - limited edition"
              price="99.95 kr"
            />
            <hr className="h-[1px]" />
            <Item
              imgSrc="/knife.png"
              name="hold up - limited edition"
              price="99.95 kr"
            />
            <hr className="h-[1px]" />
            <Item
              imgSrc="/knife.png"
              name="hold up - limited edition"
              price="99.95 kr"
            />
            <hr className="h-[1px]" />
            <Item
              imgSrc="/knife.png"
              name="hold up - limited edition"
              price="99.95 kr"
            />
            <hr className="h-[1px]" />
            <Item
              imgSrc="/knife.png"
              name="hold up - limited edition"
              price="99.95 kr"
            />
          </div>
          <div className="bg-neutral-200 md:pb-4">
            <div className="px-12 pt-4 pb-2 flex flex-col gap-3">
              <div className=" flex justify-between font-normal">
                <p>Subtotal</p>
                <p>99.95 kr</p>
              </div>
              <hr className="bg-neutral-300 h-[3px]" />
              <div className="flex items-center gap-2 font-normal text-ogLabel-muted text-xs mb-2">
                <Checkbox />
                <p>
                  Accept{" "}
                  <Link
                    target="_blank"
                    href="https://www.google.com/search?client=firefox-b-d&q=terms+and+conditions"
                    className="underline decoration-neutral-400"
                  >
                    Terms
                  </Link>
                  {" & "}
                  <Link
                    target="_blank"
                    href="https://www.google.com/search?client=firefox-b-d&q=terms+and+conditions"
                    className="underline decoration-neutral-400"
                  >
                    Conditions
                  </Link>
                </p>
              </div>
              <Button variant="primary" size="sm" className="md:">
                Checkout
              </Button>
              <hr className="block md:hidden bg-neutral-300 h-[8px] w-1/2 mx-auto rounded-full mt-3" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
