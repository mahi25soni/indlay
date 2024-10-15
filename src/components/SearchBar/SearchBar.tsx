"use client";

import React from "react";
import { FaChevronUp, FaChevronDown, FaSearch } from "react-icons/fa";

export interface SearchBarProps {
  height: number;
  icon_size: number;
}

const SearchBar = ({ height, icon_size }: SearchBarProps) => {
  return (
    <div
      className="flex w-[660px] items-center justify-start rounded-[120px] border border-basic pl-3"
      style={{ height: `${height}px` }} // Apply height dynamically
    >
      <div className="flex h-full w-[274px] items-center justify-start gap-2">
        <input
          type="text"
          placeholder="Search by city/country"
          className="w-full border-none bg-none outline-none"
        />
        <FaChevronDown />
      </div>
      <div className="mx-2 h-[50%] w-[1px] bg-[#BDD4E7]"></div>
      <div className="flex h-full w-[274px] items-center justify-start gap-2">
        <input
          type="text"
          placeholder="Search by city/country"
          className="w-full border-none bg-none outline-none"
        />
        <FaChevronDown />
      </div>
      <div
        className="ml-auto mr-1 flex items-start justify-center rounded-full bg-cta-darker"
        style={{ width: `${icon_size}px`, height: `${icon_size}px` }} // Apply icon_size dynamically
      >
        <FaSearch className="m-auto h-6 w-6 text-white" />
      </div>
    </div>
  );
};

export default SearchBar;
