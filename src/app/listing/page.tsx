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
import { div } from "framer-motion/client";
import { CompareListSampleData } from "@/testdata/compare-list-data";
import OverLay from "@/components/atoms/OverLay";

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
  areaSize: string;
  developerName: string;
  propertyType: string;
  description: string;
  date: string;
  price: string;
  category: string;
  details: string;
  images?: { id: string; url: string }[];
  coordinates: {
    lat: number;
    lng: number;
  };
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
  const [listData, setListData] = useState<ListValueData[]>([]);
  const [selectedIndividualProperty, setSelectedIndividualProperty] =
    useState<ListValueData>();

  const [openFilterTab, setOpenFilterTab] = useState<boolean>(false);

  useEffect(() => {
    setListData(CompareListSampleData);
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

  const selectPropertyToCompare = (id: string) => {
    const fProperty = listData?.find((property) => property.id === id);
    if (fProperty !== undefined) {
      setSelectedIndividualProperty(fProperty);
    }
  };

  const closeSelectedProperty = () => {
    setSelectedIndividualProperty(undefined);
  };

  return (
    <div className="default">
      {/* Conditionally Render Expand Component */}
      {openFilterTab && <OverLay>
        <div className="absolute right-0 top-0 z-1000 h-screen lg:w-[440px] w-[330px] bg-white">
          <div className="relative h-full">
            <div className="flex h-[56px] items-center border-b border-basic p-5 text-base font-medium leading-[17.92px]">
              Filters
            </div>
            <FilterSection height={"calc(100vh - 56px)"} />
            <div className='absolute left-[-60px] bg-cta top-1/2 h-12 w-12 rounded-full flex justify-center items-center text-white' style={{
              boxShadow: "0px 0 30px rgba(2, 45, 66, 0.75)",
            }} onClick={() => setOpenFilterTab(false)}>
              <Image src="/close.svg" height={24} width={24} alt='Arrow-left' className='text-white' />
            </div>
          </div>
        </div>
      </OverLay>}

      {isExpandOpen ? (
        <ExpandedMap backToListing={backToListing} propertyList={listData} />
      ) : selectedIndividualProperty ? (
        <IndividualProperty
          property={selectedIndividualProperty}
          onClose={closeSelectedProperty}
        />
      ) : (
        <>
          <div className="flex">
            {/* Left */}
            <div className="hidden w-[320px] px-5 lg:block">
              <div className="flex h-[56px] w-full items-center border-b border-basic bg-white">
                <p className="text-base font-medium leading-[17px]">Filters</p>
              </div>
              <FilterSection height="h-[618px]" />
            </div>

            {/* Right */}
            <div className="w-full  border-l border-basic">
              <div className="flex h-[56px] items-center justify-end lg:justify-between border-b border-basic bg-secondary lg:p-3 p-5">
                <p className="hidden text-[14px] font-medium leading-[15px] lg:block">
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

                      <div className="flex items-center gap-3">

                        <span className="text-black">{orderBy}</span>
                        <Image
                          src="/Arrow-down-simple.svg"
                          alt="Filter"
                          height={16}
                          width={16}
                        />
                      </div>
                    </span>
                    {isDropdownOpen && (
                      <div
                        className="disolve absolute top-full z-10 mt-2 w-full min-w-[180px] gap-3 rounded-xl bg-white p-2 text-[14px] leading-[15px] transition-all duration-300 ease-out"
                        style={{
                          boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.04)",
                        }}
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
                    className="hidden lg:flex h-[36px] w-[143px] items-center justify-center gap-3 rounded-70 border border-basic px-3 py-1 text-[14px] font-normal leading-[15px] text-[#074A6A]"
                    onClick={toggleExpand}
                  >
                    Expand Map
                    <BsArrowsAngleExpand />
                  </button>
                </div>
              </div>

              <div className="scrollbar-hidden grid h-full lg:h-[618px] grid-cols-1 gap-6 overflow-y-auto p-5 lg:grid-cols-2 lg:p-2 xl:grid-cols-3">
                {listData?.map((data) => (
                  <VerticalProperty
                    key={data.id}
                    {...data}
                    onPropertyClick={selectPropertyToCompare}
                  />
                ))}
              </div>
            </div>

            <div className='fixed right-5 bg-cta-darker top-1/2 h-12 w-12 rounded-full flex justify-center items-center text-white z-300 lg:hidden' style={{
              boxShadow: "0px 0 30px rgba(2, 45, 66, 0.7)",
            }} onClick={() => setOpenFilterTab(true)}>
              <Image src="/FilterIcon.svg" height={24} width={24} alt='Arrow-left' className='text-white' />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListingPage;
