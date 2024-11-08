"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { listingTestData } from "@/testdata/listing-data";
import SelectingFilters from "@/components/atoms/SelectingFilters/SelectingFilters";
import Image from "next/image";
import ExpandedMap from "@/components/ExpandedMap/ExpandedMap";

const Filter = dynamic(() => import("@/app/listing/filter"));
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

  const backToListing = () => {
    setIsExpandOpen(false);
  }
  return (
    <div>
      {/* Conditionally Render Expand Component */}
      {isExpandOpen ? (
          <ExpandedMap  backToListing={backToListing}/>
      ) : <div className="flex">
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

            <div className="flex items-center gap-4 h-9">
              {/* Order by Dropdown */}
              <div className="relative flex items-center text-[14px] leading-[15.68px] text-light-gray cursor-pointer justify-center ">
                <span
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1"
                >
                  <span>Order by :</span>

                  <span className=" text-black">
                    {orderBy}
                  </span>
                  <MdOutlineKeyboardArrowDown className="w-4 h-4 text-black" />
                </span>
                {isDropdownOpen && (
                  <div
                    className="absolute top-full mt-2 bg-white p-2 z-10 min-w-[180px] w-full rounded-xl gap-3 text-[14px] leading-[15px] transition-all duration-300 ease-out disolve"
                    style={{ boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.04)" }}
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
              <div className="relative h-[56px] flex items-center text-[14px]  cursor-pointer">
                <div
                  onClick={() =>
                    setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                  }
                  className="flex items-center gap-4 h-16 "
                >
                  <div>All categories</div>
                  <Image src="/Arrow-down-simple.svg" alt="Filter" height={16} width={16} />

                </div>
                {isCategoryDropdownOpen && (
                  <SelectingFilters heading='Categories' id='categories' width="420px" options={categories} selectedItems={selectedCategories} selectItem={toggleCategory} clearAll={clearAllCategories} applyFilter={applyCategories} onClose={() => setIsCategoryDropdownOpen(false)} />
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




          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-2">
            {showData.map((data) => (
              <Property key={data.id} {...data} />
            ))}
          </div>
        </div>



      </div>}







    </div>

  );
};

export default ListingPage;
