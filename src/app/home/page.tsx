import React from "react";

import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar/Navbar"));
const Hero = dynamic(() => import("@/components/Hero/Hero"));
const Listing = dynamic(() => import("@/components/Listing/Listing"));
const Services = dynamic(
  () => import("@/components/ServicesComponent/ServicesComponent"),
);
const Collections = dynamic(
  () => import("@/components/Collections/Collections"),
);
const AboutUs = dynamic(() => import("@/components/AboutUs/AboutUs"));
const ListingLine = dynamic(
  () => import("@/components/ListingLine/ListingLine"),
);

const Video = dynamic(
  () => import("@/components/VideoComponent/VideoComponent"),
);
const Footer = dynamic(() => import("@/components/Footer/Footer"));

const HomePage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Collections />
      <Listing />
      <Video />
      {/* <AboutUs /> */}
      <ListingLine />
      <Footer />
    </div>
  );
};

export default HomePage;
