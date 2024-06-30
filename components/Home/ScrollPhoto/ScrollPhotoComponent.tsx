"use client";
import React from "react";
import Image from "next/image";
import { ScrollPhotoCode } from "./ScrollPhotoCode";

import iPad_TaskFlow from "@/public/images/iPad_TaskFlow.png"

export function ScrollPhotoComponent() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ScrollPhotoCode
        titleComponent={
          <>
            <h1 className="text-2xl md:text-4xl font-semibold text-black dark:text-white">
              Uniquely designed UI <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Crafting Experience
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={iPad_TaskFlow}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ScrollPhotoCode>
    </div>
  );
}