import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Particles from "./assets/animations/Particles";
import Footer from "./assets/components/Footer";

function MainLayout() {
  return (
    <>
      <div className="relative bg-[#030014]">
        <Particles className="absolute w-full h-full z-0 pointer-events-none" />
        <Navbar />
        <main className="min-h-screen z-50 bg-[#030014]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
