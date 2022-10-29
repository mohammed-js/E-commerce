import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import icon1 from "../assets/burger-bar.png";
import icon2 from "../assets/close.png";

function Navbar() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="nav-top-container">
        <div className="nav-container">
          <Link
            to=""
            className="btn navbar-btn"
            onClick={() => {
              setOpen((prev) => !prev);
              if (open) {
                document.getElementById("dropdown-container").style.display =
                  "flex";
              } else {
                document.getElementById("dropdown-container").style.display =
                  "none";
              }
            }}
          >
            <img
              alt="link"
              src={open ? icon1 : icon2}
              className="navbar-btn-img"
            ></img>
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
