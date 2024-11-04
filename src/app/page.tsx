"use client";
import Image from "next/image";
import AnimatedTitle from "@/components/animated-title";
export default function Home() {
  return (
    <div className="grid-col-12">
      <div className="grid-row-12 justify-center">
        <AnimatedTitle text="FRONT END" startX="-4rem" endX="3rem" />
      </div>
      <div className="grid-row-12">
        <AnimatedTitle text="DEVELOPER." startX="-2rem" endX="6rem" />
      </div>
    </div>
  );
}
