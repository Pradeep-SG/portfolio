import React from "react";
import pdf from "../images/Resume-Analyst.pdf";
import { FiArrowUpRight } from "react-icons/fi";

const Resume = () => {
  return (
    <div data-aos="fade-in">
      <a className="resume" href={pdf} target="_blank">My Resume &nbsp;<FiArrowUpRight /></a>
    </div>
  )
}

export default Resume;