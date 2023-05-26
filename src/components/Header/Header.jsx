import React from "react";
import "./Header.css";
// import ResponsiveEmbed from "react-bootstrap/lib/ResponsiveEmbed";
// import PageHeader from "react-bootstrap/lib/Pageheader";
import { Ratio } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <section>
        <div className="header-section">
          <div className="text-center p-40">
            <div>
              <h1 className="text-5xl ">Valuable Group Buy SEO Tools Service at Affordable Price</h1>
              <p>
                As a SEO / Digital Marketer / Website owner, you know how
                important the SEO is. As a result, you're looking for ways to
                improve your ranking on search engines so more users can find
                you on the World Wide Web. If you're looking for affordable SEO
                tools, look no further than Group Buy SEO Tools XYZ. This
                company offers SEO tools for all sizes of businesses, at prices
                everyone can afford. India, Bangladesh, Pakistan, Nepal, United
                States, Saudi Arabia, Malaysia, and many more countries peoples
                also can purchase our service. Our maximum tools have simple
                access system (One click to access system) - hope you'll like
                this system!
              </p>
            </div>
            {/* <div>
              <div style={{ width: 660, height: "auto" }}>
                <Ratio aspectRatio="16x9">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/TOfeDuAYUUI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </Ratio>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
