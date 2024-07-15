"use client";
import { motion } from "framer-motion";
import BackButton from "@/components/elements/BackButton";
import CustomLinkButton from "@/components/elements/CustomLinkButton";
import Home01Icon from "@/public/svg/icons/Home01Icon";
import FadeDown from "@/components/Animations/FadeDown";
import FadeUp from "@/components/Animations/FadeUp";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen p-6"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-100 dark:bg-zinc-900 p-10 rounded-lg shadow-2xl text-center"
      >
        <FadeDown
          variant="h3"
          delay={0.2}
          className="text-4xl font-semibold text-gray-700 dark:text-gray-200 mb-2"
        >
          Whoops!! Something went wrong.
        </FadeDown>

        <FadeDown
          variant="h2"
          delay={0.4}
          className="text-9xl font-extrabold text-gray-800 dark:text-gray-300 mb-4"
        >
          404
        </FadeDown>

        <FadeDown
          variant="p"
          delay={0.6}
          className="text-gray-600 dark:text-gray-100 mb-8"
        >
          Sorry, we could not find the page you are looking for.
        </FadeDown>

        <FadeUp
          variant="div"
          delay={0.8}
          className="flex items-center justify-between gap-3"
        >
          <BackButton />
          <CustomLinkButton href="/" rightIcon={<Home01Icon />}>
            Return Home
          </CustomLinkButton>
        </FadeUp>

      </motion.div>
    </motion.div>
  );
}
