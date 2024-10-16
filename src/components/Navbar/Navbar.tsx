"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";
import { navbarTabData } from "@/testdata/navbar-test-data";

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

  useEffect(() => {
    setTabs(tabData);
  }, []);
  return (
    <div className="relative">
      <div
        className={`h-[142px] border-basic px-15 ${hoveredTab ? "border-none" : "border-b"}`}
      >
        <div className="flex h-[88px] items-center justify-between">
          <Image src="/logo.png" alt="Logo" width={118} height={48} />
          <SearchBar height={56} icon_size={48} />

          <div className="flex h-[48px] font-normal">
            <div className="flex items-center justify-center gap-3 px-3 text-base text-cta-darker">
              <FaCodeCompare className="h-6 w-6" />
              <div>Compare</div>
            </div>
            <div className="flex items-center justify-center gap-3 px-3 text-base text-cta-darker">
              <FaRegUserCircle className="h-6 w-6" />
              <div>Login/Signup</div>
                
            </div>
          </div>
        </div>
        <div className="relative flex h-[54px] items-center gap-8">
          {Object.keys(tabs).map((tab_name) => (
            <NavbarTab
              key={tab_name}
              tab_name={tab_name}
              hoveredTab={hoveredTab}
              setHoveredTab={setHoveredTab}
            />
          ))}
        </div>
      </div>
      {hoveredTab && (
        <div className="absolute z-20 flex h-80 w-full transform gap-10 bg-[--bg-color] px-15 transition-all duration-300 ease-in-out max-h-[350px] ">
          {tabs[hoveredTab].sections.map((section) => {
            return (
              <div key={section.heading}>
                <div className="mb-3 text-xl font-medium">
                  {section?.heading}
                </div>
                {section?.subheadings?.map((subheading) => {
                  return <p className="text-[#72798A]">{subheading}</p>;
                })}
              </div>
            );
          })}
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
          className={`transform transition-transform duration-300 ease-in-out ${
            hoveredTab === tab_name ? "rotate-90" : "rotate-0"
          }`}
        >
          {<GoArrowUpRight />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
