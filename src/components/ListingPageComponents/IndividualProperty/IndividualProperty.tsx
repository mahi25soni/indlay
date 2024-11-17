import BrownLine from "@/components/atoms/BrownLine";
import OverLay from "@/components/atoms/OverLay";
import { nameToListingIcon } from "@/testdata/listing-data";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

const tempDesc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,";
interface SinglePropertyInterface {
    name: string;
    address: string;
    isBestSeller: boolean;
    amenities: { name: string; id: string }[];
    id: string;
    images?: { id: string; url: string }[];
    areaSize: string;
    developerName: string;
    propertyType: string;
    description: string;
    date: string;
    price: string;
    category: string;
    details: string;
}

interface props {
    property: SinglePropertyInterface;
    onClose: () => void;
}

const IndividualProperty = (data: props) => {
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [readMoreActive, setReadMoreActive] = useState<boolean>(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const [queryName, setQueryName] = useState<string>("");
    const [queryEmail, setQueryEmail] = useState<string>("");
    const [queryNumber, setQueryNumber] = useState<string>("");

    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 600,
                behavior: "smooth",
            });
        }
    };

    return (
        <OverLay>
            <div className="absolute right-0 top-0 z-1000 transform transition-transform duration-500 ease-in-out">
                <div className="relative">
                    <div className="h-full w-full bg-white px-15 py-8">
                        <div className="grid grid-cols-12 lg:h-[418px]">
                            <div className="col-span-7">
                                <div className="relative h-[418px] w-[744px]">
                                    <Image
                                        src={
                                            data.property.images?.[0]?.url || "defaultImagePath.jpg"
                                        }
                                        alt={data.property.name || "Property Image"}
                                        fill
                                        className="w-full rounded-2xl"
                                    />
                                </div>
                            </div>
                            <div className="col-span-5 grid grid-cols-2 gap-5">
                                <div className="relative h-[199px] w-[268px]">
                                    <Image
                                        src={
                                            data.property.images?.[1]?.url || "defaultImagePath.jpg"
                                        }
                                        alt={data.property.name || "Property Image"}
                                        fill
                                        className="w-full rounded-2xl"
                                    />
                                </div>
                                <div className="relative h-[199px] w-[268px]">
                                    <Image
                                        src={
                                            data.property.images?.[2]?.url || "defaultImagePath.jpg"
                                        }
                                        alt={data.property.name || "Property Image"}
                                        fill
                                        className="w-full rounded-2xl"
                                    />
                                </div>
                                <div className="relative h-[199px] w-[268px]">
                                    <Image
                                        src={
                                            data.property.images?.[3]?.url || "defaultImagePath.jpg"
                                        }
                                        alt={data.property.name || "Property Image"}
                                        fill
                                        className="w-full rounded-2xl"
                                    />
                                </div>
                                <div className="relative h-[199px] w-[268px]">
                                    <Image
                                        src={
                                            data.property.images?.[4]?.url || "defaultImagePath.jpg"
                                        }
                                        alt={data.property.name || "Property Image"}
                                        fill
                                        className="w-full rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full gap-6 mt-6 h-full">
                            <div className="flex-1 flex flex-col gap-5">
                                <div className='h-[53px] w-full flex justify-between'>
                                    <div className='flex flex-col h-full justify-between gap-2'>
                                        <div className='font-medium text-2xl leading-[26.88px]'>{data?.property?.name}</div>
                                        <div className='text-light-gray font-normal leading-[17.92px]'>{data?.property?.address}</div>
                                    </div>
                                    <div className='flex gap-3'>
                                        {/* <div className='border border-basic bg-basic rounded-70 h-9 w-9 flex justify-center items-center'>
                                            <Image src="/Heart.svg" height={36} width={36} alt='Heart' />
                                        </div> */}
                                        <div className='border border-basic bg-basic rounded-70 h-9 w-9  flex justify-center items-center'>
                                            <Image src="/Share.svg" height={20} width={20} alt='Share' />
                                        </div>
                                    </div>
                                </div>
                                <BrownLine />
                                <div className='flex flex-col gap-4 w-full items-start'>
                                    <div className='h-[22px] flex justify-between items-center w-full'>
                                        <div className='flex items-center font-medium text-xl leading-[22.4px]'>
                                            Description
                                        </div>
                                        <Image src="/Arrow-down-simple.svg" alt='Arrow down ' height={20} width={20} />

                                    </div>
                                    <div className={`font-normal text-base leading-[17.92px] text-light-gray ${readMoreActive ? "" : "line-clamp-4"}`}>
                                        {tempDesc}
                                    </div>
                                    <button className='border-none text-[#FE6240] font-medium leading-[17.92px]' onClick={() => {
                                        setReadMoreActive(!readMoreActive)
                                    }}>
                                        {readMoreActive ? "Read Less" : "Read More"}
                                    </button>
                                </div>
                                <BrownLine />
                                <div className='flex flex-col gap-4 w-full items-start'>
                                    <div className='flex items-center font-medium text-xl leading-[22.4px]'>
                                        Details
                                    </div>
                                    <div className="grid grid-cols-6 text-cta-darker w-full gap-4">

                                        <DetailsInfo label="Area Size" value={data?.property?.areaSize} />
                                        <DetailsInfo label="Developer Name" value={data?.property?.developerName} />
                                        <DetailsInfo label="Property Type" value={data?.property?.propertyType} />
                                        <DetailsInfo label="Date" value={data?.property?.date} />
                                        <DetailsInfo label="Price" value={data?.property?.price} />
                                        <DetailsInfo label="Category" value={data?.property?.category} />
                                        <DetailsInfo label="Details" value={data?.property?.details} />
                                        <DetailsInfo label="Area Size" value={data?.property?.areaSize} />
                                        <DetailsInfo label="Area Size" value={data?.property?.areaSize} />
                                        <DetailsInfo label="Area Size" value={data?.property?.areaSize} />
                                        <DetailsInfo label="Area Size" value={data?.property?.areaSize} />

                                    </div>
                                </div>
                                <BrownLine />
                                <div className='flex flex-col gap-4 w-full items-start'>
                                    <div className='flex items-center font-medium text-xl leading-[22.4px]'>
                                        Facilities
                                    </div>
                                    <div className="grid grid-cols-6 text-cta-darker w-full">
                                        {data?.property?.amenities?.map((amenity) => {
                                            const IconComponent: React.ElementType | undefined =
                                                nameToListingIcon[amenity?.name];

                                            return (
                                                <div className="flex items-center gap-2" key={amenity?.id}>
                                                    {IconComponent ? (
                                                        <IconComponent className="h-5 w-5" />
                                                    ) : (
                                                        <span className="flex items-center  h-5 w-5">🚫</span> // fallback icon or text
                                                    )}
                                                    <p className="text-xs leading-[15.68px] font-normal">{amenity?.name}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <BrownLine />
                                <div className='flex flex-col gap-3 w-full items-start'>
                                    <div className='flex items-center font-medium text-xl leading-[22.4px]'>
                                        Locations
                                    </div>
                                    <Image src={"/IndiviualMap.svg"} height={674} width={946} alt='Individual Map' />
                                </div>
                            </div>
                            <div className="flex w-[350px] h-max flex-col gap-5 rounded-2xl border border-basic px-4 py-5 sticky top-0 ">
                                <div className="text-xl font-medium leading-[22.4px] ">
                                    Hello we are here to answer all your queries !!
                                </div>
                                <div className="flex h-9 gap-3">
                                    <button className="flex flex-1 items-center justify-center gap-3 rounded-70 border border-cta bg-cta px-3 py-2 text-secondary">
                                        <IoMdAdd className="h-5 w-5" />
                                        <p className="text-sm">Compare</p>
                                    </button>

                                    <button className="flex flex-1 items-center justify-center gap-3 rounded-70 border border-basic bg-basic px-3 py-2">
                                        <FiPhoneCall className="h-5 w-5" />
                                        <p className="whitespace-nowrap text-sm">Book a visit</p>
                                    </button>
                                </div>
                                <div className="w-full border border-basic"></div>

                                <div className="flex flex-col gap-4 ">
                                    <div className="text-xl font-medium leading-[22.4px]">
                                        Get in touch
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="border-1.5 flex h-[52px] gap-3 rounded-[50px] border-basic p-4">
                                            <Image
                                                src="/DefaultDP.svg"
                                                height={20}
                                                width={20}
                                                alt="Default DP"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                value={queryName}
                                                onChange={(e) => {
                                                    setQueryName(e.target.value);
                                                }}
                                                className="border-none bg-transparent outline-none"
                                            />
                                        </div>
                                        <div className="border-1.5 flex h-[52px] gap-3 rounded-[50px] border-basic p-4">
                                            <Image
                                                src="/PhoneIcon.svg"
                                                height={20}
                                                width={20}
                                                alt="Phone number icon"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Enter phone number"
                                                value={queryNumber}
                                                onChange={(e) => {
                                                    setQueryNumber(e.target.value);
                                                }}
                                                className="border-none bg-transparent outline-none"
                                            />
                                        </div>
                                        <div className="border-1.5 flex h-[52px] gap-3 rounded-[50px] border-basic p-4">
                                            <Image
                                                src="/AtTheRate.svg"
                                                height={20}
                                                width={20}
                                                alt="At the rate icon"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Enter your email"
                                                value={queryEmail}
                                                onChange={(e) => {
                                                    setQueryEmail(e.target.value);
                                                }}
                                                className="border-none bg-transparent outline-none"
                                            />
                                        </div>
                                    </div>

                                    <button className="w-full bg-cta-darker text-white rounded-70 h-14 border border-cta-darker flex items-center justify-center gap-6">
                                        <div className="font-medium leading-[17.92px] ">
                                            Submit
                                        </div>
                                        <Image
                                            src="/Arrow-right.svg"
                                            height={24}
                                            width={24}
                                            alt="Arrow right"
                                        />
                                    </button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </OverLay>
    );
};


const DetailsInfo = ({ label, value }: { label: string, value: string }) => {
    return (
        <div className="flex flex-col gap-1">
            <div className="font-normal text-xs leading-[13.44px] text-light-gray">
                {label}
            </div>
            <div className="font-medium text-sm leading-[15.68px]">
                {value}
            </div>
        </div>
    )
}

export default IndividualProperty;
