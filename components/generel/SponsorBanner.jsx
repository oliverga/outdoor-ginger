"use client";

import { client, urlFor } from "@/lib/sanity/client";
import Image from "next/image";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { set } from "date-fns";

const sponsorQuery =
	'*[_type == "sponsor"]{Sponsor_Name, Sponsor_Website, Sponsor_Logo}';

export default function SponsorBanner({ type = "rolling" }) {
	const [sponsors, setSponsors] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await client.fetch(sponsorQuery);
			setSponsors(data);
		};

		fetchData();
	}, []);

	const controls = useAnimation();
	const x = useMotionValue(0);
	const [isDragging, setIsDragging] = useState(false);

	const startAnimation = useCallback(() => {
		if (!isDragging) {
			const totalDistance = 100 * sponsors.length; // Increase this value to make the banner move longer
			const remainingDistance = Math.abs(x.get() - totalDistance);
			const speed = 30; // Adjust this value to change the speed
			const duration = remainingDistance / speed;

			controls.start({
				x: [x.get(), totalDistance],
				transition: {
					repeat: Infinity,
					repeatType: "reverse",
					duration: duration,
					ease: "linear",
				},
			});
		}
	}, [controls, sponsors, isDragging, x]);

	useEffect(() => {
		startAnimation();
	}, [startAnimation]);

	if (type == "rolling") {
		return (
			<article className="bg-ogPrimary my-4 py-2 overflow-hidden">
				<motion.div
					className="flex gap-8 justify-center items-center"
					animate={controls}
					style={{ x }} // Apply the motion value to the x property
					drag="x"
					onDragStart={() => setIsDragging(true)}
					onDragEnd={() => {
						setTimeout(() => {
							setIsDragging(false);
						}, 1000);
					}}
					dragElastic={1}
					dragTransition={{ bounceStiffness: 10000, bounceDamping: 200 }}
				>
					{Array(4)
						.fill(sponsors)
						.flat()
						.map((sponsor, index) => {
							return (
								<Link
									href={sponsor.Sponsor_Website}
									target="_blank"
									key={index}
									className="aspect-square h-20"
								>
									<Image
										src={urlFor(sponsor.Sponsor_Logo).url()}
										alt={sponsor.Sponsor_Name}
										width={400}
										height={400}
										className="object-contain w-full h-full"
									/>
								</Link>
							);
						})}
				</motion.div>
			</article>
		);
	} else if (type == "static") {
		return (
			<article className="my-6 px-8 bg-ogPrimary py-8 md:py-20 grid grid-cols-2 grid-rows-1 overflow-y-hidden overflow-x-hidden">
				<div className="max-w-5xl mx-auto col-start-1 row-start-1 col-span-2 row-span-2 z-20">
					<h2 className="mb-2 font-display font-semibold uppercase text-ogBG-base text-4xl md:text-5xl">
						Partners
					</h2>
					<div className="flex flex-wrap gap-x-2 md:gap-12 justify-around">
						{sponsors.map((sponsor, index) => {
							return (
								<Link
									href={sponsor.Sponsor_Website}
									target="_blank"
									key={index}
									className="aspect-video w-28 md:w-72"
								>
									<Image
										src={urlFor(sponsor.Sponsor_Logo).url()}
										alt={sponsor.Sponsor_Name}
										width={400}
										height={400}
										className="object-contain w-full h-full"
									/>
								</Link>
							);
						})}
					</div>
				</div>
				<div className="row-start-1 col-start-1 place-self-start opacity-25 rotate-180 aspect-square w-36 md:w-[1000px] -mt-20 -ml-20 md:-mt-[480px] md:-ml-[400px]">
					<Image
						src="/icons/flameWhite.svg"
						alt="background flame icon"
						width={900}
						height={900}
						className="object-contain w-full h-full"
					/>
				</div>
				<div className="row-start-1 col-start-2 opacity-25 place-self-end aspect-square w-36 md:w-[1000px] -mb-20 -mr-20 md:-mb-[480px] md:-mr-[400px]">
					<Image
						src="/icons/flameWhite.svg"
						alt="background flame icon"
						width={900}
						height={900}
						className="object-contain w-full h-full"
					/>
				</div>
			</article>
		);
	}
}
