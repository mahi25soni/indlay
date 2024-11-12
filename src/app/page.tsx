"use client";
import dynamic from "next/dynamic";
import { AppWrapper } from "@/context/index";
const HomePage = dynamic(() => import("./home/page"));
export default function Home() {
  return (
    <AppWrapper>
      <HomePage />
    </AppWrapper>
  );
}

