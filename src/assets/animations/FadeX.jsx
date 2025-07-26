import React from "react";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";

function FadeX({ ChildA, ChildB, className }) {
  return (
    <>
      <motion.div className=" h-full w-full grid grid-cols-2 gap-8 justify-between items-center overflow-hidden max-lg:grid-cols-1">
        <motion.div
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: easeOut }}
          className={`w-full h-full ${className}`}
        >
          {ChildA}
        </motion.div>
        <motion.div
          className={`w-full h-full ${className}`}
          initial={{ opacity: 0, translateX: "100%" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.4, ease: easeOut }}
        >
          {ChildB}
        </motion.div>
      </motion.div>
    </>
  );
}

export default FadeX;
