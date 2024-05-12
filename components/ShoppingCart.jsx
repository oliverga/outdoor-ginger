"use client";

import Item from "./Cart/Item";
import { motion, AnimatePresence } from "framer-motion";

export default function ShoppingCart({ cartOpen }) {
	return (
		<div className="overflow-hidden fixed top-0 left-0 z-40 w-full px-2 mt-12">
			<motion.div
				initial={{ y: "-100vh" }}
				animate={{ y: cartOpen ? "0vh" : "-100vh" }}
				transition={{ duration: 0.5 }}
				className=""
			>
				<div className="bg-ogPrimary h-80 pt-16 px-8">
					<Item />
				</div>
			</motion.div>
		</div>
	);
}
