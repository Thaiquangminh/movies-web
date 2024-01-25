import React, { useCallback, useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar.tsx";
// Import Swiper React components

import "./Home.css";
import Movies from "./movies/Movies.tsx";
import Banner from "./banner/Banner.tsx";
import Coming from "./coming/Coming.tsx";
import Newsletter from "./newsletter/Newsletter.tsx";
import Footer from "../../components/footer/Footer.tsx";

const Home = () => {
  const [shadowHeader, setShadowHeader] = useState(false);

  const handleScroll = useCallback(() => {
    console.log(window.scrollY);
    setShadowHeader(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <NavBar shadowHeader={shadowHeader} />
      <Banner />
      <Movies />
      <Coming />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
