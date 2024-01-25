import React from "react";
import { BiMenu, BiSolidMovie } from "react-icons/bi";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <header className={props.shadowHeader && "shadow"}>
        <a href="#" className="logo">
          <BiSolidMovie className="logo-icon" />
          <span>Movies</span>
        </a>
        <BiMenu className="bx" id="menu-icon" />

        <ul className="navbar">
          <li>
            <a href="#home" className="home-active">
              Home
            </a>
          </li>
          <li>
            <a href="#movies">Movies</a>
          </li>
          <li>
            <a href="#coming">Coming</a>
          </li>
          <li>
            <a href="#newsletter">Newsletter</a>
          </li>
        </ul>

        <a href="" className="btn">
          Sign In
        </a>
      </header>
    </div>
  );
};

export default NavBar;
