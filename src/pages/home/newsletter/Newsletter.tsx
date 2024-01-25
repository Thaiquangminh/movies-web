import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div>
      <section className="newsletter" id="newsletter">
        <h2>
          Subcribe To Get <br /> Newsletter
        </h2>
        <form action="">
          <input
            type="email"
            placeholder="Enter Email..."
            required
            className="email"
          />
          <input type="submit" value="Subscribe" className="btn" />
        </form>
      </section>
    </div>
  );
};

export default Newsletter;
