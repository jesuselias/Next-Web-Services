"use client";

import React from "react";
import YouTube from "react-youtube";
import Image from "next/image";
import { IconButton } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/outline";

const opts = {
  width: '100%',
  height: '100%',
};

export function VideoIntro() {
  const videoId = "iFfBkEzbdKw";
  return (
    <div className="p-4 sm:p-8">
      <div className="container mx-auto max-w-6xl px-5 overflow-hidden rounded-xl relative mt-20">
        <div className="absolute inset-0 bg-black/25 z-10 rounded-xl"></div>
        <Image
          width={768}
          height={650}
          src="/image/Background.png"
          className="relative w-full h-[96.25vw] max-h-[45vh]"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <YouTube 
            videoId={videoId} 
            opts={opts}
            className="w-[50vw] h-[36vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoIntro;