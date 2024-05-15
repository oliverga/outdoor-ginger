import NewsletterBanner from "@/components/generel/NewsletterBanner";
import SupportBanner from "@/components/generel/SupportBanner";
import LatestYT from "@/components/generel/LatestYT";
import Hero from "@/components/generel/Hero";
import SponsorBanner from "@/components/generel/SponsorBanner";
import AboutBlock from "@/components/generel/AboutBlock";
import JoinTheClub from "@/components/generel/JoinTheClub";
import SocialFollowers from "@/components/generel/SocialFollowers";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AnimatedCount from "@/components/generel/AnimatedCount";

export default function Home() {
	return (
		<main>
			<Hero title="Outdoor Ginger" imageSrc="/forsidehero.webp" bgPos="bottom">
				<div id="left" className="mt-4 -mb-6">
					<div className="hidden md:block">
						<p>
							August Vallant is an outdoor influencer who takes it to the next
							level.
						</p>
						<p>Join him on his next adventure!</p>
					</div>
					<Button
						href="/membership"
						size="md"
						variant="primary"
						className="capitalize"
					>
						Become a member
					</Button>
				</div>
				<div
					id="right"
					className="absolute left-44 top-32 md:left-[1050px] md:top-[350px]"
				>
					<div className="flex gap-2 items-center mb-16 md:mb-40 bg-[#F5F5F5]/75 px-1 py-1 rounded-full w-max">
						<Image
							src="/profile.webp"
							alt="August Vallant"
							width={500}
							height={500}
							className="rounded-full aspect-square w-8 h-8 md:w-11 md:h-11"
						/>
						<div className="pr-2 md:pr-4 uppercase">
							<p className="text-[0.7rem] md:text-[1rem] font-medium md:font-semibold text-ogPrimary">
								August Vallant
							</p>
							<p className="text-[0.6rem] md:text-[0.9rem] font-light text-ogPrimary">
								Adventure Influencer
							</p>
						</div>
					</div>
					<div className="flex gap-2 items-center ml-24 md:ml-64 bg-[#F5F5F5]/75 px-1 py-1 rounded-full w-max">
						<div className="bg-ogPrimary rounded-full p-[5px] md:p-[6px]">
							<Image
								src="/icons/instagramWhite.svg"
								alt="August Vallant"
								width={500}
								height={500}
								className="aspect-square w-5 h-5 md:w-7 md:h-7"
							/>
						</div>
						<div className="pr-2 uppercase">
							<AnimatedCount
								finalCount={333000}
								duration={3}
								className="text-[1rem] md:text-[1.4rem]"
							/>
							<p className="-mt-1 md:-mt-2 text-[0.45rem] md:text-[0.6rem] font-light text-ogPrimary">
								Followers
							</p>
						</div>
					</div>
				</div>
			</Hero>
			<div className="space-y-32">
				<div>
					<AboutBlock />
				</div>
				<div>
					<LatestYT />
				</div>
				<div>
					<JoinTheClub />
				</div>
				<div>
					<SocialFollowers />
					<SponsorBanner />
					<SupportBanner type="original" />
					<NewsletterBanner />
				</div>
			</div>
		</main>
	);
}
