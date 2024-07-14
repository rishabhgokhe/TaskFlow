"use client";
import PageTemplate from "@/components/elements/PageTemplate";
import React from "react";
import { motion } from "framer-motion";
import CustomLinkButton from "@/components/elements/CustomLinkButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { aboutData } from "@/lib/Data";
import { baseRedColor } from "@/lib/Colors";

import MailOpenIcon from "@/public/svg/icons/MailOpenIcon";
import UserCircleIcon from "@/public/svg/icons/UserCircleIcon";
import AppleFinderIcon from "@/public/svg/icons/AppleFinderIcon";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <PageTemplate>
      <motion.div
        className="max-w-5xl mx-auto py-5 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6"
          variants={itemVariants}
        >
          About <span className={`text-red-500`}>Us</span>
        </motion.h1>
        <motion.div
          className="flex flex-col items-center mb-4 md:mb-6"
          variants={itemVariants}
        >
          <Avatar className="w-28 md:w-40 h-28 md:h-40 mb-2 md:mb-4">
            <AvatarImage src="https://avatars.githubusercontent.com/u/120303705?v=4" />
            <AvatarFallback>
              <UserCircleIcon className="w-full h-full text-gray-300" />
            </AvatarFallback>
          </Avatar>
          <motion.div
            className="text-lg md:text-xl text-gray-800 dark:text-white font-semibold"
            variants={itemVariants}
          >
            Rishabh Gokhe
          </motion.div>
          <motion.div
            className="text-sm md:text-base text-gray-600 dark:text-gray-400"
            variants={itemVariants}
          >
            Founder
          </motion.div>
        </motion.div>
        <motion.p
          className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:mb-6"
          variants={itemVariants}
        >
          {aboutData.welcomeText}
        </motion.p>
        <motion.p
          className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:mb-6"
          variants={itemVariants}
        >
          {aboutData.founderText}
        </motion.p>
        <div className="text-left">
          {/* macOS finder logo */}
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-lg border p-1">
              <span className="opacity-40 font-bold my-1 mx-1">
                Developing on macOS
              </span>{" "}
              <AppleFinderIcon className="w-6 h-6" />
            </div>
          </div>

          <motion.h2
            className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-4"
            variants={itemVariants}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:mb-6"
            variants={itemVariants}
          >
            {aboutData.missionText}
          </motion.p>
          <motion.div
            className="flex justify-center items-center mb-2 sm:mb-0"
            variants={itemVariants}
          >
            <CustomLinkButton
              href="subscribe-newsletter"
              rightIcon={<MailOpenIcon />}
            >
              Subscribe to Newsletter
            </CustomLinkButton>
          </motion.div>
          <motion.h2
            className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-4"
            variants={itemVariants}
          >
            What We Offer
          </motion.h2>
          <motion.ul
            className="list-disc text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:mb-6"
            variants={itemVariants}
          >
            {aboutData.whatWeOffer.map((item, id) => (
              <motion.li
                key={id}
                className="mb-2"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <span className="font-semibold">{item.listTitle}</span>:{" "}
                {item.listDescription}
              </motion.li>
            ))}
          </motion.ul>
          <motion.h2
            className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-4"
            variants={itemVariants}
          >
            Our Values
          </motion.h2>
          <motion.ul
            className="list-disc text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:mb-6"
            variants={itemVariants}
          >
            {aboutData.values.map((item, id) => (
              <motion.li
                key={id}
                className="mb-2"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <span className="font-semibold">{item.listTitle}</span>:{" "}
                {item.listDescription}
              </motion.li>
            ))}
          </motion.ul>
          <Separator className="dark:bg-slate-700" />
          <motion.p
            className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:mb-6"
            variants={itemVariants}
          >
            Join us on our journey to transform task management and
            productivity. Whether you are a freelancer, entrepreneur, or part of
            a large organization, TaskFlow is here to empower you to achieve
            more.
          </motion.p>
        </div>
      </motion.div>
    </PageTemplate>
  );
}
