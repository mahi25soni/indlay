import { trustedCompaniesTestData } from "@/testdata/trusted-companies";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const SingleHeading = dynamic(
  () => import("../atoms/SingleHeading/SingleHeading"),
);

const data: string[] = trustedCompaniesTestData;

const TrustedCompanies = () => {
  return (
    <div className="flex h-[420px] flex-col justify-center gap-[60px] px-15">
      <SingleHeading firstLine="Trusted by great companies" />

      <div className="flex h-[83px] w-full items-center gap-[60px] overflow-hidden">
        <Marquee speed={150}>
          {data.map((item, index) => (
            <div key={index} className="relative h-[83px] min-w-[128px]">
              <Image src={item} alt="company-logo" fill />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TrustedCompanies;
