import React from "react";
import FadeUp from "../assets/animations/FadeUp";
import Particles from "../assets/animations/Particles";
import Button from "../assets/components/Button";
import SpotlightCard from "../assets/animations/SpotlightCard";
import Card from "../assets/components/Card";
import BlurText from "../assets/animations/BlurText";

function Contact() {
  return (
    <section className="flex flex-col gap-10  bg-black">
      <SpotlightCard
        className="px-0"
        children={
          <div>
            <div className="relative h-screen w-screen overflow-hidden">
              <Particles
                className="absolute top-0 left-0 w-full h-full z-0"
                particleCount="7000"
              />

              <div className="absolute inset-0 flex items-center justify-center z-10">
                <h1 className="text-6xl font-bold inter-mono-font text-center">
                  <BlurText text="Contact Us" />
                </h1>
              </div>
            </div>

            <div className="min-h-screen">
              <FadeUp
                className="z-50 max-2xl:px-10 max-md:px-6"
                Children={
                  <div className="flex flex-col justify-center items-center gap-8">
                    <div className="  h-full flex flex-col gap-2 bg-white/5 rounded-full shadow-md backdrop-blur-sm border transition-all duration-500 border-white/10 px-4 py-2 ${className} max-md:px-4 ">
                      <p>Let's Connect</p>
                    </div>
                    <span className="gap-4 w-full flex items-center justify-center text-center flex-col">
                      <h1 className="text-6xl max-lg:text-5xl max-md:text-3xl font-bold">
                        Drop us a line
                      </h1>
                      <p className="text-xl text-white/50 text-center w-[60%] max-lg:w-full max-md:text-sm">
                        Ready to reach for the stars? Let's start a conversation
                        about your space technology needs and how we can help
                        you achieve them.
                      </p>
                    </span>
                    <span className="gap-4 w-full flex items-center justify-center text-center flex-col">
                      <h3 className="text-4xl font-semibold max-md:text-3xl">
                        Send us a message
                      </h3>
                      <p className="text-xl text-white/50 text-center w-[60%] max-lg:w-full max-md:text-sm">
                        Tell us about your project and we'll get back to you
                        within 24 hours.
                      </p>
                    </span>
                    <form
                      action=""
                      className="w-[50%] max-lg:w-full m-auto flex flex-col gap-4"
                    >
                      <div className="grid grid-cols-2 items-center justify-center gap-4 max-md:grid-cols-1">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="bg-white/10 h-full rounded-md p-4 border-white/30 border "
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="bg-white/10 h-full rounded-md p-4 border-white/30 border "
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Company (Optional)"
                        className="bg-white/10 h-full rounded-md p-4 border-white/30 border w-full"
                      />
                      <textarea
                        rows="4"
                        type="text"
                        placeholder="Tell us about your project"
                        className="bg-white/10 h-full rounded-md p-4 border-white/30 border w-full"
                      />
                      <Button
                        text="Send Message →"
                        className="bg-white text-black w-full col-span-1 max-md:mt-4"
                      />
                    </form>
                  </div>
                }
              />
            </div>
          </div>
        }
      />
    </section>
  );
}

export default Contact;
