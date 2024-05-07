"use client";

import { Button } from "@/components/ui/button";
import { IconHeartHandshake, IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

function Header() {
  const progress = "63%";
  const { scrollY } = useScroll();

  // Use useState hook to manage state
  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  // This onUpdate function is called in the `scrollY.onChange` callback
  function update(latest, prev) {
    if (latest < prev) {
      setHidden(false);
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
    }
  }

  // Add `update()` function and `setPrevScroll` state handler
  useMotionValueEvent(scrollY, "change", (latest) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 z-50 w-screen px-8 py-4"
      animate={{ y: hidden ? "-100%" : "0" }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.3,
      }}
    >
      <div className="max-w-7xl mx-auto overflow-hidden rounded-bl-xl rounded-t-xl z-40 shadow">
        <div className="w-full h-20 bg-ogBG-base rounded-t-xl flex items-center justify-between px-8  border border-x-neutral-200 border-t-neutral-200 border-b-0 border-opacity-50 mx-auto max-w-7xl">
          <Link href="/" className="flex">
            <Image
              src="/logo.svg"
              alt="Outdoor Ginger Logo"
              width={150}
              height={150}
              className="w-32"
            />
          </Link>

          <div className="flex gap-8 items-center">
            <nav>
              <ul className="flex gap-6 items-center text-sm font-medium">
                <li>
                  <Link className="p-2" href="/membership">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link className="p-2" href="/equipment">
                    My equipment
                  </Link>
                </li>
                <li>
                  <Link className="p-2" href="/blog">
                    Campfire Chronicles
                  </Link>
                </li>
                <li>
                  <Link className="p-2" href="/about">
                    About me
                  </Link>
                </li>
                <li>
                  <Link className="p-2" href="/about#contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <IconShoppingCart size={28} className=" stroke-[1.5px]" />
          </div>
        </div>
        <div className="w-full h-3 max-w-7xl mx-auto flex bg-ogBG-sub relative border border-x-neutral-200 border-y-0 border-opacity-50 ">
          <motion.div
            className="w-0 h-3 bg-ogPrimary absolute top-0 left-0"
            animate={{ width: progress }}
            transition={{ duration: 1.8, type: "spring" }}
          ></motion.div>
        </div>
      </div>
      <div className="w-full h-fit max-w-7xl mx-auto flex justify-end">
        <div className="w-fit h-full max-w-xs bg-ogBG-sub justify-self-end rounded-b-xl flex justify-between gap-4 items-center px-4 py-2 shadow z-40 border border-x-neutral-200 border-b-neutral-200 border-t-0 border-opacity-50">
          <p className="text-sm font-medium text-ogLabel-muted">
            Of 10.000 kr.
          </p>
          <Link href="https://www.gofundme.com/f/outdoorginger" target="_blank">
            <Button
              size="sm"
              className="bg-ogPrimary hover:bg-ogPrimary-dark gap-1"
            >
              Donate
              <IconHeartHandshake size={20} className="stroke-[1.5px]" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
