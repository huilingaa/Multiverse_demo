import React from "react";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import transition from "../transition";
// import Ribbon from "./Ribbon";

const Navbar = (props) => {
  return (
    <div className="nav">
      <div className="logo">

          <Link className="link-logo" to={"/"}>
            LOGO
          </Link>
     
      </div>
      <div className="nav-items">
        <h3>
          <Link className="link" to={"/"}>
            INTRODUCTION {props.percent}%
          </Link>
        </h3>
        <h3>
          <Link className="link" to={"/technology"}>
             TECHNOLOGY
          </Link>
        </h3>
        {/* <h3>
          <Link className="link" to={"/tech"}>
            TECH SPOTLIGHT
          </Link>
        </h3>
        <h3>
          <Link className="link" to={"/music"}>
            WHY MUSIC ?
          </Link>
        </h3> */}
      </div>
      <Link className="link-menu" to={"/sidebar"}>
        <div className="menu-icon">
          <MenuIcon sx={{ fontSize: 60 }} />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
