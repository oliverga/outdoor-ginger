"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import MapPin from "./MapPin";
import PopUpContent from "./PopUpContent";
import { usePostStore } from "@/lib/store/postStore";

const useElementOnScreen = (options) => {
  const elementRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observerCallback = useCallback(([entry]) => {
    setIsIntersecting(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);
    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, options, observerCallback]);

  return [elementRef, isIntersecting];
};

export default function Globe({ posts }) {
  const [viewPort, setViewPort] = useState({
    latitude: 11.333566,
    longitude: 1.398978,
    width: "850px",
    height: "700px",
    zoom: 2.2,
    projection: "globe",
    pitch: 5,
    minZoom: 2.2,
    maxZoom: 2.2,
  });

  const filteredPosts = posts.filter((post) => post.Latitude && post.Longitude);

  const { post, setPost } = usePostStore();

  const [mapContainerRef, isMapVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.9, // 50% of the element should be visible to consider it in the viewport
  });

  const mapRef = useRef();

  useEffect(() => {
    if (post && post.Latitude && post.Longitude) {
      const map = mapRef.current.getMap();
      map.easeTo({
        duration: 1000,
        center: [post.Longitude, post.Latitude],
        offset: [-0, -200],
        essential: true,
      });
    }
  }, [post]);

  useEffect(() => {
    console.log(
      `Map is ${isMapVisible ? "visible" : "not visible"} in the viewport`,
    );
  }, [isMapVisible]);

  return (
    <div
      ref={mapContainerRef}
      className="hidden md:block max-w-5xl mx-auto w-[850px] h-[700px] -mt-36 relative z-50 overflow-hidden"
    >
      <ReactMapGl
        ref={mapRef}
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
        {post && isMapVisible ? (
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
