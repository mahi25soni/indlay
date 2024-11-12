"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { servicesData } from "@/testdata/service-data";
const ServicesItem = dynamic(
  () => import("@/components/ServicesComponent/ServicesItem"),
);
const SingleHeading = dynamic(
  () => import("@/components/atoms/SingleHeading/SingleHeading"),
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
    <div className="px-5 mt-20 lg:px-15">
      <SingleHeading firstLine="Navigate seamlessly with our" secondLine="exclusive services" />


      <div className="flex gap-[24px] overflow-auto scrollbar-hidden mt-6">
        {serviceDataList.map((data) => (
          <ServicesItem {...data} />
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
