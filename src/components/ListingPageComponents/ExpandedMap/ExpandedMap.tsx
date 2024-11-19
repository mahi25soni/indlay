"use client"
import React, { useEffect, useState } from 'react'
import { BsArrowsAngleExpand } from "react-icons/bs";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface ListValueData {
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
    images?: { id: string; url: string }[];
    coordinates: {
        lat: number,
        lng: number
    }
}

interface Props {
    backToListing: () => void,
    propertyList: ListValueData[]
}

const containerStyle = {
    width: '100%',
    height: '100%'
};

interface Coords {
    lat: number,
    lng: number
}


const apiKey = "AIzaSyAaStiuLK-4UnoppS7ZcEqNnuE10Lpanvo";
const ExpandedMap = (data: Props) => {
    const [locations, setLocation] = useState<Coords[]>([])
    const [defaultCenter, setDefaultCenter] = useState<Coords>({ lat: 0, lng: 0 })
    useEffect(() => {
        setDefaultCenter(data?.propertyList[0]?.coordinates)
        data?.propertyList?.map((property) => {
            setLocation((prev) => [...prev, property.coordinates])
        })
    }, [])
    return (
        <div className='w-full h-[674px] pb-5 lg:pb-0'>
            <div className='h-[58px] flex justify-between items-center px-5'>
                <div className='font-medium leading-[15.68px]'>Showing 20 results</div>
                <button
                    className="flex items-center justify-center font-normal text-[14px] leading-[15.68px] gap-3 text-cta-darker border border-basic rounded-70 px-3 py-1 h-[36px] w-[143px]"
                    onClick={data.backToListing}
                >
                    Back to listing
                    <BsArrowsAngleExpand />
                </button>
            </div>

            <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={defaultCenter}
                    zoom={5}
                >
                    {locations?.map((data, index) => (
                        <Marker key={index} position={data} />
                    ))}
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default ExpandedMap