"use client";
import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";

const ServicesItem = () => {
  return (
    <div className=' flex gap-[24px]'>
      
      <div className='h-[180px] w-[166px] border border-basic rounded-[12px] bg-secondary flex flex-col justify-between'>
        <div className='ml-3 mt-3'>
          <Image src="/webicon.png" alt="Services" width={48} height={48} />
        </div>
        <div className='flex justify-between items-center px-3 pb-3'>
          <p className="text-[16px] max-w-[89px] font-medium leading-[17.92px]">Engineering Service</p>
          <GoArrowRight className="w-[24px] h-[24px]" />
        </div>
      </div>

      <div className='h-[180px] w-[166px] border border-basic rounded-[12px] bg-secondary flex flex-col justify-between'>
        <div className='ml-3 mt-3'>
          <Image src="/webicon2.png" alt="Services" width={48} height={48} />
        </div>
        <div className='flex justify-between items-center px-3 pb-3'>
          <p className="text-[16px] max-w-[89px] font-medium leading-[17.92px]">Rentel  Service</p>
          <GoArrowRight className="w-[24px] h-[24px]" />
        </div>
      </div>


    </div>
  );
};

export default ServicesItem;
