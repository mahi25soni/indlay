"use client";
import React from "react";
import dynamic from "next/dynamic";
import { servicesData } from "@/testdata/service-data";
const ServicesItem = dynamic(() => import("@/components/ServicesComponent/ServicesItem"));

const ServicesComponent = () => {
  return (
    <div className="px-15">
      <div className="heading flex justify-center items-center mt-14 mb-6 flex-col">
        <div>Navigate seamlessly with our</div>
        <div className="text-center">exclusive services</div>

      </div>

      <ServicesItem />
    </div>
  );
};

export default ServicesComponent;
