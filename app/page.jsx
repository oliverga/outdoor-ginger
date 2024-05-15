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
				<div id="right">
					<div className="flex gap-2 -ml-12 bg-ogBG-base ">
						<Image
							src="/profile.webp"
							alt="August Vallant"
							width={500}
							height={500}
							className="rounded-full aspect-square w-8 h-8"
						/>
						<div>
							<p>August Vallant</p>
							<p>Adventure Influencer</p>
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
