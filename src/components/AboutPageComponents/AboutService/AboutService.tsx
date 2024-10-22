"use client";
import { useEffect, useState } from "react";
import SingleHeading from '@/components/atoms/SingleHeading/SingleHeading';
import React from 'react'
import Image from 'next/image'
import { aboutServiceData } from "@/testdata/about-service-data";

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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10'>
        {aboutDataList.map((service, index) => (
          <div key={index} className='w-[312px] h-[300px] rounded-[12px] border-[1.5px] border-basic bg-secondary relative'>
            <Image src={service.icon} alt={service.heading_name} width={60} height={60} className='absolute right-0 m-4' />
            <div className='w-[272px] h-[93px] gap-[12px] absolute bottom-0 m-4'>
              <h2 className='text-[24px] leading-[26px] font-medium mb-3'>{service.heading_name}</h2>
              <p className='h-[54px] leading-[17px] text-[16px] font-normal text-light-gray'>{service.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutService;
