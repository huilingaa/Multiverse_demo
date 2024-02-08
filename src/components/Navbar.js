import React from "react";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import transition from "../transition";
import { Diversity1 } from "@mui/icons-material";

const Navbar = (props) => {
  const { percent, active } = props;

  const divStyle = {
    width: `${percent}px`,
  };

  return (
    <div className="nav">
      <div className="logo">
        <div className="link-logo" onClick={props.onClick}>
          LOGO
          </div>
      </div>
      <div className="nav-items">
        <h3>
          <Link className="link" to={"/"} >
            INTRODUCTION
            <div class='pronav' style={{ display: active == 0 ? 'block' : 'none' }} >
              <div style={divStyle}></div>
            </div>
          </Link>
        </h3>
        <h3 >
          <Link className="link" to={"/technology"} onClick={props.onClick}>
            TECHNOLOGY
            <div class='pronav' style={{ display: active == 1 ? 'block' : 'none' }}> </div>
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

export default Navbar;
