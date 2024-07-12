"use client";
import PageTemplate from "@/components/elements/PageTemplate";
import React from "react";
import { motion } from "framer-motion";
import { releaseNotesData } from "@/lib/Data";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  hover: { y: -10, transition: { duration: 0.3 } },
};

export default function ReleaseNote() {
  return (
    <PageTemplate>
      <div className="max-w-5xl mx-auto py-8 md:py-10 px-4">
        <motion.h1
          className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          Release Notes
        </motion.h1>
        <motion.div
          className="grid gap-6 md:gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {releaseNotesData.length > 0 ? (
            releaseNotesData.map((release, index) => (
              <motion.div
                key={index}
                className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-lg dark:shadow-none bg-white dark:bg-gray-800 relative"
                variants={itemVariants}
                whileHover="hover"
              >
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  Version {release.version}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Released on {release.date}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {release.notes.map((note, noteIndex) => (
                    <li key={noteIndex} className="text-lg leading-relaxed text-left">
                      {note}
                    </li>
                  ))}
                </ul>
                {index === 0 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 ">
                    Latest Version
                  </Badge>
                )}
              </motion.div>
            ))
          ) : (
            <motion.div
              className="col-span-full text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            >
              <h2 className="text-2xl font-medium text-gray-800 dark:text-white">
                No Recent Releases
              </h2>
            </motion.div>
          )}
        </motion.div>
      </div>
    </PageTemplate>
  );
}
