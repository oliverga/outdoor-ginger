"use client";
import { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";

export default function Globe() {
	const [viewPort, setViewPort] = useState({
		// latitude: 55.515097,
		// longitude: 11.866122,
		width: "100%",
		height: "800px",
		zoom: 2.2,
		projection: "globe",
		// pitch: 60,
		minZoom: 2.2,
		maxZoom: 9,
	});
	return (
		<div className="hidden md:block max-w-5xl mx-auto h-[800px]">
			<ReactMapGl
				{...viewPort}
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
				onMove={(evt) => setViewPort(evt.viewPort)}
				mapStyle="mapbox://styles/jaco7643/clw8yi1o5003801qr04ae7h3q"
				attributionControl={false}
			></ReactMapGl>
		</div>
	);
}
