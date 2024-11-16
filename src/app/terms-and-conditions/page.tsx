import React from 'react';
import { tnsData } from '@/testdata/tns-data';

interface TnsData {
    heading: string;
    note: string;
}

const TermsAndCondition: React.FC = () => {
    return (
        <div className="p-5 lg:px-15 min-w-[350px] w-full">
            <div className="flex flex-col font-medium text-center mb-7">
                <p className="text-[24px] lg:text-[32px] leading-[28.8px] lg:leading-[38.4px] font-medium">Privacy Policy</p>
                <p className="font-normal text-[14px] lg:text-[16px] leading-[15.68px] lg:leading-[17.92px] text-[#9B9EA6]">
                    Last updated on <span className="font-medium text-black">Oct 6th 2024</span>
                </p>
            </div>

            <div className='flex lg:flex-row flex-col-reverse'>
                <div className="gap-10">
                    {tnsData.map((section, index) => (
                        <div key={index} className="w-[350px] lg:w-[800px] gap-6 mb-[51px]">
                            <h1 className="font-medium text-[24px] leading-[26.88px]">{section.heading}</h1>
                            <p className="font-medium text-[16px] leading-[17.92px] text-[#9B9EA6]">
                                {section.note}
                            </p>
                        </div>
                    ))}
                </div>

                <div>
                    <h1 className='font-medium text-[20px] lg:text-[24px] leading-[22.4px] lg:leading-[26.88px] min-w-[400px] lg:gap-6 mb-3 gap-[16px]'>Table of contents</h1>
                    <ul className='font-medium text-[16px] lg:text-[20px] leading-[17.92px] lg:leading-[22.4px] mb-4'>
                        {tnsData.map((section, index) => (
                            <li key={index}>
                                <a href={`#${section.heading}`}>
                                    {index + 1}. {section.heading}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

        </div>
    );
}

export default TermsAndCondition;
