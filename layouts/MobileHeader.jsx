"use client";

import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

function MobileHeader() {
	const pathname = usePathname();

	const playerRef = useRef();

	const handleClick = () => {
		const player = playerRef.current;
		player.play();
	};

	useEffect(() => {
		import("@dotlottie/player-component/dist/dotlottie-player.js").then(() => {
			const player = playerRef.current;
			player.addEventListener("complete", () => {
				player.stop();
			});

			return () => {
				player.removeEventListener("complete", () => {});
			};
		});
	}, []);
	return (
		<header>
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
			<div className="bg-ogPrimary fixed w-screen h-screen z-50 overflow-visible grid grid-rows-2">
				<nav className="flex flex-col row-start-1">
					<div className="place-self-end">
						<dotlottie-player
							ref={playerRef}
							src="./lottie/closeMatches.lottie"
							background="transparent"
							speed="2"
							style={{ width: "80px", height: "80px" }}
							playMode="normal"
							onClick={handleClick}
						/>
					</div>
					<ul className="flex flex-col justify-between gap-4 items-center text-3xl font-medium text-background capitalize">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/membership">Membership</Link>
						</li>
						<li>
							<Link href="/equipment">My equipment</Link>
						</li>
						<li>
							<Link href="/blog">Campfire Chronicles</Link>
						</li>
						<li>
							<Link href="/about">About me</Link>
						</li>
						<li>
							<Link href="/about#contact">Contact</Link>
						</li>
					</ul>
				</nav>
				<div className="absolute top-[55vh] flex items-center justify-center">
					<img
						src="./icons/flameWhite.svg"
						alt="flame icon"
						className="h-[500px] w-full object-cover"
					/>
				</div>
			</div>
		</header>
	);
}

export default MobileHeader;
