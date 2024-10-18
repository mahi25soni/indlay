import React, { ReactNode } from "react";

interface HeadingAndButtonProps {
  heading: string;
  children?: ReactNode; // Type for children
}

const HeadingAndButton = ({ heading, children }: HeadingAndButtonProps) => {
  return (
    <div className="flex justify-between">
      <div className="heading leading-10">Explore Our Collections</div>

      {children}
    </div>
  );
};

export default HeadingAndButton;
