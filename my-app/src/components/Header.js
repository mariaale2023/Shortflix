import React from "react";
// import { Routes, Route } from "react-router-dom";

import Logo from "../logos/blackVerticaLogo.png";
import LoginButton from "./LoginButton";
import Search from "./Search";

const Header = () => {
  return (
    <header className="header container">
      <div className="flex">
        <a href="/">
          <img className="logo" src={Logo} alt="logo" />
        </a>

        <ul className="nav">
          <li>
            <Search />
          </li>
          <li className="nav-item">
            <LoginButton />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
