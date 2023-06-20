// import "./Header.css";
// import "../App.css";
// // import { Link } from "react-router-dom";
// import Logo from "../logos/blackVerticaLogo.png";
// import LoginButton from "./LoginButton";
// import Search from "./Search";

// const Header = () => {
//   return (
//     <header className="header container">
//       <div className="flex">
//         <img className="logo" src={Logo} alt="logo" />
//         {/* <Link to="/" className="header-title">
//           <img src={Logo} alt="logo" width="300" />
//         </Link> */}
//         <ul className="nav">
//           <li>
//             <Search />
//           </li>
//           <li className="nav-item">
//             <LoginButton />
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import "./Header.css";
import Logo from "../logos/blackVerticaLogo.png";
import LoginButton from "./LoginButton";
import Search from "./Search";

const Header = () => {
  return (
    <header className="header container">
      <div className="flex">
        <img className="logo" src={Logo} alt="logo" />
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
