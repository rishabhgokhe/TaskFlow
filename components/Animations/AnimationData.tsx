import { motion } from "framer-motion";
import { ForwardRefComponent } from "framer-motion";

interface MotionBlock {
  variant: string;
  component: ForwardRefComponent<any, any>;
}

export const MotionBlockData: MotionBlock[] = [
  {
    variant: "div",
    component: motion.div,
  },
  {
    variant: "p",
    component: motion.p,
  },
  {
    variant: "ul",
    component: motion.ul,
  },
  {
    variant: "h1",
    component: motion.h1,
  },
  {
    variant: "h2",
    component: motion.h2,
  },
  {
    variant: "h3",
    component: motion.h3,
  },
];
