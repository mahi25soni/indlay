import React from "react";
import { BsFuelPumpDieselFill } from "react-icons/bs";
import { FaFire, FaRegHeart, FaTruck } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import Image from "next/image";
import { nameToListingIcon } from "@/testdata/listing-data";

interface VerticalPropertyProps {
  name: string;
  address: string;
  isBestSeller: boolean;
  amenities: { name: string; id: string }[];
  id: string;
  onCompareClick?: () => void;
}

const VerticalProperty = (data: VerticalPropertyProps) => {
  return (
    <div className="relative flex min-w-[312px] flex-grow flex-col rounded-20 border border-basic bg-secondary">
      <div className="relative">
        <Image
          src="/testing.jpg"
          alt="property-image"
          width={312}
          height={180}
          className="w-full rounded-t-20"
        />
        <div className="absolute left-0 top-0 z-20 flex w-full items-start justify-between p-3">
          {data?.isBestSeller && (
            <div className="rounded-70 bg-bestseller px-2 py-1 text-xs">
              Best Seller
            </div>
          )}
          <div></div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 bg-gray-500">
            <FaRegHeart className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      <div className="border-b border-basic p-4">
        <div className="mb-6 flex flex-col gap-2">
          <p className="text-base">{data?.name}</p>
          <p className="text-xs text-light-gray">{data?.address}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-light-gray">
          {data?.amenities?.map((amenity) => {
            const IconComponent: React.ElementType | undefined =
              nameToListingIcon[amenity?.name];

            return (
              <div className="flex items-center gap-1" key={amenity?.id}>
                {IconComponent ? (
                  <IconComponent className="h-5 w-5" />
                ) : (
                  <span className="h-5 w-5">🚫</span> // fallback icon or text
                )}
                <p className="text-xs">{amenity?.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-3 p-4">
        <button className="flex flex-1 items-center justify-center gap-3 rounded-70 border border-cta bg-cta py-2 text-secondary" onClick={data?.onCompareClick}>
          <IoMdAdd className="h-5 w-5" />
          <p className="text-sm">Compare</p>
        </button>

        <button className="flex flex-1 items-center justify-center gap-3 rounded-70 border border-basic bg-basic py-2">
          <FiPhoneCall className="h-5 w-5" />
          <p className="text-sm">Book a visit</p>
        </button>
      </div>
    </div>
  );
};

export default VerticalProperty;
