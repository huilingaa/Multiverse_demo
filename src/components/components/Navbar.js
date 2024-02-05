import React from "react";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import transition from "../transition";
// import Ribbon from "./Ribbon";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <h2>
          <Link className="link-logo" to={"/"}>
            LOGO
          </Link>
        </h2>
      </div>
      <div className="nav-items">
        <h3>
          <Link className="link" to={"/"}>
            INTRODUCTION
          </Link>
        </h3>
        <h3>
          <Link className="link" to={"/technology"}>
            THE TECHNOLOGY
          </Link>
        </h3>
        <h3>
          <Link className="link" to={"/tech"}>
            TECH SPOTLIGHT
          </Link>
        </h3>
        <h3>
          <Link className="link" to={"/music"}>
            WHY MUSIC ?
          </Link>
        </h3>
      </div>
      <Link className="link-menu" to={"/sidebar"}>
        <div className="menu-icon">
          <MenuIcon sx={{ fontSize: 60 }} />
        </div>
      </Link>
    </div>
  );
};

export default transition(Navbar);
