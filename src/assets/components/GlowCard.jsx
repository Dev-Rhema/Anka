import React, { useState } from "react";
import { motion } from "framer-motion";

function GlowCard({ title, text, color, children, className }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: "60%" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        "--border-color": color,
        border: isHovered ? `1px solid ${color}` : "",
      }}
      className={`relative w-full flex flex-col gap-2 bg-white/5 rounded-2xl shadow-md backdrop-blur-sm 
        border border-white/10 p-6 
        hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-400/10 hover:translate-y-[-2px] text-center 
        max-md:border-[var(--border-color)] 
        max-md:p-4 max-md:text-[12px] ${className} 
        hover:transition-all hover:duration-500`}
    >
      <span className="absolute top-0 left-0 m-6 bg-gradient-to-l from-gray-600 to-pink-400 w-6 h-6 rounded-full opacity-10"></span>
      <h1 className="text-[30px] max-md:text-[24px] font-semibold">{title}</h1>
      <p className="text-[16px] max-md:text-sm">{text}</p>
      <div>{children}</div>
      <span className="absolute bottom-0 right-0 bg-gradient-to-l from-gray-600 to-pink-400 w-6 h-6 rounded-full m-6 opacity-10"></span>
    </motion.div>
  );
}

export default GlowCard;
