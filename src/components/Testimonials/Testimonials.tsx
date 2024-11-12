"use client";
import React, { useEffect, useRef, useState } from "react";
import { TestimonialSampleData } from "@/testdata/testimonial-data";
import Image from "next/image";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import dynamic from "next/dynamic";

const SingleHeading = dynamic(
  () => import("../atoms/SingleHeading/SingleHeading"),
);
interface TestimonialData {
  id: number;
  name: string;
  role: string;
  profile_pic: string;
  comment: string;
}

const data: TestimonialData[] = TestimonialSampleData;

const SingleCommment = ({
  name,
  role,
  comment,
  profile_pic,
}: TestimonialData) => {
  return (
    <div className="flex lg:h-[316px] h-[450px] lg:min-w-[844px] min-w-full flex-col items-start justify-between gap-6 rounded-20 border-basic
     border bg-white p-5">
      <div className="overflow-y-auto leading-[22px] text-light-gray scrollbar-hidden">
        {comment}
      </div>
      <div className="h-min-15 flex gap-5">
        <Image
          src={profile_pic}
          alt="profile-pic"
          className="rounded-full"
          width={60}
          height={60}
        />
        <div className="m-auto">
          <p className="text-xl font-medium text-cta-darker">{name}</p>
          <p className="text-light-gray">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState<TestimonialData[]>([]);
  const trackScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTestimonialData(data);
  }, []);

  const handleScrollRight = () => {
    if (trackScrollRef.current) {
      const child = trackScrollRef.current.firstElementChild as HTMLElement | null;
      const childWidth = child?.offsetWidth || 0;
      trackScrollRef.current.scrollBy({
        left: childWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (trackScrollRef.current) {
      const child = trackScrollRef.current.firstElementChild as HTMLElement | null;
      const childWidth = child?.offsetWidth || 0;
      trackScrollRef.current.scrollBy({
        left: -childWidth,
        behavior: "smooth",
      });
    }
  };



  return (
    <div className="mt-[60px] lg:mt-20 lg:pl-15 px-5 lg:pr-0">
      <SingleHeading firstLine="What people say about us" />
      <div
        className="mt-10 flex w-full items-center justify-start  overflow-hidden lg:gap-4 sm:gap-3"
        ref={trackScrollRef}
      >
        {testimonialData.map((data) => (
          <SingleCommment key={data.id} {...data} />
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center gap-2">
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full border border-basic bg-secondary"
          onClick={handleScrollLeft}
        >
          <GoArrowLeft className="h-6 w-6 text-cta-darker" />
        </button>
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full border border-basic bg-secondary"
          onClick={handleScrollRight}
        >
          <GoArrowRight className="h-6 w-6 text-cta-darker" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
