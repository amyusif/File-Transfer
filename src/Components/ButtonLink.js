import React from "react";
import { MdLogin } from "react-icons/md";
import { MdMenu } from "react-icons/md";

const ButtonLink = ({ name }) => {
  return (
    <div className="btn-links">
      <a href="#" className="btn-login">
        <MdLogin />
      </a>
      <a href="#" className="sign-Up">
        {name}
      </a>
      <a href="#" className="btn-pages">
        <MdMenu />
      </a>
    </div>
  );
};

export default ButtonLink;
