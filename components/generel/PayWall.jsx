"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import useAuthStore from "@/lib/store/authStore";
import { PortableText } from "next-sanity";

export default function Paywall({ post }) {
	const { user } = useAuthStore();

	const freeContent = post[0].content.slice(0, 3);

	if (!user) {
		return (
			<>
				<PortableText value={freeContent} />
				<div className="-mt-28 relative z-10">
					<div className="h-28 bg-gradient-to-b from-transparent to-ogBG-base" />
					<div className="bg-ogBG-base rounded-lg px-8 py-4 drop-shadow-xl">
						<p className="text-xl capitalize text-ogLabel-title">
							become a member!
						</p>
						<p>
							You&apos;ve reached the end of the free preview. To continue
							reading, please subscribe.
						</p>
						<div className="flex justify-between items-center">
							<p>
								<span className="text-2xl text-ogLabel-title font-semibold">
									9$
								</span>{" "}
								/ Month
							</p>
							<Link href="/login">
								<Button variant="primary">Subscribe</Button>
							</Link>
						</div>
					</div>
				</div>
			</>
		);
	} else {
		return <PortableText value={post[0].content} />;
	}
}
