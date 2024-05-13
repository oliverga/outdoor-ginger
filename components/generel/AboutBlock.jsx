import Image from "next/image";

export default function AboutBlock() {
	return (
		<article>
			<div className="flex flex-col self-center">
				<div className="w-40">
					<Image
						src="/waterSitting.png"
						alt="Hero image"
						width={1000}
						height={1000}
						className="rounded-full object-cover w-full h-full"
					/>
				</div>
				<h2 className="uppercase">Outdoorginger</h2>
			</div>
		</article>
	);
}
