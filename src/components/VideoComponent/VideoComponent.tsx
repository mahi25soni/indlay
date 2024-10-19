"use client";
import React from 'react';
import YouTube from 'react-youtube';
import SingleHeading from "../atoms/SingleHeading/SingleHeading";

export default function VideoComponent() {

    
  const videoOptions = {
    width: '1024px',
    height: '558px',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="px-15 mt-20 w-[1024px] h-[702px] mx-auto">
      <SingleHeading firstLine="Learn how to easily navigate" secondLine="our website step-by-step" />

      <div className="mt-10 flex justify-center">
        <div
          className="overflow-hidden"
          style={{
            width: videoOptions.width,
            height: videoOptions.height,
            borderRadius: '24px',
          }}
        >
          <YouTube videoId="Cus-6cnyt1s" opts={videoOptions} />
        </div>
      </div>
    </div>
  );
}
