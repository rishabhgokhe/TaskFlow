"use client";
import PageTemplate from "@/components/elements/PageTemplate";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { termsAndConditionData } from "@/lib/Data"; // Assuming TermsAndConditionData is the type of termsAndConditionData
import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  title: string;
  content: string | string[];
}

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

export default function TermsAndCondition() {
  const sections: SectionProps[] = [
    { title: "Introduction", content: termsAndConditionData.introduction },
    { title: "Acceptance of Terms", content: termsAndConditionData.acceptanceOfTerms },
    { title: "License to Use", content: termsAndConditionData.licenseToUse },
    { title: "User Obligations", content: termsAndConditionData.userObligations.heading },
    { title: "Limitation of Liability", content: termsAndConditionData.limitationOfLiability },
    { title: "Changes to These Terms", content: termsAndConditionData.changesToTheseTerms },
    { title: "Contact Information", content: termsAndConditionData.contactInformation },
  ];

  return (
    <PageTemplate>
      <motion.div
        className="max-w-5xl mx-auto py-8 md:py-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
          Terms and Conditions
        </h1>
        <motion.div
          className="text-gray-700 dark:text-gray-300 space-y-8 text-left"
          variants={containerVariants}
        >
          {sections.map((section, index) => (
            <motion.section
              key={index}
              variants={itemVariants}
              className="mb-8"
            >
              <h2 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-4">
                {index + 1}. {section.title}
              </h2>
              {Array.isArray(section.content) ? (
                <ul className="list-disc pl-6 space-y-2">
                  {section.content.map((item, id) => (
                    <motion.li key={id} variants={itemVariants}>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <motion.p
                  className="text-base md:text-lg leading-relaxed mb-4 md:mb-6"
                  variants={itemVariants}
                >
                  {section.content}
                </motion.p>
              )}
            </motion.section>
          ))}
          <Separator className="dark:bg-slate-700 my-8" />
          <motion.h2
            className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-4"
            variants={itemVariants}
          >
            Full Terms and Conditions
          </motion.h2>
          <motion.div
            className="overflow-hidden rounded-md border bg-gray-50 dark:bg-gray-900"
            variants={itemVariants}
          >
            <ScrollArea className="h-64 w-full p-4 overflow-y-scroll">
              <pre className="whitespace-pre-wrap leading-relaxed text-base md:text-lg">
                {termsAndConditionData.termsAndCondition}
              </pre>
            </ScrollArea>
          </motion.div>
        </motion.div>
      </motion.div>
    </PageTemplate>
  );
}
