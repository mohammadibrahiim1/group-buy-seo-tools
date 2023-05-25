import React from "react";
import AsSeenOn from "../../Components/As-seen-on/PopularTools";
// import DigitalVision from "../../Components/DigitaVision/DigitalVision";
// import Pricing from "../../Components/Pricing/Pricing";
import Header from "../../Components/Header/Header";
import Tools from "../../Components/Tools/Tools";

const Home = () => {
  return (
    <div>
      <Header />
      <AsSeenOn></AsSeenOn>
      {/* <DigitalVision></DigitalVision> */}
      <Tools></Tools>
      {/* <Pricing /> */}
    </div>
  );
};

export default Home;
