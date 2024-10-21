"use client";
import dynamic from "next/dynamic";
import { AppWrapper } from "@/context/index";
const HomePage = dynamic(() => import("./home/page"));
const Footer = dynamic(() => import("@/components/Footer/Footer"));
const Navbar = dynamic(() => import("@/components/Navbar/Navbar"));
export default function Home() {
  return (
    <AppWrapper>
      <HomePageWrapper />
    </AppWrapper>
  );
}

const HomePageWrapper = () => {
  return (
    <div className="relative">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};
