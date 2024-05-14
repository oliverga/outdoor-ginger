"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

export default function LatestYT() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    const channelId = "UCo7ll072evLTI3hawAW3pMQ";
    const maxResults = 20;

    const fetchVideos = () => {
      const storedVideos = localStorage.getItem("videos");
      const fetchTime = localStorage.getItem("fetchTime");
      const currentTime = Date.now();
      const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      if (
        !storedVideos ||
        !fetchTime ||
        currentTime - fetchTime > twentyFourHours
      ) {
        fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`,
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
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
            localStorage.setItem("fetchTime", currentTime.toString());
          })
          .catch((error) => {
            console.error("Error fetching videos");
          });
      } else {
        setVideos(JSON.parse(storedVideos));
      }
    };

    fetchVideos();
  }, []);

  return (
    <article className="bg-ogPrimary pt-8 pb-8 grid grid-cols-2 grid-rows-latestYT overflow-y-hidden md:overflow-x-hidden">
      <h2 className="row-start-1 col-start-1 col-span-2 font-display font-semibold text-ogPrimary-lightest uppercase text-4xl md:text-5xl place-self-center text-center ml-6">
        Latest Adventures
      </h2>
      <div className="flex md:flex-wrap md:justify-evenly gap-14 self-end row-start-2 col-start-1 col-span-2 mt-4 mb-12 ml-6 md:m-auto md:mb-16 z-20 overflow-x-scroll md:overflow-x-visible md:max-w-5xl">
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
      <div className="hidden md:block row-start-2 col-start-1 w-max opacity-25 rotate-180 -mt-108 -ml-96">
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
