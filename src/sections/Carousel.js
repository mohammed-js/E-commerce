import React from "react";
import Slider from "react-slick";
import CarouselItem from "../components/CarouselItem";
import mobile from "../assets/mobile.png";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container top-carousel">
      <Slider {...settings}>
        <CarouselItem imgUrl={mobile}></CarouselItem>
        <CarouselItem imgUrl={mobile}></CarouselItem>
        <CarouselItem imgUrl={mobile}></CarouselItem>
      </Slider>
    </div>
  );
}
