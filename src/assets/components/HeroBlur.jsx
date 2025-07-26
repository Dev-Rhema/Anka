import React, { useState } from "react";
import Squares from "../animations/Squares";
import BlurText from "../animations/BlurText";
import SpotlightCard from "../animations/SpotlightCard";

function HeroBlur({ topText, title, subtitle, bottomText }) {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);

  return (
    <>
      <SpotlightCard className="h-screen ">
        <Squares />
        <div className="absolute top-0 left-0 flex flex-col items-center pt-30 justify-center w-full h-full overflow-hidden max-md:px-6 text-center max-sm:px-4">
          <div className="h-[10%] flex justify-center items-center">
            <BlurText
              text={topText}
              delay={320}
              direction="bottom"
              className="text-[16px] max-md:text-[14px] inter-mono-font"
              onAnimationComplete={() => setShowSecond(true)}
            />
          </div>
          <div className="h-[80%]  flex gap-10 justify-center flex-col text-center items-center">
            {showSecond && (
              <BlurText
                text={title}
                delay={320}
                direction="bottom"
                className="text-6xl flex justify-center text-center max-md:text-5xl max-sm:text-4xl"
                onAnimationComplete={() => setShowThird(true)}
              />
            )}
            {showThird && (
              <BlurText
                text={subtitle}
                delay={320}
                direction="bottom"
                className="shadow-2xl flex justify-center text-center text-4xl max-md:text-3xl max-sm:text-2xl h-[10%]"
                onAnimationComplete={() => setShowFourth(true)}
              />
            )}
          </div>
          <div className="h-[10%]  flex justify-center items-center">
            {showFourth && (
              <BlurText
                text={bottomText}
                delay={320}
                className="text-[16px] inter-mono-font max-md:text-[14px]"
                direction="bottom"
              />
            )}
          </div>
        </div>
      </SpotlightCard>
    </>
  );
}

export default HeroBlur;
