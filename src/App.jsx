import { useState } from "react";
import "./App.css";
import HeroBlur from "./assets/components/HeroBlur";
import Particles from "./assets/animations/Particles";
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
