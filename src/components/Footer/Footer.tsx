import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import ConnectUsMobileBanner from "./ConnectUsMobileBanner";

const ConnectUsBanner = dynamic(
  () => import("@/components/Footer/ConnectUsBanner"),
)

const footerRedirects: { [key: string]: string[] } = {
  Company: ["Home", "About", "Contact", "Projects"],
  Legal: ["Terms & Conditions", "Privacy Policy"],
  "Social Links": ["Instagram", "Facebook", "Youtube", "Twitter"],
};

const Footer = () => {
  return (
    <div className="mt-20 flex w-full flex-col gap-10 lg:px-15 px-5 ">
      <ConnectUsBanner />

      <ConnectUsMobileBanner />
      <div className="flex flex-col lg:flex-row lg:items-start  lg:justify-between items-center gap-8 lg:gap-0">
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <Image src="/logo.png" alt="Logo" width={118} height={48} />
          <div className="text-sm leading-[15.68px] text-light-gray">
            <p>Orient Arcade, Chittor Road,</p>
            <p>Bhilwara, Rajasthan (311001)</p>
          </div>
        </div>
        <div className="lg:flex lg:justify-end lg:gap-10 grid grid-cols-2 w-full gap-10 px-5">
          {Object.keys(footerRedirects).map((key: string) => {
            return (
              <div>
                <p className="text-xl font-medium mb-1">{key}</p>
                {footerRedirects[key].map((value) => {
                  return (
                    <p className="cursor-pointer font-normal text-light-gray mt-2">
                      {value}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="mb-10 flex items-center justify-center text-xs text-light-gray">
        Copyright 2024, All rights reserved
      </div>
    </div>
  );
};

export default Footer;
