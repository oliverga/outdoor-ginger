"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

export default function LatestYT() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const apiKey = "AIzaSyBDx6YWmbbZ-on7sEt3sRtiER6XtZEhATk";
		const channelId = "UCo7ll072evLTI3hawAW3pMQ"; // Replace with the Channel ID of the desired YouTube channel
		const maxResults = 20; // Number of latest videos to retrieve
		console.log(
			`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
		);

		const fetchVideos = () => {
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
					localStorage.setItem("videos", JSON.stringify(videoData));
					localStorage.setItem("fetchTime", Date.now());
				})
				.catch((error) => {
					console.error("Error fetching videos", error);
				});
		};

		const storedVideos = JSON.parse(localStorage.getItem("videos"));
		const fetchTime = localStorage.getItem("fetchTime");

		if (
			!storedVideos ||
			!fetchTime ||
			Date.now() - fetchTime > 24 * 60 * 60 * 1000
		) {
			fetchVideos();
		} else {
			setVideos(storedVideos);
		}
	}, []);

	return (
		<article className="bg-ogPrimary pt-8 grid grid-cols-2 grid-rows-latestYT overflow-y-hidden md:overflow-x-hidden">
			<h2 className="row-start-1 col-start-1 col-span-2 font-display font-semibold text-ogPrimary-lightest uppercase text-4xl md:text-5xl place-self-center text-center ml-6">
				Latest Adventures
			</h2>
			<div className="flex gap-4 self-end row-start-2 col-start-1 col-span-2 mt-4 mb-12 ml-6 md:m-auto md:mb-16 z-20 overflow-x-scroll md:overflow-x-visible">
				{videos.length > 0 &&
					videos.map((video) => (
						<iframe
							key={video.id}
							className="aspect-video h-48 md:h-64 rounded-2xl"
							src={video.url}
							allowFullScreen
							title="YouTube video player"
						/>
					))}
				{videos.length === 0 && (
					<div className="flex md:flex-wrap gap-4 md:max-w-5xl justify-around">
						<Skeleton className="aspect-video h-48 md:h-64" />
						<Skeleton className="aspect-video h-48 md:h-64" />
						<Skeleton className="aspect-video h-48 md:h-64" />
					</div>
				)}
			</div>
			<div className="md:hidden row-start-2 col-start-1 w-max self-end -ml-44 -mb-36 opacity-25">
				<Image
					src="/icons/flameWhite.svg"
					alt="background flame icon"
					width={360}
					height={360}
				/>
			</div>
			<div className="hidden md:block row-start-2 col-start-1 w-max opacity-25 rotate-180 absolute -mt-108 -ml-96">
				<Image
					src="/icons/flameWhite.svg"
					alt="background flame icon"
					width={900}
					height={900}
				/>
			</div>
			<div className="hidden md:block row-start-2 col-start-2 w-max opacity-25 place-self-end -mb-96 -mr-96">
				<Image
					src="/icons/flameWhite.svg"
					alt="background flame icon"
					width={900}
					height={900}
				/>
			</div>
		</article>
	);
}
