import React from "react";
import comma from "../assets/comma.png";

function FeedBackCard({ name, job, feedBack, avatar }) {
  return (
    <div className="card-top-container">
      <div className="card-medium-container">
        <div className="feedback-container">{feedBack}</div>
        <div className="card-bottom-container">
          <img src={avatar} alt="Avatar" className="avatar"></img>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p className="client-name">{name}</p>
            <p className="client-job">{job}</p>
          </div>
          <div>
            <img alt="" src={comma} className="comma-img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedBackCard;
