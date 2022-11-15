import React from "react";
import BrickIMage from "../assets/Group 4028.png";

const Rent = () => {
  return (
    <div className="pt-30 px-20 lg:pt-32 lg:px-24 bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]">
      <div className="flex flex-col lg:flex-row justify-between align-middle">
        <div className="flex flex-col">
          <p className=" font-bold font-red-rose text-[#434343] text-4xl lg:text-5xl leading-[120%] lg:pt-7 pt-5 ">
            Rent a{" "}
            <span className=" bg-gradient-to-r from-[#A02279] to-[#A02279] bg-clip-text text-transparent">
              Place
            </span>{" "}
            away from <br className="hidden lg:flex" />
            <span className=" bg-gradient-to-r from-[#A02279] to-[#A02279] bg-clip-text text-transparent">
              {" "}
              Home
            </span>{" "}
            in the{" "}
            <span className=" bg-gradient-to-r from-[#A02279] to-[#A02279] bg-clip-text text-transparent">
              Metaverse
            </span>
          </p>

          <p className="pt-9 lg:pt-12 text-xl lg:text-2xl leading-8 lg:leading-9  flex justify-start ">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your{" "}
            <br className="hidden lg:flex" /> imagination to reality at your
            comfort zone
          </p>
          <div className="flex flex-col lg:flex-row mt-12 sm:px-4 ">
            <input
              type="text"
              className="w-full lg:w-[390px]  h-[54px] py-4 px-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg lg:rounded-l-lg focus:ring-[#A02279] focus:border-[#A02279] block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#A02279] dark:focus:border-[#A02279]"
              placeholder="Search for location"
            />

            <button className="flex justify-center items-center w-[180px] mt-1 lg:w-[230px] h-[54px] text-white bg-gradient-to-r from-[#A02279] to-[#A02279] rounded-lg  lg:rounded-r-lg py-3 lg:py-4 px-16 lg:px-20 text-center text-[12px] lg:text-sm ">
              Search
            </button>
          </div>
        </div>
        <div className="sm:pt-5 flex justify-center align-middle">
          <img
            src={BrickIMage}
            alt="brick"
            className="object-contain lg:w-[476px] lg:h-[459px] w-96 h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Rent;
