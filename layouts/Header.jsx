"use client";

import { Button } from "@/components/ui/button";
import { IconHeartHandshake, IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ShoppingCart from "@/components/ShoppingCart";

function Header() {
  const pathname = usePathname();

  const linkStyle = (path) =>
    pathname === path ? "p-2 text-ogPrimary" : "p-2";

  const progress = "84%";

  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  const cartRef = useRef(null);

  const handleVisibility = (scrollPosition) => {
    const shouldHide = scrollPosition > prevScroll && scrollPosition > 60;
    setHidden(shouldHide);
    if (shouldHide && cartOpen) {
      setCartOpen(false); // Also close the cart when hiding the header
    }
    setPrevScroll(scrollPosition);
  };

  useMotionValueEvent(scrollY, "change", handleVisibility);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.clientY <= window.innerHeight / 3 && hidden) {
        setHidden(false); // Show header if mouse is in the top third
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hidden]);

  const toggleCart = () => {
    if (!cartOpen && hidden) {
      setHidden(false); // Ensure header is visible when opening the cart
    }
    setCartOpen(!cartOpen);
  };

  useEffect(() => {
    if (cartOpen) {
      const handleScroll = () => {
        if (cartRef.current) {
          const { top, bottom } = cartRef.current.getBoundingClientRect();
          if (window.scrollY < top || window.scrollY > bottom) {
            setCartOpen(false);
          }
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [cartOpen]);

  return (
    <header>
      <motion.div
        className="hidden md:block fixed top-0 left-0 z-60 w-screen px-8 py-4"
        animate={{ y: hidden ? "-60%" : "0" }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.3,
        }}
      >
        <div className="max-w-7xl overflow-hidden mx-auto  rounded-t-xl z-40 drop-shadow-xl">
          <div className=" w-full h-20 bg-ogBG-base rounded-t-xl flex items-center justify-between px-8 border border-x-neutral-200 border-t-neutral-200 border-b-0 border-opacity-50 mx">
            <motion.div
              className="opacity-0"
              animate={{ opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              <Link href="/" className="flex">
                <dotlottie-player
                  src="/lottie/iconText.lottie"
                  background="transparent"
                  speed="1"
                  style={{ width: "150px" }}
                  direction="1"
                  playMode="bounce"
                  loop
                  autoplay
                  hover
                  onClick={() => setCartOpen(false)}
                ></dotlottie-player>
              </Link>
            </motion.div>
            <div className="flex gap-8 items-center w-full justify-end">
              <nav className="w-full max-w-xl">
                <ul className="flex w-full justify-between items-center text-sm font-normal whitespace-nowrap">
                  <li>
                    <Link
                      className={linkStyle("/membership")}
                      href="/membership"
                      onClick={() => setCartOpen(false)}
                    >
                      Membership
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={linkStyle("/equipment")}
                      href="/equipment"
                      onClick={() => setCartOpen(false)}
                    >
                      My equipment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={linkStyle("/blog")}
                      href="/blog"
                      onClick={() => setCartOpen(false)}
                    >
                      Campfire Chronicles
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={linkStyle("/about")}
                      href="/about"
                      onClick={() => setCartOpen(false)}
                    >
                      About me
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={linkStyle("/about#contact")}
                      href="/about#contact"
                      onClick={() => setCartOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <IconShoppingCart
                size={24}
                className=" stroke-[1.5px] cursor-pointer"
                onClick={toggleCart}
              />
            </div>
          </div>
        </div>
        <div className="flex max-w-7xl mx-auto drop-shadow-xl">
          <div className="w-full">
            <div className=" h-3 w-full mx-auto flex bg-ogBG-sub relative z-30 rounded-bl-xl overflow-hidden ">
              <motion.div
                className="w-0 h-3 bg-ogPrimary absolute top-0 left-0 "
                animate={{ width: progress }}
                transition={{ duration: 1.8, type: "spring" }}
              ></motion.div>
            </div>
            <div className=" w-full mx-auto flex h-full">
              <motion.div
                className="w-0 h-0 opacity-0"
                animate={{ width: progress }}
                transition={{ duration: 1.8, type: "spring" }}
              ></motion.div>
              <motion.div
                className=" origin-right -translate-x-full -translate-y-[1px] z-50 bg-ogPrimary text-ogBG-base h-fit p-2 rounded-b-xl text-sm font-medium opacity-0"
                animate={{ opacity: 1 }}
                transition={{ duration: 1.8, type: "spring" }}
              >
                <p className=" cursor-default text-ogBG-base">{progress}</p>
              </motion.div>
            </div>
          </div>
          <div className="w-fit h-fit  mx-auto flex justify-end">
            <div className="w-fit h-full max-w-xs bg-ogBG-sub justify-self-end rounded-b-xl flex justify-between gap-4 items-center px-2 py-2  z-30 ">
              <p className=" whitespace-nowrap text-sm font-normal cursor-default text-ogLabel-muted pl-2">
                Goal: 10.000 kr.
              </p>
              <Link
                href="https://www.gofundme.com/f/outdoorginger"
                target="_blank"
              >
                <Button
                  variant="primary"
                  size="sm"
                  className="bg-ogPrimary hover:bg-ogPrimary-dark gap-1"
                >
                  Donate
                  <IconHeartHandshake size={20} className="stroke-[1.5px]" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {cartOpen && <ShoppingCart cartOpen={cartOpen} cartRef={cartRef} />}
      </AnimatePresence>
    </header>
  );
}

export default Header;
