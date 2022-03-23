import React from "react";
import bitmoji from "../images/pradeep-bitmoji.png";

const Bitmoji = () => {
  return (
    <div data-aos="zoom-out" className="bitmoji-img-div">
      <img className="bitmoji-img" src={bitmoji} alt="bitmoji" />
      <div className="background-fill"></div>
    </div>
  )
}

export default Bitmoji;