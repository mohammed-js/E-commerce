import React from "react";
import chair from "../assets/chair.png";
import { Link } from "react-router-dom";
import payment from "../assets/payment.png";
import f from "../assets/f.png";
import i from "../assets/i.png";
import p from "../assets/p.png";
import y from "../assets/y.png";
import t from "../assets/t.png";
function Footer() {
  return (
    <>
      <hr />
      <div className="footer-top-container">
        <div className="footer-mid-container">
          <div className="chair-container">
            <img
              src={chair}
              style={{
                width: "30px",
                height: "30px",
                padding: "0 18px 0 18px",
              }}
              alt="chair"
            ></img>
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>Chairy</div>
          </div>
          <p className="chairy-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: "20px",
            }}
          >
            <Link>
              <img alt="" src={f} className="social-icons"></img>
            </Link>
            <Link>
              <img
                alt=""
                src={t}
                className="social-icons"
                style={{ width: "40px", height: "40px", padding: "0px" }}
              ></img>
            </Link>
            <Link>
              <img alt="" src={i} className="social-icons"></img>
            </Link>
            <Link>
              <img alt="" src={p} className="social-icons"></img>
            </Link>

            <Link>
              <img alt="" src={y} className="social-icons"></img>
            </Link>
          </div>
        </div>
        <div
          style={{
            width: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "5px",
            gap: "4px",
          }}
        >
          <p className="title">CATEGORY</p>
          <Link to="" className="btn">
            Sofa
          </Link>
          <Link to="" className="btn">
            Armchair
          </Link>
          <Link to="" className="btn">
            Wing Chair
          </Link>
          <Link to="" className="btn">
            Desk Chair
          </Link>
          <Link to="" className="btn">
            Wooden Chair
          </Link>
          <Link to="" className="btn">
            Park Bench
          </Link>
        </div>
        <div className="category-container">
          <p className="title">SUPPORT</p>
          <Link to="" className="btn">
            Help &amp; Support
          </Link>
          <Link to="" className="btn">
            Terms &amp; conditions
          </Link>
          <Link to="" className="btn">
            Privacy Policy
          </Link>
          <Link to="" className="btn">
            Help
          </Link>
        </div>
        <div className="newletter">
          <div className="title">NEWSLETTER</div>
          <div className="form-container">
            <input type="text" name="search" placeholder="Your Email"></input>
            <button className="subscribe">Subscribe</button>
          </div>

          <div className="newsletter-text" style={{ color: "#9A9CAA" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright-container">
        <div
          style={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          @2021 - Blogy - Designed & Develop by Zakirsoft
        </div>
        <Link
          to=""
          style={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <img alt="" src={payment} width="250px" height="80px"></img>
        </Link>
      </div>
    </>
  );
}

export default Footer;
