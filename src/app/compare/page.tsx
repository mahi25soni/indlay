"use client";
import { CompareListSampleData } from '@/testdata/compare-list-data';
import { nameToListingIcon } from '@/testdata/listing-data';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';

interface CompareListItem {
    name: string;
    address: string;
    isBestSeller: boolean;
    amenities: { name: string; id: string }[];
    id: string;
    areaSize: string;
    developerName: string;
    propertyType: string;
    description: string;
    date: string;
    price: string;
    category: string;
    details: string;
    images?: { id: string, url: string }[];
}

const ComparePage = () => {
    const [compareListData, setCompareListData] = useState<CompareListItem[]>([])
    const [showReadMoreList, setShowReadMoreList] = useState<string[]>([])

    useEffect(() => {
        setCompareListData(CompareListSampleData)
    }, [])

    const scrollRef = useRef<HTMLDivElement>(null)


    const handleShowMore = (id: string) => {
        const fPropertyId = showReadMoreList.find((propertyId) => propertyId === id)
        if (fPropertyId) {
            setShowReadMoreList(showReadMoreList.filter((propertyId) => propertyId !== id))
        } else {
            setShowReadMoreList([...showReadMoreList, id])
        }
    }

    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 1000,
                behavior: "smooth",
            });
        }
    };

    const handleScrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -1000,
                behavior: "smooth",
            });
        }
    };
    return (
        <div className='relative px-15 py-10'>
            <div className='flex flex-row gap-6  overflow-x-hidden overflow-y-auto h-[674px] scrollbar-hidden' ref={scrollRef}>
                {compareListData.map((data) => {
                    return (
                        <div className="relative  min-w-[312px]  flex flex-col rounded-20 border border-basic bg-secondary h-max">
                            <div className="relative ">
                                <Image
                                    src="/testing.jpg"
                                    alt="property-image"
                                    width={312}
                                    height={180}
                                    className="w-full rounded-t-20 "
                                />
                                <div className="absolute left-0 top-0 z-20 flex w-full items-start justify-between p-3">
                                    {data?.isBestSeller && (
                                        <div className="rounded-70 bg-bestseller px-2 py-1 text-xs">
                                            Best Seller
                                        </div>
                                    )}
                                    <div></div>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 border-opacity-15 bg-gray-500 backdrop-blur-xl">

                                        <Image src="/BinWhite.svg" alt='Heart' height={24} width={24} />
                                    </div>
                                </div>
                            </div>

                            <div className=' flex-grow flex-col w-full px-4'>
                                <div className="border-b border-basic py-4">
                                    <div className="mb-6 flex flex-col gap-2">
                                        <p className="text-base">{data?.name}</p>
                                        <p className="text-xs text-light-gray">{data?.address}</p>
                                    </div>
                                    <div className="flex items-center gap-3 ">
                                        <button className="flex flex-1 items-center justify-center gap-3 rounded-70 border border-cta bg-cta py-2 text-secondary">
                                            <IoMdAdd className="h-5 w-5" />
                                            <p className="text-sm">Compare</p>
                                        </button>

                                        <button className="flex flex-1 items-center justify-center gap-3 rounded-70 border border-basic bg-basic py-2">
                                            <FiPhoneCall className="h-5 w-5" />
                                            <p className="text-sm">Book a visit</p>
                                        </button>
                                    </div>

                                </div>

                                <div className="grid grid-cols-2 gap-3 text-light-gray py-4">
                                    {data?.amenities?.map((amenity) => {
                                        const IconComponent: React.ElementType | undefined =
                                            nameToListingIcon[amenity?.name];

                                        return (
                                            <div className="flex items-center gap-1" key={amenity?.id}>
                                                {IconComponent ? (
                                                    <IconComponent className="h-5 w-5" />
                                                ) : (
                                                    <span className="h-5 w-5">🚫</span> // fallback icon or text
                                                )}
                                                <p className="text-xs">{amenity?.name}</p>
                                            </div>
                                        );
                                    })}
                                </div>

                                <BorderTopComponent subHeading='Area Size' value={data.areaSize} />
                                <BorderTopComponent subHeading='Developer Name' value={data.developerName} />
                                <BorderTopComponent subHeading='Property Type' value={data.propertyType} />
                                <div className='border-t border-basic py-4 flex flex-col gap-3 items-start'>
                                    <div className='font-medium text-base leading-[17.92px]'>Description</div>
                                    <div className={`text-light-gray font-normal text-sm leading-[15.62px] ${showReadMoreList.includes(data?.id) ? "" : "line-clamp-3"}`}>{data?.description}</div>
                                    <button className='border-none text-[#FE6240] font-medium leading-[15.68px]' onClick={() => {
                                        handleShowMore(data?.id)
                                    }}>
                                        {showReadMoreList.includes(data?.id) ? "Read Less" : "Read More"}
                                    </button>

                                </div>
                                <BorderTopComponent subHeading='Date' value={data.date} />
                                <BorderTopComponent subHeading='Price' value={data.price} />
                                <BorderTopComponent subHeading='Category' value={data.category} />
                                <BorderTopComponent subHeading='Details' value={data.details} />

                            </div>






                        </div>
                    )
                })}

            </div>

            <div className='absolute top-1/2  w-10 h-10 rounded-70 border border-basic flex items-center justify-center right-6  bg-white' onClick={handleScrollRight}>
                <Image src="/Arrow-right.svg" height={24} width={24} alt='Arrow-right' className='text-cta-darker' />
            </div>

            <div className='absolute top-1/2 w-10 h-10 rounded-70 border border-basic flex items-center justify-center left-6 bg-white' onClick={handleScrollLeft}>
                <Image src="/Arrow-left.svg" height={24} width={24} alt='Arrow-right' className='text-cta-darker' />
            </div>
        </div>
    )
}

const BorderTopComponent = ({ subHeading, value }: { subHeading: string, value: string }) => {
    return (
        <div className='border-t border-basic py-4 flex flex-col gap-3'>
            <div className='font-medium text-base leading-[17.92px]'>{subHeading}</div>
            <div className='text-light-gray font-normal text-sm leading-[15.62px]'>{value}</div>

        </div>
    )
}

export default ComparePage