import React, { useState } from "react";
import Metabnb from "../assets/Vector.png";
import HomeLogo from "../assets/Home.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Header = ({ setonnectWallet }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className=" flex flex-col lg:flex-row mt-11 px-20 lg:px-24   text-center bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] relative">
      <div className="flex  justify-between items-center w-full">
        <div className="flex flex-row ">
          <img
            src={HomeLogo}
            alt="home"
            className="object-contain w-7 h-7  lg:w-10 lg:h-9"
          />
          <img
            src={Metabnb}
            alt="logo"
            className="object-contain w-36  lg:w-44 lg:h-8"
          />
        </div>
        <div>
          <ul className="hidden  md:flex-row  gap-12 lg:flex ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/placetoStay">Place to stay</Link>
            </li>
            <li>
              <Link to="/">NFTs</Link>
            </li>
            <li>
              <Link to="/">Community</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row-reverse justify-around sm:pt-2">
          <button
            className="hidden lg:flex text-white bg-gradient-to-r from-[#A02279] to-[#A02279] rounded-lg pt-2 pb-2 pl-5 pr-5 lg:pt-3  lg:pb-3 lg:pl-6 lg:pr-6 text-center text-sm "
            onClick={() => setonnectWallet(true)}
          >
            Connect Wallet
          </button>
          <GiHamburgerMenu
            color="#A02279"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
            className="lg:hidden cursor-pointer flex justify-center align-middle text-center w-7 h-7  lg:w-10 lg:h-9"
          />
        </div>
      </div>
      {toggleMenu && (
        <div className="flex flex-col justify-center align-middle fixed top-0 left-0 w-full h-screen bg-gradient-to-r from-[#A02279] to-[#A02279] ease-in z-10 ">
          <AiOutlineClose
            fontSize={27}
            className="text-white flex self-center cursor-pointer mb-2"
            onClick={() => setToggleMenu(false)}
          />
          <ul className="flex flex-col gap-12 text-white">
            <li>
              <Link to="/" onClick={() => setToggleMenu(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/placetoStay" onClick={() => setToggleMenu(false)}>
                Place to stay
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setToggleMenu(false)}>
                NFTs
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setToggleMenu(false)}>
                Community
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setonnectWallet(true)}>
                Connect Wallet
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
