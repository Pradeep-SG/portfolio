import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import adviceImg from "../images/projects/Advice-generator.jpg";

const Project = () => {
  return (
    <div>
      <div className="project-div">
        <h3>Title</h3>
        <img src={adviceImg} alt="Advice Generator" />
        <p>Description</p>
        <div className="links">
        <div className="link-div">
          <FiExternalLink />
        </div>
        <div className="link-div">
          <AiOutlineGithub />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Project;