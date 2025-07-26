import React from "react";
import DecryptedText from "../animations/DecryptedText";

const Button = ({ className, text }) => {
  return (
    <button
      className={` geist-font px-6 py-4 cursor-pointer rounded-sm ${className} max-md:px-2 max-md:py-2`}
    >
      <DecryptedText
        text={text}
        className="max-md:text-sm max-sm:text-[12px]"
      />
    </button>
  );
};

export default Button;
