import { Button } from "@/components/ui/button";
import { IconHeartHandshake } from "@tabler/icons-react";
import Image from "next/image";

export default function Donation() {
	return (
		<div className="fixed z-60 bottom-0 w-full flex justify-between items-end drop-shadow-up">
			<div className="w-full grid grid-cols-1 grid-rows-1 items-end">
				<div className="grid grid-cols-1 grid-rows-1 col-start-1 row-start-1col-start-1 row-start-1 relative z-10">
					<div className="bg-ogPrimary h-3 w-28 rounded-r-full col-start-1 row-start-1 relative z-10" />
					<div className="bg-ogBG-sub h-3 w-full col-start-1 row-start-1" />
				</div>
				<Button
					size="md"
					className="rounded-b-none bg-ogBG-sub text-ogLabel-muted col-start-1 row-start-1 w-max mb-1 ml-12 pointer-events-none"
				>
					88% Funded
				</Button>
			</div>
			<Button
				variant="primary"
				size="lg"
				className="gap-1 rounded-r-none rounded-bl-none"
			>
				Donate
				<IconHeartHandshake size={20} className="stroke-[1.5px]" />
			</Button>
		</div>
	);
}
