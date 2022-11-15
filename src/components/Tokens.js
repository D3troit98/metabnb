import React from "react";
import MBToken from "../assets/Group 59537.svg";
import Metamask from "../assets/Group 4040.svg";
import Opensea from "../assets/Frame 4041.svg";
const Tokens = () => {
  return (
    <div className="mt-[60px] lg:mt-[67px] bg-gradient-to-r from-[#A02279] to-[#A02279] relative">
      <div className="flex justify-evenly  items-center align-middle gap-[5px] lg:gap-[265px] text-center py-2 ">
        <div>
          <img
            src={MBToken}
            alt="mbtoken"
            className="w-[130px] lg:w-[214px] h-[20px] lg:h-[37px]  self-center"
          />
        </div>
        <div>
          <img
            src={Metamask}
            alt="metamask"
            className="w-[130px] lg:w-[214px] h-[20px] lg:h-[37px]   self-center"
          />
        </div>
        <div>
          <img
            src={Opensea}
            alt="opensea"
            className="object-contain w-[130px] lg:w-[214px] h-[20px] lg:h-[37px]   self-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Tokens;
