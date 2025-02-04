'use client'
import { Button } from "../../button";
import { updateLessonProgress } from "../actions";

export default function LessonVideo({provider_url, url, thumbnail_url, type}) {
 


    const videoId = new URLSearchParams(new URL(url).search).get("v"); // Extract video ID from URL
    const embedUrl = `${provider_url}/${type}/${videoId}?feature=oembed`;
    const videoUrl = url;
    const imageUrl = thumbnail_url;

    // Build the dynamic embed URL
    const embedlyUrl = `//cdn.embedly.com/widgets/media.html?src=${encodeURIComponent(embedUrl)}&url=${encodeURIComponent(videoUrl)}&image=${encodeURIComponent(imageUrl)}&type=text%2Fhtml`;


    return (
        <iframe 
            className="embedly-embed" 
            src={embedlyUrl}
            width="854" 
            height="480" 
            scrolling="no" 
            title="YouTube embed" 
            frameBorder="0" 
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture;" 
            allowFullScreen={true} 
            data-connected="1"
        />
    )
}