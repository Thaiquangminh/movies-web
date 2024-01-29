import React, { useCallback, useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar.tsx";
// Import Swiper React components

import "./Home.css";
import Movies from "./movies/Movies.tsx";
import Banner from "./banner/Banner.tsx";
import Coming from "./coming/Coming.tsx";
import Newsletter from "./newsletter/Newsletter.tsx";
import Footer from "../../components/footer/Footer.tsx";
import ModalCustom from "../../components/commons/Modal.tsx";

const Home = () => {
  const [shadowHeader, setShadowHeader] = useState(false);
  const [isOpenSignInModal, setIsOpenSignInModal] = useState(true);

  const handleScroll = useCallback(() => {
    setShadowHeader(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="home-wrapper">
      <NavBar
        shadowHeader={shadowHeader}
        handleSignIn={(e) => {
          e.preventDefault();
          setIsOpenSignInModal(true);
        }}
      />
      <Banner />
      <Movies />
      <Coming />
      <Newsletter />
      <Footer />
      <ModalCustom
        isOpen={isOpenSignInModal}
        onRequestClose={() => setIsOpenSignInModal(false)}
      >
        <div style={{ color: "red" }}>
          3122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        </div>
      </ModalCustom>
    </div>
  );
};

export default Home;
