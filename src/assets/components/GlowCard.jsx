import React from "react";

function GlowCard({ title, text }) {
  return (
    <div
      className={` w-full flex flex-col gap-2 bg-white/5 rounded-2xl shadow-md backdrop-blur-sm border transition-all duration-500 border-white/10 px-10 py-6 hover:bg-white/10 hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-400/10 hover:translate-y-[-2px]`}
    >
      <span className="relative bg-gradient-to-l from-gray-600 to-pink-400 w-6 h-6 rounded-full ]"></span>
      <h1 className="text-[30px]">{title}</h1>
      <p className="text-[16px]">{text}</p>
    </div>
  );
}

export default GlowCard;
