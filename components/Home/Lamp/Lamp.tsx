"use client";
import React from "react";
import { LampContainer } from "./LampContainer";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/FlipText";
import MapsSearchIcon from "@/public/svg/icons/MapsSearchIcon";



export default function Lamp() {

  const words = ["Apartments", "Hostels", "Resorts"];

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        {/* Find <FlipWords words={words} /> <br /> at your convinence */}
        Be productive, Be <br /> more with TaskFlow
        <br />
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl tracking-wide">
            <MapsSearchIcon /> <span className="ml-2">Search Now</span>
          </span>
        </button>
      </motion.h1>
    </LampContainer>
  );
}