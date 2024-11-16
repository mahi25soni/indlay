"use client";
import React from "react";
import Image from "next/image";

const CollectionItem = () => {
  return (
    <div>
      {/* desktop  */}
      <div className="mt-6 hidden w-full gap-4 lg:flex lg:flex-wrap">
        {/* Card 1 */}
        <div className="min-w-[300px] flex-1 gap-2">
          <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
            <div className="relative col-span-2 min-h-[180px] w-full overflow-hidden rounded-[20px] bg-[#C6F8FF] sm:col-span-1 sm:min-h-[200px] lg:col-span-2">
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

            <div className="relative h-[276px] w-full overflow-hidden rounded-[20px] bg-[#F9D5FF]">
              <div className="flex h-full flex-col">
                <p className="mx-auto mt-7 min-h-[54px] min-w-[103px] text-center text-[24px] font-medium leading-[26.88px] text-[#44004F]">
                  Category Name
                </p>
                <Image
                  src="/collection2.png"
                  alt="Logo"
                  width={322}
                  height={92}
                  className="mt-auto"
                />
              </div>
            </div>

            <div className="relative h-[276px] w-full overflow-hidden rounded-[20px] bg-[#E8DFFF]">
              <div className="flex h-full flex-col">
                <p className="mx-auto mt-7 min-h-[54px] min-w-[103px] text-center text-[24px] font-medium leading-[26.88px] text-[#44004F]">
                  Category Name
                </p>
                <Image
                  src="/collection3.png"
                  alt="Logo"
                  width={393}
                  height={263}
                  className="mt-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="h-[470px] min-w-[300px] flex-1 rounded-[20px] bg-[#FFE4DE]">
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
        <div className="flex min-w-[300px] flex-1 flex-col">
          <div className="relative flex min-h-[300px] w-full flex-col items-center justify-between rounded-[20px] bg-[#C8FFEE] p-4">
            <p className="mx-auto h-[54px] w-[103px] text-center text-[24px] font-medium leading-[26.88px] text-[#44004F]">
              Category Name
            </p>
            <Image
              src="/collection5.png"
              alt="Logo"
              width={586}
              height={389}
              className="absolute bottom-0 h-auto w-full rounded-[20px] object-contain"
            />
          </div>

          <div className="mt-4 h-[156px] w-full rounded-[20px] bg-[#C8F2FF]">
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

      {/* mobile  */}
      <div className="mt-6 flex w-full flex-wrap gap-4 lg:hidden ">
        {/* card 1 */}
        <div className="relative col-span-2 min-h-[180px] w-full overflow-hidden rounded-[20px] bg-[#C6F8FF] sm:col-span-1 sm:min-h-[200px] lg:col-span-2">
          <div className="relative z-10 flex h-full items-center justify-between px-4">
            <p className="h-[54px] w-[86px] text-[20px] font-medium leading-[22.4px] text-[#00343C]">
              Category Name
            </p>
            <div className="flex-shrink-0">
              <Image
                src="/collection1-mob.png"
                alt="Logo"
                width={288}
                height={357}
                className="absolute -bottom-2 right-0 h-auto"
              />
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="relative h-[180px] w-full overflow-hidden rounded-[20px] bg-[#F9D5FF]">
          <div className="flex h-full flex-col">
            <p className="mx-auto mt-7 min-h-[54px] min-w-[86px] text-center text-[20px] font-medium leading-[22.4px] text-[#44004F]">
              Category Name
            </p>
            <Image
              src="/collection2-mob.png"
              alt="Logo"
              width={392}
              height={112}
              className="mt-auto"
            />
          </div>
        </div>

        {/* card3  */}
        <div className="relative h-[180px] w-full overflow-hidden rounded-[20px] bg-[#E8DFFF]">
          <div className="flex h-full flex-col">
            <p className="mx-auto mt-7 text-center text-[20px] font-medium leading-[22.4px] text-[#44004F]">
              Category Name
            </p>
            <Image
              src="/collection3-mob.png"
              alt="Logo"
              width={349}
              height={233}
              className="absolute right-0 top-0 mt-auto w-full"
            />
          </div>
        </div>

        {/* card 4 */}
        <div className="h-[180px] flex-1 rounded-[20px] bg-[#FFE4DE]">
          <div className="flex h-full flex-col">
            <p className="mx-auto mt-6 h-[27px] w-[172px] text-[20px] font-medium leading-[22.4px] text-[#4B0F01]">
              Category Name
            </p>
            <Image
              src="/collection4-mob.png"
              alt="Logo"
              width={366}
              height={248}
              className="mt-auto h-[60%] w-full rounded-b-[20px] object-cover"
            />
          </div>
        </div>

        {/* card 5 */}
        <div className="relative flex min-h-[180px] w-full flex-col items-center justify-between rounded-[20px] bg-[#C8FFEE] p-4">
          <p className="mx-auto h-[54px] w-[103px] text-center text-[20px] font-medium leading-[22.4px] text-[#44004F]">
            Category Name
          </p>
          <Image
            src="/collection5-mob.png"
            alt="Logo"
            width={380}
            height={251}
            className="absolute bottom-0 h-auto w-full rounded-[20px] object-contain"
          />
        </div>

        {/* card 6  */}
        <div className="mt-4 h-[180px] w-full rounded-[20px] bg-[#C8F2FF]">
            <div className="relative z-10 flex h-full items-center justify-between px-4">
              <p className="h-[54px] w-[103px] text-[20px] font-medium leading-[22.4px] text-[#00343C]">
                Category Name
              </p>
              <div className="h-full flex-shrink-0">
                <Image
                  src="/collection6-mob.png"
                  alt="Logo"
                  width={192}
                  height={290}
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
