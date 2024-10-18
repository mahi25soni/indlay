import React from "react";

interface SingleHeadingProps {
  firstLine: string;
  secondLine?: string;
}
const SingleHeading = ({ firstLine, secondLine }: SingleHeadingProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="heading text-center leading-10">
        <div>{firstLine}</div>
        {secondLine && <div>{secondLine}</div>}
      </div>
    </div>
  );
};

export default SingleHeading;
