"use client";
import React, { useEffect, useRef, useState } from "react";
import SingleHeading from "../atoms/SingleHeading/SingleHeading";
import { TestimonialSampleData } from "@/testdata/testimonial-data";
import Image from "next/image";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

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
    <div className="border-1 flex h-[316px] min-w-[844px] flex-col items-start justify-between gap-6 rounded-20 border-basic bg-white p-5">
      <div className="overflow-y-auto leading-[22px] text-light-gray">
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
      trackScrollRef.current.scrollBy({
        left: 1000,
        behavior: "smooth",
      });
    }
  };
  const handleScrollLeft = () => {
    if (trackScrollRef.current) {
      trackScrollRef.current.scrollBy({
        left: -1000,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-20 px-15">
      <SingleHeading firstLine="What people say about us" />
      <div className="mt-10 flex items-center justify-start gap-4 overflow-hidden w-full" ref={trackScrollRef}>
        {testimonialData.map((data) => (
          <SingleCommment key={data.id} {...data} />
        ))}
      </div>
      <div className="flex items-center gap-2 justify-center mt-10">
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
