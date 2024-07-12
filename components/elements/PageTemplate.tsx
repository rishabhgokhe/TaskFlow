import ThemeToggle from "@/components/elements/themeToggle";
import React from "react";
import FooterIconLink from "./FooterIconLink";

export default function PageTemplate({children} : {children: JSX.Element}) {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-[#63D471] to-[#233329] p-4 md:p-10 dark:bg-gradient-to-r dark:from-[#28313B] dark:to-[#485461]">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-4 md:p-10 max-w-5xl w-full text-center">
        <ThemeToggle />
        {children}
        <FooterIconLink />
      </div>
    </div>
  );
}