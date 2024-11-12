import React, { ReactNode } from "react";

interface HeadingAndButtonProps {
  heading: string;

  children?: ReactNode; // Type for children
}

const HeadingAndButton = ({ heading, children }: HeadingAndButtonProps) => {
  return (
    <div className="flex lg:justify-between justify-center ">
      <div className="lg:font-bold lg:text-[32px] lg:text-black lg:leading-10 text-center leading-[28.8px] text-2xl font-medium">{heading}</div>

      <div className="hidden lg:block">
        {children}
      </div>
    </div>
  );
};

export default HeadingAndButton;
