import React from "react";
import { BiBookBookmark, BiPlay } from "react-icons/bi";
import "./MovieDetail.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const MovieDetail = () => {
  const casters = [
    {
      casterName: "Morgan Freeman",
      casterImg: "images/movies-detail/cast1.webp",
    },
    {
      casterName: "Clancy Brown",
      casterImg: "images/movies-detail/cast2.webp",
    },
    {
      casterName: "Tim Robbins",
      casterImg: "images/movies-detail/cast3.webp",
    },
    {
      casterName: "Bob Gunton",
      casterImg: "images/movies-detail/cast4.webp",
    },
    {
      casterName: "Clancy Brown",
      casterImg: "images/movies-detail/cast2.webp",
    },
    {
      casterName: "Tim Robbins",
      casterImg: "images/movies-detail/cast3.webp",
    },
    {
      casterName: "Morgan Freeman",
      casterImg: "images/movies-detail/cast1.webp",
    },
    {
      casterName: "Clancy Brown",
      casterImg: "images/movies-detail/cast2.webp",
    },
    {
      casterName: "Tim Robbins",
      casterImg: "images/movies-detail/cast3.webp",
    },
  ];

  return (
    <div className="detail-container">
      {/* Brief */}
      <div className="detail-brief">
        <div className="detail-main-img">
          <img src="images/movies-detail/main-img.webp" alt="" />
        </div>
        <div className="button">
          <BiPlay />
          <div>Play trailer</div>
        </div>
        <div className="button">
          <BiBookBookmark />
          <div>Like</div>
        </div>

        <div className="info-wrapper">
          <div className="info">
            <span className="info-detail">Language</span> <span>En</span>
          </div>
          <div className="info">
            <span className="info-detail">Budget</span> <span>$25,000,000</span>
          </div>
          <div className="info">
            <span className="info-detail">Revenue</span>
            <span>$28,341,469</span>
          </div>
        </div>
      </div>
      {/* End Brief */}

      {/* Content */}
      <div className="detail-content">
        <div className="title">The Shawshank Redemption</div>
        <div className="specifications">
          <div className="progress-bar">87%</div>
          <span>23rd September 1994</span>
          <span>2h 22m</span>
          <div>
            <span className="type">Crime</span>
            <span className="type">Drama</span>
          </div>
        </div>
        <div className="description">
          Framed in the 1940s for the double murder of his wife and her lover,
          upstanding banker Andy Dufresne begins a new life at the Shawshank
          prison, where he puts his accounting skills to work for an amoral
          warden. During his long stretch in prison, Dufresne comes to be
          admired by the other inmates — including an older prisoner named Red —
          for his integrity and unquenchable sense of hope.
        </div>

        {/* Cast */}
        <div>
          <div className="cast">
            <Swiper
              slidesPerView={5}
              // spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <div>
                {/* Box 1 */}
                {casters.map((caster) => {
                  return (
                    <SwiperSlide key={caster.casterName}>
                      <img
                        className="caster-img"
                        src={caster.casterImg}
                        alt=""
                      />
                      <div className="caster-name">{caster.casterName}</div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
      {/* End Content */}
    </div>
  );
};

export default MovieDetail;
