import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/burger-bar.png";
function Navbar() {
  return (
    <>
      <div className="nav-top-container">
        <div className="nav-container">
          <Link to="" className="btn navbar-btn">
            <img alt="link" src={icon} className="navbar-btn-img"></img>
            <div style={{ fontWeight: "bold" }}>All Categories</div>
          </Link>
          <div className="btn link">Shop</div>
          <div className="btn link">Products</div>
          <div className="btn link">Pages</div>
          <div className="btn link">About</div>
        </div>

        <div>
          Contact:&nbsp;
          <span style={{ fontWeight: "bold" }}>&#40;808&#41; 555-0111 </span>
        </div>
      </div>
      <hr style={{ paddiing: "0", margin: "0", width: "100%" }} />
    </>
  );
}

export default Navbar;
