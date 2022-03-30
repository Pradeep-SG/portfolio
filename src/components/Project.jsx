import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";

const Project = ({imgUrl, title, desc, live, github}) => {

  const [projectHover, isProjectHover] = useState(false);

  const blurStyle = useSpring({
    filter: projectHover ? "blur(0.2rem)" : "blur(0rem)"
  });

  const zoomInStyle = useSpring({
    opacity: projectHover ? "1" : "0",
    transform: projectHover ? "scale(1)" : "scale(0)"
  });

  return (
      <div
        data-aos="zoom-in"
        className="project-div"
      >
        <h3>{title}</h3>
        <animated.div
          className="project-img-div"
          style={blurStyle}
        >
          <img src={imgUrl} alt={title}
            className="project-img"
            onMouseOver={() => isProjectHover(true)}
            onMouseLeave={() => isProjectHover(false)}
          />
        </animated.div>
        <p className="desc">{desc}</p>
        <animated.div
          style={zoomInStyle}
          className="links"
          onMouseOver={() => isProjectHover(true)}
          onMouseLeave={() => isProjectHover(false)}
        >
        <a href={live} target="blank">
          <div className="link-div">
            <FiExternalLink />
          </div>
        </a>
        <a href={github} target="blank">
          <div className="link-div">
            <AiOutlineGithub />
          </div>
        </a>
        </animated.div>
      </div>
  )
}

export default Project;