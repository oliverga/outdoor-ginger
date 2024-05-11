"use client";

import { client, urlFor } from "@/lib/sanity/client";
import Image from "next/image";
import { delay, motion, useAnimation } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

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

	const startAnimation = useCallback(() => {
		controls.start({
			x: [0, 110 * sponsors.length],
			transition: {
				repeat: Infinity,
				repeatType: "reverse",
				duration: 45,
				ease: "linear",
			},
		});
	}, [controls, sponsors]);

	useEffect(() => {
		startAnimation();
	}, [startAnimation]);

	return (
		<article className="bg-ogPrimary my-4 py-2 overflow-hidden">
			<motion.div
				className="flex gap-8 justify-center items-center"
				animate={controls}
				drag="x"
				dragConstraints={{ left: 1000, right: 1000 }}
				onDragEnd={startAnimation}
				dragElastic={1}
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
