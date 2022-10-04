import React from "react";
import logo from "../img/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <img className="images" src={logo} alt="" />
      <span>Made with ❤ by Rahul</span>
    </footer>
  );
};

export default Footer;
