import React from "react";
import { BsFuelPumpDieselFill } from "react-icons/bs";
import { FaFire } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import Image from "next/image";

const VerticalProperty = () => {
  return (
    <div className="bg-secondary relative flex w-[312px] flex-col rounded-20 border border-basic">
      <div className="relative max-h-[180px]">
        <Image
          src="/testing.jpg"
          alt="property-image"
          width={312}
          height={180}
          className="rounded-t-20"
        />
      </div>

      <div className="border-b border-basic p-4">
        <div className="mb-6 flex flex-col gap-2">
          <p className="text-base">Solitaire Industrial Park</p>
          <p className="text-light-gray text-xs">28B Highgate Road, London</p>
        </div>
        <div className="text-light-gray grid grid-cols-2 gap-3">
          <div className="flex items-center gap-1">
            <FaTruck className="h-5 w-5" />
            <p className="text-xs">Truck Terminal</p>
          </div>
          <div className="flex items-center gap-1">
            <FaFire className="h-5 w-5" />
            <p className="text-xs">Fire Station</p>
          </div>
          <div className="flex items-center gap-1">
            <BsFuelPumpDieselFill className="h-5 w-5" />
            <p className="text-xs">Fuel Station</p>
          </div>
          <div className="flex items-center gap-1">
            <BsFuelPumpDieselFill className="h-5 w-5" />
            <p className="text-xs">Fuel Station</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4">
        <button className="text-secondary flex flex-1 items-center justify-center gap-3 rounded-70 border border-cta bg-cta py-2">
          <IoMdAdd className="h-5 w-5" />
          <p className="text-sm">Compare</p>
        </button>

        <button className="bg-basic flex flex-1 items-center justify-center gap-3 rounded-70 border border-basic py-2">
          <FiPhoneCall className="h-5 w-5" />
          <p className="text-sm">Book a visit</p>
        </button>
      </div>
    </div>
  );
};

export default VerticalProperty;
