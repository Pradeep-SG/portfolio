import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';

const BlogComponent = ({blogUrl, blogHeading, blogDesc}) => {

  const [isLoad, setIsLoad] = useState(false);

  const loadStyle = useSpring({
    opacity: isLoad ? "1" : "0"
  });

  useEffect(() => {
    setIsLoad(true);
  }, []);
  
  return (
    <animated.div 
      className="blog-section"
      style={loadStyle}
    >
      <a 
        href={blogUrl}
        target="blank"  
      >
        <h1>{blogHeading}</h1>
        <p>{blogDesc}</p>
      </a>
    </animated.div>
  )
}

export default BlogComponent;