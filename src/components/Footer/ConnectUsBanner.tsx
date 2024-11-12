"use client";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const ConnectUsBanner = () => {
  return (
    <div className="relative lg:flex h-[320px] w-full items-center rounded-20 bg-cta-darker hidden">
      {/* Left Side - Image */}
      <div className="relative h-full w-full">
        <Image
          src="/connectUsBanner.png"
          alt="Connent Us Banner"
          fill
          className="rounded-20"
        />
      </div>
      <div className="relative max-h-full flex w-1/3 flex-col items-end justify-end bg-cta-darker p-10 text-white">
        <h1 className="mb-6 text-5xl font-bold text-primary">Get Started</h1>
        <div className="mb-6 text-lg leading-6">
          <p>Find your best </p>
          <p>suitable service</p>
        </div>

        <button className="flex items-center justify-center gap-4 rounded-70 border border-secondary p-4 text-secondary">
          <p>Create an account</p>
          <GoArrowRight className="h-6 w-6" />
        </button>
        <div className="bg-bg-cta-darker clip-path-custom absolute inset-0 z-10"></div>
      </div>
    </div>
  );
};

export default ConnectUsBanner;
