import React, { useState } from "react";
import Squares from "../animations/Squares";
import BlurText from "../animations/BlurText";

function HeroBlur() {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);

  return (
    <>
      <Squares />
      <div className="absolute top-0 left-0 flex flex-col items-center pt-30 justify-center w-full h-full overflow-hidden">
        <div className="h-[10%] flex justify-center items-center">
          <BlurText
            text="Hello How are you doing"
            delay={320}
            direction="bottom"
            className="text-[16px] inter-mono-font"
            onAnimationComplete={() => setShowSecond(true)}
          />
        </div>
        <div className="h-[80%] items-center flex gap-10 justify-center flex-col">
          {showSecond && (
            <BlurText
              text="Hello How are you doing again"
              delay={320}
              direction="bottom"
              className="text-6xl"
              onAnimationComplete={() => setShowThird(true)}
            />
          )}
          {showThird && (
            <BlurText
              text="Hello How are you doing Subtitle"
              delay={320}
              direction="bottom"
              className="shadow-2xl border-white/50 text-4xl h-[10%]"
              onAnimationComplete={() => setShowFourth(true)}
            />
          )}
        </div>
        <div className="h-[10%]  flex justify-center items-center">
          {showFourth && (
            <BlurText
              text="Hello How are you doing again again"
              delay={320}
              className="text-[16px] inter-mono-font"
              direction="bottom"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default HeroBlur;
