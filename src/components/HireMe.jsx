import React from 'react';
import { Link } from 'react-router-dom';

const HireMe = () => {
  return (
    <div data-aos="fade-in" data-aos-once={true} className="hire-me">
      <Link to="/contact">
        <h2>Hire me</h2>
      </Link>
    </div>
  );
};

export default HireMe;
