import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { IconArticle, IconCampfire, IconDiscount2, IconMicrophoneFilled, IconNews, IconUserScreen } from "@tabler/icons-react";

export default function JoinTheClub() {
  return (
    <section className="px-6 md:px-0 py-16 md:py-20 md:my-32 z-50 bg-ogPrimary-lightest rounded-t-[3rem] rounded-b-[3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8 ">
          <div className="text-left flex flex-col gap-4 items-left">
            <h2 className="text-4xl md:text-5xl font-display font-semibold uppercase text-left text-ogPrimary">
              Why Join Outdoor Ginger&apos;s <br /> Exclusive Membership?
            </h2>
          </div>
        </div>
        <div class="">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 content-around">
            <div className="flex flex-row items-center rounded-lg bg-ogPrimary p-6 shadow-lg">
              <IconArticle className="flex h-32 md:h-36 w-32 md:w-36 text-ogPrimary-lightest mr-4 md:mr-8" />
              <div className="flex flex-col md:items-center justify-center">
                <h3 className="font-bold text-xl md:text-2xl text-ogPrimary-lightest">In-depth Articles:</h3>
                <p className="md:text-center text-sm md:text-base text-balance text-ogPrimary-lightest">Stay ahead with expertly crafted articles on the latest trends, tips, and techniques.</p>
              </div>
            </div>
            <div className="flex flex-row items-center rounded-lg bg-ogPrimary p-6 shadow-lg">
              <IconCampfire className="h-32 md:h-36 w-32 md:w-36 text-ogPrimary-lightest  mr-4 md:mr-8" />
              <div className="flex flex-col md:items-center justify-center">
                <h3 className="font-bold text-xl md:text-2xl text-ogPrimary-lightest">Comprehensive Tutorials:</h3> <p className=" text-balance md:text-center text-ogPrimary-lightest">Learn new skills and enhance your expertise with step-by-step tutorials.</p>
              </div>
            </div>
            <div className="flex flex-row items-center rounded-lg bg-ogPrimary p-6 shadow-lg">
              <IconMicrophoneFilled className=" h-32 md:h-36 w-32 md:w-36 text-ogPrimary-lightest  mr-4 md:mr-8" />
              <div className="flex flex-col md:items-center justify-center">
                <h3 className="font-bold text-xl md:text-2xl text-ogPrimary-lightest">Exclusive Interviews:</h3> <p className="md:text-center text-balance text-ogPrimary-lightest">Gain valuable perspectives from industry leaders and innovators.</p>
              </div>
            </div>
            <div className="flex flex-row items-center  rounded-lg bg-ogPrimary p-6 shadow-lg">
              <IconUserScreen className="h-32 md:h-36 w-32 md:w-36 text-ogPrimary-lightest  mr-4 md:mr-8" />
              <div className="flex flex-col md:items-center justify-center ">
                <h3 className="font-bold text-xl md:text-2xl text-ogPrimary-lightest">Members-only Webinars:</h3>
                <p className=" md:text-center text text-ogPrimary-lightest">Participate in live discussions and Q&A sessions with experts.</p>
              </div>
            </div>
            <div className="flex flex-row items-center  rounded-lg bg-ogPrimary p-6 shadow-lg">
              <IconNews className="h-32 md:h-36 w-32 md:w-36 text-ogPrimary-lightest  mr-4 md:mr-8" />
              <div className="flex flex-col md:items-center justify-center">
                <h3 className="font-bold text-xl md:text-2xl text-ogPrimary-lightest">Early Access to New Content:</h3>
                <p className=" md:text-center text-balance text-ogPrimary-lightest">Be the first to access our newest materials and resources.</p>
              </div>
            </div>
            <div className="flex flex-row items-center  rounded-lg bg-ogPrimary p-6 shadow-lg">
              <IconDiscount2 className="h-32 md:h-36 w-32 md:w-36 text-ogPrimary-lightest  mr-4 md:mr-8" />
              <div className="flex flex-col md:items-center justify-center">
                <h3 className="font-bold text-xl md:text-2xl text-ogPrimary-lightest">Special Discounts and Offers:</h3> <p className=" md:text-center text-balance text-ogPrimary-lightest"> Enjoy exclusive discounts on events, courses, and products.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
