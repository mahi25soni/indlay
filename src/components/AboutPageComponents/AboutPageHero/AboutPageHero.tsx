"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const AboutPageHero = () => {
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
    <div className="mt-5 ">
      <div className="relative z-50 flex justify-center ">
        <div className="w-full md:w-full h-[312px] md:h-[528px] rounded-[32px] bg-[#022D42] relative">
          <div className="absolute left-1/2 lg:top-1/4 top-[40%] -translate-x-1/2 -translate-y-1/2 transform  max-w-[502px] h-[190px] flex-col gap-1 text-center text-[32px] font-normal leading-[38.4px] text-secondary lg:text-[48px] lg:leading-[57.6px]">
            <div className="whitespace-nowrap font-youth">Compare, Choose, &</div>
            <div className="whitespace-nowrap font-youth">Invest in Top</div>
            <div className="text-wrapper">
              <p
                className={`tracking-tighter-[2%] font-dm-serif-display text-primary ${animate ? "text-changing" : ""
                  }`}
              >
                {words[currentWordIndex]}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-60 ">
          {/* <Image src="/aboutHero.png" alt="About Hero" width={1256} height={528} className="flex justify-center" /> */}
          <div className="w-full overflow-hidden rounded-20">
            <Image
              src="/aboutHero.png"
              alt="Logo"
              width={1256}
              height={528}
              className="h-[250px] max-w-none lg:h-[700px] object-contain   lg:w-full w-[320px]"
            />
          </div>
        </div>
      </div>

      {/* mobile view  */}
      {/* <div className="relative z-50 flex justify-center lg:hidden">
        <div className="w-[350px]  h-[312px]  rounded-[32px] bg-[#022D42] relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-secondary max-w-[502px] h-[190px]">
            <h2 className="text-center text-[28px] lg:text-[48px]  leading-[33.6px] lg:leading-[57.6px] font-normal">Compare, Choose, &</h2>
            <p className="text-center text-[28px] lg:text-[48px]  leading-[33.6px] lg:leading-[57.6px]  font-normal w-[266px]">Invest in Top</p>
            <p className="text-center text-[28px] lg:text-[48px]  leading-[33.6px] lg:leading-[57.6px]  font-normal tracking-tighter-[2%] text-primary">
              Industrial Property
            </p>
          </div>
        </div>
        <div className="absolute top-52 ">
          <Image src="/aboutHero-mob.png" alt="About Hero" width={320} height={250} className="flex justify-center" />
        </div>
      </div> */}
    </div>
  )
};

export default AboutPageHero;
