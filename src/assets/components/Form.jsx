import React from "react";
import Button from "./Button";
import FadeUp from "../animations/FadeUp";

function Form() {
  return (
    <div>
      <FadeUp
        Children={
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
        }
      />
    </div>
  );
}

export default Form;
