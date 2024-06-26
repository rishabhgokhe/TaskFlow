import React from "react";

export default function GradientBorderButton({link, name}: {link: string, name: string}) {
  return (
    <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ml-2 transition-transform transform hover:scale-105">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-black px-4 py-2 text-sm font-medium text-black dark:text-white backdrop-blur-3xl tracking-wide transition-colors duration-300">
        <a href={link} >{name}</a>
      </span>
    </button>
  );
}
