import React from "react";
import pdf from "../images/Resume-Full_Stack.pdf";
import { FiArrowUpRight } from "react-icons/fi";

const Resume = () => {
  return (
    <div>
      <a className="resume" href={pdf} target="_blank">My Resume &nbsp;<i><FiArrowUpRight /></i></a>
    </div>
  )
}

export default Resume;