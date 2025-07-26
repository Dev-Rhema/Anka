import { useState } from "react";
import "./App.css";
import AnimationTest from "./assets/components/AnimationTest";
import HeroBlur from "./assets/components/HeroBlur";
import Particles from "./assets/animations/Particles";
import Squares from "./assets/animations/Squares";
import Navbar from "./assets/components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <Particles className="bg-[#030014]" />
        <HeroBlur />
      </div>
    </>
  );
}

export default App;
