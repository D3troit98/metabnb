import React from "react";
import MBToken from "../assets/Group 59537.svg";
import Metamask from "../assets/Group 4040.svg";
import Opensea from "../assets/Frame 4041.svg";
const Tokens = () => {
  return (
    <div className="mt-[60px] lg:mt-[67px] bg-gradient-to-r from-[#A02279] to-[#A02279] relative">
      <div className="flex justify-evenly align-middle text-center py-2 px-24">
        <div>
          <img
            src={MBToken}
            alt="mbtoken"
            className=" lg:w-[214px] lg:h-[37px] w-28 h-8 self-center"
          />
        </div>
        <div>
          <img
            src={Metamask}
            alt="metamask"
            className=" lg:w-[214px] lg:h-[37px] w-28 h-8 self-center"
          />
        </div>
        <div>
          <img
            src={Opensea}
            alt="opensea"
            className="object-contain lg:w-[214px] lg:h-[37px] w-28 h-8 self-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Tokens;
