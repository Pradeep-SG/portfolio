import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import HireMe from "./HireMe";
import Resume from "./Resume";
import ParticleBackground from "./ParticleBackground";
import bitmoji from "../images/pradeep-bitmoji.png";

function Home() {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

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
        <div data-aos="zoom-out" className="bitmoji-img-div">
          <img className="bitmoji-img" src={bitmoji} alt="bitmoji" />
          <div className="background-fill"></div>
        </div>
        <div className="resume-div">
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default Home;

