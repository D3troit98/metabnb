import React from "react";
import FooterLogo from "../assets/Group.svg";
import Twitter from "../assets/twitter-241-721979.png";
import Facebook from "../assets/facebook-263-721950.png";
import Instagram from "../assets/instagram-216-721958.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="pt-12 px-20 lg:pt-14 lg:px-24 bg-[#1D1D1E] pb-[37px] flex flex-col">
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center text-center  lg:justify-evenly">
        <div className="lg:pt-0 pt-2">
          <div className="w-[233px] h-[40px]">
            <img src={FooterLogo} alt="footerLogo" className="object-contain" />
          </div>
          <div className="flex mt-24 gap-[32px] text-[18px] ">
            <img src={Facebook} alt="facebook" className="object-contain" />
            <img src={Instagram} alt="facebook" className="object-contain" />
            <img src={Twitter} alt="facebook" className="object-contain" />
          </div>
          <div>
            <p className="mt-[55px] flex align-middle text-base text-[#F7F7F7]">
              &copy; 2022 Metabnb
            </p>
          </div>
        </div>
        <div className="pb-2">
          <p className="font-bold text-lg text-[#FFFFFF] mt-2 mb-[23px]">
            <Link to="/"> Community</Link>
          </p>
          <ul className="gap-[16px] text-[#F1F3F9] flex flex-col align-middle justify-center text-sm font-normal">
            <li>
              <Link to="/">NFT</Link>
            </li>
            <li>
              <Link to="/">Tokens</Link>
            </li>
            <li>
              <Link to="/">Landlords</Link>
            </li>
            <li>
              <Link to="/">Discord</Link>
            </li>
          </ul>
        </div>
        <div className="pb-2">
          <p className="font-bold text-lg text-[#FFFFFF] mt-2 mb-[23px]">
            <Link to="/"> Places</Link>
          </p>
          <ul className="gap-[16px] text-[#F1F3F9] flex flex-col align-middle justify-center text-sm">
            <li>
              <Link to="/">Castle</Link>
            </li>
            <li>
              <Link to="/">Farms</Link>
            </li>
            <li>
              <Link to="/">Beach</Link>
            </li>
            <li>
              <Link to="/">Learn more</Link>
            </li>
          </ul>
        </div>
        <div className="pb-2">
          <p className="font-bold text-lg text-[#FFFFFF] mt-2 mb-[23px]">
            <Link to="/"> About us</Link>
          </p>
          <ul className="gap-[16px] text-[#F1F3F9] flex flex-col align-middle justify-center text-sm">
            <li>
              {" "}
              <Link to="/">Road map</Link>
            </li>
            <li>
              <Link to="/">Creators</Link>
            </li>
            <li>
              <Link to="/">Career</Link>
            </li>
            <li>
              <Link to="/">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
