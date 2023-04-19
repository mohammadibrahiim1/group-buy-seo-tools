import React from "react";
import DigitalVision from "../../components/DigitalVision/DigitalVision";
import AsSeenOn from "../../components/As-seen-on/AsSeenOn";
import ContactSales from "../../components/ContactSales/ContactSales";
import Counter from "../../components/Counter/Counter";
import ContactUs from "../../components/Contact-Us/ContactUs";
import AboutUs from "../../components/About-Us/AboutUs";
import PrivacyPolicy from "../../components/About-Us/PrivacyPolicy";
import RefundPolicy from "../../components/About-Us/RefundPolicy";
import TermsPolicy from "../../components/About-Us/TermsPolicy";

const Home = () => {
  return (
    <div>
      <AsSeenOn></AsSeenOn>
      <DigitalVision></DigitalVision>
      <Counter></Counter>
      <ContactSales></ContactSales>
      <ContactUs></ContactUs>
      <AboutUs></AboutUs>
      <PrivacyPolicy></PrivacyPolicy>
      <RefundPolicy></RefundPolicy>
      <TermsPolicy></TermsPolicy>
    </div>
  );
};

export default Home;
