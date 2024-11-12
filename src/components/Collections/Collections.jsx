"use client";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import dynamic from "next/dynamic";
const CollectionItem = dynamic(() => import("./CollectionItem"));
const HeadingAndButton = dynamic(
  () => import("../atoms/HeadingAndButton/HeadingAndButton"),
);

const Collections = () => {
  return (
    <div className="mt-20 px-5">
      <HeadingAndButton heading="Explore Our Collections">
        <div className="flex">
          <button className="flex items-center justify-center gap-3 rounded-70 border border-basic bg-secondary px-3 py-2 text-base font-medium text-cta-darker">
            <p className="text-sm">View all</p>
            <GoArrowRight className="h-5 w-5" />
          </button>
        </div>
      </HeadingAndButton>

      <CollectionItem />
    </div>
  );
};

export default Collections;
