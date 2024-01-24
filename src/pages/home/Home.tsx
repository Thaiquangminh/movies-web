import React from "react";
import NavBar from "../../components/navbar/NavBar.tsx";
// Import Swiper React components

import "./Home.css";
import Movies from "./movies/Movies.tsx";
import Banner from "./banner/Banner.tsx";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Movies />
    </div>
  );
};

export default Home;
