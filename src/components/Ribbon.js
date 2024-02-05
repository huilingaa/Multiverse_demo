import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Ribbon = () => {
  return (
    <Link className="link" to={"/awwards"}>
      <div className="ribbon">
        <div className="upper-ribbon">
          <div className="site">
            <span>SITE</span>
          </div>
          <div>
            <div className="of">
              <span>OF</span>
            </div>
            <div className="the">
              <span>THE</span>
            </div>
          </div>
          <div className="day">
            <span>DAY</span>
          </div>
        </div>

        <div className="lower-ribbon">
          <div className="aww">
            <span>AWWWARDS</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Ribbon;
