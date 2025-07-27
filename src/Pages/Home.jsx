import React from "react";
import Navbar from "../assets/components/Navbar";
import FadeUp from "../assets/animations/FadeUp";
import Button from "../assets/components/Button";
import headerDec from "../assets/images/header_dec.png";
import FadeX from "../assets/animations/FadeX";
import rocket from "../assets/images/rocket.png";
import havardDec from "../assets/images/harvard_dec.png";
import havardBuilding from "../assets/images/Harvard-building.webp";
import wwd from "../assets/images/wwd_dec.png";
import wtm from "../assets/images/wtm_dec.png";
import radar from "../assets/images/radar_dec.png";
import Card from "../assets/components/Card";
import { div, image, span } from "framer-motion/client";
import { Box } from "ogl";
import { CiCircleCheck } from "react-icons/ci";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { FaGroupArrowsRotate } from "react-icons/fa6";
import StarBorder from "../assets/animations/StarBorder";
import Particles from "../assets/animations/Particles";
import Update from "../assets/components/Update";

const WWD = [
  {
    name: "SUSTAINABLE",
    img: <CiCircleCheck />,
    sub: "Cost-effective launch systems",
    hex: "#be84e9", // text + border color
    rgba: "rgba(190, 132, 233, 0.1)", // background color
  },
  {
    name: "INNOVATIVE",
    img: <HiOutlineLightningBolt />,
    sub: "Cutting-edge technology",
    hex: "#baa7cb",
    rgba: "rgba(186, 167, 203, 0.1)",
  },
  {
    name: "ACCESSIBLE",
    img: <FaGroupArrowsRotate />,
    sub: "Space for everyone",
    hex: "#7a39e6",
    rgba: "rgba(122, 57, 230, 0.1)",
  },
];

function Home() {
  return (
    <section className="relative flex flex-col gap-6 w-[80%] m-auto max-2xl:w-[100%]">
      <div className="h-screen flex items-center relative w-full">
        <Particles className="absolute top-0 left-0 w-full" />
        <div className="absolute flex items-center inset-x-0 justify-center overflow-hidden">
          <img
            src={radar}
            className=" min-h-full w-full z-0 object-contain overflow-hidden opacity-50  max-lg:min-w-[1000px] max-md:min-w-[800px] max-sm:min-w-[600px]"
            alt=""
          />
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
      </div>
      <div>
        <FadeUp
          className="mt-50 max-md:mt-10 text-center max-2xl:px-10 max-md:px-6"
          Children={
            <div className="flex w-full flex-col items-center justify-center  bg-[#030014] overflow-hidden">
              <div className=" flex items-center">
                <img
                  src={headerDec}
                  className="w-[800px] max-md:min-w-[600px]
                  max-sm:min-w-[500px] max-md:w-full object-contain"
                  alt=""
                />
              </div>
              <div className="mt-[-30%] max-lg:mt-[-40%] flex flex-col items-center justify-center gap-4 mb-20 max-lg:mb-10 ">
                <h2 className="text-5xl font-extrabold max-lg:text-4xl max-md:text-3xl">
                  Mission Phoenix 1
                </h2>
                <p className="max-lg:text-md">
                  Mission Phoenix is the first fully reusable prototype rocket
                  developed by Anka Space.
                </p>
              </div>
            </div>
          }
        />
      </div>
      <FadeX
        className="min-h-screen max-2xl:text-[16px] max-md:text-sm max-sm:text-[12px] max-2xl:px-10 max-md:px-6"
        ChildA={
          <div className="h-full grid grid-rows-2 gap-6 max-2xl:gap-4">
            <Card
              content={
                <div className="h-full w-full flex flex-col gap-6 inter-mono-font max-2xl:gap-4">
                  <span className="flex flex-col gap-1.5">
                    <p className="text-sm inter-mono-font font-semibold">
                      GOAL
                    </p>
                    <p className="font-light inter-mono-font text-white/70">
                      Demonstrate vertical takeoff, controlled hover, and
                      precision landing using a LOX-based propulsion system.
                    </p>
                  </span>
                  <span className="flex flex-col gap-1">
                    <p className="text-sm inter-mono-font  font-semibold">
                      OBJECTIVE
                    </p>
                    <p className="font-light inter-mono-font text-white/70">
                      100m altitude flight with full landing recovery.
                    </p>
                  </span>
                  <span className="flex flex-col gap-1">
                    <p className="text-sm inter-mono-font font-semibold">
                      PURPOSE
                    </p>
                    <p className="font-light inter-mono-font text-white/70">
                      Validate the propulsion system, avionics, and reusability
                      for future larger-scale vehicles.
                    </p>
                  </span>
                </div>
              }
            />
            <Card
              className=""
              content={
                <div className="h-full inter-mono-font text-[12px]  w-full">
                  <div className="flex flex-col gap-2 max">
                    <p className="text-sm inter-mono-font font-semibold ">
                      TECHNICAL OVERVIEW
                    </p>
                    <span className="flex justify-between items-center">
                      <p className="font-light inter-mono-font text-white/70 max-md:text-[10px]">
                        Rocket Height:
                      </p>
                      <p className="max-md:text-[10px]">~4.5 meters</p>
                    </span>
                    <span className="flex justify-between items-center">
                      <p className="font-light inter-mono-font text-white/70 max-md:text-[10px]">
                        Diameter:
                      </p>
                      <p className="max-md:text-[10px]">~0.6 meters</p>
                    </span>
                    <span className="flex justify-between items-center">
                      <p className="font-light inter-mono-font text-white/70 max-md:text-[10px]">
                        Propulsion:
                      </p>
                      <p className="max-md:text-[10px]">
                        LOX based pressure-fed engine
                      </p>
                    </span>
                  </div>
                  <hr className="text-white/20 my-4" />
                  <div className="flex flex-col gap-2">
                    <p className="text-sm inter-mono-font font-semibold">
                      Flight Profile
                    </p>
                    <span className="flex gap-2 items-center">
                      <p className="max-md:text-[10px]">→ Vertical Takeoff</p>
                      <p className="font-light inter-mono-font text-white/70 max-md:text-[10px]">
                        — Engine ignites, vehicle ascends.
                      </p>
                    </span>
                    <span className="flex gap-2 items-center">
                      <p className="max-md:text-[10px]">
                        → Controlled Hover (~5s)
                      </p>
                      <p className="font-light inter-mono-font text-white/70 max-md:text-[10px]">
                        — Stabilization using thrust vector control (TVC).
                      </p>
                    </span>
                    <span className="flex  gap-2 items-center">
                      <p className="max-md:text-[10px]">→ Precision Landing</p>
                      <p className="font-light inter-mono-font text-white/70 max-md:text-[10px]">
                        — Slow descent, touchdown with landing legs.
                      </p>
                    </span>
                  </div>
                </div>
              }
            />
          </div>
        }
        ChildB={
          <Card
            className="flex items-center justify-center"
            content={
              <img
                src={rocket}
                className="h-full object-contain w-[389px] hover:scale-105 duration-500 ease-in-out transition-transform"
                alt=""
              />
            }
          />
        }
      />
      {/* HARVARD ADVANTAGE */}
      <div className="flex flex-col w-full min-h-screen items-center justify-center mt-30 text-[18px]  max-2xl:text-sm max-2xl:px-10 max-md:px-6">
        <div className="h-full">
          <img src={havardDec} className="w-xl h-full" alt="" />
        </div>
        <div className=" h-full mt-[-20%]  flex flex-col gap-8 top-0 left-0 max-lg:mt-[-35%] max-md:mt-[-40%] max-md:gap-4">
          <h1 className="text-5xl text-center max-md:text-4xl max-sm:text-3xl">
            Havard Advantage
          </h1>
          <FadeX
            ChildA={
              <Card
                className="flex h-full items-center justify-center"
                content={
                  <img src={havardBuilding} className="w-[520px] rounded-2xl" />
                }
              />
            }
            ChildB={
              <Card
                content={
                  <div className="flex flex-col gap-10 w-full">
                    <p className="inter-mono-font font-semibold text-center max-md:text-[12px]">
                      LEVERAGING HARVARD'S REEF MAKERSPACE AND SEAS FABRICATION
                      LAB TURNS A TYPICAL HARDWARE STARTUP BURDEN INTO OUR
                      COMPETITIVE EDGE.
                    </p>
                    <p className="text-white/80">
                      Because machine time and raw stock are free for Harvard
                      students, we save ≈ $115k on Year‑1 prototype parts and
                      cut weeks of vendor lead time from weeks to hours—giving
                      us 10× more design cycles. That capital efficiency lets
                      every dollar of investment reach further—funding more
                      testing, not invoices.
                      <br />
                      <br />
                      Rapid in‑house iteration also shortens our path to key
                      milestones, keeping Anka Space ahead of larger,
                      slower‑moving rivals. 24/7 swipe access as a Harvard
                      graduate student lets the team prototype on
                      nights/weekends.
                      <br />
                      <br />
                      Harvard also supplies office space, legal counsel, and
                      fundraising coaching at no cost, stretching every investor
                      dollar.
                    </p>
                  </div>
                }
              />
            }
          />
        </div>
      </div>
      {/* WHAT WE DO */}
      <div className="w-[80%] m-auto min-h-screen max-2xl:w-full">
        <FadeUp
          Children={
            <div className="w-full h-full">
              <img src={wwd} className="w-full h-screen object-cover" />
            </div>
          }
        />

        <FadeUp
          className="mt-[-30%] max-lg:mt-[-45%] max-md:mt-[-65%] max-sm:mt-[-80%] max-2xl:px-10 max-md:px-6"
          Children={
            <div className="flex flex-col gap-14 items-center justify-center py-6 max-md:gap-10">
              <h1 className="text-5xl font-bold max-lg:text-4xl max-sm:text-3xl">
                What We Do
              </h1>
              <Card
                content={
                  <div className="p-4 flex flex-col gap-10 inter-mono-font max-md:text-sm max-md:p-0">
                    <p className="text-center text-[20px] max-md:text-[12px] ">
                      Anka Space is pioneering the future of reusable rocket
                      technology. Our goal is to build sustainable,
                      cost-effective launch systems that enable research
                      institutions, commercial companies, and governments to
                      access space more easily.
                    </p>
                    <div className="flex justify-between items-center max-md:flex-col max-md:gap-8">
                      {WWD.map((what, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-between gap-2 w-[33%] max-md:w-full "
                        >
                          <span
                            className="w-[30px] h-[30px] text-xl flex items-center justify-center rounded-md"
                            style={{
                              color: what.hex,
                              background: what.rgba,
                              border: `1px solid ${what.hex}`,
                            }}
                          >
                            {what.img}
                          </span>
                          <p
                            className="font-semibold"
                            style={{ color: what.hex }}
                          >
                            {what.name}
                          </p>
                          <p className="text-white/70 text-center">
                            {what.sub}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-white/70 max-md:text-[12px]">
                      By lowering launch costs and increasing launch frequency,
                      we are laying the groundwork for the next era of space
                      exploration.
                    </p>
                    <div className="flex w-full justify-center">
                      <Button
                        text="Explore Our Technology >"
                        className="border-white/50 border hover:bg-[#030014]"
                      />
                    </div>
                  </div>
                }
              />
            </div>
          }
        />
      </div>
      {/* WHY THIS MATTERS */}
      <div className="w-[80%] m-auto py-20 max-2xl:w-full overflow-hidden ">
        <FadeUp
          Children={
            <div className="w-full flex items-center justify-center max-2xl:px-10 max-md:px-6">
              <img src={havardDec} className="w-2xl max-lg:w-xl h-full" />
            </div>
          }
        />

        <FadeUp
          className="mt-[-20%] max-xl:mt-[-40%] max-2xl:px-10 max-md:px-6"
          Children={
            <div className="flex flex-col gap-12 items-center justify-center py-12 max-md:py-4 max-md:gap-8">
              <h1 className="text-5xl font-bold max-md:text-4xl max-sm:text-3xl">
                Why This Matters
              </h1>
              <Card
                content={
                  <div className="p-4 flex flex-col gap-10 inter-mono-font max-md:text-sm max-md:p-0">
                    <p className="text-center text-[20px] max-md:text-[12px] ">
                      Humanity's future is beyond Earth. Advancing reusable
                      spaceflight technology is the first step toward becoming a
                      multi-planetary species. By making space more accessible,
                      we empower innovation, scientific progress, and
                      exploration.
                    </p>
                    <div className="flex justify-between items-center max-md:flex-col max-md:gap-8">
                      {WWD.map((what, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-between gap-2 w-[33%] max-md:w-full "
                        >
                          <span
                            className="w-[30px] h-[30px] text-xl flex items-center justify-center rounded-md"
                            style={{
                              color: what.hex,
                              background: what.rgba,
                              border: `1px solid ${what.hex}`,
                            }}
                          >
                            {what.img}
                          </span>
                          <p
                            className="font-semibold"
                            style={{ color: what.hex }}
                          >
                            {what.name}
                          </p>
                          <p className="text-white/70 text-center">
                            {what.sub}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-white/70 max-md:text-[12px]">
                      This will define the future of civilization and ensure
                      humanity's survival beyond our home planet.
                    </p>
                    <div className="flex w-full justify-center">
                      <Button
                        text="Read More About Our Vision >"
                        className="border-white/50 border hover:bg-[#030014]"
                      />
                    </div>
                  </div>
                }
              />
            </div>
          }
        />
      </div>
      <div className="max-2xl:px-10 max-md:px-6">
        <Update />
      </div>
    </section>
  );
}

export default Home;
