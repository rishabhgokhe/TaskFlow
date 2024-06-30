"use client"
import React from "react";
import { motion } from "framer-motion";

export function BackgorundGrid() {
  return (
    <>
      <div className="relative h-[40rem] w-full flex items-center justify-center dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-20 flex flex-col items-center text-center">

          <h1 className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
           Easily Integrate with Scheduele
          </h1>
          <p className="text-2xl sm:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Browse thousands of listings to find your ideal space.
          </p>
        </div>
      </div>
    </>
  );
}