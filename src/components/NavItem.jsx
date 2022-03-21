import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import Aos from "aos";

function NavItem({id, isHover, setIsHover, icon, desc, scrollEff}) {
  const btnStyle = useSpring({
    backgroundColor: isHover ? "#00ADB5" : "#EEEEEE",
    borderTopRightRadius: isHover ? "0" : "20%",
    borderBottomRightRadius: isHover ? "0" : "20%"
  });

  const expandStyle = useSpring({
    opacity: isHover ? "1" : "0",
    width: isHover ? "125px" : "1px",
  });

  useEffect(() => {
    Aos.init({duration: 700});
  }, []);

  return (
    <div className="nav-desc" data-aos={scrollEff}
        onMouseEnter={() => setIsHover(id)}
        onMouseLeave={() => setIsHover(-1)}
      >
        <animated.div 
          className="nav-link"
          style={btnStyle}
        >
        {icon}
        </animated.div>
        <animated.div 
          className="desc-div"
          style={expandStyle}  
        >
          <h3>{desc}</h3>
        </animated.div>
      </div>
  )

}

export default NavItem;