"use client";
import { cn } from "@/lib/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../BentoGrid/BentoGridCode";
import { motion } from "framer-motion";
import Image from "next/image";

import GroupLayersIcon from "@/public/svg/icons/GroupLayersIcon"
import AiMagicIcon from "@/public/svg/icons/AiMagicIcon"
import AtomicPowerIcon from "@/public/svg/icons/AtomicPowerIcon"
import ChartLineData02Icon from "@/public/svg/icons/ChartLineData02Icon"
import BorderHorizontalIcon from "@/public/svg/icons/BorderHorizontalIcon"

import QuotesImg from "@/public/images/quotes.png";
import SecretIconImg from "@/public/images/secrets_icon.png";
import BlackHoleImg from "@/public/images/black_hole.png"
import CustomListImg from "@/public/images/custom_list.png"

export function BentoGridComponent() {
  return (
    <BentoGrid className="w-full py-5 mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full">
          <p className="w-full text-[0.9rem] bg-gray-100 px-1 rounded-full dark:bg-neutral-900">
            Share essential grocery items with ease.{" "}
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-7/8 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full">
          <p className="w-full text-[0.9rem] bg-gray-100 px-1 rounded-full dark:bg-neutral-900">
            add to your TaskFlow grocery list.{" "}
          </p>
        </div>{" "}
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full">
          <p className="w-ful text-[0.9rem] bg-gray-100 px-1 rounded-full dark:bg-neutral-900">
            Enjoy the convenience of organized sharing.
          </p>
        </div>{" "}
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-3 p-4"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skeleton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex rounded-full border border-emerald-300 dark:border-white/[0.2] p-2 items-center space-x-2 bg-neutral-100 dark:bg-black h-6 shadow-md"
        ></motion.div>
      ))}
    </motion.div>
  );
};


const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-lg overflow-hidden"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="absolute inset-0 flex items-center justify-center p-4">
        <img 
          src="/images/custom_list.png"
          alt="Description" 
          className="h-40 w-auto m-10 rounded-lg shadow-lg opacity-90"
        />
      </motion.div>
    </motion.div>
  );
};


const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src={BlackHoleImg}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
        Keep your tasks organized with TaskFlow.
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
        Productivity Boost
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src={QuotesImg}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
        Tailor your to-do lists to your needs.
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
        Customizable
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src={SecretIconImg}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Stay Connected with peoples
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Managment
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src={QuotesImg}
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
        Effortlessly tailor your workflow with tasks and custom lists that perfectly suit your needs.</p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">TaskFlow ❤️</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Share with Ease",
    description: (
      <span className="text-sm">
        Share your tasks with family and friends effortlessly with TaskFlow.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <GroupLayersIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Smart Reminders",
    description: (
      <span className="text-sm">
        Set reminders for your tasks and never miss a deadline.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <AiMagicIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Collaborative Features",
    description: (
      <span className="text-sm">
        Collaborate with your team and manage projects together.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <AtomicPowerIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Insightful Analytics",
    description: (
      <span className="text-sm">
        Gain insights into your productivity with detailed analytics.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <ChartLineData02Icon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Customizable Workflows",
    description: (
      <span className="text-sm">
        Tailor your task management workflow to suit your needs.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <BorderHorizontalIcon className="h-4 w-4 text-neutral-500" />,
  },
];
