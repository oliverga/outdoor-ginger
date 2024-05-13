import Image from "next/image";
import Link from "next/link";
import { Children } from "react";

export default function Beyond({ h2, Children }) {
	return (
		<article className="my-6 px-8 bg-ogPrimary py-8 md:py-20 grid grid-cols-2 grid-rows-1 overflow-y-hidden overflow-x-hidden">
			<div className="max-w-5xl mx-auto col-start-1 row-start-1 col-span-2 row-span-2 z-20">
				<h2 className="mb-2 font-display font-semibold uppercase text-ogBG-base text-4xl md:text-5xl">
					{h2}
				</h2>
				{Children}
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
