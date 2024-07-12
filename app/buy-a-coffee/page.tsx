"use client";
import PageTemplate from "@/components/elements/PageTemplate";
import { Separator } from "@/components/ui/separator";
import React from "react";
import Image from "next/image";
import BannerImage from "@/public/images/TaskFlow Banner.png";
import { motion } from "framer-motion";
import Coffee01Icon from "@/public/svg/icons/Coffee01Icon";
import BuyMeACoffeeBrandLogo from "@/public/svg/icons/BuyMeACoffeeBrandLogo";
import { iconLinkData } from "@/lib/Data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SupportMe() {
  return (
    <PageTemplate>
      <motion.div
        className="max-w-3xl mx-auto py-8 md:py-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-6 rounded-2xl overflow-hidden shadow-lg"
          variants={itemVariants}
        >
          <Image src={BannerImage} alt="TaskFlow Banner" placeholder="blur" />
        </motion.div>

        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8"
          variants={itemVariants}
        >
          Support <span className="text-red-500">Me</span>
        </motion.h1>
        <motion.div
          className="text-gray-700 dark:text-gray-300 space-y-8"
          variants={containerVariants}
        >
          <motion.p
            className="text-base md:text-lg leading-relaxed mb-6"
            variants={itemVariants}
          >
            Your support enables me to create valuable content and resources for free, helping people improve their productivity and organization.
          </motion.p>
          <motion.h2
            className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4"
            variants={itemVariants}
          >
            How Can You Support?
          </motion.h2>
          <motion.ul
            className="list-disc pl-6 space-y-2 text-start"
            variants={itemVariants}
          >
            <motion.li
              className="text-base md:text-lg leading-relaxed"
              variants={itemVariants}
            >
              Consider buying me a coffee to fuel late-night coding sessions!
            </motion.li>
            <motion.li
              className="text-base md:text-lg leading-relaxed"
              variants={itemVariants}
            >
              Your support helps in covering website hosting costs and tools/software used for content creation.
            </motion.li>
          </motion.ul>
          <Separator className="my-8 dark:bg-slate-700" />

          <motion.h2
            className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4"
            variants={itemVariants}
          >
            Payment Options
          </motion.h2>
          <motion.div
            className="border rounded-2xl p-2"
            variants={itemVariants}
          >
            <motion.a
              className="my-2 cursor-pointer inline-flex items-center justify-center px-6 py-3 text-lg font-medium leading-6 text-white bg-[#4CA053] rounded-lg shadow-md hover:bg-black hover:shadow-lg transform hover:-translate-y-1 transition ease-in-out duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CA053]"
              onClick={() =>
                window.open("https://buymeacoffee.com/rishabhgokhe", "_blank")
              }
            >
              <span className="mr-1">
                <Coffee01Icon />
              </span>{" "}
              Buy me a coffee
            </motion.a>
            <motion.p
              className="text-xs flex justify-center items-center gap-1"
              variants={itemVariants}
            >
              Powered by <BuyMeACoffeeBrandLogo />
            </motion.p>
          </motion.div>

          <Separator className="my-8 dark:bg-slate-700" />
          <motion.h2
            className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-base md:text-lg leading-relaxed mb-6"
            variants={itemVariants}
          >
            Hi there! 👋 I&apos;m{" "}
            <a
              className="font-semibold hover:text-green-500 transition ease-in-out duration-500"
              href={iconLinkData[0].link}
            >
              Rishabh Gokhe
            </a>
            , the developer behind TaskFlow. I&apos;m passionate about creating
            useful and user-friendly web applications that help people improve
            their productivity and organization. I&apos;m always learning new
            technologies to enhance my skills and deliver better solutions.
            TaskFlow is a project born out of my desire to create a simple yet
            powerful tool for managing tasks. I believe that staying organized
            is key to success, and TaskFlow is designed to help users achieve
            just that.
          </motion.p>
        </motion.div>
      </motion.div>
    </PageTemplate>
  );
}
