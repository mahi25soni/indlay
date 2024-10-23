import Image from "next/image";
import React from "react";

type BlogItemProp = {
  title: string;
  content: string;
  title_image: string;
  id: number;
};

const BlogItem = (data: BlogItemProp) => {
  return (
    <div className="h-[397px] w-[312px] rounded-20 border border-basic flex-grow">
      <div className="relative min-h-[180px]">
        <Image
          src={data?.title_image}
          alt="blog-image"
          fill
          className="rounded-t-20 object-cover"
        />
      </div>
      <div className="flex flex-col justify-between gap-5 p-4">
        <div className="flex flex-col gap-5">
          <div className="line-clamp-3 text-base font-medium">
            {data?.title}
          </div>
          <div className="line-clamp-5 text-sm font-normal leading-4 text-light-gray">
            {data?.content}
          </div>
        </div>
        <div className="text-xs font-medium text-red-600 underline">
          READ ARTICLE - &gt;
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
