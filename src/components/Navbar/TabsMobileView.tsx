import { navbarTabData } from "@/testdata/navbar-test-data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

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

interface props {
    onClose: () => void;
}
const TabsMobileView = (data: props) => {
    const [tabs, setTabs] = useState<Tabs>({});
    const [selectedTab, setSelectedTab] = useState<string | null>(null);

    useEffect(() => {
        setTabs(tabData);
    });

    const handleTabSelection = (tab_name: string) => {
        if (selectedTab === tab_name) {
            setSelectedTab(null);
        }
        else {
            setSelectedTab(tab_name);
        }
    }

    return (
        <div className="absolute right-0 top-0 z-1000 h-[828px] w-[330px] bg-white">
            <div className="relative h-full">
                <div className="flex h-[56px] items-center justify-end border-b border-basic p-5 text-base font-medium leading-[17.92px]">
                    <RxCross2 className="w-6 h-6" onClick={data?.onClose} />
                </div>
                <div className="scrollbar-hidden flex h-[700px] flex-col gap-3 overflow-auto p-5">
                    {Object.keys(tabs).map((tab_name, index) => {
                        return (
                            <div>
                                <div
                                    className={`justify-between flex h-[42px] items-center border-b  border-basic w-full ${selectedTab === tab_name ? "border-transparent" : "borber-basic"}`}
                                    onClick={() => handleTabSelection(tab_name)}
                                >
                                    <div className="text-base font-medium leading-[17.92px]">
                                        {tab_name}
                                    </div>
                                    <div
                                        className={`transform transition-transform duration-300 ease-in-out ${selectedTab === tab_name ? "rotate-90" : "rotate-0"
                                            }`}
                                    >
                                        <GoArrowUpRight className="h-4 w-4" />
                                    </div>
                                </div>
                                {selectedTab === tab_name && (
                                    <div className="flex w-full flex-col items-start gap-3">
                                        {tabs[tab_name].sections.map((section, index) => {
                                            return (
                                                <div className="flex w-full flex-col gap-1">
                                                    <div className="mb-1 text-sm font-normal leading-[15.68px]">
                                                        {section.heading}
                                                    </div>
                                                    {section.subheadings.map((subheading, index) => {
                                                        return (
                                                            <div className="text-sm font-normal leading-[15.68px] text-[#72798A]">
                                                                {subheading}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div
                    className="absolute left-[-60px] top-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-cta text-white"
                    style={{
                        boxShadow: "0px 0 30px rgba(2, 45, 66, 0.75)",
                    }}
                    onClick={data?.onClose}
                >
                    <Image
                        src="/close.svg"
                        height={24}
                        width={24}
                        alt="Arrow-left"
                        className="text-white"
                    />
                </div>
            </div>
        </div>
    );
};

export default TabsMobileView;
