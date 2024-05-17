"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import useAuthStore from "@/lib/store/authStore";
import { PortableText } from "next-sanity";

export default function Paywall({ post }) {
  const { user } = useAuthStore();

  let normalCount = 0;
  const freeContent = [];

  for (let i = 0; i < post[0].content.length; i++) {
    freeContent.push(post[0].content[i]);
    if (post[0].content[i].style === "normal") {
      normalCount++;
    }
    if (normalCount === 2) {
      break;
    }
  }

  if (!user) {
    return (
      <>
        <PortableText value={freeContent} />
        <div className="-mt-40 relative z-10 ">
          <div className="h-28 bg-gradient-to-b from-transparent to-ogBG-base" />
          <div className="bg-ogBG-base rounded-lg px-8 py-4 drop-shadow-xl border">
            <p className="text-2xl  text-ogLabel-title font-medium">
              Become a Member!
            </p>
            <p>
              You&apos;ve reached the end of the free preview. To continue
              reading, join the member club.
            </p>
            <div className="flex justify-between items-center">
              <p>
                <span className="text-2xl text-ogLabel-title font-semibold">
                  10 EUR
                </span>{" "}
                / Month
              </p>
              <Link href="/signup">
                <Button variant="primary">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <PortableText value={post[0].content} />;
  }
}
