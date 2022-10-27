import React from "react";
import "../App.css";
import I4G from "../Assets/I4G.png";
import zuri from "../Assets/zuri.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <img src={zuri} alt="zuri-logo" />
        <h3 className="footer-text">HNG Internship 9 Frontend Task</h3>
        <img src={I4G} alt="I4G-LOGO" />
      </div>
    </div>
  );
}

export default Footer;
