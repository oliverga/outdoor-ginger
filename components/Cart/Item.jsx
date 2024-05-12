"use client";

import { IconPlus } from "@tabler/icons-react";

export default function Item() {
	return (
		<div>
			<div>
				<p>Knife - limited edition</p>
				<p>99.95 kr</p>
			</div>
			<div>
				<IconPlus size={24} strokeWidth={2} color={"black"} />
			</div>
		</div>
	);
}
