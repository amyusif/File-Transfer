import React from "react";
import mylogo from "../Assets/logo.png";
import Links from "./Links";
import ButtonLink from "./ButtonLink";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src={mylogo} alt="logo" className="img-log" />
        <h2>
          bit.<span>Upload</span>
        </h2>
      </div>
      <div className="links">
        <Links />
      </div>
      <div>
        <ButtonLink name="Sign Up" />
      </div>
    </div>
  );
};

export default Nav;
