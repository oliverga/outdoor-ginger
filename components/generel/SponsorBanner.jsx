import { client, urlFor } from "@/lib/sanity/client";

const sponsorQuery = '*[_type == "sponsor"]{Sponsor_Name, Sponsor_Logo}';

const sponsors = await client.fetch(sponsorQuery, {
	next: {
		revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
	},
});

console.log(sponsors);

export default function SponsorBanner() {
	return (
		<article>
			<div className="bg-gray-100 p-4">
				<h2 className="text-2xl font-bold">Sponsor</h2>
				<p className="text-lg">This is the sponsor banner</p>
			</div>
		</article>
	);
}
