import React from "react";

import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url()` }}
      ></div>
      <div className="aboutBottom">
        <h1>Groundworker</h1>
        <p>
        A Groundworker is a construction professional who mainly prepares the ground before, during and after other construction workers can do their duties. Groundworkers are often the first and the last workers to set foot on site as they prepare the site with drainage, foundations and sub-surfaces.
        </p>
      </div>
    </div>
  );
}

export default About;
