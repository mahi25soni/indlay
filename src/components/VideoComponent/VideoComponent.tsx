"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const SingleHeading = dynamic(() => import('@/components/atoms/SingleHeading/SingleHeading'));

export default function VideoComponent() {

  const videoOptions = {
    width: '1024px',
    height: '558px',
  };

  const mobileVideoOptions = {
    width: '350px',
    height: '240px',
  }

  // Test video URL for frontend testing
  const testVideoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

  return (
    <div className="px-5 lg:px-15 mt-[60px] lg:mt-20 h-auto">
      <SingleHeading firstLine="Learn how to easily navigate" secondLine="our website step-by-step" />

      <div className="mt-10 flex justify-center w-full">
        <div
          className="overflow-hidden lg:block hidden"
          style={{
            width: videoOptions.width,
            height: videoOptions.height,
            borderRadius: '24px',
          }}
        >
          <video
            width={videoOptions.width}
            height={videoOptions.height}
            controls
            style={{ borderRadius: '24px' }}
          >
            <source src={testVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* For mobiel view */}
        <div
          className="overflow-hidden lg:hidden"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: '24px',
          }}
        >
          <video
            width="100%"
            height="100%"
            controls
            style={{ borderRadius: '24px' }}
          >
            <source src={testVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
