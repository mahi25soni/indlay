"use client";
import { listingTestData } from "@/testdata/listing-data";
import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";

import dynamic from "next/dynamic";
const VerticalProperty = dynamic(
  () => import("@/components/Listing/VerticalProperty"),
);
interface ListValueData {
  name: string;
  address: string;
  isBestSeller: boolean;
  id: string;
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
  return (
    <div className="flex flex-col gap-8 px-15">
      <div className="flex flex-col items-center gap-4">
        <div className="heading text-center leading-10">
          <div>Discover our finest properties</div>
          <div>tailored for you</div>
        </div>
        <div className="flex gap-2">
          {Object.keys(listData).map((filter) => {
            return (
              <div
                className={`cursor-pointer rounded-70 border border-basic px-3 py-1 text-sm ${selectedFilter === filter ? "text-secondary bg-primary" : "bg-secondary"}`}
                onClick={() => handleSelectFilter(filter)}
              >
                {filter}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {showData.map((data) => (
          <VerticalProperty key={data.id} {...data} />
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
