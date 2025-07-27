import React from "react";
import HeroBlur from "../assets/components/HeroBlur";
import GlowCard from "../assets/components/GlowCard";
import Update from "../assets/components/Update";
import FadeUp from "../assets/animations/FadeUp";
import Particles from "../assets/animations/Particles";
import Button from "../assets/components/Button";

function Contact() {
  return (
    <section className="flex flex-col gap-10 max-md:h-[80vh]">
      <div className="h-screen flex items-center relative w-full max-md:h-[100vh]">
        <Particles className="absolute top-0 left-0 w-full" />
        <h1>COntac</h1>
      </div>
      <FadeUp
        className="z-50 max-2xl:px-10 max-md:px-6"
        Children={
          <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="text-7xl font-extrabold w-[80%] text-center max-lg:w-full max-md:text-4xl max-sm:text-3xl">
              Building the Future of reusable rocket technology
            </h1>
            <p className="text-white/50 text-center">
              Leading the way in space technology and engineering.
            </p>
            <span className="flex gap-4">
              <Button
                text="Join the mission >"
                className="bg-white text-black"
              />
              <Button
                text="Learn More >"
                className="border border-white/50 hover:bg-[#030014]"
              />
            </span>
          </div>
        }
      />
    </section>
  );
}

export default Contact;
