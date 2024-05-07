import { Button } from "@/components/ui/button";
import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-screen px-8 py-4">
      <div className="w-full h-20 bg-ogBG-base rounded-xl flex items-center justify-between px-8 shadow-lg border border-neutral-200 mx-auto max-w-7xl">
        <Link href="/">
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
              <li>
                <Link href="https://www.gofundme.com">
                  <Button
                    size="sm"
                    className=" bg-neutral-200 text-ogLabel-base hover:bg-neutral-300 hover:text-ogLabel-base"
                  >
                    Donate now
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
          <IconShoppingCart size={28} className=" stroke-[1.5px]" />
        </div>
      </div>
    </header>
  );
}

export default Header;
