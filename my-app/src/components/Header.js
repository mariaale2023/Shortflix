import React from "react";
// import { Routes, Route } from "react-router-dom";

import Logo from "../logos/blackVerticaLogo.png";
import LoginButton from "./LoginButton";
import Search from "./Search";
import "./Header.css";

const Header = () => {
  return (
    <header className="header container">
      <div className="grid-header">
        <a className="logo-box" href="/">
          <img className="logo" src={Logo} alt="logo" />
        </a>

        <div className="nav-search">
          <Search />
        </div>

        <div className="nav-login">
          <LoginButton />
        </div>
      </div>
      {/* <h1 className="header-title">The best place to find short fimls</h1> */}
    </header>
  );
};

export default Header;
