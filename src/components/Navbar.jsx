import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import NavItem from "./NavItem"

const Navbar = () => {
  // const btnStyle = useSpring({
  //   backgroundColor: isHover ? "#00ADB5" : "#EEEEEE",
  //   borderTopRightRadius: isHover ? "0" : "50%",
  //   borderBottomRightRadius: isHover ? "0" : "50%"
  // });

  // const expandStyle = useSpring({
  //   delay: 300,
  //   opacity: isHover ? "1" : "0",
  //   width: isHover ? "125px" : "1px",
  // });

  // useEffect(() => {
  //   Aos.init({duration: 700});
  // }, []);

  const falseArr = [];
  for(var i=0; i<5; i++) falseArr.push(false);

  const [isHover, setIsHover] = useState(falseArr);
  const [isActive, setIsActive] = useState(falseArr);

  function handleHoverFn(id) {
    let tempArr = falseArr.splice();
    tempArr[id] = true;
    setIsHover(tempArr);
  }

  return (
      <div className="nav-div">
        <NavLink to="/">
          <NavItem
            id={0}
            isHover={isHover[0]}
            setIsHover={(id) => handleHoverFn(id)}
            icon={<RiHomeFill />}
            desc="Home"
            classTitle="home-nav"
          />
        </NavLink>
        <NavLink to="/about">
          <NavItem
            id={1}
            isHover={isHover[1]}
            setIsHover={(id) => handleHoverFn(id)}
            icon={<BsFillPersonFill />}
            desc="About"
            classTitle="about-nav"
          />
        </NavLink>
        <NavLink to="/portfolio">
          <NavItem
            id={2}
            isHover={isHover[2]}
            setIsHover={(id) => handleHoverFn(id)}
            icon={<MdWorkOutline />}
            desc="Portfolio"
            classTitle="portfolio-nav"
          />
        </NavLink>
        <NavLink to="/blog">
          <NavItem
            id={3}
            isHover={isHover[3]}
            setIsHover={(id) => handleHoverFn(id)}
            icon={<FaBloggerB />}
            desc="Blog"
            classTitle="blog-nav"
          />
        </NavLink>
        <NavLink to="/contact">
          <NavItem
            id={4}
            isHover={isHover[4]}
            setIsHover={(id) => handleHoverFn(id)}
            icon={<SiMinutemailer />}
            desc="Contact"
            classTitle="contact-nav"
          />
        </NavLink>
        </div>
  )
}

export default Navbar

      /* <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes> */

/* <div className="nav-desc" data-aos="fade-right"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <animated.div 
          className="nav-link"
          style={btnStyle}
        >
          <RiHomeFill />
        </animated.div>
        <animated.div 
          className="desc-div"
          style={expandStyle}  
        >
          <h3>Home</h3>
        </animated.div>
      </div> 
      <div className="nav-desc" data-aos="fade-left" 
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <animated.div 
          className="nav-link" 
        >
          <BsFillPersonFill />
        </animated.div>
        <animated.div 
          className="desc-div"
        >
          <h3>About</h3>
        </animated.div>
      </div> 
      <div data-aos="fade-right" className="nav-link" >
        <div className="nav-link" >
          <MdWorkOutline />
        </div>
      </div>
      <div data-aos="fade-left" className="nav-link" >
        <div className="nav-link" >
          <FaBloggerB />
        </div>
      </div>
      <div data-aos="fade-right" className="nav-link" >
        <div className="nav-link" >
          <SiMinutemailer />
        </div>
      </div> */