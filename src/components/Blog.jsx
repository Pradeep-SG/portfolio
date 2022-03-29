import React, {useEffect} from "react";
import Navbar from "./Navbar";
import HireMe from "./HireMe";
import Bitmoji from "./Bitmoji";
import Media from "./Media";
import Resume from "./Resume";
import FooterBg from "./FooterBg";
import ParticleBackground from "./ParticleBackground";

function Home() {

  return (
    <div className="blog">
      <ParticleBackground />
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
      <h3 className="blog-heading">Blog</h3>
      <div className="blog-title">
        <div className="blog-section">
          <a 
            href="https://medium.com/@pradeepsg612/hello-world-in-every-programming-languages-74cbf4d242dc"
            target="blank"  
          >
            <h1>HelloWorld</h1>
            <p>Hello world in every programming languages.</p>
          </a>
        </div>
        {/* <a to="/blog/asynchronousjs"><span>Asynchronous</span></a>
        <a to="/blog/validationemailjs"><span>Integrating Form validation and email.js</span></a> */}
      </div>
      <FooterBg />
      <Media />
    </div>
  );
}

export default Home;

