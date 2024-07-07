"use client";
import React from "react";
import { SparkleTextCode } from "./SparkleTextCode";
import Image from "next/image";
import image from "@/public/images/Abstract shape.png";

export function SparkleTextComponent() {
  return (
    <div className="h-[80vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparkleTextCode
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div >
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          Be Productive, Be <br /> more with TaskFlow
        </h1>
        {/* <Image
          className="col-span-1"
          src={image}
          alt="image"
          height={"50"}
          width={"50"}
        /> */}
      </div>
    </div>
  );
}
