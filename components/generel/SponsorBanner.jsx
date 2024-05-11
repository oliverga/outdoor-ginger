"use client";

import { client, urlFor } from "@/lib/sanity/client";
import Image from "next/image";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { set } from "date-fns";

const sponsorQuery =
	'*[_type == "sponsor"]{Sponsor_Name, Sponsor_Website, Sponsor_Logo}';

export default function SponsorBanner() {
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
						console.log(sponsor);
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
}
