import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
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

  function handleHoverFn(id) {
    var tempArr = falseArr.splice();
    tempArr[id] = true;
    setIsHover(tempArr);
  }

  return (
      <div className="nav-div">
        <Link to="/">
          <NavItem
            id={0}
            isHover={isHover[0]}
            setIsHover={(id) => handleHoverFn(id)}
            icon={<RiHomeFill />}
            desc="Home"
            scrollEff="fade-right"
          />
        </Link>
        <Link to="/about">
          <NavItem
            id={1}
            isHover={isHover[1]}
            setIsHover={(id) => handleHoverFn(id)}
            icon={<BsFillPersonFill />}
            desc="About"
            scrollEff="fade-left"
          />
        </Link>
        <Link to="/portfolio">
          <NavItem
            id={2}
            isHover={isHover[2]}
            setIsHover={(id) => handleHoverFn(id)}
            icon={<MdWorkOutline />}
            desc="Portfolio"
            scrollEff="fade-right"
          />
        </Link>
        <Link to="/blog">
          <NavItem
            id={3}
            isHover={isHover[3]}
            setIsHover={(id) => handleHoverFn(id)}
            icon={<FaBloggerB />}
            desc="Blog"
            scrollEff="fade-left"
          />
        </Link>
        <Link to="/contact">
          <NavItem
            id={4}
            isHover={isHover[4]}
            setIsHover={(id) => handleHoverFn(id)}
            icon={<SiMinutemailer />}
            desc="Contact"
            scrollEff="fade-right"
          />
        </Link>
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