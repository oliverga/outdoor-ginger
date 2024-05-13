import Image from "next/image";

export default function AboutBlock() {
	return (
		<article className="px-8">
			<div className="flex flex-col items-center">
				<div className="w-40">
					<Image
						src="/waterSitting.png"
						alt="Hero image"
						width={1000}
						height={1000}
						className="rounded-full object-cover w-full h-full drop-shadow-lg"
					/>
				</div>
				<h2 className="uppercase text-center font-display font-semibold text-ogLabel-base text-4xl md:text-5xl my-4">
					Outdoor <br /> ginger
				</h2>
			</div>
			<p>
				At just 19, August left Copenhagen on his bike, reaching the wild
				landscapes of France, eschewing traditional schooling for adventure, and
				teaching others in the process.
			</p>
		</article>
	);
}
