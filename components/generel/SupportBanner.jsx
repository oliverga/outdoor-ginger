import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

function SupportBanner({ type = "banner" }) {
	if (type == "banner") {
		return (
			<article className="h-[50vh] bg-ogPrimary-lightest text-ogPrimary flex flex-col items-center justify-evenly text-center px-4 py-6">
				<h1 className="font-display font-semibold uppercase text-4xl md:text-5xl text-center">
					Support August
				</h1>
				<div className="flex flex-col md:flex-row items-center gap-8">
					<div className=" space-y-8 md:text-left">
						<p className="text-lg max-w-md text-ogPrimary-light">
							I&apos;m dedicated to inspiring others to get out and explore
							nature and your support makes it happen.
						</p>
						<p className="text-lg text-ogPrimary-light">
							All donations are appreciated 🫶
						</p>
					</div>
					<div className="flex md:flex-col gap-4">
						<Link target="blank" href="https://buymeacoffee.com/outdoorginger">
							<Button
								size="lg"
								className="bg-ogPrimary text-ogPrimary-lightest hover:bg-ogPrimary-dark p-10 w-full rounded-2xl"
							>
								<Image
									src="/buymeacoffee.svg"
									width={64}
									height={64}
									alt="Buy Me a Coffee"
									className=" w-52 pointer-events-none"
								/>
							</Button>
						</Link>
						<Link
							target="blank"
							href="https://www.gofundme.com/f/outdoorginger"
						>
							<Button
								size="lg"
								className="bg-ogPrimary text-ogPrimary-lightest hover:bg-ogPrimary-dark p-10 w-full rounded-2xl"
							>
								<Image
									src="/gofundme.svg"
									width={64}
									height={64}
									alt="GoFundMe"
									className=" w-44 pointer-events-none"
								/>
							</Button>
						</Link>
					</div>
				</div>
			</article>
		);
	} else if (type == "original") {
		return (
			<article className="px-8 my-12 max-w-5xl flex flex-col items-center mx-auto md:grid md:grid-cols-2 md:grid-rows-2">
				<div className="aspect-square col-start-2 row-span-2 w-40 md:w-80 h-40 md:h-80 md:place-self-center">
					<Image
						src="/fire.png"
						alt="August sitting by a campfire"
						width={500}
						height={500}
						className="w-full h-full object-cover rounded-full"
					/>
				</div>
				<h2 className="col-start-1 row-start-1 my-4 text-4xl md:text-5xl font-display font-semibold uppercase text-center md:text-left md:self-start md:mt-8">
					Support August
				</h2>
				<div className="md:-mt-20">
					<p className="mb-3">
						I&apos;m dedicated to inspiring others to get out and explore nature
						and your support makes it happen.
					</p>
					<p>All donations are appreciated 🫶</p>
					<div className="mt-4 flex md:flex-col gap-4">
						<Link target="blank" href="https://buymeacoffee.com/outdoorginger">
							<Button size="xl" variant="primary">
								<Image
									src="/buymeacoffee.svg"
									width={100}
									height={100}
									alt="Buy Me a Coffee"
									className="w-80 max-h-12 pointer-events-none"
								/>
							</Button>
						</Link>
						<Link
							target="blank"
							href="https://www.gofundme.com/f/outdoorginger"
						>
							<Button size="xl" variant="primary">
								<Image
									src="/gofundme.svg"
									width={100}
									height={100}
									alt="GoFundMe"
									className="w-56 max-h-12 pointer-events-none"
								/>
							</Button>
						</Link>
					</div>
				</div>
			</article>
		);
	}
}

export default SupportBanner;
