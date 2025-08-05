import React from "react";
import { motion, spring } from "framer-motion";

function FadeUp({ Children, className }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: "50%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.25, 0.8, 0.25, 1], type: spring }}
        className={className}
      >
        {Children}
      </motion.div>
    </>
  );
}

export default FadeUp;
