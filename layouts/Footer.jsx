import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" bg-footer-image bg-center  bg-cover h-screen md:h-[50vh] text-ogBG-base flex flex-col items-center justify-evenly text-center">
      <nav>
        <ul className="text-xl flex flex-col md:flex-row gap-10 font-medium">
          <li>
            <Link href="/membership">Membership</Link>
          </li>
          <li>
            <Link href="/equipment">My equipment</Link>
          </li>
          <li>
            <Link href="/blog">Campfire Chronicles</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <ul className="flex gap-10">
        <li>
          <Link href="https://www.instagram.com/outdoorgingerchannel/">
            <IconBrandInstagram size={32} />
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/@OutdoorGinger">
            <IconBrandYoutube size={32} />
          </Link>
        </li>
        <li>
          <Link href="https://www.tiktok.com/@outdoorginger">
            <IconBrandTiktok size={32} />
          </Link>
        </li>
      </ul>
      <div className="flex flex-col gap-4">
        <Link
          href="mailto:contact@outdoorginger.com"
          className="text-xl font-medium"
        >
          contact@outdoorginger.com
        </Link>
        <div className="text-sm flex gap-4 justify-center">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>
        </div>
        <p className="text-sm">© 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
