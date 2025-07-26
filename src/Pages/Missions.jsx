import React from "react";
import HeroBlur from "../assets/components/HeroBlur";
import FadeUp from "../assets/animations/FadeUp";
import Update from "../assets/components/Update";
import Accordian, { AccordianItem } from "../assets/components/Accordion";
import Card from "../assets/components/Card";
import GlowCard from "../assets/components/GlowCard";
import rocket from "../assets/images/rocket.png";

const items = [
  {
    value: "item1",
    trigger: "What is Mission Phoenix",
    content:
      "Mission Phoenix is Anka Space's first step in developing reusable rocket technology. It is a vertical takeoff and vertical landing (VTVL) rocket designed to reach 100 meters in altitude before landing precisely back on the launch pad. Future tests will push for higher altitudes, including main engine cutoff (MECO) and relight for controlled descent.",
  },
  {
    value: "item2",
    trigger: "Why is the mission important",
    content:
      "This mission serves as a crucial milestone in proving rapid reusability, which is essential for reducing spaceflight costs and increasing launch frequency. By successfully demonstrating controlled landing and reusability, we are laying the foundation for more advanced orbital and deep-space missions.",
  },
  {
    value: "item3",
    trigger: "How does the rocket land itself?",
    content:
      "The rocket utilizes a combination of thrust vector control, landing gear, and precision guidance systems to autonomously navigate back to its launch pad. Future missions will involve engine relight mid-air to refine the landing process.",
  },
  {
    value: "item4",
    trigger: "Who is working on Mission Phoenix?",
    content:
      "Anka Space has assembled a growing team of aerospace, mechanical, structural, and software engineers to design, build, and test the vehicle. We are currently expanding our core team and working with industry partners to bring this mission to reality.",
  },
  {
    value: "item5",
    trigger: "How can I get involved?",
    content:
      "We are actively hiring engineers and specialists to join our mission. If you're interested in contributing, check out our Careers page for open positions or reach out via our Contact Us section.",
  },
];

function Missions() {
  return (
    <section className="flex flex-col gap-0">
      <div>
        <HeroBlur
          topText="Mission Phoenix."
          title="The First Step to Reusability"
          subtitle="Building a fully reusable rocket to push the boundaries of cost-efficient spaceflight."
          bottomText="ANKA SPACE"
        />
      </div>

      <FadeUp
        Children={
          <div className="w-[80%] min-h-screen m-auto max-2xl:px-10 max-md:px-6 max-sm:p-4 max-xl:w-full">
            <Card
              content={
                <div className="flex flex-col gap-10 py-6 px-10 text-center items-center justify-center max-xl:px-2 max-xl:py-2 max-md:p-0 max-md:gap-6">
                  <h1 className="text-5xl max-lg:text-3xl font-semibold max-xl:text-4xl max-md:text-2xl">
                    Building a fully reusable rocket to push the boundaries of
                    cost-efficient spaceflight.
                  </h1>
                  <p className="geist-font text-[18px] w-[75%] max-xl:text-[16px] max-xl:w-[90%] max-lg:w-full max-md:text-[14px] max-sm:text-[12px]">
                    Mission Phoenix is Anka Space's first step toward developing
                    reusable rocket technology. The first flight will
                    demonstrate a vertical takeoff and vertical landing (VTVL)
                    rocket, reaching 100 meters in altitude before landing
                    precisely back on the launch pad. After successful initial
                    flights, we will push for higher altitudes, eventually
                    reaching a stage where we perform main engine cutoff (MECO)
                    and relight the engine mid-descent for a controlled landing.
                    This mission is a critical milestone in reducing the cost of
                    spaceflight and proving the viability of rapid reusability,
                    setting the foundation for more advanced developments.
                  </p>
                  <img
                    src={rocket}
                    className="h-full object-contain w-[389px] hover:scale-105 duration-500 ease-in-out transition-transform"
                    alt=""
                  />
                </div>
              }
            />
          </div>
        }
      />

      <div className="m-auto max-2xl:px-10 max-md:px-6">
        <Update />
      </div>
      <div className="w-[60%] min-h-screen m-auto max-2xl:px-10 max-md:px-6 max-sm:p-4 max-lg:w-full max-xl:w-full">
        <Accordian>
          {items.map((item, index) => (
            <FadeUp
              className="cursor-pointer"
              Children={
                <Card
                  className="mb-6 geist-font px-12"
                  content={
                    <AccordianItem
                      key={item.value} // Ensure 'value' is unique
                      value={item.value}
                      trigger={item.trigger}
                    >
                      <p>{item.content}</p>
                    </AccordianItem>
                  }
                />
              }
            />
          ))}
        </Accordian>
      </div>
    </section>
  );
}

export default Missions;
