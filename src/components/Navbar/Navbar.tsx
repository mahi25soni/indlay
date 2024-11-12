"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";
import { navbarTabData } from "@/testdata/navbar-test-data";

import dynamic from "next/dynamic";
import CompareList from "../CompareList/CompareList";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TabsMobileView from "./TabsMobileView";
const SearchBar = dynamic(() => import("@/components/SearchBar/SearchBar"));
interface TabData {
  image: string;
  sections: {
    heading: string;
    subheadings: string[];
  }[];
}
interface Tabs {
  [key: string]: TabData; // This allows any string key to map to the TabData type
}
const tabData: Tabs = navbarTabData;

const Navbar = () => {
  const [tabs, setTabs] = useState<Tabs>({});
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [openComparePopUp, setOpenComparePopUp] = useState<boolean>(false);
  const [openSideTabBar, setOpenSideTabBar] = useState<boolean>(false);
  const router = useRouter()

  useEffect(() => {
    setTabs(tabData);
  }, []);
  return (
    <div className="sticky top-0 z-999 bg-[--bg-color]">
      {openComparePopUp && <CompareList onClose={() => setOpenComparePopUp(false)} />}
      {openSideTabBar && <TabsMobileView onClose={() => setOpenSideTabBar(false)} />}
      <div
        className={`h-[68px] lg:h-[142px] border-basic lg:py-0 lg:px-15 px-5 pt-5 pb-3 ${hoveredTab ? "border-none" : "border-b"}`}
      >
        <div className="flex h-9 lg:h-[88px] items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={118}
              height={48}
              priority={true}
            />
          </Link>
          <SearchBar height={56} icon_size={48} />

          <div className="flex h-9 lg:h-[88px]   font-normal gap-2 lg:gap-0">
            <div className="lg:hidden w-9 lg:w-full flex items-center justify-center lg:gap-3 lg:px-3 text-base text-cta-darker bg-basic lg:bg-transparent rounded-full lg:rounded-none cursor-pointer">
              <FaSearch className="lg:h-6 lg:w-6 h-5 w-5" />
            </div>

            <div className="w-9 lg:w-full flex items-center justify-center lg:gap-3 lg:px-3 text-base text-cta-darker bg-basic lg:bg-transparent rounded-full lg:rounded-none cursor-pointer" onClick={() => {
              setOpenComparePopUp(!openComparePopUp);
            }}>
              <FaCodeCompare className="lg:h-6 lg:w-6 h-5 w-5" />
              <div className="hidden lg:block">Compare</div>
            </div>
            <div className="w-9 lg:w-full flex items-center justify-center lg:gap-3 lg:px-3 text-base text-cta-darker bg-basic lg:bg-transparent rounded-full lg:rounded-none cursor-pointer" onClick={() => setOpenSideTabBar(!openSideTabBar)}>
              <FaRegUserCircle className="lg:h-6 lg:w-6 h-5 w-5" />
              <div className="hidden lg:block">Login/Signup</div>

            </div>
          </div>
        </div>
        <div className="hidden relative lg:flex h-[54px] items-center gap-8">
          {Object.keys(tabs).map((tab_name) => (
            <NavbarTab
              key={tab_name}
              tab_name={tab_name}
              hoveredTab={hoveredTab}
              setHoveredTab={setHoveredTab}
            />
          ))}
          <div className="flex h-full flex-1 cursor-pointer items-center justify-between border-t-2 border-transparent transition-all duration-300 ease-in-out hover:border-cta-darker" onClick={() => router.push('/contact')}>
            <div>Contact Us</div>
            <div>{<GoArrowUpRight />}</div>
          </div>



        </div>
      </div>
      {hoveredTab && (
        <div
          className="absolute z-50 grid h-80 max-h-80 w-full transform grid-cols-12 gap-10 rounded-20 border-b border-basic bg-[--bg-color] px-15 py-2 transition-all duration-300 ease-in-out"
          onMouseEnter={() => setHoveredTab(hoveredTab)}
          onMouseLeave={() => setHoveredTab(null)}
        >
          <div className="col-span-8 flex max-h-80 flex-col flex-wrap gap-10 overflow-auto">
            {tabs[hoveredTab].sections.map((section) => {
              return (
                <div key={section.heading}>
                  <div className="mb-3 cursor-pointer text-xl font-medium">
                    {section?.heading}
                  </div>
                  {section?.subheadings?.map((subheading) => {
                    return (
                      <p className="cursor-pointer text-[#72798A]">
                        {subheading}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <div className="relative col-span-4 flex justify-end p-3">
            <Image
              src={tabs[hoveredTab]?.image}
              alt="Navbar tab image"
              fill
              className="rounded-20 object-cover" // Adjust this as needed
            />
          </div>
        </div>
      )}
    </div>
  );
};

const NavbarTab = ({
  tab_name,
  hoveredTab,
  setHoveredTab,
}: {
  tab_name: string;
  hoveredTab: string | null;
  setHoveredTab: (tab: string | null) => void;
}) => {
  return (
    <>
      <div
        onMouseEnter={() => setHoveredTab(tab_name)}
        onMouseLeave={() => setHoveredTab(null)}
        className="flex h-full flex-1 cursor-pointer items-center justify-between border-t-2 border-transparent transition-all duration-300 ease-in-out hover:border-cta-darker"
      >
        <div>{tab_name}</div>
        <div
          className={`transform transition-transform duration-300 ease-in-out ${hoveredTab === tab_name ? "rotate-90" : "rotate-0"
            }`}
        >
          {<GoArrowUpRight />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
