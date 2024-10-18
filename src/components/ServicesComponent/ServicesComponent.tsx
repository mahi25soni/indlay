"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { servicesData } from "@/testdata/service-data";
const ServicesItem = dynamic(
  () => import("@/components/ServicesComponent/ServicesItem"),
);

interface ServiceData {
  icon: string;
  service_name: string;
}

const ServicesComponent = () => {
  const [serviceDataList, setServiceDataList] = useState<ServiceData[]>([]);

  useEffect(() => {
    setServiceDataList(servicesData);
  }, []);
  return (
    <div className="px-15">
      <div className="heading mb-6 mt-14 flex flex-col items-center justify-center">
        <div>Navigate seamlessly with our</div>
        <div className="text-center">exclusive services</div>
      </div>

      <div className="flex gap-[24px] overflow-auto scrollbar-hidden">
        {serviceDataList.map((data) => (
          <ServicesItem {...data} />
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
