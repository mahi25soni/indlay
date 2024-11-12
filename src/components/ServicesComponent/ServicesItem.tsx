"use client";
import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

interface ServiceItemProp {
  icon: string;
  service_name: string;
}

const ServicesItem = (data: ServiceItemProp) => {
  return (
    <div className="flex min-h-[180px] min-w-[168px] flex-col justify-between border-1.5 rounded-[12px] lg:border border-basic bg-secondary">
      <div className="ml-3 mt-3">
        <Image src={data?.icon} alt="Services" width={48} height={48} />
      </div>
      <div className="flex items-center justify-between px-3 pb-3">
        <p className="max-w-[89px] text-[16px] font-medium leading-[17.92px]">
          {data?.service_name}
        </p>
        <GoArrowRight className="h-[24px] w-[24px]" />
      </div>
    </div>
  );
};

export default ServicesItem;
