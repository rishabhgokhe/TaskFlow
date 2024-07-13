import { motion } from "framer-motion";

export default function FadeDownDiv({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="mt-4"
    >
      {children}
    </motion.div>
  );
}
