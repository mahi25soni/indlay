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
      setAnimate(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimate(true);
      }, 100);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative mt-5 px-5 lg:px-15">
      <div className="relative flex">
        <div className="w-full overflow-hidden rounded-20">
          <Image
            src="/Hero.png"
            alt="Logo"
            width={1320}
            height={366}
            className="min-h-[450px] max-w-none object-fill lg:h-[400px] lg:w-full"
          />
        </div>

        <div className="absolute left-1/2 top-[25%] flex h-[190px] max-w-[393px] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-1 text-center text-[32px] font-normal leading-[38.4px] text-secondary lg:top-1/2 lg:text-[48px] lg:leading-[57.6px]">
          <div className="whitespace-nowrap font-youth">We help people</div>
          <div className="whitespace-nowrap font-youth">get their dreams</div>
          <div className="text-wrapper">
            <p
              className={`tracking-tighter-[2%] font-dm-serif-display text-primary ${
                animate ? "text-changing" : ""
              }`}
            >
              {words[currentWordIndex]}
            </p>
          </div>
        </div>
      </div>

      <div
        className="top-1/5 absolute left-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform justify-center rounded-full bg-white shadow-lg lg:flex"
        style={{ boxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.05)" }}
      >
        <SearchBar width={660} height={68} icon_size={60} />
      </div>

      <div className="mx-auto mt-14 hidden h-[28px] w-[560px] flex-wrap items-baseline justify-center gap-2 whitespace-nowrap text-xs font-normal lg:flex">
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
