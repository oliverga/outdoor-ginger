"use client";

import Image from "next/image";

export default function SocialFollowers() {
	return (
		<article className="flex flex-col items-center -mt-12 md:-mt-24">
			<Image
				src="/threePhones.png"
				alt="Screenshots of social media"
				width={900}
				height={900}
				className="object-contain w-96 md:w-[700px] -mb-32 md:-mb-44 z-10 drop-shadow-lg"
			/>
			<div className="flex justify-center px-8 bg-ogPrimary-lightest w-full h-full pt-24 pb-12">
				<div className="flex gap-4 justify-around w-full max-w-5xl">
					<div className="flex items-center gap-1 md:gap-4">
						<div className="aspect-square h-8 md:h-16">
							<Image
								src="/icons/youtube.svg"
								alt="YouTube logo"
								width={250}
								height={250}
								className="object-contain h-full w-full"
							/>
						</div>
						<p className="text-ogPrimary md:text-3xl md:font-semibold">11K</p>
					</div>
					<div className="flex items-center gap-1 md:gap-4">
						<div className="aspect-square h-8 md:h-16">
							<Image
								src="/icons/instagram.svg"
								alt="Instagram logo"
								width={250}
								height={250}
								className="object-contain h-full w-full"
							/>
						</div>
						<p className="text-ogPrimary md:text-3xl md:font-semibold">303K</p>
					</div>
					<div className="flex items-center gap-1 md:gap-4">
						<div className="aspect-square h-8 md:h-16">
							<Image
								src="/icons/tiktok.svg"
								alt="TikTok logo"
								width={250}
								height={250}
								className="object-contain h-full w-full"
							/>
						</div>
						<p className="text-ogPrimary md:text-3xl md:font-semibold">15K</p>
					</div>
				</div>
			</div>
		</article>
	);
}
