import React from "react";
import Navbar from "./Navbar";
import HireMe from "./HireMe";
import Resume from "./Resume";
import Bitmoji from "./Bitmoji";
import Media from "./Media";
import ParticleBackground from "./ParticleBackground";
import FooterBg from "./FooterBg";

function Home() {

  return (
    <div className="home">
      <ParticleBackground />
      <Navbar />
      <HireMe />
      <div className="main-content">
        <div>
          <h3 data-aos="slide-up" className="heading">The <span className="heading-span">Full</span> stack Developer</h3>
        </div>
        <div>
          <h4 data-aos="slide-up">Passion for developing scalable web applications across the full stack, and I love what I do.</h4>
        </div>
        <Bitmoji />
        <div className="resume-div">
          <Resume />
        </div>
      </div>
      <Media />
      <FooterBg />
    </div>
  );
}

export default Home;

