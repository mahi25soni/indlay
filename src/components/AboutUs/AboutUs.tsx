import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
const SingleHeading = dynamic(
  () => import("@/components/atoms/SingleHeading/SingleHeading"),
);

const AboutUs = () => {
  return (
    <div className="mt-20 flex w-full flex-col gap-8 px-15">
      <SingleHeading firstLine="Why people choose us ?" />
      <div className="flex items-center justify-center">
        <p className="max-w-[600px] text-center text-base font-normal leading-4 text-light-gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div></div>
        <div>
          <Image
            src="/aboutus.png"
            width={640}
            height={674}
            alt="About us"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
