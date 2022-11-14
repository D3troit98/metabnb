import React from "react";
import Stars from "../assets/Frame 59528.png";

const FeatureCard = ({ frame }) => {
  return (
    <div>
      <div className="w-[262px] h-[352px]  lg:w-[292px] lg:h-[372px] rounded-2xl border-[#D7D7D7] bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] box-border border-2">
        <div className="flex flex-col p-4">
          <div className="w-[230px] h-[235px] lg:w-[260px] lg:h-[265px] rounded-2xl border-[#D7D7D7] border-[1px] ">
            <img src={frame} alt="nft" className="object-contain" />
          </div>
          <div className="flex flex-row justify-between mt-3 lg:mt-4 mb-[8px] lg:mb-[10px] ">
            <p className="text-[11px] lg:text-xs font-red-rose text-[#434343] ">
              Desert King
            </p>
            <p className="text-[11px] font-bold text-xs font-red-rose">
              1MBT per night
            </p>
          </div>

          <div className="flex flex-row justify-between">
            <p className="text-[11px] lg:text-xs font-red-rose text-[#434343]">
              2345km away
            </p>
            <p className="text-[11px] lg:text-xs font-red-rose text-[#434343]">
              avaliable for 2 weeks stay
            </p>
          </div>
          <div className="mt-2 w-[92px] h-[12px]">
            <img src={Stars} alt="stars" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
