import React from "react";
import { MotionBlockData } from "./AnimationData";

export default function FadeUp({
  children,
  variant,
  delay = 0,
  duration = 0.5,
  className,
}: {
  children: React.ReactNode;
  variant: string;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const properties = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay, duration },
    className,
  };

  const motionComponent = MotionBlockData.find(
    (item) => item.variant === variant
  )?.component;

  if (!motionComponent) {
    return null;
  }

  return React.createElement(motionComponent, properties, children);
}
