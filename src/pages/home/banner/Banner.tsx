import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { BiPlay } from "react-icons/bi";

const Banner = () => {
  return (
    <div>
      <section className="home" id="home">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            disabledClass: "disabled_swiper_button",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          loop={true}
          className="mySwiper"
        >
          {/* Box 1 */}
          <SwiperSlide className="container">
            <img src="images/home1.jpg" alt="" />
            <div className="home-text">
              <div className="home-text-title">
                <span>Marvel Universe</span>
                <h1>
                  Venom: Let There <br /> Be Carnage
                </h1>
                +
                <a href="#" className="btn">
                  Book Now
                </a>
              </div>

              <a href="#" className="play">
                <BiPlay className="icon" />
              </a>
            </div>
          </SwiperSlide>

          {/* Box 2 */}
          <SwiperSlide className="container">
            <img src="images/home2.jpg" alt="" />
            <div className="home-text">
              <div className="home-text-title">
                <span>Marvel Universe</span>
                <h1>
                  Avengers:
                  <br /> Infinity War
                </h1>
                <a href="#" className="btn">
                  Book Now
                </a>
              </div>
              <a href="#" className="play">
                <BiPlay className="icon" />
              </a>
            </div>
          </SwiperSlide>

          {/* Box 3 */}
          <SwiperSlide className="container">
            <img src="images/home3.jpg" alt="" />
            <div className="home-text">
              <div className="home-text-title">
                <span>Marvel Universe</span>
                <h1>
                  Spider-Man:
                  <br /> Far From Home
                </h1>
                <a href="#" className="btn">
                  Book Now
                </a>
              </div>

              <a href="#" className="play">
                <BiPlay className="icon" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Banner;
