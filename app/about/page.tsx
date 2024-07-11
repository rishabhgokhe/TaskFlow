import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserCircleIcon from "@/public/svg/icons/UserCircleIcon";
import React from "react";

export default function About() {
  return (
    <div className="h-[100vh] rounded-3xl m-10 bg-slate-300">
      {/* <Avatar className="w-20 h-auto">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar> */}

      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-semibold mt-2">About Us</h1>
      </div>
      <div className="flex justify-between items-center flex-row">
        <Avatar className="w-[25vh] h-auto">
          <AvatarImage src="https://avatars.githubusercontent.com/u/120303705?v=4" />
          <AvatarFallback>
            <UserCircleIcon />
          </AvatarFallback>
        </Avatar>
        <p>
            jojwojoe3
        </p>
      </div>
    </div>
  );
}
