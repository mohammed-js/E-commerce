import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselItem({ imgUrl, display }) {
  return (
    <div>
      <div className="carousel-item-top-container">
        <p className="carousel-p-1">Welecome To Chairy</p>
        <p className="carousel-p-2">
          Best Furniture Collecetion For Your Interior.
        </p>
        <button className="subscribe carousel-btn">Shop Now &#8594;</button>
      </div>

      <div className="carousel-mid-container">
        <div className="carousel-low-container"></div>
        <img alt="item" src={imgUrl} className="carousel-img"></img>
        <div className="carousel-inner-container" display={display}>
          <p className="carousel-p-3">54%</p>
          <p className="carousel-p-4">discount</p>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
