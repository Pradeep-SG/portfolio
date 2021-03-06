import React from "react";
import Navbar from "./Navbar";
import HireMe from "./HireMe";
import Bitmoji from "./Bitmoji";
import Skills from "./Skills";
import Media from "./Media";
import Resume from "./Resume";
import FooterBg from "./FooterBg";

function Home() {

  return (
    <div className="about">
      <div className="bitmoji-nav-div" >
        <Bitmoji />
      </div>
      <Navbar />
      <div className="top-div">
        <div data-aos="fade-in">
          <Resume />
        </div>
        <HireMe />
      </div>
      <div className="main-content">
        <div>
          <h3 data-aos="zoom-in" className="heading">I am <span className="heading-span">Pradeep</span> S G</h3>
        </div>
        <div>
          <h4 data-aos="zoom-in">A college student who is organized, collaborative, eager to learn, and has a year of valuable expertise in
          HTML, CSS, and various frameworks of JavaScript. Seeking an opportunity as a full stack developer to contribute to business performance. Whatever your needs are, I can pretty much take on any challenges.</h4>
        </div>
      </div>
      <Skills />
      <Media />
      <FooterBg />
    </div>
  );
}

export default Home;

