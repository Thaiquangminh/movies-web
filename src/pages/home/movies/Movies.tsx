import React from "react";
import "./Movies.css";
import { movies } from "../../../data/data.ts";

const Movies = () => {
  return (
    <div>
      {/* Section Movies */}
      <section className="movies" id="movies">
        <h2 className="heading">Opening This Week</h2>

        <div className="movies-container">
          {movies.map((movie) => {
            return (
              <div className="box" key={movie.title}>
                <div className="box-img">
                  <img src={movie.img} alt="" />
                </div>
                <h3>{movie.title}</h3>
                <span>
                  {movie.duration} min | {movie.type}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Movies;
