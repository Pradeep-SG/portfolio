import React from "react";
import { RiLinkedinLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

const Media = () => {
  return (
    <div className="footer-div">
      <div className="wrapper">
        <a href="https://www.linkedin.com/in/pradeep-sg/" target="blank">
          <div className="icon linkedin">
            <div className="tooltip">LinkedIn</div>
            <span><i><RiLinkedinLine /></i></span>
          </div>
        </a>
        <a href="https://github.com/Pradeep-SG" target="blank">
          <div className="icon github">
            <div className="tooltip">GitHub</div>
            <span><i><FaGithub /></i></span>
          </div>
        </a>
        <a href="https://medium.com/@pradeepsg612" target="blank">
          <div className="icon medium">
            <div className="tooltip">Medium</div>
            <span><i><BsMedium /></i></span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Media;