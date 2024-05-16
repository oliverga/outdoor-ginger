"use client";
import { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import MapPin from "./MapPin";
import PopUpContent from "./PopUpContent";

export default function Globe({ posts }) {
	const [viewPort, setViewPort] = useState({
		// latitude: 55.515097,
		// longitude: 11.866122,
		width: "100%",
		height: "800px",
		zoom: 2.2,
		projection: "globe",
		// pitch: 60,
		minZoom: 2.2,
		maxZoom: 2.2,
	});

	const filteredPosts = posts.filter((post) => post.Latitude && post.Longitude);

	const [selectedPost, setSelectedPost] = useState(null);

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
										setSelectedPost(post);
									}}
								/>
							</Marker>
						);
					})}
				{selectedPost ? (
					<Popup
						latitude={selectedPost.Latitude}
						longitude={selectedPost.Longitude}
						onClose={() => {
							setSelectedPost(null);
						}}
					>
						<PopUpContent selectedPost={selectedPost} />
					</Popup>
				) : null}
			</ReactMapGl>
			<div className="bg-ogBG-base h-28 -mt-28 relative z-60" />
		</div>
	);
}
