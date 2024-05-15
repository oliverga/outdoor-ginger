"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const InstaEmbed = () => {
	return (
		<div
			className="absolute top-[-350px] -left-1 z-50 grid grid-cols-2 grid-rows-2 place-items-center"
			style={{ transform: "scale(0.9)" }}
		>
			<Image
				src="/onePhone.png"
				alt="Phone"
				width={300}
				height={600}
				className="col-start-1 row-start-1 w-80 z-10 pointer-events-none"
			/>
			<div
				className="col-start-1 row-start-1 rounded-[40px] w-56 focus:outline-none"
				style={{
					transform: "translateY(-8px)",
				}}
			>
				<div className="bg-[#000] h-5 rounded-[60px]" />
				<iframe
					width="478"
					height="849"
					src="https://www.youtube.com/embed/m_AaTGAeIeA"
					title="Imagination #imagination #fantasy #wilderness #thinkbig #colorgrading"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
					className="w-full h-full aspect-[9/16]"
				></iframe>
				<div className="bg-[#000] h-7 -mt-1 rounded-3xl" />
			</div>
		</div>
	);
};

export default InstaEmbed;
