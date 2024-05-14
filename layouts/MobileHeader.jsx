"use client";

import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShoppingCart from "@/components/ShoppingCart";

function MobileHeader() {
  const playerRef1 = useRef();
  const playerRef2 = useRef();
  const [isDivVisible, setIsDivVisible] = useState(false);

  const handleClick1 = () => {
    const player = playerRef1.current;
    setCartOpen(false);
    if (player) {
      player.play();
      const onComplete = () => {
        setIsDivVisible(true);
        player.removeEventListener("complete", onComplete);
      };
      player.addEventListener("complete", onComplete);
    }
  };

  const handleClick2 = () => {
    const player = playerRef2.current;
    if (player) {
      player.play();
      const onComplete = () => {
        setIsDivVisible(false);
        player.removeEventListener("complete", onComplete);
      };
      player.addEventListener("complete", onComplete);
    }
  };

  useEffect(() => {
    import("@dotlottie/player-component/dist/dotlottie-player.js").then(() => {
      const player = playerRef1.current;
      if (player) {
        player.addEventListener("complete", () => {
          player.stop();
        });

        return () => {
          if (player) {
            player.removeEventListener("complete", () => {});
          }
        };
      }
    });
  }, []);

  useEffect(() => {
    import("@dotlottie/player-component/dist/dotlottie-player.js").then(() => {
      const player = playerRef2.current;
      if (player) {
        player.addEventListener("complete", () => {
          player.stop();
        });

        return () => {
          if (player) {
            player.removeEventListener("complete", () => {});
          }
        };
      }
    });
  }, []);

  useEffect(() => {
    if (isDivVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDivVisible]);

  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const cartRef = useRef(null);

  useEffect(() => {
    if (!cartOpen) return; // Only run if the cart is open

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
  }, [cartOpen]);

  return (
    <header className="md:hidden z-60">
      <div className="fixed top-0 left-0 w-screen px-2 py-4 mx-auto z-60">
        <div className="w-full h-16 bg-ogBG-base rounded-xl flex items-center justify-between px-2 border border-x-neutral-200 border-t-neutral-200 border-b-0 border-opacity-50 shadow-lg">
          <Link
            href="/"
            className="flex ml-1"
            onClick={() => setCartOpen(false)}
          >
            <Image src="/icons/logo.svg" width={120} height={120} alt="logo" />
          </Link>
          <ul className="flex w-full justify-end items-center text-sm font-normal whitespace-nowrap">
            <li>
              <IconShoppingCart
                size={35}
                className=" stroke-[1.5px]"
                onClick={toggleCart}
              />
            </li>
            <li>
              <dotlottie-player
                key={isDivVisible}
                ref={playerRef1}
                src="/lottie/burgerMenu.lottie"
                background="transparent"
                speed="3"
                style={{ width: "48px" }}
                playMode="normal"
                onClick={handleClick1}
              ></dotlottie-player>
            </li>
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {isDivVisible && (
          <motion.div
            className="bg-ogPrimary fixed w-screen h-screen overflow-y-hidden z-60 grid grid-rows-2"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-120%" }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <nav className="flex flex-col row-start-1">
              <div className="place-self-end">
                <dotlottie-player
                  key={isDivVisible}
                  ref={playerRef2}
                  src="/lottie/closeMatches.lottie"
                  background="transparent"
                  speed="2"
                  style={{ width: "65px", height: "65px" }}
                  playMode="normal"
                  onClick={handleClick2}
                />
              </div>
              <ul className="flex flex-col vh-sm:mx-8 vh-sm:flex-row justify-between gap-4 items-center flex-wrap text-3xl font-display font-bold text-background capitalize">
                <li>
                  <Link href="/" onClick={() => setIsDivVisible(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/membership"
                    onClick={() => setIsDivVisible(false)}
                  >
                    Membership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/equipment"
                    onClick={() => setIsDivVisible(false)}
                  >
                    My equipment
                  </Link>
                </li>
                <li>
                  <Link href="/blog" onClick={() => setIsDivVisible(false)}>
                    Campfire Chronicles
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={() => setIsDivVisible(false)}>
                    About me
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#contact"
                    onClick={() => setIsDivVisible(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="absolute top-[60vh] flex items-center justify-center vh-sm:hidden">
              <Image
                width={120}
                height={120}
                src="/icons/flameWhite.svg"
                alt="flame icon"
                className="h-[120vw] w-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {cartOpen && <ShoppingCart cartRef={cartRef} />}
      </AnimatePresence>
    </header>
  );
}

export default MobileHeader;
