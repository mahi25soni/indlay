import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import OverLay from "../atoms/OverLay";

interface props {
  onClose: () => void;
}
const CompareList = (data: props) => {
  return (
    <OverLay>

      <div className="absolute right-0 top-0 z-1000 h-screen lg:w-[440px] w-[330px] bg-white">
        <div className="relative h-full">
          <div className="flex h-[56px] items-center border-b border-basic p-5 text-base font-medium leading-[17.92px]">
            Compare List
          </div>
          <div className="scrollbar-hidden flex h-full flex-col gap-3 overflow-auto p-5">
            <ComparableItem />
            <ComparableItem />

            <ComparableItem />

            <ComparableItem />

            <ComparableItem />
            <ComparableItem />

            <ComparableItem />

            <ComparableItem />

            <ComparableItem />
            <ComparableItem />

            <ComparableItem />

            <ComparableItem />

            <ComparableItem />
            <ComparableItem />

            <ComparableItem />

            <ComparableItem />
          </div>
          <div className="sticky bottom-0 flex h-[72px] w-full items-center justify-end border-t border-basic bg-white">
            <div className="flex h-9 justify-end gap-3 pr-5">
              <button className="flex flex-1 items-center justify-center gap-3 rounded-70 border border-cta bg-cta px-3 py-2 text-secondary">
                <p className="text-sm leading-[15.68xp]">Add more</p>
                <IoMdAdd className="h-5 w-5 hidden lg:block" />
              </button>
              <Link href="/compare" onClick={data?.onClose}>
                <button className="flex flex-1 items-center justify-center gap-3 rounded-70 border border-basic bg-basic px-3 py-2">
                  <p className="whitespace-nowrap text-sm leading-[15.68xp]">
                    Compare the properites
                  </p>
                  <GoArrowUpRight className="h-5 w-5 hidden lg:block" />
                </button>
              </Link>

            </div>
          </div>

          <div className='absolute left-[-60px] bg-cta top-1/2 h-12 w-12 rounded-full flex justify-center items-center text-white' style={{
            boxShadow: "0px 0 30px rgba(2, 45, 66, 0.75)",
          }} onClick={data?.onClose}>
            <Image src="/close.svg" height={24} width={24} alt='Arrow-left' className='text-white' />
          </div>
        </div>
      </div>
    </OverLay>

  );
};

const ComparableItem = () => {
  return (
    <div className="flex min-h-[90.68px] w-full flex-row rounded-2xl border border-basic">
      <div className="relative min-w-[100px]">
        <Image
          src={"/testing.jpg"}
          fill
          alt="Photo"
          className="rounded-l-2xl"
        />
      </div>
      <div className="flex w-full items-center justify-center lg:px-3">
        <div className="flex lg:h-10 h-[66px] w-full items-center justify-between px-3">
          <div className="flex h-full flex-col justify-between gap-2 ">
            <div className="lg:text-xl font-medium lg:leading-[22.4px] text-sm leading-[15.68px]">
              Solitaire Industrial Park
            </div>
            <div className="font-normal lg:leading-[15.68px] text-light-gray lg:text-sm text-xs leading-[13.44px]">
              28B Highgate Road, London
            </div>
          </div>
          <Image src={"/Bin.svg"} height={24} width={24} alt="Photo" />
        </div>
      </div>
    </div>
  );
};

export default CompareList;
