"use client"
import { useState } from 'react';
import Image from 'next/image';

const WorldMapComponent = () => {
    const [selectedCountry, setSelectedCountry] = useState<string>("");

    type CountryPosition = {
      scale: number;
      translateX: string;
      translateY: string;
  };
  
  const countryPositions: { [key: string]: CountryPosition } = {
      india: { scale: 2, translateX: '-30%', translateY: '20%' },
      usa: { scale: 2, translateX: '40%', translateY: '-10%' },
      africa: { scale: 2, translateX: '-10%', translateY: '10%' },
  };

    // Handle country selection
    const handleCountryClick = (country : string) => {
        setSelectedCountry(country);
    };

    return (
        <div className="flex flex-col items-center space-y-4 bg-cta-darker  ">
            {/* Map Display */}
            <div className="relative h-[660px] w-[660px] rounded-full overflow-hidden border border-red-800 bg-transparent">
                <div
                    className={`relative w-full h-full transition-transform duration-700 ease-in-out ${
                        selectedCountry && `scale-[${countryPositions[selectedCountry].scale}] 
                        translate-x-[${countryPositions[selectedCountry].translateX}] 
                        translate-y-[${countryPositions[selectedCountry].translateY}]`
                    }`}
                >
                    <Image
                        src='/World Map.png'
                        fill
                        alt='World Map'
                        objectFit='cover'
                        className="overflow-hidden"
                    />
                </div>
            </div>

            {/* Country Selector */}
            <div className="flex space-x-4">
                <button
                    onClick={() => handleCountryClick('india')}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                >
                    India
                </button>
                <button
                    onClick={() => handleCountryClick('usa')}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                >
                    USA
                </button>
                <button
                    onClick={() => handleCountryClick('africa')}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                >
                    Africa
                </button>
            </div>
        </div>
    );
};

export default WorldMapComponent;
