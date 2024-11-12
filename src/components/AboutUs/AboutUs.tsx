"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { aboutSampleData } from "@/testdata/about-data";
import { motion } from "framer-motion";
import { FaRegDotCircle } from "react-icons/fa";

const SingleHeading = dynamic(
  () => import("@/components/atoms/SingleHeading/SingleHeading"),
);

interface SampleDataInterface {
  heading: string;
  note: string;
  icon: string;
}

const data: SampleDataInterface[] = aboutSampleData;

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true); // Start animation when section is visible
          } else {
            setIsIntersecting(false); // Stop animation when section is not visible
          }
        });
      },
      { threshold: 0 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isIntersecting) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex < data.length - 1 ? prevIndex + 1 : 0,
        );
      }, 5000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isIntersecting]);

  return (
    <div className="mt-[60px] lg:mt-20 flex w-full flex-col gap-10 lg:gap-[60px] px-5 lg:px-15" ref={sectionRef}>
      <div className="w-full flex gap-4 flex-col lg:gap-6">

        <SingleHeading firstLine="Why people choose us?" />
        <div className="flex items-center justify-center">
          <p className="max-w-[600px] text-center text-base font-normal leading-[15.68px] text-light-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4 flex flex-col w-full gap-6">
        {/* Left section with headings and paragraphs */}
        <div className="relative h-[370px] w-full lg:hidden">
          <Image
            src={data[currentIndex].icon}
            alt={data[currentIndex].heading}
            fill
            // sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="rounded-3xl object-fill"
          />
        </div>
        <div className="flex flex-col gap-6">
          {data.map((item, index) => (
            <div key={index} className={`flex-col text-center lg:text-left ${currentIndex !== index ? "hidden lg:flex" : "lg:flex"}`}>
              <div>
                <div className="grid grid-cols-12">
                  <div className="col-span-1 p-1 hidden lg:block">
                    {currentIndex === index ? (
                      <FaRegDotCircle className="h-6 w-6 text-cta-darker" />
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className="col-span-12 lg:col-span-11">
                    <div className="flex flex-col gap-4 lg:gap-0">
                      <p className={`} mb-2 text-2xl font-medium`}>
                        {item?.heading}
                      </p>
                      <p
                        className={`mb-4 text-base font-normal ${currentIndex === index
                          ? "text-black"
                          : "text-light-gray"
                          }`}
                      >
                        {item?.note}
                      </p>
                    </div>
                  </div>
                </div>
                {currentIndex === index && (
                  <motion.div
                    className="h-1 bg-cta"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5.5, ease: "linear" }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="relative h-full w-full hidden lg:block">
          <Image
            src={data[currentIndex].icon}
            alt={data[currentIndex].heading}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="rounded-3xl object-fill"
          />
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
