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
  const [selectedCountryData, setSelectedCountryData] = useState<PropertiesData[]>(MapListingSampleData["india"]);
  const trackScrollRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    setListData(MapListingSampleData);
  }, [])


  const handleCountryData = (country: string) => {
    setSelectedCountry(country);
    setSelectedCountryData(listData[selectedCountry]);

  }

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

    <div className="flex flex-row items-center lg:h-[780px] h-[713px] w-full lg:space-x-4 bg-cta-darker overflow-hidden lg:py-15 py-10 justify-center mt-[60px] lg:mt-20 gap-5 px-5 lg:px-0">
      <div className='col-span-6 w-1/2 px-15 hidden lg:block'>

        <WorldMapComponent country={selectedCountry} />
      </div>

      <div className="col-span-12 w-full lg:col-span-6 lg:w-1/2 h-full">
        <div className="flex flex-col gap-10">
          <div className="flex lg:justify-between justify-center lg:pr-15 p-0">
            <div className=" text-[32px] leading-[38.4px] text-white font-normal">Grow your world in ours</div>
            <div className="lg:flex hidden ">
              <button className="flex items-center justify-center gap-3 rounded-70 border border-basic px-3 py-2 text-base font-medium text-white">
                <p className="text-sm">Explore all</p>
                <GoArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className='flex gap-2 justify-center lg:justify-start'>
            {Object.keys(CountriesListObject).map((element, index) => {
              return (
                <button key={index}
                  className={`cursor-pointer rounded-70 border border-basic px-3 py-1 text-sm ${selectedCountry === element ? "text-secondary bg-primary border-primary" : "bg-secondary"}`}
                  onClick={() => handleCountryData(element)}
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
            <div className='flex  gap-6 overflow-auto scrollbar-hidden lg:pr-6' ref={trackScrollRef}>

              {selectedCountryData && selectedCountryData?.map((data) => (
                <VerticalProperty key={data.id} {...data} onPropertyClick={handleAddToCompareList} />
              ))}
            </div>

            <div className='absolute top-1/2 right-5 h-10 w-10 lg:flex justify-center items-center rounded-full bg-white opacity-75 backdrop-blur-xl border-none hidden' onClick={handleScrollRight}>
              <Image src="Arrow-right-simple.svg" height={24} width={24} alt='Arrow-right-simple' />
            </div>
          </div>

          <div className="flex lg:hidden justify-center ">
            <button className="flex items-center justify-center gap-3 rounded-70 border border-white px-3 py-2 text-base font-medium text-white border-opacity-25">
              <p className="text-sm">Explore all</p>
              <GoArrowRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorldMapListing;
