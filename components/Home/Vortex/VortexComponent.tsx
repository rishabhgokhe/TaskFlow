import React from "react";
import { Vortex } from "./VortexCode";

export function VortexComponent() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Join the Waiting List
        </h2>
        <p className="text-white text-base md:text-xl max-w-xl mt-6 text-center">
          Be the first to experience the future of task management. Sign up now
          for exclusive early access.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button
              className="px-4 py-2 bg-green-500 hover:bg-green-600 transition duration-200 rounded-lg text-white shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Join Now
            </button>
            <button
              className="px-4 py-2 bg-transparent hover:bg-green-500 text-green-500 hover:text-white transition duration-200 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Learn More
            </button>
          </div>
      </Vortex>
    </div>
  );
}
