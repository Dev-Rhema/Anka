import React from "react";

function Card({ content, className }) {
  return (
    <div
      className={` w-full h-full flex flex-col gap-2 bg-white/5 rounded-2xl shadow-md backdrop-blur-sm border transition-all duration-500 border-white/10 p-6 ${className} max-md:p-4 `}
    >
      {content}
    </div>
  );
}

export default Card;
