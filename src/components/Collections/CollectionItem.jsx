"use client";
import React from "react";
import Image from "next/image";

const CollectionItem = () => {
  return (
    <div className="mt-7 flex gap-4">
      {/* Card 1 */}
      <div className="max-h-full gap-2">
        <div className="grid max-w-full grid-cols-2 gap-2">
          <div className="relative col-span-2 h-[180px] w-[477px] overflow-hidden rounded-[20px] bg-[#C6F8FF]">
            <div className="relative z-10 flex h-full items-center justify-between px-4">
              <p className="h-[54px] w-[103px] text-[24px] font-medium leading-[26.88px] text-[#00343C]">
                Category Name
              </p>
              <div className="flex-shrink-0">
                <Image
                  src="/collection1.png"
                  alt="Logo"
                  width={268}
                  height={333}
                  className="absolute bottom-0 right-0 h-auto"
                />
              </div>
            </div>
          </div>

          <div className="relative h-[276px] w-[226px] overflow-hidden rounded-[20px] bg-[#F9D5FF]">
            <div className="flex h-full flex-col">
              <p className="mx-auto mt-7 h-[54px] w-[103px] text-center text-[24px] font-medium leading-[26.88px] text-[#44004F]">
                Category Name
              </p>
              <Image
                src="/collection2.png"
                alt="Logo"
                width={322}
                height={92}
                className="absolute top-[190px] h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="relative h-[276px] w-[226px] overflow-hidden rounded-[20px] bg-[#E8DFFF]">
            <div className="flex h-full flex-col">
              <p className="mx-auto mt-7 h-[54px] w-[103px] text-center text-[24px] font-medium leading-[26.88px] text-[#44004F]">
                Category Name
              </p>
              <Image
                src="/collection3.png"
                alt="Logo"
                width={393}
                height={263}
                className="absolute top-[28px] h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="h-[480px] w-[477px] rounded-[20px] bg-[#FFE4DE]">
        <div className="flex h-full flex-col">
          <p className="mx-auto mt-6 h-[27px] w-[172px] text-[24px] font-medium leading-[26px] text-[#4B0F01]">
            Category Name
          </p>

          <Image
            src="/collection4.png"
            alt="Logo"
            width={568}
            height={380}
            className="mt-auto h-[60%] w-full rounded-b-[20px] object-cover"
          />
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col">
        <div className="relative flex h-[300px] w-[318px] flex-col items-center justify-between rounded-[20px] bg-[#C8FFEE] p-4">
          <p className="mx-auto h-[54px] w-[103px] text-center text-[24px] font-medium leading-[26.88px] text-[#44004F]">
            Category Name
          </p>
          <Image
            src="/collection5.png"
            alt="Logo"
            width={586}
            height={389}
            className="absolute bottom-0 h-full w-full rounded-[20px] object-contain"
          />
        </div>

        <div className="mt-4 h-[156px] w-[322px] rounded-[20px] bg-[#C8F2FF]">
          <div className="relative z-10 flex h-full items-center justify-between px-4">
            <p className="h-[54px] w-[103px] text-[24px] font-medium leading-[26.88px] text-[#00343C]">
              Category Name
            </p>
            <div className="h-full flex-shrink-0">
              <Image
                src="/collection6.png"
                alt="Logo"
                width={192}
                height={210}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;