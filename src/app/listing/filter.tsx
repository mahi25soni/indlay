"use client";
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

type FilterSection = 
    | 'location' 
    | 'plotSize' 
    | 'industrialUnit' 
    | 'airportDistance' 
    | 'highwayDistance' 
    | 'portDistance' 
    | 'railwayDistance' 
    | 'coreInfrastructure' 
    | 'socialInfrastructure' 
    | 'amenities' 
    | 'parkOwnerships';

const Filter = () => {
    const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
    const [selectedPlotSize, setSelectedPlotSize] = useState<string[]>([]);
    const [selectedIndustrialUnit, setSelectedIndustrialUnit] = useState<string[]>([]);

    const [openSections, setOpenSections] = useState<Record<FilterSection, boolean>>({
        location: true,
        plotSize: true,
        industrialUnit: true,
        airportDistance: false,
        highwayDistance: false,
        portDistance: false,
        railwayDistance: false,
        coreInfrastructure: false,
        socialInfrastructure: false,
        amenities: false,
        parkOwnerships: false,
    });

    const toggleSelection = (item: string, selectedItems: string[], setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(i => i !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const toggleSection = (section: FilterSection) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className="relative w-[320px] h-[674px] bg-[#FBFBFB] p-4 overflow-y-auto">
            <div className="mb-6 gap-3">
                <p className="text-[14px] font-normal leading-[15px] flex justify-between cursor-pointer" onClick={() => toggleSection('location')}>
                    Filter by location
                    {openSections.location ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                </p>
                {openSections.location && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {['Andra Pradesh', 'Gujarat', 'Haryana', 'Karnataka', 'Kerela'].map((location) => (
                            <button
                                key={location}
                                onClick={() => toggleSelection(location, selectedLocation, setSelectedLocation)}
                                className={`${selectedLocation.includes(location) ? 'bg-primary text-white ' : ' border-basic'} border border-basic px-3 py-1 rounded-70 text-xs font-normal`}
                            >
                                {location}
                            </button>
                        ))}
                        <button className="text-[#9B9EA6] px-3 py-1 rounded-70 text-[12px] leading-[13px] font-normal">+ Show more</button>
                    </div>
                )}
            </div>

            <div className="mb-6">
                <p className="text-[14px] font-normal leading-[15px] flex justify-between cursor-pointer" onClick={() => toggleSection('plotSize')}>
                    Filter by plot size
                    {openSections.plotSize ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                </p>
                {openSections.plotSize && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {['< 1 acre', '1 - 5 acres', '5 - 10 acres', '10 - 15 acres', '> 15 acres'].map((size) => (
                            <button
                                key={size}
                                onClick={() => toggleSelection(size, selectedPlotSize, setSelectedPlotSize)}
                                className={`${selectedPlotSize.includes(size) ? 'bg-primary text-white' : ' border-basic'} border border-basic px-3 py-1 rounded-70 text-[12px] leading-[13px]`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="mb-6">
                <p className="text-[14px] font-normal leading-[15px] flex justify-between cursor-pointer" onClick={() => toggleSection('industrialUnit')}>
                    Type of industrial unit
                    {openSections.industrialUnit ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                </p>
                {openSections.industrialUnit && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {['Automobile Park', 'Bio Technology Park', 'Chemical Park', 'Engineering Park', 'Food and Agri Park'].map((unit) => (
                            <button
                                key={unit}
                                onClick={() => toggleSelection(unit, selectedIndustrialUnit, setSelectedIndustrialUnit)}
                                className={`${selectedIndustrialUnit.includes(unit) ? 'bg-primary text-white' : ' border-basic'} border border-basic px-3 py-1 rounded-70 text-xs font-normal`}
                            >
                                {unit}
                            </button>
                        ))}
                        <button className=" px-3 py-1 rounded-70 text-[12px] leading-[13px] font-normal text-[#9B9EA6]">+ 7 selected</button>
                    </div>
                )}
            </div>

            {([
                { key: 'airportDistance', label: 'Distance from airport' },
                { key: 'highwayDistance', label: 'Distance from highway' },
                { key: 'portDistance', label: 'Distance from port' },
                { key: 'railwayDistance', label: 'Distance from railway station' },
                { key: 'coreInfrastructure', label: 'Core infrastructure' },
                { key: 'socialInfrastructure', label: 'Social infrastructure' },
                { key: 'amenities', label: 'Amenities' },
                { key: 'parkOwnerships', label: 'Park ownerships' },
            ] as { key: FilterSection; label: string }[]).map((filter) => (
                <div key={filter.key} className="mb-6 gap-4 ">
                    <p className="text-[14px] leading-[15px] font-normal h-[40px] flex justify-between cursor-pointer" onClick={() => toggleSection(filter.key)}>
                        {filter.label}
                        {openSections[filter.key] ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                    </p>
                    {openSections[filter.key] && (
                        <div className="mt-2">
                            <p>Filter content for {filter.label}</p>
                        </div>
                    )}
                </div>
            ))}

            <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                <button className="bg-gray-200 font-normal text-[14px] leading-[15px] px-4 py-2 rounded-70 w-[134px]">Reset filters</button>
                <button className="bg-[#074A6A] text-white font-normal text-[14px] leading-[15px] px-4 py-2 rounded-70 w-[134px]">Apply</button>
            </div>
        </div>
    );
};

export default Filter;
