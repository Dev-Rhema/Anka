import React from "react";
import galaxy from "../images/anka.mp4";
import ankaSpace from "../images/AnkaSpace_mark.svg";
import logo from "../images/AnkaLogo.webp";

function Footer() {
  return (
    <section className="relative w-full h-screen  bg-black">
      <video
        src={galaxy}
        loop
        autoPlay
        muted
        playsInline
        className="w-full h-screen object-cover absolute inset-0"
      />
      <footer className="absolute bottom-0 left-0 right-0 border-t-white/50 bg-[rgba(0,0,0,0.9)] h-[50vh] pt-6 px-4">
        <div className="">
          <div className="flex justify-center items-center gap-6 flex-col text-center">
            <img src={logo} className="w-[420px]" alt="" />
            <p className="text-white/50">
              Pioneering the future of space technology with innovative <br />{" "}
              rocket systems and cutting-edge solutions.
            </p>
            <img
              src={ankaSpace}
              className="w-[256px] opacity-20 img-filter hover:opacity-30"
              alt=""
            />
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
