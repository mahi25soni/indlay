import React from "react";

import dynamic from "next/dynamic";

const Listing = dynamic(() => import("@/components/Listing/Listing"));
const Navbar = dynamic(() => import("@/components/Navbar/Navbar"));
const Hero = dynamic(() => import("@/components/Hero/Hero"));
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
const TrustedCompanies = dynamic(
  () => import("@/components/TrustedCompanies/TrustedCompanies"),
);
const Testimonials = dynamic(
  () => import("@/components/Testimonials/Testimonials"),
);
const BlogSection = dynamic(
  () => import("@/components/BlogSection/BlogSection"),
);
const WorldMapListing = dynamic(
  () => import("@/components/WorldMapListing/WorldMapListing"),
);
const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Collections />
      <Listing />
      <WorldMapListing />
      <Video />
      <AboutUs />
      <ListingLine />
      <BlogSection />
      <Testimonials />
      <ListingLine />
      <TrustedCompanies />
    </>
  );
};

export default HomePage;
