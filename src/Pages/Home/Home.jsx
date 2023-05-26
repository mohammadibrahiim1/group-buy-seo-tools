import React from "react";
import Header from "../../Components/Header/Header";
import Tools from "../../Components/Tools/Tools";
import PopularTools from "../../Components/As-seen-on/PopularTools";
import Payment from "../../Components/Payment/Payment";
import Counters from "../../Components/Counters/Counters";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

const Home = () => {
  return (
    <div>
      <Header />
      <PopularTools></PopularTools>
      <Counters></Counters>
      <Tools></Tools>
      <ServiceCard></ServiceCard>
      <Payment></Payment>
    </div>
  );
};

export default Home;
