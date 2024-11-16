"use client";
import React from "react";
import Image from "next/image";

const AboutPageHero = () => {
  return (
    <div className="mt-5 ">
      <div className="relative z-50 lg:flex lg:justify-center hidden ">
        <div className="w-[350px] md:w-[1320px] h-[312px] md:h-[528px] rounded-[32px] bg-[#022D42] relative">
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 transform text-center text-secondary max-w-[502px] h-[190px]">
            <h2 className="text-center text-[28px] lg:text-[48px]  leading-[33.6px] lg:leading-[57.6px] font-normal">Compare, Choose, &</h2>
            <p className="text-center text-[28px] lg:text-[48px]  leading-[33.6px] lg:leading-[57.6px]  font-normal w-[371px]">Invest in Top</p>
            <p className="text-center text-[28px] lg:text-[48px]  leading-[33.6px] lg:leading-[57.6px]  font-normal tracking-tighter-[2%] text-primary">
              Industrial Property
            </p>
          </div>
        </div>
        <div className="absolute top-60 ">
          <Image src="/aboutHero.png" alt="About Hero" width={1256} height={528} className="flex justify-center" />
        </div>
      </div>
      
      {/* mobile view  */}
      <div className="relative z-50 flex justify-center lg:hidden">
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
      </div>
    </div>
  )
};

export default AboutPageHero;
