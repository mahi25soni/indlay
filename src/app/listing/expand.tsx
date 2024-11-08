"use client";
import React from 'react';
import { BsArrowsAngleExpand } from "react-icons/bs";

const Expand = () => {
  return (
    <div className=" bg-white z-50 flex ">
        <div className='h-14 min-w-[1440px] w-full'>
            <p>Showing 20 results</p>
            <button
              className="flex items-center justify-center font-normal text-[14px] leading-[15px] gap-3 text-[#074A6A] border border-basic rounded-70 px-3 py-1 h-[36px] w-[143px]"
            
            >
              Back to listing
              <BsArrowsAngleExpand />
            </button>
        </div>
    </div>
  );
};

export default Expand;
