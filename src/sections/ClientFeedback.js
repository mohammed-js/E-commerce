import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import FeedBackCard from "../components/FeedBackCard";
import Slider from "react-slick";
import { dummyList } from "../utils/dummy";

function ClientFeedback() {
  const matches = useMediaQuery("(max-width:700px)");

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: matches ? 1 : 2,
    slidesToScroll: 1,
  };
  return (
    <div className="bottom-carousel card-section-container">
      <p className="card-section-title">What Clients Say About Us</p>
      <div className="card-section-inner-container">
        <Slider {...settings}>
          {dummyList.map((client, index) => (
            <FeedBackCard
              name={client.name}
              job={client.job}
              avatar={client.avatar}
              feedBack={client.feedBack}
              key={index}
            ></FeedBackCard>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ClientFeedback;
