import React from "react";
// import { Routes, Route } from "react-router-dom";

import Logo from "../logos/blackHorizontal.png";
import LoginButton from "./LoginButton";
import Search from "./Search";
import "./HeaderMoviePage.css";

const HeaderMoviePage = () => {
  return (
    <header className="header container">
      <div className="">
        <ul className="nav flex">
          <li>
            {" "}
            <a href="/">
              <img className="logo" src={Logo} alt="logo" />
            </a>
          </li>
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

export default HeaderMoviePage;
