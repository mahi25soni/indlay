"use client";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import dynamic from "next/dynamic";
const CollectionItem = dynamic(() => import("./CollectionItem"));

const Collections = () => {
  return (
    <div className="mt-14 px-15">
      <div className="flex justify-between">
        <div className="h-[38px] w-[372px] text-[32px] font-medium leading-[38.4px]">
          Explore Our Collections
        </div>

        <div className="flex">
          <button className="bg-secondary flex items-center justify-center gap-3 rounded-70 border border-basic px-3 py-2 text-base font-medium text-cta-darker">
            <p className="text-sm">View all</p>
            <GoArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <CollectionItem/>
    </div>
  );
};

export default Collections;
