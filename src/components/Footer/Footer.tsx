import Image from "next/image";
import React from "react";

const footerRedirects: { [key: string]: string[] } = {
  Company: ["Home", "About", "Contact", "Projects"],
  Legal: ["Terms & Conditions", "Privacy Policy"],
  "Social Links": ["Instagram", "Facebook", "Youtube", "Twitter"],
};

const Footer = () => {
  return (
    <div className="mt-20 flex w-full flex-col gap-10 px-15">
      <div className="relative h-[320px] w-full">
        <Image src={"/footer.png"} alt="Footer Image" fill />
      </div>
      <div className="flex items-start justify-between">
        <div className="">
          <Image src="/logo.png" alt="Logo" width={118} height={48} />
          <div className="mt-4 text-sm leading-4 text-light-gray">
            <p>Orient Arcade, Chittor Road,</p>
            <p>Bhilwara, Rajasthan (311001)</p>
          </div>
        </div>
        <div className="flex justify-end gap-10 ">
          {Object.keys(footerRedirects).map((key: string) => {
            return (
              <div>
                <p className="text-xl font-medium">{key}</p>
                {footerRedirects[key].map((value) => {
                  return <p className="text-light-gray font-normal cursor-pointer">{value}</p>;
                })}
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-center text-xs text-light-gray mb-10">
      Copyright 2024, All rights reserved
      </div>
    </div>
  );
};

export default Footer;
