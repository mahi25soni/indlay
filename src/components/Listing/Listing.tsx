"use client";
import { listingTestData } from "@/testdata/listing-data";
import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";

import dynamic from "next/dynamic";
import SingleHeading from "../atoms/SingleHeading/SingleHeading";
const VerticalProperty = dynamic(
  () => import("@/components/Listing/VerticalProperty"),
);
interface ListValueData {
  name: string;
  address: string;
  isBestSeller: boolean;
  amenities: { name: string; id: string }[];
  id: string;
  images?: { id: string; url: string }[];
}

interface ListData {
  [key: string]: ListValueData[];
}

const listingData: ListData = listingTestData;
const Listing = () => {
  const [listData, setListData] = useState<ListData>({});
  const [selectedFilter, setSelectedFilter] =
    useState<string>("All Properties");

  const [showData, setShowData] = useState<ListValueData[]>([]);

  useEffect(() => {
    setListData(listingData);
    setShowData(listingData["All Properties"]);
  }, []);

  const handleSelectFilter = (filter: string) => {
    setSelectedFilter(filter);
    setShowData(listData[filter]);
  };


  const handleAddToCompareList = (id: string) => {
    // Add the property to the compare list
  }
  return (
    <div className="flex flex-col gap-10 lg:px-15 mt-[60px] lg:mt-20 px-5">
      <div className="flex flex-col items-center gap-4">
        <SingleHeading firstLine="Discover our finest properties" secondLine="tailored for you" />
        <div className="flex gap-2 overflow-y-auto w-full lg:w-max scrollbar-hidden">
          {Object.keys(listData).map((filter) => {
            return (
              <div
                className={`cursor-pointer rounded-70 border border-basic px-3 whitespace-nowrap  py-1 text-sm leading-[15.68px] ${selectedFilter === filter ? "text-secondary bg-primary" : "bg-secondary"}`}
                onClick={() => handleSelectFilter(filter)}
              >
                {filter}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex w-full gap-4 overflow-y-auto scrollbar-hidden sm:grid sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:grid ">
        {showData.map((data) => (
          <VerticalProperty key={data.id} {...data} onPropertyClick={handleAddToCompareList} />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <button className="bg-secondary flex items-center justify-center gap-3 rounded-70 border border-basic px-3 py-2 text-base font-medium text-cta-darker">
          <p className="text-sm">View all</p>
          <GoArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Listing;
