import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import HireMe from "./HireMe";
import Bitmoji from "./Bitmoji";
import Skills from "./Skills";
import Media from "./Media";
import ParticleBackground from "./ParticleBackground";
import Resume from "./Resume";
import FooterBg from "./FooterBg";
import ProjectDiv from "./ProjectDiv";

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
      <ProjectDiv />
      <FooterBg />
      <Media />
    </div>
  );
}

export default Home;

