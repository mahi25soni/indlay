import React from "react";

import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar/Navbar"));
const Hero = dynamic(() => import("@/components/Hero/Hero"));
const Listing = dynamic(() => import("@/components/Listing/Listing"));
const Services = dynamic(
  () => import("@/components/ServicesComponent/ServicesComponent"),
);
const Collections = dynamic(() => import("@/components/Collections/Collections"));



const HomePage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Collections/>
      <Listing />

      {/*  Services */}
      {/*  Collections */}
      {/*  Map */}
      {/*  Video */}
      {/*  About */}
      {/*  Listing */}
      {/*  Gallery */}
      {/*  Blog */}
      {/*  Testimonials */}
      {/*  Listing 2 */}
      {/*  Trusted By Company */}
      {/*  Banner */}
      {/*  Footer */}
    </div>
  );
};

export default HomePage;
