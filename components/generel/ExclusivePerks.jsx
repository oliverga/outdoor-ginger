import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  IconArticle,
  IconCampfire,
  IconDiscount2,
  IconMicrophoneFilled,
  IconNews,
  IconUserScreen,
} from "@tabler/icons-react";

export default function JoinTheClub() {
  return (
    <section className="px-6 md:px-0 py-16 md:py-20 md:my-32 z-50 bg-ogPrimary-lightest rounded-t-[3rem] rounded-b-[3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row items-center gap-8 ">
          <div className="text-left flex flex-col gap-4 items-left">
            <h2 className="">Why become a member?</h2>
          </div>
        </div>
        <div class="">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 content-around">
            <Perk
              icon={
                <IconArticle className="h-8 w-8 md:h-16 md:w-16 text-ogPrimary-lightest" />
              }
              title="In-depth Articles"
              description="Stay ahead with expertly crafted articles on the latest trends, tips, and techniques."
            />
            <Perk
              icon={
                <IconCampfire className="h-8 w-8 md:h-16 md:w-16 text-ogPrimary-lightest" />
              }
              title="Comprehensive Tutorials"
              description="Learn new skills and enhance your expertise with step-by-step tutorials."
            />
            <Perk
              icon={
                <IconMicrophoneFilled className="h-8 w-8 md:h-16 md:w-16 text-ogPrimary-lightest" />
              }
              title="Exclusive Interviews"
              description="Gain valuable perspectives from industry leaders and innovators."
            />
            <Perk
              icon={
                <IconUserScreen className="h-8 w-8 md:h-16 md:w-16 text-ogPrimary-lightest" />
              }
              title="Members-only Webinars"
              description="Participate in live discussions and Q&A sessions with experts."
            />
            <Perk
              icon={
                <IconNews className="h-8 w-8 md:h-16 md:w-16 text-ogPrimary-lightest" />
              }
              title="Early Access to New Content"
              description="Be the first to access our newest materials and resources."
            />
            <Perk
              icon={
                <IconDiscount2 className="h-8 w-8 md:h-16 md:w-16 text-ogPrimary-lightest" />
              }
              title="Special Discounts and Offers"
              description="Enjoy exclusive discounts on events, courses, and products."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Perk({ icon, title, description }) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center rounded-xl bg-ogPrimary  p-4 md:p-6 shadow-lg gap-4 md:gap-8">
      {icon}

      <div className="flex flex-col md:items-start justify-center ">
        <h3 className="font-bold text-xl md:text-2xl text-ogPrimary-lightest">
          {title}
        </h3>
        <p className="text-ogPrimary-lighter pt-2 ">{description}</p>
      </div>
    </div>
  );
}
