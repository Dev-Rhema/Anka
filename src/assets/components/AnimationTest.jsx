import React, { useState } from "react";
import FadeX from "../animations/FadeX";
import FadeUp from "../animations/FadeUp";
import BlurText from "../animations/BlurText";
import SpotlightCard from "../animations/SpotlightCard";
import DecryptedText from "../animations/DecryptedText";
import Squares from "../animations/Squares";
import Particles from "../animations/Particles";
import GlowCard from "./GlowCard";

function AnimationTest() {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  return (
    <div>
      <FadeUp Children={<h1 className="text-4xl">Hollaaaaa</h1>} />
      <FadeX
        ChildA={<div className="w-full bg-red-900">BOX A</div>}
        ChildB={<div className="w-full bg-green-900">BOX B</div>}
      />

      <BlurText
        text="Hello How are you doing"
        delay={250}
        direction="bottom"
        onAnimationComplete={() => setShowSecond(true)}
      />

      {showSecond && (
        <BlurText
          text="Hello How are you doing again"
          delay={250}
          direction="bottom"
          onAnimationComplete={() => setShowThird(true)}
        />
      )}

      {showThird && (
        <BlurText
          text="Hello How are you doing again again"
          delay={250}
          direction="bottom"
        />
      )}
      <SpotlightCard>Hellooooo</SpotlightCard>
      <DecryptedText text={"Who are you who are youuu"} />
      <div className="absolute  top-0 left-0 h-full w-full -z-10 ">
        <Particles
          particleColors={["#555555", "#ffffff"]}
          particleCount={100}
          particleSpread={5}
          speed={0.1}
          particleBaseSize={70}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <GlowCard />
    </div>
  );
}

export default AnimationTest;
