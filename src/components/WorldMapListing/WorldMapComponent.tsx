"use client"
import Image from 'next/image';
import React from 'react'

type CountryStyles = {
    scale: string;
    translateX: string;
    translateY: string;
};

const countryStyles: { [key: string]: CountryStyles } = {
    india: {
        scale: 'scale-[0.75]',  // Adjust based on the world map scale
        translateX: 'translate-x-[5%]',
        translateY: '',
    },
    africa: {
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


const WorldCountryStyle: { [key: string]: string } = {
    "india": "scale-[8.2] translate-x-[-155%] translate-y-[-21%] rotate-[-1deg]",
    "africa": "scale-x-[3.3] scale-y-[3.4] translate-x-[-6%] translate-y-[-29%] rotate-[0deg]",
    "usa": "scale-[4.55]  translate-x-[141%] translate-y-[3%] rotate-[-1deg]",
}

const WorldMapComponent = ({country} : {country : string}) => {
    return (
  <div className="relative w-[70vw] h-[70vw] max-w-[660px] max-h-[660px] rounded-full overflow-hidden border border-transparent" 
     style={{ boxShadow: 'inset 0 0 15px rgba(255, 255, 255, 0.5)' }}>
        <div className={`absolute inset-0 transition-all duration-700 ease-in-out  transform ${WorldCountryStyle[country]}`}>
          <Image
            src="/World Map.png"
            fill
            alt="World Map"
            objectFit="contain"
          />
        </div>

        <div
          className={`absolute inset-0 ${countryStyles[country].scale} ${countryStyles[country].translateX} ${countryStyles[country].translateY}`}
        >
          {country === 'india' ? (
            <Image
              src="/India.svg"
              fill
              alt="India Map"
              objectFit="contain"
            />
          ) : country === 'africa' ? (
            <Image
              src="/Africa.svg"
              fill
              alt="India Map"
              objectFit="contain"
            />
          ) : country === "usa" ? (
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
    )
}

export default WorldMapComponent