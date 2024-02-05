import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import transition from "../transition";

const Siderbar = () => {
  const [sidebar, setsidebar] = useState(false);
  const showSidebar = () => setsidebar(!sidebar);
  return (
    <div className="sidebar">
      <div className="sidebar-nav">
        <Link className="link-logo" to={"/"}>
          <h2>LOGO</h2>
        </Link>

        <Link className="link-logo" to={"/"}>
          <CloseIcon sx={{ fontSize: 60 }} />
        </Link>
      </div>
      <div className="sidebar-data">
        <h1>INTRODUCING FEED</h1>
        <h1>FEED APP</h1>
        <h1>MEET THE TEAM</h1>
        <h1>SCHEDULE THE MEETING</h1>
        <h1>SEE THE LIVE PROTOTYPE</h1>
      </div>
    </div>
  );
};

export default transition(Siderbar);
