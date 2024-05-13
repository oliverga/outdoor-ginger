"use client";

import Item from "./Cart/Item";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

export default function ShoppingCart({ cartOpen, cartRef }) {
	return (
		<div className="overflow-hidden fixed top-0 left-0 z-40 w-full px-2 md:px-0 mt-12 drop-shadow-xl max-w-[1280px] mx-auto md:left-1/2 md:transform md:-translate-x-1/2">
			<motion.div
				ref={cartRef}
				initial={{ y: "-100vh" }}
				animate={{ y: "0vh" }}
				exit={{ y: "-120vh" }}
				transition={{ duration: 0.5 }}
				className="md:mr-8 cart:mr-0"
			>
				<div className="bg-ogBG-base rounded-b-2xl overflow-hidden max-h-[550px] md:max-h-[650px] max-w-96 pt-16 md:pt-32 ml-auto flex flex-col justify-between">
					<div className="px-8 overflow-x-scroll scrollbar scrollbar-thumb-ogPrimary scrollbar-track-ogBG-base">
						<Item
							imgSrc="/knife.png"
							name="Knife - limited edition"
							price="99.95 kr"
						/>
						<Item
							imgSrc="/knife.png"
							name="hold up - limited edition"
							price="9900000.95 kr"
						/>
						<Item
							imgSrc="/knife.png"
							name="hold up - limited edition"
							price="9900000.95 kr"
						/>
						<Item
							imgSrc="/knife.png"
							name="hold up - limited edition"
							price="9900000.95 kr"
						/>
						<Item
							imgSrc="/knife.png"
							name="hold up - limited edition"
							price="9900000.95 kr"
						/>
					</div>
					<div className="bg-neutral-200">
						<div className="px-12 pt-4 pb-2 flex flex-col gap-2">
							<div className=" flex justify-between font-light">
								<p>Subtotal</p>
								<p>99.95 kr</p>
							</div>
							<hr className="bg-neutral-300 h-[3px]" />
							<div className="flex items-center gap-2 font-thin text-xs mb-2">
								<Checkbox />
								<p>
									Accept{" "}
									<Link
										target="_blank"
										href="https://www.google.com/search?client=firefox-b-d&q=terms+and+conditions"
										className="underline decoration-neutral-400"
									>
										Terms
									</Link>
									{" & "}
									<Link
										target="_blank"
										href="https://www.google.com/search?client=firefox-b-d&q=terms+and+conditions"
										className="underline decoration-neutral-400"
									>
										Conditions
									</Link>
								</p>
							</div>
							<Button variant="primary" size="sm">
								Checkout
							</Button>
							<hr className="bg-neutral-300 h-[8px] w-1/2 mx-auto rounded-full mt-3" />
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
