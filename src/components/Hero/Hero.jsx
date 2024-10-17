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

  return (
    <div className="relative mt-8 px-15">
      <div>
        <Image src="/Photo.png" alt="Logo" width={1320} height={366} />
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
