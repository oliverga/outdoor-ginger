"use client";

import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";
import "@dotlottie/player-component";
import Image from "next/image";
import { useRef, useEffect } from "react";

function MobileHeader() {
	const playerRef = useRef();

	const handleClick = () => {
		const player = playerRef.current;
		player.play();
	};

	useEffect(() => {
		const player = playerRef.current;
		player.addEventListener("complete", () => {
			player.stop();
		});

		return () => {
			player.removeEventListener("complete", () => {});
		};
	}, []);
	return (
		<div className="md:hidden fixed top-0 left-0 w-screen px-2 py-4 mx-auto z-40 ">
			<div className=" w-full h-16 bg-ogBG-base rounded-xl flex items-center justify-between px-2 border border-x-neutral-200 border-t-neutral-200 border-b-0 border-opacity-50">
				<Link href="/" className="flex ml-1">
					<Image src="./icons/logo.svg" width={120} height={120} alt="logo" />
				</Link>
				<ul className="flex w-full justify-end items-center text-sm font-normal whitespace-nowrap">
					<li>
						<IconShoppingCart size={35} className=" stroke-[1.5px]" />
					</li>
					<li>
						<dotlottie-player
							ref={playerRef}
							src="./lottie/burgerMenu.lottie"
							background="transparent"
							speed="3"
							style={{ width: "48px" }}
							playMode="normal"
							onClick={handleClick}
						></dotlottie-player>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default MobileHeader;
