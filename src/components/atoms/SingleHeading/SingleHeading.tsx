import React from "react";

interface SingleHeadingProps {
  firstLine: string;
  secondLine?: string;
}
const SingleHeading = ({ firstLine, secondLine }: SingleHeadingProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="font-youth lg:font-medium lg:text-[32px] lg:text-black lg:leading-10 text-center leading-[28.8px] text-2xl font-medium">
        <div>{firstLine}</div>
        {secondLine && <div>{secondLine}</div>}
      </div>
    </div>
  );
};

export default SingleHeading;
