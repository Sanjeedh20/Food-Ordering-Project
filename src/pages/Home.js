import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../assets/bj.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="headerContainer">
      <h1> FoodZone </h1>
      <p> Perfect Treat For Your Tonque</p>
      <Link to="/menu">
        <button> ORDER NOW </button>
      </Link>
    </div>
  </div>
  )
}
export default Home