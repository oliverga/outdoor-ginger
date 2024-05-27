"use client";

import ImageGallery from "react-image-gallery";
import { urlFor } from "@/lib/sanity/client";
import "./ProductImageGallery.css";

export default function ProductImageGallery({ imgs }) {
	console.log(imgs);
	const images = imgs.map((img) => ({
		original: urlFor(img).url(),
		thumbnail: urlFor(img).width(250).url(),
	}));
	console.log(images);
	return <ImageGallery items={images} showPlayButton={false} showNav={false} />;
}
