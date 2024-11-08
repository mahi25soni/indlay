"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import WorldMapComponent from './WorldMapComponent';
import HeadingAndButton from '../atoms/HeadingAndButton/HeadingAndButton';
import { GoArrowRight } from 'react-icons/go';
import VerticalProperty from '../Listing/VerticalProperty';
import { MapListingSampleData } from '@/testdata/map-listing-data';


const CountriesListObject: { [key: string]: string } = {
  "india": "India",
  "africa": "Africa",
  "usa": "USA",
}

interface PropertiesData {
  name: string;
  address: string;
  isBestSeller: boolean;
  amenities: { name: string; id: string }[];
  id: string;
}

interface CountryPropertiesData {
  [key: string]: PropertiesData[];
}

const WorldMapListing = () => {
  const [listData, setListData] = useState<CountryPropertiesData>({});
  const [selectedCountry, setSelectedCountry] = useState<string>('india'); // 
  const trackScrollRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    setListData(MapListingSampleData);
  }, [])


  const handleScrollRight = () => {
    if (trackScrollRef.current) {
      trackScrollRef.current.scrollBy({
        left: 1000,
        behavior: "smooth",
      });
    }
  };
  const handleScrollLeft = () => {
    if (trackScrollRef.current) {
      trackScrollRef.current.scrollBy({
        left: -1000,
        behavior: "smooth",
      });
    }
  };


  const handleAddToCompareList = (id: string) => {
    // Add the property to the compare list
  }

  return (

    <div className="flex flex-row items-center h-[780px] w-full space-x-4 bg-cta-darker overflow-hidden py-15 justify-center mt-20 gap-5">
      <div className='col-span-6 w-1/2 px-15'>

        <WorldMapComponent country={selectedCountry} />
      </div>

      <div className="col-span-6 w-1/2 h-full">
        <div className="flex flex-col gap-10">


          <div className="flex justify-between pr-15">
            <div className=" text-[32px] leading-[38.4px] text-white font-normal">Grow your world in ours</div>
            <div className="flex">
              <button className="flex items-center justify-center gap-3 rounded-70 border border-basic px-3 py-2 text-base font-medium text-white">
                <p className="text-sm">Explore all</p>
                <GoArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className='flex gap-2'>
            {Object.keys(CountriesListObject).map((element, index) => {
              return (
                <button key={index}
                  className={`cursor-pointer rounded-70 border border-basic px-3 py-1 text-sm ${selectedCountry === element ? "text-secondary bg-primary border-primary" : "bg-secondary"}`}
                  onClick={() => setSelectedCountry(element)}
                >
                  {CountriesListObject[element]}
                </button>
              );
            })}
          </div>

          <div
            className="relative"
            style={{
              background: "linear-gradient(to right, rgba(2, 45, 66, 0) 0%, #022d42 100%)",
            }}
            ref={trackScrollRef}
          >
            <div className='flex  gap-6 overflow-auto scrollbar-hidden pr-6' ref={trackScrollRef}>

              {listData[selectedCountry]?.map((data) => (
                <VerticalProperty key={data.id} {...data} onCompareClick={handleAddToCompareList} />
              ))}
            </div>

            <div className='absolute top-1/2 right-5 h-10 w-10 flex justify-center items-center rounded-full bg-white opacity-75 backdrop-blur-xl border-none' onClick={handleScrollRight}>
              <Image src="Arrow-right-simple.svg" height={24} width={24} alt='Arrow-right-simple' />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorldMapListing;
