"use client";
import PageTemplate from "@/components/elements/PageTemplate";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { motion } from "framer-motion";
import { releaseNotesData, upcomingFeatures } from "@/lib/Data";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import FadeDown from "@/components/Animations/FadeDown";

import Task01Icon from "@/public/svg/icons/Task01Icon";
import CancelCircleIcon from "@/public/svg/icons/CancelCircleIcon";
import AppStoreIcon from "@/public/svg/icons/AppStoreIcon";
import AppleIcon01 from "@/public/svg/icons/AppleIcon01";

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
      <div className="max-w-5xl mx-auto py-5 px-4">
        <FadeDown
          variant="h1"
          duration={0.6}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center"
        >
          Release Notes
        </FadeDown>

        <FadeDown variant="div" delay={0.3} duration={0.6}>
          <div className="border rounded-lg mb-5 shadow-lg px-6 py-5 bg-zinc-100 dark:bg-zinc-900">
            <h2 className="text-2xl font-semibold mb-4 text-cente text-[#16A34A]">
              Upcoming Features and Updates
            </h2>
            <ul className="flex flex-col space-y-2 text-left">
              {upcomingFeatures.map((item, index) => (
                <li
                  key={index}
                  className="inline-flex flex-wrap items-center space-x-2"
                >
                  <span>{item}</span>
                  {index === 0 && <AppStoreIcon className="w-5 h-5" />}
                  {index === 0 && <AppleIcon01 className="w-5 h-5" />}
                </li>
              ))}
            </ul>
          </div>
        </FadeDown>

        <FadeDown
          className="grid gap-6 md:gap-8 md:grid-cols-2"
          variant={"div"}
          delay={0.5}
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
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Released on {release.date}
                </p>
                <Badge
                  className={`${release.badge?.color} bg-purple-500 text-white hover:bg-black mb-1 cursor-default`}
                >
                  {release.badge?.title}
                </Badge>
                <Separator />
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-wrap line-clamp-5">
                  {release.notes.map((note, noteIndex) => (
                    <li
                      key={noteIndex}
                      className="text-lg leading-relaxed text-left"
                    >
                      {note}
                    </li>
                  ))}
                </ul>
                {index === 0 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 ">
                    Latest Version
                  </Badge>
                )}

                <Drawer>
                  {/* Button or CustomButton is not used here to avoid hydration errors because DrawerTrigger also contains a button tag */}
                  <DrawerTrigger className="flex w-full justify-center items-center gap-1 border rounded-lg px-2 py-1.5 mt-2 hover:bg-gray-200 transition ease-in-out duration-500 dark:border-gray-500 dark:hover:bg-white dark:hover:text-black">
                    Read Full
                    <Task01Icon />
                  </DrawerTrigger>
                  <DrawerContent className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                    <DrawerHeader className="p-4 cursor-grab flex justify-between items-center border-b dark:border-gray-700">
                      <DrawerTitle className="text-3xl text-center flex-grow text-gray-800 dark:text-white">
                        {`Version - ${release.version}`}
                      </DrawerTitle>
                      <DrawerClose className="ml-2">
                        <CancelCircleIcon />
                      </DrawerClose>
                    </DrawerHeader>
                    <DrawerDescription className="text-center my-1 text-red-500 font-semibold text-base">{`Released on ${release.date}`}</DrawerDescription>
                    <div className="p-4 overflow-y-scroll max-h-[60vh] sm:px-14">
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                        {release.notes.map((note, noteIndex) => (
                          <li
                            key={noteIndex}
                            className="text-lg leading-relaxed text-left"
                          >
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <DrawerFooter className="flex justify-center flex-col items-center border-t border-gray-300 dark:border-gray-700 p-4">
                      <p className="text-center text-gray-700 dark:text-gray-300">
                        We are always working to provide the best features{" "}
                        <a
                          href="/buy-a-coffee"
                          className="text-blue-500 underline hover:text-blue-700 dark:hover:text-blue-300"
                        >
                          Support Us
                        </a>
                      </p>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
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
        </FadeDown>
      </div>
    </PageTemplate>
  );
}
