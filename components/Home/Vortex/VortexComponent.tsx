import React from "react";
import { Vortex } from "./VortexCode";
import { Input } from "@/components/ui/input";
import CustomButton from "@/components/elements/CustomButton";

import MailEdit01Icon from "@/public/svg/icons/MailEdit01Icon";

export function VortexComponent() {
  return (
    <div className="w-[calc(100%-0.5rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
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
        <Input
          className="flex justify-center w-5/6 sm:w-2/6 mt-2 bg-[rgba(0,0,0,0.298)] backdrop-filter backdrop-blur-sm focus-visible:ring-0"
          placeholder="myemail@example.com"
        ></Input>
        <div className="flex sm:flex-row items-center gap-4 mt-6">
          <CustomButton rightIcon={<MailEdit01Icon />}>Join Now</CustomButton>
        </div>
      </Vortex>
    </div>
  );
}
