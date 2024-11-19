"use client"
import React, { useEffect, useState } from "react";

import Image from "next/image";

const ContactPageHero = () => {
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
    <div className="mt-4 px-5 lg:px-15 relative w-full">
      <div className="relative flex">
        <div className="w-full overflow-hidden rounded-20">
          <Image
            src="/Hero.png"
            alt="Logo"
            width={1320}
            height={366}
            className="h-[450px] max-w-none lg:h-[400px] lg:max-w-full"
          />
        </div>

        <div className="absolute left-1/2 top-[30%] flex h-[190px] max-w-[393px] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-1 text-center text-[32px] font-normal leading-[38.4px] text-secondary lg:top-1/2 lg:text-[48px] lg:leading-[57.6px]">
          <div className="whitespace-nowrap">Contact our</div>
          <div className="text-wrapper">
            <p className="text-primary">Friendly Team</p>
            {/* <p
              className={`tracking-tighter-[2%] text-primary ${animate ? "text-changing" : ""
                }`}
            >
              {words[currentWordIndex]}
            </p> */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactPageHero;
