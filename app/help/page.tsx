"use client";
import PageTemplate from "@/components/elements/PageTemplate";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/lib/Data";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Search02Icon from "@/public/svg/icons/Search02Icon";
import { motion } from "framer-motion";
import {FadeDown} from "animease";

export default function Help() {
  const initial = { opacity: 0, y: -20 };
  const animate = ({ delay }: { delay: number }) => {
    return {
      opacity: 1,
      y: 0,
      transition: { delay: { delay }, duration: 0.6 },
    };
  };

  return (
    <PageTemplate>
      <div className="max-w-3xl mx-auto py-5 px-4">
        <FadeDown
          variant={"h1"}
          duration={0.6}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8"
        >
          Help Center
        </FadeDown>
        <div className="text-gray-700 dark:text-gray-300 space-y-8">
          <FadeDown
            variant={"p"}
            delay={0.3}
            duration={0.6}
            className="text-base md:text-lg leading-relaxed mb-6"
          >
            Welcome to TaskFlow! Learn how to get started with our simple yet
            powerful task management tool.
          </FadeDown>

          <Separator className="dark:bg-slate-700" />

          <FadeDown
            variant={"div"}
            delay={0.4}
            duration={0.6}
            className="flex justify-center mb-6"
          >
            <div className="relative w-full max-w-2xl">
              <Input className="pl-10" placeholder="Search for a question" />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search02Icon />
              </div>
            </div>
          </FadeDown>

          <FadeDown
            variant={"h2"}
            delay={0.5}
            duration={0.6}
            className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4"
          >
            FAQs Section
          </FadeDown>

          <FadeDown
            variant={"p"}
            delay={0.6}
            duration={0.6}
            className="text-base md:text-lg leading-relaxed mb-4"
          >
            Find answers to commonly asked questions about TaskFlow. Search for
            exact results.
          </FadeDown>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: id * 0.1 + 0.7, duration: 0.6 },
                }}
              >
                <AccordionItem key={id} value={`item-${id}`} className="">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-gray-800 dark:text-white mb-0 hover:text-red-600 dark:hover:text-red-300 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                  </motion.div>
                  <AccordionContent className="text-base md:text-lg leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <FadeDown
            variant={"h2"}
            delay={0.9}
            duration={0.6}
            className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4"
          >
            Contact Support
          </FadeDown>

          <FadeDown
            variant={"p"}
            delay={1}
            duration={0.6}
            className="text-base md:text-lg leading-relaxed"
          >
            Need further assistance? Contact our support team for help at{" "}
            <a
              className="text-blue-600 hover:underline"
              href="mailto:support@taskflow.com"
            >
              support@taskflow.com
            </a>
            .
          </FadeDown>
        </div>
      </div>
    </PageTemplate>
  );
}
