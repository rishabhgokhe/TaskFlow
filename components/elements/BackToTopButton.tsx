"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToolTipIcon } from "./TootTipIcon";
import { Button } from "../ui/button";

import CircleArrowUp03Icon from "@/public/svg/icons/CircleArrowUp03Icon";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ToolTipIcon
            name="Scroll to Top"
            triggerJsxElement={
              <Button
                variant="outline"
                size="icon"
                className="ml-2 h-8 w-8"
                onClick={scrollToTop}
              >
                <CircleArrowUp03Icon />
              </Button>
            }
          ></ToolTipIcon>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
