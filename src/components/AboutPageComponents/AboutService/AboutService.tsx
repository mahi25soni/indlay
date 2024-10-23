"use client";
import { useEffect, useState } from "react";
import React from 'react'
import Image from 'next/image'
import { aboutServiceData } from "@/testdata/about-service-data";
import dynamic from "next/dynamic";

const SingleHeading = dynamic(
  () => import("@/components/atoms/SingleHeading/SingleHeading"),
)

interface AboutServiceData {
  icon: string;
  heading_name: string;
  paragraph: string;
}

const AboutService = () => {
  const [aboutDataList, setAboutDataList] = useState<AboutServiceData[]>([]);

  useEffect(() => {
    setAboutDataList(aboutServiceData); 
  }, []);

  return (
    <div>
    <SingleHeading firstLine="Services we provide" secondLine="to our esteemed customers" />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
      {aboutDataList.map((service, index) => (
        <div key={index} className="min-w-[312px] min-h-[300px] rounded-xl border-[1.5px] border-basic bg-secondary flex flex-col justify-between p-4">
          <div className="flex justify-end">
            <Image src={service.icon} alt={service.heading_name} width={60} height={60} />
          </div>
          <div className="flex flex-col gap-3 mt-auto">
            <h2 className="text-2xl leading-[26px] font-medium">{service.heading_name}</h2>
            <p className="h-[54px] leading-[17px] text-base font-normal text-light-gray">{service.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default AboutService;
