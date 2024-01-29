import React, { useState } from "react";
import { BiMenu, BiSolidMovie, BiX } from "react-icons/bi";
import "./NavBar.css";

type NavBarProps = {
  handleSignIn: (e) => void;
  shadowHeader: boolean;
};

const NavBar = (props: NavBarProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      <header className={props.shadowHeader ? "shadow" : ""}>
        <a href="#" className="logo">
          <BiSolidMovie className="logo-icon" />
          <span>Movies</span>
        </a>
        {openMenu ? (
          <BiX
            className="bx"
            id="menu-icon"
            onClick={() => setOpenMenu(false)}
          />
        ) : (
          <BiMenu
            className="bx"
            id="menu-icon"
            onClick={() => setOpenMenu(true)}
          />
        )}

        <ul className={`navbar ${openMenu ? "show-navbar" : "hide-navbar"}`}>
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

        <a href="#" className="btn" onClick={props.handleSignIn}>
          Sign In
        </a>
      </header>
    </div>
  );
};

export default NavBar;
