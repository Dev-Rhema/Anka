import React from "react";
import { motion } from "framer-motion";

function FadeUp({ Children, className }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: "50%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={className}
      >
        {Children}
      </motion.div>
    </>
  );
}

export default FadeUp;
