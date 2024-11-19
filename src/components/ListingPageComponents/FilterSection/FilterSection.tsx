"use client";
import { FiltersSampleData, nameToLabel } from '@/testdata/filters-data';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';



const FilterData: { [key: string]: string[] } = FiltersSampleData

const FilterSection = ({ height }: { height: string }) => {
    const [filterData, setFilterData] = useState<{ [key: string]: string[] }>({});
    useEffect(() => {
        setFilterData(FilterData);
    }, []);


    const [openedSectionList, setOpenedSectionList] = useState<string[]>([]);
    const [selectedFilterList, setSelectedFilterList] = useState<string[]>([]);


    const handleSectionDropdown = (section: string) => {
        if (openedSectionList.includes(section)) {
            setOpenedSectionList(openedSectionList.filter(item => item !== section));
        } else {
            setOpenedSectionList([...openedSectionList, section]);
        }
    }

    const handleFilter = (filter: string) => {
        if (selectedFilterList.includes(filter)) {
            setSelectedFilterList(selectedFilterList.filter(item => item !== filter));
        } else {
            setSelectedFilterList([...selectedFilterList, filter]);
        }
    }


    return (
        <div className="flex flex-col justify-between bg-[#FBFBFB] overflow-y-auto scrollbar-hidden px-5 lg:px-0" style={{
            height: `${height}`
        }}>
            <div className='flex flex-col overflow-y-auto scrollbar-hidden'>
                {Object.keys(filterData)?.map((filterSection, index) => {
                    return <div>
                        <div className="text-sm font-normal leading-[15.68px] flex justify-between cursor-pointer h-10 items-center" onClick={() => handleSectionDropdown(filterSection)}>
                            {nameToLabel[filterSection]}
                            <Image src="/Arrow-down-simple.svg" alt='Arrow down ' height={16} width={16} />
                        </div>
                        {openedSectionList?.includes(filterSection) && <div className="flex flex-wrap gap-2 mb-3">
                            {filterData[filterSection]?.slice(0, 5).map((element, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleFilter(element)}
                                    className={`${selectedFilterList?.includes(element) ? 'bg-primary text-white ' : ' border-basic'} border border-basic px-3 py-1 rounded-70 text-xs font-normal`}
                                >
                                    {element}
                                </button>
                            ))}
                            <button className="text-[#9B9EA6] px-3 py-1 rounded-70 text-[12px] leading-[13px] font-normal">+ Show more</button>
                        </div>}


                    </div>
                })}


            </div>

            <div className="sticky bottom-0 w-full min-h-[68px] bg-white flex justify-center gap-3 items-center">
                <button className="bg-gray-200 font-normal text-[14px] leading-[15px] px-4 py-2 rounded-70 w-[134px]">Reset filters</button>
                <button className="bg-[#074A6A] text-white font-normal text-[14px] leading-[15px] px-4 py-2 rounded-70 w-[134px]">Apply</button>
            </div>
        </div>
    );
};

export default FilterSection;
