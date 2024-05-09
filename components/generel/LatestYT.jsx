"use client";

import { useEffect, useState } from "react";

export default function LatestYT() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const apiKey = "AIzaSyBDx6YWmbbZ-on7sEt3sRtiER6XtZEhATk";
		const channelId = "UCo7ll072evLTI3hawAW3pMQ"; // Replace with the Channel ID of the desired YouTube channel
		const maxResults = 3; // Number of latest videos to retrieve

		fetch(
			`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
		)
			.then((response) => response.json())
			.then((data) => {
				const videoData = data.items.map((item) => {
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
		<article>
			<h2 className="text-orange">Latest YouTube Videos</h2>
			{videos.map((video) => (
				<div key={video.id}>
					<h3>{video.title}</h3>
					<iframe
						width="560"
						height="315"
						src={video.url}
						frameBorder="0"
						allowFullScreen
					/>
				</div>
			))}
		</article>
	);
}
