"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { listingTestData } from "@/testdata/listing-data";

const Filter = dynamic(() => import("@/app/listing/filter"));
const Expand = dynamic(() => import("@/app/listing/expand"));
const Property = dynamic(() => import("@/app/listing/property"));

const categories = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
  "Category 6",
  "Category 7",
];

interface ListValueData {
  name: string;
  address: string;
  isBestSeller: boolean;
  amenities: { name: string; id: string }[];
  id: string;
}

interface ListData {
  [key: string]: ListValueData[];
}

const ListingPage = () => {
  const [orderBy, setOrderBy] = useState("Latest");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isExpandOpen, setIsExpandOpen] = useState(false);
  const [listData, setListData] = useState<ListData>({});
  const [showData, setShowData] = useState<ListValueData[]>([]);

  useEffect(() => {
    setListData(listingTestData);
    setShowData(listingTestData["All Properties"]);
  }, []);

  const handleOptionChange = (option: string) => {
    setOrderBy(option);
    setIsDropdownOpen(false);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const clearAllCategories = () => {
    setSelectedCategories([]);
  };

  const applyCategories = () => {
    setIsCategoryDropdownOpen(false);
  };

  const toggleExpand = () => {
    setIsExpandOpen((prev) => !prev);
  };
  return (
    <div>
      <div className="flex">
        {/* Left */}
        <div>
          <div className="bg-secondary h-[56px] flex items-center w-[320px] p-3 border-b border-basic">
            <p className="text-[16px] leading-[17px] font-medium">Filters</p>
          </div>
          <Filter />
        </div>

        {/* Right */}
        <div className="w-full min-w-[1120px] border-l border-basic">
          <div className="bg-secondary h-[56px] flex items-center p-3 border-b border-basic justify-between">
            <p className="text-[14px] leading-[15px] font-medium">Showing 20 results</p>

            {/* Control Buttons */}
            <div className="flex items-center gap-4">
              {/* Order by Dropdown */}
              <div className="relative flex items-center text-[14px] text-gray-500 cursor-pointer">
                <span
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center"
                >
                  Order by:{" "}
                  <span className="ml-1 font-normal text-[14px] leading-[15px] text-black">
                    {orderBy}
                  </span>
                  <MdOutlineKeyboardArrowDown className="w-4 h-4 text-black" />
                </span>
                {isDropdownOpen && (
                  <div
                    className="absolute top-full mt-2 bg-white p-2 z-10 min-w-[180px] w-full rounded-xl gap-3 text-[14px] leading-[15px]"
                    style={{ boxShadow: "0px 0px 30px 0px #0000000A" }}
                  >
                    {[
                      "Latest",
                      "Mostly viewed",
                      "Top rated",
                      "Pricing low to high",
                      "Pricing high to low",
                    ].map((option) => (
                      <label
                        key={option}
                        className="flex items-center p-2 text-black cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="order"
                          value={option}
                          checked={orderBy === option}
                          onChange={() => handleOptionChange(option)}
                          className="mr-2 accent-black"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Categories Dropdown */}
              <div className="relative flex items-center text-[14px]  cursor-pointer">
                <span
                  onClick={() =>
                    setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                  }
                  className="flex items-center"
                >
                  All categories
                  <MdOutlineKeyboardArrowDown className="ml-1 w-4 h-4 text-black" />
                </span>
                {isCategoryDropdownOpen && (
                  <div
                    className="absolute top-full right-0  mt-2 bg-white  z-10 min-w-[480px] rounded-xl  p-2"
                    style={{ boxShadow: "0px 0px 30px 0px #0000000A" }}
                  >
                    <div className=" ">
                      <div className="flex justify-between items-start">
                        <p className="text-[16px] font-medium mb-3">
                          Select Categories
                        </p>
                        <RxCross1
                          onClick={() => setIsCategoryDropdownOpen(false)}
                          className="cursor-pointer text-gray-500 hover:text-black"
                        />
                      </div>
                      <div className="grid grid-cols-4 gap-3 border-t border-basic p-2 ">
                        {categories.map((category) => (
                          <label
                            key={category}
                            className="flex items-center cursor-pointer"
                          >
                            <span
                              onClick={() => toggleCategory(category)}
                              className="mr-2"
                            >
                              {selectedCategories.includes(category) ? (
                                <MdCheckBox className="text-[#022D42] w-[18px] h-[18px]" />
                              ) : (
                                <MdCheckBoxOutlineBlank className="text-basic w-[18px] h-[18px]" />
                              )}
                            </span>
                            {category}
                          </label>
                        ))}
                      </div>
                      <div className="flex justify-end mt-4 gap-4 p-2">
                        <button
                          onClick={clearAllCategories}
                          className="text-light-gray text-[16px] leading-[17px] font-normal"
                        >
                          Clear all
                        </button>
                        <button
                          onClick={applyCategories}
                          className="text-[#022D42] text-[16px] leading-[17px] font-medium"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Expand Map Button */}
              <button
                className="flex items-center justify-center font-normal text-[14px] leading-[15px] gap-3 text-[#074A6A] border border-basic rounded-70 px-3 py-1 h-[36px] w-[143px]"
                onClick={toggleExpand}
              >
                Expand Map
                <BsArrowsAngleExpand />
              </button>
            </div>
          </div>

          {/* Conditionally Render Expand Component */}
          {isExpandOpen && (
            <div className="p-4">
              <Expand />
            </div>
          )}


          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-2">
            {showData.map((data) => (
              <Property key={data.id} {...data} />
            ))}
          </div>
        </div>



      </div>






    </div>

  );
};

export default ListingPage;
