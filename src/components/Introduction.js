import React from "react";
import "../App.css";
import videoBg from "../assets/video1.mp4";
// import ScrollEffect from "./Scrolleffect";
import Navbar from "./Navbar";
import Ribbon from "./Ribbon";
import { Link } from "react-router-dom";
import MouseEffect from "./MouseEffect";
import transition from "../transition";

const Introduction = () => {
  return (
    <div className="introduction">
      <Navbar />

      <div className="box">
        <video src={videoBg} autoPlay muted loop className="video-bg" />

        <div className="scroll-main">
          <div className="scroll">
            <div className="scroll-wrapper">
              <p>When you want something</p>
              <p>all the universe conspires</p>
              <p>in helping you to achieve it.</p>
              <p>
                <strong>
                  <i>
                    <small>Paulo Coelho</small>
                  </i>
                </strong>
              </p>
              <p>
                <br />
                <br />
              </p>
              <p>Feed is the conspiracy</p>
              <p>the conspiracy of trust.</p>
              <p>
                <br />
                <br />
              </p>
              <p>
                <br />
                <br />
              </p>
              <p>trust is the single</p>
              <p>most important ingredients</p>
              <p>missing from digital relationship.</p>
              <p>
                <br />
                <br />
              </p>
            </div>
          </div>

          <div className="ribbon">
            <Link to={"/awwards"}>
              <Ribbon />
            </Link>
          </div>
        </div>
      </div>
      <Link to={"/technology"}>
        <div className="down">
          <MouseEffect />
        </div>
      </Link>
    </div>
  );
};

export default transition(Introduction);
