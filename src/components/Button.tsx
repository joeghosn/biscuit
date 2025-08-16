import React from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "../utils/cn";
type Props = React.ComponentProps<typeof motion.button> & {
  asChild?: boolean;
};
export default function Button({ className = "", children, ...props }: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -1 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap",
        "rounded-2xl px-5 py-3 font-semibold shadow-sm",
        "bg-biscuit-orange text-white hover:brightness-110",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
