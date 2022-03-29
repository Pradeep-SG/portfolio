import React from "react";
import { Link } from "react-router-dom";

const HireMe = () => {
  return (
    <Link to="/contact">
    <div data-aos="fade-in" className="hire-me">
      <h2>Hire me</h2>
    </div>
    </Link>
  )
};

export default HireMe