import React from "react";
import FadeUp from "../assets/animations/FadeUp";
import Particles from "../assets/animations/Particles";
import Button from "../assets/components/Button";
import SpotlightCard from "../assets/animations/SpotlightCard";
import BlurText from "../assets/animations/BlurText";
import { color } from "framer-motion";
import GlowCard from "../assets/components/GlowCard";
import { li } from "framer-motion/client";
import Form from "../assets/components/Form";

const CAREERS = [
  {
    title: "Why Join Anka Space?",
    text: "At Anka Space, we are not just building rockets—we are shaping the future of space travel. Our mission is to develop reusable rocket technology that will make spaceflight more accessible and affordable. We are a team of driven, hands-on individuals who thrive on challenges and believe in pushing boundaries. If you want to work in an environment where execution matters more than PowerPoints, where ideas turn into real hardware, and where you can have a direct impact on the future of spaceflight, this is the place for you.",
    color: "#22d3ee",
  },
  {
    title: "What You'll Gain",
    text: "At Anka Space, you'll gain hands-on experience working directly on hardware, design, testing, and integration—no endless paperwork, just real work that flies. You'll be part of a fast-paced environment alongside engineers, entrepreneurs, and visionaries who are obsessed with getting things done. We value execution, giving you the opportunity to take ownership and make a direct impact from day one. This isn't about maintaining the status quo—we are here to build the next generation of rockets and space infrastructure.",
    color: "#a855f7",
  },
  {
    title: "Who We're Looking For",
    text: "We need problem solvers, builders, and risk-takers—people who don't wait for permission to innovate. If you thrive in fast-moving environments and want to be part of a team that's actually building hardware, you belong here.",
    color: "#4ade80",
  },
];

const POSITIONS = [
  {
    position: "Propulsion Engineer",
    description:
      "We are seeking a highly driven Propulsion Engineer to design, develop, and integrate a pressure-fed LOX-based propellant feed system for our first reusable rocket prototype. In this role, you will be responsible for ensuring the reliable delivery of propellants into an existing rocket engine—already designed and built—and for seamlessly integrating that engine into the overall vehicle structure.",
    firstColor: "#ea580c",
    secondColor: "#06b6d4",
    resp: [
      "Propellant Feed System Design - Develop and optimize the pressure-fed LOX propellant feed system",
      "Engine Integration - Work closely with teams to integrate the existing rocket engine into the vehicle",
      "Performance Verification - Plan and oversee ground tests to validate feed system performance",
      "Failure Analysis & Rapid Iteration - Diagnose and address propellant flow issues",
      "Cross-Functional Collaboration - Coordinate with structural, mechanical, and avionics teams",
    ],
    qual: [
      "Degree in Mechanical Engineering, Aerospace Engineering, or related field",
      "Experience in mechanical system design, preferably for aerospace applications",
      "Strong understanding of material properties, loads, and failure analysis",
      "Experience with CAD (Fusion 360, SolidWorks, or equivalent)",
      "Experience with high-pressure fluid systems, valves, and actuation",
    ],
  },
  {
    position: "Avionics Engineer",
    description:
      "We are looking for a talented Avionics Engineer to develop, test, and integrate flight-critical electronic systems for our reusable rocket prototype. You will lead efforts in designing robust sensor arrays, power management systems, and communication links to ensure precise vehicle control and telemetry.",
    firstColor: "#9333ea",
    secondColor: "#16a34a",
    resp: [
      "Flight Control Systems - Design and implement avionics hardware for vehicle control and telemetry",
      "Sensor Integration - Integrate IMUs, GPS, pressure sensors, and other instrumentation",
      "Power Management - Develop efficient and reliable power distribution systems",
      "Software Support - Collaborate with software engineers to support firmware development and testing",
      "Testing & Validation - Conduct ground and flight tests for avionics performance and reliability",
    ],
    qual: [
      "Degree in Electrical Engineering, Computer Engineering, or related field",
      "Experience with PCB design and embedded systems",
      "Familiarity with flight controllers, telemetry systems, and RF communication",
      "Experience with lab testing tools (oscilloscopes, multimeters, etc.)",
      "Strong understanding of signal integrity, noise reduction, and EMI shielding",
    ],
  },
  {
    position: "Structures Engineer",
    description:
      "We are seeking a Structures Engineer to design and analyze primary and secondary structural components for our reusable rocket prototype. You will ensure mechanical integrity under extreme loading conditions and contribute to lightweight, manufacturable designs that support rapid iteration.",
    firstColor: "#dc2626",
    secondColor: "#2563eb",
    resp: [
      "Structural Design - Create lightweight, high-strength designs for airframe and support structures",
      "FEA Analysis - Perform simulations to validate design against stress, vibration, and thermal loads",
      "Material Selection - Choose appropriate composites and metals for performance and manufacturability",
      "Testing & Validation - Support fabrication and structural testing of components and assemblies",
      "Interdisciplinary Support - Collaborate with propulsion and avionics teams to ensure integration",
    ],
    qual: [
      "Degree in Mechanical or Aerospace Engineering",
      "Experience with FEA tools (e.g., ANSYS, Abaqus, or similar)",
      "Proficiency with CAD software (Fusion 360, SolidWorks, etc.)",
      "Understanding of composite materials and manufacturing processes",
      "Strong analytical skills in structural dynamics and load analysis",
    ],
  },
];

function Career() {
  return (
    <section className="flex flex-col gap-20  bg-black">
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
                <h1 className="text-6xl inter-mono-font text-center">
                  <BlurText
                    text="Careers"
                    className="text-6xl font-black max-md:text-5xl"
                  />
                </h1>
              </div>
            </div>
            <div className="w-[80%] m-auto max-xl:w-full max-xl:px-8 max-lg:p-6">
              <FadeUp
                Children={
                  <h1 className="text-6xl text-center max-md:text-4xl  font-semibold mb-30">
                    Carrers at Anka Space
                  </h1>
                }
              />
              <div className="grid grid-cols-3 gap-2 my-10 max-lg:grid-cols-1 mb-30">
                {CAREERS.map((career) => (
                  <FadeUp
                    Children={
                      <GlowCard
                        className="h-full"
                        title={career.title}
                        text={career.text}
                        color={career.color}
                      />
                    }
                  />
                ))}
              </div>
              <FadeUp
                Children={
                  <h1 className="text-6xl text-center max-md:text-4xl font-semibold">
                    Open Positions
                  </h1>
                }
              />
              <div className="grid gap-6 my-10 grid-cols-1 w-[70%] max-lg:w-full m-auto max-lg:m-0 mb-30">
                {POSITIONS.map((position) => (
                  <FadeUp
                    Children={
                      <GlowCard
                        color={position.secondColor}
                        children={
                          <div className="text-start text-sm flex gap-6 h-full flex-col p-4 max-md:p-2 max-md:gap-4">
                            <h1 className="text-3xl font-semibold">
                              {position.position}
                            </h1>
                            <p>{position.description}</p>
                            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
                              <div className="flex flex-col gap-2">
                                <h2
                                  style={{
                                    color: position.firstColor,
                                    fontSize: "16px",
                                    fontWeight: 600,
                                  }}
                                >
                                  RESPONSIBILITIES
                                </h2>
                                <ul className="flex flex-col gap-2">
                                  {position.resp.map((respItem) => (
                                    <li className="list-disc">{respItem}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex flex-col gap-2">
                                <h2
                                  style={{
                                    color: position.secondColor,
                                    fontSize: "16px",
                                    fontWeight: 600,
                                  }}
                                >
                                  Qualifications
                                </h2>
                                <ul className="flex flex-col gap-2">
                                  {position.qual.map((qualItem) => (
                                    <li className="list-disc">{qualItem}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        }
                      />
                    }
                  />
                ))}
              </div>
            </div>
            <div className="items-center   grid gap-14 my-10 max-lg:px-6  w-full m-auto">
              <FadeUp
                Children={
                  <span className="gap-4 w-full flex items-center justify-center text-center flex-col">
                    <h3 className="text-4xl font-semibold max-md:text-3xl">
                      Apply Now
                    </h3>
                    <p className="text-xl text-white/50 text-center w-[60%] max-lg:w-full max-md:text-sm">
                      Ready to join the future of space technology? Submit your
                      application below.
                    </p>
                  </span>
                }
              />
              <Form />
            </div>
          </div>
        }
      />
    </section>
  );
}

export default Career;
