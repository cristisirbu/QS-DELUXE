import React from "react";
import BannerImage from "../assets/QS DELUXE.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> QS DELUXE </h1>
      </div>
    </div>
  );
}

export default Home;
