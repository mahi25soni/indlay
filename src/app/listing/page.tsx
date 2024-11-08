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
import ExpandedMap from "@/components/ListingPageComponents/ExpandedMap/ExpandedMap";
import FilterSection from "@/components/ListingPageComponents/FilterSection/FilterSection";
import VerticalProperty from "@/components/Listing/VerticalProperty";
import IndividualProperty from "@/components/ListingPageComponents/IndividualProperty/IndividualProperty";

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
        : [...prev, category],
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
  };
  return (
    <div>
      {/* Conditionally Render Expand Component */}
      {isExpandOpen ? (
        <ExpandedMap backToListing={backToListing} />
      ) : (
        <>
          <div className="flex">
            {/* Left */}
            <div className="w-[320px] px-5">
              <div className="flex h-[56px] w-full items-center border-b border-basic bg-white">
                <p className="text-base font-medium leading-[17px]">Filters</p>
              </div>
              <FilterSection />
            </div>

            {/* Right */}
            <div className="w-full min-w-[1120px] border-l border-basic">
              <div className="flex h-[56px] items-center justify-between border-b border-basic bg-secondary p-3">
                <p className="text-[14px] font-medium leading-[15px]">
                  Showing 20 results
                </p>

                <div className="flex h-9 items-center gap-4">
                  {/* Order by Dropdown */}
                  <div className="relative flex cursor-pointer items-center justify-center text-[14px] leading-[15.68px] text-light-gray">
                    <span
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-1"
                    >
                      <span>Order by :</span>

                      <span className="text-black">{orderBy}</span>
                      <MdOutlineKeyboardArrowDown className="h-4 w-4 text-black" />
                    </span>
                    {isDropdownOpen && (
                      <div
                        className="disolve absolute top-full z-10 mt-2 w-full min-w-[180px] gap-3 rounded-xl bg-white p-2 text-[14px] leading-[15px] transition-all duration-300 ease-out"
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
                            className="flex cursor-pointer items-center p-2 text-black"
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

                  <div className="relative flex h-[56px] cursor-pointer items-center text-[14px]">
                    <div
                      onClick={() =>
                        setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                      }
                      className="flex h-16 items-center gap-4"
                    >
                      <div>All categories</div>
                      <Image
                        src="/Arrow-down-simple.svg"
                        alt="Filter"
                        height={16}
                        width={16}
                      />
                    </div>
                    {isCategoryDropdownOpen && (
                      <SelectingFilters
                        heading="Categories"
                        id="categories"
                        width="420px"
                        options={categories}
                        selectedItems={selectedCategories}
                        selectItem={toggleCategory}
                        clearAll={clearAllCategories}
                        applyFilter={applyCategories}
                        onClose={() => setIsCategoryDropdownOpen(false)}
                      />
                    )}
                  </div>

                  <button
                    className="flex h-[36px] w-[143px] items-center justify-center gap-3 rounded-70 border border-basic px-3 py-1 text-[14px] font-normal leading-[15px] text-[#074A6A]"
                    onClick={toggleExpand}
                  >
                    Expand Map
                    <BsArrowsAngleExpand />
                  </button>
                </div>
              </div>

              <div className="scrollbar-hidden grid h-[618px] grid-cols-1 gap-6 overflow-y-auto p-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {showData.map((data) => (
                  <VerticalProperty key={data.id} {...data} />
                ))}
              </div>
            </div>


          </div>
          {/* Right side pop up */}
          <IndividualProperty />
        </>
      )}
    </div>
  );
};

export default ListingPage;
