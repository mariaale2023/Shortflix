import "./Header.css";
// import { Link } from "react-router-dom";
import Logo from "../logos/blackVerticaLogo.png";
import LoginButton from "./LoginButton";
import Search from "./Search";

const Header = () => {
  return (
    <header className="header">
      <div className="flex">
        <img src={Logo} alt="logo" width="300" />
        {/* <Link to="/" className="header-title">
          <img src={Logo} alt="logo" width="300" />
        </Link> */}
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
