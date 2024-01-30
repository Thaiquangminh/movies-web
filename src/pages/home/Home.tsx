import React, { useCallback, useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar.tsx";
// Import Swiper React components

import "./Home.css";
import Movies from "./movies/Movies.tsx";
import Banner from "./banner/Banner.tsx";
import Coming from "./coming/Coming.tsx";
import Newsletter from "./newsletter/Newsletter.tsx";
import Footer from "../../components/footer/Footer.tsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  //#region "Component State"
  const [shadowHeader, setShadowHeader] = useState(false);
  const navigate = useNavigate();
  //#endregion

  const handleScroll = useCallback(() => {
    setShadowHeader(window.scrollY > 0);
  }, []);

  //#region "Effects
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  //#endregion

  return (
    <div className="home-wrapper">
      <NavBar
        shadowHeader={shadowHeader}
        handleSignIn={(e) => {
          e.preventDefault();
          navigate("/login");
        }}
      />
      <Banner />
      <Movies />
      <Coming />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
