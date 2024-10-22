"use client";
import React, { useState, useEffect } from "react";
import VideoComponent from "@/components/VideoComponent/VideoComponent";

const AboutMission = () => {
  const [missionContent, setMissionContent] = useState("");

  useEffect(() => {
    const fetchMissionContent = async () => {
      try {
        const mockData = {
          missionText:
            "Our mission is to provide businesses with seamless access to a diverse range of industrial plots from top industrial parks across the globe. We aim to empower businesses by offering a platform that simplifies the process of finding and comparing ideal locations to meet their unique needs. By combining comprehensive property listings with valuable insights, we help investors make informed decisions with confidence. Our tailored solutions ensure that every business, regardless of size, can unlock its full potential in the perfect location. With a focus on reliability and ease, we are committed to supporting your business growth all in one place.",
        };
        setMissionContent(mockData.missionText);
      } catch (error) {
        console.error("Error fetching mission content:", error);
      }
    };

    fetchMissionContent();
  }, []);

  return (
    <div className="mt-28">
      <div className="flex justify-between">
        <div>
          <p className="font-normal leading-[38.4px] text-[32px]">Our Mission</p>
        </div>
        <div className="w-[780px] h-[256px] text-center" style={{ textAlign: "justify" }}>
          {missionContent }
        </div>
      </div>

      <VideoComponent />
    </div>
  );
};

export default AboutMission;
