import React from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoTiktok,
  BiSolidMovie,
} from "react-icons/bi";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <a href="#" className="logo">
          <BiSolidMovie className="logo-icon" />
          <span>Movies</span>
        </a>

        <div className="social">
          <a href="#">
            <BiLogoFacebook className="icon" />
          </a>
          <a href="#">
            <BiLogoTwitter className="icon" />
          </a>
          <a href="#">
            <BiLogoInstagram className="icon" />
          </a>
          <a href="#">
            <BiLogoTiktok className="icon" />
          </a>
        </div>
      </section>
      <div className="copy-right">
        <p>&#169; All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
