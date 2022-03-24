import React from "react";
import { RiLinkedinLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Media = () => {
  return (
    <div className="footer-div">
      <div className="wrapper">
        <div className="icon linkedin">
          <div className="tooltip">LinkedIn</div>
          <span><i><RiLinkedinLine /></i></span>
        </div>
        <div className="icon github">
          <div className="tooltip">GitHub</div>
          <span><i><FaGithub /></i></span>
        </div>
      </div>
    </div>
  )
}

export default Media;