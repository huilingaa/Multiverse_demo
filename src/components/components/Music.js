import React from "react";
import "../App.css";
import videoBg4 from "../assets/video4.mp4";
// import ScrollEffect from "./Scrolleffect";
import Navbar from "./Navbar";
import Ribbon from "./Ribbon";
import { Link } from "react-router-dom";
import MouseEffect from "./MouseEffect";
import transition from "../transition";

const Music = () => {
  return (
    <div className="music">
      <Navbar />

      <div className="box4">
        <video src={videoBg4} autoPlay muted loop className="video-bg4" />

        <div className="scroll-main4">
          <div className="scroll4">
            <h1>Music</h1>
          </div>

          <div className="ribbon">
            <Link to={"/awwards"}>
              <Ribbon />
            </Link>
          </div>
        </div>
      </div>
      <Link to={"/"}>
        <div className="down">
          <MouseEffect />
        </div>
      </Link>
    </div>
  );
};

export default transition(Music);
