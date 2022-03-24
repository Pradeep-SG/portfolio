import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import HireMe from "./HireMe";
import Bitmoji from "./Bitmoji";
import Skills from "./Skills";
import Media from "./Media";
import Project from "./Project";
import ParticleBackground from "./ParticleBackground";
import Resume from "./Resume";

function Home() {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className="portfolio">
      <div className="bitmoji-nav-div" >
        <Bitmoji />
      </div>
      <Navbar />
      <div className="top-div">
        <Resume />
        <HireMe />
      </div>
      <h2 className="project-heading">Projects</h2>
      <div className="main-content-portfolio">
        <Project className="one" />
        <Project />
        <Project/>
      </div>
      <Media />
    </div>
  );
}

export default Home;

