import React from "react";
import Image from "next/image";

const ContactPageHero = () => {
  return (
    <div className="mt-4 px-5 lg:px-15 relative w-full">
      <div className="relative w-[350px] lg:w-[1320px] h-[400px] lg:h-[366px]">
        {/* Mobile Image */}
        <Image
          src="/contact-mob.png"
          alt="Contact"
          layout="fill"
          objectFit="fill"
          className="lg:hidden"
        />

        {/* Desktop Image */}
        <Image
          src="/Hero.png"
          alt="Contact"
          layout="fill"
          objectFit="fill"
          className="hidden lg:block"
        />

      </div>

      <div className="absolute inset-0 hidden lg:flex flex-col justify-center items-center text-center text-secondary">
        <h2 className="text-[28px] lg:text-[48px] font-normal leading-[33.6px] lg:leading-[57.6px]">
          Contact our
        </h2>
        <p className="tracking-tighter-[2%] text-[28px] lg:text-[48px] font-normal leading-[38.39px] lg:leading-[65.81px] text-primary">
          Friendly Team
        </p>
      </div>

    </div>
  );
};

export default ContactPageHero;
