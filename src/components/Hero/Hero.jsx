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


  const typingTexts = ["Industrial Property","Resale Property", "Parks", "Services"];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [typingIndex, setTypingIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (typingIndex < typingTexts[currentIndex].length) {
          setCurrentText((prev) => prev + typingTexts[currentIndex].charAt(typingIndex));
          setTypingIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000); 
        }
      } else {
        if (typingIndex > 0) {
          setCurrentText((prev) => prev.slice(0, typingIndex - 1));
          setTypingIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    };

    const typingSpeed = isDeleting ? 100 : 150; 
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer); 
  }, [currentText, typingIndex, isDeleting, currentIndex, typingTexts]);

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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-secondary max-w-[393px] h-[190px]">
          <h2 className="text-[48px] leading-[57.6px] font-normal">We help people</h2>
          <p className="text-[48px] leading-[57.6px] font-normal w-[371px]">get their dreams</p>
          <p className="text-[48px] leading-[65.81px] font-normal tracking-tighter-[2%] text-primary">
            {currentText}
            <span className="blinking-cursor">|</span> 
          </p>
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
