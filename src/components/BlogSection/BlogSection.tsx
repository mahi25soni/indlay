"use client";
import React, { useEffect, useState } from "react";
import HeadingAndButton from "../atoms/HeadingAndButton/HeadingAndButton";
import { GoArrowRight } from "react-icons/go";
import { BlogSampleData } from "@/testdata/blog-data";
import BlogItem from "./BlogItem";

interface BlogData {
  title: string;
  content: string;
  title_image: string;
  id: number;
}

const data: BlogData[] = BlogSampleData;

const BlogSection = () => {
  const [blogData, setBlogData] = useState<BlogData[]>([]);

  useEffect(() => {
    setBlogData(data);
  }, []);
  return (
    <div className="mt-20 px-15">
      <HeadingAndButton heading="Why Global Expansion Matters">
        <div className="flex">
          <button className="flex items-center justify-center gap-3 rounded-70 border border-basic bg-secondary px-3 py-2 text-base font-medium text-cta-darker">
            <p className="text-sm">View all</p>
            <GoArrowRight className="h-5 w-5" />
          </button>
        </div>
      </HeadingAndButton>

      <div className="scrollbar-hidden flex items-center gap-5 overflow-hidden mt-10 w-full">
        {blogData?.map((data) => {
          return <BlogItem key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
};

export default BlogSection;
