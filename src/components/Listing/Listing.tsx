"use client";
import { listingTestData } from "@/testdata/listing-data";
import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    setListData(listingData);
  }, []);
  return (
    <div className="px-15">
      <div className="flex flex-col items-center gap-8">
        <div className="heading text-center leading-10">
          <div>Discover our finest properties</div>
          <div>tailored for you</div>
        </div>
        <div className="flex gap-2">
          {Object.keys(listData).map((filter) => {
            return (
              <div
                className={`cursor-pointer rounded-70 border border-basic px-2 py-1 text-sm ${selectedFilter === filter ? "text-secondary bg-primary" : "bg-secondary"}`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </div>
            );
          })}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Listing;
