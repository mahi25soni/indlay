"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";
const Navbar = () => {
  const [tabs, setTabs] = useState([""]);

  useEffect(() => {
    setTabs([
      "Industrial Plots",
      "Resale Properties",
      "Parks",
      "Services",
      "Contact us",
    ]);
  }, []);
  return (
    <div className="h-[142px] px-15">
      <div className="flex h-[88px] items-center justify-between">
        <Image src="/logo.png" alt="Logo" width={118} height={48}  />
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
      <div className="flex h-[54px] items-center gap-8 border-b border-basic">
        {tabs.map((tab) => (
          <NavbarTab tab_name={tab} />
        ))}
      </div>
    </div>
  );
};

const NavbarTab = ({ tab_name }: { tab_name: string }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="flex h-full flex-1 cursor-pointer items-center justify-between border-t-2 border-transparent transition-all duration-300 ease-in-out hover:border-cta-darker"
    >
      <div>{tab_name}</div>
      <div
        className={`transform transition-transform duration-300 ease-in-out ${
          isHover ? "rotate-90" : "rotate-0"
        }`}
      >
        { <GoArrowUpRight />}
      </div>
    </div>
  );
};

export default Navbar;
