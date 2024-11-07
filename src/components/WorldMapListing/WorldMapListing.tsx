"use client"
import { useState } from 'react';
import Image from 'next/image';

type CountryStyles = {
  scale: string;
  translateX: string;
  translateY: string;
};

const countryStyles: Record<string, CountryStyles> = {
  india: {
    scale: 'scale-[0.75]',  // Adjust based on the world map scale
    translateX: 'translate-x-[5%]',
    translateY: '',
  },
  africa : {
    scale: 'scale-x-[0.73] scale-y-[0.78]',
    translateX: 'translate-x-[-1%]',
    translateY: 'translate-y-[3%]',
  },
  usa: {
    scale: 'scale-[0.72]',  // Adjust based on the world map scale
    translateX: 'translate-x-[0]',
    translateY: 'translate-y-[-1%]',
  },

};


const WorldCountryStyle : {[key: string]: string} =  {
  "india" : "scale-[8.2] translate-x-[-155%] translate-y-[-21%] rotate-[-1deg]",
  "africa" : "scale-x-[3.3] scale-y-[3.4] translate-x-[-6%] translate-y-[-29%] rotate-[0deg]",
  "usa" : "scale-[4.55]  translate-x-[141%] translate-y-[3%] rotate-[-1deg]",
}


const WorldMapComponent: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('india'); // Default to India

  return (
    <div className="flex flex-row items-center justify-center h-screen w-full bg-cta-darker overflow-hidden">
      {/* Container for World Map */}
      <div className="relative w-[70vw] h-[70vw] max-w-[660px] max-h-[660px] rounded-full overflow-hidden border border-red-900">
        
        {/* World Map Background */}
        <div className={`absolute inset-0 transition-all duration-300 ease-in-out  transform ${WorldCountryStyle[selectedCountry]}`}>
          <Image
            src="/World Map.png"
            fill
            alt="World Map"
            objectFit="contain"
          />
        </div>

        {/* Overlay for India */}
        <div
          className={`absolute inset-0 ${countryStyles[selectedCountry].scale} ${countryStyles[selectedCountry].translateX} ${countryStyles[selectedCountry].translateY}`}
        >
          {selectedCountry === 'india' ? (
            <Image
              src="/India.svg"
              fill
              alt="India Map"
              objectFit="contain"
            />
          ) : selectedCountry === 'africa' ? (
            <Image
              src="/Africa.svg"
              fill
              alt="India Map"
              objectFit="contain"
            />
          ) : selectedCountry === "usa" ? (
            <Image
              src="/USA.svg"
              fill
              alt="India Map"
              objectFit="contain"
            />
          ) : (
            null
          )}
          
        </div>
      </div>
      
      {/* Button Selector */}
      <div className="flex flex-col space-y-4 ml-8">
        <button
          onClick={() => setSelectedCountry('india')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          India
        </button>
        <button
          onClick={() => setSelectedCountry('africa')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          Africa
        </button>
        <button
          onClick={() => setSelectedCountry('usa')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          USA
        </button>
      </div>
    </div>
  );
};

export default WorldMapComponent;
