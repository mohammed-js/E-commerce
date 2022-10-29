import React from "react";
import CIB from "../assets/CIB.png";
import Moz from "../assets/Moz.png";
import PandaDoc from "../assets/Panda.png";
import Pipedrive from "../assets/Pipedrive.png";
import Zapier from "../assets/zapier.png";
import z from "../assets/z.png";
import toast from "../assets/Toast.png";

function Sponsers() {
  return (
    <div className="imgContainer">
      <img
        src={Zapier}
        alt="CIB"
        style={{ width: "90px", height: "70px" }}
      ></img>
      <img
        src={Pipedrive}
        alt="CIB"
        style={{ width: "90px", height: "120px" }}
      ></img>
      <img
        src={CIB}
        alt="CIB"
        style={{ width: "110px", height: "150px" }}
      ></img>
      <img src={z} alt="CIB" style={{ width: "70px", height: "50px" }}></img>
      <img
        src={toast}
        alt="CIB"
        style={{ width: "90px", height: "70px" }}
      ></img>
      <img
        src={PandaDoc}
        alt=""
        style={{ width: "90px", height: "100px" }}
      ></img>
      <img src={Moz} alt="" style={{ width: "60px", height: "80px" }}></img>
    </div>
  );
}

export default Sponsers;
