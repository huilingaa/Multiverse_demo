import React from "react";
import "../App.css";
import videoBg2 from "../assets/videos2.mp4";
// import ScrollEffect from "./Scrolleffect";
import Navbar from "./Navbar";
import Ribbon from "./Ribbon";
import { Link } from "react-router-dom";
import MouseEffect from "./MouseEffect";
import transition from "../transition";

const Technology = () => {
  return (
    <div className="technology">
      <Navbar />

      <div className="box2">
        <video src={videoBg2} autoPlay muted loop className="video-bg2" />

        <div className="scroll-main2">
          <div className="scroll2">
            <h1>technology</h1>
          </div>

          <div className="ribbon">
            <Link to={"/awwards"}>
              <Ribbon />
            </Link>
          </div>
        </div>
      </div>
      <Link to={"/tech"}>
        <div className="down">
          <MouseEffect />
        </div>
      </Link>
    </div>
  );
};

export default transition(Technology);
