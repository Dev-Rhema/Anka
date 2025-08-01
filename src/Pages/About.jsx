import React from "react";
import HeroBlur from "../assets/components/HeroBlur";
import SpotlightCard from "../assets/animations/SpotlightCard";
import FadeUp from "../assets/animations/FadeUp";
import GlowCard from "../assets/components/GlowCard";
import Update from "../assets/components/Update";

const ABOUT = [
  {
    title: "Our Mission",
    text: "Anka Space is developing Phoenix, a reusable vertical takeoff and landing (VTVL) rocket designed to make space more accessible and cost-effective. Our goal is to demonstrate controlled flight, precise landing, and rapid reusability, laying the foundation for affordable satellite deployment and future advancements in space transportation.",
  },
  {
    title: "Our Vision",
    text: "We envision a future where launching payloads into space is affordable and accessible to everyone—from research institutions to private companies and government agencies. By lowering the cost of spaceflight and innovating in reusable rocket technology, Anka Space aims to accelerate humanity's journey toward becoming a multiplanetary species, starting with Mars.",
  },
  {
    title: "Long Term Vision",
    text: "We plan to develop our own modular space station — a next-generation orbital platform for research, commercial use, and future deep space missions. As the ISS retires, we'll be ready to help fill the gap with a station built for the decade ahead.",
  },
  {
    title: "Why Mars",
    text: "Mars is the most viable option for humanity's second home due to its atmosphere, water ice reserves, and potential for self-sustaining colonies. Unlike the Moon, Mars has enough resources to support long-term habitation, including carbon dioxide for fuel production and underground water for life support. Its day-night cycle is similar to Earth's, making it more adaptable for human settlement. Colonizing Mars is not just about exploration—it's about ensuring the survival of humanity, fostering technological advancements, and taking the first step toward a future where we are no longer confined to a single planet.",
  },
];

function About() {
  return (
    <section className="flex flex-col gap-10">
      <HeroBlur
        topText="ABOUT ANKA SPACE."
        title="M. Kemal Atatürk"
        subtitle="The future is in the skies."
        bottomText="Founder of the Republic of Türkiye"
      />
      <div className="h-[90vh] grid grid-cols-2 gap-6 w-[80%] m-auto max-2xl:px-10  max-2xl:w-full max-lg:grid-cols-1 max-md:px-6 max-sm:px-4 max-lg:h-auto">
        {ABOUT.map((aboutItem) => (
          <GlowCard title={aboutItem.title} text={aboutItem.text} />
        ))}
      </div>
      <div className="m-auto max-2xl:px-10 max-md:px-6">
        <Update />
      </div>
    </section>
  );
}

export default About;
