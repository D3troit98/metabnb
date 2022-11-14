import React, { useState } from "react";
import Metabnb from "../assets/Vector.png";
import HomeLogo from "../assets/Home.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
const Header = ({ setonnectWallet }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className=" flex flex-col lg:flex-row mt-11 px-20 lg:px-24 justify-between align-middle text-center bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] relative">
      <div className="flex flex-row justify-center ">
        <img src={HomeLogo} alt="home" className="object-contain w-10 h-9" />
        <img src={Metabnb} alt="logo" className="object-contain w-44 h-8" />
      </div>

      <ul className="hidden  lg:flex-row  gap-12 lg:flex ">
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
      <div className="flex flex-row-reverse justify-around sm:pt-2">
        <button
          className="text-white bg-gradient-to-r from-[#A02279] to-[#A02279] rounded-lg pt-2 pb-2 pl-5 pr-5 lg:pt-3  lg:pb-3 lg:pl-6 lg:pr-6 text-center text-sm "
          onClick={() => setonnectWallet(true)}
        >
          Connect Wallet
        </button>
        <GiHamburgerMenu
          color="#A02279"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          className="lg:hidden cursor-pointer flex justify-center align-middle text-center"
        />
      </div>
      {toggleMenu && (
        <div className="flex flex-col justify-center align-middle fixed top-0 left-0 w-full h-screen bg-gradient-to-r from-[#A02279] to-[#A02279] ease-in z-10 ">
          <MdOutlineRestaurantMenu
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
              <Link to="/" onClick={() => setToggleMenu(false)}>
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
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
