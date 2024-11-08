import { nameToListingIcon } from '@/testdata/listing-data';
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';

const tempDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,"
interface SinglePropertyInterface {
    name: string;
    address: string;
    isBestSeller: boolean;
    amenities: { name: string; id: string }[];
    id: string;
    images?: { id: string, url: string }[];
}

const IndividualProperty = (data: SinglePropertyInterface) => {
    const [selectedImage, setSelectedImage] = useState<string>("")
    const [readMoreActive, setReadMoreActive] = useState<boolean>(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 600,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="absolute right-0 top-0 z-1000">

            <div className="max-h-[816px] w-[600px] bg-white p-[19px] flex flex-col  gap-5 overflow-auto scrollbar-hidden">
                <div className='flex gap-4 overflow-x-auto scrollbar-hidden '>
                    {
                        data?.images?.map((image, index) => {
                            return <Image
                                src={image.url}
                                alt="property-image"
                                width={480}
                                height={270}
                                className="w-full rounded-2xl"
                                key={image.id}
                            />
                        })
                    }

                </div>

                <div className='relative w-full'>
                    <div className='flex gap-[2px] overflow-hidden w-full' ref={scrollRef}>
                        {
                            data?.images?.map((image, index) => {
                                return <div className={`w-[68.25px] h-[44px] cursor-pointer p-1 border-2 rounded-md ${selectedImage === image?.id ? "border-cta-border" : "border-transparent"}`} onClick={() => setSelectedImage(image.id)} key={image?.id}>
                                    <div className='relative h-full w-full'>
                                        <Image
                                            src={image.url}
                                            alt="property-image"
                                            fill
                                            className="w-full rounded-[4px]"
                                        />
                                    </div>
                                </div>


                            })
                        }

                    </div>
                    <div className='absolute right-0 w-10 h-10 rounded-70 border border-basic flex items-center justify-center top-0 bg-white' onClick={handleScrollRight}>
                        <Image src="/Arrow-right.svg" height={24} width={24} alt='Arrow-right' className='text-cta-darker' />
                    </div>
                </div>


                <div className='h-[46px] w-full flex justify-between items-start'>
                    <div className='flex flex-col h-full justify-between'>
                        <div className='font-medium text-xl leading-[22.4px]'>{data?.name}</div>
                        <div className='text-light-gray font-normal leading-[15.68px]'>{data?.address}</div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='border border-basic bg-basic rounded-70 h-9 w-9 flex justify-center items-center'>
                            <Image src="/Heart.svg" height={24} width={24} alt='Heart' />
                        </div>
                        <div className='border border-basic bg-basic rounded-70 h-9 w-9  flex justify-center items-center'>
                            <Image src="/Share.svg" height={24} width={24} alt='Share' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-3 w-full items-start'>
                    <div className='h-[18px] flex justify-between items-center w-full'>
                        <div className='flex items-center font-medium text-base leading-[17.92px]'>
                            Description
                        </div>
                        <Image src="/Arrow-down-simple.svg" alt='Arrow down ' height={16} width={16} />

                    </div>
                    <div className={`${readMoreActive ? "" : "line-clamp-3"}`}>
                        {tempDesc}
                    </div>
                    <button className='border-none text-[#FE6240] font-medium leading-[15.68px]' onClick={() => {
                        setReadMoreActive(!readMoreActive)
                    }}>
                        {readMoreActive ? "Read Less" : "Read More"}
                    </button>
                </div>

                <div className='flex flex-col gap-3 w-full items-start'>
                    <div className='flex items-center font-medium text-base leading-[17.92px]'>
                        Facilities
                    </div>
                    <div className="grid grid-cols-4 text-cta-darker w-full">
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
                </div>

                <div className='flex flex-col gap-3 w-full items-start'>
                    <div className='flex items-center font-medium text-base leading-[17.92px]'>
                        Locations
                    </div>
                    <Image src={"/IndiviualMap.svg"} height={674} width={561} alt='Individual Map' />
                </div>


            </div>

            <div className='h-[72px] flex justify-end items-center sticky bottom-0 bg-white'>
                <div className='flex gap-3 pr-5 h-9'>
                    <button className="flex flex-1 items-center justify-center gap-3 rounded-70 border border-cta bg-cta py-2 text-secondary px-3">
                        <IoMdAdd className="h-5 w-5" />
                        <p className="text-sm">Compare</p>
                    </button>

                    <button className="flex flex-1 items-center justify-center gap-3 rounded-70 border border-basic bg-basic py-2 px-3">
                        <FiPhoneCall className="h-5 w-5" />
                        <p className="text-sm whitespace-nowrap">Book a visit</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default IndividualProperty