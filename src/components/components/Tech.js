import React from "react";
import "../App.css";
import videoBg3 from "../assets/video3.mp4";
// import ScrollEffect from "./Scrolleffect";
import Navbar from "./Navbar";
import Ribbon from "./Ribbon";
import { Link } from "react-router-dom";
import MouseEffect from "./MouseEffect";
import transition from "../transition";

const Tech = () => {
  return (
    <div className="tech">
      <Navbar />

      <div className="box3">
        <video src={videoBg3} autoPlay muted loop className="video-bg3" />

        <div className="scroll-main3">
          <div className="scroll3">
            <h1>tech</h1>
          </div>

          <div className="ribbon">
            <Link to={"/awwards"}>
              <Ribbon />
            </Link>
          </div>
        </div>
      </div>
      <Link to={"/music"}>
        <div className="down">
          <MouseEffect />
        </div>
      </Link>
    </div>
  );
};

export default transition(Tech);
