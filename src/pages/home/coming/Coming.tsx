import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import "./Coming.css";
import { comingMovies } from "../../../data/data.ts";

const Coming = () => {
  return (
    <div>
      <section className="coming" id="coming">
        <h2 className="heading">Coming Soon</h2>
        <Swiper
          loop={true}
          slidesPerView={5}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            568: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            968: {
              slidesPerView: 5,
            },
          }}
        >
          <div className="coming-container">
            {/* Box 1 */}
            {comingMovies.map((movie) => {
              return (
                <SwiperSlide className="box" key={movie.title}>
                  <div className="box-img">
                    <img src={movie.img} alt="" />
                  </div>
                  <h3>{movie.title}</h3>
                  <span>
                    {movie.duration} min | {movie.type}
                  </span>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </section>
    </div>
  );
};

export default Coming;
