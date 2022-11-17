import React from "react";
import LearnMoreImage from "../assets/Frame 59546.png";
const LearnMore = () => {
  return (
    <div className="mt-[53px] bg-gradient-to-r from-[#A02279] to-[#A02279] px-12   lg:px-[100px]">
      <div className="flex flex-col lg:flex-row justify-center align-middle lg:justify-between">
        <div className="flex flex-col pt-[180px]">
          <p className="flex bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] bg-clip-text text-transparent font-bold text-4xl lg:text-5xl">
            Metabnb NFTs
          </p>
          <p className="mt-[30px] lg:mt-[35px] flex flex-wrap text-[16px] lg:text-[18px] leading-[30px] lg:leading-[35px] bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] bg-clip-text text-transparent ">
            Discover our NFT gift cards collection. Loyal
            <br className="hidden lg:flex" /> custumers gets amazing gift cards
            which are <br className="hidden lg:flex" /> traded as NFTs. These
            NFTs gives our cutomer
            <br className="hidden lg:flex" />
            access to loads of our exclusive services.
          </p>
          <button className=" bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] rounded-lg py-3 px-8 text-center text-sm w-[156px] h-[48px] flex justify-center align-middle mt-[57px]">
            <p className="bg-gradient-to-r from-[#A02279] to-[#A02279] bg-clip-text text-transparent flex justify-center align-middle text-center ">
              Learn More
            </p>
          </button>
        </div>
        <div className="mt-[50px] lg:mt-[100px] w-auto h-auto lg:w-[704px] lg:h-[574px] mb-2">
          <img
            src={LearnMoreImage}
            alt="learnMore"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
