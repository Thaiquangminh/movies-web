import React from "react";
import "./Movies.css";

const Movies = () => {
  return (
    <div>
      {/* Section Movies */}
      <section className="movies">
        <h2 className="heading">Opening This Week</h2>

        <div className="movies-container">
          {/* Box 1 */}
          <div className="box">
            <div className="box-img">
              <img src="images/m1.jpg" alt="" />
            </div>
            <h3>Venom</h3>
            <span>120 min | Action</span>
          </div>
          {/* Box 1 */}
          <div className="box">
            <div className="box-img">
              <img src="images/m1.jpg" alt="" />
            </div>
            <h3>Venom</h3>
            <span>120 min | Action</span>
          </div>
          {/* Box 1 */}
          <div className="box">
            <div className="box-img">
              <img src="images/m1.jpg" alt="" />
            </div>
            <h3>Venom</h3>
            <span>120 min | Action</span>
          </div>
          {/* Box 1 */}
          <div className="box">
            <div className="box-img">
              <img src="images/m2.jpg" alt="" />
            </div>
            <h3>Venom</h3>
            <span>120 min | Action</span>
          </div>{" "}
          {/* Box 1 */}
          <div className="box">
            <div className="box-img">
              <img src="images/m3.jpg" alt="" />
            </div>
            <h3>Venom</h3>
            <span>120 min | Action</span>
          </div>{" "}
          {/* Box 1 */}
          <div className="box">
            <div className="box-img">
              <img src="images/m4.jpg" alt="" />
            </div>
            <h3>Venom</h3>
            <span>120 min | Action</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movies;
