import React from "react";
import FadeUp from "../animations/FadeUp";
import Button from "./Button";
import Card from "./Card";

function Update() {
  return (
    <div className="h-[90vh] flex w-full items-center justify-center">
      <FadeUp
        Children={
          <div className="w-[70%] m-auto max-2xl:w-full ">
            <Card
              content={
                <div className="flex items-center justify-center flex-col text-center p-4 gap-6 max-md:p-0">
                  <h1 className="text-5xl font-bold max-md:text-3xl">
                    Stay Updated
                  </h1>
                  <p className="text-[20px] max-md:text-[14px]">
                    Join our mission updates and be the first to hear about
                    launches, breakthroughs, and behind-the-scenes progress.
                  </p>
                  <div className="grid grid-cols-4 gap-4 max-md:grid-cols-1 max-md:gap-0 w-full">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email address"
                      className="bg-white/10 h-full rounded-md p-4 border-white/30 border col-span-3"
                    />

                    <Button
                      text="Sign Up >"
                      className="bg-white text-black w-full col-span-1 max-md:mt-4"
                    />
                  </div>
                </div>
              }
            />{" "}
          </div>
        }
      />
    </div>
  );
}

export default Update;
