import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Inspiration from "../components/Inspiration";
import LearnMore from "../components/LearnMore";
import Rent from "../components/Rent";
import Tokens from "../components/Tokens";
import Wallet from "../components/Wallet";

const Home = () => {
  const [connectWallet, setonnectWallet] = useState(false);
  const opacity = "opacity-50";
  return (
    <div
      className={`font-red-rose bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]`}
    >
      <div className={`h-full`}>
        <div className={`h-full  ${connectWallet && opacity}`}>
          <Header setonnectWallet={setonnectWallet} />
          <Rent />
        </div>

        {connectWallet && <Wallet setonnectWallet={setonnectWallet} />}
      </div>

      <Tokens className={` ${connectWallet && opacity}`} />
      <div className={`h-full  ${connectWallet && opacity}`}>
        <Inspiration />
      </div>
      <div className={`h-full  ${connectWallet && opacity}`}>
        <LearnMore />
      </div>
      <div className={`h-full  ${connectWallet && opacity}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
