"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const SearchBar = dynamic(() => import("../SearchBar/SearchBar"));

const Hero = () => {
  const defaultSearches = [
    "Mumbai",
    "Industrial parks",
    "Australia",
    "Kandevali East",
  ];

  const [popularSearches, setPopularSearches] = useState(defaultSearches);

  useEffect(() => {
    setPopularSearches(defaultSearches);
  }, []);

  const words = ["Industrial Property", "Parks", "Schools", "Hospitals"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Disable the animation before changing the word
      setAnimate(false);

      // Change the word after a short delay (to reset animation)
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimate(true); // Re-enable animation after word change
      }, 100); // Delay of 100ms to reset the animation
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative mt-20 px-15">
      <div className="relative">
        <Image
          src="/Hero.png"
          alt="Logo"
          width={1320}
          height={366}
          className="w-full"
        />
        <div className="absolute left-1/2 top-1/2 h-[190px] max-w-[393px] -translate-x-1/2 -translate-y-1/2 transform text-center text-secondary">
          <h2 className="text-[48px] font-normal leading-[57.6px]">
            We help people
          </h2>
          <p className="w-[371px] text-[48px] font-normal leading-[57.6px]">
            get their dreams
          </p>
          <div className="text-wrapper">
            <p
              className={`tracking-tighter-[2%] text-[48px] font-normal leading-[65.81px] text-primary ${
                animate ? "text-changing" : ""
              }`}
            >
              {words[currentWordIndex]}
            </p>
          </div>
        </div>
      </div>

      <div
        className="top-1/5 absolute left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform justify-center rounded-full bg-white shadow-lg"
        style={{ boxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.05)" }}
      >
        <SearchBar width={660} height={68} icon_size={60} />
      </div>

      <div className="mx-auto mt-14 flex h-[28px] w-[560px] flex-wrap items-baseline justify-center gap-2 whitespace-nowrap text-xs font-normal">
        <div className="">Popular Search</div>
        {popularSearches.map((search, index) => (
          <div
            key={index}
            className="flex h-[28px] items-center rounded-[70px] border border-basic bg-[#FFFFFF] px-3"
          >
            {search}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
