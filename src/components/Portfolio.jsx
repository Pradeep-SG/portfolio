import React from "react";
import Navbar from "./Navbar";
import HireMe from "./HireMe";
import Bitmoji from "./Bitmoji";
import Media from "./Media";
import Resume from "./Resume";
import FooterBg from "./FooterBg";
import ProjectDiv from "./ProjectDiv";

function Home() {

  return (
    <div className="portfolio">
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
      <h2 className="project-heading">Projects</h2>
      <ProjectDiv />
      <FooterBg />
      <Media />
    </div>
  );
}

export default Home;

