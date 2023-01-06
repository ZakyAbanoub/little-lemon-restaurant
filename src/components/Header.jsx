import React from "react";
import Nav from "./Nav";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="">
        <div className="img-container">
          <img src={Logo} alt="little lemon logo" />
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
