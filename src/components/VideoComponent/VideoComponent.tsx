"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const SingleHeading = dynamic(() => import('@/components/atoms/SingleHeading/SingleHeading'));

export default function VideoComponent() {
  
  const videoOptions = {
    width: '1024px',
    height: '558px',
  };

  // Test video URL for frontend testing
  const testVideoUrl = "https://www.w3schools.com/html/mov_bbb.mp4"; 

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
      </div>
    </div>
  );
}
