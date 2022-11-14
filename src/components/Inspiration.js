import React from "react";
import FeatureCard from "./FeatureCard";
import Frame1 from "../assets/Frame 151 (1).png";
import Frame2 from "../assets/Frame 151.png";
import Frame3 from "../assets/Frame 151 (2).png";
import Frame4 from "../assets/Frame 151 (3).png";
import Frame5 from "../assets/Frame 151 (4).png";
import Frame6 from "../assets/Frame 151 (5).png";
import Frame7 from "../assets/Frame 151 (6).png";

const Inspiration = () => {
  return (
    <div className="mt-4 px-12 lg:pt-32 lg:px-16 bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]">
      <p className="text-center font-bold text-5xl text-black">
        Inspiration for your next adventure
      </p>
      <div className="mt-10 flex-row flex flex-wrap gap-2 align-middle justify-start">
        <FeatureCard frame={Frame1} />
        <FeatureCard frame={Frame2} />
        <FeatureCard frame={Frame3} />
        <FeatureCard frame={Frame4} />
        <FeatureCard frame={Frame5} />
        <FeatureCard frame={Frame6} />
        <FeatureCard frame={Frame7} />
        <FeatureCard frame={Frame7} />
      </div>
    </div>
  );
};

export default Inspiration;
