import React from "react";
import Slider from "react-slick";
import CustomCard from "./CustomCard";
import { timelinesData } from "../consts";
import "./Slider.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: false,
      infinite: true,
      autoplay:true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplaySpeed: 1000
  };
   return (
    <div className="slider">
      <Slider {...settings}>
        {/* {renderSlides()} */}
        {timelinesData.map(
          (
            { eventTime, eventSpan, eventTitle, eventData, colorPalet },
            index
          ) => {
            const cardProps = {
              eventTitle,
              eventData,
              colorPalet,
              eventTime,
              eventSpan
            };
            return <CustomCard {...cardProps} />;
          }
        )}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
