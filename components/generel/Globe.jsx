"use client";
import { useState, useEffect, use } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import MapPin from "./MapPin";
import PopUpContent from "./PopUpContent";
import { usePostStore } from "@/lib/store/postStore";

export default function Globe({ posts }) {
	const [viewPort, setViewPort] = useState({
		latitude: 11.333566,
		longitude: 1.398978,
		width: "100%",
		height: "800px",
		zoom: 2.2,
		projection: "globe",
		minZoom: 2.2,
		maxZoom: 2.2,
	});

	const filteredPosts = posts.filter((post) => post.Latitude && post.Longitude);

	const { post, setPost } = usePostStore();

	useEffect(() => {
		console.log(post);
	}, [post]);

	return (
		<div className="hidden md:block max-w-5xl mx-auto h-[800px] -mt-36 relative z-50">
			<ReactMapGl
				{...viewPort}
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
				onMove={(evt) => setViewPort(evt.viewPort)}
				mapStyle="mapbox://styles/jaco7643/clw8yi1o5003801qr04ae7h3q"
				attributionControl={false}
			>
				{filteredPosts &&
					filteredPosts.map((post) => {
						return (
							<Marker
								key={post.slug.current}
								latitude={post.Latitude}
								longitude={post.Longitude}
							>
								<MapPin
									onClick={(e) => {
										e.preventDefault();
										e.stopPropagation();
										setPost(post);
										console.log(post);
									}}
								/>
							</Marker>
						);
					})}
				{post ? (
					<Popup
						latitude={post.Latitude}
						longitude={post.Longitude}
						onClose={() => {
							setPost(null);
						}}
					>
						<PopUpContent selectedPost={post} />
					</Popup>
				) : null}
			</ReactMapGl>
			<div className="bg-ogBG-base h-28 -mt-28 relative z-60" />
		</div>
	);
}
