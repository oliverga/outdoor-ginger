import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function JoinTheClub() {
	return (
		<article className="px-8 my-12 max-w-5xl mx-auto md:grid md:grid-cols-2 md:grid-rows-2">
			<h2 className="text-4xl md:text-5xl font-display font-semibold uppercase text-center md:text-left self-end md:mb-16">
				Join the club
			</h2>
			<div className="flex md:flex-wrap justify-around md:justify-around md:px-12 gap-6 my-6 row-span-2">
				<div className="flex flex-col gap-1 items-center">
					<div className="aspect-square w-20 md:w-32 h-20 md:h-32 bg-ogPrimary p-6 rounded-full">
						<Image
							src="/icons/health.svg"
							alt="Join the club"
							width={500}
							height={500}
							className="w-full h-full object-center"
						/>
					</div>
					<h3 className="font-display capitalize text-xl text-ogPrimary-darker">
						health
					</h3>
				</div>
				<div className="flex flex-col gap-1 items-center">
					<div className="aspect-square w-20 md:w-32 h-20 md:h-32 bg-ogPrimary p-6 rounded-full">
						<Image
							src="/icons/deStress.svg"
							alt="Join the club"
							width={500}
							height={500}
							className="w-full h-full object-center"
						/>
					</div>
					<h3 className="font-display capitalize text-xl text-ogPrimary-darker">
						De-Stress
					</h3>
				</div>
				<div className="flex flex-col gap-1 items-center">
					<div className="aspect-square w-20 md:w-32 h-20 md:h-32 bg-ogPrimary p-6 rounded-full">
						<Image
							src="/icons/simplicity.svg"
							alt="Join the club"
							width={500}
							height={500}
							className="w-full h-full object-center"
						/>
					</div>
					<h3 className="font-display capitalize text-xl text-ogPrimary-darker">
						Simplicity
					</h3>
				</div>
			</div>
			<div className="md:-mt-8">
				<p>
					Rediscover your vitality, embrace your essence, and find tranquility
					with our exclusive membership. Dive into a world of perks, tailored
					goods, and special offers designed for the discerning adventurer.
				</p>
				<Link href="/membership">
					<Button variant="primary" size="sm" className="mt-4 capitalize">
						Become A Member
					</Button>
				</Link>
			</div>
		</article>
	);
}
