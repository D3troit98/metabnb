import React, { useState } from "react";
import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

import Frame1 from "../assets/Frame 151 (1).png";
import Frame2 from "../assets/Frame 151.png";
import Frame3 from "../assets/Frame 151 (2).png";
import Frame4 from "../assets/Frame 151 (3).png";
import Frame5 from "../assets/Frame 151 (4).png";
import Frame6 from "../assets/Frame 151 (5).png";
import Frame7 from "../assets/Frame 151 (6).png";
const PlaceToStay = () => {
  const [dropDown, setDropDown] = useState(true);
  return (
    <div
      className={`font-red-rose bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]`}
    >
      <div className="h-full">
        <Header />
        <div className=" mt-4 px-12 lg:pt-32 lg:px-16 bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]">
          <div className="flex flex-wrap lg:flex-nowrap  justify-center items-center gap-[20px] lg:gap-[48px] text-[16px] lg:text-[20px] ">
            <p>Resturant</p>
            <p>Cottage</p>
            <p>Castle</p>
            <p>fantast city</p>
            <p>beach</p>
            <p>carbins</p>
            <p>Off-grid</p>
            <p>Farm</p>

            <div className="relative inline-block text-left">
              <div className="flex justify-between items-center ">
                <button
                  type="button"
                  className="inline-flex w-[161px] justify-between rounded-md border border-gray-300 bg-white px-[14px] py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setDropDown((prev) => !prev)}
                >
                  Location
                  {/* <!-- Heroicon name: mini/chevron-down --> */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.9999 5L10.9999 5"
                      stroke="#333333"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.99985 5H1.99985"
                      stroke="#333333"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.9999 12H16.9999"
                      stroke="#333333"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.9999 12H1.99985"
                      stroke="#333333"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.9999 19H10.9999"
                      stroke="#333333"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.99985 19H1.99985"
                      stroke="#333333"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.9999 21V17"
                      stroke="#333333"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.9999 7V3"
                      stroke="#333333"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.0001 14V10"
                      stroke="#333333"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
              <div
                className={`absolute ${
                  dropDown && "hidden"
                } right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div className="py-1" role="none">
                  {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                  <p
                    className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                    onClick={() => setDropDown((prev) => !prev)}
                  >
                    Discord
                  </p>
                  <p
                    className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                    onClick={() => setDropDown((prev) => !prev)}
                  >
                    Twitter
                  </p>
                  <p
                    className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    onClick={() => setDropDown((prev) => !prev)}
                  >
                    Binance
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex-row flex flex-wrap gap-2 align-middle items-center justify-center lg:justify-start  mb-[80px] lg:mb-[92px]">
            <FeatureCard frame={Frame1} />
            <FeatureCard frame={Frame2} />
            <FeatureCard frame={Frame3} />
            <FeatureCard frame={Frame4} />
            <FeatureCard frame={Frame5} />
            <FeatureCard frame={Frame6} />
            <FeatureCard frame={Frame7} />
            <FeatureCard frame={Frame7} />
            <FeatureCard frame={Frame1} />
            <FeatureCard frame={Frame2} />
            <FeatureCard frame={Frame3} />
            <FeatureCard frame={Frame4} />
            <FeatureCard frame={Frame5} />
            <FeatureCard frame={Frame6} />
            <FeatureCard frame={Frame7} />
            <FeatureCard frame={Frame7} />
          </div>

          <div></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PlaceToStay;
