import { motion } from "framer-motion";

export default function AnimatedHeading() {
  return (
    <motion.h1
      className="text-4xl font-bold"
      animate={{ color: ["#e5e5e5", "#d5d5d5", "#a3a3a3", "#c5c5c5"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      Your tasks, simplified
    </motion.h1>
  );
}
