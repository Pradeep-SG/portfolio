import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import NavItem from "./NavItem"

const Navbar = () => {

  const falseArr = [];
  for(var i=0; i<5; i++) falseArr.push(false);

  const [isHover, setIsHover] = useState(falseArr);

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

export default Navbar;