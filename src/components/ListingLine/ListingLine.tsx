"use client";

import { listingTestData } from "@/testdata/listing-data";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import VerticalProperty from "../Listing/VerticalProperty";

const HeadingAndButton = dynamic(
  () => import("@/components/atoms/HeadingAndButton/HeadingAndButton"),
);

interface ListValueData {
  name: string;
  address: string;
  isBestSeller: boolean;
  amenities : {name: string; id: string}[];
  id: string;
}

const ListingLine = () => {
  const [listData, setListData] = useState<ListValueData[]>([]);
  const trackScrollRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (trackScrollRef.current) {
      trackScrollRef.current.scrollBy({
        left: 1000,
        behavior: "smooth",
      });
    }
  };
  const handleScrollLeft = () => {
    if (trackScrollRef.current) {
      trackScrollRef.current.scrollBy({
        left: -1000,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setListData(listingTestData["All Properties"]);
  }, []);
  return (
    <div className="mt-20 px-15">
      <HeadingAndButton heading="List Name 2">
        <div className="flex items-center gap-2">
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full border border-basic"
            onClick={handleScrollLeft}
          >
            <GoArrowLeft className="h-6 w-6 text-cta-darker" />
          </button>
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full border border-basic"
            onClick={handleScrollRight}
          >
            <GoArrowRight className="h-6 w-6 text-cta-darker" />
          </button>
        </div>
      </HeadingAndButton>

      <div className="mt-10 flex gap-5 overflow-hidden" ref={trackScrollRef}>
        {listData?.map((data) => {
          return <VerticalProperty key={data?.id} {...data} />;
        })}
      </div>
    </div>
  );
};

export default ListingLine;
