import React from "react";
import Image from "next/image";

const ContactPageHero = () => {
  return (
    <div className="mt-4 px-15 relative w-full">
      <Image
        src="/Hero.png"
        alt="Contact"
        layout="responsive"
        width={1320}
        height={366}
        objectFit="cover"
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-secondary">
        <h2 className="text-5xl font-normal leading-[57.6px]">
          Contact our
        </h2>
        <p className="tracking-tighter-[2%] text-5xl font-normal leading-[65.81px] text-primary">
          Friendly Team
        </p>
      </div>
    </div>
  );
};

export default ContactPageHero;
