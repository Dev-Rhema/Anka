import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import DecryptedText from "../animations/DecryptedText";
import logo from "../images/AnkaLogo.webp";

function MobileNav({ className, onClose }) {
  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-screen bg-black text-white z-[1000] p-6 overflow-hidden ${className} flex flex-col gap-10 geist-font`}
    >
      <div className="w-full flex items-center justify-center relative">
        <div className="flex items-center justify-center w-1/3 max-lg:w-full">
          <img src={logo} className="w-[200px] h-full" alt="" />
        </div>
        <button
          className="text-3xl absolute 
       flex justify-end cursor-pointer w-full items-center"
          onClick={onClose}
        >
          <IoClose className="hover:scale-120 transition" />
        </button>
      </div>

      <div className="flex flex-col  h-full text-3xl gap-10 pl-10 pt-10">
        <NavLink to={`/`} onClick={onClose}>
          <DecryptedText text="Home" />
        </NavLink>
        <NavLink to={"/about-us"} onClick={onClose}>
          <DecryptedText text="About Us" />
        </NavLink>
        <NavLink to={"/mission-phoenix"} onClick={onClose}>
          <DecryptedText text="Mission Phoenix" />
        </NavLink>
        <NavLink to={"/shop"} onClick={onClose}>
          <DecryptedText text="Shop" />
        </NavLink>
        <NavLink to={"/careers"} onClick={onClose}>
          <DecryptedText text="Careers" />
        </NavLink>
        <NavLink to={"/contact-us"} onClick={onClose}>
          <DecryptedText text="Contact Us" />
        </NavLink>
      </div>
    </div>
  );
}

export default MobileNav;
