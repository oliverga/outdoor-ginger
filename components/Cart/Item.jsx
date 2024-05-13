"use client";

import { IconPlus, IconMinus, IconTrash } from "@tabler/icons-react";
import Image from "next/image";

export default function Item({ imgSrc, name, price }) {
	return (
		<div className="mb-2">
			<div className="grid grid-cols-cartLayout grid-rows-2 gap-x-4">
				<div className="aspect-square ">
					<Image
						src={imgSrc}
						width={300}
						height={300}
						alt="Knife"
						className="object-cover w-full h-full rounded-md"
					/>
				</div>
				<div className="flex flex-col justify-between">
					{name.length > 21 ? name.substring(0, 21) + "..." : name}
					<p className="text-ogLabel-muted font-light">{price}</p>
				</div>
				<div className="row-start-2 col-start-2 flex gap-4 items-center">
					<button className="border-2 p-1 h-min rounded-md hover:bg-ogLabel-faint transition duration-200">
						<IconPlus size={24} strokeWidth={1.5} color={"black"} />
					</button>
					<p>1</p>
					<button className="border-2 p-1 h-min rounded-md hover:bg-ogLabel-faint transition duration-200">
						<IconMinus size={24} strokeWidth={1.5} color={"black"} />
					</button>
				</div>
				<button className="row-start-2 col-start-3 place-self-center bg-ogDestructive p-1 rounded-md shadow-md">
					<IconTrash
						size={24}
						strokeWidth={1.5}
						color={"#F7BFBF"}
						className="hover:scale-110 transition duration-100"
					/>
				</button>
			</div>
			<hr className="h-[3px]" />
		</div>
	);
}
