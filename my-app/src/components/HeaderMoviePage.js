import React from "react";
// import { Routes, Route } from "react-router-dom";

import Logo from "../logos/blackHorizontal.png";
import LoginButton from "./LoginButton";
import Search from "./Search";
import "./HeaderMoviePage.css";

const HeaderMoviePage = () => {
  return (
    <header className="header-movie">
      <div className="">
        <ul className="nav box">
          <li className="header-logo-movie">
            <a href="/">
              <img className="logo" src={Logo} alt="logo" />
            </a>
          </li>
          <li className="nav-search-movie">
            <Search />
          </li>
          <li className="nav-login-movie">
            <LoginButton />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderMoviePage;
