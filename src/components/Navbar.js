import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks] = useState(false);
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  );
}

export default Navbar;
