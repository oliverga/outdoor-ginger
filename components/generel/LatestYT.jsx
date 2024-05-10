"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LatestYT() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const apiKey = "AIzaSyBDx6YWmbbZ-on7sEt3sRtiER6XtZEhATk";
		const channelId = "UCo7ll072evLTI3hawAW3pMQ"; // Replace with the Channel ID of the desired YouTube channel
		const maxResults = 20; // Number of latest videos to retrieve
		console.log(
			`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
		);

		fetch(
			`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
		)
			.then((response) => response.json())
			.then((data) => {
				const videoData = data.items
					.filter((item) => item.snippet.description !== "")
					.slice(0, 3) // Limit the results to 3 videos
					.map((item) => {
						const videoId = item.id.videoId;
						const videoTitle = item.snippet.title;

						return {
							id: videoId,
							title: videoTitle,
							url: `https://www.youtube.com/embed/${videoId}`,
						};
					});

				setVideos(videoData);
			})
			.catch((error) => {
				console.error("Error fetching videos", error);
			});
	}, []);

	return (
		<article className="bg-ogPrimary pt-8 grid grid-cols-2 grid-rows-latestYT overflow-y-hidden">
			<h2 className="row-start-1 col-start-1 col-span-2 font-display font-semibold text-ogPrimary-lightest uppercase text-4xl place-self-center text-center ml-6">
				Latest Adventures
			</h2>
			<div className="flex gap-4 self-end row-start-2 col-start-1 col-span-2 mt-4 mb-12 ml-6 z-20 overflow-x-scroll">
				{videos.map((video) => (
					<iframe
						key={video.id}
						className="aspect-video h-48 rounded-2xl"
						src={video.url}
						allowFullScreen
						title="YouTube video player"
					/>
				))}
			</div>
			<div className="row-start-2 col-start-1 w-max self-end -ml-44 -mb-36 opacity-25">
				<Image
					src="/icons/flameWhite.svg"
					alt="background flame icon"
					width={330}
					height={330}
				/>
			</div>
		</article>
	);
}
