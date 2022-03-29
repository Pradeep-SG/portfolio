import React, { useLayoutEffect, useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import Aos from "aos";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function NavItem({id, isHover, setIsHover, icon, desc, classTitle}) {

  const [isLoaded, setIsLoaded] = useState(false);

  const [width, height] = useWindowSize();

  const loadStyle = useSpring({
    delay: 500,
    opacity: isLoaded ? "1" : "0",
    transform: isLoaded ? "scale(1)" : "scale(0)"
  });

  const btnStyle = useSpring({
    backgroundColor: isHover ? "#00ADB5" : "#EEEEEE",
    borderTopRightRadius: (isHover && width>=550) ? "7%" : "50%",
    borderBottomRightRadius: (isHover && width>=550) ? "7%" : "50%"
  });

  const expandStyle = useSpring({
    opacity: (isHover && width>=550) ? "1" : "0",
    width: (isHover && width>=550) ? "132px" : "1px",
  });

  useEffect(() => {
    setIsLoaded(true);
    Aos.init({duration: 700});
  }, []);

  return (
    <animated.div
      style={loadStyle}
      id="loadingDiv" className={isLoaded ? 'text-center nav-desc' : 'text-center animate nav-desc'}
      onMouseEnter={() => setIsHover(id)}
      onMouseLeave={() => setIsHover(-1)}
    >
      <animated.div 
        className={`nav-link ${classTitle}`}
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
    </animated.div>
  )

}

export default NavItem;