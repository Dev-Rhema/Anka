import React, { useState } from "react";
import DecryptedText from "../animations/DecryptedText";
import logo from "../images/AnkaLogo.webp";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

function Navbar() {
  const [mobNav, setMobNav] = useState(false);

  return (
    <>
      {mobNav && <MobileNav onClose={() => setMobNav(false)} />}
      <nav className="flex px-10 py-5 justify-between fixed top-0 left-0 w-full bg-black z-[100] geist-font items-center text-lg border-b border-white/10 max-2xl:text-sm max-lg:px-6">
        <div className="flex items-center justify-start gap-10 w-1/3 max-lg:hidden">
          <NavLink to={`/`}>
            <DecryptedText text="Home" />
          </NavLink>
          <NavLink to={"/about-us"}>
            <DecryptedText text="About Us" />
          </NavLink>
          <NavLink to={"/mission-phoenix"}>
            <DecryptedText text="Mission Phoenix" />
          </NavLink>
        </div>
        <div className="flex items-center justify-center w-1/3 max-lg:w-full">
          <img src={logo} className="w-[200px] h-full" alt="" />
        </div>
        <div className="flex items-center justify-end gap-6 w-1/3 max-lg:hidden">
          <NavLink to={"/shop"}>
            <DecryptedText text="Shop" />
          </NavLink>
          <NavLink to={"/careers"}>
            <DecryptedText text="Careers" />
          </NavLink>
          <NavLink to={"/contact-us"}>
            <DecryptedText text="Contact Us" />
          </NavLink>
        </div>
        <button
          className="cursor-pointer lg:hidden"
          onClick={() => setMobNav((prev) => !prev)}
        >
          <IoMdMenu className="text-3xl" />
        </button>
      </nav>
    </>
  );
}

export default Navbar;
