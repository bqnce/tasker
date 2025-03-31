import { motion } from "framer-motion";

export const FloatingBlob = () => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-30 h-50 bg-blue-500 blur-3xl opacity-75 rounded-[50%]"
      animate={{ x: [0, 20, 40, 20, 0], y: [0, 15, 0, -15, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
};