"use client";
import React, { useState, useEffect } from "react";

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
    <div className="mt-0 md:mt-4 lg:mt-28 px-4">
    <div className="flex flex-wrap justify-between gap-6">
      <div className="w-full lg:w-auto">
        <p className="text-[28px] lg:text-[32px] font-medium leading-[28.8px] lg:leading-snug text-center lg:text-start ">
          Our Mission
        </p>
      </div>
      <div
        className="w-full lg:w-[780px] h-auto lg:h-[256px] text-center lg:text-left text-light-gray  font-normal text-[14px] lg:text-[20px] leading-[15.68px] lg:leading-[32px]"
        style={{ textAlign: "justify" }}
      >
        {missionContent}
      </div>
    </div>
  </div>
  );
};

export default AboutMission;
